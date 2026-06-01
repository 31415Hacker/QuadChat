(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Nw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var id={exports:{}},xa={},sd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Dw(){if(ng)return De;ng=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Y={};function H(x,B,ie){this.props=x,this.context=B,this.refs=Y,this.updater=ie||j}H.prototype.isReactComponent={},H.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},H.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ge(){}ge.prototype=H.prototype;function he(x,B,ie){this.props=x,this.context=B,this.refs=Y,this.updater=ie||j}var me=he.prototype=new ge;me.constructor=he,K(me,H.prototype),me.isPureReactComponent=!0;var ve=Array.isArray,We=Object.prototype.hasOwnProperty,Ce={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(x,B,ie){var Pe,Ie={},xe=null,Ue=null;if(B!=null)for(Pe in B.ref!==void 0&&(Ue=B.ref),B.key!==void 0&&(xe=""+B.key),B)We.call(B,Pe)&&!D.hasOwnProperty(Pe)&&(Ie[Pe]=B[Pe]);var ke=arguments.length-2;if(ke===1)Ie.children=ie;else if(1<ke){for(var Ke=Array(ke),pt=0;pt<ke;pt++)Ke[pt]=arguments[pt+2];Ie.children=Ke}if(x&&x.defaultProps)for(Pe in ke=x.defaultProps,ke)Ie[Pe]===void 0&&(Ie[Pe]=ke[Pe]);return{$$typeof:r,type:x,key:xe,ref:Ue,props:Ie,_owner:Ce.current}}function R(x,B){return{$$typeof:r,type:x.type,key:B,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function V(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ie){return B[ie]})}var O=/\/+/g;function S(x,B){return typeof x=="object"&&x!==null&&x.key!=null?V(""+x.key):B.toString(36)}function rt(x,B,ie,Pe,Ie){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var Ue=!1;if(x===null)Ue=!0;else switch(xe){case"string":case"number":Ue=!0;break;case"object":switch(x.$$typeof){case r:case e:Ue=!0}}if(Ue)return Ue=x,Ie=Ie(Ue),x=Pe===""?"."+S(Ue,0):Pe,ve(Ie)?(ie="",x!=null&&(ie=x.replace(O,"$&/")+"/"),rt(Ie,B,ie,"",function(pt){return pt})):Ie!=null&&(k(Ie)&&(Ie=R(Ie,ie+(!Ie.key||Ue&&Ue.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+x)),B.push(Ie)),1;if(Ue=0,Pe=Pe===""?".":Pe+":",ve(x))for(var ke=0;ke<x.length;ke++){xe=x[ke];var Ke=Pe+S(xe,ke);Ue+=rt(xe,B,ie,Ke,Ie)}else if(Ke=P(x),typeof Ke=="function")for(x=Ke.call(x),ke=0;!(xe=x.next()).done;)xe=xe.value,Ke=Pe+S(xe,ke++),Ue+=rt(xe,B,ie,Ke,Ie);else if(xe==="object")throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Ue}function ft(x,B,ie){if(x==null)return x;var Pe=[],Ie=0;return rt(x,Pe,"","",function(xe){return B.call(ie,xe,Ie++)}),Pe}function wt(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(ie){(x._status===0||x._status===-1)&&(x._status=1,x._result=ie)},function(ie){(x._status===0||x._status===-1)&&(x._status=2,x._result=ie)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var ze={current:null},Z={transition:null},ce={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ce};function ee(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:ft,forEach:function(x,B,ie){ft(x,function(){B.apply(this,arguments)},ie)},count:function(x){var B=0;return ft(x,function(){B++}),B},toArray:function(x){return ft(x,function(B){return B})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},De.Component=H,De.Fragment=t,De.Profiler=o,De.PureComponent=he,De.StrictMode=s,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,De.act=ee,De.cloneElement=function(x,B,ie){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Pe=K({},x.props),Ie=x.key,xe=x.ref,Ue=x._owner;if(B!=null){if(B.ref!==void 0&&(xe=B.ref,Ue=Ce.current),B.key!==void 0&&(Ie=""+B.key),x.type&&x.type.defaultProps)var ke=x.type.defaultProps;for(Ke in B)We.call(B,Ke)&&!D.hasOwnProperty(Ke)&&(Pe[Ke]=B[Ke]===void 0&&ke!==void 0?ke[Ke]:B[Ke])}var Ke=arguments.length-2;if(Ke===1)Pe.children=ie;else if(1<Ke){ke=Array(Ke);for(var pt=0;pt<Ke;pt++)ke[pt]=arguments[pt+2];Pe.children=ke}return{$$typeof:r,type:x.type,key:Ie,ref:xe,props:Pe,_owner:Ue}},De.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:l,_context:x},x.Consumer=x},De.createElement=I,De.createFactory=function(x){var B=I.bind(null,x);return B.type=x,B},De.createRef=function(){return{current:null}},De.forwardRef=function(x){return{$$typeof:m,render:x}},De.isValidElement=k,De.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:wt}},De.memo=function(x,B){return{$$typeof:v,type:x,compare:B===void 0?null:B}},De.startTransition=function(x){var B=Z.transition;Z.transition={};try{x()}finally{Z.transition=B}},De.unstable_act=ee,De.useCallback=function(x,B){return ze.current.useCallback(x,B)},De.useContext=function(x){return ze.current.useContext(x)},De.useDebugValue=function(){},De.useDeferredValue=function(x){return ze.current.useDeferredValue(x)},De.useEffect=function(x,B){return ze.current.useEffect(x,B)},De.useId=function(){return ze.current.useId()},De.useImperativeHandle=function(x,B,ie){return ze.current.useImperativeHandle(x,B,ie)},De.useInsertionEffect=function(x,B){return ze.current.useInsertionEffect(x,B)},De.useLayoutEffect=function(x,B){return ze.current.useLayoutEffect(x,B)},De.useMemo=function(x,B){return ze.current.useMemo(x,B)},De.useReducer=function(x,B,ie){return ze.current.useReducer(x,B,ie)},De.useRef=function(x){return ze.current.useRef(x)},De.useState=function(x){return ze.current.useState(x)},De.useSyncExternalStore=function(x,B,ie){return ze.current.useSyncExternalStore(x,B,ie)},De.useTransition=function(){return ze.current.useTransition()},De.version="18.3.1",De}var rg;function Wd(){return rg||(rg=1,sd.exports=Dw()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function xw(){if(ig)return xa;ig=1;var r=Wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,A={},P=null,j=null;v!==void 0&&(P=""+v),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(A[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:m,key:P,ref:j,props:A,_owner:o.current}}return xa.Fragment=t,xa.jsx=h,xa.jsxs=h,xa}var sg;function Vw(){return sg||(sg=1,id.exports=xw()),id.exports}var z=Vw(),Ve=Wd();const Ow=Nw(Ve);var Nu={},od={exports:{}},on={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Lw(){return og||(og=1,(function(r){function e(Z,ce){var ee=Z.length;Z.push(ce);e:for(;0<ee;){var x=ee-1>>>1,B=Z[x];if(0<o(B,ce))Z[x]=ce,Z[ee]=B,ee=x;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],ee=Z.pop();if(ee!==ce){Z[0]=ee;e:for(var x=0,B=Z.length,ie=B>>>1;x<ie;){var Pe=2*(x+1)-1,Ie=Z[Pe],xe=Pe+1,Ue=Z[xe];if(0>o(Ie,ee))xe<B&&0>o(Ue,Ie)?(Z[x]=Ue,Z[xe]=ee,x=xe):(Z[x]=Ie,Z[Pe]=ee,x=Pe);else if(xe<B&&0>o(Ue,ee))Z[x]=Ue,Z[xe]=ee,x=xe;else break e}}return ce}function o(Z,ce){var ee=Z.sortIndex-ce.sortIndex;return ee!==0?ee:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,A=null,P=3,j=!1,K=!1,Y=!1,H=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Z){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=Z)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function ve(Z){if(Y=!1,me(Z),!K)if(t(g)!==null)K=!0,wt(We);else{var ce=t(v);ce!==null&&ze(ve,ce.startTime-Z)}}function We(Z,ce){K=!1,Y&&(Y=!1,ge(I),I=-1),j=!0;var ee=P;try{for(me(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||Z&&!V());){var x=A.callback;if(typeof x=="function"){A.callback=null,P=A.priorityLevel;var B=x(A.expirationTime<=ce);ce=r.unstable_now(),typeof B=="function"?A.callback=B:A===t(g)&&s(g),me(ce)}else s(g);A=t(g)}if(A!==null)var ie=!0;else{var Pe=t(v);Pe!==null&&ze(ve,Pe.startTime-ce),ie=!1}return ie}finally{A=null,P=ee,j=!1}}var Ce=!1,D=null,I=-1,R=5,k=-1;function V(){return!(r.unstable_now()-k<R)}function O(){if(D!==null){var Z=r.unstable_now();k=Z;var ce=!0;try{ce=D(!0,Z)}finally{ce?S():(Ce=!1,D=null)}}else Ce=!1}var S;if(typeof he=="function")S=function(){he(O)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=O,S=function(){ft.postMessage(null)}}else S=function(){H(O,0)};function wt(Z){D=Z,Ce||(Ce=!0,S())}function ze(Z,ce){I=H(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){K||j||(K=!0,wt(We))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return P},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(P){case 1:case 2:case 3:var ce=3;break;default:ce=P}var ee=P;P=ce;try{return Z()}finally{P=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ee=P;P=Z;try{return ce()}finally{P=ee}},r.unstable_scheduleCallback=function(Z,ce,ee){var x=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,Z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,Z={id:w++,callback:ce,priorityLevel:Z,startTime:ee,expirationTime:B,sortIndex:-1},ee>x?(Z.sortIndex=ee,e(v,Z),t(g)===null&&Z===t(v)&&(Y?(ge(I),I=-1):Y=!0,ze(ve,ee-x))):(Z.sortIndex=B,e(g,Z),K||j||(K=!0,wt(We))),Z},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(Z){var ce=P;return function(){var ee=P;P=ce;try{return Z.apply(this,arguments)}finally{P=ee}}}})(ld)),ld}var ag;function Mw(){return ag||(ag=1,ad.exports=Lw()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function bw(){if(lg)return on;lg=1;var r=Wd(),e=Mw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function P(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,p,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];H[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(ge,he);H[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(ge,he);H[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(ge,he);H[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,i,a,c){var d=H.hasOwnProperty(i)?H[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(K(i,a,d,c)&&(a=null),c||d===null?P(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ve=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function B(n){if(x===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);x=i&&i[1]||""}return`
`+x+n}var ie=!1;function Pe(n,i){if(!n||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Pe(n.type,!1),n;case 11:return n=Pe(n.type.render,!1),n;case 1:return n=Pe(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ce:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case rt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ft:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case wt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ke(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pt(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function gn(n){n._valueTracker||(n._valueTracker=pt(n))}function qr(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Xn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vr(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Hr(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ke(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bi(n,i){i=i.checked,i!=null&&me(n,"checked",i,!1)}function Fi(n,i){bi(n,i);var a=ke(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Se(n,i.type,a):i.hasOwnProperty("defaultValue")&&Se(n,i.type,ke(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ue(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Se(n,i,a){(i!=="number"||Xn(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var we=Array.isArray;function Ae(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ke(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ut(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qe(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(we(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ke(a)}}function Jn(n,i){var a=ke(i.value),c=ke(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Zn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?at(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Er,Bo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Er.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Wr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ji=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(n){ji.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ui[i]=Ui[n]})});function $o(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ui.hasOwnProperty(n)&&Ui[n]?(""+i).trim():i+"px"}function qo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=$o(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ho=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(n,i){if(i){if(Ho[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ko(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function ks(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ns=null,yn=null,er=null;function Ds(n){if(n=ya(n)){if(typeof Ns!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Hl(i),Ns(n.stateNode,n.type,i))}}function tr(n){yn?er?er.push(n):er=[n]:yn=n}function Go(){if(yn){var n=yn,i=er;if(er=yn=null,Ds(n),i)for(n=0;n<i.length;n++)Ds(i[n])}}function Bi(n,i){return n(i)}function Qo(){}var wr=!1;function Yo(n,i,a){if(wr)return n(i,a);wr=!0;try{return Bi(n,i,a)}finally{wr=!1,(yn!==null||er!==null)&&(Qo(),Go())}}function ct(n,i){var a=n.stateNode;if(a===null)return null;var c=Hl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var xs=!1;if(m)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{xs=!1}function $i(n,i,a,c,d,p,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(G){this.onError(G)}}var qi=!1,Vs=null,xn=!1,Xo=null,xc={onError:function(n){qi=!0,Vs=n}};function Os(n,i,a,c,d,p,_,T,C){qi=!1,Vs=null,$i.apply(xc,arguments)}function gl(n,i,a,c,d,p,_,T,C){if(Os.apply(this,arguments),qi){if(qi){var F=Vs;qi=!1,Vs=null}else throw Error(t(198));xn||(xn=!0,Xo=F)}}function Vn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Hi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function On(n){if(Vn(n)!==n)throw Error(t(188))}function yl(n){var i=n.alternate;if(!i){if(i=Vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return On(d),n;if(p===c)return On(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Jo(n){return n=yl(n),n!==null?Ls(n):null}function Ls(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ls(n);if(i!==null)return i;n=n.sibling}return null}var Ms=e.unstable_scheduleCallback,Zo=e.unstable_cancelCallback,_l=e.unstable_shouldYield,Vc=e.unstable_requestPaint,Qe=e.unstable_now,vl=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,Kr=e.unstable_UserBlockingPriority,_n=e.unstable_NormalPriority,ea=e.unstable_LowPriority,El=e.unstable_IdlePriority,Ki=null,ln=null;function wl(n){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ki,n,void 0,(n.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Il,ta=Math.log,Tl=Math.LN2;function Il(n){return n>>>=0,n===0?32:31-(ta(n)/Tl|0)|0}var bs=64,Fs=4194304;function Gr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Gr(T):(p&=_,p!==0&&(c=Gr(p)))}else _=a&~d,_!==0?c=Gr(_):p!==0&&(c=Gr(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Gt(i),d=1<<a,c|=n[a],i&=~d;return c}function Oc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Gt(p),T=1<<_,C=d[_];C===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Oc(T,i)):C<=i&&(n.expiredLanes|=T),p&=~T}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qi(){var n=bs;return bs<<=1,(bs&4194240)===0&&(bs=64),n}function Qr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Gt(i),n[i]=a}function Ge(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Gt(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Xr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Gt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Me=0;function Jr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Sl,Us,Al,Rl,Cl,na=!1,nr=[],Vt=null,Ln=null,Mn=null,Zr=new Map,vn=new Map,rr=[],Lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pl(n,i){switch(n){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Zr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(i.pointerId)}}function Jt(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&Us(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Mc(n,i,a,c,d){switch(i){case"focusin":return Vt=Jt(Vt,n,i,a,c,d),!0;case"dragenter":return Ln=Jt(Ln,n,i,a,c,d),!0;case"mouseover":return Mn=Jt(Mn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return Zr.set(p,Jt(Zr.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,vn.set(p,Jt(vn.get(p)||null,n,i,a,c,d)),!0}return!1}function kl(n){var i=es(n.target);if(i!==null){var a=Vn(i);if(a!==null){if(i=a.tag,i===13){if(i=Hi(a),i!==null){n.blockedOn=i,Cl(n.priority,function(){Al(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ir(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=js(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);zi=c,a.target.dispatchEvent(c),zi=null}else return i=ya(a),i!==null&&Us(i),n.blockedOn=a,!1;i.shift()}return!0}function Yi(n,i,a){Ir(n)&&a.delete(i)}function Nl(){na=!1,Vt!==null&&Ir(Vt)&&(Vt=null),Ln!==null&&Ir(Ln)&&(Ln=null),Mn!==null&&Ir(Mn)&&(Mn=null),Zr.forEach(Yi),vn.forEach(Yi)}function bn(n,i){n.blockedOn===i&&(n.blockedOn=null,na||(na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nl)))}function Fn(n){function i(d){return bn(d,n)}if(0<nr.length){bn(nr[0],n);for(var a=1;a<nr.length;a++){var c=nr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vt!==null&&bn(Vt,n),Ln!==null&&bn(Ln,n),Mn!==null&&bn(Mn,n),Zr.forEach(i),vn.forEach(i),a=0;a<rr.length;a++)c=rr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)kl(a),a.blockedOn===null&&rr.shift()}var Sr=ve.ReactCurrentBatchConfig,ei=!0;function tt(n,i,a,c){var d=Me,p=Sr.transition;Sr.transition=null;try{Me=1,ra(n,i,a,c)}finally{Me=d,Sr.transition=p}}function bc(n,i,a,c){var d=Me,p=Sr.transition;Sr.transition=null;try{Me=4,ra(n,i,a,c)}finally{Me=d,Sr.transition=p}}function ra(n,i,a,c){if(ei){var d=js(n,i,a,c);if(d===null)Gc(n,i,c,Xi,a),Pl(n,c);else if(Mc(d,n,i,a,c))c.stopPropagation();else if(Pl(n,c),i&4&&-1<Lc.indexOf(n)){for(;d!==null;){var p=ya(d);if(p!==null&&Sl(p),p=js(n,i,a,c),p===null&&Gc(n,i,c,Xi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var Xi=null;function js(n,i,a,c){if(Xi=null,n=ks(c),n=es(n),n!==null)if(i=Vn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Hi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Xi=n,null}function ia(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vl()){case Wi:return 1;case Kr:return 4;case _n:case ea:return 16;case El:return 536870912;default:return 16}default:return 16}}var cn=null,zs=null,Zt=null;function sa(){if(Zt)return Zt;var n,i=zs,a=i.length,c,d="value"in cn?cn.value:cn.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[p-c];c++);return Zt=d.slice(n,1<c?1-c:void 0)}function Bs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ir(){return!0}function oa(){return!1}function Ot(n){function i(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ir:oa,this.isPropagationStopped=oa,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),i}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=Ot(Un),sr=ee({},Un,{view:0,detail:0}),Fc=Ot(sr),qs,Ar,ti,Ji=ee({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ti&&(ti&&n.type==="mousemove"?(qs=n.screenX-ti.screenX,Ar=n.screenY-ti.screenY):Ar=qs=0,ti=n),qs)},movementY:function(n){return"movementY"in n?n.movementY:Ar}}),Hs=Ot(Ji),aa=ee({},Ji,{dataTransfer:0}),Dl=Ot(aa),Ws=ee({},sr,{relatedTarget:0}),Ks=Ot(Ws),xl=ee({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Rr=Ot(xl),Vl=ee({},Un,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ol=Ot(Vl),Ll=ee({},Un,{data:0}),la=Ot(Ll),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ml={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ml[n])?!!i[n]:!1}function or(){return bl}var u=ee({},sr,{key:function(n){if(n.key){var i=Gs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(n){return n.type==="keypress"?Bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ot(u),y=ee({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ot(y),L=ee({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),U=Ot(L),J=ee({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=Ot(J),It=ee({},Ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),be=Ot(It),Pt=[9,13,27,32],mt=m&&"CompositionEvent"in window,En=null;m&&"documentMode"in document&&(En=document.documentMode);var hn=m&&"TextEvent"in window&&!En,Zi=m&&(!mt||En&&8<En&&11>=En),Qs=" ",Yf=!1;function Xf(n,i){switch(n){case"keyup":return Pt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function CE(n,i){switch(n){case"compositionend":return Jf(i);case"keypress":return i.which!==32?null:(Yf=!0,Qs);case"textInput":return n=i.data,n===Qs&&Yf?null:n;default:return null}}function PE(n,i){if(Ys)return n==="compositionend"||!mt&&Xf(n,i)?(n=sa(),Zt=zs=cn=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zi&&i.locale!=="ko"?null:i.data;default:return null}}var kE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!kE[n.type]:i==="textarea"}function ep(n,i,a,c){tr(c),i=Bl(i,"onChange"),0<i.length&&(a=new $s("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ua=null,ca=null;function NE(n){_p(n,0)}function Fl(n){var i=to(n);if(qr(i))return n}function DE(n,i){if(n==="change")return i}var tp=!1;if(m){var Uc;if(m){var jc="oninput"in document;if(!jc){var np=document.createElement("div");np.setAttribute("oninput","return;"),jc=typeof np.oninput=="function"}Uc=jc}else Uc=!1;tp=Uc&&(!document.documentMode||9<document.documentMode)}function rp(){ua&&(ua.detachEvent("onpropertychange",ip),ca=ua=null)}function ip(n){if(n.propertyName==="value"&&Fl(ca)){var i=[];ep(i,ca,n,ks(n)),Yo(NE,i)}}function xE(n,i,a){n==="focusin"?(rp(),ua=i,ca=a,ua.attachEvent("onpropertychange",ip)):n==="focusout"&&rp()}function VE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fl(ca)}function OE(n,i){if(n==="click")return Fl(i)}function LE(n,i){if(n==="input"||n==="change")return Fl(i)}function ME(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var jn=typeof Object.is=="function"?Object.is:ME;function ha(n,i){if(jn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!jn(n[d],i[d]))return!1}return!0}function sp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function op(n,i){var a=sp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function ap(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ap(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function lp(){for(var n=window,i=Xn();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Xn(n.document)}return i}function zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function bE(n){var i=lp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=op(a,p);var _=op(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var FE=m&&"documentMode"in document&&11>=document.documentMode,Xs=null,Bc=null,da=null,$c=!1;function up(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Xs==null||Xs!==Xn(c)||(c=Xs,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ha(da,c)||(da=c,c=Bl(Bc,"onSelect"),0<c.length&&(i=new $s("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Xs)))}function Ul(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Js={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},qc={},cp={};m&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function jl(n){if(qc[n])return qc[n];if(!Js[n])return n;var i=Js[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return qc[n]=i[a];return n}var hp=jl("animationend"),dp=jl("animationiteration"),fp=jl("animationstart"),pp=jl("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(n,i){mp.set(n,i),l(i,[n])}for(var Hc=0;Hc<gp.length;Hc++){var Wc=gp[Hc],UE=Wc.toLowerCase(),jE=Wc[0].toUpperCase()+Wc.slice(1);ni(UE,"on"+jE)}ni(hp,"onAnimationEnd"),ni(dp,"onAnimationIteration"),ni(fp,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(pp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function yp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,gl(c,i,void 0,n),n.currentTarget=null}function _p(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var _=c.length-1;0<=_;_--){var T=c[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;yp(d,T,F),p=C}else for(_=0;_<c.length;_++){if(T=c[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;yp(d,T,F),p=C}}}if(xn)throw n=Xo,xn=!1,Xo=null,n}function Je(n,i){var a=i[eh];a===void 0&&(a=i[eh]=new Set);var c=n+"__bubble";a.has(c)||(vp(i,n,2,!1),a.add(c))}function Kc(n,i,a){var c=0;i&&(c|=4),vp(a,n,c,i)}var zl="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[zl]){n[zl]=!0,s.forEach(function(a){a!=="selectionchange"&&(zE.has(a)||Kc(a,!1,n),Kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[zl]||(i[zl]=!0,Kc("selectionchange",!1,i))}}function vp(n,i,a,c){switch(ia(i)){case 1:var d=tt;break;case 4:d=bc;break;default:d=ra}a=d.bind(null,i,a,n),d=void 0,!xs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;T!==null;){if(_=es(T),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Yo(function(){var F=p,G=ks(a),Q=[];e:{var W=mp.get(n);if(W!==void 0){var te=$s,oe=n;switch(n){case"keypress":if(Bs(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":oe="focus",te=Ks;break;case"focusout":oe="blur",te=Ks;break;case"beforeblur":case"afterblur":te=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=U;break;case hp:case dp:case fp:te=Rr;break;case pp:te=He;break;case"scroll":te=Fc;break;case"wheel":te=be;break;case"copy":case"cut":case"paste":te=Ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var ae=(i&4)!==0,ht=!ae&&n==="scroll",M=ae?W!==null?W+"Capture":null:W;ae=[];for(var N=F,b;N!==null;){b=N;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=ct(N,M),X!=null&&ae.push(ma(N,X,b)))),ht)break;N=N.return}0<ae.length&&(W=new te(W,oe,null,a,G),Q.push({event:W,listeners:ae}))}}if((i&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",W&&a!==zi&&(oe=a.relatedTarget||a.fromElement)&&(es(oe)||oe[Cr]))break e;if((te||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,te?(oe=a.relatedTarget||a.toElement,te=F,oe=oe?es(oe):null,oe!==null&&(ht=Vn(oe),oe!==ht||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=F),te!==oe)){if(ae=Hs,X="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,X="onPointerLeave",M="onPointerEnter",N="pointer"),ht=te==null?W:to(te),b=oe==null?W:to(oe),W=new ae(X,N+"leave",te,a,G),W.target=ht,W.relatedTarget=b,X=null,es(G)===F&&(ae=new ae(M,N+"enter",oe,a,G),ae.target=b,ae.relatedTarget=ht,X=ae),ht=X,te&&oe)t:{for(ae=te,M=oe,N=0,b=ae;b;b=Zs(b))N++;for(b=0,X=M;X;X=Zs(X))b++;for(;0<N-b;)ae=Zs(ae),N--;for(;0<b-N;)M=Zs(M),b--;for(;N--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Zs(ae),M=Zs(M)}ae=null}else ae=null;te!==null&&Ep(Q,W,te,ae,!1),oe!==null&&ht!==null&&Ep(Q,ht,oe,ae,!0)}}e:{if(W=F?to(F):window,te=W.nodeName&&W.nodeName.toLowerCase(),te==="select"||te==="input"&&W.type==="file")var le=DE;else if(Zf(W))if(tp)le=LE;else{le=VE;var fe=xE}else(te=W.nodeName)&&te.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(le=OE);if(le&&(le=le(n,F))){ep(Q,le,a,G);break e}fe&&fe(n,W,F),n==="focusout"&&(fe=W._wrapperState)&&fe.controlled&&W.type==="number"&&Se(W,"number",W.value)}switch(fe=F?to(F):window,n){case"focusin":(Zf(fe)||fe.contentEditable==="true")&&(Xs=fe,Bc=F,da=null);break;case"focusout":da=Bc=Xs=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,up(Q,a,G);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":up(Q,a,G)}var pe;if(mt)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ys?Xf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Zi&&a.locale!=="ko"&&(Ys||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ys&&(pe=sa()):(cn=G,zs="value"in cn?cn.value:cn.textContent,Ys=!0)),fe=Bl(F,Ee),0<fe.length&&(Ee=new la(Ee,n,null,a,G),Q.push({event:Ee,listeners:fe}),pe?Ee.data=pe:(pe=Jf(a),pe!==null&&(Ee.data=pe)))),(pe=hn?CE(n,a):PE(n,a))&&(F=Bl(F,"onBeforeInput"),0<F.length&&(G=new la("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:F}),G.data=pe))}_p(Q,i)})}function ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ct(n,a),p!=null&&c.unshift(ma(n,p,d)),p=ct(n,i),p!=null&&c.push(ma(n,p,d))),n=n.return}return c}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ep(n,i,a,c,d){for(var p=i._reactName,_=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=ct(a,p),C!=null&&_.unshift(ma(a,C,T))):d||(C=ct(a,p),C!=null&&_.push(ma(a,C,T)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var BE=/\r\n?/g,$E=/\u0000|\uFFFD/g;function wp(n){return(typeof n=="string"?n:""+n).replace(BE,`
`).replace($E,"")}function $l(n,i,a){if(i=wp(i),wp(n)!==i&&a)throw Error(t(425))}function ql(){}var Qc=null,Yc=null;function Xc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,qE=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,HE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(n){return Tp.resolve(null).then(n).catch(WE)}:Jc;function WE(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Fn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Fn(i)}function ri(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ip(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var eo=Math.random().toString(36).slice(2),ar="__reactFiber$"+eo,ga="__reactProps$"+eo,Cr="__reactContainer$"+eo,eh="__reactEvents$"+eo,KE="__reactListeners$"+eo,GE="__reactHandles$"+eo;function es(n){var i=n[ar];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Cr]||a[ar]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ip(n);n!==null;){if(a=n[ar])return a;n=Ip(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[ar]||n[Cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function to(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Hl(n){return n[ga]||null}var th=[],no=-1;function ii(n){return{current:n}}function Ze(n){0>no||(n.current=th[no],th[no]=null,no--)}function Ye(n,i){no++,th[no]=n.current,n.current=i}var si={},jt=ii(si),en=ii(!1),ts=si;function ro(n,i){var a=n.type.contextTypes;if(!a)return si;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function tn(n){return n=n.childContextTypes,n!=null}function Wl(){Ze(en),Ze(jt)}function Sp(n,i,a){if(jt.current!==si)throw Error(t(168));Ye(jt,i),Ye(en,a)}function Ap(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return ee({},a,c)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||si,ts=jt.current,Ye(jt,n),Ye(en,en.current),!0}function Rp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ap(n,i,ts),c.__reactInternalMemoizedMergedChildContext=n,Ze(en),Ze(jt),Ye(jt,n)):Ze(en),Ye(en,a)}var Pr=null,Gl=!1,nh=!1;function Cp(n){Pr===null?Pr=[n]:Pr.push(n)}function QE(n){Gl=!0,Cp(n)}function oi(){if(!nh&&Pr!==null){nh=!0;var n=0,i=Me;try{var a=Pr;for(Me=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Pr=null,Gl=!1}catch(d){throw Pr!==null&&(Pr=Pr.slice(n+1)),Ms(Wi,oi),d}finally{Me=i,nh=!1}}return null}var io=[],so=0,Ql=null,Yl=0,wn=[],Tn=0,ns=null,kr=1,Nr="";function rs(n,i){io[so++]=Yl,io[so++]=Ql,Ql=n,Yl=i}function Pp(n,i,a){wn[Tn++]=kr,wn[Tn++]=Nr,wn[Tn++]=ns,ns=n;var c=kr;n=Nr;var d=32-Gt(c)-1;c&=~(1<<d),a+=1;var p=32-Gt(i)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,kr=1<<32-Gt(i)+d|a<<d|c,Nr=p+n}else kr=1<<p|a<<d|c,Nr=n}function rh(n){n.return!==null&&(rs(n,1),Pp(n,1,0))}function ih(n){for(;n===Ql;)Ql=io[--so],io[so]=null,Yl=io[--so],io[so]=null;for(;n===ns;)ns=wn[--Tn],wn[Tn]=null,Nr=wn[--Tn],wn[Tn]=null,kr=wn[--Tn],wn[Tn]=null}var dn=null,fn=null,nt=!1,zn=null;function kp(n,i){var a=Rn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,dn=n,fn=ri(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,dn=n,fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:kr,overflow:Nr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Rn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,dn=n,fn=null,!0):!1;default:return!1}}function sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oh(n){if(nt){var i=fn;if(i){var a=i;if(!Np(n,i)){if(sh(n))throw Error(t(418));i=ri(a.nextSibling);var c=dn;i&&Np(n,i)?kp(c,a):(n.flags=n.flags&-4097|2,nt=!1,dn=n)}}else{if(sh(n))throw Error(t(418));n.flags=n.flags&-4097|2,nt=!1,dn=n}}}function Dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function Xl(n){if(n!==dn)return!1;if(!nt)return Dp(n),nt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Xc(n.type,n.memoizedProps)),i&&(i=fn)){if(sh(n))throw xp(),Error(t(418));for(;i;)kp(n,i),i=ri(i.nextSibling)}if(Dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){fn=ri(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}fn=null}}else fn=dn?ri(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=fn;n;)n=ri(n.nextSibling)}function oo(){fn=dn=null,nt=!1}function ah(n){zn===null?zn=[n]:zn.push(n)}var YE=ve.ReactCurrentBatchConfig;function _a(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Vp(n){var i=n._init;return i(n._payload)}function Op(n){function i(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)i(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=pi(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,X){return N===null||N.tag!==6?(N=Jh(b,M.mode,X),N.return=M,N):(N=d(N,b),N.return=M,N)}function C(M,N,b,X){var le=b.type;return le===D?G(M,N,b.props.children,X,b.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===wt&&Vp(le)===N.type)?(X=d(N,b.props),X.ref=_a(M,N,b),X.return=M,X):(X=Tu(b.type,b.key,b.props,null,M.mode,X),X.ref=_a(M,N,b),X.return=M,X)}function F(M,N,b,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Zh(b,M.mode,X),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function G(M,N,b,X,le){return N===null||N.tag!==7?(N=hs(b,M.mode,X,le),N.return=M,N):(N=d(N,b),N.return=M,N)}function Q(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Jh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case We:return b=Tu(N.type,N.key,N.props,null,M.mode,b),b.ref=_a(M,null,N),b.return=M,b;case Ce:return N=Zh(N,M.mode,b),N.return=M,N;case wt:var X=N._init;return Q(M,X(N._payload),b)}if(we(N)||ce(N))return N=hs(N,M.mode,b,null),N.return=M,N;Jl(M,N)}return null}function W(M,N,b,X){var le=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,N,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case We:return b.key===le?C(M,N,b,X):null;case Ce:return b.key===le?F(M,N,b,X):null;case wt:return le=b._init,W(M,N,le(b._payload),X)}if(we(b)||ce(b))return le!==null?null:G(M,N,b,X,null);Jl(M,b)}return null}function te(M,N,b,X,le){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,T(N,M,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case We:return M=M.get(X.key===null?b:X.key)||null,C(N,M,X,le);case Ce:return M=M.get(X.key===null?b:X.key)||null,F(N,M,X,le);case wt:var fe=X._init;return te(M,N,b,fe(X._payload),le)}if(we(X)||ce(X))return M=M.get(b)||null,G(N,M,X,le,null);Jl(N,X)}return null}function oe(M,N,b,X){for(var le=null,fe=null,pe=N,Ee=N=0,Dt=null;pe!==null&&Ee<b.length;Ee++){pe.index>Ee?(Dt=pe,pe=null):Dt=pe.sibling;var Be=W(M,pe,b[Ee],X);if(Be===null){pe===null&&(pe=Dt);break}n&&pe&&Be.alternate===null&&i(M,pe),N=p(Be,N,Ee),fe===null?le=Be:fe.sibling=Be,fe=Be,pe=Dt}if(Ee===b.length)return a(M,pe),nt&&rs(M,Ee),le;if(pe===null){for(;Ee<b.length;Ee++)pe=Q(M,b[Ee],X),pe!==null&&(N=p(pe,N,Ee),fe===null?le=pe:fe.sibling=pe,fe=pe);return nt&&rs(M,Ee),le}for(pe=c(M,pe);Ee<b.length;Ee++)Dt=te(pe,M,Ee,b[Ee],X),Dt!==null&&(n&&Dt.alternate!==null&&pe.delete(Dt.key===null?Ee:Dt.key),N=p(Dt,N,Ee),fe===null?le=Dt:fe.sibling=Dt,fe=Dt);return n&&pe.forEach(function(mi){return i(M,mi)}),nt&&rs(M,Ee),le}function ae(M,N,b,X){var le=ce(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var fe=le=null,pe=N,Ee=N=0,Dt=null,Be=b.next();pe!==null&&!Be.done;Ee++,Be=b.next()){pe.index>Ee?(Dt=pe,pe=null):Dt=pe.sibling;var mi=W(M,pe,Be.value,X);if(mi===null){pe===null&&(pe=Dt);break}n&&pe&&mi.alternate===null&&i(M,pe),N=p(mi,N,Ee),fe===null?le=mi:fe.sibling=mi,fe=mi,pe=Dt}if(Be.done)return a(M,pe),nt&&rs(M,Ee),le;if(pe===null){for(;!Be.done;Ee++,Be=b.next())Be=Q(M,Be.value,X),Be!==null&&(N=p(Be,N,Ee),fe===null?le=Be:fe.sibling=Be,fe=Be);return nt&&rs(M,Ee),le}for(pe=c(M,pe);!Be.done;Ee++,Be=b.next())Be=te(pe,M,Ee,Be.value,X),Be!==null&&(n&&Be.alternate!==null&&pe.delete(Be.key===null?Ee:Be.key),N=p(Be,N,Ee),fe===null?le=Be:fe.sibling=Be,fe=Be);return n&&pe.forEach(function(kw){return i(M,kw)}),nt&&rs(M,Ee),le}function ht(M,N,b,X){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case We:e:{for(var le=b.key,fe=N;fe!==null;){if(fe.key===le){if(le=b.type,le===D){if(fe.tag===7){a(M,fe.sibling),N=d(fe,b.props.children),N.return=M,M=N;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===wt&&Vp(le)===fe.type){a(M,fe.sibling),N=d(fe,b.props),N.ref=_a(M,fe,b),N.return=M,M=N;break e}a(M,fe);break}else i(M,fe);fe=fe.sibling}b.type===D?(N=hs(b.props.children,M.mode,X,b.key),N.return=M,M=N):(X=Tu(b.type,b.key,b.props,null,M.mode,X),X.ref=_a(M,N,b),X.return=M,M=X)}return _(M);case Ce:e:{for(fe=b.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else i(M,N);N=N.sibling}N=Zh(b,M.mode,X),N.return=M,M=N}return _(M);case wt:return fe=b._init,ht(M,N,fe(b._payload),X)}if(we(b))return oe(M,N,b,X);if(ce(b))return ae(M,N,b,X);Jl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=Jh(b,M.mode,X),N.return=M,M=N),_(M)):a(M,N)}return ht}var ao=Op(!0),Lp=Op(!1),Zl=ii(null),eu=null,lo=null,lh=null;function uh(){lh=lo=eu=null}function ch(n){var i=Zl.current;Ze(Zl),n._currentValue=i}function hh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function uo(n,i){eu=n,lh=lo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(nn=!0),n.firstContext=null)}function In(n){var i=n._currentValue;if(lh!==n)if(n={context:n,memoizedValue:i,next:null},lo===null){if(eu===null)throw Error(t(308));lo=n,eu.dependencies={lanes:0,firstContext:n}}else lo=lo.next=n;return i}var is=null;function dh(n){is===null?is=[n]:is.push(n)}function Mp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,dh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Dr(n,c)}function Dr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ai=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function li(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Dr(n,a)}return d=c.interleaved,d===null?(i.next=i,dh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Dr(n,a)}function tu(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Xr(n,a)}}function Fp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nu(n,i,a,c){var d=n.updateQueue;ai=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?p=F:_.next=F,_=C;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==_&&(T===null?G.firstBaseUpdate=F:T.next=F,G.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;_=0,G=F=C=null,T=p;do{var W=T.lane,te=T.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:te,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(W=i,te=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(te,Q,W);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,W=typeof oe=="function"?oe.call(te,Q,W):oe,W==null)break e;Q=ee({},Q,W);break e;case 2:ai=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else te={eventTime:te,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(F=G=te,C=Q):G=G.next=te,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=G,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);as|=_,n.lanes=_,n.memoizedState=Q}}function Up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var va={},lr=ii(va),Ea=ii(va),wa=ii(va);function ss(n){if(n===va)throw Error(t(174));return n}function ph(n,i){switch(Ye(wa,i),Ye(Ea,n),Ye(lr,va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Tt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Tt(i,n)}Ze(lr),Ye(lr,i)}function co(){Ze(lr),Ze(Ea),Ze(wa)}function jp(n){ss(wa.current);var i=ss(lr.current),a=Tt(i,n.type);i!==a&&(Ye(Ea,n),Ye(lr,a))}function mh(n){Ea.current===n&&(Ze(lr),Ze(Ea))}var it=ii(0);function ru(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gh=[];function yh(){for(var n=0;n<gh.length;n++)gh[n]._workInProgressVersionPrimary=null;gh.length=0}var iu=ve.ReactCurrentDispatcher,_h=ve.ReactCurrentBatchConfig,os=0,st=null,St=null,kt=null,su=!1,Ta=!1,Ia=0,XE=0;function zt(){throw Error(t(321))}function vh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!jn(n[a],i[a]))return!1;return!0}function Eh(n,i,a,c,d,p){if(os=p,st=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,iu.current=n===null||n.memoizedState===null?tw:nw,n=a(c,d),Ta){p=0;do{if(Ta=!1,Ia=0,25<=p)throw Error(t(301));p+=1,kt=St=null,i.updateQueue=null,iu.current=rw,n=a(c,d)}while(Ta)}if(iu.current=lu,i=St!==null&&St.next!==null,os=0,kt=St=st=null,su=!1,i)throw Error(t(300));return n}function wh(){var n=Ia!==0;return Ia=0,n}function ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?st.memoizedState=kt=n:kt=kt.next=n,kt}function Sn(){if(St===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=St.next;var i=kt===null?st.memoizedState:kt.next;if(i!==null)kt=i,St=n;else{if(n===null)throw Error(t(310));St=n,n={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},kt===null?st.memoizedState=kt=n:kt=kt.next=n}return kt}function Sa(n,i){return typeof i=="function"?i(n):i}function Th(n){var i=Sn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=St,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,C=null,F=p;do{var G=F.lane;if((os&G)===G)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:G,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=Q,_=c):C=C.next=Q,st.lanes|=G,as|=G}F=F.next}while(F!==null&&F!==p);C===null?_=c:C.next=T,jn(c,i.memoizedState)||(nn=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,st.lanes|=p,as|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ih(n){var i=Sn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);jn(p,i.memoizedState)||(nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function zp(){}function Bp(n,i){var a=st,c=Sn(),d=i(),p=!jn(c.memoizedState,d);if(p&&(c.memoizedState=d,nn=!0),c=c.queue,Sh(Hp.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,Aa(9,qp.bind(null,a,c,d,i),void 0,null),Nt===null)throw Error(t(349));(os&30)!==0||$p(a,i,d)}return d}function $p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function qp(n,i,a,c){i.value=a,i.getSnapshot=c,Wp(i)&&Kp(n)}function Hp(n,i,a){return a(function(){Wp(i)&&Kp(n)})}function Wp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!jn(n,a)}catch{return!0}}function Kp(n){var i=Dr(n,1);i!==null&&Hn(i,n,1,-1)}function Gp(n){var i=ur();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=ew.bind(null,st,n),[i.memoizedState,n]}function Aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Qp(){return Sn().memoizedState}function ou(n,i,a,c){var d=ur();st.flags|=n,d.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function au(n,i,a,c){var d=Sn();c=c===void 0?null:c;var p=void 0;if(St!==null){var _=St.memoizedState;if(p=_.destroy,c!==null&&vh(c,_.deps)){d.memoizedState=Aa(i,a,p,c);return}}st.flags|=n,d.memoizedState=Aa(1|i,a,p,c)}function Yp(n,i){return ou(8390656,8,n,i)}function Sh(n,i){return au(2048,8,n,i)}function Xp(n,i){return au(4,2,n,i)}function Jp(n,i){return au(4,4,n,i)}function Zp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function em(n,i,a){return a=a!=null?a.concat([n]):null,au(4,4,Zp.bind(null,i,n),a)}function Ah(){}function tm(n,i){var a=Sn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function nm(n,i){var a=Sn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function rm(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,nn=!0),n.memoizedState=a):(jn(a,i)||(a=Qi(),st.lanes|=a,as|=a,n.baseState=!0),i)}function JE(n,i){var a=Me;Me=a!==0&&4>a?a:4,n(!0);var c=_h.transition;_h.transition={};try{n(!1),i()}finally{Me=a,_h.transition=c}}function im(){return Sn().memoizedState}function ZE(n,i,a){var c=di(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},sm(n))om(i,a);else if(a=Mp(n,i,a,c),a!==null){var d=Xt();Hn(a,n,c,d),am(a,i,c)}}function ew(n,i,a){var c=di(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(sm(n))om(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var _=i.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,jn(T,_)){var C=i.interleaved;C===null?(d.next=d,dh(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Mp(n,i,d,c),a!==null&&(d=Xt(),Hn(a,n,c,d),am(a,i,c))}}function sm(n){var i=n.alternate;return n===st||i!==null&&i===st}function om(n,i){Ta=su=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function am(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Xr(n,a)}}var lu={readContext:In,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},tw={readContext:In,useCallback:function(n,i){return ur().memoizedState=[n,i===void 0?null:i],n},useContext:In,useEffect:Yp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ou(4194308,4,Zp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ou(4194308,4,n,i)},useInsertionEffect:function(n,i){return ou(4,2,n,i)},useMemo:function(n,i){var a=ur();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ur();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ZE.bind(null,st,n),[c.memoizedState,n]},useRef:function(n){var i=ur();return n={current:n},i.memoizedState=n},useState:Gp,useDebugValue:Ah,useDeferredValue:function(n){return ur().memoizedState=n},useTransition:function(){var n=Gp(!1),i=n[0];return n=JE.bind(null,n[1]),ur().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=st,d=ur();if(nt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Nt===null)throw Error(t(349));(os&30)!==0||$p(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Yp(Hp.bind(null,c,p,n),[n]),c.flags|=2048,Aa(9,qp.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=ur(),i=Nt.identifierPrefix;if(nt){var a=Nr,c=kr;a=(c&~(1<<32-Gt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=XE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},nw={readContext:In,useCallback:tm,useContext:In,useEffect:Sh,useImperativeHandle:em,useInsertionEffect:Xp,useLayoutEffect:Jp,useMemo:nm,useReducer:Th,useRef:Qp,useState:function(){return Th(Sa)},useDebugValue:Ah,useDeferredValue:function(n){var i=Sn();return rm(i,St.memoizedState,n)},useTransition:function(){var n=Th(Sa)[0],i=Sn().memoizedState;return[n,i]},useMutableSource:zp,useSyncExternalStore:Bp,useId:im,unstable_isNewReconciler:!1},rw={readContext:In,useCallback:tm,useContext:In,useEffect:Sh,useImperativeHandle:em,useInsertionEffect:Xp,useLayoutEffect:Jp,useMemo:nm,useReducer:Ih,useRef:Qp,useState:function(){return Ih(Sa)},useDebugValue:Ah,useDeferredValue:function(n){var i=Sn();return St===null?i.memoizedState=n:rm(i,St.memoizedState,n)},useTransition:function(){var n=Ih(Sa)[0],i=Sn().memoizedState;return[n,i]},useMutableSource:zp,useSyncExternalStore:Bp,useId:im,unstable_isNewReconciler:!1};function Bn(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Rh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var uu={isMounted:function(n){return(n=n._reactInternals)?Vn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Xt(),d=di(n),p=xr(c,d);p.payload=i,a!=null&&(p.callback=a),i=li(n,p,d),i!==null&&(Hn(i,n,d,c),tu(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Xt(),d=di(n),p=xr(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=li(n,p,d),i!==null&&(Hn(i,n,d,c),tu(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Xt(),c=di(n),d=xr(a,c);d.tag=2,i!=null&&(d.callback=i),i=li(n,d,c),i!==null&&(Hn(i,n,c,a),tu(i,n,c))}};function lm(n,i,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):i.prototype&&i.prototype.isPureReactComponent?!ha(a,c)||!ha(d,p):!0}function um(n,i,a){var c=!1,d=si,p=i.contextType;return typeof p=="object"&&p!==null?p=In(p):(d=tn(i)?ts:jt.current,c=i.contextTypes,p=(c=c!=null)?ro(n,d):si),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function cm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&uu.enqueueReplaceState(i,i.state,null)}function Ch(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},fh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=In(p):(p=tn(i)?ts:jt.current,d.context=ro(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Rh(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&uu.enqueueReplaceState(d,d.state,null),nu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ho(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function Ph(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function kh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var iw=typeof WeakMap=="function"?WeakMap:Map;function hm(n,i,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gu||(gu=!0,qh=c),kh(n,i)},a}function dm(n,i,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){kh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){kh(n,i),typeof c!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function fm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new iw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=_w.bind(null,n,i,a),i.then(n,n))}function pm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function mm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xr(-1,1),i.tag=2,li(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var sw=ve.ReactCurrentOwner,nn=!1;function Yt(n,i,a,c){i.child=n===null?Lp(i,null,a,c):ao(i,n.child,a,c)}function gm(n,i,a,c,d){a=a.render;var p=i.ref;return uo(i,d),c=Eh(n,i,a,c,p,d),a=wh(),n!==null&&!nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Vr(n,i,d)):(nt&&a&&rh(i),i.flags|=1,Yt(n,i,c,d),i.child)}function ym(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Xh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,_m(n,i,p,c,d)):(n=Tu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(_,c)&&n.ref===i.ref)return Vr(n,i,d)}return i.flags|=1,n=pi(p,c),n.ref=i.ref,n.return=i,i.child=n}function _m(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(ha(p,c)&&n.ref===i.ref)if(nn=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(nn=!0);else return i.lanes=n.lanes,Vr(n,i,d)}return Nh(n,i,a,c,d)}function vm(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(po,pn),pn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ye(po,pn),pn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ye(po,pn),pn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ye(po,pn),pn|=c;return Yt(n,i,d,a),i.child}function Em(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Nh(n,i,a,c,d){var p=tn(a)?ts:jt.current;return p=ro(i,p),uo(i,d),a=Eh(n,i,a,c,p,d),c=wh(),n!==null&&!nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Vr(n,i,d)):(nt&&c&&rh(i),i.flags|=1,Yt(n,i,a,d),i.child)}function wm(n,i,a,c,d){if(tn(a)){var p=!0;Kl(i)}else p=!1;if(uo(i,d),i.stateNode===null)hu(n,i),um(i,a,c),Ch(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,T=i.memoizedProps;_.props=T;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=In(F):(F=tn(a)?ts:jt.current,F=ro(i,F));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||C!==F)&&cm(i,_,c,F),ai=!1;var W=i.memoizedState;_.state=W,nu(i,c,_,d),C=i.memoizedState,T!==c||W!==C||en.current||ai?(typeof G=="function"&&(Rh(i,a,G,c),C=i.memoizedState),(T=ai||lm(i,a,T,c,W,C,F))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),_.props=c,_.state=C,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,bp(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:Bn(i.type,T),_.props=F,Q=i.pendingProps,W=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=In(C):(C=tn(a)?ts:jt.current,C=ro(i,C));var te=a.getDerivedStateFromProps;(G=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||W!==C)&&cm(i,_,c,C),ai=!1,W=i.memoizedState,_.state=W,nu(i,c,_,d);var oe=i.memoizedState;T!==Q||W!==oe||en.current||ai?(typeof te=="function"&&(Rh(i,a,te,c),oe=i.memoizedState),(F=ai||lm(i,a,F,c,W,oe,C)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,C)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),_.props=c,_.state=oe,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return Dh(n,i,a,c,p,d)}function Dh(n,i,a,c,d,p){Em(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&Rp(i,a,!1),Vr(n,i,p);c=i.stateNode,sw.current=i;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=ao(i,n.child,null,p),i.child=ao(i,null,T,p)):Yt(n,i,T,p),i.memoizedState=c.state,d&&Rp(i,a,!0),i.child}function Tm(n){var i=n.stateNode;i.pendingContext?Sp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Sp(n,i.context,!1),ph(n,i.containerInfo)}function Im(n,i,a,c,d){return oo(),ah(d),i.flags|=256,Yt(n,i,a,c),i.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function Vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sm(n,i,a){var c=i.pendingProps,d=it.current,p=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ye(it,d&1),n===null)return oh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=i.mode,p=i.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Iu(_,c,0,null),n=hs(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Vh(a),i.memoizedState=xh,n):Oh(i,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return ow(n,i,_,c,T,d,a);if(p){p=c.fallback,_=i.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=pi(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=pi(T,p):(p=hs(p,_,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,_=n.child.memoizedState,_=_===null?Vh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,i.memoizedState=xh,c}return p=n.child,n=p.sibling,c=pi(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Oh(n,i){return i=Iu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cu(n,i,a,c){return c!==null&&ah(c),ao(i,n.child,null,a),n=Oh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ow(n,i,a,c,d,p,_){if(a)return i.flags&256?(i.flags&=-257,c=Ph(Error(t(422))),cu(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Iu({mode:"visible",children:c.children},d,0,null),p=hs(p,d,_,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ao(i,n.child,null,_),i.child.memoizedState=Vh(_),i.memoizedState=xh,p);if((i.mode&1)===0)return cu(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Ph(p,c,void 0),cu(n,i,_,c)}if(T=(_&n.childLanes)!==0,nn||T){if(c=Nt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Dr(n,d),Hn(c,n,d,-1))}return Yh(),c=Ph(Error(t(421))),cu(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=vw.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,fn=ri(d.nextSibling),dn=i,nt=!0,zn=null,n!==null&&(wn[Tn++]=kr,wn[Tn++]=Nr,wn[Tn++]=ns,kr=n.id,Nr=n.overflow,ns=i),i=Oh(i,c.children),i.flags|=4096,i)}function Am(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),hh(n.return,i,a)}function Lh(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Rm(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Yt(n,i,c.children,a),c=it.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Am(n,a,i);else if(n.tag===19)Am(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ye(it,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ru(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Lh(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ru(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Lh(i,!0,a,null,p);break;case"together":Lh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function hu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Vr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=pi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=pi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function aw(n,i,a){switch(i.tag){case 3:Tm(i),oo();break;case 5:jp(i);break;case 1:tn(i.type)&&Kl(i);break;case 4:ph(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ye(Zl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ye(it,it.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Sm(n,i,a):(Ye(it,it.current&1),n=Vr(n,i,a),n!==null?n.sibling:null);Ye(it,it.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Rm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ye(it,it.current),c)break;return null;case 22:case 23:return i.lanes=0,vm(n,i,a)}return Vr(n,i,a)}var Cm,Mh,Pm,km;Cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mh=function(){},Pm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ss(lr.current);var p=null;switch(a){case"input":d=vr(n,d),c=vr(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=ut(n,d),c=ut(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ql)}Wo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Je("scroll",n),p||T===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(i.updateQueue=F)&&(i.flags|=4)}},km=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ra(n,i){if(!nt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function lw(n,i,a){var c=i.pendingProps;switch(ih(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(i),null;case 1:return tn(i.type)&&Wl(),Bt(i),null;case 3:return c=i.stateNode,co(),Ze(en),Ze(jt),yh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zn!==null&&(Kh(zn),zn=null))),Mh(n,i),Bt(i),null;case 5:mh(i);var d=ss(wa.current);if(a=i.type,n!==null&&i.stateNode!=null)Pm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Bt(i),null}if(n=ss(lr.current),Xl(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[ar]=i,c[ga]=p,n=(i.mode&1)!==0,a){case"dialog":Je("cancel",c),Je("close",c);break;case"iframe":case"object":case"embed":Je("load",c);break;case"video":case"audio":for(d=0;d<fa.length;d++)Je(fa[d],c);break;case"source":Je("error",c);break;case"img":case"image":case"link":Je("error",c),Je("load",c);break;case"details":Je("toggle",c);break;case"input":Hr(c,p),Je("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Je("invalid",c);break;case"textarea":qe(c,p),Je("invalid",c)}Wo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&$l(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&$l(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Je("scroll",c)}switch(a){case"input":gn(c),ue(c,p,!0);break;case"textarea":gn(c),Zn(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ql)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[ar]=i,n[ga]=c,Cm(n,i,!1,!1),i.stateNode=n;e:{switch(_=Ko(a,c),a){case"dialog":Je("cancel",n),Je("close",n),d=c;break;case"iframe":case"object":case"embed":Je("load",n),d=c;break;case"video":case"audio":for(d=0;d<fa.length;d++)Je(fa[d],n);d=c;break;case"source":Je("error",n),d=c;break;case"img":case"image":case"link":Je("error",n),Je("load",n),d=c;break;case"details":Je("toggle",n),d=c;break;case"input":Hr(n,c),d=vr(n,c),Je("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Je("invalid",n);break;case"textarea":qe(n,c),d=ut(n,c),Je("invalid",n);break;default:d=c}Wo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?qo(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Bo(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Wr(n,C):typeof C=="number"&&Wr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Je("scroll",n):C!=null&&me(n,p,C,_))}switch(a){case"input":gn(n),ue(n,c,!1);break;case"textarea":gn(n),Zn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ke(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Ae(n,!!c.multiple,p,!1):c.defaultValue!=null&&Ae(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bt(i),null;case 6:if(n&&i.stateNode!=null)km(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ss(wa.current),ss(lr.current),Xl(i)){if(c=i.stateNode,a=i.memoizedProps,c[ar]=i,(p=c.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:$l(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ar]=i,i.stateNode=c}return Bt(i),null;case 13:if(Ze(it),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nt&&fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xp(),oo(),i.flags|=98560,p=!1;else if(p=Xl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[ar]=i}else oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bt(i),p=!1}else zn!==null&&(Kh(zn),zn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(it.current&1)!==0?At===0&&(At=3):Yh())),i.updateQueue!==null&&(i.flags|=4),Bt(i),null);case 4:return co(),Mh(n,i),n===null&&pa(i.stateNode.containerInfo),Bt(i),null;case 10:return ch(i.type._context),Bt(i),null;case 17:return tn(i.type)&&Wl(),Bt(i),null;case 19:if(Ze(it),p=i.memoizedState,p===null)return Bt(i),null;if(c=(i.flags&128)!==0,_=p.rendering,_===null)if(c)Ra(p,!1);else{if(At!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=ru(n),_!==null){for(i.flags|=128,Ra(p,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ye(it,it.current&1|2),i.child}n=n.sibling}p.tail!==null&&Qe()>mo&&(i.flags|=128,c=!0,Ra(p,!1),i.lanes=4194304)}else{if(!c)if(n=ru(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ra(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!nt)return Bt(i),null}else 2*Qe()-p.renderingStartTime>mo&&a!==1073741824&&(i.flags|=128,c=!0,Ra(p,!1),i.lanes=4194304);p.isBackwards?(_.sibling=i.child,i.child=_):(a=p.last,a!==null?a.sibling=_:i.child=_,p.last=_)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Qe(),i.sibling=null,a=it.current,Ye(it,c?a&1|2:a&1),i):(Bt(i),null);case 22:case 23:return Qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pn&1073741824)!==0&&(Bt(i),i.subtreeFlags&6&&(i.flags|=8192)):Bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function uw(n,i){switch(ih(i),i.tag){case 1:return tn(i.type)&&Wl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return co(),Ze(en),Ze(jt),yh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mh(i),null;case 13:if(Ze(it),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));oo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ze(it),null;case 4:return co(),null;case 10:return ch(i.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var du=!1,$t=!1,cw=typeof WeakSet=="function"?WeakSet:Set,se=null;function fo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){lt(n,i,c)}else a.current=null}function bh(n,i,a){try{a()}catch(c){lt(n,i,c)}}var Nm=!1;function hw(n,i){if(Qc=ei,n=lp(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,C=-1,F=0,G=0,Q=n,W=null;t:for(;;){for(var te;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(C=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(te=Q.firstChild)!==null;)W=Q,Q=te;for(;;){if(Q===n)break t;if(W===a&&++F===d&&(T=_),W===p&&++G===c&&(C=_),(te=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=te}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},ei=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,ht=oe.memoizedState,M=i.stateNode,N=M.getSnapshotBeforeUpdate(i.elementType===i.type?ae:Bn(i.type,ae),ht);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){lt(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=Nm,Nm=!1,oe}function Ca(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&bh(i,a,p)}d=d.next}while(d!==c)}}function fu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Fh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Dm(n){var i=n.alternate;i!==null&&(n.alternate=null,Dm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ar],delete i[ga],delete i[eh],delete i[KE],delete i[GE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function Vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ql));else if(c!==4&&(n=n.child,n!==null))for(Uh(n,i,a),n=n.sibling;n!==null;)Uh(n,i,a),n=n.sibling}function jh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(jh(n,i,a),n=n.sibling;n!==null;)jh(n,i,a),n=n.sibling}var Lt=null,$n=!1;function ui(n,i,a){for(a=a.child;a!==null;)Om(n,i,a),a=a.sibling}function Om(n,i,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ki,a)}catch{}switch(a.tag){case 5:$t||fo(a,i);case 6:var c=Lt,d=$n;Lt=null,ui(n,i,a),Lt=c,$n=d,Lt!==null&&($n?(n=Lt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&($n?(n=Lt,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),Fn(n)):Zc(Lt,a.stateNode));break;case 4:c=Lt,d=$n,Lt=a.stateNode.containerInfo,$n=!0,ui(n,i,a),Lt=c,$n=d;break;case 0:case 11:case 14:case 15:if(!$t&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&bh(a,i,_),d=d.next}while(d!==c)}ui(n,i,a);break;case 1:if(!$t&&(fo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){lt(a,i,T)}ui(n,i,a);break;case 21:ui(n,i,a);break;case 22:a.mode&1?($t=(c=$t)||a.memoizedState!==null,ui(n,i,a),$t=c):ui(n,i,a);break;default:ui(n,i,a)}}function Lm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new cw),i.forEach(function(c){var d=Ew.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function qn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=i,T=_;e:for(;T!==null;){switch(T.tag){case 5:Lt=T.stateNode,$n=!1;break e;case 3:Lt=T.stateNode.containerInfo,$n=!0;break e;case 4:Lt=T.stateNode.containerInfo,$n=!0;break e}T=T.return}if(Lt===null)throw Error(t(160));Om(p,_,d),Lt=null,$n=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){lt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mm(i,n),i=i.sibling}function Mm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qn(i,n),cr(n),c&4){try{Ca(3,n,n.return),fu(3,n)}catch(ae){lt(n,n.return,ae)}try{Ca(5,n,n.return)}catch(ae){lt(n,n.return,ae)}}break;case 1:qn(i,n),cr(n),c&512&&a!==null&&fo(a,a.return);break;case 5:if(qn(i,n),cr(n),c&512&&a!==null&&fo(a,a.return),n.flags&32){var d=n.stateNode;try{Wr(d,"")}catch(ae){lt(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&bi(d,p),Ko(T,_);var F=Ko(T,p);for(_=0;_<C.length;_+=2){var G=C[_],Q=C[_+1];G==="style"?qo(d,Q):G==="dangerouslySetInnerHTML"?Bo(d,Q):G==="children"?Wr(d,Q):me(d,G,Q,F)}switch(T){case"input":Fi(d,p);break;case"textarea":Jn(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?Ae(d,!!p.multiple,te,!1):W!==!!p.multiple&&(p.defaultValue!=null?Ae(d,!!p.multiple,p.defaultValue,!0):Ae(d,!!p.multiple,p.multiple?[]:"",!1))}d[ga]=p}catch(ae){lt(n,n.return,ae)}}break;case 6:if(qn(i,n),cr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){lt(n,n.return,ae)}}break;case 3:if(qn(i,n),cr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Fn(i.containerInfo)}catch(ae){lt(n,n.return,ae)}break;case 4:qn(i,n),cr(n);break;case 13:qn(i,n),cr(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($h=Qe())),c&4&&Lm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?($t=(F=$t)||G,qn(i,n),$t=F):qn(i,n),cr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!G&&(n.mode&1)!==0)for(se=n,G=n.child;G!==null;){for(Q=se=G;se!==null;){switch(W=se,te=W.child,W.tag){case 0:case 11:case 14:case 15:Ca(4,W,W.return);break;case 1:fo(W,W.return);var oe=W.stateNode;if(typeof oe.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){lt(c,a,ae)}}break;case 5:fo(W,W.return);break;case 22:if(W.memoizedState!==null){Um(Q);continue}}te!==null?(te.return=W,se=te):Um(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,C=Q.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=$o("display",_))}catch(ae){lt(n,n.return,ae)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ae){lt(n,n.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:qn(i,n),cr(n),c&4&&Lm(n);break;case 21:break;default:qn(i,n),cr(n)}}function cr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Wr(d,""),c.flags&=-33);var p=Vm(n);jh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Vm(n);Uh(n,T,_);break;default:throw Error(t(161))}}catch(C){lt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function dw(n,i,a){se=n,bm(n)}function bm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||du;if(!_){var T=d.alternate,C=T!==null&&T.memoizedState!==null||$t;T=du;var F=$t;if(du=_,($t=C)&&!F)for(se=d;se!==null;)_=se,C=_.child,_.tag===22&&_.memoizedState!==null?jm(d):C!==null?(C.return=_,se=C):jm(d);for(;p!==null;)se=p,bm(p),p=p.sibling;se=d,du=T,$t=F}Fm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):Fm(n)}}function Fm(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:$t||fu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!$t)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Bn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Up(i,p,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Up(i,_,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var G=F.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&Fn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||i.flags&512&&Fh(i)}catch(W){lt(i,i.return,W)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Um(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function jm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{fu(4,i)}catch(C){lt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(C){lt(i,d,C)}}var p=i.return;try{Fh(i)}catch(C){lt(i,p,C)}break;case 5:var _=i.return;try{Fh(i)}catch(C){lt(i,_,C)}}}catch(C){lt(i,i.return,C)}if(i===n){se=null;break}var T=i.sibling;if(T!==null){T.return=i.return,se=T;break}se=i.return}}var fw=Math.ceil,pu=ve.ReactCurrentDispatcher,zh=ve.ReactCurrentOwner,An=ve.ReactCurrentBatchConfig,je=0,Nt=null,gt=null,Mt=0,pn=0,po=ii(0),At=0,Pa=null,as=0,mu=0,Bh=0,ka=null,rn=null,$h=0,mo=1/0,Or=null,gu=!1,qh=null,ci=null,yu=!1,hi=null,_u=0,Na=0,Hh=null,vu=-1,Eu=0;function Xt(){return(je&6)!==0?Qe():vu!==-1?vu:vu=Qe()}function di(n){return(n.mode&1)===0?1:(je&2)!==0&&Mt!==0?Mt&-Mt:YE.transition!==null?(Eu===0&&(Eu=Qi()),Eu):(n=Me,n!==0||(n=window.event,n=n===void 0?16:ia(n.type)),n)}function Hn(n,i,a,c){if(50<Na)throw Na=0,Hh=null,Error(t(185));Yr(n,a,c),((je&2)===0||n!==Nt)&&(n===Nt&&((je&2)===0&&(mu|=a),At===4&&fi(n,Mt)),sn(n,c),a===1&&je===0&&(i.mode&1)===0&&(mo=Qe()+500,Gl&&oi()))}function sn(n,i){var a=n.callbackNode;Tr(n,i);var c=Gi(n,n===Nt?Mt:0);if(c===0)a!==null&&Zo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Zo(a),i===1)n.tag===0?QE(Bm.bind(null,n)):Cp(Bm.bind(null,n)),HE(function(){(je&6)===0&&oi()}),a=null;else{switch(Jr(c)){case 1:a=Wi;break;case 4:a=Kr;break;case 16:a=_n;break;case 536870912:a=El;break;default:a=_n}a=Ym(a,zm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zm(n,i){if(vu=-1,Eu=0,(je&6)!==0)throw Error(t(327));var a=n.callbackNode;if(go()&&n.callbackNode!==a)return null;var c=Gi(n,n===Nt?Mt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=wu(n,c);else{i=c;var d=je;je|=2;var p=qm();(Nt!==n||Mt!==i)&&(Or=null,mo=Qe()+500,us(n,i));do try{gw();break}catch(T){$m(n,T)}while(!0);uh(),pu.current=p,je=d,gt!==null?i=0:(Nt=null,Mt=0,i=At)}if(i!==0){if(i===2&&(d=un(n),d!==0&&(c=d,i=Wh(n,d))),i===1)throw a=Pa,us(n,0),fi(n,c),sn(n,Qe()),a;if(i===6)fi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!pw(d)&&(i=wu(n,c),i===2&&(p=un(n),p!==0&&(c=p,i=Wh(n,p))),i===1))throw a=Pa,us(n,0),fi(n,c),sn(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(n,rn,Or);break;case 3:if(fi(n,c),(c&130023424)===c&&(i=$h+500-Qe(),10<i)){if(Gi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Xt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Jc(cs.bind(null,n,rn,Or),i);break}cs(n,rn,Or);break;case 4:if(fi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Gt(c);p=1<<_,_=i[_],_>d&&(d=_),c&=~p}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fw(c/1960))-c,10<c){n.timeoutHandle=Jc(cs.bind(null,n,rn,Or),c);break}cs(n,rn,Or);break;case 5:cs(n,rn,Or);break;default:throw Error(t(329))}}}return sn(n,Qe()),n.callbackNode===a?zm.bind(null,n):null}function Wh(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=wu(n,i),n!==2&&(i=rn,rn=a,i!==null&&Kh(i)),n}function Kh(n){rn===null?rn=n:rn.push.apply(rn,n)}function pw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!jn(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fi(n,i){for(i&=~Bh,i&=~mu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Gt(i),c=1<<a;n[a]=-1,i&=~c}}function Bm(n){if((je&6)!==0)throw Error(t(327));go();var i=Gi(n,0);if((i&1)===0)return sn(n,Qe()),null;var a=wu(n,i);if(n.tag!==0&&a===2){var c=un(n);c!==0&&(i=c,a=Wh(n,c))}if(a===1)throw a=Pa,us(n,0),fi(n,i),sn(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,cs(n,rn,Or),sn(n,Qe()),null}function Gh(n,i){var a=je;je|=1;try{return n(i)}finally{je=a,je===0&&(mo=Qe()+500,Gl&&oi())}}function ls(n){hi!==null&&hi.tag===0&&(je&6)===0&&go();var i=je;je|=1;var a=An.transition,c=Me;try{if(An.transition=null,Me=1,n)return n()}finally{Me=c,An.transition=a,je=i,(je&6)===0&&oi()}}function Qh(){pn=po.current,Ze(po)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,qE(a)),gt!==null)for(a=gt.return;a!==null;){var c=a;switch(ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wl();break;case 3:co(),Ze(en),Ze(jt),yh();break;case 5:mh(c);break;case 4:co();break;case 13:Ze(it);break;case 19:Ze(it);break;case 10:ch(c.type._context);break;case 22:case 23:Qh()}a=a.return}if(Nt=n,gt=n=pi(n.current,null),Mt=pn=i,At=0,Pa=null,Bh=mu=as=0,rn=ka=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}is=null}return n}function $m(n,i){do{var a=gt;try{if(uh(),iu.current=lu,su){for(var c=st.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}su=!1}if(os=0,kt=St=st=null,Ta=!1,Ia=0,zh.current=null,a===null||a.return===null){At=1,Pa=i,gt=null;break}e:{var p=n,_=a.return,T=a,C=i;if(i=Mt,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,G=T,Q=G.tag;if((G.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var te=pm(_);if(te!==null){te.flags&=-257,mm(te,_,T,p,i),te.mode&1&&fm(p,F,i),i=te,C=F;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(C),i.updateQueue=ae}else oe.add(C);break e}else{if((i&1)===0){fm(p,F,i),Yh();break e}C=Error(t(426))}}else if(nt&&T.mode&1){var ht=pm(_);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),mm(ht,_,T,p,i),ah(ho(C,T));break e}}p=C=ho(C,T),At!==4&&(At=2),ka===null?ka=[p]:ka.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=hm(p,C,i);Fp(p,M);break e;case 1:T=C;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ci===null||!ci.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var X=dm(p,T,i);Fp(p,X);break e}}p=p.return}while(p!==null)}Wm(a)}catch(le){i=le,gt===a&&a!==null&&(gt=a=a.return);continue}break}while(!0)}function qm(){var n=pu.current;return pu.current=lu,n===null?lu:n}function Yh(){(At===0||At===3||At===2)&&(At=4),Nt===null||(as&268435455)===0&&(mu&268435455)===0||fi(Nt,Mt)}function wu(n,i){var a=je;je|=2;var c=qm();(Nt!==n||Mt!==i)&&(Or=null,us(n,i));do try{mw();break}catch(d){$m(n,d)}while(!0);if(uh(),je=a,pu.current=c,gt!==null)throw Error(t(261));return Nt=null,Mt=0,At}function mw(){for(;gt!==null;)Hm(gt)}function gw(){for(;gt!==null&&!_l();)Hm(gt)}function Hm(n){var i=Qm(n.alternate,n,pn);n.memoizedProps=n.pendingProps,i===null?Wm(n):gt=i,zh.current=null}function Wm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=lw(a,i,pn),a!==null){gt=a;return}}else{if(a=uw(a,i),a!==null){a.flags&=32767,gt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{At=6,gt=null;return}}if(i=i.sibling,i!==null){gt=i;return}gt=i=n}while(i!==null);At===0&&(At=5)}function cs(n,i,a){var c=Me,d=An.transition;try{An.transition=null,Me=1,yw(n,i,a,c)}finally{An.transition=d,Me=c}return null}function yw(n,i,a,c){do go();while(hi!==null);if((je&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Ge(n,p),n===Nt&&(gt=Nt=null,Mt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yu||(yu=!0,Ym(_n,function(){return go(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=An.transition,An.transition=null;var _=Me;Me=1;var T=je;je|=4,zh.current=null,hw(n,a),Mm(a,n),bE(Yc),ei=!!Qc,Yc=Qc=null,n.current=a,dw(a),Vc(),je=T,Me=_,An.transition=p}else n.current=a;if(yu&&(yu=!1,hi=n,_u=d),p=n.pendingLanes,p===0&&(ci=null),wl(a.stateNode),sn(n,Qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gu)throw gu=!1,n=qh,qh=null,n;return(_u&1)!==0&&n.tag!==0&&go(),p=n.pendingLanes,(p&1)!==0?n===Hh?Na++:(Na=0,Hh=n):Na=0,oi(),null}function go(){if(hi!==null){var n=Jr(_u),i=An.transition,a=Me;try{if(An.transition=null,Me=16>n?16:n,hi===null)var c=!1;else{if(n=hi,hi=null,_u=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(se=F;se!==null;){var G=se;switch(G.tag){case 0:case 11:case 15:Ca(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,se=Q;else for(;se!==null;){G=se;var W=G.sibling,te=G.return;if(Dm(G),G===F){se=null;break}if(W!==null){W.return=te,se=W;break}se=te}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var ht=ae.sibling;ae.sibling=null,ae=ht}while(ae!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ca(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var N=n.current;for(se=N;se!==null;){_=se;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,se=b;else e:for(_=N;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:fu(9,T)}}catch(le){lt(T,T.return,le)}if(T===_){se=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,se=X;break e}se=T.return}}if(je=d,oi(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ki,n)}catch{}c=!0}return c}finally{Me=a,An.transition=i}}return!1}function Km(n,i,a){i=ho(a,i),i=hm(n,i,1),n=li(n,i,1),i=Xt(),n!==null&&(Yr(n,1,i),sn(n,i))}function lt(n,i,a){if(n.tag===3)Km(n,n,a);else for(;i!==null;){if(i.tag===3){Km(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ci===null||!ci.has(c))){n=ho(a,n),n=dm(i,n,1),i=li(i,n,1),n=Xt(),i!==null&&(Yr(i,1,n),sn(i,n));break}}i=i.return}}function _w(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Xt(),n.pingedLanes|=n.suspendedLanes&a,Nt===n&&(Mt&a)===a&&(At===4||At===3&&(Mt&130023424)===Mt&&500>Qe()-$h?us(n,0):Bh|=a),sn(n,i)}function Gm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Fs,Fs<<=1,(Fs&130023424)===0&&(Fs=4194304)));var a=Xt();n=Dr(n,i),n!==null&&(Yr(n,i,a),sn(n,a))}function vw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Gm(n,a)}function Ew(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gm(n,a)}var Qm;Qm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||en.current)nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return nn=!1,aw(n,i,a);nn=(n.flags&131072)!==0}else nn=!1,nt&&(i.flags&1048576)!==0&&Pp(i,Yl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;hu(n,i),n=i.pendingProps;var d=ro(i,jt.current);uo(i,a),d=Eh(null,i,c,n,d,a);var p=wh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,tn(c)?(p=!0,Kl(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fh(i),d.updater=uu,i.stateNode=d,d._reactInternals=i,Ch(i,c,n,a),i=Dh(null,i,c,!0,p,a)):(i.tag=0,nt&&p&&rh(i),Yt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(hu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Tw(c),n=Bn(c,n),d){case 0:i=Nh(null,i,c,n,a);break e;case 1:i=wm(null,i,c,n,a);break e;case 11:i=gm(null,i,c,n,a);break e;case 14:i=ym(null,i,c,Bn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bn(c,d),Nh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bn(c,d),wm(n,i,c,d,a);case 3:e:{if(Tm(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,bp(n,i),nu(i,c,null,a);var _=i.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ho(Error(t(423)),i),i=Im(n,i,c,a,d);break e}else if(c!==d){d=ho(Error(t(424)),i),i=Im(n,i,c,a,d);break e}else for(fn=ri(i.stateNode.containerInfo.firstChild),dn=i,nt=!0,zn=null,a=Lp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===d){i=Vr(n,i,a);break e}Yt(n,i,c,a)}i=i.child}return i;case 5:return jp(i),n===null&&oh(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Xc(c,d)?_=null:p!==null&&Xc(c,p)&&(i.flags|=32),Em(n,i),Yt(n,i,_,a),i.child;case 6:return n===null&&oh(i),null;case 13:return Sm(n,i,a);case 4:return ph(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ao(i,null,c,a):Yt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bn(c,d),gm(n,i,c,d,a);case 7:return Yt(n,i,i.pendingProps,a),i.child;case 8:return Yt(n,i,i.pendingProps.children,a),i.child;case 12:return Yt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,_=d.value,Ye(Zl,c._currentValue),c._currentValue=_,p!==null)if(jn(p.value,_)){if(p.children===d.children&&!en.current){i=Vr(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=xr(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var G=F.pending;G===null?C.next=C:(C.next=G.next,G.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),hh(p.return,a,i),T.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===i.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),hh(_,a,i),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===i){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Yt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,uo(i,a),d=In(d),c=c(d),i.flags|=1,Yt(n,i,c,a),i.child;case 14:return c=i.type,d=Bn(c,i.pendingProps),d=Bn(c.type,d),ym(n,i,c,d,a);case 15:return _m(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Bn(c,d),hu(n,i),i.tag=1,tn(c)?(n=!0,Kl(i)):n=!1,uo(i,a),um(i,c,d),Ch(i,c,d,a),Dh(null,i,c,!0,n,a);case 19:return Rm(n,i,a);case 22:return vm(n,i,a)}throw Error(t(156,i.tag))};function Ym(n,i){return Ms(n,i)}function ww(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,i,a,c){return new ww(n,i,a,c)}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Tw(n){if(typeof n=="function")return Xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===ft)return 14}return 2}function pi(n,i){var a=n.alternate;return a===null?(a=Rn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tu(n,i,a,c,d,p){var _=2;if(c=n,typeof n=="function")Xh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return hs(a.children,d,p,i);case I:_=8,d|=8;break;case R:return n=Rn(12,a,i,d|2),n.elementType=R,n.lanes=p,n;case S:return n=Rn(13,a,i,d),n.elementType=S,n.lanes=p,n;case rt:return n=Rn(19,a,i,d),n.elementType=rt,n.lanes=p,n;case ze:return Iu(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case V:_=9;break e;case O:_=11;break e;case ft:_=14;break e;case wt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Rn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function hs(n,i,a,c){return n=Rn(7,n,c,i),n.lanes=a,n}function Iu(n,i,a,c){return n=Rn(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function Jh(n,i,a){return n=Rn(6,n,null,i),n.lanes=a,n}function Zh(n,i,a){return i=Rn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Iw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ed(n,i,a,c,d,p,_,T,C){return n=new Iw(n,i,a,T,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Rn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(p),n}function Sw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xm(n){if(!n)return si;n=n._reactInternals;e:{if(Vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(tn(a))return Ap(n,a,i)}return i}function Jm(n,i,a,c,d,p,_,T,C){return n=ed(a,c,!0,n,d,p,_,T,C),n.context=Xm(null),a=n.current,c=Xt(),d=di(a),p=xr(c,d),p.callback=i??null,li(a,p,d),n.current.lanes=d,Yr(n,d,c),sn(n,c),n}function Su(n,i,a,c){var d=i.current,p=Xt(),_=di(d);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=xr(p,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=li(d,i,_),n!==null&&(Hn(n,d,_,p),tu(n,d,_)),_}function Au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function td(n,i){Zm(n,i),(n=n.alternate)&&Zm(n,i)}function Aw(){return null}var eg=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}Ru.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Su(n,i,null,null)},Ru.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ls(function(){Su(null,n,null,null)}),i[Cr]=null}};function Ru(n){this._internalRoot=n}Ru.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,n),a===0&&kl(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tg(){}function Rw(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Au(_);p.call(F)}}var _=Jm(i,c,n,0,null,!1,!1,"",tg);return n._reactRootContainer=_,n[Cr]=_.current,pa(n.nodeType===8?n.parentNode:n),ls(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Au(C);T.call(F)}}var C=ed(n,0,!1,null,null,!1,!1,"",tg);return n._reactRootContainer=C,n[Cr]=C.current,pa(n.nodeType===8?n.parentNode:n),ls(function(){Su(i,C,a,c)}),C}function Pu(n,i,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var C=Au(_);T.call(C)}}Su(i,_,n,d)}else _=Rw(a,i,n,d,c);return Au(_)}Sl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gr(i.pendingLanes);a!==0&&(Xr(i,a|1),sn(i,Qe()),(je&6)===0&&(mo=Qe()+500,oi()))}break;case 13:ls(function(){var c=Dr(n,1);if(c!==null){var d=Xt();Hn(c,n,1,d)}}),td(n,1)}},Us=function(n){if(n.tag===13){var i=Dr(n,134217728);if(i!==null){var a=Xt();Hn(i,n,134217728,a)}td(n,134217728)}},Al=function(n){if(n.tag===13){var i=di(n),a=Dr(n,i);if(a!==null){var c=Xt();Hn(a,n,i,c)}td(n,i)}},Rl=function(){return Me},Cl=function(n,i){var a=Me;try{return Me=n,i()}finally{Me=a}},Ns=function(n,i,a){switch(i){case"input":if(Fi(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Hl(c);if(!d)throw Error(t(90));qr(c),Fi(c,d)}}}break;case"textarea":Jn(n,a);break;case"select":i=a.value,i!=null&&Ae(n,!!a.multiple,i,!1)}},Bi=Gh,Qo=ls;var Cw={usingClientEntryPoint:!1,Events:[ya,to,Hl,tr,Go,Gh]},Da={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pw={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jo(n),n===null?null:n.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||Aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Ki=ku.inject(Pw),ln=ku}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw,on.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return Sw(n,i,null,a)},on.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var a=!1,c="",d=eg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ed(n,1,!1,null,null,a,!1,c,d),n[Cr]=i.current,pa(n.nodeType===8?n.parentNode:n),new nd(i)},on.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jo(i),n=n===null?null:n.stateNode,n},on.flushSync=function(n){return ls(n)},on.hydrate=function(n,i,a){if(!Cu(i))throw Error(t(200));return Pu(null,n,i,!0,a)},on.hydrateRoot=function(n,i,a){if(!rd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=eg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=Jm(i,null,n,1,a??null,d,!1,p,_),n[Cr]=i.current,pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ru(i)},on.render=function(n,i,a){if(!Cu(i))throw Error(t(200));return Pu(null,n,i,!1,a)},on.unmountComponentAtNode=function(n){if(!Cu(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Pu(null,null,n,!1,function(){n._reactRootContainer=null,n[Cr]=null})}),!0):!1},on.unstable_batchedUpdates=Gh,on.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Cu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pu(n,i,a,!1,c)},on.version="18.3.1-next-f1338f8080-20240426",on}var ug;function Fw(){if(ug)return od.exports;ug=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=bw(),od.exports}var cg;function Uw(){if(cg)return Nu;cg=1;var r=Fw();return Nu.createRoot=r.createRoot,Nu.hydrateRoot=r.hydrateRoot,Nu}var jw=Uw();const zw=()=>{};var hg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Bw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],m=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},t_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,w=l>>2,A=(l&3)<<4|m>>4;let P=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(P=64)),s.push(t[w],t[A],t[P],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(e_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Bw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const A=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||m==null||v==null||A==null)throw new $w;const P=l<<2|m>>4;if(s.push(P),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const K=v<<6&192|A;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qw=function(r){const e=e_(r);return t_.encodeByteArray(e,!0)},Qu=function(r){return qw(r).replace(/\./g,"")},n_=function(r){try{return t_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ww=()=>Hw().__FIREBASE_DEFAULTS__,Kw=()=>{if(typeof process>"u"||typeof hg>"u")return;const r=hg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Gw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&n_(r[1]);return e&&JSON.parse(e)},pc=()=>{try{return zw()||Ww()||Kw()||Gw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},r_=r=>{var e,t;return(t=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Qw=r=>{const e=r_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},i_=()=>{var r;return(r=pc())===null||r===void 0?void 0:r.config},s_=r=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Oo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function o_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Xw(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Qu(JSON.stringify(t)),Qu(JSON.stringify(h)),""].join(".")}const ja={};function Jw(){const r={prod:[],emulator:[]};for(const e of Object.keys(ja))ja[e]?r.emulator.push(e):r.prod.push(e);return r}function Zw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let dg=!1;function a_(r,e){if(typeof window>"u"||typeof document>"u"||!Oo(window.location.host)||ja[r]===e||ja[r]||dg)return;ja[r]=e;function t(P){return`__firebase__banner__${P}`}const s="__firebase__banner",l=Jw().prod.length>0;function h(){const P=document.getElementById(s);P&&P.remove()}function m(P){P.style.display="flex",P.style.background="#7faaf0",P.style.position="fixed",P.style.bottom="5px",P.style.left="5px",P.style.padding=".5em",P.style.borderRadius="5px",P.style.alignItems="center"}function g(P,j){P.setAttribute("width","24"),P.setAttribute("id",j),P.setAttribute("height","24"),P.setAttribute("viewBox","0 0 24 24"),P.setAttribute("fill","none"),P.style.marginLeft="-6px"}function v(){const P=document.createElement("span");return P.style.cursor="pointer",P.style.marginLeft="16px",P.style.fontSize="24px",P.innerHTML=" &times;",P.onclick=()=>{dg=!0,h()},P}function w(P,j){P.setAttribute("id",j),P.innerText="Learn more",P.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",P.setAttribute("target","__blank"),P.style.paddingLeft="5px",P.style.textDecoration="underline"}function A(){const P=Zw(s),j=t("text"),K=document.getElementById(j)||document.createElement("span"),Y=t("learnmore"),H=document.getElementById(Y)||document.createElement("a"),ge=t("preprendIcon"),he=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(P.created){const me=P.element;m(me),w(H,Y);const ve=v();g(he,ge),me.append(he,K,H,ve),document.body.appendChild(me)}l?(K.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function t0(){var r;const e=(r=pc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function i0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s0(){const r=Kt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function o0(){return!t0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="FirebaseError";class $r extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=u0,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?c0(l,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new $r(o,m,s)}}function c0(r,e){return r.replace(h0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const h0=/\{\$([^}]+)}/g;function d0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ys(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(fg(l)&&fg(h)){if(!ys(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function fg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Oa(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function La(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function f0(r,e){const t=new p0(r,e);return t.subscribe.bind(t)}class p0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");m0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ud),o.error===void 0&&(o.error=ud),o.complete===void 0&&(o.complete=ud);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ud(){}/**
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
 */function Ct(r){return r&&r._delegate?r._delegate:r}class _s{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class g0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Yw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_0(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(l);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:y0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y0(r){return r===ds?void 0:r}function _0(r){return r.instantiationMode==="EAGER"}/**
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
 */class v0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new g0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const E0={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},w0=Oe.INFO,T0={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},I0=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=T0[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=w0,this._logHandler=I0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const S0=(r,e)=>e.some(t=>r instanceof t);let pg,mg;function A0(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R0(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,Ed=new WeakMap,u_=new WeakMap,cd=new WeakMap,Gd=new WeakMap;function C0(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(wi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&l_.set(t,r)}).catch(()=>{}),Gd.set(e,r),e}function P0(r){if(Ed.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Ed.set(r,e)}let wd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ed.get(r);if(e==="objectStoreNames")return r.objectStoreNames||u_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function k0(r){wd=r(wd)}function N0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(hd(this),e,...t);return u_.set(s,e.sort?e.sort():[e]),wi(s)}:R0().includes(r)?function(...e){return r.apply(hd(this),e),wi(l_.get(this))}:function(...e){return wi(r.apply(hd(this),e))}}function D0(r){return typeof r=="function"?N0(r):(r instanceof IDBTransaction&&P0(r),S0(r,A0())?new Proxy(r,wd):r)}function wi(r){if(r instanceof IDBRequest)return C0(r);if(cd.has(r))return cd.get(r);const e=D0(r);return e!==r&&(cd.set(r,e),Gd.set(e,r)),e}const hd=r=>Gd.get(r);function x0(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),m=wi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(wi(h.result),g.oldVersion,g.newVersion,wi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const V0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],dd=new Map;function gg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=O0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||V0.includes(t)))return;const l=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return dd.set(e,l),l}k0(r=>({...r,get:(e,t,s)=>gg(e,t)||r.get(e,t,s),has:(e,t)=>!!gg(e,t)||r.has(e,t)}));/**
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
 */class L0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(M0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function M0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",yg="0.13.2";/**
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
 */const Ur=new Kd("@firebase/app"),b0="@firebase/app-compat",F0="@firebase/analytics-compat",U0="@firebase/analytics",j0="@firebase/app-check-compat",z0="@firebase/app-check",B0="@firebase/auth",$0="@firebase/auth-compat",q0="@firebase/database",H0="@firebase/data-connect",W0="@firebase/database-compat",K0="@firebase/functions",G0="@firebase/functions-compat",Q0="@firebase/installations",Y0="@firebase/installations-compat",X0="@firebase/messaging",J0="@firebase/messaging-compat",Z0="@firebase/performance",eT="@firebase/performance-compat",tT="@firebase/remote-config",nT="@firebase/remote-config-compat",rT="@firebase/storage",iT="@firebase/storage-compat",sT="@firebase/firestore",oT="@firebase/ai",aT="@firebase/firestore-compat",lT="firebase",uT="11.10.0";/**
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
 */const Id="[DEFAULT]",cT={[Td]:"fire-core",[b0]:"fire-core-compat",[U0]:"fire-analytics",[F0]:"fire-analytics-compat",[z0]:"fire-app-check",[j0]:"fire-app-check-compat",[B0]:"fire-auth",[$0]:"fire-auth-compat",[q0]:"fire-rtdb",[H0]:"fire-data-connect",[W0]:"fire-rtdb-compat",[K0]:"fire-fn",[G0]:"fire-fn-compat",[Q0]:"fire-iid",[Y0]:"fire-iid-compat",[X0]:"fire-fcm",[J0]:"fire-fcm-compat",[Z0]:"fire-perf",[eT]:"fire-perf-compat",[tT]:"fire-rc",[nT]:"fire-rc-compat",[rT]:"fire-gcs",[iT]:"fire-gcs-compat",[sT]:"fire-fst",[aT]:"fire-fst-compat",[oT]:"fire-vertex","fire-js":"fire-js",[lT]:"fire-js-all"};/**
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
 */const Yu=new Map,hT=new Map,Sd=new Map;function _g(r,e){try{r.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Co(r){const e=r.name;if(Sd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,r);for(const t of Yu.values())_g(t,r);for(const t of hT.values())_g(t,r);return!0}function Qd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function mn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const dT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new il("app","Firebase",dT);/**
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
 */class fT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
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
 */const Lo=uT;function c_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Id,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Ti.create("bad-app-name",{appName:String(o)});if(t||(t=i_()),!t)throw Ti.create("no-options");const l=Yu.get(o);if(l){if(ys(t,l.options)&&ys(s,l.config))return l;throw Ti.create("duplicate-app",{appName:o})}const h=new v0(o);for(const g of Sd.values())h.addComponent(g);const m=new fT(t,s,h);return Yu.set(o,m),m}function h_(r=Id){const e=Yu.get(r);if(!e&&r===Id&&i_())return c_();if(!e)throw Ti.create("no-app",{appName:r});return e}function Ii(r,e,t){var s;let o=(s=cT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const m=[`Unable to register library "${o}" with version "${e}":`];l&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(m.join(" "));return}Co(new _s(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const pT="firebase-heartbeat-database",mT=1,Ga="firebase-heartbeat-store";let fd=null;function d_(){return fd||(fd=x0(pT,mT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ga)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ti.create("idb-open",{originalErrorMessage:r.message})})),fd}async function gT(r){try{const t=(await d_()).transaction(Ga),s=await t.objectStore(Ga).get(f_(r));return await t.done,s}catch(e){if(e instanceof $r)Ur.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function vg(r,e){try{const s=(await d_()).transaction(Ga,"readwrite");await s.objectStore(Ga).put(e,f_(r)),await s.done}catch(t){if(t instanceof $r)Ur.warn(t.message);else{const s=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(s.message)}}}function f_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const yT=1024,_T=30;class vT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Eg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>_T){const h=TT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eg(),{heartbeatsToSend:s,unsentEntries:o}=ET(this._heartbeatsCache.heartbeats),l=Qu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Eg(){return new Date().toISOString().substring(0,10)}function ET(r,e=yT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),wg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return vg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return vg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function wg(r){return Qu(JSON.stringify({version:2,heartbeats:r})).length}function TT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function IT(r){Co(new _s("platform-logger",e=>new L0(e),"PRIVATE")),Co(new _s("heartbeat",e=>new vT(e),"PRIVATE")),Ii(Td,yg,r),Ii(Td,yg,"esm2017"),Ii("fire-js","")}IT("");function Yd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function p_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ST=p_,m_=new il("auth","Firebase",p_());/**
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
 */const Xu=new Kd("@firebase/auth");function AT(r,...e){Xu.logLevel<=Oe.WARN&&Xu.warn(`Auth (${Lo}): ${r}`,...e)}function Uu(r,...e){Xu.logLevel<=Oe.ERROR&&Xu.error(`Auth (${Lo}): ${r}`,...e)}/**
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
 */function kn(r,...e){throw Jd(r,...e)}function Gn(r,...e){return Jd(r,...e)}function Xd(r,e,t){const s=Object.assign(Object.assign({},ST()),{[e]:t});return new il("auth","Firebase",s).create(e,{appName:r.name})}function Fr(r){return Xd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RT(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&kn(r,"argument-error"),Xd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return m_.create(r,...e)}function ye(r,e,...t){if(!r)throw Jd(e,...t)}function Mr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Uu(e),new Error(e)}function jr(r,e){r||Mr(e)}/**
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
 */function Ad(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function CT(){return Tg()==="http:"||Tg()==="https:"}function Tg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CT()||r0()||"connection"in navigator)?navigator.onLine:!0}function kT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=e0()||i0()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(r,e){jr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class g_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xT=new ol(3e4,6e4);function Oi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function _r(r,e,t,s,o={}){return y_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const m=sl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},l);return n0()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Oo(r.emulatorConfig.host)&&(v.credentials="include"),g_.fetch()(await __(r,r.config.apiHost,t,m),v)})}async function y_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},NT),e);try{const o=new OT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Du(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const m=l.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Du(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Du(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Du(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Xd(r,w,v);kn(r,w)}}catch(o){if(o instanceof $r)throw o;kn(r,"network-request-failed",{message:String(o)})}}async function al(r,e,t,s,o={}){const l=await _r(r,e,t,s,o);return"mfaPendingCredential"in l&&kn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function __(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Zd(r.config,o):`${r.config.apiScheme}://${o}`;return DT.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function VT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),xT.get())})}}function Du(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Gn(r,e,s);return o.customData._tokenResponse=t,o}function Ig(r){return r!==void 0&&r.enterprise!==void 0}class LT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return VT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MT(r,e){return _r(r,"GET","/v2/recaptchaConfig",Oi(r,e))}/**
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
 */async function bT(r,e){return _r(r,"POST","/v1/accounts:delete",e)}async function Ju(r,e){return _r(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function za(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FT(r,e=!1){const t=Ct(r),s=await t.getIdToken(e),o=ef(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:za(pd(o.auth_time)),issuedAtTime:za(pd(o.iat)),expirationTime:za(pd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function pd(r){return Number(r)*1e3}function ef(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Uu("JWT malformed, contained fewer than 3 sections"),null;try{const o=n_(t);return o?JSON.parse(o):(Uu("Failed to decode base64 JWT payload"),null)}catch(o){return Uu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Sg(r){const e=ef(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vs(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof $r&&UT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function UT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class jT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await vs(r,Ju(t,{idToken:s}));ye(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?v_(l.providerUserInfo):[],m=BT(r.providerData,h),g=r.isAnonymous,v=!(r.email&&l.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:m,metadata:new Rd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,A)}async function zT(r){const e=Ct(r);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function v_(r){return r.map(e=>{var{providerId:t}=e,s=Yd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function $T(r,e){const t=await y_(r,{},async()=>{const s=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await __(r,o,"/v1/token",`key=${l}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Oo(r.emulatorConfig.host)&&(g.credentials="include"),g_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qT(r,e){return _r(r,"POST","/v2/accounts:revokeToken",Oi(r,e))}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await $T(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new To;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
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
 */function gi(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Rd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await vs(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FT(this,e)}reload(){return zT(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await vs(this,bT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,m,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,P=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ge=(v=t.createdAt)!==null&&v!==void 0?v:void 0,he=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:me,emailVerified:ve,isAnonymous:We,providerData:Ce,stsTokenManager:D}=t;ye(me&&D,e,"internal-error");const I=To.fromJSON(this.name,D);ye(typeof me=="string",e,"internal-error"),gi(A,e.name),gi(P,e.name),ye(typeof ve=="boolean",e,"internal-error"),ye(typeof We=="boolean",e,"internal-error"),gi(j,e.name),gi(K,e.name),gi(Y,e.name),gi(H,e.name),gi(ge,e.name),gi(he,e.name);const R=new Wn({uid:me,auth:e,email:P,emailVerified:ve,displayName:A,isAnonymous:We,photoURL:K,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:ge,lastLoginAt:he});return Ce&&Array.isArray(Ce)&&(R.providerData=Ce.map(k=>Object.assign({},k))),H&&(R._redirectEventId=H),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new To;o.updateFromServerResponse(t);const l=new Wn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Zu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?v_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),m=new To;m.updateFromIdToken(s);const g=new Wn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
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
 */const Ag=new Map;function br(r){jr(r instanceof Function,"Expected a class definition");let e=Ag.get(r);return e?(jr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ag.set(r,e),e)}/**
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
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}E_.type="NONE";const Rg=E_;/**
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
 */function ju(r,e,t){return`firebase:${r}:${e}:${t}`}class Io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ju(this.userKey,o.apiKey,l),this.fullPersistenceKey=ju("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ju(this.auth,{idToken:e}).catch(()=>{});return t?Wn._fromGetAccountInfoResponse(this.auth,t,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Io(br(Rg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||br(Rg);const h=ju(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const P=await Ju(e,{idToken:w}).catch(()=>{});if(!P)break;A=await Wn._fromGetAccountInfoResponse(e,P,w)}else A=Wn._fromJSON(e,w);v!==l&&(m=A),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Io(l,e,s):(l=g[0],m&&await l._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new Io(l,e,s))}}/**
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
 */function Cg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R_(e))return"Blackberry";if(C_(e))return"Webos";if(T_(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(A_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function w_(r=Kt()){return/firefox\//i.test(r)}function T_(r=Kt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(r=Kt()){return/crios\//i.test(r)}function S_(r=Kt()){return/iemobile/i.test(r)}function A_(r=Kt()){return/android/i.test(r)}function R_(r=Kt()){return/blackberry/i.test(r)}function C_(r=Kt()){return/webos/i.test(r)}function tf(r=Kt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function HT(r=Kt()){var e;return tf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WT(){return s0()&&document.documentMode===10}function P_(r=Kt()){return tf(r)||A_(r)||C_(r)||R_(r)||/windows phone/i.test(r)||S_(r)}/**
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
 */function k_(r,e=[]){let t;switch(r){case"Browser":t=Cg(Kt());break;case"Worker":t=`${Cg(Kt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Lo}/${s}`}/**
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
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,m)=>{try{const g=e(l);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function GT(r,e={}){return _r(r,"GET","/v2/passwordPolicy",Oi(r,e))}/**
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
 */const QT=6;class YT{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:QT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class XT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ju(this,{idToken:e}),s=await Wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Fr(this));const t=e?Ct(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GT(this),t=new YT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new il("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await qT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&AT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Li(r){return Ct(r)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=f0(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JT(r){mc=r}function N_(r){return mc.loadJS(r)}function ZT(){return mc.recaptchaEnterpriseScript}function eI(){return mc.gapiScript}function tI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class nI{constructor(){this.enterprise=new rI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const iI="recaptcha-enterprise",D_="NO_RECAPTCHA";class sI{constructor(e){this.type=iI,this.auth=Li(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,m)=>{MT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new LT(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(l,h,m){const g=window.grecaptcha;Ig(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(D_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(m=>{if(!t&&Ig(window.grecaptcha))o(m,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=ZT();g.length!==0&&(g+=m),N_(g).then(()=>{o(m,l,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function kg(r,e,t,s=!1,o=!1){const l=new sI(r);let h;if(o)h=D_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Cd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await kg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await kg(r,e,t,t==="getOobCode");return s(r,m)}else return Promise.reject(h)})}/**
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
 */function oI(r,e){const t=Qd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ys(l,e??{}))return o;kn(o,"already-initialized")}return t.initialize({options:e})}function aI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lI(r,e,t){const s=Li(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=x_(e),{host:h,port:m}=uI(e),g=m===null?"":`:${m}`,v={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ys(v,s.config.emulator)&&ys(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Oo(h)?(o_(`${l}//${h}${g}`),a_("Auth",!0)):cI()}function x_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function uI(r){const e=x_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Ng(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Ng(h)}}}function Ng(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function cI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class nf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,t){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}async function hI(r,e){return _r(r,"POST","/v1/accounts:update",e)}async function dI(r,e){return _r(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fI(r,e){return al(r,"POST","/v1/accounts:signInWithPassword",Oi(r,e))}/**
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
 */async function pI(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Oi(r,e))}async function mI(r,e){return al(r,"POST","/v1/accounts:signInWithEmailLink",Oi(r,e))}/**
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
 */class Qa extends nf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,t,"signInWithPassword",fI);case"emailLink":return pI(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cd(e,s,"signUpPassword",dI);case"emailLink":return mI(e,{idToken:t,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function So(r,e){return al(r,"POST","/v1/accounts:signInWithIdp",Oi(r,e))}/**
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
 */const gI="http://localhost";class Es extends nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Yd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Es(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,So(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sl(t)}return e}}/**
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
 */function yI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _I(r){const e=Oa(La(r)).link,t=e?Oa(La(e)).deep_link_id:null,s=Oa(La(r)).deep_link_id;return(s?Oa(La(s)).link:null)||s||t||e||r}class rf{constructor(e){var t,s,o,l,h,m;const g=Oa(La(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=yI((o=g.mode)!==null&&o!==void 0?o:null);ye(v&&w&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=w,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=_I(e);try{return new rf(t)}catch{return null}}}/**
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
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,t){return Qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rf.parseLink(t);return ye(s,"argument-error"),Qa._fromEmailAndCode(e,s.code,s.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ll extends sf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yi extends ll{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
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
 */class Lr extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Es._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Lr.credential(t,s)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
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
 */class _i extends ll{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
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
 */class vi extends ll{constructor(){super("twitter.com")}static credential(e,t){return Es._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return vi.credential(t,s)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
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
 */async function vI(r,e){return al(r,"POST","/v1/accounts:signUp",Oi(r,e))}/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Wn._fromIdTokenResponse(e,s,o),h=Dg(s);return new ws({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Dg(s);return new ws({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Dg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ec extends $r{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ec(e,t,s,o)}}function V_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(r,l,e,s):l})}async function EI(r,e,t=!1){const s=await vs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ws._forOperation(r,"link",s)}/**
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
 */async function wI(r,e,t=!1){const{auth:s}=r;if(mn(s.app))return Promise.reject(Fr(s));const o="reauthenticate";try{const l=await vs(r,V_(s,o,e,r),t);ye(l.idToken,s,"internal-error");const h=ef(l.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(r.uid===m,s,"user-mismatch"),ws._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&kn(s,"user-mismatch"),l}}/**
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
 */async function O_(r,e,t=!1){if(mn(r.app))return Promise.reject(Fr(r));const s="signIn",o=await V_(r,s,e),l=await ws._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function TI(r,e){return O_(Li(r),e)}/**
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
 */async function L_(r){const e=Li(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function II(r,e,t){if(mn(r.app))return Promise.reject(Fr(r));const s=Li(r),h=await Cd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&L_(r),g}),m=await ws._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function SI(r,e,t){return mn(r.app)?Promise.reject(Fr(r)):TI(Ct(r),Mo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&L_(r),s})}/**
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
 */async function AI(r,e){return _r(r,"POST","/v1/accounts:update",e)}/**
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
 */async function xg(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ct(r),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await vs(s,AI(s.auth,l));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const m=s.providerData.find(({providerId:g})=>g==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function RI(r,e){return CI(Ct(r),null,e)}async function CI(r,e,t){const{auth:s}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const h=await vs(r,hI(s,l));await r._updateTokensIfNecessary(h,!0)}function PI(r,e,t,s){return Ct(r).onIdTokenChanged(e,t,s)}function kI(r,e,t){return Ct(r).beforeAuthStateChanged(e,t)}function NI(r,e,t,s){return Ct(r).onAuthStateChanged(e,t,s)}function DI(r){return Ct(r).signOut()}async function xI(r){return Ct(r).delete()}const tc="__sak";/**
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
 */class M_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VI=1e3,OI=10;class b_ extends M_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=P_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);WT()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,OI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}b_.type="LOCAL";const LI=b_;/**
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
 */class F_ extends M_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}F_.type="SESSION";const U_=F_;/**
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
 */function MI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new gc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,l)),g=await MI(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
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
 */function of(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class bI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((m,g)=>{const v=of("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const P=A;if(P.data.eventId===v)switch(P.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),m(P.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function dr(){return window}function FI(r){dr().location.href=r}/**
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
 */function j_(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function UI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function zI(){return j_()?self:null}/**
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
 */const z_="firebaseLocalStorageDb",BI=1,nc="firebaseLocalStorage",B_="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yc(r,e){return r.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function $I(){const r=indexedDB.deleteDatabase(z_);return new ul(r).toPromise()}function Pd(){const r=indexedDB.open(z_,BI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(nc,{keyPath:B_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(nc)?e(s):(s.close(),await $I(),e(await Pd()))})})}async function Vg(r,e,t){const s=yc(r,!0).put({[B_]:e,value:t});return new ul(s).toPromise()}async function qI(r,e){const t=yc(r,!1).get(e),s=await new ul(t).toPromise();return s===void 0?null:s.value}function Og(r,e){const t=yc(r,!0).delete(e);return new ul(t).toPromise()}const HI=800,WI=3;class $_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>WI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(zI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await UI(),!this.activeServiceWorker)return;this.sender=new bI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pd();return await Vg(e,tc,"1"),await Og(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>qI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Og(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=yc(o,!1).getAll();return new ul(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$_.type="LOCAL";const KI=$_;new ol(3e4,6e4);/**
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
 */function q_(r,e){return e?br(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class af extends nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GI(r){return O_(r.auth,new af(r),r.bypassAuthState)}function QI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),wI(t,new af(r),r.bypassAuthState)}async function YI(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),EI(t,new af(r),r.bypassAuthState)}/**
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
 */class H_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return YI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:kn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XI=new ol(2e3,1e4);async function JI(r,e,t){if(mn(r.app))return Promise.reject(Gn(r,"operation-not-supported-in-this-environment"));const s=Li(r);RT(r,e,sf);const o=q_(s,t);return new fs(s,"signInViaPopup",e,o).executeNotNull()}class fs extends H_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XI.get())};e()}}fs.currentPopupAction=null;/**
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
 */const ZI="pendingRedirect",zu=new Map;class e1 extends H_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zu.get(this.auth._key());if(!e){try{const s=await t1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zu.set(this.auth._key(),e)}return this.bypassAuthState||zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t1(r,e){const t=i1(e),s=r1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function n1(r,e){zu.set(r._key(),e)}function r1(r){return br(r._redirectPersistence)}function i1(r){return ju(ZI,r.config.apiKey,r.name)}async function s1(r,e,t=!1){if(mn(r.app))return Promise.reject(Fr(r));const s=Li(r),o=q_(s,e),h=await new e1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const o1=600*1e3;class a1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!W_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lg(e))}saveEventToCache(e){this.cachedEventUids.add(Lg(e)),this.lastProcessedEventTime=Date.now()}}function Lg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function W_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(r);default:return!1}}/**
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
 */async function u1(r,e={}){return _r(r,"GET","/v1/projects",e)}/**
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
 */const c1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h1=/^https?/;async function d1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await u1(r);for(const t of e)try{if(f1(t))return}catch{}kn(r,"unauthorized-domain")}function f1(r){const e=Ad(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!h1.test(t))return!1;if(c1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const p1=new ol(3e4,6e4);function Mg(){const r=dr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function m1(r){return new Promise((e,t)=>{var s,o,l;function h(){Mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mg(),t(Gn(r,"network-request-failed"))},timeout:p1.get()})}if(!((o=(s=dr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=dr().gapi)===null||l===void 0)&&l.load)h();else{const m=tI("iframefcb");return dr()[m]=()=>{gapi.load?h():t(Gn(r,"network-request-failed"))},N_(`${eI()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function g1(r){return Bu=Bu||m1(r),Bu}/**
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
 */const y1=new ol(5e3,15e3),_1="__/auth/iframe",v1="emulator/auth/iframe",E1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T1(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zd(e,v1):`https://${r.config.authDomain}/${_1}`,s={apiKey:e.apiKey,appName:r.name,v:Lo},o=w1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${sl(s).slice(1)}`}async function I1(r){const e=await g1(r),t=dr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:T1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Gn(r,"network-request-failed"),m=dr().setTimeout(()=>{l(h)},y1.get());function g(){dr().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A1=500,R1=600,C1="_blank",P1="http://localhost";class bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k1(r,e,t,s=A1,o=R1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},S1),{width:s.toString(),height:o.toString(),top:l,left:h}),v=Kt().toLowerCase();t&&(m=I_(v)?C1:t),w_(v)&&(e=e||P1,g.scrollbars="yes");const w=Object.entries(g).reduce((P,[j,K])=>`${P}${j}=${K},`,"");if(HT(v)&&m!=="_self")return N1(e||"",m),new bg(null);const A=window.open(e||"",m,w);ye(A,r,"popup-blocked");try{A.focus()}catch{}return new bg(A)}function N1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const D1="__/auth/handler",x1="emulator/auth/handler",V1=encodeURIComponent("fac");async function Fg(r,e,t,s,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Lo,eventId:o};if(e instanceof sf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",d0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof ll){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await r._getAppCheckToken(),v=g?`#${V1}=${encodeURIComponent(g)}`:"";return`${O1(r)}?${sl(m).slice(1)}${v}`}function O1({config:r}){return r.emulator?Zd(r,x1):`https://${r.authDomain}/${D1}`}/**
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
 */const md="webStorageSupport";class L1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U_,this._completeRedirectFn=s1,this._overrideRedirectResult=n1}async _openPopup(e,t,s,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Fg(e,t,s,Ad(),o);return k1(e,h,of())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Fg(e,t,s,Ad(),o);return FI(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await I1(e),s=new a1(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(md,{type:md},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[md];h!==void 0&&t(!!h),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return P_()||T_()||tf()}}const M1=L1;var Ug="@firebase/auth",jg="1.10.8";/**
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
 */class b1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U1(r){Co(new _s("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k_(r)},v=new XT(s,o,l,g);return aI(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Co(new _s("auth-internal",e=>{const t=Li(e.getProvider("auth").getImmediate());return(s=>new b1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ii(Ug,jg,F1(r)),Ii(Ug,jg,"esm2017")}/**
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
 */const j1=300,z1=s_("authIdTokenMaxAge")||j1;let zg=null;const B1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>z1)return;const o=t==null?void 0:t.token;zg!==o&&(zg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $1(r=h_()){const e=Qd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=oI(r,{popupRedirectResolver:M1,persistence:[KI,LI,U_]}),s=s_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=B1(l.toString());kI(t,h,()=>h(t.currentUser)),PI(t,m=>h(m))}}const o=r_("auth");return o&&lI(t,`http://${o}`),t}function q1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}JT({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Gn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",q1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U1("Browser");var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,K_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(k,V,O){for(var S=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)S[rt-2]=arguments[rt];return I.prototype[V].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var k=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)k[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var O=D.g[3],S=I+(O^R&(V^O))+k[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(O^R&(V^O))+k[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(V^I&(R^V))+k[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=V+(R^O&(I^R))+k[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=R+(I^V&(O^I))+k[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(V^O&(R^V))+k[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^O&(R^V))+k[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^V&(I^R))+k[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(O^I))+k[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(V^O))+k[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(R^V^O)+k[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^O)+k[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^V)+k[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=V+(O^I^R)+k[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=R+(V^O^I)+k[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(V^(R|~O))+k[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~O))+k[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~V))+k[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=V+(I^(O|~R))+k[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=R+(O^(V|~I))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+O&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,k=this.B,V=this.h,O=0;O<I;){if(V==0)for(;O<=R;)o(this,D,O),O+=this.blockSize;if(typeof D=="string"){for(;O<I;)if(k[V++]=D.charCodeAt(O++),V==this.blockSize){o(this,k),V=0;break}}else for(;O<I;)if(k[V++]=D[O++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var k=0;32>k;k+=8)D[R++]=this.g[I]>>>k&255;return D};function l(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],k=!0,V=D.length-1;0<=V;V--){var O=D[V]|0;k&&O==I||(R[V]=O,k=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?l(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return H(v(-D));for(var I=[],R=1,k=0;D>=R;k++)I[k]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return H(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),k=A,V=0;V<D.length;V+=8){var O=Math.min(8,D.length-V),S=parseInt(D.substring(V,V+O),I);8>O?(O=v(Math.pow(I,O)),k=k.j(O).add(v(S))):(k=k.j(R),k=k.add(v(S)))}return k}var A=g(0),P=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-H(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var k=this.i(R);D+=(0<=k?k:4294967296+k)*I,I*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(Y(this))return"-"+H(this).toString(D);for(var I=v(Math.pow(D,6)),R=this,k="";;){var V=ve(R,I).g;R=ge(R,V.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,K(R))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function Y(D){return D.h==-1}r.l=function(D){return D=ge(this,D),Y(D)?-1:K(D)?0:1};function H(D){for(var I=D.g.length,R=[],k=0;k<I;k++)R[k]=~D.g[k];return new h(R,~D.h).add(P)}r.abs=function(){return Y(this)?H(this):this},r.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0,V=0;V<=I;V++){var O=k+(this.i(V)&65535)+(D.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=S>>>16,O&=65535,S&=65535,R[V]=S<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ge(D,I){return D.add(H(I))}r.j=function(D){if(K(this)||K(D))return A;if(Y(this))return Y(D)?H(this).j(H(D)):H(H(this).j(D));if(Y(D))return H(this.j(H(D)));if(0>this.l(j)&&0>D.l(j))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],k=0;k<2*I;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var O=this.i(k)>>>16,S=this.i(k)&65535,rt=D.i(V)>>>16,ft=D.i(V)&65535;R[2*k+2*V]+=S*ft,he(R,2*k+2*V),R[2*k+2*V+1]+=O*ft,he(R,2*k+2*V+1),R[2*k+2*V+1]+=S*rt,he(R,2*k+2*V+1),R[2*k+2*V+2]+=O*rt,he(R,2*k+2*V+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function he(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function me(D,I){this.g=D,this.h=I}function ve(D,I){if(K(I))throw Error("division by zero");if(K(D))return new me(A,A);if(Y(D))return I=ve(H(D),I),new me(H(I.g),H(I.h));if(Y(I))return I=ve(D,H(I)),new me(H(I.g),I.h);if(30<D.g.length){if(Y(D)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=P,k=I;0>=k.l(D);)R=We(R),k=We(k);var V=Ce(R,1),O=Ce(k,1);for(k=Ce(k,2),R=Ce(R,2);!K(k);){var S=O.add(k);0>=S.l(D)&&(V=V.add(R),O=S),k=Ce(k,1),R=Ce(R,1)}return I=ge(D,V.j(I)),new me(V,I)}for(V=A;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=v(R),S=O.j(I);Y(S)||0<S.l(D);)R-=k,O=v(R),S=O.j(I);K(O)&&(O=P),V=V.add(O),D=ge(D,S)}return new me(V,D)}r.A=function(D){return ve(this,D).h},r.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)&D.i(k);return new h(R,this.h&D.h)},r.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)|D.i(k);return new h(R,this.h|D.h)},r.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)^D.i(k);return new h(R,this.h^D.h)};function We(D){for(var I=D.g.length+1,R=[],k=0;k<I;k++)R[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(R,D.h)}function Ce(D,I){var R=I>>5;I%=32;for(var k=D.g.length-R,V=[],O=0;O<k;O++)V[O]=0<I?D.i(O+R)>>>I|D.i(O+R+1)<<32-I:D.i(O+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,K_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Si=h}).apply(typeof Bg<"u"?Bg:typeof self<"u"?self:typeof window<"u"?window:{});var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var G_,Ma,Q_,$u,kd,Y_,X_,J_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof xu=="object"&&xu];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in y))break e;y=y[L]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,L={next:function(){if(!E&&y<u.length){var U=y++;return{value:f(U,u[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function v(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function w(u,f,y){return u.call.apply(u.bind,arguments)}function A(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(f,L)}}return function(){return u.apply(f,arguments)}}function P(u,f,y){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,P.apply(null,arguments)}function j(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function K(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,L,U){for(var J=Array(arguments.length-2),He=2;He<arguments.length;He++)J[He-2]=arguments[He];return f.prototype[L].apply(E,J)}}function Y(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function H(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=u.length||0,U=E.length||0;u.length=L+U;for(let J=0;J<U;J++)u[L+J]=E[J]}else u.push(E)}}class ge{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function he(u){return/^[\s\xa0]*$/.test(u)}function me(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function ve(u){return ve[" "](u),u}ve[" "]=function(){};var We=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Ce(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function D(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function I(u){const f={};for(const y in u)f[y]=u[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)u[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function V(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function O(u){m.setTimeout(()=>{throw u},0)}function S(){var u=ce;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class rt{constructor(){this.h=this.g=null}add(f,y){const E=ft.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var ft=new ge(()=>new wt,u=>u.reset());class wt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,Z=!1,ce=new rt,ee=()=>{const u=m.Promise.resolve(void 0);ze=()=>{u.then(x)}};var x=()=>{for(var u;u=S();){try{u.h.call(u.g)}catch(y){O(y)}var f=ft;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}Z=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Pe=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return u})();function Ie(u,f){if(ie.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(We){e:{try{ve(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ie.aa.h.call(this)}}K(Ie,ie);var xe={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),ke=0;function Ke(u,f,y,E,L){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++ke,this.da=this.fa=!1}function pt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function gn(u){this.src=u,this.g={},this.h=0}gn.prototype.add=function(u,f,y,E,L){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var J=Xn(u,f,E,L);return-1<J?(f=u[J],y||(f.fa=!1)):(f=new Ke(f,this.src,U,!!E,L),f.fa=y,u.push(f)),f};function qr(u,f){var y=f.type;if(y in u.g){var E=u.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(pt(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Xn(u,f,y,E){for(var L=0;L<u.length;++L){var U=u[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),Hr={};function bi(u,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)bi(u,f[U],y,E,L);return null}return y=Zn(y),u&&u[Ue]?u.K(f,y,v(E)?!!E.capture:!1,L):Fi(u,f,y,!1,E,L)}function Fi(u,f,y,E,L,U){if(!f)throw Error("Invalid event type");var J=v(L)?!!L.capture:!!L,He=qe(u);if(He||(u[vr]=He=new gn(u)),y=He.add(f,y,E,J,U),y.proxy)return y;if(E=ue(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Pe||(L=J),L===void 0&&(L=!1),u.addEventListener(f.toString(),E,L);else if(u.attachEvent)u.attachEvent(Ae(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ue(){function u(y){return f.call(u.src,u.listener,y)}const f=ut;return u}function Se(u,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)Se(u,f[U],y,E,L);else E=v(E)?!!E.capture:!!E,y=Zn(y),u&&u[Ue]?(u=u.i,f=String(f).toString(),f in u.g&&(U=u.g[f],y=Xn(U,y,E,L),-1<y&&(pt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete u.g[f],u.h--)))):u&&(u=qe(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Xn(f,y,E,L)),(y=-1<u?f[u]:null)&&we(y))}function we(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Ue])qr(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(Ae(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=qe(f))?(qr(y,u),y.h==0&&(y.src=null,f[vr]=null)):pt(u)}}}function Ae(u){return u in Hr?Hr[u]:Hr[u]="on"+u}function ut(u,f){if(u.da)u=!0;else{f=new Ie(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&we(u),u=y.call(E,f)}return u}function qe(u){return u=u[vr],u instanceof gn?u:null}var Jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zn(u){return typeof u=="function"?u:(u[Jn]||(u[Jn]=function(f){return u.handleEvent(f)}),u[Jn])}function at(){B.call(this),this.i=new gn(this),this.M=this,this.F=null}K(at,B),at.prototype[Ue]=!0,at.prototype.removeEventListener=function(u,f,y,E){Se(this,u,f,y,E)};function Tt(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new ie(f,u);else if(f instanceof ie)f.target=f.target||u;else{var L=f;f=new ie(E,u),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];L=Er(J,E,!0,f)&&L}if(J=f.g=u,L=Er(J,E,!0,f)&&L,L=Er(J,E,!1,f)&&L,y)for(U=0;U<y.length;U++)J=f.g=y[U],L=Er(J,E,!1,f)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)pt(y[E]);delete u.g[f],u.h--}}this.F=null},at.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},at.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function Er(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var He=J.listener,It=J.ha||J.src;J.fa&&qr(u.i,J),L=He.call(It,E)!==!1&&L}}return L&&!E.defaultPrevented}function Bo(u,f,y){if(typeof u=="function")y&&(u=P(u,y));else if(u&&typeof u.handleEvent=="function")u=P(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(u,f||0)}function Wr(u){u.g=Bo(()=>{u.g=null,u.i&&(u.i=!1,Wr(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Ui extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){B.call(this),this.h=u,this.g={}}K(ji,B);var $o=[];function qo(u){Ce(u.g,function(f,y){this.g.hasOwnProperty(y)&&we(f)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),qo(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ho=m.JSON.stringify,Wo=m.JSON.parse,Ko=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function zi(){}zi.prototype.h=null;function ks(u){return u.h||(u.h=u.i())}function Ns(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){ie.call(this,"d")}K(er,ie);function Ds(){ie.call(this,"c")}K(Ds,ie);var tr={},Go=null;function Bi(){return Go=Go||new at}tr.La="serverreachability";function Qo(u){ie.call(this,tr.La,u)}K(Qo,ie);function wr(u){const f=Bi();Tt(f,new Qo(f))}tr.STAT_EVENT="statevent";function Yo(u,f){ie.call(this,tr.STAT_EVENT,u),this.stat=f}K(Yo,ie);function ct(u){const f=Bi();Tt(f,new Yo(f,u))}tr.Ma="timingevent";function xs(u,f){ie.call(this,tr.Ma,u),this.size=f}K(xs,ie);function Dn(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},f)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function qi(u,f,y,E,L,U){u.info(function(){if(u.g)if(U)for(var J="",He=U.split("&"),It=0;It<He.length;It++){var be=He[It].split("=");if(1<be.length){var Pt=be[0];be=be[1];var mt=Pt.split("_");J=2<=mt.length&&mt[1]=="type"?J+(Pt+"="+be+"&"):J+(Pt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function Vs(u,f,y,E,L,U,J){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+J})}function xn(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+xc(u,y)+(E?" "+E:"")})}function Xo(u,f){u.info(function(){return"TIMEOUT: "+f})}$i.prototype.info=function(){};function xc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return Ho(y)}catch{return f}}var Os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vn;function Hi(){}K(Hi,zi),Hi.prototype.g=function(){return new XMLHttpRequest},Hi.prototype.i=function(){return{}},Vn=new Hi;function On(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var Jo={},Ls={};function Ms(u,f,y){u.L=1,u.v=Xr(un(f)),u.m=y,u.P=!0,Zo(u,null)}function Zo(u,f){u.F=Date.now(),Qe(u),u.A=un(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Zr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new yl,u.g=Ll(u.j,y?f:null,!u.m),0<u.O&&(u.M=new Ui(P(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&($o[0]=L.toString()),L=$o);for(var U=0;U<L.length;U++){var J=bi(y,L[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),wr(),qi(u.i,u.u,u.A,u.l,u.R,u.m)}On.prototype.ca=function(u){u=u.target;const f=this.M;f&&Zt(u)==3?f.j():this.Y(u)},On.prototype.Y=function(u){try{if(u==this.g)e:{const mt=Zt(this.g);var f=this.g.Ba();const En=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||sa(this.g)))){this.J||mt!=4||f==7||(f==8||0>=En?wr(3):wr(2)),Wi(this);var y=this.g.Z();this.X=y;t:if(_l(this)){var E=sa(this.g);u="";var L=E.length,U=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Kr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Vs(this.i,this.u,this.A,this.l,this.R,mt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var He,It=this.g;if((He=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(He)){var be=He;break t}}be=null}if(y=be)xn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,y);else{this.o=!1,this.s=3,ct(12),_n(this),Kr(this);break e}}if(this.P){y=!0;let hn;for(;!this.J&&this.C<J.length;)if(hn=Vc(this,J),hn==Ls){mt==4&&(this.s=4,ct(14),y=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Jo){this.s=4,ct(15),xn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else xn(this.i,this.l,hn,null),ea(this,hn);if(_l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||J.length!=0||this.h.h||(this.s=1,ct(16),y=!1),this.o=this.o&&y,!y)xn(this.i,this.l,J,"[Invalid Chunked Response]"),_n(this),Kr(this);else if(0<J.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),aa(Pt),Pt.M=!0,ct(11))}}else xn(this.i,this.l,J,null),ea(this,J);mt==4&&_n(this),this.o&&!this.J&&(mt==4?Ks(this.j,this):(this.o=!1,Qe(this)))}else Bs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),_n(this),Kr(this)}}}catch{}finally{}};function _l(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Vc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Ls:(y=Number(f.substring(y,E)),isNaN(y)?Jo:(E+=1,E+y>f.length?Ls:(f=f.slice(E,E+y),u.C=E+y,f)))}On.prototype.cancel=function(){this.J=!0,_n(this)};function Qe(u){u.S=Date.now()+u.I,vl(u,u.I)}function vl(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Dn(P(u.ba,u),f)}function Wi(u){u.B&&(m.clearTimeout(u.B),u.B=null)}On.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Xo(this.i,this.A),this.L!=2&&(wr(),ct(17)),_n(this),this.s=2,Kr(this)):vl(this,this.S-u)};function Kr(u){u.j.G==0||u.J||Ks(u.j,u)}function _n(u){Wi(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,qo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function ea(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Gt(y.h,u))){if(!u.K&&Gt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ws(y),Un(y);else break e;Hs(y),ct(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Dn(P(y.Za,y),6e3));if(1>=wl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Rr(y,11)}else if((u.K||y.g==u)&&Ws(y),!he(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let be=L[f];if(y.T=be[0],be=be[1],y.G==2)if(be[0]=="c"){y.K=be[1],y.ia=be[2];const Pt=be[3];Pt!=null&&(y.la=Pt,y.j.info("VER="+y.la));const mt=be[4];mt!=null&&(y.Aa=mt,y.j.info("SVER="+y.Aa));const En=be[5];En!=null&&typeof En=="number"&&0<En&&(E=1.5*En,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const hn=u.g;if(hn){const Zi=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var U=E.h;U.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ta(U,U.h),U.h=null))}if(E.D){const Qs=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(E.ya=Qs,Ge(E.I,E.D,Qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=u;if(E.qa=Ol(E,E.J?E.ia:null,E.W),J.K){Tl(E.h,J);var He=J,It=E.L;It&&(He.I=It),He.B&&(Wi(He),Qe(He)),E.g=J}else Ji(E);0<y.i.length&&sr(y)}else be[0]!="stop"&&be[0]!="close"||Rr(y,7);else y.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Rr(y,7):Ot(y):be[0]!="noop"&&y.l&&y.l.ta(be),y.v=0)}}wr(4)}catch{}}var El=class{constructor(u,f){this.g=u,this.map=f}};function Ki(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function wl(u){return u.h?1:u.g?u.g.size:0}function Gt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function ta(u,f){u.g?u.g.add(f):u.h=f}function Tl(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Ki.prototype.cancel=function(){if(this.i=Il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Il(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return Y(u.i)}function bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function Gr(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Fs(u),E=bs(u),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],u)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oc(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),L=null;if(0<=E){var U=u[y].substring(0,E);L=u[y].substring(E+1)}else U=u[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Tr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Tr){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var f=u.i,y=new nr;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Yr(this,y),this.m=u.m}else u&&(f=String(u).match(Gi))?(this.h=!1,Qi(this,f[1]||"",!0),this.o=Me(f[2]||""),this.g=Me(f[3]||"",!0),Qr(this,f[4]),this.l=Me(f[5]||"",!0),Yr(this,f[6]||"",!0),this.m=Me(f[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Tr.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Jr(f,Us,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Jr(f,Us,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Jr(y,y.charAt(0)=="/"?Rl:Al,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Jr(y,na)),u.join("")};function un(u){return new Tr(u)}function Qi(u,f,y){u.j=y?Me(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function Yr(u,f,y){f instanceof nr?(u.i=f,rr(u.i,u.h)):(y||(f=Jr(f,Cl)),u.i=new nr(f,u.h))}function Ge(u,f,y){u.i.set(f,y)}function Xr(u){return Ge(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Me(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Jr(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,Sl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Us=/[#\/\?@]/g,Al=/[#\?:]/g,Rl=/[#\?]/g,Cl=/[#\?@]/g,na=/#/g;function nr(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function Vt(u){u.g||(u.g=new Map,u.h=0,u.i&&Oc(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=nr.prototype,r.add=function(u,f){Vt(this),this.i=null,u=vn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function Ln(u,f){Vt(u),f=vn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Mn(u,f){return Vt(u),f=vn(u,f),u.g.has(f)}r.forEach=function(u,f){Vt(this),this.g.forEach(function(y,E){y.forEach(function(L){u.call(f,L,E,this)},this)},this)},r.na=function(){Vt(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=u[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},r.V=function(u){Vt(this);let f=[];if(typeof u=="string")Mn(this,u)&&(f=f.concat(this.g.get(vn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return Vt(this),this.i=null,u=vn(this,u),Mn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function Zr(u,f,y){Ln(u,f),0<y.length&&(u.i=null,u.g.set(vn(u,f),Y(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=U;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),u.push(L)}}return this.i=u.join("&")};function vn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function rr(u,f){f&&!u.j&&(Vt(u),u.i=null,u.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Ln(this,E),Zr(this,L,y))},u)),u.j=f}function Lc(u,f){const y=new $i;if(m.Image){const E=new Image;E.onload=j(Jt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Jt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Jt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Jt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function Pl(u,f){const y=new $i,E=new AbortController,L=setTimeout(()=>{E.abort(),Jt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Jt(y,"TestPingServer: ok",!0,f):Jt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Jt(y,"TestPingServer: error",!1,f)})}function Jt(u,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Mc(){this.g=new Ko}function kl(u,f,y){const E=y||"";try{Gr(u,function(L,U){let J=L;v(L)&&(J=Ho(L)),f.push(E+U+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function Ir(u){this.l=u.Ub||null,this.j=u.eb||!1}K(Ir,zi),Ir.prototype.g=function(){return new Yi(this.l,this.j)},Ir.prototype.i=(function(u){return function(){return u}})({});function Yi(u,f){at.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Yi,at),r=Yi.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Fn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?bn(this):Fn(this),this.readyState==3&&Nl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},r.Qa=function(u){this.g&&(this.response=u,bn(this))},r.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Fn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Sr(u){let f="";return Ce(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function ei(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=Sr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Ge(u,f,y))}function tt(u){at.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(tt,at);var bc=/^https?$/i,ra=["POST","PUT"];r=tt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vn.g(),this.v=this.o?ks(this.o):ks(Vn),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(U){Xi(this,U);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ra,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zs(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){Xi(this,U)}};function Xi(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,js(u),cn(u)}function js(u){u.A||(u.A=!0,Tt(u,"complete"),Tt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Tt(this,"complete"),Tt(this,"abort"),cn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),tt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},r.bb=function(){ia(this)};function ia(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)Bo(u.Ea,0,u);else if(Tt(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(u.D).match(Gi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!bc.test(L?L.toLowerCase():"")}y=E}if(y)Tt(u,"complete"),Tt(u,"success");else{u.m=6;try{var U=2<Zt(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",js(u)}}finally{cn(u)}}}}function cn(u,f){if(u.g){zs(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||Tt(u,"ready");try{y.onreadystatechange=E}catch{}}}function zs(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Wo(f)}};function sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Bs(u){const f={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(he(u[E]))continue;var y=V(u[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function oa(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,u),this.cb=ir("retryDelaySeedMs",1e4,u),this.Wa=ir("forwardChannelMaxRetries",2,u),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(u&&u.concurrentRequestLimit),this.Da=new Mc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,E){ct(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Ol(this,null,this.W),sr(this)};function Ot(u){if($s(u),u.G==3){var f=u.U++,y=un(u.I);if(Ge(y,"SID",u.K),Ge(y,"RID",f),Ge(y,"TYPE","terminate"),Ar(u,y),f=new On(u,u.j,f),f.L=2,f.v=Xr(un(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=Ll(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Qe(f)}Vl(u)}function Un(u){u.g&&(aa(u),u.g.cancel(),u.g=null)}function $s(u){Un(u),u.u&&(m.clearTimeout(u.u),u.u=null),Ws(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function sr(u){if(!ln(u.h)&&!u.s){u.s=!0;var f=u.Ga;ze||ee(),Z||(ze(),Z=!0),ce.add(f,u),u.B=0}}function Fc(u,f){return wl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Dn(P(u.Ga,u,f),xl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new On(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=ti(this,L,f),y=un(this.I),Ge(y,"RID",u),Ge(y,"CVER",22),this.D&&Ge(y,"X-HTTP-Session-Id",this.D),Ar(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(Sr(U)))+"&"+f:this.m&&ei(y,this.m,U)),ta(this.h,L),this.Ua&&Ge(y,"TYPE","init"),this.P?(Ge(y,"$req",f),Ge(y,"SID","null"),L.T=!0,Ms(L,y,null)):Ms(L,y,f),this.G=2}}else this.G==3&&(u?qs(this,u):this.i.length==0||ln(this.h)||qs(this))};function qs(u,f){var y;f?y=f.l:y=u.U++;const E=un(u.I);Ge(E,"SID",u.K),Ge(E,"RID",y),Ge(E,"AID",u.T),Ar(u,E),u.m&&u.o&&ei(E,u.m,u.o),y=new On(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=ti(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,y),Ms(y,E,f)}function Ar(u,f){u.H&&Ce(u.H,function(y,E){Ge(f,E,y)}),u.l&&Gr({},function(y,E){Ge(f,E,y)})}function ti(u,f,y){y=Math.min(u.i.length,y);var E=u.l?P(u.l.Na,u.l,u):null;e:{var L=u.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=L[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let He=!0;for(let It=0;It<y;It++){let be=L[It].g;const Pt=L[It].map;if(be-=U,0>be)U=Math.max(0,L[It].g-100),He=!1;else try{kl(Pt,J,"req"+be+"_")}catch{E&&E(Pt)}}if(He){E=J.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function Ji(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;ze||ee(),Z||(ze(),Z=!0),ce.add(f,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Dn(P(u.Fa,u),xl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Dn(P(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Un(this),Dl(this))};function aa(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function Dl(u){u.g=new On(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=un(u.qa);Ge(f,"RID","rpc"),Ge(f,"SID",u.K),Ge(f,"AID",u.T),Ge(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ge(f,"TO",u.ja),Ge(f,"TYPE","xmlhttp"),Ar(u,f),u.m&&u.o&&ei(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Xr(un(f)),y.m=null,y.P=!0,Zo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Un(this),Hs(this),ct(19))};function Ws(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function Ks(u,f){var y=null;if(u.g==f){Ws(u),aa(u),u.g=null;var E=2}else if(Gt(u.h,f))y=f.D,Tl(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=u.B;E=Bi(),Tt(E,new xs(E,y)),sr(u)}else Ji(u);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Fc(u,f)||E==2&&Hs(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),L){case 1:Rr(u,5);break;case 4:Rr(u,10);break;case 3:Rr(u,6);break;default:Rr(u,2)}}}function xl(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function Rr(u,f){if(u.j.info("Error code "+f),f==2){var y=P(u.fb,u),E=u.Xa;const L=!E;E=new Tr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Qi(E,"https"),Xr(E),L?Lc(E.toString(),y):Pl(E.toString(),y)}else ct(2);u.G=0,u.l&&u.l.sa(f),Vl(u),$s(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Vl(u){if(u.G=0,u.ka=[],u.l){const f=Il(u.h);(f.length!=0||u.i.length!=0)&&(H(u.ka,f),H(u.ka,u.i),u.h.i.length=0,Y(u.i),u.i.length=0),u.l.ra()}}function Ol(u,f,y){var E=y instanceof Tr?un(y):new Tr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Qr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new Tr(null);E&&Qi(U,E),f&&(U.g=f),L&&Qr(U,L),y&&(U.l=y),E=U}return y=u.D,f=u.ya,y&&f&&Ge(E,y,f),Ge(E,"VER",u.la),Ar(u,E),E}function Ll(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new tt(new Ir({eb:y})):new tt(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function la(){}r=la.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Gs(){}Gs.prototype.g=function(u,f){return new Qt(u,f)};function Qt(u,f){at.call(this),this.g=new oa(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!he(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!he(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new or(this)}K(Qt,at),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Ot(this.g)},Qt.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ho(u),u=y);f.i.push(new El(f.Ya++,u)),f.G==3&&sr(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Qt.aa.N.call(this)};function Ml(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}K(Ml,er);function bl(){Ds.call(this),this.status=1}K(bl,Ds);function or(u){this.g=u}K(or,la),or.prototype.ua=function(){Tt(this.g,"a")},or.prototype.ta=function(u){Tt(this.g,new Ml(u))},or.prototype.sa=function(u){Tt(this.g,new bl)},or.prototype.ra=function(){Tt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,J_=function(){return new Gs},X_=function(){return Bi()},Y_=tr,kd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,$u=Os,gl.COMPLETE="complete",Q_=gl,Ns.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",at.prototype.listen=at.prototype.K,Ma=Ns,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,G_=tt}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});const $g="@firebase/firestore",qg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Kd("@firebase/firestore");function _o(){return Ts.logLevel}function ne(r,...e){if(Ts.logLevel<=Oe.DEBUG){const t=e.map(lf);Ts.debug(`Firestore (${bo}): ${r}`,...t)}}function zr(r,...e){if(Ts.logLevel<=Oe.ERROR){const t=e.map(lf);Ts.error(`Firestore (${bo}): ${r}`,...t)}}function Ci(r,...e){if(Ts.logLevel<=Oe.WARN){const t=e.map(lf);Ts.warn(`Firestore (${bo}): ${r}`,...t)}}function lf(r){if(typeof r=="string")return r;try{/**
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
 */function _e(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Z_(r,s,t)}function Z_(r,e,t){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw zr(s),new Error(s)}function $e(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||Z_(e,o,s)}function Re(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends $r{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class H1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ht.UNAUTHENTICATED)))}shutdown(){}}class W1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class K1{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ms,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ms)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new ev(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class G1{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Q1{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new G1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function X1(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function tv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=X1(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ne(r,e){return r<e?-1:r>e?1:0}function Nd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ne(s,o);{const l=tv(),h=J1(l.encode(Wg(r,t)),l.encode(Wg(e,t)));return h!==0?h:Ne(s,o)}}t+=s>65535?2:1}return Ne(r.length,e.length)}function Wg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function J1(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Ne(r[t],e[t]);return Ne(r.length,e.length)}function Po(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="__name__";class hr{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=hr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const s=hr.isNumericId(e),o=hr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?hr.extractNumericId(e).compare(hr.extractNumericId(t)):Nd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class Xe extends hr{construct(e,t,s){return new Xe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Xe(t)}static emptyPath(){return new Xe([])}}const Z1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends hr{construct(e,t,s){return new Ft(e,t,s)}static isValidIdentifier(e){return Z1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kg}static keyField(){return new Ft([Kg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(l(),o++)}if(l(),h)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Xe.fromString(e))}static fromName(e){return new de(Xe.fromString(e).popFirst(5))}static empty(){return new de(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(r,e,t){if(!t)throw new re($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function eS(r,e,t,s){if(e===!0&&s===!0)throw new re($.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Gg(r){if(!de.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Qg(r){if(de.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function rv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function _c(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e(12329,{type:typeof r})}function Ai(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_c(r);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function vt(r,e){const t={typeString:r};return e&&(t.value=e),t}function cl(r,e){if(!rv(r))throw new re($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new re($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=-62135596800,Xg=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Xg);return new et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yg)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xg}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cl(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:vt("string",et._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new et(0,0))}static max(){return new Te(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ya=-1;function tS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new et(t+1,0):new et(t,s));return new Pi(o,de.empty(),e)}function nS(r){return new Pi(r.readTime,r.key,Ya)}class Pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pi(Te.min(),de.empty(),Ya)}static max(){return new Pi(Te.max(),de.empty(),Ya)}}function rS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
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
 */const iS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==iS)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let m=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next((w=>{h[v]=w,++m,m===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function oS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Uo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}vc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=-1;function Ec(r){return r==null}function rc(r){return r===0&&1/r==-1/0}function aS(r){return typeof r=="number"&&Number.isInteger(r)&&!rc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="";function lS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Jg(e)),e=uS(r.get(t),e);return Jg(e)}function uS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case iv:t+="";break;default:t+=l}}return t}function Jg(r){return r+iv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function As(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function sv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vu(this.root,e,this.comparator,!0)}}class Vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??bt.RED,this.left=o??bt.EMPTY,this.right=l??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new bt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new Kn([])}unionWith(e){let t=new Rt(Ft.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Po(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ov("Invalid base64 string: "+l):l}})(e);return new Ut(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const cS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(r){if($e(!!r,39018),typeof r=="string"){let e=0;const t=cS.exec(r);if($e(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:dt(r.seconds),nanos:dt(r.nanos)}}function dt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ni(r){return typeof r=="string"?Ut.fromBase64String(r):Ut.fromUint8Array(r)}/**
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
 */const av="server_timestamp",lv="__type__",uv="__previous_value__",cv="__local_write_time__";function hf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[lv])===null||t===void 0?void 0:t.stringValue)===av}function wc(r){const e=r.mapValue.fields[uv];return hf(e)?wc(e):e}function Xa(r){const e=ki(r.mapValue.fields[cv].timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t,s,o,l,h,m,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const ic="(default)";class Ja{constructor(e,t){this.projectId=e,this.database=t||ic}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database===ic}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hv="__type__",dS="__max__",Ou={mapValue:{}},dv="__vector__",sc="value";function Di(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hf(r)?4:pS(r)?9007199254740991:fS(r)?10:11:_e(28295,{value:r})}function yr(r,e){if(r===e)return!0;const t=Di(r);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Xa(r).isEqual(Xa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=ki(o.timestampValue),m=ki(l.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ni(o.bytesValue).isEqual(Ni(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=dt(o.doubleValue),m=dt(l.doubleValue);return h===m?rc(h)===rc(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return Po(r.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},m=l.mapValue.fields||{};if(Zg(h)!==Zg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!yr(h[g],m[g])))return!1;return!0})(r,e);default:return _e(52216,{left:r})}}function Za(r,e){return(r.values||[]).find((t=>yr(t,e)))!==void 0}function ko(r,e){if(r===e)return 0;const t=Di(r),s=Di(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const m=dt(l.integerValue||l.doubleValue),g=dt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(r,e);case 3:return ty(r.timestampValue,e.timestampValue);case 4:return ty(Xa(r),Xa(e));case 5:return Nd(r.stringValue,e.stringValue);case 6:return(function(l,h){const m=Ni(l),g=Ni(h);return m.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const m=l.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Ne(m[v],g[v]);if(w!==0)return w}return Ne(m.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const m=Ne(dt(l.latitude),dt(h.latitude));return m!==0?m:Ne(dt(l.longitude),dt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ny(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var m,g,v,w;const A=l.fields||{},P=h.fields||{},j=(m=A[sc])===null||m===void 0?void 0:m.arrayValue,K=(g=P[sc])===null||g===void 0?void 0:g.arrayValue,Y=Ne(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=K==null?void 0:K.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:ny(j,K)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Ou.mapValue&&h===Ou.mapValue)return 0;if(l===Ou.mapValue)return 1;if(h===Ou.mapValue)return-1;const m=l.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const P=Nd(g[A],w[A]);if(P!==0)return P;const j=ko(m[g[A]],v[w[A]]);if(j!==0)return j}return Ne(g.length,w.length)})(r.mapValue,e.mapValue);default:throw _e(23264,{le:t})}}function ty(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=ki(r),s=ki(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function ny(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=ko(t[o],s[o]);if(l)return l}return Ne(t.length,s.length)}function No(r){return Dd(r)}function Dd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=ki(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ni(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return de.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Dd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Dd(t.fields[h])}`;return o+"}"})(r.mapValue):_e(61005,{value:r})}function qu(r){switch(Di(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wc(r);return e?16+qu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ni(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+qu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return As(s.fields,((l,h)=>{o+=l.length+qu(h)})),o})(r.mapValue);default:throw _e(13486,{value:r})}}function ry(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function xd(r){return!!r&&"integerValue"in r}function df(r){return!!r&&"arrayValue"in r}function iy(r){return!!r&&"nullValue"in r}function sy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hu(r){return!!r&&"mapValue"in r}function fS(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[hv])===null||t===void 0?void 0:t.stringValue)===dv}function Ba(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return As(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ba(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ba(r.arrayValue.values[t]);return e}return Object.assign({},r)}function pS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===dS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ba(t)}setAll(e){let t=Ft.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ba(h):o.push(m.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Hu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){As(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new Cn(Ba(this.value))}}function fv(r){const e=[];return As(r.fields,((t,s)=>{const o=new Ft([t]);if(Hu(s)){const l=fv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s,o,l,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Wt(e,0,Te.min(),Te.min(),Te.min(),Cn.empty(),0)}static newFoundDocument(e,t,s,o){return new Wt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Te.min(),Te.min(),Cn.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Te.min(),Te.min(),Cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oc{constructor(e,t){this.position=e,this.inclusive=t}}function oy(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=ko(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function ay(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!yr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class el{constructor(e,t="asc"){this.field=e,this.dir=t}}function mS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class pv{}class _t extends pv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new yS(e,t,s):t==="array-contains"?new ES(e,s):t==="in"?new wS(e,s):t==="not-in"?new TS(e,s):t==="array-contains-any"?new IS(e,s):new _t(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new _S(e,s):new vS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ko(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends pv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Yn(e,t)}matches(e){return mv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function mv(r){return r.op==="and"}function gv(r){return gS(r)&&mv(r)}function gS(r){for(const e of r.filters)if(e instanceof Yn)return!1;return!0}function Vd(r){if(r instanceof _t)return r.field.canonicalString()+r.op.toString()+No(r.value);if(gv(r))return r.filters.map((e=>Vd(e))).join(",");{const e=r.filters.map((t=>Vd(t))).join(",");return`${r.op}(${e})`}}function yv(r,e){return r instanceof _t?(function(s,o){return o instanceof _t&&s.op===o.op&&s.field.isEqual(o.field)&&yr(s.value,o.value)})(r,e):r instanceof Yn?(function(s,o){return o instanceof Yn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,m)=>l&&yv(h,o.filters[m])),!0):!1})(r,e):void _e(19439)}function _v(r){return r instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`})(r):r instanceof Yn?(function(t){return t.op.toString()+" {"+t.getFilters().map(_v).join(" ,")+"}"})(r):"Filter"}class yS extends _t{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class _S extends _t{constructor(e,t){super(e,"in",t),this.keys=vv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class vS extends _t{constructor(e,t){super(e,"not-in",t),this.keys=vv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class ES extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return df(t)&&Za(t.arrayValue,this.value)}}class wS extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Za(this.value.arrayValue,t)}}class TS extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Za(this.value.arrayValue,t)}}class IS extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!df(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Za(this.value.arrayValue,s)))}}/**
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
 */class SS{constructor(e,t=null,s=[],o=[],l=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=m,this.Pe=null}}function ly(r,e=null,t=[],s=[],o=null,l=null,h=null){return new SS(r,e,t,s,o,l,h)}function ff(r){const e=Re(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Vd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>No(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>No(s))).join(",")),e.Pe=t}return e.Pe}function pf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!mS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!yv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ay(r.startAt,e.startAt)&&ay(r.endAt,e.endAt)}function Od(r){return de.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t=null,s=[],o=[],l=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function AS(r,e,t,s,o,l,h,m){return new jo(r,e,t,s,o,l,h,m)}function mf(r){return new jo(r)}function uy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ev(r){return r.collectionGroup!==null}function $a(r){const e=Re(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Rt(Ft.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new el(l,s))})),t.has(Ft.keyField().canonicalString())||e.Te.push(new el(Ft.keyField(),s))}return e.Te}function fr(r){const e=Re(r);return e.Ie||(e.Ie=RS(e,$a(r))),e.Ie}function RS(r,e){if(r.limitType==="F")return ly(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new el(o.field,l)}));const t=r.endAt?new oc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new oc(r.startAt.position,r.startAt.inclusive):null;return ly(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Ld(r,e){const t=r.filters.concat([e]);return new jo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ac(r,e,t){return new jo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Tc(r,e){return pf(fr(r),fr(e))&&r.limitType===e.limitType}function wv(r){return`${ff(fr(r))}|lt:${r.limitType}`}function vo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>_v(o))).join(", ")}]`),Ec(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>No(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>No(o))).join(",")),`Target(${s})`})(fr(r))}; limitType=${r.limitType})`}function Ic(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):de.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of $a(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=oy(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,$a(s),o)||s.endAt&&!(function(h,m,g){const v=oy(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,$a(s),o))})(r,e)}function CS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Tv(r){return(e,t)=>{let s=!1;for(const o of $a(r)){const l=PS(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function PS(r,e,t){const s=r.field.isKeyField()?de.comparator(e.key,t.key):(function(l,h,m){const g=h.data.field(l),v=m.data.field(l);return g!==null&&v!==null?ko(g,v):_e(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return sv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new ot(de.comparator);function Br(){return kS}const Iv=new ot(de.comparator);function ba(...r){let e=Iv;for(const t of r)e=e.insert(t.key,t);return e}function Sv(r){let e=Iv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ps(){return qa()}function Av(){return qa()}function qa(){return new Rs((r=>r.toString()),((r,e)=>r.isEqual(e)))}const NS=new ot(de.comparator),DS=new Rt(de.comparator);function Le(...r){let e=DS;for(const t of r)e=e.add(t);return e}const xS=new Rt(Ne);function VS(){return xS}/**
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
 */function gf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function Rv(r){return{integerValue:""+r}}function OS(r,e){return aS(e)?Rv(e):gf(r,e)}/**
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
 */class Sc{constructor(){this._=void 0}}function LS(r,e,t){return r instanceof tl?(function(o,l){const h={fields:{[lv]:{stringValue:av},[cv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&hf(l)&&(l=wc(l)),l&&(h.fields[uv]=l),{mapValue:h}})(t,e):r instanceof nl?Pv(r,e):r instanceof rl?kv(r,e):(function(o,l){const h=Cv(o,l),m=cy(h)+cy(o.Ee);return xd(h)&&xd(o.Ee)?Rv(m):gf(o.serializer,m)})(r,e)}function MS(r,e,t){return r instanceof nl?Pv(r,e):r instanceof rl?kv(r,e):t}function Cv(r,e){return r instanceof lc?(function(s){return xd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class tl extends Sc{}class nl extends Sc{constructor(e){super(),this.elements=e}}function Pv(r,e){const t=Nv(e);for(const s of r.elements)t.some((o=>yr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class rl extends Sc{constructor(e){super(),this.elements=e}}function kv(r,e){let t=Nv(e);for(const s of r.elements)t=t.filter((o=>!yr(o,s)));return{arrayValue:{values:t}}}class lc extends Sc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function cy(r){return dt(r.integerValue||r.doubleValue)}function Nv(r){return df(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t){this.field=e,this.transform=t}}function FS(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof nl&&o instanceof nl||s instanceof rl&&o instanceof rl?Po(s.elements,o.elements,yr):s instanceof lc&&o instanceof lc?yr(s.Ee,o.Ee):s instanceof tl&&o instanceof tl})(r.transform,e.transform)}class US{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ac{}function Dv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yf(r.key,Qn.none()):new hl(r.key,r.data,Qn.none());{const t=r.data,s=Cn.empty();let o=new Rt(Ft.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Cs(r.key,s,new Kn(o.toArray()),Qn.none())}}function jS(r,e,t){r instanceof hl?(function(o,l,h){const m=o.value.clone(),g=dy(o.fieldTransforms,l,h.transformResults);m.setAll(g),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Cs?(function(o,l,h){if(!Wu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const m=dy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(xv(o)),g.setAll(m),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ha(r,e,t,s){return r instanceof hl?(function(l,h,m,g){if(!Wu(l.precondition,h))return m;const v=l.value.clone(),w=fy(l.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof Cs?(function(l,h,m,g){if(!Wu(l.precondition,h))return m;const v=fy(l.fieldTransforms,g,h),w=h.data;return w.setAll(xv(l)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((A=>A.field)))})(r,e,t,s):(function(l,h,m){return Wu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function zS(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Cv(s.transform,o||null);l!=null&&(t===null&&(t=Cn.empty()),t.set(s.field,l))}return t||null}function hy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Po(s,o,((l,h)=>FS(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class hl extends Ac{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Cs extends Ac{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function xv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function dy(r,e,t){const s=new Map;$e(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,m=e.data.field(l.field);s.set(l.field,MS(h,m,t[o]))}return s}function fy(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,LS(l,h,e))}return s}class yf extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BS extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&jS(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ha(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ha(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Av();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let m=this.applyToLocalView(h,l.mutatedFields);m=t.has(o.key)?null:m;const g=Dv(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&Po(this.mutations,e.mutations,((t,s)=>hy(t,s)))&&Po(this.baseMutations,e.baseMutations,((t,s)=>hy(t,s)))}}class _f{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){$e(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return NS})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new _f(e,t,s,o)}}/**
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
 */class qS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Fe;function WS(r){switch(r){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:r})}}function Vv(r){if(r===void 0)return zr("GRPC error has no .code"),$.UNKNOWN;switch(r){case yt.OK:return $.OK;case yt.CANCELLED:return $.CANCELLED;case yt.UNKNOWN:return $.UNKNOWN;case yt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case yt.INTERNAL:return $.INTERNAL;case yt.UNAVAILABLE:return $.UNAVAILABLE;case yt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case yt.NOT_FOUND:return $.NOT_FOUND;case yt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case yt.ABORTED:return $.ABORTED;case yt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case yt.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:r})}}(Fe=yt||(yt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const KS=new Si([4294967295,4294967295],0);function py(r){const e=tv().encode(r),t=new K_;return t.update(e),new Uint8Array(t.digest())}function my(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Si([t,s],0),new Si([o,l],0)]}class vf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Fa(`Invalid padding: ${t}`);if(s<0)throw new Fa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Fa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Si.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Si.fromNumber(s)));return o.compare(KS)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=py(e),[s,o]=my(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new vf(l,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=py(e),[s,o]=my(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,dl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Rc(Te.min(),o,new ot(Ne),Br(),Le())}}class dl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new dl(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Ov{constructor(e,t){this.targetId=e,this.De=t}}class Lv{constructor(e,t,s=Ut.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class gy{constructor(){this.ve=0,this.Ce=yy(),this.Fe=Ut.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),s=Le();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:l})}})),new dl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=yy()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class GS{constructor(e){this.We=e,this.Ge=new Map,this.ze=Br(),this.je=Lu(),this.Je=Lu(),this.He=new ot(Ne)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Od(l))if(s===0){const h=new de(l.path);this.Xe(t,h,Wt.newNoDocument(h,Te.min()))}else $e(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),g=m?this.ut(m,e,h):1;if(g!==0){this.rt(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,v)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,m;try{h=Ni(s).toUint8Array()}catch(g){if(g instanceof ov)return Ci("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new vf(h,o,l)}catch(g){return Ci(g instanceof Fa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const m=this.st(h);if(m){if(l.current&&Od(m.target)){const g=new de(m.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,Wt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=Le();this.Je.forEach(((l,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.st(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Rc(e,t,this.He,this.ze,s);return this.ze=Br(),this.je=Lu(),this.Je=Lu(),this.He=new ot(Ne),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new gy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Rt(Ne),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Rt(Ne),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new gy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Lu(){return new ot(de.comparator)}function yy(){return new ot(de.comparator)}const QS={asc:"ASCENDING",desc:"DESCENDING"},YS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XS={and:"AND",or:"OR"};class JS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Md(r,e){return r.useProto3Json||Ec(e)?e:{value:e}}function uc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ZS(r,e){return uc(r,e.toTimestamp())}function pr(r){return $e(!!r,49232),Te.fromTimestamp((function(t){const s=ki(t);return new et(s.seconds,s.nanos)})(r))}function Ef(r,e){return bd(r,e).canonicalString()}function bd(r,e){const t=(function(o){return new Xe(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function bv(r){const e=Xe.fromString(r);return $e(Bv(e),10190,{key:e.toString()}),e}function Fd(r,e){return Ef(r.databaseId,e.path)}function gd(r,e){const t=bv(e);if(t.get(1)!==r.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new de(Uv(t))}function Fv(r,e){return Ef(r.databaseId,e)}function eA(r){const e=bv(r);return e.length===4?Xe.emptyPath():Uv(e)}function Ud(r){return new Xe(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Uv(r){return $e(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function _y(r,e,t){return{name:Fd(r,e),fields:t.value.mapValue.fields}}function tA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,w){return v.useProto3Json?($e(w===void 0||typeof w=="string",58123),Ut.fromBase64String(w||"")):($e(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ut.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?$.UNKNOWN:Vv(v.code);return new re(w,v.message||"")})(h);t=new Lv(s,o,l,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=gd(r,s.document.name),l=pr(s.document.updateTime),h=s.document.createTime?pr(s.document.createTime):Te.min(),m=new Cn({mapValue:{fields:s.document.fields}}),g=Wt.newFoundDocument(o,l,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Ku(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=gd(r,s.document),l=s.readTime?pr(s.readTime):Te.min(),h=Wt.newNoDocument(o,l),m=s.removedTargetIds||[];t=new Ku([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=gd(r,s.document),l=s.removedTargetIds||[];t=new Ku([],l,o,null)}else{if(!("filter"in e))return _e(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new HS(o,l),m=s.targetId;t=new Ov(m,h)}}return t}function nA(r,e){let t;if(e instanceof hl)t={update:_y(r,e.key,e.value)};else if(e instanceof yf)t={delete:Fd(r,e.key)};else if(e instanceof Cs)t={update:_y(r,e.key,e.data),updateMask:hA(e.fieldMask)};else{if(!(e instanceof BS))return _e(16599,{Rt:e.type});t={verify:Fd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const m=h.transform;if(m instanceof tl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof nl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof rl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof lc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:ZS(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(r,e.precondition)),t}function rA(r,e){return r&&r.length>0?($e(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?pr(o.updateTime):pr(l);return h.isEqual(Te.min())&&(h=pr(l)),new US(h,o.transformResults||[])})(t,e)))):[]}function iA(r,e){return{documents:[Fv(r,e.path)]}}function sA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Fv(r,o);const l=(function(v){if(v.length!==0)return zv(Yn.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((w=>(function(P){return{field:Eo(P.field),direction:lA(P.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Md(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{Vt:t,parent:o}}function oA(r){let e=eA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){$e(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(A){const P=jv(A);return P instanceof Yn&&gv(P)?P.getFilters():[P]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((P=>(function(K){return new el(wo(K.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(P)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let P;return P=typeof A=="object"?A.value:A,Ec(P)?null:P})(t.limit));let g=null;t.startAt&&(g=(function(A){const P=!!A.before,j=A.values||[];return new oc(j,P)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const P=!A.before,j=A.values||[];return new oc(j,P)})(t.endAt)),AS(e,o,h,l,m,"F",g,v)}function aA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=wo(t.unaryFilter.field);return _t.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=wo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=wo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=wo(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(r):r.fieldFilter!==void 0?(function(t){return _t.create(wo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Yn.create(t.compositeFilter.filters.map((s=>jv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(r):_e(30097,{filter:r})}function lA(r){return QS[r]}function uA(r){return YS[r]}function cA(r){return XS[r]}function Eo(r){return{fieldPath:r.canonicalString()}}function wo(r){return Ft.fromServerFormat(r.fieldPath)}function zv(r){return r instanceof _t?(function(t){if(t.op==="=="){if(sy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(iy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(iy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:uA(t.op),value:t.value}}})(r):r instanceof Yn?(function(t){const s=t.getFilters().map((o=>zv(o)));return s.length===1?s[0]:{compositeFilter:{op:cA(t.op),filters:s}}})(r):_e(54877,{filter:r})}function hA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Bv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,s,o,l=Te.min(),h=Te.min(),m=Ut.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.gt=e}}function fA(r){const e=oA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ac(e,e.limit,"L"):e}/**
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
 */class pA{constructor(){this.Dn=new mA}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Pi.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class mA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Rt(Xe.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Rt(Xe.comparator)).toArray()}}/**
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
 */const vy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$v=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an($v,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Do(0)}static ur(){return new Do(-1)}}/**
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
 */const Ey="LruGarbageCollector",gA=1048576;function wy([r,e],[t,s]){const o=Ne(r,t);return o===0?Ne(e,s):o}class yA{constructor(e){this.Tr=e,this.buffer=new Rt(wy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _A{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(Ey,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Uo(t)?ne(Ey,"Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.Rr(3e5)}))}}class vA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(vc.ue);const s=new yA(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(vy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(l=A,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),_o()<=Oe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${l} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:A}))))}}function EA(r,e){return new vA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.changes=new Rs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ha(s.mutation,o,Kn.empty(),et.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Le()){const o=ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=ba();return l.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ps();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Le())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let l=Br();const h=qa(),m=(function(){return qa()})();return t.forEach(((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Cs)?l=l.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ha(w.mutation,v,w.mutation.getFieldMask(),et.now())):h.set(v.key,Kn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>{var A;return m.set(v,new TA(w,(A=h.get(v))!==null&&A!==void 0?A:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=qa();let o=new ot(((h,m)=>h-m)),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||Kn.empty();w=m.applyToLocalView(v,w),s.set(g,w);const A=(o.get(m.batchId)||Le()).add(g);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,A=Av();w.forEach((P=>{if(!l.has(P)){const j=Dv(t.get(P),s.get(P));j!==null&&A.set(P,j),l=l.add(P)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ev(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(ps());let m=Ya,g=l;return h.next((v=>q.forEach(v,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),l.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((P=>{g=g.insert(w,P)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,g,v,Le()))).next((w=>({batchId:m,changes:Sv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=ba();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=ba();return this.indexManager.getCollectionParents(e,l).next((m=>q.forEach(m,(g=>{const v=(function(A,P){return new jo(P,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((A,P)=>{h=h.insert(A,P)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Wt.newInvalidDocument(w)))}));let m=ba();return h.forEach(((g,v)=>{const w=l.get(g);w!==void 0&&Ha(w.mutation,v,Kn.empty(),et.now()),Ic(t,v)&&(m=m.insert(g,v))})),m}))}}/**
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
 */class SA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:pr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:fA(o.bundledQuery),readTime:pr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class AA{constructor(){this.overlays=new ot(de.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ps();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=ps(),l=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new ot(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=l.get(v.largestBatchId);w===null&&(w=ps(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=ps(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return q.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new qS(t,s));let l=this.kr.get(t);l===void 0&&(l=Le(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class RA{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.qr=new Rt(xt.Qr),this.$r=new Rt(xt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new xt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new xt(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new de(new Xe([])),s=new xt(t,e),o=new xt(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new de(new Xe([])),s=new xt(t,e),o=new xt(t,e+1);let l=Le();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new xt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class xt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return de.comparator(e.key,t.key)||Ne(e.Hr,t.Hr)}static Ur(e,t){return Ne(e.Hr,t.Hr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Rt(xt.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new $S(l,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new xt(m.key,l)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?cf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);l.push(m)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Rt(Ne);return t.forEach((o=>{const l=new xt(o,0),h=new xt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(m=>{s=s.add(m.Hr)}))})),q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;de.isDocumentKey(l)||(l=l.child(""));const h=new xt(new de(l),0);let m=new Rt(Ne);return this.Yr.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Hr)),!0)}),h),q.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return q.forEach(t.mutations,(o=>{const l=new xt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new xt(t,0),o=this.Yr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.ni=e,this.docs=(function(){return new ot(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let s=Br();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Wt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Br();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||rS(nS(w),s)<=0||(o.has(w.key)||Ic(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ri(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new kA(this)}getSize(e){return q.resolve(this.size)}}class kA extends wA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.persistence=e,this.ii=new Rs((t=>ff(t)),pf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.si=0,this.oi=new wf,this.targetCount=0,this._i=Do.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Do(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.ai={},this.overlays={},this.ui=new vc(0),this.ci=!1,this.ci=!0,this.li=new RA,this.referenceDelegate=e(this),this.hi=new NA(this),this.indexManager=new pA,this.remoteDocumentCache=(function(o){return new PA(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new dA(t),this.Ti=new SA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new AA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new CA(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new DA(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class DA extends sS{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Ai=new wf,this.Ri=null}static Vi(e){return new Tf(e)}get mi(){if(this.Ri)return this.Ri;throw _e(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(s=>{const o=de.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class cc{constructor(e,t){this.persistence=e,this.gi=new Rs((s=>lS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=EA(this,t)}static Vi(e,t){return new cc(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,l.removeEntry(h,Te.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qu(e.data.value)),t}Sr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Le(),o=Le();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new If(e,t.fromCache,s,o)}}/**
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
 */class xA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return o0()?8:oS(Kt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new xA;return this.ws(e,t,h).next((m=>{if(l.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(_o()<=Oe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(_o()<=Oe.DEBUG&&ne("QueryEngine","Query:",vo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(_o()<=Oe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(t))):q.resolve())}ps(e,t){if(uy(t))return q.resolve(null);let s=fr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=ac(t,null,"F"),s=fr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=Le(...l);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.bs(t,m);return this.Ds(t,v,h,g.readTime)?this.ps(e,ac(t,null,"F")):this.vs(e,v,t,g)}))))})))))}ys(e,t,s,o){return uy(t)||o.isEqual(Te.min())?q.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?q.resolve(null):(_o()<=Oe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.vs(e,h,t,tS(o,Ya)).next((m=>m)))}))}bs(e,t){let s=new Rt(Tv(e));return t.forEach(((o,l)=>{Ic(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return _o()<=Oe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",vo(t)),this.gs.getDocumentsMatchingQuery(e,t,Pi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
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
 */const Sf="LocalStore",OA=3e8;class LA{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new ot(Ne),this.Ms=new Rs((l=>ff(l)),pf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function MA(r,e,t,s){return new LA(r,e,t,s)}async function Hv(r,e){const t=Re(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],m=[];let g=Le();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of l){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((v=>({Bs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function bA(r,e){const t=Re(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,w){const A=v.batch,P=A.keys();let j=q.resolve();return P.forEach((K=>{j=j.next((()=>w.getEntry(g,K))).next((Y=>{const H=v.docVersions.get(K);$e(H!==null,48541),Y.version.compareTo(H)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(g,A)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Le();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Wv(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function FA(r,e){const t=Re(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((w,A)=>{const P=o.get(A);if(!P)return;m.push(t.hi.removeMatchingKeys(l,w.removedDocuments,A).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,A))));let j=P.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(Ut.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),(function(Y,H,ge){return Y.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=OA?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(P,j,w)&&m.push(t.hi.updateTargetData(l,j))}));let g=Br(),v=Le();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),m.push(UA(l,h,e.documentUpdates).next((w=>{g=w.Ls,v=w.ks}))),!s.isEqual(Te.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((A=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));m.push(w)}return q.waitFor(m).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,v))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function UA(r,e,t){let s=Le(),o=Le();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Br();return t.forEach(((m,g)=>{const v=l.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(Sf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function jA(r,e){const t=Re(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=cf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function zA(r,e){const t=Re(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new Ei(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function jd(r,e,t){const s=Re(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Uo(h))throw h;ne(Sf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Ty(r,e,t){const s=Re(r);let o=Te.min(),l=Le();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,w){const A=Re(g),P=A.Ms.get(w);return P!==void 0?q.resolve(A.Fs.get(P)):A.hi.getTargetData(v,w)})(s,h,fr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:Le()))).next((m=>(BA(s,CS(e),m),{documents:m,qs:l})))))}function BA(r,e,t){let s=r.xs.get(e)||Te.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Iy{constructor(){this.activeTargetIds=VS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $A{constructor(){this.Fo=new Iy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Iy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qA{xo(e){}shutdown(){}}/**
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
 */const Sy="ConnectivityMonitor";class Ay{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(Sy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(Sy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mu=null;function zd(){return Mu===null?Mu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mu++,"0x"+Mu.toString(16)}/**
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
 */const yd="RestConnection",HA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===ic?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=zd(),m=this.Go(e,t.toUriEncodedString());ne(yd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:v}=new URL(m),w=Oo(v);return this.jo(e,m,g,s,w).then((A=>(ne(yd,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw Ci(yd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=HA[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class GA extends WA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=zd();return new Promise(((m,g)=>{const v=new G_;v.setWithCredentials(!0),v.listenOnce(Q_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case $u.NO_ERROR:const A=v.getResponseJson();ne(qt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case $u.TIMEOUT:ne(qt,`RPC '${e}' ${h} timed out`),g(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const P=v.getStatus();if(ne(qt,`RPC '${e}' ${h} failed with status:`,P,"response text:",v.getResponseText()),P>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const K=j==null?void 0:j.error;if(K&&K.status&&K.message){const Y=(function(ge){const he=ge.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(he)>=0?he:$.UNKNOWN})(K.status);g(new re(Y,K.message))}else g(new re($.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new re($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{c_:e,streamId:h,l_:v.getLastErrorCode(),h_:v.getLastError()})}}finally{ne(qt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(qt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=zd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=J_(),m=X_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");ne(qt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);this.T_(A);let P=!1,j=!1;const K=new KA({Ho:H=>{j?ne(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(P||(ne(qt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),P=!0),ne(qt,`RPC '${e}' stream ${o} sending:`,H),A.send(H))},Yo:()=>A.close()}),Y=(H,ge,he)=>{H.listen(ge,(me=>{try{he(me)}catch(ve){setTimeout((()=>{throw ve}),0)}}))};return Y(A,Ma.EventType.OPEN,(()=>{j||(ne(qt,`RPC '${e}' stream ${o} transport opened.`),K.s_())})),Y(A,Ma.EventType.CLOSE,(()=>{j||(j=!0,ne(qt,`RPC '${e}' stream ${o} transport closed`),K.__(),this.I_(A))})),Y(A,Ma.EventType.ERROR,(H=>{j||(j=!0,Ci(qt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),K.__(new re($.UNAVAILABLE,"The operation could not be completed")))})),Y(A,Ma.EventType.MESSAGE,(H=>{var ge;if(!j){const he=H.data[0];$e(!!he,16349);const me=he,ve=(me==null?void 0:me.error)||((ge=me[0])===null||ge===void 0?void 0:ge.error);if(ve){ne(qt,`RPC '${e}' stream ${o} received error:`,ve);const We=ve.status;let Ce=(function(R){const k=yt[R];if(k!==void 0)return Vv(k)})(We),D=ve.message;Ce===void 0&&(Ce=$.INTERNAL,D="Unknown error status: "+We+" with message "+ve.message),j=!0,K.__(new re(Ce,D)),A.close()}else ne(qt,`RPC '${e}' stream ${o} received:`,he),K.a_(he)}})),Y(m,Y_.STAT_EVENT,(H=>{H.stat===kd.PROXY?ne(qt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===kd.NOPROXY&&ne(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.o_()}),0),K}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function _d(){return typeof document<"u"?document:null}/**
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
 */function Cc(r){return new JS(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="PersistentStream";class Gv{constructor(e,t,s,o,l,h,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Kv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new re($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(Ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(Ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class QA extends Gv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=tA(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?pr(h.readTime):Te.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Ud(this.serializer),t.addTarget=(function(l,h){let m;const g=h.target;if(m=Od(g)?{documents:iA(l,g)}:{query:sA(l,g).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Mv(l,h.resumeToken);const v=Md(l,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=uc(l,h.snapshotVersion.toTimestamp());const v=Md(l,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=aA(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Ud(this.serializer),t.removeTarget=e,this.k_(t)}}class YA extends Gv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=rA(e.writeResults,e.commitTime),s=pr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Ud(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>nA(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{}class JA extends XA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,bd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new re($.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,bd(t,s),o,h,m,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re($.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class ZA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zr(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="RemoteStore";class eR{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Ps(this)&&(ne(Is,"Restarting streams for network reachability change."),await(async function(g){const v=Re(g);v.Ia.add(4),await fl(v),v.Aa.set("Unknown"),v.Ia.delete(4),await Pc(v)})(this))}))})),this.Aa=new ZA(s,o)}}async function Pc(r){if(Ps(r))for(const e of r.da)await e(!0)}async function fl(r){for(const e of r.da)await e(!1)}function Qv(r,e){const t=Re(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Pf(t)?Cf(t):zo(t).x_()&&Rf(t,e))}function Af(r,e){const t=Re(r),s=zo(t);t.Ta.delete(e),s.x_()&&Yv(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ps(t)&&t.Aa.set("Unknown"))}function Rf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zo(r).H_(e)}function Yv(r,e){r.Ra.$e(e),zo(r).Y_(e)}function Cf(r){r.Ra=new GS({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),zo(r).start(),r.Aa.aa()}function Pf(r){return Ps(r)&&!zo(r).M_()&&r.Ta.size>0}function Ps(r){return Re(r).Ia.size===0}function Xv(r){r.Ra=void 0}async function tR(r){r.Aa.set("Online")}async function nR(r){r.Ta.forEach(((e,t)=>{Rf(r,e)}))}async function rR(r,e){Xv(r),Pf(r)?(r.Aa.la(e),Cf(r)):r.Aa.set("Unknown")}async function iR(r,e,t){if(r.Aa.set("Online"),e instanceof Lv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const m of l.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(r,e)}catch(s){ne(Is,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await hc(r,s)}else if(e instanceof Ku?r.Ra.Ye(e):e instanceof Ov?r.Ra.it(e):r.Ra.et(e),!t.isEqual(Te.min()))try{const s=await Wv(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const m=l.Ra.Pt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(v);w&&l.Ta.set(v,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Ut.EMPTY_BYTE_STRING,w.snapshotVersion)),Yv(l,g);const A=new Ei(w.target,g,v,w.sequenceNumber);Rf(l,A)})),l.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){ne(Is,"Failed to raise snapshot:",s),await hc(r,s)}}async function hc(r,e,t){if(!Uo(e))throw e;r.Ia.add(1),await fl(r),r.Aa.set("Offline"),t||(t=()=>Wv(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(Is,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Pc(r)}))}function Jv(r,e){return e().catch((t=>hc(r,t,e)))}async function kc(r){const e=Re(r),t=xi(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:cf;for(;sR(e);)try{const o=await jA(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,oR(e,o)}catch(o){await hc(e,o)}Zv(e)&&eE(e)}function sR(r){return Ps(r)&&r.Pa.length<10}function oR(r,e){r.Pa.push(e);const t=xi(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Zv(r){return Ps(r)&&!xi(r).M_()&&r.Pa.length>0}function eE(r){xi(r).start()}async function aR(r){xi(r).na()}async function lR(r){const e=xi(r);for(const t of r.Pa)e.X_(t.mutations)}async function uR(r,e,t){const s=r.Pa.shift(),o=_f.from(s,e,t);await Jv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await kc(r)}async function cR(r,e){e&&xi(r).Z_&&await(async function(s,o){if((function(h){return WS(h)&&h!==$.ABORTED})(o.code)){const l=s.Pa.shift();xi(s).N_(),await Jv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await kc(s)}})(r,e),Zv(r)&&eE(r)}async function Cy(r,e){const t=Re(r);t.asyncQueue.verifyOperationInProgress(),ne(Is,"RemoteStore received new credentials");const s=Ps(t);t.Ia.add(3),await fl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Pc(t)}async function hR(r,e){const t=Re(r);e?(t.Ia.delete(2),await Pc(t)):e||(t.Ia.add(2),await fl(t),t.Aa.set("Unknown"))}function zo(r){return r.Va||(r.Va=(function(t,s,o){const l=Re(t);return l.ia(),new QA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:tR.bind(null,r),e_:nR.bind(null,r),n_:rR.bind(null,r),J_:iR.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Pf(r)?Cf(r):r.Aa.set("Unknown")):(await r.Va.stop(),Xv(r))}))),r.Va}function xi(r){return r.ma||(r.ma=(function(t,s,o){const l=Re(t);return l.ia(),new YA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:aR.bind(null,r),n_:cR.bind(null,r),ea:lR.bind(null,r),ta:uR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await kc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(Is,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,m=new kf(e,t,h,o,l);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nf(r,e){if(zr("AsyncQueue",`${e}: ${r}`),Uo(r))return new re($.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=ba(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.fa=new ot(de.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):_e(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class xo{constructor(e,t,s,o,l,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new xo(e,t,Ao.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class fR{constructor(){this.queries=ky(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Re(t),l=o.queries;o.queries=ky(),l.forEach(((h,m)=>{for(const g of m.wa)g.onError(s)}))})(this,new re($.ABORTED,"Firestore shutting down"))}}function ky(){return new Rs((r=>wv(r)),Tc)}async function pR(r,e){const t=Re(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new dR,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Nf(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Df(t)}async function mR(r,e){const t=Re(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function gR(r,e){const t=Re(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Df(t)}function yR(r,e,t){const s=Re(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Df(r){r.Da.forEach((e=>{e.next()}))}var Bd,Ny;(Ny=Bd||(Bd={})).Fa="default",Ny.Cache="cache";class _R{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new xo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class vR{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=Tv(e),this.eu=new Ao(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Py,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const P=o.get(w),j=Ic(this.query,A)?A:null,K=!!P&&this.mutatedKeys.has(P.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let H=!1;P&&j?P.data.isEqual(j.data)?K!==Y&&(s.track({type:3,doc:j}),H=!0):this.iu(P,j)||(s.track({type:2,doc:j}),H=!0,(g&&this.Xa(j,g)>0||v&&this.Xa(j,v)<0)&&(m=!0)):!P&&j?(s.track({type:0,doc:j}),H=!0):P&&!j&&(s.track({type:1,doc:P}),H=!0,(g||v)&&(m=!0)),H&&(j?(h=h.add(j),l=Y?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:m,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,A)=>(function(j,K){const Y=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{At:H})}};return Y(j)-Y(K)})(w.type,A.type)||this.Xa(w.doc,A.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,v=g!==this.Ya;return this.Ya=g,h.length!==0||v?{snapshot:new xo(this.query,e.eu,l,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Py,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new nE(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new tE(s))})),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return xo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const xf="SyncEngine";class ER{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class wR{constructor(e){this.key=e,this.lu=!1}}class TR{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Rs((m=>wv(m)),Tc),this.Tu=new Map,this.Iu=new Set,this.du=new ot(de.comparator),this.Eu=new Map,this.Au=new wf,this.Ru={},this.Vu=new Map,this.mu=Do.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function IR(r,e,t=!0){const s=lE(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await rE(s,e,t,!0),o}async function SR(r,e){const t=lE(r);await rE(t,e,!0,!1)}async function rE(r,e,t,s){const o=await zA(r.localStore,fr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let m;return s&&(m=await AR(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Qv(r.remoteStore,o),m}async function AR(r,e,t,s,o){r.gu=(A,P,j)=>(async function(Y,H,ge,he){let me=H.view.nu(ge);me.Ds&&(me=await Ty(Y.localStore,H.query,!1).then((({documents:D})=>H.view.nu(D,me))));const ve=he&&he.targetChanges.get(H.targetId),We=he&&he.targetMismatches.get(H.targetId)!=null,Ce=H.view.applyChanges(me,Y.isPrimaryClient,ve,We);return xy(Y,H.targetId,Ce._u),Ce.snapshot})(r,A,P,j);const l=await Ty(r.localStore,e,!0),h=new vR(e,l.qs),m=h.nu(l.documents),g=dl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(m,r.isPrimaryClient,g);xy(r,t,v._u);const w=new ER(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),v.snapshot}async function RR(r,e,t){const s=Re(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!Tc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await jd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Af(s.remoteStore,o.targetId),$d(s,o.targetId)})).catch(Fo)):($d(s,o.targetId),await jd(s.localStore,o.targetId,!0))}async function CR(r,e){const t=Re(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Af(t.remoteStore,s.targetId))}async function PR(r,e,t){const s=LR(r);try{const o=await(function(h,m){const g=Re(h),v=et.now(),w=m.reduce(((j,K)=>j.add(K.key)),Le());let A,P;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let K=Br(),Y=Le();return g.Os.getEntries(j,w).next((H=>{K=H,K.forEach(((ge,he)=>{he.isValidDocument()||(Y=Y.add(ge))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,K))).next((H=>{A=H;const ge=[];for(const he of m){const me=zS(he,A.get(he.key).overlayedDocument);me!=null&&ge.push(new Cs(he.key,me,fv(me.value.mapValue),Qn.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,ge,m)})).next((H=>{P=H;const ge=H.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(j,H.batchId,ge)}))})).then((()=>({batchId:P.batchId,changes:Sv(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ru[h.currentUser.toKey()];v||(v=new ot(Ne)),v=v.insert(m,g),h.Ru[h.currentUser.toKey()]=v})(s,o.batchId,t),await pl(s,o.changes),await kc(s.remoteStore)}catch(o){const l=Nf(o,"Failed to persist write");t.reject(l)}}async function iE(r,e){const t=Re(r);try{const s=await FA(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?$e(h.lu,14607):o.removedDocuments.size>0&&($e(h.lu,42227),h.lu=!1))})),await pl(t,s,e)}catch(s){await Fo(s)}}function Dy(r,e,t){const s=Re(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Re(h);g.onlineState=m;let v=!1;g.queries.forEach(((w,A)=>{for(const P of A.wa)P.va(m)&&(v=!0)})),v&&Df(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kR(r,e,t){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new ot(de.comparator);h=h.insert(l,Wt.newNoDocument(l,Te.min()));const m=Le().add(l),g=new Rc(Te.min(),new Map,new ot(Ne),h,m);await iE(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Vf(s)}else await jd(s.localStore,e,!1).then((()=>$d(s,e,t))).catch(Fo)}async function NR(r,e){const t=Re(r),s=e.batch.batchId;try{const o=await bA(t.localStore,e);oE(t,s,null),sE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await pl(t,o)}catch(o){await Fo(o)}}async function DR(r,e,t){const s=Re(r);try{const o=await(function(h,m){const g=Re(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next((A=>($e(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>g.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);oE(s,e,t),sE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await pl(s,o)}catch(o){await Fo(o)}}function sE(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function oE(r,e,t){const s=Re(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function $d(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||aE(r,s)}))}function aE(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Af(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Vf(r))}function xy(r,e,t){for(const s of t)s instanceof tE?(r.Au.addReference(s.key,e),xR(r,s)):s instanceof nE?(ne(xf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||aE(r,s.key)):_e(19791,{yu:s})}function xR(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(xf,"New document in limbo: "+t),r.Iu.add(s),Vf(r))}function Vf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new de(Xe.fromString(e)),s=r.mu.next();r.Eu.set(s,new wR(t)),r.du=r.du.insert(t,s),Qv(r.remoteStore,new Ei(fr(mf(t.path)),s,"TargetPurposeLimboResolution",vc.ue))}}async function pl(r,e,t){const s=Re(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,g)=>{h.push(s.gu(g,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=If.Es(g.targetId,v);l.push(A)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,v){const w=Re(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>q.forEach(v,(P=>q.forEach(P.Is,(j=>w.persistence.referenceDelegate.addReference(A,P.targetId,j))).next((()=>q.forEach(P.ds,(j=>w.persistence.referenceDelegate.removeReference(A,P.targetId,j)))))))))}catch(A){if(!Uo(A))throw A;ne(Sf,"Failed to update sequence numbers: "+A)}for(const A of v){const P=A.targetId;if(!A.fromCache){const j=w.Fs.get(P),K=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(K);w.Fs=w.Fs.insert(P,Y)}}})(s.localStore,l))}async function VR(r,e){const t=Re(r);if(!t.currentUser.isEqual(e)){ne(xf,"User change. New user:",e.toKey());const s=await Hv(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((m=>{m.forEach((g=>{g.reject(new re($.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await pl(t,s.Bs)}}function OR(r,e){const t=Re(r),s=t.Eu.get(e);if(s&&s.lu)return Le().add(s.key);{let o=Le();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function lE(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=iE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kR.bind(null,e),e.hu.J_=gR.bind(null,e.eventManager),e.hu.pu=yR.bind(null,e.eventManager),e}function LR(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DR.bind(null,e),e}class dc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return MA(this.persistence,new VA,e.initialUser,this.serializer)}Du(e){return new qv(Tf.Vi,this.serializer)}bu(e){return new $A}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}dc.provider={build:()=>new dc};class MR extends dc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){$e(this.persistence.referenceDelegate instanceof cc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new _A(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new qv((s=>cc.Vi(s,t)),this.serializer)}}class qd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VR.bind(null,this.syncEngine),await hR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new fR})()}createDatastore(e){const t=Cc(e.databaseInfo.databaseId),s=(function(l){return new GA(l)})(e.databaseInfo);return(function(l,h,m,g){return new JA(l,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,m){return new eR(s,o,l,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Dy(this.syncEngine,t,0)),(function(){return Ay.C()?new Ay:new qA})())}createSyncEngine(e,t){return(function(o,l,h,m,g,v,w){const A=new TR(o,l,h,m,g,v);return w&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Re(o);ne(Is,"RemoteStore shutting down."),l.Ia.add(5),await fl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}qd.provider={build:()=>new qd};/**
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
 */class bR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="FirestoreClient";class FR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Nf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function vd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Vi,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Hv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ci("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ci("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function Vy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await UR(r);ne(Vi,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>Cy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Cy(e.remoteStore,o))),r._onlineComponents=e}async function UR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Vi,"Using user provided OfflineComponentProvider");try{await vd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ci("Error using user provided cache. Falling back to memory cache: "+t),await vd(r,new dc)}}else ne(Vi,"Using default OfflineComponentProvider"),await vd(r,new MR(void 0));return r._offlineComponents}async function uE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Vi,"Using user provided OnlineComponentProvider"),await Vy(r,r._uninitializedComponentsProvider._online)):(ne(Vi,"Using default OnlineComponentProvider"),await Vy(r,new qd))),r._onlineComponents}function jR(r){return uE(r).then((e=>e.syncEngine))}async function Oy(r){const e=await uE(r),t=e.eventManager;return t.onListen=IR.bind(null,e.syncEngine),t.onUnlisten=RR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CR.bind(null,e.syncEngine),t}/**
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
 */function cE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Ly=new Map;/**
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
 */const hE="firestore.googleapis.com",My=!0;class by{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hE,this.ssl=My}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:My;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$v;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gA)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new by({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new by(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new H1;switch(s.type){case"firstParty":return new Q1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ly.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Ly.delete(t),s.terminate())})(this),Promise.resolve()}}function zR(r,e,t,s={}){var o;r=Ai(r,Nc);const l=Oo(e),h=r._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(o_(`https://${g}`),a_("Firestore",!0)),h.host!==hE&&h.host!==g&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!ys(v,m)&&(r._setSettings(v),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Ht.MOCK_USER;else{w=Xw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const P=s.mockUserToken.sub||s.mockUserToken.user_id;if(!P)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ht(P)}r._authCredentials=new W1(new ev(w,A))}}/**
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
 */class Mi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Mi(this.firestore,e,this._query)}}class Et{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(cl(t,Et._jsonSchema))return new Et(e,s||null,new de(Xe.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:vt("string",Et._jsonSchemaVersion),referencePath:vt("string")};class Ri extends Mi{constructor(e,t,s){super(e,t,mf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new de(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function dE(r,e,...t){if(r=Ct(r),nv("collection","path",e),r instanceof Nc){const s=Xe.fromString(e,...t);return Qg(s),new Ri(r,null,s)}{if(!(r instanceof Et||r instanceof Ri))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Xe.fromString(e,...t));return Qg(s),new Ri(r.firestore,null,s)}}function Dc(r,e,...t){if(r=Ct(r),arguments.length===1&&(e=uf.newId()),nv("doc","path",e),r instanceof Nc){const s=Xe.fromString(e,...t);return Gg(s),new Et(r,null,new de(s))}{if(!(r instanceof Et||r instanceof Ri))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Xe.fromString(e,...t));return Gg(s),new Et(r.firestore,r instanceof Ri?r.converter:null,new de(s))}}/**
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
 */const Fy="AsyncQueue";class Uy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Kv(this,"async_queue_retry"),this.oc=()=>{const s=_d();s&&ne(Fy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=_d();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=_d();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ms;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Uo(e))throw e;ne(Fy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,zr("INTERNAL UNHANDLED ERROR: ",jy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=kf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&_e(47125,{hc:jy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function jy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function zy(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Vo extends Nc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Uy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uy(e),this._firestoreClient=void 0,await e}}}function BR(r,e){const t=typeof r=="object"?r:h_(),s=typeof r=="string"?r:ic,o=Qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=Qw("firestore");l&&zR(o,...l)}return o}function fE(r){if(r._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||$R(r),r._firestoreClient}function $R(r){var e,t,s;const o=r._freezeSettings(),l=(function(m,g,v,w){return new hS(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,cE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new FR(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Ut.fromBase64String(e))}catch(t){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pn(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cl(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:vt("string",Pn._jsonSchemaVersion),bytes:vt("string")};/**
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
 */class Of{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mr._jsonSchemaVersion}}static fromJSON(e){if(cl(e,mr._jsonSchema))return new mr(e.latitude,e.longitude)}}mr._jsonSchemaVersion="firestore/geoPoint/1.0",mr._jsonSchema={type:vt("string",mr._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
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
 */class gr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cl(e,gr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new gr(e.vectorValues);throw new re($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gr._jsonSchemaVersion="firestore/vectorValue/1.0",gr._jsonSchema={type:vt("string",gr._jsonSchemaVersion),vectorValues:vt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=/^__.*__$/;class HR{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new hl(e,this.data,t,this.fieldTransforms)}}function pE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ec:r})}}class Mf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return fc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pE(this.Ec)&&qR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class WR{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Cc(e)}Dc(e,t,s,o=!1){return new Mf({Ec:e,methodName:t,bc:s,path:Ft.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bf(r){const e=r._freezeSettings(),t=Cc(r._databaseId);return new WR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function mE(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);_E("Data must be an object, but it was:",h,s);const m=gE(s,h);let g,v;if(l.merge)g=new Kn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const A of l.mergeFields){const P=GR(e,A,t);if(!h.contains(P))throw new re($.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);YR(w,P)||w.push(P)}g=new Kn(w),v=h.fieldTransforms.filter((A=>g.covers(A.field)))}else g=null,v=h.fieldTransforms;return new HR(new Cn(m),g,v)}class Ff extends Lf{_toFieldTransform(e){return new bS(e.path,new tl)}isEqual(e){return e instanceof Ff}}function KR(r,e,t,s=!1){return Uf(t,r.Dc(s?4:3,e))}function Uf(r,e){if(yE(r=Ct(r)))return _E("Unsupported field value:",e,r),gE(r,e);if(r instanceof Lf)return(function(s,o){if(!pE(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const m of s){let g=Uf(m,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return OS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=et.fromDate(s);return{timestampValue:uc(o.serializer,l)}}if(s instanceof et){const l=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:uc(o.serializer,l)}}if(s instanceof mr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:Mv(o.serializer,s._byteString)};if(s instanceof Et){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ef(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof gr)return(function(h,m){return{mapValue:{fields:{[hv]:{stringValue:dv},[sc]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.wc("VectorValues must only contain numeric values.");return gf(m.serializer,v)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${_c(s)}`)})(r,e)}function gE(r,e){const t={};return sv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(r,((s,o)=>{const l=Uf(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function yE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof mr||r instanceof Pn||r instanceof Et||r instanceof Lf||r instanceof gr)}function _E(r,e,t){if(!yE(t)||!rv(t)){const s=_c(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function GR(r,e,t){if((e=Ct(e))instanceof Of)return e._internalPath;if(typeof e=="string")return vE(r,e);throw fc("Field path arguments must be of type string or ",r,!1,void 0,t)}const QR=new RegExp("[~\\*/\\[\\]]");function vE(r,e,t){if(e.search(QR)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Of(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function fc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new re($.INVALID_ARGUMENT,m+r+g)}function YR(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class EE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XR extends EE{data(){return super.data()}}function jf(r,e){return typeof e=="string"?vE(r,e):e instanceof Of?e._internalPath:e._delegate._internalPath}/**
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
 */function JR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zf{}class Bf extends zf{}function ZR(r,e,...t){let s=[];e instanceof zf&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof qf)).length,m=l.filter((g=>g instanceof $f)).length;if(h>1||h>0&&m>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class $f extends Bf{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new $f(e,t,s)}_apply(e){const t=this._parse(e);return wE(e._query,t),new Mi(e.firestore,e.converter,Ld(e._query,t))}_parse(e){const t=bf(e.firestore);return(function(l,h,m,g,v,w,A){let P;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){$y(A,w);const K=[];for(const Y of A)K.push(By(g,l,Y));P={arrayValue:{values:K}}}else P=By(g,l,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||$y(A,w),P=KR(m,h,A,w==="in"||w==="not-in");return _t.create(v,w,P)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class qf extends zf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Yn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const m=l.getFlattenedFilters();for(const g of m)wE(h,g),h=Ld(h,g)})(e._query,t),new Mi(e.firestore,e.converter,Ld(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hf extends Bf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hf(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new el(l,h)})(e._query,this._field,this._direction);return new Mi(e.firestore,e.converter,(function(o,l){const h=o.explicitOrderBy.concat([l]);return new jo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function eC(r,e="asc"){const t=e,s=jf("orderBy",r);return Hf._create(s,t)}class Wf extends Bf{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Wf(e,t,s)}_apply(e){return new Mi(e.firestore,e.converter,ac(e._query,this._limit,this._limitType))}}function tC(r){return Wf._create("limit",r,"F")}function By(r,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ev(e)&&t.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Xe.fromString(t));if(!de.isDocumentKey(s))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ry(r,new de(s))}if(t instanceof Et)return ry(r,t._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(t)}.`)}function $y(r,e){if(!Array.isArray(r)||r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wE(r,e){const t=(function(o,l){for(const h of o)for(const m of h.getFlattenedFilters())if(l.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class nC{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return As(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[sc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>dt(h.doubleValue)));return new gr(l)}convertGeoPoint(e){return new mr(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=wc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const t=ki(e);return new et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Xe.fromString(e);$e(Bv(s),9688,{name:e});const o=new Ja(s.get(1),s.get(3)),l=new de(s.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function TE(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Ua{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends EE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:vt("string",gs._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class Gu extends gs{data(e={}){return super.data(e)}}class Ro{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ua(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Gu(this._firestore,this._userDataWriter,s.key,s,new Ua(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new Gu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ua(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>l||m.type!==3)).map((m=>{const g=new Gu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ua(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:rC(m.type),doc:g,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:r})}}Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:vt("string",Ro._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};class IE extends nC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function SE(r,e,t){r=Ai(r,Et);const s=Ai(r.firestore,Vo),o=TE(r.converter,e,t);return Kf(s,[mE(bf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Qn.none())])}function iC(r){return Kf(Ai(r.firestore,Vo),[new yf(r._key,Qn.none())])}function sC(r,e){const t=Ai(r.firestore,Vo),s=Dc(r),o=TE(r.converter,e);return Kf(t,[mE(bf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Qn.exists(!1))]).then((()=>s))}function qy(r,...e){var t,s,o;r=Ct(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||zy(e[h])||(l=e[h++]);const m={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(zy(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,w;if(r instanceof Et)v=Ai(r.firestore,Vo),w=mf(r._key.path),g={next:A=>{e[h]&&e[h](oC(v,r,A))},error:e[h+1],complete:e[h+2]};else{const A=Ai(r,Mi);v=Ai(A.firestore,Vo),w=A._query;const P=new IE(v);g={next:j=>{e[h]&&e[h](new Ro(v,P,A,j))},error:e[h+1],complete:e[h+2]},JR(r._query)}return(function(P,j,K,Y){const H=new bR(Y),ge=new _R(j,H,K);return P.asyncQueue.enqueueAndForget((async()=>pR(await Oy(P),ge))),()=>{H.Ou(),P.asyncQueue.enqueueAndForget((async()=>mR(await Oy(P),ge)))}})(fE(v),w,m,g)}function Kf(r,e){return(function(s,o){const l=new ms;return s.asyncQueue.enqueueAndForget((async()=>PR(await jR(s),o,l))),l.promise})(fE(r),e)}function oC(r,e,t){const s=t.docs.get(e._key),o=new IE(r);return new gs(r,o,e._key,s,new Ua(t.hasPendingWrites,t.fromCache),e.converter)}function Gf(){return new Ff("serverTimestamp")}(function(e,t=!0){(function(o){bo=o})(Lo),Co(new _s("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),m=new Vo(new K1(s.getProvider("auth-internal")),new Y1(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(v.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),m._setSettings(l),m}),"PUBLIC").setMultipleInstances(!0)),Ii($g,qg,e),Ii($g,qg,"esm2017")})();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AE=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=Ve.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...m},g)=>Ve.createElement("svg",{ref:g,...lC,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:AE("lucide",o),...m},[...h.map(([v,w])=>Ve.createElement(v,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=(r,e)=>{const t=Ve.forwardRef(({className:s,...o},l)=>Ve.createElement(uC,{ref:l,iconNode:e,className:AE(`lucide-${aC(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=Nn("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=Nn("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=Nn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Nn("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Nn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=Nn("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=Nn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=Nn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Nn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Nn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Nn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Nn("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);var _C="firebase",vC="11.10.0";/**
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
 */Ii(_C,vC,"app");const EC={apiKey:"AIzaSyB22Y06cUUhfSweTGIhHaziHCJTytUkqLI",authDomain:"quadchat-cf697.firebaseapp.com",projectId:"quadchat-cf697",storageBucket:"quadchat-cf697.firebasestorage.app",messagingSenderId:"738776494798",appId:"1:738776494798:web:58454b37922a44fa98969f"},RE=c_(EC),yo=$1(RE),ml=BR(RE),Gy=dE(ml,"messages"),wC=dE(ml,"users"),TC=new Lr,IC=["ariqipraditya@gmail.com"],Qy=3600*1e3,SC="quadchat-keys",Ss="keys",AC=new TextEncoder,RC=new TextDecoder;function Wa(r){return btoa(String.fromCharCode(...new Uint8Array(r)))}function Ka(r){return Uint8Array.from(atob(r),e=>e.charCodeAt(0))}function Qf(){return new Promise((r,e)=>{const t=indexedDB.open(SC,1);t.onupgradeneeded=()=>{t.result.createObjectStore(Ss)},t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)})}async function CC(r){const e=await Qf();return new Promise((t,s)=>{const l=e.transaction(Ss,"readonly").objectStore(Ss).get(r);l.onsuccess=()=>t(l.result||null),l.onerror=()=>s(l.error)})}async function Yy(r,e){const t=await Qf();return new Promise((s,o)=>{const h=t.transaction(Ss,"readwrite").objectStore(Ss).put(e,r);h.onsuccess=()=>s(),h.onerror=()=>o(h.error)})}async function PC(r){const e=await Qf();return new Promise((t,s)=>{const l=e.transaction(Ss,"readwrite").objectStore(Ss).delete(r);l.onsuccess=()=>t(),l.onerror=()=>s(l.error)})}async function kC(){const r=await crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]),e=await crypto.subtle.exportKey("spki",r.publicKey),t=await crypto.subtle.exportKey("pkcs8",r.privateKey);return{version:crypto.randomUUID(),publicKey:Wa(e),privateKey:Wa(t),createdAt:Date.now()}}async function NC(r){return crypto.subtle.importKey("spki",Ka(r),{name:"RSA-OAEP",hash:"SHA-256"},!1,["encrypt"])}async function DC(r){return crypto.subtle.importKey("pkcs8",Ka(r),{name:"RSA-OAEP",hash:"SHA-256"},!1,["decrypt"])}async function xC(r,e){const t=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),s=crypto.getRandomValues(new Uint8Array(12)),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:s},t,AC.encode(r)),l=await crypto.subtle.exportKey("raw",t),h={};return await Promise.all(e.map(async m=>{const g=await NC(m.publicKey),v=await crypto.subtle.encrypt({name:"RSA-OAEP"},g,l);h[m.id]=Wa(v)})),{ciphertext:Wa(o),iv:Wa(s),encryptedKeys:h}}async function VC(r,e,t){var g;const s=(g=r.encryptedKeys)==null?void 0:g[t];if(!s||!(e!=null&&e.privateKey))return null;const o=await DC(e.privateKey),l=await crypto.subtle.decrypt({name:"RSA-OAEP"},o,Ka(s)),h=await crypto.subtle.importKey("raw",l,{name:"AES-GCM"},!1,["decrypt"]),m=await crypto.subtle.decrypt({name:"AES-GCM",iv:Ka(r.iv)},h,Ka(r.ciphertext));return RC.decode(m)}async function OC(r,e,t){for(const s of e)try{const o=await VC(r,s,t);if(o!==null)return o}catch{}return null}function Xy(r){return r?Array.isArray(r.keys)?r.keys:r.publicKey&&r.privateKey?[r]:[]:[]}function LC(r){return r!=null&&r.toDate?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit"}).format(r.toDate()):"sending"}function Va(r){switch(r.code){case"auth/email-already-in-use":return"That email already has an account. Sign in instead.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":return"The email or password is incorrect.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/operation-not-allowed":return"This sign-in method is not enabled in Firebase.";case"auth/popup-closed-by-user":return"The Google sign-in popup was closed before finishing.";case"auth/popup-blocked":return"Your browser blocked the Google sign-in popup.";case"auth/unauthorized-domain":return"This domain is not authorized in Firebase Authentication settings.";case"auth/requires-recent-login":return"Please sign out, sign back in, and try again.";default:return r.message}}function MC(r){return r.split(/\s+/).filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"?"}function Jy(r,e="Anonymous"){var t;return((t=r==null?void 0:r.displayName)==null?void 0:t.trim())||(r==null?void 0:r.email)||e}function Hd(r){return IC.includes((r||"").toLowerCase())}async function Fu(r,e){if(!r)return;const t=e||r.displayName||r.email||"User";await SE(Dc(ml,"users",r.uid),{id:r.uid,displayName:t,email:r.email||"",isAdmin:Hd(r.email),photoURL:r.photoURL||"",role:Hd(r.email)?"admin":"member",updatedAt:Gf()},{merge:!0})}async function Zy(r,e){await SE(Dc(ml,"users",r.uid),{id:r.uid,publicKey:e.publicKey,keyVersion:e.version,keyUpdatedAt:Gf()},{merge:!0})}function bC(){const[r,e]=Ve.useState(null),[t,s]=Ve.useState(!1),[o,l]=Ve.useState("signin"),[h,m]=Ve.useState(""),[g,v]=Ve.useState(""),[w,A]=Ve.useState(""),[P,j]=Ve.useState(""),[K,Y]=Ve.useState([]),[H,ge]=Ve.useState({}),[he,me]=Ve.useState({}),[ve,We]=Ve.useState(null),[Ce,D]=Ve.useState([]),[I,R]=Ve.useState(!1),[k,V]=Ve.useState(!1),[O,S]=Ve.useState(!1),[rt,ft]=Ve.useState(!1),[wt,ze]=Ve.useState(""),[Z,ce]=Ve.useState(""),[ee,x]=Ve.useState(""),[B,ie]=Ve.useState(""),Pe=Ve.useRef(null),Ie=r?he[r.uid]:null,xe=(Ie==null?void 0:Ie.isAdmin)||Hd((r==null?void 0:r.email)||""),Ue=Ve.useMemo(()=>Object.values(he).filter(ue=>ue.publicKey),[he]),ke=Ve.useMemo(()=>Jy(Ie,(r==null?void 0:r.displayName)||(r==null?void 0:r.email)||""),[Ie,r]);Ve.useEffect(()=>NI(yo,Se=>{e(Se),s(!0),Se&&Fu(Se).catch(we=>{x(we.message)})}),[]),Ve.useEffect(()=>{if(!r){We(null),D([]),ge({});return}let ue=!1;async function Se(){try{const Ae=await CC(r.uid),ut=Xy(Ae),qe=ut[ut.length-1],Jn=!qe||Date.now()-qe.createdAt>=Qy,Zn=Jn?await kC():qe,at=Jn?[...ut,Zn]:ut;Jn&&await Yy(r.uid,{activeVersion:Zn.version,keys:at}),await Zy(r,Zn),ue||(We(Zn),D(at))}catch(Ae){ue||x(Ae.message)}}Se();const we=window.setInterval(Se,Qy);return()=>{ue=!0,window.clearInterval(we)}},[r]),Ve.useEffect(()=>{r&&ze(ke||"")},[ke,r]),Ve.useEffect(()=>{if(!r){me({});return}return qy(wC,Se=>{me(Se.docs.reduce((we,Ae)=>(we[Ae.id]={id:Ae.id,...Ae.data()},we),{}))},Se=>{x(Se.message)})},[r]),Ve.useEffect(()=>{if(!r){Y([]);return}const ue=ZR(Gy,eC("createdAt","asc"),tC(100));return qy(ue,we=>{Y(we.docs.map(Ae=>({id:Ae.id,...Ae.data()}))),x("")},we=>{x(we.message)})},[r]),Ve.useEffect(()=>{var ue;(ue=Pe.current)==null||ue.scrollIntoView({behavior:"smooth",block:"end"})},[K]),Ve.useEffect(()=>{if(!r||Ce.length===0){ge({});return}let ue=!1;async function Se(){const we={};await Promise.all(K.map(async Ae=>{if(!Ae.ciphertext){we[Ae.id]=Ae.text||"";return}try{we[Ae.id]=await OC(Ae,Ce,r.uid)}catch{we[Ae.id]=null}})),ue||ge(we)}return Se(),()=>{ue=!0}},[Ce,K,r]);async function Ke(ue){ue.preventDefault();const Se=h.trim(),we=g.trim(),Ae=w.trim(),ut=o==="signup";if(!(!we||!Ae||ut&&!Se)){x("");try{if(ut){const qe=await II(yo,we,Ae);await xg(qe.user,{displayName:Se}),await Fu(qe.user,Se),e({...qe.user,displayName:Se})}else await SI(yo,we,Ae);m(""),v(""),A("")}catch(qe){x(Va(qe))}}}async function pt(){x("");try{const ue=await JI(yo,TC);await Fu(ue.user),m(""),v(""),A("")}catch(ue){x(Va(ue))}}async function gn(){try{await DI(yo),j(""),x("")}catch(ue){x(Va(ue))}}function qr(){ze(ke||""),ce(""),ie(""),x(""),S(!1),ft(!0)}async function Xn(ue){ue.preventDefault();const Se=wt.trim(),we=Z.trim();if(!(!r||!Se&&!we)){V(!0),ie(""),x("");try{Se&&Se!==r.displayName&&await xg(r,{displayName:Se}),Se&&await Fu(r,Se),we&&await RI(r,we),await r.reload(),e(yo.currentUser),ce(""),ie("Settings saved.")}catch(Ae){ie(Va(Ae))}finally{V(!1)}}}async function vr(){if(!(!r||!window.confirm("Remove this account? This cannot be undone."))){V(!0),ie("");try{await PC(r.uid),await iC(Dc(ml,"users",r.uid)),await xI(r),ft(!1),j(""),x("")}catch(Se){ie(Va(Se))}finally{V(!1)}}}async function Hr(ue){ue.preventDefault();const Se=P.trim();if(!(!Se||!ke||I)){R(!0),x("");try{const we=Ue;if(!ve||we.length===0){x("Secure keys are still being prepared. Try again in a moment.");return}const Ae=await xC(Se,we);await sC(Gy,{...Ae,userId:r.uid,encryption:"RSA-OAEP-2048/AES-GCM",createdAt:Gf()}),j("")}catch(we){x(we.message)}finally{R(!1)}}}function bi(){if(!r||!ve)return;const ue={app:"QuadChat",uid:r.uid,activeVersion:ve.version,keys:Ce},Se=new Blob([JSON.stringify(ue,null,2)],{type:"application/json"}),we=URL.createObjectURL(Se),Ae=document.createElement("a");Ae.href=we,Ae.download=`quadchat-recovery-${r.uid}.json`,Ae.click(),URL.revokeObjectURL(we)}async function Fi(ue){var we;const Se=(we=ue.target.files)==null?void 0:we[0];if(!(!r||!Se))try{const Ae=JSON.parse(await Se.text()),ut=Xy(Ae),qe=ut[ut.length-1];if(Ae.uid!==r.uid||!(qe!=null&&qe.publicKey)||!(qe!=null&&qe.privateKey)||!(qe!=null&&qe.version)){ie("That recovery key does not match this account.");return}await Yy(r.uid,{activeVersion:qe.version,keys:ut}),await Zy(r,qe),We(qe),D(ut),ie("Recovery key uploaded.")}catch{ie("Could not read that recovery key file.")}finally{ue.target.value=""}}return z.jsxs("main",{className:"app-shell",children:[t?r?z.jsxs("section",{className:"chat-panel","aria-label":"QuadChat room",children:[z.jsxs("header",{className:"chat-header",children:[z.jsxs("div",{className:"chat-title",children:[z.jsx("div",{className:"brand-mark","aria-hidden":"true",children:z.jsx(bu,{size:26,strokeWidth:2.3})}),z.jsxs("div",{children:[z.jsx("h1",{children:"QuadChat"}),z.jsxs("p",{children:["Signed in as ",ke," · ",K.length," messages"]}),xe?z.jsx("span",{className:"admin-badge",children:"Admin"}):null]})]}),z.jsxs("button",{className:"icon-text-button",type:"button",onClick:gn,title:"Sign out",children:[z.jsx(Wy,{size:18}),z.jsx("span",{children:"Sign out"})]}),z.jsxs("div",{className:"profile-actions",children:[z.jsx("button",{className:"avatar-button",type:"button",onClick:()=>S(ue=>!ue),title:"Profile options",children:r.photoURL?z.jsx("img",{src:r.photoURL,alt:""}):z.jsx("span",{children:MC(ke)})}),O?z.jsxs("div",{className:"profile-menu",children:[z.jsxs("button",{type:"button",onClick:qr,children:[z.jsx(pC,{size:17}),z.jsx("span",{children:"Settings"})]}),z.jsxs("button",{type:"button",onClick:gn,children:[z.jsx(Wy,{size:17}),z.jsx("span",{children:"Sign out"})]})]}):null]})]}),ee?z.jsx("div",{className:"error-banner",children:ee}):null,ve?null:z.jsx("div",{className:"error-banner secure-banner",children:"Preparing secure message keys."}),z.jsxs("div",{className:"messages",role:"log","aria-live":"polite",children:[K.length===0?z.jsxs("div",{className:"empty-state",children:[z.jsx(bu,{size:42}),z.jsx("p",{children:"No messages yet. Say hello when you are ready."})]}):K.map(ue=>{const Se=he[ue.userId],we=Jy(Se,ue.name),Ae=ue.userId===r.uid,ut=H[ue.id];return z.jsxs("article",{className:`message ${Ae?"message-mine":""}`,children:[z.jsxs("div",{className:"message-meta",children:[z.jsx("strong",{children:we}),z.jsx("span",{children:LC(ue.createdAt)})]}),z.jsx("p",{children:ut===null?"Encrypted message unavailable on this device.":ut||"Decrypting..."})]},ue.id)}),z.jsx("div",{ref:Pe})]}),z.jsxs("form",{className:"composer",onSubmit:Hr,children:[z.jsx("input",{type:"text",value:P,onChange:ue=>j(ue.target.value),placeholder:"Type a message",maxLength:500}),z.jsx("button",{type:"submit","aria-label":"Send message",title:"Send message",disabled:!P.trim()||!ke||I||!ve,children:z.jsx(fC,{size:20})})]})]}):z.jsxs("section",{className:"signin-panel","aria-label":"Sign in to QuadChat",children:[z.jsxs("div",{className:"signin-brand",children:[z.jsx("div",{className:"brand-mark","aria-hidden":"true",children:z.jsx(bu,{size:28,strokeWidth:2.3})}),z.jsxs("div",{children:[z.jsx("h1",{children:"QuadChat"}),z.jsx("p",{children:o==="signup"?"Create an account to start chatting.":"Sign in to continue chatting."})]})]}),z.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication view",children:[z.jsx("button",{className:o==="signin"?"active":"",type:"button",onClick:()=>{l("signin"),x("")},children:"Sign in"}),z.jsx("button",{className:o==="signup"?"active":"",type:"button",onClick:()=>{l("signup"),x("")},children:"Sign up"})]}),z.jsxs("form",{className:"signin-form",onSubmit:Ke,children:[o==="signup"?z.jsxs(z.Fragment,{children:[z.jsxs("label",{htmlFor:"signin-name",children:[z.jsx(Ky,{size:18}),z.jsx("span",{children:"Display name"})]}),z.jsx("input",{id:"signin-name",type:"text",value:h,onChange:ue=>m(ue.target.value),placeholder:"Enter your name",autoComplete:"name",maxLength:32})]}):null,z.jsxs("label",{htmlFor:"signin-email",children:[z.jsx(Ky,{size:18}),z.jsx("span",{children:"Email"})]}),z.jsx("input",{id:"signin-email",type:"email",value:g,onChange:ue=>v(ue.target.value),placeholder:"you@example.com",autoComplete:"email",maxLength:120}),z.jsxs("label",{htmlFor:"signin-password",children:[z.jsx(Hy,{size:18}),z.jsx("span",{children:"Password"})]}),z.jsx("input",{id:"signin-password",type:"password",value:w,onChange:ue=>A(ue.target.value),placeholder:"Enter your password",autoComplete:"current-password",maxLength:64}),ee?z.jsx("div",{className:"error-banner inline-error",children:ee}):null,z.jsx("button",{type:"submit",disabled:!g.trim()||!w.trim()||o==="signup"&&!h.trim(),children:o==="signup"?"Create account":"Sign in"})]}),z.jsx("div",{className:"auth-divider",children:z.jsx("span",{children:"or"})}),z.jsxs("button",{className:"google-button",type:"button",onClick:pt,children:[z.jsx(cC,{size:18}),z.jsx("span",{children:"Continue with Google"})]}),z.jsxs("div",{className:"mode-note",children:[z.jsx(mC,{size:18}),z.jsx("span",{children:"Production mode: Firebase Authentication manages accounts."})]})]}):z.jsx("section",{className:"signin-panel","aria-label":"Loading QuadChat",children:z.jsxs("div",{className:"signin-brand",children:[z.jsx("div",{className:"brand-mark","aria-hidden":"true",children:z.jsx(bu,{size:28,strokeWidth:2.3})}),z.jsxs("div",{children:[z.jsx("h1",{children:"QuadChat"}),z.jsx("p",{children:"Checking your session."})]})]})}),rt&&r?z.jsx("div",{className:"modal-backdrop",role:"presentation",children:z.jsxs("section",{className:"settings-modal","aria-label":"Account settings",role:"dialog","aria-modal":"true",children:[z.jsxs("header",{className:"settings-header",children:[z.jsxs("div",{children:[z.jsx("h2",{children:"Settings"}),z.jsx("p",{children:r.email}),z.jsxs("p",{children:["ID: ",r.uid]}),xe?z.jsx("p",{children:"Role: admin"}):null]}),z.jsx("button",{className:"modal-close",type:"button",onClick:()=>ft(!1),title:"Close settings",children:"X"})]}),z.jsxs("form",{className:"settings-form",onSubmit:Xn,children:[z.jsxs("label",{htmlFor:"settings-name",children:[z.jsx(hC,{size:18}),z.jsx("span",{children:"Username"})]}),z.jsx("input",{id:"settings-name",type:"text",value:wt,onChange:ue=>ze(ue.target.value),maxLength:32,placeholder:"Your display name"}),z.jsxs("label",{htmlFor:"settings-password",children:[z.jsx(Hy,{size:18}),z.jsx("span",{children:"New password"})]}),z.jsx("input",{id:"settings-password",type:"password",value:Z,onChange:ue=>ce(ue.target.value),minLength:6,maxLength:64,placeholder:"Leave blank to keep current password",autoComplete:"new-password"}),B?z.jsx("div",{className:"error-banner inline-error settings-note",children:B}):null,z.jsxs("div",{className:"key-actions",children:[z.jsxs("button",{className:"secondary-button",type:"button",onClick:bi,disabled:!ve,children:[z.jsx(dC,{size:17}),z.jsx("span",{children:"Download recovery key"})]}),z.jsxs("label",{className:"upload-button",htmlFor:"recovery-key-upload",children:[z.jsx(yC,{size:17}),z.jsx("span",{children:"Upload recovery key"})]}),z.jsx("input",{id:"recovery-key-upload",className:"file-input",type:"file",accept:"application/json",onChange:Fi})]}),z.jsxs("div",{className:"settings-actions",children:[z.jsx("button",{type:"submit",disabled:k,children:"Save changes"}),z.jsxs("button",{className:"danger-button",type:"button",onClick:vr,disabled:k,children:[z.jsx(gC,{size:17}),z.jsx("span",{children:"Remove account"})]})]})]})]})}):null]})}jw.createRoot(document.getElementById("root")).render(z.jsx(Ow.StrictMode,{children:z.jsx(bC,{})}));
