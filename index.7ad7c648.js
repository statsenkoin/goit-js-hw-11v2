!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==r&&n.call(L,a)&&(w=L);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=m,u(b,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(b),u(b,c,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a=document.querySelector(".js-per-page-selector"),i=document.querySelector(".js-checkbox-pagination");function c(){return a.value}function u(){return i.checked}a.addEventListener("change",c),i.addEventListener("change",u);var s="https://pixabay.com/api/",f=new URLSearchParams({key:"32468715-2ee7d1cef437ed65ce73ff92a",image_type:"photo",orientation:"horizontal",safesearch:!0});function l(t,e,r){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(r,o,a){var i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"?q=").concat(r,"&page=").concat(o,"&per_page=").concat(a,"&").concat(f));case 3:return i=t.sent,t.next=6,i.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",console.log("error :>> ",t.t0));case 12:case"end":return t.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var p=document.querySelector(".js-images-info");function v(t,e,r){var n="Page: ".concat(t,"/").concat(e,". Total images: ").concat(r);p.textContent=n}var y=document.querySelector(".js-gallery");function d(t){var e=t.reduce((function(t,e){var r=e.webformatURL,n=e.largeImageURL,o=e.tags;e.likes,e.views,e.comments,e.downloads;return t+'<div class="photo-card">\n      <a href="'.concat(n,'">\n        <img \n          class="card-image" \n          src="').concat(r,'" \n          alt="').concat(o,'" \n          loading="lazy"\n        />\n      </a>\n    </div>\n    ')}),"");y.insertAdjacentHTML("beforeend",e)}function g(t,e,r){return m.apply(this,arguments)}function m(){return(m=t(e)(t(n).mark((function e(r,o,a){var i,c,u,s;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(r,o,a);case 3:i=t.sent,c=i.hits,u=i.total,s=Math.ceil(u/a),v(o,s,u),d(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error :>> ",error);case 13:case"end":return t.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}document.querySelector("#search-form").addEventListener("submit",(function(t){return b.apply(this,arguments)}));var w="",x=1,L=24;function b(){return(b=t(e)(t(n).mark((function e(r){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),L=c(),u(),w=r.currentTarget.elements.searchQuery.value.trim(),t.next=6,g(w,x,L);case 6:x+=1;case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}}();
//# sourceMappingURL=index.7ad7c648.js.map
