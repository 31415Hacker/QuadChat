(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function y1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Rp={exports:{}},ou={},Ap={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function v1(){if(Bv)return Be;Bv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function T(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,q={};function W(M,G,he){this.props=M,this.context=G,this.refs=q,this.updater=he||D}W.prototype.isReactComponent={},W.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},W.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function fe(M,G,he){this.props=M,this.context=G,this.refs=q,this.updater=he||D}var ve=fe.prototype=new ge;ve.constructor=fe,z(ve,W.prototype),ve.isPureReactComponent=!0;var Ie=Array.isArray,ut=Object.prototype.hasOwnProperty,Pe={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(M,G,he){var Me,be={},je=null,Ge=null;if(G!=null)for(Me in G.ref!==void 0&&(Ge=G.ref),G.key!==void 0&&(je=""+G.key),G)ut.call(G,Me)&&!b.hasOwnProperty(Me)&&(be[Me]=G[Me]);var Qe=arguments.length-2;if(Qe===1)be.children=he;else if(1<Qe){for(var rt=Array(Qe),Pt=0;Pt<Qe;Pt++)rt[Pt]=arguments[Pt+2];be.children=rt}if(M&&M.defaultProps)for(Me in Qe=M.defaultProps,Qe)be[Me]===void 0&&(be[Me]=Qe[Me]);return{$$typeof:n,type:M,key:je,ref:Ge,props:be,_owner:Pe.current}}function k(M,G){return{$$typeof:n,type:M.type,key:G,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function O(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(he){return G[he]})}var V=/\/+/g;function A(M,G){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):G.toString(36)}function ct(M,G,he,Me,be){var je=typeof M;(je==="undefined"||je==="boolean")&&(M=null);var Ge=!1;if(M===null)Ge=!0;else switch(je){case"string":case"number":Ge=!0;break;case"object":switch(M.$$typeof){case n:case e:Ge=!0}}if(Ge)return Ge=M,be=be(Ge),M=Me===""?"."+A(Ge,0):Me,Ie(be)?(he="",M!=null&&(he=M.replace(V,"$&/")+"/"),ct(be,G,he,"",function(Pt){return Pt})):be!=null&&(N(be)&&(be=k(be,he+(!be.key||Ge&&Ge.key===be.key?"":(""+be.key).replace(V,"$&/")+"/")+M)),G.push(be)),1;if(Ge=0,Me=Me===""?".":Me+":",Ie(M))for(var Qe=0;Qe<M.length;Qe++){je=M[Qe];var rt=Me+A(je,Qe);Ge+=ct(je,G,he,rt,be)}else if(rt=T(M),typeof rt=="function")for(M=rt.call(M),Qe=0;!(je=M.next()).done;)je=je.value,rt=Me+A(je,Qe++),Ge+=ct(je,G,he,rt,be);else if(je==="object")throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ge}function kt(M,G,he){if(M==null)return M;var Me=[],be=0;return ct(M,Me,"","",function(je){return G.call(he,je,be++)}),Me}function St(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(he){(M._status===0||M._status===-1)&&(M._status=1,M._result=he)},function(he){(M._status===0||M._status===-1)&&(M._status=2,M._result=he)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var et={current:null},ee={transition:null},_e={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Pe};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:kt,forEach:function(M,G,he){kt(M,function(){G.apply(this,arguments)},he)},count:function(M){var G=0;return kt(M,function(){G++}),G},toArray:function(M){return kt(M,function(G){return G})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Be.Component=W,Be.Fragment=t,Be.Profiler=s,Be.PureComponent=fe,Be.StrictMode=r,Be.Suspense=f,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Be.act=ae,Be.cloneElement=function(M,G,he){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Me=z({},M.props),be=M.key,je=M.ref,Ge=M._owner;if(G!=null){if(G.ref!==void 0&&(je=G.ref,Ge=Pe.current),G.key!==void 0&&(be=""+G.key),M.type&&M.type.defaultProps)var Qe=M.type.defaultProps;for(rt in G)ut.call(G,rt)&&!b.hasOwnProperty(rt)&&(Me[rt]=G[rt]===void 0&&Qe!==void 0?Qe[rt]:G[rt])}var rt=arguments.length-2;if(rt===1)Me.children=he;else if(1<rt){Qe=Array(rt);for(var Pt=0;Pt<rt;Pt++)Qe[Pt]=arguments[Pt+2];Me.children=Qe}return{$$typeof:n,type:M.type,key:be,ref:je,props:Me,_owner:Ge}},Be.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},Be.createElement=C,Be.createFactory=function(M){var G=C.bind(null,M);return G.type=M,G},Be.createRef=function(){return{current:null}},Be.forwardRef=function(M){return{$$typeof:d,render:M}},Be.isValidElement=N,Be.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:St}},Be.memo=function(M,G){return{$$typeof:g,type:M,compare:G===void 0?null:G}},Be.startTransition=function(M){var G=ee.transition;ee.transition={};try{M()}finally{ee.transition=G}},Be.unstable_act=ae,Be.useCallback=function(M,G){return et.current.useCallback(M,G)},Be.useContext=function(M){return et.current.useContext(M)},Be.useDebugValue=function(){},Be.useDeferredValue=function(M){return et.current.useDeferredValue(M)},Be.useEffect=function(M,G){return et.current.useEffect(M,G)},Be.useId=function(){return et.current.useId()},Be.useImperativeHandle=function(M,G,he){return et.current.useImperativeHandle(M,G,he)},Be.useInsertionEffect=function(M,G){return et.current.useInsertionEffect(M,G)},Be.useLayoutEffect=function(M,G){return et.current.useLayoutEffect(M,G)},Be.useMemo=function(M,G){return et.current.useMemo(M,G)},Be.useReducer=function(M,G,he){return et.current.useReducer(M,G,he)},Be.useRef=function(M){return et.current.useRef(M)},Be.useState=function(M){return et.current.useState(M)},Be.useSyncExternalStore=function(M,G,he){return et.current.useSyncExternalStore(M,G,he)},Be.useTransition=function(){return et.current.useTransition()},Be.version="18.3.1",Be}var Wv;function Km(){return Wv||(Wv=1,Ap.exports=v1()),Ap.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function E1(){if($v)return ou;$v=1;var n=Km(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var v,w={},T=null,D=null;g!==void 0&&(T=""+g),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(D=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(w[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:D,props:w,_owner:s.current}}return ou.Fragment=t,ou.jsx=u,ou.jsxs=u,ou}var qv;function w1(){return qv||(qv=1,Rp.exports=E1()),Rp.exports}var R=w1(),oe=Km();const T1=y1(oe);var fh={},kp={exports:{}},Wn={},Pp={exports:{}},Np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function I1(){return Hv||(Hv=1,(function(n){function e(ee,_e){var ae=ee.length;ee.push(_e);e:for(;0<ae;){var M=ae-1>>>1,G=ee[M];if(0<s(G,_e))ee[M]=_e,ee[ae]=G,ae=M;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var _e=ee[0],ae=ee.pop();if(ae!==_e){ee[0]=ae;e:for(var M=0,G=ee.length,he=G>>>1;M<he;){var Me=2*(M+1)-1,be=ee[Me],je=Me+1,Ge=ee[je];if(0>s(be,ae))je<G&&0>s(Ge,be)?(ee[M]=Ge,ee[je]=ae,M=je):(ee[M]=be,ee[Me]=ae,M=Me);else if(je<G&&0>s(Ge,ae))ee[M]=Ge,ee[je]=ae,M=je;else break e}}return _e}function s(ee,_e){var ae=ee.sortIndex-_e.sortIndex;return ae!==0?ae:ee.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],g=[],v=1,w=null,T=3,D=!1,z=!1,q=!1,W=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(ee){for(var _e=t(g);_e!==null;){if(_e.callback===null)r(g);else if(_e.startTime<=ee)r(g),_e.sortIndex=_e.expirationTime,e(f,_e);else break;_e=t(g)}}function Ie(ee){if(q=!1,ve(ee),!z)if(t(f)!==null)z=!0,St(ut);else{var _e=t(g);_e!==null&&et(Ie,_e.startTime-ee)}}function ut(ee,_e){z=!1,q&&(q=!1,ge(C),C=-1),D=!0;var ae=T;try{for(ve(_e),w=t(f);w!==null&&(!(w.expirationTime>_e)||ee&&!O());){var M=w.callback;if(typeof M=="function"){w.callback=null,T=w.priorityLevel;var G=M(w.expirationTime<=_e);_e=n.unstable_now(),typeof G=="function"?w.callback=G:w===t(f)&&r(f),ve(_e)}else r(f);w=t(f)}if(w!==null)var he=!0;else{var Me=t(g);Me!==null&&et(Ie,Me.startTime-_e),he=!1}return he}finally{w=null,T=ae,D=!1}}var Pe=!1,b=null,C=-1,k=5,N=-1;function O(){return!(n.unstable_now()-N<k)}function V(){if(b!==null){var ee=n.unstable_now();N=ee;var _e=!0;try{_e=b(!0,ee)}finally{_e?A():(Pe=!1,b=null)}}else Pe=!1}var A;if(typeof fe=="function")A=function(){fe(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,kt=ct.port2;ct.port1.onmessage=V,A=function(){kt.postMessage(null)}}else A=function(){W(V,0)};function St(ee){b=ee,Pe||(Pe=!0,A())}function et(ee,_e){C=W(function(){ee(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){z||D||(z=!0,St(ut))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ee){switch(T){case 1:case 2:case 3:var _e=3;break;default:_e=T}var ae=T;T=_e;try{return ee()}finally{T=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,_e){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ae=T;T=ee;try{return _e()}finally{T=ae}},n.unstable_scheduleCallback=function(ee,_e,ae){var M=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?M+ae:M):ae=M,ee){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,ee={id:v++,callback:_e,priorityLevel:ee,startTime:ae,expirationTime:G,sortIndex:-1},ae>M?(ee.sortIndex=ae,e(g,ee),t(f)===null&&ee===t(g)&&(q?(ge(C),C=-1):q=!0,et(Ie,ae-M))):(ee.sortIndex=G,e(f,ee),z||D||(z=!0,St(ut))),ee},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ee){var _e=T;return function(){var ae=T;T=_e;try{return ee.apply(this,arguments)}finally{T=ae}}}})(Np)),Np}var Gv;function S1(){return Gv||(Gv=1,Pp.exports=I1()),Pp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function C1(){if(Kv)return Wn;Kv=1;var n=Km(),e=S1();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function T(i){return f.call(w,i)?!0:f.call(v,i)?!1:g.test(i)?w[i]=!0:(v[i]=!0,!1)}function D(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function z(i,o,l,h){if(o===null||typeof o>"u"||D(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function q(i,o,l,h,p,_,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=E}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){W[i]=new q(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];W[o]=new q(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){W[i]=new q(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){W[i]=new q(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){W[i]=new q(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){W[i]=new q(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){W[i]=new q(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){W[i]=new q(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){W[i]=new q(i,5,!1,i.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function fe(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(ge,fe);W[o]=new q(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(ge,fe);W[o]=new q(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(ge,fe);W[o]=new q(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){W[i]=new q(i,1,!1,i.toLowerCase(),null,!1,!1)}),W.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){W[i]=new q(i,1,!1,i.toLowerCase(),null,!0,!0)});function ve(i,o,l,h){var p=W.hasOwnProperty(o)?W[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(z(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var Ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ut=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),et=Symbol.for("react.offscreen"),ee=Symbol.iterator;function _e(i){return i===null||typeof i!="object"?null:(i=ee&&i[ee]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,M;function G(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var he=!1;function Me(i,o){if(!i||he)return"";he=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(B){var h=B}Reflect.construct(i,[],o)}else{try{o.call()}catch(B){h=B}i.call(o.prototype)}else{try{throw Error()}catch(B){h=B}i()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var p=B.stack.split(`
`),_=h.stack.split(`
`),E=p.length-1,S=_.length-1;1<=E&&0<=S&&p[E]!==_[S];)S--;for(;1<=E&&0<=S;E--,S--)if(p[E]!==_[S]){if(E!==1||S!==1)do if(E--,S--,0>S||p[E]!==_[S]){var P=`
`+p[E].replace(" at new "," at ");return i.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",i.displayName)),P}while(1<=E&&0<=S);break}}}finally{he=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?G(i):""}function be(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=Me(i.type,!1),i;case 11:return i=Me(i.type.render,!1),i;case 1:return i=Me(i.type,!0),i;default:return""}}function je(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case Pe:return"Portal";case k:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case ct:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case V:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case kt:return o=i.displayName||null,o!==null?o:je(i.type)||"Memo";case St:o=i._payload,i=i._init;try{return je(i(o))}catch{}}return null}function Ge(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Qe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function rt(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Pt(i){var o=rt(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,_.call(this,E)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Qn(i){i._valueTracker||(i._valueTracker=Pt(i))}function Ti(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=rt(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function sr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function or(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Tr(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Qe(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function nn(i,o){o=o.checked,o!=null&&ve(i,"checked",o,!1)}function Qr(i,o){nn(i,o);var l=Qe(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Ii(i,o.type,l):o.hasOwnProperty("defaultValue")&&Ii(i,o.type,Qe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function us(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ii(i,o,l){(o!=="number"||sr(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var wn=Array.isArray;function Ir(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Qe(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function ao(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Yr(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(wn(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Qe(l)}}function Sr(i,o){var l=Qe(o.value),h=Qe(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ne(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Ct(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oe(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Ct(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Tn,cs=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Tn.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Cr(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xr=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(i){Xr.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ar[o]=ar[i]})});function hs(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ar.hasOwnProperty(i)&&ar[i]?(""+o).trim():o+"px"}function xn(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=hs(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Jr=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(i,o){if(o){if(Jr[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function In(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lr=null;function Zr(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Si=null,Ht=null,hn=null;function Dn(i){if(i=ql(i)){if(typeof Si!="function")throw Error(t(280));var o=i.stateNode;o&&(o=kc(o),Si(i.stateNode,i.type,o))}}function dn(i){Ht?hn?hn.push(i):hn=[i]:Ht=i}function Ci(){if(Ht){var i=Ht,o=hn;if(hn=Ht=null,Dn(i),o)for(i=0;i<o.length;i++)Dn(o[i])}}function Yn(i,o){return i(o)}function fs(){}var bn=!1;function Ri(i,o,l){if(bn)return i(o,l);bn=!0;try{return Yn(i,o,l)}finally{bn=!1,(Ht!==null||hn!==null)&&(fs(),Ci())}}function Je(i,o){var l=i.stateNode;if(l===null)return null;var h=kc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var On=!1;if(d)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){On=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{On=!1}function Ai(i,o,l,h,p,_,E,S,P){var B=Array.prototype.slice.call(arguments,3);try{o.apply(l,B)}catch(X){this.onError(X)}}var Rr=!1,Rt=null,Xn=!1,Ar=null,lo={onError:function(i){Rr=!0,Rt=i}};function Sn(i,o,l,h,p,_,E,S,P){Rr=!1,Rt=null,Ai.apply(lo,arguments)}function la(i,o,l,h,p,_,E,S,P){if(Sn.apply(this,arguments),Rr){if(Rr){var B=Rt;Rr=!1,Rt=null}else throw Error(t(198));Xn||(Xn=!0,Ar=B)}}function Jn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function ki(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Zn(i){if(Jn(i)!==i)throw Error(t(188))}function uo(i){var o=i.alternate;if(!o){if(o=Jn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Zn(p),i;if(_===h)return Zn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var E=!1,S=p.child;S;){if(S===l){E=!0,l=p,h=_;break}if(S===h){E=!0,h=p,l=_;break}S=S.sibling}if(!E){for(S=_.child;S;){if(S===l){E=!0,l=_,h=p;break}if(S===h){E=!0,h=_,l=p;break}S=S.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function co(i){return i=uo(i),i!==null?ps(i):null}function ps(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=ps(i);if(o!==null)return o;i=i.sibling}return null}var Pi=e.unstable_scheduleCallback,ho=e.unstable_cancelCallback,ua=e.unstable_shouldYield,Pl=e.unstable_requestPaint,lt=e.unstable_now,ca=e.unstable_getCurrentPriorityLevel,ei=e.unstable_ImmediatePriority,ti=e.unstable_UserBlockingPriority,Ln=e.unstable_NormalPriority,fo=e.unstable_LowPriority,ha=e.unstable_IdlePriority,Ni=null,Cn=null;function da(i){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Ni,i,void 0,(i.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:pa,po=Math.log,fa=Math.LN2;function pa(i){return i>>>=0,i===0?32:31-(po(i)/fa|0)|0}var ms=64,xi=4194304;function kr(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function L(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,E=l&268435455;if(E!==0){var S=E&~p;S!==0?h=kr(S):(_&=E,_!==0&&(h=kr(_)))}else E=l&~p,E!==0?h=kr(E):_!==0&&(h=kr(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-Gt(o),p=1<<l,h|=i[l],o&=~p;return h}function Q(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function re(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-Gt(_),S=1<<E,P=p[E];P===-1?((S&l)===0||(S&h)!==0)&&(p[E]=Q(S,o)):P<=o&&(i.expiredLanes|=S),_&=~S}}function te(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function ye(){var i=ms;return ms<<=1,(ms&4194240)===0&&(ms=64),i}function Re(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Ke(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Gt(o),i[o]=l}function ze(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Gt(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ve(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-Gt(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Le=0;function Rn(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gs,ni,ma,uc,cc,Nl=!1,ri=[],rn=null,Pr=null,Nr=null,_s=new Map,ur=new Map,ii=[],nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(i,o){switch(i){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":_s.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(o.pointerId)}}function Mn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=ql(o),o!==null&&ni(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function rf(i,o,l,h,p){switch(o){case"focusin":return rn=Mn(rn,i,o,l,h,p),!0;case"dragenter":return Pr=Mn(Pr,i,o,l,h,p),!0;case"mouseover":return Nr=Mn(Nr,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return _s.set(_,Mn(_s.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,ur.set(_,Mn(ur.get(_)||null,i,o,l,h,p)),!0}return!1}function dc(i){var o=vo(i.target);if(o!==null){var l=Jn(o);if(l!==null){if(o=l.tag,o===13){if(o=ki(l),o!==null){i.blockedOn=o,cc(i.priority,function(){ma(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Di(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=ga(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);lr=h,l.target.dispatchEvent(h),lr=null}else return o=ql(l),o!==null&&ni(o),i.blockedOn=l,!1;o.shift()}return!0}function mo(i,o,l){Di(i)&&l.delete(o)}function fc(){Nl=!1,rn!==null&&Di(rn)&&(rn=null),Pr!==null&&Di(Pr)&&(Pr=null),Nr!==null&&Di(Nr)&&(Nr=null),_s.forEach(mo),ur.forEach(mo)}function xr(i,o){i.blockedOn===o&&(i.blockedOn=null,Nl||(Nl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fc)))}function Dr(i){function o(p){return xr(p,i)}if(0<ri.length){xr(ri[0],i);for(var l=1;l<ri.length;l++){var h=ri[l];h.blockedOn===i&&(h.blockedOn=null)}}for(rn!==null&&xr(rn,i),Pr!==null&&xr(Pr,i),Nr!==null&&xr(Nr,i),_s.forEach(o),ur.forEach(o),l=0;l<ii.length;l++)h=ii[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<ii.length&&(l=ii[0],l.blockedOn===null);)dc(l),l.blockedOn===null&&ii.shift()}var bi=Ie.ReactCurrentBatchConfig,ys=!0;function vt(i,o,l,h){var p=Le,_=bi.transition;bi.transition=null;try{Le=1,xl(i,o,l,h)}finally{Le=p,bi.transition=_}}function sf(i,o,l,h){var p=Le,_=bi.transition;bi.transition=null;try{Le=4,xl(i,o,l,h)}finally{Le=p,bi.transition=_}}function xl(i,o,l,h){if(ys){var p=ga(i,o,l,h);if(p===null)gf(i,o,h,go,l),hc(i,h);else if(rf(p,i,o,l,h))h.stopPropagation();else if(hc(i,h),o&4&&-1<nf.indexOf(i)){for(;p!==null;){var _=ql(p);if(_!==null&&gs(_),_=ga(i,o,l,h),_===null&&gf(i,o,h,go,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else gf(i,o,h,null,l)}}var go=null;function ga(i,o,l,h){if(go=null,i=Zr(h),i=vo(i),i!==null)if(o=Jn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=ki(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return go=i,null}function Dl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ca()){case ei:return 1;case ti:return 4;case Ln:case fo:return 16;case ha:return 536870912;default:return 16}default:return 16}}var er=null,_a=null,Vn=null;function bl(){if(Vn)return Vn;var i,o=_a,l=o.length,h,p="value"in er?er.value:er.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var E=l-i;for(h=1;h<=E&&o[l-h]===p[_-h];h++);return Vn=p.slice(i,1<h?1-h:void 0)}function ya(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function si(){return!0}function Ol(){return!1}function sn(i){function o(l,h,p,_,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(l=i[S],this[S]=l?l(_):_[S]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?si:Ol,this.isPropagationStopped=Ol,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),o}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=sn(br),oi=ae({},br,{view:0,detail:0}),of=sn(oi),Ea,Oi,vs,_o=ae({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==vs&&(vs&&i.type==="mousemove"?(Ea=i.screenX-vs.screenX,Oi=i.screenY-vs.screenY):Oi=Ea=0,vs=i),Ea)},movementY:function(i){return"movementY"in i?i.movementY:Oi}}),wa=sn(_o),Ll=ae({},_o,{dataTransfer:0}),pc=sn(Ll),Ta=ae({},oi,{relatedTarget:0}),Ia=sn(Ta),mc=ae({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Li=sn(mc),gc=ae({},br,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),_c=sn(gc),yc=ae({},br,{data:0}),Ml=sn(yc),Sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},An={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ec(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=vc[i])?!!o[i]:!1}function ai(){return Ec}var c=ae({},oi,{key:function(i){if(i.key){var o=Sa[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ya(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?An[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(i){return i.type==="keypress"?ya(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ya(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=sn(c),y=ae({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=sn(y),F=ae({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),$=sn(F),ie=ae({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),ot=sn(ie),Bt=ae({},_o,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ye=sn(Bt),Kt=[9,13,27,32],Ot=d&&"CompositionEvent"in window,cr=null;d&&"documentMode"in document&&(cr=document.documentMode);var tr=d&&"TextEvent"in window&&!cr,yo=d&&(!Ot||cr&&8<cr&&11>=cr),Ca=" ",M_=!1;function V_(i,o){switch(i){case"keyup":return Kt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ra=!1;function mC(i,o){switch(i){case"compositionend":return F_(o);case"keypress":return o.which!==32?null:(M_=!0,Ca);case"textInput":return i=o.data,i===Ca&&M_?null:i;default:return null}}function gC(i,o){if(Ra)return i==="compositionend"||!Ot&&V_(i,o)?(i=bl(),Vn=_a=er=null,Ra=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return yo&&o.locale!=="ko"?null:o.data;default:return null}}var _C={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!_C[i.type]:o==="textarea"}function j_(i,o,l,h){dn(h),o=Cc(o,"onChange"),0<o.length&&(l=new va("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var Vl=null,Fl=null;function yC(i){iy(i,0)}function wc(i){var o=xa(i);if(Ti(o))return i}function vC(i,o){if(i==="change")return o}var z_=!1;if(d){var af;if(d){var lf="oninput"in document;if(!lf){var B_=document.createElement("div");B_.setAttribute("oninput","return;"),lf=typeof B_.oninput=="function"}af=lf}else af=!1;z_=af&&(!document.documentMode||9<document.documentMode)}function W_(){Vl&&(Vl.detachEvent("onpropertychange",$_),Fl=Vl=null)}function $_(i){if(i.propertyName==="value"&&wc(Fl)){var o=[];j_(o,Fl,i,Zr(i)),Ri(yC,o)}}function EC(i,o,l){i==="focusin"?(W_(),Vl=o,Fl=l,Vl.attachEvent("onpropertychange",$_)):i==="focusout"&&W_()}function wC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return wc(Fl)}function TC(i,o){if(i==="click")return wc(o)}function IC(i,o){if(i==="input"||i==="change")return wc(o)}function SC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Or=typeof Object.is=="function"?Object.is:SC;function Ul(i,o){if(Or(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!Or(i[p],o[p]))return!1}return!0}function q_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function H_(i,o){var l=q_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=q_(l)}}function G_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?G_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function K_(){for(var i=window,o=sr();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=sr(i.document)}return o}function uf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function CC(i){var o=K_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&G_(l.ownerDocument.documentElement,l)){if(h!==null&&uf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=H_(l,_);var E=H_(l,h);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var RC=d&&"documentMode"in document&&11>=document.documentMode,Aa=null,cf=null,jl=null,hf=!1;function Q_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hf||Aa==null||Aa!==sr(h)||(h=Aa,"selectionStart"in h&&uf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),jl&&Ul(jl,h)||(jl=h,h=Cc(cf,"onSelect"),0<h.length&&(o=new va("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Aa)))}function Tc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ka={animationend:Tc("Animation","AnimationEnd"),animationiteration:Tc("Animation","AnimationIteration"),animationstart:Tc("Animation","AnimationStart"),transitionend:Tc("Transition","TransitionEnd")},df={},Y_={};d&&(Y_=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Ic(i){if(df[i])return df[i];if(!ka[i])return i;var o=ka[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Y_)return df[i]=o[l];return i}var X_=Ic("animationend"),J_=Ic("animationiteration"),Z_=Ic("animationstart"),ey=Ic("transitionend"),ty=new Map,ny="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Es(i,o){ty.set(i,o),a(o,[i])}for(var ff=0;ff<ny.length;ff++){var pf=ny[ff],AC=pf.toLowerCase(),kC=pf[0].toUpperCase()+pf.slice(1);Es(AC,"on"+kC)}Es(X_,"onAnimationEnd"),Es(J_,"onAnimationIteration"),Es(Z_,"onAnimationStart"),Es("dblclick","onDoubleClick"),Es("focusin","onFocus"),Es("focusout","onBlur"),Es(ey,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PC=new Set("cancel close invalid load scroll toggle".split(" ").concat(zl));function ry(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,la(h,o,void 0,i),i.currentTarget=null}function iy(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var E=h.length-1;0<=E;E--){var S=h[E],P=S.instance,B=S.currentTarget;if(S=S.listener,P!==_&&p.isPropagationStopped())break e;ry(p,S,B),_=P}else for(E=0;E<h.length;E++){if(S=h[E],P=S.instance,B=S.currentTarget,S=S.listener,P!==_&&p.isPropagationStopped())break e;ry(p,S,B),_=P}}}if(Xn)throw i=Ar,Xn=!1,Ar=null,i}function gt(i,o){var l=o[Tf];l===void 0&&(l=o[Tf]=new Set);var h=i+"__bubble";l.has(h)||(sy(o,i,2,!1),l.add(h))}function mf(i,o,l){var h=0;o&&(h|=4),sy(l,i,h,o)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Bl(i){if(!i[Sc]){i[Sc]=!0,r.forEach(function(l){l!=="selectionchange"&&(PC.has(l)||mf(l,!1,i),mf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Sc]||(o[Sc]=!0,mf("selectionchange",!1,o))}}function sy(i,o,l,h){switch(Dl(o)){case 1:var p=vt;break;case 4:p=sf;break;default:p=xl}l=p.bind(null,o,l,i),p=void 0,!On||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function gf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var S=h.stateNode.containerInfo;if(S===p||S.nodeType===8&&S.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===p||P.nodeType===8&&P.parentNode===p))return;E=E.return}for(;S!==null;){if(E=vo(S),E===null)return;if(P=E.tag,P===5||P===6){h=_=E;continue e}S=S.parentNode}}h=h.return}Ri(function(){var B=_,X=Zr(l),J=[];e:{var Y=ty.get(i);if(Y!==void 0){var le=va,de=i;switch(i){case"keypress":if(ya(l)===0)break e;case"keydown":case"keyup":le=m;break;case"focusin":de="focus",le=Ia;break;case"focusout":de="blur",le=Ia;break;case"beforeblur":case"afterblur":le=Ia;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=$;break;case X_:case J_:case Z_:le=Li;break;case ey:le=ot;break;case"scroll":le=of;break;case"wheel":le=Ye;break;case"copy":case"cut":case"paste":le=_c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=I}var pe=(o&4)!==0,Nt=!pe&&i==="scroll",U=pe?Y!==null?Y+"Capture":null:Y;pe=[];for(var x=B,j;x!==null;){j=x;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,U!==null&&(Z=Je(x,U),Z!=null&&pe.push(Wl(x,Z,j)))),Nt)break;x=x.return}0<pe.length&&(Y=new le(Y,de,null,l,X),J.push({event:Y,listeners:pe}))}}if((o&7)===0){e:{if(Y=i==="mouseover"||i==="pointerover",le=i==="mouseout"||i==="pointerout",Y&&l!==lr&&(de=l.relatedTarget||l.fromElement)&&(vo(de)||de[Mi]))break e;if((le||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,le?(de=l.relatedTarget||l.toElement,le=B,de=de?vo(de):null,de!==null&&(Nt=Jn(de),de!==Nt||de.tag!==5&&de.tag!==6)&&(de=null)):(le=null,de=B),le!==de)){if(pe=wa,Z="onMouseLeave",U="onMouseEnter",x="mouse",(i==="pointerout"||i==="pointerover")&&(pe=I,Z="onPointerLeave",U="onPointerEnter",x="pointer"),Nt=le==null?Y:xa(le),j=de==null?Y:xa(de),Y=new pe(Z,x+"leave",le,l,X),Y.target=Nt,Y.relatedTarget=j,Z=null,vo(X)===B&&(pe=new pe(U,x+"enter",de,l,X),pe.target=j,pe.relatedTarget=Nt,Z=pe),Nt=Z,le&&de)t:{for(pe=le,U=de,x=0,j=pe;j;j=Pa(j))x++;for(j=0,Z=U;Z;Z=Pa(Z))j++;for(;0<x-j;)pe=Pa(pe),x--;for(;0<j-x;)U=Pa(U),j--;for(;x--;){if(pe===U||U!==null&&pe===U.alternate)break t;pe=Pa(pe),U=Pa(U)}pe=null}else pe=null;le!==null&&oy(J,Y,le,pe,!1),de!==null&&Nt!==null&&oy(J,Nt,de,pe,!0)}}e:{if(Y=B?xa(B):window,le=Y.nodeName&&Y.nodeName.toLowerCase(),le==="select"||le==="input"&&Y.type==="file")var me=vC;else if(U_(Y))if(z_)me=IC;else{me=wC;var we=EC}else(le=Y.nodeName)&&le.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=TC);if(me&&(me=me(i,B))){j_(J,me,l,X);break e}we&&we(i,Y,B),i==="focusout"&&(we=Y._wrapperState)&&we.controlled&&Y.type==="number"&&Ii(Y,"number",Y.value)}switch(we=B?xa(B):window,i){case"focusin":(U_(we)||we.contentEditable==="true")&&(Aa=we,cf=B,jl=null);break;case"focusout":jl=cf=Aa=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Q_(J,l,X);break;case"selectionchange":if(RC)break;case"keydown":case"keyup":Q_(J,l,X)}var Te;if(Ot)e:{switch(i){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Ra?V_(i,l)&&(ke="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ke="onCompositionStart");ke&&(yo&&l.locale!=="ko"&&(Ra||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Ra&&(Te=bl()):(er=X,_a="value"in er?er.value:er.textContent,Ra=!0)),we=Cc(B,ke),0<we.length&&(ke=new Ml(ke,i,null,l,X),J.push({event:ke,listeners:we}),Te?ke.data=Te:(Te=F_(l),Te!==null&&(ke.data=Te)))),(Te=tr?mC(i,l):gC(i,l))&&(B=Cc(B,"onBeforeInput"),0<B.length&&(X=new Ml("onBeforeInput","beforeinput",null,l,X),J.push({event:X,listeners:B}),X.data=Te))}iy(J,o)})}function Wl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Cc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Je(i,l),_!=null&&h.unshift(Wl(i,_,p)),_=Je(i,o),_!=null&&h.push(Wl(i,_,p))),i=i.return}return h}function Pa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function oy(i,o,l,h,p){for(var _=o._reactName,E=[];l!==null&&l!==h;){var S=l,P=S.alternate,B=S.stateNode;if(P!==null&&P===h)break;S.tag===5&&B!==null&&(S=B,p?(P=Je(l,_),P!=null&&E.unshift(Wl(l,P,S))):p||(P=Je(l,_),P!=null&&E.push(Wl(l,P,S)))),l=l.return}E.length!==0&&i.push({event:o,listeners:E})}var NC=/\r\n?/g,xC=/\u0000|\uFFFD/g;function ay(i){return(typeof i=="string"?i:""+i).replace(NC,`
`).replace(xC,"")}function Rc(i,o,l){if(o=ay(o),ay(i)!==o&&l)throw Error(t(425))}function Ac(){}var _f=null,yf=null;function vf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,DC=typeof clearTimeout=="function"?clearTimeout:void 0,ly=typeof Promise=="function"?Promise:void 0,bC=typeof queueMicrotask=="function"?queueMicrotask:typeof ly<"u"?function(i){return ly.resolve(null).then(i).catch(OC)}:Ef;function OC(i){setTimeout(function(){throw i})}function wf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Dr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Dr(o)}function ws(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function uy(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Na=Math.random().toString(36).slice(2),li="__reactFiber$"+Na,$l="__reactProps$"+Na,Mi="__reactContainer$"+Na,Tf="__reactEvents$"+Na,LC="__reactListeners$"+Na,MC="__reactHandles$"+Na;function vo(i){var o=i[li];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Mi]||l[li]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=uy(i);i!==null;){if(l=i[li])return l;i=uy(i)}return o}i=l,l=i.parentNode}return null}function ql(i){return i=i[li]||i[Mi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function xa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function kc(i){return i[$l]||null}var If=[],Da=-1;function Ts(i){return{current:i}}function _t(i){0>Da||(i.current=If[Da],If[Da]=null,Da--)}function pt(i,o){Da++,If[Da]=i.current,i.current=o}var Is={},fn=Ts(Is),Fn=Ts(!1),Eo=Is;function ba(i,o){var l=i.type.contextTypes;if(!l)return Is;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function Un(i){return i=i.childContextTypes,i!=null}function Pc(){_t(Fn),_t(fn)}function cy(i,o,l){if(fn.current!==Is)throw Error(t(168));pt(fn,o),pt(Fn,l)}function hy(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,Ge(i)||"Unknown",p));return ae({},l,h)}function Nc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Is,Eo=fn.current,pt(fn,i),pt(Fn,Fn.current),!0}function dy(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=hy(i,o,Eo),h.__reactInternalMemoizedMergedChildContext=i,_t(Fn),_t(fn),pt(fn,i)):_t(Fn),pt(Fn,l)}var Vi=null,xc=!1,Sf=!1;function fy(i){Vi===null?Vi=[i]:Vi.push(i)}function VC(i){xc=!0,fy(i)}function Ss(){if(!Sf&&Vi!==null){Sf=!0;var i=0,o=Le;try{var l=Vi;for(Le=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Vi=null,xc=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(i+1)),Pi(ei,Ss),p}finally{Le=o,Sf=!1}}return null}var Oa=[],La=0,Dc=null,bc=0,hr=[],dr=0,wo=null,Fi=1,Ui="";function To(i,o){Oa[La++]=bc,Oa[La++]=Dc,Dc=i,bc=o}function py(i,o,l){hr[dr++]=Fi,hr[dr++]=Ui,hr[dr++]=wo,wo=i;var h=Fi;i=Ui;var p=32-Gt(h)-1;h&=~(1<<p),l+=1;var _=32-Gt(o)+p;if(30<_){var E=p-p%5;_=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Fi=1<<32-Gt(o)+p|l<<p|h,Ui=_+i}else Fi=1<<_|l<<p|h,Ui=i}function Cf(i){i.return!==null&&(To(i,1),py(i,1,0))}function Rf(i){for(;i===Dc;)Dc=Oa[--La],Oa[La]=null,bc=Oa[--La],Oa[La]=null;for(;i===wo;)wo=hr[--dr],hr[dr]=null,Ui=hr[--dr],hr[dr]=null,Fi=hr[--dr],hr[dr]=null}var nr=null,rr=null,Et=!1,Lr=null;function my(i,o){var l=gr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function gy(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,nr=i,rr=ws(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,nr=i,rr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=wo!==null?{id:Fi,overflow:Ui}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=gr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,nr=i,rr=null,!0):!1;default:return!1}}function Af(i){return(i.mode&1)!==0&&(i.flags&128)===0}function kf(i){if(Et){var o=rr;if(o){var l=o;if(!gy(i,o)){if(Af(i))throw Error(t(418));o=ws(l.nextSibling);var h=nr;o&&gy(i,o)?my(h,l):(i.flags=i.flags&-4097|2,Et=!1,nr=i)}}else{if(Af(i))throw Error(t(418));i.flags=i.flags&-4097|2,Et=!1,nr=i}}}function _y(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;nr=i}function Oc(i){if(i!==nr)return!1;if(!Et)return _y(i),Et=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!vf(i.type,i.memoizedProps)),o&&(o=rr)){if(Af(i))throw yy(),Error(t(418));for(;o;)my(i,o),o=ws(o.nextSibling)}if(_y(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){rr=ws(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}rr=null}}else rr=nr?ws(i.stateNode.nextSibling):null;return!0}function yy(){for(var i=rr;i;)i=ws(i.nextSibling)}function Ma(){rr=nr=null,Et=!1}function Pf(i){Lr===null?Lr=[i]:Lr.push(i)}var FC=Ie.ReactCurrentBatchConfig;function Hl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(E){var S=p.refs;E===null?delete S[_]:S[_]=E},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Lc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function vy(i){var o=i._init;return o(i._payload)}function Ey(i){function o(U,x){if(i){var j=U.deletions;j===null?(U.deletions=[x],U.flags|=16):j.push(x)}}function l(U,x){if(!i)return null;for(;x!==null;)o(U,x),x=x.sibling;return null}function h(U,x){for(U=new Map;x!==null;)x.key!==null?U.set(x.key,x):U.set(x.index,x),x=x.sibling;return U}function p(U,x){return U=Ds(U,x),U.index=0,U.sibling=null,U}function _(U,x,j){return U.index=j,i?(j=U.alternate,j!==null?(j=j.index,j<x?(U.flags|=2,x):j):(U.flags|=2,x)):(U.flags|=1048576,x)}function E(U){return i&&U.alternate===null&&(U.flags|=2),U}function S(U,x,j,Z){return x===null||x.tag!==6?(x=Ep(j,U.mode,Z),x.return=U,x):(x=p(x,j),x.return=U,x)}function P(U,x,j,Z){var me=j.type;return me===b?X(U,x,j.props.children,Z,j.key):x!==null&&(x.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===St&&vy(me)===x.type)?(Z=p(x,j.props),Z.ref=Hl(U,x,j),Z.return=U,Z):(Z=sh(j.type,j.key,j.props,null,U.mode,Z),Z.ref=Hl(U,x,j),Z.return=U,Z)}function B(U,x,j,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=wp(j,U.mode,Z),x.return=U,x):(x=p(x,j.children||[]),x.return=U,x)}function X(U,x,j,Z,me){return x===null||x.tag!==7?(x=No(j,U.mode,Z,me),x.return=U,x):(x=p(x,j),x.return=U,x)}function J(U,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ep(""+x,U.mode,j),x.return=U,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ut:return j=sh(x.type,x.key,x.props,null,U.mode,j),j.ref=Hl(U,null,x),j.return=U,j;case Pe:return x=wp(x,U.mode,j),x.return=U,x;case St:var Z=x._init;return J(U,Z(x._payload),j)}if(wn(x)||_e(x))return x=No(x,U.mode,j,null),x.return=U,x;Lc(U,x)}return null}function Y(U,x,j,Z){var me=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return me!==null?null:S(U,x,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ut:return j.key===me?P(U,x,j,Z):null;case Pe:return j.key===me?B(U,x,j,Z):null;case St:return me=j._init,Y(U,x,me(j._payload),Z)}if(wn(j)||_e(j))return me!==null?null:X(U,x,j,Z,null);Lc(U,j)}return null}function le(U,x,j,Z,me){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return U=U.get(j)||null,S(x,U,""+Z,me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ut:return U=U.get(Z.key===null?j:Z.key)||null,P(x,U,Z,me);case Pe:return U=U.get(Z.key===null?j:Z.key)||null,B(x,U,Z,me);case St:var we=Z._init;return le(U,x,j,we(Z._payload),me)}if(wn(Z)||_e(Z))return U=U.get(j)||null,X(x,U,Z,me,null);Lc(x,Z)}return null}function de(U,x,j,Z){for(var me=null,we=null,Te=x,ke=x=0,Xt=null;Te!==null&&ke<j.length;ke++){Te.index>ke?(Xt=Te,Te=null):Xt=Te.sibling;var tt=Y(U,Te,j[ke],Z);if(tt===null){Te===null&&(Te=Xt);break}i&&Te&&tt.alternate===null&&o(U,Te),x=_(tt,x,ke),we===null?me=tt:we.sibling=tt,we=tt,Te=Xt}if(ke===j.length)return l(U,Te),Et&&To(U,ke),me;if(Te===null){for(;ke<j.length;ke++)Te=J(U,j[ke],Z),Te!==null&&(x=_(Te,x,ke),we===null?me=Te:we.sibling=Te,we=Te);return Et&&To(U,ke),me}for(Te=h(U,Te);ke<j.length;ke++)Xt=le(Te,U,ke,j[ke],Z),Xt!==null&&(i&&Xt.alternate!==null&&Te.delete(Xt.key===null?ke:Xt.key),x=_(Xt,x,ke),we===null?me=Xt:we.sibling=Xt,we=Xt);return i&&Te.forEach(function(bs){return o(U,bs)}),Et&&To(U,ke),me}function pe(U,x,j,Z){var me=_e(j);if(typeof me!="function")throw Error(t(150));if(j=me.call(j),j==null)throw Error(t(151));for(var we=me=null,Te=x,ke=x=0,Xt=null,tt=j.next();Te!==null&&!tt.done;ke++,tt=j.next()){Te.index>ke?(Xt=Te,Te=null):Xt=Te.sibling;var bs=Y(U,Te,tt.value,Z);if(bs===null){Te===null&&(Te=Xt);break}i&&Te&&bs.alternate===null&&o(U,Te),x=_(bs,x,ke),we===null?me=bs:we.sibling=bs,we=bs,Te=Xt}if(tt.done)return l(U,Te),Et&&To(U,ke),me;if(Te===null){for(;!tt.done;ke++,tt=j.next())tt=J(U,tt.value,Z),tt!==null&&(x=_(tt,x,ke),we===null?me=tt:we.sibling=tt,we=tt);return Et&&To(U,ke),me}for(Te=h(U,Te);!tt.done;ke++,tt=j.next())tt=le(Te,U,ke,tt.value,Z),tt!==null&&(i&&tt.alternate!==null&&Te.delete(tt.key===null?ke:tt.key),x=_(tt,x,ke),we===null?me=tt:we.sibling=tt,we=tt);return i&&Te.forEach(function(_1){return o(U,_1)}),Et&&To(U,ke),me}function Nt(U,x,j,Z){if(typeof j=="object"&&j!==null&&j.type===b&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ut:e:{for(var me=j.key,we=x;we!==null;){if(we.key===me){if(me=j.type,me===b){if(we.tag===7){l(U,we.sibling),x=p(we,j.props.children),x.return=U,U=x;break e}}else if(we.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===St&&vy(me)===we.type){l(U,we.sibling),x=p(we,j.props),x.ref=Hl(U,we,j),x.return=U,U=x;break e}l(U,we);break}else o(U,we);we=we.sibling}j.type===b?(x=No(j.props.children,U.mode,Z,j.key),x.return=U,U=x):(Z=sh(j.type,j.key,j.props,null,U.mode,Z),Z.ref=Hl(U,x,j),Z.return=U,U=Z)}return E(U);case Pe:e:{for(we=j.key;x!==null;){if(x.key===we)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){l(U,x.sibling),x=p(x,j.children||[]),x.return=U,U=x;break e}else{l(U,x);break}else o(U,x);x=x.sibling}x=wp(j,U.mode,Z),x.return=U,U=x}return E(U);case St:return we=j._init,Nt(U,x,we(j._payload),Z)}if(wn(j))return de(U,x,j,Z);if(_e(j))return pe(U,x,j,Z);Lc(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,x!==null&&x.tag===6?(l(U,x.sibling),x=p(x,j),x.return=U,U=x):(l(U,x),x=Ep(j,U.mode,Z),x.return=U,U=x),E(U)):l(U,x)}return Nt}var Va=Ey(!0),wy=Ey(!1),Mc=Ts(null),Vc=null,Fa=null,Nf=null;function xf(){Nf=Fa=Vc=null}function Df(i){var o=Mc.current;_t(Mc),i._currentValue=o}function bf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Ua(i,o){Vc=i,Nf=Fa=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(jn=!0),i.firstContext=null)}function fr(i){var o=i._currentValue;if(Nf!==i)if(i={context:i,memoizedValue:o,next:null},Fa===null){if(Vc===null)throw Error(t(308));Fa=i,Vc.dependencies={lanes:0,firstContext:i}}else Fa=Fa.next=i;return o}var Io=null;function Of(i){Io===null?Io=[i]:Io.push(i)}function Ty(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Of(o)):(l.next=p.next,p.next=l),o.interleaved=l,ji(i,h)}function ji(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Cs=!1;function Lf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zi(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Rs(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ze&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,ji(i,l)}return p=h.interleaved,p===null?(o.next=o,Of(h)):(o.next=p.next,p.next=o),h.interleaved=o,ji(i,l)}function Fc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ve(i,l)}}function Sy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=E:_=_.next=E,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Uc(i,o,l,h){var p=i.updateQueue;Cs=!1;var _=p.firstBaseUpdate,E=p.lastBaseUpdate,S=p.shared.pending;if(S!==null){p.shared.pending=null;var P=S,B=P.next;P.next=null,E===null?_=B:E.next=B,E=P;var X=i.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==E&&(S===null?X.firstBaseUpdate=B:S.next=B,X.lastBaseUpdate=P))}if(_!==null){var J=p.baseState;E=0,X=B=P=null,S=_;do{var Y=S.lane,le=S.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:le,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var de=i,pe=S;switch(Y=o,le=l,pe.tag){case 1:if(de=pe.payload,typeof de=="function"){J=de.call(le,J,Y);break e}J=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=pe.payload,Y=typeof de=="function"?de.call(le,J,Y):de,Y==null)break e;J=ae({},J,Y);break e;case 2:Cs=!0}}S.callback!==null&&S.lane!==0&&(i.flags|=64,Y=p.effects,Y===null?p.effects=[S]:Y.push(S))}else le={eventTime:le,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(B=X=le,P=J):X=X.next=le,E|=Y;if(S=S.next,S===null){if(S=p.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,p.lastBaseUpdate=Y,p.shared.pending=null}}while(!0);if(X===null&&(P=J),p.baseState=P,p.firstBaseUpdate=B,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do E|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);Ro|=E,i.lanes=E,i.memoizedState=J}}function Cy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Gl={},ui=Ts(Gl),Kl=Ts(Gl),Ql=Ts(Gl);function So(i){if(i===Gl)throw Error(t(174));return i}function Mf(i,o){switch(pt(Ql,o),pt(Kl,i),pt(ui,Gl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Oe(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Oe(o,i)}_t(ui),pt(ui,o)}function ja(){_t(ui),_t(Kl),_t(Ql)}function Ry(i){So(Ql.current);var o=So(ui.current),l=Oe(o,i.type);o!==l&&(pt(Kl,i),pt(ui,l))}function Vf(i){Kl.current===i&&(_t(ui),_t(Kl))}var wt=Ts(0);function jc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Ff=[];function Uf(){for(var i=0;i<Ff.length;i++)Ff[i]._workInProgressVersionPrimary=null;Ff.length=0}var zc=Ie.ReactCurrentDispatcher,jf=Ie.ReactCurrentBatchConfig,Co=0,Tt=null,Wt=null,Qt=null,Bc=!1,Yl=!1,Xl=0,UC=0;function pn(){throw Error(t(321))}function zf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Or(i[l],o[l]))return!1;return!0}function Bf(i,o,l,h,p,_){if(Co=_,Tt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,zc.current=i===null||i.memoizedState===null?WC:$C,i=l(h,p),Yl){_=0;do{if(Yl=!1,Xl=0,25<=_)throw Error(t(301));_+=1,Qt=Wt=null,o.updateQueue=null,zc.current=qC,i=l(h,p)}while(Yl)}if(zc.current=qc,o=Wt!==null&&Wt.next!==null,Co=0,Qt=Wt=Tt=null,Bc=!1,o)throw Error(t(300));return i}function Wf(){var i=Xl!==0;return Xl=0,i}function ci(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Tt.memoizedState=Qt=i:Qt=Qt.next=i,Qt}function pr(){if(Wt===null){var i=Tt.alternate;i=i!==null?i.memoizedState:null}else i=Wt.next;var o=Qt===null?Tt.memoizedState:Qt.next;if(o!==null)Qt=o,Wt=i;else{if(i===null)throw Error(t(310));Wt=i,i={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Qt===null?Tt.memoizedState=Qt=i:Qt=Qt.next=i}return Qt}function Jl(i,o){return typeof o=="function"?o(i):o}function $f(i){var o=pr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Wt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var E=p.next;p.next=_.next,_.next=E}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var S=E=null,P=null,B=_;do{var X=B.lane;if((Co&X)===X)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:i(h,B.action);else{var J={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(S=P=J,E=h):P=P.next=J,Tt.lanes|=X,Ro|=X}B=B.next}while(B!==null&&B!==_);P===null?E=h:P.next=S,Or(h,o.memoizedState)||(jn=!0),o.memoizedState=h,o.baseState=E,o.baseQueue=P,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Tt.lanes|=_,Ro|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function qf(i){var o=pr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do _=i(_,E.action),E=E.next;while(E!==p);Or(_,o.memoizedState)||(jn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function Ay(){}function ky(i,o){var l=Tt,h=pr(),p=o(),_=!Or(h.memoizedState,p);if(_&&(h.memoizedState=p,jn=!0),h=h.queue,Hf(xy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Qt!==null&&Qt.memoizedState.tag&1){if(l.flags|=2048,Zl(9,Ny.bind(null,l,h,p,o),void 0,null),Yt===null)throw Error(t(349));(Co&30)!==0||Py(l,o,p)}return p}function Py(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Tt.updateQueue,o===null?(o={lastEffect:null,stores:null},Tt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Ny(i,o,l,h){o.value=l,o.getSnapshot=h,Dy(o)&&by(i)}function xy(i,o,l){return l(function(){Dy(o)&&by(i)})}function Dy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Or(i,l)}catch{return!0}}function by(i){var o=ji(i,1);o!==null&&Ur(o,i,1,-1)}function Oy(i){var o=ci();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jl,lastRenderedState:i},o.queue=i,i=i.dispatch=BC.bind(null,Tt,i),[o.memoizedState,i]}function Zl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=Tt.updateQueue,o===null?(o={lastEffect:null,stores:null},Tt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Ly(){return pr().memoizedState}function Wc(i,o,l,h){var p=ci();Tt.flags|=i,p.memoizedState=Zl(1|o,l,void 0,h===void 0?null:h)}function $c(i,o,l,h){var p=pr();h=h===void 0?null:h;var _=void 0;if(Wt!==null){var E=Wt.memoizedState;if(_=E.destroy,h!==null&&zf(h,E.deps)){p.memoizedState=Zl(o,l,_,h);return}}Tt.flags|=i,p.memoizedState=Zl(1|o,l,_,h)}function My(i,o){return Wc(8390656,8,i,o)}function Hf(i,o){return $c(2048,8,i,o)}function Vy(i,o){return $c(4,2,i,o)}function Fy(i,o){return $c(4,4,i,o)}function Uy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function jy(i,o,l){return l=l!=null?l.concat([i]):null,$c(4,4,Uy.bind(null,o,i),l)}function Gf(){}function zy(i,o){var l=pr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&zf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function By(i,o){var l=pr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&zf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Wy(i,o,l){return(Co&21)===0?(i.baseState&&(i.baseState=!1,jn=!0),i.memoizedState=l):(Or(l,o)||(l=ye(),Tt.lanes|=l,Ro|=l,i.baseState=!0),o)}function jC(i,o){var l=Le;Le=l!==0&&4>l?l:4,i(!0);var h=jf.transition;jf.transition={};try{i(!1),o()}finally{Le=l,jf.transition=h}}function $y(){return pr().memoizedState}function zC(i,o,l){var h=Ns(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},qy(i))Hy(o,l);else if(l=Ty(i,o,l,h),l!==null){var p=Pn();Ur(l,i,h,p),Gy(l,o,h)}}function BC(i,o,l){var h=Ns(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(qy(i))Hy(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var E=o.lastRenderedState,S=_(E,l);if(p.hasEagerState=!0,p.eagerState=S,Or(S,E)){var P=o.interleaved;P===null?(p.next=p,Of(o)):(p.next=P.next,P.next=p),o.interleaved=p;return}}catch{}finally{}l=Ty(i,o,p,h),l!==null&&(p=Pn(),Ur(l,i,h,p),Gy(l,o,h))}}function qy(i){var o=i.alternate;return i===Tt||o!==null&&o===Tt}function Hy(i,o){Yl=Bc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Gy(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ve(i,l)}}var qc={readContext:fr,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},WC={readContext:fr,useCallback:function(i,o){return ci().memoizedState=[i,o===void 0?null:o],i},useContext:fr,useEffect:My,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Wc(4194308,4,Uy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Wc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Wc(4,2,i,o)},useMemo:function(i,o){var l=ci();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=ci();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=zC.bind(null,Tt,i),[h.memoizedState,i]},useRef:function(i){var o=ci();return i={current:i},o.memoizedState=i},useState:Oy,useDebugValue:Gf,useDeferredValue:function(i){return ci().memoizedState=i},useTransition:function(){var i=Oy(!1),o=i[0];return i=jC.bind(null,i[1]),ci().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=Tt,p=ci();if(Et){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Yt===null)throw Error(t(349));(Co&30)!==0||Py(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,My(xy.bind(null,h,_,i),[i]),h.flags|=2048,Zl(9,Ny.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=ci(),o=Yt.identifierPrefix;if(Et){var l=Ui,h=Fi;l=(h&~(1<<32-Gt(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=Xl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=UC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},$C={readContext:fr,useCallback:zy,useContext:fr,useEffect:Hf,useImperativeHandle:jy,useInsertionEffect:Vy,useLayoutEffect:Fy,useMemo:By,useReducer:$f,useRef:Ly,useState:function(){return $f(Jl)},useDebugValue:Gf,useDeferredValue:function(i){var o=pr();return Wy(o,Wt.memoizedState,i)},useTransition:function(){var i=$f(Jl)[0],o=pr().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:ky,useId:$y,unstable_isNewReconciler:!1},qC={readContext:fr,useCallback:zy,useContext:fr,useEffect:Hf,useImperativeHandle:jy,useInsertionEffect:Vy,useLayoutEffect:Fy,useMemo:By,useReducer:qf,useRef:Ly,useState:function(){return qf(Jl)},useDebugValue:Gf,useDeferredValue:function(i){var o=pr();return Wt===null?o.memoizedState=i:Wy(o,Wt.memoizedState,i)},useTransition:function(){var i=qf(Jl)[0],o=pr().memoizedState;return[i,o]},useMutableSource:Ay,useSyncExternalStore:ky,useId:$y,unstable_isNewReconciler:!1};function Mr(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Kf(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hc={isMounted:function(i){return(i=i._reactInternals)?Jn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=Pn(),p=Ns(i),_=zi(h,p);_.payload=o,l!=null&&(_.callback=l),o=Rs(i,_,p),o!==null&&(Ur(o,i,p,h),Fc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=Pn(),p=Ns(i),_=zi(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Rs(i,_,p),o!==null&&(Ur(o,i,p,h),Fc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Pn(),h=Ns(i),p=zi(l,h);p.tag=2,o!=null&&(p.callback=o),o=Rs(i,p,h),o!==null&&(Ur(o,i,h,l),Fc(o,i,h))}};function Ky(i,o,l,h,p,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,E):o.prototype&&o.prototype.isPureReactComponent?!Ul(l,h)||!Ul(p,_):!0}function Qy(i,o,l){var h=!1,p=Is,_=o.contextType;return typeof _=="object"&&_!==null?_=fr(_):(p=Un(o)?Eo:fn.current,h=o.contextTypes,_=(h=h!=null)?ba(i,p):Is),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Hc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Yy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Hc.enqueueReplaceState(o,o.state,null)}function Qf(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Lf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=fr(_):(_=Un(o)?Eo:fn.current,p.context=ba(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Kf(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Hc.enqueueReplaceState(p,p.state,null),Uc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function za(i,o){try{var l="",h=o;do l+=be(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function Yf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Xf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var HC=typeof WeakMap=="function"?WeakMap:Map;function Xy(i,o,l){l=zi(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){Zc||(Zc=!0,dp=h),Xf(i,o)},l}function Jy(i,o,l){l=zi(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){Xf(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Xf(i,o),typeof h!="function"&&(ks===null?ks=new Set([this]):ks.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),l}function Zy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new HC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=o1.bind(null,i,o,l),o.then(i,i))}function ev(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function tv(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=zi(-1,1),o.tag=2,Rs(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var GC=Ie.ReactCurrentOwner,jn=!1;function kn(i,o,l,h){o.child=i===null?wy(o,null,l,h):Va(o,i.child,l,h)}function nv(i,o,l,h,p){l=l.render;var _=o.ref;return Ua(o,p),h=Bf(i,o,l,h,_,p),l=Wf(),i!==null&&!jn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Bi(i,o,p)):(Et&&l&&Cf(o),o.flags|=1,kn(i,o,h,p),o.child)}function rv(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!vp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,iv(i,o,_,h,p)):(i=sh(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var E=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ul,l(E,h)&&i.ref===o.ref)return Bi(i,o,p)}return o.flags|=1,i=Ds(_,h),i.ref=o.ref,i.return=o,o.child=i}function iv(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(Ul(_,h)&&i.ref===o.ref)if(jn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(jn=!0);else return o.lanes=i.lanes,Bi(i,o,p)}return Jf(i,o,l,h,p)}function sv(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Wa,ir),ir|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,pt(Wa,ir),ir|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,pt(Wa,ir),ir|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,pt(Wa,ir),ir|=h;return kn(i,o,p,l),o.child}function ov(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Jf(i,o,l,h,p){var _=Un(l)?Eo:fn.current;return _=ba(o,_),Ua(o,p),l=Bf(i,o,l,h,_,p),h=Wf(),i!==null&&!jn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Bi(i,o,p)):(Et&&h&&Cf(o),o.flags|=1,kn(i,o,l,p),o.child)}function av(i,o,l,h,p){if(Un(l)){var _=!0;Nc(o)}else _=!1;if(Ua(o,p),o.stateNode===null)Kc(i,o),Qy(o,l,h),Qf(o,l,h,p),h=!0;else if(i===null){var E=o.stateNode,S=o.memoizedProps;E.props=S;var P=E.context,B=l.contextType;typeof B=="object"&&B!==null?B=fr(B):(B=Un(l)?Eo:fn.current,B=ba(o,B));var X=l.getDerivedStateFromProps,J=typeof X=="function"||typeof E.getSnapshotBeforeUpdate=="function";J||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==h||P!==B)&&Yy(o,E,h,B),Cs=!1;var Y=o.memoizedState;E.state=Y,Uc(o,h,E,p),P=o.memoizedState,S!==h||Y!==P||Fn.current||Cs?(typeof X=="function"&&(Kf(o,l,X,h),P=o.memoizedState),(S=Cs||Ky(o,l,S,h,Y,P,B))?(J||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=P),E.props=h,E.state=P,E.context=B,h=S):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{E=o.stateNode,Iy(i,o),S=o.memoizedProps,B=o.type===o.elementType?S:Mr(o.type,S),E.props=B,J=o.pendingProps,Y=E.context,P=l.contextType,typeof P=="object"&&P!==null?P=fr(P):(P=Un(l)?Eo:fn.current,P=ba(o,P));var le=l.getDerivedStateFromProps;(X=typeof le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(S!==J||Y!==P)&&Yy(o,E,h,P),Cs=!1,Y=o.memoizedState,E.state=Y,Uc(o,h,E,p);var de=o.memoizedState;S!==J||Y!==de||Fn.current||Cs?(typeof le=="function"&&(Kf(o,l,le,h),de=o.memoizedState),(B=Cs||Ky(o,l,B,h,Y,de,P)||!1)?(X||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,de,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,de,P)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=de),E.props=h,E.state=de,E.context=P,h=B):(typeof E.componentDidUpdate!="function"||S===i.memoizedProps&&Y===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&Y===i.memoizedState||(o.flags|=1024),h=!1)}return Zf(i,o,l,h,_,p)}function Zf(i,o,l,h,p,_){ov(i,o);var E=(o.flags&128)!==0;if(!h&&!E)return p&&dy(o,l,!1),Bi(i,o,_);h=o.stateNode,GC.current=o;var S=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&E?(o.child=Va(o,i.child,null,_),o.child=Va(o,null,S,_)):kn(i,o,S,_),o.memoizedState=h.state,p&&dy(o,l,!0),o.child}function lv(i){var o=i.stateNode;o.pendingContext?cy(i,o.pendingContext,o.pendingContext!==o.context):o.context&&cy(i,o.context,!1),Mf(i,o.containerInfo)}function uv(i,o,l,h,p){return Ma(),Pf(p),o.flags|=256,kn(i,o,l,h),o.child}var ep={dehydrated:null,treeContext:null,retryLane:0};function tp(i){return{baseLanes:i,cachePool:null,transitions:null}}function cv(i,o,l){var h=o.pendingProps,p=wt.current,_=!1,E=(o.flags&128)!==0,S;if((S=E)||(S=i!==null&&i.memoizedState===null?!1:(p&2)!==0),S?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),pt(wt,p&1),i===null)return kf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(E=h.children,i=h.fallback,_?(h=o.mode,_=o.child,E={mode:"hidden",children:E},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=E):_=oh(E,h,0,null),i=No(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=tp(l),o.memoizedState=ep,i):np(o,E));if(p=i.memoizedState,p!==null&&(S=p.dehydrated,S!==null))return KC(i,o,E,h,S,p,l);if(_){_=h.fallback,E=o.mode,p=i.child,S=p.sibling;var P={mode:"hidden",children:h.children};return(E&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=P,o.deletions=null):(h=Ds(p,P),h.subtreeFlags=p.subtreeFlags&14680064),S!==null?_=Ds(S,_):(_=No(_,E,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,E=i.child.memoizedState,E=E===null?tp(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~l,o.memoizedState=ep,h}return _=i.child,i=_.sibling,h=Ds(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function np(i,o){return o=oh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Gc(i,o,l,h){return h!==null&&Pf(h),Va(o,i.child,null,l),i=np(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function KC(i,o,l,h,p,_,E){if(l)return o.flags&256?(o.flags&=-257,h=Yf(Error(t(422))),Gc(i,o,E,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=oh({mode:"visible",children:h.children},p,0,null),_=No(_,p,E,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&Va(o,i.child,null,E),o.child.memoizedState=tp(E),o.memoizedState=ep,_);if((o.mode&1)===0)return Gc(i,o,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var S=h.dgst;return h=S,_=Error(t(419)),h=Yf(_,h,void 0),Gc(i,o,E,h)}if(S=(E&i.childLanes)!==0,jn||S){if(h=Yt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ji(i,p),Ur(h,i,p,-1))}return yp(),h=Yf(Error(t(421))),Gc(i,o,E,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=a1.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,rr=ws(p.nextSibling),nr=o,Et=!0,Lr=null,i!==null&&(hr[dr++]=Fi,hr[dr++]=Ui,hr[dr++]=wo,Fi=i.id,Ui=i.overflow,wo=o),o=np(o,h.children),o.flags|=4096,o)}function hv(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),bf(i.return,o,l)}function rp(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function dv(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(kn(i,o,h.children,l),h=wt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&hv(i,l,o);else if(i.tag===19)hv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(pt(wt,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&jc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),rp(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&jc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}rp(o,!0,l,null,_);break;case"together":rp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Kc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Bi(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Ro|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ds(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ds(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function QC(i,o,l){switch(o.tag){case 3:lv(o),Ma();break;case 5:Ry(o);break;case 1:Un(o.type)&&Nc(o);break;case 4:Mf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;pt(Mc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(pt(wt,wt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?cv(i,o,l):(pt(wt,wt.current&1),i=Bi(i,o,l),i!==null?i.sibling:null);pt(wt,wt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return dv(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),pt(wt,wt.current),h)break;return null;case 22:case 23:return o.lanes=0,sv(i,o,l)}return Bi(i,o,l)}var fv,ip,pv,mv;fv=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ip=function(){},pv=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,So(ui.current);var _=null;switch(l){case"input":p=or(i,p),h=or(i,h),_=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),_=[];break;case"textarea":p=ao(i,p),h=ao(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Ac)}ds(l,h);var E;l=null;for(B in p)if(!h.hasOwnProperty(B)&&p.hasOwnProperty(B)&&p[B]!=null)if(B==="style"){var S=p[B];for(E in S)S.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(s.hasOwnProperty(B)?_||(_=[]):(_=_||[]).push(B,null));for(B in h){var P=h[B];if(S=p!=null?p[B]:void 0,h.hasOwnProperty(B)&&P!==S&&(P!=null||S!=null))if(B==="style")if(S){for(E in S)!S.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in P)P.hasOwnProperty(E)&&S[E]!==P[E]&&(l||(l={}),l[E]=P[E])}else l||(_||(_=[]),_.push(B,l)),l=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(_=_||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(_=_||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(s.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&gt("scroll",i),_||S===P||(_=[])):(_=_||[]).push(B,P))}l&&(_=_||[]).push("style",l);var B=_;(o.updateQueue=B)&&(o.flags|=4)}},mv=function(i,o,l,h){l!==h&&(o.flags|=4)};function eu(i,o){if(!Et)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function mn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function YC(i,o,l){var h=o.pendingProps;switch(Rf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(o),null;case 1:return Un(o.type)&&Pc(),mn(o),null;case 3:return h=o.stateNode,ja(),_t(Fn),_t(fn),Uf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Oc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Lr!==null&&(mp(Lr),Lr=null))),ip(i,o),mn(o),null;case 5:Vf(o);var p=So(Ql.current);if(l=o.type,i!==null&&o.stateNode!=null)pv(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return mn(o),null}if(i=So(ui.current),Oc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[li]=o,h[$l]=_,i=(o.mode&1)!==0,l){case"dialog":gt("cancel",h),gt("close",h);break;case"iframe":case"object":case"embed":gt("load",h);break;case"video":case"audio":for(p=0;p<zl.length;p++)gt(zl[p],h);break;case"source":gt("error",h);break;case"img":case"image":case"link":gt("error",h),gt("load",h);break;case"details":gt("toggle",h);break;case"input":Tr(h,_),gt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},gt("invalid",h);break;case"textarea":Yr(h,_),gt("invalid",h)}ds(l,_),p=null;for(var E in _)if(_.hasOwnProperty(E)){var S=_[E];E==="children"?typeof S=="string"?h.textContent!==S&&(_.suppressHydrationWarning!==!0&&Rc(h.textContent,S,i),p=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(_.suppressHydrationWarning!==!0&&Rc(h.textContent,S,i),p=["children",""+S]):s.hasOwnProperty(E)&&S!=null&&E==="onScroll"&&gt("scroll",h)}switch(l){case"input":Qn(h),us(h,_,!0);break;case"textarea":Qn(h),Ne(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Ac)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ct(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=E.createElement(l,{is:h.is}):(i=E.createElement(l),l==="select"&&(E=i,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):i=E.createElementNS(i,l),i[li]=o,i[$l]=h,fv(i,o,!1,!1),o.stateNode=i;e:{switch(E=In(l,h),l){case"dialog":gt("cancel",i),gt("close",i),p=h;break;case"iframe":case"object":case"embed":gt("load",i),p=h;break;case"video":case"audio":for(p=0;p<zl.length;p++)gt(zl[p],i);p=h;break;case"source":gt("error",i),p=h;break;case"img":case"image":case"link":gt("error",i),gt("load",i),p=h;break;case"details":gt("toggle",i),p=h;break;case"input":Tr(i,h),p=or(i,h),gt("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),gt("invalid",i);break;case"textarea":Yr(i,h),p=ao(i,h),gt("invalid",i);break;default:p=h}ds(l,p),S=p;for(_ in S)if(S.hasOwnProperty(_)){var P=S[_];_==="style"?xn(i,P):_==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&cs(i,P)):_==="children"?typeof P=="string"?(l!=="textarea"||P!=="")&&Cr(i,P):typeof P=="number"&&Cr(i,""+P):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?P!=null&&_==="onScroll"&&gt("scroll",i):P!=null&&ve(i,_,P,E))}switch(l){case"input":Qn(i),us(i,h,!1);break;case"textarea":Qn(i),Ne(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Qe(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Ir(i,!!h.multiple,_,!1):h.defaultValue!=null&&Ir(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Ac)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return mn(o),null;case 6:if(i&&o.stateNode!=null)mv(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=So(Ql.current),So(ui.current),Oc(o)){if(h=o.stateNode,l=o.memoizedProps,h[li]=o,(_=h.nodeValue!==l)&&(i=nr,i!==null))switch(i.tag){case 3:Rc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Rc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[li]=o,o.stateNode=h}return mn(o),null;case 13:if(_t(wt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Et&&rr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)yy(),Ma(),o.flags|=98560,_=!1;else if(_=Oc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[li]=o}else Ma(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;mn(o),_=!1}else Lr!==null&&(mp(Lr),Lr=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(wt.current&1)!==0?$t===0&&($t=3):yp())),o.updateQueue!==null&&(o.flags|=4),mn(o),null);case 4:return ja(),ip(i,o),i===null&&Bl(o.stateNode.containerInfo),mn(o),null;case 10:return Df(o.type._context),mn(o),null;case 17:return Un(o.type)&&Pc(),mn(o),null;case 19:if(_t(wt),_=o.memoizedState,_===null)return mn(o),null;if(h=(o.flags&128)!==0,E=_.rendering,E===null)if(h)eu(_,!1);else{if($t!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(E=jc(i),E!==null){for(o.flags|=128,eu(_,!1),h=E.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return pt(wt,wt.current&1|2),o.child}i=i.sibling}_.tail!==null&&lt()>$a&&(o.flags|=128,h=!0,eu(_,!1),o.lanes=4194304)}else{if(!h)if(i=jc(E),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),eu(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!Et)return mn(o),null}else 2*lt()-_.renderingStartTime>$a&&l!==1073741824&&(o.flags|=128,h=!0,eu(_,!1),o.lanes=4194304);_.isBackwards?(E.sibling=o.child,o.child=E):(l=_.last,l!==null?l.sibling=E:o.child=E,_.last=E)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=lt(),o.sibling=null,l=wt.current,pt(wt,h?l&1|2:l&1),o):(mn(o),null);case 22:case 23:return _p(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(ir&1073741824)!==0&&(mn(o),o.subtreeFlags&6&&(o.flags|=8192)):mn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function XC(i,o){switch(Rf(o),o.tag){case 1:return Un(o.type)&&Pc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ja(),_t(Fn),_t(fn),Uf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return Vf(o),null;case 13:if(_t(wt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ma()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return _t(wt),null;case 4:return ja(),null;case 10:return Df(o.type._context),null;case 22:case 23:return _p(),null;case 24:return null;default:return null}}var Qc=!1,gn=!1,JC=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Ba(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){At(i,o,h)}else l.current=null}function sp(i,o,l){try{l()}catch(h){At(i,o,h)}}var gv=!1;function ZC(i,o){if(_f=ys,i=K_(),uf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var E=0,S=-1,P=-1,B=0,X=0,J=i,Y=null;t:for(;;){for(var le;J!==l||p!==0&&J.nodeType!==3||(S=E+p),J!==_||h!==0&&J.nodeType!==3||(P=E+h),J.nodeType===3&&(E+=J.nodeValue.length),(le=J.firstChild)!==null;)Y=J,J=le;for(;;){if(J===i)break t;if(Y===l&&++B===p&&(S=E),Y===_&&++X===h&&(P=E),(le=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=le}l=S===-1||P===-1?null:{start:S,end:P}}else l=null}l=l||{start:0,end:0}}else l=null;for(yf={focusedElem:i,selectionRange:l},ys=!1,ce=o;ce!==null;)if(o=ce,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ce=i;else for(;ce!==null;){o=ce;try{var de=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var pe=de.memoizedProps,Nt=de.memoizedState,U=o.stateNode,x=U.getSnapshotBeforeUpdate(o.elementType===o.type?pe:Mr(o.type,pe),Nt);U.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){At(o,o.return,Z)}if(i=o.sibling,i!==null){i.return=o.return,ce=i;break}ce=o.return}return de=gv,gv=!1,de}function tu(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&sp(o,l,_)}p=p.next}while(p!==h)}}function Yc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function op(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function _v(i){var o=i.alternate;o!==null&&(i.alternate=null,_v(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[li],delete o[$l],delete o[Tf],delete o[LC],delete o[MC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function yv(i){return i.tag===5||i.tag===3||i.tag===4}function vv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||yv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ap(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Ac));else if(h!==4&&(i=i.child,i!==null))for(ap(i,o,l),i=i.sibling;i!==null;)ap(i,o,l),i=i.sibling}function lp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(lp(i,o,l),i=i.sibling;i!==null;)lp(i,o,l),i=i.sibling}var on=null,Vr=!1;function As(i,o,l){for(l=l.child;l!==null;)Ev(i,o,l),l=l.sibling}function Ev(i,o,l){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Ni,l)}catch{}switch(l.tag){case 5:gn||Ba(l,o);case 6:var h=on,p=Vr;on=null,As(i,o,l),on=h,Vr=p,on!==null&&(Vr?(i=on,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):on.removeChild(l.stateNode));break;case 18:on!==null&&(Vr?(i=on,l=l.stateNode,i.nodeType===8?wf(i.parentNode,l):i.nodeType===1&&wf(i,l),Dr(i)):wf(on,l.stateNode));break;case 4:h=on,p=Vr,on=l.stateNode.containerInfo,Vr=!0,As(i,o,l),on=h,Vr=p;break;case 0:case 11:case 14:case 15:if(!gn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,E=_.destroy;_=_.tag,E!==void 0&&((_&2)!==0||(_&4)!==0)&&sp(l,o,E),p=p.next}while(p!==h)}As(i,o,l);break;case 1:if(!gn&&(Ba(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(S){At(l,o,S)}As(i,o,l);break;case 21:As(i,o,l);break;case 22:l.mode&1?(gn=(h=gn)||l.memoizedState!==null,As(i,o,l),gn=h):As(i,o,l);break;default:As(i,o,l)}}function wv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new JC),o.forEach(function(h){var p=l1.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Fr(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,E=o,S=E;e:for(;S!==null;){switch(S.tag){case 5:on=S.stateNode,Vr=!1;break e;case 3:on=S.stateNode.containerInfo,Vr=!0;break e;case 4:on=S.stateNode.containerInfo,Vr=!0;break e}S=S.return}if(on===null)throw Error(t(160));Ev(_,E,p),on=null,Vr=!1;var P=p.alternate;P!==null&&(P.return=null),p.return=null}catch(B){At(p,o,B)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Tv(o,i),o=o.sibling}function Tv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Fr(o,i),hi(i),h&4){try{tu(3,i,i.return),Yc(3,i)}catch(pe){At(i,i.return,pe)}try{tu(5,i,i.return)}catch(pe){At(i,i.return,pe)}}break;case 1:Fr(o,i),hi(i),h&512&&l!==null&&Ba(l,l.return);break;case 5:if(Fr(o,i),hi(i),h&512&&l!==null&&Ba(l,l.return),i.flags&32){var p=i.stateNode;try{Cr(p,"")}catch(pe){At(i,i.return,pe)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,E=l!==null?l.memoizedProps:_,S=i.type,P=i.updateQueue;if(i.updateQueue=null,P!==null)try{S==="input"&&_.type==="radio"&&_.name!=null&&nn(p,_),In(S,E);var B=In(S,_);for(E=0;E<P.length;E+=2){var X=P[E],J=P[E+1];X==="style"?xn(p,J):X==="dangerouslySetInnerHTML"?cs(p,J):X==="children"?Cr(p,J):ve(p,X,J,B)}switch(S){case"input":Qr(p,_);break;case"textarea":Sr(p,_);break;case"select":var Y=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var le=_.value;le!=null?Ir(p,!!_.multiple,le,!1):Y!==!!_.multiple&&(_.defaultValue!=null?Ir(p,!!_.multiple,_.defaultValue,!0):Ir(p,!!_.multiple,_.multiple?[]:"",!1))}p[$l]=_}catch(pe){At(i,i.return,pe)}}break;case 6:if(Fr(o,i),hi(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(pe){At(i,i.return,pe)}}break;case 3:if(Fr(o,i),hi(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Dr(o.containerInfo)}catch(pe){At(i,i.return,pe)}break;case 4:Fr(o,i),hi(i);break;case 13:Fr(o,i),hi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(hp=lt())),h&4&&wv(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(gn=(B=gn)||X,Fr(o,i),gn=B):Fr(o,i),hi(i),h&8192){if(B=i.memoizedState!==null,(i.stateNode.isHidden=B)&&!X&&(i.mode&1)!==0)for(ce=i,X=i.child;X!==null;){for(J=ce=X;ce!==null;){switch(Y=ce,le=Y.child,Y.tag){case 0:case 11:case 14:case 15:tu(4,Y,Y.return);break;case 1:Ba(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,de.props=o.memoizedProps,de.state=o.memoizedState,de.componentWillUnmount()}catch(pe){At(h,l,pe)}}break;case 5:Ba(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Cv(J);continue}}le!==null?(le.return=Y,ce=le):Cv(J)}X=X.sibling}e:for(X=null,J=i;;){if(J.tag===5){if(X===null){X=J;try{p=J.stateNode,B?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(S=J.stateNode,P=J.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=hs("display",E))}catch(pe){At(i,i.return,pe)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=B?"":J.memoizedProps}catch(pe){At(i,i.return,pe)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===i)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===i)break e;for(;J.sibling===null;){if(J.return===null||J.return===i)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Fr(o,i),hi(i),h&4&&wv(i);break;case 21:break;default:Fr(o,i),hi(i)}}function hi(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(yv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Cr(p,""),h.flags&=-33);var _=vv(i);lp(i,_,p);break;case 3:case 4:var E=h.stateNode.containerInfo,S=vv(i);ap(i,S,E);break;default:throw Error(t(161))}}catch(P){At(i,i.return,P)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function e1(i,o,l){ce=i,Iv(i)}function Iv(i,o,l){for(var h=(i.mode&1)!==0;ce!==null;){var p=ce,_=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Qc;if(!E){var S=p.alternate,P=S!==null&&S.memoizedState!==null||gn;S=Qc;var B=gn;if(Qc=E,(gn=P)&&!B)for(ce=p;ce!==null;)E=ce,P=E.child,E.tag===22&&E.memoizedState!==null?Rv(p):P!==null?(P.return=E,ce=P):Rv(p);for(;_!==null;)ce=_,Iv(_),_=_.sibling;ce=p,Qc=S,gn=B}Sv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,ce=_):Sv(i)}}function Sv(i){for(;ce!==null;){var o=ce;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:gn||Yc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!gn)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Mr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Cy(o,_,h);break;case 3:var E=o.updateQueue;if(E!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Cy(o,E,l)}break;case 5:var S=o.stateNode;if(l===null&&o.flags&4){l=S;var P=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&l.focus();break;case"img":P.src&&(l.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var B=o.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Dr(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||o.flags&512&&op(o)}catch(Y){At(o,o.return,Y)}}if(o===i){ce=null;break}if(l=o.sibling,l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Cv(i){for(;ce!==null;){var o=ce;if(o===i){ce=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ce=l;break}ce=o.return}}function Rv(i){for(;ce!==null;){var o=ce;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Yc(4,o)}catch(P){At(o,l,P)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(P){At(o,p,P)}}var _=o.return;try{op(o)}catch(P){At(o,_,P)}break;case 5:var E=o.return;try{op(o)}catch(P){At(o,E,P)}}}catch(P){At(o,o.return,P)}if(o===i){ce=null;break}var S=o.sibling;if(S!==null){S.return=o.return,ce=S;break}ce=o.return}}var t1=Math.ceil,Xc=Ie.ReactCurrentDispatcher,up=Ie.ReactCurrentOwner,mr=Ie.ReactCurrentBatchConfig,Ze=0,Yt=null,Lt=null,an=0,ir=0,Wa=Ts(0),$t=0,nu=null,Ro=0,Jc=0,cp=0,ru=null,zn=null,hp=0,$a=1/0,Wi=null,Zc=!1,dp=null,ks=null,eh=!1,Ps=null,th=0,iu=0,fp=null,nh=-1,rh=0;function Pn(){return(Ze&6)!==0?lt():nh!==-1?nh:nh=lt()}function Ns(i){return(i.mode&1)===0?1:(Ze&2)!==0&&an!==0?an&-an:FC.transition!==null?(rh===0&&(rh=ye()),rh):(i=Le,i!==0||(i=window.event,i=i===void 0?16:Dl(i.type)),i)}function Ur(i,o,l,h){if(50<iu)throw iu=0,fp=null,Error(t(185));Ke(i,l,h),((Ze&2)===0||i!==Yt)&&(i===Yt&&((Ze&2)===0&&(Jc|=l),$t===4&&xs(i,an)),Bn(i,h),l===1&&Ze===0&&(o.mode&1)===0&&($a=lt()+500,xc&&Ss()))}function Bn(i,o){var l=i.callbackNode;re(i,o);var h=L(i,i===Yt?an:0);if(h===0)l!==null&&ho(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&ho(l),o===1)i.tag===0?VC(kv.bind(null,i)):fy(kv.bind(null,i)),bC(function(){(Ze&6)===0&&Ss()}),l=null;else{switch(Rn(h)){case 1:l=ei;break;case 4:l=ti;break;case 16:l=Ln;break;case 536870912:l=ha;break;default:l=Ln}l=Mv(l,Av.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Av(i,o){if(nh=-1,rh=0,(Ze&6)!==0)throw Error(t(327));var l=i.callbackNode;if(qa()&&i.callbackNode!==l)return null;var h=L(i,i===Yt?an:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ih(i,h);else{o=h;var p=Ze;Ze|=2;var _=Nv();(Yt!==i||an!==o)&&(Wi=null,$a=lt()+500,ko(i,o));do try{i1();break}catch(S){Pv(i,S)}while(!0);xf(),Xc.current=_,Ze=p,Lt!==null?o=0:(Yt=null,an=0,o=$t)}if(o!==0){if(o===2&&(p=te(i),p!==0&&(h=p,o=pp(i,p))),o===1)throw l=nu,ko(i,0),xs(i,h),Bn(i,lt()),l;if(o===6)xs(i,h);else{if(p=i.current.alternate,(h&30)===0&&!n1(p)&&(o=ih(i,h),o===2&&(_=te(i),_!==0&&(h=_,o=pp(i,_))),o===1))throw l=nu,ko(i,0),xs(i,h),Bn(i,lt()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Po(i,zn,Wi);break;case 3:if(xs(i,h),(h&130023424)===h&&(o=hp+500-lt(),10<o)){if(L(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){Pn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Ef(Po.bind(null,i,zn,Wi),o);break}Po(i,zn,Wi);break;case 4:if(xs(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var E=31-Gt(h);_=1<<E,E=o[E],E>p&&(p=E),h&=~_}if(h=p,h=lt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*t1(h/1960))-h,10<h){i.timeoutHandle=Ef(Po.bind(null,i,zn,Wi),h);break}Po(i,zn,Wi);break;case 5:Po(i,zn,Wi);break;default:throw Error(t(329))}}}return Bn(i,lt()),i.callbackNode===l?Av.bind(null,i):null}function pp(i,o){var l=ru;return i.current.memoizedState.isDehydrated&&(ko(i,o).flags|=256),i=ih(i,o),i!==2&&(o=zn,zn=l,o!==null&&mp(o)),i}function mp(i){zn===null?zn=i:zn.push.apply(zn,i)}function n1(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!Or(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function xs(i,o){for(o&=~cp,o&=~Jc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-Gt(o),h=1<<l;i[l]=-1,o&=~h}}function kv(i){if((Ze&6)!==0)throw Error(t(327));qa();var o=L(i,0);if((o&1)===0)return Bn(i,lt()),null;var l=ih(i,o);if(i.tag!==0&&l===2){var h=te(i);h!==0&&(o=h,l=pp(i,h))}if(l===1)throw l=nu,ko(i,0),xs(i,o),Bn(i,lt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Po(i,zn,Wi),Bn(i,lt()),null}function gp(i,o){var l=Ze;Ze|=1;try{return i(o)}finally{Ze=l,Ze===0&&($a=lt()+500,xc&&Ss())}}function Ao(i){Ps!==null&&Ps.tag===0&&(Ze&6)===0&&qa();var o=Ze;Ze|=1;var l=mr.transition,h=Le;try{if(mr.transition=null,Le=1,i)return i()}finally{Le=h,mr.transition=l,Ze=o,(Ze&6)===0&&Ss()}}function _p(){ir=Wa.current,_t(Wa)}function ko(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,DC(l)),Lt!==null)for(l=Lt.return;l!==null;){var h=l;switch(Rf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Pc();break;case 3:ja(),_t(Fn),_t(fn),Uf();break;case 5:Vf(h);break;case 4:ja();break;case 13:_t(wt);break;case 19:_t(wt);break;case 10:Df(h.type._context);break;case 22:case 23:_p()}l=l.return}if(Yt=i,Lt=i=Ds(i.current,null),an=ir=o,$t=0,nu=null,cp=Jc=Ro=0,zn=ru=null,Io!==null){for(o=0;o<Io.length;o++)if(l=Io[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var E=_.next;_.next=p,h.next=E}l.pending=h}Io=null}return i}function Pv(i,o){do{var l=Lt;try{if(xf(),zc.current=qc,Bc){for(var h=Tt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Bc=!1}if(Co=0,Qt=Wt=Tt=null,Yl=!1,Xl=0,up.current=null,l===null||l.return===null){$t=1,nu=o,Lt=null;break}e:{var _=i,E=l.return,S=l,P=o;if(o=an,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,X=S,J=X.tag;if((X.mode&1)===0&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var le=ev(E);if(le!==null){le.flags&=-257,tv(le,E,S,_,o),le.mode&1&&Zy(_,B,o),o=le,P=B;var de=o.updateQueue;if(de===null){var pe=new Set;pe.add(P),o.updateQueue=pe}else de.add(P);break e}else{if((o&1)===0){Zy(_,B,o),yp();break e}P=Error(t(426))}}else if(Et&&S.mode&1){var Nt=ev(E);if(Nt!==null){(Nt.flags&65536)===0&&(Nt.flags|=256),tv(Nt,E,S,_,o),Pf(za(P,S));break e}}_=P=za(P,S),$t!==4&&($t=2),ru===null?ru=[_]:ru.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=Xy(_,P,o);Sy(_,U);break e;case 1:S=P;var x=_.type,j=_.stateNode;if((_.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ks===null||!ks.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var Z=Jy(_,S,o);Sy(_,Z);break e}}_=_.return}while(_!==null)}Dv(l)}catch(me){o=me,Lt===l&&l!==null&&(Lt=l=l.return);continue}break}while(!0)}function Nv(){var i=Xc.current;return Xc.current=qc,i===null?qc:i}function yp(){($t===0||$t===3||$t===2)&&($t=4),Yt===null||(Ro&268435455)===0&&(Jc&268435455)===0||xs(Yt,an)}function ih(i,o){var l=Ze;Ze|=2;var h=Nv();(Yt!==i||an!==o)&&(Wi=null,ko(i,o));do try{r1();break}catch(p){Pv(i,p)}while(!0);if(xf(),Ze=l,Xc.current=h,Lt!==null)throw Error(t(261));return Yt=null,an=0,$t}function r1(){for(;Lt!==null;)xv(Lt)}function i1(){for(;Lt!==null&&!ua();)xv(Lt)}function xv(i){var o=Lv(i.alternate,i,ir);i.memoizedProps=i.pendingProps,o===null?Dv(i):Lt=o,up.current=null}function Dv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=YC(l,o,ir),l!==null){Lt=l;return}}else{if(l=XC(l,o),l!==null){l.flags&=32767,Lt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{$t=6,Lt=null;return}}if(o=o.sibling,o!==null){Lt=o;return}Lt=o=i}while(o!==null);$t===0&&($t=5)}function Po(i,o,l){var h=Le,p=mr.transition;try{mr.transition=null,Le=1,s1(i,o,l,h)}finally{mr.transition=p,Le=h}return null}function s1(i,o,l,h){do qa();while(Ps!==null);if((Ze&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(ze(i,_),i===Yt&&(Lt=Yt=null,an=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||eh||(eh=!0,Mv(Ln,function(){return qa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=mr.transition,mr.transition=null;var E=Le;Le=1;var S=Ze;Ze|=4,up.current=null,ZC(i,l),Tv(l,i),CC(yf),ys=!!_f,yf=_f=null,i.current=l,e1(l),Pl(),Ze=S,Le=E,mr.transition=_}else i.current=l;if(eh&&(eh=!1,Ps=i,th=p),_=i.pendingLanes,_===0&&(ks=null),da(l.stateNode),Bn(i,lt()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Zc)throw Zc=!1,i=dp,dp=null,i;return(th&1)!==0&&i.tag!==0&&qa(),_=i.pendingLanes,(_&1)!==0?i===fp?iu++:(iu=0,fp=i):iu=0,Ss(),null}function qa(){if(Ps!==null){var i=Rn(th),o=mr.transition,l=Le;try{if(mr.transition=null,Le=16>i?16:i,Ps===null)var h=!1;else{if(i=Ps,Ps=null,th=0,(Ze&6)!==0)throw Error(t(331));var p=Ze;for(Ze|=4,ce=i.current;ce!==null;){var _=ce,E=_.child;if((ce.flags&16)!==0){var S=_.deletions;if(S!==null){for(var P=0;P<S.length;P++){var B=S[P];for(ce=B;ce!==null;){var X=ce;switch(X.tag){case 0:case 11:case 15:tu(8,X,_)}var J=X.child;if(J!==null)J.return=X,ce=J;else for(;ce!==null;){X=ce;var Y=X.sibling,le=X.return;if(_v(X),X===B){ce=null;break}if(Y!==null){Y.return=le,ce=Y;break}ce=le}}}var de=_.alternate;if(de!==null){var pe=de.child;if(pe!==null){de.child=null;do{var Nt=pe.sibling;pe.sibling=null,pe=Nt}while(pe!==null)}}ce=_}}if((_.subtreeFlags&2064)!==0&&E!==null)E.return=_,ce=E;else e:for(;ce!==null;){if(_=ce,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:tu(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,ce=U;break e}ce=_.return}}var x=i.current;for(ce=x;ce!==null;){E=ce;var j=E.child;if((E.subtreeFlags&2064)!==0&&j!==null)j.return=E,ce=j;else e:for(E=x;ce!==null;){if(S=ce,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Yc(9,S)}}catch(me){At(S,S.return,me)}if(S===E){ce=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,ce=Z;break e}ce=S.return}}if(Ze=p,Ss(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Ni,i)}catch{}h=!0}return h}finally{Le=l,mr.transition=o}}return!1}function bv(i,o,l){o=za(l,o),o=Xy(i,o,1),i=Rs(i,o,1),o=Pn(),i!==null&&(Ke(i,1,o),Bn(i,o))}function At(i,o,l){if(i.tag===3)bv(i,i,l);else for(;o!==null;){if(o.tag===3){bv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ks===null||!ks.has(h))){i=za(l,i),i=Jy(o,i,1),o=Rs(o,i,1),i=Pn(),o!==null&&(Ke(o,1,i),Bn(o,i));break}}o=o.return}}function o1(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=Pn(),i.pingedLanes|=i.suspendedLanes&l,Yt===i&&(an&l)===l&&($t===4||$t===3&&(an&130023424)===an&&500>lt()-hp?ko(i,0):cp|=l),Bn(i,o)}function Ov(i,o){o===0&&((i.mode&1)===0?o=1:(o=xi,xi<<=1,(xi&130023424)===0&&(xi=4194304)));var l=Pn();i=ji(i,o),i!==null&&(Ke(i,o,l),Bn(i,l))}function a1(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Ov(i,l)}function l1(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Ov(i,l)}var Lv;Lv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Fn.current)jn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return jn=!1,QC(i,o,l);jn=(i.flags&131072)!==0}else jn=!1,Et&&(o.flags&1048576)!==0&&py(o,bc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Kc(i,o),i=o.pendingProps;var p=ba(o,fn.current);Ua(o,l),p=Bf(null,o,h,i,p,l);var _=Wf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Un(h)?(_=!0,Nc(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Lf(o),p.updater=Hc,o.stateNode=p,p._reactInternals=o,Qf(o,h,i,l),o=Zf(null,o,h,!0,_,l)):(o.tag=0,Et&&_&&Cf(o),kn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(Kc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=c1(h),i=Mr(h,i),p){case 0:o=Jf(null,o,h,i,l);break e;case 1:o=av(null,o,h,i,l);break e;case 11:o=nv(null,o,h,i,l);break e;case 14:o=rv(null,o,h,Mr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Mr(h,p),Jf(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Mr(h,p),av(i,o,h,p,l);case 3:e:{if(lv(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,Iy(i,o),Uc(o,h,null,l);var E=o.memoizedState;if(h=E.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=za(Error(t(423)),o),o=uv(i,o,h,l,p);break e}else if(h!==p){p=za(Error(t(424)),o),o=uv(i,o,h,l,p);break e}else for(rr=ws(o.stateNode.containerInfo.firstChild),nr=o,Et=!0,Lr=null,l=wy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ma(),h===p){o=Bi(i,o,l);break e}kn(i,o,h,l)}o=o.child}return o;case 5:return Ry(o),i===null&&kf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,E=p.children,vf(h,p)?E=null:_!==null&&vf(h,_)&&(o.flags|=32),ov(i,o),kn(i,o,E,l),o.child;case 6:return i===null&&kf(o),null;case 13:return cv(i,o,l);case 4:return Mf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Va(o,null,h,l):kn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Mr(h,p),nv(i,o,h,p,l);case 7:return kn(i,o,o.pendingProps,l),o.child;case 8:return kn(i,o,o.pendingProps.children,l),o.child;case 12:return kn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,E=p.value,pt(Mc,h._currentValue),h._currentValue=E,_!==null)if(Or(_.value,E)){if(_.children===p.children&&!Fn.current){o=Bi(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var S=_.dependencies;if(S!==null){E=_.child;for(var P=S.firstContext;P!==null;){if(P.context===h){if(_.tag===1){P=zi(-1,l&-l),P.tag=2;var B=_.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?P.next=P:(P.next=X.next,X.next=P),B.pending=P}}_.lanes|=l,P=_.alternate,P!==null&&(P.lanes|=l),bf(_.return,l,o),S.lanes|=l;break}P=P.next}}else if(_.tag===10)E=_.type===o.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=l,S=E.alternate,S!==null&&(S.lanes|=l),bf(E,l,o),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===o){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}kn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Ua(o,l),p=fr(p),h=h(p),o.flags|=1,kn(i,o,h,l),o.child;case 14:return h=o.type,p=Mr(h,o.pendingProps),p=Mr(h.type,p),rv(i,o,h,p,l);case 15:return iv(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Mr(h,p),Kc(i,o),o.tag=1,Un(h)?(i=!0,Nc(o)):i=!1,Ua(o,l),Qy(o,h,p),Qf(o,h,p,l),Zf(null,o,h,!0,i,l);case 19:return dv(i,o,l);case 22:return sv(i,o,l)}throw Error(t(156,o.tag))};function Mv(i,o){return Pi(i,o)}function u1(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gr(i,o,l,h){return new u1(i,o,l,h)}function vp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function c1(i){if(typeof i=="function")return vp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===kt)return 14}return 2}function Ds(i,o){var l=i.alternate;return l===null?(l=gr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function sh(i,o,l,h,p,_){var E=2;if(h=i,typeof i=="function")vp(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case b:return No(l.children,p,_,o);case C:E=8,p|=8;break;case k:return i=gr(12,l,o,p|2),i.elementType=k,i.lanes=_,i;case A:return i=gr(13,l,o,p),i.elementType=A,i.lanes=_,i;case ct:return i=gr(19,l,o,p),i.elementType=ct,i.lanes=_,i;case et:return oh(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:E=10;break e;case O:E=9;break e;case V:E=11;break e;case kt:E=14;break e;case St:E=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=gr(E,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function No(i,o,l,h){return i=gr(7,i,h,o),i.lanes=l,i}function oh(i,o,l,h){return i=gr(22,i,h,o),i.elementType=et,i.lanes=l,i.stateNode={isHidden:!1},i}function Ep(i,o,l){return i=gr(6,i,null,o),i.lanes=l,i}function wp(i,o,l){return o=gr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function h1(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Re(0),this.expirationTimes=Re(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Tp(i,o,l,h,p,_,E,S,P){return i=new h1(i,o,l,S,P),o===1?(o=1,_===!0&&(o|=8)):o=0,_=gr(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lf(_),i}function d1(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Vv(i){if(!i)return Is;i=i._reactInternals;e:{if(Jn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Un(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Un(l))return hy(i,l,o)}return o}function Fv(i,o,l,h,p,_,E,S,P){return i=Tp(l,h,!0,i,p,_,E,S,P),i.context=Vv(null),l=i.current,h=Pn(),p=Ns(l),_=zi(h,p),_.callback=o??null,Rs(l,_,p),i.current.lanes=p,Ke(i,p,h),Bn(i,h),i}function ah(i,o,l,h){var p=o.current,_=Pn(),E=Ns(p);return l=Vv(l),o.context===null?o.context=l:o.pendingContext=l,o=zi(_,E),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Rs(p,o,E),i!==null&&(Ur(i,p,E,_),Fc(i,p,E)),E}function lh(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Uv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Ip(i,o){Uv(i,o),(i=i.alternate)&&Uv(i,o)}function f1(){return null}var jv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Sp(i){this._internalRoot=i}uh.prototype.render=Sp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));ah(i,o,null,null)},uh.prototype.unmount=Sp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Ao(function(){ah(null,i,null,null)}),o[Mi]=null}};function uh(i){this._internalRoot=i}uh.prototype.unstable_scheduleHydration=function(i){if(i){var o=uc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<ii.length&&o!==0&&o<ii[l].priority;l++);ii.splice(l,0,i),l===0&&dc(i)}};function Cp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ch(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function zv(){}function p1(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var B=lh(E);_.call(B)}}var E=Fv(o,h,i,0,null,!1,!1,"",zv);return i._reactRootContainer=E,i[Mi]=E.current,Bl(i.nodeType===8?i.parentNode:i),Ao(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var S=h;h=function(){var B=lh(P);S.call(B)}}var P=Tp(i,0,!1,null,null,!1,!1,"",zv);return i._reactRootContainer=P,i[Mi]=P.current,Bl(i.nodeType===8?i.parentNode:i),Ao(function(){ah(o,P,l,h)}),P}function hh(i,o,l,h,p){var _=l._reactRootContainer;if(_){var E=_;if(typeof p=="function"){var S=p;p=function(){var P=lh(E);S.call(P)}}ah(o,E,i,p)}else E=p1(l,o,i,p,h);return lh(E)}gs=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=kr(o.pendingLanes);l!==0&&(Ve(o,l|1),Bn(o,lt()),(Ze&6)===0&&($a=lt()+500,Ss()))}break;case 13:Ao(function(){var h=ji(i,1);if(h!==null){var p=Pn();Ur(h,i,1,p)}}),Ip(i,1)}},ni=function(i){if(i.tag===13){var o=ji(i,134217728);if(o!==null){var l=Pn();Ur(o,i,134217728,l)}Ip(i,134217728)}},ma=function(i){if(i.tag===13){var o=Ns(i),l=ji(i,o);if(l!==null){var h=Pn();Ur(l,i,o,h)}Ip(i,o)}},uc=function(){return Le},cc=function(i,o){var l=Le;try{return Le=i,o()}finally{Le=l}},Si=function(i,o,l){switch(o){case"input":if(Qr(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=kc(h);if(!p)throw Error(t(90));Ti(h),Qr(h,p)}}}break;case"textarea":Sr(i,l);break;case"select":o=l.value,o!=null&&Ir(i,!!l.multiple,o,!1)}},Yn=gp,fs=Ao;var m1={usingClientEntryPoint:!1,Events:[ql,xa,kc,dn,Ci,gp]},su={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:su.bundleType,version:su.version,rendererPackageName:su.rendererPackageName,rendererConfig:su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=co(i),i===null?null:i.stateNode},findFiberByHostInstance:su.findFiberByHostInstance||f1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dh.isDisabled&&dh.supportsFiber)try{Ni=dh.inject(g1),Cn=dh}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1,Wn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(o))throw Error(t(200));return d1(i,o,null,l)},Wn.createRoot=function(i,o){if(!Cp(i))throw Error(t(299));var l=!1,h="",p=jv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Tp(i,1,!1,null,null,l,!1,h,p),i[Mi]=o.current,Bl(i.nodeType===8?i.parentNode:i),new Sp(o)},Wn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=co(o),i=i===null?null:i.stateNode,i},Wn.flushSync=function(i){return Ao(i)},Wn.hydrate=function(i,o,l){if(!ch(o))throw Error(t(200));return hh(null,i,o,!0,l)},Wn.hydrateRoot=function(i,o,l){if(!Cp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",E=jv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),o=Fv(o,null,i,1,l??null,p,!1,_,E),i[Mi]=o.current,Bl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new uh(o)},Wn.render=function(i,o,l){if(!ch(o))throw Error(t(200));return hh(null,i,o,!1,l)},Wn.unmountComponentAtNode=function(i){if(!ch(i))throw Error(t(40));return i._reactRootContainer?(Ao(function(){hh(null,null,i,!1,function(){i._reactRootContainer=null,i[Mi]=null})}),!0):!1},Wn.unstable_batchedUpdates=gp,Wn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!ch(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return hh(i,o,l,!1,h)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Qv;function R1(){if(Qv)return kp.exports;Qv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),kp.exports=C1(),kp.exports}var Yv;function A1(){if(Yv)return fh;Yv=1;var n=R1();return fh.createRoot=n.createRoot,fh.hydrateRoot=n.hydrateRoot,fh}var k1=A1();const P1=()=>{};var Xv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(n,e){if(!n)throw El(e)},El=function(n){return new Error("Firebase Database ("+N0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},N1=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,v=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|g>>6,D=g&63;f||(D=64,u||(T=64)),r.push(t[v],t[w],t[T],t[D])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(x0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):N1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||g==null||w==null)throw new x1;const T=a<<2|d>>4;if(r.push(T),g!==64){const D=d<<4&240|g>>2;if(r.push(D),w!==64){const z=g<<6&192|w;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class x1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D0=function(n){const e=x0(n);return Qm.encodeByteArray(e,!0)},Vh=function(n){return D0(n).replace(/\./g,"")},Fh=function(n){try{return Qm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(n){return b0(void 0,n)}function b0(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!b1(t)||(n[t]=b0(n[t],e[t]));return n}function b1(n){return n!=="__proto__"}/**
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
 */function O1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const L1=()=>O1().__FIREBASE_DEFAULTS__,M1=()=>{if(typeof process>"u"||typeof Xv>"u")return;const n=Xv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},V1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fh(n[1]);return e&&JSON.parse(e)},vd=()=>{try{return P1()||L1()||M1()||V1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},O0=n=>{var e,t;return(t=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},L0=n=>{const e=O0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},M0=()=>{var n;return(n=vd())===null||n===void 0?void 0:n.config},V0=n=>{var e;return(e=vd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function as(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ed(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function F1(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vh(JSON.stringify(t)),Vh(JSON.stringify(u)),""].join(".")}const vu={};function U1(){const n={prod:[],emulator:[]};for(const e of Object.keys(vu))vu[e]?n.emulator.push(e):n.prod.push(e);return n}function j1(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Jv=!1;function Ym(n,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||vu[n]===e||vu[n]||Jv)return;vu[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=U1().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,D){T.setAttribute("width","24"),T.setAttribute("id",D),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Jv=!0,u()},T}function v(T,D){T.setAttribute("id",D),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=j1(r),D=t("text"),z=document.getElementById(D)||document.createElement("span"),q=t("learnmore"),W=document.getElementById(q)||document.createElement("a"),ge=t("preprendIcon"),fe=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const ve=T.element;d(ve),v(W,q);const Ie=g();f(fe,ge),ve.append(fe,z,W,Ie),document.body.appendChild(ve)}a?(z.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vn())}function z1(){var n;const e=(n=vd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function B1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function F0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $1(){const n=vn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function q1(){return N0.NODE_ADMIN===!0}function H1(){return!z1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G1(){try{return typeof indexedDB=="object"}catch{return!1}}function K1(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="FirebaseError";class ls extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Q1,Object.setPrototypeOf(this,ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gu.prototype.create)}}class Gu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?Y1(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new ls(s,d,r)}}function Y1(n,e){return n.replace(X1,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const X1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){return JSON.parse(n)}function tn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=Pu(Fh(a[0])||""),t=Pu(Fh(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},J1=function(n){const e=U0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Z1=function(n){const e=U0(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ll(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Uh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Gs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Zv(a)&&Zv(u)){if(!Gs(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Zv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function du(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function fu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let w=0;w<16;w++)r[w]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let w=0;w<16;w++)r[w]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let w=16;w<80;w++){const T=r[w-3]^r[w-8]^r[w-14]^r[w-16];r[w]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],g,v;for(let w=0;w<80;w++){w<40?w<20?(g=d^a&(u^d),v=1518500249):(g=a^u^d,v=1859775393):w<60?(g=a&u|d&(a|u),v=2400959708):(g=a^u^d,v=3395469782);const T=(s<<5|s>>>27)+g+f+v+r[w]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function tR(n,e){const t=new nR(n,e);return t.subscribe.bind(t)}class nR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");rR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=xp),s.error===void 0&&(s.error=xp),s.complete===void 0&&(s.complete=xp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xp(){}function ul(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class es{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bo="[DEFAULT]";/**
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
 */class sR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aR(e))try{this.getOrInitializeService({instanceIdentifier:bo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=bo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bo){return this.instances.has(e)}getOptions(e=bo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bo){return this.component?this.component.multipleInstances?e:bo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oR(n){return n===bo?void 0:n}function aR(n){return n.instantiationMode==="EAGER"}/**
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
 */class lR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(qe||(qe={}));const uR={debug:qe.DEBUG,verbose:qe.VERBOSE,info:qe.INFO,warn:qe.WARN,error:qe.ERROR,silent:qe.SILENT},cR=qe.INFO,hR={[qe.DEBUG]:"log",[qe.VERBOSE]:"log",[qe.INFO]:"info",[qe.WARN]:"warn",[qe.ERROR]:"error"},dR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=hR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=cR,this._logHandler=dR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qe.DEBUG,...e),this._logHandler(this,qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qe.VERBOSE,...e),this._logHandler(this,qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qe.INFO,...e),this._logHandler(this,qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qe.WARN,...e),this._logHandler(this,qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qe.ERROR,...e),this._logHandler(this,qe.ERROR,...e)}}const fR=(n,e)=>e.some(t=>n instanceof t);let eE,tE;function pR(){return eE||(eE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mR(){return tE||(tE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j0=new WeakMap,sm=new WeakMap,z0=new WeakMap,Dp=new WeakMap,Jm=new WeakMap;function gR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(zs(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&j0.set(t,n)}).catch(()=>{}),Jm.set(e,n),e}function _R(n){if(sm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});sm.set(n,e)}let om={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||z0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yR(n){om=n(om)}function vR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bp(this),e,...t);return z0.set(r,e.sort?e.sort():[e]),zs(r)}:mR().includes(n)?function(...e){return n.apply(bp(this),e),zs(j0.get(this))}:function(...e){return zs(n.apply(bp(this),e))}}function ER(n){return typeof n=="function"?vR(n):(n instanceof IDBTransaction&&_R(n),fR(n,pR())?new Proxy(n,om):n)}function zs(n){if(n instanceof IDBRequest)return gR(n);if(Dp.has(n))return Dp.get(n);const e=ER(n);return e!==n&&(Dp.set(n,e),Jm.set(e,n)),e}const bp=n=>Jm.get(n);function wR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=zs(u);return r&&u.addEventListener("upgradeneeded",f=>{r(zs(u.result),f.oldVersion,f.newVersion,zs(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const TR=["get","getKey","getAll","getAllKeys","count"],IR=["put","add","delete","clear"],Op=new Map;function nE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Op.get(e))return Op.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=IR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),s&&f.done]))[0]};return Op.set(e,a),a}yR(n=>({...n,get:(e,t,r)=>nE(e,t)||n.get(e,t,r),has:(e,t)=>!!nE(e,t)||n.has(e,t)}));/**
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
 */class SR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(CR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function CR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const am="@firebase/app",rE="0.13.2";/**
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
 */const ts=new Td("@firebase/app"),RR="@firebase/app-compat",AR="@firebase/analytics-compat",kR="@firebase/analytics",PR="@firebase/app-check-compat",NR="@firebase/app-check",xR="@firebase/auth",DR="@firebase/auth-compat",bR="@firebase/database",OR="@firebase/data-connect",LR="@firebase/database-compat",MR="@firebase/functions",VR="@firebase/functions-compat",FR="@firebase/installations",UR="@firebase/installations-compat",jR="@firebase/messaging",zR="@firebase/messaging-compat",BR="@firebase/performance",WR="@firebase/performance-compat",$R="@firebase/remote-config",qR="@firebase/remote-config-compat",HR="@firebase/storage",GR="@firebase/storage-compat",KR="@firebase/firestore",QR="@firebase/ai",YR="@firebase/firestore-compat",XR="firebase",JR="11.10.0";/**
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
 */const lm="[DEFAULT]",ZR={[am]:"fire-core",[RR]:"fire-core-compat",[kR]:"fire-analytics",[AR]:"fire-analytics-compat",[NR]:"fire-app-check",[PR]:"fire-app-check-compat",[xR]:"fire-auth",[DR]:"fire-auth-compat",[bR]:"fire-rtdb",[OR]:"fire-data-connect",[LR]:"fire-rtdb-compat",[MR]:"fire-fn",[VR]:"fire-fn-compat",[FR]:"fire-iid",[UR]:"fire-iid-compat",[jR]:"fire-fcm",[zR]:"fire-fcm-compat",[BR]:"fire-perf",[WR]:"fire-perf-compat",[$R]:"fire-rc",[qR]:"fire-rc-compat",[HR]:"fire-gcs",[GR]:"fire-gcs-compat",[KR]:"fire-fst",[YR]:"fire-fst-compat",[QR]:"fire-vertex","fire-js":"fire-js",[XR]:"fire-js-all"};/**
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
 */const zh=new Map,eA=new Map,um=new Map;function iE(n,e){try{n.container.addComponent(e)}catch(t){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ks(n){const e=n.name;if(um.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;um.set(e,n);for(const t of zh.values())iE(t,n);for(const t of eA.values())iE(t,n);return!0}function Ku(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const tA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bs=new Gu("app","Firebase",tA);/**
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
 */class nA{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bs.create("app-deleted",{appName:this._name})}}/**
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
 */const Zo=JR;function B0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lm,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Bs.create("bad-app-name",{appName:String(s)});if(t||(t=M0()),!t)throw Bs.create("no-options");const a=zh.get(s);if(a){if(Gs(t,a.options)&&Gs(r,a.config))return a;throw Bs.create("duplicate-app",{appName:s})}const u=new lR(s);for(const f of um.values())u.addComponent(f);const d=new nA(t,r,u);return zh.set(s,d),d}function Zm(n=lm){const e=zh.get(n);if(!e&&n===lm&&M0())return B0();if(!e)throw Bs.create("no-app",{appName:n});return e}function Er(n,e,t){var r;let s=(r=ZR[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(d.join(" "));return}Ks(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rA="firebase-heartbeat-database",iA=1,Nu="firebase-heartbeat-store";let Lp=null;function W0(){return Lp||(Lp=wR(rA,iA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Nu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bs.create("idb-open",{originalErrorMessage:n.message})})),Lp}async function sA(n){try{const t=(await W0()).transaction(Nu),r=await t.objectStore(Nu).get($0(n));return await t.done,r}catch(e){if(e instanceof ls)ts.warn(e.message);else{const t=Bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(t.message)}}}async function sE(n,e){try{const r=(await W0()).transaction(Nu,"readwrite");await r.objectStore(Nu).put(e,$0(n)),await r.done}catch(t){if(t instanceof ls)ts.warn(t.message);else{const r=Bs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ts.warn(r.message)}}}function $0(n){return`${n.name}!${n.options.appId}`}/**
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
 */const oA=1024,aA=30;class lA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=oE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>aA){const u=hA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ts.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oE(),{heartbeatsToSend:r,unsentEntries:s}=uA(this._heartbeatsCache.heartbeats),a=Vh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ts.warn(t),""}}}function oE(){return new Date().toISOString().substring(0,10)}function uA(n,e=oA){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),aE(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),aE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G1()?K1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function aE(n){return Vh(JSON.stringify({version:2,heartbeats:n})).length}function hA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function dA(n){Ks(new es("platform-logger",e=>new SR(e),"PRIVATE")),Ks(new es("heartbeat",e=>new lA(e),"PRIVATE")),Er(am,rE,n),Er(am,rE,"esm2017"),Er("fire-js","")}dA("");function eg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function q0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fA=q0,H0=new Gu("auth","Firebase",q0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Td("@firebase/auth");function pA(n,...e){Bh.logLevel<=qe.WARN&&Bh.warn(`Auth (${Zo}): ${n}`,...e)}function Sh(n,...e){Bh.logLevel<=qe.ERROR&&Bh.error(`Auth (${Zo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n,...e){throw ng(n,...e)}function $r(n,...e){return ng(n,...e)}function tg(n,e,t){const r=Object.assign(Object.assign({},fA()),{[e]:t});return new Gu("auth","Firebase",r).create(e,{appName:n.name})}function Xi(n){return tg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function G0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&wr(n,"argument-error"),tg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ng(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return H0.create(n,...e)}function Se(n,e,...t){if(!n)throw ng(e,...t)}function Ki(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sh(e),new Error(e)}function ns(n,e){n||Ki(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function mA(){return lE()==="http:"||lE()==="https:"}function lE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mA()||W1()||"connection"in navigator)?navigator.onLine:!0}function _A(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ns(t>e,"Short delay should be less than long delay!"),this.isMobile=Xm()||F0()}get(){return gA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e){ns(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EA=new Qu(3e4,6e4);function io(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ei(n,e,t,r,s={}){return Q0(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=wl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},a);return B1()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&as(n.emulatorConfig.host)&&(g.credentials="include"),K0.fetch()(await Y0(n,n.config.apiHost,t,d),g)})}async function Q0(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yA),e);try{const s=new TA(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ph(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ph(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw ph(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw ph(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw tg(n,v,g);wr(n,v)}}catch(s){if(s instanceof ls)throw s;wr(n,"network-request-failed",{message:String(s)})}}async function Yu(n,e,t,r,s={}){const a=await Ei(n,e,t,r,s);return"mfaPendingCredential"in a&&wr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Y0(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?rg(n.config,s):`${n.config.apiScheme}://${s}`;return vA.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function wA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($r(this.auth,"network-request-failed")),EA.get())})}}function ph(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=$r(n,e,r);return s.customData._tokenResponse=t,s}function uE(n){return n!==void 0&&n.enterprise!==void 0}class IA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SA(n,e){return Ei(n,"GET","/v2/recaptchaConfig",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(n,e){return Ei(n,"POST","/v1/accounts:delete",e)}async function Wh(n,e){return Ei(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RA(n,e=!1){const t=st(n),r=await t.getIdToken(e),s=ig(r);Se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Eu(Mp(s.auth_time)),issuedAtTime:Eu(Mp(s.iat)),expirationTime:Eu(Mp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Mp(n){return Number(n)*1e3}function ig(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Sh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fh(t);return s?JSON.parse(s):(Sh("Failed to decode base64 JWT payload"),null)}catch(s){return Sh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cE(n){const e=ig(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ls&&AA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function AA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eu(this.lastLoginAt),this.creationTime=Eu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $h(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Wo(n,Wh(t,{idToken:r}));Se(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?X0(a.providerUserInfo):[],d=NA(n.providerData,u),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?g:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new hm(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function PA(n){const e=st(n);await $h(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function X0(n){return n.map(e=>{var{providerId:t}=e,r=eg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,e){const t=await Q0(n,{},async()=>{const r=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await Y0(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&as(n.emulatorConfig.host)&&(f.credentials="include"),K0.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DA(n,e){return Ei(n,"POST","/v2/accounts:revokeToken",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=cE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await xA(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new el;return r&&(Se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Se(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Se(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new el,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=eg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new hm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Wo(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $h(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(Xi(this.auth));const e=await this.getIdToken();return await Wo(this,CA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,g,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,D=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,z=(u=t.photoURL)!==null&&u!==void 0?u:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,W=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,ge=(g=t.createdAt)!==null&&g!==void 0?g:void 0,fe=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ve,emailVerified:Ie,isAnonymous:ut,providerData:Pe,stsTokenManager:b}=t;Se(ve&&b,e,"internal-error");const C=el.fromJSON(this.name,b);Se(typeof ve=="string",e,"internal-error"),Os(w,e.name),Os(T,e.name),Se(typeof Ie=="boolean",e,"internal-error"),Se(typeof ut=="boolean",e,"internal-error"),Os(D,e.name),Os(z,e.name),Os(q,e.name),Os(W,e.name),Os(ge,e.name),Os(fe,e.name);const k=new zr({uid:ve,auth:e,email:T,emailVerified:Ie,displayName:w,isAnonymous:ut,photoURL:z,phoneNumber:D,tenantId:q,stsTokenManager:C,createdAt:ge,lastLoginAt:fe});return Pe&&Array.isArray(Pe)&&(k.providerData=Pe.map(N=>Object.assign({},N))),W&&(k._redirectEventId=W),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new el;s.updateFromServerResponse(t);const a=new zr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $h(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Se(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?X0(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new el;d.updateFromIdToken(r);const f=new zr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function Qi(n){ns(n instanceof Function,"Expected a class definition");let e=hE.get(n);return e?(ns(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,hE.set(n,e),e)}/**
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
 */class J0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}J0.type="NONE";const dE=J0;/**
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
 */function Ch(n,e,t){return`firebase:${n}:${e}:${t}`}class tl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Ch(this.userKey,s.apiKey,a),this.fullPersistenceKey=Ch("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wh(this.auth,{idToken:e}).catch(()=>{});return t?zr._fromGetAccountInfoResponse(this.auth,t,e):null}return zr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tl(Qi(dE),e,r);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||Qi(dE);const u=Ch(r,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(u);if(v){let w;if(typeof v=="string"){const T=await Wh(e,{idToken:v}).catch(()=>{});if(!T)break;w=await zr._fromGetAccountInfoResponse(e,T,v)}else w=zr._fromJSON(e,v);g!==a&&(d=w),a=g;break}}catch{}const f=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new tl(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new tl(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iT(e))return"Blackberry";if(sT(e))return"Webos";if(eT(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z0(n=vn()){return/firefox\//i.test(n)}function eT(n=vn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(n=vn()){return/crios\//i.test(n)}function nT(n=vn()){return/iemobile/i.test(n)}function rT(n=vn()){return/android/i.test(n)}function iT(n=vn()){return/blackberry/i.test(n)}function sT(n=vn()){return/webos/i.test(n)}function sg(n=vn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bA(n=vn()){var e;return sg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OA(){return $1()&&document.documentMode===10}function oT(n=vn()){return sg(n)||rT(n)||sT(n)||iT(n)||/windows phone/i.test(n)||nT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n,e=[]){let t;switch(n){case"Browser":t=fE(vn());break;case"Worker":t=`${fE(vn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zo}/${r}`}/**
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
 */class LA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MA(n,e={}){return Ei(n,"GET","/v2/passwordPolicy",io(n,e))}/**
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
 */const VA=6;class FA{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:VA,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pE(this),this.idTokenSubscription=new pE(this),this.beforeStateQueue=new LA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qi(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await tl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wh(this,{idToken:e}),r=await zr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $h(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(Xi(this));const t=e?st(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MA(this),t=new FA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await DA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qi(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await tl.create(this,[Qi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function so(n){return st(n)}class pE{constructor(e){this.auth=e,this.observer=null,this.addObserver=tR(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jA(n){Id=n}function lT(n){return Id.loadJS(n)}function zA(){return Id.recaptchaEnterpriseScript}function BA(){return Id.gapiScript}function WA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $A{constructor(){this.enterprise=new qA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const HA="recaptcha-enterprise",uT="NO_RECAPTCHA";class GA{constructor(e){this.type=HA,this.auth=so(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{SA(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new IA(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;uE(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{u(g)}).catch(()=>{u(uT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $A().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&uE(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=zA();f.length!==0&&(f+=d),lT(f).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function mE(n,e,t,r=!1,s=!1){const a=new GA(n);let u;if(s)u=uT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function dm(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await mE(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await mE(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n,e){const t=Ku(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Gs(a,e??{}))return s;wr(s,"already-initialized")}return t.initialize({options:e})}function QA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Qi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YA(n,e,t){const r=so(n);Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=cT(e),{host:u,port:d}=XA(e),f=d===null?"":`:${d}`,g={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Se(Gs(g,r.config.emulator)&&Gs(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,as(u)?(Ed(`${a}//${u}${f}`),Ym("Auth",!0)):JA()}function cT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function XA(n){const e=cT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:gE(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:gE(u)}}}function gE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function JA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ki("not implemented")}_getIdTokenResponse(e){return Ki("not implemented")}_linkToIdToken(e,t){return Ki("not implemented")}_getReauthenticationResolver(e){return Ki("not implemented")}}async function ZA(n,e){return Ei(n,"POST","/v1/accounts:update",e)}async function ek(n,e){return Ei(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(n,e){return Yu(n,"POST","/v1/accounts:signInWithPassword",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(n,e){return Yu(n,"POST","/v1/accounts:signInWithEmailLink",io(n,e))}async function rk(n,e){return Yu(n,"POST","/v1/accounts:signInWithEmailLink",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu extends og{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new xu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dm(e,t,"signInWithPassword",tk);case"emailLink":return nk(e,{email:this._email,oobCode:this._password});default:wr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dm(e,r,"signUpPassword",ek);case"emailLink":return rk(e,{idToken:t,email:this._email,oobCode:this._password});default:wr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e){return Yu(n,"POST","/v1/accounts:signInWithIdp",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="http://localhost";class $o extends og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $o(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=eg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new $o(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return nl(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nl(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nl(e,t)}buildRequest(){const e={requestUri:ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ok(n){const e=du(fu(n)).link,t=e?du(fu(e)).deep_link_id:null,r=du(fu(n)).deep_link_id;return(r?du(fu(r)).link:null)||r||t||e||n}class ag{constructor(e){var t,r,s,a,u,d;const f=du(fu(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,w=sk((s=f.mode)!==null&&s!==void 0?s:null);Se(g&&v&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=ok(e);try{return new ag(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.providerId=ea.PROVIDER_ID}static credential(e,t){return xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ag.parseLink(t);return Se(r,"argument-error"),xu._fromEmailAndCode(e,r.code,r.tenantId)}}ea.PROVIDER_ID="password";ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xu extends Sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Xu{constructor(){super("facebook.com")}static credential(e){return $o._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ls.credential(e.oauthAccessToken)}catch{return null}}}Ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Xu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $o._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gi.credential(t,r)}catch{return null}}}Gi.GOOGLE_SIGN_IN_METHOD="google.com";Gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Xu{constructor(){super("github.com")}static credential(e){return $o._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ms.credential(e.oauthAccessToken)}catch{return null}}}Ms.GITHUB_SIGN_IN_METHOD="github.com";Ms.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Xu{constructor(){super("twitter.com")}static credential(e,t){return $o._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vs.credential(t,r)}catch{return null}}}Vs.TWITTER_SIGN_IN_METHOD="twitter.com";Vs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(n,e){return Yu(n,"POST","/v1/accounts:signUp",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await zr._fromIdTokenResponse(e,r,s),u=_E(r);return new qo({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_E(r);return new qo({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _E(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends ls{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qh(e,t,r,s)}}function hT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?qh._fromErrorAndOperation(n,a,e,r):a})}async function lk(n,e,t=!1){const r=await Wo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qo._forOperation(n,"link",r)}/**
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
 */async function dT(n,e,t=!1){const{auth:r}=n;if(Nn(r.app))return Promise.reject(Xi(r));const s="reauthenticate";try{const a=await Wo(n,hT(r,s,e,n),t);Se(a.idToken,r,"internal-error");const u=ig(a.idToken);Se(u,r,"internal-error");const{sub:d}=u;return Se(n.uid===d,r,"user-mismatch"),qo._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&wr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(n,e,t=!1){if(Nn(n.app))return Promise.reject(Xi(n));const r="signIn",s=await hT(n,r,e),a=await qo._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function uk(n,e){return fT(so(n),e)}async function ck(n,e){return dT(st(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(n){const e=so(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hk(n,e,t){if(Nn(n.app))return Promise.reject(Xi(n));const r=so(n),u=await dm(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ak).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&pT(n),f}),d=await qo._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function dk(n,e,t){return Nn(n.app)?Promise.reject(Xi(n)):uk(st(n),ea.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pT(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(n,e){return Ei(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=st(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Wo(r,fk(r.auth,a));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:f})=>f==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function pk(n,e){return mk(st(n),null,e)}async function mk(n,e,t){const{auth:r}=n,a={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(a.password=t);const u=await Wo(n,ZA(r,a));await n._updateTokensIfNecessary(u,!0)}function gk(n,e,t,r){return st(n).onIdTokenChanged(e,t,r)}function _k(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function yk(n,e,t,r){return st(n).onAuthStateChanged(e,t,r)}function vk(n){return st(n).signOut()}async function Ek(n){return st(n).delete()}const Hh="__sak";/**
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
 */class mT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hh,"1"),this.storage.removeItem(Hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=1e3,Tk=10;class gT extends mT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);OA()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Tk):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gT.type="LOCAL";const Ik=gT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T extends mT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_T.type="SESSION";const yT=_T;/**
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
 */function Sk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Cd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async g=>g(t.origin,a)),f=await Sk(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ck{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const g=lg("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){return window}function Rk(n){fi().location.href=n}/**
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
 */function vT(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function Ak(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Pk(){return vT()?self:null}/**
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
 */const ET="firebaseLocalStorageDb",Nk=1,Gh="firebaseLocalStorage",wT="fbase_key";class Ju{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rd(n,e){return n.transaction([Gh],e?"readwrite":"readonly").objectStore(Gh)}function xk(){const n=indexedDB.deleteDatabase(ET);return new Ju(n).toPromise()}function fm(){const n=indexedDB.open(ET,Nk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gh,{keyPath:wT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gh)?e(r):(r.close(),await xk(),e(await fm()))})})}async function vE(n,e,t){const r=Rd(n,!0).put({[wT]:e,value:t});return new Ju(r).toPromise()}async function Dk(n,e){const t=Rd(n,!1).get(e),r=await new Ju(t).toPromise();return r===void 0?null:r.value}function EE(n,e){const t=Rd(n,!0).delete(e);return new Ju(t).toPromise()}const bk=800,Ok=3;class TT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ok)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cd._getInstance(Pk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ak(),!this.activeServiceWorker)return;this.sender=new Ck(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fm();return await vE(e,Hh,"1"),await EE(e,Hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dk(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>EE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Rd(s,!1).getAll();return new Ju(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TT.type="LOCAL";const Lk=TT;new Qu(3e4,6e4);/**
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
 */function ug(n,e){return e?Qi(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class cg extends og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mk(n){return fT(n.auth,new cg(n),n.bypassAuthState)}function Vk(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),dT(t,new cg(n),n.bypassAuthState)}async function Fk(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),lk(t,new cg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mk;case"linkViaPopup":case"linkViaRedirect":return Fk;case"reauthViaPopup":case"reauthViaRedirect":return Vk;default:wr(this.auth,"internal-error")}}resolve(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=new Qu(2e3,1e4);async function jk(n,e,t){if(Nn(n.app))return Promise.reject($r(n,"operation-not-supported-in-this-environment"));const r=so(n);G0(n,e,Sd);const s=ug(r,t);return new Fs(r,"signInViaPopup",e,s).executeNotNull()}async function zk(n,e,t){const r=st(n);G0(r.auth,e,Sd);const s=ug(r.auth,t);return new Fs(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Fs extends IT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){ns(this.filter.length===1,"Popup operations only handle one event");const e=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Uk.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="pendingRedirect",Rh=new Map;class Wk extends IT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Rh.get(this.auth._key());if(!e){try{const r=await $k(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Rh.set(this.auth._key(),e)}return this.bypassAuthState||Rh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $k(n,e){const t=Gk(e),r=Hk(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function qk(n,e){Rh.set(n._key(),e)}function Hk(n){return Qi(n._redirectPersistence)}function Gk(n){return Ch(Bk,n.config.apiKey,n.name)}async function Kk(n,e,t=!1){if(Nn(n.app))return Promise.reject(Xi(n));const r=so(n),s=ug(r,e),u=await new Wk(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=600*1e3;class Yk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ST(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($r(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qk&&this.cachedEventUids.clear(),this.cachedEventUids.has(wE(e))}saveEventToCache(e){this.cachedEventUids.add(wE(e)),this.lastProcessedEventTime=Date.now()}}function wE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ST({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(n,e={}){return Ei(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eP=/^https?/;async function tP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jk(n);for(const t of e)try{if(nP(t))return}catch{}wr(n,"unauthorized-domain")}function nP(n){const e=cm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!eP.test(t))return!1;if(Zk.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rP=new Qu(3e4,6e4);function TE(){const n=fi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iP(n){return new Promise((e,t)=>{var r,s,a;function u(){TE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{TE(),t($r(n,"network-request-failed"))},timeout:rP.get()})}if(!((s=(r=fi().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=fi().gapi)===null||a===void 0)&&a.load)u();else{const d=WA("iframefcb");return fi()[d]=()=>{gapi.load?u():t($r(n,"network-request-failed"))},lT(`${BA()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Ah=null,e})}let Ah=null;function sP(n){return Ah=Ah||iP(n),Ah}/**
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
 */const oP=new Qu(5e3,15e3),aP="__/auth/iframe",lP="emulator/auth/iframe",uP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hP(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rg(e,lP):`https://${n.config.authDomain}/${aP}`,r={apiKey:e.apiKey,appName:n.name,v:Zo},s=cP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${wl(r).slice(1)}`}async function dP(n){const e=await sP(n),t=fi().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:hP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=$r(n,"network-request-failed"),d=fi().setTimeout(()=>{a(u)},oP.get());function f(){fi().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const fP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pP=500,mP=600,gP="_blank",_P="http://localhost";class IE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yP(n,e,t,r=pP,s=mP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},fP),{width:r.toString(),height:s.toString(),top:a,left:u}),g=vn().toLowerCase();t&&(d=tT(g)?gP:t),Z0(g)&&(e=e||_P,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[D,z])=>`${T}${D}=${z},`,"");if(bA(g)&&d!=="_self")return vP(e||"",d),new IE(null);const w=window.open(e||"",d,v);Se(w,n,"popup-blocked");try{w.focus()}catch{}return new IE(w)}function vP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const EP="__/auth/handler",wP="emulator/auth/handler",TP=encodeURIComponent("fac");async function SE(n,e,t,r,s,a){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zo,eventId:s};if(e instanceof Sd){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Uh(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))u[v]=w}if(e instanceof Xu){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),g=f?`#${TP}=${encodeURIComponent(f)}`:"";return`${IP(n)}?${wl(d).slice(1)}${g}`}function IP({config:n}){return n.emulator?rg(n,wP):`https://${n.authDomain}/${EP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="webStorageSupport";class SP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yT,this._completeRedirectFn=Kk,this._overrideRedirectResult=qk}async _openPopup(e,t,r,s){var a;ns((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await SE(e,t,r,cm(),s);return yP(e,u,lg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await SE(e,t,r,cm(),s);return Rk(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(ns(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await dP(e),r=new Yk(e);return t.register("authEvent",s=>(Se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vp,{type:Vp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Vp];u!==void 0&&t(!!u),wr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oT()||eT()||sg()}}const CP=SP;var CE="@firebase/auth",RE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kP(n){Ks(new es("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(n)},g=new UA(r,s,a,f);return QA(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ks(new es("auth-internal",e=>{const t=so(e.getProvider("auth").getImmediate());return(r=>new RP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(CE,RE,AP(n)),Er(CE,RE,"esm2017")}/**
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
 */const PP=300,NP=V0("authIdTokenMaxAge")||PP;let AE=null;const xP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>NP)return;const s=t==null?void 0:t.token;AE!==s&&(AE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DP(n=Zm()){const e=Ku(n,"auth");if(e.isInitialized())return e.getImmediate();const t=KA(n,{popupRedirectResolver:CP,persistence:[Lk,Ik,yT]}),r=V0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=xP(a.toString());_k(t,u,()=>u(t.currentUser)),gk(t,d=>u(d))}}const s=O0("auth");return s&&YA(t,`http://${s}`),t}function bP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}jA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=$r("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",bP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kP("Browser");var kE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws,CT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,C){function k(){}k.prototype=C.prototype,b.D=C.prototype,b.prototype=new k,b.prototype.constructor=b,b.C=function(N,O,V){for(var A=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)A[ct-2]=arguments[ct];return C.prototype[O].apply(N,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,C,k){k||(k=0);var N=Array(16);if(typeof C=="string")for(var O=0;16>O;++O)N[O]=C.charCodeAt(k++)|C.charCodeAt(k++)<<8|C.charCodeAt(k++)<<16|C.charCodeAt(k++)<<24;else for(O=0;16>O;++O)N[O]=C[k++]|C[k++]<<8|C[k++]<<16|C[k++]<<24;C=b.g[0],k=b.g[1],O=b.g[2];var V=b.g[3],A=C+(V^k&(O^V))+N[0]+3614090360&4294967295;C=k+(A<<7&4294967295|A>>>25),A=V+(O^C&(k^O))+N[1]+3905402710&4294967295,V=C+(A<<12&4294967295|A>>>20),A=O+(k^V&(C^k))+N[2]+606105819&4294967295,O=V+(A<<17&4294967295|A>>>15),A=k+(C^O&(V^C))+N[3]+3250441966&4294967295,k=O+(A<<22&4294967295|A>>>10),A=C+(V^k&(O^V))+N[4]+4118548399&4294967295,C=k+(A<<7&4294967295|A>>>25),A=V+(O^C&(k^O))+N[5]+1200080426&4294967295,V=C+(A<<12&4294967295|A>>>20),A=O+(k^V&(C^k))+N[6]+2821735955&4294967295,O=V+(A<<17&4294967295|A>>>15),A=k+(C^O&(V^C))+N[7]+4249261313&4294967295,k=O+(A<<22&4294967295|A>>>10),A=C+(V^k&(O^V))+N[8]+1770035416&4294967295,C=k+(A<<7&4294967295|A>>>25),A=V+(O^C&(k^O))+N[9]+2336552879&4294967295,V=C+(A<<12&4294967295|A>>>20),A=O+(k^V&(C^k))+N[10]+4294925233&4294967295,O=V+(A<<17&4294967295|A>>>15),A=k+(C^O&(V^C))+N[11]+2304563134&4294967295,k=O+(A<<22&4294967295|A>>>10),A=C+(V^k&(O^V))+N[12]+1804603682&4294967295,C=k+(A<<7&4294967295|A>>>25),A=V+(O^C&(k^O))+N[13]+4254626195&4294967295,V=C+(A<<12&4294967295|A>>>20),A=O+(k^V&(C^k))+N[14]+2792965006&4294967295,O=V+(A<<17&4294967295|A>>>15),A=k+(C^O&(V^C))+N[15]+1236535329&4294967295,k=O+(A<<22&4294967295|A>>>10),A=C+(O^V&(k^O))+N[1]+4129170786&4294967295,C=k+(A<<5&4294967295|A>>>27),A=V+(k^O&(C^k))+N[6]+3225465664&4294967295,V=C+(A<<9&4294967295|A>>>23),A=O+(C^k&(V^C))+N[11]+643717713&4294967295,O=V+(A<<14&4294967295|A>>>18),A=k+(V^C&(O^V))+N[0]+3921069994&4294967295,k=O+(A<<20&4294967295|A>>>12),A=C+(O^V&(k^O))+N[5]+3593408605&4294967295,C=k+(A<<5&4294967295|A>>>27),A=V+(k^O&(C^k))+N[10]+38016083&4294967295,V=C+(A<<9&4294967295|A>>>23),A=O+(C^k&(V^C))+N[15]+3634488961&4294967295,O=V+(A<<14&4294967295|A>>>18),A=k+(V^C&(O^V))+N[4]+3889429448&4294967295,k=O+(A<<20&4294967295|A>>>12),A=C+(O^V&(k^O))+N[9]+568446438&4294967295,C=k+(A<<5&4294967295|A>>>27),A=V+(k^O&(C^k))+N[14]+3275163606&4294967295,V=C+(A<<9&4294967295|A>>>23),A=O+(C^k&(V^C))+N[3]+4107603335&4294967295,O=V+(A<<14&4294967295|A>>>18),A=k+(V^C&(O^V))+N[8]+1163531501&4294967295,k=O+(A<<20&4294967295|A>>>12),A=C+(O^V&(k^O))+N[13]+2850285829&4294967295,C=k+(A<<5&4294967295|A>>>27),A=V+(k^O&(C^k))+N[2]+4243563512&4294967295,V=C+(A<<9&4294967295|A>>>23),A=O+(C^k&(V^C))+N[7]+1735328473&4294967295,O=V+(A<<14&4294967295|A>>>18),A=k+(V^C&(O^V))+N[12]+2368359562&4294967295,k=O+(A<<20&4294967295|A>>>12),A=C+(k^O^V)+N[5]+4294588738&4294967295,C=k+(A<<4&4294967295|A>>>28),A=V+(C^k^O)+N[8]+2272392833&4294967295,V=C+(A<<11&4294967295|A>>>21),A=O+(V^C^k)+N[11]+1839030562&4294967295,O=V+(A<<16&4294967295|A>>>16),A=k+(O^V^C)+N[14]+4259657740&4294967295,k=O+(A<<23&4294967295|A>>>9),A=C+(k^O^V)+N[1]+2763975236&4294967295,C=k+(A<<4&4294967295|A>>>28),A=V+(C^k^O)+N[4]+1272893353&4294967295,V=C+(A<<11&4294967295|A>>>21),A=O+(V^C^k)+N[7]+4139469664&4294967295,O=V+(A<<16&4294967295|A>>>16),A=k+(O^V^C)+N[10]+3200236656&4294967295,k=O+(A<<23&4294967295|A>>>9),A=C+(k^O^V)+N[13]+681279174&4294967295,C=k+(A<<4&4294967295|A>>>28),A=V+(C^k^O)+N[0]+3936430074&4294967295,V=C+(A<<11&4294967295|A>>>21),A=O+(V^C^k)+N[3]+3572445317&4294967295,O=V+(A<<16&4294967295|A>>>16),A=k+(O^V^C)+N[6]+76029189&4294967295,k=O+(A<<23&4294967295|A>>>9),A=C+(k^O^V)+N[9]+3654602809&4294967295,C=k+(A<<4&4294967295|A>>>28),A=V+(C^k^O)+N[12]+3873151461&4294967295,V=C+(A<<11&4294967295|A>>>21),A=O+(V^C^k)+N[15]+530742520&4294967295,O=V+(A<<16&4294967295|A>>>16),A=k+(O^V^C)+N[2]+3299628645&4294967295,k=O+(A<<23&4294967295|A>>>9),A=C+(O^(k|~V))+N[0]+4096336452&4294967295,C=k+(A<<6&4294967295|A>>>26),A=V+(k^(C|~O))+N[7]+1126891415&4294967295,V=C+(A<<10&4294967295|A>>>22),A=O+(C^(V|~k))+N[14]+2878612391&4294967295,O=V+(A<<15&4294967295|A>>>17),A=k+(V^(O|~C))+N[5]+4237533241&4294967295,k=O+(A<<21&4294967295|A>>>11),A=C+(O^(k|~V))+N[12]+1700485571&4294967295,C=k+(A<<6&4294967295|A>>>26),A=V+(k^(C|~O))+N[3]+2399980690&4294967295,V=C+(A<<10&4294967295|A>>>22),A=O+(C^(V|~k))+N[10]+4293915773&4294967295,O=V+(A<<15&4294967295|A>>>17),A=k+(V^(O|~C))+N[1]+2240044497&4294967295,k=O+(A<<21&4294967295|A>>>11),A=C+(O^(k|~V))+N[8]+1873313359&4294967295,C=k+(A<<6&4294967295|A>>>26),A=V+(k^(C|~O))+N[15]+4264355552&4294967295,V=C+(A<<10&4294967295|A>>>22),A=O+(C^(V|~k))+N[6]+2734768916&4294967295,O=V+(A<<15&4294967295|A>>>17),A=k+(V^(O|~C))+N[13]+1309151649&4294967295,k=O+(A<<21&4294967295|A>>>11),A=C+(O^(k|~V))+N[4]+4149444226&4294967295,C=k+(A<<6&4294967295|A>>>26),A=V+(k^(C|~O))+N[11]+3174756917&4294967295,V=C+(A<<10&4294967295|A>>>22),A=O+(C^(V|~k))+N[2]+718787259&4294967295,O=V+(A<<15&4294967295|A>>>17),A=k+(V^(O|~C))+N[9]+3951481745&4294967295,b.g[0]=b.g[0]+C&4294967295,b.g[1]=b.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+O&4294967295,b.g[3]=b.g[3]+V&4294967295}r.prototype.u=function(b,C){C===void 0&&(C=b.length);for(var k=C-this.blockSize,N=this.B,O=this.h,V=0;V<C;){if(O==0)for(;V<=k;)s(this,b,V),V+=this.blockSize;if(typeof b=="string"){for(;V<C;)if(N[O++]=b.charCodeAt(V++),O==this.blockSize){s(this,N),O=0;break}}else for(;V<C;)if(N[O++]=b[V++],O==this.blockSize){s(this,N),O=0;break}}this.h=O,this.o+=C},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var C=1;C<b.length-8;++C)b[C]=0;var k=8*this.o;for(C=b.length-8;C<b.length;++C)b[C]=k&255,k/=256;for(this.u(b),b=Array(16),C=k=0;4>C;++C)for(var N=0;32>N;N+=8)b[k++]=this.g[C]>>>N&255;return b};function a(b,C){var k=d;return Object.prototype.hasOwnProperty.call(k,b)?k[b]:k[b]=C(b)}function u(b,C){this.h=C;for(var k=[],N=!0,O=b.length-1;0<=O;O--){var V=b[O]|0;N&&V==C||(k[O]=V,N=!1)}this.g=k}var d={};function f(b){return-128<=b&&128>b?a(b,function(C){return new u([C|0],0>C?-1:0)}):new u([b|0],0>b?-1:0)}function g(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return W(g(-b));for(var C=[],k=1,N=0;b>=k;N++)C[N]=b/k|0,k*=4294967296;return new u(C,0)}function v(b,C){if(b.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(b.charAt(0)=="-")return W(v(b.substring(1),C));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=g(Math.pow(C,8)),N=w,O=0;O<b.length;O+=8){var V=Math.min(8,b.length-O),A=parseInt(b.substring(O,O+V),C);8>V?(V=g(Math.pow(C,V)),N=N.j(V).add(g(A))):(N=N.j(k),N=N.add(g(A)))}return N}var w=f(0),T=f(1),D=f(16777216);n=u.prototype,n.m=function(){if(q(this))return-W(this).m();for(var b=0,C=1,k=0;k<this.g.length;k++){var N=this.i(k);b+=(0<=N?N:4294967296+N)*C,C*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(z(this))return"0";if(q(this))return"-"+W(this).toString(b);for(var C=g(Math.pow(b,6)),k=this,N="";;){var O=Ie(k,C).g;k=ge(k,O.j(C));var V=((0<k.g.length?k.g[0]:k.h)>>>0).toString(b);if(k=O,z(k))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function z(b){if(b.h!=0)return!1;for(var C=0;C<b.g.length;C++)if(b.g[C]!=0)return!1;return!0}function q(b){return b.h==-1}n.l=function(b){return b=ge(this,b),q(b)?-1:z(b)?0:1};function W(b){for(var C=b.g.length,k=[],N=0;N<C;N++)k[N]=~b.g[N];return new u(k,~b.h).add(T)}n.abs=function(){return q(this)?W(this):this},n.add=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0,O=0;O<=C;O++){var V=N+(this.i(O)&65535)+(b.i(O)&65535),A=(V>>>16)+(this.i(O)>>>16)+(b.i(O)>>>16);N=A>>>16,V&=65535,A&=65535,k[O]=A<<16|V}return new u(k,k[k.length-1]&-2147483648?-1:0)};function ge(b,C){return b.add(W(C))}n.j=function(b){if(z(this)||z(b))return w;if(q(this))return q(b)?W(this).j(W(b)):W(W(this).j(b));if(q(b))return W(this.j(W(b)));if(0>this.l(D)&&0>b.l(D))return g(this.m()*b.m());for(var C=this.g.length+b.g.length,k=[],N=0;N<2*C;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<b.g.length;O++){var V=this.i(N)>>>16,A=this.i(N)&65535,ct=b.i(O)>>>16,kt=b.i(O)&65535;k[2*N+2*O]+=A*kt,fe(k,2*N+2*O),k[2*N+2*O+1]+=V*kt,fe(k,2*N+2*O+1),k[2*N+2*O+1]+=A*ct,fe(k,2*N+2*O+1),k[2*N+2*O+2]+=V*ct,fe(k,2*N+2*O+2)}for(N=0;N<C;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=C;N<2*C;N++)k[N]=0;return new u(k,0)};function fe(b,C){for(;(b[C]&65535)!=b[C];)b[C+1]+=b[C]>>>16,b[C]&=65535,C++}function ve(b,C){this.g=b,this.h=C}function Ie(b,C){if(z(C))throw Error("division by zero");if(z(b))return new ve(w,w);if(q(b))return C=Ie(W(b),C),new ve(W(C.g),W(C.h));if(q(C))return C=Ie(b,W(C)),new ve(W(C.g),C.h);if(30<b.g.length){if(q(b)||q(C))throw Error("slowDivide_ only works with positive integers.");for(var k=T,N=C;0>=N.l(b);)k=ut(k),N=ut(N);var O=Pe(k,1),V=Pe(N,1);for(N=Pe(N,2),k=Pe(k,2);!z(N);){var A=V.add(N);0>=A.l(b)&&(O=O.add(k),V=A),N=Pe(N,1),k=Pe(k,1)}return C=ge(b,O.j(C)),new ve(O,C)}for(O=w;0<=b.l(C);){for(k=Math.max(1,Math.floor(b.m()/C.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=g(k),A=V.j(C);q(A)||0<A.l(b);)k-=N,V=g(k),A=V.j(C);z(V)&&(V=T),O=O.add(V),b=ge(b,A)}return new ve(O,b)}n.A=function(b){return Ie(this,b).h},n.and=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0;N<C;N++)k[N]=this.i(N)&b.i(N);return new u(k,this.h&b.h)},n.or=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0;N<C;N++)k[N]=this.i(N)|b.i(N);return new u(k,this.h|b.h)},n.xor=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],N=0;N<C;N++)k[N]=this.i(N)^b.i(N);return new u(k,this.h^b.h)};function ut(b){for(var C=b.g.length+1,k=[],N=0;N<C;N++)k[N]=b.i(N)<<1|b.i(N-1)>>>31;return new u(k,b.h)}function Pe(b,C){var k=C>>5;C%=32;for(var N=b.g.length-k,O=[],V=0;V<N;V++)O[V]=0<C?b.i(V+k)>>>C|b.i(V+k+1)<<32-C:b.i(V+k);return new u(O,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,CT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=v,Ws=u}).apply(typeof kE<"u"?kE:typeof self<"u"?self:typeof window<"u"?window:{});var mh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RT,pu,AT,kh,pm,kT,PT,NT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof mh=="object"&&mh];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,m){if(m)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var F=c[I];if(!(F in y))break e;y=y[F]}c=c[c.length-1],I=y[c],m=m(I),m!=I&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var y=0,I=!1,F={next:function(){if(!I&&y<c.length){var $=y++;return{value:m($,c[$]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,y){return c.call.apply(c.bind,arguments)}function w(c,m,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),c.apply(m,F)}}return function(){return c.apply(m,arguments)}}function T(c,m,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,T.apply(null,arguments)}function D(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function z(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,F,$){for(var ie=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)ie[ot-2]=arguments[ot];return m.prototype[F].apply(I,ie)}}function q(c){const m=c.length;if(0<m){const y=Array(m);for(let I=0;I<m;I++)y[I]=c[I];return y}return[]}function W(c,m){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const F=c.length||0,$=I.length||0;c.length=F+$;for(let ie=0;ie<$;ie++)c[F+ie]=I[ie]}else c.push(I)}}class ge{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function fe(c){return/^[\s\xa0]*$/.test(c)}function ve(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function Ie(c){return Ie[" "](c),c}Ie[" "]=function(){};var ut=ve().indexOf("Gecko")!=-1&&!(ve().toLowerCase().indexOf("webkit")!=-1&&ve().indexOf("Edge")==-1)&&!(ve().indexOf("Trident")!=-1||ve().indexOf("MSIE")!=-1)&&ve().indexOf("Edge")==-1;function Pe(c,m,y){for(const I in c)m.call(y,c[I],I,c)}function b(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function C(c){const m={};for(const y in c)m[y]=c[y];return m}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let y,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(y in I)c[y]=I[y];for(let $=0;$<k.length;$++)y=k[$],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function O(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function V(c){d.setTimeout(()=>{throw c},0)}function A(){var c=_e;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class ct{constructor(){this.h=this.g=null}add(m,y){const I=kt.get();I.set(m,y),this.h?this.h.next=I:this.g=I,this.h=I}}var kt=new ge(()=>new St,c=>c.reset());class St{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let et,ee=!1,_e=new ct,ae=()=>{const c=d.Promise.resolve(void 0);et=()=>{c.then(M)}};var M=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(y){V(y)}var m=kt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ee=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Me=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,m),d.removeEventListener("test",y,m)}catch{}return c})();function be(c,m){if(he.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(ut){e:{try{Ie(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:je[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}z(be,he);var je={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),Qe=0;function rt(c,m,y,I,F){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!I,this.ha=F,this.key=++Qe,this.da=this.fa=!1}function Pt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Qn(c){this.src=c,this.g={},this.h=0}Qn.prototype.add=function(c,m,y,I,F){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var ie=sr(c,m,I,F);return-1<ie?(m=c[ie],y||(m.fa=!1)):(m=new rt(m,this.src,$,!!I,F),m.fa=y,c.push(m)),m};function Ti(c,m){var y=m.type;if(y in c.g){var I=c.g[y],F=Array.prototype.indexOf.call(I,m,void 0),$;($=0<=F)&&Array.prototype.splice.call(I,F,1),$&&(Pt(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function sr(c,m,y,I){for(var F=0;F<c.length;++F){var $=c[F];if(!$.da&&$.listener==m&&$.capture==!!y&&$.ha==I)return F}return-1}var or="closure_lm_"+(1e6*Math.random()|0),Tr={};function nn(c,m,y,I,F){if(Array.isArray(m)){for(var $=0;$<m.length;$++)nn(c,m[$],y,I,F);return null}return y=Ne(y),c&&c[Ge]?c.K(m,y,g(I)?!!I.capture:!1,F):Qr(c,m,y,!1,I,F)}function Qr(c,m,y,I,F,$){if(!m)throw Error("Invalid event type");var ie=g(F)?!!F.capture:!!F,ot=Yr(c);if(ot||(c[or]=ot=new Qn(c)),y=ot.add(m,y,I,ie,$),y.proxy)return y;if(I=us(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Me||(F=ie),F===void 0&&(F=!1),c.addEventListener(m.toString(),I,F);else if(c.attachEvent)c.attachEvent(Ir(m.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function us(){function c(y){return m.call(c.src,c.listener,y)}const m=ao;return c}function Ii(c,m,y,I,F){if(Array.isArray(m))for(var $=0;$<m.length;$++)Ii(c,m[$],y,I,F);else I=g(I)?!!I.capture:!!I,y=Ne(y),c&&c[Ge]?(c=c.i,m=String(m).toString(),m in c.g&&($=c.g[m],y=sr($,y,I,F),-1<y&&(Pt($[y]),Array.prototype.splice.call($,y,1),$.length==0&&(delete c.g[m],c.h--)))):c&&(c=Yr(c))&&(m=c.g[m.toString()],c=-1,m&&(c=sr(m,y,I,F)),(y=-1<c?m[c]:null)&&wn(y))}function wn(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Ge])Ti(m.i,c);else{var y=c.type,I=c.proxy;m.removeEventListener?m.removeEventListener(y,I,c.capture):m.detachEvent?m.detachEvent(Ir(y),I):m.addListener&&m.removeListener&&m.removeListener(I),(y=Yr(m))?(Ti(y,c),y.h==0&&(y.src=null,m[or]=null)):Pt(c)}}}function Ir(c){return c in Tr?Tr[c]:Tr[c]="on"+c}function ao(c,m){if(c.da)c=!0;else{m=new be(m,this);var y=c.listener,I=c.ha||c.src;c.fa&&wn(c),c=y.call(I,m)}return c}function Yr(c){return c=c[or],c instanceof Qn?c:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(c){return typeof c=="function"?c:(c[Sr]||(c[Sr]=function(m){return c.handleEvent(m)}),c[Sr])}function Ct(){G.call(this),this.i=new Qn(this),this.M=this,this.F=null}z(Ct,G),Ct.prototype[Ge]=!0,Ct.prototype.removeEventListener=function(c,m,y,I){Ii(this,c,m,y,I)};function Oe(c,m){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=m.type||m,typeof m=="string")m=new he(m,c);else if(m instanceof he)m.target=m.target||c;else{var F=m;m=new he(I,c),N(m,F)}if(F=!0,y)for(var $=y.length-1;0<=$;$--){var ie=m.g=y[$];F=Tn(ie,I,!0,m)&&F}if(ie=m.g=c,F=Tn(ie,I,!0,m)&&F,F=Tn(ie,I,!1,m)&&F,y)for($=0;$<y.length;$++)ie=m.g=y[$],F=Tn(ie,I,!1,m)&&F}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],I=0;I<y.length;I++)Pt(y[I]);delete c.g[m],c.h--}}this.F=null},Ct.prototype.K=function(c,m,y,I){return this.i.add(String(c),m,!1,y,I)},Ct.prototype.L=function(c,m,y,I){return this.i.add(String(c),m,!0,y,I)};function Tn(c,m,y,I){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,$=0;$<m.length;++$){var ie=m[$];if(ie&&!ie.da&&ie.capture==y){var ot=ie.listener,Bt=ie.ha||ie.src;ie.fa&&Ti(c.i,ie),F=ot.call(Bt,I)!==!1&&F}}return F&&!I.defaultPrevented}function cs(c,m,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function Cr(c){c.g=cs(()=>{c.g=null,c.i&&(c.i=!1,Cr(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ar extends G{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(c){G.call(this),this.h=c,this.g={}}z(Xr,G);var hs=[];function xn(c){Pe(c.g,function(m,y){this.g.hasOwnProperty(y)&&wn(m)},c),c.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),xn(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jr=d.JSON.stringify,ds=d.JSON.parse,In=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function lr(){}lr.prototype.h=null;function Zr(c){return c.h||(c.h=c.i())}function Si(){}var Ht={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hn(){he.call(this,"d")}z(hn,he);function Dn(){he.call(this,"c")}z(Dn,he);var dn={},Ci=null;function Yn(){return Ci=Ci||new Ct}dn.La="serverreachability";function fs(c){he.call(this,dn.La,c)}z(fs,he);function bn(c){const m=Yn();Oe(m,new fs(m))}dn.STAT_EVENT="statevent";function Ri(c,m){he.call(this,dn.STAT_EVENT,c),this.stat=m}z(Ri,he);function Je(c){const m=Yn();Oe(m,new Ri(m,c))}dn.Ma="timingevent";function On(c,m){he.call(this,dn.Ma,c),this.size=m}z(On,he);function zt(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Rr(c,m,y,I,F,$){c.info(function(){if(c.g)if($)for(var ie="",ot=$.split("&"),Bt=0;Bt<ot.length;Bt++){var Ye=ot[Bt].split("=");if(1<Ye.length){var Kt=Ye[0];Ye=Ye[1];var Ot=Kt.split("_");ie=2<=Ot.length&&Ot[1]=="type"?ie+(Kt+"="+Ye+"&"):ie+(Kt+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+m+`
`+y+`
`+ie})}function Rt(c,m,y,I,F,$,ie){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+m+`
`+y+`
`+$+" "+ie})}function Xn(c,m,y,I){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+lo(c,y)+(I?" "+I:"")})}function Ar(c,m){c.info(function(){return"TIMEOUT: "+m})}Ai.prototype.info=function(){};function lo(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return Jr(y)}catch{return m}}var Sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},la={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jn;function ki(){}z(ki,lr),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Jn=new ki;function Zn(c,m,y,I){this.j=c,this.i=m,this.l=y,this.R=I||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uo}function uo(){this.i=null,this.g="",this.h=!1}var co={},ps={};function Pi(c,m,y){c.L=1,c.v=Ve(te(m)),c.m=y,c.P=!0,ho(c,null)}function ho(c,m){c.F=Date.now(),lt(c),c.A=te(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),_s(y.i,"t",I),c.C=0,y=c.j.J,c.h=new uo,c.g=yc(c.j,y?m:null,!c.m),0<c.O&&(c.M=new ar(T(c.Y,c,c.g),c.O)),m=c.U,y=c.g,I=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(hs[0]=F.toString()),F=hs);for(var $=0;$<F.length;$++){var ie=nn(y,F[$],I||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=c.H?C(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),bn(),Rr(c.i,c.u,c.A,c.l,c.R,c.m)}Zn.prototype.ca=function(c){c=c.target;const m=this.M;m&&Vn(c)==3?m.j():this.Y(c)},Zn.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=Vn(this.g);var m=this.g.Ba();const cr=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||bl(this.g)))){this.J||Ot!=4||m==7||(m==8||0>=cr?bn(3):bn(2)),ei(this);var y=this.g.Z();this.X=y;t:if(ua(this)){var I=bl(this.g);c="";var F=I.length,$=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),ti(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,c+=this.h.i.decode(I[m],{stream:!($&&m==F-1)});I.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,Rt(this.i,this.u,this.A,this.l,this.R,Ot,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ot,Bt=this.g;if((ot=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(ot)){var Ye=ot;break t}}Ye=null}if(y=Ye)Xn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fo(this,y);else{this.o=!1,this.s=3,Je(12),Ln(this),ti(this);break e}}if(this.P){y=!0;let tr;for(;!this.J&&this.C<ie.length;)if(tr=Pl(this,ie),tr==ps){Ot==4&&(this.s=4,Je(14),y=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(tr==co){this.s=4,Je(15),Xn(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else Xn(this.i,this.l,tr,null),fo(this,tr);if(ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ie.length!=0||this.h.h||(this.s=1,Je(16),y=!1),this.o=this.o&&y,!y)Xn(this.i,this.l,ie,"[Invalid Chunked Response]"),Ln(this),ti(this);else if(0<ie.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ll(Kt),Kt.M=!0,Je(11))}}else Xn(this.i,this.l,ie,null),fo(this,ie);Ot==4&&Ln(this),this.o&&!this.J&&(Ot==4?Ia(this.j,this):(this.o=!1,lt(this)))}else ya(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),Ln(this),ti(this)}}}catch{}finally{}};function ua(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Pl(c,m){var y=c.C,I=m.indexOf(`
`,y);return I==-1?ps:(y=Number(m.substring(y,I)),isNaN(y)?co:(I+=1,I+y>m.length?ps:(m=m.slice(I,I+y),c.C=I+y,m)))}Zn.prototype.cancel=function(){this.J=!0,Ln(this)};function lt(c){c.S=Date.now()+c.I,ca(c,c.I)}function ca(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=zt(T(c.ba,c),m)}function ei(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Zn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ar(this.i,this.A),this.L!=2&&(bn(),Je(17)),Ln(this),this.s=2,ti(this)):ca(this,this.S-c)};function ti(c){c.j.G==0||c.J||Ia(c.j,c)}function Ln(c){ei(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,xn(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function fo(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||Gt(y.h,c))){if(!c.K&&Gt(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Ta(y),br(y);else break e;wa(y),Je(18)}}else y.za=F[1],0<y.za-y.T&&37500>F[2]&&y.F&&y.v==0&&!y.C&&(y.C=zt(T(y.Za,y),6e3));if(1>=da(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Li(y,11)}else if((c.K||y.g==c)&&Ta(y),!fe(m))for(F=y.Da.g.parse(m),m=0;m<F.length;m++){let Ye=F[m];if(y.T=Ye[0],Ye=Ye[1],y.G==2)if(Ye[0]=="c"){y.K=Ye[1],y.ia=Ye[2];const Kt=Ye[3];Kt!=null&&(y.la=Kt,y.j.info("VER="+y.la));const Ot=Ye[4];Ot!=null&&(y.Aa=Ot,y.j.info("SVER="+y.Aa));const cr=Ye[5];cr!=null&&typeof cr=="number"&&0<cr&&(I=1.5*cr,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const tr=c.g;if(tr){const yo=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yo){var $=I.h;$.g||yo.indexOf("spdy")==-1&&yo.indexOf("quic")==-1&&yo.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(po($,$.h),$.h=null))}if(I.D){const Ca=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ca&&(I.ya=Ca,ze(I.I,I.D,Ca))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var ie=c;if(I.qa=_c(I,I.J?I.ia:null,I.W),ie.K){fa(I.h,ie);var ot=ie,Bt=I.L;Bt&&(ot.I=Bt),ot.B&&(ei(ot),lt(ot)),I.g=ie}else _o(I);0<y.i.length&&oi(y)}else Ye[0]!="stop"&&Ye[0]!="close"||Li(y,7);else y.G==3&&(Ye[0]=="stop"||Ye[0]=="close"?Ye[0]=="stop"?Li(y,7):sn(y):Ye[0]!="noop"&&y.l&&y.l.ta(Ye),y.v=0)}}bn(4)}catch{}}var ha=class{constructor(c,m){this.g=c,this.map=m}};function Ni(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function da(c){return c.h?1:c.g?c.g.size:0}function Gt(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function po(c,m){c.g?c.g.add(m):c.h=m}function fa(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Ni.prototype.cancel=function(){if(this.i=pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function pa(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return q(c.i)}function ms(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],y=c.length,I=0;I<y;I++)m.push(c[I]);return m}m=[],y=0;for(I in c)m[y++]=c[I];return m}function xi(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const I in c)m[y++]=I;return m}}}function kr(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=xi(c),I=ms(c),F=I.length,$=0;$<F;$++)m.call(void 0,I[$],y&&y[$],c)}var L=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),F=null;if(0<=I){var $=c[y].substring(0,I);F=c[y].substring(I+1)}else $=c[y];m($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function re(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof re){this.h=c.h,ye(this,c.j),this.o=c.o,this.g=c.g,Re(this,c.s),this.l=c.l;var m=c.i,y=new ri;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),Ke(this,y),this.m=c.m}else c&&(m=String(c).match(L))?(this.h=!1,ye(this,m[1]||"",!0),this.o=Le(m[2]||""),this.g=Le(m[3]||"",!0),Re(this,m[4]),this.l=Le(m[5]||"",!0),Ke(this,m[6]||"",!0),this.m=Le(m[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}re.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Rn(m,ni,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Rn(m,ni,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Rn(y,y.charAt(0)=="/"?uc:ma,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Rn(y,Nl)),c.join("")};function te(c){return new re(c)}function ye(c,m,y){c.j=y?Le(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Re(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Ke(c,m,y){m instanceof ri?(c.i=m,ii(c.i,c.h)):(y||(m=Rn(m,cc)),c.i=new ri(m,c.h))}function ze(c,m,y){c.i.set(m,y)}function Ve(c){return ze(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Le(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Rn(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,gs),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gs(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ni=/[#\/\?@]/g,ma=/[#\?:]/g,uc=/[#\?]/g,cc=/[#\?@]/g,Nl=/#/g;function ri(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function rn(c){c.g||(c.g=new Map,c.h=0,c.i&&Q(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}n=ri.prototype,n.add=function(c,m){rn(this),this.i=null,c=ur(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Pr(c,m){rn(c),m=ur(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Nr(c,m){return rn(c),m=ur(c,m),c.g.has(m)}n.forEach=function(c,m){rn(this),this.g.forEach(function(y,I){y.forEach(function(F){c.call(m,F,I,this)},this)},this)},n.na=function(){rn(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let I=0;I<m.length;I++){const F=c[I];for(let $=0;$<F.length;$++)y.push(m[I])}return y},n.V=function(c){rn(this);let m=[];if(typeof c=="string")Nr(this,c)&&(m=m.concat(this.g.get(ur(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},n.set=function(c,m){return rn(this),this.i=null,c=ur(this,c),Nr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},n.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function _s(c,m,y){Pr(c,m),0<y.length&&(c.i=null,c.g.set(ur(c,m),q(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var I=m[y];const $=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var F=$;ie[I]!==""&&(F+="="+encodeURIComponent(String(ie[I]))),c.push(F)}}return this.i=c.join("&")};function ur(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function ii(c,m){m&&!c.j&&(rn(c),c.i=null,c.g.forEach(function(y,I){var F=I.toLowerCase();I!=F&&(Pr(this,I),_s(this,F,y))},c)),c.j=m}function nf(c,m){const y=new Ai;if(d.Image){const I=new Image;I.onload=D(Mn,y,"TestLoadImage: loaded",!0,m,I),I.onerror=D(Mn,y,"TestLoadImage: error",!1,m,I),I.onabort=D(Mn,y,"TestLoadImage: abort",!1,m,I),I.ontimeout=D(Mn,y,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else m(!1)}function hc(c,m){const y=new Ai,I=new AbortController,F=setTimeout(()=>{I.abort(),Mn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:I.signal}).then($=>{clearTimeout(F),$.ok?Mn(y,"TestPingServer: ok",!0,m):Mn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Mn(y,"TestPingServer: error",!1,m)})}function Mn(c,m,y,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(y)}catch{}}function rf(){this.g=new In}function dc(c,m,y){const I=y||"";try{kr(c,function(F,$){let ie=F;g(F)&&(ie=Jr(F)),m.push(I+$+"="+encodeURIComponent(ie))})}catch(F){throw m.push(I+"type="+encodeURIComponent("_badmap")),F}}function Di(c){this.l=c.Ub||null,this.j=c.eb||!1}z(Di,lr),Di.prototype.g=function(){return new mo(this.l,this.j)},Di.prototype.i=(function(c){return function(){return c}})({});function mo(c,m){Ct.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(mo,Ct),n=mo.prototype,n.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Dr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function fc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?xr(this):Dr(this),this.readyState==3&&fc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,xr(this))},n.Qa=function(c){this.g&&(this.response=c,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Dr(c)}n.setRequestHeader=function(c,m){this.u.append(c,m)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function Dr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function bi(c){let m="";return Pe(c,function(y,I){m+=I,m+=":",m+=y,m+=`\r
`}),m}function ys(c,m,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=bi(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):ze(c,m,y))}function vt(c){Ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(vt,Ct);var sf=/^https?$/i,xl=["POST","PUT"];n=vt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,m,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jn.g(),this.v=this.o?Zr(this.o):Zr(Jn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch($){go(this,$);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)y.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const $ of I.keys())y.set($,I.get($));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(xl,m,void 0))||I||F||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of y)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_a(this),this.u=!0,this.g.send(c),this.u=!1}catch($){go(this,$)}};function go(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,ga(c),er(c)}function ga(c){c.A||(c.A=!0,Oe(c,"complete"),Oe(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Oe(this,"complete"),Oe(this,"abort"),er(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),vt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Dl(this):this.bb())},n.bb=function(){Dl(this)};function Dl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||Vn(c)!=4||c.Z()!=2)){if(c.u&&Vn(c)==4)cs(c.Ea,0,c);else if(Oe(c,"readystatechange"),Vn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var I;if(I=ie===0){var F=String(c.D).match(L)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!sf.test(F?F.toLowerCase():"")}y=I}if(y)Oe(c,"complete"),Oe(c,"success");else{c.m=6;try{var $=2<Vn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",ga(c)}}finally{er(c)}}}}function er(c,m){if(c.g){_a(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Oe(c,"ready");try{y.onreadystatechange=I}catch{}}}function _a(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Vn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),ds(m)}};function bl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ya(c){const m={};c=(c.g&&2<=Vn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(fe(c[I]))continue;var y=O(c[I]);const F=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const $=m[F]||[];m[F]=$,$.push(y)}b(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function Ol(c){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=si("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=si("baseRetryDelayMs",5e3,c),this.cb=si("retryDelaySeedMs",1e4,c),this.Wa=si("forwardChannelMaxRetries",2,c),this.wa=si("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(c&&c.concurrentRequestLimit),this.Da=new rf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ol.prototype,n.la=8,n.G=1,n.connect=function(c,m,y,I){Je(0),this.W=c,this.H=m||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=_c(this,null,this.W),oi(this)};function sn(c){if(va(c),c.G==3){var m=c.U++,y=te(c.I);if(ze(y,"SID",c.K),ze(y,"RID",m),ze(y,"TYPE","terminate"),Oi(c,y),m=new Zn(c,c.j,m),m.L=2,m.v=Ve(te(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=m.v,y=!0),y||(m.g=yc(m.j,null),m.g.ea(m.v)),m.F=Date.now(),lt(m)}gc(c)}function br(c){c.g&&(Ll(c),c.g.cancel(),c.g=null)}function va(c){br(c),c.u&&(d.clearTimeout(c.u),c.u=null),Ta(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function oi(c){if(!Cn(c.h)&&!c.s){c.s=!0;var m=c.Ga;et||ae(),ee||(et(),ee=!0),_e.add(m,c),c.B=0}}function of(c,m){return da(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=zt(T(c.Ga,c,m),mc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Zn(this,this.j,c);let $=this.o;if(this.S&&($?($=C($),N($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=vs(this,F,m),y=te(this.I),ze(y,"RID",c),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Oi(this,y),$&&(this.O?m="headers="+encodeURIComponent(String(bi($)))+"&"+m:this.m&&ys(y,this.m,$)),po(this.h,F),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",m),ze(y,"SID","null"),F.T=!0,Pi(F,y,null)):Pi(F,y,m),this.G=2}}else this.G==3&&(c?Ea(this,c):this.i.length==0||Cn(this.h)||Ea(this))};function Ea(c,m){var y;m?y=m.l:y=c.U++;const I=te(c.I);ze(I,"SID",c.K),ze(I,"RID",y),ze(I,"AID",c.T),Oi(c,I),c.m&&c.o&&ys(I,c.m,c.o),y=new Zn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=vs(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),po(c.h,y),Pi(y,I,m)}function Oi(c,m){c.H&&Pe(c.H,function(y,I){ze(m,I,y)}),c.l&&kr({},function(y,I){ze(m,I,y)})}function vs(c,m,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var F=c.i;let $=-1;for(;;){const ie=["count="+y];$==-1?0<y?($=F[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let ot=!0;for(let Bt=0;Bt<y;Bt++){let Ye=F[Bt].g;const Kt=F[Bt].map;if(Ye-=$,0>Ye)$=Math.max(0,F[Bt].g-100),ot=!1;else try{dc(Kt,ie,"req"+Ye+"_")}catch{I&&I(Kt)}}if(ot){I=ie.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,I}function _o(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;et||ae(),ee||(et(),ee=!0),_e.add(m,c),c.v=0}}function wa(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=zt(T(c.Fa,c),mc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=zt(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),br(this),pc(this))};function Ll(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function pc(c){c.g=new Zn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=te(c.qa);ze(m,"RID","rpc"),ze(m,"SID",c.K),ze(m,"AID",c.T),ze(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&ze(m,"TO",c.ja),ze(m,"TYPE","xmlhttp"),Oi(c,m),c.m&&c.o&&ys(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Ve(te(m)),y.m=null,y.P=!0,ho(y,c)}n.Za=function(){this.C!=null&&(this.C=null,br(this),wa(this),Je(19))};function Ta(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Ia(c,m){var y=null;if(c.g==m){Ta(c),Ll(c),c.g=null;var I=2}else if(Gt(c.h,m))y=m.D,fa(c.h,m),I=1;else return;if(c.G!=0){if(m.o)if(I==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var F=c.B;I=Yn(),Oe(I,new On(I,y)),oi(c)}else _o(c);else if(F=m.s,F==3||F==0&&0<m.X||!(I==1&&of(c,m)||I==2&&wa(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),F){case 1:Li(c,5);break;case 4:Li(c,10);break;case 3:Li(c,6);break;default:Li(c,2)}}}function mc(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Li(c,m){if(c.j.info("Error code "+m),m==2){var y=T(c.fb,c),I=c.Xa;const F=!I;I=new re(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ye(I,"https"),Ve(I),F?nf(I.toString(),y):hc(I.toString(),y)}else Je(2);c.G=0,c.l&&c.l.sa(m),gc(c),va(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function gc(c){if(c.G=0,c.ka=[],c.l){const m=pa(c.h);(m.length!=0||c.i.length!=0)&&(W(c.ka,m),W(c.ka,c.i),c.h.i.length=0,q(c.i),c.i.length=0),c.l.ra()}}function _c(c,m,y){var I=y instanceof re?te(y):new re(y);if(I.g!="")m&&(I.g=m+"."+I.g),Re(I,I.s);else{var F=d.location;I=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var $=new re(null);I&&ye($,I),m&&($.g=m),F&&Re($,F),y&&($.l=y),I=$}return y=c.D,m=c.ya,y&&m&&ze(I,y,m),ze(I,"VER",c.la),Oi(c,I),I}function yc(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new vt(new Di({eb:y})):new vt(c.pa),m.Ha(c.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ml(){}n=Ml.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sa(){}Sa.prototype.g=function(c,m){return new An(c,m)};function An(c,m){Ct.call(this),this.g=new Ol(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!fe(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!fe(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ai(this)}z(An,Ct),An.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){sn(this.g)},An.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Jr(c),c=y);m.i.push(new ha(m.Ya++,c)),m.G==3&&oi(m)},An.prototype.N=function(){this.g.l=null,delete this.j,sn(this.g),delete this.g,An.aa.N.call(this)};function vc(c){hn.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}z(vc,hn);function Ec(){Dn.call(this),this.status=1}z(Ec,Dn);function ai(c){this.g=c}z(ai,Ml),ai.prototype.ua=function(){Oe(this.g,"a")},ai.prototype.ta=function(c){Oe(this.g,new vc(c))},ai.prototype.sa=function(c){Oe(this.g,new Ec)},ai.prototype.ra=function(){Oe(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,NT=function(){return new Sa},PT=function(){return Yn()},kT=dn,pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,kh=Sn,la.COMPLETE="complete",AT=la,Si.EventType=Ht,Ht.OPEN="a",Ht.CLOSE="b",Ht.ERROR="c",Ht.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,pu=Si,vt.prototype.listenOnce=vt.prototype.L,vt.prototype.getLastError=vt.prototype.Ka,vt.prototype.getLastErrorCode=vt.prototype.Ba,vt.prototype.getStatus=vt.prototype.Z,vt.prototype.getResponseJson=vt.prototype.Oa,vt.prototype.getResponseText=vt.prototype.oa,vt.prototype.send=vt.prototype.ea,vt.prototype.setWithCredentials=vt.prototype.Ha,RT=vt}).apply(typeof mh<"u"?mh:typeof self<"u"?self:typeof window<"u"?window:{});const PE="@firebase/firestore",NE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$n.UNAUTHENTICATED=new $n(null),$n.GOOGLE_CREDENTIALS=new $n("google-credentials-uid"),$n.FIRST_PARTY=new $n("first-party-uid"),$n.MOCK_USER=new $n("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Td("@firebase/firestore");function Ka(){return Ho.logLevel}function ue(n,...e){if(Ho.logLevel<=qe.DEBUG){const t=e.map(hg);Ho.debug(`Firestore (${Tl}): ${n}`,...t)}}function rs(n,...e){if(Ho.logLevel<=qe.ERROR){const t=e.map(hg);Ho.error(`Firestore (${Tl}): ${n}`,...t)}}function Go(n,...e){if(Ho.logLevel<=qe.WARN){const t=e.map(hg);Ho.warn(`Firestore (${Tl}): ${n}`,...t)}}function hg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,xT(n,r,t)}function xT(n,e,t){let r=`FIRESTORE (${Tl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw rs(r),new Error(r)}function it(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||xT(e,s,r)}function De(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends ls{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($n.UNAUTHENTICATED)))}shutdown(){}}class MP{constructor(e){this.t=e,this.currentUser=$n.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ji,e.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},d=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ji)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(it(typeof r.accessToken=="string",31837,{l:r}),new OP(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string",2055,{h:e}),new $n(e)}}class VP{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=$n.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class FP{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new VP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t($n.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){it(this.o===void 0,3512);const r=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const s=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(it(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function DT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=jP(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function Fe(n,e){return n<e?-1:n>e?1:0}function mm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Fe(r,s);{const a=DT(),u=zP(a.encode(DE(n,t)),a.encode(DE(e,t)));return u!==0?u:Fe(r,s)}}t+=r>65535?2:1}return Fe(n.length,e.length)}function DE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function zP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Fe(n[t],e[t]);return Fe(n.length,e.length)}function cl(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="__name__";class di{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=di.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Fe(e.length,t.length)}static compareSegments(e,t){const r=di.isNumericId(e),s=di.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?di.extractNumericId(e).compare(di.extractNumericId(t)):mm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ws.fromString(e.substring(4,e.length-2))}}class dt extends di{construct(e,t,r){return new dt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new dt(t)}static emptyPath(){return new dt([])}}const BP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends di{construct(e,t,r){return new un(e,t,r)}static isValidIdentifier(e){return BP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bE}static keyField(){return new un([bE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(t)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(dt.fromString(e))}static fromName(e){return new Ee(dt.fromString(e).popFirst(5))}static empty(){return new Ee(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return dt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new dt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(n,e,t){if(!t)throw new se(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WP(n,e,t,r){if(e===!0&&r===!0)throw new se(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function OE(n){if(!Ee.isDocumentKey(n))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function LE(n){if(Ee.isDocumentKey(n))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function OT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ad(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function qr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ad(n);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ut(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zu(n,e){if(!OT(n))throw new se(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new se(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=-62135596800,VE=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*VE);return new mt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ME)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/VE}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zu(e,mt._jsonSchema))return new mt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ME;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:Ut("string",mt._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new mt(0,0))}static max(){return new xe(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Du=-1;function $P(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=xe.fromTimestamp(r===1e9?new mt(t+1,0):new mt(t,r));return new Qs(s,Ee.empty(),e)}function qP(n){return new Qs(n.readTime,n.key,Du)}class Qs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qs(xe.min(),Ee.empty(),Du)}static max(){return new Qs(xe.max(),Ee.empty(),Du)}}function HP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==GP)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let s=0,a=0,u=!1;e.forEach((d=>{++s,d.next((()=>{++a,u&&a===s&&t()}),(f=>r(f)))})),u=!0,a===s&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((s=>s?K.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,a)=>{r.push(t.call(this,s,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next((v=>{u[g]=v,++d,d===a&&r(u)}),(v=>s(v)))}}))}static doWhile(e,t){return new K(((r,s)=>{const a=()=>{e()===!0?t().next((()=>{a()}),s):r()};a()}))}}function QP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class kd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}kd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=-1;function Pd(n){return n==null}function Kh(n){return n===0&&1/n==-1/0}function YP(n){return typeof n=="number"&&Number.isInteger(n)&&!Kh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="";function XP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=FE(e)),e=JP(n.get(t),e);return FE(e)}function JP(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case LT:t+="";break;default:t+=a}}return t}function FE(n){return n+LT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ta(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function MT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=class gm{constructor(e,t){this.comparator=e,this.root=t||$s.EMPTY}insert(e,t){return new gm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$s.BLACK,null,null))}remove(e){return new gm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$s.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gh(this.root,e,this.comparator,!1)}getReverseIterator(){return new gh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gh(this.root,e,this.comparator,!0)}},gh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},$s=class qi{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??qi.RED,this.left=s??qi.EMPTY,this.right=a??qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new qi(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qi.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}};$s.EMPTY=null,$s.RED=!0,$s.BLACK=!1;$s.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new $s(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.comparator=e,this.data=new jt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jE(this.data.getIterator())}getIteratorFrom(e){return new jE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qt(this.comparator);return t.data=e,t}}class jE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Br([])}unionWith(e){let t=new qt(un.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Br(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cl(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class VT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new VT("Invalid base64 string: "+a):a}})(e);return new cn(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a})(e);return new cn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const ZP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(n){if(it(!!n,39018),typeof n=="string"){let e=0;const t=ZP.exec(n);if(it(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xs(n){return typeof n=="string"?cn.fromBase64String(n):cn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="server_timestamp",UT="__type__",jT="__previous_value__",zT="__local_write_time__";function Nd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[UT])===null||t===void 0?void 0:t.stringValue)===FT}function xd(n){const e=n.mapValue.fields[jT];return Nd(e)?xd(e):e}function bu(n){const e=Ys(n.mapValue.fields[zT].timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,t,r,s,a,u,d,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g,this.isUsingEmulator=v}}const Qh="(default)";class Ou{constructor(e,t){this.projectId=e,this.database=t||Qh}static empty(){return new Ou("","")}get isDefaultDatabase(){return this.database===Qh}isEqual(e){return e instanceof Ou&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="__type__",tN="__max__",_h={mapValue:{}},WT="__vector__",Yh="value";function Js(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nd(n)?4:rN(n)?9007199254740991:nN(n)?10:11:Ce(28295,{value:n})}function yi(n,e){if(n===e)return!0;const t=Js(n);if(t!==Js(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bu(n).isEqual(bu(e));case 3:return(function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=Ys(s.timestampValue),d=Ys(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,a){return Xs(s.bytesValue).isEqual(Xs(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,a){return xt(s.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(a.geoPointValue.longitude)})(n,e);case 2:return(function(s,a){if("integerValue"in s&&"integerValue"in a)return xt(s.integerValue)===xt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=xt(s.doubleValue),d=xt(a.doubleValue);return u===d?Kh(u)===Kh(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return cl(n.arrayValue.values||[],e.arrayValue.values||[],yi);case 10:case 11:return(function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(UE(u)!==UE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!yi(u[f],d[f])))return!1;return!0})(n,e);default:return Ce(52216,{left:n})}}function Lu(n,e){return(n.values||[]).find((t=>yi(t,e)))!==void 0}function hl(n,e){if(n===e)return 0;const t=Js(n),r=Js(e);if(t!==r)return Fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(n.booleanValue,e.booleanValue);case 2:return(function(a,u){const d=xt(a.integerValue||a.doubleValue),f=xt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return zE(n.timestampValue,e.timestampValue);case 4:return zE(bu(n),bu(e));case 5:return mm(n.stringValue,e.stringValue);case 6:return(function(a,u){const d=Xs(a),f=Xs(u);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,u){const d=a.split("/"),f=u.split("/");for(let g=0;g<d.length&&g<f.length;g++){const v=Fe(d[g],f[g]);if(v!==0)return v}return Fe(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,u){const d=Fe(xt(a.latitude),xt(u.latitude));return d!==0?d:Fe(xt(a.longitude),xt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return BE(n.arrayValue,e.arrayValue);case 10:return(function(a,u){var d,f,g,v;const w=a.fields||{},T=u.fields||{},D=(d=w[Yh])===null||d===void 0?void 0:d.arrayValue,z=(f=T[Yh])===null||f===void 0?void 0:f.arrayValue,q=Fe(((g=D==null?void 0:D.values)===null||g===void 0?void 0:g.length)||0,((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0);return q!==0?q:BE(D,z)})(n.mapValue,e.mapValue);case 11:return(function(a,u){if(a===_h.mapValue&&u===_h.mapValue)return 0;if(a===_h.mapValue)return 1;if(u===_h.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=u.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let w=0;w<f.length&&w<v.length;++w){const T=mm(f[w],v[w]);if(T!==0)return T;const D=hl(d[f[w]],g[v[w]]);if(D!==0)return D}return Fe(f.length,v.length)})(n.mapValue,e.mapValue);default:throw Ce(23264,{le:t})}}function zE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Fe(n,e);const t=Ys(n),r=Ys(e),s=Fe(t.seconds,r.seconds);return s!==0?s:Fe(t.nanos,r.nanos)}function BE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=hl(t[s],r[s]);if(a)return a}return Fe(t.length,r.length)}function dl(n){return _m(n)}function _m(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ys(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Xs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=_m(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${_m(t.fields[u])}`;return s+"}"})(n.mapValue):Ce(61005,{value:n})}function Ph(n){switch(Js(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xd(n);return e?16+Ph(e):16;case 5:return 2*n.stringValue.length;case 6:return Xs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,a)=>s+Ph(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ta(r.fields,((a,u)=>{s+=a.length+Ph(u)})),s})(n.mapValue);default:throw Ce(13486,{value:n})}}function Xh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ym(n){return!!n&&"integerValue"in n}function pg(n){return!!n&&"arrayValue"in n}function WE(n){return!!n&&"nullValue"in n}function $E(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nh(n){return!!n&&"mapValue"in n}function nN(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[BT])===null||t===void 0?void 0:t.stringValue)===WT}function wu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ta(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=wu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rN(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.value=e}static empty(){return new _r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Nh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wu(t)}setAll(e){let t=un.emptyPath(),r={},s=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=wu(u):s.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Nh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Nh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ta(t,((s,a)=>e[s]=a));for(const s of r)delete e[s]}clone(){return new _r(wu(this.value))}}function $T(n){const e=[];return ta(n.fields,((t,r)=>{const s=new un([t]);if(Nh(r)){const a=$T(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)})),new Br(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new yn(e,0,xe.min(),xe.min(),xe.min(),_r.empty(),0)}static newFoundDocument(e,t,r,s){return new yn(e,1,t,xe.min(),r,s,0)}static newNoDocument(e,t){return new yn(e,2,t,xe.min(),xe.min(),_r.empty(),0)}static newUnknownDocument(e,t){return new yn(e,3,t,xe.min(),xe.min(),_r.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_r.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_r.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fl{constructor(e,t){this.position=e,this.inclusive=t}}function qE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=Ee.comparator(Ee.fromName(u.referenceValue),t.key):r=hl(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function HE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function iN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class qT{}class Ft extends qT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new oN(e,t,r):t==="array-contains"?new uN(e,r):t==="in"?new cN(e,r):t==="not-in"?new hN(e,r):t==="array-contains-any"?new dN(e,r):new Ft(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new aN(e,r):new lN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hl(t,this.value)):t!==null&&Js(this.value)===Js(t)&&this.matchesComparison(hl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kr extends qT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Kr(e,t)}matches(e){return HT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function HT(n){return n.op==="and"}function GT(n){return sN(n)&&HT(n)}function sN(n){for(const e of n.filters)if(e instanceof Kr)return!1;return!0}function vm(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+dl(n.value);if(GT(n))return n.filters.map((e=>vm(e))).join(",");{const e=n.filters.map((t=>vm(t))).join(",");return`${n.op}(${e})`}}function KT(n,e){return n instanceof Ft?(function(r,s){return s instanceof Ft&&r.op===s.op&&r.field.isEqual(s.field)&&yi(r.value,s.value)})(n,e):n instanceof Kr?(function(r,s){return s instanceof Kr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((a,u,d)=>a&&KT(u,s.filters[d])),!0):!1})(n,e):void Ce(19439)}function QT(n){return n instanceof Ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${dl(t.value)}`})(n):n instanceof Kr?(function(t){return t.op.toString()+" {"+t.getFilters().map(QT).join(" ,")+"}"})(n):"Filter"}class oN extends Ft{constructor(e,t,r){super(e,t,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class aN extends Ft{constructor(e,t){super(e,"in",t),this.keys=YT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lN extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=YT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function YT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ee.fromName(r.referenceValue)))}class uN extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pg(t)&&Lu(t.arrayValue,this.value)}}class cN extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Lu(this.value.arrayValue,t)}}class hN extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Lu(this.value.arrayValue,t)}}class dN extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Lu(this.value.arrayValue,r)))}}/**
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
 */class fN{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function GE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new fN(n,e,t,r,s,a,u)}function mg(n){const e=De(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>vm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Pd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>dl(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>dl(r))).join(",")),e.Pe=t}return e.Pe}function gg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!KT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!HE(n.startAt,e.startAt)&&HE(n.endAt,e.endAt)}function Em(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function pN(n,e,t,r,s,a,u,d){return new na(n,e,t,r,s,a,u,d)}function Dd(n){return new na(n)}function KE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _g(n){return n.collectionGroup!==null}function rl(n){const e=De(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new qt(un.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Mu(a,r))})),t.has(un.keyField().canonicalString())||e.Te.push(new Mu(un.keyField(),r))}return e.Te}function pi(n){const e=De(n);return e.Ie||(e.Ie=mN(e,rl(n))),e.Ie}function mN(n,e){if(n.limitType==="F")return GE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const a=s.dir==="desc"?"asc":"desc";return new Mu(s.field,a)}));const t=n.endAt?new fl(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fl(n.startAt.position,n.startAt.inclusive):null;return GE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wm(n,e){const t=n.filters.concat([e]);return new na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Jh(n,e,t){return new na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bd(n,e){return gg(pi(n),pi(e))&&n.limitType===e.limitType}function XT(n){return`${mg(pi(n))}|lt:${n.limitType}`}function Qa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>QT(s))).join(", ")}]`),Pd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>dl(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>dl(s))).join(",")),`Target(${r})`})(pi(n))}; limitType=${n.limitType})`}function Od(n,e){return e.isFoundDocument()&&(function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ee.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,s){for(const a of rl(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(u,d,f){const g=qE(u,d,f);return u.inclusive?g<=0:g<0})(r.startAt,rl(r),s)||r.endAt&&!(function(u,d,f){const g=qE(u,d,f);return u.inclusive?g>=0:g>0})(r.endAt,rl(r),s))})(n,e)}function gN(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function JT(n){return(e,t)=>{let r=!1;for(const s of rl(n)){const a=_N(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function _N(n,e,t){const r=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(a,u,d){const f=u.data.field(a),g=d.data.field(a);return f!==null&&g!==null?hl(f,g):Ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ta(this.inner,((t,r)=>{for(const[s,a]of r)e(s,a)}))}isEmpty(){return MT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new jt(Ee.comparator);function is(){return yN}const ZT=new jt(Ee.comparator);function mu(...n){let e=ZT;for(const t of n)e=e.insert(t.key,t);return e}function eI(n){let e=ZT;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Mo(){return Tu()}function tI(){return Tu()}function Tu(){return new ra((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vN=new jt(Ee.comparator),EN=new qt(Ee.comparator);function He(...n){let e=EN;for(const t of n)e=e.add(t);return e}const wN=new qt(Fe);function TN(){return wN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kh(e)?"-0":e}}function nI(n){return{integerValue:""+n}}function IN(n,e){return YP(e)?nI(e):yg(n,e)}/**
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
 */class Ld{constructor(){this._=void 0}}function SN(n,e,t){return n instanceof Vu?(function(s,a){const u={fields:{[UT]:{stringValue:FT},[zT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Nd(a)&&(a=xd(a)),a&&(u.fields[jT]=a),{mapValue:u}})(t,e):n instanceof Fu?iI(n,e):n instanceof Uu?sI(n,e):(function(s,a){const u=rI(s,a),d=QE(u)+QE(s.Ee);return ym(u)&&ym(s.Ee)?nI(d):yg(s.serializer,d)})(n,e)}function CN(n,e,t){return n instanceof Fu?iI(n,e):n instanceof Uu?sI(n,e):t}function rI(n,e){return n instanceof Zh?(function(r){return ym(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Vu extends Ld{}class Fu extends Ld{constructor(e){super(),this.elements=e}}function iI(n,e){const t=oI(e);for(const r of n.elements)t.some((s=>yi(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Uu extends Ld{constructor(e){super(),this.elements=e}}function sI(n,e){let t=oI(e);for(const r of n.elements)t=t.filter((s=>!yi(s,r)));return{arrayValue:{values:t}}}class Zh extends Ld{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function QE(n){return xt(n.integerValue||n.doubleValue)}function oI(n){return pg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,t){this.field=e,this.transform=t}}function AN(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Fu&&s instanceof Fu||r instanceof Uu&&s instanceof Uu?cl(r.elements,s.elements,yi):r instanceof Zh&&s instanceof Zh?yi(r.Ee,s.Ee):r instanceof Vu&&s instanceof Vu})(n.transform,e.transform)}class kN{constructor(e,t){this.version=e,this.transformResults=t}}class Hr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Hr}static exists(e){return new Hr(void 0,e)}static updateTime(e){return new Hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Md{}function aI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vg(n.key,Hr.none()):new ec(n.key,n.data,Hr.none());{const t=n.data,r=_r.empty();let s=new qt(un.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new ia(n.key,r,new Br(s.toArray()),Hr.none())}}function PN(n,e,t){n instanceof ec?(function(s,a,u){const d=s.value.clone(),f=XE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ia?(function(s,a,u){if(!xh(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=XE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(lI(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):(function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function Iu(n,e,t,r){return n instanceof ec?(function(a,u,d,f){if(!xh(a.precondition,u))return d;const g=a.value.clone(),v=JE(a.fieldTransforms,f,u);return g.setAll(v),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,r):n instanceof ia?(function(a,u,d,f){if(!xh(a.precondition,u))return d;const g=JE(a.fieldTransforms,f,u),v=u.data;return v.setAll(lI(a)),v.setAll(g),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,r):(function(a,u,d){return xh(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function NN(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=rI(r.transform,s||null);a!=null&&(t===null&&(t=_r.empty()),t.set(r.field,a))}return t||null}function YE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cl(r,s,((a,u)=>AN(a,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ec extends Md{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ia extends Md{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function lI(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function XE(n,e,t){const r=new Map;it(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,CN(u,d,t[s]))}return r}function JE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,SN(a,u,e))}return r}class vg extends Md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xN extends Md{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&PN(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Iu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Iu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tI();return this.mutations.forEach((s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=aI(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(xe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),He())}isEqual(e){return this.batchId===e.batchId&&cl(this.mutations,e.mutations,((t,r)=>YE(t,r)))&&cl(this.baseMutations,e.baseMutations,((t,r)=>YE(t,r)))}}class Eg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){it(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return vN})();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Eg(e,t,r,s)}}/**
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
 */class bN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ON{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Xe;function LN(n){switch(n){case H.OK:return Ce(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function uI(n){if(n===void 0)return rs("GRPC error has no .code"),H.UNKNOWN;switch(n){case Mt.OK:return H.OK;case Mt.CANCELLED:return H.CANCELLED;case Mt.UNKNOWN:return H.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return H.INTERNAL;case Mt.UNAVAILABLE:return H.UNAVAILABLE;case Mt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Mt.NOT_FOUND:return H.NOT_FOUND;case Mt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Mt.ABORTED:return H.ABORTED;case Mt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Mt.DATA_LOSS:return H.DATA_LOSS;default:return Ce(39323,{code:n})}}(Xe=Mt||(Mt={}))[Xe.OK=0]="OK",Xe[Xe.CANCELLED=1]="CANCELLED",Xe[Xe.UNKNOWN=2]="UNKNOWN",Xe[Xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xe[Xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xe[Xe.NOT_FOUND=5]="NOT_FOUND",Xe[Xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xe[Xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xe[Xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xe[Xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xe[Xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xe[Xe.ABORTED=10]="ABORTED",Xe[Xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xe[Xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xe[Xe.INTERNAL=13]="INTERNAL",Xe[Xe.UNAVAILABLE=14]="UNAVAILABLE",Xe[Xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const MN=new Ws([4294967295,4294967295],0);function ZE(n){const e=DT().encode(n),t=new CT;return t.update(e),new Uint8Array(t.digest())}function ew(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ws([t,r],0),new Ws([s,a],0)]}class wg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gu(`Invalid padding: ${t}`);if(r<0)throw new gu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ws.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ws.fromNumber(r)));return s.compare(MN)===1&&(s=new Ws([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ZE(e),[r,s]=ew(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new wg(a,s,t);return r.forEach((d=>u.insert(d))),u}insert(e){if(this.fe===0)return;const t=ZE(e),[r,s]=ew(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vd(xe.min(),s,new jt(Fe),is(),He())}}class tc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tc(r,t,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class cI{constructor(e,t){this.targetId=e,this.De=t}}class hI{constructor(e,t,r=cn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class tw{constructor(){this.ve=0,this.Ce=nw(),this.Fe=cn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=He(),t=He(),r=He();return this.Ce.forEach(((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Ce(38017,{changeType:a})}})),new tc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=nw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class VN{constructor(e){this.We=e,this.Ge=new Map,this.ze=is(),this.je=yh(),this.Je=yh(),this.He=new jt(Fe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(Em(a))if(r===0){const u=new Ee(a.path);this.Xe(t,u,yn.newNoDocument(u,xe.min()))}else it(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=Xs(r).toUint8Array()}catch(f){if(f instanceof VT)return Go("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new wg(u,s,a)}catch(f){return Go(f instanceof gu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((a,u)=>{const d=this.st(u);if(d){if(a.current&&Em(d.target)){const f=new Ee(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,yn.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}}));let r=He();this.Je.forEach(((a,u)=>{let d=!0;u.forEachWhile((f=>{const g=this.st(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(r=r.add(a))})),this.ze.forEach(((a,u)=>u.setReadTime(e)));const s=new Vd(e,t,this.He,this.ze,r);return this.ze=is(),this.je=yh(),this.Je=yh(),this.He=new jt(Fe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new tw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new qt(Fe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new qt(Fe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function yh(){return new jt(Ee.comparator)}function nw(){return new jt(Ee.comparator)}const FN={asc:"ASCENDING",desc:"DESCENDING"},UN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jN={and:"AND",or:"OR"};class zN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tm(n,e){return n.useProto3Json||Pd(e)?e:{value:e}}function ed(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function BN(n,e){return ed(n,e.toTimestamp())}function mi(n){return it(!!n,49232),xe.fromTimestamp((function(t){const r=Ys(t);return new mt(r.seconds,r.nanos)})(n))}function Tg(n,e){return Im(n,e).canonicalString()}function Im(n,e){const t=(function(s){return new dt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function fI(n){const e=dt.fromString(n);return it(yI(e),10190,{key:e.toString()}),e}function Sm(n,e){return Tg(n.databaseId,e.path)}function Fp(n,e){const t=fI(e);if(t.get(1)!==n.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(mI(t))}function pI(n,e){return Tg(n.databaseId,e)}function WN(n){const e=fI(n);return e.length===4?dt.emptyPath():mI(e)}function Cm(n){return new dt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mI(n){return it(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function rw(n,e,t){return{name:Sm(n,e),fields:t.value.mapValue.fields}}function $N(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ce(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=(function(g,v){return g.useProto3Json?(it(v===void 0||typeof v=="string",58123),cn.fromBase64String(v||"")):(it(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),cn.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(g){const v=g.code===void 0?H.UNKNOWN:uI(g.code);return new se(v,g.message||"")})(u);t=new hI(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fp(n,r.document.name),a=mi(r.document.updateTime),u=r.document.createTime?mi(r.document.createTime):xe.min(),d=new _r({mapValue:{fields:r.document.fields}}),f=yn.newFoundDocument(s,a,u,d),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Dh(g,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fp(n,r.document),a=r.readTime?mi(r.readTime):xe.min(),u=yn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Dh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fp(n,r.document),a=r.removedTargetIds||[];t=new Dh([],a,s,null)}else{if(!("filter"in e))return Ce(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ON(s,a),d=r.targetId;t=new cI(d,u)}}return t}function qN(n,e){let t;if(e instanceof ec)t={update:rw(n,e.key,e.value)};else if(e instanceof vg)t={delete:Sm(n,e.key)};else if(e instanceof ia)t={update:rw(n,e.key,e.data),updateMask:ex(e.fieldMask)};else{if(!(e instanceof xN))return Ce(16599,{Rt:e.type});t={verify:Sm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,u){const d=u.transform;if(d instanceof Vu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Fu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Uu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Zh)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ce(20930,{transform:u.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,a){return a.updateTime!==void 0?{updateTime:BN(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ce(27497)})(n,e.precondition)),t}function HN(n,e){return n&&n.length>0?(it(e!==void 0,14353),n.map((t=>(function(s,a){let u=s.updateTime?mi(s.updateTime):mi(a);return u.isEqual(xe.min())&&(u=mi(a)),new kN(u,s.transformResults||[])})(t,e)))):[]}function GN(n,e){return{documents:[pI(n,e.path)]}}function KN(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=pI(n,s);const a=(function(g){if(g.length!==0)return _I(Kr.create(g,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const u=(function(g){if(g.length!==0)return g.map((v=>(function(T){return{field:Ya(T.field),direction:XN(T.dir)}})(v)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Tm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:s}}function QN(n){let e=WN(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){it(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(w){const T=gI(w);return T instanceof Kr&&GT(T)?T.getFilters():[T]})(t.where));let u=[];t.orderBy&&(u=(function(w){return w.map((T=>(function(z){return new Mu(Xa(z.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,Pd(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,D=w.values||[];return new fl(D,T)})(t.startAt));let g=null;return t.endAt&&(g=(function(w){const T=!w.before,D=w.values||[];return new fl(D,T)})(t.endAt)),pN(e,s,u,a,d,"F",f,g)}function YN(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gI(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xa(t.unaryFilter.field);return Ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xa(t.unaryFilter.field);return Ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Xa(t.unaryFilter.field);return Ft.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Xa(t.unaryFilter.field);return Ft.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ft.create(Xa(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Kr.create(t.compositeFilter.filters.map((r=>gI(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(t.compositeFilter.op))})(n):Ce(30097,{filter:n})}function XN(n){return FN[n]}function JN(n){return UN[n]}function ZN(n){return jN[n]}function Ya(n){return{fieldPath:n.canonicalString()}}function Xa(n){return un.fromServerFormat(n.fieldPath)}function _I(n){return n instanceof Ft?(function(t){if(t.op==="=="){if($E(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NAN"}};if(WE(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($E(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NOT_NAN"}};if(WE(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ya(t.field),op:JN(t.op),value:t.value}}})(n):n instanceof Kr?(function(t){const r=t.getFilters().map((s=>_I(s)));return r.length===1?r[0]:{compositeFilter:{op:ZN(t.op),filters:r}}})(n):Ce(54877,{filter:n})}function ex(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,r,s,a=xe.min(),u=xe.min(),d=cn.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.gt=e}}function nx(n){const e=QN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jh(e,e.limit,"L"):e}/**
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
 */class rx{constructor(){this.Dn=new ix}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Qs.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Qs.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new qt(dt.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qt(dt.comparator)).toArray()}}/**
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
 */const iw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vI=41943040;class qn{static withCacheSize(e){return new qn(e,qn.DEFAULT_COLLECTION_PERCENTILE,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.DEFAULT_COLLECTION_PERCENTILE=10,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qn.DEFAULT=new qn(vI,qn.DEFAULT_COLLECTION_PERCENTILE,qn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qn.DISABLED=new qn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new pl(0)}static ur(){return new pl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="LruGarbageCollector",EI=1048576;function ow([n,e],[t,r]){const s=Fe(n,t);return s===0?Fe(e,r):s}class sx{constructor(e){this.Tr=e,this.buffer=new qt(ow),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ow(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ox{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(sw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sl(t)?ue(sw,"Ignoring IndexedDB error during garbage collection: ",t):await Il(t)}await this.Rr(3e5)}))}}class ax{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(kd.ue);const r=new sx(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(iw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s)))).next((w=>(r=w,d=Date.now(),this.removeTargets(e,r,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r)))).next((w=>(g=Date.now(),Ka()<=qe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-v}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w}))))}}function lx(n,e){return new ax(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.changes=new ra((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Iu(r.mutation,s,Br.empty(),mt.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,He()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=He()){const s=Mo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((a=>{let u=mu();return a.forEach(((d,f)=>{u=u.insert(d,f.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const r=Mo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,He())))}populateOverlays(e,t,r){const s=[];return r.forEach((a=>{t.has(a)||s.push(a)})),this.documentOverlayCache.getOverlays(e,s).next((a=>{a.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,r,s){let a=is();const u=Tu(),d=(function(){return Tu()})();return t.forEach(((f,g)=>{const v=r.get(g.key);s.has(g.key)&&(v===void 0||v.mutation instanceof ia)?a=a.insert(g.key,g):v!==void 0?(u.set(g.key,v.mutation.getFieldMask()),Iu(v.mutation,g,v.mutation.getFieldMask(),mt.now())):u.set(g.key,Br.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((g,v)=>u.set(g,v))),t.forEach(((g,v)=>{var w;return d.set(g,new cx(v,(w=u.get(g))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const r=Tu();let s=new jt(((u,d)=>u-d)),a=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((f=>{const g=t.get(f);if(g===null)return;let v=r.get(f)||Br.empty();v=d.applyToLocalView(g,v),r.set(f,v);const w=(s.get(d.batchId)||He()).add(f);s=s.insert(d.batchId,w)}))})).next((()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,v=f.value,w=tI();v.forEach((T=>{if(!a.has(T)){const D=aI(t.get(T),r.get(T));D!==null&&w.set(T,D),a=a.add(T)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,w))}return K.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(u){return Ee.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_g(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):K.resolve(Mo());let d=Du,f=a;return u.next((g=>K.forEach(g,((v,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(v)?K.resolve():this.remoteDocumentCache.getEntry(e,v).next((T=>{f=f.insert(v,T)}))))).next((()=>this.populateOverlays(e,g,a))).next((()=>this.computeViews(e,f,g,He()))).next((v=>({batchId:d,changes:eI(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((r=>{let s=mu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=mu();return this.indexManager.getCollectionParents(e,a).next((d=>K.forEach(d,(f=>{const g=(function(w,T){return new na(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,r,s).next((v=>{v.forEach(((w,T)=>{u=u.insert(w,T)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s)))).next((u=>{a.forEach(((f,g)=>{const v=g.getKey();u.get(v)===null&&(u=u.insert(v,yn.newInvalidDocument(v)))}));let d=mu();return u.forEach(((f,g)=>{const v=a.get(f);v!==void 0&&Iu(v.mutation,g,Br.empty(),mt.now()),Od(t,g)&&(d=d.insert(f,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:mi(s.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:nx(s.bundledQuery),readTime:mi(s.readTime)}})(t)),K.resolve()}}/**
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
 */class fx{constructor(){this.overlays=new jt(Ee.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Mo();return K.forEach(t,(s=>this.getOverlay(e,s).next((a=>{a!==null&&r.set(s,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const s=Mo(),a=t.length+1,u=new Ee(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return K.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new jt(((g,v)=>g-v));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=a.get(g.largestBatchId);v===null&&(v=Mo(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Mo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((g,v)=>d.set(g,v))),!(d.size()>=s)););return K.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new bN(t,r));let a=this.kr.get(t);a===void 0&&(a=He(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class px{constructor(){this.sessionToken=cn.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.qr=new qt(Zt.Qr),this.$r=new qt(Zt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Zt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Zt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ee(new dt([])),r=new Zt(t,e),s=new Zt(t,e+1),a=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),a.push(u.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ee(new dt([])),r=new Zt(t,e),s=new Zt(t,e+1);let a=He();return this.$r.forEachInRange([r,s],(u=>{a=a.add(u.key)})),a}containsKey(e){const t=new Zt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Zt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ee.comparator(e.key,t.key)||Fe(e.Hr,t.Hr)}static Ur(e,t){return Fe(e.Hr,t.Hr)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new qt(Zt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new DN(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new Zt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?fg:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Zt(t,0),s=new Zt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],(u=>{const d=this.Zr(u.Hr);a.push(d)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qt(Fe);return t.forEach((s=>{const a=new Zt(s,0),u=new Zt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],(d=>{r=r.add(d.Hr)}))})),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;Ee.isDocumentKey(a)||(a=a.child(""));const u=new Zt(new Ee(a),0);let d=new qt(Fe);return this.Yr.forEachWhile((f=>{const g=f.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(d=d.add(f.Hr)),!0)}),u),K.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){it(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(t.mutations,(s=>{const a=new Zt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Zt(t,0),s=this.Yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.ni=e,this.docs=(function(){return new jt(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():yn.newInvalidDocument(t))}getEntries(e,t){let r=is();return t.forEach((s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():yn.newInvalidDocument(s))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=is();const u=t.path,d=new Ee(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||HP(qP(v),r)<=0||(s.has(v.key)||Od(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Ce(9500)}ri(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new _x(this)}getSize(e){return K.resolve(this.size)}}class _x extends ux{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.persistence=e,this.ii=new ra((t=>mg(t)),gg),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.si=0,this.oi=new Ig,this.targetCount=0,this._i=pl.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new pl(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach(((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)})),K.waitFor(a).next((()=>s))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach((u=>{a.push(s.markPotentiallyOrphaned(e,u))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t){this.ai={},this.overlays={},this.ui=new kd(0),this.ci=!1,this.ci=!0,this.li=new px,this.referenceDelegate=e(this),this.hi=new yx(this),this.indexManager=new rx,this.remoteDocumentCache=(function(s){return new gx(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new tx(t),this.Ti=new dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new mx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){ue("MemoryPersistence","Starting transaction:",e);const s=new vx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((a=>this.referenceDelegate.di(s).next((()=>a)))).toPromise().then((a=>(s.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class vx extends KP{constructor(e){super(),this.currentSequenceNumber=e}}class Sg{constructor(e){this.persistence=e,this.Ai=new Ig,this.Ri=null}static Vi(e){return new Sg(e)}get mi(){if(this.Ri)return this.Ri;throw Ce(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(r=>{const s=Ee.fromPath(r);return this.fi(e,s).next((a=>{a||t.removeEntry(s,xe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class td{constructor(e,t){this.persistence=e,this.gi=new ra((r=>XP(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=lx(this,t)}static Vi(e,t){return new td(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((a=>a?K.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,(u=>this.Sr(e,u,t).next((d=>{d||(r++,a.removeEntry(u,xe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ph(e.data.value)),t}Sr(e,t,r){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=He(),s=He();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Cg(e,t.fromCache,r,s)}}/**
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
 */class Ex{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return H1()?8:QP(vn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next((u=>{a.result=u})).next((()=>{if(!a.result)return this.ys(e,t,s,r).next((u=>{a.result=u}))})).next((()=>{if(a.result)return;const u=new Ex;return this.ws(e,t,u).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)}))})).next((()=>a.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Ka()<=qe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Qa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(Ka()<=qe.DEBUG&&ue("QueryEngine","Query:",Qa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ka()<=qe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Qa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pi(t))):K.resolve())}ps(e,t){if(KE(t))return K.resolve(null);let r=pi(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Jh(t,null,"F"),r=pi(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const u=He(...a);return this.gs.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,r).next((f=>{const g=this.bs(t,d);return this.Ds(t,g,u,f.readTime)?this.ps(e,Jh(t,null,"F")):this.vs(e,g,t,f)}))))})))))}ys(e,t,r,s){return KE(t)||s.isEqual(xe.min())?K.resolve(null):this.gs.getDocuments(e,r).next((a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?K.resolve(null):(Ka()<=qe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qa(t)),this.vs(e,u,t,$P(s,Du)).next((d=>d)))}))}bs(e,t){let r=new qt(JT(e));return t.forEach(((s,a)=>{Od(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return Ka()<=qe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Qa(t)),this.gs.getDocumentsMatchingQuery(e,t,Qs.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((a=>(t.forEach((u=>{a=a.insert(u.key,u)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="LocalStore",Tx=3e8;class Ix{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new jt(Fe),this.Ms=new ra((a=>mg(a)),gg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Sx(n,e,t,r){return new Ix(n,e,t,r)}async function TI(n,e){const t=De(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const u=[],d=[];let f=He();for(const g of s){u.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of a){d.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next((g=>({Bs:g,removedBatchIds:u,addedBatchIds:d})))}))}))}function Cx(n,e){const t=De(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,g,v){const w=g.batch,T=w.keys();let D=K.resolve();return T.forEach((z=>{D=D.next((()=>v.getEntry(f,z))).next((q=>{const W=g.docVersions.get(z);it(W!==null,48541),q.version.compareTo(W)<0&&(w.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),v.addEntry(q)))}))})),D.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(d){let f=He();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function II(n){const e=De(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Rx(n,e){const t=De(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach(((v,w)=>{const T=s.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,w))));let D=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?D=D.withResumeToken(cn.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,r)),s=s.insert(w,D),(function(q,W,ge){return q.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=Tx?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(T,D,v)&&d.push(t.hi.updateTargetData(a,D))}));let f=is(),g=He();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),d.push(Ax(a,u,e.documentUpdates).next((v=>{f=v.Ls,g=v.ks}))),!r.isEqual(xe.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));d.push(v)}return K.waitFor(d).next((()=>u.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,g))).next((()=>f))})).then((a=>(t.Fs=s,a)))}function Ax(n,e,t){let r=He(),s=He();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let u=is();return t.forEach(((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(xe.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ue(Rg,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)})),{Ls:u,ks:s}}))}function kx(n,e){const t=De(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=fg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Px(n,e){const t=De(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((a=>a?(s=a,K.resolve(s)):t.hi.allocateTargetId(r).next((u=>(s=new Us(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Rm(n,e,t){const r=De(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!Sl(u))throw u;ue(Rg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function aw(n,e,t){const r=De(n);let s=xe.min(),a=He();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,g,v){const w=De(f),T=w.Ms.get(v);return T!==void 0?K.resolve(w.Fs.get(T)):w.hi.getTargetData(g,v)})(r,u,pi(e)).next((d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next((f=>{a=f}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:xe.min(),t?a:He()))).next((d=>(Nx(r,gN(e),d),{documents:d,qs:a})))))}function Nx(n,e,t){let r=n.xs.get(e)||xe.min();t.forEach(((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class lw{constructor(){this.activeTargetIds=TN()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xx{constructor(){this.Fo=new lw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dx{xo(e){}shutdown(){}}/**
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
 */const uw="ConnectivityMonitor";class cw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(uw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(uw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vh=null;function Am(){return vh===null?vh=(function(){return 268435456+Math.round(2147483648*Math.random())})():vh++,"0x"+vh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="RestConnection",bx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ox{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Qh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=Am(),d=this.Go(e,t.toUriEncodedString());ue(Up,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:g}=new URL(d),v=as(g);return this.jo(e,d,f,r,v).then((w=>(ue(Up,`Received RPC '${e}' ${u}: `,w),w)),(w=>{throw Go(Up,`RPC '${e}' ${u} failed with error: `,w,"url: ",d,"request:",r),w}))}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Tl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,a)=>e[a]=s)),r&&r.headers.forEach(((s,a)=>e[a]=s))}Go(e,t){const r=bx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="WebChannelConnection";class Mx extends Ox{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=Am();return new Promise(((d,f)=>{const g=new RT;g.setWithCredentials(!0),g.listenOnce(AT.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case kh.NO_ERROR:const w=g.getResponseJson();ue(_n,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),d(w);break;case kh.TIMEOUT:ue(_n,`RPC '${e}' ${u} timed out`),f(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case kh.HTTP_ERROR:const T=g.getStatus();if(ue(_n,`RPC '${e}' ${u} failed with status:`,T,"response text:",g.getResponseText()),T>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const z=D==null?void 0:D.error;if(z&&z.status&&z.message){const q=(function(ge){const fe=ge.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(fe)>=0?fe:H.UNKNOWN})(z.status);f(new se(q,z.message))}else f(new se(H.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new se(H.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{c_:e,streamId:u,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{ue(_n,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(s);ue(_n,`RPC '${e}' ${u} sending request:`,s),g.send(t,"POST",v,r,15)}))}P_(e,t,r){const s=Am(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=NT(),d=PT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ue(_n,`Creating RPC '${e}' stream ${s}: ${v}`,f);const w=u.createWebChannel(v,f);this.T_(w);let T=!1,D=!1;const z=new Lx({Ho:W=>{D?ue(_n,`Not sending because RPC '${e}' stream ${s} is closed:`,W):(T||(ue(_n,`Opening RPC '${e}' stream ${s} transport.`),w.open(),T=!0),ue(_n,`RPC '${e}' stream ${s} sending:`,W),w.send(W))},Yo:()=>w.close()}),q=(W,ge,fe)=>{W.listen(ge,(ve=>{try{fe(ve)}catch(Ie){setTimeout((()=>{throw Ie}),0)}}))};return q(w,pu.EventType.OPEN,(()=>{D||(ue(_n,`RPC '${e}' stream ${s} transport opened.`),z.s_())})),q(w,pu.EventType.CLOSE,(()=>{D||(D=!0,ue(_n,`RPC '${e}' stream ${s} transport closed`),z.__(),this.I_(w))})),q(w,pu.EventType.ERROR,(W=>{D||(D=!0,Go(_n,`RPC '${e}' stream ${s} transport errored. Name:`,W.name,"Message:",W.message),z.__(new se(H.UNAVAILABLE,"The operation could not be completed")))})),q(w,pu.EventType.MESSAGE,(W=>{var ge;if(!D){const fe=W.data[0];it(!!fe,16349);const ve=fe,Ie=(ve==null?void 0:ve.error)||((ge=ve[0])===null||ge===void 0?void 0:ge.error);if(Ie){ue(_n,`RPC '${e}' stream ${s} received error:`,Ie);const ut=Ie.status;let Pe=(function(k){const N=Mt[k];if(N!==void 0)return uI(N)})(ut),b=Ie.message;Pe===void 0&&(Pe=H.INTERNAL,b="Unknown error status: "+ut+" with message "+Ie.message),D=!0,z.__(new se(Pe,b)),w.close()}else ue(_n,`RPC '${e}' stream ${s} received:`,fe),z.a_(fe)}})),q(d,kT.STAT_EVENT,(W=>{W.stat===pm.PROXY?ue(_n,`RPC '${e}' stream ${s} detected buffering proxy`):W.stat===pm.NOPROXY&&ue(_n,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{z.o_()}),0),z}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function jp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){return new zN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="PersistentStream";class CI{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new SI(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(rs(t.toString()),rs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new se(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ue(hw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ue(hw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vx extends CI{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=$N(this.serializer,e),r=(function(a){if(!("targetChange"in a))return xe.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?xe.min():u.readTime?mi(u.readTime):xe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Cm(this.serializer),t.addTarget=(function(a,u){let d;const f=u.target;if(d=Em(f)?{documents:GN(a,f)}:{query:KN(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=dI(a,u.resumeToken);const g=Tm(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(xe.min())>0){d.readTime=ed(a,u.snapshotVersion.toTimestamp());const g=Tm(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const r=YN(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Cm(this.serializer),t.removeTarget=e,this.k_(t)}}class Fx extends CI{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return it(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){it(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=HN(e.writeResults,e.commitTime),r=mi(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Cm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>qN(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{}class jx extends Ux{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Wo(e,Im(t,r),s,a,u))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new se(H.UNKNOWN,a.toString())}))}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Jo(e,Im(t,r),s,u,d,a))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(H.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class zx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rs(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="RemoteStore";class Bx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{sa(this)&&(ue(Ko,"Restarting streams for network reachability change."),await(async function(f){const g=De(f);g.Ia.add(4),await nc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Ud(g)})(this))}))})),this.Aa=new zx(r,s)}}async function Ud(n){if(sa(n))for(const e of n.da)await e(!0)}async function nc(n){for(const e of n.da)await e(!1)}function RI(n,e){const t=De(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ng(t)?Pg(t):Cl(t).x_()&&kg(t,e))}function Ag(n,e){const t=De(n),r=Cl(t);t.Ta.delete(e),r.x_()&&AI(t,e),t.Ta.size===0&&(r.x_()?r.B_():sa(t)&&t.Aa.set("Unknown"))}function kg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cl(n).H_(e)}function AI(n,e){n.Ra.$e(e),Cl(n).Y_(e)}function Pg(n){n.Ra=new VN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Cl(n).start(),n.Aa.aa()}function Ng(n){return sa(n)&&!Cl(n).M_()&&n.Ta.size>0}function sa(n){return De(n).Ia.size===0}function kI(n){n.Ra=void 0}async function Wx(n){n.Aa.set("Online")}async function $x(n){n.Ta.forEach(((e,t)=>{kg(n,e)}))}async function qx(n,e){kI(n),Ng(n)?(n.Aa.la(e),Pg(n)):n.Aa.set("Unknown")}async function Hx(n,e,t){if(n.Aa.set("Online"),e instanceof hI&&e.state===2&&e.cause)try{await(async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))})(n,e)}catch(r){ue(Ko,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nd(n,r)}else if(e instanceof Dh?n.Ra.Ye(e):e instanceof cI?n.Ra.it(e):n.Ra.et(e),!t.isEqual(xe.min()))try{const r=await II(n.localStore);t.compareTo(r)>=0&&await(function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach(((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(g);v&&a.Ta.set(g,v.withResumeToken(f.resumeToken,u))}})),d.targetMismatches.forEach(((f,g)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(cn.EMPTY_BYTE_STRING,v.snapshotVersion)),AI(a,f);const w=new Us(v.target,f,g,v.sequenceNumber);kg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(r){ue(Ko,"Failed to raise snapshot:",r),await nd(n,r)}}async function nd(n,e,t){if(!Sl(e))throw e;n.Ia.add(1),await nc(n),n.Aa.set("Offline"),t||(t=()=>II(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(Ko,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ud(n)}))}function PI(n,e){return e().catch((t=>nd(n,t,e)))}async function jd(n){const e=De(n),t=Zs(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:fg;for(;Gx(e);)try{const s=await kx(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Kx(e,s)}catch(s){await nd(e,s)}NI(e)&&xI(e)}function Gx(n){return sa(n)&&n.Pa.length<10}function Kx(n,e){n.Pa.push(e);const t=Zs(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function NI(n){return sa(n)&&!Zs(n).M_()&&n.Pa.length>0}function xI(n){Zs(n).start()}async function Qx(n){Zs(n).na()}async function Yx(n){const e=Zs(n);for(const t of n.Pa)e.X_(t.mutations)}async function Xx(n,e,t){const r=n.Pa.shift(),s=Eg.from(r,e,t);await PI(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await jd(n)}async function Jx(n,e){e&&Zs(n).Z_&&await(async function(r,s){if((function(u){return LN(u)&&u!==H.ABORTED})(s.code)){const a=r.Pa.shift();Zs(r).N_(),await PI(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s))),await jd(r)}})(n,e),NI(n)&&xI(n)}async function dw(n,e){const t=De(n);t.asyncQueue.verifyOperationInProgress(),ue(Ko,"RemoteStore received new credentials");const r=sa(t);t.Ia.add(3),await nc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ud(t)}async function Zx(n,e){const t=De(n);e?(t.Ia.delete(2),await Ud(t)):e||(t.Ia.add(2),await nc(t),t.Aa.set("Unknown"))}function Cl(n){return n.Va||(n.Va=(function(t,r,s){const a=De(t);return a.ia(),new Vx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Wx.bind(null,n),e_:$x.bind(null,n),n_:qx.bind(null,n),J_:Hx.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ng(n)?Pg(n):n.Aa.set("Unknown")):(await n.Va.stop(),kI(n))}))),n.Va}function Zs(n){return n.ma||(n.ma=(function(t,r,s){const a=De(t);return a.ia(),new Fx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Qx.bind(null,n),n_:Jx.bind(null,n),ea:Yx.bind(null,n),ta:Xx.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await jd(n)):(await n.ma.stop(),n.Pa.length>0&&(ue(Ko,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new xg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dg(n,e){if(rs("AsyncQueue",`${e}: ${n}`),Sl(n))return new se(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static emptySet(e){return new il(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ee.comparator(t.key,r.key):(t,r)=>Ee.comparator(t.key,r.key),this.keyedMap=mu(),this.sortedSet=new jt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof il)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new il;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.fa=new jt(Ee.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ce(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ml{constructor(e,t,r,s,a,u,d,f,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new ml(e,t,il.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class t2{constructor(){this.queries=pw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=De(t),a=s.queries;s.queries=pw(),a.forEach(((u,d)=>{for(const f of d.wa)f.onError(r)}))})(this,new se(H.ABORTED,"Firestore shutting down"))}}function pw(){return new ra((n=>XT(n)),bd)}async function bg(n,e){const t=De(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new e2,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Dg(u,`Initialization of query '${Qa(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&Lg(t)}async function Og(n,e){const t=De(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function n2(n,e){const t=De(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&Lg(t)}function r2(n,e,t){const r=De(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function Lg(n){n.Da.forEach((e=>{e.next()}))}var km,mw;(mw=km||(km={})).Fa="default",mw.Cache="cache";class Mg{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ml(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ml.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==km.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.key=e}}class bI{constructor(e){this.key=e}}class i2{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=He(),this.mutatedKeys=He(),this.Xa=JT(e),this.eu=new il(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new fw,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((v,w)=>{const T=s.get(v),D=Od(this.query,w)?w:null,z=!!T&&this.mutatedKeys.has(T.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let W=!1;T&&D?T.data.isEqual(D.data)?z!==q&&(r.track({type:3,doc:D}),W=!0):this.iu(T,D)||(r.track({type:2,doc:D}),W=!0,(f&&this.Xa(D,f)>0||g&&this.Xa(D,g)<0)&&(d=!0)):!T&&D?(r.track({type:0,doc:D}),W=!0):T&&!D&&(r.track({type:1,doc:T}),W=!0,(f||g)&&(d=!0)),W&&(D?(u=u.add(D),a=q?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort(((v,w)=>(function(D,z){const q=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{At:W})}};return q(D)-q(z)})(v.type,w.type)||this.Xa(v.doc,w.doc))),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,g=f!==this.Ya;return this.Ya=f,u.length!==0||g?{snapshot:new ml(this.query,e.eu,a,u,e.mutatedKeys,f===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=He(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new bI(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new DI(r))})),t}uu(e){this.Ha=e.qs,this.Za=He();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ml.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Vg="SyncEngine";class s2{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class o2{constructor(e){this.key=e,this.lu=!1}}class a2{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ra((d=>XT(d)),bd),this.Tu=new Map,this.Iu=new Set,this.du=new jt(Ee.comparator),this.Eu=new Map,this.Au=new Ig,this.Ru={},this.Vu=new Map,this.mu=pl.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function l2(n,e,t=!0){const r=UI(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await OI(r,e,t,!0),s}async function u2(n,e){const t=UI(n);await OI(t,e,!0,!1)}async function OI(n,e,t,r){const s=await Px(n.localStore,pi(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await c2(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&RI(n.remoteStore,s),d}async function c2(n,e,t,r,s){n.gu=(w,T,D)=>(async function(q,W,ge,fe){let ve=W.view.nu(ge);ve.Ds&&(ve=await aw(q.localStore,W.query,!1).then((({documents:b})=>W.view.nu(b,ve))));const Ie=fe&&fe.targetChanges.get(W.targetId),ut=fe&&fe.targetMismatches.get(W.targetId)!=null,Pe=W.view.applyChanges(ve,q.isPrimaryClient,Ie,ut);return _w(q,W.targetId,Pe._u),Pe.snapshot})(n,w,T,D);const a=await aw(n.localStore,e,!0),u=new i2(e,a.qs),d=u.nu(a.documents),f=tc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),g=u.applyChanges(d,n.isPrimaryClient,f);_w(n,t,g._u);const v=new s2(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function h2(n,e,t){const r=De(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter((u=>!bd(u,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rm(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ag(r.remoteStore,s.targetId),Pm(r,s.targetId)})).catch(Il)):(Pm(r,s.targetId),await Rm(r.localStore,s.targetId,!0))}async function d2(n,e){const t=De(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ag(t.remoteStore,r.targetId))}async function f2(n,e,t){const r=E2(n);try{const s=await(function(u,d){const f=De(u),g=mt.now(),v=d.reduce(((D,z)=>D.add(z.key)),He());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let z=is(),q=He();return f.Os.getEntries(D,v).next((W=>{z=W,z.forEach(((ge,fe)=>{fe.isValidDocument()||(q=q.add(ge))}))})).next((()=>f.localDocuments.getOverlayedDocuments(D,z))).next((W=>{w=W;const ge=[];for(const fe of d){const ve=NN(fe,w.get(fe.key).overlayedDocument);ve!=null&&ge.push(new ia(fe.key,ve,$T(ve.value.mapValue),Hr.exists(!0)))}return f.mutationQueue.addMutationBatch(D,g,ge,d)})).next((W=>{T=W;const ge=W.applyToLocalDocumentSet(w,q);return f.documentOverlayCache.saveOverlays(D,W.batchId,ge)}))})).then((()=>({batchId:T.batchId,changes:eI(w)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(u,d,f){let g=u.Ru[u.currentUser.toKey()];g||(g=new jt(Fe)),g=g.insert(d,f),u.Ru[u.currentUser.toKey()]=g})(r,s.batchId,t),await rc(r,s.changes),await jd(r.remoteStore)}catch(s){const a=Dg(s,"Failed to persist write");t.reject(a)}}async function LI(n,e){const t=De(n);try{const r=await Rx(t.localStore,e);e.targetChanges.forEach(((s,a)=>{const u=t.Eu.get(a);u&&(it(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?it(u.lu,14607):s.removedDocuments.size>0&&(it(u.lu,42227),u.lu=!1))})),await rc(t,r,e)}catch(r){await Il(r)}}function gw(n,e,t){const r=De(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)})),(function(u,d){const f=De(u);f.onlineState=d;let g=!1;f.queries.forEach(((v,w)=>{for(const T of w.wa)T.va(d)&&(g=!0)})),g&&Lg(f)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function p2(n,e,t){const r=De(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new jt(Ee.comparator);u=u.insert(a,yn.newNoDocument(a,xe.min()));const d=He().add(a),f=new Vd(xe.min(),new Map,new jt(Fe),u,d);await LI(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Fg(r)}else await Rm(r.localStore,e,!1).then((()=>Pm(r,e,t))).catch(Il)}async function m2(n,e){const t=De(n),r=e.batch.batchId;try{const s=await Cx(t.localStore,e);VI(t,r,null),MI(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await rc(t,s)}catch(s){await Il(s)}}async function g2(n,e,t){const r=De(n);try{const s=await(function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return f.mutationQueue.lookupMutationBatch(g,d).next((w=>(it(w!==null,37113),v=w.keys(),f.mutationQueue.removeMutationBatch(g,w)))).next((()=>f.mutationQueue.performConsistencyCheck(g))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>f.localDocuments.getDocuments(g,v)))}))})(r.localStore,e);VI(r,e,t),MI(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await rc(r,s)}catch(s){await Il(s)}}function MI(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function VI(n,e,t){const r=De(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Pm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||FI(n,r)}))}function FI(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ag(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Fg(n))}function _w(n,e,t){for(const r of t)r instanceof DI?(n.Au.addReference(r.key,e),_2(n,r)):r instanceof bI?(ue(Vg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||FI(n,r.key)):Ce(19791,{yu:r})}function _2(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(ue(Vg,"New document in limbo: "+t),n.Iu.add(r),Fg(n))}function Fg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ee(dt.fromString(e)),r=n.mu.next();n.Eu.set(r,new o2(t)),n.du=n.du.insert(t,r),RI(n.remoteStore,new Us(pi(Dd(t.path)),r,"TargetPurposeLimboResolution",kd.ue))}}async function rc(n,e,t){const r=De(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((d,f)=>{u.push(r.gu(f,e,t).then((g=>{var v;if((g||t)&&r.isPrimaryClient){const w=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=Cg.Es(f.targetId,g);a.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,g){const v=De(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>K.forEach(g,(T=>K.forEach(T.Is,(D=>v.persistence.referenceDelegate.addReference(w,T.targetId,D))).next((()=>K.forEach(T.ds,(D=>v.persistence.referenceDelegate.removeReference(w,T.targetId,D)))))))))}catch(w){if(!Sl(w))throw w;ue(Rg,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const D=v.Fs.get(T),z=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(z);v.Fs=v.Fs.insert(T,q)}}})(r.localStore,a))}async function y2(n,e){const t=De(n);if(!t.currentUser.isEqual(e)){ue(Vg,"User change. New user:",e.toKey());const r=await TI(t.localStore,e);t.currentUser=e,(function(a,u){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new se(H.CANCELLED,u))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rc(t,r.Bs)}}function v2(n,e){const t=De(n),r=t.Eu.get(e);if(r&&r.lu)return He().add(r.key);{let s=He();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function UI(n){const e=De(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=LI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p2.bind(null,e),e.hu.J_=n2.bind(null,e.eventManager),e.hu.pu=r2.bind(null,e.eventManager),e}function E2(n){const e=De(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=m2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=g2.bind(null,e),e}class rd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Sx(this.persistence,new wx,e.initialUser,this.serializer)}Du(e){return new wI(Sg.Vi,this.serializer)}bu(e){return new xx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rd.provider={build:()=>new rd};class w2 extends rd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){it(this.persistence.referenceDelegate instanceof td,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ox(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?qn.withCacheSize(this.cacheSizeBytes):qn.DEFAULT;return new wI((r=>td.Vi(r,t)),this.serializer)}}class Nm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=y2.bind(null,this.syncEngine),await Zx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new t2})()}createDatastore(e){const t=Fd(e.databaseInfo.databaseId),r=(function(a){return new Mx(a)})(e.databaseInfo);return(function(a,u,d,f){return new jx(a,u,d,f)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,a,u,d){return new Bx(r,s,a,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>gw(this.syncEngine,t,0)),(function(){return cw.C()?new cw:new Dx})())}createSyncEngine(e,t){return(function(s,a,u,d,f,g,v){const w=new a2(s,a,u,d,f,g);return v&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const a=De(s);ue(Ko,"RemoteStore shutting down."),a.Ia.add(5),await nc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Nm.provider={build:()=>new Nm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ug{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):rs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="FirestoreClient";class T2{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=$n.UNAUTHENTICATED,this.clientId=dg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async u=>{ue(eo,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(ue(eo,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Dg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function zp(n,e){n.asyncQueue.verifyOperationInProgress(),ue(eo,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await TI(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Go("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Go("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function yw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await I2(n);ue(eo,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>dw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>dw(e.remoteStore,s))),n._onlineComponents=e}async function I2(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(eo,"Using user provided OfflineComponentProvider");try{await zp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Go("Error using user provided cache. Falling back to memory cache: "+t),await zp(n,new rd)}}else ue(eo,"Using default OfflineComponentProvider"),await zp(n,new w2(void 0));return n._offlineComponents}async function jI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(eo,"Using user provided OnlineComponentProvider"),await yw(n,n._uninitializedComponentsProvider._online)):(ue(eo,"Using default OnlineComponentProvider"),await yw(n,new Nm))),n._onlineComponents}function S2(n){return jI(n).then((e=>e.syncEngine))}async function id(n){const e=await jI(n),t=e.eventManager;return t.onListen=l2.bind(null,e.syncEngine),t.onUnlisten=h2.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=u2.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=d2.bind(null,e.syncEngine),t}function C2(n,e,t={}){const r=new Ji;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,g){const v=new Ug({next:T=>{v.Ou(),u.enqueueAndForget((()=>Og(a,w)));const D=T.docs.has(d);!D&&T.fromCache?g.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&T.fromCache&&f&&f.source==="server"?g.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new Mg(Dd(d.path),v,{includeMetadataChanges:!0,ka:!0});return bg(a,w)})(await id(n),n.asyncQueue,e,t,r))),r.promise}function R2(n,e,t={}){const r=new Ji;return n.asyncQueue.enqueueAndForget((async()=>(function(a,u,d,f,g){const v=new Ug({next:T=>{v.Ou(),u.enqueueAndForget((()=>Og(a,w))),T.fromCache&&f.source==="server"?g.reject(new se(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new Mg(d,v,{includeMetadataChanges:!0,ka:!0});return bg(a,w)})(await id(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function zI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="firestore.googleapis.com",Ew=!0;class ww{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=A2,this.ssl=Ew}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ew;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EI)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jg{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new LP;switch(r.type){case"firstParty":return new FP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=vw.get(t);r&&(ue("ComponentProvider","Removing Datastore"),vw.delete(t),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wi(this.firestore,e,this._query)}}class bt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}toJSON(){return{type:bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zu(t,bt._jsonSchema))return new bt(e,r||null,new Ee(dt.fromString(t.referencePath)))}}bt._jsonSchemaVersion="firestore/documentReference/1.0",bt._jsonSchema={type:Ut("string",bt._jsonSchemaVersion),referencePath:Ut("string")};class qs extends wi{constructor(e,t,r){super(e,t,Dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Ee(e))}withConverter(e){return new qs(this.firestore,e,this._path)}}function BI(n,e,...t){if(n=st(n),bT("collection","path",e),n instanceof jg){const r=dt.fromString(e,...t);return LE(r),new qs(n,null,r)}{if(!(n instanceof bt||n instanceof qs))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(dt.fromString(e,...t));return LE(r),new qs(n.firestore,null,r)}}function Vo(n,e,...t){if(n=st(n),arguments.length===1&&(e=dg.newId()),bT("doc","path",e),n instanceof jg){const r=dt.fromString(e,...t);return OE(r),new bt(n,null,new Ee(r))}{if(!(n instanceof bt||n instanceof qs))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(dt.fromString(e,...t));return OE(r),new bt(n.firestore,n instanceof qs?n.converter:null,new Ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="AsyncQueue";class Iw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new SI(this,"async_queue_retry"),this.oc=()=>{const r=jp();r&&ue(Tw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=jp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=jp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ji;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Sl(e))throw e;ue(Tw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,rs("INTERNAL UNHANDLED ERROR: ",Sw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=xg.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(s),s}ac(){this.tc&&Ce(47125,{hc:Sw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Sw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1})(n,["next","error","complete"])}class to extends jg{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Iw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iw(e),this._firestoreClient=void 0,await e}}}function k2(n,e,t){t||(t=Qh);const r=Ku(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),a=r.getOptions(t);if(Gs(a,e))return s;throw new se(H.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new se(H.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EI)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&as(e.host)&&Ed(e.host),r.initialize({options:e,instanceIdentifier:t})}function zd(n){if(n._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||P2(n),n._firestoreClient}function P2(n){var e,t,r;const s=n._freezeSettings(),a=(function(d,f,g,v){return new eN(d,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,zI(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new T2(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yr(cn.fromBase64String(e))}catch(t){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yr(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zu(e,yr._jsonSchema))return yr.fromBase64String(e.bytes)}}yr._jsonSchemaVersion="firestore/bytes/1.0",yr._jsonSchema={type:Ut("string",yr._jsonSchemaVersion),bytes:Ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gi._jsonSchemaVersion}}static fromJSON(e){if(Zu(e,gi._jsonSchema))return new gi(e.latitude,e.longitude)}}gi._jsonSchemaVersion="firestore/geoPoint/1.0",gi._jsonSchema={type:Ut("string",gi._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
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
 */class _i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zu(e,_i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _i(e.vectorValues);throw new se(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_i._jsonSchemaVersion="firestore/vectorValue/1.0",_i._jsonSchema={type:Ut("string",_i._jsonSchemaVersion),vectorValues:Ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=/^__.*__$/;class x2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ia(e,this.data,this.fieldMask,t,this.fieldTransforms):new ec(e,this.data,t,this.fieldTransforms)}}function WI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ec:n})}}class Wg{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return sd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(WI(this.Ec)&&N2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class D2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fd(e)}Dc(e,t,r,s=!1){return new Wg({Ec:e,methodName:t,bc:r,path:un.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bd(n){const e=n._freezeSettings(),t=Fd(n._databaseId);return new D2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $I(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);KI("Data must be an object, but it was:",u,r);const d=HI(r,u);let f,g;if(a.merge)f=new Br(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const w of a.mergeFields){const T=b2(e,w,t);if(!u.contains(T))throw new se(H.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);L2(v,T)||v.push(T)}f=new Br(v),g=u.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,g=u.fieldTransforms;return new x2(new _r(d),f,g)}class $g extends Bg{_toFieldTransform(e){return new RN(e.path,new Vu)}isEqual(e){return e instanceof $g}}function qI(n,e,t,r=!1){return qg(t,n.Dc(r?4:3,e))}function qg(n,e){if(GI(n=st(n)))return KI("Unsupported field value:",e,n),HI(n,e);if(n instanceof Bg)return(function(r,s){if(!WI(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const a=[];let u=0;for(const d of r){let f=qg(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,e)}return(function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=mt.fromDate(r);return{timestampValue:ed(s.serializer,a)}}if(r instanceof mt){const a=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ed(s.serializer,a)}}if(r instanceof gi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yr)return{bytesValue:dI(s.serializer,r._byteString)};if(r instanceof bt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Tg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _i)return(function(u,d){return{mapValue:{fields:{[BT]:{stringValue:WT},[Yh]:{arrayValue:{values:u.toArray().map((g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return yg(d.serializer,g)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ad(r)}`)})(n,e)}function HI(n,e){const t={};return MT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ta(n,((r,s)=>{const a=qg(s,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function GI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof gi||n instanceof yr||n instanceof bt||n instanceof Bg||n instanceof _i)}function KI(n,e,t){if(!GI(t)||!OT(t)){const r=Ad(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function b2(n,e,t){if((e=st(e))instanceof zg)return e._internalPath;if(typeof e=="string")return QI(n,e);throw sd("Field path arguments must be of type string or ",n,!1,void 0,t)}const O2=new RegExp("[~\\*/\\[\\]]");function QI(n,e,t){if(e.search(O2)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zg(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new se(H.INVALID_ARGUMENT,d+n+f)}function L2(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new M2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class M2 extends Hg{data(){return super.data()}}function Gg(n,e){return typeof e=="string"?QI(n,e):e instanceof zg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kg{}class Wd extends Kg{}function Bp(n,e,...t){let r=[];e instanceof Kg&&r.push(e),r=r.concat(t),(function(a){const u=a.filter((f=>f instanceof Yg)).length,d=a.filter((f=>f instanceof Qg)).length;if(u>1||u>0&&d>0)throw new se(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Qg extends Wd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qg(e,t,r)}_apply(e){const t=this._parse(e);return XI(e._query,t),new wi(e.firestore,e.converter,wm(e._query,t))}_parse(e){const t=Bd(e.firestore);return(function(a,u,d,f,g,v,w){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){kw(w,v);const z=[];for(const q of w)z.push(Aw(f,a,q));T={arrayValue:{values:z}}}else T=Aw(f,a,w)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||kw(w,v),T=qI(d,u,w,v==="in"||v==="not-in");return Ft.create(g,v,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Yg extends Kg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yg(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Kr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)XI(u,f),u=wm(u,f)})(e._query,t),new wi(e.firestore,e.converter,wm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xg extends Wd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xg(e,t)}_apply(e){const t=(function(s,a,u){if(s.startAt!==null)throw new se(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new se(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mu(a,u)})(e._query,this._field,this._direction);return new wi(e.firestore,e.converter,(function(s,a){const u=s.explicitOrderBy.concat([a]);return new na(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Wp(n,e="asc"){const t=e,r=Gg("orderBy",n);return Xg._create(r,t)}class $d extends Wd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new $d(e,t,r)}_apply(e){return new wi(e.firestore,e.converter,Jh(e._query,this._limit,this._limitType))}}function V2(n){return $d._create("limit",n,"F")}function F2(n){return $d._create("limitToLast",n,"L")}class Jg extends Wd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Jg(e,t,r)}_apply(e){const t=U2(e,this.type,this._docOrFields,this._inclusive);return new wi(e.firestore,e.converter,(function(s,a){return new na(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,a,s.endAt)})(e._query,t))}}function Rw(...n){return Jg._create("startAfter",n,!1)}function U2(n,e,t,r){if(t[0]=st(t[0]),t[0]instanceof Hg)return(function(a,u,d,f,g){if(!f)throw new se(H.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const v=[];for(const w of rl(a))if(w.field.isKeyField())v.push(Xh(u,f.key));else{const T=f.data.field(w.field);if(Nd(T))throw new se(H.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+w.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(T===null){const D=w.field.canonicalString();throw new se(H.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${D}' (used as the orderBy) does not exist.`)}v.push(T)}return new fl(v,g)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Bd(n.firestore);return(function(u,d,f,g,v,w){const T=u.explicitOrderBy;if(v.length>T.length)throw new se(H.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const D=[];for(let z=0;z<v.length;z++){const q=v[z];if(T[z].field.isKeyField()){if(typeof q!="string")throw new se(H.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof q}`);if(!_g(u)&&q.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${q}' contains a slash.`);const W=u.path.child(dt.fromString(q));if(!Ee.isDocumentKey(W))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${W}' is not because it contains an odd number of segments.`);const ge=new Ee(W);D.push(Xh(d,ge))}else{const W=qI(f,g,q);D.push(W)}}return new fl(D,w)})(n._query,n.firestore._databaseId,s,e,t,r)}}function Aw(n,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new se(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(e)&&t.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(dt.fromString(t));if(!Ee.isDocumentKey(r))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xh(n,new Ee(r))}if(t instanceof bt)return Xh(n,t._key);throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ad(t)}.`)}function kw(n,e){if(!Array.isArray(n)||n.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XI(n,e){const t=(function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class j2{convertValue(e,t="none"){switch(Js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ta(e,((s,a)=>{r[s]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Yh].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>xt(u.doubleValue)));return new _i(a)}convertGeoPoint(e){return new gi(xt(e.latitude),xt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bu(e));default:return null}}convertTimestamp(e){const t=Ys(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=dt.fromString(e);it(yI(r),9688,{name:e});const s=new Ou(r.get(1),r.get(3)),a=new Ee(r.popFirst(5));return s.isEqual(t)||rs(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class _u{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zo extends Hg{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Gg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}zo._jsonSchemaVersion="firestore/documentSnapshot/1.0",zo._jsonSchema={type:Ut("string",zo._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class bh extends zo{data(e={}){return super.data(e)}}class Bo{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new _u(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bh(this._firestore,this._userDataWriter,r.key,r,new _u(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((d=>{const f=new bh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new _u(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new bh(s._firestore,s._userDataWriter,d.doc.key,d.doc,new _u(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,v=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:z2(d.type),doc:f,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function z2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n){n=qr(n,bt);const e=qr(n.firestore,to);return C2(zd(e),n._key).then((t=>eS(e,n,t)))}Bo._jsonSchemaVersion="firestore/querySnapshot/1.0",Bo._jsonSchema={type:Ut("string",Bo._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class Zg extends j2{constructor(e){super(),this.firestore=e}convertBytes(e){return new yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,t)}}function Pw(n){n=qr(n,wi);const e=qr(n.firestore,to),t=zd(e),r=new Zg(e);return YI(n._query),R2(t,n._query).then((s=>new Bo(e,r,n,s)))}function Oh(n,e,t){n=qr(n,bt);const r=qr(n.firestore,to),s=JI(n.converter,e,t);return e_(r,[$I(Bd(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Hr.none())])}function B2(n){return e_(qr(n.firestore,to),[new vg(n._key,Hr.none())])}function $p(n,e){const t=qr(n.firestore,to),r=Vo(n),s=JI(n.converter,e);return e_(t,[$I(Bd(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Hr.exists(!1))]).then((()=>r))}function qp(n,...e){var t,r,s;n=st(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Cw(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Cw(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,g,v;if(n instanceof bt)g=qr(n.firestore,to),v=Dd(n._key.path),f={next:w=>{e[u]&&e[u](eS(g,n,w))},error:e[u+1],complete:e[u+2]};else{const w=qr(n,wi);g=qr(w.firestore,to),v=w._query;const T=new Zg(g);f={next:D=>{e[u]&&e[u](new Bo(g,T,w,D))},error:e[u+1],complete:e[u+2]},YI(n._query)}return(function(T,D,z,q){const W=new Ug(q),ge=new Mg(D,W,z);return T.asyncQueue.enqueueAndForget((async()=>bg(await id(T),ge))),()=>{W.Ou(),T.asyncQueue.enqueueAndForget((async()=>Og(await id(T),ge)))}})(zd(g),v,d,f)}function e_(n,e){return(function(r,s){const a=new Ji;return r.asyncQueue.enqueueAndForget((async()=>f2(await S2(r),s,a))),a.promise})(zd(n),e)}function eS(n,e,t){const r=t.docs.get(e._key),s=new Zg(n);return new zo(n,s,e._key,r,new _u(t.hasPendingWrites,t.fromCache),e.converter)}function Oo(){return new $g("serverTimestamp")}(function(e,t=!0){(function(s){Tl=s})(Zo),Ks(new es("firestore",((r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new to(new MP(r.getProvider("auth-internal")),new UP(u,r.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ou(g.options.projectId,v)})(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Er(PE,NE,e),Er(PE,NE,"esm2017")})();var Nw={};const xw="@firebase/database",Dw="1.0.20";/**
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
 */let tS="";function W2(n){tS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $2(e)}}catch{}return new q2},Fo=nS("localStorage"),H2=nS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Td("@firebase/database"),G2=(function(){let n=1;return function(){return n++}})(),rS=function(n){const e=iR(n),t=new eR;t.update(e);const r=t.digest();return Qm.encodeByteArray(r)},ic=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ic.apply(null,r):typeof r=="object"?e+=tn(r):e+=r,e+=" "}return e};let Su=null,bw=!0;const K2=function(n,e){ne(!0,"Can't turn on custom loggers persistently."),sl.logLevel=qe.VERBOSE,Su=sl.log.bind(sl)},ln=function(...n){if(bw===!0&&(bw=!1,Su===null&&H2.get("logging_enabled")===!0&&K2()),Su){const e=ic.apply(null,n);Su(e)}},sc=function(n){return function(...e){ln(n,...e)}},xm=function(...n){const e="FIREBASE INTERNAL ERROR: "+ic(...n);sl.error(e)},ss=function(...n){const e=`FIREBASE FATAL ERROR: ${ic(...n)}`;throw sl.error(e),new Error(e)},Kn=function(...n){const e="FIREBASE WARNING: "+ic(...n);sl.warn(e)},Q2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Y2=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},gl="[MIN_NAME]",Qo="[MAX_NAME]",oa=function(n,e){if(n===e)return 0;if(n===gl||e===Qo)return-1;if(e===gl||n===Qo)return 1;{const t=Ow(n),r=Ow(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},X2=function(n,e){return n===e?0:n<e?-1:1},au=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+tn(e))},t_=function(n){if(typeof n!="object"||n===null)return tn(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=tn(e[r]),t+=":",t+=t_(n[e[r]]);return t+="}",t},iS=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function En(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sS=function(n){ne(!qd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const g=[];for(f=t;f;f-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(s?1:0),g.reverse();const v=g.join("");let w="";for(f=0;f<64;f+=8){let T=parseInt(v.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),w=w+T}return w.toLowerCase()},J2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Z2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eD(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const tD=new RegExp("^-?(0*)\\d{1,10}$"),nD=-2147483648,rD=2147483647,Ow=function(n){if(tD.test(n)){const e=Number(n);if(e>=nD&&e<=rD)return e}return null},Rl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},iD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class sD{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Nn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kn(e)}}class Lh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="5",oS="v",aS="s",lS="r",uS="f",cS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hS="ls",dS="p",Dm="ac",fS="websocket",pS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,g=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function aD(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gS(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===fS)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pS)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aD(n)&&(t.ns=n.namespace);const s=[];return En(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.counters_={}}incrementCounter(e,t=1){vi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return D1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={},Gp={};function r_(n){const e=n.toString();return Hp[e]||(Hp[e]=new lD),Hp[e]}function uD(n,e){const t=n.toString();return Gp[t]||(Gp[t]=e()),Gp[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Rl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="start",hD="close",dD="pLPCommand",fD="pRTLPCB",_S="id",yS="pw",vS="ser",pD="cb",mD="seg",gD="ts",_D="d",yD="dframe",ES=1870,wS=30,vD=ES-wS,ED=25e3,wD=3e4;class Ja{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sc(e),this.stats_=r_(t),this.urlFn=f=>(this.appCheckToken&&(f[Dm]=this.appCheckToken),gS(t,pS,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wD)),Y2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new i_((...a)=>{const[u,d,f,g,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Lw)this.id=d,this.password=f;else if(u===hD)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lw]="t",r[vS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[pD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oS]=n_,this.transportSessionId&&(r[aS]=this.transportSessionId),this.lastSessionId&&(r[hS]=this.lastSessionId),this.applicationId&&(r[dS]=this.applicationId),this.appCheckToken&&(r[Dm]=this.appCheckToken),typeof location<"u"&&location.hostname&&cS.test(location.hostname)&&(r[lS]=uS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ja.forceAllow_=!0}static forceDisallow(){Ja.forceDisallow_=!0}static isAvailable(){return Ja.forceAllow_?!0:!Ja.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!J2()&&!Z2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=D0(t),s=iS(r,vD);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[yD]="t",r[_S]=e,r[yS]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=tn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class i_{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=G2(),window[dD+this.uniqueCallbackIdentifier]=e,window[fD+this.uniqueCallbackIdentifier]=t,this.myIFrame=i_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){ln("frame writing exception"),d.stack&&ln(d.stack),ln(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_S]=this.myID,e[yS]=this.myPW,e[vS]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wS+r.length<=ES;){const u=this.pendingSegs.shift();r=r+"&"+mD+s+"="+u.seg+"&"+gD+s+"="+u.ts+"&"+_D+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(ED)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=16384,ID=45e3;let od=null;typeof MozWebSocket<"u"?od=MozWebSocket:typeof WebSocket<"u"&&(od=WebSocket);class jr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sc(this.connId),this.stats_=r_(t),this.connURL=jr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[oS]=n_,typeof location<"u"&&location.hostname&&cS.test(location.hostname)&&(u[lS]=uS),t&&(u[aS]=t),r&&(u[hS]=r),s&&(u[Dm]=s),a&&(u[dS]=a),gS(e,fS,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fo.set("previous_websocket_failure",!0);try{let r;q1(),this.mySock=new od(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&od!==null&&!jr.forceDisallow_}static previouslyFailed(){return Fo.isInMemoryStorage||Fo.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Pu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=iS(t,TD);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ID))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jr.responsesRequiredToBeHealthy=2;jr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{static get ALL_TRANSPORTS(){return[Ja,jr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=jr&&jr.isAvailable();let r=t&&!jr.previouslyFailed();if(e.webSocketOnly&&(t||Kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jr];else{const s=this.transports_=[];for(const a of ju.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);ju.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ju.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=6e4,CD=5e3,RD=10*1024,AD=100*1024,Kp="t",Mw="d",kD="s",Vw="r",PD="e",Fw="o",Uw="a",jw="n",zw="p",ND="h";class xD{constructor(e,t,r,s,a,u,d,f,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sc("c:"+this.id+":"),this.transportManager_=new ju(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Cu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kp in e){const t=e[Kp];t===Uw?this.upgradeIfSecondaryHealthy_():t===Vw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=au("t",e),r=au("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=au("t",e),r=au("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=au(Kp,e);if(Mw in e){const r=e[Mw];if(t===ND){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===jw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===kD?this.onConnectionShutdown_(r):t===Vw?this.onReset_(r):t===PD?xm("Server Error: "+r):t===Fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),n_!==r&&Kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Cu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends IS{static getInstance(){return new ad}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=32,Ww=768;class at{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new at("")}function Ue(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function no(n){return n.pieces_.length-n.pieceNum_}function ht(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new at(n.pieces_,e)}function s_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function DD(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function zu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function SS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new at(e,0)}function Dt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof at)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new at(t,0)}function We(n){return n.pieceNum_>=n.pieces_.length}function Hn(n,e){const t=Ue(n),r=Ue(e);if(t===null)return e;if(t===r)return Hn(ht(n),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bD(n,e){const t=zu(n,0),r=zu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=oa(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function o_(n,e){if(no(n)!==no(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function vr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(no(n)>no(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class OD{constructor(e,t){this.errorPrefix_=t,this.parts_=zu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=wd(this.parts_[r]);CS(this)}}function LD(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=wd(e),CS(n)}function MD(n){const e=n.parts_.pop();n.byteLength_-=wd(e),n.parts_.length>0&&(n.byteLength_-=1)}function CS(n){if(n.byteLength_>Ww)throw new Error(n.errorPrefix_+"has a key path longer than "+Ww+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bw+") or object contains a cycle "+Lo(n))}function Lo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends IS{static getInstance(){return new a_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=1e3,VD=300*1e3,$w=30*1e3,FD=1.3,UD=3e4,jD="server_kill",qw=3;class Zi extends TS{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=Zi.nextPersistentConnectionId_++,this.log_=sc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lu,this.maxReconnectDelay_=VD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");a_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ad.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(tn(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Hi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,g=d.s;Zi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(g,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vi(e,"w")){const r=ll(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Z1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$w)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=J1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tn(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xm("Unrecognized action received from server: "+tn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UD&&(this.reconnectDelay_=lu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zi.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},g=function(w){ne(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(w)};this.realtime_={close:f,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[w,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=w&&w.accessToken,this.appCheckToken_=T&&T.token,d=new xD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,D=>{Kn(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(jD)},a))}catch(w){this.log_("Failed to get token: "+w),u||(this.repoInfo_.nodeAdmin&&Kn(w),f())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uh(this.interruptReasons_)&&(this.reconnectDelay_=lu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>t_(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new at(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){ln("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qw&&(this.reconnectDelay_=$w,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ln("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+tS.replace(/\./g,"-")]=1,Xm()?e["framework.cordova"]=1:F0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ad.getInstance().currentlyOnline();return Uh(this.interruptReasons_)&&e}}Zi.nextPersistentConnectionId_=0;Zi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $e(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new $e(gl,e),s=new $e(gl,t);return this.compare(r,s)!==0}minPost(){return $e.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh;class RS extends Hd{static get __EMPTY_NODE(){return Eh}static set __EMPTY_NODE(e){Eh=e}compare(e,t){return oa(e.name,t.name)}isDefinedOn(e){throw El("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $e.MIN}maxPost(){return new $e(Qo,Eh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new $e(e,Eh)}toString(){return".key"}}const ol=new RS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class en{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??en.RED,this.left=s??Gn.EMPTY_NODE,this.right=a??Gn.EMPTY_NODE}copy(e,t,r,s,a){return new en(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Gn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,en.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,en.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}en.RED=!0;en.BLACK=!1;class zD{copy(e,t,r,s,a){return this}insert(e,t,r){return new en(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gn{constructor(e,t=Gn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,en.BLACK,null,null))}remove(e){return new Gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,en.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new wh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new wh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new wh(this.root_,null,this.comparator_,!0,e)}}Gn.EMPTY_NODE=new zD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(n,e){return oa(n.name,e.name)}function l_(n,e){return oa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bm;function WD(n){bm=n}const AS=function(n){return typeof n=="number"?"number:"+sS(n):"string:"+n},kS=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vi(e,".sv"),"Priority must be a string or number.")}else ne(n===bm||n.isEmpty(),"priority of unexpected type.");ne(n===bm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hw;class Jt{static set __childrenNodeConstructor(e){Hw=e}static get __childrenNodeConstructor(){return Hw}constructor(e,t=Jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return We(e)?this:Ue(e)===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ue(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||no(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sS(this.value_):e+=this.value_,this.lazyHash_=rS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Jt.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Jt.VALUE_TYPE_ORDER.indexOf(t),a=Jt.VALUE_TYPE_ORDER.indexOf(r);return ne(s>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PS,NS;function $D(n){PS=n}function qD(n){NS=n}class HD extends Hd{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?oa(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $e.MIN}maxPost(){return new $e(Qo,new Jt("[PRIORITY-POST]",NS))}makePost(e,t){const r=PS(e);return new $e(t,new Jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const It=new HD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=Math.log(2);class KD{constructor(e){const t=a=>parseInt(Math.log(a)/GD,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ld=function(n,e,t,r){n.sort(e);const s=function(f,g){const v=g-f;let w,T;if(v===0)return null;if(v===1)return w=n[f],T=t?t(w):w,new en(T,w.node,en.BLACK,null,null);{const D=parseInt(v/2,10)+f,z=s(f,D),q=s(D+1,g);return w=n[D],T=t?t(w):w,new en(T,w.node,en.BLACK,z,q)}},a=function(f){let g=null,v=null,w=n.length;const T=function(z,q){const W=w-z,ge=w;w-=z;const fe=s(W+1,ge),ve=n[W],Ie=t?t(ve):ve;D(new en(Ie,ve.node,q,null,fe))},D=function(z){g?(g.left=z,g=z):(v=z,g=z)};for(let z=0;z<f.count;++z){const q=f.nextBitIsOne(),W=Math.pow(2,f.count-(z+1));q?T(W,en.BLACK):(T(W,en.BLACK),T(W,en.RED))}return v},u=new KD(n.length),d=a(u);return new Gn(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp;const Ha={};class Yi{static get Default(){return ne(Ha&&It,"ChildrenNode.ts has not been loaded"),Qp=Qp||new Yi({".priority":Ha},{".priority":It}),Qp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ll(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gn?t:null}hasIndex(e){return vi(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==ol,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator($e.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=ld(r,e.getCompare()):d=Ha;const f=e.toString(),g=Object.assign({},this.indexSet_);g[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new Yi(v,g)}addToIndexes(e,t){const r=jh(this.indexes_,(s,a)=>{const u=ll(this.indexSet_,a);if(ne(u,"Missing index implementation for "+a),s===Ha)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator($e.Wrap);let g=f.getNext();for(;g;)g.name!==e.name&&d.push(g),g=f.getNext();return d.push(e),ld(d,u.getCompare())}else return Ha;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new $e(e.name,d))),f.insert(e,e.node)}});return new Yi(r,this.indexSet_)}removeFromIndexes(e,t){const r=jh(this.indexes_,s=>{if(s===Ha)return s;{const a=t.get(e.name);return a?s.remove(new $e(e.name,a)):s}});return new Yi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;class Ae{static get EMPTY_NODE(){return uu||(uu=new Ae(new Gn(l_),null,Yi.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&kS(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||uu}updatePriority(e){return this.children_.isEmpty()?this:new Ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?uu:t}}getChild(e){const t=Ue(e);return t===null?this:this.getImmediateChild(t).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new $e(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?uu:this.priorityNode_;return new Ae(s,u,a)}}updateChild(e,t){const r=Ue(e);if(r===null)return t;{ne(Ue(e)!==".priority"||no(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ht(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(It,(u,d)=>{t[u]=d.val(e),r++,a&&Ae.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AS(this.getPriority().val())+":"),this.forEachChild(It,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":rS(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new $e(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $e(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $e(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,$e.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,$e.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oc?-1:0}withIndex(e){if(e===ol||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ae(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ol||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(It),s=t.getIterator(It);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ol?null:this.indexMap_.get(e.toString())}}Ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QD extends Ae{constructor(){super(new Gn(l_),Ae.EMPTY_NODE,Yi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ae.EMPTY_NODE}isEmpty(){return!1}}const oc=new QD;Object.defineProperties($e,{MIN:{value:new $e(gl,Ae.EMPTY_NODE)},MAX:{value:new $e(Qo,oc)}});RS.__EMPTY_NODE=Ae.EMPTY_NODE;Jt.__childrenNodeConstructor=Ae;WD(oc);qD(oc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=!0;function Vt(n,e=null){if(n===null)return Ae.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Jt(t,Vt(e))}if(!(n instanceof Array)&&YD){const t=[];let r=!1;if(En(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Vt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new $e(u,f)))}}),t.length===0)return Ae.EMPTY_NODE;const a=ld(t,BD,u=>u.name,l_);if(r){const u=ld(t,It.getCompare());return new Ae(a,Vt(e),new Yi({".priority":u},{".priority":It}))}else return new Ae(a,Vt(e),Yi.Default)}else{let t=Ae.EMPTY_NODE;return En(n,(r,s)=>{if(vi(n,r)&&r.substring(0,1)!=="."){const a=Vt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Vt(e))}}$D(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD extends Hd{constructor(e){super(),this.indexPath_=e,ne(!We(e)&&Ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?oa(e.name,t.name):a}makePost(e,t){const r=Vt(e),s=Ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new $e(t,s)}maxPost(){const e=Ae.EMPTY_NODE.updateChild(this.indexPath_,oc);return new $e(Qo,e)}toString(){return zu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD extends Hd{compare(e,t){const r=e.node.compareTo(t.node);return r===0?oa(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $e.MIN}maxPost(){return $e.MAX}makePost(e,t){const r=Vt(e);return new $e(t,r)}toString(){return".value"}}const ZD=new JD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(n){return{type:"value",snapshotNode:n}}function _l(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Bu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Wu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function eb(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Bu(t,d)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(_l(t,r)):u.trackChildChange(Wu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(It,(s,a)=>{t.hasChild(s)||r.trackChildChange(Bu(s,a))}),t.isLeafNode()||t.forEachChild(It,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Wu(s,a,u))}else r.trackChildChange(_l(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ae.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.indexedFilter_=new u_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$u.getStartPost_(e),this.endPost_=$u.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new $e(t,r))||(r=Ae.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Ae.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Ae.EMPTY_NODE);const a=this;return t.forEachChild(It,(u,d)=>{a.matches(new $e(u,d))||(s=s.updateImmediateChild(u,Ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $u(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new $e(t,r))||(r=Ae.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Ae.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Ae.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const w=this.index_.getCompare();u=(T,D)=>w(D,T)}else u=this.index_.getCompare();const d=e;ne(d.numChildren()===this.limit_,"");const f=new $e(t,r),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const w=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,g,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const D=T==null?1:u(T,f);if(v&&!r.isEmpty()&&D>=0)return a!=null&&a.trackChildChange(Wu(t,r,w)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Bu(t,w));const q=d.updateImmediateChild(t,Ae.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(_l(T.name,T.node)),q.updateImmediateChild(T.name,T.node)):q}}else return r.isEmpty()?e:v&&u(g,f)>=0?(a!=null&&(a.trackChildChange(Bu(g.name,g.node)),a.trackChildChange(_l(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(g.name,Ae.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gl}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new c_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nb(n){return n.loadsAllData()?new u_(n.getIndex()):n.hasLimit()?new tb(n):new $u(n)}function Gw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===It?t="$priority":n.index_===ZD?t="$value":n.index_===ol?t="$key":(ne(n.index_ instanceof XD,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=tn(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=tn(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+tn(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=tn(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+tn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Kw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==It&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends TS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=sc("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=ud.getListenId_(e,r),d={};this.listens_[u]=d;const f=Gw(e._queryParams);this.restRequest_(a+".json",f,(g,v)=>{let w=v;if(g===404&&(w=null,g=null),g===null&&this.onDataUpdate_(a,w,!1,r),ll(this.listens_,u)===d){let T;g?g===401?T="permission_denied":T="rest_error:"+g:T="ok",s(T,null)}})}unlisten(e,t){const r=ud.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Gw(e._queryParams),r=e._path.toString(),s=new Hi;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=Pu(d.responseText)}catch{Kn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Kn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.rootNode_=Ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){return{value:null,children:new Map}}function Al(n,e,t){if(We(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ue(e);n.children.has(r)||n.children.set(r,cd());const s=n.children.get(r);e=ht(e),Al(s,e,t)}}function Om(n,e){if(We(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(It,(r,s)=>{Al(n,new at(r),s)}),Om(n,e)}}else if(n.children.size>0){const t=Ue(e);return e=ht(e),n.children.has(t)&&Om(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Lm(n,e,t){n.value!==null?t(e,n.value):ib(n,(r,s)=>{const a=new at(e.toString()+"/"+r);Lm(s,a,t)})}function ib(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&En(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=10*1e3,ob=30*1e3,ab=300*1e3;class lb{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sb(e);const r=Qw+(ob-Qw)*Math.random();Cu(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;En(e,(s,a)=>{a>0&&vi(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Cu(this.reportStats_.bind(this),Math.floor(Math.random()*2*ab))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wr||(Wr={}));function DS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function h_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function d_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Wr.ACK_USER_WRITE,this.source=DS()}operationForChild(e){if(We(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new at(e));return new hd(nt(),t,this.revert)}}else return ne(Ue(this.path)===e,"operationForChild called for unrelated child."),new hd(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.source=e,this.path=t,this.type=Wr.LISTEN_COMPLETE}operationForChild(e){return We(this.path)?new qu(this.source,nt()):new qu(this.source,ht(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Wr.OVERWRITE}operationForChild(e){return We(this.path)?new Yo(this.source,nt(),this.snap.getImmediateChild(e)):new Yo(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Wr.MERGE}operationForChild(e){if(We(this.path)){const t=this.children.subtree(new at(e));return t.isEmpty()?null:t.value?new Yo(this.source,nt(),t.value):new Hu(this.source,nt(),t)}else return ne(Ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hu(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(We(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ue(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cb(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(eb(u.childName,u.snapshotNode))}),cu(n,s,"child_removed",e,r,t),cu(n,s,"child_added",e,r,t),cu(n,s,"child_moved",a,r,t),cu(n,s,"child_changed",e,r,t),cu(n,s,"value",e,r,t),s}function cu(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>db(n,d,f)),u.forEach(d=>{const f=hb(n,d,a);s.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(f,n.query_))})})}function hb(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function db(n,e,t){if(e.childName==null||t.childName==null)throw El("Should only compare child_ events.");const r=new $e(e.childName,e.snapshotNode),s=new $e(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n,e){return{eventCache:n,serverCache:e}}function Ru(n,e,t,r){return Gd(new Xo(e,t,r),n.serverCache)}function bS(n,e,t,r){return Gd(n.eventCache,new Xo(e,t,r))}function Mm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Jo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yp;const fb=()=>(Yp||(Yp=new Gn(X2)),Yp);class yt{static fromObject(e){let t=new yt(null);return En(e,(r,s)=>{t=t.set(new at(r),s)}),t}constructor(e,t=fb()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(We(e))return null;{const r=Ue(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(ht(e),t);return a!=null?{path:Dt(new at(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(We(e))return this;{const t=Ue(e),r=this.children.get(t);return r!==null?r.subtree(ht(e)):new yt(null)}}set(e,t){if(We(e))return new yt(t,this.children);{const r=Ue(e),a=(this.children.get(r)||new yt(null)).set(ht(e),t),u=this.children.insert(r,a);return new yt(this.value,u)}}remove(e){if(We(e))return this.children.isEmpty()?new yt(null):new yt(null,this.children);{const t=Ue(e),r=this.children.get(t);if(r){const s=r.remove(ht(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new yt(null):new yt(this.value,a)}else return this}}get(e){if(We(e))return this.value;{const t=Ue(e),r=this.children.get(t);return r?r.get(ht(e)):null}}setTree(e,t){if(We(e))return t;{const r=Ue(e),a=(this.children.get(r)||new yt(null)).setTree(ht(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new yt(this.value,u)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(Dt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(We(e))return null;{const a=Ue(e),u=this.children.get(a);return u?u.findOnPath_(ht(e),Dt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,r){if(We(e))return this;{this.value&&r(t,this.value);const s=Ue(e),a=this.children.get(s);return a?a.foreachOnPath_(ht(e),Dt(t,s),r):new yt(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Dt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.writeTree_=e}static empty(){return new Gr(new yt(null))}}function Au(n,e,t){if(We(e))return new Gr(new yt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Hn(s,e);return a=a.updateChild(u,t),new Gr(n.writeTree_.set(s,a))}else{const s=new yt(t),a=n.writeTree_.setTree(e,s);return new Gr(a)}}}function Yw(n,e,t){let r=n;return En(t,(s,a)=>{r=Au(r,Dt(e,s),a)}),r}function Xw(n,e){if(We(e))return Gr.empty();{const t=n.writeTree_.setTree(e,new yt(null));return new Gr(t)}}function Vm(n,e){return aa(n,e)!=null}function aa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Hn(t.path,e)):null}function Jw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(It,(r,s)=>{e.push(new $e(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new $e(r,s.value))}),e}function Hs(n,e){if(We(e))return n;{const t=aa(n,e);return t!=null?new Gr(new yt(t)):new Gr(n.writeTree_.subtree(e))}}function Fm(n){return n.writeTree_.isEmpty()}function yl(n,e){return OS(nt(),n.writeTree_,e)}function OS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=OS(Dt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Dt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n,e){return FS(e,n)}function pb(n,e,t,r,s){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Au(n.visibleWrites,e,t)),n.lastWriteId=r}function mb(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function gb(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&_b(d,r.path)?s=!1:vr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return yb(n),!0;if(r.snap)n.visibleWrites=Xw(n.visibleWrites,r.path);else{const d=r.children;En(d,f=>{n.visibleWrites=Xw(n.visibleWrites,Dt(r.path,f))})}return!0}else return!1}function _b(n,e){if(n.snap)return vr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&vr(Dt(n.path,t),e))return!0;return!1}function yb(n){n.visibleWrites=LS(n.allWrites,vb,nt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function vb(n){return n.visible}function LS(n,e,t){let r=Gr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)vr(t,u)?(d=Hn(t,u),r=Au(r,d,a.snap)):vr(u,t)&&(d=Hn(u,t),r=Au(r,nt(),a.snap.getChild(d)));else if(a.children){if(vr(t,u))d=Hn(t,u),r=Yw(r,d,a.children);else if(vr(u,t))if(d=Hn(u,t),We(d))r=Yw(r,nt(),a.children);else{const f=ll(a.children,Ue(d));if(f){const g=f.getChild(ht(d));r=Au(r,nt(),g)}}}else throw El("WriteRecord should have .snap or .children")}}return r}function MS(n,e,t,r,s){if(!r&&!s){const a=aa(n.visibleWrites,e);if(a!=null)return a;{const u=Hs(n.visibleWrites,e);if(Fm(u))return t;if(t==null&&!Vm(u,nt()))return null;{const d=t||Ae.EMPTY_NODE;return yl(u,d)}}}else{const a=Hs(n.visibleWrites,e);if(!s&&Fm(a))return t;if(!s&&t==null&&!Vm(a,nt()))return null;{const u=function(g){return(g.visible||s)&&(!r||!~r.indexOf(g.writeId))&&(vr(g.path,e)||vr(e,g.path))},d=LS(n.allWrites,u,e),f=t||Ae.EMPTY_NODE;return yl(d,f)}}}function Eb(n,e,t){let r=Ae.EMPTY_NODE;const s=aa(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(It,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Hs(n.visibleWrites,e);return t.forEachChild(It,(u,d)=>{const f=yl(Hs(a,new at(u)),d);r=r.updateImmediateChild(u,f)}),Jw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Hs(n.visibleWrites,e);return Jw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function wb(n,e,t,r,s){ne(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=Dt(e,t);if(Vm(n.visibleWrites,a))return null;{const u=Hs(n.visibleWrites,a);return Fm(u)?s.getChild(t):yl(u,s.getChild(t))}}function Tb(n,e,t,r){const s=Dt(e,t),a=aa(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Hs(n.visibleWrites,s);return yl(u,r.getNode().getImmediateChild(t))}else return null}function Ib(n,e){return aa(n.visibleWrites,e)}function Sb(n,e,t,r,s,a,u){let d;const f=Hs(n.visibleWrites,e),g=aa(f,nt());if(g!=null)d=g;else if(t!=null)d=yl(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],w=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let D=T.getNext();for(;D&&v.length<s;)w(D,r)!==0&&v.push(D),D=T.getNext();return v}else return[]}function Cb(){return{visibleWrites:Gr.empty(),allWrites:[],lastWriteId:-1}}function dd(n,e,t,r){return MS(n.writeTree,n.treePath,e,t,r)}function p_(n,e){return Eb(n.writeTree,n.treePath,e)}function Zw(n,e,t,r){return wb(n.writeTree,n.treePath,e,t,r)}function fd(n,e){return Ib(n.writeTree,Dt(n.treePath,e))}function Rb(n,e,t,r,s,a){return Sb(n.writeTree,n.treePath,e,t,r,s,a)}function m_(n,e,t){return Tb(n.writeTree,n.treePath,e,t)}function VS(n,e){return FS(Dt(n.treePath,e),n.writeTree)}function FS(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Wu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Bu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,_l(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Wu(r,e.snapshotNode,s.oldSnap));else throw El("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const US=new kb;class g_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return m_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jo(this.viewCache_),a=Rb(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n){return{filter:n}}function Nb(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xb(n,e,t,r,s){const a=new Ab;let u,d;if(t.type===Wr.OVERWRITE){const g=t;g.source.fromUser?u=Um(n,e,g.path,g.snap,r,s,a):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!We(g.path),u=pd(n,e,g.path,g.snap,r,s,d,a))}else if(t.type===Wr.MERGE){const g=t;g.source.fromUser?u=bb(n,e,g.path,g.children,r,s,a):(ne(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),u=jm(n,e,g.path,g.children,r,s,d,a))}else if(t.type===Wr.ACK_USER_WRITE){const g=t;g.revert?u=Mb(n,e,g.path,r,s,a):u=Ob(n,e,g.path,g.affectedTree,r,s,a)}else if(t.type===Wr.LISTEN_COMPLETE)u=Lb(n,e,t.path,r,a);else throw El("Unknown operation type: "+t.type);const f=a.getChanges();return Db(e,u,f),{viewCache:u,changes:f}}function Db(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Mm(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(xS(Mm(e)))}}function jS(n,e,t,r,s,a){const u=e.eventCache;if(fd(r,t)!=null)return e;{let d,f;if(We(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Jo(e),v=g instanceof Ae?g:Ae.EMPTY_NODE,w=p_(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),w,a)}else{const g=dd(r,Jo(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=Ue(t);if(g===".priority"){ne(no(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const w=Zw(r,t,v,f);w!=null?d=n.filter.updatePriority(v,w):d=u.getNode()}else{const v=ht(t);let w;if(u.isCompleteForChild(g)){f=e.serverCache.getNode();const T=Zw(r,t,u.getNode(),f);T!=null?w=u.getNode().getImmediateChild(g).updateChild(v,T):w=u.getNode().getImmediateChild(g)}else w=m_(r,g,e.serverCache);w!=null?d=n.filter.updateChild(u.getNode(),g,w,v,s,a):d=u.getNode()}}return Ru(e,d,u.isFullyInitialized()||We(t),n.filter.filtersNodes())}}function pd(n,e,t,r,s,a,u,d){const f=e.serverCache;let g;const v=u?n.filter:n.filter.getIndexedFilter();if(We(t))g=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const D=f.getNode().updateChild(t,r);g=v.updateFullNode(f.getNode(),D,null)}else{const D=Ue(t);if(!f.isCompleteForPath(t)&&no(t)>1)return e;const z=ht(t),W=f.getNode().getImmediateChild(D).updateChild(z,r);D===".priority"?g=v.updatePriority(f.getNode(),W):g=v.updateChild(f.getNode(),D,W,z,US,null)}const w=bS(e,g,f.isFullyInitialized()||We(t),v.filtersNodes()),T=new g_(s,w,a);return jS(n,w,t,s,T,d)}function Um(n,e,t,r,s,a,u){const d=e.eventCache;let f,g;const v=new g_(s,e,a);if(We(t))g=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Ru(e,g,!0,n.filter.filtersNodes());else{const w=Ue(t);if(w===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),r),f=Ru(e,g,d.isFullyInitialized(),d.isFiltered());else{const T=ht(t),D=d.getNode().getImmediateChild(w);let z;if(We(T))z=r;else{const q=v.getCompleteChild(w);q!=null?s_(T)===".priority"&&q.getChild(SS(T)).isEmpty()?z=q:z=q.updateChild(T,r):z=Ae.EMPTY_NODE}if(D.equals(z))f=e;else{const q=n.filter.updateChild(d.getNode(),w,z,T,v,u);f=Ru(e,q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function e0(n,e){return n.eventCache.isCompleteForChild(e)}function bb(n,e,t,r,s,a,u){let d=e;return r.foreach((f,g)=>{const v=Dt(t,f);e0(e,Ue(v))&&(d=Um(n,d,v,g,s,a,u))}),r.foreach((f,g)=>{const v=Dt(t,f);e0(e,Ue(v))||(d=Um(n,d,v,g,s,a,u))}),d}function t0(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function jm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,g;We(t)?g=r:g=new yt(null).setTree(t,r);const v=e.serverCache.getNode();return g.children.inorderTraversal((w,T)=>{if(v.hasChild(w)){const D=e.serverCache.getNode().getImmediateChild(w),z=t0(n,D,T);f=pd(n,f,new at(w),z,s,a,u,d)}}),g.children.inorderTraversal((w,T)=>{const D=!e.serverCache.isCompleteForChild(w)&&T.value===null;if(!v.hasChild(w)&&!D){const z=e.serverCache.getNode().getImmediateChild(w),q=t0(n,z,T);f=pd(n,f,new at(w),q,s,a,u,d)}}),f}function Ob(n,e,t,r,s,a,u){if(fd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(We(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return pd(n,e,t,f.getNode().getChild(t),s,a,d,u);if(We(t)){let g=new yt(null);return f.getNode().forEachChild(ol,(v,w)=>{g=g.set(new at(v),w)}),jm(n,e,t,g,s,a,d,u)}else return e}else{let g=new yt(null);return r.foreach((v,w)=>{const T=Dt(t,v);f.isCompleteForPath(T)&&(g=g.set(v,f.getNode().getChild(T)))}),jm(n,e,t,g,s,a,d,u)}}function Lb(n,e,t,r,s){const a=e.serverCache,u=bS(e,a.getNode(),a.isFullyInitialized()||We(t),a.isFiltered());return jS(n,u,t,r,US,s)}function Mb(n,e,t,r,s,a){let u;if(fd(r,t)!=null)return e;{const d=new g_(r,e,s),f=e.eventCache.getNode();let g;if(We(t)||Ue(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=dd(r,Jo(e));else{const w=e.serverCache.getNode();ne(w instanceof Ae,"serverChildren would be complete if leaf node"),v=p_(r,w)}v=v,g=n.filter.updateFullNode(f,v,a)}else{const v=Ue(t);let w=m_(r,v,e.serverCache);w==null&&e.serverCache.isCompleteForChild(v)&&(w=f.getImmediateChild(v)),w!=null?g=n.filter.updateChild(f,v,w,ht(t),d,a):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(f,v,Ae.EMPTY_NODE,ht(t),d,a):g=f,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=dd(r,Jo(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,a)))}return u=e.serverCache.isFullyInitialized()||fd(r,nt())!=null,Ru(e,g,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new u_(r.getIndex()),a=nb(r);this.processor_=Pb(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Ae.EMPTY_NODE,u.getNode(),null),g=a.updateFullNode(Ae.EMPTY_NODE,d.getNode(),null),v=new Xo(f,u.isFullyInitialized(),s.filtersNodes()),w=new Xo(g,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=Gd(w,v),this.eventGenerator_=new ub(this.query_)}get query(){return this.query_}}function Fb(n){return n.viewCache_.serverCache.getNode()}function Ub(n,e){const t=Jo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!We(e)&&!t.getImmediateChild(Ue(e)).isEmpty())?t.getChild(e):null}function n0(n){return n.eventRegistrations_.length===0}function jb(n,e){n.eventRegistrations_.push(e)}function r0(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function i0(n,e,t,r){e.type===Wr.MERGE&&e.source.queryId!==null&&(ne(Jo(n.viewCache_),"We should always have a full cache before handling merges"),ne(Mm(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=xb(n.processor_,s,e,t,r);return Nb(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,zS(n,a.changes,a.viewCache.eventCache.getNode(),null)}function zb(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(It,(a,u)=>{r.push(_l(a,u))}),t.isFullyInitialized()&&r.push(xS(t.getNode())),zS(n,r,t.getNode(),e)}function zS(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return cb(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;class Bb{constructor(){this.views=new Map}}function Wb(n){ne(!md,"__referenceConstructor has already been defined"),md=n}function $b(){return ne(md,"Reference.ts has not been loaded"),md}function qb(n){return n.views.size===0}function __(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ne(a!=null,"SyncTree gave us an op for an invalid query."),i0(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(i0(u,e,t,r));return a}}function Hb(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=dd(t,s?r:null),f=!1;d?f=!0:r instanceof Ae?(d=p_(t,r),f=!1):(d=Ae.EMPTY_NODE,f=!1);const g=Gd(new Xo(d,f,!1),new Xo(r,s,!1));return new Vb(e,g)}return u}function Gb(n,e,t,r,s,a){const u=Hb(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),jb(u,t),zb(u,t)}function Kb(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=ro(n);if(s==="default")for(const[f,g]of n.views.entries())u=u.concat(r0(g,t,r)),n0(g)&&(n.views.delete(f),g.query._queryParams.loadsAllData()||a.push(g.query));else{const f=n.views.get(s);f&&(u=u.concat(r0(f,t,r)),n0(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!ro(n)&&a.push(new($b())(e._repo,e._path)),{removed:a,events:u}}function BS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function al(n,e){let t=null;for(const r of n.views.values())t=t||Ub(r,e);return t}function WS(n,e){if(e._queryParams.loadsAllData())return Kd(n);{const r=e._queryIdentifier;return n.views.get(r)}}function $S(n,e){return WS(n,e)!=null}function ro(n){return Kd(n)!=null}function Kd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;function Qb(n){ne(!gd,"__referenceConstructor has already been defined"),gd=n}function Yb(){return ne(gd,"Reference.ts has not been loaded"),gd}let Xb=1;class s0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new yt(null),this.pendingWriteTree_=Cb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qS(n,e,t,r,s){return pb(n.pendingWriteTree_,e,t,r,s),s?ac(n,new Yo(DS(),e,t)):[]}function Uo(n,e,t=!1){const r=mb(n.pendingWriteTree_,e);if(gb(n.pendingWriteTree_,e)){let a=new yt(null);return r.snap!=null?a=a.set(nt(),!0):En(r.children,u=>{a=a.set(new at(u),!0)}),ac(n,new hd(r.path,a,t))}else return[]}function Qd(n,e,t){return ac(n,new Yo(h_(),e,t))}function Jb(n,e,t){const r=yt.fromObject(t);return ac(n,new Hu(h_(),e,r))}function Zb(n,e){return ac(n,new qu(h_(),e))}function eO(n,e,t){const r=v_(n,t);if(r){const s=E_(r),a=s.path,u=s.queryId,d=Hn(a,e),f=new qu(d_(u),d);return w_(n,a,f)}else return[]}function zm(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||$S(u,e))){const f=Kb(u,e,t,r);qb(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const g=f.removed;if(d=f.events,!s){const v=g.findIndex(T=>T._queryParams.loadsAllData())!==-1,w=n.syncPointTree_.findOnPath(a,(T,D)=>ro(D));if(v&&!w){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const D=rO(T);for(let z=0;z<D.length;++z){const q=D[z],W=q.query,ge=KS(n,q);n.listenProvider_.startListening(ku(W),_d(n,W),ge.hashFn,ge.onComplete)}}}!w&&g.length>0&&!r&&(v?n.listenProvider_.stopListening(ku(e),null):g.forEach(T=>{const D=n.queryToTagMap.get(Yd(T));n.listenProvider_.stopListening(ku(T),D)}))}iO(n,g)}return d}function tO(n,e,t,r){const s=v_(n,r);if(s!=null){const a=E_(s),u=a.path,d=a.queryId,f=Hn(u,e),g=new Yo(d_(d),f,t);return w_(n,u,g)}else return[]}function nO(n,e,t,r){const s=v_(n,r);if(s){const a=E_(s),u=a.path,d=a.queryId,f=Hn(u,e),g=yt.fromObject(t),v=new Hu(d_(d),f,g);return w_(n,u,v)}else return[]}function o0(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,D)=>{const z=Hn(T,s);a=a||al(D,z),u=u||ro(D)});let d=n.syncPointTree_.get(s);d?(u=u||ro(d),a=a||al(d,nt())):(d=new Bb,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Ae.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((D,z)=>{const q=al(z,nt());q&&(a=a.updateImmediateChild(D,q))}));const g=$S(d,e);if(!g&&!e._queryParams.loadsAllData()){const T=Yd(e);ne(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const D=sO();n.queryToTagMap.set(T,D),n.tagToQueryMap.set(D,T)}const v=f_(n.pendingWriteTree_,s);let w=Gb(d,e,t,v,a,f);if(!g&&!u&&!r){const T=WS(d,e);w=w.concat(oO(n,e,T))}return w}function y_(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Hn(u,e),g=al(d,f);if(g)return g});return MS(s,e,a,t,!0)}function ac(n,e){return HS(e,n.syncPointTree_,null,f_(n.pendingWriteTree_,nt()))}function HS(n,e,t,r){if(We(n.path))return GS(n,e,t,r);{const s=e.get(nt());t==null&&s!=null&&(t=al(s,nt()));let a=[];const u=Ue(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const g=t?t.getImmediateChild(u):null,v=VS(r,u);a=a.concat(HS(d,f,g,v))}return s&&(a=a.concat(__(s,n,r,t))),a}}function GS(n,e,t,r){const s=e.get(nt());t==null&&s!=null&&(t=al(s,nt()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,g=VS(r,u),v=n.operationForChild(u);v&&(a=a.concat(GS(v,d,f,g)))}),s&&(a=a.concat(__(s,n,r,t))),a}function KS(n,e){const t=e.query,r=_d(n,t);return{hashFn:()=>(Fb(e)||Ae.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?eO(n,t._path,r):Zb(n,t._path);{const a=eD(s,t);return zm(n,t,null,a)}}}}function _d(n,e){const t=Yd(e);return n.queryToTagMap.get(t)}function Yd(n){return n._path.toString()+"$"+n._queryIdentifier}function v_(n,e){return n.tagToQueryMap.get(e)}function E_(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new at(n.substr(0,e))}}function w_(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const s=f_(n.pendingWriteTree_,e);return __(r,t,s,null)}function rO(n){return n.fold((e,t,r)=>{if(t&&ro(t))return[Kd(t)];{let s=[];return t&&(s=BS(t)),En(r,(a,u)=>{s=s.concat(u)}),s}})}function ku(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Yb())(n._repo,n._path):n}function iO(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=Yd(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function sO(){return Xb++}function oO(n,e,t){const r=e._path,s=_d(n,e),a=KS(n,t),u=n.listenProvider_.startListening(ku(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ne(!ro(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((g,v,w)=>{if(!We(g)&&v&&ro(v))return[Kd(v).query];{let T=[];return v&&(T=T.concat(BS(v).map(D=>D.query))),En(w,(D,z)=>{T=T.concat(z)}),T}});for(let g=0;g<f.length;++g){const v=f[g];n.listenProvider_.stopListening(ku(v),_d(n,v))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new T_(t)}node(){return this.node_}}class I_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Dt(this.path_,e);return new I_(this.syncTree_,t)}node(){return y_(this.syncTree_,this.path_)}}const aO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},a0=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return lO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return uO(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},lO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},uO=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const s=e.node();if(ne(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},cO=function(n,e,t,r){return S_(e,new I_(t,n),r)},QS=function(n,e,t){return S_(n,new T_(e),t)};function S_(n,e,t){const r=n.getPriority().val(),s=a0(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=a0(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Jt(d,Vt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Jt(s))),u.forEachChild(It,(d,f)=>{const g=S_(f,e.getImmediateChild(d),t);g!==f&&(a=a.updateImmediateChild(d,g))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function R_(n,e){let t=e instanceof at?e:new at(e),r=n,s=Ue(t);for(;s!==null;){const a=ll(r.node.children,s)||{children:{},childCount:0};r=new C_(s,r,a),t=ht(t),s=Ue(t)}return r}function kl(n){return n.node.value}function YS(n,e){n.node.value=e,Bm(n)}function XS(n){return n.node.childCount>0}function hO(n){return kl(n)===void 0&&!XS(n)}function Xd(n,e){En(n.node.children,(t,r)=>{e(new C_(t,n,r))})}function JS(n,e,t,r){t&&e(n),Xd(n,s=>{JS(s,e,!0)})}function dO(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lc(n){return new at(n.parent===null?n.name:lc(n.parent)+"/"+n.name)}function Bm(n){n.parent!==null&&fO(n.parent,n.name,n)}function fO(n,e,t){const r=hO(t),s=vi(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Bm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Bm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=/[\[\].#$\/\u0000-\u001F\u007F]/,mO=/[\[\].#$\u0000-\u001F\u007F]/,Xp=10*1024*1024,A_=function(n){return typeof n=="string"&&n.length!==0&&!pO.test(n)},ZS=function(n){return typeof n=="string"&&n.length!==0&&!mO.test(n)},gO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ZS(n)},eC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!qd(n)||n&&typeof n=="object"&&vi(n,".sv")},Wm=function(n,e,t,r){Jd(ul(n,"value"),e,t)},Jd=function(n,e,t){const r=t instanceof at?new OD(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Lo(r));if(typeof e=="function")throw new Error(n+"contains a function "+Lo(r)+" with contents = "+e.toString());if(qd(e))throw new Error(n+"contains "+e.toString()+" "+Lo(r));if(typeof e=="string"&&e.length>Xp/3&&wd(e)>Xp)throw new Error(n+"contains a string greater than "+Xp+" utf8 bytes "+Lo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(En(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!A_(u)))throw new Error(n+" contains an invalid key ("+u+") "+Lo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LD(r,u),Jd(n,d,r),MD(r)}),s&&a)throw new Error(n+' contains ".value" child '+Lo(r)+" in addition to actual children.")}},_O=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=zu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!A_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bD);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&vr(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},yO=function(n,e,t,r){const s=ul(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];En(e,(u,d)=>{const f=new at(u);if(Jd(s,d,Dt(t,f)),s_(f)===".priority"&&!eC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),_O(s,a)},vO=function(n,e,t){if(qd(e))throw new Error(ul(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!eC(e))throw new Error(ul(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},tC=function(n,e,t,r){if(!ZS(t))throw new Error(ul(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},EO=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tC(n,e,t)},Za=function(n,e){if(Ue(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},wO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!A_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!gO(t))throw new Error(ul(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function k_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!o_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function nC(n,e,t){k_(n,t),rC(n,r=>o_(r,e))}function os(n,e,t){k_(n,t),rC(n,r=>vr(r,e)||vr(e,r))}function rC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(IO(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function IO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Su&&ln("event: "+t.toString()),Rl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="repo_interrupt",CO=25;class RO{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cd(),this.transactionQueueTree_=new C_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AO(n,e,t){if(n.stats_=r_(n.repoInfo_),n.forceRestClient_||iD())n.server_=new ud(n.repoInfo_,(r,s,a,u)=>{l0(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>u0(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tn(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Zi(n.repoInfo_,e,(r,s,a,u)=>{l0(n,r,s,a,u)},r=>{u0(n,r)},r=>{PO(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=uD(n.repoInfo_,()=>new lb(n.stats_,n.server_)),n.infoData_=new rb,n.infoSyncTree_=new s0({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=Qd(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),N_(n,"connected",!1),n.serverSyncTree_=new s0({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const g=u(d,f);os(n.eventQueue_,r._path,g)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function kO(n){const t=n.infoData_.getNode(new at(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function P_(n){return aO({timestamp:kO(n)})}function l0(n,e,t,r,s){n.dataUpdateCount++;const a=new at(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=jh(t,g=>Vt(g));u=nO(n.serverSyncTree_,a,f,s)}else{const f=Vt(t);u=tO(n.serverSyncTree_,a,f,s)}else if(r){const f=jh(t,g=>Vt(g));u=Jb(n.serverSyncTree_,a,f)}else{const f=Vt(t);u=Qd(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=Zd(n,a)),os(n.eventQueue_,d,u)}function u0(n,e){N_(n,"connected",e),e===!1&&xO(n)}function PO(n,e){En(e,(t,r)=>{N_(n,t,r)})}function N_(n,e,t){const r=new at("/.info/"+e),s=Vt(t);n.infoData_.updateSnapshot(r,s);const a=Qd(n.infoSyncTree_,r,s);os(n.eventQueue_,r,a)}function iC(n){return n.nextWriteId_++}function NO(n,e,t,r,s){x_(n,"set",{path:e.toString(),value:t,priority:r});const a=P_(n),u=Vt(t,r),d=y_(n.serverSyncTree_,e),f=QS(u,d,a),g=iC(n),v=qS(n.serverSyncTree_,e,f,g,!0);k_(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,D)=>{const z=T==="ok";z||Kn("set at "+e+" failed: "+T);const q=Uo(n.serverSyncTree_,g,!z);os(n.eventQueue_,e,q),vl(n,s,T,D)});const w=uC(n,e);Zd(n,w),os(n.eventQueue_,w,[])}function xO(n){x_(n,"onDisconnectEvents");const e=P_(n),t=cd();Lm(n.onDisconnect_,nt(),(s,a)=>{const u=cO(s,a,n.serverSyncTree_,e);Al(t,s,u)});let r=[];Lm(t,nt(),(s,a)=>{r=r.concat(Qd(n.serverSyncTree_,s,a));const u=uC(n,s);Zd(n,u)}),n.onDisconnect_=cd(),os(n.eventQueue_,nt(),r)}function DO(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Om(n.onDisconnect_,e),vl(n,t,r,s)})}function c0(n,e,t,r){const s=Vt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&Al(n.onDisconnect_,e,s),vl(n,r,a,u)})}function bO(n,e,t,r,s){const a=Vt(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&Al(n.onDisconnect_,e,a),vl(n,s,u,d)})}function OO(n,e,t,r){if(Uh(t)){ln("onDisconnect().update() called with empty data.  Don't do anything."),vl(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&En(t,(u,d)=>{const f=Vt(d);Al(n.onDisconnect_,Dt(e,u),f)}),vl(n,r,s,a)})}function LO(n,e,t){let r;Ue(e._path)===".info"?r=o0(n.infoSyncTree_,e,t):r=o0(n.serverSyncTree_,e,t),nC(n.eventQueue_,e._path,r)}function MO(n,e,t){let r;Ue(e._path)===".info"?r=zm(n.infoSyncTree_,e,t):r=zm(n.serverSyncTree_,e,t),nC(n.eventQueue_,e._path,r)}function VO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(SO)}function x_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ln(t,...e)}function vl(n,e,t,r){e&&Rl(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function sC(n,e,t){return y_(n.serverSyncTree_,e,t)||Ae.EMPTY_NODE}function D_(n,e=n.transactionQueueTree_){if(e||ef(n,e),kl(e)){const t=aC(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&FO(n,lc(e),t)}else XS(e)&&Xd(e,t=>{D_(n,t)})}function FO(n,e,t){const r=t.map(g=>g.currentWriteId),s=sC(n,e,r);let a=s;const u=s.hash();for(let g=0;g<t.length;g++){const v=t[g];ne(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const w=Hn(e,v.path);a=a.updateChild(w,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,g=>{x_(n,"transaction put response",{path:f.toString(),status:g});let v=[];if(g==="ok"){const w=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(Uo(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&w.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();ef(n,R_(n.transactionQueueTree_,e)),D_(n,n.transactionQueueTree_),os(n.eventQueue_,e,v);for(let T=0;T<w.length;T++)Rl(w[T])}else{if(g==="datastale")for(let w=0;w<t.length;w++)t[w].status===3?t[w].status=4:t[w].status=0;else{Kn("transaction at "+f.toString()+" failed: "+g);for(let w=0;w<t.length;w++)t[w].status=4,t[w].abortReason=g}Zd(n,e)}},u)}function Zd(n,e){const t=oC(n,e),r=lc(t),s=aC(n,t);return UO(n,s,r),r}function UO(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],g=Hn(t,f.path);let v=!1,w;if(ne(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,w=f.abortReason,s=s.concat(Uo(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=CO)v=!0,w="maxretry",s=s.concat(Uo(n.serverSyncTree_,f.currentWriteId,!0));else{const T=sC(n,f.path,u);f.currentInputSnapshot=T;const D=e[d].update(T.val());if(D!==void 0){Jd("transaction failed: Data returned ",D,f.path);let z=Vt(D);typeof D=="object"&&D!=null&&vi(D,".priority")||(z=z.updatePriority(T.getPriority()));const W=f.currentWriteId,ge=P_(n),fe=QS(z,T,ge);f.currentOutputSnapshotRaw=z,f.currentOutputSnapshotResolved=fe,f.currentWriteId=iC(n),u.splice(u.indexOf(W),1),s=s.concat(qS(n.serverSyncTree_,f.path,fe,f.currentWriteId,f.applyLocally)),s=s.concat(Uo(n.serverSyncTree_,W,!0))}else v=!0,w="nodata",s=s.concat(Uo(n.serverSyncTree_,f.currentWriteId,!0))}os(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,(function(T){setTimeout(T,Math.floor(0))})(e[d].unwatcher),e[d].onComplete&&(w==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(w),!1,null))))}ef(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Rl(r[d]);D_(n,n.transactionQueueTree_)}function oC(n,e){let t,r=n.transactionQueueTree_;for(t=Ue(e);t!==null&&kl(r)===void 0;)r=R_(r,t),e=ht(e),t=Ue(e);return r}function aC(n,e){const t=[];return lC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function lC(n,e,t){const r=kl(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Xd(e,s=>{lC(n,s,t)})}function ef(n,e){const t=kl(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,YS(e,t.length>0?t:void 0)}Xd(e,r=>{ef(n,r)})}function uC(n,e){const t=lc(oC(n,e)),r=R_(n.transactionQueueTree_,e);return dO(r,s=>{Jp(n,s)}),Jp(n,r),JS(r,s=>{Jp(n,s)}),t}function Jp(n,e){const t=kl(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ne(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ne(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Uo(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?YS(e,void 0):t.length=a+1,os(n.eventQueue_,lc(e),s);for(let u=0;u<r.length;u++)Rl(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function zO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Kn(`Invalid query segment '${t}' in query '${n}'`)}return e}const h0=function(n,e){const t=BO(n),r=t.namespace;t.domain==="firebase.com"&&ss(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&ss("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Q2();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new mS(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new at(t.pathString)}},BO=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let w=n.indexOf("?");w===-1&&(w=n.length),e=n.substring(0,Math.min(v,w)),v<w&&(s=jO(n.substring(v,w)));const T=zO(n.substring(Math.min(n.length,w)));g=e.indexOf(":"),g>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const z=e.indexOf(".");r=e.substring(0,z).toLowerCase(),t=e.substring(z+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tn(this.snapshot.exportVal())}}class $O{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class HO{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Hi;return DO(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Za("OnDisconnect.remove",this._path);const e=new Hi;return c0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Za("OnDisconnect.set",this._path),Wm("OnDisconnect.set",e,this._path);const t=new Hi;return c0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Za("OnDisconnect.setWithPriority",this._path),Wm("OnDisconnect.setWithPriority",e,this._path),vO("OnDisconnect.setWithPriority",t);const r=new Hi;return bO(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){Za("OnDisconnect.update",this._path),yO("OnDisconnect.update",e,this._path);const t=new Hi;return OO(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return We(this._path)?null:s_(this._path)}get ref(){return new oo(this._repo,this._path)}get _queryIdentifier(){const e=Kw(this._queryParams),t=t_(e);return t==="{}"?"default":t}get _queryObject(){return Kw(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof b_))return!1;const t=this._repo===e._repo,r=o_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+DD(this._path)}}class oo extends b_{constructor(e,t){super(e,t,new c_,!1)}get parent(){const e=SS(this._path);return e===null?null:new oo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yd{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new at(e),r=$m(this.ref,e);return new yd(this._node.getChild(t),r,It)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new yd(s,$m(this.ref,r),It)))}hasChild(e){const t=new at(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function d0(n,e){return n=st(n),n._checkNotDeleted("ref"),e!==void 0?$m(n._root,e):n._root}function $m(n,e){return n=st(n),Ue(n._path)===null?EO("child","path",e):tC("child","path",e),new oo(n._repo,Dt(n._path,e))}function GO(n){return n=st(n),new HO(n._repo,n._path)}function KO(n){return Za("remove",n._path),cC(n,null)}function cC(n,e){n=st(n),Za("set",n._path),Wm("set",e,n._path);const t=new Hi;return NO(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class O_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new WO("value",this,new yd(e.snapshotNode,new oo(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $O(this,e,t):null}matches(e){return e instanceof O_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function QO(n,e,t,r,s){const a=new qO(t,void 0),u=new O_(a);return LO(n._repo,n,u),()=>MO(n._repo,n,u)}function YO(n,e,t,r){return QO(n,"value",e)}Wb(oo);Qb(oo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="FIREBASE_DATABASE_EMULATOR_HOST",qm={};let JO=!1;function ZO(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=as(a);n.repoInfo_=new mS(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function eL(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||ss("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=h0(a,s),d=u.repoInfo,f;typeof process<"u"&&Nw&&(f=Nw[XO]),f?(a=`http://${f}?ns=${d.namespace}`,u=h0(a,s),d=u.repoInfo):u.repoInfo.secure;const g=new oD(n.name,n.options,e);wO("Invalid Firebase Database URL",u),We(u.path)||ss("Database URL must point to the root of a Firebase Database (not including a child path).");const v=nL(d,n,g,new sD(n,t));return new rL(v,n)}function tL(n,e){const t=qm[e];(!t||t[n.key]!==n)&&ss(`Database ${e}(${n.repoInfo_}) has already been deleted.`),VO(n),delete t[n.key]}function nL(n,e,t,r){let s=qm[e.name];s||(s={},qm[e.name]=s);let a=s[n.toURLString()];return a&&ss("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new RO(n,JO,t,r),s[n.toURLString()]=a,a}class rL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new oo(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ss("Cannot call "+e+" on a deleted database.")}}function iL(n=Zm(),e){const t=Ku(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=L0("database");r&&sL(t,...r)}return t}function sL(n,e,t,r={}){n=st(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Gs(r,a.repoInfo_.emulatorOptions))return;ss("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&ss('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Lh(Lh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:F1(r.mockUserToken,n.app.options.projectId);u=new Lh(d)}as(e)&&(Ed(e),Ym("Database",!0)),ZO(a,s,r,u)}/**
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
 */function oL(n){W2(Zo),Ks(new es("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return eL(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Er(xw,Dw,n),Er(xw,Dw,"esm2017")}Zi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Zi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};oL();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hC=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=oe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:u,...d},f)=>oe.createElement("svg",{ref:f,...lL,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:hC("lucide",s),...d},[...u.map(([g,v])=>oe.createElement(g,v)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(n,e)=>{const t=oe.forwardRef(({className:r,...s},a)=>oe.createElement(uL,{ref:a,iconNode:e,className:hC(`lucide-${aL(n)}`,r),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=ft("BellOff",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=ft("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ft("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=ft("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=ft("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=ft("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=ft("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=ft("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=ft("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ft("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ft("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=ft("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=ft("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=ft("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ft("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=ft("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=ft("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=ft("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=ft("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=ft("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=ft("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SL=ft("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ft("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=ft("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var RL="firebase",AL="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er(RL,AL,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Nn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||r.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s==null||s.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="us-central1";class PL{constructor(e,t,r,s,a=Hm,u=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=u,this.emulatorOrigin=null,this.contextProvider=new kL(e,t,r,s),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(a);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=Hm}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function NL(n,e,t){const r=as(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Ed(n.emulatorOrigin),Ym("Functions",!0))}const w0="@firebase/functions",T0="0.12.9";/**
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
 */const xL="auth-internal",DL="app-check-internal",bL="messaging-internal";function OL(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(xL),u=t.getProvider(bL),d=t.getProvider(DL);return new PL(s,a,u,d,r)};Ks(new es(dC,e,"PUBLIC").setMultipleInstances(!0)),Er(w0,T0,n),Er(w0,T0,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(n=Zm(),e=Hm){const r=Ku(st(n),dC).getImmediate({identifier:e}),s=L0("functions");return s&&ML(r,...s),r}function ML(n,e,t){NL(st(n),e,t)}OL();const VL={apiKey:"AIzaSyB22Y06cUUhfSweTGIhHaziHCJTytUkqLI",authDomain:"quadchat-cf697.firebaseapp.com",projectId:"quadchat-cf697",storageBucket:"quadchat-cf697.firebasestorage.app",messagingSenderId:"738776494798",appId:"1:738776494798:web:58454b37922a44fa98969f"},tf=B0(VL),$i=DP(tf),js=k2(tf,{experimentalForceLongPolling:!0}),I0=iL(tf);LL(tf,"us-central1");async function tm(n){const e=new FormData;e.append("file",n),e.append("upload_preset","ml_default"),e.append("cloud_name","dp7pd2uin");const t=await fetch("https://api.cloudinary.com/v1_1/dp7pd2uin/auto/upload",{method:"POST",body:e});if(!t.ok){const s=await t.text();throw new Error(`Upload failed (${t.status}): ${s}`)}return(await t.json()).secure_url}const Ga=BI(js,"messages"),FL=BI(js,"users"),S0=Vo(js,"settings","app"),C0=new Gi,UL=["ariqipraditya@gmail.com"],jL=["ariqipraditya@gmail.com"],R0=[{id:"group",label:"Group Chat"},{id:"updates",label:"Updates"},{id:"suggestions",label:"Suggestions"}],L_="quadchat:sessionUserId",fC="quadchat:notificationsEnabled",zL="/QuadChat/favicon.svg",nm=4,BL=10*1024*1024,Th=30,WL=typeof MediaRecorder<"u";function $L(n){return n!=null&&n.toDate?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit"}).format(n.toDate()):"sending"}function xo(n){switch(n.code){case"auth/email-already-in-use":return"That email already has an account. Sign in instead.";case"auth/invalid-email":return"Enter a valid email address.";case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":return"The email or password is incorrect.";case"auth/weak-password":return"Password must be at least 6 characters.";case"auth/operation-not-allowed":return"This sign-in method is not enabled in Firebase.";case"auth/popup-closed-by-user":return"The Google sign-in popup was closed before finishing.";case"auth/popup-blocked":return"Your browser blocked the Google sign-in popup.";case"auth/unauthorized-domain":return"This domain is not authorized in Firebase Authentication settings.";case"auth/requires-recent-login":return"Please sign out, sign back in, and try again.";default:return n.message}}function A0(n){return n.split(/\s+/).filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"?"}function jo(n){return(n||"").trim().replace(/^@/,"").toLowerCase()}function yu(n,e="Anonymous"){var t;return((t=n==null?void 0:n.displayName)==null?void 0:t.trim())||(n==null?void 0:n.email)||e}function qL(n,e){const t=n||e||"User",r=t.split("@")[0].trim().split(/\s+/)[0]||"User";return(e||"").toLowerCase().includes("lorenzo")||jo(t).includes("lorenzo")?"Lorenzo":r}function k0(n){return/\s/.test(n.trim())}function Gm(n){return UL.includes((n||"").toLowerCase())}function pC(n){return jL.includes((n||"").toLowerCase())}function HL(n){return(n==null?void 0:n.channel)||"group"}function GL(n){if(!n)return null;const e=n.match(/^(\d+)(s|m|h|d)?$/i);if(!e)return null;const t=Number(e[1]),r=(e[2]||"m").toLowerCase(),s={s:1e3,m:60*1e3,h:3600*1e3,d:1440*60*1e3};return t*s[r]}function Mh(n){var t;return n!=null&&n.muted?n.mutedUntil?((t=n.mutedUntil)!=null&&t.toDate?n.mutedUntil.toDate():new Date(n.mutedUntil)).getTime()>Date.now():!0:!1}function KL(n){var t;if(!Mh(n))return"";if(!n.mutedUntil)return"You are muted.";const e=(t=n.mutedUntil)!=null&&t.toDate?n.mutedUntil.toDate():new Date(n.mutedUntil);return`You are muted until ${new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"2-digit"}).format(e)}.`}const QL=/\.(mp4|webm|mov|avi|mkv|ogg|wmv|flv)$/i;function YL(n){try{const e=new URL(n);return QL.test(e.pathname)}catch{return!1}}function XL(n,e,t=!1){if(!n)return null;if(t)return R.jsx("span",{className:"admin-command-text",children:n});const r=Object.values(e).map(s=>jo(yu(s,"")));return n.split(/(\s+)/).map((s,a)=>{if(s.startsWith("@")){const u=jo(s);return u==="everyone"||r.some(f=>f===u)?R.jsx("span",{className:"mention",children:s},`${s}-${a}`):s}return YL(s)?R.jsx("video",{controls:!0,className:"message-video",children:R.jsx("source",{src:s})},`${s}-${a}`):s})}function P0(n){const e=(n||"").replace(/\s+/g," ").trim();return e.length<=90?e:`${e.slice(0,87)}...`}function JL(n){return n.type.startsWith("image/")||n.type.startsWith("video/")?URL.createObjectURL(n):""}function ZL(n){const e=Math.floor(n/60),t=n%60;return`${e}:${t.toString().padStart(2,"0")}`}async function Do(n,e,t={}){if(!n)return;const r=qL(e||n.displayName,n.email),s=Vo(js,"users",n.uid),a=await ZI(s),u=Gm(n.email),d=pC(n.email),f={id:n.uid,displayName:r,email:n.email||"",updatedAt:Oo()};t.forcePhoto||t.photoURL!==void 0?f.photoURL=t.photoURL||"":a.exists()||(f.photoURL=n.photoURL||""),(!a.exists()||u||d)&&(f.isAdmin=u,f.isDeveloper=d,f.role=d?"developer":u?"admin":"member"),await Oh(s,f,{merge:!0})}function eM(){return sessionStorage.getItem(L_)||""}function Ih(n){sessionStorage.setItem(L_,n)}function rm(){sessionStorage.removeItem(L_)}function tM(){return localStorage.getItem(fC)==="true"}function im(n){localStorage.setItem(fC,String(n))}function nM(){var xi,kr;const[n,e]=oe.useState(null),[t,r]=oe.useState(eM),[s,a]=oe.useState(!1),[u,d]=oe.useState("signin"),[f,g]=oe.useState(""),[v,w]=oe.useState(""),[T,D]=oe.useState(""),[z,q]=oe.useState(""),[W,ge]=oe.useState([]),[fe,ve]=oe.useState([]),[Ie,ut]=oe.useState({}),[Pe,b]=oe.useState(null),[C,k]=oe.useState(""),[N,O]=oe.useState(tM),[V,A]=oe.useState("Notification"in window?Notification.permission:"unsupported"),[ct,kt]=oe.useState(!1),[St,et]=oe.useState(!1),[ee,_e]=oe.useState(!1),[ae,M]=oe.useState(0),[G,he]=oe.useState(!1),[Me,be]=oe.useState(!1),[je,Ge]=oe.useState(!1),[Qe,rt]=oe.useState(""),[Pt,Qn]=oe.useState(""),[Ti,sr]=oe.useState(""),[or,Tr]=oe.useState(null),[nn,Qr]=oe.useState(""),[us,Ii]=oe.useState(!1),[wn,Ir]=oe.useState({signupEnabled:!0}),[ao,Yr]=oe.useState(new Set),[Sr,Ne]=oe.useState(""),[Ct,Oe]=oe.useState(""),[Tn,cs]=oe.useState(!1),[Cr,ar]=oe.useState(!0),Xr=oe.useRef(null),hs=oe.useRef(null),xn=oe.useRef(null),Jr=oe.useRef(null),ds=oe.useRef([]),In=oe.useRef(null),lr=oe.useRef(null),Zr=oe.useRef([]),Si=oe.useRef(!1),Ht=oe.useRef(null),hn=oe.useRef(null),Dn=oe.useRef(null),dn=oe.useRef(!0),Ci=oe.useRef(!1),Yn=oe.useRef(null),fs=oe.useRef(!0),bn=oe.useRef(new Set),Ri=oe.useRef(!1),Je=t?Ie[t]:null,On=(Je==null?void 0:Je.isDeveloper)||pC((n==null?void 0:n.email)||""),zt=(Je==null?void 0:Je.isAdmin)||On||Gm((n==null?void 0:n.email)||""),Ai=(xi=n==null?void 0:n.providerData)==null?void 0:xi.some(L=>L.providerId==="google.com"),Rr=KL(Je),[Rt,Xn]=oe.useState("group"),Ar=oe.useMemo(()=>fe.filter(L=>HL(L)===Rt),[fe,Rt]),lo=Rt!=="updates"||On,Sn=oe.useMemo(()=>yu(Je,(n==null?void 0:n.displayName)||(n==null?void 0:n.email)||""),[Je,n]);oe.useEffect(()=>yk($i,Q=>{e(Q),a(!0),Q?(Ih(Q.uid),r(Q.uid),Do(Q).catch(re=>{Ne(re.message)})):(rm(),r(""))}),[]),oe.useEffect(()=>{if(!n)return;const L=d0(I0,`presence/${n.uid}`);return cC(L,!0),GO(L).remove(),()=>{KO(L)}},[n]),oe.useEffect(()=>qp(S0,Q=>{Ir({signupEnabled:Q.exists()?Q.data().signupEnabled!==!1:!0})},Q=>{Ne(Q.message)}),[]),oe.useEffect(()=>{!wn.signupEnabled&&u==="signup"&&d("signin")},[wn.signupEnabled,u]),oe.useEffect(()=>{n&&rt(Sn||"")},[Sn,n]),oe.useEffect(()=>{je||(nn&&URL.revokeObjectURL(nn),Tr(null),Qr(""))},[je,nn]),oe.useEffect(()=>{if(!n){ut({});return}return qp(FL,Q=>{ut(Q.docs.reduce((re,te)=>(re[te.id]={id:te.id,...te.data()},re),{}))},Q=>{Ne(Q.message)})},[n]),oe.useEffect(()=>{if(!n){Yr(new Set);return}const L=d0(I0,"presence");return YO(L,re=>{re.exists()?Yr(new Set(Object.keys(re.val()))):Yr(new Set)})},[n]),oe.useEffect(()=>{if(!n){ve([]),ar(!0),dn.current=!0,Ht.current=null,hn.current=null,Dn.current&&(Dn.current(),Dn.current=null);return}let L=!1;async function Q(){const re=Bp(Ga,Wp("createdAt","asc"),F2(Th)),te=await Pw(re);if(L)return;const ye=te.docs.map(Ke=>({id:Ke.id,...Ke.data()}));ve(ye);const Re=te.docs.length>=Th;if(ar(Re),dn.current=Re,Ht.current=te.docs[0]||null,hn.current=te.docs[te.docs.length-1]||null,hn.current){const Ke=Bp(Ga,Wp("createdAt","asc"),Rw(hn.current));Dn.current=qp(Ke,ze=>{L||ze.docChanges().forEach(Ve=>{if(Ve.type!=="added"&&Ve.type!=="modified")return;const Le={id:Ve.doc.id,...Ve.doc.data()};ve(Rn=>{const gs=Rn.findIndex(ma=>ma.id===Le.id);if(gs===-1)return[...Rn,Le];const ni=Rn.slice();return ni[gs]={...ni[gs],...Le},ni}),Ve.type==="added"&&(hn.current=Ve.doc)})},ze=>{L||Ne(ze.message)})}}return Q(),()=>{L=!0,Dn.current&&(Dn.current(),Dn.current=null)}},[n]),oe.useEffect(()=>{var L;fs.current&&((L=Xr.current)==null||L.scrollIntoView({block:"end"}))},[Ar]),oe.useEffect(()=>{const L=xn.current;if(!L)return;function Q(){fs.current=L.scrollHeight-L.scrollTop-L.clientHeight<150}return L.addEventListener("scroll",Q,{passive:!0}),()=>L.removeEventListener("scroll",Q)},[]),oe.useEffect(()=>{if(!Tn&&Yn.current&&xn.current){const L=xn.current,Q=L.scrollHeight-Yn.current.scrollHeight;L.scrollTop=Yn.current.scrollTop+Q,Yn.current=null}},[Tn]),oe.useEffect(()=>{const L=hs.current,Q=xn.current;if(!L||!Q)return;const re=new IntersectionObserver(te=>{te[0].isIntersecting&&fa()},{root:Q,threshold:.1});return re.observe(L),()=>re.disconnect()},[Cr,fe]),oe.useEffect(()=>{ds.current=W},[W]),oe.useEffect(()=>()=>{ds.current.forEach(L=>{L.previewUrl&&URL.revokeObjectURL(L.previewUrl)})},[]),oe.useEffect(()=>{if(!n){bn.current=new Set,Ri.current=!1;return}const L=new Set(fe.map(re=>re.id));if(!Ri.current){bn.current=L,Ri.current=!0;return}N&&V==="granted"&&(document.hidden||!document.hasFocus())&&fe.filter(re=>!bn.current.has(re.id)&&re.userId!==t).forEach(re=>{var Ke;const te=Ie[re.userId],ye=yu(te,"Someone"),Re=new Notification(`QuadChat: ${ye}`,{body:P0(re.text||(re.isFile?"Sent a file":((Ke=re.attachments)==null?void 0:Ke.length)>0?"Sent an attachment":"Sent a message")),icon:zL,tag:`quadchat-${re.id}`});window.setTimeout(()=>Re.close(),7e3)}),bn.current=L},[fe,V,N,Ie,t,n]);async function la(L){L.preventDefault();const Q=f.trim(),re=v.trim(),te=T.trim(),ye=u==="signup";if(!(!re||!te||ye&&!Q)){if(ye&&k0(Q)){Ne("Usernames cannot contain spaces.");return}Ne("");try{if(ye){const Re=await hk($i,re,te);await yE(Re.user,{displayName:Q}),await Do(Re.user,Q),Ih(Re.user.uid),r(Re.user.uid),e({...Re.user,displayName:Q})}else{const Re=await dk($i,re,te);Ih(Re.user.uid),r(Re.user.uid)}g(""),w(""),D("")}catch(Re){Ne(xo(Re))}}}async function Jn(){Ne("");try{const L=await jk($i,C0);await Do(L.user),Ih(L.user.uid),r(L.user.uid),g(""),w(""),D("")}catch(L){Ne(xo(L))}}async function ki(){var L;if(n){he(!0),Oe("");try{const Q=await zk(n,C0),re=Vo(js,"users",Q.user.uid),ye=((L=(await ZI(re)).data())==null?void 0:L.photoURL)||"",Re=Q.user.photoURL||"";let Ke=null;Re&&ye&&Re!==ye?Ke=window.confirm("You already have a profile picture. Replace it with your Google account picture?")?Re:ye:Re&&(Ke=Re),await Do(Q.user,void 0,{photoURL:Ke??"",forcePhoto:Ke!==null}),await Q.user.reload(),e($i.currentUser),Oe("Google account connected.")}catch(Q){Oe(xo(Q))}finally{he(!1)}}}async function Zn(){if(Ne(""),!("Notification"in window)){Ne("This browser does not support notifications.");return}if(N){im(!1),O(!1),be(!1);return}const L=Notification.permission==="default"?await Notification.requestPermission():Notification.permission;A(L),L==="granted"?(im(!0),O(!0),be(!1)):(im(!1),O(!1),Ne("Notifications are blocked in this browser."))}async function uo(){try{await vk($i),rm(),r(""),q(""),Ne("")}catch(L){Ne(xo(L))}}function co(){rt(Sn||""),Qn(""),sr(""),Tr(null),nn&&URL.revokeObjectURL(nn),Qr(""),Oe(""),Ne(""),be(!1),Ge(!0)}function ps(L){var re;const Q=(re=L.target.files)==null?void 0:re[0];if(Q){if(!Q.type.startsWith("image/")){Oe("Profile picture must be an image file.");return}if(Q.size>5*1024*1024){Oe("Profile picture must be under 5 MB.");return}nn&&URL.revokeObjectURL(nn),Tr(Q),Qr(URL.createObjectURL(Q)),Oe("")}}function Pi(){nn&&URL.revokeObjectURL(nn),Tr(null),Qr("")}async function ho(){if(!n||!or)return null;Ii(!0),Oe("");try{const L=await tm(or);return await Do(n,void 0,{photoURL:L,forcePhoto:!0}),await n.reload(),e($i.currentUser),Pi(),Oe("Profile picture updated."),L}catch(L){return console.error(L),Oe(L.message||"Profile picture upload failed."),null}finally{Ii(!1)}}async function ua(){if(!(!n||!window.confirm("Remove your profile picture?"))){he(!0),Oe("");try{await Do(n,void 0,{photoURL:"",forcePhoto:!0}),await n.reload(),e($i.currentUser),Oe("Profile picture removed.")}catch(Q){Oe(xo(Q))}finally{he(!1)}}}async function Pl(L){L.preventDefault();const Q=Qe.trim(),re=Pt.trim(),te=Ti.trim();if(!(!n||!Q&&!te)){if(Q&&k0(Q)){Oe("Usernames cannot contain spaces.");return}if(te&&!re){Oe("Enter your current password to set a new password.");return}he(!0),Oe(""),Ne("");try{if(Q&&Q!==n.displayName&&await yE(n,{displayName:Q}),Q&&await Do(n,Q),te){const ye=ea.credential(n.email,re);await ck(n,ye),await pk(n,te)}await n.reload(),e($i.currentUser),Qn(""),sr(""),Oe("Settings saved.")}catch(ye){Oe(xo(ye))}finally{he(!1)}}}async function lt(){if(zt){Oe("");try{await Oh(S0,{signupEnabled:!wn.signupEnabled,updatedAt:Oo(),updatedBy:t},{merge:!0})}catch(L){Oe(L.message)}}}async function ca(){if(!(!n||!window.confirm("Remove this account? This cannot be undone."))){he(!0),Oe("");try{await B2(Vo(js,"users",n.uid)),await Ek(n),rm(),r(""),Ge(!1),q(""),Ne("")}catch(Q){Oe(xo(Q))}finally{he(!1)}}}function ei(L){const Q=Array.from(L||[]);Q.length!==0&&(Ne(""),ge(re=>{const te=nm-re.length,ye=Q.slice(0,te);Q.length>te&&Ne(`You can attach up to ${nm} files at a time.`);const Re=ye.filter(Ke=>Ke.size<=BL?!0:(Ne("Files must be 10 MB or smaller."),!1));return[...re,...Re.map(Ke=>({id:crypto.randomUUID(),file:Ke,previewUrl:JL(Ke)}))]}),Jr.current&&(Jr.current.value=""))}function ti(L){ge(Q=>{const re=Q.find(te=>te.id===L);return re!=null&&re.previewUrl&&URL.revokeObjectURL(re.previewUrl),Q.filter(te=>te.id!==L)})}function Ln(L){const Q=jo(L),re=Object.values(Ie);return Q==="everyone"?re.filter(te=>te.id!==t):re.filter(te=>{const ye=jo(te.displayName),Re=jo(te.email),Ke=jo(te.id);return ye===Q||Re===Q||Ke===Q})}async function fo(L){var ze;const Q=L.trim().split(/\s+/),re=(ze=Q[0])==null?void 0:ze.toLowerCase();if(!["?mute","?unmute"].includes(re)||!zt)return null;const te=Q[1];if(!te)return Ne("Use ?mute username, ?mute username -t 10m, or ?unmute username."),{handled:!0};const ye=Ln(te);if(ye.length===0)return Ne(`Could not find ${te}.`),{handled:!0};if(re==="?mute"&&ye.some(Ve=>Ve.isAdmin||Gm(Ve.email)))return Ne("cannot mute admins"),{handled:!0};if(re==="?unmute")return await Promise.all(ye.map(Ve=>Oh(Vo(js,"users",Ve.id),{muted:!1,mutedUntil:null,mutedBy:t,mutedUpdatedAt:Oo()},{merge:!0}))),Ne(""),{handled:!1,metadata:{adminCommand:!0,command:re,commandTarget:te}};const Re=Q.findIndex(Ve=>Ve==="-t"),Ke=Re>=0?GL(Q[Re+1]):null;return Re>=0&&!Ke?(Ne("Use durations like 30s, 10m, 2h, or 1d."),{handled:!0}):(await Promise.all(ye.map(Ve=>Oh(Vo(js,"users",Ve.id),{muted:!0,mutedUntil:Ke?mt.fromDate(new Date(Date.now()+Ke)):null,mutedBy:t,mutedUpdatedAt:Oo()},{merge:!0}))),Ne(""),{handled:!1,metadata:{adminCommand:!0,command:re,commandTarget:te}})}async function ha(L){const Q=new File([L],"Voice message.webm",{type:"audio/webm"});if(Rt==="updates"&&!On){Ne("Only developers can post in Updates.");return}kt(!0),Ne("");try{const re=await tm(Q);await $p(Ga,{text:re,isFile:!0,fileName:"Voice message.webm",fileType:"audio/webm",userId:t,channel:Rt,createdAt:Oo()})}catch(re){console.error("QuadChat audio upload failed:",re),Ne(re.code==="permission-denied"?"Firestore rules blocked this upload.":re.message)}finally{kt(!1)}}function Ni(){var L;if(!((L=navigator.mediaDevices)!=null&&L.getUserMedia)){Ne("Voice recording is not supported in this browser.");return}Ne(""),Zr.current=[],M(0),_e(!1),navigator.mediaDevices.getUserMedia({audio:!0}).then(Q=>{const re=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"audio/webm",te=new MediaRecorder(Q,{mimeType:re});In.current=te,te.ondataavailable=ye=>{ye.data.size>0&&Zr.current.push(ye.data)},te.onstop=()=>{const ye=new Blob(Zr.current,{type:"audio/webm"});Q.getTracks().forEach(Re=>Re.stop()),Si.current&&ha(ye)},te.onerror=()=>{Ne("Recording failed. Please try again."),et(!1),_e(!1),Q.getTracks().forEach(ye=>ye.stop())},te.start(250),et(!0),lr.current=setInterval(()=>{M(ye=>ye+1)},1e3)}).catch(()=>{Ne("Microphone access denied. Please allow microphone permissions.")})}function Cn(){var L;((L=In.current)==null?void 0:L.state)==="recording"&&(In.current.pause(),_e(!0),clearInterval(lr.current))}function da(){var L;((L=In.current)==null?void 0:L.state)==="paused"&&(In.current.resume(),_e(!1),lr.current=setInterval(()=>{M(Q=>Q+1)},1e3))}function Gt(L=!1){In.current&&(In.current.state==="recording"||In.current.state==="paused")&&(Si.current=L,In.current.stop(),clearInterval(lr.current)),et(!1),_e(!1)}function po(){Gt(!1),M(0)}async function fa(){if(!(Ci.current||!dn.current||!Ht.current)){Ci.current=!0,cs(!0),xn.current&&(Yn.current={scrollTop:xn.current.scrollTop,scrollHeight:xn.current.scrollHeight});try{const L=Bp(Ga,Wp("createdAt","desc"),Rw(Ht.current),V2(Th)),Q=await Pw(L);if(Q.empty){ar(!1),dn.current=!1;return}const re=Q.docs.reverse().map(ye=>({id:ye.id,...ye.data()}));ve(ye=>[...re,...ye]),Ht.current=Q.docs[Q.docs.length-1];const te=Q.docs.length>=Th;ar(te),dn.current=te}catch(L){Ne(L.message)}finally{Ci.current=!1,cs(!1)}}}async function pa(L){if(L.preventDefault(),St||ee){Gt(!0);return}if(Rt==="updates"&&!On){Ne("Only developers can post in Updates.");return}const Q=z.trim(),re=W.length>0;if(!(!Q&&!re||!Sn||ct||!t)){kt(!0),Ne("");try{const te=await fo(Q);if(te!=null&&te.handled)return;if(!zt&&Mh(Je)){Ne(Rr||"You are muted.");return}Q&&await $p(Ga,{text:Q,channel:Rt,...(te==null?void 0:te.metadata)||{},...Pe&&!(te!=null&&te.metadata)?{replyTo:{id:Pe.id,text:Pe.text,userId:Pe.userId,senderName:Pe.senderName}}:{},userId:t,createdAt:Oo()});for(const ye of W){const Re=await tm(ye.file);await $p(Ga,{text:Re,isFile:!0,channel:Rt,fileName:ye.file.name,fileType:ye.file.type||"application/octet-stream",userId:t,createdAt:Oo()})}q(""),b(null),ge(ye=>(ye.forEach(Re=>{Re.previewUrl&&URL.revokeObjectURL(Re.previewUrl)}),[]))}catch(te){console.error("QuadChat message write failed:",te),Ne(te.code==="permission-denied"?"Firestore rules blocked this message write.":te.message)}finally{kt(!1)}}}function ms(L){var te;const re=Array.from(((te=L.clipboardData)==null?void 0:te.files)||[]).filter(ye=>ye.type.startsWith("image/"));re.length>0&&(L.preventDefault(),ei(re))}return R.jsxs("main",{className:"app-shell",children:[s?n?R.jsxs("section",{className:"chat-panel","aria-label":"QuadChat room",children:[R.jsxs("header",{className:"chat-header",children:[R.jsxs("div",{className:"chat-title",children:[R.jsx("div",{className:"brand-mark","aria-hidden":"true",children:R.jsx(hu,{size:26,strokeWidth:2.3})}),R.jsxs("div",{children:[R.jsx("h1",{children:"QuadChat"}),R.jsxs("p",{children:["Signed in as ",Sn," · ",Ar.length," message",Ar.length===1?"":"s"," in"," ",(kr=R0.find(L=>L.id===Rt))==null?void 0:kr.label]}),On?R.jsx("span",{className:"admin-badge",children:"Developer"}):zt?R.jsx("span",{className:"admin-badge",children:"Admin"}):null]})]}),R.jsxs("button",{className:"icon-text-button",type:"button",onClick:uo,title:"Sign out",children:[R.jsx(g0,{size:18}),R.jsx("span",{children:"Sign out"})]}),R.jsxs("div",{className:"profile-actions",children:[R.jsx("button",{className:"avatar-button",type:"button",onClick:()=>be(L=>!L),title:"Profile options",children:n.photoURL?R.jsx("img",{src:n.photoURL,alt:""}):R.jsx("span",{children:A0(Sn)})}),Me?R.jsxs("div",{className:"profile-menu",children:[R.jsxs("button",{type:"button",onClick:co,children:[R.jsx(TL,{size:17}),R.jsx("span",{children:"Settings"})]}),R.jsxs("button",{type:"button",onClick:Zn,children:[N?R.jsx(cL,{size:17}):R.jsx(hL,{size:17}),R.jsx("span",{children:N?"Disable notifications":"Enable notifications"})]}),R.jsxs("button",{type:"button",onClick:uo,children:[R.jsx(g0,{size:17}),R.jsx("span",{children:"Sign out"})]})]}):null]})]}),Sr?R.jsx("div",{className:"error-banner",children:Sr}):null,Rr?R.jsx("div",{className:"error-banner",children:Rr}):null,R.jsxs("div",{className:"chat-body",children:[R.jsxs("div",{className:"messages",ref:xn,role:"log","aria-live":"polite",children:[Rt==="suggestions"?R.jsxs("div",{className:"channel-description",children:[R.jsx(m0,{size:16}),R.jsx("span",{children:"Share what you'd like to see in the next update. Anyone can post suggestions here."})]}):Rt==="updates"?R.jsxs("div",{className:"channel-description",children:[R.jsx(_0,{size:16}),R.jsx("span",{children:On?"You're a developer — post announcements and release notes here for everyone to read.":"Read official updates from the developer here. Only developers can post."})]}):null,Ar.length===0&&!Tn?R.jsxs("div",{className:"empty-state",children:[R.jsx(hu,{size:42}),R.jsx("p",{children:Rt==="updates"?"No updates yet.":Rt==="suggestions"?"No suggestions yet. Be the first!":"No messages yet. Say hello when you are ready."})]}):R.jsxs(R.Fragment,{children:[Tn?R.jsx("div",{className:"loading-more",children:"Loading older messages..."}):null,Cr&&!Tn?R.jsx("div",{className:"sentinel",ref:hs}):null,Ar.map(L=>{var Re,Ke,ze;const Q=Ie[L.userId],re=yu(Q,L.name),te=L.userId===t,ye=C===L.id;return R.jsxs("article",{className:`message ${te?"message-mine":""}`,children:[R.jsxs("div",{className:"message-meta",children:[R.jsx("strong",{children:re}),R.jsx("span",{children:$L(L.createdAt)})]}),R.jsxs("div",{className:"message-actions",children:[R.jsx("button",{"aria-expanded":ye,"aria-label":"Message options",className:"message-menu-button",onClick:()=>k(ye?"":L.id),title:"Message options",type:"button",children:R.jsx(pL,{size:16})}),ye?R.jsx("div",{className:"message-menu",children:R.jsxs("button",{onClick:()=>{b({id:L.id,text:P0(L.text),userId:L.userId,senderName:re}),k("")},type:"button",children:[R.jsx(fL,{size:16}),R.jsx("span",{children:"Reply"})]})}):null]}),L.replyTo?R.jsxs("div",{className:"reply-card",children:[R.jsx("strong",{children:L.replyTo.senderName||"Unknown"}),R.jsx("span",{children:L.replyTo.text||"Message unavailable"})]}):null,L.isFile?(Re=L.fileType)!=null&&Re.startsWith("video/")?R.jsx("video",{controls:!0,className:"message-video",children:R.jsx("source",{src:L.text,type:L.fileType})}):(Ke=L.fileType)!=null&&Ke.startsWith("audio/")?R.jsx("audio",{controls:!0,className:"message-audio",src:L.text,children:R.jsx("source",{src:L.text,type:L.fileType})}):R.jsx("a",{className:"message-image-link",href:L.text,rel:"noreferrer",target:"_blank",children:R.jsx("img",{src:L.text,alt:L.fileName||"Uploaded image"})}):L.text?R.jsx("p",{children:XL(L.text,Ie,L.adminCommand)}):null,((ze=L.attachments)==null?void 0:ze.length)>0?R.jsx("div",{className:"message-attachments",children:L.attachments.map(Ve=>{var Le,Rn;return(Le=Ve.type)!=null&&Le.startsWith("image/")?R.jsx("a",{className:"message-image-link",href:Ve.url,rel:"noreferrer",target:"_blank",children:R.jsx("img",{src:Ve.url,alt:Ve.name})},Ve.path||Ve.url):(Rn=Ve.type)!=null&&Rn.startsWith("video/")?R.jsx("video",{controls:!0,className:"message-video",children:R.jsx("source",{src:Ve.url,type:Ve.type})},Ve.path||Ve.url):R.jsxs("a",{className:"message-file-link",href:Ve.viewUrl||Ve.url,rel:"noreferrer",target:"_blank",children:[R.jsx(p0,{size:18}),R.jsx("span",{children:Ve.name})]},Ve.path||Ve.url)})}):null]},L.id)}),R.jsx("div",{ref:Xr})]})]}),R.jsx("aside",{className:"channel-sidebar","aria-label":"Channels",children:R.jsx("div",{className:"channel-tabs",role:"tablist","aria-label":"Channels",children:R0.map(L=>R.jsxs("button",{"aria-selected":Rt===L.id,className:`channel-tab ${Rt===L.id?"active":""}`,onClick:()=>Xn(L.id),role:"tab",type:"button",title:L.label,children:[L.id==="group"?R.jsx(hu,{size:18}):L.id==="updates"?R.jsx(_0,{size:18}):R.jsx(m0,{size:18}),R.jsx("span",{children:L.label})]},L.id))})}),R.jsxs("aside",{className:"users-sidebar",children:[R.jsxs("div",{className:"users-sidebar-header",children:[R.jsx(CL,{size:16}),R.jsx("span",{children:"Users"})]}),R.jsx("div",{className:"users-sidebar-list",children:Object.values(Ie).map(L=>{const Q=yu(L,L.email||""),re=Mh(L);return R.jsxs("div",{className:`user-item ${ao.has(L.id)?"online":""}`,children:[R.jsx("span",{className:"user-dot"}),R.jsx("span",{className:"user-name",children:Q}),re?R.jsx(_L,{"aria-label":`${Q} is muted`,className:"user-mic user-mic-muted",size:14}):R.jsx(y0,{"aria-label":`${Q} can speak`,className:"user-mic",size:14})]},L.id)})})]})]}),R.jsxs("form",{className:"composer",onSubmit:pa,children:[Pe?R.jsxs("div",{className:"reply-composer",children:[R.jsxs("div",{className:"reply-composer-text",children:[R.jsxs("strong",{children:["Replying to ",Pe.senderName]}),R.jsx("span",{children:Pe.text})]}),R.jsx("button",{"aria-label":"Cancel reply",onClick:()=>b(null),title:"Cancel reply",type:"button",children:R.jsx(E0,{size:16})})]}):null,W.length>0?R.jsx("div",{className:"attachment-preview-list",children:W.map(L=>R.jsxs("div",{className:"attachment-preview",children:[L.previewUrl?L.file.type.startsWith("video/")?R.jsx(mL,{size:18}):R.jsx("img",{src:L.previewUrl,alt:""}):R.jsx(p0,{size:22}),R.jsx("span",{children:L.file.name}),R.jsx("button",{"aria-label":`Remove ${L.file.name}`,onClick:()=>ti(L.id),title:"Remove file",type:"button",children:R.jsx(E0,{size:15})})]},L.id))}):null,R.jsxs("div",{className:"composer-row",style:St||ee?{gridTemplateColumns:"50px 1fr 50px"}:{gridTemplateColumns:"50px 50px 1fr 50px"},children:[St||ee?R.jsx("button",{type:"button",className:"recording-cancel-btn",onClick:po,title:"Delete recording","aria-label":"Delete recording",disabled:ct,children:R.jsx(em,{size:20})}):R.jsxs(R.Fragment,{children:[R.jsx("button",{"aria-label":"Attach files",className:"attach-button",onClick:()=>{var L;return(L=Jr.current)==null?void 0:L.click()},title:"Attach files",type:"button",disabled:W.length>=nm||ct||!lo,children:R.jsx(EL,{size:22})}),WL?R.jsx("button",{"aria-label":"Record voice message",className:"mic-button",onClick:Ni,title:"Record voice message",type:"button",disabled:ct||!lo,children:R.jsx(y0,{size:22})}):null]}),R.jsx("input",{ref:Jr,className:"file-input",type:"file",multiple:!0,onChange:L=>ei(L.target.files)}),St||ee?R.jsxs("div",{className:"recording-bar",children:[R.jsx("span",{className:"recording-dot"}),R.jsx("span",{className:"recording-timer",children:ZL(ae)}),R.jsx("button",{type:"button",className:"recording-pause-btn",onClick:ee?da:Cn,title:ee?"Resume recording":"Pause recording","aria-label":ee?"Resume recording":"Pause recording",children:ee?R.jsx(vL,{size:18}):R.jsx(yL,{size:18})})]}):R.jsx("input",{type:"text",value:z,onChange:L=>q(L.target.value),onPaste:ms,placeholder:"Type a message",maxLength:500}),R.jsx("button",{type:"submit","aria-label":"Send message",title:"Send message",disabled:!z.trim()&&W.length===0&&!St&&!ee||!Sn||ct||!t||!zt&&Mh(Je)||!lo,children:R.jsx(wL,{size:20})})]})]})]}):R.jsxs("section",{className:"signin-panel","aria-label":"Sign in to QuadChat",children:[R.jsxs("div",{className:"signin-brand",children:[R.jsx("div",{className:"brand-mark","aria-hidden":"true",children:R.jsx(hu,{size:28,strokeWidth:2.3})}),R.jsxs("div",{children:[R.jsx("h1",{children:"QuadChat"}),R.jsx("p",{children:u==="signup"?"Create an account to start chatting.":"Sign in to continue chatting."})]})]}),R.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication view",children:[R.jsx("button",{className:u==="signin"?"active":"",type:"button",onClick:()=>{d("signin"),Ne("")},children:"Sign in"}),wn.signupEnabled?R.jsx("button",{className:u==="signup"?"active":"",type:"button",onClick:()=>{d("signup"),Ne("")},children:"Sign up"}):null]}),R.jsxs("form",{className:"signin-form",onSubmit:la,children:[u==="signup"?R.jsxs(R.Fragment,{children:[R.jsxs("label",{htmlFor:"signin-name",children:[R.jsx(v0,{size:18}),R.jsx("span",{children:"Display name"})]}),R.jsx("input",{id:"signin-name",type:"text",value:f,onChange:L=>g(L.target.value),placeholder:"Username without spaces",autoComplete:"username",maxLength:32})]}):null,R.jsxs("label",{htmlFor:"signin-email",children:[R.jsx(v0,{size:18}),R.jsx("span",{children:"Email"})]}),R.jsx("input",{id:"signin-email",type:"email",value:v,onChange:L=>w(L.target.value),placeholder:"you@example.com",autoComplete:"email",maxLength:120}),R.jsxs("label",{htmlFor:"signin-password",children:[R.jsx(Zp,{size:18}),R.jsx("span",{children:"Password"})]}),R.jsx("input",{id:"signin-password",type:"password",value:T,onChange:L=>D(L.target.value),placeholder:"Enter your password",autoComplete:"current-password",maxLength:64}),Sr?R.jsx("div",{className:"error-banner inline-error",children:Sr}):null,R.jsx("button",{type:"submit",disabled:!v.trim()||!T.trim()||u==="signup"&&!f.trim(),children:u==="signup"?"Create account":"Sign in"})]}),R.jsx("div",{className:"auth-divider",children:R.jsx("span",{children:"or"})}),R.jsxs("button",{className:"google-button",type:"button",onClick:Jn,children:[R.jsx(f0,{size:18}),R.jsx("span",{children:"Continue with Google"})]}),R.jsxs("div",{className:"mode-note",children:[R.jsx(IL,{size:18}),R.jsx("span",{children:"Production mode: Firebase Authentication manages accounts."})]})]}):R.jsx("section",{className:"signin-panel","aria-label":"Loading QuadChat",children:R.jsxs("div",{className:"signin-brand",children:[R.jsx("div",{className:"brand-mark","aria-hidden":"true",children:R.jsx(hu,{size:28,strokeWidth:2.3})}),R.jsxs("div",{children:[R.jsx("h1",{children:"QuadChat"}),R.jsx("p",{children:"Checking your session."})]})]})}),je&&n?R.jsx("div",{className:"modal-backdrop",role:"presentation",children:R.jsxs("section",{className:"settings-modal","aria-label":"Account settings",role:"dialog","aria-modal":"true",children:[R.jsxs("header",{className:"settings-header",children:[R.jsxs("div",{children:[R.jsx("h2",{children:"Settings"}),R.jsx("p",{children:n.email}),R.jsxs("p",{children:["ID: ",t]}),On?R.jsx("p",{children:"Role: developer"}):zt?R.jsx("p",{children:"Role: admin"}):null]}),R.jsx("button",{className:"modal-close",type:"button",onClick:()=>Ge(!1),title:"Close settings",children:"X"})]}),R.jsxs("form",{className:"settings-form",onSubmit:Pl,children:[R.jsxs("label",{htmlFor:"settings-name",children:[R.jsx(dL,{size:18}),R.jsx("span",{children:"Username"})]}),R.jsx("input",{id:"settings-name",type:"text",value:Qe,onChange:L=>rt(L.target.value),maxLength:32,placeholder:"Username without spaces"}),R.jsxs("section",{className:"settings-photo-section",children:[R.jsxs("div",{className:"settings-photo-row",children:[R.jsx("div",{className:"settings-photo-preview","aria-hidden":"true",children:nn?R.jsx("img",{src:nn,alt:""}):n!=null&&n.photoURL?R.jsx("img",{src:n.photoURL,alt:""}):R.jsx("span",{children:A0(Sn)})}),R.jsxs("div",{className:"settings-photo-actions",children:[R.jsxs("label",{className:"settings-photo-pick",htmlFor:"settings-photo-input",children:[R.jsx(gL,{size:18}),R.jsx("span",{children:or?"Choose another":"Choose image"})]}),R.jsx("input",{accept:"image/*",id:"settings-photo-input",onChange:ps,type:"file"}),or?R.jsxs("div",{className:"settings-photo-buttons",children:[R.jsxs("button",{disabled:us||G,onClick:ho,type:"button",children:[R.jsx(SL,{size:17}),R.jsx("span",{children:us?"Uploading...":"Upload"})]}),R.jsx("button",{className:"ghost-button",disabled:us,onClick:Pi,type:"button",children:"Cancel"})]}):n!=null&&n.photoURL?R.jsxs("button",{className:"danger-button settings-photo-remove",disabled:G,onClick:ua,type:"button",children:[R.jsx(em,{size:17}),R.jsx("span",{children:"Remove picture"})]}):null]})]}),R.jsx("p",{className:"settings-note",children:"JPG, PNG, GIF, or WEBP. Max 5 MB. Stored on Cloudinary."})]}),R.jsxs("label",{htmlFor:"settings-current-password",children:[R.jsx(Zp,{size:18}),R.jsx("span",{children:"Current password"})]}),R.jsx("input",{id:"settings-current-password",type:"password",value:Pt,onChange:L=>Qn(L.target.value),maxLength:64,placeholder:"Required to change password",autoComplete:"current-password"}),R.jsxs("label",{htmlFor:"settings-password",children:[R.jsx(Zp,{size:18}),R.jsx("span",{children:"New password"})]}),R.jsx("input",{id:"settings-password",type:"password",value:Ti,onChange:L=>sr(L.target.value),minLength:6,maxLength:64,placeholder:"Leave blank to keep current password",autoComplete:"new-password"}),Ct?R.jsx("div",{className:"error-banner inline-error settings-note",children:Ct}):null,Ai?R.jsx("section",{className:"admin-settings",children:R.jsxs("div",{children:[R.jsx("h3",{children:"Google account"}),R.jsx("p",{children:"Google sign-in is connected."})]})}):R.jsxs("section",{className:"admin-settings",children:[R.jsxs("div",{children:[R.jsx("h3",{children:"Google account"}),R.jsx("p",{children:"Connect Google as another way to sign in."})]}),R.jsxs("button",{className:"google-button",disabled:G,onClick:ki,type:"button",children:[R.jsx(f0,{size:18}),R.jsx("span",{children:"Connect Google"})]})]}),zt?R.jsxs("section",{className:"admin-settings",children:[R.jsxs("div",{children:[R.jsx("h3",{children:"Admin settings"}),R.jsx("p",{children:"Control app-wide access."})]}),R.jsxs("label",{className:"toggle-row",children:[R.jsx("input",{checked:wn.signupEnabled,onChange:lt,type:"checkbox"}),R.jsx("span",{children:"Allow sign up"})]})]}):null,R.jsxs("div",{className:"settings-actions",children:[R.jsx("button",{type:"submit",disabled:G,children:"Save changes"}),R.jsxs("button",{className:"danger-button",type:"button",onClick:ca,disabled:G,children:[R.jsx(em,{size:17}),R.jsx("span",{children:"Remove account"})]})]})]})]})}):null]})}k1.createRoot(document.getElementById("root")).render(R.jsx(T1.StrictMode,{children:R.jsx(nM,{})}));
