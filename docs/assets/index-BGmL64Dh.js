(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function cw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jh={exports:{}},Pa={},Zh={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function hw(){if(qm)return ke;qm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Y={};function q(x,B,ue){this.props=x,this.context=B,this.refs=Y,this.updater=ue||j}q.prototype.isReactComponent={},q.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ye(){}ye.prototype=q.prototype;function de(x,B,ue){this.props=x,this.context=B,this.refs=Y,this.updater=ue||j}var fe=de.prototype=new ye;fe.constructor=de,K(fe,q.prototype),fe.isPureReactComponent=!0;var Se=Array.isArray,Be=Object.prototype.hasOwnProperty,Ce={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(x,B,ue){var Ae,ee={},pe=null,we=null;if(B!=null)for(Ae in B.ref!==void 0&&(we=B.ref),B.key!==void 0&&(pe=""+B.key),B)Be.call(B,Ae)&&!D.hasOwnProperty(Ae)&&(ee[Ae]=B[Ae]);var Re=arguments.length-2;if(Re===1)ee.children=ue;else if(1<Re){for(var Ue=Array(Re),et=0;et<Re;et++)Ue[et]=arguments[et+2];ee.children=Ue}if(x&&x.defaultProps)for(Ae in Re=x.defaultProps,Re)ee[Ae]===void 0&&(ee[Ae]=Re[Ae]);return{$$typeof:r,type:x,key:pe,ref:we,props:ee,_owner:Ce.current}}function R(x,B){return{$$typeof:r,type:x.type,key:B,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function V(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return B[ue]})}var O=/\/+/g;function S(x,B){return typeof x=="object"&&x!==null&&x.key!=null?V(""+x.key):B.toString(36)}function Ye(x,B,ue,Ae,ee){var pe=typeof x;(pe==="undefined"||pe==="boolean")&&(x=null);var we=!1;if(x===null)we=!0;else switch(pe){case"string":case"number":we=!0;break;case"object":switch(x.$$typeof){case r:case e:we=!0}}if(we)return we=x,ee=ee(we),x=Ae===""?"."+S(we,0):Ae,Se(ee)?(ue="",x!=null&&(ue=x.replace(O,"$&/")+"/"),Ye(ee,B,ue,"",function(et){return et})):ee!=null&&(k(ee)&&(ee=R(ee,ue+(!ee.key||we&&we.key===ee.key?"":(""+ee.key).replace(O,"$&/")+"/")+x)),B.push(ee)),1;if(we=0,Ae=Ae===""?".":Ae+":",Se(x))for(var Re=0;Re<x.length;Re++){pe=x[Re];var Ue=Ae+S(pe,Re);we+=Ye(pe,B,ue,Ue,ee)}else if(Ue=P(x),typeof Ue=="function")for(x=Ue.call(x),Re=0;!(pe=x.next()).done;)pe=pe.value,Ue=Ae+S(pe,Re++),we+=Ye(pe,B,ue,Ue,ee);else if(pe==="object")throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return we}function Ze(x,B,ue){if(x==null)return x;var Ae=[],ee=0;return Ye(x,Ae,"","",function(pe){return B.call(ue,pe,ee++)}),Ae}function ft(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var Ve={current:null},Z={transition:null},ce={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ce};function te(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Ze,forEach:function(x,B,ue){Ze(x,function(){B.apply(this,arguments)},ue)},count:function(x){var B=0;return Ze(x,function(){B++}),B},toArray:function(x){return Ze(x,function(B){return B})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ke.Component=q,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=de,ke.StrictMode=s,ke.Suspense=g,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ke.act=te,ke.cloneElement=function(x,B,ue){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ae=K({},x.props),ee=x.key,pe=x.ref,we=x._owner;if(B!=null){if(B.ref!==void 0&&(pe=B.ref,we=Ce.current),B.key!==void 0&&(ee=""+B.key),x.type&&x.type.defaultProps)var Re=x.type.defaultProps;for(Ue in B)Be.call(B,Ue)&&!D.hasOwnProperty(Ue)&&(Ae[Ue]=B[Ue]===void 0&&Re!==void 0?Re[Ue]:B[Ue])}var Ue=arguments.length-2;if(Ue===1)Ae.children=ue;else if(1<Ue){Re=Array(Ue);for(var et=0;et<Ue;et++)Re[et]=arguments[et+2];Ae.children=Re}return{$$typeof:r,type:x.type,key:ee,ref:pe,props:Ae,_owner:we}},ke.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},ke.createElement=I,ke.createFactory=function(x){var B=I.bind(null,x);return B.type=x,B},ke.createRef=function(){return{current:null}},ke.forwardRef=function(x){return{$$typeof:m,render:x}},ke.isValidElement=k,ke.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:ft}},ke.memo=function(x,B){return{$$typeof:v,type:x,compare:B===void 0?null:B}},ke.startTransition=function(x){var B=Z.transition;Z.transition={};try{x()}finally{Z.transition=B}},ke.unstable_act=te,ke.useCallback=function(x,B){return Ve.current.useCallback(x,B)},ke.useContext=function(x){return Ve.current.useContext(x)},ke.useDebugValue=function(){},ke.useDeferredValue=function(x){return Ve.current.useDeferredValue(x)},ke.useEffect=function(x,B){return Ve.current.useEffect(x,B)},ke.useId=function(){return Ve.current.useId()},ke.useImperativeHandle=function(x,B,ue){return Ve.current.useImperativeHandle(x,B,ue)},ke.useInsertionEffect=function(x,B){return Ve.current.useInsertionEffect(x,B)},ke.useLayoutEffect=function(x,B){return Ve.current.useLayoutEffect(x,B)},ke.useMemo=function(x,B){return Ve.current.useMemo(x,B)},ke.useReducer=function(x,B,ue){return Ve.current.useReducer(x,B,ue)},ke.useRef=function(x){return Ve.current.useRef(x)},ke.useState=function(x){return Ve.current.useState(x)},ke.useSyncExternalStore=function(x,B,ue){return Ve.current.useSyncExternalStore(x,B,ue)},ke.useTransition=function(){return Ve.current.useTransition()},ke.version="18.3.1",ke}var Hm;function Ud(){return Hm||(Hm=1,Zh.exports=hw()),Zh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function dw(){if(Wm)return Pa;Wm=1;var r=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,A={},P=null,j=null;v!==void 0&&(P=""+v),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(A[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:m,key:P,ref:j,props:A,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=h,Pa.jsxs=h,Pa}var Gm;function fw(){return Gm||(Gm=1,Jh.exports=dw()),Jh.exports}var H=fw(),ze=Ud();const pw=cw(ze);var Au={},ed={exports:{}},Zt={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function mw(){return Km||(Km=1,(function(r){function e(Z,ce){var te=Z.length;Z.push(ce);e:for(;0<te;){var x=te-1>>>1,B=Z[x];if(0<o(B,ce))Z[x]=ce,Z[te]=B,te=x;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],te=Z.pop();if(te!==ce){Z[0]=te;e:for(var x=0,B=Z.length,ue=B>>>1;x<ue;){var Ae=2*(x+1)-1,ee=Z[Ae],pe=Ae+1,we=Z[pe];if(0>o(ee,te))pe<B&&0>o(we,ee)?(Z[x]=we,Z[pe]=te,x=pe):(Z[x]=ee,Z[Ae]=te,x=Ae);else if(pe<B&&0>o(we,te))Z[x]=we,Z[pe]=te,x=pe;else break e}}return ce}function o(Z,ce){var te=Z.sortIndex-ce.sortIndex;return te!==0?te:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,A=null,P=3,j=!1,K=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function fe(Z){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=Z)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function Se(Z){if(Y=!1,fe(Z),!K)if(t(g)!==null)K=!0,ft(Be);else{var ce=t(v);ce!==null&&Ve(Se,ce.startTime-Z)}}function Be(Z,ce){K=!1,Y&&(Y=!1,ye(I),I=-1),j=!0;var te=P;try{for(fe(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||Z&&!V());){var x=A.callback;if(typeof x=="function"){A.callback=null,P=A.priorityLevel;var B=x(A.expirationTime<=ce);ce=r.unstable_now(),typeof B=="function"?A.callback=B:A===t(g)&&s(g),fe(ce)}else s(g);A=t(g)}if(A!==null)var ue=!0;else{var Ae=t(v);Ae!==null&&Ve(Se,Ae.startTime-ce),ue=!1}return ue}finally{A=null,P=te,j=!1}}var Ce=!1,D=null,I=-1,R=5,k=-1;function V(){return!(r.unstable_now()-k<R)}function O(){if(D!==null){var Z=r.unstable_now();k=Z;var ce=!0;try{ce=D(!0,Z)}finally{ce?S():(Ce=!1,D=null)}}else Ce=!1}var S;if(typeof de=="function")S=function(){de(O)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ze=Ye.port2;Ye.port1.onmessage=O,S=function(){Ze.postMessage(null)}}else S=function(){q(O,0)};function ft(Z){D=Z,Ce||(Ce=!0,S())}function Ve(Z,ce){I=q(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){K||j||(K=!0,ft(Be))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(P){case 1:case 2:case 3:var ce=3;break;default:ce=P}var te=P;P=ce;try{return Z()}finally{P=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=P;P=Z;try{return ce()}finally{P=te}},r.unstable_scheduleCallback=function(Z,ce,te){var x=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?x+te:x):te=x,Z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=te+B,Z={id:w++,callback:ce,priorityLevel:Z,startTime:te,expirationTime:B,sortIndex:-1},te>x?(Z.sortIndex=te,e(v,Z),t(g)===null&&Z===t(v)&&(Y?(ye(I),I=-1):Y=!0,Ve(Se,te-x))):(Z.sortIndex=B,e(g,Z),K||j||(K=!0,ft(Be))),Z},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Z){var ce=P;return function(){var te=P;P=ce;try{return Z.apply(this,arguments)}finally{P=te}}}})(nd)),nd}var Qm;function gw(){return Qm||(Qm=1,td.exports=mw()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function yw(){if(Ym)return Zt;Ym=1;var r=Ud(),e=gw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function P(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,p,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];q[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ye,de);q[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ye,de);q[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ye,de);q[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function fe(n,i,a,c){var d=q.hasOwnProperty(i)?q[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(K(i,a,d,c)&&(a=null),c||d===null?P(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Se=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,x;function B(n){if(x===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+n}var ue=!1;function Ae(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function ee(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ce:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Ye:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ze:return i=n.displayName||null,i!==null?i:pe(n.type)||"Memo";case ft:i=n._payload,n=n._init;try{return pe(n(i))}catch{}}return null}function we(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lr(n){n._valueTracker||(n._valueTracker=et(n))}function ys(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Mr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ci(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _s(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Re(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Oo(n,i){i=i.checked,i!=null&&fe(n,"checked",i,!1)}function Lo(n,i){Oo(n,i);var a=Re(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vs(n,i.type,a):i.hasOwnProperty("defaultValue")&&vs(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function cl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function vs(n,i,a){(i!=="number"||Mr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ur=Array.isArray;function cr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Mo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Es(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ur(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Re(a)}}function ws(n,i){var a=Re(i.value),c=Re(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function bo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hr,Fo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=hr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function br(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(n){ki.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Pi[i]=Pi[n]})});function Uo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Pi.hasOwnProperty(n)&&Pi[n]?(""+i).trim():i+"px"}function jo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Uo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var zo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(n,i){if(i){if(zo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $o(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function Ts(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Is=null,cn=null,Bn=null;function Ss(n){if(n=fa(n)){if(typeof Is!="function")throw Error(t(280));var i=n.stateNode;i&&(i=jl(i),Is(n.stateNode,n.type,i))}}function $n(n){cn?Bn?Bn.push(n):Bn=[n]:cn=n}function qo(){if(cn){var n=cn,i=Bn;if(Bn=cn=null,Ss(n),i)for(n=0;n<i.length;n++)Ss(i[n])}}function Di(n,i){return n(i)}function Ho(){}var dr=!1;function Wo(n,i,a){if(dr)return n(i,a);dr=!0;try{return Di(n,i,a)}finally{dr=!1,(cn!==null||Bn!==null)&&(Ho(),qo())}}function st(n,i){var a=n.stateNode;if(a===null)return null;var c=jl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var As=!1;if(m)try{var In={};Object.defineProperty(In,"passive",{get:function(){As=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{As=!1}function Vi(n,i,a,c,d,p,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var xi=!1,Rs=null,Sn=!1,Go=null,Rc={onError:function(n){xi=!0,Rs=n}};function Cs(n,i,a,c,d,p,_,T,C){xi=!1,Rs=null,Vi.apply(Rc,arguments)}function hl(n,i,a,c,d,p,_,T,C){if(Cs.apply(this,arguments),xi){if(xi){var F=Rs;xi=!1,Rs=null}else throw Error(t(198));Sn||(Sn=!0,Go=F)}}function An(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Oi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Rn(n){if(An(n)!==n)throw Error(t(188))}function dl(n){var i=n.alternate;if(!i){if(i=An(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Rn(d),n;if(p===c)return Rn(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ko(n){return n=dl(n),n!==null?Ps(n):null}function Ps(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ps(n);if(i!==null)return i;n=n.sibling}return null}var ks=e.unstable_scheduleCallback,Qo=e.unstable_cancelCallback,fl=e.unstable_shouldYield,Cc=e.unstable_requestPaint,qe=e.unstable_now,pl=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,Fr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,ml=e.unstable_IdlePriority,Mi=null,tn=null;function gl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:_l,Xo=Math.log,yl=Math.LN2;function _l(n){return n>>>=0,n===0?32:31-(Xo(n)/yl|0)|0}var Ns=64,Ds=4194304;function Ur(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Ur(T):(p&=_,p!==0&&(c=Ur(p)))}else _=a&~d,_!==0?c=Ur(_):p!==0&&(c=Ur(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Pc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Bt(p),T=1<<_,C=d[_];C===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Pc(T,i)):C<=i&&(n.expiredLanes|=T),p&=~T}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fi(){var n=Ns;return Ns<<=1,(Ns&4194240)===0&&(Ns=64),n}function jr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function zr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function $e(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Br(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var xe=0;function $r(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vl,Vs,El,wl,Tl,Jo=!1,qn=[],Ct=null,Cn=null,Pn=null,qr=new Map,dn=new Map,Hn=[],kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(n,i){switch(n){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":qr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function Wt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=fa(i),i!==null&&Vs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Nc(n,i,a,c,d){switch(i){case"focusin":return Ct=Wt(Ct,n,i,a,c,d),!0;case"dragenter":return Cn=Wt(Cn,n,i,a,c,d),!0;case"mouseover":return Pn=Wt(Pn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return qr.set(p,Wt(qr.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,Wt(dn.get(p)||null,n,i,a,c,d)),!0}return!1}function Sl(n){var i=$i(n.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=Oi(a),i!==null){n.blockedOn=i,Tl(n.priority,function(){El(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ni=c,a.target.dispatchEvent(c),Ni=null}else return i=fa(a),i!==null&&Vs(i),n.blockedOn=a,!1;i.shift()}return!0}function Ui(n,i,a){pr(n)&&a.delete(i)}function Al(){Jo=!1,Ct!==null&&pr(Ct)&&(Ct=null),Cn!==null&&pr(Cn)&&(Cn=null),Pn!==null&&pr(Pn)&&(Pn=null),qr.forEach(Ui),dn.forEach(Ui)}function kn(n,i){n.blockedOn===i&&(n.blockedOn=null,Jo||(Jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Al)))}function Nn(n){function i(d){return kn(d,n)}if(0<qn.length){kn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ct!==null&&kn(Ct,n),Cn!==null&&kn(Cn,n),Pn!==null&&kn(Pn,n),qr.forEach(i),dn.forEach(i),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)Sl(a),a.blockedOn===null&&Hn.shift()}var mr=Se.ReactCurrentBatchConfig,Hr=!0;function Xe(n,i,a,c){var d=xe,p=mr.transition;mr.transition=null;try{xe=1,Zo(n,i,a,c)}finally{xe=d,mr.transition=p}}function Dc(n,i,a,c){var d=xe,p=mr.transition;mr.transition=null;try{xe=4,Zo(n,i,a,c)}finally{xe=d,mr.transition=p}}function Zo(n,i,a,c){if(Hr){var d=xs(n,i,a,c);if(d===null)Bc(n,i,c,ji,a),Il(n,c);else if(Nc(d,n,i,a,c))c.stopPropagation();else if(Il(n,c),i&4&&-1<kc.indexOf(n)){for(;d!==null;){var p=fa(d);if(p!==null&&vl(p),p=xs(n,i,a,c),p===null&&Bc(n,i,c,ji,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Bc(n,i,c,null,a)}}var ji=null;function xs(n,i,a,c){if(ji=null,n=Ts(c),n=$i(n),n!==null)if(i=An(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Oi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ji=n,null}function ea(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pl()){case Li:return 1;case Fr:return 4;case hn:case Yo:return 16;case ml:return 536870912;default:return 16}default:return 16}}var rn=null,Os=null,Gt=null;function ta(){if(Gt)return Gt;var n,i=Os,a=i.length,c,d="value"in rn?rn.value:rn.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[p-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Ls(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function na(){return!1}function Pt(n){function i(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wn:na,this.isPropagationStopped=na,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ms=Pt(Dn),Gn=te({},Dn,{view:0,detail:0}),Vc=Pt(Gn),bs,gr,Wr,zi=te({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(bs=n.screenX-Wr.screenX,gr=n.screenY-Wr.screenY):gr=bs=0,Wr=n),bs)},movementY:function(n){return"movementY"in n?n.movementY:gr}}),Fs=Pt(zi),ra=te({},zi,{dataTransfer:0}),Rl=Pt(ra),Us=te({},Gn,{relatedTarget:0}),js=Pt(Us),Cl=te({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),yr=Pt(Cl),Pl=te({},Dn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kl=Pt(Pl),Nl=te({},Dn,{data:0}),ia=Pt(Nl),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Dl[n])?!!i[n]:!1}function Kn(){return Vl}var l=te({},Gn,{key:function(n){if(n.key){var i=zs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ls(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?Ls(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ls(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Pt(l),y=te({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Pt(y),L=te({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),U=Pt(L),J=te({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Pt(J),gt=te({},zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Pt(gt),Tt=[9,13,27,32],lt=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var sn=m&&"TextEvent"in window&&!fn,Bi=m&&(!lt||fn&&8<fn&&11>=fn),Bs=" ",Ff=!1;function Uf(n,i){switch(n){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function aE(n,i){switch(n){case"compositionend":return jf(i);case"keypress":return i.which!==32?null:(Ff=!0,Bs);case"textInput":return n=i.data,n===Bs&&Ff?null:n;default:return null}}function lE(n,i){if($s)return n==="compositionend"||!lt&&Uf(n,i)?(n=ta(),Gt=Os=rn=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bi&&i.locale!=="ko"?null:i.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!uE[n.type]:i==="textarea"}function Bf(n,i,a,c){$n(c),i=bl(i,"onChange"),0<i.length&&(a=new Ms("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var sa=null,oa=null;function cE(n){op(n,0)}function xl(n){var i=Ks(n);if(ys(i))return n}function hE(n,i){if(n==="change")return i}var $f=!1;if(m){var xc;if(m){var Oc="oninput"in document;if(!Oc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Oc=typeof qf.oninput=="function"}xc=Oc}else xc=!1;$f=xc&&(!document.documentMode||9<document.documentMode)}function Hf(){sa&&(sa.detachEvent("onpropertychange",Wf),oa=sa=null)}function Wf(n){if(n.propertyName==="value"&&xl(oa)){var i=[];Bf(i,oa,n,Ts(n)),Wo(cE,i)}}function dE(n,i,a){n==="focusin"?(Hf(),sa=i,oa=a,sa.attachEvent("onpropertychange",Wf)):n==="focusout"&&Hf()}function fE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(oa)}function pE(n,i){if(n==="click")return xl(i)}function mE(n,i){if(n==="input"||n==="change")return xl(i)}function gE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Vn=typeof Object.is=="function"?Object.is:gE;function aa(n,i){if(Vn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Vn(n[d],i[d]))return!1}return!0}function Gf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kf(n,i){var a=Gf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gf(a)}}function Qf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Yf(){for(var n=window,i=Mr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Mr(n.document)}return i}function Lc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function yE(n){var i=Yf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Qf(a.ownerDocument.documentElement,a)){if(c!==null&&Lc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Kf(a,p);var _=Kf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _E=m&&"documentMode"in document&&11>=document.documentMode,qs=null,Mc=null,la=null,bc=!1;function Xf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||qs==null||qs!==Mr(c)||(c=qs,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),la&&aa(la,c)||(la=c,c=bl(Mc,"onSelect"),0<c.length&&(i=new Ms("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=qs)))}function Ol(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Hs={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},Fc={},Jf={};m&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Ll(n){if(Fc[n])return Fc[n];if(!Hs[n])return n;var i=Hs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Jf)return Fc[n]=i[a];return n}var Zf=Ll("animationend"),ep=Ll("animationiteration"),tp=Ll("animationstart"),np=Ll("transitionend"),rp=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,i){rp.set(n,i),u(i,[n])}for(var Uc=0;Uc<ip.length;Uc++){var jc=ip[Uc],vE=jc.toLowerCase(),EE=jc[0].toUpperCase()+jc.slice(1);Gr(vE,"on"+EE)}Gr(Zf,"onAnimationEnd"),Gr(ep,"onAnimationIteration"),Gr(tp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(np,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function sp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,hl(c,i,void 0,n),n.currentTarget=null}function op(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var _=c.length-1;0<=_;_--){var T=c[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;sp(d,T,F),p=C}else for(_=0;_<c.length;_++){if(T=c[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;sp(d,T,F),p=C}}}if(Sn)throw n=Go,Sn=!1,Go=null,n}function Ge(n,i){var a=i[Kc];a===void 0&&(a=i[Kc]=new Set);var c=n+"__bubble";a.has(c)||(ap(i,n,2,!1),a.add(c))}function zc(n,i,a){var c=0;i&&(c|=4),ap(a,n,c,i)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(wE.has(a)||zc(a,!1,n),zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ml]||(i[Ml]=!0,zc("selectionchange",!1,i))}}function ap(n,i,a,c){switch(ea(i)){case 1:var d=Xe;break;case 4:d=Dc;break;default:d=Zo}a=d.bind(null,i,a,n),d=void 0,!As||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Bc(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;T!==null;){if(_=$i(T),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Wo(function(){var F=p,G=Ts(a),Q=[];e:{var W=rp.get(n);if(W!==void 0){var ne=Ms,oe=n;switch(n){case"keypress":if(Ls(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":oe="focus",ne=js;break;case"focusout":oe="blur",ne=js;break;case"beforeblur":case"afterblur":ne=js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Fs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=U;break;case Zf:case ep:case tp:ne=yr;break;case np:ne=je;break;case"scroll":ne=Vc;break;case"wheel":ne=Oe;break;case"copy":case"cut":case"paste":ne=kl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var ae=(i&4)!==0,ot=!ae&&n==="scroll",M=ae?W!==null?W+"Capture":null:W;ae=[];for(var N=F,b;N!==null;){b=N;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=st(N,M),X!=null&&ae.push(ha(N,X,b)))),ot)break;N=N.return}0<ae.length&&(W=new ne(W,oe,null,a,G),Q.push({event:W,listeners:ae}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",W&&a!==Ni&&(oe=a.relatedTarget||a.fromElement)&&($i(oe)||oe[_r]))break e;if((ne||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=F,oe=oe?$i(oe):null,oe!==null&&(ot=An(oe),oe!==ot||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=F),ne!==oe)){if(ae=Fs,X="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,X="onPointerLeave",M="onPointerEnter",N="pointer"),ot=ne==null?W:Ks(ne),b=oe==null?W:Ks(oe),W=new ae(X,N+"leave",ne,a,G),W.target=ot,W.relatedTarget=b,X=null,$i(G)===F&&(ae=new ae(M,N+"enter",oe,a,G),ae.target=b,ae.relatedTarget=ot,X=ae),ot=X,ne&&oe)t:{for(ae=ne,M=oe,N=0,b=ae;b;b=Ws(b))N++;for(b=0,X=M;X;X=Ws(X))b++;for(;0<N-b;)ae=Ws(ae),N--;for(;0<b-N;)M=Ws(M),b--;for(;N--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Ws(ae),M=Ws(M)}ae=null}else ae=null;ne!==null&&lp(Q,W,ne,ae,!1),oe!==null&&ot!==null&&lp(Q,ot,oe,ae,!0)}}e:{if(W=F?Ks(F):window,ne=W.nodeName&&W.nodeName.toLowerCase(),ne==="select"||ne==="input"&&W.type==="file")var le=hE;else if(zf(W))if($f)le=mE;else{le=fE;var me=dE}else(ne=W.nodeName)&&ne.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(le=pE);if(le&&(le=le(n,F))){Bf(Q,le,a,G);break e}me&&me(n,W,F),n==="focusout"&&(me=W._wrapperState)&&me.controlled&&W.type==="number"&&vs(W,"number",W.value)}switch(me=F?Ks(F):window,n){case"focusin":(zf(me)||me.contentEditable==="true")&&(qs=me,Mc=F,la=null);break;case"focusout":la=Mc=qs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Xf(Q,a,G);break;case"selectionchange":if(_E)break;case"keydown":case"keyup":Xf(Q,a,G)}var ge;if(lt)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else $s?Uf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Bi&&a.locale!=="ko"&&($s||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&$s&&(ge=ta()):(rn=G,Os="value"in rn?rn.value:rn.textContent,$s=!0)),me=bl(F,Ee),0<me.length&&(Ee=new ia(Ee,n,null,a,G),Q.push({event:Ee,listeners:me}),ge?Ee.data=ge:(ge=jf(a),ge!==null&&(Ee.data=ge)))),(ge=sn?aE(n,a):lE(n,a))&&(F=bl(F,"onBeforeInput"),0<F.length&&(G=new ia("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=ge))}op(Q,i)})}function ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=st(n,a),p!=null&&c.unshift(ha(n,p,d)),p=st(n,i),p!=null&&c.push(ha(n,p,d))),n=n.return}return c}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,i,a,c,d){for(var p=i._reactName,_=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=st(a,p),C!=null&&_.unshift(ha(a,C,T))):d||(C=st(a,p),C!=null&&_.push(ha(a,C,T)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var TE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function up(n){return(typeof n=="string"?n:""+n).replace(TE,`
`).replace(IE,"")}function Fl(n,i,a){if(i=up(i),up(n)!==i&&a)throw Error(t(425))}function Ul(){}var $c=null,qc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(n){return cp.resolve(null).then(n).catch(RE)}:Wc;function RE(n){setTimeout(function(){throw n})}function Gc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Nn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Nn(i)}function Kr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function hp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Gs,da="__reactProps$"+Gs,_r="__reactContainer$"+Gs,Kc="__reactEvents$"+Gs,CE="__reactListeners$"+Gs,PE="__reactHandles$"+Gs;function $i(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[_r]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=hp(n);n!==null;){if(a=n[Qn])return a;n=hp(n)}return i}n=a,a=n.parentNode}return null}function fa(n){return n=n[Qn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function jl(n){return n[da]||null}var Qc=[],Qs=-1;function Qr(n){return{current:n}}function Ke(n){0>Qs||(n.current=Qc[Qs],Qc[Qs]=null,Qs--)}function He(n,i){Qs++,Qc[Qs]=n.current,n.current=i}var Yr={},Ot=Qr(Yr),Kt=Qr(!1),qi=Yr;function Ys(n,i){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function zl(){Ke(Kt),Ke(Ot)}function dp(n,i,a){if(Ot.current!==Yr)throw Error(t(168));He(Ot,i),He(Kt,a)}function fp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,we(n)||"Unknown",d));return te({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,qi=Ot.current,He(Ot,n),He(Kt,Kt.current),!0}function pp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=fp(n,i,qi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Kt),Ke(Ot),He(Ot,n)):Ke(Kt),He(Kt,a)}var vr=null,$l=!1,Yc=!1;function mp(n){vr===null?vr=[n]:vr.push(n)}function kE(n){$l=!0,mp(n)}function Xr(){if(!Yc&&vr!==null){Yc=!0;var n=0,i=xe;try{var a=vr;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,$l=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),ks(Li,Xr),d}finally{xe=i,Yc=!1}}return null}var Xs=[],Js=0,ql=null,Hl=0,pn=[],mn=0,Hi=null,Er=1,wr="";function Wi(n,i){Xs[Js++]=Hl,Xs[Js++]=ql,ql=n,Hl=i}function gp(n,i,a){pn[mn++]=Er,pn[mn++]=wr,pn[mn++]=Hi,Hi=n;var c=Er;n=wr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var p=32-Bt(i)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Er=1<<32-Bt(i)+d|a<<d|c,wr=p+n}else Er=1<<p|a<<d|c,wr=n}function Xc(n){n.return!==null&&(Wi(n,1),gp(n,1,0))}function Jc(n){for(;n===ql;)ql=Xs[--Js],Xs[Js]=null,Hl=Xs[--Js],Xs[Js]=null;for(;n===Hi;)Hi=pn[--mn],pn[mn]=null,wr=pn[--mn],pn[mn]=null,Er=pn[--mn],pn[mn]=null}var on=null,an=null,Je=!1,xn=null;function yp(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function _p(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Kr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eh(n){if(Je){var i=an;if(i){var a=i;if(!_p(n,i)){if(Zc(n))throw Error(t(418));i=Kr(a.nextSibling);var c=on;i&&_p(n,i)?yp(c,a):(n.flags=n.flags&-4097|2,Je=!1,on=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,on=n}}}function vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Wl(n){if(n!==on)return!1;if(!Je)return vp(n),Je=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=an)){if(Zc(n))throw Ep(),Error(t(418));for(;i;)yp(n,i),i=Kr(i.nextSibling)}if(vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Kr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Kr(n.stateNode.nextSibling):null;return!0}function Ep(){for(var n=an;n;)n=Kr(n.nextSibling)}function Zs(){an=on=null,Je=!1}function th(n){xn===null?xn=[n]:xn.push(n)}var NE=Se.ReactCurrentBatchConfig;function pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wp(n){var i=n._init;return i(n._payload)}function Tp(n){function i(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)i(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=si(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,X){return N===null||N.tag!==6?(N=Wh(b,M.mode,X),N.return=M,N):(N=d(N,b),N.return=M,N)}function C(M,N,b,X){var le=b.type;return le===D?G(M,N,b.props.children,X,b.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ft&&wp(le)===N.type)?(X=d(N,b.props),X.ref=pa(M,N,b),X.return=M,X):(X=yu(b.type,b.key,b.props,null,M.mode,X),X.ref=pa(M,N,b),X.return=M,X)}function F(M,N,b,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Gh(b,M.mode,X),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function G(M,N,b,X,le){return N===null||N.tag!==7?(N=es(b,M.mode,X,le),N.return=M,N):(N=d(N,b),N.return=M,N)}function Q(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Wh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Be:return b=yu(N.type,N.key,N.props,null,M.mode,b),b.ref=pa(M,null,N),b.return=M,b;case Ce:return N=Gh(N,M.mode,b),N.return=M,N;case ft:var X=N._init;return Q(M,X(N._payload),b)}if(ur(N)||ce(N))return N=es(N,M.mode,b,null),N.return=M,N;Gl(M,N)}return null}function W(M,N,b,X){var le=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,N,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Be:return b.key===le?C(M,N,b,X):null;case Ce:return b.key===le?F(M,N,b,X):null;case ft:return le=b._init,W(M,N,le(b._payload),X)}if(ur(b)||ce(b))return le!==null?null:G(M,N,b,X,null);Gl(M,b)}return null}function ne(M,N,b,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(N,M,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Be:return M=M.get(X.key===null?b:X.key)||null,C(N,M,X,le);case Ce:return M=M.get(X.key===null?b:X.key)||null,F(N,M,X,le);case ft:var me=X._init;return ne(M,N,b,me(X._payload),le)}if(ur(X)||ce(X))return M=M.get(b)||null,G(N,M,X,le,null);Gl(N,X)}return null}function oe(M,N,b,X){for(var le=null,me=null,ge=N,Ee=N=0,At=null;ge!==null&&Ee<b.length;Ee++){ge.index>Ee?(At=ge,ge=null):At=ge.sibling;var be=W(M,ge,b[Ee],X);if(be===null){ge===null&&(ge=At);break}n&&ge&&be.alternate===null&&i(M,ge),N=p(be,N,Ee),me===null?le=be:me.sibling=be,me=be,ge=At}if(Ee===b.length)return a(M,ge),Je&&Wi(M,Ee),le;if(ge===null){for(;Ee<b.length;Ee++)ge=Q(M,b[Ee],X),ge!==null&&(N=p(ge,N,Ee),me===null?le=ge:me.sibling=ge,me=ge);return Je&&Wi(M,Ee),le}for(ge=c(M,ge);Ee<b.length;Ee++)At=ne(ge,M,Ee,b[Ee],X),At!==null&&(n&&At.alternate!==null&&ge.delete(At.key===null?Ee:At.key),N=p(At,N,Ee),me===null?le=At:me.sibling=At,me=At);return n&&ge.forEach(function(oi){return i(M,oi)}),Je&&Wi(M,Ee),le}function ae(M,N,b,X){var le=ce(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var me=le=null,ge=N,Ee=N=0,At=null,be=b.next();ge!==null&&!be.done;Ee++,be=b.next()){ge.index>Ee?(At=ge,ge=null):At=ge.sibling;var oi=W(M,ge,be.value,X);if(oi===null){ge===null&&(ge=At);break}n&&ge&&oi.alternate===null&&i(M,ge),N=p(oi,N,Ee),me===null?le=oi:me.sibling=oi,me=oi,ge=At}if(be.done)return a(M,ge),Je&&Wi(M,Ee),le;if(ge===null){for(;!be.done;Ee++,be=b.next())be=Q(M,be.value,X),be!==null&&(N=p(be,N,Ee),me===null?le=be:me.sibling=be,me=be);return Je&&Wi(M,Ee),le}for(ge=c(M,ge);!be.done;Ee++,be=b.next())be=ne(ge,M,Ee,be.value,X),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?Ee:be.key),N=p(be,N,Ee),me===null?le=be:me.sibling=be,me=be);return n&&ge.forEach(function(uw){return i(M,uw)}),Je&&Wi(M,Ee),le}function ot(M,N,b,X){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Be:e:{for(var le=b.key,me=N;me!==null;){if(me.key===le){if(le=b.type,le===D){if(me.tag===7){a(M,me.sibling),N=d(me,b.props.children),N.return=M,M=N;break e}}else if(me.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ft&&wp(le)===me.type){a(M,me.sibling),N=d(me,b.props),N.ref=pa(M,me,b),N.return=M,M=N;break e}a(M,me);break}else i(M,me);me=me.sibling}b.type===D?(N=es(b.props.children,M.mode,X,b.key),N.return=M,M=N):(X=yu(b.type,b.key,b.props,null,M.mode,X),X.ref=pa(M,N,b),X.return=M,M=X)}return _(M);case Ce:e:{for(me=b.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else i(M,N);N=N.sibling}N=Gh(b,M.mode,X),N.return=M,M=N}return _(M);case ft:return me=b._init,ot(M,N,me(b._payload),X)}if(ur(b))return oe(M,N,b,X);if(ce(b))return ae(M,N,b,X);Gl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Wh(b,M.mode,X),N.return=M,M=N),_(M)):a(M,N)}return ot}var eo=Tp(!0),Ip=Tp(!1),Kl=Qr(null),Ql=null,to=null,nh=null;function rh(){nh=to=Ql=null}function ih(n){var i=Kl.current;Ke(Kl),n._currentValue=i}function sh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function no(n,i){Ql=n,nh=to=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(nh!==n)if(n={context:n,memoizedValue:i,next:null},to===null){if(Ql===null)throw Error(t(308));to=n,Ql.dependencies={lanes:0,firstContext:n}}else to=to.next=n;return i}var Gi=null;function oh(n){Gi===null?Gi=[n]:Gi.push(n)}function Sp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,oh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Tr(n,c)}function Tr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Zr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Tr(n,a)}return d=c.interleaved,d===null?(i.next=i,oh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Tr(n,a)}function Yl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Br(n,a)}}function Rp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xl(n,i,a,c){var d=n.updateQueue;Jr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?p=F:_.next=F,_=C;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==_&&(T===null?G.firstBaseUpdate=F:T.next=F,G.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;_=0,G=F=C=null,T=p;do{var W=T.lane,ne=T.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:ne,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(W=i,ne=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(ne,Q,W);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,W=typeof oe=="function"?oe.call(ne,Q,W):oe,W==null)break e;Q=te({},Q,W);break e;case 2:Jr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else ne={eventTime:ne,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(F=G=ne,C=Q):G=G.next=ne,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Yi|=_,n.lanes=_,n.memoizedState=Q}}function Cp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ma={},Yn=Qr(ma),ga=Qr(ma),ya=Qr(ma);function Ki(n){if(n===ma)throw Error(t(174));return n}function lh(n,i){switch(He(ya,i),He(ga,n),He(Yn,ma),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:mt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=mt(i,n)}Ke(Yn),He(Yn,i)}function ro(){Ke(Yn),Ke(ga),Ke(ya)}function Pp(n){Ki(ya.current);var i=Ki(Yn.current),a=mt(i,n.type);i!==a&&(He(ga,n),He(Yn,a))}function uh(n){ga.current===n&&(Ke(Yn),Ke(ga))}var tt=Qr(0);function Jl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ch=[];function hh(){for(var n=0;n<ch.length;n++)ch[n]._workInProgressVersionPrimary=null;ch.length=0}var Zl=Se.ReactCurrentDispatcher,dh=Se.ReactCurrentBatchConfig,Qi=0,nt=null,yt=null,It=null,eu=!1,_a=!1,va=0,DE=0;function Lt(){throw Error(t(321))}function fh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Vn(n[a],i[a]))return!1;return!0}function ph(n,i,a,c,d,p){if(Qi=p,nt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zl.current=n===null||n.memoizedState===null?LE:ME,n=a(c,d),_a){p=0;do{if(_a=!1,va=0,25<=p)throw Error(t(301));p+=1,It=yt=null,i.updateQueue=null,Zl.current=bE,n=a(c,d)}while(_a)}if(Zl.current=ru,i=yt!==null&&yt.next!==null,Qi=0,It=yt=nt=null,eu=!1,i)throw Error(t(300));return n}function mh(){var n=va!==0;return va=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?nt.memoizedState=It=n:It=It.next=n,It}function yn(){if(yt===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var i=It===null?nt.memoizedState:It.next;if(i!==null)It=i,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},It===null?nt.memoizedState=It=n:It=It.next=n}return It}function Ea(n,i){return typeof i=="function"?i(n):i}function gh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,C=null,F=p;do{var G=F.lane;if((Qi&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,_=c):C=C.next=Q,nt.lanes|=G,Yi|=G}F=F.next}while(F!==null&&F!==p);C===null?_=c:C.next=T,Vn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,nt.lanes|=p,Yi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function yh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Vn(p,i.memoizedState)||(Yt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function kp(){}function Np(n,i){var a=nt,c=yn(),d=i(),p=!Vn(c.memoizedState,d);if(p&&(c.memoizedState=d,Yt=!0),c=c.queue,_h(xp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,wa(9,Vp.bind(null,a,c,d,i),void 0,null),St===null)throw Error(t(349));(Qi&30)!==0||Dp(a,i,d)}return d}function Dp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Vp(n,i,a,c){i.value=a,i.getSnapshot=c,Op(i)&&Lp(n)}function xp(n,i,a){return a(function(){Op(i)&&Lp(n)})}function Op(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Vn(n,a)}catch{return!0}}function Lp(n){var i=Tr(n,1);i!==null&&bn(i,n,1,-1)}function Mp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i.queue=n,n=n.dispatch=OE.bind(null,nt,n),[i.memoizedState,n]}function wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=nt.updateQueue,i===null?(i={lastEffect:null,stores:null},nt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function bp(){return yn().memoizedState}function tu(n,i,a,c){var d=Xn();nt.flags|=n,d.memoizedState=wa(1|i,a,void 0,c===void 0?null:c)}function nu(n,i,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(yt!==null){var _=yt.memoizedState;if(p=_.destroy,c!==null&&fh(c,_.deps)){d.memoizedState=wa(i,a,p,c);return}}nt.flags|=n,d.memoizedState=wa(1|i,a,p,c)}function Fp(n,i){return tu(8390656,8,n,i)}function _h(n,i){return nu(2048,8,n,i)}function Up(n,i){return nu(4,2,n,i)}function jp(n,i){return nu(4,4,n,i)}function zp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bp(n,i,a){return a=a!=null?a.concat([n]):null,nu(4,4,zp.bind(null,i,n),a)}function vh(){}function $p(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function qp(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Hp(n,i,a){return(Qi&21)===0?(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a):(Vn(a,i)||(a=Fi(),nt.lanes|=a,Yi|=a,n.baseState=!0),i)}function VE(n,i){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=dh.transition;dh.transition={};try{n(!1),i()}finally{xe=a,dh.transition=c}}function Wp(){return yn().memoizedState}function xE(n,i,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Gp(n))Kp(i,a);else if(a=Sp(n,i,a,c),a!==null){var d=Ht();bn(a,n,c,d),Qp(a,i,c)}}function OE(n,i,a){var c=ri(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gp(n))Kp(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var _=i.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Vn(T,_)){var C=i.interleaved;C===null?(d.next=d,oh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Sp(n,i,d,c),a!==null&&(d=Ht(),bn(a,n,c,d),Qp(a,i,c))}}function Gp(n){var i=n.alternate;return n===nt||i!==null&&i===nt}function Kp(n,i){_a=eu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Qp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Br(n,a)}}var ru={readContext:gn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},LE={readContext:gn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:Fp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,zp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tu(4194308,4,n,i)},useInsertionEffect:function(n,i){return tu(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=xE.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Mp,useDebugValue:vh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Mp(!1),i=n[0];return n=VE.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=nt,d=Xn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),St===null)throw Error(t(349));(Qi&30)!==0||Dp(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Fp(xp.bind(null,c,p,n),[n]),c.flags|=2048,wa(9,Vp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Xn(),i=St.identifierPrefix;if(Je){var a=wr,c=Er;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=DE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ME={readContext:gn,useCallback:$p,useContext:gn,useEffect:_h,useImperativeHandle:Bp,useInsertionEffect:Up,useLayoutEffect:jp,useMemo:qp,useReducer:gh,useRef:bp,useState:function(){return gh(Ea)},useDebugValue:vh,useDeferredValue:function(n){var i=yn();return Hp(i,yt.memoizedState,n)},useTransition:function(){var n=gh(Ea)[0],i=yn().memoizedState;return[n,i]},useMutableSource:kp,useSyncExternalStore:Np,useId:Wp,unstable_isNewReconciler:!1},bE={readContext:gn,useCallback:$p,useContext:gn,useEffect:_h,useImperativeHandle:Bp,useInsertionEffect:Up,useLayoutEffect:jp,useMemo:qp,useReducer:yh,useRef:bp,useState:function(){return yh(Ea)},useDebugValue:vh,useDeferredValue:function(n){var i=yn();return yt===null?i.memoizedState=n:Hp(i,yt.memoizedState,n)},useTransition:function(){var n=yh(Ea)[0],i=yn().memoizedState;return[n,i]},useMutableSource:kp,useSyncExternalStore:Np,useId:Wp,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Eh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var iu={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=ri(n),p=Ir(c,d);p.payload=i,a!=null&&(p.callback=a),i=Zr(n,p,d),i!==null&&(bn(i,n,d,c),Yl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=ri(n),p=Ir(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Zr(n,p,d),i!==null&&(bn(i,n,d,c),Yl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=ri(n),d=Ir(a,c);d.tag=2,i!=null&&(d.callback=i),i=Zr(n,d,c),i!==null&&(bn(i,n,c,a),Yl(i,n,c))}};function Yp(n,i,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(d,p):!0}function Xp(n,i,a){var c=!1,d=Yr,p=i.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=Qt(i)?qi:Ot.current,c=i.contextTypes,p=(c=c!=null)?Ys(n,d):Yr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=iu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Jp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&iu.enqueueReplaceState(i,i.state,null)}function wh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ah(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=Qt(i)?qi:Ot.current,d.context=Ys(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Eh(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&iu.enqueueReplaceState(d,d.state,null),Xl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function io(n,i){try{var a="",c=i;do a+=ee(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Th(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ih(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var FE=typeof WeakMap=="function"?WeakMap:Map;function Zp(n,i,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){hu||(hu=!0,Fh=c),Ih(n,i)},a}function em(n,i,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ih(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Ih(n,i),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function tm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new FE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=JE.bind(null,n,i,a),i.then(n,n))}function nm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function rm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ir(-1,1),i.tag=2,Zr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var UE=Se.ReactCurrentOwner,Yt=!1;function qt(n,i,a,c){i.child=n===null?Ip(i,null,a,c):eo(i,n.child,a,c)}function im(n,i,a,c,d){a=a.render;var p=i.ref;return no(i,d),c=ph(n,i,a,c,p,d),a=mh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sr(n,i,d)):(Je&&a&&Xc(i),i.flags|=1,qt(n,i,c,d),i.child)}function sm(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Hh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,om(n,i,p,c,d)):(n=yu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(_,c)&&n.ref===i.ref)return Sr(n,i,d)}return i.flags|=1,n=si(p,c),n.ref=i.ref,n.return=i,i.child=n}function om(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(aa(p,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Yt=!0);else return i.lanes=n.lanes,Sr(n,i,d)}return Sh(n,i,a,c,d)}function am(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(oo,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(oo,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(oo,ln),ln|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,He(oo,ln),ln|=c;return qt(n,i,d,a),i.child}function lm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Sh(n,i,a,c,d){var p=Qt(a)?qi:Ot.current;return p=Ys(i,p),no(i,d),a=ph(n,i,a,c,p,d),c=mh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Sr(n,i,d)):(Je&&c&&Xc(i),i.flags|=1,qt(n,i,a,d),i.child)}function um(n,i,a,c,d){if(Qt(a)){var p=!0;Bl(i)}else p=!1;if(no(i,d),i.stateNode===null)ou(n,i),Xp(i,a,c),wh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,T=i.memoizedProps;_.props=T;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=gn(F):(F=Qt(a)?qi:Ot.current,F=Ys(i,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Jp(i,_,c,F),Jr=!1;var W=i.memoizedState;_.state=W,Xl(i,c,_,d),C=i.memoizedState,T!==c||W!==C||Kt.current||Jr?(typeof G=="function"&&(Eh(i,a,G,c),C=i.memoizedState),(T=Jr||Yp(i,a,T,c,W,C,F))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),_.props=c,_.state=C,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,Ap(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:On(i.type,T),_.props=F,Q=i.pendingProps,W=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=gn(C):(C=Qt(a)?qi:Ot.current,C=Ys(i,C));var ne=a.getDerivedStateFromProps;(G=typeof ne=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||W!==C)&&Jp(i,_,c,C),Jr=!1,W=i.memoizedState,_.state=W,Xl(i,c,_,d);var oe=i.memoizedState;T!==Q||W!==oe||Kt.current||Jr?(typeof ne=="function"&&(Eh(i,a,ne,c),oe=i.memoizedState),(F=Jr||Yp(i,a,F,c,W,oe,C)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,C)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),_.props=c,_.state=oe,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Ah(n,i,a,c,p,d)}function Ah(n,i,a,c,d,p){lm(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&pp(i,a,!1),Sr(n,i,p);c=i.stateNode,UE.current=i;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=eo(i,n.child,null,p),i.child=eo(i,null,T,p)):qt(n,i,T,p),i.memoizedState=c.state,d&&pp(i,a,!0),i.child}function cm(n){var i=n.stateNode;i.pendingContext?dp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&dp(n,i.context,!1),lh(n,i.containerInfo)}function hm(n,i,a,c,d){return Zs(),th(d),i.flags|=256,qt(n,i,a,c),i.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function dm(n,i,a){var c=i.pendingProps,d=tt.current,p=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(tt,d&1),n===null)return eh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=i.mode,p=i.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=_u(_,c,0,null),n=es(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ch(a),i.memoizedState=Rh,n):Ph(i,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return jE(n,i,_,c,T,d,a);if(p){p=c.fallback,_=i.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=si(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=si(T,p):(p=es(p,_,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,_=n.child.memoizedState,_=_===null?Ch(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,i.memoizedState=Rh,c}return p=n.child,n=p.sibling,c=si(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ph(n,i){return i=_u({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function su(n,i,a,c){return c!==null&&th(c),eo(i,n.child,null,a),n=Ph(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function jE(n,i,a,c,d,p,_){if(a)return i.flags&256?(i.flags&=-257,c=Th(Error(t(422))),su(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=_u({mode:"visible",children:c.children},d,0,null),p=es(p,d,_,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&eo(i,n.child,null,_),i.child.memoizedState=Ch(_),i.memoizedState=Rh,p);if((i.mode&1)===0)return su(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Th(p,c,void 0),su(n,i,_,c)}if(T=(_&n.childLanes)!==0,Yt||T){if(c=St,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Tr(n,d),bn(c,n,d,-1))}return qh(),c=Th(Error(t(421))),su(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=ZE.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,an=Kr(d.nextSibling),on=i,Je=!0,xn=null,n!==null&&(pn[mn++]=Er,pn[mn++]=wr,pn[mn++]=Hi,Er=n.id,wr=n.overflow,Hi=i),i=Ph(i,c.children),i.flags|=4096,i)}function fm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),sh(n.return,i,a)}function kh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function pm(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(qt(n,i,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fm(n,a,i);else if(n.tag===19)fm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(tt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),kh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Jl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}kh(i,!0,a,null,p);break;case"together":kh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ou(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=si(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zE(n,i,a){switch(i.tag){case 3:cm(i),Zs();break;case 5:Pp(i);break;case 1:Qt(i.type)&&Bl(i);break;case 4:lh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(tt,tt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?dm(n,i,a):(He(tt,tt.current&1),n=Sr(n,i,a),n!==null?n.sibling:null);He(tt,tt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return pm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(tt,tt.current),c)break;return null;case 22:case 23:return i.lanes=0,am(n,i,a)}return Sr(n,i,a)}var mm,Nh,gm,ym;mm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nh=function(){},gm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ki(Yn.current);var p=null;switch(a){case"input":d=Ci(n,d),c=Ci(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}Bo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Ge("scroll",n),p||T===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},ym=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ta(n,i){if(!Je)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function BE(n,i,a){var c=i.pendingProps;switch(Jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(i),null;case 1:return Qt(i.type)&&zl(),Mt(i),null;case 3:return c=i.stateNode,ro(),Ke(Kt),Ke(Ot),hh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xn!==null&&(zh(xn),xn=null))),Nh(n,i),Mt(i),null;case 5:uh(i);var d=Ki(ya.current);if(a=i.type,n!==null&&i.stateNode!=null)gm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mt(i),null}if(n=Ki(Yn.current),Wl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Qn]=i,c[da]=p,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(d=0;d<ua.length;d++)Ge(ua[d],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":_s(c,p),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ge("invalid",c);break;case"textarea":Es(c,p),Ge("invalid",c)}Bo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Fl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Fl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Ge("scroll",c)}switch(a){case"input":lr(c),cl(c,p,!0);break;case"textarea":lr(c),bo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ul)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Qn]=i,n[da]=c,mm(n,i,!1,!1),i.stateNode=n;e:{switch(_=$o(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),d=c;break;case"iframe":case"object":case"embed":Ge("load",n),d=c;break;case"video":case"audio":for(d=0;d<ua.length;d++)Ge(ua[d],n);d=c;break;case"source":Ge("error",n),d=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),d=c;break;case"details":Ge("toggle",n),d=c;break;case"input":_s(n,c),d=Ci(n,c),Ge("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Es(n,c),d=Mo(n,c),Ge("invalid",n);break;default:d=c}Bo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?jo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Fo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&br(n,C):typeof C=="number"&&br(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Ge("scroll",n):C!=null&&fe(n,p,C,_))}switch(a){case"input":lr(n),cl(n,c,!1);break;case"textarea":lr(n),bo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Re(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?cr(n,!!c.multiple,p,!1):c.defaultValue!=null&&cr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mt(i),null;case 6:if(n&&i.stateNode!=null)ym(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ki(ya.current),Ki(Yn.current),Wl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Mt(i),null;case 13:if(Ke(tt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&an!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ep(),Zs(),i.flags|=98560,p=!1;else if(p=Wl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Qn]=i}else Zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mt(i),p=!1}else xn!==null&&(zh(xn),xn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tt.current&1)!==0?_t===0&&(_t=3):qh())),i.updateQueue!==null&&(i.flags|=4),Mt(i),null);case 4:return ro(),Nh(n,i),n===null&&ca(i.stateNode.containerInfo),Mt(i),null;case 10:return ih(i.type._context),Mt(i),null;case 17:return Qt(i.type)&&zl(),Mt(i),null;case 19:if(Ke(tt),p=i.memoizedState,p===null)return Mt(i),null;if(c=(i.flags&128)!==0,_=p.rendering,_===null)if(c)Ta(p,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=Jl(n),_!==null){for(i.flags|=128,Ta(p,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(tt,tt.current&1|2),i.child}n=n.sibling}p.tail!==null&&qe()>ao&&(i.flags|=128,c=!0,Ta(p,!1),i.lanes=4194304)}else{if(!c)if(n=Jl(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ta(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Je)return Mt(i),null}else 2*qe()-p.renderingStartTime>ao&&a!==1073741824&&(i.flags|=128,c=!0,Ta(p,!1),i.lanes=4194304);p.isBackwards?(_.sibling=i.child,i.child=_):(a=p.last,a!==null?a.sibling=_:i.child=_,p.last=_)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=qe(),i.sibling=null,a=tt.current,He(tt,c?a&1|2:a&1),i):(Mt(i),null);case 22:case 23:return $h(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ln&1073741824)!==0&&(Mt(i),i.subtreeFlags&6&&(i.flags|=8192)):Mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function $E(n,i){switch(Jc(i),i.tag){case 1:return Qt(i.type)&&zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ro(),Ke(Kt),Ke(Ot),hh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uh(i),null;case 13:if(Ke(tt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(tt),null;case 4:return ro(),null;case 10:return ih(i.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var au=!1,bt=!1,qE=typeof WeakSet=="function"?WeakSet:Set,se=null;function so(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,i,c)}else a.current=null}function Dh(n,i,a){try{a()}catch(c){it(n,i,c)}}var _m=!1;function HE(n,i){if($c=Hr,n=Yf(),Lc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,C=-1,F=0,G=0,Q=n,W=null;t:for(;;){for(var ne;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(C=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)W=Q,Q=ne;for(;;){if(Q===n)break t;if(W===a&&++F===d&&(T=_),W===p&&++G===c&&(C=_),(ne=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=ne}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},Hr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,ot=oe.memoizedState,M=i.stateNode,N=M.getSnapshotBeforeUpdate(i.elementType===i.type?ae:On(i.type,ae),ot);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=_m,_m=!1,oe}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Dh(i,a,p)}d=d.next}while(d!==c)}}function lu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function vm(n){var i=n.alternate;i!==null&&(n.alternate=null,vm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[da],delete i[Kc],delete i[CE],delete i[PE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Em(n){return n.tag===5||n.tag===3||n.tag===4}function wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(xh(n,i,a),n=n.sibling;n!==null;)xh(n,i,a),n=n.sibling}function Oh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Oh(n,i,a),n=n.sibling;n!==null;)Oh(n,i,a),n=n.sibling}var kt=null,Ln=!1;function ei(n,i,a){for(a=a.child;a!==null;)Tm(n,i,a),a=a.sibling}function Tm(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 5:bt||so(a,i);case 6:var c=kt,d=Ln;kt=null,ei(n,i,a),kt=c,Ln=d,kt!==null&&(Ln?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Ln?(n=kt,a=a.stateNode,n.nodeType===8?Gc(n.parentNode,a):n.nodeType===1&&Gc(n,a),Nn(n)):Gc(kt,a.stateNode));break;case 4:c=kt,d=Ln,kt=a.stateNode.containerInfo,Ln=!0,ei(n,i,a),kt=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Dh(a,i,_),d=d.next}while(d!==c)}ei(n,i,a);break;case 1:if(!bt&&(so(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){it(a,i,T)}ei(n,i,a);break;case 21:ei(n,i,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,ei(n,i,a),bt=c):ei(n,i,a);break;default:ei(n,i,a)}}function Im(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new qE),i.forEach(function(c){var d=ew.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Mn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 5:kt=T.stateNode,Ln=!1;break e;case 3:kt=T.stateNode.containerInfo,Ln=!0;break e;case 4:kt=T.stateNode.containerInfo,Ln=!0;break e}T=T.return}if(kt===null)throw Error(t(160));Tm(p,_,d),kt=null,Ln=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){it(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sm(i,n),i=i.sibling}function Sm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(i,n),Jn(n),c&4){try{Ia(3,n,n.return),lu(3,n)}catch(ae){it(n,n.return,ae)}try{Ia(5,n,n.return)}catch(ae){it(n,n.return,ae)}}break;case 1:Mn(i,n),Jn(n),c&512&&a!==null&&so(a,a.return);break;case 5:if(Mn(i,n),Jn(n),c&512&&a!==null&&so(a,a.return),n.flags&32){var d=n.stateNode;try{br(d,"")}catch(ae){it(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Oo(d,p),$o(T,_);var F=$o(T,p);for(_=0;_<C.length;_+=2){var G=C[_],Q=C[_+1];G==="style"?jo(d,Q):G==="dangerouslySetInnerHTML"?Fo(d,Q):G==="children"?br(d,Q):fe(d,G,Q,F)}switch(T){case"input":Lo(d,p);break;case"textarea":ws(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?cr(d,!!p.multiple,ne,!1):W!==!!p.multiple&&(p.defaultValue!=null?cr(d,!!p.multiple,p.defaultValue,!0):cr(d,!!p.multiple,p.multiple?[]:"",!1))}d[da]=p}catch(ae){it(n,n.return,ae)}}break;case 6:if(Mn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){it(n,n.return,ae)}}break;case 3:if(Mn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Nn(i.containerInfo)}catch(ae){it(n,n.return,ae)}break;case 4:Mn(i,n),Jn(n);break;case 13:Mn(i,n),Jn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(bh=qe())),c&4&&Im(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(F=bt)||G,Mn(i,n),bt=F):Mn(i,n),Jn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(se=n,G=n.child;G!==null;){for(Q=se=G;se!==null;){switch(W=se,ne=W.child,W.tag){case 0:case 11:case 14:case 15:Ia(4,W,W.return);break;case 1:so(W,W.return);var oe=W.stateNode;if(typeof oe.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){it(c,a,ae)}}break;case 5:so(W,W.return);break;case 22:if(W.memoizedState!==null){Cm(Q);continue}}ne!==null?(ne.return=W,se=ne):Cm(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Uo("display",_))}catch(ae){it(n,n.return,ae)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ae){it(n,n.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Mn(i,n),Jn(n),c&4&&Im(n);break;case 21:break;default:Mn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(br(d,""),c.flags&=-33);var p=wm(n);Oh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=wm(n);xh(n,T,_);break;default:throw Error(t(161))}}catch(C){it(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function WE(n,i,a){se=n,Am(n)}function Am(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||au;if(!_){var T=d.alternate,C=T!==null&&T.memoizedState!==null||bt;T=au;var F=bt;if(au=_,(bt=C)&&!F)for(se=d;se!==null;)_=se,C=_.child,_.tag===22&&_.memoizedState!==null?Pm(d):C!==null?(C.return=_,se=C):Pm(d);for(;p!==null;)se=p,Am(p),p=p.sibling;se=d,au=T,bt=F}Rm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Rm(n)}}function Rm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bt||lu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Cp(i,p,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Cp(i,_,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Nn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||i.flags&512&&Vh(i)}catch(W){it(i,i.return,W)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Cm(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Pm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{lu(4,i)}catch(C){it(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){it(i,d,C)}}var p=i.return;try{Vh(i)}catch(C){it(i,p,C)}break;case 5:var _=i.return;try{Vh(i)}catch(C){it(i,_,C)}}}catch(C){it(i,i.return,C)}if(i===n){se=null;break}var T=i.sibling;if(T!==null){T.return=i.return,se=T;break}se=i.return}}var GE=Math.ceil,uu=Se.ReactCurrentDispatcher,Lh=Se.ReactCurrentOwner,_n=Se.ReactCurrentBatchConfig,Me=0,St=null,ut=null,Nt=0,ln=0,oo=Qr(0),_t=0,Sa=null,Yi=0,cu=0,Mh=0,Aa=null,Xt=null,bh=0,ao=1/0,Ar=null,hu=!1,Fh=null,ti=null,du=!1,ni=null,fu=0,Ra=0,Uh=null,pu=-1,mu=0;function Ht(){return(Me&6)!==0?qe():pu!==-1?pu:pu=qe()}function ri(n){return(n.mode&1)===0?1:(Me&2)!==0&&Nt!==0?Nt&-Nt:NE.transition!==null?(mu===0&&(mu=Fi()),mu):(n=xe,n!==0||(n=window.event,n=n===void 0?16:ea(n.type)),n)}function bn(n,i,a,c){if(50<Ra)throw Ra=0,Uh=null,Error(t(185));zr(n,a,c),((Me&2)===0||n!==St)&&(n===St&&((Me&2)===0&&(cu|=a),_t===4&&ii(n,Nt)),Jt(n,c),a===1&&Me===0&&(i.mode&1)===0&&(ao=qe()+500,$l&&Xr()))}function Jt(n,i){var a=n.callbackNode;fr(n,i);var c=bi(n,n===St?Nt:0);if(c===0)a!==null&&Qo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qo(a),i===1)n.tag===0?kE(Nm.bind(null,n)):mp(Nm.bind(null,n)),AE(function(){(Me&6)===0&&Xr()}),a=null;else{switch($r(c)){case 1:a=Li;break;case 4:a=Fr;break;case 16:a=hn;break;case 536870912:a=ml;break;default:a=hn}a=Fm(a,km.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function km(n,i){if(pu=-1,mu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(lo()&&n.callbackNode!==a)return null;var c=bi(n,n===St?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=gu(n,c);else{i=c;var d=Me;Me|=2;var p=Vm();(St!==n||Nt!==i)&&(Ar=null,ao=qe()+500,Ji(n,i));do try{YE();break}catch(T){Dm(n,T)}while(!0);rh(),uu.current=p,Me=d,ut!==null?i=0:(St=null,Nt=0,i=_t)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=jh(n,d))),i===1)throw a=Sa,Ji(n,0),ii(n,c),Jt(n,qe()),a;if(i===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!KE(d)&&(i=gu(n,c),i===2&&(p=nn(n),p!==0&&(c=p,i=jh(n,p))),i===1))throw a=Sa,Ji(n,0),ii(n,c),Jt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zi(n,Xt,Ar);break;case 3:if(ii(n,c),(c&130023424)===c&&(i=bh+500-qe(),10<i)){if(bi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wc(Zi.bind(null,n,Xt,Ar),i);break}Zi(n,Xt,Ar);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Bt(c);p=1<<_,_=i[_],_>d&&(d=_),c&=~p}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*GE(c/1960))-c,10<c){n.timeoutHandle=Wc(Zi.bind(null,n,Xt,Ar),c);break}Zi(n,Xt,Ar);break;case 5:Zi(n,Xt,Ar);break;default:throw Error(t(329))}}}return Jt(n,qe()),n.callbackNode===a?km.bind(null,n):null}function jh(n,i){var a=Aa;return n.current.memoizedState.isDehydrated&&(Ji(n,i).flags|=256),n=gu(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&zh(i)),n}function zh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function KE(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Vn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ii(n,i){for(i&=~Mh,i&=~cu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function Nm(n){if((Me&6)!==0)throw Error(t(327));lo();var i=bi(n,0);if((i&1)===0)return Jt(n,qe()),null;var a=gu(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=jh(n,c))}if(a===1)throw a=Sa,Ji(n,0),ii(n,i),Jt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zi(n,Xt,Ar),Jt(n,qe()),null}function Bh(n,i){var a=Me;Me|=1;try{return n(i)}finally{Me=a,Me===0&&(ao=qe()+500,$l&&Xr())}}function Xi(n){ni!==null&&ni.tag===0&&(Me&6)===0&&lo();var i=Me;Me|=1;var a=_n.transition,c=xe;try{if(_n.transition=null,xe=1,n)return n()}finally{xe=c,_n.transition=a,Me=i,(Me&6)===0&&Xr()}}function $h(){ln=oo.current,Ke(oo)}function Ji(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,SE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:ro(),Ke(Kt),Ke(Ot),hh();break;case 5:uh(c);break;case 4:ro();break;case 13:Ke(tt);break;case 19:Ke(tt);break;case 10:ih(c.type._context);break;case 22:case 23:$h()}a=a.return}if(St=n,ut=n=si(n.current,null),Nt=ln=i,_t=0,Sa=null,Mh=cu=Yi=0,Xt=Aa=null,Gi!==null){for(i=0;i<Gi.length;i++)if(a=Gi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Gi=null}return n}function Dm(n,i){do{var a=ut;try{if(rh(),Zl.current=ru,eu){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(Qi=0,It=yt=nt=null,_a=!1,va=0,Lh.current=null,a===null||a.return===null){_t=1,Sa=i,ut=null;break}e:{var p=n,_=a.return,T=a,C=i;if(i=Nt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=T,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var ne=nm(_);if(ne!==null){ne.flags&=-257,rm(ne,_,T,p,i),ne.mode&1&&tm(p,F,i),i=ne,C=F;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(C),i.updateQueue=ae}else oe.add(C);break e}else{if((i&1)===0){tm(p,F,i),qh();break e}C=Error(t(426))}}else if(Je&&T.mode&1){var ot=nm(_);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),rm(ot,_,T,p,i),th(io(C,T));break e}}p=C=io(C,T),_t!==4&&(_t=2),Aa===null?Aa=[p]:Aa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=Zp(p,C,i);Rp(p,M);break e;case 1:T=C;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var X=em(p,T,i);Rp(p,X);break e}}p=p.return}while(p!==null)}Om(a)}catch(le){i=le,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Vm(){var n=uu.current;return uu.current=ru,n===null?ru:n}function qh(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||(Yi&268435455)===0&&(cu&268435455)===0||ii(St,Nt)}function gu(n,i){var a=Me;Me|=2;var c=Vm();(St!==n||Nt!==i)&&(Ar=null,Ji(n,i));do try{QE();break}catch(d){Dm(n,d)}while(!0);if(rh(),Me=a,uu.current=c,ut!==null)throw Error(t(261));return St=null,Nt=0,_t}function QE(){for(;ut!==null;)xm(ut)}function YE(){for(;ut!==null&&!fl();)xm(ut)}function xm(n){var i=bm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Om(n):ut=i,Lh.current=null}function Om(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=BE(a,i,ln),a!==null){ut=a;return}}else{if(a=$E(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);_t===0&&(_t=5)}function Zi(n,i,a){var c=xe,d=_n.transition;try{_n.transition=null,xe=1,XE(n,i,a,c)}finally{_n.transition=d,xe=c}return null}function XE(n,i,a,c){do lo();while(ni!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if($e(n,p),n===St&&(ut=St=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,Fm(hn,function(){return lo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=_n.transition,_n.transition=null;var _=xe;xe=1;var T=Me;Me|=4,Lh.current=null,HE(n,a),Sm(a,n),yE(qc),Hr=!!$c,qc=$c=null,n.current=a,WE(a),Cc(),Me=T,xe=_,_n.transition=p}else n.current=a;if(du&&(du=!1,ni=n,fu=d),p=n.pendingLanes,p===0&&(ti=null),gl(a.stateNode),Jt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=Fh,Fh=null,n;return(fu&1)!==0&&n.tag!==0&&lo(),p=n.pendingLanes,(p&1)!==0?n===Uh?Ra++:(Ra=0,Uh=n):Ra=0,Xr(),null}function lo(){if(ni!==null){var n=$r(fu),i=_n.transition,a=xe;try{if(_n.transition=null,xe=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,fu=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(se=F;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Ia(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,se=Q;else for(;se!==null;){G=se;var W=G.sibling,ne=G.return;if(vm(G),G===F){se=null;break}if(W!==null){W.return=ne,se=W;break}se=ne}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var ot=ae.sibling;ae.sibling=null,ae=ot}while(ae!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ia(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var N=n.current;for(se=N;se!==null;){_=se;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,se=b;else e:for(_=N;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:lu(9,T)}}catch(le){it(T,T.return,le)}if(T===_){se=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,se=X;break e}se=T.return}}if(Me=d,Xr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Mi,n)}catch{}c=!0}return c}finally{xe=a,_n.transition=i}}return!1}function Lm(n,i,a){i=io(a,i),i=Zp(n,i,1),n=Zr(n,i,1),i=Ht(),n!==null&&(zr(n,1,i),Jt(n,i))}function it(n,i,a){if(n.tag===3)Lm(n,n,a);else for(;i!==null;){if(i.tag===3){Lm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=io(a,n),n=em(i,n,1),i=Zr(i,n,1),n=Ht(),i!==null&&(zr(i,1,n),Jt(i,n));break}}i=i.return}}function JE(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(Nt&a)===a&&(_t===4||_t===3&&(Nt&130023424)===Nt&&500>qe()-bh?Ji(n,0):Mh|=a),Jt(n,i)}function Mm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ds,Ds<<=1,(Ds&130023424)===0&&(Ds=4194304)));var a=Ht();n=Tr(n,i),n!==null&&(zr(n,i,a),Jt(n,a))}function ZE(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Mm(n,a)}function ew(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Mm(n,a)}var bm;bm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Yt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yt=!1,zE(n,i,a);Yt=(n.flags&131072)!==0}else Yt=!1,Je&&(i.flags&1048576)!==0&&gp(i,Hl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ou(n,i),n=i.pendingProps;var d=Ys(i,Ot.current);no(i,a),d=ph(null,i,c,n,d,a);var p=mh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(p=!0,Bl(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ah(i),d.updater=iu,i.stateNode=d,d._reactInternals=i,wh(i,c,n,a),i=Ah(null,i,c,!0,p,a)):(i.tag=0,Je&&p&&Xc(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ou(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=nw(c),n=On(c,n),d){case 0:i=Sh(null,i,c,n,a);break e;case 1:i=um(null,i,c,n,a);break e;case 11:i=im(null,i,c,n,a);break e;case 14:i=sm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Sh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),um(n,i,c,d,a);case 3:e:{if(cm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Ap(n,i),Xl(i,c,null,a);var _=i.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=io(Error(t(423)),i),i=hm(n,i,c,a,d);break e}else if(c!==d){d=io(Error(t(424)),i),i=hm(n,i,c,a,d);break e}else for(an=Kr(i.stateNode.containerInfo.firstChild),on=i,Je=!0,xn=null,a=Ip(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zs(),c===d){i=Sr(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Pp(i),n===null&&eh(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Hc(c,d)?_=null:p!==null&&Hc(c,p)&&(i.flags|=32),lm(n,i),qt(n,i,_,a),i.child;case 6:return n===null&&eh(i),null;case 13:return dm(n,i,a);case 4:return lh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=eo(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),im(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,_=d.value,He(Kl,c._currentValue),c._currentValue=_,p!==null)if(Vn(p.value,_)){if(p.children===d.children&&!Kt.current){i=Sr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=Ir(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),sh(p.return,a,i),T.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===i.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),sh(_,a,i),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===i){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,no(i,a),d=gn(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),sm(n,i,c,d,a);case 15:return om(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),ou(n,i),i.tag=1,Qt(c)?(n=!0,Bl(i)):n=!1,no(i,a),Xp(i,c,d),wh(i,c,d,a),Ah(null,i,c,!0,n,a);case 19:return pm(n,i,a);case 22:return am(n,i,a)}throw Error(t(156,i.tag))};function Fm(n,i){return ks(n,i)}function tw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new tw(n,i,a,c)}function Hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nw(n){if(typeof n=="function")return Hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Ze)return 14}return 2}function si(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,i,a,c,d,p){var _=2;if(c=n,typeof n=="function")Hh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return es(a.children,d,p,i);case I:_=8,d|=8;break;case R:return n=vn(12,a,i,d|2),n.elementType=R,n.lanes=p,n;case S:return n=vn(13,a,i,d),n.elementType=S,n.lanes=p,n;case Ye:return n=vn(19,a,i,d),n.elementType=Ye,n.lanes=p,n;case Ve:return _u(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case V:_=9;break e;case O:_=11;break e;case Ze:_=14;break e;case ft:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function es(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function _u(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Ve,n.lanes=a,n.stateNode={isHidden:!1},n}function Wh(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function Gh(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function rw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jr(0),this.expirationTimes=jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Kh(n,i,a,c,d,p,_,T,C){return n=new rw(n,i,a,T,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=vn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(p),n}function iw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Um(n){if(!n)return Yr;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return fp(n,a,i)}return i}function jm(n,i,a,c,d,p,_,T,C){return n=Kh(a,c,!0,n,d,p,_,T,C),n.context=Um(null),a=n.current,c=Ht(),d=ri(a),p=Ir(c,d),p.callback=i??null,Zr(a,p,d),n.current.lanes=d,zr(n,d,c),Jt(n,c),n}function vu(n,i,a,c){var d=i.current,p=Ht(),_=ri(d);return a=Um(a),i.context===null?i.context=a:i.pendingContext=a,i=Ir(p,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Zr(d,i,_),n!==null&&(bn(n,d,_,p),Yl(n,d,_)),_}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qh(n,i){zm(n,i),(n=n.alternate)&&zm(n,i)}function sw(){return null}var Bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yh(n){this._internalRoot=n}wu.prototype.render=Yh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vu(n,i,null,null)},wu.prototype.unmount=Yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xi(function(){vu(null,n,null,null)}),i[_r]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var i=wl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Hn.length&&i!==0&&i<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&Sl(n)}};function Xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $m(){}function ow(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Eu(_);p.call(F)}}var _=jm(i,c,n,0,null,!1,!1,"",$m);return n._reactRootContainer=_,n[_r]=_.current,ca(n.nodeType===8?n.parentNode:n),Xi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Eu(C);T.call(F)}}var C=Kh(n,0,!1,null,null,!1,!1,"",$m);return n._reactRootContainer=C,n[_r]=C.current,ca(n.nodeType===8?n.parentNode:n),Xi(function(){vu(i,C,a,c)}),C}function Iu(n,i,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var C=Eu(_);T.call(C)}}vu(i,_,n,d)}else _=ow(a,i,n,d,c);return Eu(_)}vl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ur(i.pendingLanes);a!==0&&(Br(i,a|1),Jt(i,qe()),(Me&6)===0&&(ao=qe()+500,Xr()))}break;case 13:Xi(function(){var c=Tr(n,1);if(c!==null){var d=Ht();bn(c,n,1,d)}}),Qh(n,1)}},Vs=function(n){if(n.tag===13){var i=Tr(n,134217728);if(i!==null){var a=Ht();bn(i,n,134217728,a)}Qh(n,134217728)}},El=function(n){if(n.tag===13){var i=ri(n),a=Tr(n,i);if(a!==null){var c=Ht();bn(a,n,i,c)}Qh(n,i)}},wl=function(){return xe},Tl=function(n,i){var a=xe;try{return xe=n,i()}finally{xe=a}},Is=function(n,i,a){switch(i){case"input":if(Lo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=jl(c);if(!d)throw Error(t(90));ys(c),Lo(c,d)}}}break;case"textarea":ws(n,a);break;case"select":i=a.value,i!=null&&cr(n,!!a.multiple,i,!1)}},Di=Bh,Ho=Xi;var aw={usingClientEntryPoint:!1,Events:[fa,Ks,jl,$n,qo,Bh]},Ca={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lw={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ko(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Mi=Su.inject(lw),tn=Su}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aw,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(i))throw Error(t(200));return iw(n,i,null,a)},Zt.createRoot=function(n,i){if(!Xh(n))throw Error(t(299));var a=!1,c="",d=Bm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Kh(n,1,!1,null,null,a,!1,c,d),n[_r]=i.current,ca(n.nodeType===8?n.parentNode:n),new Yh(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ko(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Xi(n)},Zt.hydrate=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!Xh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Bm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=jm(i,null,n,1,a??null,d,!1,p,_),n[_r]=i.current,ca(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new wu(i)},Zt.render=function(n,i,a){if(!Tu(i))throw Error(t(200));return Iu(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Zt.unstable_batchedUpdates=Bh,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Xm;function _w(){if(Xm)return ed.exports;Xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ed.exports=yw(),ed.exports}var Jm;function vw(){if(Jm)return Au;Jm=1;var r=_w();return Au.createRoot=r.createRoot,Au.hydrateRoot=r.hydrateRoot,Au}var Ew=vw();const ww=()=>{};var Zm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Tw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},by={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let P=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(P=64)),s.push(t[w],t[A],t[P],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(My(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Tw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const A=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new Iw;const P=u<<2|m>>4;if(s.push(P),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const K=v<<6&192|A;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sw=function(r){const e=My(r);return by.encodeByteArray(e,!0)},$u=function(r){return Sw(r).replace(/\./g,"")},Fy=function(r){try{return by.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rw=()=>Aw().__FIREBASE_DEFAULTS__,Cw=()=>{if(typeof process>"u"||typeof Zm>"u")return;const r=Zm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Pw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Fy(r[1]);return e&&JSON.parse(e)},uc=()=>{try{return ww()||Rw()||Cw()||Pw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Uy=r=>{var e,t;return(t=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},kw=r=>{const e=Uy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},jy=()=>{var r;return(r=uc())===null||r===void 0?void 0:r.config},zy=r=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function By(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Dw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const Ma={};function Vw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ma))Ma[e]?r.emulator.push(e):r.prod.push(e);return r}function xw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let eg=!1;function $y(r,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||Ma[r]===e||Ma[r]||eg)return;Ma[r]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",u=Vw().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function g(P,j){P.setAttribute("width","24"),P.setAttribute("id",j),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function v(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{eg=!0,h()},P}function w(P,j){P.setAttribute("id",j),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function A(){const P=xw(s),j=t("text"),K=document.getElementById(j)||document.createElement("span"),Y=t("learnmore"),q=document.getElementById(Y)||document.createElement("a"),ye=t("preprendIcon"),de=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const fe=P.element;m(fe),w(q,Y);const Se=v();g(de,ye),fe.append(de,K,q,Se),document.body.appendChild(fe)}u?(K.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ow(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function Lw(){var r;const e=(r=uc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Fw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uw(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jw(){return!Lw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zw(){try{return typeof indexedDB=="object"}catch{return!1}}function Bw(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="FirebaseError";class Lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$w,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?qw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Lr(o,m,s)}}function qw(r,e){return r.replace(Hw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Hw=/\{\$([^}]+)}/g;function Ww(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function os(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(tg(u)&&tg(h)){if(!os(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function tg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Na(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Da(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Gw(r,e){const t=new Kw(r,e);return t.subscribe.bind(t)}class Kw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Qw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=rd),o.error===void 0&&(o.error=rd),o.complete===void 0&&(o.complete=rd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qw(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function rd(){}/**
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
 */function wt(r){return r&&r._delegate?r._delegate:r}class as{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class Yw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Nw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jw(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xw(r){return r===ts?void 0:r}function Jw(r){return r.instantiationMode==="EAGER"}/**
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
 */class Zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const e0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},t0=Ne.INFO,n0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},r0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=n0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jd{constructor(e){this.name=e,this._logLevel=t0,this._logHandler=r0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const i0=(r,e)=>e.some(t=>r instanceof t);let ng,rg;function s0(){return ng||(ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o0(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qy=new WeakMap,pd=new WeakMap,Hy=new WeakMap,id=new WeakMap,zd=new WeakMap;function a0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(di(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&qy.set(t,r)}).catch(()=>{}),zd.set(e,r),e}function l0(r){if(pd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});pd.set(r,e)}let md={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Hy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function u0(r){md=r(md)}function c0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(sd(this),e,...t);return Hy.set(s,e.sort?e.sort():[e]),di(s)}:o0().includes(r)?function(...e){return r.apply(sd(this),e),di(qy.get(this))}:function(...e){return di(r.apply(sd(this),e))}}function h0(r){return typeof r=="function"?c0(r):(r instanceof IDBTransaction&&l0(r),i0(r,s0())?new Proxy(r,md):r)}function di(r){if(r instanceof IDBRequest)return a0(r);if(id.has(r))return id.get(r);const e=h0(r);return e!==r&&(id.set(r,e),zd.set(e,r)),e}const sd=r=>zd.get(r);function d0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=di(h);return s&&h.addEventListener("upgradeneeded",g=>{s(di(h.result),g.oldVersion,g.newVersion,di(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const f0=["get","getKey","getAll","getAllKeys","count"],p0=["put","add","delete","clear"],od=new Map;function ig(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(od.get(e))return od.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=p0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||f0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return od.set(e,u),u}u0(r=>({...r,get:(e,t,s)=>ig(e,t)||r.get(e,t,s),has:(e,t)=>!!ig(e,t)||r.has(e,t)}));/**
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
 */class m0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(g0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function g0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",sg="0.13.2";/**
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
 */const Dr=new jd("@firebase/app"),y0="@firebase/app-compat",_0="@firebase/analytics-compat",v0="@firebase/analytics",E0="@firebase/app-check-compat",w0="@firebase/app-check",T0="@firebase/auth",I0="@firebase/auth-compat",S0="@firebase/database",A0="@firebase/data-connect",R0="@firebase/database-compat",C0="@firebase/functions",P0="@firebase/functions-compat",k0="@firebase/installations",N0="@firebase/installations-compat",D0="@firebase/messaging",V0="@firebase/messaging-compat",x0="@firebase/performance",O0="@firebase/performance-compat",L0="@firebase/remote-config",M0="@firebase/remote-config-compat",b0="@firebase/storage",F0="@firebase/storage-compat",U0="@firebase/firestore",j0="@firebase/ai",z0="@firebase/firestore-compat",B0="firebase",$0="11.10.0";/**
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
 */const yd="[DEFAULT]",q0={[gd]:"fire-core",[y0]:"fire-core-compat",[v0]:"fire-analytics",[_0]:"fire-analytics-compat",[w0]:"fire-app-check",[E0]:"fire-app-check-compat",[T0]:"fire-auth",[I0]:"fire-auth-compat",[S0]:"fire-rtdb",[A0]:"fire-data-connect",[R0]:"fire-rtdb-compat",[C0]:"fire-fn",[P0]:"fire-fn-compat",[k0]:"fire-iid",[N0]:"fire-iid-compat",[D0]:"fire-fcm",[V0]:"fire-fcm-compat",[x0]:"fire-perf",[O0]:"fire-perf-compat",[L0]:"fire-rc",[M0]:"fire-rc-compat",[b0]:"fire-gcs",[F0]:"fire-gcs-compat",[U0]:"fire-fst",[z0]:"fire-fst-compat",[j0]:"fire-vertex","fire-js":"fire-js",[B0]:"fire-js-all"};/**
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
 */const qu=new Map,H0=new Map,_d=new Map;function og(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Eo(r){const e=r.name;if(_d.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,r);for(const t of qu.values())og(t,r);for(const t of H0.values())og(t,r);return!0}function Bd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function un(r){return r==null?!1:r.settings!==void 0}/**
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
 */const W0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Za("app","Firebase",W0);/**
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
 */class G0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=$0;function Wy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=jy()),!t)throw fi.create("no-options");const u=qu.get(o);if(u){if(os(t,u.options)&&os(s,u.config))return u;throw fi.create("duplicate-app",{appName:o})}const h=new Zw(o);for(const g of _d.values())h.addComponent(g);const m=new G0(t,s,h);return qu.set(o,m),m}function Gy(r=yd){const e=qu.get(r);if(!e&&r===yd&&jy())return Wy();if(!e)throw fi.create("no-app",{appName:r});return e}function pi(r,e,t){var s;let o=(s=q0[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(m.join(" "));return}Eo(new as(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const K0="firebase-heartbeat-database",Q0=1,$a="firebase-heartbeat-store";let ad=null;function Ky(){return ad||(ad=d0(K0,Q0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw fi.create("idb-open",{originalErrorMessage:r.message})})),ad}async function Y0(r){try{const t=(await Ky()).transaction($a),s=await t.objectStore($a).get(Qy(r));return await t.done,s}catch(e){if(e instanceof Lr)Dr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function ag(r,e){try{const s=(await Ky()).transaction($a,"readwrite");await s.objectStore($a).put(e,Qy(r)),await s.done}catch(t){if(t instanceof Lr)Dr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(s.message)}}}function Qy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const X0=1024,J0=30;class Z0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=lg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>J0){const h=nT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lg(),{heartbeatsToSend:s,unsentEntries:o}=eT(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Dr.warn(t),""}}}function lg(){return new Date().toISOString().substring(0,10)}function eT(r,e=X0){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ug(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ug(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zw()?Bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Y0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ag(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ag(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ug(r){return $u(JSON.stringify({version:2,heartbeats:r})).length}function nT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function rT(r){Eo(new as("platform-logger",e=>new m0(e),"PRIVATE")),Eo(new as("heartbeat",e=>new Z0(e),"PRIVATE")),pi(gd,sg,r),pi(gd,sg,"esm2017"),pi("fire-js","")}rT("");function $d(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iT=Yy,Xy=new Za("auth","Firebase",Yy());/**
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
 */const Hu=new jd("@firebase/auth");function sT(r,...e){Hu.logLevel<=Ne.WARN&&Hu.warn(`Auth (${Co}): ${r}`,...e)}function xu(r,...e){Hu.logLevel<=Ne.ERROR&&Hu.error(`Auth (${Co}): ${r}`,...e)}/**
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
 */function Tn(r,...e){throw Hd(r,...e)}function jn(r,...e){return Hd(r,...e)}function qd(r,e,t){const s=Object.assign(Object.assign({},iT()),{[e]:t});return new Za("auth","Firebase",s).create(e,{appName:r.name})}function kr(r){return qd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Tn(r,"argument-error"),qd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Xy.create(r,...e)}function _e(r,e,...t){if(!r)throw Hd(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw xu(e),new Error(e)}function Vr(r,e){r||Cr(e)}/**
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
 */function vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function aT(){return cg()==="http:"||cg()==="https:"}function cg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function lT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aT()||bw()||"connection"in navigator)?navigator.onLine:!0}function uT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class tl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=Ow()||Fw()}get(){return lT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wd(r,e){Vr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Jy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dT=new tl(3e4,6e4);function Si(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function or(r,e,t,s,o={}){return Zy(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=el(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},u);return Mw()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(v.credentials="include"),Jy.fetch()(await e_(r,r.config.apiHost,t,m),v)})}async function Zy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},cT),e);try{const o=new pT(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Ru(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Ru(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Ru(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw qd(r,w,v);Tn(r,w)}}catch(o){if(o instanceof Lr)throw o;Tn(r,"network-request-failed",{message:String(o)})}}async function nl(r,e,t,s,o={}){const u=await or(r,e,t,s,o);return"mfaPendingCredential"in u&&Tn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function e_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Wd(r.config,o):`${r.config.apiScheme}://${o}`;return hT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function fT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(jn(this.auth,"network-request-failed")),dT.get())})}}function Ru(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=jn(r,e,s);return o.customData._tokenResponse=t,o}function hg(r){return r!==void 0&&r.enterprise!==void 0}class mT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gT(r,e){return or(r,"GET","/v2/recaptchaConfig",Si(r,e))}/**
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
 */async function yT(r,e){return or(r,"POST","/v1/accounts:delete",e)}async function Wu(r,e){return or(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ba(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _T(r,e=!1){const t=wt(r),s=await t.getIdToken(e),o=Gd(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ba(ld(o.auth_time)),issuedAtTime:ba(ld(o.iat)),expirationTime:ba(ld(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ld(r){return Number(r)*1e3}function Gd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Fy(t);return o?JSON.parse(o):(xu("Failed to decode base64 JWT payload"),null)}catch(o){return xu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function dg(r){const e=Gd(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ls(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Lr&&vT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function vT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ET{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ed{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await ls(r,Wu(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?t_(u.providerUserInfo):[],m=TT(r.providerData,h),g=r.isAnonymous,v=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Ed(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(r,A)}async function wT(r){const e=wt(r);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function t_(r){return r.map(e=>{var{providerId:t}=e,s=$d(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function IT(r,e){const t=await Zy(r,{},async()=>{const s=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await e_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(g.credentials="include"),Jy.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ST(r,e){return or(r,"POST","/v2/accounts:revokeToken",Si(r,e))}/**
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
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await IT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new mo;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
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
 */function ai(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=$d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ET(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Ed(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await ls(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _T(this,e)}reload(){return wT(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await ls(this,yT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,P=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ye=(v=t.createdAt)!==null&&v!==void 0?v:void 0,de=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:fe,emailVerified:Se,isAnonymous:Be,providerData:Ce,stsTokenManager:D}=t;_e(fe&&D,e,"internal-error");const I=mo.fromJSON(this.name,D);_e(typeof fe=="string",e,"internal-error"),ai(A,e.name),ai(P,e.name),_e(typeof Se=="boolean",e,"internal-error"),_e(typeof Be=="boolean",e,"internal-error"),ai(j,e.name),ai(K,e.name),ai(Y,e.name),ai(q,e.name),ai(ye,e.name),ai(de,e.name);const R=new Fn({uid:fe,auth:e,email:P,emailVerified:Se,displayName:A,isAnonymous:Be,photoURL:K,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:ye,lastLoginAt:de});return Ce&&Array.isArray(Ce)&&(R.providerData=Ce.map(k=>Object.assign({},k))),q&&(R._redirectEventId=q),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new mo;o.updateFromServerResponse(t);const u=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?t_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new mo;m.updateFromIdToken(s);const g=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ed(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const fg=new Map;function Pr(r){Vr(r instanceof Function,"Expected a class definition");let e=fg.get(r);return e?(Vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fg.set(r,e),e)}/**
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
 */class n_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}n_.type="NONE";const pg=n_;/**
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
 */function Ou(r,e,t){return`firebase:${r}:${e}:${t}`}class go{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new go(Pr(pg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Pr(pg);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const P=await Wu(e,{idToken:w}).catch(()=>{});if(!P)break;A=await Fn._fromGetAccountInfoResponse(e,P,w)}else A=Fn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new go(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new go(u,e,s))}}/**
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
 */function mg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l_(e))return"Blackberry";if(u_(e))return"Webos";if(i_(e))return"Safari";if((e.includes("chrome/")||s_(e))&&!e.includes("edge/"))return"Chrome";if(a_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function r_(r=zt()){return/firefox\//i.test(r)}function i_(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s_(r=zt()){return/crios\//i.test(r)}function o_(r=zt()){return/iemobile/i.test(r)}function a_(r=zt()){return/android/i.test(r)}function l_(r=zt()){return/blackberry/i.test(r)}function u_(r=zt()){return/webos/i.test(r)}function Kd(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function AT(r=zt()){var e;return Kd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RT(){return Uw()&&document.documentMode===10}function c_(r=zt()){return Kd(r)||a_(r)||u_(r)||l_(r)||/windows phone/i.test(r)||o_(r)}/**
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
 */function h_(r,e=[]){let t;switch(r){case"Browser":t=mg(zt());break;case"Worker":t=`${mg(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${s}`}/**
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
 */class CT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function PT(r,e={}){return or(r,"GET","/v2/passwordPolicy",Si(r,e))}/**
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
 */const kT=6;class NT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:kT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class DT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new CT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await go.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(un(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(kr(this));const t=e?wt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),t=new NT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ST(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await go.create(this,[Pr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ai(r){return wt(r)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gw(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VT(r){cc=r}function d_(r){return cc.loadJS(r)}function xT(){return cc.recaptchaEnterpriseScript}function OT(){return cc.gapiScript}function LT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class MT{constructor(){this.enterprise=new bT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const FT="recaptcha-enterprise",f_="NO_RECAPTCHA";class UT{constructor(e){this.type=FT,this.auth=Ai(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{gT(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new mT(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;hg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(f_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MT().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&hg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=xT();g.length!==0&&(g+=m),d_(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function yg(r,e,t,s=!1,o=!1){const u=new UT(r);let h;if(o)h=f_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function wd(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await yg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function jT(r,e){const t=Bd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(os(u,e??{}))return o;Tn(o,"already-initialized")}return t.initialize({options:e})}function zT(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function BT(r,e,t){const s=Ai(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=p_(e),{host:h,port:m}=$T(e),g=m===null?"":`:${m}`,v={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(os(v,s.config.emulator)&&os(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ro(h)?(By(`${u}//${h}${g}`),$y("Auth",!0)):qT()}function p_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function $T(r){const e=p_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:_g(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:_g(h)}}}function _g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function qT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Qd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function HT(r,e){return or(r,"POST","/v1/accounts:update",e)}async function WT(r,e){return or(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function GT(r,e){return nl(r,"POST","/v1/accounts:signInWithPassword",Si(r,e))}/**
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
 */async function KT(r,e){return nl(r,"POST","/v1/accounts:signInWithEmailLink",Si(r,e))}async function QT(r,e){return nl(r,"POST","/v1/accounts:signInWithEmailLink",Si(r,e))}/**
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
 */class qa extends Qd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,t,"signInWithPassword",GT);case"emailLink":return KT(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,s,"signUpPassword",WT);case"emailLink":return QT(e,{idToken:t,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function yo(r,e){return nl(r,"POST","/v1/accounts:signInWithIdp",Si(r,e))}/**
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
 */const YT="http://localhost";class us extends Qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=$d(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new us(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return yo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,yo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yo(e,t)}buildRequest(){const e={requestUri:YT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=el(t)}return e}}/**
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
 */function XT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JT(r){const e=Na(Da(r)).link,t=e?Na(Da(e)).deep_link_id:null,s=Na(Da(r)).deep_link_id;return(s?Na(Da(s)).link:null)||s||t||e||r}class Yd{constructor(e){var t,s,o,u,h,m;const g=Na(Da(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=XT((o=g.mode)!==null&&o!==void 0?o:null);_e(v&&w&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=JT(e);try{return new Yd(t)}catch{return null}}}/**
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
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Yd.parseLink(t);return _e(s,"argument-error"),qa._fromEmailAndCode(e,s.code,s.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rl extends Xd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends rl{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class Rr extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rr.credential(t,s)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
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
 */class ui extends rl{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
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
 */class ci extends rl{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
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
 */async function ZT(r,e){return nl(r,"POST","/v1/accounts:signUp",Si(r,e))}/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Fn._fromIdTokenResponse(e,s,o),h=vg(s);return new cs({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=vg(s);return new cs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function vg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ku extends Lr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ku(e,t,s,o)}}function m_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(r,u,e,s):u})}async function eI(r,e,t=!1){const s=await ls(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return cs._forOperation(r,"link",s)}/**
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
 */async function tI(r,e,t=!1){const{auth:s}=r;if(un(s.app))return Promise.reject(kr(s));const o="reauthenticate";try{const u=await ls(r,m_(s,o,e,r),t);_e(u.idToken,s,"internal-error");const h=Gd(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(r.uid===m,s,"user-mismatch"),cs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),u}}/**
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
 */async function g_(r,e,t=!1){if(un(r.app))return Promise.reject(kr(r));const s="signIn",o=await m_(r,s,e),u=await cs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function nI(r,e){return g_(Ai(r),e)}/**
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
 */async function y_(r){const e=Ai(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rI(r,e,t){if(un(r.app))return Promise.reject(kr(r));const s=Ai(r),h=await wd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZT).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&y_(r),g}),m=await cs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function iI(r,e,t){return un(r.app)?Promise.reject(kr(r)):nI(wt(r),Po.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&y_(r),s})}/**
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
 */async function sI(r,e){return or(r,"POST","/v1/accounts:update",e)}/**
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
 */async function Eg(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=wt(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await ls(s,sI(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function oI(r,e){return aI(wt(r),null,e)}async function aI(r,e,t){const{auth:s}=r,u={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(u.password=t);const h=await ls(r,HT(s,u));await r._updateTokensIfNecessary(h,!0)}function lI(r,e,t,s){return wt(r).onIdTokenChanged(e,t,s)}function uI(r,e,t){return wt(r).beforeAuthStateChanged(e,t)}function cI(r,e,t,s){return wt(r).onAuthStateChanged(e,t,s)}function hI(r){return wt(r).signOut()}async function dI(r){return wt(r).delete()}const Qu="__sak";/**
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
 */class __{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fI=1e3,pI=10;class v_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);RT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,pI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}v_.type="LOCAL";const mI=v_;/**
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
 */class E_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}E_.type="SESSION";const w_=E_;/**
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
 */function gI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new hc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await gI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function Jd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class yI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Jd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const P=A;if(P.data.eventId===v)switch(P.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(P.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function er(){return window}function _I(r){er().location.href=r}/**
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
 */function T_(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function vI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function wI(){return T_()?self:null}/**
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
 */const I_="firebaseLocalStorageDb",TI=1,Yu="firebaseLocalStorage",S_="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dc(r,e){return r.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function II(){const r=indexedDB.deleteDatabase(I_);return new il(r).toPromise()}function Td(){const r=indexedDB.open(I_,TI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Yu,{keyPath:S_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await II(),e(await Td()))})})}async function wg(r,e,t){const s=dc(r,!0).put({[S_]:e,value:t});return new il(s).toPromise()}async function SI(r,e){const t=dc(r,!1).get(e),s=await new il(t).toPromise();return s===void 0?null:s.value}function Tg(r,e){const t=dc(r,!0).delete(e);return new il(t).toPromise()}const AI=800,RI=3;class A_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>RI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(wI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vI(),!this.activeServiceWorker)return;this.sender=new yI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await wg(e,Qu,"1"),await Tg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>SI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=dc(o,!1).getAll();return new il(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A_.type="LOCAL";const CI=A_;new tl(3e4,6e4);/**
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
 */function R_(r,e){return e?Pr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Zd extends Qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PI(r){return g_(r.auth,new Zd(r),r.bypassAuthState)}function kI(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),tI(t,new Zd(r),r.bypassAuthState)}async function NI(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),eI(t,new Zd(r),r.bypassAuthState)}/**
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
 */class C_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PI;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return kI;default:Tn(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DI=new tl(2e3,1e4);async function VI(r,e,t){if(un(r.app))return Promise.reject(jn(r,"operation-not-supported-in-this-environment"));const s=Ai(r);oT(r,e,Xd);const o=R_(s,t);return new ns(s,"signInViaPopup",e,o).executeNotNull()}class ns extends C_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DI.get())};e()}}ns.currentPopupAction=null;/**
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
 */const xI="pendingRedirect",Lu=new Map;class OI extends C_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const s=await LI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LI(r,e){const t=FI(e),s=bI(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function MI(r,e){Lu.set(r._key(),e)}function bI(r){return Pr(r._redirectPersistence)}function FI(r){return Ou(xI,r.config.apiKey,r.name)}async function UI(r,e,t=!1){if(un(r.app))return Promise.reject(kr(r));const s=Ai(r),o=R_(s,e),h=await new OI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const jI=600*1e3;class zI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!P_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function P_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(r);default:return!1}}/**
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
 */async function $I(r,e={}){return or(r,"GET","/v1/projects",e)}/**
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
 */const qI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HI=/^https?/;async function WI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await $I(r);for(const t of e)try{if(GI(t))return}catch{}Tn(r,"unauthorized-domain")}function GI(r){const e=vd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!HI.test(t))return!1;if(qI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const KI=new tl(3e4,6e4);function Sg(){const r=er().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function QI(r){return new Promise((e,t)=>{var s,o,u;function h(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),t(jn(r,"network-request-failed"))},timeout:KI.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=er().gapi)===null||u===void 0)&&u.load)h();else{const m=LT("iframefcb");return er()[m]=()=>{gapi.load?h():t(jn(r,"network-request-failed"))},d_(`${OT()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function YI(r){return Mu=Mu||QI(r),Mu}/**
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
 */const XI=new tl(5e3,15e3),JI="__/auth/iframe",ZI="emulator/auth/iframe",e1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n1(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Wd(e,ZI):`https://${r.config.authDomain}/${JI}`,s={apiKey:e.apiKey,appName:r.name,v:Co},o=t1.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${el(s).slice(1)}`}async function r1(r){const e=await YI(r),t=er().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:n1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=jn(r,"network-request-failed"),m=er().setTimeout(()=>{u(h)},XI.get());function g(){er().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const i1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s1=500,o1=600,a1="_blank",l1="http://localhost";class Ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u1(r,e,t,s=s1,o=o1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},i1),{width:s.toString(),height:o.toString(),top:u,left:h}),v=zt().toLowerCase();t&&(m=s_(v)?a1:t),r_(v)&&(e=e||l1,g.scrollbars="yes");const w=Object.entries(g).reduce((P,[j,K])=>`${P}${j}=${K},`,"");if(AT(v)&&m!=="_self")return c1(e||"",m),new Ag(null);const A=window.open(e||"",m,w);_e(A,r,"popup-blocked");try{A.focus()}catch{}return new Ag(A)}function c1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const h1="__/auth/handler",d1="emulator/auth/handler",f1=encodeURIComponent("fac");async function Rg(r,e,t,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Co,eventId:o};if(e instanceof Xd){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",Ww(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof rl){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),v=g?`#${f1}=${encodeURIComponent(g)}`:"";return`${p1(r)}?${el(m).slice(1)}${v}`}function p1({config:r}){return r.emulator?Wd(r,d1):`https://${r.authDomain}/${h1}`}/**
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
 */const ud="webStorageSupport";class m1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=UI,this._overrideRedirectResult=MI}async _openPopup(e,t,s,o){var u;Vr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Rg(e,t,s,vd(),o);return u1(e,h,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Rg(e,t,s,vd(),o);return _I(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Vr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await r1(e),s=new zI(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ud,{type:ud},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ud];h!==void 0&&t(!!h),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=WI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return c_()||i_()||Kd()}}const g1=m1;var Cg="@firebase/auth",Pg="1.10.8";/**
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
 */class y1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v1(r){Eo(new as("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(r)},v=new DT(s,o,u,g);return zT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Eo(new as("auth-internal",e=>{const t=Ai(e.getProvider("auth").getImmediate());return(s=>new y1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(Cg,Pg,_1(r)),pi(Cg,Pg,"esm2017")}/**
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
 */const E1=300,w1=zy("authIdTokenMaxAge")||E1;let kg=null;const T1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>w1)return;const o=t==null?void 0:t.token;kg!==o&&(kg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function I1(r=Gy()){const e=Bd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=jT(r,{popupRedirectResolver:g1,persistence:[CI,mI,w_]}),s=zy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=T1(u.toString());uI(t,h,()=>h(t.currentUser)),lI(t,m=>h(m))}}const o=Uy("auth");return o&&BT(t,`http://${o}`),t}function S1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}VT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",S1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v1("Browser");var Ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,k_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(k,V,O){for(var S=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)S[Ye-2]=arguments[Ye];return I.prototype[V].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var k=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)k[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var O=D.g[3],S=I+(O^R&(V^O))+k[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(V^O&(R^V))+k[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(R^V^O)+k[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(V^(R|~O))+k[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,k=this.B,V=this.h,O=0;O<I;){if(V==0)for(;O<=R;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<I;)if(k[V++]=D.charCodeAt(O++),V==this.blockSize){o(this,k),V=0;break}}else for(;O<I;)if(k[V++]=D[O++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var k=0;32>k;k+=8)D[R++]=this.g[I]>>>k&255;return D};function u(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],k=!0,V=D.length-1;0<=V;V--){var O=D[V]|0;k&&O==I||(R[V]=O,k=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return q(v(-D));for(var I=[],R=1,k=0;D>=R;k++)I[k]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return q(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),k=A,V=0;V<D.length;V+=8){var O=Math.min(8,D.length-V),S=parseInt(D.substring(V,V+O),I);8>O?(O=v(Math.pow(I,O)),k=k.j(O).add(v(S))):(k=k.j(R),k=k.add(v(S)))}return k}var A=g(0),P=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-q(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var k=this.i(R);D+=(0<=k?k:4294967296+k)*I,I*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(Y(this))return"-"+q(this).toString(D);for(var I=v(Math.pow(D,6)),R=this,k="";;){var V=Se(R,I).g;R=ye(R,V.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,K(R))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function Y(D){return D.h==-1}r.l=function(D){return D=ye(this,D),Y(D)?-1:K(D)?0:1};function q(D){for(var I=D.g.length,R=[],k=0;k<I;k++)R[k]=~D.g[k];return new h(R,~D.h).add(P)}r.abs=function(){return Y(this)?q(this):this},r.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0,V=0;V<=I;V++){var O=k+(this.i(V)&65535)+(D.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=S>>>16,O&=65535,S&=65535,R[V]=S<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ye(D,I){return D.add(q(I))}r.j=function(D){if(K(this)||K(D))return A;if(Y(this))return Y(D)?q(this).j(q(D)):q(q(this).j(D));if(Y(D))return q(this.j(q(D)));if(0>this.l(j)&&0>D.l(j))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],k=0;k<2*I;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var O=this.i(k)>>>16,S=this.i(k)&65535,Ye=D.i(V)>>>16,Ze=D.i(V)&65535;R[2*k+2*V]+=S*Ze,de(R,2*k+2*V),R[2*k+2*V+1]+=O*Ze,de(R,2*k+2*V+1),R[2*k+2*V+1]+=S*Ye,de(R,2*k+2*V+1),R[2*k+2*V+2]+=O*Ye,de(R,2*k+2*V+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function de(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function fe(D,I){this.g=D,this.h=I}function Se(D,I){if(K(I))throw Error("division by zero");if(K(D))return new fe(A,A);if(Y(D))return I=Se(q(D),I),new fe(q(I.g),q(I.h));if(Y(I))return I=Se(D,q(I)),new fe(q(I.g),I.h);if(30<D.g.length){if(Y(D)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=P,k=I;0>=k.l(D);)R=Be(R),k=Be(k);var V=Ce(R,1),O=Ce(k,1);for(k=Ce(k,2),R=Ce(R,2);!K(k);){var S=O.add(k);0>=S.l(D)&&(V=V.add(R),O=S),k=Ce(k,1),R=Ce(R,1)}return I=ye(D,V.j(I)),new fe(V,I)}for(V=A;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=v(R),S=O.j(I);Y(S)||0<S.l(D);)R-=k,O=v(R),S=O.j(I);K(O)&&(O=P),V=V.add(O),D=ye(D,S)}return new fe(V,D)}r.A=function(D){return Se(this,D).h},r.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)&D.i(k);return new h(R,this.h&D.h)},r.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)|D.i(k);return new h(R,this.h|D.h)},r.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)^D.i(k);return new h(R,this.h^D.h)};function Be(D){for(var I=D.g.length+1,R=[],k=0;k<I;k++)R[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(R,D.h)}function Ce(D,I){var R=I>>5;I%=32;for(var k=D.g.length-R,V=[],O=0;O<k;O++)V[O]=0<I?D.i(O+R)>>>I|D.i(O+R+1)<<32-I:D.i(O+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,k_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,mi=h}).apply(typeof Ng<"u"?Ng:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N_,Va,D_,bu,Id,V_,x_,O_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function P(l,f,y){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,P.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function K(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return f.prototype[L].apply(E,J)}}function Y(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function q(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let J=0;J<U;J++)l[L+J]=E[J]}else l.push(E)}}class ye{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function de(l){return/^[\s\xa0]*$/.test(l)}function fe(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Se(l){return Se[" "](l),l}Se[" "]=function(){};var Be=fe().indexOf("Gecko")!=-1&&!(fe().toLowerCase().indexOf("webkit")!=-1&&fe().indexOf("Edge")==-1)&&!(fe().indexOf("Trident")!=-1||fe().indexOf("MSIE")!=-1)&&fe().indexOf("Edge")==-1;function Ce(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ye{constructor(){this.h=this.g=null}add(f,y){const E=Ze.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ze=new ye(()=>new ft,l=>l.reset());class ft{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Z=!1,ce=new Ye,te=()=>{const l=m.Promise.resolve(void 0);Ve=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=Ze;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function ee(l,f){if(ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Be){e:{try{Se(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:pe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ee.aa.h.call(this)}}K(ee,ue);var pe={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Re=0;function Ue(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Re,this.da=this.fa=!1}function et(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function lr(l){this.src=l,this.g={},this.h=0}lr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Mr(l,f,E,L);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new Ue(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function ys(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(et(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Mr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),_s={};function Oo(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Oo(l,f[U],y,E,L);return null}return y=bo(y),l&&l[we]?l.K(f,y,v(E)?!!E.capture:!1,L):Lo(l,f,y,!1,E,L)}function Lo(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var J=v(L)?!!L.capture:!!L,je=Es(l);if(je||(l[Ci]=je=new lr(l)),y=je.add(f,y,E,J,U),y.proxy)return y;if(E=cl(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ae||(L=J),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(cr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function cl(){function l(y){return f.call(l.src,l.listener,y)}const f=Mo;return l}function vs(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)vs(l,f[U],y,E,L);else E=v(E)?!!E.capture:!!E,y=bo(y),l&&l[we]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Mr(U,y,E,L),-1<y&&(et(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=Es(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Mr(f,y,E,L)),(y=-1<l?f[l]:null)&&ur(y))}function ur(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[we])ys(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(cr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Es(f))?(ys(y,l),y.h==0&&(y.src=null,f[Ci]=null)):et(l)}}}function cr(l){return l in _s?_s[l]:_s[l]="on"+l}function Mo(l,f){if(l.da)l=!0;else{f=new ee(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ur(l),l=y.call(E,f)}return l}function Es(l){return l=l[Ci],l instanceof lr?l:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(l){return typeof l=="function"?l:(l[ws]||(l[ws]=function(f){return l.handleEvent(f)}),l[ws])}function pt(){B.call(this),this.i=new lr(this),this.M=this,this.F=null}K(pt,B),pt.prototype[we]=!0,pt.prototype.removeEventListener=function(l,f,y,E){vs(this,l,f,y,E)};function mt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ue(f,l);else if(f instanceof ue)f.target=f.target||l;else{var L=f;f=new ue(E,l),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];L=hr(J,E,!0,f)&&L}if(J=f.g=l,L=hr(J,E,!0,f)&&L,L=hr(J,E,!1,f)&&L,y)for(U=0;U<y.length;U++)J=f.g=y[U],L=hr(J,E,!1,f)&&L}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)et(y[E]);delete l.g[f],l.h--}}this.F=null},pt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},pt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function hr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var je=J.listener,gt=J.ha||J.src;J.fa&&ys(l.i,J),L=je.call(gt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Fo(l,f,y){if(typeof l=="function")y&&(l=P(l,y));else if(l&&typeof l.handleEvent=="function")l=P(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function br(l){l.g=Fo(()=>{l.g=null,l.i&&(l.i=!1,br(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Pi extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(l){B.call(this),this.h=l,this.g={}}K(ki,B);var Uo=[];function jo(l){Ce(l.g,function(f,y){this.g.hasOwnProperty(y)&&ur(f)},l),l.g={}}ki.prototype.N=function(){ki.aa.N.call(this),jo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=m.JSON.stringify,Bo=m.JSON.parse,$o=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ni(){}Ni.prototype.h=null;function Ts(l){return l.h||(l.h=l.i())}function Is(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){ue.call(this,"d")}K(Bn,ue);function Ss(){ue.call(this,"c")}K(Ss,ue);var $n={},qo=null;function Di(){return qo=qo||new pt}$n.La="serverreachability";function Ho(l){ue.call(this,$n.La,l)}K(Ho,ue);function dr(l){const f=Di();mt(f,new Ho(f))}$n.STAT_EVENT="statevent";function Wo(l,f){ue.call(this,$n.STAT_EVENT,l),this.stat=f}K(Wo,ue);function st(l){const f=Di();mt(f,new Wo(f,l))}$n.Ma="timingevent";function As(l,f){ue.call(this,$n.Ma,l),this.size=f}K(As,ue);function In(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function xi(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var J="",je=U.split("&"),gt=0;gt<je.length;gt++){var Oe=je[gt].split("=");if(1<Oe.length){var Tt=Oe[0];Oe=Oe[1];var lt=Tt.split("_");J=2<=lt.length&&lt[1]=="type"?J+(Tt+"="+Oe+"&"):J+(Tt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function Rs(l,f,y,E,L,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+J})}function Sn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Rc(l,y)+(E?" "+E:"")})}function Go(l,f){l.info(function(){return"TIMEOUT: "+f})}Vi.prototype.info=function(){};function Rc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return zo(y)}catch{return f}}var Cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},An;function Oi(){}K(Oi,Ni),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},An=new Oi;function Rn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var Ko={},Ps={};function ks(l,f,y){l.L=1,l.v=Br(nn(f)),l.m=y,l.P=!0,Qo(l,null)}function Qo(l,f){l.F=Date.now(),qe(l),l.A=nn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),qr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new dl,l.g=Nl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Pi(P(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Uo[0]=L.toString()),L=Uo);for(var U=0;U<L.length;U++){var J=Oo(y,L[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),dr(),xi(l.i,l.u,l.A,l.l,l.R,l.m)}Rn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Gt(l)==3?f.j():this.Y(l)},Rn.prototype.Y=function(l){try{if(l==this.g)e:{const lt=Gt(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||lt!=4||f==7||(f==8||0>=fn?dr(3):dr(2)),Li(this);var y=this.g.Z();this.X=y;t:if(fl(this)){var E=ta(this.g);l="";var L=E.length,U=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Fr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Rs(this.i,this.u,this.A,this.l,this.R,lt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,gt=this.g;if((je=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(je)){var Oe=je;break t}}Oe=null}if(y=Oe)Sn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,y);else{this.o=!1,this.s=3,st(12),hn(this),Fr(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<J.length;)if(sn=Cc(this,J),sn==Ps){lt==4&&(this.s=4,st(14),y=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Ko){this.s=4,st(15),Sn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Sn(this.i,this.l,sn,null),Yo(this,sn);if(fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||J.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)Sn(this.i,this.l,J,"[Invalid Chunked Response]"),hn(this),Fr(this);else if(0<J.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ra(Tt),Tt.M=!0,st(11))}}else Sn(this.i,this.l,J,null),Yo(this,J);lt==4&&hn(this),this.o&&!this.J&&(lt==4?js(this.j,this):(this.o=!1,qe(this)))}else Ls(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),hn(this),Fr(this)}}}catch{}finally{}};function fl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Cc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?Ps:(y=Number(f.substring(y,E)),isNaN(y)?Ko:(E+=1,E+y>f.length?Ps:(f=f.slice(E,E+y),l.C=E+y,f)))}Rn.prototype.cancel=function(){this.J=!0,hn(this)};function qe(l){l.S=Date.now()+l.I,pl(l,l.I)}function pl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=In(P(l.ba,l),f)}function Li(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Rn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Go(this.i,this.A),this.L!=2&&(dr(),st(17)),hn(this),this.s=2,Fr(this)):pl(this,this.S-l)};function Fr(l){l.j.G==0||l.J||js(l.j,l)}function hn(l){Li(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,jo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Yo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Bt(y.h,l))){if(!l.K&&Bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Us(y),Dn(y);else break e;Fs(y),st(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=In(P(y.Za,y),6e3));if(1>=gl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else yr(y,11)}else if((l.K||y.g==l)&&Us(y),!de(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Oe=L[f];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Tt=Oe[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const lt=Oe[4];lt!=null&&(y.Aa=lt,y.j.info("SVER="+y.Aa));const fn=Oe[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const sn=l.g;if(sn){const Bi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var U=E.h;U.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Xo(U,U.h),U.h=null))}if(E.D){const Bs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bs&&(E.ya=Bs,$e(E.I,E.D,Bs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=kl(E,E.J?E.ia:null,E.W),J.K){yl(E.h,J);var je=J,gt=E.L;gt&&(je.I=gt),je.B&&(Li(je),qe(je)),E.g=J}else zi(E);0<y.i.length&&Gn(y)}else Oe[0]!="stop"&&Oe[0]!="close"||yr(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?yr(y,7):Pt(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}dr(4)}catch{}}var ml=class{constructor(l,f){this.g=l,this.map=f}};function Mi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function gl(l){return l.h?1:l.g?l.g.size:0}function Bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Xo(l,f){l.g?l.g.add(f):l.h=f}function yl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Mi.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function _l(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Y(l.i)}function Ns(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Ds(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Ur(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Ds(l),E=Ns(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fr){this.h=l.h,Fi(this,l.j),this.o=l.o,this.g=l.g,jr(this,l.s),this.l=l.l;var f=l.i,y=new qn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),zr(this,y),this.m=l.m}else l&&(f=String(l).match(bi))?(this.h=!1,Fi(this,f[1]||"",!0),this.o=xe(f[2]||""),this.g=xe(f[3]||"",!0),jr(this,f[4]),this.l=xe(f[5]||"",!0),zr(this,f[6]||"",!0),this.m=xe(f[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push($r(f,Vs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push($r(f,Vs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push($r(y,y.charAt(0)=="/"?wl:El,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",$r(y,Jo)),l.join("")};function nn(l){return new fr(l)}function Fi(l,f,y){l.j=y?xe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function jr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function zr(l,f,y){f instanceof qn?(l.i=f,Hn(l.i,l.h)):(y||(f=$r(f,Tl)),l.i=new qn(f,l.h))}function $e(l,f,y){l.i.set(f,y)}function Br(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function $r(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,vl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function vl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Vs=/[#\/\?@]/g,El=/[#\?:]/g,wl=/[#\?]/g,Tl=/[#\?@]/g,Jo=/#/g;function qn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Ct(l){l.g||(l.g=new Map,l.h=0,l.i&&Pc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=qn.prototype,r.add=function(l,f){Ct(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Cn(l,f){Ct(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Pn(l,f){return Ct(l),f=dn(l,f),l.g.has(f)}r.forEach=function(l,f){Ct(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},r.na=function(){Ct(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},r.V=function(l){Ct(this);let f=[];if(typeof l=="string")Pn(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Ct(this),this.i=null,l=dn(this,l),Pn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function qr(l,f,y){Cn(l,f),0<y.length&&(l.i=null,l.g.set(dn(l,f),Y(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=U;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),l.push(L)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Hn(l,f){f&&!l.j&&(Ct(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Cn(this,E),qr(this,L,y))},l)),l.j=f}function kc(l,f){const y=new Vi;if(m.Image){const E=new Image;E.onload=j(Wt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Wt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Wt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Wt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Il(l,f){const y=new Vi,E=new AbortController,L=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Wt(y,"TestPingServer: error",!1,f)})}function Wt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Nc(){this.g=new $o}function Sl(l,f,y){const E=y||"";try{Ur(l,function(L,U){let J=L;v(L)&&(J=zo(L)),f.push(E+U+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function pr(l){this.l=l.Ub||null,this.j=l.eb||!1}K(pr,Ni),pr.prototype.g=function(){return new Ui(this.l,this.j)},pr.prototype.i=(function(l){return function(){return l}})({});function Ui(l,f){pt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Ui,pt),r=Ui.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Nn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Al(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Al(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?kn(this):Nn(this),this.readyState==3&&Al(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,kn(this))},r.Qa=function(l){this.g&&(this.response=l,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Nn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Nn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function mr(l){let f="";return Ce(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Hr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=mr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):$e(l,f,y))}function Xe(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Xe,pt);var Dc=/^https?$/i,Zo=["POST","PUT"];r=Xe.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():An.g(),this.v=this.o?Ts(this.o):Ts(An),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){ji(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Zo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Os(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){ji(this,U)}};function ji(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,xs(l),rn(l)}function xs(l){l.A||(l.A=!0,mt(l,"complete"),mt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,mt(this,"complete"),mt(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},r.bb=function(){ea(this)};function ea(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Gt(l)!=4||l.Z()!=2)){if(l.u&&Gt(l)==4)Fo(l.Ea,0,l);else if(mt(l,"readystatechange"),Gt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(l.D).match(bi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Dc.test(L?L.toLowerCase():"")}y=E}if(y)mt(l,"complete"),mt(l,"success");else{l.m=6;try{var U=2<Gt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",xs(l)}}finally{rn(l)}}}}function rn(l,f){if(l.g){Os(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||mt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Os(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Gt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Bo(f)}};function ta(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ls(l){const f={};l=(l.g&&2<=Gt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(de(l[E]))continue;var y=V(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function na(l){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,l),this.cb=Wn("retryDelaySeedMs",1e4,l),this.Wa=Wn("forwardChannelMaxRetries",2,l),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(l&&l.concurrentRequestLimit),this.Da=new Nc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,E){st(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=kl(this,null,this.W),Gn(this)};function Pt(l){if(Ms(l),l.G==3){var f=l.U++,y=nn(l.I);if($e(y,"SID",l.K),$e(y,"RID",f),$e(y,"TYPE","terminate"),gr(l,y),f=new Rn(l,l.j,f),f.L=2,f.v=Br(nn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Nl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),qe(f)}Pl(l)}function Dn(l){l.g&&(ra(l),l.g.cancel(),l.g=null)}function Ms(l){Dn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Us(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Gn(l){if(!tn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ve||te(),Z||(Ve(),Z=!0),ce.add(f,l),l.B=0}}function Vc(l,f){return gl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=In(P(l.Ga,l,f),Cl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Rn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Wr(this,L,f),y=nn(this.I),$e(y,"RID",l),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),gr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(mr(U)))+"&"+f:this.m&&Hr(y,this.m,U)),Xo(this.h,L),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",f),$e(y,"SID","null"),L.T=!0,ks(L,y,null)):ks(L,y,f),this.G=2}}else this.G==3&&(l?bs(this,l):this.i.length==0||tn(this.h)||bs(this))};function bs(l,f){var y;f?y=f.l:y=l.U++;const E=nn(l.I);$e(E,"SID",l.K),$e(E,"RID",y),$e(E,"AID",l.T),gr(l,E),l.m&&l.o&&Hr(E,l.m,l.o),y=new Rn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Wr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Xo(l.h,y),ks(y,E,f)}function gr(l,f){l.H&&Ce(l.H,function(y,E){$e(f,E,y)}),l.l&&Ur({},function(y,E){$e(f,E,y)})}function Wr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?P(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=L[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let je=!0;for(let gt=0;gt<y;gt++){let Oe=L[gt].g;const Tt=L[gt].map;if(Oe-=U,0>Oe)U=Math.max(0,L[gt].g-100),je=!1;else try{Sl(Tt,J,"req"+Oe+"_")}catch{E&&E(Tt)}}if(je){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function zi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ve||te(),Z||(Ve(),Z=!0),ce.add(f,l),l.v=0}}function Fs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=In(P(l.Fa,l),Cl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,Rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=In(P(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Dn(this),Rl(this))};function ra(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Rl(l){l.g=new Rn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=nn(l.qa);$e(f,"RID","rpc"),$e(f,"SID",l.K),$e(f,"AID",l.T),$e(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(f,"TO",l.ja),$e(f,"TYPE","xmlhttp"),gr(l,f),l.m&&l.o&&Hr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Br(nn(f)),y.m=null,y.P=!0,Qo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,Dn(this),Fs(this),st(19))};function Us(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function js(l,f){var y=null;if(l.g==f){Us(l),ra(l),l.g=null;var E=2}else if(Bt(l.h,f))y=f.D,yl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Di(),mt(E,new As(E,y)),Gn(l)}else zi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Vc(l,f)||E==2&&Fs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:yr(l,5);break;case 4:yr(l,10);break;case 3:yr(l,6);break;default:yr(l,2)}}}function Cl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function yr(l,f){if(l.j.info("Error code "+f),f==2){var y=P(l.fb,l),E=l.Xa;const L=!E;E=new fr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Fi(E,"https"),Br(E),L?kc(E.toString(),y):Il(E.toString(),y)}else st(2);l.G=0,l.l&&l.l.sa(f),Pl(l),Ms(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Pl(l){if(l.G=0,l.ka=[],l.l){const f=_l(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function kl(l,f,y){var E=y instanceof fr?nn(y):new fr(y);if(E.g!="")f&&(E.g=f+"."+E.g),jr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new fr(null);E&&Fi(U,E),f&&(U.g=f),L&&jr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&$e(E,y,f),$e(E,"VER",l.la),gr(l,E),E}function Nl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new pr({eb:y})):new Xe(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ia(){}r=ia.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function zs(){}zs.prototype.g=function(l,f){return new $t(l,f)};function $t(l,f){pt.call(this),this.g=new na(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!de(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!de(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Kn(this)}K($t,pt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Pt(this.g)},$t.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=zo(l),l=y);f.i.push(new ml(f.Ya++,l)),f.G==3&&Gn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Pt(this.g),delete this.g,$t.aa.N.call(this)};function Dl(l){Bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}K(Dl,Bn);function Vl(){Ss.call(this),this.status=1}K(Vl,Ss);function Kn(l){this.g=l}K(Kn,ia),Kn.prototype.ua=function(){mt(this.g,"a")},Kn.prototype.ta=function(l){mt(this.g,new Dl(l))},Kn.prototype.sa=function(l){mt(this.g,new Vl)},Kn.prototype.ra=function(){mt(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,O_=function(){return new zs},x_=function(){return Di()},V_=$n,Id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,bu=Cs,hl.COMPLETE="complete",D_=hl,Is.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Va=Is,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,N_=Xe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const Dg="@firebase/firestore",Vg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new jd("@firebase/firestore");function co(){return hs.logLevel}function re(r,...e){if(hs.logLevel<=Ne.DEBUG){const t=e.map(ef);hs.debug(`Firestore (${ko}): ${r}`,...t)}}function xr(r,...e){if(hs.logLevel<=Ne.ERROR){const t=e.map(ef);hs.error(`Firestore (${ko}): ${r}`,...t)}}function yi(r,...e){if(hs.logLevel<=Ne.WARN){const t=e.map(ef);hs.warn(`Firestore (${ko}): ${r}`,...t)}}function ef(r){if(typeof r=="string")return r;try{/**
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
 */function ve(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,L_(r,s,t)}function L_(r,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||L_(e,o,s)}function Ie(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class R1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C1{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new is;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new is,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new is)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new M_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class P1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class k1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new P1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function D1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function b_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=D1(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Pe(r,e){return r<e?-1:r>e?1:0}function Sd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Pe(s,o);{const u=b_(),h=V1(u.encode(Og(r,t)),u.encode(Og(e,t)));return h!==0?h:Pe(s,o)}}t+=s>65535?2:1}return Pe(r.length,e.length)}function Og(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function V1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Pe(r[t],e[t]);return Pe(r.length,e.length)}function wo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="__name__";class Zn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Zn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Pe(e.length,t.length)}static compareSegments(e,t){const s=Zn.isNumericId(e),o=Zn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):Sd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mi.fromString(e.substring(4,e.length-2))}}class We extends Zn{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const x1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Zn{construct(e,t,s){return new Vt(e,t,s)}static isValidIdentifier(e){return x1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lg}static keyField(){return new Vt([Lg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(We.fromString(e))}static fromName(e){return new he(We.fromString(e).popFirst(5))}static empty(){return new he(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(r,e,t){if(!t)throw new ie(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function O1(r,e,t,s){if(e===!0&&s===!0)throw new ie(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Mg(r){if(!he.isDocumentKey(r))throw new ie(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function bg(r){if(he.isDocumentKey(r))throw new ie(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function U_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function fc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Fa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fc(r);throw new ie(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function dt(r,e){const t={typeString:r};return e&&(t.value=e),t}function sl(r,e){if(!U_(r))throw new ie(z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie(z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=-62135596800,Ug=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ug);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fg)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ug}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:dt("string",Qe._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Qe(0,0))}static max(){return new Te(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ha=-1;function L1(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new _i(o,he.empty(),e)}function M1(r){return new _i(r.readTime,r.key,Ha)}class _i{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new _i(Te.min(),he.empty(),Ha)}static max(){return new _i(Te.max(),he.empty(),Ha)}}function b1(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(r.documentKey,e.documentKey),t!==0?t:Pe(r.largestBatchId,e.largestBatchId))}/**
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
 */const F1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==F1)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function j1(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class pc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}pc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=-1;function mc(r){return r==null}function Xu(r){return r===0&&1/r==-1/0}function z1(r){return typeof r=="number"&&Number.isInteger(r)&&!Xu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="";function B1(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=jg(e)),e=$1(r.get(t),e);return jg(e)}function $1(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case j_:t+="";break;default:t+=u}}return t}function jg(r){return r+j_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function fs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function z_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bg(this.data.getIterator())}getIteratorFrom(e){return new Bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new Et(Vt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class B_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new B_("Invalid base64 string: "+u):u}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const q1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=q1.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(r.seconds),nanos:at(r.nanos)}}function at(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ei(r){return typeof r=="string"?xt.fromBase64String(r):xt.fromUint8Array(r)}/**
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
 */const $_="server_timestamp",q_="__type__",H_="__previous_value__",W_="__local_write_time__";function rf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[q_])===null||t===void 0?void 0:t.stringValue)===$_}function gc(r){const e=r.mapValue.fields[H_];return rf(e)?gc(e):e}function Wa(r){const e=vi(r.mapValue.fields[W_].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t,s,o,u,h,m,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const Ju="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Ju}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const G_="__type__",W1="__max__",ku={mapValue:{}},K_="__vector__",Zu="value";function wi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?rf(r)?4:K1(r)?9007199254740991:G1(r)?10:11:ve(28295,{value:r})}function sr(r,e){if(r===e)return!0;const t=wi(r);if(t!==wi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=vi(o.timestampValue),m=vi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ei(o.bytesValue).isEqual(Ei(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?Xu(h)===Xu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return wo(r.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(zg(h)!==zg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!sr(h[g],m[g])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Ka(r,e){return(r.values||[]).find((t=>sr(t,e)))!==void 0}function To(r,e){if(r===e)return 0;const t=wi(r),s=wi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),g=at(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return $g(r.timestampValue,e.timestampValue);case 4:return $g(Wa(r),Wa(e));case 5:return Sd(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ei(u),g=Ei(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Pe(m[v],g[v]);if(w!==0)return w}return Pe(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Pe(at(u.latitude),at(h.latitude));return m!==0?m:Pe(at(u.longitude),at(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return qg(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,v,w;const A=u.fields||{},P=h.fields||{},j=(m=A[Zu])===null||m===void 0?void 0:m.arrayValue,K=(g=P[Zu])===null||g===void 0?void 0:g.arrayValue,Y=Pe(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=K==null?void 0:K.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:qg(j,K)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===ku.mapValue&&h===ku.mapValue)return 0;if(u===ku.mapValue)return 1;if(h===ku.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const P=Sd(g[A],w[A]);if(P!==0)return P;const j=To(m[g[A]],v[w[A]]);if(j!==0)return j}return Pe(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function $g(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Pe(r,e);const t=vi(r),s=vi(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function qg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=To(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function Io(r){return Ad(r)}function Ad(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=vi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ei(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return he.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Ad(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Ad(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function Fu(r){switch(wi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ei(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Fu(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return fs(s.fields,((u,h)=>{o+=u.length+Fu(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function Hg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Rd(r){return!!r&&"integerValue"in r}function sf(r){return!!r&&"arrayValue"in r}function Wg(r){return!!r&&"nullValue"in r}function Gg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Uu(r){return!!r&&"mapValue"in r}function G1(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[G_])===null||t===void 0?void 0:t.stringValue)===K_}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return fs(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ua(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function K1(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===W1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Vt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ua(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){fs(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new En(Ua(this.value))}}function Q_(r){const e=[];return fs(r.fields,((t,s)=>{const o=new Vt([t]);if(Uu(s)){const u=Q_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new jt(e,0,Te.min(),Te.min(),Te.min(),En.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,Te.min(),Te.min(),En.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Te.min(),Te.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function Kg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=To(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!sr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qa{constructor(e,t="asc"){this.field=e,this.dir=t}}function Q1(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Y_{}class ht extends Y_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new X1(e,t,s):t==="array-contains"?new eS(e,s):t==="in"?new tS(e,s):t==="not-in"?new nS(e,s):t==="array-contains-any"?new rS(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new J1(e,s):new Z1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&wi(this.value)===wi(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends Y_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new zn(e,t)}matches(e){return X_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function X_(r){return r.op==="and"}function J_(r){return Y1(r)&&X_(r)}function Y1(r){for(const e of r.filters)if(e instanceof zn)return!1;return!0}function Cd(r){if(r instanceof ht)return r.field.canonicalString()+r.op.toString()+Io(r.value);if(J_(r))return r.filters.map((e=>Cd(e))).join(",");{const e=r.filters.map((t=>Cd(t))).join(",");return`${r.op}(${e})`}}function Z_(r,e){return r instanceof ht?(function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(r,e):r instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Z_(h,o.filters[m])),!0):!1})(r,e):void ve(19439)}function ev(r){return r instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`})(r):r instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(ev).join(" ,")+"}"})(r):"Filter"}class X1 extends ht{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class J1 extends ht{constructor(e,t){super(e,"in",t),this.keys=tv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Z1 extends ht{constructor(e,t){super(e,"not-in",t),this.keys=tv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function tv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>he.fromName(s.referenceValue)))}class eS extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&Ka(t.arrayValue,this.value)}}class tS extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class nS extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class rS extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ka(this.value.arrayValue,s)))}}/**
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
 */class iS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Yg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new iS(r,e,t,s,o,u,h)}function of(r){const e=Ie(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Cd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Io(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Io(s))).join(",")),e.Pe=t}return e.Pe}function af(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Q1(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Z_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Qg(r.startAt,e.startAt)&&Qg(r.endAt,e.endAt)}function Pd(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function sS(r,e,t,s,o,u,h,m){return new Vo(r,e,t,s,o,u,h,m)}function lf(r){return new Vo(r)}function Xg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function nv(r){return r.collectionGroup!==null}function ja(r){const e=Ie(r);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Et(Vt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Qa(u,s))})),t.has(Vt.keyField().canonicalString())||e.Te.push(new Qa(Vt.keyField(),s))}return e.Te}function tr(r){const e=Ie(r);return e.Ie||(e.Ie=oS(e,ja(r))),e.Ie}function oS(r,e){if(r.limitType==="F")return Yg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Qa(o.field,u)}));const t=r.endAt?new ec(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ec(r.startAt.position,r.startAt.inclusive):null;return Yg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function kd(r,e){const t=r.filters.concat([e]);return new Vo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function tc(r,e,t){return new Vo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function yc(r,e){return af(tr(r),tr(e))&&r.limitType===e.limitType}function rv(r){return`${of(tr(r))}|lt:${r.limitType}`}function ho(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>ev(o))).join(", ")}]`),mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Io(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Io(o))).join(",")),`Target(${s})`})(tr(r))}; limitType=${r.limitType})`}function _c(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of ja(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=Kg(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,ja(s),o)||s.endAt&&!(function(h,m,g){const v=Kg(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,ja(s),o))})(r,e)}function aS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function iv(r){return(e,t)=>{let s=!1;for(const o of ja(r)){const u=lS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function lS(r,e,t){const s=r.field.isKeyField()?he.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?To(g,v):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=new rt(he.comparator);function Or(){return uS}const sv=new rt(he.comparator);function xa(...r){let e=sv;for(const t of r)e=e.insert(t.key,t);return e}function ov(r){let e=sv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return za()}function av(){return za()}function za(){return new ps((r=>r.toString()),((r,e)=>r.isEqual(e)))}const cS=new rt(he.comparator),hS=new Et(he.comparator);function De(...r){let e=hS;for(const t of r)e=e.add(t);return e}const dS=new Et(Pe);function fS(){return dS}/**
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
 */function uf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function lv(r){return{integerValue:""+r}}function pS(r,e){return z1(e)?lv(e):uf(r,e)}/**
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
 */class vc{constructor(){this._=void 0}}function mS(r,e,t){return r instanceof Ya?(function(o,u){const h={fields:{[q_]:{stringValue:$_},[W_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rf(u)&&(u=gc(u)),u&&(h.fields[H_]=u),{mapValue:h}})(t,e):r instanceof Xa?cv(r,e):r instanceof Ja?hv(r,e):(function(o,u){const h=uv(o,u),m=Jg(h)+Jg(o.Ee);return Rd(h)&&Rd(o.Ee)?lv(m):uf(o.serializer,m)})(r,e)}function gS(r,e,t){return r instanceof Xa?cv(r,e):r instanceof Ja?hv(r,e):t}function uv(r,e){return r instanceof nc?(function(s){return Rd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ya extends vc{}class Xa extends vc{constructor(e){super(),this.elements=e}}function cv(r,e){const t=dv(e);for(const s of r.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ja extends vc{constructor(e){super(),this.elements=e}}function hv(r,e){let t=dv(e);for(const s of r.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class nc extends vc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Jg(r){return at(r.integerValue||r.doubleValue)}function dv(r){return sf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t){this.field=e,this.transform=t}}function _S(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Xa&&o instanceof Xa||s instanceof Ja&&o instanceof Ja?wo(s.elements,o.elements,sr):s instanceof nc&&o instanceof nc?sr(s.Ee,o.Ee):s instanceof Ya&&o instanceof Ya})(r.transform,e.transform)}class vS{constructor(e,t){this.version=e,this.transformResults=t}}class Nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ec{}function fv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new mv(r.key,Nr.none()):new ol(r.key,r.data,Nr.none());{const t=r.data,s=En.empty();let o=new Et(Vt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ms(r.key,s,new Un(o.toArray()),Nr.none())}}function ES(r,e,t){r instanceof ol?(function(o,u,h){const m=o.value.clone(),g=ey(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof ms?(function(o,u,h){if(!ju(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ey(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(pv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ba(r,e,t,s){return r instanceof ol?(function(u,h,m,g){if(!ju(u.precondition,h))return m;const v=u.value.clone(),w=ty(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof ms?(function(u,h,m,g){if(!ju(u.precondition,h))return m;const v=ty(u.fieldTransforms,g,h),w=h.data;return w.setAll(pv(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(r,e,t,s):(function(u,h,m){return ju(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function wS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=uv(s.transform,o||null);u!=null&&(t===null&&(t=En.empty()),t.set(s.field,u))}return t||null}function Zg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((u,h)=>_S(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ol extends Ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ms extends Ec{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function pv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function ey(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,gS(h,m,t[o]))}return s}function ty(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,mS(u,h,e))}return s}class mv extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TS extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&ES(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=av();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=fv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>Zg(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>Zg(t,s)))}}class cf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return cS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new cf(e,t,s,o)}}/**
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
 */class SS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Le;function RS(r){switch(r){case z.OK:return ve(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function gv(r){if(r===void 0)return xr("GRPC error has no .code"),z.UNKNOWN;switch(r){case ct.OK:return z.OK;case ct.CANCELLED:return z.CANCELLED;case ct.UNKNOWN:return z.UNKNOWN;case ct.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ct.INTERNAL:return z.INTERNAL;case ct.UNAVAILABLE:return z.UNAVAILABLE;case ct.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ct.NOT_FOUND:return z.NOT_FOUND;case ct.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ct.ABORTED:return z.ABORTED;case ct.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ct.DATA_LOSS:return z.DATA_LOSS;default:return ve(39323,{code:r})}}(Le=ct||(ct={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const CS=new mi([4294967295,4294967295],0);function ny(r){const e=b_().encode(r),t=new k_;return t.update(e),new Uint8Array(t.digest())}function ry(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new mi([t,s],0),new mi([o,u],0)]}class hf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=mi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(mi.fromNumber(s)));return o.compare(CS)===1&&(o=new mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ny(e),[s,o]=ry(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new hf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=ny(e),[s,o]=ry(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wc(Te.min(),o,new rt(Pe),Or(),De())}}class al{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new al(s,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class yv{constructor(e,t){this.targetId=e,this.De=t}}class _v{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class iy{constructor(){this.ve=0,this.Ce=sy(),this.Fe=xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=De(),t=De(),s=De();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}})),new al(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=sy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class PS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Or(),this.je=Nu(),this.Je=Nu(),this.He=new rt(Pe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new he(u.path);this.Xe(t,h,jt.newNoDocument(h,Te.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ei(s).toUint8Array()}catch(g){if(g instanceof B_)return yi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new hf(h,o,u)}catch(g){return yi(g instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&Pd(m.target)){const g=new he(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=De();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new wc(e,t,this.He,this.ze,s);return this.ze=Or(),this.je=Nu(),this.Je=Nu(),this.He=new rt(Pe),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new iy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Et(Pe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Et(Pe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new iy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Nu(){return new rt(he.comparator)}function sy(){return new rt(he.comparator)}const kS={asc:"ASCENDING",desc:"DESCENDING"},NS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DS={and:"AND",or:"OR"};class VS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nd(r,e){return r.useProto3Json||mc(e)?e:{value:e}}function rc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function xS(r,e){return rc(r,e.toTimestamp())}function nr(r){return Fe(!!r,49232),Te.fromTimestamp((function(t){const s=vi(t);return new Qe(s.seconds,s.nanos)})(r))}function df(r,e){return Dd(r,e).canonicalString()}function Dd(r,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Ev(r){const e=We.fromString(r);return Fe(Av(e),10190,{key:e.toString()}),e}function Vd(r,e){return df(r.databaseId,e.path)}function cd(r,e){const t=Ev(e);if(t.get(1)!==r.databaseId.projectId)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new he(Tv(t))}function wv(r,e){return df(r.databaseId,e)}function OS(r){const e=Ev(r);return e.length===4?We.emptyPath():Tv(e)}function xd(r){return new We(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tv(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function oy(r,e,t){return{name:Vd(r,e),fields:t.value.mapValue.fields}}function LS(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),xt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),xt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?z.UNKNOWN:gv(v.code);return new ie(w,v.message||"")})(h);t=new _v(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=cd(r,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Te.min(),m=new En({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new zu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=cd(r,s.document),u=s.readTime?nr(s.readTime):Te.min(),h=jt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=cd(r,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new AS(o,u),m=s.targetId;t=new yv(m,h)}}return t}function MS(r,e){let t;if(e instanceof ol)t={update:oy(r,e.key,e.value)};else if(e instanceof mv)t={delete:Vd(r,e.key)};else if(e instanceof ms)t={update:oy(r,e.key,e.data),updateMask:HS(e.fieldMask)};else{if(!(e instanceof TS))return ve(16599,{Rt:e.type});t={verify:Vd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ya)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof nc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw ve(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:xS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)})(r,e.precondition)),t}function bS(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Te.min())&&(h=nr(u)),new vS(h,o.transformResults||[])})(t,e)))):[]}function FS(r,e){return{documents:[wv(r,e.path)]}}function US(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=wv(r,o);const u=(function(v){if(v.length!==0)return Sv(zn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(P){return{field:fo(P.field),direction:BS(P.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Nd(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function jS(r){let e=OS(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const P=Iv(A);return P instanceof zn&&J_(P)?P.getFilters():[P]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((P=>(function(K){return new Qa(po(K.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(P)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let P;return P=typeof A=="object"?A.value:A,mc(P)?null:P})(t.limit));let g=null;t.startAt&&(g=(function(A){const P=!!A.before,j=A.values||[];return new ec(j,P)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const P=!A.before,j=A.values||[];return new ec(j,P)})(t.endAt)),sS(e,o,h,u,m,"F",g,v)}function zS(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Iv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=po(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=po(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=po(t.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=po(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ht.create(po(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>Iv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function BS(r){return kS[r]}function $S(r){return NS[r]}function qS(r){return DS[r]}function fo(r){return{fieldPath:r.canonicalString()}}function po(r){return Vt.fromServerFormat(r.fieldPath)}function Sv(r){return r instanceof ht?(function(t){if(t.op==="=="){if(Gg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NAN"}};if(Wg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NAN"}};if(Wg(t.value))return{unaryFilter:{field:fo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fo(t.field),op:$S(t.op),value:t.value}}})(r):r instanceof zn?(function(t){const s=t.getFilters().map((o=>Sv(o)));return s.length===1?s[0]:{compositeFilter:{op:qS(t.op),filters:s}}})(r):ve(54877,{filter:r})}function HS(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Av(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,s,o,u=Te.min(),h=Te.min(),m=xt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.gt=e}}function GS(r){const e=jS({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?tc(e,e.limit,"L"):e}/**
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
 */class KS{constructor(){this.Dn=new QS}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(_i.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class QS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Et(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Et(We.comparator)).toArray()}}/**
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
 */const ay={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rv=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(Rv,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new So(0)}static ur(){return new So(-1)}}/**
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
 */const ly="LruGarbageCollector",YS=1048576;function uy([r,e],[t,s]){const o=Pe(r,t);return o===0?Pe(e,s):o}class XS{constructor(e){this.Tr=e,this.buffer=new Et(uy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();uy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(ly,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?re(ly,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Rr(3e5)}))}}class ZS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(pc.ue);const s=new XS(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(ay)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ay):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),co()<=Ne.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function eA(r,e){return new ZS(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.changes=new ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ba(s.mutation,o,Un.empty(),Qe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,De()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=De()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=xa();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,De())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Or();const h=za(),m=(function(){return za()})();return t.forEach(((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof ms)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ba(w.mutation,v,w.mutation.getFieldMask(),Qe.now())):h.set(v.key,Un.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>{var A;return m.set(v,new nA(w,(A=h.get(v))!==null&&A!==void 0?A:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=za();let o=new rt(((h,m)=>h-m)),u=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||Un.empty();w=m.applyToLocalView(v,w),s.set(g,w);const A=(o.get(m.batchId)||De()).add(g);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,A=av();w.forEach((P=>{if(!u.has(P)){const j=fv(t.get(P),s.get(P));j!==null&&A.set(P,j),u=u.add(P)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(rs());let m=Ha,g=u;return h.next((v=>$.forEach(v,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((P=>{g=g.insert(w,P)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,g,v,De()))).next((w=>({batchId:m,changes:ov(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let o=xa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=xa();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const v=(function(A,P){return new Vo(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((A,P)=>{h=h.insert(A,P)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,jt.newInvalidDocument(w)))}));let m=xa();return h.forEach(((g,v)=>{const w=u.get(g);w!==void 0&&Ba(w.mutation,v,Un.empty(),Qe.now()),_c(t,v)&&(m=m.insert(g,v))})),m}))}}/**
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
 */class iA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:GS(o.bundledQuery),readTime:nr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class sA{constructor(){this.overlays=new rt(he.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new rt(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=rs(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=rs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return $.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new SS(t,s));let u=this.kr.get(t);u===void 0&&(u=De(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
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
 */class oA{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.qr=new Et(Rt.Qr),this.$r=new Et(Rt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Rt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Rt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new he(new We([])),s=new Rt(t,e),o=new Rt(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new he(new We([])),s=new Rt(t,e),o=new Rt(t,e+1);let u=De();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Rt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Rt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return he.comparator(e.key,t.key)||Pe(e.Hr,t.Hr)}static Ur(e,t){return Pe(e.Hr,t.Hr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Et(Rt.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new IS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new Rt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?nf:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Et(Pe);return t.forEach((o=>{const u=new Rt(o,0),h=new Rt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Rt(new he(u),0);let m=new Et(Pe);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Hr)),!0)}),h),$.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(o=>{const u=new Rt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Rt(t,0),o=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.ni=e,this.docs=(function(){return new rt(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=Or();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():jt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Or();const h=t.path,m=new he(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||b1(M1(w),s)<=0||(o.has(w.key)||_c(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new uA(this)}getSize(e){return $.resolve(this.size)}}class uA extends tA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.persistence=e,this.ii=new ps((t=>of(t)),af),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new ff,this.targetCount=0,this._i=So.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new So(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t){this.ai={},this.overlays={},this.ui=new pc(0),this.ci=!1,this.ci=!0,this.li=new oA,this.referenceDelegate=e(this),this.hi=new cA(this),this.indexManager=new KS,this.remoteDocumentCache=(function(o){return new lA(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new WS(t),this.Ti=new iA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new aA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new hA(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class hA extends U1{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Ai=new ff,this.Ri=null}static Vi(e){return new pf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const o=he.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ic{constructor(e,t){this.persistence=e,this.gi=new ps((s=>B1(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=eA(this,t)}static Vi(e,t){return new ic(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=De(),o=De();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new mf(e,t.fromCache,s,o)}}/**
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
 */class dA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return jw()?8:j1(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new dA;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(co()<=Ne.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",ho(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(co()<=Ne.DEBUG&&re("QueryEngine","Query:",ho(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(co()<=Ne.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",ho(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):$.resolve())}ps(e,t){if(Xg(t))return $.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=tc(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=De(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,m);return this.Ds(t,v,h,g.readTime)?this.ps(e,tc(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return Xg(t)||o.isEqual(Te.min())?$.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?$.resolve(null):(co()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ho(t)),this.vs(e,h,t,L1(o,Ha)).next((m=>m)))}))}bs(e,t){let s=new Et(iv(e));return t.forEach(((o,u)=>{_c(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return co()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ho(t)),this.gs.getDocumentsMatchingQuery(e,t,_i.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const gf="LocalStore",pA=3e8;class mA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new rt(Pe),this.Ms=new ps((u=>of(u)),af),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function gA(r,e,t,s){return new mA(r,e,t,s)}async function Pv(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=De();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function yA(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,w){const A=v.batch,P=A.keys();let j=$.resolve();return P.forEach((K=>{j=j.next((()=>w.getEntry(g,K))).next((Y=>{const q=v.docVersions.get(K);Fe(q!==null,48541),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=De();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function kv(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function _A(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,A)=>{const P=o.get(A);if(!P)return;m.push(t.hi.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.hi.addMatchingKeys(u,w.addedDocuments,A))));let j=P.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),(function(Y,q,ye){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=pA?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(P,j,w)&&m.push(t.hi.updateTargetData(u,j))}));let g=Or(),v=De();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(vA(u,h,e.documentUpdates).next((w=>{g=w.Ls,v=w.ks}))),!s.isEqual(Te.min())){const w=t.hi.getLastRemoteSnapshotVersion(u).next((A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,v))).next((()=>g))})).then((u=>(t.Fs=o,u)))}function vA(r,e,t){let s=De(),o=De();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=Or();return t.forEach(((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):re(gf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function EA(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function wA(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new hi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Od(r,e,t){const s=Ie(r),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Do(h))throw h;re(gf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function cy(r,e,t){const s=Ie(r);let o=Te.min(),u=De();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,w){const A=Ie(g),P=A.Ms.get(w);return P!==void 0?$.resolve(A.Fs.get(P)):A.hi.getTargetData(v,w)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:De()))).next((m=>(TA(s,aS(e),m),{documents:m,qs:u})))))}function TA(r,e,t){let s=r.xs.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.xs.set(e,s)}class hy{constructor(){this.activeTargetIds=fS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IA{constructor(){this.Fo=new hy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new hy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class SA{xo(e){}shutdown(){}}/**
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
 */const dy="ConnectivityMonitor";class fy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(dy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(dy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Du=null;function Ld(){return Du===null?Du=(function(){return 268435456+Math.round(2147483648*Math.random())})():Du++,"0x"+Du.toString(16)}/**
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
 */const hd="RestConnection",AA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Ld(),m=this.Go(e,t.toUriEncodedString());re(hd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:v}=new URL(m),w=Ro(v);return this.jo(e,m,g,s,w).then((A=>(re(hd,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw yi(hd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=AA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class PA extends RA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Ld();return new Promise(((m,g)=>{const v=new N_;v.setWithCredentials(!0),v.listenOnce(D_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case bu.NO_ERROR:const A=v.getResponseJson();re(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case bu.TIMEOUT:re(Ft,`RPC '${e}' ${h} timed out`),g(new ie(z.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const P=v.getStatus();if(re(Ft,`RPC '${e}' ${h} failed with status:`,P,"response text:",v.getResponseText()),P>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const K=j==null?void 0:j.error;if(K&&K.status&&K.message){const Y=(function(ye){const de=ye.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(de)>=0?de:z.UNKNOWN})(K.status);g(new ie(Y,K.message))}else g(new ie(z.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new ie(z.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{re(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ft,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Ld(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=O_(),m=x_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");re(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);this.T_(A);let P=!1,j=!1;const K=new CA({Ho:q=>{j?re(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(P||(re(Ft,`Opening RPC '${e}' stream ${o} transport.`),A.open(),P=!0),re(Ft,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Yo:()=>A.close()}),Y=(q,ye,de)=>{q.listen(ye,(fe=>{try{de(fe)}catch(Se){setTimeout((()=>{throw Se}),0)}}))};return Y(A,Va.EventType.OPEN,(()=>{j||(re(Ft,`RPC '${e}' stream ${o} transport opened.`),K.s_())})),Y(A,Va.EventType.CLOSE,(()=>{j||(j=!0,re(Ft,`RPC '${e}' stream ${o} transport closed`),K.__(),this.I_(A))})),Y(A,Va.EventType.ERROR,(q=>{j||(j=!0,yi(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),K.__(new ie(z.UNAVAILABLE,"The operation could not be completed")))})),Y(A,Va.EventType.MESSAGE,(q=>{var ye;if(!j){const de=q.data[0];Fe(!!de,16349);const fe=de,Se=(fe==null?void 0:fe.error)||((ye=fe[0])===null||ye===void 0?void 0:ye.error);if(Se){re(Ft,`RPC '${e}' stream ${o} received error:`,Se);const Be=Se.status;let Ce=(function(R){const k=ct[R];if(k!==void 0)return gv(k)})(Be),D=Se.message;Ce===void 0&&(Ce=z.INTERNAL,D="Unknown error status: "+Be+" with message "+Se.message),j=!0,K.__(new ie(Ce,D)),A.close()}else re(Ft,`RPC '${e}' stream ${o} received:`,de),K.a_(de)}})),Y(m,V_.STAT_EVENT,(q=>{q.stat===Id.PROXY?re(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Id.NOPROXY&&re(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.o_()}),0),K}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function dd(){return typeof document<"u"?document:null}/**
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
 */function Tc(r){return new VS(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="PersistentStream";class Dv{constructor(e,t,s,o,u,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Nv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ie(z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(py,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(py,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kA extends Dv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=LS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?nr(h.readTime):Te.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=xd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=Pd(g)?{documents:FS(u,g)}:{query:US(u,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=vv(u,h.resumeToken);const v=Nd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=rc(u,h.snapshotVersion.toTimestamp());const v=Nd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=zS(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=xd(this.serializer),t.removeTarget=e,this.k_(t)}}class NA extends Dv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=bS(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=xd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>MS(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{}class VA extends DA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Dd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(z.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Dd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(z.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class xA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(xr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="RemoteStore";class OA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{gs(this)&&(re(ds,"Restarting streams for network reachability change."),await(async function(g){const v=Ie(g);v.Ia.add(4),await ll(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Ic(v)})(this))}))})),this.Aa=new xA(s,o)}}async function Ic(r){if(gs(r))for(const e of r.da)await e(!0)}async function ll(r){for(const e of r.da)await e(!1)}function Vv(r,e){const t=Ie(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ef(t)?vf(t):xo(t).x_()&&_f(t,e))}function yf(r,e){const t=Ie(r),s=xo(t);t.Ta.delete(e),s.x_()&&xv(t,e),t.Ta.size===0&&(s.x_()?s.B_():gs(t)&&t.Aa.set("Unknown"))}function _f(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}xo(r).H_(e)}function xv(r,e){r.Ra.$e(e),xo(r).Y_(e)}function vf(r){r.Ra=new PS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),xo(r).start(),r.Aa.aa()}function Ef(r){return gs(r)&&!xo(r).M_()&&r.Ta.size>0}function gs(r){return Ie(r).Ia.size===0}function Ov(r){r.Ra=void 0}async function LA(r){r.Aa.set("Online")}async function MA(r){r.Ta.forEach(((e,t)=>{_f(r,e)}))}async function bA(r,e){Ov(r),Ef(r)?(r.Aa.la(e),vf(r)):r.Aa.set("Unknown")}async function FA(r,e,t){if(r.Aa.set("Online"),e instanceof _v&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(r,e)}catch(s){re(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sc(r,s)}else if(e instanceof zu?r.Ra.Ye(e):e instanceof yv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Te.min()))try{const s=await kv(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ta.get(v);w&&u.Ta.set(v,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const w=u.Ta.get(g);if(!w)return;u.Ta.set(g,w.withResumeToken(xt.EMPTY_BYTE_STRING,w.snapshotVersion)),xv(u,g);const A=new hi(w.target,g,v,w.sequenceNumber);_f(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){re(ds,"Failed to raise snapshot:",s),await sc(r,s)}}async function sc(r,e,t){if(!Do(e))throw e;r.Ia.add(1),await ll(r),r.Aa.set("Offline"),t||(t=()=>kv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(ds,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ic(r)}))}function Lv(r,e){return e().catch((t=>sc(r,t,e)))}async function Sc(r){const e=Ie(r),t=Ti(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:nf;for(;UA(e);)try{const o=await EA(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,jA(e,o)}catch(o){await sc(e,o)}Mv(e)&&bv(e)}function UA(r){return gs(r)&&r.Pa.length<10}function jA(r,e){r.Pa.push(e);const t=Ti(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Mv(r){return gs(r)&&!Ti(r).M_()&&r.Pa.length>0}function bv(r){Ti(r).start()}async function zA(r){Ti(r).na()}async function BA(r){const e=Ti(r);for(const t of r.Pa)e.X_(t.mutations)}async function $A(r,e,t){const s=r.Pa.shift(),o=cf.from(s,e,t);await Lv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Sc(r)}async function qA(r,e){e&&Ti(r).Z_&&await(async function(s,o){if((function(h){return RS(h)&&h!==z.ABORTED})(o.code)){const u=s.Pa.shift();Ti(s).N_(),await Lv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Sc(s)}})(r,e),Mv(r)&&bv(r)}async function my(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),re(ds,"RemoteStore received new credentials");const s=gs(t);t.Ia.add(3),await ll(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ic(t)}async function HA(r,e){const t=Ie(r);e?(t.Ia.delete(2),await Ic(t)):e||(t.Ia.add(2),await ll(t),t.Aa.set("Unknown"))}function xo(r){return r.Va||(r.Va=(function(t,s,o){const u=Ie(t);return u.ia(),new kA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:LA.bind(null,r),e_:MA.bind(null,r),n_:bA.bind(null,r),J_:FA.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Ef(r)?vf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Ov(r))}))),r.Va}function Ti(r){return r.ma||(r.ma=(function(t,s,o){const u=Ie(t);return u.ia(),new NA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:zA.bind(null,r),n_:qA.bind(null,r),ea:BA.bind(null,r),ta:$A.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Sc(r)):(await r.ma.stop(),r.Pa.length>0&&(re(ds,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new wf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(r,e){if(xr("AsyncQueue",`${e}: ${r}`),Do(r))return new ie(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=xa(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new _o;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.fa=new rt(he.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ao{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ao(e,t,_o.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class GA{constructor(){this.queries=yy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Ie(t),u=o.queries;o.queries=yy(),u.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new ie(z.ABORTED,"Firestore shutting down"))}}function yy(){return new ps((r=>rv(r)),yc)}async function KA(r,e){const t=Ie(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new WA,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Tf(h,`Initialization of query '${ho(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&If(t)}async function QA(r,e){const t=Ie(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function YA(r,e){const t=Ie(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&If(t)}function XA(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function If(r){r.Da.forEach((e=>{e.next()}))}var Md,_y;(_y=Md||(Md={})).Fa="default",_y.Cache="cache";class JA{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Md.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.key=e}}class Uv{constructor(e){this.key=e}}class ZA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=De(),this.mutatedKeys=De(),this.Xa=iv(e),this.eu=new _o(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new gy,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const P=o.get(w),j=_c(this.query,A)?A:null,K=!!P&&this.mutatedKeys.has(P.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let q=!1;P&&j?P.data.isEqual(j.data)?K!==Y&&(s.track({type:3,doc:j}),q=!0):this.iu(P,j)||(s.track({type:2,doc:j}),q=!0,(g&&this.Xa(j,g)>0||v&&this.Xa(j,v)<0)&&(m=!0)):!P&&j?(s.track({type:0,doc:j}),q=!0):P&&!j&&(s.track({type:1,doc:P}),q=!0,(g||v)&&(m=!0)),q&&(j?(h=h.add(j),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,A)=>(function(j,K){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:q})}};return Y(j)-Y(K)})(w.type,A.type)||this.Xa(w.doc,A.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new Ao(this.query,e.eu,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new gy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=De(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Uv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Fv(s))})),t}uu(e){this.Ha=e.qs,this.Za=De();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ao.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Sf="SyncEngine";class eR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class tR{constructor(e){this.key=e,this.lu=!1}}class nR{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ps((m=>rv(m)),yc),this.Tu=new Map,this.Iu=new Set,this.du=new rt(he.comparator),this.Eu=new Map,this.Au=new ff,this.Ru={},this.Vu=new Map,this.mu=So.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rR(r,e,t=!0){const s=Hv(r);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await jv(s,e,t,!0),o}async function iR(r,e){const t=Hv(r);await jv(t,e,!0,!1)}async function jv(r,e,t,s){const o=await wA(r.localStore,tr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await sR(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Vv(r.remoteStore,o),m}async function sR(r,e,t,s,o){r.gu=(A,P,j)=>(async function(Y,q,ye,de){let fe=q.view.nu(ye);fe.Ds&&(fe=await cy(Y.localStore,q.query,!1).then((({documents:D})=>q.view.nu(D,fe))));const Se=de&&de.targetChanges.get(q.targetId),Be=de&&de.targetMismatches.get(q.targetId)!=null,Ce=q.view.applyChanges(fe,Y.isPrimaryClient,Se,Be);return Ey(Y,q.targetId,Ce._u),Ce.snapshot})(r,A,P,j);const u=await cy(r.localStore,e,!0),h=new ZA(e,u.qs),m=h.nu(u.documents),g=al.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(m,r.isPrimaryClient,g);Ey(r,t,v._u);const w=new eR(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function oR(r,e,t){const s=Ie(r),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!yc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Od(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&yf(s.remoteStore,o.targetId),bd(s,o.targetId)})).catch(No)):(bd(s,o.targetId),await Od(s.localStore,o.targetId,!0))}async function aR(r,e){const t=Ie(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),yf(t.remoteStore,s.targetId))}async function lR(r,e,t){const s=mR(r);try{const o=await(function(h,m){const g=Ie(h),v=Qe.now(),w=m.reduce(((j,K)=>j.add(K.key)),De());let A,P;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let K=Or(),Y=De();return g.Os.getEntries(j,w).next((q=>{K=q,K.forEach(((ye,de)=>{de.isValidDocument()||(Y=Y.add(ye))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,K))).next((q=>{A=q;const ye=[];for(const de of m){const fe=wS(de,A.get(de.key).overlayedDocument);fe!=null&&ye.push(new ms(de.key,fe,Q_(fe.value.mapValue),Nr.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,ye,m)})).next((q=>{P=q;const ye=q.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(j,q.batchId,ye)}))})).then((()=>({batchId:P.batchId,changes:ov(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new rt(Pe)),v=v.insert(m,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await ul(s,o.changes),await Sc(s.remoteStore)}catch(o){const u=Tf(o,"Failed to persist write");t.reject(u)}}async function zv(r,e){const t=Ie(r);try{const s=await _A(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await ul(t,s,e)}catch(s){await No(s)}}function vy(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ie(h);g.onlineState=m;let v=!1;g.queries.forEach(((w,A)=>{for(const P of A.wa)P.va(m)&&(v=!0)})),v&&If(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uR(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new rt(he.comparator);h=h.insert(u,jt.newNoDocument(u,Te.min()));const m=De().add(u),g=new wc(Te.min(),new Map,new rt(Pe),h,m);await zv(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Af(s)}else await Od(s.localStore,e,!1).then((()=>bd(s,e,t))).catch(No)}async function cR(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await yA(t.localStore,e);$v(t,s,null),Bv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ul(t,o)}catch(o){await No(o)}}async function hR(r,e,t){const s=Ie(r);try{const o=await(function(h,m){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next((A=>(Fe(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>g.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);$v(s,e,t),Bv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ul(s,o)}catch(o){await No(o)}}function Bv(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function $v(r,e,t){const s=Ie(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function bd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||qv(r,s)}))}function qv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(yf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Af(r))}function Ey(r,e,t){for(const s of t)s instanceof Fv?(r.Au.addReference(s.key,e),dR(r,s)):s instanceof Uv?(re(Sf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||qv(r,s.key)):ve(19791,{yu:s})}function dR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(re(Sf,"New document in limbo: "+t),r.Iu.add(s),Af(r))}function Af(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new he(We.fromString(e)),s=r.mu.next();r.Eu.set(s,new tR(t)),r.du=r.du.insert(t,s),Vv(r.remoteStore,new hi(tr(lf(t.path)),s,"TargetPurposeLimboResolution",pc.ue))}}async function ul(r,e,t){const s=Ie(r),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=mf.Es(g.targetId,v);u.push(A)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const w=Ie(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>$.forEach(v,(P=>$.forEach(P.Is,(j=>w.persistence.referenceDelegate.addReference(A,P.targetId,j))).next((()=>$.forEach(P.ds,(j=>w.persistence.referenceDelegate.removeReference(A,P.targetId,j)))))))))}catch(A){if(!Do(A))throw A;re(gf,"Failed to update sequence numbers: "+A)}for(const A of v){const P=A.targetId;if(!A.fromCache){const j=w.Fs.get(P),K=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(K);w.Fs=w.Fs.insert(P,Y)}}})(s.localStore,u))}async function fR(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){re(Sf,"User change. New user:",e.toKey());const s=await Pv(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((g=>{g.reject(new ie(z.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ul(t,s.Bs)}}function pR(r,e){const t=Ie(r),s=t.Eu.get(e);if(s&&s.lu)return De().add(s.key);{let o=De();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function Hv(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=zv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uR.bind(null,e),e.hu.J_=YA.bind(null,e.eventManager),e.hu.pu=XA.bind(null,e.eventManager),e}function mR(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hR.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return gA(this.persistence,new fA,e.initialUser,this.serializer)}Du(e){return new Cv(pf.Vi,this.serializer)}bu(e){return new IA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class gR extends oc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof ic,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new JS(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Cv((s=>ic.Vi(s,t)),this.serializer)}}class Fd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fR.bind(null,this.syncEngine),await HA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new GA})()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=(function(u){return new PA(u)})(e.databaseInfo);return(function(u,h,m,g){return new VA(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new OA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>vy(this.syncEngine,t,0)),(function(){return fy.C()?new fy:new SA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,v,w){const A=new nR(o,u,h,m,g,v);return w&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ie(o);re(ds,"RemoteStore shutting down."),u.Ia.add(5),await ll(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fd.provider={build:()=>new Fd};/**
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
 */class yR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="FirestoreClient";class _R{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{re(Ii,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(Ii,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function fd(r,e){r.asyncQueue.verifyOperationInProgress(),re(Ii,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Pv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{yi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{yi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function wy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await vR(r);re(Ii,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>my(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>my(e.remoteStore,o))),r._onlineComponents=e}async function vR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Ii,"Using user provided OfflineComponentProvider");try{await fd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===z.FAILED_PRECONDITION||o.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await fd(r,new oc)}}else re(Ii,"Using default OfflineComponentProvider"),await fd(r,new gR(void 0));return r._offlineComponents}async function Wv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Ii,"Using user provided OnlineComponentProvider"),await wy(r,r._uninitializedComponentsProvider._online)):(re(Ii,"Using default OnlineComponentProvider"),await wy(r,new Fd))),r._onlineComponents}function ER(r){return Wv(r).then((e=>e.syncEngine))}async function Ty(r){const e=await Wv(r),t=e.eventManager;return t.onListen=rR.bind(null,e.syncEngine),t.onUnlisten=oR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aR.bind(null,e.syncEngine),t}/**
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
 */function Gv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Iy=new Map;/**
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
 */const Kv="firestore.googleapis.com",Sy=!0;class Ay{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kv,this.ssl=Sy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Sy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YS)throw new ie(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}O1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new A1;switch(s.type){case"firstParty":return new k1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Iy.get(t);s&&(re("ComponentProvider","Removing Datastore"),Iy.delete(t),s.terminate())})(this),Promise.resolve()}}function wR(r,e,t,s={}){var o;r=Fa(r,Ac);const u=Ro(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;u&&(By(`https://${g}`),$y("Firestore",!0)),h.host!==Kv&&h.host!==g&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!os(v,m)&&(r._setSettings(v),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Ut.MOCK_USER;else{w=Dw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new ie(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ut(P)}r._authCredentials=new R1(new M_(w,A))}}/**
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
 */class Ri{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ri(this.firestore,e,this._query)}}class vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(sl(t,vt._jsonSchema))return new vt(e,s||null,new he(We.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:dt("string",vt._jsonSchemaVersion),referencePath:dt("string")};class gi extends Ri{constructor(e,t,s){super(e,t,lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new he(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function TR(r,e,...t){if(r=wt(r),F_("collection","path",e),r instanceof Ac){const s=We.fromString(e,...t);return bg(s),new gi(r,null,s)}{if(!(r instanceof vt||r instanceof gi))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(We.fromString(e,...t));return bg(s),new gi(r.firestore,null,s)}}function IR(r,e,...t){if(r=wt(r),arguments.length===1&&(e=tf.newId()),F_("doc","path",e),r instanceof Ac){const s=We.fromString(e,...t);return Mg(s),new vt(r,null,new he(s))}{if(!(r instanceof vt||r instanceof gi))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(We.fromString(e,...t));return Mg(s),new vt(r.firestore,r instanceof gi?r.converter:null,new he(s))}}/**
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
 */const Ry="AsyncQueue";class Cy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Nv(this,"async_queue_retry"),this.oc=()=>{const s=dd();s&&re(Ry,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=dd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=dd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new is;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Do(e))throw e;re(Ry,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,xr("INTERNAL UNHANDLED ERROR: ",Py(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=wf.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:Py(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Py(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function ky(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}class ac extends Ac{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Cy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cy(e),this._firestoreClient=void 0,await e}}}function SR(r,e){const t=typeof r=="object"?r:Gy(),s=typeof r=="string"?r:Ju,o=Bd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=kw("firestore");u&&wR(o,...u)}return o}function Qv(r){if(r._terminated)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||AR(r),r._firestoreClient}function AR(r){var e,t,s;const o=r._freezeSettings(),u=(function(m,g,v,w){return new H1(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Gv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new _R(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(xt.fromBase64String(e))}catch(t){throw new ie(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sl(e,wn._jsonSchema))return wn.fromBase64String(e.bytes)}}wn._jsonSchemaVersion="firestore/bytes/1.0",wn._jsonSchema={type:dt("string",wn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class Rf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(sl(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:dt("string",rr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sl(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ie(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:dt("string",ir._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=/^__.*__$/;class CR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new ol(e,this.data,t,this.fieldTransforms)}}function Yv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class Pf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return lc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Yv(this.Ec)&&RR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class PR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}Dc(e,t,s,o=!1){return new Pf({Ec:e,methodName:t,bc:s,path:Vt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xv(r){const e=r._freezeSettings(),t=Tc(r._databaseId);return new PR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function kR(r,e,t,s,o,u={}){const h=r.Dc(u.merge||u.mergeFields?2:0,e,t,o);eE("Data must be an object, but it was:",h,s);const m=Jv(s,h);let g,v;if(u.merge)g=new Un(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const P=DR(e,A,t);if(!h.contains(P))throw new ie(z.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);xR(w,P)||w.push(P)}g=new Un(w),v=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,v=h.fieldTransforms;return new CR(new En(m),g,v)}class kf extends Cf{_toFieldTransform(e){return new yS(e.path,new Ya)}isEqual(e){return e instanceof kf}}function NR(r,e,t,s=!1){return Nf(t,r.Dc(s?4:3,e))}function Nf(r,e){if(Zv(r=wt(r)))return eE("Unsupported field value:",e,r),Jv(r,e);if(r instanceof Cf)return(function(s,o){if(!Yv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Nf(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:rc(o.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:rc(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wn)return{bytesValue:vv(o.serializer,s._byteString)};if(s instanceof vt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:df(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[G_]:{stringValue:K_},[Zu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return uf(m.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${fc(s)}`)})(r,e)}function Jv(r,e){const t={};return z_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(r,((s,o)=>{const u=Nf(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Zv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Qe||r instanceof rr||r instanceof wn||r instanceof vt||r instanceof Cf||r instanceof ir)}function eE(r,e,t){if(!Zv(t)||!U_(t)){const s=fc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function DR(r,e,t){if((e=wt(e))instanceof Rf)return e._internalPath;if(typeof e=="string")return tE(r,e);throw lc("Field path arguments must be of type string or ",r,!1,void 0,t)}const VR=new RegExp("[~\\*/\\[\\]]");function tE(r,e,t){if(e.search(VR)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Rf(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function lc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(z.INVALID_ARGUMENT,m+r+g)}function xR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class nE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Df("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OR extends nE{data(){return super.data()}}function Df(r,e){return typeof e=="string"?tE(r,e):e instanceof Rf?e._internalPath:e._delegate._internalPath}/**
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
 */function LR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class xf extends Vf{}function MR(r,e,...t){let s=[];e instanceof Vf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof Lf)).length,m=u.filter((g=>g instanceof Of)).length;if(h>1||h>0&&m>0)throw new ie(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Of extends xf{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Of(e,t,s)}_apply(e){const t=this._parse(e);return rE(e._query,t),new Ri(e.firestore,e.converter,kd(e._query,t))}_parse(e){const t=Xv(e.firestore);return(function(u,h,m,g,v,w,A){let P;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Dy(A,w);const K=[];for(const Y of A)K.push(Ny(g,u,Y));P={arrayValue:{values:K}}}else P=Ny(g,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Dy(A,w),P=NR(m,h,A,w==="in"||w==="not-in");return ht.create(v,w,P)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Lf extends Vf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Lf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)rE(h,g),h=kd(h,g)})(e._query,t),new Ri(e.firestore,e.converter,kd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mf extends xf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ie(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(u,h)})(e._query,this._field,this._direction);return new Ri(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Vo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function bR(r,e="asc"){const t=e,s=Df("orderBy",r);return Mf._create(s,t)}class bf extends xf{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new bf(e,t,s)}_apply(e){return new Ri(e.firestore,e.converter,tc(e._query,this._limit,this._limitType))}}function FR(r){return bf._create("limit",r,"F")}function Ny(r,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new ie(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nv(e)&&t.indexOf("/")!==-1)throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!he.isDocumentKey(s))throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hg(r,new he(s))}if(t instanceof vt)return Hg(r,t._key);throw new ie(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(t)}.`)}function Dy(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rE(r,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UR{convertValue(e,t="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return fs(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Zu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>at(h.doubleValue)));return new ir(u)}convertGeoPoint(e){return new rr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=vi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Fe(Av(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||xr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function jR(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends nE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ss._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",ss._jsonSchema={type:dt("string",ss._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Bu extends ss{data(e={}){return super.data(e)}}class vo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new La(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:zR(m.type),doc:g,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}vo._jsonSchemaVersion="firestore/querySnapshot/1.0",vo._jsonSchema={type:dt("string",vo._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class iE extends UR{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function BR(r,e){const t=Fa(r.firestore,ac),s=IR(r),o=jR(r.converter,e);return qR(t,[kR(Xv(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Nr.exists(!1))]).then((()=>s))}function $R(r,...e){var t,s,o;r=wt(r);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||ky(e[h])||(u=e[h++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(ky(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,w;if(r instanceof vt)v=Fa(r.firestore,ac),w=lf(r._key.path),g={next:A=>{e[h]&&e[h](HR(v,r,A))},error:e[h+1],complete:e[h+2]};else{const A=Fa(r,Ri);v=Fa(A.firestore,ac),w=A._query;const P=new iE(v);g={next:j=>{e[h]&&e[h](new vo(v,P,A,j))},error:e[h+1],complete:e[h+2]},LR(r._query)}return(function(P,j,K,Y){const q=new yR(Y),ye=new JA(j,q,K);return P.asyncQueue.enqueueAndForget((async()=>KA(await Ty(P),ye))),()=>{q.Ou(),P.asyncQueue.enqueueAndForget((async()=>QA(await Ty(P),ye)))}})(Qv(v),w,m,g)}function qR(r,e){return(function(s,o){const u=new is;return s.asyncQueue.enqueueAndForget((async()=>lR(await ER(s),o,u))),u.promise})(Qv(r),e)}function HR(r,e,t){const s=t.docs.get(e._key),o=new iE(r);return new ss(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}function WR(){return new kf("serverTimestamp")}(function(e,t=!0){(function(o){ko=o})(Co),Eo(new as("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new ac(new C1(s.getProvider("auth-internal")),new N1(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(v.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),pi(Dg,Vg,e),pi(Dg,Vg,"esm2017")})();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sE=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=ze.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>ze.createElement("svg",{ref:g,...KR,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:sE("lucide",o),...m},[...h.map(([v,w])=>ze.createElement(v,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=(r,e)=>{const t=ze.forwardRef(({className:s,...o},u)=>ze.createElement(QR,{ref:u,iconNode:e,className:sE(`lucide-${GR(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=ar("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=ar("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ar("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=ar("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=ar("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=ar("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=ar("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=ar("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=ar("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ar("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);var nC="firebase",rC="11.10.0";/**
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
 */pi(nC,rC,"app");const iC={apiKey:"AIzaSyB22Y06cUUhfSweTGIhHaziHCJTytUkqLI",authDomain:"quadchat-cf697.firebaseapp.com",projectId:"quadchat-cf697",storageBucket:"quadchat-cf697.firebasestorage.app",messagingSenderId:"738776494798",appId:"1:738776494798:web:58454b37922a44fa98969f"},oE=Wy(iC),uo=I1(oE),sC=SR(oE),Ly=TR(sC,"messages"),oC=new Rr;function aC(r){return r!=null&&r.toDate?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit"}).format(r.toDate()):"sending"}function ka(r){switch(r.code){case"auth/email-already-in-use":return"That email already has an account. Sign in instead.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":return"The email or password is incorrect.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/operation-not-allowed":return"This sign-in method is not enabled in Firebase.";case"auth/popup-closed-by-user":return"The Google sign-in popup was closed before finishing.";case"auth/popup-blocked":return"Your browser blocked the Google sign-in popup.";case"auth/unauthorized-domain":return"This domain is not authorized in Firebase Authentication settings.";case"auth/requires-recent-login":return"Please sign out, sign back in, and try again.";default:return r.message}}function lC(r){return r.split(/\s+/).filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"?"}function uC(){const[r,e]=ze.useState(null),[t,s]=ze.useState(!1),[o,u]=ze.useState("signin"),[h,m]=ze.useState(""),[g,v]=ze.useState(""),[w,A]=ze.useState(""),[P,j]=ze.useState(""),[K,Y]=ze.useState([]),[q,ye]=ze.useState(!1),[de,fe]=ze.useState(!1),[Se,Be]=ze.useState(!1),[Ce,D]=ze.useState(!1),[I,R]=ze.useState(""),[k,V]=ze.useState(""),[O,S]=ze.useState(""),[Ye,Ze]=ze.useState(""),ft=ze.useRef(null),Ve=ze.useMemo(()=>{var ee;return((ee=r==null?void 0:r.displayName)==null?void 0:ee.trim())||(r==null?void 0:r.email)||""},[r]);ze.useEffect(()=>cI(uo,pe=>{e(pe),s(!0)}),[]),ze.useEffect(()=>{r&&R(r.displayName||"")},[r]),ze.useEffect(()=>{if(!r){Y([]);return}const ee=MR(Ly,bR("createdAt","asc"),FR(100));return $R(ee,we=>{Y(we.docs.map(Re=>({id:Re.id,...Re.data()}))),S("")},we=>{S(we.message)})},[r]),ze.useEffect(()=>{var ee;(ee=ft.current)==null||ee.scrollIntoView({behavior:"smooth",block:"end"})},[K]);async function Z(ee){ee.preventDefault();const pe=h.trim(),we=g.trim(),Re=w.trim(),Ue=o==="signup";if(!(!we||!Re||Ue&&!pe)){S("");try{if(Ue){const et=await rI(uo,we,Re);await Eg(et.user,{displayName:pe}),e({...et.user,displayName:pe})}else await iI(uo,we,Re);m(""),v(""),A("")}catch(et){S(ka(et))}}}async function ce(){S("");try{await VI(uo,oC),m(""),v(""),A("")}catch(ee){S(ka(ee))}}async function te(){try{await hI(uo),j(""),S("")}catch(ee){S(ka(ee))}}function x(){R((r==null?void 0:r.displayName)||""),V(""),Ze(""),S(""),Be(!1),D(!0)}async function B(ee){ee.preventDefault();const pe=I.trim(),we=k.trim();if(!(!r||!pe&&!we)){fe(!0),Ze(""),S("");try{pe&&pe!==r.displayName&&await Eg(r,{displayName:pe}),we&&await oI(r,we),await r.reload(),e(uo.currentUser),V(""),Ze("Settings saved.")}catch(Re){Ze(ka(Re))}finally{fe(!1)}}}async function ue(){if(!(!r||!window.confirm("Remove this account? This cannot be undone."))){fe(!0),Ze("");try{await dI(r),D(!1),j(""),S("")}catch(pe){Ze(ka(pe))}finally{fe(!1)}}}async function Ae(ee){ee.preventDefault();const pe=P.trim();if(!(!pe||!Ve||q)){ye(!0),S("");try{await BR(Ly,{text:pe,name:Ve,userId:r.uid,createdAt:WR()}),j("")}catch(we){S(we.message)}finally{ye(!1)}}}return H.jsxs("main",{className:"app-shell",children:[t?r?H.jsxs("section",{className:"chat-panel","aria-label":"QuadChat room",children:[H.jsxs("header",{className:"chat-header",children:[H.jsxs("div",{className:"chat-title",children:[H.jsx("div",{className:"brand-mark","aria-hidden":"true",children:H.jsx(Vu,{size:26,strokeWidth:2.3})}),H.jsxs("div",{children:[H.jsx("h1",{children:"QuadChat"}),H.jsxs("p",{children:["Signed in as ",Ve," · ",K.length," messages"]})]})]}),H.jsxs("button",{className:"icon-text-button",type:"button",onClick:te,title:"Sign out",children:[H.jsx(xy,{size:18}),H.jsx("span",{children:"Sign out"})]}),H.jsxs("div",{className:"profile-actions",children:[H.jsx("button",{className:"avatar-button",type:"button",onClick:()=>Be(ee=>!ee),title:"Profile options",children:r.photoURL?H.jsx("img",{src:r.photoURL,alt:""}):H.jsx("span",{children:lC(Ve)})}),Se?H.jsxs("div",{className:"profile-menu",children:[H.jsxs("button",{type:"button",onClick:x,children:[H.jsx(ZR,{size:17}),H.jsx("span",{children:"Settings"})]}),H.jsxs("button",{type:"button",onClick:te,children:[H.jsx(xy,{size:17}),H.jsx("span",{children:"Sign out"})]})]}):null]})]}),O?H.jsx("div",{className:"error-banner",children:O}):null,H.jsxs("div",{className:"messages",role:"log","aria-live":"polite",children:[K.length===0?H.jsxs("div",{className:"empty-state",children:[H.jsx(Vu,{size:42}),H.jsx("p",{children:"No messages yet. Say hello when you are ready."})]}):K.map(ee=>{const pe=ee.userId?ee.userId===r.uid:ee.name===Ve;return H.jsxs("article",{className:`message ${pe?"message-mine":""}`,children:[H.jsxs("div",{className:"message-meta",children:[H.jsx("strong",{children:ee.name||"Anonymous"}),H.jsx("span",{children:aC(ee.createdAt)})]}),H.jsx("p",{children:ee.text})]},ee.id)}),H.jsx("div",{ref:ft})]}),H.jsxs("form",{className:"composer",onSubmit:Ae,children:[H.jsx("input",{type:"text",value:P,onChange:ee=>j(ee.target.value),placeholder:"Type a message",maxLength:500}),H.jsx("button",{type:"submit","aria-label":"Send message",title:"Send message",disabled:!P.trim()||!Ve||q,children:H.jsx(JR,{size:20})})]})]}):H.jsxs("section",{className:"signin-panel","aria-label":"Sign in to QuadChat",children:[H.jsxs("div",{className:"signin-brand",children:[H.jsx("div",{className:"brand-mark","aria-hidden":"true",children:H.jsx(Vu,{size:28,strokeWidth:2.3})}),H.jsxs("div",{children:[H.jsx("h1",{children:"QuadChat"}),H.jsx("p",{children:o==="signup"?"Create an account to start chatting.":"Sign in to continue chatting."})]})]}),H.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication view",children:[H.jsx("button",{className:o==="signin"?"active":"",type:"button",onClick:()=>{u("signin"),S("")},children:"Sign in"}),H.jsx("button",{className:o==="signup"?"active":"",type:"button",onClick:()=>{u("signup"),S("")},children:"Sign up"})]}),H.jsxs("form",{className:"signin-form",onSubmit:Z,children:[o==="signup"?H.jsxs(H.Fragment,{children:[H.jsxs("label",{htmlFor:"signin-name",children:[H.jsx(Oy,{size:18}),H.jsx("span",{children:"Display name"})]}),H.jsx("input",{id:"signin-name",type:"text",value:h,onChange:ee=>m(ee.target.value),placeholder:"Enter your name",autoComplete:"name",maxLength:32})]}):null,H.jsxs("label",{htmlFor:"signin-email",children:[H.jsx(Oy,{size:18}),H.jsx("span",{children:"Email"})]}),H.jsx("input",{id:"signin-email",type:"email",value:g,onChange:ee=>v(ee.target.value),placeholder:"you@example.com",autoComplete:"email",maxLength:120}),H.jsxs("label",{htmlFor:"signin-password",children:[H.jsx(Vy,{size:18}),H.jsx("span",{children:"Password"})]}),H.jsx("input",{id:"signin-password",type:"password",value:w,onChange:ee=>A(ee.target.value),placeholder:"Enter your password",autoComplete:"current-password",maxLength:64}),O?H.jsx("div",{className:"error-banner inline-error",children:O}):null,H.jsx("button",{type:"submit",disabled:!g.trim()||!w.trim()||o==="signup"&&!h.trim(),children:o==="signup"?"Create account":"Sign in"})]}),H.jsx("div",{className:"auth-divider",children:H.jsx("span",{children:"or"})}),H.jsxs("button",{className:"google-button",type:"button",onClick:ce,children:[H.jsx(YR,{size:18}),H.jsx("span",{children:"Continue with Google"})]}),H.jsxs("div",{className:"mode-note",children:[H.jsx(eC,{size:18}),H.jsx("span",{children:"Production mode: Firebase Authentication manages accounts."})]})]}):H.jsx("section",{className:"signin-panel","aria-label":"Loading QuadChat",children:H.jsxs("div",{className:"signin-brand",children:[H.jsx("div",{className:"brand-mark","aria-hidden":"true",children:H.jsx(Vu,{size:28,strokeWidth:2.3})}),H.jsxs("div",{children:[H.jsx("h1",{children:"QuadChat"}),H.jsx("p",{children:"Checking your session."})]})]})}),Ce&&r?H.jsx("div",{className:"modal-backdrop",role:"presentation",children:H.jsxs("section",{className:"settings-modal","aria-label":"Account settings",role:"dialog","aria-modal":"true",children:[H.jsxs("header",{className:"settings-header",children:[H.jsxs("div",{children:[H.jsx("h2",{children:"Settings"}),H.jsx("p",{children:r.email})]}),H.jsx("button",{className:"modal-close",type:"button",onClick:()=>D(!1),title:"Close settings",children:"X"})]}),H.jsxs("form",{className:"settings-form",onSubmit:B,children:[H.jsxs("label",{htmlFor:"settings-name",children:[H.jsx(XR,{size:18}),H.jsx("span",{children:"Username"})]}),H.jsx("input",{id:"settings-name",type:"text",value:I,onChange:ee=>R(ee.target.value),maxLength:32,placeholder:"Your display name"}),H.jsxs("label",{htmlFor:"settings-password",children:[H.jsx(Vy,{size:18}),H.jsx("span",{children:"New password"})]}),H.jsx("input",{id:"settings-password",type:"password",value:k,onChange:ee=>V(ee.target.value),minLength:6,maxLength:64,placeholder:"Leave blank to keep current password",autoComplete:"new-password"}),Ye?H.jsx("div",{className:"error-banner inline-error settings-note",children:Ye}):null,H.jsxs("div",{className:"settings-actions",children:[H.jsx("button",{type:"submit",disabled:de,children:"Save changes"}),H.jsxs("button",{className:"danger-button",type:"button",onClick:ue,disabled:de,children:[H.jsx(tC,{size:17}),H.jsx("span",{children:"Remove account"})]})]})]})]})}):null]})}Ew.createRoot(document.getElementById("root")).render(H.jsx(pw.StrictMode,{children:H.jsx(uC,{})}));
