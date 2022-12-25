import{_ as je,r as se,a as W,c as v,b as C,h as ke,F as Ue,i as Ie,w as Me,v as He,j as Je,n as Ve,t as ze,g as We}from"./index-b6a551fb.js";function me(e,t){return function(){return e.apply(t,arguments)}}const{toString:ye}=Object.prototype,{getPrototypeOf:Q}=Object,Y=(e=>t=>{const n=ye.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Y(t)===e),H=e=>t=>typeof t===e,{isArray:_}=Array,P=H("undefined");function ve(e){return e!==null&&!P(e)&&e.constructor!==null&&!P(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=A("ArrayBuffer");function qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const Ze=H("string"),x=H("function"),we=H("number"),G=e=>e!==null&&typeof e=="object",Ke=e=>e===!0||e===!1,j=e=>{if(Y(e)!=="object")return!1;const t=Q(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xe=A("Date"),$e=A("File"),Qe=A("Blob"),Ye=A("FileList"),Ge=e=>G(e)&&x(e.pipe),et=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ye.call(e)===t||x(e.toString)&&e.toString()===t)},tt=A("URLSearchParams"),nt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Oe=typeof self>"u"?typeof global>"u"?globalThis:global:self,Re=e=>!P(e)&&e!==Oe;function K(){const{caseless:e}=Re(this)&&this||{},t={},n=(r,s)=>{const i=e&&be(t,s)||s;j(t[i])&&j(r)?t[i]=K(t[i],r):j(r)?t[i]=K({},r):_(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const rt=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,i)=>{n&&x(s)?e[i]=me(s,n):e[i]=s},{allOwnKeys:r}),e),st=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},it=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&Q(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},at=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ct=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!we(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Q(Uint8Array)),lt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},dt=A("HTMLFormElement"),pt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ht=A("RegExp"),Se=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},mt=e=>{Se(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return _(e)?r(e):r(String(e).split(t)),n},Et=()=>{},wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),bt=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=_(r)?[]:{};return B(r,(o,c)=>{const d=n(o,s+1);!P(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:_,isArrayBuffer:Ee,isBuffer:ve,isFormData:et,isArrayBufferView:qe,isString:Ze,isNumber:we,isBoolean:Ke,isObject:G,isPlainObject:j,isUndefined:P,isDate:Xe,isFile:$e,isBlob:Qe,isRegExp:ht,isFunction:x,isStream:Ge,isURLSearchParams:tt,isTypedArray:ut,isFileList:Ye,forEach:B,merge:K,extend:rt,trim:nt,stripBOM:st,inherits:ot,toFlatObject:it,kindOf:Y,kindOfTest:A,endsWith:at,toArray:ct,forEachEntry:lt,matchAll:ft,isHTMLForm:dt,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Se,freezeMethods:mt,toObjectSet:yt,toCamelCase:pt,noop:Et,toFiniteNumber:wt,findKey:be,global:Oe,isContextDefined:Re,toJSONObject:bt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ae=m.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(m,Ne);Object.defineProperty(Ae,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Ae);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var Ot=typeof self=="object"?self.FormData:window.FormData;const Rt=Ot;function X(e){return a.isPlainObject(e)||a.isArray(e)}function xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ie(e,t,n){return e?e.concat(t).map(function(s,i){return s=xe(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function St(e){return a.isArray(e)&&!e.some(X)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Nt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Rt||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&Nt(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,R){let b=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&St(f)||a.isFileList(f)||a.endsWith(h,"[]")&&(b=a.toArray(f)))return h=xe(h),b.forEach(function(D,De){!(a.isUndefined(D)||D===null)&&t.append(o===!0?ie([h],De,i):o===null?h:h+"[]",u(D))}),!1}return X(f)?!0:(t.append(ie(R,h,i),u(f)),!1)}const p=[],E=Object.assign(At,{defaultVisitor:l,convertValue:u,isVisitable:X});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(b,T){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(T)?T.trim():T,h,E))===!0&&y(b,h?h.concat(T):[T])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ee(e,t){this._pairs=[],e&&J(e,this,t)}const Te=ee.prototype;Te.append=function(t,n){this._pairs.push([t,n])};Te.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function xt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ge(e,t,n){if(!t)return e;const r=n&&n.encode||xt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Tt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ce=Tt,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gt=typeof URLSearchParams<"u"?URLSearchParams:ee,_t=FormData,Ct=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ft=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:gt,FormData:_t,Blob},isStandardBrowserEnv:Ct,isStandardBrowserWebWorkerEnv:Ft,protocols:["http","https","file","blob","url","data"]};function Pt(e,t){return J(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Bt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ce(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Lt(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Bt(r),s,n,0)}),n}return null}const Dt={"Content-Type":void 0};function jt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:_e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ce(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),jt(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(Dt)});const te=V,kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ut=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ue=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function It(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Mt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function le(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ht(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Jt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,u){const l=F(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||d]=k(c))}const o=(c,d)=>a.forEach(c,(u,l)=>i(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Mt(t)?o(Ut(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return It(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&(!n||le(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=F(o),o){const c=a.findKey(r,o);c&&(!n||le(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=k(s),delete n[i];return}const c=t?Ht(i):String(i).trim();c!==i&&delete n[i],n[c]=k(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ue]=this[ue]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=F(o);r[c]||(Jt(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const S=z;function q(e,t){const n=this||te,r=t||n,s=S.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Fe(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});const Vt=null;function zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Pe(e,t){return e&&!vt(t)?qt(e,t):t}const Zt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[i];o||(o=u),n[s]=d,r[s]=u;let p=i,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const y=l&&u-l;return y?Math.round(E*1e3/y):void 0}}function fe(e,t){let n=0;const r=Xt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,d=r(c),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:d||void 0,estimated:d&&o&&u?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const $t=typeof XMLHttpRequest<"u",Qt=$t&&function(e){return new Promise(function(n,r){let s=e.data;const i=S.from(e.headers).normalize(),o=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=Pe(e.baseURL,e.url);u.open(e.method.toUpperCase(),ge(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const y=S.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};zt(function(b){n(b),d()},function(b){r(b),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||_e;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},O.isStandardBrowserEnv){const y=(e.withCredentials||Zt(l))&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(f,h){u.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",fe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(r(!y||y.type?new L(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const E=Kt(l);if(E&&O.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},U={http:Vt,xhr:Qt};a.forEach(U,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Yt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?U[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(U,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:U};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function de(e){return Z(e),e.headers=S.from(e.headers),e.data=q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yt.getAdapter(e.adapter||te.adapter)(e).then(function(r){return Z(e),r.data=q.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return Fe(r)||(Z(e),r&&r.response&&(r.response.data=q.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const pe=e=>e instanceof S?e.toJSON():e;function g(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function i(u,l){if(!a.isUndefined(l))return r(void 0,l)}function o(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,l)=>s(pe(u),pe(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,E=p(e[l],t[l],l);a.isUndefined(E)&&p!==c||(n[l]=E)}),n}const Be="1.2.1",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const he={};ne.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Be+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!he[o]&&(he[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Gt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const $={assertOptions:Gt,validators:ne},N=$.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=g(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&$.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!==void 0&&$.assertOptions(s,{encode:N.function,serialize:N.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=S.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,E;if(!d){const f=[de.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),E=f.length,l=Promise.resolve(n);p<E;)l=l.then(f[p++],f[p++]);return l}E=c.length;let y=n;for(p=0;p<E;){const f=c[p++],h=c[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{l=de.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=u.length;p<E;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=g(this.defaults,t);const n=Pe(t.baseURL,t.url);return ge(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(g(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(g(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const I=M;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new L(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(s){t=s}),cancel:t}}}const en=re;function tn(e){return function(n){return e.apply(null,n)}}function nn(e){return a.isObject(e)&&e.isAxiosError===!0}function Le(e){const t=new I(e),n=me(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Le(g(e,s))},n}const w=Le(te);w.Axios=I;w.CanceledError=L;w.CancelToken=en;w.isCancel=Fe;w.VERSION=Be;w.toFormData=J;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=tn;w.isAxiosError=nn;w.mergeConfig=g;w.AxiosHeaders=S;w.formToJSON=e=>Ce(a.isHTMLForm(e)?new FormData(e):e);w.default=w;const rn=w,sn="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiIyMjkzMTc5NTk4QHFxLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJnZW9pcF9jb3VudHJ5IjoiVFcifSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InVzZXJfaWQiOiJ1c2VyLWdra3FQMkZSMjREajNmVXd1QW9RRmdMUCJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjM4ZjQyODMxNDNhMWRmNDEzOThkZTBmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcxNTM4Nzg2LCJleHAiOjE2NzIxNDM1ODYsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.Q6rAwYBqn-c8pReR0_oZf4zj0BJdE9lqoXRLcp7AwSZkZXJXqT2c3MoK6AaHi5YPjY6-rPtHF2cW40kq-x75cznuQjciASIo3OLKRn0fEOxWJ26gOzlr97tI-RR1O1hY4Q-Au02_hfxoowRLvO4U_4or8vNxMGoo7xZNMt3PV4t_IavjuD1Db8yB9Sr5qB69-5URhZA7EmOIHS6KNdgdkRxtqAn_QyJz9NTd_cy8OPUIU8knEw6vAelzem6CYMexlb-eHPbnWneIpmXegAIuHTnln4QkCZNFzQvZSjWdFRBt-J4HOE7aErKyDCLm1Ck2KB0bhEMBOby0eLPDKaUoPg",on={timeout:1e4,headers:{Authorization:`Bearer ${sn}`}},an={model:"text-davinci-003",prompt:"",max_tokens:2048,temperature:.9,top_p:1,frequency_penalty:0,presence_penalty:.6},cn=e=>rn.post("/chatApi/completions",{...an,prompt:e},on);const un={class:"chatWrapper bg"},ln={class:"chatborder"},fn={class:"inputArea"},dn=["onKeyup"],pn={__name:"Chat",setup(e){const t=()=>{We.push("/home")},n=se(""),r=se([]),s=async()=>{r.value.push({type:1,value:n.value});const i=await cn(n.value);n.value="",r.value.push({type:0,value:i.data.choices[0].text})};return(i,o)=>(W(),v("div",un,[C("div",{class:"back",onClick:t},"返回"),C("div",ln,[ke(" 快来问我些问题吧？ "),(W(!0),v(Ue,null,Ie(r.value,c=>(W(),v("div",{key:c.value,class:Ve({right:c.type==1,tagclass:!0})},ze(c.value),3))),128))]),C("div",fn,[Me(C("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=c=>n.value=c),onKeyup:Je(s,["enter"]),style:{outline:"none"}},null,40,dn),[[He,n.value]]),C("div",{onClick:s,class:"sendBTN"},"发送")])]))}},mn=je(pn,[["__scopeId","data-v-d6f69ed9"]]);export{mn as default};