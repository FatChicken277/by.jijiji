const al=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},cl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,g=o>>2,T=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,P=f&63;h||(P=64,a||(R=64)),r.push(e[g],e[T],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ja(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):cl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const T=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||T==null)throw new ul;const R=o<<2|l>>4;if(r.push(R),f!==64){const P=l<<4&240|f>>2;if(r.push(P),T!==64){const k=f<<6&192|T;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ll=function(n){const t=ja(n);return qa.encodeByteArray(t,!0)},ur=function(n){return ll(n).replace(/\./g,"")},hl=function(n){try{return qa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function dl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fl=()=>dl().__FIREBASE_DEFAULTS__,gl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ml=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hl(n[1]);return t&&JSON.parse(t)},$i=()=>{try{return al()||fl()||gl()||ml()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pl=n=>{var t,e;return(e=(t=$i())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},_l=n=>{const t=pl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},$a=()=>{var n;return(n=$i())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function El(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n},l="";return[ur(JSON.stringify(e)),ur(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Il(){var t;const n=(t=$i())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wl(){return!Il()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vl(){try{return typeof indexedDB=="object"}catch{return!1}}function Al(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="FirebaseError";class qe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Rl,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?Vl(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new qe(i,l,r)}}function Vl(n,t){return n.replace(Sl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Sl=/\{\$([^}]+)}/g;function lr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(Co(o)&&Co(a)){if(!lr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Co(n){return n!==null&&typeof n=="object"}/**
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
 */function xt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Ga(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pl(n){return(await fetch(n,{credentials:"include"})).ok}class Tn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class Cl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new yl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dl(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bl(n){return n===me?void 0:n}function Dl(n){return n.instantiationMode==="EAGER"}/**
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
 */class kl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Nl={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Ml=$.INFO,Ol={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},xl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Ol[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ha{constructor(t){this.name=t,this._logLevel=Ml,this._logHandler=xl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Ll=(n,t)=>t.some(e=>n instanceof e);let bo,Do;function Fl(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ul(){return Do||(Do=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,Ii=new WeakMap,Wa=new WeakMap,li=new WeakMap,zi=new WeakMap;function Bl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ka.set(e,n)}).catch(()=>{}),zi.set(t,n),t}function jl(n){if(Ii.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ii.set(n,t)}let wi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ii.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Wa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ql(n){wi=n(wi)}function $l(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hi(this),t,...e);return Wa.set(r,t.sort?t.sort():[t]),Yt(r)}:Ul().includes(n)?function(...t){return n.apply(hi(this),t),Yt(Ka.get(this))}:function(...t){return Yt(n.apply(hi(this),t))}}function zl(n){return typeof n=="function"?$l(n):(n instanceof IDBTransaction&&jl(n),Ll(n,Fl())?new Proxy(n,wi):n)}function Yt(n){if(n instanceof IDBRequest)return Bl(n);if(li.has(n))return li.get(n);const t=zl(n);return t!==n&&(li.set(n,t),zi.set(t,n)),t}const hi=n=>zi.get(n);function Gl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Hl=["get","getKey","getAll","getAllKeys","count"],Kl=["put","add","delete","clear"],di=new Map;function ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(di.get(t))return di.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Kl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&h.done]))[0]};return di.set(t,o),o}ql(n=>({...n,get:(t,e,r)=>ko(t,e)||n.get(t,e,r),has:(t,e)=>!!ko(t,e)||n.has(t,e)}));/**
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
 */class Wl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ql(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ql(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vi="@firebase/app",No="0.14.10";/**
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
 */const Ut=new Ha("@firebase/app"),Yl="@firebase/app-compat",Xl="@firebase/analytics-compat",Jl="@firebase/analytics",Zl="@firebase/app-check-compat",th="@firebase/app-check",eh="@firebase/auth",nh="@firebase/auth-compat",rh="@firebase/database",ih="@firebase/data-connect",sh="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",ch="@firebase/installations",uh="@firebase/installations-compat",lh="@firebase/messaging",hh="@firebase/messaging-compat",dh="@firebase/performance",fh="@firebase/performance-compat",gh="@firebase/remote-config",mh="@firebase/remote-config-compat",ph="@firebase/storage",_h="@firebase/storage-compat",yh="@firebase/firestore",Eh="@firebase/ai",Th="@firebase/firestore-compat",Ih="firebase",wh="12.11.0";/**
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
 */const Ai="[DEFAULT]",vh={[vi]:"fire-core",[Yl]:"fire-core-compat",[Jl]:"fire-analytics",[Xl]:"fire-analytics-compat",[th]:"fire-app-check",[Zl]:"fire-app-check-compat",[eh]:"fire-auth",[nh]:"fire-auth-compat",[rh]:"fire-rtdb",[ih]:"fire-data-connect",[sh]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[ch]:"fire-iid",[uh]:"fire-iid-compat",[lh]:"fire-fcm",[hh]:"fire-fcm-compat",[dh]:"fire-perf",[fh]:"fire-perf-compat",[gh]:"fire-rc",[mh]:"fire-rc-compat",[ph]:"fire-gcs",[_h]:"fire-gcs-compat",[yh]:"fire-fst",[Th]:"fire-fst-compat",[Eh]:"fire-vertex","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
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
 */const hr=new Map,Ah=new Map,Ri=new Map;function Mo(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function dr(n){const t=n.name;if(Ri.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;Ri.set(t,n);for(const e of hr.values())Mo(e,n);for(const e of Ah.values())Mo(e,n);return!0}function Rh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Vh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Sh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new za("app","Firebase",Sh);/**
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
 */class Ph{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ch=wh;function Qa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Ai,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Xt.create("bad-app-name",{appName:String(i)});if(e||(e=$a()),!e)throw Xt.create("no-options");const o=hr.get(i);if(o){if(lr(e,o.options)&&lr(r,o.config))return o;throw Xt.create("duplicate-app",{appName:i})}const a=new kl(i);for(const h of Ri.values())a.addComponent(h);const l=new Ph(e,r,a);return hr.set(i,l),l}function bh(n=Ai){const t=hr.get(n);if(!t&&n===Ai&&$a())return Qa();if(!t)throw Xt.create("no-app",{appName:n});return t}function De(n,t,e){let r=vh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}dr(new Tn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Dh="firebase-heartbeat-database",kh=1,In="firebase-heartbeat-store";let fi=null;function Ya(){return fi||(fi=Gl(Dh,kh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(In)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),fi}async function Nh(n){try{const e=(await Ya()).transaction(In),r=await e.objectStore(In).get(Xa(n));return await e.done,r}catch(t){if(t instanceof qe)Ut.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function Oo(n,t){try{const r=(await Ya()).transaction(In,"readwrite");await r.objectStore(In).put(t,Xa(n)),await r.done}catch(e){if(e instanceof qe)Ut.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(r.message)}}}function Xa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Mh=1024,Oh=30;class xh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Fh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=xo();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Oh){const a=Uh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xo(),{heartbeatsToSend:r,unsentEntries:i}=Lh(this._heartbeatsCache.heartbeats),o=ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}}function xo(){return new Date().toISOString().substring(0,10)}function Lh(n,t=Mh){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Lo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Lo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Fh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vl()?Al().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Nh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Lo(n){return ur(JSON.stringify({version:2,heartbeats:n})).length}function Uh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Bh(n){dr(new Tn("platform-logger",t=>new Wl(t),"PRIVATE")),dr(new Tn("heartbeat",t=>new xh(t),"PRIVATE")),De(vi,No,n),De(vi,No,"esm2020"),De("fire-js","")}Bh("");var jh="firebase",qh="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(jh,qh,"app");var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Ja;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.F=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(I,y,v){for(var p=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)p[Tt-2]=arguments[Tt];return m.prototype[y].apply(I,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);const I=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)I[y]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(y=0;y<16;++y)I[y]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],y=E.g[2];let v=E.g[3],p;p=m+(v^_&(y^v))+I[0]+3614090360&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(y^m&(_^y))+I[1]+3905402710&4294967295,v=m+(p<<12&4294967295|p>>>20),p=y+(_^v&(m^_))+I[2]+606105819&4294967295,y=v+(p<<17&4294967295|p>>>15),p=_+(m^y&(v^m))+I[3]+3250441966&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(v^_&(y^v))+I[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(y^m&(_^y))+I[5]+1200080426&4294967295,v=m+(p<<12&4294967295|p>>>20),p=y+(_^v&(m^_))+I[6]+2821735955&4294967295,y=v+(p<<17&4294967295|p>>>15),p=_+(m^y&(v^m))+I[7]+4249261313&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(v^_&(y^v))+I[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(y^m&(_^y))+I[9]+2336552879&4294967295,v=m+(p<<12&4294967295|p>>>20),p=y+(_^v&(m^_))+I[10]+4294925233&4294967295,y=v+(p<<17&4294967295|p>>>15),p=_+(m^y&(v^m))+I[11]+2304563134&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(v^_&(y^v))+I[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(y^m&(_^y))+I[13]+4254626195&4294967295,v=m+(p<<12&4294967295|p>>>20),p=y+(_^v&(m^_))+I[14]+2792965006&4294967295,y=v+(p<<17&4294967295|p>>>15),p=_+(m^y&(v^m))+I[15]+1236535329&4294967295,_=y+(p<<22&4294967295|p>>>10),p=m+(y^v&(_^y))+I[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^y&(m^_))+I[6]+3225465664&4294967295,v=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(v^m))+I[11]+643717713&4294967295,y=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(y^v))+I[0]+3921069994&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(y^v&(_^y))+I[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^y&(m^_))+I[10]+38016083&4294967295,v=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(v^m))+I[15]+3634488961&4294967295,y=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(y^v))+I[4]+3889429448&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(y^v&(_^y))+I[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^y&(m^_))+I[14]+3275163606&4294967295,v=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(v^m))+I[3]+4107603335&4294967295,y=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(y^v))+I[8]+1163531501&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(y^v&(_^y))+I[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^y&(m^_))+I[2]+4243563512&4294967295,v=m+(p<<9&4294967295|p>>>23),p=y+(m^_&(v^m))+I[7]+1735328473&4294967295,y=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(y^v))+I[12]+2368359562&4294967295,_=y+(p<<20&4294967295|p>>>12),p=m+(_^y^v)+I[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^y)+I[8]+2272392833&4294967295,v=m+(p<<11&4294967295|p>>>21),p=y+(v^m^_)+I[11]+1839030562&4294967295,y=v+(p<<16&4294967295|p>>>16),p=_+(y^v^m)+I[14]+4259657740&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(_^y^v)+I[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^y)+I[4]+1272893353&4294967295,v=m+(p<<11&4294967295|p>>>21),p=y+(v^m^_)+I[7]+4139469664&4294967295,y=v+(p<<16&4294967295|p>>>16),p=_+(y^v^m)+I[10]+3200236656&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(_^y^v)+I[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^y)+I[0]+3936430074&4294967295,v=m+(p<<11&4294967295|p>>>21),p=y+(v^m^_)+I[3]+3572445317&4294967295,y=v+(p<<16&4294967295|p>>>16),p=_+(y^v^m)+I[6]+76029189&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(_^y^v)+I[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^y)+I[12]+3873151461&4294967295,v=m+(p<<11&4294967295|p>>>21),p=y+(v^m^_)+I[15]+530742520&4294967295,y=v+(p<<16&4294967295|p>>>16),p=_+(y^v^m)+I[2]+3299628645&4294967295,_=y+(p<<23&4294967295|p>>>9),p=m+(y^(_|~v))+I[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~y))+I[7]+1126891415&4294967295,v=m+(p<<10&4294967295|p>>>22),p=y+(m^(v|~_))+I[14]+2878612391&4294967295,y=v+(p<<15&4294967295|p>>>17),p=_+(v^(y|~m))+I[5]+4237533241&4294967295,_=y+(p<<21&4294967295|p>>>11),p=m+(y^(_|~v))+I[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~y))+I[3]+2399980690&4294967295,v=m+(p<<10&4294967295|p>>>22),p=y+(m^(v|~_))+I[10]+4293915773&4294967295,y=v+(p<<15&4294967295|p>>>17),p=_+(v^(y|~m))+I[1]+2240044497&4294967295,_=y+(p<<21&4294967295|p>>>11),p=m+(y^(_|~v))+I[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~y))+I[15]+4264355552&4294967295,v=m+(p<<10&4294967295|p>>>22),p=y+(m^(v|~_))+I[6]+2734768916&4294967295,y=v+(p<<15&4294967295|p>>>17),p=_+(v^(y|~m))+I[13]+1309151649&4294967295,_=y+(p<<21&4294967295|p>>>11),p=m+(y^(_|~v))+I[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~y))+I[11]+3174756917&4294967295,v=m+(p<<10&4294967295|p>>>22),p=y+(m^(v|~_))+I[2]+718787259&4294967295,y=v+(p<<15&4294967295|p>>>17),p=_+(v^(y|~m))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+v&4294967295}r.prototype.v=function(E,m){m===void 0&&(m=E.length);const _=m-this.blockSize,I=this.C;let y=this.h,v=0;for(;v<m;){if(y==0)for(;v<=_;)i(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<m;)if(I[y++]=E.charCodeAt(v++),y==this.blockSize){i(this,I),y=0;break}}else for(;v<m;)if(I[y++]=E[v++],y==this.blockSize){i(this,I),y=0;break}}this.h=y,this.o+=m},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;m=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=m&255,m/=256;for(this.v(E),E=Array(16),m=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)E[m++]=this.g[_]>>>I&255;return E};function o(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;const _=[];let I=!0;for(let y=E.length-1;y>=0;y--){const v=E[y]|0;I&&v==m||(_[y]=v,I=!1)}this.g=_}var l={};function h(E){return-128<=E&&E<128?o(E,function(m){return new a([m|0],m<0?-1:0)}):new a([E|0],E<0?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return T;if(E<0)return N(f(-E));const m=[];let _=1;for(let I=0;E>=_;I++)m[I]=E/_|0,_*=4294967296;return new a(m,0)}function g(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return N(g(E.substring(1),m));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(m,8));let I=T;for(let v=0;v<E.length;v+=8){var y=Math.min(8,E.length-v);const p=parseInt(E.substring(v,v+y),m);y<8?(y=f(Math.pow(m,y)),I=I.j(y).add(f(p))):(I=I.j(_),I=I.add(f(p)))}return I}var T=h(0),R=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-N(this).m();let E=0,m=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);E+=(I>=0?I:4294967296+I)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(O(this))return"-"+N(this).toString(E);const m=f(Math.pow(E,6));var _=this;let I="";for(;;){const y=Vt(_,m).g;_=K(_,y.j(m));let v=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=y,k(_))return v+I;for(;v.length<6;)v="0"+v;I=v+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(let m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=K(this,E),O(E)?-1:k(E)?0:1};function N(E){const m=E.g.length,_=[];for(let I=0;I<m;I++)_[I]=~E.g[I];return new a(_,~E.h).add(R)}n.abs=function(){return O(this)?N(this):this},n.add=function(E){const m=Math.max(this.g.length,E.g.length),_=[];let I=0;for(let y=0;y<=m;y++){let v=I+(this.i(y)&65535)+(E.i(y)&65535),p=(v>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);I=p>>>16,v&=65535,p&=65535,_[y]=p<<16|v}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(E,m){return E.add(N(m))}n.j=function(E){if(k(this)||k(E))return T;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(this.l(P)<0&&E.l(P)<0)return f(this.m()*E.m());const m=this.g.length+E.g.length,_=[];for(var I=0;I<2*m;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let y=0;y<E.g.length;y++){const v=this.i(I)>>>16,p=this.i(I)&65535,Tt=E.i(y)>>>16,qt=E.i(y)&65535;_[2*I+2*y]+=p*qt,G(_,2*I+2*y),_[2*I+2*y+1]+=v*qt,G(_,2*I+2*y+1),_[2*I+2*y+1]+=p*Tt,G(_,2*I+2*y+1),_[2*I+2*y+2]+=v*Tt,G(_,2*I+2*y+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function G(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function J(E,m){this.g=E,this.h=m}function Vt(E,m){if(k(m))throw Error("division by zero");if(k(E))return new J(T,T);if(O(E))return m=Vt(N(E),m),new J(N(m.g),N(m.h));if(O(m))return m=Vt(E,N(m)),new J(N(m.g),m.h);if(E.g.length>30){if(O(E)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,I=m;I.l(E)<=0;)_=dt(_),I=dt(I);var y=ft(_,1),v=ft(I,1);for(I=ft(I,2),_=ft(_,2);!k(I);){var p=v.add(I);p.l(E)<=0&&(y=y.add(_),v=p),I=ft(I,1),_=ft(_,1)}return m=K(E,y.j(m)),new J(y,m)}for(y=T;E.l(m)>=0;){for(_=Math.max(1,Math.floor(E.m()/m.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),v=f(_),p=v.j(m);O(p)||p.l(E)>0;)_-=I,v=f(_),p=v.j(m);k(v)&&(v=R),y=y.add(v),E=K(E,p)}return new J(y,E)}n.B=function(E){return Vt(this,E).h},n.and=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)&E.i(I);return new a(_,this.h&E.h)},n.or=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)|E.i(I);return new a(_,this.h|E.h)},n.xor=function(E){const m=Math.max(this.g.length,E.g.length),_=[];for(let I=0;I<m;I++)_[I]=this.i(I)^E.i(I);return new a(_,this.h^E.h)};function dt(E){const m=E.g.length+1,_=[];for(let I=0;I<m;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(_,E.h)}function ft(E,m){const _=m>>5;m%=32;const I=E.g.length-_,y=[];for(let v=0;v<I;v++)y[v]=m>0?E.i(v+_)>>>m|E.i(v+_+1)<<32-m:E.i(v+_);return new a(y,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ja=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=g,Jt=a}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Za,fn,tc,rr,Vi,ec,nc,rc;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xn=="object"&&Xn];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var u=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var w=s[d];if(!(w in u))break t;u=u[w]}s=s[s.length-1],d=u[s],c=c(d),c!=d&&c!=null&&t(u,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var u=[],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&u.push([d,c[d]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function h(s,c,u){return s.call.apply(s.bind,arguments)}function f(s,c,u){return f=h,f.apply(null,arguments)}function g(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function T(s,c){function u(){}u.prototype=c.prototype,s.Z=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(d,w,A){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return c.prototype[w].apply(d,C)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const c=s.length;if(c>0){const u=Array(c);for(let d=0;d<c;d++)u[d]=s[d];return u}return[]}function k(s,c){for(let d=1;d<arguments.length;d++){const w=arguments[d];var u=typeof w;if(u=u!="object"?u:w?Array.isArray(w)?"array":u:"null",u=="array"||u=="object"&&typeof w.length=="number"){u=s.length||0;const A=w.length||0;s.length=u+A;for(let C=0;C<A;C++)s[u+C]=w[C]}else s.push(w)}}class O{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(s){a.setTimeout(()=>{throw s},0)}function K(){var s=E;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,u){const d=J.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var J=new O(()=>new Vt,s=>s.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,ft=!1,E=new G,m=()=>{const s=Promise.resolve(void 0);dt=()=>{s.then(_)}};function _(){for(var s;s=K();){try{s.h.call(s.g)}catch(u){N(u)}var c=J;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}ft=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,c),a.removeEventListener("test",u,c)}catch{}return s}();function p(s){return/^[\s\xa0]*$/.test(s)}function Tt(s,c){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}T(Tt,y),Tt.prototype.init=function(s,c){const u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Tt.Z.h.call(this)},Tt.prototype.h=function(){Tt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var qt="closure_listenable_"+(Math.random()*1e6|0),bu=0;function Du(s,c,u,d,w){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=w,this.key=++bu,this.da=this.fa=!1}function xn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Ln(s,c,u){for(const d in s)c.call(u,s[d],d,s)}function ku(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function Vs(s){const c={};for(const u in s)c[u]=s[u];return c}const Ss="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ps(s,c){let u,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(u in d)s[u]=d[u];for(let A=0;A<Ss.length;A++)u=Ss[A],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function Fn(s){this.src=s,this.g={},this.h=0}Fn.prototype.add=function(s,c,u,d,w){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const C=Br(s,c,d,w);return C>-1?(c=s[C],u||(c.fa=!1)):(c=new Du(c,this.src,A,!!d,w),c.fa=u,s.push(c)),c};function Ur(s,c){const u=c.type;if(u in s.g){var d=s.g[u],w=Array.prototype.indexOf.call(d,c,void 0),A;(A=w>=0)&&Array.prototype.splice.call(d,w,1),A&&(xn(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Br(s,c,u,d){for(let w=0;w<s.length;++w){const A=s[w];if(!A.da&&A.listener==c&&A.capture==!!u&&A.ha==d)return w}return-1}var jr="closure_lm_"+(Math.random()*1e6|0),qr={};function Cs(s,c,u,d,w){if(d&&d.once)return Ds(s,c,u,d,w);if(Array.isArray(c)){for(let A=0;A<c.length;A++)Cs(s,c[A],u,d,w);return null}return u=Hr(u),s&&s[qt]?s.J(c,u,l(d)?!!d.capture:!!d,w):bs(s,c,u,!1,d,w)}function bs(s,c,u,d,w,A){if(!c)throw Error("Invalid event type");const C=l(w)?!!w.capture:!!w;let U=zr(s);if(U||(s[jr]=U=new Fn(s)),u=U.add(c,u,d,C,A),u.proxy)return u;if(d=Nu(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)v||(w=C),w===void 0&&(w=!1),s.addEventListener(c.toString(),d,w);else if(s.attachEvent)s.attachEvent(Ns(c.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Nu(){function s(u){return c.call(s.src,s.listener,u)}const c=Mu;return s}function Ds(s,c,u,d,w){if(Array.isArray(c)){for(let A=0;A<c.length;A++)Ds(s,c[A],u,d,w);return null}return u=Hr(u),s&&s[qt]?s.K(c,u,l(d)?!!d.capture:!!d,w):bs(s,c,u,!0,d,w)}function ks(s,c,u,d,w){if(Array.isArray(c))for(var A=0;A<c.length;A++)ks(s,c[A],u,d,w);else d=l(d)?!!d.capture:!!d,u=Hr(u),s&&s[qt]?(s=s.i,A=String(c).toString(),A in s.g&&(c=s.g[A],u=Br(c,u,d,w),u>-1&&(xn(c[u]),Array.prototype.splice.call(c,u,1),c.length==0&&(delete s.g[A],s.h--)))):s&&(s=zr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Br(c,u,d,w)),(u=s>-1?c[s]:null)&&$r(u))}function $r(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[qt])Ur(c.i,s);else{var u=s.type,d=s.proxy;c.removeEventListener?c.removeEventListener(u,d,s.capture):c.detachEvent?c.detachEvent(Ns(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=zr(c))?(Ur(u,s),u.h==0&&(u.src=null,c[jr]=null)):xn(s)}}}function Ns(s){return s in qr?qr[s]:qr[s]="on"+s}function Mu(s,c){if(s.da)s=!0;else{c=new Tt(c,this);const u=s.listener,d=s.ha||s.src;s.fa&&$r(s),s=u.call(d,c)}return s}function zr(s){return s=s[jr],s instanceof Fn?s:null}var Gr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hr(s){return typeof s=="function"?s:(s[Gr]||(s[Gr]=function(c){return s.handleEvent(c)}),s[Gr])}function gt(){I.call(this),this.i=new Fn(this),this.M=this,this.G=null}T(gt,I),gt.prototype[qt]=!0,gt.prototype.removeEventListener=function(s,c,u,d){ks(this,s,c,u,d)};function yt(s,c){var u,d=s.G;if(d)for(u=[];d;d=d.G)u.push(d);if(s=s.M,d=c.type||c,typeof c=="string")c=new y(c,s);else if(c instanceof y)c.target=c.target||s;else{var w=c;c=new y(d,s),Ps(c,w)}w=!0;let A,C;if(u)for(C=u.length-1;C>=0;C--)A=c.g=u[C],w=Un(A,d,!0,c)&&w;if(A=c.g=s,w=Un(A,d,!0,c)&&w,w=Un(A,d,!1,c)&&w,u)for(C=0;C<u.length;C++)A=c.g=u[C],w=Un(A,d,!1,c)&&w}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const u=s.g[c];for(let d=0;d<u.length;d++)xn(u[d]);delete s.g[c],s.h--}}this.G=null},gt.prototype.J=function(s,c,u,d){return this.i.add(String(s),c,!1,u,d)},gt.prototype.K=function(s,c,u,d){return this.i.add(String(s),c,!0,u,d)};function Un(s,c,u,d){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let A=0;A<c.length;++A){const C=c[A];if(C&&!C.da&&C.capture==u){const U=C.listener,it=C.ha||C.src;C.fa&&Ur(s.i,C),w=U.call(it,d)!==!1&&w}}return w&&!d.defaultPrevented}function Ou(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function Ms(s){s.g=Ou(()=>{s.g=null,s.i&&(s.i=!1,Ms(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class xu extends I{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ms(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(s){I.call(this),this.h=s,this.g={}}T(We,I);var Os=[];function xs(s){Ln(s.g,function(c,u){this.g.hasOwnProperty(u)&&$r(c)},s),s.g={}}We.prototype.N=function(){We.Z.N.call(this),xs(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=a.JSON.stringify,Lu=a.JSON.parse,Fu=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Ls(){}function Fs(){}var Qe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wr(){y.call(this,"d")}T(Wr,y);function Qr(){y.call(this,"c")}T(Qr,y);var ue={},Us=null;function Bn(){return Us=Us||new gt}ue.Ia="serverreachability";function Bs(s){y.call(this,ue.Ia,s)}T(Bs,y);function Ye(s){const c=Bn();yt(c,new Bs(c))}ue.STAT_EVENT="statevent";function js(s,c){y.call(this,ue.STAT_EVENT,s),this.stat=c}T(js,y);function Et(s){const c=Bn();yt(c,new js(c,s))}ue.Ja="timingevent";function qs(s,c){y.call(this,ue.Ja,s),this.size=c}T(qs,y);function Xe(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function Je(){this.g=!0}Je.prototype.ua=function(){this.g=!1};function Uu(s,c,u,d,w,A){s.info(function(){if(s.g)if(A){var C="",U=A.split("&");for(let H=0;H<U.length;H++){var it=U[H].split("=");if(it.length>1){const at=it[0];it=it[1];const Dt=at.split("_");C=Dt.length>=2&&Dt[1]=="type"?C+(at+"="+it+"&"):C+(at+"=redacted&")}}}else C=null;else C=A;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+c+`
`+u+`
`+C})}function Bu(s,c,u,d,w,A,C){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+c+`
`+u+`
`+A+" "+C})}function Ae(s,c,u,d){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+qu(s,u)+(d?" "+d:"")})}function ju(s,c){s.info(function(){return"TIMEOUT: "+c})}Je.prototype.info=function(){};function qu(s,c){if(!s.g)return c;if(!c)return null;try{const A=JSON.parse(c);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var u=A[s];if(!(u.length<2)){var d=u[1];if(Array.isArray(d)&&!(d.length<1)){var w=d[0];if(w!="noop"&&w!="stop"&&w!="close")for(let C=1;C<d.length;C++)d[C]=""}}}}return Kr(A)}catch{return c}}var jn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$s={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zs;function Yr(){}T(Yr,Ls),Yr.prototype.g=function(){return new XMLHttpRequest},zs=new Yr;function Ze(s){return encodeURIComponent(String(s))}function $u(s){var c=1;s=s.split(":");const u=[];for(;c>0&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function $t(s,c,u,d){this.j=s,this.i=c,this.l=u,this.S=d||1,this.V=new We(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gs}function Gs(){this.i=null,this.g="",this.h=!1}var Hs={},Xr={};function Jr(s,c,u){s.M=1,s.A=$n(bt(c)),s.u=u,s.R=!0,Ks(s,null)}function Ks(s,c){s.F=Date.now(),qn(s),s.B=bt(s.A);var u=s.B,d=s.S;Array.isArray(d)||(d=[String(d)]),oo(u.i,"t",d),s.C=0,u=s.j.L,s.h=new Gs,s.g=Ro(s.j,u?c:null,!s.u),s.P>0&&(s.O=new xu(f(s.Y,s,s.g),s.P)),c=s.V,u=s.g,d=s.ba;var w="readystatechange";Array.isArray(w)||(w&&(Os[0]=w.toString()),w=Os);for(let A=0;A<w.length;A++){const C=Cs(u,w[A],d||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.J?Vs(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),Ye(),Uu(s.i,s.v,s.B,s.l,s.S,s.u)}$t.prototype.ba=function(s){s=s.target;const c=this.O;c&&Ht(s)==3?c.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const U=Ht(this.g),it=this.g.ya(),H=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||go(this.g)))){this.K||U!=4||it==7||(it==8||H<=0?Ye(3):Ye(2)),Zr(this);var c=this.g.ca();this.X=c;var u=zu(this);if(this.o=c==200,Bu(this.i,this.v,this.B,this.l,this.S,U,c),this.o){if(this.U&&!this.L){e:{if(this.g){var d,w=this.g;if((d=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(d)){var A=d;break e}}A=null}if(s=A)Ae(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ti(this,s);else{this.o=!1,this.m=3,Et(12),le(this),tn(this);break t}}if(this.R){s=!0;let at;for(;!this.K&&this.C<u.length;)if(at=Gu(this,u),at==Xr){U==4&&(this.m=4,Et(14),s=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Hs){this.m=4,Et(15),Ae(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else Ae(this.i,this.l,at,null),ti(this,at);if(Ws(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||u.length!=0||this.h.h||(this.m=1,Et(16),s=!1),this.o=this.o&&s,!s)Ae(this.i,this.l,u,"[Invalid Chunked Response]"),le(this),tn(this);else if(u.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),ci(C),C.P=!0,Et(11))}}else Ae(this.i,this.l,u,null),ti(this,u);U==4&&le(this),this.o&&!this.K&&(U==4?Io(this.j,this):(this.o=!1,qn(this)))}else sl(this.g),c==400&&u.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),le(this),tn(this)}}}catch{}finally{}};function zu(s){if(!Ws(s))return s.g.la();const c=go(s.g);if(c==="")return"";let u="";const d=c.length,w=Ht(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return le(s),tn(s),"";s.h.i=new a.TextDecoder}for(let A=0;A<d;A++)s.h.h=!0,u+=s.h.i.decode(c[A],{stream:!(w&&A==d-1)});return c.length=0,s.h.g+=u,s.C=0,s.h.g}function Ws(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Gu(s,c){var u=s.C,d=c.indexOf(`
`,u);return d==-1?Xr:(u=Number(c.substring(u,d)),isNaN(u)?Hs:(d+=1,d+u>c.length?Xr:(c=c.slice(d,d+u),s.C=d+u,c)))}$t.prototype.cancel=function(){this.K=!0,le(this)};function qn(s){s.T=Date.now()+s.H,Qs(s,s.H)}function Qs(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Xe(f(s.aa,s),c)}function Zr(s){s.D&&(a.clearTimeout(s.D),s.D=null)}$t.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ju(this.i,this.B),this.M!=2&&(Ye(),Et(17)),le(this),this.m=2,tn(this)):Qs(this,this.T-s)};function tn(s){s.j.I==0||s.K||Io(s.j,s)}function le(s){Zr(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,xs(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function ti(s,c){try{var u=s.j;if(u.I!=0&&(u.g==s||ei(u.h,s))){if(!s.L&&ei(u.h,s)&&u.I==3){try{var d=u.Ba.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)Wn(u),Hn(u);else break t;ai(u),Et(18)}}else u.xa=w[1],0<u.xa-u.K&&w[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=Xe(f(u.Va,u),6e3));Js(u.h)<=1&&u.ta&&(u.ta=void 0)}else de(u,11)}else if((s.L||u.g==s)&&Wn(u),!p(c))for(w=u.Ba.g.parse(c),c=0;c<w.length;c++){let H=w[c];const at=H[0];if(!(at<=u.K))if(u.K=at,H=H[1],u.I==2)if(H[0]=="c"){u.M=H[1],u.ba=H[2];const Dt=H[3];Dt!=null&&(u.ka=Dt,u.j.info("VER="+u.ka));const fe=H[4];fe!=null&&(u.za=fe,u.j.info("SVER="+u.za));const Kt=H[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(d=1.5*Kt,u.O=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Wt=s.g;if(Wt){const Yn=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yn){var A=d.h;A.g||Yn.indexOf("spdy")==-1&&Yn.indexOf("quic")==-1&&Yn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ni(A,A.h),A.h=null))}if(d.G){const ui=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;ui&&(d.wa=ui,Q(d.J,d.G,ui))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),d=u;var C=s;if(d.na=Ao(d,d.L?d.ba:null,d.W),C.L){Zs(d.h,C);var U=C,it=d.O;it&&(U.H=it),U.D&&(Zr(U),qn(U)),d.g=C}else Eo(d);u.i.length>0&&Kn(u)}else H[0]!="stop"&&H[0]!="close"||de(u,7);else u.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?de(u,7):oi(u):H[0]!="noop"&&u.l&&u.l.qa(H),u.A=0)}}Ye(4)}catch{}}var Hu=class{constructor(s,c){this.g=s,this.map=c}};function Ys(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Js(s){return s.h?1:s.g?s.g.size:0}function ei(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function ni(s,c){s.g?s.g.add(c):s.h=c}function Zs(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ys.prototype.cancel=function(){if(this.i=to(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function to(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.G);return c}return P(s.i)}var eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(s,c){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const d=s[u].indexOf("=");let w,A=null;d>=0?(w=s[u].substring(0,d),A=s[u].substring(d+1)):w=s[u],c(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function zt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof zt?(this.l=s.l,en(this,s.j),this.o=s.o,this.g=s.g,nn(this,s.u),this.h=s.h,ri(this,ao(s.i)),this.m=s.m):s&&(c=String(s).match(eo))?(this.l=!1,en(this,c[1]||"",!0),this.o=rn(c[2]||""),this.g=rn(c[3]||"",!0),nn(this,c[4]),this.h=rn(c[5]||"",!0),ri(this,c[6]||"",!0),this.m=rn(c[7]||"")):(this.l=!1,this.i=new on(null,this.l))}zt.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(sn(c,no,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(sn(c,no,!0),"@"),s.push(Ze(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(sn(u,u.charAt(0)=="/"?Yu:Qu,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",sn(u,Ju)),s.join("")},zt.prototype.resolve=function(s){const c=bt(this);let u=!!s.j;u?en(c,s.j):u=!!s.o,u?c.o=s.o:u=!!s.g,u?c.g=s.g:u=s.u!=null;var d=s.h;if(u)nn(c,s.u);else if(u=!!s.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var w=c.h.lastIndexOf("/");w!=-1&&(d=c.h.slice(0,w+1)+d)}if(w=d,w==".."||w==".")d="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){d=w.lastIndexOf("/",0)==0,w=w.split("/");const A=[];for(let C=0;C<w.length;){const U=w[C++];U=="."?d&&C==w.length&&A.push(""):U==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),d&&C==w.length&&A.push("")):(A.push(U),d=!0)}d=A.join("/")}else d=w}return u?c.h=d:u=s.i.toString()!=="",u?ri(c,ao(s.i)):u=!!s.m,u&&(c.m=s.m),c};function bt(s){return new zt(s)}function en(s,c,u){s.j=u?rn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function nn(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function ri(s,c,u){c instanceof on?(s.i=c,Zu(s.i,s.l)):(u||(c=sn(c,Xu)),s.i=new on(c,s.l))}function Q(s,c,u){s.i.set(c,u)}function $n(s){return Q(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function rn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function sn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,Wu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Wu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var no=/[#\/\?@]/g,Qu=/[#\?:]/g,Yu=/[#\?]/g,Xu=/[#\?@]/g,Ju=/#/g;function on(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function he(s){s.g||(s.g=new Map,s.h=0,s.i&&Ku(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=on.prototype,n.add=function(s,c){he(this),this.i=null,s=Re(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function ro(s,c){he(s),c=Re(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function io(s,c){return he(s),c=Re(s,c),s.g.has(c)}n.forEach=function(s,c){he(this),this.g.forEach(function(u,d){u.forEach(function(w){s.call(c,w,d,this)},this)},this)};function so(s,c){he(s);let u=[];if(typeof c=="string")io(s,c)&&(u=u.concat(s.g.get(Re(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)u=u.concat(s[c]);return u}n.set=function(s,c){return he(this),this.i=null,s=Re(this,s),io(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=so(this,s),s.length>0?String(s[0]):c):c};function oo(s,c,u){ro(s,c),u.length>0&&(s.i=null,s.g.set(Re(s,c),P(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let d=0;d<c.length;d++){var u=c[d];const w=Ze(u);u=so(this,u);for(let A=0;A<u.length;A++){let C=w;u[A]!==""&&(C+="="+Ze(u[A])),s.push(C)}}return this.i=s.join("&")};function ao(s){const c=new on;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function Re(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Zu(s,c){c&&!s.j&&(he(s),s.i=null,s.g.forEach(function(u,d){const w=d.toLowerCase();d!=w&&(ro(this,d),oo(this,w,u))},s)),s.j=c}function tl(s,c){const u=new Je;if(a.Image){const d=new Image;d.onload=g(Gt,u,"TestLoadImage: loaded",!0,c,d),d.onerror=g(Gt,u,"TestLoadImage: error",!1,c,d),d.onabort=g(Gt,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=g(Gt,u,"TestLoadImage: timeout",!1,c,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else c(!1)}function el(s,c){const u=new Je,d=new AbortController,w=setTimeout(()=>{d.abort(),Gt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(w),A.ok?Gt(u,"TestPingServer: ok",!0,c):Gt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),Gt(u,"TestPingServer: error",!1,c)})}function Gt(s,c,u,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(u)}catch{}}function nl(){this.g=new Fu}function ii(s){this.i=s.Sb||null,this.h=s.ab||!1}T(ii,Ls),ii.prototype.g=function(){return new zn(this.i,this.h)};function zn(s,c){gt.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(zn,gt),n=zn.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,cn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,an(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,cn(this)),this.g&&(this.readyState=3,cn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;co(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function co(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?an(this):cn(this),this.readyState==3&&co(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,an(this))},n.Na=function(s){this.g&&(this.response=s,an(this))},n.ga=function(){this.g&&an(this)};function an(s){s.readyState=4,s.l=null,s.j=null,s.B=null,cn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function cn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function uo(s){let c="";return Ln(s,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function si(s,c,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=uo(u),typeof s=="string"?u!=null&&Ze(u):Q(s,c,u))}function Z(s){gt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(Z,gt);var rl=/^https?$/i,il=["POST","PUT"];n=Z.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zs.g(),this.g.onreadystatechange=R(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){lo(this,A);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)u.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())u.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),w=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(il,c,void 0)>=0)||d||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of u)this.g.setRequestHeader(A,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){lo(this,A)}};function lo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,ho(s),Gn(s)}function ho(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,yt(this,"complete"),yt(this,"abort"),Gn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gn(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?fo(this):this.Xa())},n.Xa=function(){fo(this)};function fo(s){if(s.h&&typeof o<"u"){if(s.v&&Ht(s)==4)setTimeout(s.Ca.bind(s),0);else if(yt(s,"readystatechange"),Ht(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var d;if(d=A===0){let C=String(s.D).match(eo)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),d=!rl.test(C?C.toLowerCase():"")}u=d}if(u)yt(s,"complete"),yt(s,"success");else{s.o=6;try{var w=Ht(s)>2?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.ca()+"]",ho(s)}}finally{Gn(s)}}}}function Gn(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,c||yt(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ht(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ht(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Lu(c)}};function go(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function sl(s){const c={};s=(s.g&&Ht(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(p(s[d]))continue;var u=$u(s[d]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=c[w]||[];c[w]=A,A.push(u)}ku(c,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function un(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function mo(s){this.za=0,this.i=[],this.j=new Je,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=un("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=un("baseRetryDelayMs",5e3,s),this.Za=un("retryDelaySeedMs",1e4,s),this.Ta=un("forwardChannelMaxRetries",2,s),this.va=un("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Ys(s&&s.concurrentRequestLimit),this.Ba=new nl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mo.prototype,n.ka=8,n.I=1,n.connect=function(s,c,u,d){Et(0),this.W=s,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.J=Ao(this,null,this.W),Kn(this)};function oi(s){if(po(s),s.I==3){var c=s.V++,u=bt(s.J);if(Q(u,"SID",s.M),Q(u,"RID",c),Q(u,"TYPE","terminate"),ln(s,u),c=new $t(s,s.j,c),c.M=2,c.A=$n(bt(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=c.A,u=!0),u||(c.g=Ro(c.j,null),c.g.ea(c.A)),c.F=Date.now(),qn(c)}vo(s)}function Hn(s){s.g&&(ci(s),s.g.cancel(),s.g=null)}function po(s){Hn(s),s.v&&(a.clearTimeout(s.v),s.v=null),Wn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Kn(s){if(!Xs(s.h)&&!s.m){s.m=!0;var c=s.Ea;dt||m(),ft||(dt(),ft=!0),E.add(c,s),s.D=0}}function ol(s,c){return Js(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Xe(f(s.Ea,s,c),wo(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const w=new $t(this,this.j,s);let A=this.o;if(this.U&&(A?(A=Vs(A),Ps(A,this.U)):A=this.U),this.u!==null||this.R||(w.J=A,A=null),this.S)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,c>4096){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=yo(this,w,c),u=bt(this.J),Q(u,"RID",s),Q(u,"CVER",22),this.G&&Q(u,"X-HTTP-Session-Id",this.G),ln(this,u),A&&(this.R?c="headers="+Ze(uo(A))+"&"+c:this.u&&si(u,this.u,A)),ni(this.h,w),this.Ra&&Q(u,"TYPE","init"),this.S?(Q(u,"$req",c),Q(u,"SID","null"),w.U=!0,Jr(w,u,null)):Jr(w,u,c),this.I=2}}else this.I==3&&(s?_o(this,s):this.i.length==0||Xs(this.h)||_o(this))};function _o(s,c){var u;c?u=c.l:u=s.V++;const d=bt(s.J);Q(d,"SID",s.M),Q(d,"RID",u),Q(d,"AID",s.K),ln(s,d),s.u&&s.o&&si(d,s.u,s.o),u=new $t(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),c&&(s.i=c.G.concat(s.i)),c=yo(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),ni(s.h,u),Jr(u,d,c)}function ln(s,c){s.H&&Ln(s.H,function(u,d){Q(c,d,u)}),s.l&&Ln({},function(u,d){Q(c,d,u)})}function yo(s,c,u){u=Math.min(s.i.length,u);const d=s.l?f(s.l.Ka,s.l,s):null;t:{var w=s.i;let U=-1;for(;;){const it=["count="+u];U==-1?u>0?(U=w[0].g,it.push("ofs="+U)):U=0:it.push("ofs="+U);let H=!0;for(let at=0;at<u;at++){var A=w[at].g;const Dt=w[at].map;if(A-=U,A<0)U=Math.max(0,w[at].g-100),H=!1;else try{A="req"+A+"_"||"";try{var C=Dt instanceof Map?Dt:Object.entries(Dt);for(const[fe,Kt]of C){let Wt=Kt;l(Kt)&&(Wt=Kr(Kt)),it.push(A+fe+"="+encodeURIComponent(Wt))}}catch(fe){throw it.push(A+"type="+encodeURIComponent("_badmap")),fe}}catch{d&&d(Dt)}}if(H){C=it.join("&");break t}}C=void 0}return s=s.i.splice(0,u),c.G=s,C}function Eo(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;dt||m(),ft||(dt(),ft=!0),E.add(c,s),s.A=0}}function ai(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Xe(f(s.Da,s),wo(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,To(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Xe(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Hn(this),To(this))};function ci(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function To(s){s.g=new $t(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=bt(s.na);Q(c,"RID","rpc"),Q(c,"SID",s.M),Q(c,"AID",s.K),Q(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&Q(c,"TO",s.ia),Q(c,"TYPE","xmlhttp"),ln(s,c),s.u&&s.o&&si(c,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=$n(bt(c)),u.u=null,u.R=!0,Ks(u,s)}n.Va=function(){this.C!=null&&(this.C=null,Hn(this),ai(this),Et(19))};function Wn(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Io(s,c){var u=null;if(s.g==c){Wn(s),ci(s),s.g=null;var d=2}else if(ei(s.h,c))u=c.G,Zs(s.h,c),d=1;else return;if(s.I!=0){if(c.o)if(d==1){u=c.u?c.u.length:0,c=Date.now()-c.F;var w=s.D;d=Bn(),yt(d,new qs(d,u)),Kn(s)}else Eo(s);else if(w=c.m,w==3||w==0&&c.X>0||!(d==1&&ol(s,c)||d==2&&ai(s)))switch(u&&u.length>0&&(c=s.h,c.i=c.i.concat(u)),w){case 1:de(s,5);break;case 4:de(s,10);break;case 3:de(s,6);break;default:de(s,2)}}}function wo(s,c){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*c}function de(s,c){if(s.j.info("Error code "+c),c==2){var u=f(s.bb,s),d=s.Ua;const w=!d;d=new zt(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||en(d,"https"),$n(d),w?tl(d.toString(),u):el(d.toString(),u)}else Et(2);s.I=0,s.l&&s.l.pa(c),vo(s),po(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function vo(s){if(s.I=0,s.ja=[],s.l){const c=to(s.h);(c.length!=0||s.i.length!=0)&&(k(s.ja,c),k(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function Ao(s,c,u){var d=u instanceof zt?bt(u):new zt(u);if(d.g!="")c&&(d.g=c+"."+d.g),nn(d,d.u);else{var w=a.location;d=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const A=new zt(null);d&&en(A,d),c&&(A.g=c),w&&nn(A,w),u&&(A.h=u),d=A}return u=s.G,c=s.wa,u&&c&&Q(d,u,c),Q(d,"VER",s.ka),ln(s,d),d}function Ro(s,c,u){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new Z(new ii({ab:u})):new Z(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}n=Vo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qn(){}Qn.prototype.g=function(s,c){return new vt(s,c)};function vt(s,c){gt.call(this),this.g=new mo(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!p(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Ve(this)}T(vt,gt),vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){oi(this.g)},vt.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=Kr(s),s=u);c.i.push(new Hu(c.Ya++,s)),c.I==3&&Kn(c)},vt.prototype.N=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,vt.Z.N.call(this)};function So(s){Wr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const u in c){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}T(So,Wr);function Po(){Qr.call(this),this.status=1}T(Po,Qr);function Ve(s){this.g=s}T(Ve,Vo),Ve.prototype.ra=function(){yt(this.g,"a")},Ve.prototype.qa=function(s){yt(this.g,new So(s))},Ve.prototype.pa=function(s){yt(this.g,new Po)},Ve.prototype.oa=function(){yt(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,rc=function(){return new Qn},nc=function(){return Bn()},ec=ue,Vi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jn.NO_ERROR=0,jn.TIMEOUT=8,jn.HTTP_ERROR=6,rr=jn,$s.COMPLETE="complete",tc=$s,Fs.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",gt.prototype.listen=gt.prototype.J,fn=Fs,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa,Za=Z}).apply(typeof Xn<"u"?Xn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e="12.11.0";function $h(n){$e=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _e=new Ha("@firebase/firestore");function Se(){return _e.logLevel}function D(n,...t){if(_e.logLevel<=$.DEBUG){const e=t.map(Gi);_e.debug(`Firestore (${$e}): ${n}`,...e)}}function Bt(n,...t){if(_e.logLevel<=$.ERROR){const e=t.map(Gi);_e.error(`Firestore (${$e}): ${n}`,...e)}}function ye(n,...t){if(_e.logLevel<=$.WARN){const e=t.map(Gi);_e.warn(`Firestore (${$e}): ${n}`,...e)}}function Gi(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ic(n,r,e)}function ic(n,t,e){let r=`FIRESTORE (${$e}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Bt(r),new Error(r)}function z(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||ic(t,i,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends qe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Gh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Hh{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string",31837,{l:r}),new sc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Kh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Wh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Kh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){z(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Uo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Uo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Yh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Si(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return gi(i)===gi(o)?B(i,o):gi(i)?1:-1}return B(n.length,t.length)}const Xh=55296,Jh=57343;function gi(n){const t=n.charCodeAt(0);return t>=Xh&&t<=Jh}function xe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="__name__";class kt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=kt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=kt.isNumericId(t),i=kt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?kt.extractNumericId(t).compare(kt.extractNumericId(e)):Si(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jt.fromString(t.substring(4,t.length-2))}}class W extends kt{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new b(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends kt{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return Zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bo}static keyField(){return new lt([Bo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new b(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new b(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new b(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new b(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,t,e){if(!e)throw new b(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function td(n,t,e,r){if(t===!0&&r===!0)throw new b(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function jo(n){if(!M.isDocumentKey(n))throw new b(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qo(n){if(M.isDocumentKey(n))throw new b(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ac(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Ee(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new b(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(n);throw new b(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function rt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Cn(n,t){if(!ac(n))throw new b(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new b(V.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=-62135596800,zo=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*zo);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<$o)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zo}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Cn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-$o;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:rt("string",Y._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Y(0,0))}static max(){return new L(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wn=-1;function ed(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new ee(i,M.empty(),t)}function nd(n){return new ee(n.readTime,n.key,wn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(L.min(),M.empty(),wn)}static max(){return new ee(L.max(),M.empty(),wn)}}function rd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==id)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(i=>i?S.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{a[f]=g,++l,l===o&&r(a)},g=>i(g))}})}static doWhile(t,e){return new S((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function od(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ge(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Rr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Rr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=-1;function Vr(n){return n==null}function fr(n){return n===0&&1/n==-1/0}function ad(n){return typeof n=="number"&&Number.isInteger(n)&&!fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="";function cd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Go(t)),t=ud(n.get(e),t);return Go(t)}function ud(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case cc:e+="";break;default:e+=o}}return e}function Go(n){return n+cc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function uc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jn(this.root,t,this.comparator,!0)}}class Jn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ko(this.data.getIterator())}getIteratorFrom(t){return new Ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Ko{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new At([])}unionWith(t){let e=new ot(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return xe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class lc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new lc("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const ld=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(z(!!n,39018),typeof n=="string"){let t=0;const e=ld.exec(n);if(z(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="server_timestamp",dc="__type__",fc="__previous_value__",gc="__local_write_time__";function Wi(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[dc])==null?void 0:r.stringValue)===hc}function Sr(n){const t=n.mapValue.fields[fc];return Wi(t)?Sr(t):t}function vn(n){const t=ne(n.mapValue.fields[gc].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e,r,i,o,a,l,h,f,g,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=g,this.apiKey=T}}const gr="(default)";class An{constructor(t,e){this.projectId=t,this.database=e||gr}static empty(){return new An("","")}get isDefaultDatabase(){return this.database===gr}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}function dd(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new b(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="__type__",pc="__max__",Zn={mapValue:{fields:{__type__:{stringValue:pc}}}},_c="__vector__",mr="value";function ie(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:gd(n)?9007199254740991:fd(n)?10:11:x(28295,{value:n})}function Lt(n,t){if(n===t)return!0;const e=ie(n);if(e!==ie(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vn(n).isEqual(vn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ne(i.timestampValue),l=ne(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return re(i.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),l=tt(o.doubleValue);return a===l?fr(a)===fr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return xe(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ho(a)!==Ho(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Lt(a[h],l[h])))return!1;return!0}(n,t);default:return x(52216,{left:n})}}function Rn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Le(n,t){if(n===t)return 0;const e=ie(n),r=ie(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Wo(n.timestampValue,t.timestampValue);case 4:return Wo(vn(n),vn(t));case 5:return Si(n.stringValue,t.stringValue);case 6:return function(o,a){const l=re(o),h=re(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const g=B(l[f],h[f]);if(g!==0)return g}return B(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=B(tt(o.latitude),tt(a.latitude));return l!==0?l:B(tt(o.longitude),tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Qo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var R,P,k,O;const l=o.fields||{},h=a.fields||{},f=(R=l[mr])==null?void 0:R.arrayValue,g=(P=h[mr])==null?void 0:P.arrayValue,T=B(((k=f==null?void 0:f.values)==null?void 0:k.length)||0,((O=g==null?void 0:g.values)==null?void 0:O.length)||0);return T!==0?T:Qo(f,g)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Zn.mapValue&&a===Zn.mapValue)return 0;if(o===Zn.mapValue)return 1;if(a===Zn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let T=0;T<h.length&&T<g.length;++T){const R=Si(h[T],g[T]);if(R!==0)return R;const P=Le(l[h[T]],f[g[T]]);if(P!==0)return P}return B(h.length,g.length)}(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function Wo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ne(n),r=ne(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function Qo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Le(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Fe(n){return Pi(n)}function Pi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Pi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Pi(e.fields[a])}`;return i+"}"}(n.mapValue):x(61005,{value:n})}function ir(n){switch(ie(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Sr(n);return t?16+ir(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+ir(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ae(r.fields,(o,a)=>{i+=o.length+ir(a)}),i}(n.mapValue);default:throw x(13486,{value:n})}}function Yo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ci(n){return!!n&&"integerValue"in n}function Qi(n){return!!n&&"arrayValue"in n}function Xo(n){return!!n&&"nullValue"in n}function Jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sr(n){return!!n&&"mapValue"in n}function fd(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[mc])==null?void 0:r.stringValue)===_c}function pn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return ae(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=pn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=pn(n.arrayValue.values[e]);return t}return{...n}}function gd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(e)}setAll(t){let e=lt.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=pn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];sr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ae(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new wt(pn(this.value))}}function yc(n){const t=[];return ae(n.fields,(e,r)=>{const i=new lt([e]);if(sr(r)){const o=yc(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pr{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Le(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Vn{constructor(t,e="asc"){this.field=t,this.dir=e}}function md(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ec{}class nt extends Ec{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _d(t,e,r):e==="array-contains"?new Td(t,r):e==="in"?new Id(t,r):e==="not-in"?new wd(t,r):e==="array-contains-any"?new vd(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yd(t,r):new Ed(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Le(e,this.value)):e!==null&&ie(this.value)===ie(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Ec{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ct(t,e)}matches(t){return Tc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Tc(n){return n.op==="and"}function Ic(n){return pd(n)&&Tc(n)}function pd(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function bi(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Fe(n.value);if(Ic(n))return n.filters.map(t=>bi(t)).join(",");{const t=n.filters.map(e=>bi(e)).join(",");return`${n.op}(${t})`}}function wc(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(n,t):n instanceof Ct?function(r,i){return i instanceof Ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&wc(a,i.filters[l]),!0):!1}(n,t):void x(19439)}function vc(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Fe(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(vc).join(" ,")+"}"}(n):"Filter"}class _d extends nt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class yd extends nt{constructor(t,e){super(t,"in",e),this.keys=Ac("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ed extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Ac("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ac(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Td extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qi(e)&&Rn(e.arrayValue,this.value)}}class Id extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class wd extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Rn(this.value.arrayValue,e)}}class vd extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Rn(this.value.arrayValue,r))}}/**
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
 */class Ad{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function ea(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Ad(n,t,e,r,i,o,a)}function Yi(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>bi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Fe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Fe(r)).join(",")),t.Te=e}return t.Te}function Xi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!md(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!wc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ta(n.startAt,t.startAt)&&ta(n.endAt,t.endAt)}function Di(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Rd(n,t,e,r,i,o,a,l){return new He(n,t,e,r,i,o,a,l)}function Rc(n){return new He(n)}function na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vd(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Vc(n){return n.collectionGroup!==null}function _n(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ot(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Vn(o,r))}),e.has(lt.keyField().canonicalString())||t.Ee.push(new Vn(lt.keyField(),r))}return t.Ee}function Nt(n){const t=F(n);return t.Ie||(t.Ie=Sd(t,_n(n))),t.Ie}function Sd(n,t){if(n.limitType==="F")return ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Vn(i.field,o)});const e=n.endAt?new pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pr(n.startAt.position,n.startAt.inclusive):null;return ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ki(n,t){const e=n.filters.concat([t]);return new He(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Pd(n,t){const e=n.explicitOrderBy.concat([t]);return new He(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ni(n,t,e){return new He(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return Xi(Nt(n),Nt(t))&&n.limitType===t.limitType}function Sc(n){return`${Yi(Nt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>vc(i)).join(", ")}]`),Vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Fe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Fe(i)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function Cr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of _n(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,h){const f=Zo(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,_n(r),i)||r.endAt&&!function(a,l,h){const f=Zo(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,_n(r),i))}(n,t)}function Cd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pc(n){return(t,e)=>{let r=!1;for(const i of _n(n)){const o=bd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function bd(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Le(h,f):x(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ae(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return uc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new X(M.comparator);function jt(){return Dd}const Cc=new X(M.comparator);function gn(...n){let t=Cc;for(const e of n)t=t.insert(e.key,e);return t}function bc(n){let t=Cc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pe(){return yn()}function Dc(){return yn()}function yn(){return new Ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const kd=new X(M.comparator),Nd=new ot(M.comparator);function j(...n){let t=Nd;for(const e of n)t=t.add(e);return t}const Md=new ot(B);function Od(){return Md}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function kc(n){return{integerValue:""+n}}function xd(n,t){return ad(t)?kc(t):Ji(n,t)}/**
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
 */class br{constructor(){this._=void 0}}function Ld(n,t,e){return n instanceof _r?function(i,o){const a={fields:{[dc]:{stringValue:hc},[gc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Wi(o)&&(o=Sr(o)),o&&(a.fields[fc]=o),{mapValue:a}}(e,t):n instanceof Sn?Mc(n,t):n instanceof Pn?Oc(n,t):function(i,o){const a=Nc(i,o),l=ra(a)+ra(i.Ae);return Ci(a)&&Ci(i.Ae)?kc(l):Ji(i.serializer,l)}(n,t)}function Fd(n,t,e){return n instanceof Sn?Mc(n,t):n instanceof Pn?Oc(n,t):e}function Nc(n,t){return n instanceof yr?function(r){return Ci(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class _r extends br{}class Sn extends br{constructor(t){super(),this.elements=t}}function Mc(n,t){const e=xc(t);for(const r of n.elements)e.some(i=>Lt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Pn extends br{constructor(t){super(),this.elements=t}}function Oc(n,t){let e=xc(t);for(const r of n.elements)e=e.filter(i=>!Lt(i,r));return{arrayValue:{values:e}}}class yr extends br{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ra(n){return tt(n.integerValue||n.doubleValue)}function xc(n){return Qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ud(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Sn&&i instanceof Sn||r instanceof Pn&&i instanceof Pn?xe(r.elements,i.elements,Lt):r instanceof yr&&i instanceof yr?Lt(r.Ae,i.Ae):r instanceof _r&&i instanceof _r}(n.transform,t.transform)}class Bd{constructor(t,e){this.version=t,this.transformResults=e}}class Rt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Rt}static exists(t){return new Rt(void 0,t)}static updateTime(t){return new Rt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dr{}function Lc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new kr(n.key,Rt.none()):new bn(n.key,n.data,Rt.none());{const e=n.data,r=wt.empty();let i=new ot(lt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ce(n.key,r,new At(i.toArray()),Rt.none())}}function jd(n,t,e){n instanceof bn?function(i,o,a){const l=i.value.clone(),h=sa(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(i,o,a){if(!or(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=sa(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Fc(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function En(n,t,e,r){return n instanceof bn?function(o,a,l,h){if(!or(o.precondition,a))return l;const f=o.value.clone(),g=oa(o.fieldTransforms,h,a);return f.setAll(g),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ce?function(o,a,l,h){if(!or(o.precondition,a))return l;const f=oa(o.fieldTransforms,h,a),g=a.data;return g.setAll(Fc(o)),g.setAll(f),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,l){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function qd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Nc(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function ia(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xe(r,i,(o,a)=>Ud(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class bn extends Dr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends Dr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Fc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function sa(n,t,e){const r=new Map;z(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Fd(a,l,e[i]))}return r}function oa(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Ld(o,a,t))}return r}class kr extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $d extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&jd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Dc();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Lc(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&xe(this.mutations,t.mutations,(e,r)=>ia(e,r))&&xe(this.baseMutations,t.baseMutations,(e,r)=>ia(e,r))}}class Zi{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){z(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return kd}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Zi(t,e,r,i)}}/**
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
 */class Gd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Hd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,q;function Kd(n){switch(n){case V.OK:return x(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Uc(n){if(n===void 0)return Bt("GRPC error has no .code"),V.UNKNOWN;switch(n){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return x(39323,{code:n})}}(q=et||(et={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Wd(){return new TextEncoder}/**
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
 */const Qd=new Jt([4294967295,4294967295],0);function aa(n){const t=Wd().encode(n),e=new Ja;return e.update(t),new Uint8Array(e.digest())}function ca(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Jt([e,r],0),new Jt([i,o],0)]}class ts{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new mn(`Invalid padding: ${e}`);if(r<0)throw new mn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new mn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new mn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Jt.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(Jt.fromNumber(r)));return i.compare(Qd)===1&&(i=new Jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=aa(t),[r,i]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ts(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const e=aa(t),[r,i]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Dn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Nr(L.min(),i,new X(B),jt(),j())}}class Dn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Dn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class Bc{constructor(t,e){this.targetId=t,this.Ce=e}}class jc{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ua{constructor(){this.ve=0,this.Fe=la(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),r=j();return this.Fe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:x(38017,{changeType:o})}}),new Dn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=la()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,z(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Yd{constructor(t){this.Ge=t,this.ze=new Map,this.je=jt(),this.Je=tr(),this.He=tr(),this.Ze=new X(B)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:x(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,i)=>{this.rt(i)&&e(i)})}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(Di(o))if(r===0){const a=new M(o.path);this.et(e,a,_t.newNoDocument(a,L.min()))}else z(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=re(r).toUint8Array()}catch(h){if(h instanceof lc)return ye("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ts(a,i,o)}catch(h){return ye(h instanceof mn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)}),i}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Di(l.target)){const h=new M(l.target.path);this.Et(h).has(a)||this.It(a,h)||this.et(a,h,_t.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}});let r=j();this.He.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const i=new Nr(t,e,this.Ze,this.je,r);return this.je=jt(),this.Je=tr(),this.He=tr(),this.Ze=new X(B),i}Ye(t,e){if(!this.rt(t))return;const r=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.It(t,e)?i.Ke(e,1):i.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new ua,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new ot(B),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new ot(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ua),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function tr(){return new X(M.comparator)}function la(){return new X(M.comparator)}const Xd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jd=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Zd=(()=>({and:"AND",or:"OR"}))();class tf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mi(n,t){return n.useProto3Json||Vr(t)?t:{value:t}}function Er(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ef(n,t){return Er(n,t.toTimestamp())}function Mt(n){return z(!!n,49232),L.fromTimestamp(function(e){const r=ne(e);return new Y(r.seconds,r.nanos)}(n))}function es(n,t){return Oi(n,t).canonicalString()}function Oi(n,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function $c(n){const t=W.fromString(n);return z(Wc(t),10190,{key:t.toString()}),t}function xi(n,t){return es(n.databaseId,t.path)}function mi(n,t){const e=$c(t);if(e.get(1)!==n.databaseId.projectId)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new b(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Gc(e))}function zc(n,t){return es(n.databaseId,t)}function nf(n){const t=$c(n);return t.length===4?W.emptyPath():Gc(t)}function Li(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gc(n){return z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ha(n,t,e){return{name:xi(n,t),fields:e.value.mapValue.fields}}function rf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:x(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(z(g===void 0||typeof g=="string",58123),ht.fromBase64String(g||"")):(z(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),ht.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const g=f.code===void 0?V.UNKNOWN:Uc(f.code);return new b(g,f.message||"")}(a);e=new jc(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=mi(n,r.document.name),o=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(i,o,a,l),f=r.targetIds||[],g=r.removedTargetIds||[];e=new ar(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=mi(n,r.document),o=r.readTime?Mt(r.readTime):L.min(),a=_t.newNoDocument(i,o),l=r.removedTargetIds||[];e=new ar([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=mi(n,r.document),o=r.removedTargetIds||[];e=new ar([],o,i,null)}else{if(!("filter"in t))return x(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Hd(i,o),l=r.targetId;e=new Bc(l,a)}}return e}function sf(n,t){let e;if(t instanceof bn)e={update:ha(n,t.key,t.value)};else if(t instanceof kr)e={delete:xi(n,t.key)};else if(t instanceof ce)e={update:ha(n,t.key,t.data),updateMask:gf(t.fieldMask)};else{if(!(t instanceof $d))return x(16599,{dt:t.type});e={verify:xi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof _r)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof yr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw x(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ef(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,t.precondition)),e}function of(n,t){return n&&n.length>0?(z(t!==void 0,14353),n.map(e=>function(i,o){let a=i.updateTime?Mt(i.updateTime):Mt(o);return a.isEqual(L.min())&&(a=Mt(o)),new Bd(a,i.transformResults||[])}(e,t))):[]}function af(n,t){return{documents:[zc(n,t.path)]}}function cf(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=zc(n,i);const o=function(f){if(f.length!==0)return Kc(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:Ce(R.field),direction:hf(R.dir)}}(g))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Mi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ft:e,parent:i}}function uf(n){let t=nf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){z(r===1,65062);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(T){const R=Hc(T);return R instanceof Ct&&Ic(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(R=>function(k){return new Vn(be(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(T){let R;return R=typeof T=="object"?T.value:T,Vr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(T){const R=!!T.before,P=T.values||[];return new pr(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const R=!T.before,P=T.values||[];return new pr(P,R)}(e.endAt)),Rd(t,i,a,o,l,"F",h,f)}function lf(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=be(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=be(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=be(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(e){return nt.create(be(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>Hc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(e.compositeFilter.op))}(n):x(30097,{filter:n})}function hf(n){return Xd[n]}function df(n){return Jd[n]}function ff(n){return Zd[n]}function Ce(n){return{fieldPath:n.canonicalString()}}function be(n){return lt.fromServerFormat(n.fieldPath)}function Kc(n){return n instanceof nt?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NAN"}};if(Xo(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NAN"}};if(Xo(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ce(e.field),op:df(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(i=>Kc(i));return r.length===1?r[0]:{compositeFilter:{op:ff(e.op),filters:r}}}(n):x(54877,{filter:n})}function gf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Wc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Qc(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,r,i,o=L.min(),a=L.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.yt=t}}function pf(n){const t=uf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ni(t,t.limit,"L"):t}/**
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
 */class _f{constructor(){this.bn=new yf}addToCollectionParentIndex(t,e){return this.bn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ee.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class yf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ot(W.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(W.comparator)).toArray()}}/**
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
 */const da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yc=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Yc,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Ue(0)}static ar(){return new Ue(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="LruGarbageCollector",Ef=1048576;function ga([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Tf{constructor(t){this.Pr=t,this.buffer=new ot(ga),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ga(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class If{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){D(fa,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ge(e)?D(fa,"Ignoring IndexedDB error during garbage collection: ",e):await ze(e)}await this.Ar(3e5)})}}class wf{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Rr.ce);const r=new Tf(e);return this.Vr.forEachTarget(t,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(t,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(da)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),da):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,i,o,a,l,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(r=T,l=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(f=Date.now(),Se()<=$.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function vf(n,t){return new wf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&En(r.mutation,i,At.empty(),Y.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=pe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=gn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=jt();const a=yn(),l=function(){return yn()}();return e.forEach((h,f)=>{const g=r.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof ce)?o=o.insert(f.key,f):g!==void 0?(a.set(f.key,g.mutation.getFieldMask()),En(g.mutation,f,g.mutation.getFieldMask(),Y.now())):a.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>a.set(f,g)),e.forEach((f,g)=>l.set(f,new Rf(g,a.get(f)??null))),l))}recalculateAndSaveOverlays(t,e){const r=yn();let i=new X((a,l)=>a-l),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||At.empty();g=l.applyToLocalView(f,g),r.set(h,g);const T=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,T)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,g=h.value,T=Dc();g.forEach(R=>{if(!o.has(R)){const P=Lc(e.get(R),r.get(R));P!==null&&T.set(R,P),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,T))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return Vd(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(pe());let l=wn,h=o;return a.next(f=>S.forEach(f,(g,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(g)?S.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(g=>({batchId:l,changes:bc(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=gn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=gn();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,h=>{const f=function(T,R){return new He(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(g=>{g.forEach((T,R)=>{a=a.insert(T,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,f)=>{const g=f.getKey();a.get(g)===null&&(a=a.insert(g,_t.newInvalidDocument(g)))});let l=gn();return a.forEach((h,f)=>{const g=o.get(h);g!==void 0&&En(g.mutation,f,At.empty(),Y.now()),Cr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return S.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Mt(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(i){return{name:i.name,query:pf(i.bundledQuery),readTime:Mt(i.readTime)}}(e)),S.resolve()}}/**
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
 */class Pf{constructor(){this.overlays=new X(M.comparator),this.Lr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=pe(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new X((f,g)=>f-g);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=pe(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>l.set(f,g)),!(l.size()>=i)););return S.resolve(l)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Gd(e,r));let o=this.Lr.get(e);o===void 0&&(o=j(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class Cf{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.kr=new ot(ct.qr),this.Kr=new ot(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new ct(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new M(new W([])),r=new ct(e,t),i=new ct(e,t+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new M(new W([])),r=new ct(e,t),i=new ct(e,t+1);let o=j();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ct(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return M.comparator(t.key,e.key)||B(t.Jr,e.Jr)}static Ur(t,e){return B(t.Jr,e.Jr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new ot(ct.qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zd(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.Hr=this.Hr.add(new ct(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ki:this.Yn-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),i=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],a=>{const l=this.Zr(a.Jr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach(i=>{const o=new ct(i,0),a=new ct(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],l=>{r=r.add(l.Jr)})}),S.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ct(new M(o),0);let l=new ot(B);return this.Hr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Jr)),!0)},a),S.resolve(this.Yr(l))}Yr(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return S.forEach(e.mutations,i=>{const o=new ct(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new ct(e,0),i=this.Hr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.ti=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=jt();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||rd(nd(g),r)<=0||(i.has(g.key)||Cr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x(9500)}ni(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new kf(this)}getSize(t){return S.resolve(this.size)}}class kf extends Af{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.persistence=t,this.ri=new Ie(e=>Yi(e),Xi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.ii=0,this.si=new ns,this.targetCount=0,this.oi=Ue._r()}forEachTarget(t,e){return this.ri.forEach((r,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),S.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Ue(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.lr(e),S.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e){this._i={},this.overlays={},this.ai=new Rr(0),this.ui=!1,this.ui=!0,this.ci=new Cf,this.referenceDelegate=t(this),this.li=new Nf(this),this.indexManager=new _f,this.remoteDocumentCache=function(i){return new Df(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new mf(e),this.Pi=new Sf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new bf(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Mf(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ei(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ii(t,e){return S.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Mf extends sd{constructor(t){super(),this.currentSequenceNumber=t}}class rs{constructor(t){this.persistence=t,this.Ri=new ns,this.Ai=null}static Vi(t){return new rs(t)}get di(){if(this.Ai)return this.Ai;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.di,r=>{const i=M.fromPath(r);return this.mi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Tr{constructor(t,e){this.persistence=t,this.fi=new Ie(r=>cd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=vf(this,e)}static Vi(t,e){return new Tr(t,e)}Ti(){}Ei(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return S.forEach(this.fi,(r,i)=>this.wr(t,r,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,a=>this.wr(t,a,e).next(l=>{l||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),S.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ir(t.data.value)),e}wr(t,e,r){return S.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ts=r,this.Es=i}static Is(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new is(t,e.fromCache,r,i)}}/**
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
 */class Of{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xf{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return wl()?8:od(Tl())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.gs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Of;return this.ys(t,e,a).next(l=>{if(o.result=l,this.As)return this.ws(t,e,a,l.size)})}).next(()=>o.result)}ws(t,e,r,i){return r.documentReadCount<this.Vs?(Se()<=$.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(Se()<=$.DEBUG&&D("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Se()<=$.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):S.resolve())}gs(t,e){if(na(e))return S.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ni(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Ss(e,l);return this.bs(e,f,a,h.readTime)?this.gs(t,Ni(e,null,"F")):this.Ds(t,f,e,h)}))})))}ps(t,e,r,i){return na(e)||i.isEqual(L.min())?S.resolve(null):this.fs.getDocuments(t,r).next(o=>{const a=this.Ss(e,o);return this.bs(e,a,r,i)?S.resolve(null):(Se()<=$.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pe(e)),this.Ds(t,a,e,ed(i,wn)).next(l=>l))})}Ss(t,e){let r=new ot(Pc(t));return e.forEach((i,o)=>{Cr(t,o)&&(r=r.add(o))}),r}bs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,r){return Se()<=$.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.fs.getDocumentsMatchingQuery(t,e,ee.min(),r)}Ds(t,e,r,i){return this.fs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="LocalStore",Lf=3e8;class Ff{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new X(B),this.Fs=new Ie(o=>Yi(o),Xi),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vf(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Uf(n,t,e,r){return new Ff(n,t,e,r)}async function Jc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=j();for(const f of i){a.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ns:f,removedBatchIds:a,addedBatchIds:l}))})})}function Bf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,g){const T=f.batch,R=T.keys();let P=S.resolve();return R.forEach(k=>{P=P.next(()=>g.getEntry(h,k)).next(O=>{const N=f.docVersions.get(k);z(N!==null,48541),O.version.compareTo(N)<0&&(T.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),g.addEntry(O)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Zc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function jf(n,t){const e=F(n),r=t.snapshotVersion;let i=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});i=e.vs;const l=[];t.targetChanges.forEach((g,T)=>{const R=i.get(T);if(!R)return;l.push(e.li.removeMatchingKeys(o,g.removedDocuments,T).next(()=>e.li.addMatchingKeys(o,g.addedDocuments,T)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?P=P.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),i=i.insert(T,P),function(O,N,K){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Lf?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,P,g)&&l.push(e.li.updateTargetData(o,P))});let h=jt(),f=j();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),l.push(qf(o,a,t.documentUpdates).next(g=>{h=g.Bs,f=g.Ls})),!r.isEqual(L.min())){const g=e.li.getLastRemoteSnapshotVersion(o).next(T=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(g)}return S.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.vs=i,o))}function qf(n,t,e){let r=j(),i=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(ss,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Bs:a,Ls:i}})}function $f(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Ki),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function zf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.li.getTargetData(r,t).next(o=>o?(i=o,S.resolve(i)):e.li.allocateTargetId(r).next(a=>(i=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function Fi(n,t,e){const r=F(n),i=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ge(a))throw a;D(ss,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(i.target)}function ma(n,t,e){const r=F(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,g){const T=F(h),R=T.Fs.get(g);return R!==void 0?S.resolve(T.vs.get(R)):T.li.getTargetData(f,g)}(r,a,Nt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:j())).next(l=>(Gf(r,Cd(t),l),{documents:l,ks:o})))}function Gf(n,t,e){let r=n.Ms.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ms.set(t,r)}class pa{constructor(){this.activeTargetIds=Od()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hf{constructor(){this.vo=new pa,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new pa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Kf{Mo(t){}shutdown(){}}/**
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
 */const _a="ConnectivityMonitor";class ya{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(_a,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){D(_a,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let er=null;function Ui(){return er===null?er=function(){return 268435456+Math.round(2147483648*Math.random())}():er++,"0x"+er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="RestConnection",Wf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Qf{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===gr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const a=Ui(),l=this.Qo(t,e.toUriEncodedString());D(pi,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,o);const{host:f}=new URL(l),g=Ga(f);return this.zo(t,l,h,r,g).then(T=>(D(pi,`Received RPC '${t}' ${a}: `,T),T),T=>{throw ye(pi,`RPC '${t}' ${a} failed with error: `,T,"url: ",l,"request:",r),T})}jo(t,e,r,i,o,a){return this.Wo(t,e,r,i,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$e}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Qo(t,e){const r=Wf[t];let i=`${this.Ko}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection",hn=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ke extends Qf{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ke.c_){const t=nc();hn(t,ec.STAT_EVENT,e=>{e.stat===Vi.PROXY?D(mt,"STAT_EVENT: detected buffering proxy"):e.stat===Vi.NOPROXY&&D(mt,"STAT_EVENT: detected no buffering proxy")}),ke.c_=!0}}zo(t,e,r,i,o){const a=Ui();return new Promise((l,h)=>{const f=new Za;f.setWithCredentials(!0),f.listenOnce(tc.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case rr.NO_ERROR:const T=f.getResponseJson();D(mt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),l(T);break;case rr.TIMEOUT:D(mt,`RPC '${t}' ${a} timed out`),h(new b(V.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const R=f.getStatus();if(D(mt,`RPC '${t}' ${a} failed with status:`,R,"response text:",f.getResponseText()),R>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P==null?void 0:P.error;if(k&&k.status&&k.message){const O=function(K){const G=K.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN}(k.status);h(new b(O,k.message))}else h(new b(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new b(V.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{D(mt,`RPC '${t}' ${a} completed.`)}});const g=JSON.stringify(i);D(mt,`RPC '${t}' ${a} sending request:`,i),f.send(e,"POST",g,r,15)})}T_(t,e,r){const i=Ui(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const f=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${f}`,l);const g=a.createWebChannel(f,l);this.E_(g);let T=!1,R=!1;const P=new Yf({Jo:k=>{R?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(T||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),g.open(),T=!0),D(mt,`RPC '${t}' stream ${i} sending:`,k),g.send(k))},Ho:()=>g.close()});return hn(g,fn.EventType.OPEN,()=>{R||(D(mt,`RPC '${t}' stream ${i} transport opened.`),P.i_())}),hn(g,fn.EventType.CLOSE,()=>{R||(R=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),P.o_(),this.I_(g))}),hn(g,fn.EventType.ERROR,k=>{R||(R=!0,ye(mt,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),P.o_(new b(V.UNAVAILABLE,"The operation could not be completed")))}),hn(g,fn.EventType.MESSAGE,k=>{var O;if(!R){const N=k.data[0];z(!!N,16349);const K=N,G=(K==null?void 0:K.error)||((O=K[0])==null?void 0:O.error);if(G){D(mt,`RPC '${t}' stream ${i} received error:`,G);const J=G.status;let Vt=function(E){const m=et[E];if(m!==void 0)return Uc(m)}(J),dt=G.message;J==="NOT_FOUND"&&dt.includes("database")&&dt.includes("does not exist")&&dt.includes(this.databaseId.database)&&ye(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Vt===void 0&&(Vt=V.INTERNAL,dt="Unknown error status: "+J+" with message "+G.message),R=!0,P.o_(new b(Vt,dt)),g.close()}else D(mt,`RPC '${t}' stream ${i} received:`,N),P.__(N)}}),ke.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return rc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){return new ke(n)}function _i(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return new tf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke.c_=!1;class tu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="PersistentStream";class eu{constructor(t,e,r,i,o,a,l,h){this.Ci=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===e&&this.G_(r,i)},r=>{t(()=>{const i=new b(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return D(Ea,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(D(Ea,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jf extends eu{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=rf(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Mt(a.readTime):L.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=Li(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=Di(h)?{documents:af(o,h)}:{query:cf(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=qc(o,a.resumeToken);const f=Mi(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=Er(o,a.snapshotVersion.toTimestamp());const f=Mi(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=lf(this.serializer,t);r&&(e.labels=r),this.q_(e)}X_(t){const e={};e.database=Li(this.serializer),e.removeTarget=t,this.q_(e)}}class Zf extends eu{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=of(t.writeResults,t.commitTime),r=Mt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Li(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>sf(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{}class eg extends tg{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,Oi(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(V.UNKNOWN,o.toString())})}jo(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,Oi(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new b(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function ng(n,t,e,r){return new eg(n,t,e,r)}class rg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="RemoteStore";class ig{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{we(this)&&(D(Te,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.Ia.add(4),await kn(f),f.Va.set("Unknown"),f.Ia.delete(4),await Or(f)}(this))})}),this.Va=new rg(r,i)}}async function Or(n){if(we(n))for(const t of n.Ra)await t(!0)}async function kn(n){for(const t of n.Ra)await t(!1)}function nu(n,t){const e=F(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),us(e)?cs(e):Ke(e).O_()&&as(e,t))}function os(n,t){const e=F(n),r=Ke(e);e.Ea.delete(t),r.O_()&&ru(e,t),e.Ea.size===0&&(r.O_()?r.L_():we(e)&&e.Va.set("Unknown"))}function as(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(n).Z_(t)}function ru(n,t){n.da.$e(t),Ke(n).X_(t)}function cs(n){n.da=new Yd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ea.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ke(n).start(),n.Va.ua()}function us(n){return we(n)&&!Ke(n).x_()&&n.Ea.size>0}function we(n){return F(n).Ia.size===0}function iu(n){n.da=void 0}async function sg(n){n.Va.set("Online")}async function og(n){n.Ea.forEach((t,e)=>{as(n,t)})}async function ag(n,t){iu(n),us(n)?(n.Va.ha(t),cs(n)):n.Va.set("Unknown")}async function cg(n,t,e){if(n.Va.set("Online"),t instanceof jc&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ea.delete(l),i.da.removeTarget(l))}(n,t)}catch(r){D(Te,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ir(n,r)}else if(t instanceof ar?n.da.Xe(t):t instanceof Bc?n.da.st(t):n.da.tt(t),!e.isEqual(L.min()))try{const r=await Zc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.da.Tt(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ea.get(f);g&&o.Ea.set(f,g.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const g=o.Ea.get(h);if(!g)return;o.Ea.set(h,g.withResumeToken(ht.EMPTY_BYTE_STRING,g.snapshotVersion)),ru(o,h);const T=new Qt(g.target,h,f,g.sequenceNumber);as(o,T)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){D(Te,"Failed to raise snapshot:",r),await Ir(n,r)}}async function Ir(n,t,e){if(!Ge(t))throw t;n.Ia.add(1),await kn(n),n.Va.set("Offline"),e||(e=()=>Zc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(Te,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Or(n)})}function su(n,t){return t().catch(e=>Ir(n,e,t))}async function xr(n){const t=F(n),e=se(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ki;for(;ug(t);)try{const i=await $f(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,lg(t,i)}catch(i){await Ir(t,i)}ou(t)&&au(t)}function ug(n){return we(n)&&n.Ta.length<10}function lg(n,t){n.Ta.push(t);const e=se(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function ou(n){return we(n)&&!se(n).x_()&&n.Ta.length>0}function au(n){se(n).start()}async function hg(n){se(n).ra()}async function dg(n){const t=se(n);for(const e of n.Ta)t.ea(e.mutations)}async function fg(n,t,e){const r=n.Ta.shift(),i=Zi.from(r,t,e);await su(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await xr(n)}async function gg(n,t){t&&se(n).Y_&&await async function(r,i){if(function(a){return Kd(a)&&a!==V.ABORTED}(i.code)){const o=r.Ta.shift();se(r).B_(),await su(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await xr(r)}}(n,t),ou(n)&&au(n)}async function Ta(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(Te,"RemoteStore received new credentials");const r=we(e);e.Ia.add(3),await kn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Or(e)}async function mg(n,t){const e=F(n);t?(e.Ia.delete(2),await Or(e)):t||(e.Ia.add(2),await kn(e),e.Va.set("Unknown"))}function Ke(n){return n.ma||(n.ma=function(e,r,i){const o=F(e);return o.sa(),new Jf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:sg.bind(null,n),Yo:og.bind(null,n),t_:ag.bind(null,n),H_:cg.bind(null,n)}),n.Ra.push(async t=>{t?(n.ma.B_(),us(n)?cs(n):n.Va.set("Unknown")):(await n.ma.stop(),iu(n))})),n.ma}function se(n){return n.fa||(n.fa=function(e,r,i){const o=F(e);return o.sa(),new Zf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:hg.bind(null,n),t_:gg.bind(null,n),ta:dg.bind(null,n),na:fg.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await xr(n)):(await n.fa.stop(),n.Ta.length>0&&(D(Te,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new ls(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hs(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),Ge(n))return new b(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static emptySet(t){return new Ne(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=gn(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ne;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.ga=new X(M.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):x(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class Be{constructor(t,e,r,i,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Be(t,e,Ne.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class _g{constructor(){this.queries=wa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=wa(),o.forEach((a,l)=>{for(const h of l.Sa)h.onError(r)})})(this,new b(V.ABORTED,"Firestore shutting down"))}}function wa(){return new Ie(n=>Sc(n),Pr)}async function yg(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new pg,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=hs(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ds(e)}async function Eg(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Tg(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(i)&&(r=!0);a.wa=i}}r&&ds(e)}function Ig(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function ds(n){n.Ca.forEach(t=>{t.next()})}var Bi,va;(va=Bi||(Bi={})).Ma="default",va.Cache="cache";class wg{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Be(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Be.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Bi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.key=t}}class uu{constructor(t){this.key=t}}class vg{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.eu=Pc(t),this.tu=new Ne(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new Ia,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,T)=>{const R=i.get(g),P=Cr(this.query,T)?T:null,k=!!R&&this.mutatedKeys.has(R.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let N=!1;R&&P?R.data.isEqual(P.data)?k!==O&&(r.track({type:3,doc:P}),N=!0):this.su(R,P)||(r.track({type:2,doc:P}),N=!0,(h&&this.eu(P,h)>0||f&&this.eu(P,f)<0)&&(l=!0)):!R&&P?(r.track({type:0,doc:P}),N=!0):R&&!P&&(r.track({type:1,doc:R}),N=!0,(h||f)&&(l=!0)),N&&(P?(a=a.add(P),o=O?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{tu:a,iu:r,bs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((g,T)=>function(P,k){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Vt:N})}};return O(P)-O(k)}(g.type,T.type)||this.eu(g.doc,T.doc)),this.ou(r),i=i??!1;const l=e&&!i?this._u():[],h=this.Ya.size===0&&this.current&&!i?1:0,f=h!==this.Xa;return this.Xa=h,a.length!==0||f?{snapshot:new Be(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ia,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=j(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new uu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new cu(r))}),e}cu(t){this.Za=t.ks,this.Ya=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Be.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const fs="SyncEngine";class Ag{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Rg{constructor(t){this.key=t,this.hu=!1}}class Vg{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ie(l=>Sc(l),Pr),this.Eu=new Map,this.Iu=new Set,this.Ru=new X(M.comparator),this.Au=new Map,this.Vu=new ns,this.du={},this.mu=new Map,this.fu=Ue.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Sg(n,t,e=!0){const r=mu(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await lu(r,t,e,!0),i}async function Pg(n,t){const e=mu(n);await lu(e,t,!0,!1)}async function lu(n,t,e,r){const i=await zf(n.localStore,Nt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Cg(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&nu(n.remoteStore,i),l}async function Cg(n,t,e,r,i){n.pu=(T,R,P)=>async function(O,N,K,G){let J=N.view.ru(K);J.bs&&(J=await ma(O.localStore,N.query,!1).then(({documents:E})=>N.view.ru(E,J)));const Vt=G&&G.targetChanges.get(N.targetId),dt=G&&G.targetMismatches.get(N.targetId)!=null,ft=N.view.applyChanges(J,O.isPrimaryClient,Vt,dt);return Ra(O,N.targetId,ft.au),ft.snapshot}(n,T,R,P);const o=await ma(n.localStore,t,!0),a=new vg(t,o.ks),l=a.ru(o.documents),h=Dn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(l,n.isPrimaryClient,h);Ra(n,e,f.au);const g=new Ag(t,e,a);return n.Tu.set(t,g),n.Eu.has(e)?n.Eu.get(e).push(t):n.Eu.set(e,[t]),f.snapshot}async function bg(n,t,e){const r=F(n),i=r.Tu.get(t),o=r.Eu.get(i.targetId);if(o.length>1)return r.Eu.set(i.targetId,o.filter(a=>!Pr(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&os(r.remoteStore,i.targetId),ji(r,i.targetId)}).catch(ze)):(ji(r,i.targetId),await Fi(r.localStore,i.targetId,!0))}async function Dg(n,t){const e=F(n),r=e.Tu.get(t),i=e.Eu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),os(e.remoteStore,r.targetId))}async function kg(n,t,e){const r=Ug(n);try{const i=await function(a,l){const h=F(a),f=Y.now(),g=l.reduce((P,k)=>P.add(k.key),j());let T,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=jt(),O=j();return h.xs.getEntries(P,g).next(N=>{k=N,k.forEach((K,G)=>{G.isValidDocument()||(O=O.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,k)).next(N=>{T=N;const K=[];for(const G of l){const J=qd(G,T.get(G.key).overlayedDocument);J!=null&&K.push(new ce(G.key,J,yc(J.value.mapValue),Rt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,K,l)}).next(N=>{R=N;const K=N.applyToLocalDocumentSet(T,O);return h.documentOverlayCache.saveOverlays(P,N.batchId,K)})}).then(()=>({batchId:R.batchId,changes:bc(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let f=a.du[a.currentUser.toKey()];f||(f=new X(B)),f=f.insert(l,h),a.du[a.currentUser.toKey()]=f}(r,i.batchId,e),await Nn(r,i.changes),await xr(r.remoteStore)}catch(i){const o=hs(i,"Failed to persist write");e.reject(o)}}async function hu(n,t){const e=F(n);try{const r=await jf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Au.get(o);a&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?z(a.hu,14607):i.removedDocuments.size>0&&(z(a.hu,42227),a.hu=!1))}),await Nn(e,r,t)}catch(r){await ze(r)}}function Aa(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach((o,a)=>{const l=a.view.va(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((g,T)=>{for(const R of T.Sa)R.va(l)&&(f=!0)}),f&&ds(h)}(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ng(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let a=new X(M.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const l=j().add(o),h=new Nr(L.min(),new Map,new X(B),a,l);await hu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),gs(r)}else await Fi(r.localStore,t,!1).then(()=>ji(r,t,e)).catch(ze)}async function Mg(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Bf(e.localStore,t);fu(e,r,null),du(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Nn(e,i)}catch(i){await ze(i)}}async function Og(n,t,e){const r=F(n);try{const i=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,l).next(T=>(z(T!==null,37113),g=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(r.localStore,t);fu(r,t,e),du(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Nn(r,i)}catch(i){await ze(i)}}function du(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function fu(n,t,e){const r=F(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}function ji(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Eu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Eu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach(r=>{n.Vu.containsKey(r)||gu(n,r)})}function gu(n,t){n.Iu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(os(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),gs(n))}function Ra(n,t,e){for(const r of e)r instanceof cu?(n.Vu.addReference(r.key,t),xg(n,r)):r instanceof uu?(D(fs,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||gu(n,r.key)):x(19791,{wu:r})}function xg(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Iu.has(r)||(D(fs,"New document in limbo: "+e),n.Iu.add(r),gs(n))}function gs(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new M(W.fromString(t)),r=n.fu.next();n.Au.set(r,new Rg(e)),n.Ru=n.Ru.insert(e,r),nu(n.remoteStore,new Qt(Nt(Rc(e.path)),r,"TargetPurposeLimboResolution",Rr.ce))}}async function Nn(n,t,e){const r=F(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,h)=>{a.push(r.pu(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const T=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){i.push(f);const T=is.Is(h.targetId,f);o.push(T)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>S.forEach(f,R=>S.forEach(R.Ts,P=>g.persistence.referenceDelegate.addReference(T,R.targetId,P)).next(()=>S.forEach(R.Es,P=>g.persistence.referenceDelegate.removeReference(T,R.targetId,P)))))}catch(T){if(!Ge(T))throw T;D(ss,"Failed to update sequence numbers: "+T)}for(const T of f){const R=T.targetId;if(!T.fromCache){const P=g.vs.get(R),k=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(k);g.vs=g.vs.insert(R,O)}}}(r.localStore,o))}async function Lg(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(fs,"User change. New user:",t.toKey());const r=await Jc(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(l=>{l.forEach(h=>{h.reject(new b(V.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Nn(e,r.Ns)}}function Fg(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return j().add(r.key);{let i=j();const o=e.Eu.get(t);if(!o)return i;for(const a of o){const l=e.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function mu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=hu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ng.bind(null,t),t.Pu.H_=Tg.bind(null,t.eventManager),t.Pu.yu=Ig.bind(null,t.eventManager),t}function Ug(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Mg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Og.bind(null,t),t}class wr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Uf(this.persistence,new xf,t.initialUser,this.serializer)}Cu(t){return new Xc(rs.Vi,this.serializer)}Du(t){return new Hf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wr.provider={build:()=>new wr};class Bg extends wr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){z(this.persistence.referenceDelegate instanceof Tr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new If(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Xc(r=>Tr.Vi(r,e),this.serializer)}}class qi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lg.bind(null,this.syncEngine),await mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _g}()}createDatastore(t){const e=Mr(t.databaseInfo.databaseId),r=Xf(t.databaseInfo);return ng(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new ig(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Aa(this.syncEngine,e,0),function(){return ya.v()?new ya:new Kf}())}createSyncEngine(t,e){return function(i,o,a,l,h,f,g){const T=new Vg(i,o,a,l,h,f);return g&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);D(Te,"RemoteStore shutting down."),o.Ia.add(5),await kn(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}qi.provider={build:()=>new qi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="FirestoreClient";class qg{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Hi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=hs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function yi(n,t){n.asyncQueue.verifyOperationInProgress(),D(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Va(n,t){n.asyncQueue.verifyOperationInProgress();const e=await $g(n);D(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ta(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ta(t.remoteStore,i)),n._onlineComponents=t}async function $g(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(oe,"Using user provided OfflineComponentProvider");try{await yi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ye("Error using user provided cache. Falling back to memory cache: "+e),await yi(n,new wr)}}else D(oe,"Using default OfflineComponentProvider"),await yi(n,new Bg(void 0));return n._offlineComponents}async function pu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(oe,"Using user provided OnlineComponentProvider"),await Va(n,n._uninitializedComponentsProvider._online)):(D(oe,"Using default OnlineComponentProvider"),await Va(n,new qi))),n._onlineComponents}function zg(n){return pu(n).then(t=>t.syncEngine)}async function Gg(n){const t=await pu(n),e=t.eventManager;return e.onListen=Sg.bind(null,t.syncEngine),e.onUnlisten=bg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Pg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Dg.bind(null,t.syncEngine),e}function Hg(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const g=new jg({next:R=>{g.Nu(),a.enqueueAndForget(()=>Eg(o,T)),R.fromCache&&h.source==="server"?f.reject(new b(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),T=new wg(l,g,{includeMetadataChanges:!0,qa:!0});return yg(o,T)}(await Gg(n),n.asyncQueue,t,e,r)),r.promise}function Kg(n,t){const e=new Zt;return n.asyncQueue.enqueueAndForget(async()=>kg(await zg(n),t,e)),e.promise}/**
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
 */function _u(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="ComponentProvider",Sa=new Map;function Qg(n,t,e,r,i){return new hd(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,_u(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="firestore.googleapis.com",Pa=!0;class Ca{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new b(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yu,this.ssl=Pa}else this.host=t.host,this.ssl=t.ssl??Pa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ef)throw new b(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}td("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_u(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new b(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ca({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ca(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zh;switch(r.type){case"firstParty":return new Wh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Sa.get(e);r&&(D(Wg,"Removing Datastore"),Sa.delete(e),r.terminate())}(this),Promise.resolve()}}function Yg(n,t,e,r={}){var f;n=Ee(n,Lr);const i=Ga(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&Pl(`https://${l}`),o.host!==yu&&o.host!==l&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!lr(h,a)&&(n._setSettings(h),r.mockUserToken)){let g,T;if(typeof r.mockUserToken=="string")g=r.mockUserToken,T=pt.MOCK_USER;else{g=El(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new b(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new pt(R)}n._authCredentials=new Gh(new sc(g,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class st{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Cn(e,st._jsonSchema))return new st(t,r||null,new M(W.fromString(e.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:rt("string",st._jsonSchemaVersion),referencePath:rt("string")};class te extends ve{constructor(t,e,r){super(t,e,Rc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new M(t))}withConverter(t){return new te(this.firestore,t,this._path)}}function ba(n,t,...e){if(n=xt(n),oc("collection","path",t),n instanceof Lr){const r=W.fromString(t,...e);return qo(r),new te(n,null,r)}{if(!(n instanceof st||n instanceof te))throw new b(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return qo(r),new te(n.firestore,null,r)}}function dn(n,t,...e){if(n=xt(n),arguments.length===1&&(t=Hi.newId()),oc("doc","path",t),n instanceof Lr){const r=W.fromString(t,...e);return jo(r),new st(n,null,new M(r))}{if(!(n instanceof st||n instanceof te))throw new b(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return jo(r),new st(n.firestore,n instanceof te?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="AsyncQueue";class ka{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tu(this,"async_queue_retry"),this._c=()=>{const r=_i();r&&D(Da,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=_i();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=_i();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Zt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Ge(t))throw t;D(Da,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Bt("INTERNAL UNHANDLED ERROR: ",Na(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ls.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&x(47125,{Pc:Na(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Na(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Mn extends Lr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ka,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ka(t),this._firestoreClient=void 0,await t}}}function Xg(n,t){const e=typeof n=="object"?n:bh(),r=typeof n=="string"?n:t||gr,i=Rh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=_l("firestore");o&&Yg(i,...o)}return i}function ms(n){if(n._terminated)throw new b(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Jg(n),n._firestoreClient}function Jg(n){var r,i,o,a;const t=n._freezeSettings(),e=Qg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new qg(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(ht.fromBase64String(t))}catch(e){throw new b(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Cn(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:rt("string",St._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(Cn(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:rt("string",Ot._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
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
 */class Pt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Cn(t,Pt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Pt(t.vectorValues);throw new b(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pt._jsonSchemaVersion="firestore/vectorValue/1.0",Pt._jsonSchema={type:rt("string",Pt._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=/^__.*__$/;class tm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new bn(t,this.data,e,this.fieldTransforms)}}class Eu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Tu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{dataSource:n})}}class ys{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new ys({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.mc(t),r}fc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return vr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Tu(this.dataSource)&&Zg.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class em{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Mr(t)}A(t,e,r,i=!1){return new ys({dataSource:t,methodName:e,targetDoc:r,path:lt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Es(n){const t=n._freezeSettings(),e=Mr(n._databaseId);return new em(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Iu(n,t,e,r,i,o={}){const a=n.A(o.merge||o.mergeFields?2:0,t,e,i);Ts("Data must be an object, but it was:",a,r);const l=wu(r,a);let h,f;if(o.merge)h=new At(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const T of o.mergeFields){const R=je(t,T,e);if(!a.contains(R))throw new b(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Ru(g,R)||g.push(R)}h=new At(g),f=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=a.fieldTransforms;return new tm(new wt(l),h,f)}class Fr extends _s{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Fr}}function nm(n,t,e,r){const i=n.A(1,t,e);Ts("Data must be an object, but it was:",i,r);const o=[],a=wt.empty();ae(r,(h,f)=>{const g=Au(t,h,e);f=xt(f);const T=i.fc(g);if(f instanceof Fr)o.push(g);else{const R=On(f,T);R!=null&&(o.push(g),a.set(g,R))}});const l=new At(o);return new Eu(a,l,i.fieldTransforms)}function rm(n,t,e,r,i,o){const a=n.A(1,t,e),l=[je(t,r,e)],h=[i];if(o.length%2!=0)throw new b(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)l.push(je(t,o[R])),h.push(o[R+1]);const f=[],g=wt.empty();for(let R=l.length-1;R>=0;--R)if(!Ru(f,l[R])){const P=l[R];let k=h[R];k=xt(k);const O=a.fc(P);if(k instanceof Fr)f.push(P);else{const N=On(k,O);N!=null&&(f.push(P),g.set(P,N))}}const T=new At(f);return new Eu(g,T,a.fieldTransforms)}function im(n,t,e,r=!1){return On(e,n.A(r?4:3,t))}function On(n,t){if(vu(n=xt(n)))return Ts("Unsupported field value:",t,n),wu(n,t);if(n instanceof _s)return function(r,i){if(!Tu(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=On(l,i.gc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:Er(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Er(i.serializer,o)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:qc(i.serializer,r._byteString)};if(r instanceof st){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:es(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Pt)return function(a,l){const h=a instanceof Pt?a.toArray():a;return{mapValue:{fields:{[mc]:{stringValue:_c},[mr]:{arrayValue:{values:h.map(g=>{if(typeof g!="number")throw l.yc("VectorValues must only contain numeric values.");return Ji(l.serializer,g)})}}}}}}(r,i);if(Qc(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Ar(r)}`)}(n,t)}function wu(n,t){const e={};return uc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(n,(r,i)=>{const o=On(i,t.dc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function vu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ot||n instanceof St||n instanceof st||n instanceof _s||n instanceof Pt||Qc(n))}function Ts(n,t,e){if(!vu(e)||!ac(e)){const r=Ar(e);throw r==="an object"?t.yc(n+" a custom object"):t.yc(n+" "+r)}}function je(n,t,e){if((t=xt(t))instanceof ps)return t._internalPath;if(typeof t=="string")return Au(n,t);throw vr("Field path arguments must be of type string or ",n,!1,void 0,e)}const sm=new RegExp("[~\\*/\\[\\]]");function Au(n,t,e){if(t.search(sm)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ps(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function vr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new b(V.INVALID_ARGUMENT,l+n+h)}function Ru(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{convertValue(t,e="none"){switch(ie(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ae(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,i,o;const e=(o=(i=(r=t.fields)==null?void 0:r[mr].arrayValue)==null?void 0:i.values)==null?void 0:o.map(a=>tt(a.doubleValue));return new Pt(e)}convertGeoPoint(t){return new Ot(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Sr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=W.fromString(t);z(Wc(r),9688,{name:t});const i=new An(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class am extends om{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,e)}}const Ma="@firebase/firestore",Oa="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(je("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cm extends Vu{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new b(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Is{}class Su extends Is{}function lm(n,t,...e){let r=[];t instanceof Is&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof vs).length,l=o.filter(h=>h instanceof ws).length;if(a>1||a>0&&l>0)throw new b(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ws extends Su{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ws(t,e,r)}_apply(t){const e=this._parse(t);return Pu(t._query,e),new ve(t.firestore,t.converter,ki(t._query,e))}_parse(t){const e=Es(t.firestore);return function(o,a,l,h,f,g,T){let R;if(f.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new b(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){La(T,g);const k=[];for(const O of T)k.push(xa(h,o,O));R={arrayValue:{values:k}}}else R=xa(h,o,T)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||La(T,g),R=im(l,a,T,g==="in"||g==="not-in");return nt.create(f,g,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class vs extends Is{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new vs(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const h of l)Pu(a,h),a=ki(a,h)}(t._query,e),new ve(t.firestore,t.converter,ki(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class As extends Su{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new As(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new b(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vn(o,a)}(t._query,this._field,this._direction);return new ve(t.firestore,t.converter,Pd(t._query,e))}}function hm(n,t="asc"){const e=t,r=je("orderBy",n);return As._create(r,e)}function xa(n,t,e){if(typeof(e=xt(e))=="string"){if(e==="")throw new b(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vc(t)&&e.indexOf("/")!==-1)throw new b(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(W.fromString(e));if(!M.isDocumentKey(r))throw new b(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yo(n,new M(r))}if(e instanceof st)return Yo(n,e._key);throw new b(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function La(n,t){if(!Array.isArray(n)||n.length===0)throw new b(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pu(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new b(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Cu(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class nr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Me extends Vu{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(je("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new b(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Me._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Me._jsonSchemaVersion="firestore/documentSnapshot/1.0",Me._jsonSchema={type:rt("string",Me._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class cr extends Me{data(t={}){return super.data(t)}}class Oe{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new cr(this._firestore,this._userDataWriter,r.key,r,new nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new cr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new nr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new cr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new nr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:dm(l.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new b(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Oe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Hi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function dm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
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
 */Oe._jsonSchemaVersion="firestore/querySnapshot/1.0",Oe._jsonSchema={type:rt("string",Oe._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Es(t)}set(t,e,r){this._verifyNotCommitted();const i=Ei(t,this._firestore),o=Cu(i.converter,e,r),a=Iu(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Rt.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const o=Ei(t,this._firestore);let a;return a=typeof(e=xt(e))=="string"||e instanceof ps?rm(this._dataReader,"WriteBatch.update",o._key,e,r,i):nm(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,Rt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Ei(t,this._firestore);return this._mutations=this._mutations.concat(new kr(e._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ei(n,t){if((n=xt(n)).firestore!==t)throw new b(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Fa(n){n=Ee(n,ve);const t=Ee(n.firestore,Mn),e=ms(t),r=new am(t);return um(n._query),Hg(e,n._query).then(i=>new Oe(t,r,n,i))}function Ua(n,t,e){n=Ee(n,st);const r=Ee(n.firestore,Mn),i=Cu(n.converter,t,e),o=Es(r);return Rs(r,[Iu(o,"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Rt.none())])}function gm(n){return Rs(Ee(n.firestore,Mn),[new kr(n._key,Rt.none())])}function Rs(n,t){const e=ms(n);return Kg(e,t)}function Ba(n){return n=Ee(n,Mn),ms(n),new fm(n,t=>Rs(n,t))}(function(t,e=!0){$h(Ch),dr(new Tn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Mn(new Hh(r.getProvider("auth-internal")),new Qh(a,r.getProvider("app-check-internal")),dd(a,i),a);return o={useFetchStreams:e,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),De(Ma,Oa,t),De(Ma,Oa,"esm2020")})();const mm={apiKey:"AIzaSyDsxJhr-G43-VXJ7syK7TF-CrJP5JSdVVM",authDomain:"byhaski-624e8.firebaseapp.com",projectId:"byhaski-624e8",storageBucket:"byhaski-624e8.firebasestorage.app",messagingSenderId:"72320503986",appId:"1:72320503986:web:167d82309f25f0caf8f9ab"},pm=Qa(mm),Ft=Xg(pm),ge="projects",Ti=[{id:1,title:"ALL STAR - Music Video",work:"Dirección, Edición",yt:"fL8M59brsrc",highlight:!0,order:1},{id:2,title:"Mami Gantel - Music Video",work:"Edición",yt:"QX51rEH7v-I",highlight:!0,order:2},{id:3,title:"FUAKETE - Music Video",work:"Dirección, Edición",yt:"MJLYAMPrKg4",highlight:!0,order:3},{id:4,title:"Rik el Aslan - Music Video",work:"Edición",yt:"ARCmX6HMFPY",highlight:!0,order:4},{id:5,title:"Date Cuenta - Music Video",work:"Edición",yt:"mT1JknrRpMs",highlight:!0,order:5},{id:6,title:"Me quebraste - Music Video",work:"Edición",yt:"DQXoj7vzy8Y",highlight:!0,order:6},{id:7,title:"DEFJAM - Music Video",work:"Edición",yt:"wbXsZFWX2GE",highlight:!1,order:7},{id:8,title:"Sexy Malacara - Music Video",work:"Dirección, Edición",yt:"GH7c8mv8yms",highlight:!1,order:8},{id:9,title:"Tom y Jerry - Music Video",work:"Edición",yt:"hgpzgePAluw",highlight:!0,order:9},{id:10,title:"Dopada - Music Video",work:"Dirección, Edición",yt:"-_EEW1dq2pE",highlight:!1,order:10},{id:11,title:"Escapulario - Music Video",work:"Dirección, Edición",yt:"dy7963DREbs",highlight:!1,order:11},{id:12,title:"TOKI - Music Video",work:"Dirección, Edición",yt:"hug5tV6N0nU",highlight:!1,order:12},{id:13,title:"Si te vas - Music Video",work:"Edición",yt:"i901lCdZ3Dw",highlight:!1,order:13},{id:14,title:"LVB - Music Video",work:"Dirección, Edición",yt:"e9OSCWZ8ZP0",highlight:!1,order:14},{id:15,title:"Safari - Music Video",work:"Edición",yt:"lyNgbjqFqEA",highlight:!0,order:15},{id:16,title:"Portales - Music Video",work:"Dirección, Edición",yt:"bD3SDWGxF9s",highlight:!1,order:16},{id:17,title:"ROLLIN - Music Video",work:"Dirección, Edición",yt:"MQ5_-fnfnzU",highlight:!1,order:17},{id:18,title:"La Reina de la noche - Music Video",work:"Edición",yt:"C3WDRDLrDho",highlight:!1,order:18},{id:19,title:"La Facha - Music Video",work:"Edición",yt:"nSJEtoE5cvI",highlight:!1,order:19},{id:20,title:"Masterclass - Music Video",work:"Dirección",yt:"Hjxoh_M6Ors",highlight:!1,order:20},{id:21,title:"Adrenalina - Music Video",work:"Edición",yt:"xZwOcURKvdg",highlight:!0,order:21},{id:22,title:"Algo Mejor 11/11 - Music Video",work:"Dirección, Edición",yt:"K4dK76P1yA4",highlight:!1,order:22},{id:23,title:"Swaggy - Music Video",work:"Edición",yt:"I0k31Hi1GmI",highlight:!0,order:23},{id:24,title:"Anubis - Music Video",work:"Edición",yt:"VpgnF8aAo9U",highlight:!0,order:24},{id:25,title:"VEO - Music Video",work:"Edición",yt:"LrnGg2XWPKA",highlight:!0,order:25},{id:26,title:"NO TE ENAMORES (REMIX) - Music Video",work:"Edición",yt:"ETWxcIX224I",highlight:!1,order:26},{id:27,title:"Élite - Music Video",work:"Edición",yt:"mXtuLjEktG4",highlight:!1,order:27},{id:28,title:"EN BAJITA - Music Video",work:"Edición",yt:"6wtN96ccHYU",highlight:!1,order:28},{id:29,title:"Le Piso La Cara - Music Video",work:"Edición",yt:"MQh1FTzyJfw",highlight:!1,order:29},{id:30,title:"alasbuenasoalasmalas - Music Video",work:"Dirección, Edición",yt:"rK4d05M0zmU",highlight:!1,order:30},{id:31,title:"302 - Music Video",work:"Dirección, Edición",yt:"ucDkHGy6fWE",highlight:!1,order:31},{id:32,title:"FORD - Music Video",work:"Edición",yt:"TGk3GrcrFGU",highlight:!1,order:32},{id:33,title:"EL DUEÑO DEL TRAP - Music Video",work:"Edición",yt:"E5SfkCjmqh8",highlight:!0,order:33},{id:34,title:"METRALLO - Music Video",work:"Edición",yt:"kpG50uKYnM8",highlight:!1,order:34},{id:35,title:"TU VENENO - Music Video",work:"Edición",yt:"jZ5vJMZvZx0",highlight:!1,order:35},{id:36,title:"CUENTAS - Music Video",work:"Dirección, Edición",yt:"gzBwHP-2yzU",highlight:!1,order:36},{id:37,title:"HOES - Music Video",work:"Dirección, Edición",yt:"u6SL-Zv8eTc",highlight:!1,order:37},{id:38,title:"KAZAJISTÁN - Music Video",work:"Dirección, Edición",yt:"r9mq2UXF3Y4",highlight:!1,order:38},{id:39,title:"OUIJA - Music Video",work:"Edición",yt:"UxQnMeAnSIE",highlight:!1,order:39},{id:40,title:"Stunt4 - Music Video",work:"Edición",yt:"DHNr2zeRGSc",highlight:!1,order:40},{id:41,title:"Juguito E Piña - Music Video",work:"Edición",yt:"80I6zbGL7zI",highlight:!1,order:41},{id:42,title:"Río - Music Video",work:"Oneshot",yt:"37aZfou8qSk",highlight:!1,order:42},{id:43,title:"Ganjah - Music Video",work:"Edición",yt:"JZFtBb2EmkQ",highlight:!1,order:43},{id:44,title:"Carita Loca - Music Video",work:"Edición",yt:"_GrBLXU1vEY",highlight:!1,order:44},{id:45,title:"Se Viró - Music Video",work:"Edición",yt:"rK2SfyQG2R4",highlight:!1,order:45},{id:46,title:"UNDER - Music Video",work:"Edición",yt:"2J-FlE1ZwkE",highlight:!1,order:46},{id:47,title:"Narcos Bandidos - Music Video",work:"Edición",yt:"IPG4pW4N12M",highlight:!1,order:47},{id:48,title:"Super Eazy - Music Video",work:"Dirección, Edición",yt:"lNmdB0HjYAI",highlight:!1,order:48},{id:49,title:"Cartier - Music Video",work:"Dirección, Edición",yt:"aV6-YSH2-PY",highlight:!1,order:49},{id:50,title:"Barrio de Oro - Music Video",work:"Dirección, Edición",yt:"K_NmojZgxT4",highlight:!1,order:50},{id:51,title:"Pal Pueblo - Music Video",work:"Edición",yt:"j7YbnyP9JvE",highlight:!1,order:51},{id:52,title:"Simple - Music Video",work:"Dirección, Edición",yt:"vY80SuGPaX4",highlight:!1,order:52},{id:53,title:"Bélico - Music Video",work:"Edición",yt:"vnoZodRdVns",highlight:!0,order:53},{id:54,title:"2 De Marzo - Music Video",work:"Edición",yt:"h9--Bxd9EOg",highlight:!1,order:54},{id:55,title:"Bota - Music Video",work:"Edición",yt:"_8QpwXfd3zQ",highlight:!1,order:55},{id:56,title:"Plastic - Music Video",work:"Dirección, Edición",yt:"JCihXid0tmI",highlight:!1,order:56},{id:57,title:"Doble Máscara - Music Video",work:"Edición",yt:"FyA8Us3eB4w",highlight:!1,order:57},{id:58,title:"Click Clock - Music Video",work:"Edición",yt:"EgR8lPaV6rc",highlight:!1,order:58},{id:59,title:"Promethazine - Music Video",work:"Edición",yt:"H9xrxDe1b28",highlight:!1,order:59},{id:60,title:"Todavía Te Quiero - Music Video",work:"Dirección, Edición",yt:"tRTZBeJn23c",highlight:!1,order:60},{id:61,title:"Cachai - Music Video",work:"Edición",yt:"aAOtBT9Z8gM",highlight:!1,order:61},{id:62,title:"Deseos - Music Video",work:"Edición",yt:"FjjeJwY9qfc",highlight:!1,order:62},{id:63,title:"My Way - Music Video",work:"Dirección, Edición",yt:"HvcGbC2Aq5U",highlight:!1,order:63},{id:64,title:"Clásico - Music Video",work:"Dirección, Edición",yt:"GO84ySMFQr4",highlight:!1,order:64},{id:65,title:"Finco - Music Video",work:"Edición",yt:"ZueYvOuX510",highlight:!1,order:65},{id:66,title:"Palabreo - Music Video",work:"Edición",yt:"UpE7eAjN8XE",highlight:!1,order:66},{id:67,title:"Por Mí - Music Video",work:"Edición",yt:"VRDNh-FF9B4",highlight:!1,order:67},{id:68,title:"Déjà vu - Music Video",work:"Edición",yt:"WIkZlUOg9o4",highlight:!1,order:68},{id:69,title:"Itagüi - Music Video",work:"Edición",yt:"-jO69omrKnY",highlight:!1,order:69},{id:70,title:"No Marketing - Music Video",work:"Edición",yt:"1m1DmcMOkv4",highlight:!1,order:70},{id:71,title:"Piso con Flores REMIX - Music Video",work:"Dirección, Edición",yt:"fHxEPvelWKI",highlight:!1,order:71},{id:72,title:"Viernes XIII - Music Video",work:"Dirección, Edición",yt:"vxgaQSXXROY",highlight:!1,order:72},{id:73,title:"Lit - Music Video",work:"Edición",yt:"zFmj8vMyEE0",highlight:!1,order:73},{id:74,title:"No se siente bien - Music Video",work:"Dirección, Edición",yt:"kGwIpduda6Y",highlight:!1,order:74},{id:75,title:"Sadboy - Music Video",work:"Dirección, Edición",yt:"NiquNUx9zXw",highlight:!1,order:75},{id:76,title:"Gatubella - Music Video",work:"Edición",yt:"2jOStSXiSeQ",highlight:!1,order:76},{id:77,title:"Medallo Shit - Music Video",work:"Dirección, Edición",yt:"Kqz0aSLAO3E",highlight:!1,order:77},{id:78,title:"La Ubi - Music Video",work:"Edición",yt:"NaPS7phSKp4",highlight:!1,order:78},{id:79,title:"Blackjack - Music Video",work:"Dirección, Edición",yt:"Pw78Gea1FW0",highlight:!1,order:79},{id:80,title:"Números - Music Video",work:"Edición",yt:"vaoYH19sKW4",highlight:!1,order:80},{id:81,title:"Todavía me piensas - Music Video",work:"Dirección, Edición",yt:"u9Z7CZ4FCgs",highlight:!1,order:81},{id:82,title:"Estilo y Pepas - Music Video",work:"Dirección, Edición",yt:"2Ws3N5soMms",highlight:!1,order:82},{id:83,title:"No Pregunten - Music Video",work:"Edición",yt:"w7dDHpcVUsA",highlight:!1,order:83},{id:84,title:"Under Club - Music Video",work:"Edición",yt:"xOfgniX20fo",highlight:!1,order:84},{id:85,title:"Traición - Music Video",work:"Edición",yt:"1NXR9e7aolo",highlight:!1,order:85},{id:86,title:"Decidete - Music Video",work:"Edición",yt:"ErER5PN1KAs",highlight:!1,order:86},{id:87,title:"La Luna - Music Video",work:"Edición",yt:"a0yI4N8Qo3Y",highlight:!1,order:87},{id:88,title:"Sin Paranoias - Music Video",work:"Dirección, Edición",yt:"a56eM-cVwNU",highlight:!1,order:88},{id:89,title:"Valdiri - Music Video",work:"Dirección, Edición",yt:"atmEodOLH8s",highlight:!1,order:89},{id:90,title:"Gangoso World - Music Video",work:"Dirección, Edición",yt:"svycs9c2KIc",highlight:!1,order:90},{id:91,title:"Artistaje - Music Video",work:"Dirección, Edición",yt:"NB1IoMTUlpY",highlight:!1,order:91},{id:92,title:"Kien soy K kiero - Music Video",work:"Dirección, Edición",yt:"qM-Ir7wqGcs",highlight:!1,order:92},{id:93,title:"De la noche a la mañana - Music Video",work:"Dirección, Edición",yt:"5gMzT2bn_bU",highlight:!1,order:93},{id:94,title:"11/11 - Music Video",work:"Oneshot",yt:"HiFv_YvlcaE",highlight:!1,order:94},{id:95,title:"Chacales - Music Video",work:"Edición",yt:"iUvRnu6ucDA",highlight:!1,order:95},{id:96,title:"Puesto Pa Mí - Music Video",work:"Dirección, Edición",yt:"rWrQVtEKmwY",highlight:!1,order:96},{id:97,title:"KIDD - Music Video",work:"Edición",yt:"NfAXHE4PDNw",highlight:!1,order:97},{id:98,title:"Piso con Flores - Music Video",work:"Dirección, Edición",yt:"2CYqMpFEPyk",highlight:!1,order:98},{id:99,title:"No kiero otro love - Music Video",work:"Dirección, Edición",yt:"QJiaddtTMvo",highlight:!1,order:99},{id:100,title:"DIME - Music Video",work:"Dirección, Edición",yt:"bI4mdQO7O98",highlight:!1,order:100},{id:101,title:"AQQE - Music Video",work:"Dirección, Edición",yt:"gy_LIIS7aVc",highlight:!1,order:101},{id:102,title:"Call Me Future - Music Video",work:"Edición",yt:"5WffW-e_iHs",highlight:!1,order:102},{id:103,title:"AutentiK - Music Video",work:"Dirección, Edición",yt:"XRGNCF41Wb0",highlight:!1,order:103},{id:104,title:"Esperan por ti - Music Video",work:"Oneshot",yt:"yduDm4FXFrk",highlight:!1,order:104},{id:105,title:"Merchopercho - GTA Music Video",work:"Edición",yt:"IX9vbw-sFsE",highlight:!1,order:105},{id:106,title:"Sin Pagar El Vuelo - Music Video",work:"Dirección, Edición",yt:"HelyULdXDyE",highlight:!1,order:106},{id:107,title:"Cero Estrés - Music Video",work:"Dirección, Edición",yt:"fUB-Ad4P9N8",highlight:!1,order:107},{id:108,title:"Cero Ocho - Music Video",work:"Dirección, Edición",yt:"0bNNoNKO7GY",highlight:!1,order:108},{id:109,title:"No te vayas - Music Video",work:"Dirección, Edición",yt:"FHj_6k5CLj4",highlight:!1,order:109}];function ym(){async function n(){try{const a=lm(ba(Ft,ge),hm("order","asc"));return(await Fa(a)).docs.map(h=>h.data())}catch(a){return console.error("Firebase getAll error:",a),Ti}}async function t(a){const l=await n(),h=l.length>0?Math.max(...l.map(T=>T.id))+1:1,f=l.length>0?Math.min(...l.map(T=>T.order))-1:0,g={...a,id:h,highlight:a.highlight||!1,order:f};return await Ua(dn(Ft,ge,String(h)),g),g}async function e(a,l){await Ua(dn(Ft,ge,String(a)),l,{merge:!0})}async function r(a){await gm(dn(Ft,ge,String(a)))}async function i(a){const l=Ba(Ft);a.forEach((h,f)=>{const g=dn(Ft,ge,String(h.id));l.update(g,{order:f})}),await l.commit()}async function o(){const a=await Fa(ba(Ft,ge)),l=Ba(Ft);a.docs.forEach(h=>l.delete(h.ref)),Ti.forEach(h=>{const f=dn(Ft,ge,String(h.id));l.set(f,h)}),await l.commit()}return{getAll:n,addProject:t,updateProject:e,deleteProject:r,reorder:i,resetToDefaults:o,DEFAULT_CARDS:Ti}}export{ym as u};
