// STARTS OF /share/jquery.min.js
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1-10-2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
$.ajaxSettings['cache'] = true;;// END OF /share/jquery.min.js
// STARTS OF /scripts/flexslider/jquery.flexslider-min.js
/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt","");var c=""!==s.attr("data-thumb-alt")?c=' alt="'+s.attr("data-thumb-alt")+'"':"";if(a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+c+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=s.attr("data-thumbcaption");""!==d&&void 0!==d&&(a+='<span class="'+i+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,y=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,y=!1,x=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),x=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:x,o=d?x:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-x,y=d?Math.abs(m)<Math.abs(x-o):Math.abs(m)<Math.abs(b-o);var t=500;(!y||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!y&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!1||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);;// END OF /scripts/flexslider/jquery.flexslider-min.js
// STARTS OF /scripts/jQuery/jquery.validate.min.js
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
;jQuery.validator.addMethod("CellPhone", function (value, element, params) {
    var reg = /^[1][358]\d{9}$/;
    return this.optional(element) || reg.test(value.replace(/\s/ig,""));
}, "例13800138000");
jQuery.validator.addMethod("isTel", function (value) {
    var tel = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
    return value ? tel.test(value) : true;
}, "例0757-82345678");
jQuery.validator.addMethod("CkDN", function (value) {
    var reg = /^([a-zA-Z0-9\u4e00-\u9fa5][-a-zA-Z0-9\u4e00-\u9fa5]{0,62}(\.[a-zA-Z0-9\u4e00-\u9fa5][-a-zA-Z0-9\u4e00-\u9fa5]{0,62})+\.?)/;
    return value ? reg.test(value) : true;
}, "输入域名的域名不正确！");;// END OF /scripts/jQuery/jquery.validate.min.js
// STARTS OF /share/jquery.vticker-min.js
/*
* vertical news ticker
* Tadas Juozapaitis ( kasp3rito@gmail.com )
* http://plugins.jquery.com/project/vTicker
*/
(function (a) { a.fn.vTicker = function (b) { var c = { speed: 700, pause: 4000, showItems: 3, animation: "", mousePause: true, isPaused: false, direction: "up", height: 0 }; var b = a.extend(c, b); moveUp = function (g, d, e) { if (e.isPaused) { return } var f = g.children("ul"); var h = f.children("li:first").clone(true); if (e.height > 0) { d = f.children("li:first").height() } f.animate({ top: "-=" + d + "px" }, e.speed, function () { a(this).children("li:first").remove(); a(this).css("top", "0px") }); if (e.animation == "fade") { f.children("li:first").fadeOut(e.speed); if (e.height == 0) { f.children("li:eq(" + e.showItems + ")").hide().fadeIn(e.speed) } } h.appendTo(f) }; moveDown = function (g, d, e) { if (e.isPaused) { return } var f = g.children("ul"); var h = f.children("li:last").clone(true); if (e.height > 0) { d = f.children("li:first").height() } f.css("top", "-" + d + "px").prepend(h); f.animate({ top: 0 }, e.speed, function () { a(this).children("li:last").remove() }); if (e.animation == "fade") { if (e.height == 0) { f.children("li:eq(" + e.showItems + ")").fadeOut(e.speed) } f.children("li:first").hide().fadeIn(e.speed) } }; return this.each(function () { var f = a(this); var e = 0; f.css({ overflow: "hidden", position: "relative" }).children("ul").css({ position: "absolute", margin: 0, padding: 0 }).children("li").css({ margin: 0, padding: 0 }); if (b.height == 0) { f.children("ul").children("li").each(function () { if (a(this).height() > e) { e = a(this).height() } }); f.children("ul").children("li").each(function () { a(this).height(e) }); f.height(e * b.showItems) } else { f.height(b.height) } var d = setInterval(function () { if (b.direction == "up") { moveUp(f, e, b) } else { moveDown(f, e, b) } }, b.pause); if (b.mousePause) { f.bind("mouseenter", function () { b.isPaused = true }).bind("mouseleave", function () { b.isPaused = false }) } }) } })(jQuery);;// END OF /share/jquery.vticker-min.js
// STARTS OF /share/global.js
function isDomain(str){
  if(/^[0-9a-z\.]+[0-9a-z\-0-9a-z]+[\.]+[0-9a-z]+$/.test(str)==false) return false;
  else return true;
}

function isEmail(s){
	var regx = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	return regx.test(s);
}

function isTel(s){
	var regx = /^(86\-)?\d{2,4}\-\d{6,10}(\-\d+)?$/;
	return regx.test(s);
}

function isMobile(s){
	var regx = /^(0)?(1)\d{10}$/;
	// 非简体中文站走国际验证，只需验证是否按指定字符组合即可，不再验证格式
    if (getCookie('Lang') != 'cn') {
        regx = /^[\(\)\+\-\d]{8,17}$/;
    }
	return regx.test(s);
}

function isPostCode(s){
	var regx = /^\d{6}$/;
	return regx.test(s);
}

function isChinese(s){
	var rxp = /^[\u4e00-\u9fa5]+$/g;
	return rxp.test(s);
}

function isPostCode(str)
{
    var reg = /^[0-9]{6}$/;
    return (reg.test(str));
}

function isNumber(s)
{
	var rxp = /^(-|\+)?\d+(\.\d+)?$/;	
	return rxp.test(s);
}

function isInt(s)
{
    var rxp = /^\d+$/
	return rxp.test(s);
}

function isIdCard(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格                     
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证    
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split(""); 		// 得到身份证数组   
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {   //进行18位身份证的基本验证和第18位的验证
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
    if (temp_date.getYear() != parseFloat(year)
            || temp_date.getMonth() != parseFloat(month) - 1
            || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
  
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];    // 加权因子   
    var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];            // 身份证验证位值.10代表X 
    var sum = 0;                             // 声明加权求和变量   
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作   
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和   
    }
    valCodePosition = sum % 11;   	// 得到验证码所位置   
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}

function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题   
    if (temp_date.getFullYear() != parseFloat(year)
          || temp_date.getMonth() != parseFloat(month) - 1
          || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function GetEvent(){
	if(document.all) return window.event;//如果是ie
	func = GetEvent.caller;
	while(func != null){
		var arg0 = func.arguments[0];
		if(arg0)
		{
			if((arg0.constructor == Event || arg0.constructor == MouseEvent) ||(typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation))
			{
				return arg0;
			}
		}
		func = func.caller;
	}
	return null;
}

//trim()
String.prototype.trim = function() {
	return (this.replace(/^\s+|\s+$/g,""));
}
//ltrim()
String.prototype.ltrim = function() {
	return (this.replace(/^\s*/,""));
}
//rtrim()
String.prototype.rtrim = function() {
	return (this.replace(/\s*$/,""));
}
//delete html tags
String.prototype.stripTags = function() {
	return this.replace(/<\/?[^>]+>/gi, '');
}

function numberCeil(num, digit) {
    digit = parseInt(digit);
    if (isNaN(digit)) {
        digit = 0;
    }
    if (digit < 0)
        throw Exception('digit must be greater or equal than 0');
    var scale = 1;
    for (var i = 0; i < digit; i++) {
        scale *= 10;
    }
    return Math.ceil(num * scale) / scale;
}

//重载 setTimeout
var _st = window.setTimeout;
window.setTimeoutEx = function(fRef, mDelay) 
{ 
	if(typeof(fRef) == 'function')
	{ 
		var argu = Array.prototype.slice.call(arguments,2);
		var f = (function(){ fRef.apply(null, argu);});
		return _st(f, mDelay);
	}
	return _st(fRef,mDelay);
}
// end of 重载 setTimeout

//重载 setInterval
var _setInterval = window.setInterval;
window.setIntervalEx = function(fRef, mDelay) 
{ 
	if(typeof(fRef) == 'function')
	{ 
		var argu = Array.prototype.slice.call(arguments,2);
		var f = (function(){ fRef.apply(null, argu);});
		return _setInterval(f, mDelay);
	}
	return _setInterval(fRef,mDelay);
}
// end of 重载 setInterval

/*
  Cookie 相关函数
*/
function getCookieVal(offset) 
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
function getCookie(cname)
{
    var cookie = {};
    var all = document.cookie;
    if (all === "") {
        return cookie;
    }
    var list = all.split("; ");
    for (var i = 0; i < list.length; i++) {
        var temp = list[i];
        var pos = temp.indexOf("=");
        var name = temp.substring(0, pos);
        var value = temp.substring(pos + 1);
        try{
            value = decodeURIComponent(value);
        }catch(ex){
            console.log(ex);
        }
        cookie[name] = value;
    }
    return cookie[cname];
	// var arg = name + "=";
	// var alen = arg.length;
	// var clen = document.cookie.length;
	// var i = 0;
    // var cookieArr = document.cookie.split(';'),
    //     cookieLen = cookieArr.length;
    // for(var i; i <cookieLen;i++){
    //     var c2 = cookieArr[i].split('=');
    //     c2[0] = $.trim(c2[0]);
    //     if(c2[0] == name){
    //         return c2[1];
    //     }
    // }
	// while (i < clen) 
	// {
	// 	var j = i + alen;
	// 	if (document.cookie.substring(i, j) == arg) {
 //            if(i == 0) return getCookieVal (j);
 //            else if(/[\s;]/.test(document.cookie[i-1])) return getCookieVal (j);
 //        }
	// 	i = document.cookie.indexOf(" ", i) + 1;
	// 	if (i == 0) break; 
	// }
	// return null;
}
function SetCookie(name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) +
        ((expires == null) ? "" : (typeof expires === "number" ? "; max-age=" + expires : "; expires=" + expires.toGMTString())) +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
}
if(typeof setCookie == 'undefined') setCookie = SetCookie;
/*
var expdate = new Date();
expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); //一年后过期
SetCookie("WebTongCid", WebTongCid, expdate ,"/");
*/
//** end of Cookie 相关函数
if(typeof(formatColorHex) == 'undefined'){
	function formatColorHex(color) {
		var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
		/*RGB颜色转换为16进制*/
		if (/^(rgb)/i.test(color)) {
			var aColor = color.replace(/(?:\(|\)|rgb)*/gi, "").split(",");
			var strHex = "#";
			for (var i = 0; i < aColor.length; i++) {
				var hex = Number(aColor[i]).toString(16);
				if (hex.length == 1) {
					hex = "0" + hex;
				} //问题出在这里
				if (hex === "0") {
					hex += hex;
				}
				strHex += hex;
			}
			if (strHex.length !== 7) {
				strHex = color;
			}
			return strHex;
		} else if (reg.test(color)) {
			var aNum = color.replace(/#/, "").split("");
			if (aNum.length === 6) {
				return color;
			} else if (aNum.length === 3) {
				var numHex = "#";
				for (var i = 0; i < aNum.length; i += 1) {
					numHex += (aNum[i] + aNum[i]);
				}
				return numHex;
			}
		} else {
			return color;
		}
	}
}

//动态加载 jscript
window.addedScript = {};
function addScript(path,callback,afterPageLoaded) {
	if(window.addedScript[path]){
		if(window.addedScript[path]== -1 && typeof callback == 'function'){
			setTimeout(function(){addScript(path,callback,afterPageLoaded)},50);
			return;
		}
		if(window.addedScript[path] == 1){
			console.log(path + " have already loaded ");
			if (typeof callback == 'function') callback();
			return;
		}
	}
	window.addedScript[path] = -1;
	var addfun = function(){
		var fileref = document.createElement("script")
		fileref.type = "text/javascript";
		fileref.src = path;
		if (typeof fileref.onload != 'undefined') {
			fileref.onload = function(){
				window.addedScript[path] = 1;
				if (typeof callback == 'function') callback();
			};
		}
		else {
			fileref.onreadystatechange = function () {
				if (this.readyState == "loaded" || this.readyState == "complete") {
					window.addedScript[path] = 1;
					if (typeof callback == 'function') callback();
				}
			};
		}
		var headobj = document.getElementsByTagName('head')[0];
		headobj.appendChild(fileref);
	};
	if(afterPageLoaded){
		if(window.addEventListener) window.addEventListener('load', function(){ addfun(); }, false);
		else window.attachEvent('onload', function(){ addfun(); });
	}else addfun();
}
//动态加载一大波 jscript，保证按顺序加载
function addScripts(paths, callback, afterPageLoaded) {
    paths = paths || [];
    var lastCb = callback;
    for (var i = 0; i < paths.length; i++) {
        lastCb = (function () {
            var path = paths[paths.length - 1 - i];
            var cb = lastCb;
            var afterPageLoaded1 = afterPageLoaded;
            return function () {
                addScript(path, cb, afterPageLoaded1);
            }
        })(i);
    }
    lastCb();
}

window.addedCss = {};
function loadStyleSheet(path,afterPageLoaded){
	if(window.addedCss[path]){
		console.log(path + " have already loaded ");
		return;
	}
	if(afterPageLoaded) $(window).load(function(){ $('<link href="'+path+'" type="text/css" rel="stylesheet"/>').appendTo('head'); });
	else $('<link href="'+path+'" type="text/css" rel="stylesheet"/>').appendTo('head');
	window.addedCss[path] = true;
}

//判断一个变量是否是对象
function isObject(obj) {
	if (obj && typeof obj == "object" && (obj instanceof Array) == false) {
		return true;
	}
	return false;
}

//判断一个变量是否是数组
function isArray(obj) {
	if (obj && typeof obj == "object" && (obj instanceof Array) == true) {
		return true;
	}
	return false;
}

(function ($) {
    $.fn.extend({
        "addrSelector":function(options){
            var defaults = {
                loadDefaultAddr: null,
                selectAddr: $.noop,
                createNewAddr: $.noop,
                selectedAddrID: 0,
                isShowIdCardNo: false,
                isManagePage:false//是不是地址管理页面 by hui
            };
            var opts = $.extend({}, defaults, options);
            return this.each(function () {
                if (typeof opts.loadDefaultAddr == 'function') {
                	$.getJSON('/index.php?c=front/Useraddr&a=GetDefaultAddr', {}, function (json) {
                        if (!json.success) {
                            alert(json.msg);
                            return;
                        }
                        opts.loadDefaultAddr(json.addr);
                        if (json && json.addr && !isNaN(Number(json.addr.ID)) && parseInt(json.addr.ID) > 0) {
                            opts.selectedAddrID = parseInt(json.addr.ID);
                        }
                    });
                }
                if(opts.isManagePage){
                    getUserAddrList(opts);
                }else{
                    $(this).off('click.showAddrSelector').on('click.showAddrSelector', function () {
                        getUserAddrList(opts);
                    })
                }
                    
            });
        }
    });
    var getUserAddrList = function(opts){
        if ($('#userAddrContent').length == 0) {
            $.extend({
                selectAddr: function (addr) {
                    if (typeof opts.selectAddr == 'function')
                        opts.selectAddr(addr);
                },
                createNewAddr: function (addr) {
                    if (typeof opts.createNewAddr == 'function')
                        opts.createNewAddr(addr);
                },
                selectedAddrID: opts.selectedAddrID,
                isShowIdCardNo: opts.isShowIdCardNo,
                isManagePage:opts.isManagePage
            });
            $.ajax({
                type: 'get',
                url: '/index.php?c=front/Useraddr',
                dataType: 'html',
                success: function (msg) {
                    $(msg).hide().appendTo('body');
                    $('#userAddrContent').stop().fadeIn();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.responseText);
                }
            })
        } else {
            // $('#userAddrContent .addrList .addr .selectbtn').css('display','none');
            // $('#userAddrContent .addrList .addr[addrID=' + $.selectedAddrID + '] .selectbtn').css('display','inline-block');
            $('#userAddrContent .addrList .addr .select-status').hide();
            $('#userAddrContent .addrList .addr[addrID=' + $.selectedAddrID + '] .select-status').show();
            $('#userAddrContent').stop().fadeIn();
        }
    };
})(window.jQuery);

(function ($) {
    $.fn.extend({
        "districtSeletor": function (options) {
            if (options == 'setValue') {
                dataBind(arguments[1] || {}, this);
                return this;
            } else {
                return this.each(function () {
                    var opts = $.extend({}, defaults, options);
                    var $this = $(this);
                    var sHtml = '';
                    sHtml = '<style>.districtSelector select{margin: 0.5rem 0.3rem 1rem;min-width: 4rem;}</style>'
                    sHtml += '<select class="level level1" level="1" name="country"><option value="1">中国</option><option value="-1">其他</option></select>';
                    sHtml += '<select class="level level2" level="2" name="province"></select>';
                    sHtml += '<select class="level level3" level="3" name="city"></select>';
                    sHtml += '<select class="level level4" level="4" name="district"></select>';
                    $this.html(sHtml).addClass('districtSelector')//.attr('relid=' + relid);

                    if (opts.showCountry) {
                        $this.find('.level1').show();
                    } else {
                        $this.find('.level1').hide();
                    }

                    $this.find('.level1').on('change', function () {
                        if ($(this).val() == 1) {
                            $(this).nextAll('select').show();
                            getNextLevelList(this);
                        } else {
                            $(this).nextAll('select').hide();
                        }
                    })

                    $this.find('.level2, .level3').on('change', function () {
                        getNextLevelList(this);
                    });

                    dataBind(opts, $this);
                });
            }
        }
    });
    var defaults = {
        countryID: 1,
        provinceID: null,
        cityID: null,
        districtID: null,
        showCountry: 1
    };
    var getNextLevelList = function (selectElem) {
        selectElem = $(selectElem);
        var id = parseInt(selectElem.val());
        if (isNaN(id)) return;
        var level = parseInt(selectElem.attr('level'));
        selectElem.nextAll('select').html('<option value="0">--请选择--</option>');
        if (id <= 0) return;

        $.ajax({
            type: 'get',
            url: '/index.php?c=front/district&a=getChildrenList',
            data: { act: 'getChildrenList', id: id },
            async: false,
            dataType: 'json',
            success: function (json) {
                if (!json.success) {
                    alert(json.msg);
                    return;
                }
                var targetSelectElem = selectElem.nextAll('.level' + (level + 1));
                var list = json.list || [];
                for (var i = 0; i < list.length; i++) {
                    targetSelectElem.append('<option value="' + list[i].ID + '">' + list[i].Name + '</option>');
                }
                if (list.length == 0) {
                    targetSelectElem.hide();
                    targetSelectElem.nextAll('.level' + (level + 2)).hide();
                    targetSelectElem.nextAll('.level' + (level + 3)).hide();
                } else {
                    targetSelectElem.show();
                    targetSelectElem.nextAll('.level' + (level + 2)).show();
                    targetSelectElem.nextAll('.level' + (level + 3)).show();
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.responseText);
            }
        })
    };
    var dataBind = function (opts, $this) {
        if (opts.countryID && parseInt(opts.countryID) > 0) {
            $this.find('.level1').val(opts.countryID).change();
        } else {
            $this.find('.level1').val(-1).change();
        }
        if (opts.provinceID && parseInt(opts.provinceID) > 0) {
            $this.find('.level2').val(opts.provinceID).change();
        }
        if (opts.cityID && parseInt(opts.cityID) > 0) {
            $this.find('.level3').val(opts.cityID).change();
        }
        if (opts.districtID && parseInt(opts.districtID) > 0) {
            $this.find('.level4').val(opts.districtID).change();
        }
    };
    $.fn.districtSeletor.setValue = function (opts) {
        dataBind(opts);
    }
})(window.jQuery);
// 获取当前页面url参数
if (!window.location.getQueryString) window.location.getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}

var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode: function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

};// END OF /share/global.js
// STARTS OF /share/JScript.js
$(function () {
  if (getCookie("SiteType") == "1") {
    $(window).resize(function (e) {
      if (e.target === window) {
        showhideNav();
        computeFreeModulePosition();
        computeJiuGondHeight();
      }
    });
    $(window).load(function () {
      showhideNav();
      computeFreeModulePosition();
    });
  }

  $(window).load(function () {
    initHoverAnimate();
  });

  doSomeWhanPreview();
  keepFullScreenModules100Width();
  //广告
  if ($("#ChargeTips").height()) {
    $("body > .ModuleItem").each(function (i, item) {
      $(item).css("top", parseInt($(item).css("top")) + $("#ChargeTips").height());
    });
  }
  setMobileNav();
  matchNavAndFootNavBgColor();
  setModuleCls();
  NewsList();

  TopNewLoad();
  BindPagerAction(); //接管模块的分页链接，用ajax请求
  SetImageWidth();
  setZonePadding();

  var $container = $('.masonry-container');
  if ($container.length > 0) {
    $container.imagesLoaded(function () {
      $container.masonry({
        columnWidth: '.productItem',
        itemSelector: '.productItem'
      });
    });
  }

  replaceNewShopUrl();  // 强行改变建站的URL
  clearCancelorRedoData();

});

function initScroll() {
  window['curAnchorClick'] = false; // 判断是否为点击事件，以阻塞滚动、滚轮事件
  // 获取当前页面url
  // 对 url 进行相应处理
  var urlParam = window.location.href.toString().split("//");
  window['currUrlPath'] = urlParam[1].substring(urlParam[1].indexOf("/"));
  //  过滤可能存在的 ? 后携带参数
  if (window['currUrlPath'].indexOf('?') !== -1) {
    window['currUrlPath'] = window['currUrlPath'].split('?')[0];
  }
  //  过滤可能存在的 # 后携带参数
  if (window['currUrlPath'].indexOf('#') !== -1) {
    window['currUrlPath'] = window['currUrlPath'].split('#')[0];
  }
  if (window['currUrlPath'] == '/index.php') {
    window['currUrlPath'] = '/';
  }
  window['anchorVieArrOld'] = [];
  window['anchorVieArr'] = [];
  // 初始化时对当前可视区域锚点高亮
  onAnchorActive();
  onAnchorClick();
  onAnchorDblClick();
  onLoadScroll();
  onMousewheel();
}

var anchorInterval = null, // 锚点滚动定时器
    viewH = $(window).height();  //可见高度

// 获取锚点ModuleID
function getAnchorMID(href) {
  if (href == '') return false;
  href = href.toString();
  var tempArr= href.match(/module_(\d+)/i);
  return tempArr != null ? tempArr : false;
}
// 锚点或导航高亮
function onAnchorActive(id, delta) {
  var scroH = $(document).scrollTop();  //滚动高度
  window['anchorVieArrOld'] = window['anchorVieArr'] ? window['anchorVieArr'] : [];
  window['anchorVieArr'] = [];
  // 获取当前可视区域锚点集合
  $('.ModuleAnchorGiant').each(function () {
    var itemOffTop = parseInt($(this).parent('.ModuleItem').offset().top);
    if (itemOffTop >= scroH && itemOffTop <= (scroH + viewH)) {
      window['anchorVieArr'].push($(this).parent('.ModuleItem').attr('id').replace('module_', ''));
    }
  });
  if (!id) {
    var index = 0;
    if (window['anchorVieArr'].length > 0) {
      index = $.inArray(window['anchorVieID'], window['anchorVieArr']);
      if (delta != '') {
        index = delta > 0 ? index + 1 : index - 1;
      } else {
        index = window['oldScroH'] < scroH ? index + 1 : index - 1;
      }
    }
    index = index < 0 ? 0 : (index >= window['anchorVieArr'].length ? (window['anchorVieArr'].length - 1) : index);
    id = window['anchorVieID'] = window['anchorVieArr'][index];
  }
  id = id ? id.replace('module_', '') : id;
  // 锚导航高亮
  $('.ModuleAnchorTextGiant a').each(function () {
    if ($(this).attr('dataid') == id) {
      $(this).closest('ul').find('.active').removeClass('active');
      $(this).addClass('active');
      $(this).parent('li').addClass('active');
    }
  });
  // PC导航高亮
  $('.ModuleNavGiant a').each(function () {
    var hrefID = getAnchorMID($(this).attr('href'));
    if (hrefID) {
      if (hrefID[1] == id) {
        $(this).closest('.main-nav-content').find('.main-nav-item').removeAttr('iscurrent');
        $(this).closest('.main-nav-content').find('.on').removeClass('on');
        $(this).closest('.main-nav-content').find('.main-nav-item-hover').removeClass('main-nav-item-hover');
        $(this).closest('.main-nav-content').find('.navMainItemHover').removeClass('navMainItemHover');
        $(this).closest('.main-nav-item-group').find('.main-nav-item').addClass('main-nav-item-hover');
        $(this).closest('.main-nav-item-group').find('.main-nav-item').addClass('navMainItemHover');
        $(this).closest('.main-nav-item-group').find('.main-nav-item').attr('iscurrent', 1);
        $(this).closest('.main-nav-item-group').parent().addClass('on');
      }
    }
  });
  // Mobile导航高亮
  $('.ModuleMobileNavGiant a').each(function () {
    var hrefID = getAnchorMID($(this).attr('href'));
    if (hrefID && window['curAnchorClick']) { //不是点击不用高亮，避免在PC滚动时收起面板
      if (hrefID[1] == id) {
        if ($('.containers.view-change').length > 0){
          $(this).closest('#accordion').find('.active').removeClass('active');
          $(this).parent().addClass('active');
          $('.lcbody').click();
          $('.containers').removeClass('view-change');
        }
      }
    }
  });
}

// 处理锚点点击事件
function handleAnchorClick(curHref, target, evt) {
  var tempArr =  curHref.split('#');
  //  过滤可能存在的 ? 后携带参数
  if (tempArr[0].indexOf('?') > -1) tempArr[0] = tempArr[0].split('?')[0];
  if (window['currUrlPath'].indexOf(getCookie('Lang')) > -1 && tempArr[0] == '/' && tempArr[0].indexOf(getCookie('Lang')) < 0)
    tempArr[0] = window['currUrlPath'];
  var AnchorMID = getAnchorMID(curHref);
  // 当前页面且是锚点不触发浏览器添加链接的冒泡
  if (AnchorMID && (window.location.href.toString().indexOf(tempArr[0]) > -1 || tempArr[0] == window['currUrlPath'])) {
    if ($("#"+AnchorMID[0]).length > 0) {
      if ( evt && evt.preventDefault ) evt.preventDefault();
      else window.event.returnValue = false;

      window['curAnchorClick'] = true;
      onAnchorActive(AnchorMID[0]);
      // 移动端无法触发滚动条只能直接跳转
      if (window.innerWidth < 768) {
        window.location.href = "#" + AnchorMID[0];
        window['curAnchorClick'] = false;
      } else {
        $('html,body').animate({scrollTop: $("#"+AnchorMID[0]).offset().top}, 1000, 'linear', function () {
          window['curAnchorClick'] = false;
        });
      }
    } else {
      if (target == '_blank') window.open(curHref);
      else window.location.href = curHref;
    }
  } else {
    if (target == '_blank') window.open(curHref);
    else window.location.href = curHref;
  }
  return false;
}

// 监听滚轮事件，目前只为给锚点高亮
function onMousewheel() {
  $(window).bind('mousewheel', function(event) {
    var delta = -event.originalEvent.wheelDelta || event.originalEvent.detail;  //firefox使用detail:下3上-3,其他浏览器使用whe
    if(anchorInterval) clearTimeout(anchorInterval);
    anchorInterval = setTimeout(onAnchorActive(0, delta),200);
  });
}

// 监听滚动事件，目前只为给锚点高亮
function onLoadScroll() {
  $(window).scroll(function() {
    if(window['curAnchorClick']) return;  // 当前触发滚动是因为点击事件则return
    window['oldScroH'] = $(document).scrollTop();
    if(anchorInterval) clearTimeout(anchorInterval);
    anchorInterval = setTimeout(onAnchorActive,150);
  });
}

// 锚点、导航单击事件
function onAnchorClick() {
  $(document).off('click.anchor_click').on('click.anchor_click', '.ModuleAnchorTextGiant a,.ModuleNavGiant a,.ModuleMobileNavGiant li a', function (evt) {
    var curHref = $(this).attr('datahref') ? $(this).attr('datahref') : $(this).attr('href');
    handleAnchorClick(curHref, $(this).attr('target'), evt);
    return false;
  })
}

// 锚点双击事件
function onAnchorDblClick() {
  $('body').off('dblclick.anchor_dblclick').on("dblclick.anchor_dblclick", '.ModuleAnchorTextGiant a,.ModuleNavGiant a,.ModuleMobileNavGiant a', function(evt){
    var curHref = $(this).attr('datahref') ? $(this).attr('datahref') : $(this).attr('href');
    handleAnchorClick(curHref, $(this).attr('target'), evt);
    return false;
  })
}

function clearCancelorRedoData() {
  if (typeof(CanDesign) == 'undefined' || CanDesign != "True") return false;
  $.ajax(
    {
      url: "/index.php?c=Front/CancelOrRedo&a=clearData",
      dataType: "json",
      success: function (json) {
        var status = !window.cancelOrRedoObj
        addScript('/scripts/CancelOrRedo.js', function () {
          if (status) {
            window.cancelOrRedoObj = new cancelorredo();
          }
          window.cancelOrRedoObj.cancellist = [];
          window.cancelOrRedoObj.redolist = [];
          window.cancelOrRedoObj.tempdata = [];
        });
      }
    });
}

function isMobileBroswer() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  var bIsWeixin = sUserAgent.match(/micromessenger/i) == "micromessenger";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsWeixin) {
    return true;
  } else {
    return false;
  }
}

function setZonePadding() {
  if ($("#BodyLeftZone").length > 0 && $("#BodyLeftZone").css("display") != "none") $("#BodyMain1Zone,#BodyMain2Zone,#BodyMain3Zone,#BodyMain4Zone").css({"padding-left": "3px"});
  else $("#BodyMain1Zone,#BodyMain2Zone,#BodyMain3Zone,#BodyMain4Zone").css({"padding-left": "0px"});
  if ($("#BodyRightZone").length > 0 && $("#BodyRightZone").css("display") != "none") $("#BodyMain1Zone,#BodyMain2Zone,#BodyMain3Zone,#BodyMain4Zone").css({"padding-right": "3px"});
  else $("#BodyMain1Zone,#BodyMain2Zone,#BodyMain3Zone,#BodyMain4Zone").css({"padding-right": "0px"});
  if (typeof CanDesign != 'undefined' && CanDesign == "True" && SiteType == "0") setTimeout(setZonePadding, 300);
}

function hasAbsoluteObj() {
  var flag = false;
  if (SiteType == "1") {
    $("#BodyHeaderZone,#BodyMain1Zone,#BodyFooterZone").find(".ModuleItem:visible").each(function (i, item) {
      if ($(item).css("position") == "absolute") {
        flag = true;
      }
    });
  }
  return flag;
}

function isJiFenPage() {
  if ($('#isJiFen').val() === '1') {
    return 1;
  } else {
    return 0;
  }
}

// 详情页面重新计算区域高度
function computeZoneHeight(zoneElem) {
  var oZone = $(zoneElem);
  if (!oZone.hasClass('ModuleHoverBoxContainer')) resizeZone(oZone);
  if (oZone.find(".ModuleProductDetail, .ModuleNewsDetail, .ModuleDownDetail").length > 0) {
    $(zoneElem).find('img').each(function () {
      this.onload = function () {
        resizeZone(oZone);
      }
    });
  }
  if (!oZone.hasClass('ModuleTabsContent') && !oZone.hasClass('ModuleHoverBoxContainer')) {
    setTimeout(function () {
      resizeZone(zoneElem)
    }, 500);
    setTimeout(function () {
      resizeZone(zoneElem)
    }, 1000);
    setTimeout(function () {
      resizeZone(zoneElem)
    }, 2000);
    setTimeout(function () {
      resizeZone(zoneElem)
    }, 4000);
  }
}

//h5 计算自由模块的横坐标
function zoneHasAbsoluteObj(zone) {
  var hasAbsolute = false;
  $(zone).find(".ModuleItem:visible").each(function (i, item) {
    if ($(item).css("position") == "absolute") {
      hasAbsolute = true;
    }
  });
  return hasAbsolute;
}

function computeFreeModulePosition(module) {
  if (SiteType != "1") return;
  window.nodelayimg = true; //H5站混合静态和自由模块时，不能使用图片延时加载，因为图片延时加载会改变页面的高度
  if (module) {
    var m = null;
    if (typeof module == 'object') m = $(module);
    else m = $('#' + module);
    var parent = m.closest("#HeaderZone,#FooterZone,#BodyMain1Zone");
    if ($(window).width() > 993) {
      if (m.attr('float') == 'free') {
        var helperid = 'freemodulehelper';
        var helper = $("#" + helperid);
        var left = helper.offset().left + parseInt(m.attr('floatx'));
        m.css({'visibility': 'visible', 'display': 'block', 'left': left + "px"});
      }
      m.parent().find('.ModuleGridContainer').each(function (i, grid) {
        $(grid).css('min-width', $(grid).css('max-width'));
      });
      //处理产品列表模块的响应横版PAD的功能
      m.parent().find('.productsBox').each(function (i, prolist) {
        for (var k = 1; k < 11; k++) {
          $(prolist).removeClass('col-md-' + k);
          $(prolist).removeClass('col-sm-' + k);
          $(prolist).removeClass('col-xs-' + k);
        }
        $(prolist).addClass('col-xs-' + $(prolist).attr('pc-col'));
      });
      computeZoneHeight(parent);
    } else {
      m.css({'visibility': 'hidden', 'display': 'none'});
      if (!zoneHasAbsoluteObj(parent)) parent.css("height", "auto");
      m.parent().find('.ModuleGridContainer').each(function (i, grid) {
        $(grid).css('min-width', '0');
      });
    }
  } else {
    var modules = $(".ModuleItem[float=free]");
    $.each(modules, function (i, item) {
      computeFreeModulePosition(item);
    });
  }
}

function resizeZone(oZone) {
  var iZoneHeight = 0;
  //var padscale = isPad();
  oZone.children('.ModuleItem:visible').each(function () {
    iZoneHeight = Math.max(iZoneHeight, $(this).outerHeight(false) + $(this).position().top);
  });
  oZone.css('height', iZoneHeight);
  if (getCookie("SiteType") == "1" && !zoneHasAbsoluteObj(oZone)) {
    $(oZone).css('height', 'auto');
  }
}

//让图片根据上级容器的尺寸自动适应大小
function resizeImage(imgo) {
  var img = new Image();
  img.src = $(imgo).prop('src');
  // 按比例缩放，原图小于外框不操作
  var bw = $(imgo).parent().width();
  var bh = $(imgo).parent().height();
  var ow = img.width;
  var oh = img.height;
  var nw, nh;

  if (ow > bw || oh > bh) {
    if (ow / oh >= bw / bh) {
      nw = bw;
      nh = nw * oh / ow;
    } else if (ow / oh < bw / bh) {
      nh = bh;
      nw = nh * ow / oh;
    }
  } else {
    nw = ow;
    nh = oh;
  }
  $(imgo).width(nw);
  $(imgo).height(nh);
  $(imgo).css({'margin-top': (bh - $(imgo).outerHeight(false)) / 2 + 'px'});
}

function SetImageWidth() {
  if (SiteType == "1") {
    $("img").each(function () {
      if ($(this).closest('.ModuleNewsDetail').length > 0 || $(this).closest('.ModuleJiuGong,.ModuleJiuGongV2').length > 0) return true;
    });
    $('.goods-detail-content table').each(function () {
      if ($(this).width() > $("#pagebody").width()) {
        $(this).css('width', '100%');
      }
    });
  }
  $("img").each(function () {
    if ($(this).closest('.ModuleNewsDetail').length > 0 || $(this).hasClass('vCodeImg')) return true;
    if ($(this).width() > $("#pagebody").width() && $("#pagebody").length > 0) {
      var oldh = $(this).height();
      var oldw = $(this).width();
      try {
        var offsetp = $(this).closest(".ModuleItem").offset().left;
        var offset = $(this).offset().left;
        var offsetx = offset - offsetp;
        if (offsetx < 0) offsetx = 0;
      } catch (e) {
      }
      var w = parseInt($("#pagebody").width() * 0.95) - offsetx;
      var h = parseInt(oldh / (oldw / w));
      if (SiteType == 0) $(this).css({"width": w, "height": h});
    }
    if ($(this).closest('.PIMG').length == 0) {
      $(this).prop("src", $(this).attr("src"));
      $(this).on('load', function () {
        if ($(this).width > $("#pagebody").width()) {
          var oldh = $(this).height();
          var oldw = $(this).width();
          try {
            var offsetp = $(this).closest(".ModuleItem").offset().left;
            var offset = $(this).offset().left;
            var offsetx = offset - offsetp;
            if (offsetx < 0) offsetx = 0;
          } catch (e) {
          }
          var w = parseInt($("#pagebody").width() * 0.95) - offsetx;
          var h = parseInt(oldh / (oldw / w));
          $(this).css({"width": w, "height": h});
        }
      });
    }
  });
}

function showhideNav() {
  if ($("#MobileFootNav").attr("enable") == 1 && $("#pagebody").width() >= 751) {
    $('#MobileFootNav,#MobileFootNavRenderElem').hide();
  } else if ($("#MobileFootNav").attr("enable") == 1 && $("#pagebody").width() < 751) {
    $('#MobileFootNav,#MobileFootNavRenderElem').show();
  } else if ($("#MobileFootNav").attr("enable") == 0) {
    $('#MobileFootNav,#MobileFootNavRenderElem').hide();
  }

  if ($("#MobileNav").attr("enable") == 1 && $("#pagebody").width() >= 1200 || $("#MobileNav").attr("enable") == 1 && ($("#pagebody").width() >= 975 && $("#pagebody").width() < 1200)) {
    $('#MobileNav,#MobileNavRenderElem,#MobileNavFloatLayer,#MobileNavMask').hide();
    $('#pagebody').css("left", "0rem");
    $("#MobileFootNav").removeClass("showFloatNav");
  } else if ($("#MobileNav").attr("enable") == 1 && ($("#pagebody").width() >= 751 && $("#pagebody").width() < 975) || $("#MobileNav").attr("enable") == 1 && $("#pagebody").width() < 740) {
    $('#MobileNav,#MobileNavRenderElem,#MobileNavFloatLayer,#MobileNavMask').show();

    if ($("#MobileNav").attr("navnum") == 4 || $("#MobileNav").attr("navnum") == 6 || $("#MobileNav").attr("navnum") == 7) {
      $('#MobileNavRenderElem').hide();
    } else {
      $('#MobileNavRenderElem').show();
    }
    if ($("#MobileNavFloatLayer").hasClass("showFloatNav") == false) {
      $('#pagebody').css("left", "0rem");
      $("#MobileFootNav").removeClass("showFloatNav");
    } else {
      if ($("#MobileNav").attr("navnum") == 5) {
        $('#pagebody').css("left", "6.25rem");
        $("#MobileFootNav").addClass("showFloatNav");
      } else if ($("#MobileNav").attr("navnum") == 1) {
        $('#pagebody').css("left", "10rem");
        $("#MobileFootNav").addClass("showFloatNav");
      }
    }
  } else if ($("#MobileNav").attr("enable") == 0 && $("#pagebody").width() > 1200 || $("#MobileNav").attr("enable") == 0 && ($("#pagebody").width() >= 975 && $("#pagebody").width() < 1200) || $("#MobileNav").attr("enable") == 0 && ($("#pagebody").width() >= 751 && $("#pagebody").width() < 975) || $("#MobileNav").attr("enable") == 0 && $("#pagebody").width() < 740) {
    $('#MobileNav,#MobileNavRenderElem,#MobileNavFloatLayer,#MobileNavMask').hide();
  }

  if ($('#MobileNav').attr('navnum') == 4) {
    if ($("#pagebody").width() < 740) {
      $('#MobileNavFloatLayer').css("left", "18.9%")
    } else if ($("#pagebody").width() > 500 && $("#pagebody").width() <= 751) {
      $('#MobileNavFloatLayer').css("left", "13%")
    } else if ($("#pagebody").width() > 751 && $("#pagebody").width() <= 975) {
      $('#MobileNavFloatLayer').css("left", "11.5%")
    } else {
      $('#MobileNavFloatLayer').css("left", "8%")
    }
  }

  if ($("#pagebody").width() > 768) {
    $(".FootNavMask,.FootNavQRCodeImg,.QQList").hide();
    $(".goods-btn").show();
  } else {
    $(".FootNavMask,.FootNavQRCodeImg,.QQList").show();
    $(".goods-btn").hide();
  }

  if ($("#MobileFootNav").length > 0) {
    if ($("#MobileFootNav").is(":hidden")) {
      $('#pagebody').css('padding-bottom', "0")
    } else {
      $('#pagebody').css('padding-bottom', $("#MobileFootNav").height());
    }
  }

  $(".FootNavQRCodeImg").css({
    "width": "192px",
    "height": "192px",
    "top": "initial",
    "bottom": $('#MobileFootNav').innerHeight(),
    "left": ($('body').outerWidth() / 2 - $(".FootNavQRCodeImg").outerWidth() / 2)
  });
}

function TopNewLoad() {
  $(".TopNews").each(function () {
    var repNum = Number($(this).attr("lang"));
    var iWidth = ($(this).width() / repNum) - (repNum * 10); //($(this).find("li").width() / repNum) - (repNum * 10);
    $(this).find("li>span").css({"width": iWidth + "px", "margin-right": "8px"});
    $(this).find("li").each(function () {
      if ($(this).children("span").toArray().length > 1) {
        $(this).children("span").last().css({"margin-right": "0px", "float": "right"});
      }
    });
  });
}

function NewsList() {
  $(".BodyCenterNews").each(function () {
    var repNum = parseInt($(this).attr("RepeatNum")) > 0 ? parseInt($(this).attr("RepeatNum")) : 1;
    var iWidth = ($(this).find("li").width() / repNum) - (repNum * 9);
    $(this).find("i").css({/*"width": iWidth + "px",*/"margin-right": "5px", "overflow": "hidden"});
    $(this).find("li").each(function () {
      if ($(this).children("i").length > 1) {
        $(this).children("i").last().css({"margin-right": "0px", "float": "right"});
      }
    });

    if ($(this).attr("value") !== "") {
      var itemHeight = $(this).find(".vTicker").find("li").height();
      var iHeight = $(this).find(".vTicker>ul").height();
      var showItems = parseInt(iHeight / itemHeight);
      $(this).find(".vTicker").vTicker({
        speed: 500,
        pause: 3000,
        direction: $(this).attr("value"),
        mousePause: true,
        showItems: showItems
      }).css({"height": iHeight + "px"}).find("li").css({"padding": "0 5px"});
    }
  });
}

function ProductList() {
  $(".ModuleProductList").each(function () {
    if ($(this).find(".myslider").attr("value") !== "") {
      $(this).find(".myslider").easySlider({
        auto: true,
        continuous: true,
        vertical: false,
        controlsShow: false
      });
    }
  });
}

function SetProductListImage(module, sitetype) {
  if (typeof(module) != "object") module = $('#module_' + module);
  module.find('.PIMG>img').each(function () {
    var src = $(this).attr("src");
    $(this).attr("src", '');
    $(this).on('load', function () {
      resizeProductListImageSize(this);
    });
    $(this).attr("src", src);
  });
  initProductListEffect(module, sitetype);
}

function resizeProductListImageSize(img) {
  $(img).css({'width': 'auto', 'height': 'auto'}); //先清除图片的高宽
  var picWrapper = $(img).closest('.PicWrapper');
  var imgParent = $(img).parent();

  var imgp_pl = parseFloat(imgParent.css('padding-left') ? imgParent.css('padding-left') : 0);
  var imgp_pr = parseFloat(imgParent.css('padding-right') ? imgParent.css('padding-right') : 0);
  var imgp_pt = parseFloat(imgParent.css('padding-top') ? imgParent.css('padding-top') : 0);
  var imgp_pb = parseFloat(imgParent.css('padding-bottom') ? imgParent.css('padding-bottom') : 0);

  var imgp_bl = parseFloat(imgParent.css('border-left') ? imgParent.css('border-left') : 0);
  var imgp_br = parseFloat(imgParent.css('border-right') ? imgParent.css('border-right') : 0);
  var imgp_bt = parseFloat(imgParent.css('border-top') ? imgParent.css('border-top') : 0);
  var imgp_bb = parseFloat(imgParent.css('border-bottom') ? imgParent.css('border-bottom') : 0);

  var bw = picWrapper.innerWidth() - imgp_pl - imgp_pr - imgp_bl - imgp_br;
  var bh = picWrapper.innerHeight() - imgp_pt - imgp_pb - imgp_bt - imgp_bb;

  var ow = img.width;
  var oh = img.height;
  var nw, nh;

  if (ow > bw || oh > bh) {
    if (ow / oh >= bw / bh) {
      nw = bw;
      nh = nw * oh / ow;
    } else if (ow / oh < bw / bh) {
      nh = bh;
      nw = nh * ow / oh;
    }
  } else {
    nw = ow;
    nh = oh;
  }

  $(img).css({
    width: nw + 'px',
    height: nh + 'px'
  });
  $(img).css({'margin-top': (bh - $(img).outerHeight(false)) / 2 + 'px'});
  if ($(img).parent().css('text-align').toLowerCase() != 'center') {
    $(img).css({'margin-left': (bw - $(img).outerWidth(false)) / 2 + 'px'});
  }
}

function initProductListEffect(module, sitetype) {
  if (typeof(module) != "object") module = $('#module_' + module);
  var oProductList = $(module).find('.ProductList');
  var showstyle = oProductList.attr('showstyle');
  var direction = oProductList.attr('direction');
  var countPerGroup = oProductList.attr('repeatnum');
  if (CanDesign == "True" && showstyle > 0) {
    module.resize(function () {
      if (module.css("position") != 'absolute') oProductList.parent().css({
        'position': 'relative',
        overflow: 'hidden',
        'width': module.width() + "px"
      });
    });
  }
  if (sitetype == 1) {
    // 修复手机下，描述文字不确定导致".PDetail"高度不齐的的bug
    if (!module.attr("haschangedetail")) {
      iRepeatnum = parseFloat(oProductList.attr('repeatnum'));
      if (iRepeatnum == 0 || showstyle == 1 || showstyle == 2) {
        var iMaxHeight = 0;
        module.find('.PDetail').each(function () {
          iMaxHeight = Math.max(iMaxHeight, $(this).height());
        })
        module.find('.PDetail').css('height', iMaxHeight);
      } else {
        var iTotalLine = Math.ceil(module.find('.PDetail').length / iRepeatnum);
        var oPDetails = module.find('.PDetail');
        for (var i = 0; i < iTotalLine; i++) {
          var iMaxHeight = 0;
          oPDetails.each(function (j) {
            if (i * iRepeatnum <= j && j < (i + 1) * iRepeatnum) {
              iMaxHeight = Math.max(iMaxHeight, $(this).height());
            }
          })
          oPDetails.slice(i * iRepeatnum, (i + 1) * iRepeatnum).css('height', iMaxHeight);
        }
      }
      module.attr("haschangedetail", "1");
    }
  }
  if (window['effectInterval_' + module.attr('id')]) {
    clearInterval(window['effectInterval_' + module.attr('id')]);
  }
  if (module.length > 0) {
    if (showstyle == 1) { // 连续滚动
      var oProductBoxes = oProductList.children('.ProductBox').css({float: 'left'});
      if (sitetype == 1) {
        oProductList.find('center').css('display', 'inline-block');
        // 手机实际width通常是带小数的，但jquery所有方法返回宽度都是向下取的整数，所以为了计算准确，+1px
        oProductBoxes.css({width: 'auto'}).css({width: oProductBoxes.width() + 1});
      }
      var listWidth = module.width();
      oProductList.parent().css({'position': 'relative', overflow: 'hidden', 'width': module.width() + "px"});
      var iWidth = oProductBoxes.outerWidth(true) * oProductBoxes.length * 2;
      var iHeight = oProductBoxes.outerHeight(true);
      oProductList.css({
        position: 'relative',
        left: '0px',
        width: iWidth + 'px',
        height: iHeight + 'px',
        overflow: 'hidden'
      });
      if (module.width() > iWidth) return;
      if (module.attr('hasinit') != 1) {
        oProductList.append(oProductList.clone(true).children());
        module.attr('hasinit', 1);
      }
      ;
      var iRefreshInterval = 40;
      var iStep = 1;
      if (window['effectInterval_' + module.attr('id')]) {
        clearInterval(window['effectInterval_' + module.attr('id')])
      }
      window['effectInterval_' + module.attr('id')] = setInterval(function () {
        if (oProductList.attr('ishovering') == 1 && oProductList.attr('hoverstop') == 1) {
          return;
        }
        if (direction == 'left') {
          if (oProductList.position().left <= -oProductList.innerWidth() / 2) {
            oProductList.css('left', (oProductList.position().left + oProductList.innerWidth() / 2) + 'px');
          }
          oProductList.css('left', (oProductList.position().left - parseInt(oProductList.parent().css('padding-left')) - iStep) + 'px');
        } else {
          if (oProductList.position().left >= 0) {
            oProductList.css('left', (-oProductList.innerWidth() / 2) + 'px');
          }
          oProductList.css('left', (oProductList.position().left - parseInt(oProductList.parent().css('padding-left')) + iStep) + 'px');
        }
      }, iRefreshInterval);
    } else if (showstyle == 2) { // 一屏屏滚动
      var oProductBoxes = module.find('.ProductBox');
      var iGroupCount = Math.ceil(oProductBoxes.length / countPerGroup);
      for (var i = 0; i < iGroupCount; i++) {
        $(oProductBoxes.slice(i * countPerGroup, i * countPerGroup + countPerGroup)).wrapAll('<div class="ProductGroup"></div>');
      }
      if (sitetype == 1) {
        oProductBoxes.css({width: 'auto', height: 'auto', padding: '2px'});
      }
      oProductList.parent().css({'position': 'relative', overflow: 'hidden', 'width': module.width() + "px"});
      var oProductGroups = module.find('.ProductGroup');
      if (!oProductGroups.parent().is('.ProductGroupList')) {
        oProductGroups.wrapAll('<div class="ProductGroupList"></div>');
      }
      var oProductGroupList = module.find('.ProductGroupList');
      if (module.css("position") != "absolute") {
        iHeight = $(oProductBoxes[0]).height();
      }
      oProductGroupList.css({
        position: 'relative',
        top: '0px',
        width: module.innerWidth() * iGroupCount + 'px',
        overflow: 'hidden'
      });
      oProductGroups.css({float: 'left', width: module.innerWidth() + 'px', height: module.innerHeight() + 'px'});
      if (iGroupCount <= 1) {
        return;
      }
      if (direction == 'left') {
        oProductGroupList.css({left: '0px', right: 'auto'});
      } else {
        for (var i = 0; i < iGroupCount; i++) {
          oProductGroups = module.find('.ProductGroup');
          oProductGroups.eq(-1).insertBefore(oProductGroups.eq(i));
        }
        oProductGroupList.css({left: 'auto', right: module.innerWidth() * (iGroupCount - 1) + 'px'});
      }
      module.find('.PDetail').css('width', module.find('.PicWrapper').width());
      window['effectInterval_' + module.attr('id')] = setInterval(function () {
        if (module.find('.ProductList').attr('ishovering') == 1 && module.find('.ProductList').attr('hoverstop') == 1) {
          return;
        }
        var oProductGroupList = module.find('.ProductGroupList');
        var oProductGroups = module.find('.ProductGroup');
        if (direction == 'left') {
          oProductGroupList.animate({
            left: '-=' + oProductGroups.outerWidth(true) + 'px'
          }, 1000, function () {
            oProductGroups.eq(0).insertAfter(oProductGroups.eq(-1));
            oProductGroupList.css('left', 0);
          });
        } else {
          oProductGroupList.animate({
            right: '-=' + oProductGroups.outerWidth(true) + 'px'
          }, 1000, function () {
            oProductGroups.eq(-1).insertBefore(oProductGroups.eq(0));
            oProductGroupList.css('right', oProductGroups.outerWidth(true) * (iGroupCount - 1) + 'px');
          });
        }
      }, 6000);
    }
  }
}

function showShopModal(productid, e, productShowType, DetailUrl, Param_Target) {
  if (DetailUrl.indexOf('http') > -1) {
    window.open(DetailUrl, Param_Target);
    return false;
  }
  e = e || window.event;
  e.stopPropagation && e.stopPropagation();
  e.preventDefault && e.preventDefault();
  e.cancelBubble = true;
  if (!productid) {
    return false;
  }

  if (typeof productShowType == 'undefined') {
    productShowType = 0;
  }

  var productSkus = [];

  $.ajax({
    url: '/index.php?c=Front/ProductData',
    type: 'get',
    data: {id: productid, productShowType: productShowType},
    dataType: 'json',
    async: false,
    cache: false,
    success: function (json) {
      if (!json) {
        alert('无此商品');
        return;
      }
      var lg = json.lg;//多语言
      var windowWidth = $(window).width();

      productShowType = json.productShowType;

      productSkus = json.productSkus || [];

      var html = '';
      html += '<form name="ShopModalForm" method="post" action="/index.php?c=front/Productorder">';
      html += '<ul class="Jump_header">';
      html += '<li class="pro_appeal"><img src="' + (json.image + '').split(',')[0] + '"></li>';
      html += '<li class="ming">';
      html += '<div class="proTitle">' + json.name + '</div>';
      var priceStr = '<label style="margin-top: 6px;">' + (productShowType == 1 ? lg.point : lg.order_price) + '：</label>';
      priceStr += '<span class="price">' + (json.isSingleNorm ? (productShowType == 1 ? json.jf_convert : '￥' + parseFloat(json.price).toFixed(2)) : '') + '</span>';
      priceStr += ' <span style="font-size: 12px;color: #000;" class="Shtml" surplus="' + json.surplus + '">' + lg.pay_extra + '￥' + json.surplus + '</span>';
      html += '<div class="clearfix">' + priceStr + '</div>';
      if (!productShowType == 1) {
        html += '<div class="clearfix"><label>' + lg.market_price + '：</label><span class="marketPrice">￥' + (parseFloat(json.marketPrice) || 0).toFixed(2) + '</span></div>';
      }
      if (json.productQuantity >= 0) {
        html += '<div style="color: #7f7f7f"><label>' + lg.in_stock + '：</label><span class="productQuantity" productQuantity="' + json.productQuantity + '">' + json.productQuantity + '</span> ' + lg.unit_jian + '</div>';
      }

      if (!json.isSingleNorm) {
        var productAttrs = json.productAttrs || [];
        for (var i = 0; i < productAttrs.length; i++) {
          html += '<div class="clearfix" responsiveCtrl>';
          html += '<label style="margin-top:10px">' + productAttrs[i].AttrKeyName + '：</label>';
          html += '<ul class="sys_spec_text clearfix" style="float:left;">';
          var attrVals = productAttrs[i].AttrVals || [];
          for (var j = 0; j < attrVals.length; j++) {
            html += '<li attrkeyid="' + attrVals[j].AttrKeyID + '" attrvalid="' + attrVals[j].AttrValID + '"><a href="javascript:;">' + attrVals[j].AttrValName + '</a><i></i></li>';
          }
          html += '</ul>';
          html += '</div>';
        }
      }
      html += '<div class="pro_amount" responsiveCtrl>';
      html += '<label style="float: left;line-height: 40px;">' + lg.quantity + '：</label>';
      html += '<div class="amount">';
      html += '<span class="reduce">-</span>';
      html += '<span>';
      html += '<input type="text" name="Num" id="ShopModalProNum" value="1" style="border:none;text-align:center;width:30px;line-height:30px;">';
      html += '</span>';
      html += '<span class="add">+</span>';
      html += '</div>';
      html += '</div>';
      html += '<div class="btnSet" responsiveCtrl>';


      if (json.jf_convert != null) {
        // 积分产品不再加入购物车
        html += '<button type="button" class="btn Buy" islocation="1" isJiFenPage="1" >' + lg.buynow + '</button>';
      } else {
        html += '<button type="button" class="btn Buy" islocation="1" isJiFenPage="0" >' + lg.buynow + '</button>';
        html += '<button type="button" class="btn btn-default ShopCart" islocation="0" >' + lg.addtocart + '</button>';
      }

      html += '<button type="button" class="btn btn-link ViewCart">' + lg.view_cart + '</button>';
      html += '</div>';
      html += '</li>';
      html += '</ul>';
      html += '<input type="hidden" name="ProductID" value="' + productid + '"/>';
      html += '<input type="hidden" name="enableInventory" value="' + json.enableInventory + '"/>';
      html += '<input type="hidden" name="skuid"/>';
      html += '<input type="hidden" name="c" value="front/Productorder"/>';
      html += '<input type="hidden" name="Action" value="Add">';
      html += '</form>';

      var dialog = bootbox.dialog({
        title: lg.quick_purchase,
        message: html,
        show: false,
        className: 'shopCartModal',
        buttons: {}
      }).on('shown.bs.modal', function () {
        $('.pro_appeal').height($('.pro_appeal').width());
      }).on('hidden.bs.modal', function () {
        if (!window.CanDesign) {
          $('.swiper-container').each(function () {
            $(this)[0].swiper.startAutoplay();
          });
        }
      }).modal('show');
      $('.shopCartModal').css('z-index', '10000');
      var surplus = parseInt(json.surplus);
      if (isNaN(surplus) || surplus == 0) {
        $('.shopCartModal .Shtml').hide();
      } else {
        $('.shopCartModal .Shtml').show();
      }

      function checkValid() {
        if (!/^\d+$/.test($('#ShopModalProNum').val() + '')) {
          alert(lg.file_in_quantity);
          return;
        }
        var enableInventory = $('.shopCartModal [name=enableInventory]').val();
        if (enableInventory) {
          var productQuantity = parseInt($('.shopCartModal .productQuantity').attr('productQuantity'));
          if (!isNaN(productQuantity) && parseInt($('#ShopModalProNum').val()) > productQuantity) {
            alert(lg.not_exceed_stock);
            return false;
          }
        }
        if (productSkus.length > 0 && !$('.shopCartModal [name="skuid"]').val()) {
          alert(lg.select_spec);
          return false;
        }
        return true;
      }

      $('.shopCartModal .pro_amount').disableSelection();

      $('.shopCartModal .sys_spec_text>li').off().on('click', function () {
        if ($(this).hasClass('outOfStock')) {
          return;
        }

        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        } else {
          var attrkeyid = $(this).attr('attrkeyid');
          $('[attrkeyid=' + attrkeyid + ']').not(this).removeClass('selected');
          $(this).addClass('selected');
        }

        var attrkeycount = $('.shopCartModal .sys_spec_text').length;
        var attrvalselectedcount = $('.shopCartModal .sys_spec_text>li.selected').length;

        if (attrkeycount - attrvalselectedcount == 1 || attrkeycount == attrvalselectedcount) {
          $('.shopCartModal .sys_spec_text>li').removeClass('outOfStock');
          var elemAttrVals = $('.shopCartModal .sys_spec_text>li').not('.selected');
          elemAttrVals.each(function () {
            var path = '';
            var elemAttrValInOtherKeys = $('.shopCartModal .sys_spec_text').not($(this).closest('.shopCartModal .sys_spec_text')).find('li.selected');
            elemAttrValInOtherKeys.each(function () {
              path += $(this).attr('attrvalid') + ',';
            });
            path += $(this).attr('attrvalid');
            path = path.split(',').sort().join(',');
            for (var i = 0; i < productSkus.length; i++) {
              var sku = productSkus[i];
              var skuPath = (sku.Path || '').split(',').sort().join(',');
              if (skuPath == path) {
                if (sku.ProductQuantity <= 0) {
                  $(this).addClass('outOfStock');
                } else {
                  $(this).removeClass('outOfStock');
                }
                break;
              }
            }
          });
        } else {
          $('.shopCartModal .sys_spec_text>li').removeClass('outOfStock');
        }

        if (attrkeycount == attrvalselectedcount) {
          var attrkeyid = $(this).attr('attrkeyid');
          $('[attrkeyid=' + attrkeyid + ']').not(this).removeClass('selected');
          $(this).addClass('selected');

          var path = '';
          $('.shopCartModal .sys_spec_text>li.selected').each(function () {
            path += $(this).attr('attrvalid') + ',';
          });
          path = path.replace(/(^,)|(,$)/g, '');
          path = path.split(',').sort().join(',');

          var price = 0;
          var point = 0;
          var skuid = 0;
          var surplus = 0;
          var productQuantity = 0;
          for (var i = 0; i < productSkus.length; i++) {
            if (path == productSkus[i].Path.split(',').sort().join(',')) {
              point = productSkus[i].Jf_convert;
              price = productSkus[i].Price;
              skuid = productSkus[i].SkuID;
              surplus = productSkus[i].surplus;
              productQuantity = productSkus[i].ProductQuantity;
              break;
            }
          }
          var priceHtml = '';
          if (productShowType == 1) {
            point = parseFloat(point).toFixed(2);
            surplus = parseFloat(surplus).toFixed(2);
            $('.shopCartModal .price').text(point).data('singlePrice', price);
            $(".shopCartModal .Shtml").attr('surplus', surplus).html(lg.pay_extra + '￥' + surplus);
            var surplus = parseInt(json.surplus);
            if (isNaN(surplus) || surplus == 0) {
              $('.shopCartModal .Shtml').hide();
            } else {
              $('.shopCartModal .Shtml').show();
            }
            priceHtml = point;
          } else {
            price = parseFloat(price).toFixed(2);
            $('.shopCartModal .price').text('￥' + price).data('singlePrice', price);
          }
          $(".shopCartModal input[name=skuid]").val(skuid);
          $('.shopCartModal .productQuantity').text(productQuantity).attr('productQuantity', productQuantity);
        } else {
          var minVal = -1, maxVal = 0, productQuantity = 0;
          for (var i = 0; i < productSkus.length; i++) {
            var val = 0;
            if (productShowType == 1) {
              val = parseFloat(productSkus[i].Jf_convert);
            } else {
              val = parseFloat(productSkus[i].Price);
            }
            minVal = minVal == -1 ? val : Math.min(minVal, val);
            maxVal = maxVal == -1 ? val : Math.max(maxVal, val);
            productQuantity += parseInt(productSkus[i].ProductQuantity);
          }

          var pHtml = minVal.toFixed(2);
          if (minVal != maxVal) {
            pHtml = minVal.toFixed(2) + ' - ' + maxVal.toFixed(2);
          }
          if (productShowType != 1) {
            pHtml = '￥' + pHtml;
          }
          $(".shopCartModal .Shtml").hide();

          $('.shopCartModal .price').text(pHtml);//.data('singlePrice', price);
          $(".shopCartModal input[name=skuid]").val(skuid);
          $('.shopCartModal .productQuantity').text(productQuantity).attr('productQuantity', productQuantity);
        }
      });

      $('.shopCartModal .sys_spec_text>li:nth-child(1)').each(function () {
        $(this).click();
      });
      $(".shopCartModal .reduce").off().on('click', function () {
        var num = parseInt($("#ShopModalProNum").val());
        if (num == 1) return;
        else $("#ShopModalProNum").val(num - 1);
        var price = $('.shopCartModal .price').data('singlePrice');
      });
      $(".shopCartModal .add").off().on('click', function () {
        var num = parseInt($("#ShopModalProNum").val());
        $("#ShopModalProNum").val(num + 1);
        var price = $('.shopCartModal .price').data('singlePrice');
      });
      $(".shopCartModal #ShopModalProNum").off().on('change', function () {
        var num = parseInt($("#ShopModalProNum").val());
        var price = $('.shopCartModal .price').data('singlePrice');
      });
      if (json.isSingleNorm) {
        $('.shopCartModal .price').data('singlePrice', json.price);
      }

      $('.shopCartModal .ShopCart,.shopCartModal .Buy').off().on('click', function () {
        var islocation = $(this).attr('islocation');
        var skuid = $("form[name=ShopModalForm]").find("input[name=skuid]").val();
        var num = $("form[name=ShopModalForm]").find("input[name=Num]").val();
        if (!checkValid()) return false;

        $('.add-cart-result').remove();
        var hintHtml = '<div class="alert alert-danger add-cart-result" style="display:none;z-index:9999;background:#01bf65;color:white;border-color:#01a155"> <a href="#" class="close" style="color:white">&times;</a> <strong>' + lg.add_succ + '</strong> </div>';
        $(hintHtml).appendTo('body');
        $(".add-cart-result").find(".close").unbind('click').click(function () {
          $(".add-cart-result").hide();
          return false;
        });

        var url = '/index.php?c=front/Productorder&a=AddToCart&Action=Add&ProductID=' + productid + '&skuid=' + skuid + '&Num=' + num;
        var backurl = '/index.php?c=front/Productorder&Action=Add&ProductID=' + productid + '&skuid=' + skuid + '&Num=' + num;
        // 新底层更改加入购物车
        var params1 = "&productId=" + productid + "&skuId=" + skuid + "&count=" + num + '&isJiFen=' + isJiFenPage();
        var url = "/index.php?c=Api/shop/Cart&a=addToCart&" + params1;

        // 新底层更改立即购物
        var buyImmediately = getUrlParam('72e') == '72e' ? backurl : "/index.php?m=Home&c=front/Shop/Rewrite&a=buyImmediately&productId=" + productid + '&skuId=' + skuid + '&amount=' + num + '&isJiFen=' + $(this).attr('isJiFenPage');
        if (islocation == 1) {
          location.href = buyImmediately;
          return;
        }

        $.get(url, null, function (data, textStatus, jqXHR) {
          if (data.redirectUrl) {
            location.href = data.redirectUrl;
            return;
          }

          if (data.code == 200) {
            bootbox.hideAll();
            //立即购买会跳转
            if (islocation == 1) {
              location.href = backurl;
              return;
            }
            $(".add-cart-result").css({
              opacity: 1,
              top: ($(window).height() - $(".add-cart-result").outerHeight()) / 2 + $(window).scrollTop() + 'px',
              left: ($(window).width() - $(".add-cart-result").outerWidth()) / 2 + 'px',
              position: 'absolute',
              width: 'auto',
              height: 'auto'
            });
            $("#cartnum").html("(" + data.productnum + ")");
            $(".add-cart-result").slideToggle(300);
            setTimeout(function () {
              $(".add-cart-result").find(".close").click();
            }, 2000);

            // 加入购物车成功后，还需要给可能存在在页面中的 [ 购物车 ] 模块的数据增加相应的数量
            var ModuleShopCartGiantNumDom = $('.ModuleShopCartGiant .cart-pro-num-text');
            if (ModuleShopCartGiantNumDom) {
              // 获取原有的购物车数量
              var oldCartNumber = parseInt($.trim(ModuleShopCartGiantNumDom[0].innerHTML));
              // 跟现添加的数量相加，然后更新赋给所有的购物车模块
              ModuleShopCartGiantNumDom.text(oldCartNumber + parseInt(num));
            }
          } else {
            //没有登录的话直接跳到登录页面
            if (data.isLogin == '0') {
              location.href = '/index.php?c=front/Userlogin&a=GoLogin&BackUrl=' + escape(backurl);
              return;
            }
            if (data.redirectUrl) {
              location.href = data.redirectUrl;
              return;
            } else {
              alert(data.msg);
            }
          }
        }, "json");
      });

      $('.shopCartModal .ViewCart').off().on('click', function () {
        location = '/productorder';
      });

    },
    error: function () {
      alert('error');
    }
  });
}

function sortProductList(obj, moduleID, pageLink) {
  if ($(obj).hasClass('selected') && !$(obj).hasClass('sort')) return;
  var url = pageLink.replace("{PageNo}", 1);
  var orderBy = $(obj).attr('value') || '';
  var orderByStr = '&orderby=' + orderBy;
  var sortByStr = "";
  if ($.inArray(orderBy, ['price', 'lastest']) > -1) {
    sortByStr = '&sortby=' + ($(obj).hasClass('descent') ? 0 : 1);
  }

  var params = url.replace(new RegExp(/(\/)/g), '&');
  var paramss = params.replace(new RegExp(/(\-)/g), '=');
  var newUrl = '/index.php?c=front/LoadModulePageData' + paramss + orderByStr + sortByStr;
  $.ajax({
    url: newUrl, async: true, dataType: "text/html", complete: function (request, status, error) {
      $("#module_" + moduleID).replaceWith(request.responseText);
      BindPagerAction();
    }
  });
}

function checkBowerTip() {
  var $checkbower = $('<div id="checkBowerTip" style="display:block;z-index: 9999;width: 100%;padding:15px;height:auto;background: #fff9e8;border:1px solid #ffe08c;text-align: center;font-size: 14px;color:#333;position:fixed;top: 0;">' +
    '<span style="padding-right: 6%;font-family: 微软雅黑">当前浏览器版本过低，影响整体的访问体验.建议升级到IE9以上版本，或者下载<a style="font-size: 14px;color:#ff6700;" target="view_window" href="http://chrome.360.cn/">360浏览器</a>，<a style="font-size: 14px;color:#ff6700;" target="view_window" href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html">谷歌浏览器</a>等</span>' +
    '<img title="关闭" style="cursor: pointer;padding: 0 10px;" src="/images/close_ie.png"/>' +
    '</div>');
  $('body').prepend($checkbower);
  $checkbower.width(window.innerWidth);
  $checkbower.find('img').eq(0).click(function () {
    $checkbower.addClass('hidden');
  });
  if ($checkbower.width() < 400) $checkbower.css({
    'font-size': '12px',
    'padding': '5px 0',
    'text-align': 'left'
  }).find('span').eq(0).css('padding-right', '10px')
}

function filterProductList_Pc(obj1, obj2, moduleID, pageLink) {
  var url = pageLink.replace("{PageNo}", 1);
  var params = '';
  var filterid2 = $(obj2).attr('filterid');
  var valueid2 = $(obj2).attr('valueid');
  $(obj1).find('li').each(function (index, element) {
    var valueid = $(element).attr('valueid');
    var filterid = $(element).attr('filterid');
    if (filterid2 != filterid)
      params += valueid + ',';
  });
  if ($(obj2).hasClass('selected-light')) {
    params += valueid2 + ',';
  }
  var match = url.match(/filtervalue=([,]?\d+[,]?)+/);
  if (match && match.length > 1) {
    url = url.replace(/filtervalue=([,]?\d+[,]?)+/, 'filtervalue=' + params);
  } else {
    url += '/filtervalue-' + params;
  }
  var params = url.replace(new RegExp(/(\/)/g), '&');
  var paramss = params.replace(new RegExp(/(\-)/g), '=');
  var newUrl = '/index.php?c=front/LoadModulePageData' + paramss;
  $.ajax({
    url: newUrl, async: true, dataType: "text/html", complete: function (request, status, error) {
      //if(window.innerWidth > 992){
      //    //debugger
      //    //$("#module_" + moduleID +" .productListOrderCtrlTab").hide();
      //    //$("#module_" + moduleID +" .pro-container").replaceWith(request.responseText);
      //    $("#module_" + moduleID +" .pro-container").replaceWith(request.responseText);
      //    //$("#module_" + moduleID).replaceWith(request.responseText);
      //}
      //else{
      //
      //}
      // $("#module_" + moduleID +" .pro-container").replaceWith(request.responseText);
      $("#module_" + moduleID).replaceWith(request.responseText);
      BindPagerAction();
    }
  });
}

function filterProductList_Mobile(obj, moduleID, pageLink) {
  var url = pageLink.replace("{PageNo}", 1);
  var params = '';
  $(obj).find('li.items-active').each(function (index, element) {
    var valueid = $(element).attr('valueid');
    var filterid = $(element).attr('filterid');
    params += valueid + ',';
  });

  var match = url.match(/filtervalue=([,]?\d+[,]?)+/);
  if (match && match.length > 1) {
    url = url.replace(/filtervalue=([,]?\d+[,]?)+/, 'filtervalue=' + params);
  } else {
    url += '&filtervalue-' + params;
  }

  loadingText = getLang('loading') + '...';
  var pageLoadingHtml = '<div name="pageloading" class="PageLoading" style="position:fixed ! important;z-index: 9999">';
  pageLoadingHtml += '<div class="content" style="top:50%;height: 55px;width: 25%;left: 55%;background: rgba(0,0,0,.5);">';
  pageLoadingHtml += '<span class="iconfont icon-loading1 myrotateall" style="text-align: center;line-height:55px;color: #fff;font-size: 2rem;display: block;margin: 0 auto"></span>';
  pageLoadingHtml += '</div>';
  pageLoadingHtml += '</div>';
  $("#module_" + moduleID).children().append(pageLoadingHtml);
    var params = url.replace(new RegExp(/(\/)/g), '&');
    var paramss = params.replace(new RegExp(/(\-)/g), '=');
  //debugger
  var newUrl = '/index.php?c=front/LoadModulePageData&' + paramss;
  $.ajax({
    url: newUrl, async: true, dataType: "text/html", complete: function (request, status, error) {
      $("#module_" + moduleID).replaceWith(request.responseText);
      $("#module_" + moduleID).find('.PageLoading').remove();
      BindPagerAction();
    }
  });
}

// 初始化产品展示的瀑布流
function initProductListMasonry(moduleid) {
  var $container = $('#module_' + moduleid + ' .masonry-container');
  if ($container.length > 0) {
    $container.imagesLoaded(function () {
      $container.masonry({
        columnWidth: '.productItem',
        itemSelector: '.productItem'
      });
    });
  }
}

// 初始化产品展示
function initProductList(options) {
  if (typeof options.ModuleID == 'undefined' || typeof options.ShowStyle == 'undefined') return;

  var moduleid = parseInt(options.ModuleID);
  var showStyle = parseInt(options.ShowStyle);

  $(window).off('resize.productlistImgSizeType' + moduleid);
  $(window).off('resize.initProductListSlide' + moduleid);

  // 初始化瀑布流
  if (showStyle == 13) {
    initProductListMasonry(moduleid);
  }

  // 设置产品展示图片，确保比例
  var imgSizeType = options.ImgSizeType;
  setProductListImg(moduleid, showStyle, imgSizeType);

  // 是否显示滚动
  var isScroll = options.IsScroll;
  if (options.IsScroll == 1 && showStyle != 13) {
    var direction = options.Direction;
    $('#module_' + moduleid + ' .ModuleProductList .proMore').remove();
    $('#module_' + moduleid + ' .ModuleProductList').addClass('swiper-container');
    if (direction == 'right') {
      $('#module_' + moduleid + ' .ModuleProductList').attr('dir', "rtl");
    }
    $('#module_' + moduleid + ' .ModuleProductList .ProductList').addClass('swiper-wrapper').css('overflow', 'visible');
    $('#module_' + moduleid + ' .ModuleProductList .ProductList .productsBox').addClass('swiper-slide');
    var btnPrevNext = '<div class="swiper-button-prev btnPrev"></div><div class="swiper-button-next btnNext"></div>';
    $('#module_' + moduleid + ' .ModuleProductList').after(btnPrevNext);

    var slidePerGroup = calProductListSlidePerGroup(moduleid);
    var mySwiper = new Swiper('#module_' + moduleid + ' .swiper-container', {
      autoplay: 5000,
      speed: 1000,
      slidesPerView: slidePerGroup,
      slidesPerGroup: slidePerGroup,
      loopAdditionalSlides: slidePerGroup,
      spaceBetween: 0,
      autoplayDisableOnInteraction: false,
      loop: true
    });
    $(window).off('resize.initProductListSlide' + moduleid).on('resize.initProductListSlide' + moduleid, function () {
      var slidePerGroup = calProductListSlidePerGroup(moduleid);
      mySwiper.params.slidesPerGroup = slidePerGroup;
      mySwiper.params.slidesPerView = slidePerGroup;
      mySwiper.params.loopedSlides = slidePerGroup;
      mySwiper.updateSlidesSize();
      mySwiper.updateContainerSize();
      setProductListImg(moduleid, showStyle, imgSizeType);
    });
    $('#module_' + moduleid + ' .btnPrev').off().on('click', function () {
      mySwiper.animating = false;
      direction == 'left' ? mySwiper.slideNext() : mySwiper.slidePrev();
    }).disableSelection();
    $('#module_' + moduleid + ' .btnNext').off().on('click', function () {
      mySwiper.animating = false;
      direction == 'left' ? mySwiper.slidePrev() : mySwiper.slideNext();
    }).disableSelection();

  } else {
    $(window).off('resize.initProductListSlide' + moduleid);
  }

  if ($.inArray(showStyle, [11, 12, 13, 14, 15, 16]) > -1) {
    var productShowType = options.ProductShowType;
    // 购买按钮点击，弹出框
    var event = 'touchend.pro_join' + moduleid + ' click.pro_join' + moduleid;
    $(document).off(event).on(event, '#module_' + moduleid + ' .pro_join, #module_' + moduleid + ' .proBuyBtn', function (evt) {
      if (mySwiper) {
        if (mySwiper.animating) return false;
        mySwiper.stopAutoplay();
      }
      showShopModal($(this).attr('productid'), evt, productShowType);
      return false;
    });

    // 排序标签点击
    $('#module_' + moduleid + ' .orderCtrlPanel>li').off('touchend.orderCtrl click.orderCtrl').on('touchend.orderCtrl click.orderCtrl', function (e) {
      sortProductList(this, moduleid, options.PageLink);
    });
  }

  // 绑定更多点击事件
  var pcount = 2;
  var pagecount = options.PageCount;
  $('#module_' + moduleid + ' .ProductListMore').off("click").on("click", function (e) {
    if (pcount <= pagecount) {
      var url = options.PageLink.replace('{PageNo}', pcount);
      var self = this;
      $.ajax({
        type: "GET",
        url: '/index.php?c=front/LoadModulePageData&' + url.substring(url.indexOf("?") + 1),
        dataType: "html",
        success: function (response) {
          $resultlist = $(response).find(".ProductList");
          var newitems = $resultlist.find(".productsBox").clone();
          $('#module_' + moduleid + ' .ProductList').append(newitems);
          setProductListImg(moduleid, showStyle, imgSizeType);
          if ($(self).closest('.ModuleItem').find('.masonry-container').length > 0) {
            $('#module_' + moduleid + ' .ProductList').imagesLoaded(function () {
              $('#module_' + moduleid + ' .ProductList').masonry('appended', newitems);
            });
          }
          if (pcount == pagecount)
            $('#module_' + moduleid + ' .ProductListMore').removeClass('moreLoad').removeAttr('onclick').text(options.NoMoreProductText);
          pcount++;
        }
      });
    }
  });

  // 电脑访问点击产品，新开一个页面打开，移动设备在同一个页面跳转
  $('#module_' + moduleid + ' .proCont').attr('target', isMobileBroswer() || parent != window ? '_self' : '_blank');
}

// 设置产品展示图片，确保比例
function setProductListImg(moduleid, showStyle, imgSizeType) {
  if ($.inArray(showStyle, [12, 15, 16]) > -1 && imgSizeType == 3) {
    $('#module_' + moduleid + ' .proImg').height($('#module_' + moduleid + ' .proImg').width());
    $(window).off('resize.productlistImgSizeType' + moduleid).on('resize.productlistImgSizeType' + moduleid, function (evt) {
      $('#module_' + moduleid + ' .proImg').height($('#module_' + moduleid + ' .proImg').width());
    });
  } else {
    $(window).off('resize.productlistImgSizeType' + moduleid);
  }
}

// 获取购物车数量
function getShopCartNum(callback) {
  $.ajax({
    type: 'get',
    url: '/index.php?c=front/productorder&a=GetShopCartNum',
    async: true,
    dataType: "json",
    success: function (json) {
      if (json.success) {
        if (typeof callback == 'function') {
          callback(json.num);
        }
      }
    },
    error: function () {
    }
  });
}

function calProductListSlidePerGroup(moduleid) {
  var itemCountPerGroup = 0;
  var classText = $('#module_' + moduleid).find('.productsBox').prop('class');
  var winWidth = window.innerWidth;
  if (winWidth >= 1200) {
    itemCountPerGroup = 12 / parseInt(classText.match(/col-lg-(\d+)/)[1]);
  } else if (winWidth >= 992) {
    itemCountPerGroup = 12 / parseInt(classText.match(/col-md-(\d+)/)[1]);
  } else if (winWidth >= 768) {
    itemCountPerGroup = 12 / parseInt(classText.match(/col-sm-(\d+)/)[1]);
  } else {
    itemCountPerGroup = 12 / parseInt(classText.match(/col-xs-(\d+)/)[1]);
  }
  return itemCountPerGroup;
}

function productListMouseOver(elem) {
  $(elem).attr('ishovering', 1);
}

function productListMouseOut(elem) {
  $(elem).attr('ishovering', 0);
}

function BindPagerAction() {
  $(".ModuleItem").off('click.pager_num_click').on('click.pager_num_click', '.PageNavigate a,.page-nav a,.page-more a', function (evt) {
    evt = evt || window.event;
    evt.preventDefault && evt.preventDefault();
    evt.stopPropagation && evt.stopPropagation();
    pagerSubmit(this, $(this).attr("href"));
    return false;
  });

  $(".ModuleItem").off('click.pager_submit').on('click.pager_submit', '.pagerGiant .submit', function (evt) {
    var pageNo = $(this).closest('.pagerGiant').find('.inputer').val() || '';
    var url = $(this).closest('.pagerGiant').find('[name=pagerUrl]').val() || '';
    url = url.replace('{pageNo}', pageNo);
    if (/^\d+$/.test(pageNo) && parseInt(pageNo) > 0) {
      var pagerCount = parseInt($(this).closest('.pagerGiant').find('[name=pagerCount]').val() || -1);
      if (pagerCount > -1 && parseInt(pageNo) > pagerCount) {
        return false;
      }
      pagerSubmit(this, url);
    }
    return false;
  });

  $(".ModuleItem").off('keypress.pager_inputer').on('keypress.pager_inputer', '.pagerGiant .inputer', function (evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode;
    if ((evt.keyCode < 48 || evt.keyCode > 57) && evt.keyCode != 13) {
      evt.preventDefault && evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      return false;
    }
    if (keyCode == 13) {
      var pageNo = $(this).closest('.pagerGiant').find('.inputer').val() || '';
      var url = $(this).closest('.pagerGiant').find('[name=pagerUrl]').val() || '';
      url = url.replace('{pageNo}', pageNo);
      if (/^\d+$/.test(pageNo) && parseInt(pageNo) > 0) {
        var pagerCount = parseInt($(this).closest('.pagerGiant').find('[name=pagerCount]').val() || -1);
        if (pagerCount > -1 && parseInt(pageNo) > pagerCount) {
          return false;
        }
        pagerSubmit(this, url);
      }
    }
  });
}

/**
 * js获取多语言
 * @param  string lang 要获取多语言的key
 * @return string 多语言
 */
function getLang(lang) {
  if (window.AllLang) {
    return window.AllLang[lang];
  } else {
    var sys_lang = 'cn,en,fr,jp,kr';
    var site_lang = (getCookie && sys_lang.indexOf(getCookie('Lang')) > -1) ? getCookie('Lang') : 'en';
    var lang_url = '/share/lang/lang_' + site_lang + '.json?v=' + Math.random(1, 9999);
    $.ajax({
      url: lang_url,
      type: 'GET',
      dataType: 'json',
      async: false,
      success: function (json) {
        window.AllLang = json;
      }
    });
    return window.AllLang[lang];
  }
}

function pagerSubmit(item, url) {
  if (url && url.indexOf("PageNo=") > -1) {
    var path = url.split("?")[0];
    var params = url.split("?")[1];
    var classid = null;
    if (params) {
      var match = params.match(/classid=(\d*)/i);
      if (match && match.length > 1) classid = match[1];
    }
    var newUrl = "/index.php?c=Front/LoadModulePageData&" + params;
    /responseModuleId=(\d+)/.test(newUrl);
    var moduleId = parseInt(RegExp.$1);
    if (moduleId > 0) {
      var ispagemore = $(item).is(".page-more") || $(item).parent().is(".page-more");
      if (ispagemore) {
        if ($(item).attr("pagecount") == $(item).attr("curpage")) {
          alert(getLang('last_page'));
          return false;
        }
      }

      var top = $("#module_" + moduleId).outerHeight() / 2;
      loadingText = ispagemore ? getLang('loading_wait') : getLang('loading') + '...';
      if (ispagemore) {
        $("#module_" + moduleId).find('.page-more').hide();
        var pageLoadingHtml = '<div class="page-more-loading">';
        pageLoadingHtml += '<div class="content">';
        pageLoadingHtml += '<span class="fa fa-spinner fa-spin loading-icon"></span>';
        pageLoadingHtml += '<span class="loading-text">' + loadingText + '</span>';
        pageLoadingHtml += '</div>';
        pageLoadingHtml += '</div>';
        $("#module_" + moduleId).find('.page-more').after(pageLoadingHtml);
      } else {
        $("#module_" + moduleId).find('.BodyCenter').css({'opacity': '0', 'visibility': 'hidden'});
        var pageLoadingHtml = '<div name="pageloading" class="PageLoading">';
        pageLoadingHtml += '<div class="content">';
        pageLoadingHtml += '<span class="fa fa-spinner fa-spin loading-icon"></span>';
        pageLoadingHtml += '<span class="loading-text">' + loadingText + '</span>';
        pageLoadingHtml += '</div>';
        pageLoadingHtml += '</div>';
        $("#module_" + moduleId).children().append(pageLoadingHtml);
      }
      $("#module_" + moduleId).children().css('position', 'relative');

      $.ajax({
        url: newUrl, async: true, dataType: "text/html", complete: function (request, status, error) {
          if (ispagemore) {
            $("#module_" + moduleId).find('.PageLoading').remove();
            $("#module_" + moduleId).find('.page-more-loading').remove();
            $("#module_" + moduleId).find('.page-more').show();
            var newitems = $(request.responseText).find(".news-container,.pro-container,.download-container,.guestbooklist-container,.gallery-container").children();
            $("#module_" + moduleId).find(".news-container,.pro-container,.download-container,.guestbooklist-container,.gallery-container").append(newitems);

            var initFunc = window['initFunc' + moduleId];
            if (typeof initFunc == 'function') {
              initFunc({
                newitems: newitems
              });
            }
            //同步分页的状态
            var page_more = $(request.responseText).find(".page-more");
            if (page_more.length == 0) {
              page_more = $('<div style="text-align:center;line-height: 50px;padding: 20px 0px;color: #666;">' + getLang('all_loaded') + '！</div>');
            }
            $(item).closest(".page-more").replaceWith(page_more);
            $("#module_" + moduleId).find(".PageNavigate,.page-nav").replaceWith($(request.responseText).find(".PageNavigate,.page-nav"));
          } else {
            $("#module_" + moduleId).replaceWith(request.responseText);
          }
          BindPagerAction();
          if (typeof CanDesign != 'undefined' && CanDesign != "True") {
            var bodyClientHeight = document.documentElement.clientHeight // 因为有DOCTYPE
            if (bodyClientHeight == 0) bodyClientHeight = window.innerHeight;
            var bodySrollTop = $('body').scrollTop();
            if (bodySrollTop == 0) bodySrollTop = $(window).scrollTop();
            var relModule = $("#module_" + moduleId).eq(0);
            var originModuleHeight = relModule.height();
            if (relModule.length > 0) {
              if (!ispagemore) {
                if (SiteType == 0) {
                  if (originModuleHeight > bodyClientHeight || getElementTop(relModule[0]) < bodySrollTop) {
                    $('body,html').animate({scrollTop: getElementTop(relModule[0])}, 1000);
                  }
                } else {
                  window.location.href = "#module_" + moduleId;
                }
              }
            }
          }
          //加载完成后 重新调用一下该模块的init方法
          if (window["initFunc" + moduleId]) {
            window["initFunc" + moduleId]();
          }
        }
      });
      return false;
    }
  } else if (url && url.indexOf("PageNo") > -1) {

    var urlslashindex = url.indexOf('/', url.indexOf('/') + 1);
    var urldotindex = url.lastIndexOf('.');
    var param = url.substr(urlslashindex, urldotindex - urlslashindex);
    var params = param.replace(new RegExp(/(\/)/g), '&');
    var paramss = params.replace(new RegExp(/(\-)/g), '=');
    var classid = null;
    if (paramss) {
      var match = params.match(/classid=(\d*)/i);
      if (match && match.length > 1) classid = match[1];
    }
    var newUrl = "/index.php?c=Front/LoadModulePageData" + paramss;
    /responseModuleId=(\d+)/.test(newUrl);
    var moduleId = parseInt(RegExp.$1);
    if (moduleId > 0) {
      var ispagemore = $(item).is(".page-more") || $(item).parent().is(".page-more");
      if (ispagemore) {
        if ($(item).attr("pagecount") == $(item).attr("curpage")) {
          alert(getLang('last_page'));
          return false;
        }
      }

      var top = $("#module_" + moduleId).outerHeight() / 2;
      loadingText = ispagemore ? getLang('loading_wait') : getLang('loading') + '...';
      if (ispagemore) {
        $("#module_" + moduleId).find('.page-more').hide();
        var pageLoadingHtml = '<div class="page-more-loading">';
        pageLoadingHtml += '<div class="content">';
        pageLoadingHtml += '<span class="fa fa-spinner fa-spin loading-icon"></span>';
        pageLoadingHtml += '<span class="loading-text">' + loadingText + '</span>';
        pageLoadingHtml += '</div>';
        pageLoadingHtml += '</div>';
        $("#module_" + moduleId).find('.page-more').after(pageLoadingHtml);
      } else {
        $("#module_" + moduleId).find('.BodyCenter').css({'opacity': '0', 'visibility': 'hidden'});
        var pageLoadingHtml = '<div name="pageloading" class="PageLoading">';
        pageLoadingHtml += '<div class="content">';
        pageLoadingHtml += '<span class="fa fa-spinner fa-spin loading-icon"></span>';
        pageLoadingHtml += '<span class="loading-text">' + loadingText + '</span>';
        pageLoadingHtml += '</div>';
        pageLoadingHtml += '</div>';
        $("#module_" + moduleId).children().append(pageLoadingHtml);
      }
      $("#module_" + moduleId).children().css('position', 'relative');

      $.ajax({
        url: newUrl, async: true, dataType: "text/html", complete: function (request, status, error) {
          if (ispagemore) {
            $("#module_" + moduleId).find('.PageLoading').remove();
            $("#module_" + moduleId).find('.page-more-loading').remove();
            $("#module_" + moduleId).find('.page-more').show();
            var newitems = $(request.responseText).find(".news-container,.pro-container,.download-container,.guestbooklist-container,.gallery-container").children();
            $("#module_" + moduleId).find(".news-container,.pro-container,.download-container,.guestbooklist-container,.gallery-container").append(newitems);

            var initFunc = window['initFunc' + moduleId];
            if (typeof initFunc == 'function') {
              initFunc({
                newitems: newitems
              });
            }
            //同步分页的状态
            var page_more = $(request.responseText).find(".page-more");
            if (page_more.length == 0) {
              page_more = $('<div style="text-align:center;line-height: 50px;padding: 20px 0px;color: #666;">' + getLang('all_loaded') + '！</div>');
            }
            $(item).closest(".page-more").replaceWith(page_more);
            $("#module_" + moduleId).find(".PageNavigate,.page-nav").replaceWith($(request.responseText).find(".PageNavigate,.page-nav"));
          } else {
            $("#module_" + moduleId).replaceWith(request.responseText);
          }
          BindPagerAction();
          if (typeof CanDesign != 'undefined' && CanDesign != "True") {
            var bodyClientHeight = document.documentElement.clientHeight // 因为有DOCTYPE
            if (bodyClientHeight == 0) bodyClientHeight = window.innerHeight;
            var bodySrollTop = $('body').scrollTop();
            if (bodySrollTop == 0) bodySrollTop = $(window).scrollTop();
            var relModule = $("#module_" + moduleId).eq(0);
            var originModuleHeight = relModule.height();
            if (relModule.length > 0) {
              if (!ispagemore) {
                if (SiteType == 0) {
                  if (originModuleHeight > bodyClientHeight || getElementTop(relModule[0]) < bodySrollTop) {
                    $('body,html').animate({scrollTop: getElementTop(relModule[0])}, 1000);
                  }
                } else {
                  window.location.href = "#module_" + moduleId;
                }
              }
            }
          }
          //加载完成后 重新调用一下该模块的init方法
          if (window["initFunc" + moduleId]) {
            window["initFunc" + moduleId]();
          }
        }
      });
      return false;
    }
  }

}

function getElementTop(obj) {
  var i = obj.offsetTop;
  if (obj.offsetParent != null) i += getElementTop(obj.offsetParent);
  return i;
}

function getElementLeft(obj) {
  var i = obj.offsetLeft;
  if (obj.offsetParent != null) i += getElementLeft(obj.offsetParent);
  return i;
}

function getElementTopWithBorder(obj) {
  var i = obj.offsetTop + parseFloat($(obj).css('border-top-width'));
  if (obj.offsetParent != null) i += getElementTopWithBorder(obj.offsetParent);
  return i;
}

function getElementLeftWithBorder(obj) {
  var i = obj.offsetLeft + parseFloat($(obj).css('border-left-width'));
  if (obj.offsetParent != null) i += getElementLeftWithBorder(obj.offsetParent);
  return i;
}

function AddFavorite(sURL, sTitle) {
  if (!sURL) sURL = location.href;
  if (!sTitle) sTitle = document.title;
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, "");
    } catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
  }
}

function SetHome() {
  if (document.all) {
    document.body.style.behavior = 'url(#default#homepage)';
    document.body.setHomePage(window.location.href);
  } else if (window.sidebar) {
    if (window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      } catch (e) {
        alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值改为true");
      }
    }
    var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
    prefs.setCharPref('browser.startup.homepage', window.location.href);
  } else {
    alert('您的浏览器不支持自动自动设置首页, 请使用浏览器菜单手动设置!');
  }
}

/************
 2015年3月24日14:21:59  创建人：郑江  主要针对模块的高级功能的js
 ************/
//图片的半透明效果
function ShowTransparent(obj) {
  $(obj).animate({
    opacity: 0.7
  }, 300, function () {
  });
}

//图片不透明
function HideTransparent(obj) {
  $(obj).animate({
    opacity: 1
  }, 300, function () {
  });
}

//浮影
var oSetTimeout = null;

function ImgShade(obj, type) {
  var oDiv = $(obj).parent().find("div[name='shade']");
  $(obj).parent().css("position", "relative");
  if ($(obj).parent().is("a")) $(obj).parent().css("display", "block");
  if (oDiv.length == 0) {
    oDiv = $("<div name='shade'>" + $(obj).attr('alt') + "</div>").appendTo($(obj).parent()).css('height', 0);
  }
  var bc = $(obj);
  var module = $(obj).closest('.ModuleItem');
  var top = bc.position().top;
  var left = bc.offset().left - $(obj).closest('.BodyCenter').offset().left;
  var w = bc.width();
  var h = bc.height();
  if (type == 'ShadeTop') {
    $(oDiv).attr("class", "showShadeTop").css({'width': w, 'left': left, 'top': 0}).show();
  } else if (type == 'ShadeBottom') {
    $(oDiv).attr("class", "showShadeBottom").css({'width': w, 'left': left, 'bottom': 0}).show();
  } else {
    $(oDiv).attr("class", "showShadeTop").css({'width': w, 'left': left, 'top': 0}).show();
  }
  var isShadeAll = type == 'Shade';
  if (isShadeAll) $(oDiv).css({'line-height': h + 'px', 'font-size': '18px'});
  $(oDiv).stop().animate({height: (isShadeAll ? h + 'px' : "50px")}, (isShadeAll ? 100 : 200), function () {
  });

  //2015年6月1日17:44:45 郑江 当鼠标进入div（浮影）的时候关掉定时器
  $(oDiv).mouseenter(function () {
    clearTimeout(oSetTimeout);
  });
  $(oDiv).mouseleave(function () {
    divZoom(oDiv, type);
  });
}

function unImgShade(obj, type) {
  if ($(obj).parent().find("div[name='shade']").length == 0) $(obj).parent().append("<div name='shade'>" + $(obj).attr('alt') + "</div>");
  var oDiv = $(obj).parent().find("div[name='shade']");
  oSetTimeout = setTimeout(function () {
    divZoom(oDiv, type);
  }, 200);
}

//2015年6月2日14:19:10 郑江 隐藏div动画
function divZoom(obj, type) {
  $(obj).stop().animate({
    height: "0px"
  }, 200, function () {
    if (type == 'ShadeTop') $(obj).attr("class", "hideShadeTop").hide();
    else $(obj).attr("class", "hideShadeBottom").hide();
  });
}

function moduleImageHover(obj) {
  var width = $(obj).width();
  $(obj).stop().animate({opacity: 0}, 250, function () {
    $(this).css('visibility', 'hidden');
  });
  $(obj).parent().css('position', 'relative');
  if (!$(obj).parent().is('.BodyCenter')) {
    $(obj).parent().css('display', 'block');
  }
  var left = ($(obj).parent().width() - $(obj).width()) / 2;
  $(obj).siblings('img').stop().show().css({
    'visibility': 'visible',
    'box-sizing': 'border-box',
    'top': '0',
    'left': left + 'px',
    'padding-top': $(obj).parent().css('padding-top') || 0,
    'padding-left': $(obj).parent().css('padding-left') || 0,
    'padding-bottom': $(obj).parent().css('padding-bottom') || 0,
    'padding-right': $(obj).parent().css('padding-right') || 0
  }).animate({opacity: 1}, 250);
}

function moduleImageUnHover(obj) {
  $(obj).stop().animate({opacity: 0}, 250, function () {
    $(this).css('visibility', 'hidden');
  });
  $(obj).siblings('img').stop().show().css('visibility', 'visible').animate({opacity: 1}, 250);
}

function ImgZoom(obj) {
  var scale = $(obj).width() > 500 ? 1.02 : 1.10;
  var step = $(obj).width() > 500 ? 0.001 : 0.005;
  var curscale = 1;
  $(obj).attr('zoom-step', step);
  $(obj).parent().attr('zoom-overflow', $(obj).parent().css('overflow'));
  $(obj).parent().css({'overflow': 'hidden'});
  if ($(obj).parent().is('a')) $(obj).parent().css({'display': 'block'});
  var f = function () {
    $(obj).attr('zoom-scale', curscale);
    $(obj).css({
      '-webkit-transform': 'scale(' + curscale + ')',
      '-ms-transform': 'scale(' + curscale + ')',
      '-moz-transform': 'scale(' + curscale + ')',
      '-o-transform': 'scale(' + curscale + ')',
      'transform': 'scale(' + curscale + ')'
    });
    curscale += step;
    if (curscale < scale) setTimeout(f, 10);
  }
  f();
}

function unImgZoom(obj) {
  var scale = 1;
  var curscale = parseFloat($(obj).attr('zoom-scale'));
  var step = parseFloat($(obj).attr('zoom-step'));
  var f = function () {
    $(obj).css({
      '-webkit-transform': 'scale(' + curscale + ')',
      '-ms-transform': 'scale(' + curscale + ')',
      '-moz-transform': 'scale(' + curscale + ')',
      '-o-transform': 'scale(' + curscale + ')',
      'transform': 'scale(' + curscale + ')'
    });
    curscale -= step;
    if (curscale > scale) setTimeout(f, 10);
    else $(obj).parent().css('overflow', $(obj).parent().attr('zoom-overflow'));
  }
  f();
}

/* start of 图文自动隐藏 */
function moduleImageTextHide(option) {
  //多语言处理
  if (!window.lang && typeof option != 'undefined') {
    window.lang = {};
    window.lang.show_more = option.lang.show_more;
  }
  var show_more = '显示更多';
  if (typeof option != 'undefined') {
    show_more = option.lang.show_more;
  } else if (window.lang) {
    show_more = window.lang.show_more;
  }
  //如果有绝对定位的模块，那自动隐藏就会有问题
  if (SiteType == "1") {
    $(".ModuleImageText,.ModuleImageTextV2,.ModuleImageTextGiant").each(function (i, item) {
      var normalWidth = window.innerWidth;
      var id = eachImageTextNode(i, item, show_more)
      $(window).off('resize.moduleImageTextHide' + id).on('resize.moduleImageTextHide' + id, function () {
        if (window.innerWidth < 768 && normalWidth != window.innerWidth) {
          normalWidth = window.innerWidth
          eachImageTextNode(i, item, show_more)
        } else if (window.innerWidth >= 768 && normalWidth != window.innerWidth) {
          normalWidth = window.innerWidth
          moduleImageTextShow(id)
        }
      });
    });
  }
}

function eachImageTextNode(i, item, show_more) {
  var m = $(item).closest(".ModuleItem");
  var textcontainer = $(item).find(".imageTextContainer");
  var id = m.attr('id');
  var referwidth = $('#pagebody').width(); //m.width();
  var hidew = 800;
  if (textcontainer.attr('hidewidth')) hidew = parseInt(textcontainer.attr('hidewidth'));
  var hideh = 150;
  if (textcontainer.attr('hideheight')) hideh = parseInt(textcontainer.attr('hideheight'));
  if ((m.css("position") == 'static' || m.css("position") == '')) {
    if (referwidth < hidew && textcontainer.attr('autohide') == '1' && textcontainer.attr('hasResponsive') == '1' && textcontainer.attr('hasshow') != '1') {
      if (m.find('.showHandle').length == 0) {
        var $bodyc = m.find(".BodyCenter");
        $bodyc.css({'height': hideh + 'px', 'overflow': 'hidden'});
        $bodyc.parent().append("<div class='showHandle' style='width:100%;margin:0 auto;text-align:center;float:left;'><div style='border-top:1px solid #ddd;margin:10px 0;'></div><input onclick=\"moduleImageTextShow('" + id + "')\" type='button' class='btn btn-success' value='" + show_more + "'></div>");
      }
    }
    else if (referwidth > hidew) {//添加到分栏时  编辑状态下 显示有问题 换为pagebody的宽度做比较
      moduleImageTextShow(id);
    }
  }
  return id
}

function moduleImageTextShow(id) {
  var m = $("#" + id);
  m.find(".showHandle").remove();
  m.find(".BodyCenter").css({'height': 'auto', 'overflow': 'visible'});
}

/* end of 图文自动隐藏 */

function showSubMenu(obj, direction, subItemLocation) {
  setTimeout(function(){
    var oModuleNav = $(obj).closest('.ModuleNav,.ModuleNavGiant');
    var oModuleItem = $(obj).closest('.ModuleItem');
    var oContent = $(obj).closest('.main-nav-content');
    var oNavSubMenu = $(obj).children('.NavSubMenu,.sub-nav-item-group');
    var subAlign = $(obj).closest('.pre_nav').attr('SubAlign'); //left:左对齐，right:右对齐, auto: 根据主菜单的在屏幕中的相对位置对齐
    var subHolder = $(obj).closest('.pre_nav').attr('SubHolder');
    $(obj).addClass('on').siblings().removeClass('on');
    var timeoutId = "moduleNavTimeout";
    if (typeof direction == 'undefined') direction = $(obj).closest('.pre_nav').attr('data-direction');
    if (typeof subItemLocation == 'undefined') subItemLocation = $(obj).closest('.pre_nav').attr('data-subitem-location');
    if (window[timeoutId]) {
      clearTimeout(window[timeoutId]);
    }
    oModuleNav.find('.NavSubMenu,.sub-nav-item-group').not(oNavSubMenu).hide();
    oModuleNav.find('.navMainItem,.main-nav-item').not($(obj).children('.navMainItem,.main-nav-item')).removeClass('navMainItemHover');
    $(obj).children('.navMainItem,.main-nav-item').addClass('navMainItemHover');
    if ($('.moduleNavFloatSubMenu').attr('submenuid') != $(obj).attr('id')) {
      $('.moduleNavFloatSubMenu').remove();
    }
    if (oNavSubMenu.children().length == 0) return;
    if (oModuleNav.is(".ModuleNavGiant") && oNavSubMenu.find(".sub-nav-item").length == 0) return;
    var navSubMenuClone = $(obj).clone(true).attr('onmouseover', null);
    var classes = oModuleItem.find(">div").attr('class');
    $(".moduleNavFloatSubMenu").remove();
    $(".sub-nav-holder").hide();
    var html = '<div id="' + oModuleItem.attr('id') + '" class="moduleNavFloatSubMenu ' + classes + '" submenuid="' + navSubMenuClone.attr('id') + '">';
    html += '<div class="ModuleNav">';
    html += '<div class="pre_nav" subHolder="' + subHolder + '">';
    html += '<div class="nav">';
    html += '<dl class="clearfix">';
    html += '</dl>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    var floatSubMenu = $(html);
    if (window.isDesignMode == true) {
      floatSubMenu.appendTo('#pagebody');
    } else {
      floatSubMenu.appendTo('body');
    }
    var originOpacity = oModuleItem.css('opacity');
    floatSubMenu.css('opacity', '1'); // 透明度不为1，会有bug。。。
    navSubMenuClone.find('.NavSubMenu,.sub-nav-item-group').css('opacity', originOpacity);
    floatSubMenu.find('dl').append(navSubMenuClone);
    floatSubMenu.find('.pre_nav').addClass($(obj).closest('.pre_nav').attr('class'));
    floatSubMenu.find('.navMainItem,.main-nav-item').remove();
    floatSubMenu.css({position: 'static', height: 0, overflow: 'hidden'});
    floatSubMenu.on('mouseenter', function () {
      //debugger
      if (window[timeoutId]) {
        clearTimeout(window[timeoutId]);
      }
    });
    $(subHolder).mouseenter(function () {
      if (window[timeoutId]) clearTimeout(window[timeoutId]);
    }).mouseleave(function () {
      hideSubMenu(obj)
    });
    var iSubMenuMarginLeft = (floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').outerWidth() - $(obj).find('.navMainItem,.main-nav-item').outerWidth()) / 2;
    var isAlignRight = false;
    if (subAlign == 'left') iSubMenuMarginLeft = 0;
    if (subAlign == 'auto') {
      if ($(obj).offset().left < (oModuleNav.offset().left + oModuleNav.width() / 2)) iSubMenuMarginLeft = 0;
      else isAlignRight = true;
    }
    // 测试中。。
    floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
      position: 'absolute',
      display: 'block',
      zIndex: '999999'
    });
    floatSubMenu.find('.main-nav-content').css('position', 'static');
    //全屏的子菜单背景（layout-109 专用 ）
    //$(subHolder).css({"top":($(obj).offset().top + $(obj).height()) + "px","position":"absolute","left":"0","width":"100%"}).show();
    if (direction == '1' && subItemLocation == '0') {
      floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
        left: $(obj).offset().left - floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').outerWidth(),
        top: $(obj).offset().top,
        marginTop: $(obj).find('.navMainItem,.main-nav-item').css('margin-top')
      });
    } else if (direction == '1' && subItemLocation == '1') {
      floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
        position: 'absolute',
        display: 'block',
        left: $(obj).offset().left + $(obj).outerWidth(),
        top: $(obj).offset().top,
        marginTop: $(obj).find('.navMainItem,.main-nav-item').css('margin-top')
      });
    } else if (direction == '0' && subItemLocation == '0') {
      floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
        top: $(obj).offset().top - floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').outerHeight(),
        left: $(obj).offset().left + (parseInt($(obj).css('padding-left')) || 0),
        marginLeft: -iSubMenuMarginLeft
      });
    } else {
      if (getCookie("SiteType") == "1") {
        if (false && window.isDesignMode == true) {
          var top = 0;
          var left = 0;
          var elem = $(obj)[0];
          while (elem != null && $(elem).closest('#pagebody').length > 0 && !$(elem).is('#pagebody')) {
            top += elem.offsetTop;
            left += elem.offsetLeft;
            elem = $(elem)[0].offsetParent;
          }
          floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
            top: top + $(obj).outerHeight(),
            left: left,
            marginLeft: -iSubMenuMarginLeft
          });
        } else {
          // 如果是居右的
          var positLeft = $(obj).find('.sub-nav-side-group').children().length > 0 ? $(obj).find('.OneRow').offset().left : $(obj).find('.sub-nav-side-group').hasClass('nav-giant-layout-112') ? $(obj).offset().left - 20 : $(obj).offset().left;
          var marLeft = $(obj).find('.sub-nav-side-group').hasClass('nav-giant-layout-112') ? 0 : -iSubMenuMarginLeft;
          if (isAlignRight && oModuleNav.hasClass('layout-109')) {
            positLeft = $(obj).find('.OneRow').offset().left;
            marLeft = 0
          }
          floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
            top: $(obj).offset().top + $(obj).outerHeight(),
            left: positLeft,
            marginLeft: marLeft,
            maxWidth: window.innerWidth
          });
        }
        floatSubMenu.find('.nav').show().css({height: 0});
      } else {
        floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({
          top: $(obj).offset().top + $(obj).outerHeight(),
          left: $(obj).offset().left + (parseInt($(obj).css('padding-left')) || 0),
          marginLeft: -iSubMenuMarginLeft
        });

      }
    }
    if (isAlignRight && !floatSubMenu.find('.sub-nav-item-group').hasClass('nav-giant-layout-112') && !oModuleNav.hasClass('layout-109')) {
      floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').css({"left": $(obj).offset().left + $(obj).width() - floatSubMenu.find('.NavSubMenu,.sub-nav-item-group').outerWidth(true)});
    }
    //解决子菜单背景根据二级导航换行而自适应高度 by Kong 2017/8/1
    var diffHeight = 0;
    var subItemHeight = 40;
    var treeNavHeight = 13;
    if (floatSubMenu.find('.sub-nav-item').length > 0) {
      //2级菜单的高度
      diffHeight = floatSubMenu.find('.sub-nav-item:last').offset().top - floatSubMenu.find('.sub-nav-item:first').offset().top;
      subItemHeight = floatSubMenu.find('.sub-nav-item:first').outerHeight();
      //如果存在三级菜单
      if (floatSubMenu.find('.sub-nav-side-group.nav-giant-layout-112').children().length > 0) {
        var objs = floatSubMenu.find('.sub-nav-side-group');
        treeNavHeight += objs.eq(0).outerHeight();
        $.each(objs, function (idx, obj) {
          //当前这个ui的高度是否大于上一次ul的高度
          if (idx > 0) {
            if ($(obj).outerHeight() > objs.eq(idx - 1).outerHeight()) {
              treeNavHeight += $(obj).outerHeight();
            }
          }

        });
      } else {
        treeNavHeight = 0;
      }

    }

    // layout-111
    if (floatSubMenu.find('.sub-nav-item-group').hasClass('nav-giant-layout-111')) {
      // 当前菜单距右的偏移
      var navGiantOffsetRight = Math.abs($(window).width() - $(obj).offset().left);
      // 当前菜单的二级菜单的总宽度
      var navGiantWidth = floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-111').children('.sub-menu-box').length *
        parseInt(floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-111').children('.sub-menu-box').eq(0).css('width')) +
        parseInt(floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-111').children('.sub-menu-box').eq(0).css('padding-right'));


      // 判断对齐方向
      if (oContent.css('text-align')) {
        var navGiantStyleObj = '';
        // 子菜单面板可能的最大宽度
        var navGiantContentWidth = navGiantOffsetRight;
        switch (oContent.css('text-align')) {
          // left 对齐
          case 'left':
            // 如果右边已经满了，但是左边还有空隙
            var navGiantContentStyleLeft = $(obj).offset().left
            if (navGiantContentWidth < navGiantWidth) {
              if (navGiantWidth < window.innerWidth) {
                navGiantContentStyleLeft = window.innerWidth - navGiantWidth
              } else {
                navGiantContentStyleLeft = parseInt(floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-111').children('.sub-menu-box').eq(0).css('width')) / 4
              }
            }

            navGiantContentWidth += (navGiantContentStyleLeft * 6)
            navGiantStyleObj = {
              left: navGiantContentStyleLeft
            }
            break;
          // center 对齐
          case 'center':
            navGiantContentWidth += (navGiantContentStyleLeft * 6)
            navGiantStyleObj = {
              marginLeft: 0
            }
            break;
          // right 对齐
          case 'right':
            navGiantStyleObj = {
              left: '',
              right: navGiantOffsetRight - $(obj).width(),
              marginLeft: 0
            }
            navGiantContentWidth = $(obj).offset().left
            break;
        }
      }

      // 当前二级菜单个数
      var subMenuBoxItem = floatSubMenu.find('.sub-nav-item-group>.sub-menu-box').length;
      // 用于储存每个二级列表下的三级列表个数
      var threeItem = [];
      // 查找每个二级列表下的三级列表个数
      floatSubMenu.find('.sub-nav-item-group>.sub-menu-box').each(function () {
        threeItem.push($(this).find('.three-nav-item-group>p').length)
      });

      // 判断个数
      if (threeItem.length > 1) {
        // 获取三级列表数组的个数最大值
        var threeItemMAX = Math.max.apply(null, threeItem);
        // 用子菜单面板可能的最大宽度跟当前菜单的二级菜单的总宽度来判断是否满足换行
        if (navGiantContentWidth < navGiantWidth) {
          // 重置圆角
          floatSubMenu.find('.sub-nav-item-group>.sub-menu-box').eq(0).css('border-radius', '0px')
          // 循环判断是从第几个开始换行
          for (var i = 0, len = subMenuBoxItem; i < len; i++) {
            if (navGiantContentWidth < (i * floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-111').children('.sub-menu-box').eq(0).width() + 25)) {
              break;
            }
          }
          // 重新设置换行后的圆角
          floatSubMenu.find('.sub-nav-item-group>.sub-menu-box').eq(i).css('border-radius', '0px 0px 0px 16px')
          // 判断是否需要补齐换行的宽度
          if ((subMenuBoxItem / 2) < i) {
            // 补全缺失的宽度
            for (var j = 0, len = (i - (subMenuBoxItem - i)); j < len; j++) {
              floatSubMenu.find('.sub-nav-item-group').append('<div class="sub-menu-box" style="height:' + (threeItemMAX * 30 + floatSubMenu.find('.sub-nav-item-group>.sub-menu-box>.sub-nav-item').eq(0).height() + 8) + 'px">&nbsp;</div>')
            }
          }
        }
      }

      floatSubMenu.find('.sub-nav-item-group').css(navGiantStyleObj)
    }
    if (floatSubMenu.find('.sub-nav-item-group').hasClass('nav-giant-layout-112')) {
      //已经放满
      if (window.innerWidth - (floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-112').offset().left + floatSubMenu.find('.sub-nav-item-group.nav-giant-layout-112').outerWidth()) < 168) {
        if (window.innerWidth - (floatSubMenu.find('.nav-list').length + 1) * 168 > 0) {
          floatSubMenu.find('.sub-nav-item-group.sub-nav-item-group').css('left', window.innerWidth - (floatSubMenu.find('.nav-list').length + 1) * 168)
        } else {
          floatSubMenu.find('.sub-nav-item-group.sub-nav-item-group').css('left', 0)
        }
      } else {
        floatSubMenu.find('.sub-nav-item-group').css('left', $(obj).offset().left + 'px');
      }
      diffHeight = floatSubMenu.find('.sub-nav-item:last').offset().top - floatSubMenu.find('.sub-nav-item:first').offset().top;
    }
    $(subHolder).css({
      "top": ($(obj).offset().top + $(obj).height()) + "px",
      "position": "absolute",
      "left": "0",
      "width": "100%",
      "height": +(subItemHeight + diffHeight + treeNavHeight) + "px"
    }).show();
  },20);
}

function hideSubMenu(obj, evt) {
  var oModuleNav = $(obj).closest('.ModuleNav,.ModuleNavGiant');
  var oModuleItem = $(obj).closest('.ModuleItem');
  var subHolder = $(obj).closest('.pre_nav').attr('SubHolder');
  var timeoutId = "moduleNavTimeout";
  evt = evt || window.event || arguments.callee.caller.arguments[0];
  var relatedTarget = evt.relatedTarget || evt.toElement;
  if ($(relatedTarget).is('.moduleNavFloatSubMenu') || $(relatedTarget).closest('.moduleNavFloatSubMenu').length > 0) {
    return false;
  }
  if (window[timeoutId]) {
    clearTimeout(window[timeoutId]);
  }
  window[timeoutId] = setTimeout(function () {
    $('.moduleNavFloatSubMenu').remove();
    oModuleNav.find('.navMainItem').removeClass('navMainItemHover');
    //全屏的子菜单背景（layout-109 专用 ）
    $(subHolder).hide();
    $('.main-nav-item-group').removeClass('on').siblings().removeClass('on');
  }, 100);
}

function isHorizontalPad() {
  if (CanDesign != "True" && window.CanEditFront == "True") return false;
  var padscale = false;
  if (SiteType == "1" && CanDesign != "True") {
    if (navigator.userAgent.toLowerCase().indexOf("pad") > -1 || window.location.toString().indexOf("testpad") > -1 || ($(window).height() > 768 && $(window).width() > 768 && $(window).height() <= 1024 && $(window).width() <= 1024)) { //横向pad的分辨率一般都在7以上
      padscale = true;
    }
  }
  return padscale;
}

function showMobileNavFloatLayer(elem) {
  var iCurNum = $('#MobileNav').attr('navnum') || 1;
  if (iCurNum == 1 || iCurNum == 5) {
    $("#pagebody").css({
      "-ms-transition": "0.5s",
      "-webkit-transition": "0.5s",
      "-khtml-transition": "0.5",
      "-o-transition": "0.5s",
      "-moz-transition": "0.5s",
      "transition": "0.5s"
    });
    var iTranslateX = 0;
    $('#pagebody').css('left', iTranslateX);
  } else {
    $("#pagebody").css({
      "-ms-transition": "",
      "-webkit-transition": "",
      "-khtml-transition": "",
      "-o-transition": "",
      "-moz-transition": "",
      "transition": ""
    });
  }
  $('#MobileNav').toggleClass('showFloatNav');
  $('#MobileNavRenderElem').toggleClass('showFloatNav');
  $('#MobileNavFloatLayer').toggleClass('showFloatNav');
  $('#pagebody').toggleClass('showFloatNav');
  $('#MobileFootNav').toggleClass('showFloatNav');
  $('#MobileNavMask').toggleClass('showFloatNav');
}

function setMobileNav() {
  if ($('#MobileNav').length > 0) {
    var iCurNum = $('#MobileNav').attr('navnum') || 1;
    var iCurColor = $('#MobileNav').attr('navcolor') || 'black';
    var iItemType = $('#MobileNav').attr('navitemtype') || 0;
    var iEnable = $('#MobileNav').attr('enable') || 0;

    $('#MobileNav').attr('class', 'mobileNav mobileNav_' + iCurNum + ' ' + iCurColor);
    $('#MobileNavRenderElem').attr('class', 'mobileNavRenderElem mobileNavRenderElem_' + iCurNum + ' ' + iCurColor);
    $('#MobileNavFloatLayer').attr('class', 'mobileNavFloatLayer mobileNavFloatLayer_' + iCurNum + ' ' + iCurColor + ' itemType' + iItemType);
    $('#pagebody').attr('class', $('#pagebody').attr('class').replace(/(pagebody_nav(_\d+)?)|(showFloatNav)/ig, '') + ' pagebody_nav pagebody_nav_' + iCurNum);

    if ($('#MobileFootNav').length > 0) {
      $('#MobileFootNav').attr('class', $('#MobileFootNav').attr('class').replace(/(mobileFootNav(_\d+)?)|(showFloatNav)/ig, '') + ' mobileFootNav_' + iCurNum);
    }
    $('#MobileNavMask').attr('class', 'mobileNavMask mobileNavMask_' + iCurNum).off('click').on('click', function () {
      showMobileNavFloatLayer();
    }).off('touchstart').on('touchstart', function () {
      evt = window.event || evt;
      evt.preventDefault();
      showMobileNavFloatLayer();
      return false;
    })

    $('#MobileNavFloatLayer').off('click');
    $('#MobileNavFloatLayer').off('touchstart');
    $('#MobileNavFloatLayer').off('touchmove');

    // 分开写是因为pagebody scale后，会影响pagebody同级的100%高度的元素的高度
    if ($.inArray(iCurNum, ["1", "2", "5", "8"]) > -1) {
      $('#MobileNavFloatLayer').off().on('touchstart', function (evt) {
        evt = window.event || evt;
        iStartPosY = evt.targetTouches[0].pageY;
        var top = $(this).children('.itemList').css('top');
        if (top == 'auto' || top == '') top = 0;
        iMobileNavItemListStartTop = parseInt(top);
      }).on('touchmove', function (evt) {
        if ($(window).height() > $(this).children('.itemList').outerHeight()) {
          evt.preventDefault();
          return false;
        }
        evt = window.event || evt;
        evt.preventDefault();
        iEndPosY = evt.targetTouches[0].pageY;
        iSlideDistance = iEndPosY - iStartPosY;
        var iTop = iMobileNavItemListStartTop + iSlideDistance;
        if (iTop > 0) iTop = 0;
        var iHiddenHeight = $(window).height() - $(this).children('.itemList').outerHeight() - $('#MobileNavFloatLayer').position().top - parseInt($(this).children('.itemList').css('margin-top'));
        if (iTop < iHiddenHeight) iTop = iHiddenHeight;
        if (typeof(window.top.frames['pageframe']) == 'undefined') $('#MobileNavFloatLayer .itemList').css('top', iTop + "px");
        return false;
      });
    }

    if ($.inArray(iCurNum, ["2", "3", "8"]) > -1) {
      $('#MobileNavFloatLayer').css("top", $(".mobileNav").height())
    }
    if ($.inArray(iCurNum, ["1", "5"]) > -1) {
      try {
        if (typeof(window.top.frames['pageframe']) != 'undefined') $('#MobileNavFloatLayer').css("top", '0');
      } catch (ex) {
      }
    }
    if (iEnable != 1 || $.inArray(iCurNum, ["4", "6", "7"]) > -1) {
      $('#MobileNavRenderElem').hide();
    } else {
      //$('#MobileNavRenderElem').show();
    }
    if ($.inArray(iCurNum, ["4"]) > -1) {
      $('#MobileNavFloatLayer').off().on('touchstart', function (evt) {
        evt = window.event || evt;
        iStartPosY = evt.targetTouches[0].pageY;
        iMobileNavItemListStartTop = parseInt($(this).children('.itemList').css('top'));
      }).on('touchmove', function (evt) {
        if ($(this).height() > $(this).children('.itemList').outerHeight()) {
          evt.preventDefault();
          return false;
        }
        evt = window.event || evt;
        evt.preventDefault();
        iEndPosY = evt.targetTouches[0].pageY;
        iSlideDistance = iEndPosY - iStartPosY;
        var iTop = iMobileNavItemListStartTop + iSlideDistance;
        if (iTop > 0) iTop = 0;
        var iHiddenHeight = $(this).height() - $(this).children('.itemList').outerHeight();
        if (iTop < iHiddenHeight) iTop = iHiddenHeight;
        $('#MobileNavFloatLayer .itemList').css('top', iTop + "px");
        return false;
      });
    }

    if (iCurNum == 6) {
      if (typeof isDesignMode != 'undefined' && isDesignMode === true) {
        $('#MobileNavFloatLayer').on('click', function () {
          showMobileNavFloatLayer();
        })
      }

      $('#MobileNavFloatLayer').on('touchstart', function (evt) {
        evt = window.event || evt;
        var curTarget = $(evt.targetTouches[0].target);
        if (curTarget.is('.itemLink') || curTarget.is('.icon') || curTarget.is('.menuName')) {
          return true;
        }
        evt.preventDefault();
        showMobileNavFloatLayer();
        return false;
      });
    }

    if (iCurNum == 7) {
      $('#MobileNavFloatLayer').on('touchstart', function (evt) {
        evt = window.event || evt;
        iStartPosX = evt.targetTouches[0].pageX;
        iMobileNavFloatLayerItemListStartPosX = parseInt($(this).children('.itemList').css('left'));
      });

      $('#MobileNavFloatLayer').on('touchmove', function (evt) {
        evt = window.event || evt;
        if ($(this).width() > $(this).children('.itemList').outerWidth()) {
          evt.preventDefault();
          return false;
        }
        evt.preventDefault();
        iEndPosX = evt.targetTouches[0].pageX;
        iSlideDistance = iEndPosX - iStartPosX;
        var iItemListLeft = iMobileNavFloatLayerItemListStartPosX + iSlideDistance;
        if (iItemListLeft > 0) iItemListLeft = 0;
        var iHiddenWidth = $(this).width() - $(this).children('.itemList').outerWidth();
        if (iItemListLeft < iHiddenWidth) iItemListLeft = iHiddenWidth;
        $('#MobileNavFloatLayer .itemList').css('left', iItemListLeft + "px");
        return false;
      });
    } else {
      $('#MobileNavFloatLayer .itemList').css({
        width: ''
      });
    }
  }
}

function matchNavAndFootNavBgColor() {
  setInterval(function () {
    if ($('#MobileFootNav').attr('bgcolorrelatedtomobilenav') == 0) {
      var bgcolor = $('.ModuleMobileNavGiant #header').length > 0 ? $('.ModuleMobileNavGiant #header').css('background-color') : $('#MobileNav').css('background-color');
      if ($('#MobileFootNav .foot-nav-list').css('background-color') != bgcolor)

        $('#MobileFootNav .foot-nav-list').css('background-color', bgcolor);
    }
  }, 50);
}

function doSomeWhanPreview() {
  if (window.location.getQueryString('view') == '1') {
    $("body").find('a').each(function (i, elm) {
      if (/^(javascript|#)/i.test($(this).attr('href'))) {
        return true;
      }

      if ($(this).prop('href').indexOf(location.protocol + "//" + location.hostname) == 0) {
        var url = $(this).attr('href');
        if (url) {
          if ($(this).hasClass("ui-tabs-anchor") == false) {
            url = url.replace(/^([^\?#]*)(\??)([^#]*)(#?)/, '$1\?$3&view=1$4');
          }
        }
        $(this).attr('href', url);
        $(this).attr('target', '_self');
      }
    });

    $('.ModuleUserLogin [registerurl]').off().on('click', function (evt) {
      var url = $(this).attr('registerUrl');
      window.location = url.indexOf("?") > -1 ? url + "&view=1" : url + "?view=1";
      evt.preventDefault();
      return false;
    });
  }
}

function doLoginWithUserNamePassword(obj) {
  obj = $(obj);
  var url = $(obj).attr('action');
  var data = $(obj).serializeArray();
  if (obj.length > 0) {
    $.ajax({
      type: "post",
      url: url,
      cache: false,
      data: data,
      dataType: "json",
      success: function (data) {
        if (!data.success) {
          alert(data.msg);
          return;
        }
        if (data.msg) {
          window.location.href = decodeURIComponent(data.msg);
        }
      },
      error: function (req) {
        alert(req.responseText);
      }
    });
  }
}

function AjaxResetPassword(obj) {
  if (obj) {
    var data = $(obj).serialize() + '&act=resetpassword'
    $.ajax({
      type: "POST",
      url: $(obj).attr('action'),
      cache: false,
      beforeSend: function (XMLHttpRequest) {
        $('input[type="submit"]', $(obj)).hide();
        $('.Loading', $(obj)).show();
      },
      dataType: "json",
      data: data,
      success: function (data) {
        if (data) {
          if (!data.success) {
            $('input[type="submit"]', $(obj)).show();
          }
          $('.Loading', $(obj)).hide();
          $(".container", $(obj)).show();
          $(".errorMsg", $(obj)).html(data.msg);
        }
      },
      complete: function (XMLHttpRequest, textStatus) {
        $('input[type="submit"]', $(obj)).show();
        $('.Loading', $(obj)).hide();
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        $('input[type="submit"]', $(obj)).show();
        $('.Loading', $(obj)).hide();
      }
    });
  }
};

//弹出微信扫码支付的对话框
function WxScanPay(orderid) {
  if (!-[1,]) { // ie7,8不允许
    alert('很抱歉，当前浏览器不支持微信扫码支付，请升级或更换其他浏览器重试。');
    return;
  }
  $("#WxScanPayDiv").remove();
  var WxScanPayDiv = $('<div id="WxScanPayDiv" style="z-index:999999999"><iframe src="/index.php?c=front/Onlinepay&Action=WxScanPay&OrderID=' + orderid + '" width="100%" height="450"></iframe></div>');
  $("body").append(WxScanPayDiv);
  $(WxScanPayDiv).dialog({
    title: '微信支付 - Pay', modal: true, width: 500, position: 'center',
    resizable: false,
    buttons: {
      "取消": function () {
        $(this).dialog("close");
      }
    },
    close: function () {
      $("#WxScanPayDiv").remove();
    }
  });
}

// 全屏模块绝对定位100%宽度取的是屏幕的可视宽度，当设置的站点宽度超过屏幕可视宽度时候，全屏模块右侧留白，所以定时器设它门一个固定宽度
function keepFullScreenModules100Width() {
  if (getCookie("SiteType") == "1") return;
  setInterval(function () {
    $('body>.ModuleItem').each(function (i, item) {
      if (!$(this).attr('float')) $(this).css('width', $('#pagebody').width()); //非浮动模块保持全屏
    });
  }, 200);
}

function runSlide(id, pattern, time, imageready) {
  var module = $("#module_" + id);
  var mm = module.clone();
  var text = $('#txt_' + id);
  // 判断是否存在，存在则替换最新内容，不存在则添加
  if (text.length == 0) {
    var text = $("<textarea id='txt_" + id + "' style='display:none'>" + module[0].outerHTML + "</textarea>");
    $("body").append(text);
  } else {
    var text = text.val(module[0].outerHTML)
  }
  var obj = $("#myFocus" + id);
  // 以下特殊字符必须处理，防止myfocus解析错误
  obj.find('img').each(function () {
    $(this).attr('alt', ($(this).attr('alt') || '').replace(/[<>&"]/g, function (c) {
      return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
    }));
    $(this).attr('text', ($(this).attr('text') || '').replace(/[<>&"]/g, function (c) {
      return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
    }));
  });
  var readyCallback = function () {
    // 修复mF_ladyQ风格下，标题文字在第一次循环不显示的bug
    if (pattern == "mF_ladyQ") {
      module.find('.txt li').css({
        '-webkit-transition': 'none',
        '-moz-transition': 'none',
        '-o-transition': 'none'
      });
    }
  }
  if (module.css("position") != "absolute") {
    var width = module.parent().width() - parseInt(module.parent().css("padding-left")) - parseInt(module.parent().css("padding-right"));
    if (!obj.attr("hasreload")) {
      obj.find("*[name=slideImg]").each(function (i, item) {
        var src = $(item).attr("src");
        $(item).src = '';
        $(item).on("load", function () {
          if (obj.attr("hasreload")) return;
          if ($(item).height() == 0) return;
          obj.height($(item).height());
          module.height($(item).height());
          obj.width(width);
          module.width(width);
          obj.attr("hasreload", "1");
          myFocus.set({id: "myFocus" + id, pattern: pattern, loadIMGTimeout: 0, time: time}, readyCallback);
        });
        $(item).src = src;
      });
    }
  } else {
    myFocus.set({id: "myFocus" + id, pattern: pattern, loadIMGTimeout: 0, time: time}, readyCallback);
    var $Img = module.find('img[name=slideImg]');
    if (pattern == 'mF_slide3D') {
      $Img.attr({'style': null, 'width': null});
      setTimeout(function () {
        $('.mF_slide3D_wrap').css({'padding': 0});
      }, 150)
    } else if (pattern == 'mF_YSlider') {
      var imgHeight = module.height();
      $Img.attr({'style': 'height:' + imgHeight + 'px'});
    } else if (pattern == 'mF_shutters') {
      var imgHeight = module.height();
      var imgWidth = module.width();
      $Img.attr({'style': 'height:' + imgHeight + 'px', 'width': imgWidth});
    }
  }
  module.attr({"mid": id, "pattern": pattern, "time": time});
}

function runMobileSlide(moduleid) {
  $(window).load(function () {
    $('#swiper' + moduleid).width($('#module_' + moduleid).parent().width());
    $('#module_' + moduleid).resize(function () {
      $('#swiper' + moduleid).width($('#module_' + moduleid).parent().width());
      window['swiper' + moduleid].destroy(false);
      window['swiper' + moduleid] = new Swiper('#swiper' + moduleid, {
        autoplay: 3000,
        loop: true,
        pagination: '.SNum' + moduleid
      });
    });
    window['swiper' + moduleid] = new Swiper('#swiper' + moduleid, {
      autoplay: 3000,
      loop: true,
      pagination: '.SNum' + moduleid
    });
  });
}

// 调整幻灯片模块显示样式
function adjustModuleSlide(obj) {
  if (!obj) {
    var moduleSlides = $('.ModuleSlide').parent();
    for (var i = 0; i < moduleSlides.length; i++) {
      adjustModuleSlide(moduleSlides[i]);
    }
  }

  obj = $(obj);
  if (obj.children().is('.ModuleSlide') && SiteType == 0) {
    var moduleid = obj.attr('id').replace(/module_/i, '');
    var aa = $("#txt_" + moduleid);
    var mm = $(aa.val().replace("runSlide", ""));
    mm.css({
      "position": obj.css("position"),
      "left": obj.css("left"),
      "top": obj.css("top"),
      "width": obj.width() + "px",
      "height": obj.height() + "px"
    });
    var myfocusObj = mm.find('#myFocus' + moduleid);
    var moduleHead = mm.find('.ModuleHead').get(0);
    var moduleHeadHeight = moduleHead ? mm.find('.ModuleHead').get(0).offsetHeight : 0;
    myfocusObj.height(mm.height() - moduleHeadHeight);
    myfocusObj.width(mm.width());
    $(obj).replaceWith(mm);
    var id = obj.attr("mid");
    var pattern = obj.attr("pattern");
    var time = obj.attr("time");
    runSlide(id, pattern, time);
  }
}

//显示产品、文章等子分类
function setModuleCls(obj) {
  var strCls = ".ModuleProductCls,.ModuleNewsCls,.ModuleDownCls,.ModuleNewsClsV2,.ModuleProductClsV2";
  if (!obj) {
    var moduleCls = $(strCls);
    for (var i = 0; i < moduleCls.length; i++) {
      setModuleCls(moduleCls[i]);
    }
  }
  obj = $(obj);
  var showStyle = obj.find("[class*=ModuleClsShowStyle]").attr('showstyle');
  if (showStyle == 0) {
    var hidesubTimer = new Object();
    obj.find(".SHOWSUB>li").mouseover(function () {
      var moduleid = $(this).closest('.ModuleItem').attr("id").replace('module_', '');
      var id = 'subclass' + $(this).children("ul").attr("id");
      var obj = $(this).get(0);
      var type = '';
      var moduleClasses = $(this).closest(strCls).attr('class').split(/\s+/);
      var clsClasses = strCls.split(',');
      for (var i = 0; i < moduleClasses.length; i++) {
        for (var j = 0; j < clsClasses.length; j++) {
          if (clsClasses[j].replace(/\s|\./g, '') == moduleClasses[i]) {
            type = moduleClasses[i];
            break;
          }
        }
        if (type) break;
      }
      $(obj).removeClass("SubMaskColor");
      $(obj).removeClass("SubMaskBorder1");
      $("#mask" + id).remove();
      $("#" + id).remove();
      if (!$(this).children("ul").html()) return;
      var obj = $(this).get(0);
      var p = $("<div id='" + id + "' class='SubMask SubMask" + type + " SubMaskColor SubClassIn" + moduleid + "' style='position:absolute;display:none'></div>");
      p.append($(this).children("ul").clone());
      p.children("ul").css("display", "block");
      p.off().mouseenter(function () {
        clearTimeout(hidesubTimer[id]);
      }).mouseleave(function () {
        $("#" + id).remove();
        $("#mask" + id).remove();
        $(obj).removeClass("SubMaskColor");
        $(obj).removeClass("SubMaskBorder1");
      });
      $("body").append(p);
      var zindex = parseInt($(this).css("z-index"));
      if (isNaN(zindex)) zindex = 0;
      $("body").append("<div id='mask" + id + "' class='SubMaskColor SubClassMaskIn" + moduleid + "' style='width:0px;height:" + $(this).height() + "px;position:absolute;'></div>");
      $(this).addClass("SubMaskColor");
      $(this).addClass("SubMaskBorder1");
      var borderwidth = parseInt($("#" + id).css("border-top-width"));
      if (isNaN(borderwidth)) borderwidth = 0;
      var func = function () {
        $("#" + id).css({
          "display": "block",
          "top": $(obj).offset().top,
          "left": ($(obj).offset().left + $(obj).width())
        });
        $("#mask" + id).css({
          "top": $(obj).offset().top + borderwidth,
          "left": ($(obj).offset().left + $(obj).width() - 3)
        });
      };
      func();
      setTimeout(func, 50); //因为如果从一个分类快速切换到另一个分类，原分类会延时50ms才会消失，这时如果原分类有border，会占了几个像素的高度，会导致后面的分类位置计算不准，这里延时50ms重新计算一下解决了这个问题
    }).mouseleave(function () {
      $(this).children("ul").hide();
      var id = 'subclass' + $(this).children("ul").attr("id");
      var obj = $(this).get(0);
      hidesubTimer[id] = setTimeout(function () {
        $(obj).removeClass("SubMaskColor");
        $(obj).removeClass("SubMaskBorder1");
        $("#mask" + id).remove();
        $("#" + id).remove();
      }, 50);
    });
  } else if (showStyle == 3) {
    obj.find('.MainClassItem:last-child').css({
      borderBottom: '0px'
    });
  } else if (showStyle == 7) {
    obj.find('.clsAllList > .clsItem').off().on('mouseenter', function () {
      var moduleItem = $(this).closest('.ModuleItem');
      var moduleid = moduleItem.attr('id');
      moduleid = moduleid.replace('module_', '');
      var floatElem = $('<div id="ModuleClsShowStyle7_floatElem' + moduleid + '" class="ModuleClsShowStyle7 ModuleClsShowStyle7_floatElem" relatedmoduleid=' + moduleid + '></div>').append('<div class="clsAllList"></div>');
      floatElem.children('.clsAllList').append($(this).find('.clsItemList').clone());
      $('body').append(floatElem);
      $('body').append('<div id="ModuleProductClsStyle7_Mask' + moduleid + '" class="ModuleProductClsStyle7_Mask" relatedmoduleid=' + moduleid + '></div>');
      var moduleZIndex = parseFloat(moduleItem.css('z-index'));
      if (isNaN(moduleZIndex)) moduleZIndex = 0;
      moduleZIndex++;
      moduleZIndex = 9999;
      var floatElemMinHeight = moduleItem.find('.clsAllList').height();
      moduleItem.find('.clsAllList > .clsItem').removeClass('hover');
      $(this).addClass('hover');
      floatElem.css({
        position: 'absolute',
        top: getElementTopWithBorder(moduleItem[0]),
        left: getElementLeftWithBorder(moduleItem[0]) + moduleItem.outerWidth(false),
        zIndex: moduleZIndex
      });
      floatElem.find('.clsItemList').css({
        position: 'static',
        minHeight: floatElemMinHeight
      }).show();
      $('.ModuleProductClsStyle7_Mask').css({
        position: 'absolute',
        left: Math.ceil((getElementLeftWithBorder(this) + $(this).width()).toFixed(2)) * 100 / 100 - 1,
        top: getElementTopWithBorder(this),
        zIndex: moduleZIndex,
        width: parseFloat(moduleItem.find('.clsAllList').css('border-right-width')) + parseFloat(moduleItem.css('border-right-width')) + parseFloat(floatElem.find('.clsAllList').css('border-left-width')) + 1,
        height: parseFloat(moduleItem.find('.clsItem').height())
      });
      $('.ModuleClsShowStyle7_floatElem').off().on('mouseleave', function (evt) {
        $('.ModuleClsShowStyle7_floatElem').remove();
        $('.ModuleProductClsStyle7_Mask').remove();
        $('#module_' + $(this).attr('relatedmoduleid')).find('.clsAllList > .clsItem').removeClass('hover');
      });
      $('.ModuleProductClsStyle7_Mask').off().on('mouseleave', function (evt) {
        var relatedTarget = evt.toElement || evt.relatedTarget;
        if (!$(relatedTarget).closest('.ModuleClsShowStyle7').hasClass('ModuleClsShowStyle7_floatElem')
          && !$(relatedTarget).hasClass('ModuleProductClsStyle7_Mask')) {
          $('.ModuleClsShowStyle7_floatElem').remove();
          $('.ModuleProductClsStyle7_Mask').remove();
          $('#module_' + $(this).attr('relatedmoduleid')).find('.clsAllList > .clsItem').removeClass('hover');
        }
      });
    }).on('mouseleave', function (evt) {
      var relatedTarget = evt.toElement || evt.relatedTarget;
      if (!$(relatedTarget).closest('.ModuleClsShowStyle7').hasClass('ModuleClsShowStyle7_floatElem')
        && !$(relatedTarget).hasClass('ModuleProductClsStyle7_Mask')) {
        $('.ModuleClsShowStyle7_floatElem').remove();
        $('.ModuleProductClsStyle7_Mask').remove();
        $(this).removeClass('hover');
      }
    });
  }
}

/**
 * 克隆元素样式
 * @author tang bin
 * @version 0.1
 * @see http://www.planeart.cn/?p=1499
 * @param {HTMLElement} 被克隆的元素
 * @param {Boolean} 是否启用缓存（默认true）
 * @return {String} css类名
 */
var cloneStyle = (function (doc) {
  var rstyle = /^(number|string)$/,
    cloneName = '${cloneName}',
    sData = {},
    addHeadStyle = function (content) {
      var style = sData[doc];
      if (!style) {
        style = sData[doc] = doc.createElement('style');
        doc.getElementsByTagName('head')[0].appendChild(style);
      }
      ;
      style.styleSheet && (style.styleSheet.cssText += content) || style.appendChild(doc.createTextNode(content));
    },
    getStyle = 'getComputedStyle' in window ? function (elem, name) {
      return getComputedStyle(elem, null)[name];
    } : function (elem, name) {
      return elem.currentStyle[name];
    };

  return function (source, cache) {
    if (!cache && source[cloneName]) return source[cloneName];
    var className, name,
      cssText = [],
      sStyle = source.style;
    for (name in sStyle) {
      var val = getStyle(source, name);
      if (val !== '' && rstyle.test(typeof val)) {
        name = name.replace(/([A-Z])/g, "-$1").toLowerCase();
        cssText.push(name);
        cssText.push(':');
        cssText.push(val);
        cssText.push(';');
      }
      ;
    }
    ;
    cssText = cssText.join('');
    source[cloneName] = className = 'clone' + (new Date).getTime();
    addHeadStyle('.' + className + '{' + cssText + '}');
    return className;
  };
}(document));

function runAllAnimate(list) {
  if (!list) list = $(".ModuleItem");
  $(list).each(function (i, item) {
    var html = $(item)[0].outerHTML;
    var animatename = $(item).attr("animate");
    if (!animatename) {
      var match = html.match(/wow\s+([a-z]+)/gi);
      if (match) {
        animatename = match[0].replace(/wow\s+/, '');
      }
    }
    if (animatename) {
      if (html.indexOf("ModuleFullSwitch") > -1) return;
      $(item).removeClass(animatename);
      var duration = $(item).attr("data-wow-duration");
      var delay = $(item).attr("data-wow-delay");
      var animate = {"animation-name": animatename};
      if (duration) animate["animation-duration"] = duration;
      if (delay) animate["animation-delay"] = delay;
      $(item).css({"animation-name": 'aaa'});
      setTimeout(function () {
        $(item).css({"animation-name": animatename, "animation-duration": duration, "animation-delay": delay});
      }, 10);
      $(item).attr("animate", animatename);
    }
  });
}

// pc相册
function adjustModuleSiteGallery(moduleID) {
  // TODO box-sizing: content-box 计算margin
  var iSingleItemWidth = $("#module_" + moduleID + " .imgItem").outerWidth();
  var iModuleWidth = $("#module_" + moduleID).width();
  var iModuleHeight = $("#module_" + moduleID).height();
  var iColCount = Math.floor(iModuleWidth / iSingleItemWidth);
  var iTotalCount = $("#module_" + moduleID + " .imgItem").length;

  $("#module_" + moduleID + " .imgItem").each(function (i) {
    if (i % iColCount == 0) {
      $(this).css({marginLeft: 0});
    } else if (i % iColCount == iColCount - 1) {
      $(this).css({marginRight: 0});
    }
    if (i < iColCount) {
      $(this).css({marginTop: 0});
    } else if (i > iTotalCount - iColCount) {
      $(this).css({marginBottom: 0});
    }
  });
}

// 初始化pc相册
function setModuleSiteGallery(obj) {
  var defaults = {
    padding: 0,
    prevEffect: 'fade',
    nextEffect: 'fade',
    viewDetails: '查看详情',
    closeBtn: true,
    openOpacity: true,
    helpers: {
      overlay: {
        css: {'background': 'rgba(0,0,0, 0.9)'},
        closeClick: false
      },
      title: {type: 'outside'},
      //buttons: {},
      thumbs: {
        width: 50,
        height: 50,
        position: 'bottom'
      }
    },
    modal: false,
    tpl: {
      next: '<a title="' + obj.btnNextText + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
      prev: '<a title="' + obj.btnPreviousText + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
    },
    beforeLoad: function () {
      if (this.element) {
        var oImg = $(this.element).children('img');
        var sLink = '';
        if (oImg.attr('redirectUrl') + '' != '') {
          sLink = '<a href="' + oImg.attr('redirectUrl') + '" class="redirectUrl">' + obj.viewDetails + '</a>';
        }
        this.title = oImg.attr('alt') + sLink;
      } else {
        var sLink = '';
        if (this.url) {
          sLink = '<a href="' + this.url + '" class="redirectUrl">' + obj.viewDetails + '</a>';
        }
        this.title = this.title + sLink;
      }
    },
    afterShow: function () {
      if ($('.fancybox-overlay>.fancybox-prev').length == 0) {
        $('.fancybox-outer>.fancybox-prev').appendTo('.fancybox-overlay');
      } else {
        $('.fancybox-outer>.fancybox-prev').remove();
      }
      if ($('.fancybox-overlay>.fancybox-next').length == 0) {
        $('.fancybox-outer>.fancybox-next').appendTo('.fancybox-overlay');
      } else {
        $('.fancybox-outer>.fancybox-next').remove();
      }
      if ($('.fancybox-overlay>.fancybox-close').length == 0) {
        $('.fancybox-skin>.fancybox-close').appendTo('.fancybox-overlay').css({
          right: "0px",
          top: "0px"
        });
      } else {
        $('.fancybox-skin>.fancybox-close').remove();
      }

      //更新前一张和下一张的遮盖高度，不遮住下面的超链接
      var fancyboxInner = $(".fancybox-inner").eq(0);
      var fancyboxWrap = $(".fancybox-wrap").eq(0);
      if (fancyboxInner && fancyboxWrap) {
        var top = parseInt(fancyboxWrap.css("top").replace("px", ""));
        var height = fancyboxInner.height();
        $(".fancybox-next").css("height", height + top);
        $(".fancybox-prev").css("height", height + top);
      }
    }
  }

  if (obj.effectID != 0) delete defaults.helpers.thumbs;
  $("#module_" + obj.moduleID + " .imgBox img").css('position', 'relative');
  if (obj.isExpandDir == 0) {
    $("#module_" + obj.moduleID + " .imgBox").off().click(function () {
      $.fancybox.open(obj.galleryItems[$("#module_" + obj.moduleID + " .imgBox").index(this) + 1], defaults);
      return false;
    });
  } else {
    $("#module_" + obj.moduleID + " .imgBox").off().click(function () {
      var items = obj.galleryItems[1] || [];
      for (var i = 0; i < items.length; i++) {
        if (($(this).prop('href') + '').replace(/\?.*$/, '').indexOf((items[i].href + '').replace(/\?.*$/, '')) > -1) {
          break;
        }
      }
      var opts = $.extend({}, defaults);
      opts.index = i;
      $.fancybox.open(obj.galleryItems[1], opts);
      return false;

    });
  }

  $("#module_" + obj.moduleID + " .imgBox img").each(function () {
    var sSrc = $(this).attr('src');
    $(this).attr('src', '');
    $(this).off('load').on('load', function () {
      $(this).attr('originWidth', $(this).parent().width());
      $(this).attr('originHeight', $(this).parent().height());
    });
    $(this).attr('src', sSrc);
  });

  $("#module_" + obj.moduleID + " .imgBox img").off('mouseover').on('mouseover', function () {
    var oZoomImage = $(this);
    var iOriginWidth = oZoomImage.attr('originWidth') || $(this).parent().width();
    var iOriginHeight = oZoomImage.attr('originHeight') || $(this).parent().height();
    var iZoomPx = 50;
    oZoomImage.stop().animate({
      left: -iZoomPx / 2 + 'px',
      top: -iZoomPx / 2 + 'px',
      width: parseInt(iOriginWidth) + iZoomPx + 'px',
      height: parseInt(iOriginHeight) + iZoomPx + 'px'
    }, 600);

    $('.imgMask').remove();
    var iLeft = parseFloat($(this).closest('.imgItem').css('padding-left'));
    var iTop = parseFloat($(this).closest('.imgItem').css('padding-top'));

    $('<div class="imgMask"><img class="zoomIcon" src="/images/zoom.png"/></div>').css({
      left: iLeft + 'px',
      top: iTop + 'px',
      width: iOriginWidth + 'px',
      height: iOriginHeight + 'px'
    }).insertAfter(this).off().on('mouseleave', function () {
      var oZoomImage = $(this).closest('.imgItem').find('.imgBox img');
      var iOriginWidth = oZoomImage.attr('originWidth');
      var iOriginHeight = oZoomImage.attr('originHeight');
      oZoomImage.stop().animate({
        left: '0',
        top: '0',
        width: iOriginWidth + 'px',
        height: iOriginHeight + 'px'
      }, 600);
      $('.imgMask').remove();
    }).on('click', function () {
    })
  });
}

function setMobileModuleSiteGallery(obj) {
  if (obj.isExpandDir == 0) {
    $("#module_" + obj.moduleID + " .grid-cont").off().click(function () {
      $(this).lightGallery({
        dynamic: true,
        thumbnail: true,
        dynamicEl: obj.galleryItems[$("#module_" + obj.moduleID + " .grid-cont").index(this) + 1]
      });
      return false;
    });
  }
}

// 初始化音乐模块
function initModuleMusic(opts) {
  var bgMusicFilePath = opts.bgMusicFilePath;
  var moduleid = opts.moduleid;
  var siteType = opts.siteType;
  var isAutoPlay = opts.isAutoPlay;
  var isLoop = opts.isLoop;
  var canPlay = opts.canPlay;

  if (canPlay) {
    var ua = navigator.userAgent.toLowerCase();
    var elem = $('#module_' + moduleid);
    if (siteType == 0) {
      if (ua.match(/msie ([\d.]+)/)) {
        $(elem).find('#music' + moduleid).html('<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" style="display:none;"><param name="AutoStart" value="' + (isAutoPlay ? '1' : '0') + '" /><param name="Src" value="' + bgMusicFilePath + '" /><param name="hidden" value="true" /><param name="loop" value="' + (isLoop ? 'true' : 'false') + '" /><param name="ShowControls" value="false" /></object>');
      } else if (ua.match(/firefox\/([\d.]+)/)) {
        $(elem).find('#music' + moduleid).html('<audio src="' + bgMusicFilePath + '" ' + (isAutoPlay ? 'autoplay="true"' : '') + ' ' + (isLoop ? 'loop="true"' : '') + ' hidden="true"></audio>');
      } else if (ua.match(/chrome\/([\d.]+)/)) {
        $(elem).find('#music' + moduleid).html('<audio src="' + bgMusicFilePath + '" ' + (isAutoPlay ? 'autoplay="true"' : '') + ' ' + (isLoop ? 'loop="true"' : '') + ' hidden="true"></audio>');
      } else if (ua.match(/opera.([\d.]+)/)) {
        $(elem).find('#music' + moduleid).html('<embed src="' + bgMusicFilePath + '" ' + (isAutoPlay ? 'autostart="true"' : 'autostart="false"') + ' ' + (isLoop ? 'loop="true"' : '') + ' hidden="true"><noembed><bgsounds src="' + bgMusicFilePath + '"></noembed>');
      } else if (ua.match(/version\/([\d.]+).*safari/)) {
        $(elem).find('#music' + moduleid).html('<audio src="' + bgMusicFilePath + '" ' + (isAutoPlay ? 'autoplay="true"' : '') + ' ' + (isLoop ? 'loop="true"' : '') + ' hidden="true"></audio>');
      } else {
        $(elem).find('#music' + moduleid).html('<embed src="' + bgMusicFilePath + '" ' + (isAutoPlay ? 'autostart="true"' : 'autostart="false"') + ' ' + (isLoop ? 'loop="true"' : '') + ' hidden="true" mastersound></embed>');
      }
    } else {
      $(elem).find('#music' + moduleid).html('<audio src="' + bgMusicFilePath + '" ' + (isAutoPlay ? 'autoplay="true"' : '') + ' ' + (isLoop ? 'loop="true"' : '') + ' hidden="true"></audio>');
    }

    if (/(iphone)|(ipad)/i.test(ua)) {
      function forceSafariPlayAudio() {
        audioEl.load(); // iOS 9   还需要额外的 load 一下, 否则直接 play 无效
        audioEl.play(); // iOS 7/8 仅需要 play 一下
      }

      var audioEl = $('#music' + moduleid).find('audio')[0];
      audioEl.addEventListener('play', function () {
        // 当 audio 能够播放后, 移除这个事件
        window.removeEventListener('touchstart', forceSafariPlayAudio, false);
      }, false);

      // 由于 iOS Safari 限制不允许 audio autoplay, 必须用户主动交互(例如 click)后才能播放 audio,
      // 因此我们通过一个用户交互事件来主动 play 一下 audio.
      window.addEventListener('touchstart', forceSafariPlayAudio, false);

      audioEl.src = bgMusicFilePath;
    }
  }

  function setMusicImg(moduleid, isPlaying) {
    var musicImg = $('#musicPic' + moduleid).find('img');
    if (isPlaying) {
      musicImg.attr('src', musicImg.attr('playing_src')).addClass('playing');
    } else {
      musicImg.attr('src', musicImg.attr('_src')).removeClass('playing');
    }
  }

  setMusicImg(moduleid, isAutoPlay);

  $('#musicPic' + moduleid).off().on('click', function () {
    var audioEl = $('#music' + moduleid).find('audio')[0];
    if (audioEl) {
      if (audioEl.paused) {
        audioEl.play();
        setMusicImg(moduleid, true);
      } else {
        audioEl.pause();
        setMusicImg(moduleid, false);
      }
    }
    audioEl = $('#music' + moduleid).find('embed')[0];
    if (audioEl) {
      if (audioEl.playState == 2) {
        audioEl.pause();
        setMusicImg(moduleid, false);
      } else {
        audioEl.play();
        setMusicImg(moduleid, true);
      }
    }
    audioEl = $('#music' + moduleid).find('object')[0];
    if (audioEl) {
      if (audioEl.PlayState == 2) {
        audioEl.Pause();
        setMusicImg(moduleid, false);
      } else {
        audioEl.Play();
        setMusicImg(moduleid, true);
      }
    }
  });
}

// 初始化标签页模块
function initModuleTabContainer(moduleID, showStyle, layout, tabSwitch, CanDesign, isSuspend) {
  if ((CanDesign == 1 && isSuspend == 1 && $.inArray(layout, ['106', '103', '110']) > -1)) {
    setTimeout(function () {
      for (var key in window) {
        if (key.indexOf('initSwiperFunc') > -1) {
          if ($('#tab_content_clone_module_' + moduleID).length > 0) {
            var fn = window[key];
            $('#tab_content_clone_module_' + moduleID).queue(function () {
              fn()
              $(this).dequeue()
            })
          }
        }
      }
    }, 3000)
  }
  //layout仅仅用于标签模块，其他模块没必要的话勿抄
  //有swiper组件的都要在初始化模块的时候讲模块名称增加"Swiper",以下为例子
  //其余正常例子只需要initFunc
  //*注:因为swper轮播组件初始化的时候回判断元素是否被隐藏,如果被隐藏泽不会被初始化成功
  //swper模块必须注册该事件
  //如果有swiper隐藏的模块,记得注册该事件
  var tabSwitchEvent = {
    "click.updateSwiper": (tabSwitch == 'click' || layout == '109') || (CanDesign == 1 && isSuspend == 1 && $.inArray(layout, ['106', '103', '110']) > -1) ? function () {
      if ($(this).hasClass('active')) {
        return
      }
      solvePluginEvent(this, tabSwitch);
    } : function () {
      return
    },
    // 并且不是编辑模式不是悬浮编辑
    "mouseover.updateSwiper": (tabSwitch == 'hover' || layout != '109' || (isSuspend == 1 && CanDesign != 1 && $.inArray(layout, ['106', '103', '110']) > -1)) ? function () {
      if ($(this).hasClass('active')) {
        return
      }
      solvePluginEvent(this, tabSwitch);
    } : function () {
      return
    }
  }
  $("#module_" + moduleID + " .Nav-Container>li,#module_" + moduleID + "     .TabConOption,#module_" + moduleID + " .Nav-Container .nav>li").off('click.updateSwiper mouseover.updateSwiper').on(tabSwitchEvent);
  var solvePluginEvent = function (e, tabSwitch) {
    for (var key in window) {
      if (key.substr(0, 14) == 'initSwiperFunc' || key.substr(0, 11) == 'initMapFunc') {
        var mid = key.replace(/[^0-9]/g, '');
        // 横向排列的标签
        var tabIndex = $(e).index()
        if ($('#tab_content_clone_module_' + moduleID).length > 0 && $('#tab_content_clone_module_' + moduleID + ' .tab-pane').eq(tabIndex).find("#module_" + mid).length > 0) {
          var fn = window[key]
          $('#tab_content_clone_module_' + moduleID).queue(function () {
            fn()
            $(this).dequeue()
          })
        }
        if ($("#module_" + moduleID + " .tab-pane").eq(tabIndex).find("#module_" + mid).length > 0) {
          var fun = window[key];
          // 使用定时器是因为，直接初始化时某些节点未生成导致地图标题初始化不正确
          var funTime = setInterval(function() {
            fun()
            clearInterval(funTime);
          }, 450);
        }
        // 纵向排列的标签
        else if ($(e).closest('.Nav-Container').find('.tabContentGiantWb #module_' + mid).length > 0) {
          //  将swiper初始化放到动画队列里面，防止动画还没完成就初始化
          $(e).closest('.Nav-Container').find('.tabContentGiantWb #module_' + mid).queue(function () {
            var func = window[key];
            // 使用定时器是因为，直接初始化时某些节点未生成导致地图标题初始化不正确
            var funTime = setInterval(function() {
              func()
              clearInterval(funTime);
            }, 450);
            $(this).dequeue()
          })
        }
      }
    }

  }
  //layout仅仅用于标签模块，其他模块没必要的话勿抄
  if (parseInt(layout) == 107 || parseInt(layout) == 108 || parseInt(layout) == 109) {
    return;
  }
  if (showStyle == 0) {
    var module = $('#module_' + moduleID);
    if (module.length == 0) return;
    $('.btnScrollRight', module).off('click.linkClick').on('click.linkClick', function () {
      var targetElem = null;
      // 需要去掉内边框
      var oldscrollLeft = $('.nav', module).scrollLeft() - $('.Nav-Container', module).outerWidth() + $('.Nav-Container', module).innerWidth();
      $('.nav', module).children('li').each(function (index) {
        // 获取最大值
        var leftEdgeLeft = -$(this).position().left;
        if (oldscrollLeft <= leftEdgeLeft && $('.nav', module).width() + leftEdgeLeft < getNavRealWidth()) {
          targetElem = $(this);
          return false;
        } else {
          $('.btnScrollRight', module).css('color', 'rgb(204, 204, 204)')
        }
      });
      if (targetElem) {
        var scrollLeft2 = $('.nav', module).scrollLeft() + targetElem.outerWidth(true);
        $('.nav', module).stop().animate({'scrollLeft': scrollLeft2, 'margin-right': 0}, 300, function () {});
      }
    });

    $('.btnScrollLeft', module).on('click', function () {
      var targetElem = null;
      $('.nav', module).children('li').each(function (i) {
        if ($(this).position().left + $(this).outerWidth(true) >= 0) {
          targetElem = $(this);
          return false;
        }
      });
      if (targetElem) {
        var scrollLeft = $('.nav', module).scrollLeft() + targetElem.position().left;
        $('.nav', module).stop().animate({'scrollLeft': scrollLeft, 'margin-right': 0}, 300, function () {});
      }
    });
    $('.nav', module).scroll(function () {
      setButtonDisabled(this)
    });

    function getNavRealWidth() {
      var width = 0;
      $('.nav>li', module).each(function () {
        width += $(this).outerWidth(true);
      });
      return width;
    }

    function setButtonDisabled(evet) {
      var scrollLeft = $(evet).scrollLeft()
      if ($('.nav', module).scrollLeft() == 0) {
        $('.btnScrollLeft', module).css('color', '#ccc');
      } else {
        $('.btnScrollLeft', module).css('color', '');
      }
      if ($(evet).width() + scrollLeft >= $(evet)[0].scrollWidth) {
        $('.btnScrollRight', module).css('color', 'rgb(204, 204, 204)')
      } else {
        $('.btnScrollRight', module).css('color', '');
      }
    }

    function setPanelBtnScroll() {
      var navRealWidth = getNavRealWidth();
      if (isMobileBroswer()) {
        $('.nav', module).css('overflow', 'auto');
      }
      if (!isMobileBroswer() && navRealWidth > $('.nav', module).width()) {
        $('.btnScrollLeft', module).show();
        $('.btnScrollRight', module).show();
      } else if (isMobileBroswer() && navRealWidth > $('.nav', module).width()) {
        $('.btnScrollLeft', module).show();
        $('.btnScrollRight', module).show();
      } else {
        $('.btnScrollLeft', module).hide();
        $('.btnScrollRight', module).hide();
      }
      $('.panelBtnScroll').css({
        'height': $('.nav', module).outerHeight(),
        'padding-top': ($('.nav', module).outerHeight() - $('.panelBtnScroll>:first-child', module).outerHeight()) / 2
      });
      /*如果是新的标签模块；左右的按钮重新定位（基于按钮居中）*/
      if (module.find('.ModuleTabContainerGiant').length > 0) {
        var pdtp = Number($('.Nav-Container li', module).css('margin-top').replace(/px/, '')) + $('.Nav-Container li', module).outerHeight() / 2 - 11;
        module.find('.panelBtnScroll').css({
          'padding-top': pdtp
        })
      }
    }

    setPanelBtnScroll();
    $(window).off('resize.tabContainer' + moduleID).on('resize.tabContainer' + moduleID, function () {
      setPanelBtnScroll();
    });
    $('.panelBtnScroll, .nav', module).disableSelection();
  }
}

// 重调全屏幻灯片模块
function adjustModuleFullSlide(moduleid) {
  moduleid = (moduleid + '').replace(/^module_/i, '');
  var data = $('#module_' + moduleid).find('#Full' + moduleid).data('params');
  if (data) {
    var height = $('#module_' + moduleid).height();
    CoolSlide('#Full' + moduleid, height, data.effect, data.time, data.imgshowtype);
  }
}

// 产品详情二维码控制
function initProductDetailQrcode(qrcodeText) {
  var moduleProductDetailQrcodeTimeoutId = "moduleProductDetailQrcode";
  $(".icon-qrcode").on("mouseenter click", function () {
    if (window[moduleProductDetailQrcodeTimeoutId]) {
      clearTimeout(window[moduleProductDetailQrcodeTimeoutId]);
    }
    $("#divQrcode").remove();
    var html = "<div id='divQrcode' style='z-index:9999;padding:5px;border:1px solid #cccccc;background:white;position:absolute;'>";
    html += "<div id='pro-qrcode' style='width:140px;height:140px;'></div><div style='margin:2px;text-align:center;padding:5px;font-weight:bold;'>" + qrcodeText + "</div>";
    html += "</div>";
    $("body").append(html);
    $('#pro-qrcode').qrcode({text: location.href.replace(/(\?|#).*$/, ''), width: 140, height: 140});
    $("#divQrcode").css({top: $(this).offset().top + 30, left: $(this).offset().left - $('#divQrcode').width() + 30});
    $('#divQrcode').off('mouseenter').on('mouseenter', function () {
      if (window[moduleProductDetailQrcodeTimeoutId]) {
        clearTimeout(window[moduleProductDetailQrcodeTimeoutId]);
      }
    });
    $(".icon-qrcode, #divQrcode").off("mouseleave").on("mouseleave", function (evt) {
      evt = evt || window.event;
      var relatedTarget = evt.relatedTarget || evt.toElement;
      if ($(relatedTarget).is('.icon-qrcode, #divQrcode') || $(relatedTarget).closest('.icon-qrcode, #divQrcode').length > 0) {
        return false;
      }
      if (window[moduleProductDetailQrcodeTimeoutId]) {
        clearTimeout(window[moduleProductDetailQrcodeTimeoutId]);
      }
      window[moduleProductDetailQrcodeTimeoutId] = setTimeout(function () {
        $("#divQrcode").remove();
      }, 300);
    });
  });
}

//点击发送短信验证码
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数

function sendMessage(ModuleID) {
  var mobile = $('#resetMobile' + ModuleID).val();
  var mobilereg = /^1[3|4|5|7|8]\d{9}$/;
  if (!mobilereg.test(mobile)) {
    alert('请输入有效的手机号码！');
    return false;
  }
  curCount = count;
  //设置button效果，开始计时
  $("#btnSendCode" + ModuleID).attr("disabled", "true");
  $("#btnSendCode" + ModuleID).text("请在" + curCount + "秒内输入验证码");
  InterValObj = window.setInterval(function () {
    SetRemainTime(ModuleID);
  }, 1000); //启动计时器，1秒执行一次
  //向后台发送处理数据
  $.ajax({
    type: "POST", //用POST方式传输
    dataType: "JSON", //数据格式:JSON
    url: '/index.php?c=Front/Userlogin&a=getcode', //目标地址
    data: {mobile: mobile},
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    },
    success: function (data) {
      if (data.success) {
        alert(data.msg);
      }
      if (!data.success) {
        alert(data.msg);
      }
    }
  });
}

//timer处理函数
function SetRemainTime(ModuleID) {
  if (curCount == 0) {
    window.clearInterval(InterValObj);//停止计时器
    $("#btnSendCode" + ModuleID).removeAttr("disabled");//启用按钮
    $("#btnSendCode" + ModuleID).text("重新发送验证码");
  }
  else {
    curCount--;
    $("#btnSendCode" + ModuleID).text("请在" + curCount + "秒内输入验证码");
  }
}

//将url中的querystring转为对象
function getQueryParam() {
  if (!document.location.search) return null;
  var URLParams = new Object();
  var aParams = document.location.search.substr(1).split('&');
  for (i = 0; i < aParams.length; i++) {
    var aParam = aParams[i].split('=');
    var value = aParam[1];
    if (value && value.indexOf("#") > -1) value = value.substring(0, value.indexOf("#"));
    URLParams[aParam[0]] = decodeURIComponent(value);
  }
  return URLParams;
}

//替换指定的模块
window.replaceModules = {};

function replaceModule(moduleid) {
  if (window.replaceModules['moduleid'] || moduleid == 0 || moduleid == 'module_0') return;
  var params = getQueryParam();
  var str = '';
  for (key in params) {
    if (key != 'c' && key != 'moduleId') str += "&" + key + "=" + escape(params[key]);
  }
  $.get("/index.php?c=front/LoadModule&moduleId=" + moduleid + str, null, function (data) {
    window.replaceModules['moduleid'] = true;
    $('#' + moduleid).replaceWith(data);
    $('#' + moduleid).find('.ModuleUserLogin,.ModuleUserLoginV2').find('.userLoginContent').show().css('visibility', 'visible');
  });
}


// 获取当前页面url参数
if (!window.location.getQueryString) window.location.getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return (r[2]);
  return null;
}


// *** 分享推广代码
if (typeof ENABLE_FENXIAO != "undefined" && ENABLE_FENXIAO == "1") {
	// 如果原来没有设置推广来源
	var match = window.location.href.match(/#invite(\d+)/i);
	if (match) {
	  if (window.location.toString().indexOf("debug") > -1) alert(document.cookie);
	  $.get("/index.php?c=SetCookie&name=invite&value=" + match[1]); //用js设置cookie会令.net取不到正确的值，要改为用aspnet的程序来设置
	}
	// 生成当前用户的推广链接
	var match = document.cookie.match(/WebUserID=(\d+)/i);
	if (match) {
	  var WebUserID = match[1];
	  var um = navigator.userAgent.match(/MicroMessenger/gi);
	  if (um || true) {
		if (window.location.toString().indexOf("#invite") == -1 && window.location.toString().indexOf("?invite=" + WebUserID) == -1) {
		  window.location.href = window.location + "#invite" + WebUserID;
		}
	  }
	}
}
// *** END OF 分享推广代码
//*** start of 自动转换字体大小
var rootfont = parseFloat($("html").css('font-size'));

function torem(px) {
  if (px > 22) px = 22;
  if (px < 12) px = 12;
  return parseFloat(px / rootfont) + 'rem';
}

function changeFontSize(parentObj) {
  if (SiteType != "1") return;
  var modules = null;
  var selector = ".ModuleNewsDetail,.ModuleNewsDetailV2,.ModuleProductDetail,.ModuleProductDetailV2,.ModuleImageTextV2,.ModuleImageText,.ModuleNewsDetailGiant,.ModuleProductDetailGiant,.ModuleImageTextGiant,.ModulePlainTextGiant";
  if (parentObj) modules = $(parentObj).find(selector);
  else modules = $(selector);
  modules.each(function (i, module) {
    var mp = $(module).closest(".ModuleItem");
    if (mp.css("position") == "absolute") return;
    var texts = null;
    if (mp.is(".ModuleProductDetail") || mp.is(".ModuleProductDetailV2")) texts = $(module).find(".goods-detail-content,.pro-detail-content").find("div,span,td,p,li,a,font");
    else if (mp.is(".ModuleNewsDetail") || mp.is(".ModuleNewsDetailV2")) texts = $(module).find(".NewsContent").find("div,span,td,p,li,a,font");
    else texts = $(module).find("div,span,td,p,li,a,font");
    texts.each(function (j, item) {
      if ($(item).is(".goods-attrval-name")) return;
      // clone后，就算没加到body，clone元素里面的图片资源也会真的去请求
      // 这个特性会导致验证码失效，所以会另外一种方法
      // var tmp = $(item).clone();
      var tmp = $(item).children().length == 0 ? $(item).clone() : $("<div>" + $(item).html().replace(/<img[^>]+c=validatecode[^>]+>/ig, '') + "</div>");
      tmp.find(':nth-child(n)').remove();
      if (tmp.text().trim().length <= 4) return;
      if ($(window).width() > 900) {
        if ($(item).attr('ori-font-size')) {
          $(item).css('font-size', $(item).attr('ori-font-size'));
          $(item).attr('ori-font-size', null);
        }
        if ($(item).attr('ori-line-height')) {
          $(item).css('line-height', $(item).attr('ori-line-height'));
          $(item).attr('ori-line-height', null);
        }
        return;
      }
      var oldfontsize = $(item).css('font-size');
      var lineheightScal = parseFloat($(item).css('line-height')) / parseFloat(oldfontsize);
      if (/(px)$/.test(oldfontsize)) {
        var fontsize = parseFloat(oldfontsize);
        var newsize = torem(fontsize);
        $(item).css('font-size', newsize);
        if (!$(item).attr('ori-font-size')) $(item).attr('ori-font-size', oldfontsize);
        if (lineheightScal > 1) {
          $(item).css('line-height', (lineheightScal * 100) + "%"); //保持比例
          if (!$(item).attr('ori-line-height')) $(item).attr('ori-line-height', (lineheightScal * 100) + "%");
        }
      }
    });
  });
}

$(window).load(function () {
  console.log('JScsipt 自动转换字体大小');
  initSubtreeFont = function () {
  };
  changeFontSize()
});
$(window).resize(function () {
  changeFontSize()
});
//*** end of 自动转换字体大小
//** start of 模块浮动
if (typeof(floaters) != 'undefined') { //一些独立的页面（比如店掌柜的）要加载JScript，但又不需要模块浮动的功能，就不必初始化了
  var floatplayer = new floaters();
  var floatElems = new Array();

  function runFloaters(module, action) {
    if (typeof(module) == 'string') module = $('#' + module);
    if (action == 'remove') {
      module.css("overflow-y", 'auto');
      module.css("display", "block");
      floatplayer.remove(module.attr('id'));
      return;
    }
    if (/^(float\-)/i.test(module.attr('float'))) {
      module.css("overflow-y", 'hidden');
      module.appendTo("body");
      module.show();
      var top = parseInt(module.attr('floaty'));
      if (isNaN(top)) top = parseInt(module.css('top'));
      var id = module.attr('id');
      if (/^(float\-left)/i.test(module.attr('float'))) {
        var left = parseInt(module.attr('floatx'));
        if (isNaN(left)) left = parseInt(module.css('left'));
        var options = {
          'floaterID': id,
          'distanceFromPageLeft': left,
          'distanceFromPageTop': top,
          width: module.css('width'),
          'xFloat': 'left'
        };
        var floatElem = floatplayer.addItem2(options, action);
        floatElems.push(floatElem);
      } else if (/^(float\-right)/i.test(module.attr('float'))) {
        var right = parseInt(module.attr('floatx'));
        if (isNaN(right)) right = parseInt(module.css('right'));
        var options = {'floaterID': id, 'distanceFromPageRight': right, 'distanceFromPageTop': top, 'xFloat': 'right'};
        var floatElem = floatplayer.addItem2(options, action);
        floatElems.push(floatElem);
      }
      floatplayer.play2();
    }
  }

  setInterval(function () {
    for (var k = 0; k < floatElems.length; k++) {
      if ($(window).width() < 700) $(floatElems[k]).css("display", "none");
      else $(floatElems[k]).css("display", "block");
    }
  }, 5);
  $(window).load(function () {
    $("div[float]").each(function (i, item) {
      runFloaters($(item))
    })
  });
}

//九宫格模块的响应式脚本
function computeJiuGondHeight(module) {
  if (SiteType != "1") return;
  if (module) {
    var m = null;
    if (typeof module == 'object') m = $(module);
    else m = $('#' + module);
    if (m.find(".ModuleJiuGongV2").length == 0) return; //不是v2版本，不处理
    var st = m.find('.JiuGongTab').attr("ShowType");
    m.find(".JiuGongItem").each(function (i, item) {
      var height = $(item).width();
      if (st == "2" || st == "4") height = height / 2; //纯文字
      if (height > 110) height = 110;
      if ((st == "2" || st == "4") && height > 80) height = 80;
      $(item).height(height);
    });
    var hasText = false;
    m.find(".JiuGongItemText").each(function (i, item) {
      if (st == 4) $(item).css('line-height', $(item).height() + 'px');
      hasText = true;
    });
    //只有图标没有标题时，不限制图标的大小
    if (hasText == false) {
      m.find(".JiuGongItemImg").each(function (i, item) {
        $(item).css({"width": "auto", "height": "auto"});
      });
      m.find(".JiuGongItem").each(function (i, item) {
        $(item).css({"width": "auto", "height": "auto"});
      });
      return;
    }
    var cc = parseInt(m.find('.JiuGongTab').attr("CellCount"));
    if (st == "0") { //上下结构
      m.find(".JiuGongItemImg").each(function (i, item) {
        var w = 50, h = 50;
        if (cc >= 5 && m.width() < 700) w = 40, h = 40;
        $(item).css({"max-width": w, "max-height": h});
      });
    }
    if (st == "2") { //左右结构
      m.find(".JiuGongItemImg,.JiuGongItemImg2").each(function (i, item) {
        var w = 30, h = 30;
        if (cc <= 2) w = 40, h = 40;
        if (m.width() > 700) w = 50, h = 50;
        $(item).css({"min-width": w, "min-height": h});
      });
    }
  } else {
    var modules = $(".ModuleJiuGongV2").closest(".ModuleItem");
    $.each(modules, function (i, item) {
      computeJiuGondHeight(item);
    });
  }
}

//地图模块初始化
var citylocation, map, marker, infoWin = null;

function moduleMap(latitude, longitude, title) {
  var center = new qq.maps.LatLng(latitude, longitude);
  var map = new qq.maps.Map(document.getElementById('mapContainer{{ModuleID}}'), {
    center: center,
    zoom: 13
  });
  infoWin = new qq.maps.InfoWindow({
    map: map
  });
  infoWin.open();
  infoWin.setContent(title);
  infoWin.setPosition(map.getCenter());
  marker = new qq.maps.Marker({
    position: center,
    draggable: true,
    map: map
  });
}

// swiper animation 效果
function runAnimate(jqobj, animate, duration, delay) {
  $(jqobj).css({"animation-name": animate, "animation-duration": duration, "animation-delay": delay}).one(
    'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(jqobj).css({"animation-name": "none", "animation-duration": "none", "animation-delay": "none"});
    }
  );
}

//模块悬停动画
function initHoverAnimate() {
  $(document).on("mouseenter", ".ModuleItem", function () {
    if (typeof CanDesign != 'undefined' && CanDesign == 'False') {
      var jqobj = $(this);
      if ($(jqobj).attr('hover-effect')) {
        runAnimate($(jqobj), $(jqobj).attr('hover-effect'), $(jqobj).attr('hover-duration'), $(jqobj).attr('hover-delay'));
      }
    }
  });
  $(document).on("mouseenter", ".image-animation,img", function () {
    if (typeof CanDesign != 'undefined' && CanDesign == 'False') {
      var jqobj = $(this).closest(".ModuleItem");
      var imgobj = $(this).closest(".image-animation");
      if (imgobj.length == 0) imgobj = $(this);
      if ($(jqobj).attr('image-hover-effect')) {
        if ($(jqobj).attr('image-hover-effect') == 'zoom') {
          ImgZoom(imgobj);
          imgobj.on("mouseleave", function () {
            unImgZoom(imgobj)
          });
        }
        else runAnimate($(imgobj), $(jqobj).attr('image-hover-effect'), $(jqobj).attr('image-hover-duration'), $(jqobj).attr('image-hover-delay'));
      }
    }
  });
}

function createCircleChartFunction(moduleId) {
  var colors = $('#module_' + moduleId + ' .digital-progress').css("color");
  var defaultColors = $('#module_' + moduleId + ' .digital-default').css("color")
  // 新需求，判断第一次进入可视区域的时候执行动画 by 2018/12/27 啟锋
  $('#module_' + moduleId).data('name', createCircleChartFunction)
  // 先去获取该模块到顶部的距离，当该距离少于屏幕高度的时候，开始进行初始化，且只进行初始化一次
  // 获取屏幕高度
  var  windowTop = window.innerHeight;
  var lock = false;
  var drawCle = function () {
    for (var i = 0; i < $('#module_' + moduleId + ' .circle').length; i++) {
      $('#module_' + moduleId + " .circleChart#" + i).circleChart({
        size: 120,
        color: colors,
        backgroundColor: defaultColors,
        text: 0,
        module: moduleId,
        onDraw: function (el, circle) {
          circle.text(Math.round(circle.value) + "%");
        }
      });
    }
  }
  if (window.location.getQueryString('CanEditFront') === 'True') {
    drawCle()
  } else {
    if($("#module_"+ moduleId) && $("#module_"+ moduleId).offset().top == 0) {
      return
    } else {
      if ( $("#module_"+ moduleId) && $("#module_"+ moduleId).offset().top <= window.innerHeight) {
        drawCle()
      } else {
        $(window).off('scroll.offTop'+moduleId).on('scroll.offTop'+moduleId,function() {
          // 屏幕卷去的高度
          if ($("#module_"+ moduleId)) {
            var moduleOffTop = $("#module_"+ moduleId).offset().top
            var scrollTops = $(window).scrollTop() ;
            if( moduleOffTop < ($(window).scrollTop() + windowTop) && !lock) {
              // 已经进入可视区域
              drawCle()
              lock = true
            }
          }
        })
      }
    }
  }
}

// 强行改变建站的URL
function replaceNewShopUrl() {
  var href = '';
  var regExp = new RegExp('(^' + location.protocol + '//' + location.host + ')|(\\?.*$)', 'i');
  $('a').each(function () {
    href = ($(this).prop('href') || '');
    href = href.replace(regExp, '');
    if (/^\/userindex/i.test(href)) {  //会员中心
      $(this).attr('href', '/index.php?m=Home&c=front/Shop/Rewrite&a=userIndex')
    }
    if (/^\/OrderList/i.test(href)) {  //订单
      $(this).attr('href', '/home/shop/#/orderform/noPay')
    }
    if (/^\/ProductOrder/i.test(href)) {  //购物车
      $(this).attr('href', '/jumpUrl=shopCart')
    }
    if (/^\/UserJiFen/i.test(href)) { //积分
      $(this).attr('href', '/home/shop/#/integral')
    }
    if (/^\/UserFenXiao/i.test(href)) {  //分销
      $(this).attr('href', '/home/shop/#/distribution')
    }
    if (/^\/UserMessage/i.test(href)) {  //会员留言
      $(this).attr('href', '/index.php?m=Home&c=front/Shop/Rewrite&a=userIndex')
    }
    if (/^\/UserModify/i.test(href)) {  //会员信息
      $(this).attr('href', '/index.php?m=Home&c=front/Shop/Rewrite&a=userIndex')
    }
  });
}

// 全局所有模块提示弹窗
var GLBDM = GLBDM || {}
GLBDM.alertShowSuccessOrFalse = function (hint, isErr, options) {
  var autoClose = 1000;
  if (isErr) autoClose = 2500;
  var tip = hint || ''
  if (!isErr) {
    // 如果没有自定义
    if (!hint) {
      tip = '<i class="iconfont icon-chenggong" style="margin-right:10px;color:#3fcb40;font-size: 18px;vertical-align: text-bottom;"></i>您已保存成功'
    } else {
      // 有自定义
      tip = '<i class="iconfont icon-chenggong" style="margin-right:10px;color:#3fcb40;font-size: 18px;vertical-align: text-bottom;"></i>' + tip
    }
  } else {
    // 如果没有自定义
    if (!hint) {
      tip = '<i class="iconfont icon-warning" style="margin-right:10px;color:rgba(252,38,78);font-size: 18px;vertical-align: text-bottom;"></i>保存失败'
    } else {
      // 有自定义
      tip = '<i class="iconfont icon-warning" style="margin-right:10px;color:rgba(252,38,78);font-size: 18px;vertical-align: text-bottom;"></i>' + tip
    }
  }
  var optionsDefault = {
    title: '',
    dialogClass: 'messageBox',
    width: 'auto',
    height: 'auto',
    minWidth: 60,
    minHeight: 10,
    zIndex: 99999,
    modal: true,
    resizable: false
  };
  $.extend(optionsDefault,  options|| {})
  var oldClose = optionsDefault.close;
  optionsDefault.close = function() {
    oldClose && oldClose()
  }
  optionsDefault.open = function(e) {
      $(e.target.offsetParent).prev().css('opacity', '0')
  }
  var oDialogElem = $('<div style="padding: 10px 12px;font-size: 13px;font-size: 13px;border-radius: 5px;line-height: 14px;">' + tip + '</div>').dialog(optionsDefault);
  if (autoClose) {
    setTimeout(function() {
      oDialogElem.dialog('close')
    }, autoClose)
  }
  if (optionsDefault.title === '') {
    oDialogElem.siblings('.ui-dialog-titlebar').remove();
  }
  oDialogElem.closest('.ui-dialog').css({
    'border-radius': '5px',
    padding: 0,
    border: 0,
    'boxShadow': '0 3px 10px rgba(0,0,0,.5)',
    background: '#fff'
  })
};// END OF /share/JScript.js
// STARTS OF /share/imagesloaded.pkgd.min.js
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",s):e.eventie=s}(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"==f.call(e)}function s(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),u&&(this.jqDeferred=new u.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var u=e.jQuery,c=e.console,f=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0;e<this.elements.length;e++){var t=this.elements[e];this.addElementImages(t)}},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var r=n[i];this.addImage(r)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i<s.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(e){for(var t=m(e),n=/url\(['"]*([^'"\)]+)['"]*\)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[1];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}};var m=e.getComputedStyle||function(e){return e.currentStyle};return o.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},o.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var n=0;n<this.images.length;n++){var i=this.images[n];i.once("progress",e),i.check()}},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},h.prototype=new t,h.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,n.bind(this.proxyImage,"load",this),n.bind(this.proxyImage,"error",this),n.bind(this.img,"load",this),n.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.img,t)},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this),n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype=new h,a.prototype.check=function(){n.bind(this.img,"load",this),n.bind(this.img,"error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){n.unbind(this.img,"load",this),n.unbind(this.img,"error",this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("progress",this,this.element,t)},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(u=t,u.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o});;// END OF /share/imagesloaded.pkgd.min.js
// STARTS OF /share/masonry.pkgd.min.js
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});;// END OF /share/masonry.pkgd.min.js
// STARTS OF /share/jquery-ui-1.10.4.custom.min.js
/*! jQuery UI - v1.10.4 - 2017-03-21
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.tabs.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t,e){function i(e,i){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&s(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var s=t.attr(e,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){function n(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===s?["Left","Right"]:["Top","Bottom"],a=s.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+s]=function(i){return i===e?r["inner"+s].call(this):this.each(function(){t(this).css(a,n(this,i)+"px")})},t.fn["outer"+s]=function(e,i){return"number"!=typeof e?r["outer"+s].call(this,e):this.each(function(){t(this).css(a,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,a=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(o!==e)return o;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),o=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var o,p,g,m,_,v,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),k=(e.collision||"flip").split(" "),x={};return v=n(b),b[0].preventDefault&&(e.at="left top"),p=v.width,g=v.height,m=v.offset,_=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===e.at[0]?_.left+=p:"center"===e.at[0]&&(_.left+=p/2),"bottom"===e.at[1]?_.top+=g:"center"===e.at[1]&&(_.top+=g/2),o=i(x.at,p,g),_.left+=o[0],_.top+=o[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),v=s(this,"marginTop"),C=u+f+s(this,"marginRight")+w.width,D=d+v+s(this,"marginBottom")+w.height,I=t.extend({},_),T=i(x.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?I.left-=u:"center"===e.my[0]&&(I.left-=u/2),"bottom"===e.my[1]?I.top-=d:"center"===e.my[1]&&(I.top-=d/2),I.left+=T[0],I.top+=T[1],t.support.offsetFractions||(I.left=l(I.left),I.top=l(I.top)),n={marginLeft:f,marginTop:v},t.each(["left","top"],function(i,s){t.ui.position[k[i]]&&t.ui.position[k[i]][s](I,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:C,collisionHeight:D,offset:[o[0]+T[0],o[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-I.left,s=i+p-u,n=m.top-I.top,o=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+o)&&(l.vertical="middle"),l.important=a(r(i),r(s))>a(r(n),r(o))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(I,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-o-n;e.collisionWidth>o?l>0&&0>=h?(i=t.left+l+e.collisionWidth-o-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+o-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-o-n;e.collisionHeight>o?l>0&&0>=h?(i=t.top+l+e.collisionHeight-o-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+o-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-a-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-a-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,o,a=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,o,a,r,l,h,c,u,d,p=t(this).data("ui-draggable"),f=p.options,g=f.snapTolerance,m=i.offset.left,_=m+p.helperProportions.width,v=i.offset.top,b=v+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,l=r+p.snapElements[u].width,h=p.snapElements[u].top,c=h+p.snapElements[u].height,r-g>_||m>l+g||h-g>b||v>c+g||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(h-b),n=g>=Math.abs(c-v),o=g>=Math.abs(r-_),a=g>=Math.abs(l-m),s&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),d=s||n||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(h-v),n=g>=Math.abs(c-b),o=g>=Math.abs(r-m),a=g>=Math.abs(l-_),s&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||o||a||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||o||a||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,o,a=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,l=a+t.helperProportions.width,h=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return a>=c&&d>=l&&r>=u&&p>=h;case"intersect":return a+t.helperProportions.width/2>c&&d>l-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>h-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,o=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(o,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||h>=u&&p>=h||u>r&&h>p)&&(a>=c&&d>=a||l>=c&&d>=l||c>a&&l>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),o.length&&(s=t.data(o[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}})(jQuery);(function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,o,a=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),a.containment&&(s+=t(a.containment).scrollLeft()||0,n+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},o=this.originalMousePosition,a=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-o.left||0,d=e.pageY-o.top||0,p=this._change[a];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,o,a,r=this.options;a={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,n=a.minWidth/this.aspectRatio,s=a.maxHeight*this.aspectRatio,o=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),n>a.minHeight&&(a.minHeight=n),a.maxWidth>s&&(a.maxWidth=s),a.maxHeight>o&&(a.maxHeight=o)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return a&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),a&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),o&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,o=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,o,a,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,o=l.containerSize.height,a=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:a,h=t.ui.hasScroll(p)?p.scrollHeight:o,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,o,a=t(this).data("ui-resizable"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio),a.position.top=a._helper?h.top:0),a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top,i=Math.abs((a._helper?a.offset.left-u.left:a.offset.left-u.left)+a.sizeDiff.width),s=Math.abs((a._helper?a.offset.top-u.top:a.offset.top-h.top)+a.sizeDiff.height),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o&&(i-=Math.abs(a.parentData.left)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,_=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),_&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):(p-l>0?(e.size.height=p,e.position.top=o.top-u):(e.size.height=l,e.position.top=o.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=o.left-c):(e.size.width=h,e.position.left=o.left+n.width-h))}})})(jQuery);(function(t){var e,i="ui-button ui-widget ui-state-default ui-corner-all",s="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},o=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,a=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===a.label&&(a.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){a.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){a.disabled||t(this).removeClass(h)}).bind("click"+this.eventNamespace,function(t){a.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){s.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return a.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled)return!1;t(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var e=s.element[0];o(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return a.disabled?!1:(t(this).addClass("ui-state-active"),e=this,s.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return a.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return a.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",a.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.element.prop("disabled",!!e),e&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?o(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(s),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,o=n.primary&&n.secondary,a=[];n.primary||n.secondary?(this.options.text&&a.push("ui-button-text-icon"+(o?"s":n.primary?"-primary":"-secondary")),n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(a.push(o?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(o.inline?e.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.4"}});var o,a="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,a,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,a,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,o,r){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],a,p)),n(p.settings,o||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],a,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,a);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,a),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,a)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,o){var a,r,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(a=s||{},"string"==typeof s&&(a={},a[s]=o),c&&(this._curInst===c&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,a),null!==h&&a.dateFormat!==e&&a.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&a.dateFormat!==e&&a.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in a&&(a.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,r),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,o=t.datepicker._getInst(i.target);return t.datepicker._get(o,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(o,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,o,a,r,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),o=s?s.apply(e,[e,i]):{},o!==!1&&(n(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),r={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),r=t.datepicker._checkOffset(i,r,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],a=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,r=this._curInst;!r||e&&r!==t.data(e,a)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){t.datepicker._tidyDialog(r)},t.effects&&(t.effects.effect[i]||t.effects[i])?r.dpDiv.hide(i,t.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var o,a,r,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,_=-1,v=-1,b=-1,y=!1,w=function(t){var e=i.length>o+1&&i.charAt(o+1)===t;return e&&o++,e},k=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),o=s.substring(l).match(n);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},x=function(i,n,o){var a=-1,r=t.map(w(i)?o:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(r,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(a=i[0],l+=n.length,!1):e}),-1!==a)return a+1;throw"Unknown name at position "+l},C=function(){if(s.charAt(l)!==i.charAt(o))throw"Unexpected literal at position "+l;l++};for(o=0;i.length>o;o++)if(y)"'"!==i.charAt(o)||w("'")?C():y=!1;else switch(i.charAt(o)){case"d":v=k("d");break;case"D":x("D",d,p);break;case"o":b=k("o");break;case"m":_=k("m");break;case"M":_=x("M",f,g);break;case"y":m=k("y");break;case"@":h=new Date(k("@")),m=h.getFullYear(),_=h.getMonth()+1,v=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),m=h.getFullYear(),_=h.getMonth()+1,v=h.getDate();break;case"'":w("'")?C():y=!0;break;default:C()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),b>-1)for(_=1,v=b;;){if(a=this._getDaysInMonth(m,_-1),a>=v)break;_++,v-=a}if(h=this._daylightSavingAdjust(new Date(m,_-1,v)),h.getFullYear()!==m||h.getMonth()+1!==_||h.getDate()!==v)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,M,P,S,H,A,z,O,N,E,W,F,R,L=new Date,Y=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),K=this._get(t,"hideIfNoPrevNext"),q=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":K?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":K?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=q?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(B?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(B?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?B?o:s:"")+(/all|right/.test(I)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(T+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((H+S)/7),z=X?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,O=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;z>N;N++){for(T+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(O)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[O]):[!0,""],F=O.getMonth()!==Z,R=F&&!v||!W[0]||Q&&Q>O||J&&O>J,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(O.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===O.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(O.getTime()===G.getTime()?" "+this._currentClass:"")+(O.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+O.getMonth()+"' data-year='"+O.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+O.getDate()+"</span>":"<a class='ui-state-default"+(O.getTime()===Y.getTime()?" ui-state-highlight":"")+(O.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+O.getDate()+"</a>")+"</td>",O.setDate(O.getDate()+1),O=this._daylightSavingAdjust(O);T+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);
return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.4"})(jQuery);(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){s.position=[o.position.left-i.document.scrollLeft(),o.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,o=!1,a={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(o=!0),t in i&&(a[t]=s)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",a)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);(function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(o,""))===decodeURIComponent(location.href.replace(o,""))}var n=0,o=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,o){return t(o).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),o=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:o=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,o),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var o,a,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(o=n.hash,a=e.element.find(e._sanitizeSelector(o))):(r=e._tabId(l),o="#"+r,a=e.element.find(o),a.length||(a=e._createPanel(r),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":o.substring(1),"aria-labelledby":h}),a.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,o=this.tabs.eq(e),a=o.find(".ui-tabs-anchor"),r=this._getPanelForTab(o),h={tab:o,panel:r};s(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(o.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),o.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);;// END OF /share/jquery-ui-1.10.4.custom.min.js
// STARTS OF /share/bootstrap.min.js
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;// END OF /share/bootstrap.min.js
// STARTS OF /scripts/iconfont/iconfont.js
!function(s){var c,t='<svg><symbol id="icon-jianqie" viewBox="0 0 1024 1024"><path d="M882.515023 665.633011q33.407092 21.259059 53.653815 56.690823t20.246723 77.949882q0 33.407092-12.654202 62.258672t-34.419428 50.110638-50.616806 33.91326-62.258672 12.654202q-42.518117 0-77.443714-20.246723t-56.184655-52.641479q-4.049345-4.049345-7.086353-8.604857t-8.098689-9.617193q-16.197378-22.271395-20.246723-54.666151t-3.037008-67.320352 2.024672-68.838857-5.061681-60.234q-11.135697-20.246723-25.308403-44.036622t-31.38242-48.085966q-3.037008-4.049345-5.567849-7.086353t-4.555513-6.074017q-19.234386 23.283731-37.456437 46.567462t-37.456437 48.592134q-5.061681 6.074017-8.604857 12.148034t-8.604857 12.148034q-9.111025 19.234386-9.111025 33.407092t3.543176 27.839244 8.098689 27.839244 5.061681 32.900924-5.061681 44.036622-21.765227 60.740168q-17.209714 45.555126-57.703159 74.406705t-92.122588 28.85158q-33.407092 0-62.258672-12.654202t-50.616806-34.419428-34.419428-50.616806-12.654202-62.258672q0-36.444101 15.185042-67.826521t41.505781-53.653815q25.308403-26.320739 53.147647-44.036622t55.172319-32.900924 52.135311-30.370084 43.024285-36.444101q4.049345-5.061681 7.592521-10.123361t7.592521-10.123361l1.012336-1.012336q4.049345-8.098689 11.135697-15.185042 14.172706-18.22205 28.345412-37.962605t29.357748-39.987277q-26.320739-27.333075-45.048958-44.54279t-35.937933-40.493445q-35.431764-46.567462-59.727832-97.184268t-37.456437-96.171932-13.666538-81.493058 12.654202-53.147647q7.086353-5.061681 20.246723-7.592521t21.259059 9.617193q18.22205 27.333075 41.505781 62.76484t50.616806 76.431378 56.690823 85.542403 58.715495 88.073243q6.074017-8.098689 11.641865-16.703546t11.641865-16.703546q27.333075-39.481109 52.641479-81.493058t47.07363-80.480722 38.468773-69.345025 25.814571-47.07363q7.086353-11.135697 24.296067-11.641865t29.357748 10.629529q6.074017 6.074017 10.629529 34.925596t-3.037008 74.406705-32.394756 104.776789-77.443714 126.035848l-32.394756 40.493445q-16.197378 20.246723-33.407092 40.493445 23.283731 35.431764 44.036622 66.814184t37.962605 56.690823q25.308403 26.320739 51.122974 41.505781t49.098302 25.814571 43.530453 19.740554 35.431764 23.283731zM292.32306 874.174253q32.394756 0 55.172319-23.283731t22.777563-55.678487-22.777563-55.678487-55.172319-23.283731-55.678487 23.283731-23.283731 55.678487 23.283731 55.678487 55.678487 23.283731zM795.454116 874.174253q32.394756 0 55.172319-22.777563t22.777563-55.172319-22.777563-55.678487-55.172319-23.283731-55.678487 23.283731-23.283731 55.678487q0 16.197378 6.074017 30.370084t16.703546 24.802235 25.308403 16.703546 30.876252 6.074017z"  ></path></symbol><symbol id="icon-huabi" viewBox="0 0 1024 1024"><path d="M804.3489 400.3789c88.5422-106.3956 58.7633-133.845 3.5195-189.569-42.9844-43.3572-78.0585-81.2595-186.8093 4.737L804.3489 400.3789z"  ></path><path d="M566.7062 263.1854c-9.3471 8.8535-19.0597 18.3726-29.3059 28.6689-1.9384 1.9763-287.2105 289.6384-287.2105 289.6384-40.4716 38.2986-107.7381 253.4646-84.5087 276.8988 23.2315 23.4107 234.4581-39.6216 273.5862-84.2752 0 0 285.9407-288.2959 288.2181-290.601 10.2062-10.2943 19.7018-20.0643 28.5778-29.3847L566.7062 263.1854z"  ></path></symbol><symbol id="icon-shanchu" viewBox="0 0 1024 1024"><path d="M789.952 312.448 766.72 312.448l0 581.696-76.352 0L690.368 312.448 562.944 312.448l0 581.696L486.528 894.144 486.528 312.448l-127.36 0 0 581.696L282.688 894.144 282.688 312.448l-48.64 0c-57.536 0-104.256-0.832-104.256 0l0 607.808c0 55.936 46.656 101.248 104.256 101.248l555.904 0c57.536 0 104.192-45.312 104.192-101.248L894.144 312.448C894.144 308.16 847.488 312.448 789.952 312.448L789.952 312.448zM944.192 129.856l-228.352 0L715.84 67.712c0-36.032-64.384-65.216-101.952-65.216L410.048 2.496c-37.504 0-101.888 29.184-101.888 65.216l0 62.144L79.808 129.856c-28.672 0-51.904 22.848-51.904 50.944s23.232 50.944 51.904 50.944l864.384 0c28.672 0 51.904-22.784 51.904-50.944S972.8 129.856 944.192 129.856L944.192 129.856zM613.888 129.856 410.112 129.856 410.112 104.384l203.776 0L613.888 129.856 613.888 129.856zM613.888 129.856"  ></path></symbol><symbol id="icon-shuazi" viewBox="0 0 1024 1024"><path d="M459.293696 955.316224c0.072704-0.364544 9.105408-40.758272 84.780032-142.70464l95.307776-112.820224c7.18848-8.505344 6.677504-21.127168-1.242112-29.008896L358.879232 391.5008c-7.880704-7.916544-20.506624-8.42752-29.044736-1.241088l-25.924608 21.929984C134.895616 553.362432 72.337408 567.665664 72.246272 567.701504c-7.97184 1.313792-14.560256 6.933504-17.002496 14.596096-2.481152 7.661568-0.45568 16.054272 5.254144 21.782528l38.567936 38.602752c6.659072 6.605824 16.83968 8.173568 25.122816 3.831808l66.29888-34.664448-42.326016 52.871168c-6.878208 8.538112-6.185984 20.835328 1.550336 28.5696l32.164864 32.182272c6.4768 6.46144 16.328704 8.100864 24.574976 4.124672l52.068352-25.285632-25.43104 51.813376c-4.04992 8.24832-2.408448 18.13504 4.069376 24.629248l16.602112 16.567296c7.31648 7.332864 18.864128 8.35584 27.384832 2.444288l58.417152-40.573952-37.327872 64.034816c-4.907008 8.428544-3.50208 19.085312 3.393536 25.979904l15.341568 15.363072c7.845888 7.808 20.325376 8.428544 28.844032 1.386496l74.764288-61.702144-46.978048 96.512c-3.994624 8.247296-2.33472 18.097152 4.143104 24.55552l41.2672 41.268224c5.582848 5.581824 13.792256 7.406592 21.382144 5.183488C451.922944 969.472 457.670656 963.050496 459.293696 955.316224z"  ></path><path d="M398.688256 359.136256l269.283328 269.28128c8.374272 8.356864 21.947392 8.356864 30.338048 0l23.829504-23.862272c13.15328-14.559232 27.620352-52.506624-11.858944-91.98592l-31.581184-31.562752c-5.126144-22.185984 27.201536-48.49152 33.148928-53.090304l222.323712-139.712512c53.12512-53.126144 53.12512-139.61216-0.021504-192.776192-53.126144-53.108736-139.602944-53.108736-193.405952 0.729088L602.329088 316.699648l0-0.036864c0 0-29.427712 39.808-53.837824 34.116608l-33.951744-33.9712c-39.517184-39.48032-77.446144-24.993792-92.772352-11.127808l-23.078912 23.09632C390.278144 337.169408 390.278144 350.743552 398.688256 359.136256zM814.196736 168.219648c13.043712-13.062144 34.153472-13.026304 47.215616 0 13.007872 13.044736 13.007872 34.153472 0 47.179776-13.064192 13.062144-34.171904 13.062144-47.234048 0.03584-13.04576-13.027328-13.04576-34.153472 0-47.178752L814.196736 168.219648z"  ></path></symbol><symbol id="icon-erweima" viewBox="0 0 1024 1024"><path d="M91.74016 64.064512l359.402496 0c36.543488 3.56352 27.731968 66.9952 27.731968 108.20608l0 196.197376c0 42.645504 8.14592 94.910464-20.498432 107.02336-18.65728 7.883776-68.72576 2.37568-92.86656 2.37568L174.963712 477.867008c-44.053504 0-104.198144 10.361856-110.959616-27.348992L64.004096 91.413504C68.93056 78.03904 77.592576 68.345856 91.74016 64.064512L91.74016 64.064512 91.74016 64.064512zM141.192192 144.922624l0 255.653888 259.294208 0L400.4864 141.353984 142.400512 141.353984C140.990464 141.550592 141.084672 143.234048 141.192192 144.922624L141.192192 144.922624 141.192192 144.922624zM574.15168 64.064512l359.401472 0c14.660608 5.362688 24.732672 15.250432 27.737088 32.105472l0 349.592576c-3.290112 14.528512-10.9824 26.929152-25.326592 30.912512-23.43936 6.50752-62.398464 1.19296-90.451968 1.19296L660.988928 477.868032c-27.828224 0-69.0688 5.777408-91.657216-1.19296-31.894528-9.836544-22.913024-71.21408-22.913024-114.152448L546.418688 179.403776C546.418688 129.833984 535.380992 70.990848 574.15168 64.064512L574.15168 64.064512 574.15168 64.064512zM623.601664 144.922624l0 255.653888 259.300352 0L882.902016 141.353984 624.806912 141.353984C623.404032 141.550592 623.49824 143.234048 623.601664 144.922624L623.601664 144.922624 623.601664 144.922624zM259.381248 219.83744c36.11136-6.721536 64.50688 17.335296 65.127424 49.936384 0.807936 43.00288-43.732992 66.619392-78.391296 48.756736C206.457856 298.092544 209.065984 229.194752 259.381248 219.83744L259.381248 219.83744 259.381248 219.83744zM741.79072 219.83744c85.066752-15.671296 83.434496 117.146624 0 103.445504C688.699392 314.569728 686.98624 229.92896 741.79072 219.83744L741.79072 219.83744 741.79072 219.83744zM448.733184 960.644096 92.946432 960.644096c-14.772224-4.46976-24.745984-13.657088-28.942336-28.540928L64.004096 574.185472c3.51232-10.476544 11.619328-22.693888 24.118272-26.160128 23.609344-6.550528 62.171136-1.191936 90.45504-1.191936l184.517632 0c27.273216 0 66.962432-5.999616 91.661312 1.191936 33.417216 9.721856 24.119296 70.106112 24.119296 112.96256l0 189.065216C478.874624 896.306176 488.98048 956.512256 448.733184 960.644096L448.733184 960.644096 448.733184 960.644096zM141.192192 627.69152l0 255.659008 259.294208 0L400.4864 624.121856 142.400512 624.121856C140.990464 624.328704 141.084672 626.00704 141.192192 627.69152L141.192192 627.69152 141.192192 627.69152zM961.289216 578.941952l0 99.881984c-2.811904 33.6896-0.402432 72.534016-1.201152 108.207104L703.199232 787.03104l0-58.261504c-24.123392-2.782208-53.467136-0.402432-79.594496-1.197056-2.816 75.312128-0.401408 155.771904-1.209344 233.066496l-47.036416 0c-40.440832-7.996416-28.942336-67.82464-28.942336-115.344384L546.41664 660.987904c0-27.712512-5.692416-69.265408 1.205248-91.563008 8.229888-26.604544 43.902976-22.592512 79.601664-22.592512l174.869504 0 0 158.147584 80.806912 0c0.79872-52.318208-1.606656-107.809792 1.201152-158.147584C922.988544 544.564224 959.007744 545.124352 961.289216 578.941952L961.289216 578.941952 961.289216 578.941952zM265.412608 701.412352c38.561792-4.20864 70.432768 32.335872 55.48032 72.543232-20.738048 55.723008-119.872512 34.77504-101.308416-35.677184C224.710656 718.803968 239.540224 704.241664 265.412608 701.412352L265.412608 701.412352 265.412608 701.412352zM790.035456 960.644096l-86.836224 0c0.802816-30.528512-1.606656-64.218112 1.209344-92.754944l85.62688 0L790.035456 960.644096 790.035456 960.644096 790.035456 960.644096zM961.289216 867.889152l0 60.6464c-3.3536 16.905216-13.37856 27.229184-28.94336 32.105472l-61.507584 0c0.802816-30.524416-1.606656-64.214016 1.209344-92.750848L961.289216 867.890176 961.289216 867.889152 961.289216 867.889152zM961.289216 867.889152"  ></path></symbol><symbol id="icon-yinle" viewBox="0 0 1024 1024"><path d="M889.881018 253.461689c-0.368405-18.682501-15.599919-33.708729-34.383474-33.708729-18.782532 0-34.014045 15.027252-34.383474 33.708729l-0.017397 0 0 642.091894 68.799695 0L889.896368 253.461689 889.881018 253.461689zM167.513902 449.071785c-18.782532 0-34.015068 15.027252-34.38245 33.709753l-0.017397 0 0 412.773068 68.797648 0L201.911702 482.781538l-0.017397 0C201.5259 464.099037 186.296433 449.071785 167.513902 449.071785zM396.8411 128.025838c-18.782532 0-34.014045 15.026228-34.38245 33.707706l-0.017397 0 0 733.820038 68.797648 0L431.238901 161.734568l-0.017397 0C430.854122 143.052067 415.624655 128.025838 396.8411 128.025838zM626.170345 334.412372c-18.782532 0-34.015068 15.026228-34.384497 33.708729l-0.017397 0 0 527.432481 68.800718 0 0-527.432481-0.017397 0C660.185414 349.438601 644.951854 334.412372 626.170345 334.412372z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M957.725929 523.872399c-10.998946 11.491729-11.76134 10.558473-45.118396 10.558473l-65.871896 0.010233 0 344.488869c0 52.571333-27.796182 83.272565-78.636117 83.272565l-92.083935 0-35.70564-0.671289L640.309947 663.85864c0-35.786041-18.545115-44.781926-39.779588-44.781926L437.096546 619.076714c-23.844011 0-42.709434 9.958816-42.709434 43.092447l0 299.748898-47.406602 0.282433-80.302128 0c-48.269284 0-78.616673-27.386744-78.616673-88.283696L188.061709 534.587438l-67.837747 0.010233c-35.786484 0-37.893558-5.52483-46.424188-15.925714-16.919015-20.551058-15.956044-46.155203 27.034811-81.543178l377.084341-350.779132c11.160635-8.483208 22.400067-25.007557 36.649166-25.007557l5.962026 0c14.249099 0 25.507975 13.116739 36.666563 21.588691l373.473969 354.029152C966.638267 460.899158 980.125996 500.470409 957.725929 523.872399z"  ></path></symbol><symbol id="icon-qq" viewBox="0 0 1024 1024"><path d="M855.8592 627.570688c-5.310464-73.131008-54.381568-134.397952-82.747392-166.086656 3.93728-9.219072 13.518848-62.58176-23.48032-98.992128 0.059392-0.873472 0.059392-1.739776 0.059392-2.586624 0-143.633408-102.234112-247.017472-230.51264-247.487488-128.299008 0.47104-230.529024 103.855104-230.529024 247.487488 0 0.846848-0.012288 1.713152 0.049152 2.586624-36.999168 36.410368-27.400192 89.773056-23.48032 98.992128-28.347392 31.688704-77.42464 92.955648-82.745344 166.086656-0.959488 19.224576 2.013184 47.227904 11.404288 59.6736 11.4432 15.176704 42.852352-3.047424 65.313792-51.535872 6.249472 22.463488 20.673536 56.756224 53.311488 100.283392-54.621184 12.465152-70.201344 66.338816-51.825664 95.787008 12.959744 20.75136 42.631168 37.818368 93.765632 37.818368 90.978304 0 131.155968-24.451072 149.087232-41.47712 3.654656-3.714048 8.926208-5.505024 15.648768-5.51936 6.700032 0.014336 11.983872 1.805312 15.62624 5.51936 17.933312 17.026048 58.119168 41.47712 149.076992 41.47712 51.152896 0 80.80384-17.067008 93.763584-37.818368 18.3808-29.448192 2.803712-83.32288-51.803136-95.787008 32.638976-43.528192 47.066112-77.819904 53.311488-100.283392 22.467584 48.488448 53.870592 66.711552 65.324032 51.535872C853.858304 674.798592 856.835072 646.795264 855.8592 627.570688z"  ></path></symbol><symbol id="icon-iconziti09" viewBox="0 0 1024 1024"><path d="M883.823935 603.00569l-46.921659 0c-7.612375 27.612894-18.546402 53.772694-32.525788 78.062913l43.35646 43.322691c27.752064 27.751041 27.752064 72.734558 0 100.484575l-25.121144 25.122167c-27.751041 27.752064-72.734558 27.752064-100.485599 0l-43.633776-43.633776c-24.187889 13.770632-50.278103 24.534789-77.750805 32.006971l0 45.50131c0 39.241746-31.800263 71.039963-71.039963 71.039963l-35.501562 0c-39.239699 0-71.073732-31.798217-71.073732-71.039963l0-45.50131c-27.438932-7.473205-53.530171-18.23634-77.751828-32.006971l-43.6348 43.633776c-27.715225 27.752064-72.698742 27.752064-100.449783 0l-25.122167-25.122167c-27.751041-27.750017-27.751041-72.733535 0-100.484575l43.357484-43.322691c-13.979386-24.290219-24.914436-50.450019-32.56058-78.062913l-46.886867 0c-39.239699 0-71.039963-31.800263-71.039963-71.004147l0-35.538401c0-39.239699 31.800263-71.040986 71.039963-71.040986l46.332235 0c7.336082-27.334555 17.85567-53.356208 31.454386-77.507258l-41.696658-41.662889c-27.751041-27.748994-27.751041-72.732511 0-100.484575l25.122167-25.120121c27.751041-27.754111 72.734558-27.754111 100.449783 0l40.866756 40.899502c25.01779-14.56881 52.007491-25.917276 80.520895-33.703613l0-47.716768c0-39.242769 31.834033-71.039963 71.073732-71.039963l35.501562 0c39.239699 0 71.039963 31.797194 71.039963 71.039963l0 47.716768c28.54615 7.785314 55.535851 19.133779 80.519872 33.703613l40.865733-40.899502c27.751041-27.754111 72.734558-27.754111 100.485599 0l25.121144 25.120121c27.752064 27.752064 27.752064 72.735581 0 100.484575l-41.695634 41.662889c13.598716 24.152073 24.083511 50.172703 31.453363 77.507258l46.333258 0c39.239699 0 71.037916 31.801287 71.037916 71.040986l0 35.538401C954.861852 571.205427 923.062612 603.00569 883.823935 603.00569zM511.948323 319.956126c-107.890242 0-195.364503 87.475284-195.364503 195.366549 0 107.890242 87.47426 195.364503 195.364503 195.364503 107.892289 0 195.366549-87.47426 195.366549-195.364503C707.314873 407.432433 619.841635 319.956126 511.948323 319.956126zM511.948323 601.896426c-49.030693 0-88.824001-39.721677-88.824001-88.788186 0-49.068556 39.793308-88.790232 88.824001-88.790232 49.03274 0 88.792279 39.720653 88.792279 88.790232C600.740602 562.173726 560.981063 601.896426 511.948323 601.896426z"  ></path></symbol><symbol id="icon-top" viewBox="0 0 1024 1024"><path d="M527.437 168.951c-4.094-4.094-9.647-6.395-15.438-6.395s-11.343 2.3-15.437 6.395l-159.085 159.085c-8.526 8.526-8.526 22.348 0 30.873s22.348 8.527 30.873 0l143.649-143.648 143.647 143.648c4.263 4.263 9.849 6.395 15.438 6.395 5.586 0 11.174-2.132 15.438-6.395 8.525-8.526 8.526-22.348 0-30.873l-159.086-159.085z"  ></path><path d="M105.131 573.788h93.385v238.405h43.661v-238.405h93.385v-43.661h-230.43z"  ></path><path d="M576.372 530.127h-115.663c-13.967 0-27.934 5.329-38.591 15.985-10.657 10.658-15.985 24.625-15.985 38.591v172.914c0 13.967 5.328 27.934 15.985 38.591s24.625 15.985 38.591 15.985h115.663c13.966 0 27.934-5.329 38.591-15.985 10.656-10.658 15.985-24.625 15.985-38.591v-172.914c0-13.967-5.33-27.934-15.985-38.591-10.657-10.658-24.625-15.985-38.591-15.985zM587.287 757.617c0 2.063-0.557 5.075-3.196 7.716-2.643 2.643-5.659 3.199-7.719 3.199h-115.663c-2.063 0-5.075-0.555-7.717-3.196-2.642-2.643-3.198-5.658-3.198-7.719v-172.914c0-2.063 0.555-5.075 3.196-7.717 2.642-2.643 5.657-3.198 7.719-3.198h115.663c2.062 0 5.075 0.556 7.715 3.196 2.643 2.643 3.2 5.658 3.2 7.719v172.914z"  ></path><path d="M902.884 546.111c-10.658-10.657-24.626-15.985-38.591-15.985h-149.691v282.067h43.661v-123.714h106.030c13.966 0 27.934-5.329 38.591-15.985 10.656-10.658 15.985-24.625 15.985-38.591v-49.2c0-13.967-5.33-27.934-15.985-38.592zM875.209 633.903c0 2.063-0.557 5.075-3.196 7.716-2.643 2.643-5.659 3.199-7.719 3.199h-106.030v-71.030h106.030c2.062 0 5.075 0.556 7.717 3.196 2.641 2.643 3.198 5.658 3.198 7.719v49.2z"  ></path></symbol><symbol id="icon-qq1" viewBox="0 0 1024 1024"><path d="M511.999998 0C229.232866 0 0.021487 229.220588 0.021487 512s229.211379 512 511.978511 512 511.978511-229.220588 511.978511-512S794.76713 0 511.999998 0zM793.886063 671.573345c-13.223163 12.342096-35.924187-1.102101-57.744145-31.296797-9.476839 25.566282-21.818935 49.149397-36.144198 70.309322 30.854728 11.019984 50.691519 28.211529 50.691519 47.608298 0 33.500998-59.287291 60.611449-132.457778 60.611449-43.417859 0-81.767282-9.476839-106.010429-24.24417-24.023136 14.767332-62.59257 24.24417-106.010429 24.24417-73.17151 0-132.457778-27.109428-132.457778-60.611449 0-19.174712 19.835767-36.586267 50.691519-47.608298-14.546298-21.158902-26.66736-44.742017-36.144198-70.309322-21.818935 29.974685-44.518936 43.639916-57.744145 31.296797-18.072611-16.97051-11.239995-76.921927 15.647375-133.785006 6.170536-13.004175 12.783141-24.685215 19.614733-34.82311 3.746324-165.30386 112.62201-297.986765 246.180865-297.986765l0.441045 0c133.558855 0 242.434541 132.462894 246.180865 297.986765 6.832615 10.138918 13.444197 21.819958 19.614733 34.82311C804.906048 594.652442 811.958674 654.602835 793.886063 671.573345z"  ></path></symbol><symbol id="icon-diannao" viewBox="0 0 1024 1024"><path d="M916.095431 64.46829l-806.580179 0c-38.815027 0-70.393233 31.578206-70.393233 70.393233L39.122019 717.39188c0 38.815027 31.578206 70.39221 70.393233 70.39221l332.896856 0 0 128.074957L333.565075 915.859048c-14.128789 0-25.582655 11.453866-25.582655 25.582655s11.453866 25.582655 25.582655 25.582655L692.045609 967.024357c14.129812 0 25.582655-11.453866 25.582655-25.582655s-11.452843-25.582655-25.582655-25.582655L583.198575 915.859048 583.198575 787.78409l332.896856 0c38.815027 0 70.39221-31.577183 70.39221-70.39221L986.487641 134.860501C986.487641 96.046496 954.910459 64.46829 916.095431 64.46829zM109.515253 115.6336l806.580179 0c10.601452 0 19.2269 8.625448 19.2269 19.227923l0 467.328591L90.287329 602.190115 90.287329 134.860501C90.287329 124.259048 98.9138 115.6336 109.515253 115.6336zM532.033265 915.859048l-38.455847 0L493.577419 787.78409l38.455847 0L532.033265 915.859048zM916.095431 736.61878l-806.580179 0c-10.601452 0-19.227923-8.625448-19.227923-19.2269l0-64.037479 845.035002 0 0 64.037479C935.322331 727.993333 926.697907 736.61878 916.095431 736.61878z"  ></path></symbol><symbol id="icon-kefuxiaoguniang" viewBox="0 0 1024 1024"><path d="M914.285714 512c0-222.213486-180.035657-402.285714-402.285714-402.285714S109.714286 289.786514 109.714286 512s180.035657 402.285714 402.285714 402.285714S914.285714 734.213486 914.285714 512zM164.571429 512c0-37.035886 5.9648-72.6784 16.714971-106.177829 169.713371-3.856457 320.786286-71.786057 423.356343-177.250743 60.178286 61.677714 136.535771 110.785829 224.071314 141.357714C848.285257 413.357714 859.428571 461.357714 859.428571 512c0 191.572114-155.856457 347.428571-347.428571 347.428571S164.571429 703.572114 164.571429 512z"  ></path><path d="M381.714286 406.286629c-38.999771 0-70.535314 31.572114-70.535314 70.464 0 38.999771 31.535543 70.571886 70.535314 70.571886 29.856914 0 55.107657-18.7136 65.285486-44.893257l-51.214629-25.678629 51.214629-25.536C436.821943 424.892343 411.5712 406.286629 381.714286 406.286629z"  ></path><path d="M647.572114 547.536457c29.7856 0 55.107657-18.678857 65.285486-44.964571l-51.285943-25.570743 51.285943-25.607314c-10.177829-26.249143-35.499886-44.893257-65.285486-44.893257-38.999771 0-70.535314 31.572114-70.535314 70.500571C577.034971 515.964343 608.570514 547.536457 647.572114 547.536457z"  ></path><path d="M993.464686 442.143086C968.643657 194.143086 762.177829 0 512 0S55.356343 194.143086 30.535314 442.106514C12.785371 448.714971 0 465.428114 0 485.392457l0 89.749943C0 600.8576 20.964571 621.714286 46.714514 621.714286c25.786514 0 46.749257-20.856686 46.749257-46.571886l0-89.749943c0-17.963886-10.570971-33.071543-25.536-40.821029C91.428571 215.643429 281.607314 36.571429 512 36.571429s420.571429 179.072 444.072229 407.963429c-14.965029 7.749486-25.536 22.893714-25.536 40.8576l0 89.749943c0 19.642514 12.286171 36.2496 29.500343 43.106743-42.784914 182.606629-193.000229 323.893029-380.2496 353.678629C571.035429 959.5008 552.213943 950.857143 530.285714 950.857143c-30.2848 0-54.857143 16.393143-54.857143 36.571429 0 20.214857 24.572343 36.571429 54.857143 36.571429 29.143771 0 52.785371-15.213714 54.535314-34.357029 193.857829-31.749486 349.178514-178.570971 393.214171-368.071314C1003.428571 621.1072 1024 600.572343 1024 575.1424l0-89.749943C1024 465.428114 1011.214629 448.714971 993.464686 442.143086z"  ></path></symbol><symbol id="icon-dianhua1" viewBox="0 0 1024 1024"><path d="M744.426607 959.264627 744.408187 959.264627l-4.619204-0.103354c-107.472733-5.497201-252.610298-106.652042-388.285351-270.595928l-50.115398-60.531632C165.713182 464.077547 94.631264 303.948547 111.25385 199.680808c11.732206-73.561389 121.098056-135.641283 183.590342-135.641283 30.780027 0 41.930995 15.31787 45.829791 24.464181 35.375695 62.86784 79.147618 172.198897 79.349209 211.411991l0.013303 2.790556-1.000793 2.605338c-7.801686 20.612457-25.25929 30.487362-40.661072 39.197744-20.290115 11.466146-31.82073 18.99461-33.228799 40.670282-0.418532 6.577812 5.254677 36.501332 94.765317 146.84137l38.268582 46.209438c89.75828 105.928564 117.998461 117.331265 124.610042 118.27373 21.644973 3.010567 31.837102-6.479575 47.40466-23.544229 11.850909-12.993942 25.295106-27.740808 47.478338-30.988782l2.808976-0.400113 2.761903 0.586354c39.08825 8.242731 139.142014 72.724325 195.942671 120.596635 8.200776 5.442966 22.512736 21.601994 11.17962 57.299007C892.588041 876.115881 815.084876 959.264627 744.426607 959.264627L744.426607 959.264627z"  ></path></symbol><symbol id="icon-cart" viewBox="0 0 1024 1024"><path d="M235.097303 699.133018C247.384597 735.582848 286.382106 763.623932 324.772759 763.623932L861.658537 763.623932 880.429732 763.623932 885.649214 745.458146 1009.08775 315.845043C1021.388907 273.032339 993.187631 235.213675 949.051586 235.213675L424.585365 235.213675C410.791718 235.213675 399.609756 246.479262 399.609756 260.376068 399.609756 274.272875 410.791718 285.538462 424.585365 285.538462L949.051586 285.538462C959.924 285.538462 964.161052 291.220461 961.106394 301.851829L837.667859 731.464932 861.658537 713.299145 324.772759 713.299145C307.742153 713.299145 287.789837 698.952471 282.395194 682.949451L73.600164 63.566336C69.16437 50.407706 54.980454 43.363344 41.919502 47.832313 28.858551 52.301281 21.86648 66.591273 26.302275 79.749903L235.097303 699.133018Z"  ></path><path d="M399.609756 902.017094C399.609756 846.429871 354.881911 801.367522 299.707317 801.367522 244.532723 801.367522 199.804878 846.429871 199.804878 902.017094 199.804878 957.604318 244.532723 1002.666667 299.707317 1002.666667 354.881911 1002.666667 399.609756 957.604318 399.609756 902.017094ZM249.756098 902.017094C249.756098 874.223482 272.120021 851.692307 299.707317 851.692307 327.294613 851.692307 349.658537 874.223482 349.658537 902.017094 349.658537 929.810705 327.294613 952.341879 299.707317 952.341879 272.120021 952.341879 249.756098 929.810705 249.756098 902.017094Z"  ></path><path d="M924.097562 902.017094C924.097562 846.429871 879.369715 801.367522 824.195121 801.367522 769.020529 801.367522 724.292683 846.429871 724.292683 902.017094 724.292683 957.604318 769.020529 1002.666667 824.195121 1002.666667 879.369715 1002.666667 924.097562 957.604318 924.097562 902.017094ZM774.243902 902.017094C774.243902 874.223482 796.607825 851.692307 824.195121 851.692307 851.782419 851.692307 874.146342 874.223482 874.146342 902.017094 874.146342 929.810705 851.782419 952.341879 824.195121 952.341879 796.607825 952.341879 774.243902 929.810705 774.243902 902.017094Z"  ></path></symbol><symbol id="icon-qunzu" viewBox="0 0 1024 1024"><path d="M79.458703 922.073586 42.091654 922.073586c-10.326183 0-18.696828-8.370645-18.696828-18.696828l0-36.576033c-1.016143-13.925151-0.810459-58.805314 36.173874-105.562221 16.129352-20.392446 36.874839-37.795814 61.658292-51.726082 28.083615-15.785521 61.461817-27.116591 99.205443-33.679054 0.225127-0.038886 0.451278-0.073678 0.678452-0.105401 41.397852-5.641487 75.742055-15.869433 90.411149-22.227234-0.128937-3.745301-0.412392-8.740058-0.977257-15.241123-4.184299-47.315632-28.473495-74.874291-51.963489-101.525278-9.146311-10.375302-17.228383-19.701714-23.566742-28.851095-30.042223-43.375903-33.136701-91.24412-33.391505-96.559173-0.013303-0.286526-0.021489-0.574075-0.021489-0.860601-0.028653-17.020652 4.438079-31.578206 13.612019-44.226271-5.266957-36.304857-5.28333-84.581374 0.167822-118.910227 3.585665-53.380768 43.308365-92.469018 52.262294-100.638071-0.962931-7.142677-0.768503-14.246469 0.586354-21.228487 3.437286-18.053168 17.446347-48.862871 72.500221-51.626821 3.037173-0.161682 5.679349-0.316202 8.079002-0.457418l2.686179-0.156566c10.304693-0.589424 19.146059 7.28287 19.7406 17.591657 0.593518 10.308787-7.28287 19.146059-17.591657 19.7406l-2.6432 0.153496c-2.461051 0.144286-5.172813 0.302899-8.340969 0.471744-33.968649 1.705851-36.685527 15.972786-37.70781 21.344121-0.959861 4.947685-0.606821 9.718339 1.101077 15.077394 2.131547 6.688329 0.336668 14.005992-4.64581 18.949584-2.753717 2.732228-5.810333 5.38873-7.906064 7.17747-2.348488 2.069125-38.372959 34.490535-40.851407 76.773548-0.037862 0.64059-0.107447 1.278109-0.210801 1.911536-5.369288 32.963763-4.948709 82.773192 0.977257 115.861798 1.036609 5.78782-0.710175 11.727089-4.716418 16.032138-4.480035 4.814656-9.611915 12.071943-9.700943 25.64303 0.277316 4.599761 3.252067 42.707684 26.75741 76.645634 5.186116 7.487531 12.520151 15.935947 20.87033 25.40767 24.911366 28.263717 55.902194 63.425541 61.170175 122.996289 1.480724 17.054421 1.345648 26.191522 0.973164 30.856775-0.404206 5.060249-2.848884 9.738805-6.77224 12.95915-17.196661 14.121626-72.254627 27.992541-115.487268 33.918507-61.418838 10.736529-108.996436 35.527145-137.612171 71.704089-23.24133 29.384237-29.791513 60.638055-28.172643 80.088036 0.042979 0.51677 0.064468 1.034563 0.064468 1.552356l0 18.605753 18.671245 0c10.326183 0 18.696828 8.370645 18.696828 18.696828S89.784886 922.073586 79.458703 922.073586z"  ></path><path d="M751.099586 976.379423c-3.520173 0-7.078209-0.991584-10.241248-3.066849-33.1981-21.787212-87.573521-23.945365-91.089601-24.062022l-20.834514 0-33.276894 0.25378c-0.047072 0-0.095167 0-0.14224 0L158.417009 949.504332c-10.326183 0-18.696828-8.370645-18.696828-18.696828l0-21.182438c-0.303922-6.118348-0.801249-38.71986 19.965727-74.446549 13.027711-22.413476 31.746028-41.654702 55.635111-57.18849 28.897144-18.790972 65.478294-32.129768 108.727307-39.647999 0.233314-0.039909 0.466628-0.075725 0.700965-0.107447 0.319272-0.042979 32.659841-4.469801 65.869197-13.129019 57.783031-15.068184 63.96994-28.620851 64.015989-28.753881 0.349971-1.373277 0.850367-2.688225 1.488911-3.925403 0.469698-2.659573 1.565658-12.262278-0.649799-37.356816-5.725398-64.899102-39.5866-103.31197-66.794265-134.178979-8.635681-9.79611-16.792455-19.049868-23.092951-28.151154-27.196409-39.284725-29.721929-83.969437-29.816073-85.851297-0.01535-0.311085-0.023536-0.623193-0.023536-0.934279 0-18.188244 9.413394-26.867928 16.97665-33.842783l0.408299-0.3776c0.065492-0.060375 0.12382-0.115634 0.173962-0.165776-0.032746-1.351787-0.569982-4.121877-0.940418-6.03239-0.160659-0.826831-0.321318-1.657756-0.474814-2.492774-6.789637-36.864606-7.256264-93.800339-1.121544-130.379443 2.329045-48.357358 43.966351-85.326341 45.754067-86.889953 0.070608-0.061398 0.141216-0.122797 0.212848-0.183172 5.872754-4.984524 11.824303-10.42135 15.572674-16.401552 0.309038-0.493234 0.551562-0.903579 0.73985-1.242294-0.257873-0.63445-0.575098-1.36509-0.839111-1.974981-2.208295-5.091972-5.904477-13.612019-3.866051-24.231891 1.239224-6.460132 5.943362-17.997909 23.517623-22.686698 6.958482-1.856277 14.34573-2.233877 19.7406-2.51017l1.066285-0.055259c21.166065-1.11438 43.74327-2.056845 66.602907-0.302899 165.311023 12.673647 222.38388 74.591859 224.732367 77.221756 0.13917 0.155543 0.275269 0.313132 0.407276 0.472767 13.300934 15.931854 23.151279 35.770691 29.275767 58.96495 1.907443 7.215332 3.13541 13.288654 3.853771 19.056008 5.780657 33.594119 4.813632 68.038606 3.578502 91.067089-0.689708 12.921287-2.131547 26.499537-4.53734 42.724057-0.176009 1.182942-0.51677 4.00522 0.103354 4.746094 0.695848 0.831948 1.561565 1.7519 2.480494 2.725064 3.713578 3.941775 8.801457 9.339716 11.526521 18.065448 1.366114 4.383844 2.000564 9.060353 2.000564 14.727423 0 0.311085-0.008186 0.623193-0.022513 0.934279-0.094144 1.882883-2.620687 46.567595-29.817096 85.85232-6.300496 9.100262-14.456247 18.351973-23.089881 28.14706-27.209712 30.865985-61.072961 69.2809-66.799382 134.181025-2.221598 25.173332-1.111311 34.757618-0.642636 37.381375 0.64366 1.249457 1.14815 2.573615 1.499144 3.950985 0.031722 0.082888 6.242168 13.68365 64.303538 28.78151 33.20424 8.634658 65.24805 13.008268 65.567321 13.051247 0.303922 0.040932 0.606821 0.089028 0.908696 0.145309 43.63787 8.093329 80.43903 21.771863 109.385293 40.659025 23.969924 15.639189 42.653449 34.844599 55.531757 57.08309 20.374026 35.180244 19.61371 67.072605 19.201318 73.637114l0 21.048385c0 10.326183-8.370645 18.696828-18.696828 18.696828L851.112418 949.504332c-1.051959 0-2.082428-0.086981-3.087315-0.25378l-27.339672 0c-10.326183 0-18.696828-8.370645-18.696828-18.696828s8.370645-18.696828 18.696828-18.696828l49.15963 0c1.051959 0 2.082428 0.086981 3.087315 0.25378l78.389348 0 0-3.012613c0-0.691755 0.008186-1.100054 0.081864-1.76725 0.102331-1.530866 1.449002-26.552749-15.34857-54.328349-10.138918-16.766872-24.914436-31.420617-43.913139-43.557028-24.499997-15.649422-56.102762-27.16264-93.938486-34.220383-4.496407-0.623193-36.927027-5.276167-70.950935-14.234189-52.426023-13.802354-80.761372-30.344099-88.581478-51.828412-3.877307-7.53051-6.048763-22.343891-2.958378-57.379848 6.80601-77.130681 46.796816-122.495892 75.997881-155.621337 8.232498-9.338692 15.34243-17.404392 20.397562-24.704658 19.693528-28.446889 22.877033-62.08808 23.187095-66.051345-0.031722-2.020006-0.234337-2.829442-0.300852-3.040243-0.152473-0.490164-1.962701-2.409886-3.044336-3.558036-1.192152-1.26583-2.543939-2.700505-3.952009-4.383844-7.706519-9.217942-10.456143-20.411889-8.404414-34.222429 2.229784-15.034415 3.560082-27.502377 4.185322-39.231513 1.144056-21.323655 2.059915-53.137221-3.160993-83.135442-0.057305-0.327458-0.106424-0.657986-0.145309-0.98749-0.49528-4.148483-1.428535-8.740058-2.938935-14.450107-4.662183-17.653055-11.887748-32.497135-21.48022-44.13315-1.661849-1.689479-14.524808-14.213723-43.126216-27.835975-28.491914-13.570063-78.774111-30.997991-156.51673-36.957727-20.633946-1.584078-41.833781-0.689708-61.779042 0.361227l-1.122567 0.057305c-1.355881 0.069585-3.488451 0.178055-5.66707 0.36225 2.232854 5.616928 4.513804 13.617136 1.661849 23.107277-1.50119 4.995781-3.865028 9.066493-5.51255 11.695367-6.423293 10.245342-15.165398 18.339694-22.898523 24.912389-1.479701 1.336438-31.956829 29.290093-33.003672 61.274552-0.028653 0.86981-0.11768 1.736551-0.267083 2.594081-5.616928 32.275077-5.238304 85.405135 0.845251 118.437459 0.132006 0.717338 0.271176 1.430582 0.408299 2.14178 1.785669 9.201569 5.109368 26.328645-10.586103 40.805358l-0.415462 0.382717c-1.874697 1.728364-4.187369 3.860934-4.830005 4.78191-0.028653 0.162706-0.075725 0.50142-0.094144 1.072425 0.325411 4.180206 3.491521 37.557384 23.184025 66.002226 5.054109 7.30129 12.165064 15.368012 20.398586 24.708751 29.199019 33.124422 69.187779 78.490655 75.991742 155.617244 3.093455 35.035958 0.923022 49.849338-2.954285 57.379848-7.820106 21.485337-36.154431 38.026058-88.581478 51.828412-34.319643 9.035794-67.01837 13.690814-71.062476 14.249539-38.090527 6.655584-69.855998 18.126846-94.417393 34.097586-18.934235 12.311397-33.634028 27.328415-43.692105 44.6315-16.477276 28.346605-14.981203 53.379745-14.96176 53.624315 0.040932 0.500397 0.060375 1.001817 0.060375 1.50426l0 3.012613L595.455737 912.1117l33.276894-0.25378c0.047072 0 0.095167 0 0.14224 0l21.160949 0c0.141216 0 0.280386 0.001023 0.421602 0.004093 2.745531 0.063445 67.726497 1.843998 110.918205 30.187533 8.633634 5.665023 11.038404 17.256012 5.373381 25.889647C763.157203 973.408765 757.187235 976.379423 751.099586 976.379423zM667.433048 686.458357c0.50449 0.407276 0.986467 0.838088 1.442862 1.292436C668.445098 687.321004 667.965168 686.887123 667.433048 686.458357z"  ></path></symbol><symbol id="icon-shouji1" viewBox="0 0 1024 1024"><path d="M718.2336 0 254.464 0C212.8384 0 179.2 31.9232 179.2 71.168l0 881.5872C179.2 991.8976 212.8384 1024 254.464 1024l463.8208 0C760.0896 1024 793.6 991.8976 793.6 952.7552L793.6 71.168C793.4976 31.9232 760.0128 0 718.2336 0L718.2336 0zM475.0592 994.9952c-20.8128 0-37.6064-15.9488-37.6064-35.6864 0-19.5328 16.768-35.584 37.6064-35.584 20.7104 0 37.5552 16.0512 37.5552 35.584C512.5888 979.1232 495.744 994.9952 475.0592 994.9952L475.0592 994.9952zM750.4384 892.7488 222.2592 892.7488 222.2592 46.6688l528.2048 0L750.464 892.7488 750.4384 892.7488zM750.4384 892.7488"  ></path></symbol><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M773.688889 932.977778 250.311111 932.977778c-37.705956 0-68.266667-30.583467-68.266667-68.266667L182.044444 159.288889c0-37.6832 30.560711-68.266667 68.266667-68.266667l523.377778 0c37.705956 0 68.266667 30.583467 68.266667 68.266667l0 705.422222C841.955556 902.394311 811.394844 932.977778 773.688889 932.977778zM796.444444 182.044444c0-25.122133-20.388978-45.511111-45.511111-45.511111L273.066667 136.533333c-25.122133 0-45.511111 20.388978-45.511111 45.511111l0 659.911111c0 25.122133 20.388978 45.511111 45.511111 45.511111l477.866667 0c25.122133 0 45.511111-20.388978 45.511111-45.511111L796.444444 182.044444zM591.644444 819.2l-159.288889 0c-12.583822 0-22.755556-10.171733-22.755556-22.755556s10.171733-22.755556 22.755556-22.755556l159.288889 0c12.583822 0 22.755556 10.171733 22.755556 22.755556S604.228267 819.2 591.644444 819.2z"  ></path></symbol><symbol id="icon-erweima1" viewBox="0 0 1024 1024"><path d="M543.032784 340.591095l0 293.656133-67.762313 0L475.270471 340.680123 543.032784 340.591095zM544.866548 121.334439l0 147.609873-67.762313 0L477.104235 121.379465 544.866548 121.334439zM544.080649 726.860533 544.080649 874.469382l-67.762313 0L476.318336 726.904535 544.080649 726.860533zM518.253424 530.396999 370.644575 530.396999l0-67.762313 147.564847 0L518.253424 530.396999zM268.421402 531.444864 120.812553 531.444864l0-67.762313 147.564847 0L268.421402 531.444864zM900.221906 530.396999 752.612033 530.396999l0-67.76129 147.56587 0L900.221906 530.396999zM673.814386 579.224054l0 164.930353-67.762313 0L606.052073 579.273173 673.814386 579.224054zM770.981403 647.12656 606.052073 647.12656l0-67.762313L770.932284 579.364247 770.981403 647.12656zM901.269771 579.36527 901.269771 874.356818 606.052073 874.356818l0-67.763336 222.847437 0.001023L828.89951 579.364247 901.269771 579.36527zM120.812553 121.334439l294.990524 0 0 295.217698-67.76129 0L348.041788 193.7047 120.812553 193.7047 120.812553 121.334439zM415.803078 416.551114 120.812553 416.551114 120.812553 121.334439l67.76129 0 0 222.846414 227.229235 0L415.803078 416.551114zM120.812553 579.251683l294.990524 0L415.803078 874.469382l-67.76129 0L348.041788 651.621944 120.812553 651.621944 120.812553 579.251683zM415.803078 874.468358 120.812553 874.468358 120.812553 579.251683l67.76129 0 0 222.845391 227.229235 0L415.803078 874.468358zM606.16566 121.334439l294.990524 0 0 295.217698L833.394894 416.552138 833.394894 193.7047 606.16566 193.7047 606.16566 121.334439zM901.156184 416.551114 606.16566 416.551114 606.16566 121.334439l67.76129 0 0 222.846414 227.228211 0L901.155161 416.551114z"  ></path></symbol><symbol id="icon-attachment" viewBox="0 0 1024 1024"><path d="M472.153474 119.228972 92.638513 517.750743C-3.525822 618.731164-2.288327 780.624077 95.536728 880.163189L99.321659 884.014438C197.267042 983.675987 357.082027 984.489975 455.906639 885.911622L955.925037 387.139215C1034.944759 308.316403 1036.587465 179.168202 959.634413 98.61339L941.34458 116.085449 923.054748 133.557508 927.277389 137.977788 945.567221 120.505729 963.857054 103.03367C886.268179 21.813275 760.692811 22.649855 683.951435 104.944905L209.92702 613.273856C171.75695 654.206246 173.954266 718.232602 214.90487 756.419659L226.383979 767.1241C267.274317 805.254957 331.360614 803.034336 369.461105 762.176561L738.140738 366.81606C747.66794 356.599386 747.109013 340.593813 736.892339 331.066609 726.675665 321.539407 710.670091 322.098334 701.142889 332.315008L332.463258 727.675509C313.421342 748.095465 281.346492 749.206871 260.88503 730.126253L249.405922 719.421811C228.898628 700.298449 227.799923 668.2839 246.924868 647.774908L720.949284 139.445957C777.863249 78.413202 869.791012 77.800782 927.277389 137.977788 950.573468 162.364232 987.153133 127.420114 963.857054 103.03367L959.634413 98.61339C936.338334 74.226946 899.758669 109.171065 923.054748 133.557508 980.99271 194.207237 979.749843 291.920378 920.198449 351.323377L420.180051 850.095785C341.242127 928.837003 213.662948 928.187202 135.402204 848.5552L131.617273 844.703949C52.922438 764.630251 51.922852 633.86137 129.272687 552.637713L508.787648 154.115942C518.421419 143.999694 518.030293 127.989141 507.914046 118.35537 497.797798 108.7216 481.787245 109.112724 472.153474 119.228972L472.153474 119.228972Z"  ></path></symbol><symbol id="icon-box" viewBox="0 0 1024 1024"><path d="M58.18714 261.513847 489.750985 506.066692C497.230148 510.304885 506.385346 510.304885 513.86451 506.066692L945.428356 261.513847C962.456593 251.864512 961.814227 227.116685 944.308329 218.363735L512.744484 2.581813C505.859648-0.860604 497.755846-0.860604 490.871012 2.581813L59.307167 218.363735C41.801269 227.116685 41.158901 251.864512 58.18714 261.513847L58.18714 261.513847ZM82.300665 218.960567 81.180638 262.110679 512.744484 46.328756 490.871012 46.328756 922.434857 262.110679 921.314829 218.960567 489.750985 463.513412 513.86451 463.513412 82.300665 218.960567 82.300665 218.960567Z"  ></path><path d="M477.352463 504.929698 477.352463 974.793958C477.352463 993.514057 497.526411 1005.2927 513.828779 996.090807L974.163548 736.254285C981.846246 731.917777 986.597801 723.77952 986.597801 714.957436L986.597801 398.477284C986.597801 384.971004 975.648796 374.021999 962.142515 374.021999 948.636235 374.021999 937.687232 384.971004 937.687232 398.477284L937.687232 714.957436 950.121483 693.660589 489.786716 953.497111 526.263031 974.793958 526.263031 504.929698C526.263031 491.423418 515.314029 480.474415 501.807748 480.474415 488.301468 480.474415 477.352463 491.423418 477.352463 504.929698L477.352463 504.929698Z"  ></path><path d="M514.421935 953.842987 82.858091 694.006466 94.699187 714.957436 94.699187 254.622669C94.699187 241.116388 83.750183 230.167383 70.243903 230.167383 56.737622 230.167383 45.788618 241.116388 45.788618 254.622669L45.788618 714.957436C45.788618 723.534342 50.281834 731.484386 57.629714 735.908407L489.193559 995.74493C500.764461 1002.711554 515.792096 998.979049 522.758718 987.408147 529.725342 975.837246 525.992838 960.809611 514.421935 953.842987L514.421935 953.842987Z"  ></path><path d="M172.745454 448.218441 316.60007 534.531209C328.181609 541.480132 343.203518 537.724655 350.152444 526.143115 357.101367 514.561577 353.34589 499.539667 341.76435 492.590741L197.909735 406.277973C186.328194 399.32905 171.306285 403.084527 164.357361 414.666067 157.408437 426.247607 161.163914 441.269517 172.745454 448.218441L172.745454 448.218441Z"  ></path></symbol><symbol id="icon-gifts" viewBox="0 0 1024 1024"><path d="M151.31783 556.31747 151.31783 883.907454C151.31783 920.029577 180.635004 949.418204 216.629434 949.418204L784.642673 949.418204C820.737084 949.418204 849.954278 920.237995 849.954278 884.101732L849.954278 567.069766 806.295364 567.069766 806.295364 884.101732C806.295364 896.113453 796.637303 905.759287 784.642673 905.759287L216.629434 905.759287C204.770979 905.759287 194.976744 895.941182 194.976744 883.907454L194.976744 556.31747 151.31783 556.31747 151.31783 556.31747Z"  ></path><path d="M544.248062 927.255814 544.248062 305.116279 500.589148 305.116279 500.589148 927.255814 544.248062 927.255814 544.248062 927.255814Z"  ></path><path d="M85.829457 326.945737 828.143565 326.945737C864.241261 326.945737 893.519379 356.278505 893.519379 392.485833L893.519379 545.240309 915.348836 523.410852 173.03473 523.410852C136.937034 523.410852 107.658915 494.078084 107.658915 457.870756L107.658915 305.116279 85.829457 326.945737 85.829457 326.945737ZM85.829457 283.286822 64 283.286822 64 305.116279 64 457.870756C64 518.17203 112.806637 567.069766 173.03473 567.069766L915.348836 567.069766 937.178295 567.069766 937.178295 545.240309 937.178295 392.485833C937.178295 332.184559 888.371659 283.286822 828.143565 283.286822L85.829457 283.286822 85.829457 283.286822Z"  ></path><path d="M456.930234 261.457365 587.906976 261.457365 566.077519 239.627906 566.077519 305.116279 587.906976 283.286822 456.930234 283.286822 478.759691 305.116279 478.759691 239.627906 456.930234 261.457365 456.930234 261.457365ZM456.930234 217.79845 435.100774 217.79845 435.100774 239.627906 435.100774 305.116279 435.100774 326.945737 456.930234 326.945737 587.906976 326.945737 609.736433 326.945737 609.736433 305.116279 609.736433 239.627906 609.736433 217.79845 587.906976 217.79845 456.930234 217.79845 456.930234 217.79845Z"  ></path><path d="M551.660693 251.486788C552.55357 250.106889 554.286927 247.460145 556.764205 243.728553 560.914573 237.47673 565.616813 230.502266 570.773873 222.987694 585.499725 201.530022 600.893771 180.079304 616.162106 160.113019 624.310061 149.458001 632.211424 139.508136 639.79069 130.397706 667.823241 96.702015 691.414249 75.906977 697.054263 75.906977 731.078613 75.906977 790.860256 113.663803 821.48217 154.493023 826.567552 161.273533 823.726334 180.275765 811.048563 206.999126 805.881086 217.891608 810.522118 230.910777 821.414601 236.078255 832.307083 241.245732 845.326251 236.6047 850.49373 225.712218 869.606571 185.424421 874.534694 152.464863 856.409301 128.297674 818.268427 77.443174 746.7095 32.248062 697.054263 32.248062 672.038714 32.248062 644.340604 56.663432 606.227876 102.475701 598.243548 112.073026 589.974942 122.485343 581.481306 133.592407 565.71088 154.21527 549.895622 176.252924 534.776514 198.283624 529.487838 205.989982 524.661009 213.149239 520.390835 219.581526 517.815787 223.460397 515.989067 226.2497 515.005973 227.769026 508.456493 237.890948 511.352531 251.40579 521.474453 257.955268 531.596375 264.504747 545.111215 261.60871 551.660693 251.486788L551.660693 251.486788Z"  ></path><path d="M537.988958 227.769026C537.005865 226.2497 535.179145 223.460397 532.604096 219.581526 528.333922 213.149239 523.507093 205.989982 518.218415 198.283624 503.099307 176.252924 487.284049 154.21527 471.513626 133.592407 463.019987 122.485343 454.751383 112.073026 446.767055 102.475701 408.654327 56.663432 380.956218 32.248062 355.940668 32.248062 306.285431 32.248062 234.726504 77.443174 196.585628 128.297674 178.612682 152.261603 183.326064 184.892714 202.033209 224.720828 208.2705 238.000222 216.033171 251.855612 224.982418 266.060766 233.201436 279.106825 241.973779 291.750138 250.747785 303.541662 256.034751 310.646895 260.185632 315.936681 262.642498 318.939516L296.432634 291.293041C294.378822 288.782827 290.636015 284.013082 285.773954 277.478882 277.632915 266.538016 269.490213 254.802185 261.921855 242.788919 253.864791 229.999929 246.954809 217.666482 241.55017 206.159831 229.189078 179.842667 226.494032 161.18466 231.51276 154.493023 262.134675 113.663803 321.916316 75.906977 355.940668 75.906977 361.580681 75.906977 385.171691 96.702015 413.204241 130.397706 420.783505 139.508136 428.68487 149.458001 436.832823 160.113019 452.101161 180.079304 467.495204 201.530022 482.221058 222.987694 487.378116 230.502266 492.080356 237.47673 496.230726 243.728553 498.708002 247.460145 500.441361 250.106889 501.334236 251.486788L537.988958 227.769026 537.988958 227.769026Z"  ></path></symbol><symbol id="icon-weixin" viewBox="0 0 1024 1024"><path d="M693.12 347.232c11.776 0 23.36 0.896 35.008 2.176C696.768 203.36 540.672 94.88 362.432 94.88 163.2 94.88 0 230.624 0 403.104c0 99.521 54.272 181.248 145.024 244.736L108.8 756.832l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.393 0 22.656-0.513 33.792-1.345-7.04-24.256-11.199-49.6-11.199-76.031C385.088 475.744 521.024 347.232 693.12 347.232zM498.304 248.992c27.393 0 45.376 17.984 45.376 45.248 0 27.136-17.983 45.312-45.376 45.312-27.071 0-54.336-18.176-54.336-45.312C443.968 266.912 471.168 248.992 498.304 248.992zM244.672 339.552c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248 27.2 0 45.248 17.92 45.248 45.248C289.92 321.376 271.872 339.552 244.672 339.552zM1024 629.728c0-144.896-145.024-262.976-307.904-262.976-172.479 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.977 308.224 262.977 36.097 0 72.513-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.729 783.84 1024 711.456 1024 629.728zM616.128 584.352c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.239-36.225 36.224-36.225 27.521 0 45.376 18.177 45.376 36.225C661.504 566.432 643.648 584.352 616.128 584.352zM815.488 584.352c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.225 36.032-36.225 27.264 0 45.376 18.177 45.376 36.225C860.864 566.432 842.752 584.352 815.488 584.352z"  ></path></symbol><symbol id="icon-fenxiang1" viewBox="0 0 1024 1024"><path d="M768 701.001c17.328 0 33.5 3.172 48.5 9.5 15.001 6.343 28.156 15.172 39.5 26.5 11.328 11.344 20.156 24.5 26.5 39.5 6.329 15.001 9.5 31.172 9.5 48.5 0 17.344-3.172 33.5-9.5 48.5-6.343 15.001-15.172 28.172-26.5 39.5-11.344 11.344-24.5 20.172-39.5 26.5-15.001 6.343-31.172 9.5-48.5 9.5-17.344 0-33.5-3.156-48.5-9.5-15.001-6.329-28.172-15.156-39.5-26.5-11.344-11.328-20.172-24.5-26.5-39.5-6.343-15.001-9.5-31.156-9.5-48.5 0-2.656 0-5.156 0-7.5 0-2.329 0.329-4.5 1.001-6.5 0-2.656 0.156-5.156 0.5-7.5 0.329-2.329 0.828-4.5 1.5-6.5l-304-177.001c-6 5.344-12.172 10.172-18.5 14.5-6.343 4.343-13.172 7.844-20.5 10.5-7.344 3.344-15.001 5.671-23.001 7.001-8 1.344-16.343 2-25.001 2-17.344 0-33.844-3.328-49.5-10-15.671-6.656-29.172-15.657-40.5-27.001-12-12-21.344-25.657-28-41.001-6.672-15.328-10-32-10-50 0-17.328 3.328-33.828 10-49.5 6.656-15.657 16-29.156 28-40.5 11.328-12 24.828-21.328 40.5-28 15.657-6.656 32.156-10 49.5-10 8.656 0 17.001 0.844 25.001 2.5 8 1.671 15.657 4.172 23.001 7.5 7.328 2.672 14.156 6.172 20.5 10.5 6.329 4.343 12.5 9.172 18.5 14.5l301.001-176c-0.672-2-1.172-4.329-1.5-7.001-0.343-2.656-0.844-5.001-1.5-7.001 0-2.656-0.172-5.328-0.5-8-0.343-2.656-0.5-5.328-0.5-8 0-17.328 3.328-33.828 10-49.5 6.656-15.657 16-29.156 28-40.5 11.328-11.328 24.828-20.5 40.5-27.5 15.657-7.001 32.156-10.5 49.5-10.5 17.328 0 33.828 3.5 49.5 10.5 15.657 7.001 29.156 16.172 40.5 27.5 12 11.344 21.328 24.844 28 40.5 6.656 15.671 10 32.172 10 49.5 0 18-3.344 34.844-10 50.5-6.672 15.671-16 29.172-28 40.5-11.344 11.344-24.844 20.343-40.5 27.001-15.671 6.672-32.172 10-49.5 10-8.672 0-17.001-0.656-25.001-2-8-1.328-15.671-3.657-23.001-7.001-7.344-2.656-14.172-6.156-20.5-10.5-6.343-4.329-12.5-9.156-18.5-14.5l-300.999 175.001c0.656 2.672 1.156 5.172 1.5 7.5 0.329 2.343 0.828 4.844 1.5 7.5 0 2.672 0.156 5.172 0.5 7.5 0.329 2.343 0.5 4.844 0.5 7.5 0 2.672-0.172 5.344-0.5 8-0.343 2.672-0.5 5.344-0.5 8-0.672 2-1.172 4.343-1.5 7.001-0.343 2.672-0.844 5.001-1.5 7.001l304 177.001c5.328-4.656 11.328-9.001 18-13.001 6.656-4 13.328-7.657 20-11.001 7.328-2.656 14.828-4.656 22.5-6 7.657-1.327 15.5-1.999 23.5-1.999z"  ></path></symbol><symbol id="icon-wechaticon09" viewBox="0 0 1024 1024"><path d="M 633.954 984.195 L 381.417 984.195 c -38.491 0 -69.8101 -31.3191 -69.8101 -69.8188 L 311.605 672.721 c 0 -0.34521 -0.422882 -0.776723 -0.776723 -0.776723 L 179.459 671.945 c -33.5631 0 -45.8094 -19.815 -49.5118 -28.3331 c -3.70239 -8.51807 -9.85575 -30.9826 13.0145 -55.5442 l 315.403 -338.652 c 12.8073 -13.7567 30.7841 -21.6534 49.3134 -21.6534 s 36.5059 7.89669 49.3219 21.662 l 315.403 338.642 c 22.8701 24.5617 16.7168 47.0176 13.0145 55.5442 c -3.71101 8.51807 -15.9573 28.3331 -49.5118 28.3331 L 704.542 671.945 c -0.353841 0 -0.776723 0.431514 -0.776723 0.776723 l 0 241.657 C 703.764 952.877 672.446 984.195 633.954 984.195 Z M 223.517 602.885 l 87.3123 0.0172602 c 38.4995 0 69.8188 31.3191 69.8188 69.8188 l 0 241.657 c 0 0.34521 0.422882 0.776723 0.768093 0.776723 l 252.538 0 c 0.34521 0 0.768093 -0.431514 0.768093 -0.776723 L 634.722 672.721 c 0 -38.4995 31.3191 -69.8188 69.8188 -69.8188 l 87.295 0 L 507.684 297.78 L 223.517 602.885 Z"  ></path><path d="M 847.045 175.421 L 168.325 175.421 c -19.0641 0 -34.521 -15.4569 -34.521 -34.521 s 15.4569 -34.521 34.521 -34.521 l 678.718 0 c 19.0641 0 34.521 15.4569 34.521 34.521 S 866.109 175.421 847.045 175.421 Z"  ></path></symbol><symbol id="icon-weixin1" viewBox="0 0 1024 1024"><path d="M503.04 408.32c17.92 0 30.72-12.8 30.72-30.72 0-17.92-11.52-30.72-30.72-30.72-17.92 0-37.12 11.52-37.12 30.72C465.92 395.52 483.84 408.32 503.04 408.32z"  ></path><path d="M582.4 524.8c-11.52 0-24.32 12.8-24.32 24.32 0 12.8 12.8 24.32 24.32 24.32 19.2 0 30.72-11.52 30.72-24.32C613.12 537.6 600.32 524.8 582.4 524.8z"  ></path><path d="M512 0C229.12 0 0 229.12 0 512c0 282.88 229.12 512 512 512s512-229.12 512-512C1024 229.12 794.88 0 512 0zM410.88 659.2c-30.72 0-55.04-6.4-85.76-12.8l-85.76 42.24 24.32-72.96c-61.44-42.24-97.28-98.56-97.28-165.12C166.4 335.36 276.48 243.2 410.88 243.2c120.32 0 225.28 72.96 247.04 171.52-7.68-1.28-15.36-1.28-23.04-1.28-116.48 0-207.36 87.04-207.36 193.28 0 17.92 2.56 34.56 7.68 51.2C426.24 659.2 418.56 659.2 410.88 659.2zM771.84 744.96l17.92 61.44-66.56-37.12c-24.32 6.4-48.64 12.8-72.96 12.8-116.48 0-208.64-79.36-208.64-177.92 0-97.28 92.16-177.92 208.64-177.92 110.08 0 207.36 79.36 207.36 177.92C857.6 659.2 820.48 707.84 771.84 744.96z"  ></path><path d="M716.8 524.8c-11.52 0-24.32 12.8-24.32 24.32 0 12.8 12.8 24.32 24.32 24.32 17.92 0 30.72-11.52 30.72-24.32C747.52 537.6 734.72 524.8 716.8 524.8z"  ></path><path d="M331.52 346.88c-17.92 0-37.12 11.52-37.12 30.72 0 17.92 17.92 30.72 37.12 30.72 17.92 0 30.72-12.8 30.72-30.72C362.24 359.68 349.44 346.88 331.52 346.88z"  ></path></symbol><symbol id="icon-screen" viewBox="0 0 1024 1024"><path d="M896 102.4l-819.2 0c-42.3424 0-76.8 34.4576-76.8 76.8l0 512c0 42.3424 34.4576 76.8 76.8 76.8l384 0 0 102.4-179.2 0c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6l409.6 0c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6l-179.2 0 0-102.4 384 0c42.3424 0 76.8-34.4576 76.8-76.8l0-512c0-42.3424-34.4576-76.8-76.8-76.8zM921.6 691.2c0 14.1312-11.4688 25.6-25.6 25.6l-819.2 0c-14.1312 0-25.6-11.4688-25.6-25.6l0-512c0-14.1312 11.4688-25.6 25.6-25.6l819.2 0c14.1312 0 25.6 11.4688 25.6 25.6l0 512z"  ></path></symbol><symbol id="icon-chenggong1" viewBox="0 0 1024 1024"><path d="M512 0C230.4 0 0 230.4 0 512c0 281.6 230.4 512 512 512 281.6 0 512-230.4 512-512C1024 230.4 793.6 0 512 0zM512 960c-249.6 0-448-204.8-448-448 0-249.6 204.8-448 448-448 249.6 0 448 198.4 448 448C960 761.6 761.6 960 512 960zM691.2 339.2 454.4 576 332.8 454.4c-19.2-19.2-51.2-19.2-76.8 0C243.2 480 243.2 512 262.4 531.2l153.6 153.6c19.2 19.2 51.2 19.2 70.4 0l51.2-51.2 224-224c19.2-19.2 25.6-51.2 0-70.4C742.4 320 710.4 320 691.2 339.2z"  ></path></symbol><symbol id="icon-jia" viewBox="0 0 1024 1024"><path d="M857.880565 455.018218 566.758138 455.018218 566.758138 163.899884c0-20.098757-16.292058-36.389792-36.390815-36.389792l-36.389792 0c-20.098757 0-36.389792 16.292058-36.389792 36.389792l0 291.118334L166.464289 455.018218c-20.098757 0-36.390815 16.292058-36.390815 36.390815l0 36.393885c0 20.098757 16.292058 36.389792 36.390815 36.389792l291.122427 0 0 291.118334c0 20.098757 16.292058 36.389792 36.389792 36.389792l36.389792 0c20.098757 0 36.390815-16.292058 36.390815-36.389792L566.757115 564.192709l291.122427 0c20.098757 0 36.390815-16.292058 36.390815-36.389792l0-36.393885C894.270357 471.310276 877.978299 455.018218 857.880565 455.018218z"  ></path></symbol><symbol id="icon-jiantou2" viewBox="0 0 1024 1024"><path d="M510.141164 80.345909c-219.418338 0-396.508639 177.953971-396.508639 396.509662 0 218.553645 177.953971 396.507616 396.508639 396.507616s396.508639-177.952948 396.508639-396.507616C906.649803 258.299881 729.559503 80.345909 510.141164 80.345909zM650.086473 498.450403 453.127659 696.272887c-6.046716 6.046716-13.821797 8.637728-21.595854 8.637728s-15.549138-2.591011-21.595854-8.637728c-12.093433-12.093433-12.093433-31.098275 0-43.192731l176.22663-176.225607-175.36296-173.634596c-12.093433-12.094456-12.093433-31.098275 0-42.329061 12.093433-12.093433 31.098275-12.093433 42.329061 0L650.086473 456.121342c6.045693 6.04774 8.636704 12.95915 8.636704 21.596877C658.724201 484.629629 656.132166 492.40471 650.086473 498.450403z"  ></path></symbol><symbol id="icon-jian" viewBox="0 0 1024 1024"><path d="M96.269577 449.359334l829.613778 0c17.619286 0 31.908734 14.288424 31.908734 31.907711l0 63.816444c0 17.626449-14.288424 31.908734-31.908734 31.908734L96.269577 576.992223c-17.619286 0-31.907711-14.282285-31.907711-31.908734l0-63.816444C64.361867 463.647759 78.650291 449.359334 96.269577 449.359334z"  ></path></symbol><symbol id="icon-lianjie1" viewBox="0 0 1024 1024"><path d="M638.976 394.56C631.232 386.752 622.848 379.712 614.272 373.12l0 0C605.376 364.544 593.344 359.296 579.968 359.296c-27.2 0-49.28 22.144-49.28 49.344 0 12.032 4.288 23.04 11.52 31.616l0 0 0 0C545.664 444.416 549.76 448 554.368 450.816c4.672 3.84 9.28 7.616 13.504 11.904l4.032 4.032c51.136 51.072 35.904 139.072-15.232 190.144L338.56 875.008c-51.072 51.072-134.208 51.072-185.344 0L149.12 870.848c-51.136-51.136-51.136-134.336 0-185.28l96.384-96.384c12.352-9.792 20.288-24.96 20.288-41.984 0-29.568-24-53.568-53.568-53.568-11.2 0-21.568 3.456-30.144 9.28 0 0 0-0.064-0.064-0.128L180.992 503.744C177.216 506.496 173.76 509.696 170.752 513.344L70.656 606.976c-94.144 94.208-94.144 248.32 0 342.4l4.096 4.032c94.144 94.08 248.128 94.08 342.272 0l218.112-218.112c94.016-94.208 101.952-242.688 7.936-336.768L638.976 394.56 638.976 394.56zM953.344 74.688l-3.968-4.032c-94.208-94.208-248.192-94.208-342.4 0L388.992 288.768C294.784 382.848 289.6 518.848 383.744 613.056l3.968 3.968c4.288 4.224 8.704 8.32 13.248 12.16 3.264 3.648 7.168 6.72 11.456 9.28 0 0.064 0.064 0.064 0.064 0.064l0 0c6.848 3.968 14.72 6.208 23.168 6.208 25.728 0 46.592-20.864 46.592-46.592 0-7.232-1.664-14.144-4.608-20.224l0 0C471.488 564.032 459.968 555.648 451.968 547.712L448 543.744c-51.072-51.136-31.68-125.44 19.456-176.576l218.24-218.048c51.008-51.136 134.144-51.136 185.28 0l4.032 3.968c51.136 51.136 51.136 134.336 0 185.344L778.88 434.624c-12.992 9.664-21.504 25.28-21.504 42.752 0 29.312 23.744 53.12 53.12 53.12 10.24 0 19.776-2.88 27.904-7.872 0 0.128 0.064 0.192 0.128 0.32l1.472-1.344c4.608-3.072 8.64-6.848 12.096-11.2l101.248-93.376C1047.552 322.816 1047.552 168.832 953.344 74.688L953.344 74.688zM953.344 74.688"  ></path></symbol><symbol id="icon-552cd5d44edc9" viewBox="0 0 1024 1024"><path d="M423.836543 114.819049l0-0.274246L204.08256 114.544803c-45.911656 0-83.09451 36.932144-83.356476 82.59309l-0.023536 0 0 207.579709c0 2.468215 0.500397 4.782933 1.239224 7.000438 6.678096 39.245839 40.831964 69.164243 82.140789 69.164243L423.836543 480.882282l0-0.237407c38.877449-2.432399 70.477144-31.363312 76.798107-68.926836 0.763386-2.217505 1.289366-4.532223 1.289366-7.000438L501.924016 197.137893l-0.025583 0C501.683539 153.253406 467.244168 117.538997 423.836543 114.819049zM458.038506 393.46021c0 24.14798-19.654642 43.705408-43.88551 43.705408L208.445938 437.165618c-24.230867 0-43.858904-19.557428-43.858904-43.705408L164.587034 201.980177c0-24.149003 19.628036-43.717687 43.858904-43.717687l205.708082 0c24.230867 0 43.88551 19.569708 43.88551 43.717687L458.039529 393.46021zM902.246517 195.111746c-0.215918-42.799782-33.818223-77.644381-76.153424-80.304977l0-0.261966L634.384863 114.544803c-44.790112 0-81.040734 36.037774-81.304747 80.56592l-0.023536 0 0 202.511273c0 2.407839 0.476861 4.673439 1.240247 6.831592 6.487761 38.292118 39.830147 67.472717 80.08906 67.472717l191.70823 0 0-0.226151c37.921681-2.385327 68.734454-30.613228 74.961272-67.246567 0.738827-2.158153 1.216711-4.423753 1.216711-6.831592L902.2721 195.111746 902.246517 195.111746zM859.461061 386.638851c0 23.551392-19.152199 42.643216-42.813085 42.643216L638.678656 429.282067c-23.658839 0-42.834574-19.091824-42.834574-42.643216L595.844082 199.832258c0-23.552415 19.175735-42.643216 42.834574-42.643216l177.969321 0c23.660886 0 42.813085 19.091824 42.813085 42.643216L859.461061 386.638851zM415.680792 539.887141l0-0.260943L201.839473 539.626197c-44.670385 0-80.874959 35.94363-81.114412 80.375585l-0.023536 0 0 201.974038c0 2.420119 0.477884 4.687766 1.215688 6.821359 6.464225 38.181601 39.73498 67.316152 79.922261 67.316152L415.680792 896.113331l0-0.236384c37.824467-2.350534 68.567655-30.529317 74.744331-67.079768 0.762363-2.133593 1.24127-4.40124 1.24127-6.821359L491.666394 620.001783l-0.049119 0C491.402381 577.308425 457.919802 542.53648 415.680792 539.887141zM448.975083 811.04077c0 23.493064-19.127639 42.524512-42.691311 42.524512L212.953601 853.565283c0 0-0.022513 0-0.047072 0l-6.822382 0c-23.563672 0-42.690288-19.031449-42.690288-42.524512L163.393859 624.687502c0-23.469528 19.126616-42.525536 42.690288-42.525536l200.200648 0c23.563672 0 42.691311 19.056008 42.691311 42.525536L448.976106 811.04077zM721.154066 753.120616c-14.741749 0-26.66736 11.508102-26.66736 25.699312l0 51.395554c0 14.228049 11.924587 25.721825 26.66736 25.721825 14.736633 0 26.663266-11.492752 26.663266-25.721825l0-51.395554C747.817332 764.628718 735.891721 753.120616 721.154066 753.120616zM834.775846 727.398792c-14.739702 0-26.665313 11.494799-26.665313 25.697265l0 77.118402c0 14.214746 11.924587 25.701358 26.665313 25.701358 14.763239 0 26.688849-11.487635 26.688849-25.701358l0-77.118402C861.464695 738.894613 849.538061 727.398792 834.775846 727.398792zM834.775846 573.172221c-14.739702 0-26.665313 11.506055-26.665313 25.722848l0 51.395554c0 14.189164 11.924587 25.697265 26.665313 25.697265 14.763239 0 26.688849-11.508102 26.688849-25.697265l0-51.395554C861.464695 584.679299 849.538061 573.172221 834.775846 573.172221zM721.154066 573.195757c-14.741749 0-26.66736 11.507078-26.66736 25.709545L694.486706 701.735295c0 14.192234 11.924587 25.686009 26.66736 25.686009 14.736633 0 26.663266-11.492752 26.663266-25.686009L747.817332 598.905302C747.817332 584.702835 735.891721 573.195757 721.154066 573.195757zM606.050538 701.735295c-14.68956 0-26.640754 11.435447-26.640754 25.663496l0 102.81669c0 14.214746 11.951193 25.701358 26.640754 25.701358 14.787798 0 26.712385-11.487635 26.712385-25.701358L632.762923 727.398792C632.763946 713.170742 620.838336 701.735295 606.050538 701.735295zM606.050538 573.172221c-14.68956 0-26.640754 11.506055-26.640754 25.722848l0 25.709545c0 14.201443 11.951193 25.686009 26.640754 25.686009 14.787798 0 26.712385-11.484565 26.712385-25.686009l0-25.709545C632.763946 584.679299 620.838336 573.172221 606.050538 573.172221z"  ></path></symbol><symbol id="icon-kefu1" viewBox="0 0 1220 1024"><path d="M609.52381 103.521768C386.634848 103.521768 205.81155 281.994362 205.81155 502.30272 205.81155 722.611078 386.634848 901.083672 609.52381 901.083672 832.41277 901.083672 1013.236068 722.611078 1013.236068 502.30272 1013.236068 281.994362 832.41277 103.521768 609.52381 103.521768L609.52381 152.283672C805.624105 152.283672 964.474163 309.068678 964.474163 502.30272 964.474163 695.536762 805.624105 852.321768 609.52381 852.321768 413.423511 852.321768 254.573455 695.536762 254.573455 502.30272 254.573455 309.068678 413.423511 152.283672 609.52381 152.283672L609.52381 103.521768 609.52381 103.521768Z"  ></path><path d="M786.578456 916.340931C953.027911 847.122959 1064.985936 685.28504 1064.985936 502.30528 1064.985936 254.278962 861.139446 53.086232 609.528998 53.086232 357.910157 53.086232 154.072057 254.274438 154.072057 502.30528 154.072057 557.702671 164.223558 611.672834 183.789722 662.281372 188.645358 674.840639 182.400333 688.958206 169.841066 693.813843 157.2818 698.66948 143.164232 692.424455 138.308596 679.865188 137.270745 677.180748 136.256748 674.487788 135.266696 671.78655 133.41622 671.863749 131.555698 671.90272 129.685917 671.90272 58.060385 671.90272 0 614.59712 0 543.90272 0 478.897902 49.090899 425.213508 112.679145 416.993374 153.650879 182.559974 360.559142 4.324328 609.528998 4.324328 858.491246 4.324328 1065.40562 182.563538 1106.37863 416.994688 1169.961945 425.219224 1219.047619 478.901362 1219.047619 543.90272 1219.047619 614.59712 1160.987234 671.90272 1089.361701 671.90272 1087.471543 671.90272 1085.590655 671.862955 1083.719924 671.78418 1036.183537 801.486443 935.380441 907.625204 804.22714 961.810715 803.065954 995.274976 775.215479 1022.050714 741.027499 1022.050714 706.101872 1022.050714 677.790179 994.10707 677.790179 959.635476 677.790179 925.163881 706.101872 897.220237 741.027499 897.220237 758.919183 897.220237 775.075167 904.553492 786.578456 916.340931Z"  ></path><path d="M609.52771 611.404761C550.595467 611.404761 497.4722 600.760544 451.055605 583.062977 434.932997 576.915797 420.844929 570.360642 408.917884 563.855282 401.992256 560.077839 397.47084 557.265822 395.480775 555.882628 376.240694 542.509792 351.052635 561.329074 358.422152 583.571003 393.718128 690.097762 494.476025 763.483672 609.527701 763.483672 724.577109 763.483672 825.323515 690.100151 860.620278 583.571003 867.99007 561.328245 842.800094 542.508919 823.560241 555.883608 821.570687 557.266661 817.050097 560.078541 810.125512 563.855862 798.20012 570.361086 784.113723 576.916129 767.992695 583.063216 721.580368 600.760617 668.459778 611.404761 609.52771 611.404761L609.52771 611.404761Z"  ></path></symbol><symbol id="icon-dagou" viewBox="0 0 1027 1024"><path d="M 873.875 275.75 c -127.5 135.001 -470.625 504.375 -470.625 504.375 s -168.75 -163.125 -253.125 -245.625 c -20.625 -18.75 -52.5001 -18.75 -71.25 0 l 0 0 c -20.625 20.625 -20.625 52.5001 0 71.25 l 281.251 275.623 l 1.875 3.75001 c 0 0 0 0 0 0 l 0 0 c 3.75001 3.75001 7.5 5.625 11.25 7.5 l 7.5 3.75001 c 7.5 3.75001 15 3.75001 22.5001 3.75001 c 9.375 0 16.875 -1.875 24.375 -5.625 c 3.75001 -1.875 5.625 -3.75001 9.375 -5.625 c 3.75001 -1.875 7.5 -3.75001 11.25 -7.5 l 502.5 -538.125 c 18.75 -20.625 18.75 -52.5001 -1.875 -73.125 l 0 0 C 928.25 253.25 894.5 253.25 873.875 275.75 Z"  ></path></symbol><symbol id="icon-magic" viewBox="0 0 1024 1024"><path d="M716 332l167.428-167.43-61.144-61.144-167.428 167.428zM971.428 164.57q0 15.43-10.286 25.714l-734.856 734.856q-10.286 10.286-25.714 10.286t-25.714-10.286l-113.144-113.144q-10.286-10.286-10.286-25.714t10.286-25.714l734.856-734.856q10.286-10.286 25.714-10.286t25.714 10.286l113.144 113.144q10.286 10.286 10.286 25.714zM199.43 56l56 17.144-56 17.144-17.144 56-17.144-56-56-17.144 56-17.144 17.144-56zM399.428 148.57l112 34.286-112 34.286-34.286 112-34.286-112-112-34.286 112-34.286 34.286-112zM930.856 421.714l56 17.142-56 17.144-17.144 56-17.144-56-56-17.144 56-17.144 17.144-56zM565.144 56l56 17.144-56 17.144-17.144 56-17.144-56-56-17.144 56-17.144 17.144-56z"  ></path></symbol><symbol id="icon-wxbmingxingdianpu" viewBox="0 0 1024 1024"><path d="M226.754932 180.217525l588.594469 0 0 41.488927-588.594469 0 0-41.488927Z"  ></path><path d="M974.794833 366.252545c0-47.089481-25.272593-75.04109-65.482387-97.662297L909.312446 88.080058c0-19.429515-15.83157-35.217083-35.217083-35.217083L167.939385 52.862975c-19.385513 0-35.173081 15.787568-35.173081 35.217083l0 182.01445c-30.762631 24.378224-49.472761 56.399521-49.472761 96.158037 0 40.930201 19.564591 77.088726 49.472761 100.656491l0 430.731068c0 19.383466 15.787568 35.174104 35.173081 35.174104l706.154955 0c19.385513 0 35.217083-15.788591 35.217083-35.174104L909.311423 477.701846C948.170452 455.529871 974.794833 414.106436 974.794833 366.252545M866.68151 891.324258l-691.284269 0L175.397241 490.070548c10.611685 2.877537 25.056676 4.901637 36.570917 4.901637 43.805692 0 82.439594-22.081924 105.692181-55.588039 23.252587 33.506115 61.931514 55.588039 105.690134 55.588039 43.807738 0 82.440617-22.081924 105.737206-55.588039 23.209608 33.506115 61.888536 55.588039 105.693204 55.588039 43.715641 0 82.395592-22.081924 105.60213-55.588039 23.295566 33.506115 61.885466 55.588039 105.692181 55.588039 5.846148 0 14.939247-0.98749 20.605294-1.7519L866.680487 891.324258zM846.078263 453.485305c-45.515636 0-84.859713-41.71917-84.859713-87.23276 0-12.727882-8.061606-23.026436-20.745487-23.026436-12.769838 0-20.74344 10.299577-20.74344 23.026436 0 45.514613-39.434128 87.23276-84.947717 87.23276-45.603641 0-84.948741-41.71917-84.948741-87.23276 0-12.727882-8.06263-23.026436-20.74344-23.026436-12.771885 0-20.74344 10.299577-20.74344 23.026436 0 45.514613-39.389102 87.23276-84.99479 87.23276-45.559639 0-84.947717-41.71917-84.947717-87.23276 0-12.727882-7.970532-23.026436-20.74344-23.026436-12.727882 0-20.74344 10.299577-20.74344 23.026436 0 45.514613-39.3451 87.23276-84.948741 87.23276-45.559639 0-87.184665-41.71917-87.184665-87.23276 0-28.469402 9.824763-54.643528 33.885761-69.938885 6.882757-4.361331 15.585977-11.82635 15.585977-19.428491l0 0L174.255231 89.784886l693.567265 0 0 177.883363c-0.357134 9.312086 4.949732 18.304901 14.123672 22.038946 31.211862 12.681834 51.359738 42.814108 51.359738 76.546374C933.30693 411.767158 891.682927 453.485305 846.078263 453.485305"  ></path></symbol><symbol id="icon-zhifubao" viewBox="0 0 1024 1024"><path d="M512 1024c281.6 0 512-230.4 512-512 0-281.6-230.4-512-512-512C230.4 0 0 230.4 0 512 0 793.6 230.4 1024 512 1024L512 1024zM460.8 323.2 460.8 240l92.8 0 0 83.2 188.8 0 0 38.4-188.8 0 0 51.2 156.8 0c0 0-3.2 28.8-22.4 83.2-19.2 54.4-38.4 80-38.4 80l304 99.2c0 0-9.6 28.8-22.4 54.4-12.8 25.6-32 51.2-32 51.2L608 643.2c0 0-54.4 60.8-112 86.4-54.4 25.6-121.6 44.8-188.8 25.6-70.4-16-118.4-60.8-112-144 9.6-83.2 96-112 169.6-112s208 48 208 48 12.8-25.6 22.4-54.4c12.8-28.8 12.8-54.4 12.8-54.4L320 438.4l0-28.8 140.8 0 0-54.4-176 0 0-38.4L460.8 316.8 460.8 323.2zM540.8 611.2c0 0-86.4 102.4-188.8 102.4-102.4 0-124.8-48-124.8-83.2 0-35.2 22.4-73.6 108.8-80C422.4 544 540.8 611.2 540.8 611.2L540.8 611.2zM540.8 611.2"  ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path><path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path><path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z"  ></path><path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z"  ></path></symbol><symbol id="icon-cuowu" viewBox="0 0 1024 1024"><path d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"  ></path></symbol><symbol id="icon-lianjie" viewBox="0 0 1024 1024"><path d="M588.8 473.6l-9.6-6.4c-9.6-9.6-25.6-6.4-32 3.2-9.6 9.6-6.4 25.6 3.2 32l9.6 6.4c19.2 16 19.2 41.6 3.2 64l-12.8 16c-9.6 9.6-6.4 25.6 3.2 32 9.6 9.6 25.6 6.4 32-3.2l12.8-16C630.4 563.2 627.2 505.6 588.8 473.6z"  ></path><path d="M448 720l-140.8 176c-16 19.2-44.8 22.4-60.8 9.6l-137.6-112c-19.2-16-19.2-41.6-3.2-64l265.6-326.4c16-19.2 44.8-22.4 60.8-9.6l12.8 9.6c9.6 9.6 25.6 6.4 32-3.2 9.6-9.6 6.4-25.6-3.2-32l-12.8-9.6c-38.4-32-96-22.4-128 16l-265.6 326.4c-32 38.4-28.8 96 9.6 128l137.6 112c38.4 32 96 22.4 128-16l140.8-176c9.6-9.6 6.4-25.6-3.2-32C470.4 707.2 457.6 710.4 448 720z"  ></path><path d="M944 275.2l-128-105.6c-41.6-32-99.2-25.6-131.2 12.8l-262.4 326.4c-32 41.6-25.6 99.2 12.8 131.2l128 105.6c41.6 32 99.2 25.6 131.2-12.8l262.4-326.4C992 364.8 985.6 307.2 944 275.2zM921.6 377.6l-262.4 326.4c-16 19.2-44.8 22.4-67.2 6.4l-128-105.6c-19.2-16-22.4-44.8-6.4-67.2l262.4-326.4c16-19.2 44.8-22.4 67.2-6.4l128 105.6C934.4 326.4 937.6 355.2 921.6 377.6z"  ></path></symbol><symbol id="icon-shangfan" viewBox="0 0 1024 1024"><path d="M873.6 419.2l-355.2-361.6c-9.6-9.6-22.4-9.6-32 0l-355.2 368c-9.6 9.6-9.6 22.4 0 32 9.6 9.6 22.4 9.6 32 0l316.8-329.6 0 828.8c0 12.8 9.6 22.4 22.4 22.4s22.4-9.6 22.4-22.4l0-822.4 310.4 316.8c9.6 9.6 22.4 9.6 32 0C883.2 441.6 883.2 425.6 873.6 419.2z"  ></path></symbol><symbol id="icon-shouhuodizhi" viewBox="0 0 1024 1024"><path d="M518.4 48c-214.4 0-390.4 176-390.4 393.6 0 48 16 99.2 41.6 156.8 28.8 57.6 70.4 118.4 118.4 182.4 35.2 41.6 73.6 83.2 108.8 121.6 12.8 12.8 25.6 25.6 35.2 35.2 6.4 6.4 12.8 9.6 12.8 12.8l0 0c38.4 38.4 102.4 38.4 137.6 0 3.2-3.2 6.4-6.4 12.8-12.8 9.6-9.6 22.4-22.4 35.2-35.2 38.4-38.4 73.6-80 108.8-121.6 51.2-60.8 92.8-124.8 118.4-182.4 28.8-57.6 41.6-108.8 41.6-156.8C908.8 224 732.8 48 518.4 48zM822.4 576c-25.6 54.4-64 112-115.2 172.8-35.2 41.6-70.4 83.2-105.6 118.4-12.8 12.8-25.6 25.6-35.2 35.2-6.4 6.4-9.6 9.6-12.8 12.8-19.2 19.2-51.2 19.2-70.4 0l0 0c-3.2-3.2-6.4-6.4-12.8-12.8-9.6-9.6-22.4-22.4-35.2-35.2-35.2-38.4-73.6-76.8-105.6-118.4-48-60.8-86.4-118.4-115.2-172.8-25.6-51.2-38.4-96-38.4-134.4 0-192 153.6-345.6 342.4-345.6 188.8 0 342.4 153.6 342.4 345.6C860.8 480 848 524.8 822.4 576z"  ></path><path d="M518.4 262.4c-96 0-169.6 76.8-169.6 172.8 0 96 76.8 172.8 169.6 172.8s169.6-76.8 169.6-172.8C688 339.2 614.4 262.4 518.4 262.4zM518.4 556.8c-67.2 0-121.6-54.4-121.6-124.8s54.4-124.8 121.6-124.8c67.2 0 121.6 54.4 121.6 124.8S585.6 556.8 518.4 556.8z"  ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M969.6 502.4l-118.4-112-323.2-300.8c-9.6-9.6-22.4-9.6-32 0l-313.6 297.6c-3.2 3.2-6.4 6.4-9.6 9.6l-118.4 112c-9.6 9.6-9.6 22.4 0 32s22.4 9.6 32 0l83.2-80 0 393.6c0 48 41.6 89.6 92.8 89.6l83.2 0c38.4 0 70.4-28.8 70.4-67.2l0-217.6 99.2 0 99.2 0 0 217.6c0 35.2 32 67.2 70.4 67.2l83.2 0c51.2 0 92.8-38.4 92.8-89.6l0-396.8 80 73.6c9.6 9.6 22.4 9.6 32 0C979.2 524.8 979.2 512 969.6 502.4zM809.6 857.6c0 25.6-19.2 44.8-44.8 44.8l-83.2 0c-12.8 0-22.4-9.6-22.4-22.4L659.2 640c0-12.8-9.6-22.4-22.4-22.4l-121.6 0-121.6 0c-12.8 0-22.4 9.6-22.4 22.4l0 240c0 12.8-9.6 22.4-22.4 22.4l-83.2 0c-25.6 0-44.8-19.2-44.8-44.8l0-438.4 294.4-281.6 294.4 281.6L809.6 857.6z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"  ></path></symbol><symbol id="icon-wodedingdan" viewBox="0 0 1024 1024"><path d="M883.2 60.8l-89.6 0c-12.8 0-25.6 9.6-25.6 25.6s9.6 25.6 25.6 25.6l89.6 0c25.6 0 48 22.4 48 48l0 713.6c0 25.6-22.4 48-48 48l-736 0c-25.6 0-48-22.4-48-48l0-713.6c0-25.6 22.4-48 48-48l99.2 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-99.2 0c-54.4 0-96 41.6-96 96l0 713.6c0 54.4 41.6 96 96 96l736 0c54.4 0 96-41.6 96-96l0-713.6C979.2 102.4 934.4 60.8 883.2 60.8z"  ></path><path d="M393.6 108.8l240 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-240 0c-12.8 0-25.6 9.6-25.6 25.6S380.8 108.8 393.6 108.8z"  ></path><path d="M294.4 345.6l464 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-464 0c-12.8 0-25.6 9.6-25.6 25.6S278.4 345.6 294.4 345.6z"  ></path><path d="M294.4 540.8l464 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-464 0c-12.8 0-25.6 9.6-25.6 25.6S278.4 540.8 294.4 540.8z"  ></path><path d="M294.4 736l464 0c12.8 0 25.6-9.6 25.6-25.6s-9.6-25.6-25.6-25.6l-464 0c-12.8 0-25.6 9.6-25.6 25.6S278.4 736 294.4 736z"  ></path></symbol><symbol id="icon-wodefankui" viewBox="0 0 1024 1024"><path d="M883.2 83.2l-742.4 0c-51.2 0-92.8 41.6-92.8 89.6l0 582.4c0 48 41.6 89.6 92.8 89.6l256 0c0 0 6.4 6.4 16 19.2 3.2 3.2 6.4 6.4 9.6 12.8 0 0 6.4 9.6 9.6 12.8 28.8 44.8 51.2 67.2 86.4 67.2 35.2 0 60.8-22.4 89.6-67.2 22.4-35.2 28.8-44.8 28.8-44.8l249.6 0c51.2 0 92.8-41.6 92.8-89.6l0-582.4C976 121.6 934.4 83.2 883.2 83.2zM931.2 755.2c0 25.6-19.2 44.8-44.8 44.8l-252.8 0c-6.4 0-9.6 0-16 3.2-9.6 6.4-19.2 12.8-28.8 28.8-3.2 6.4-22.4 35.2-22.4 35.2-19.2 32-35.2 44.8-48 44.8-12.8 0-25.6-12.8-48-44.8-3.2-3.2-6.4-12.8-9.6-12.8-3.2-6.4-6.4-9.6-9.6-12.8-19.2-25.6-32-38.4-54.4-38.4l-256 0c-25.6 0-44.8-19.2-44.8-44.8l0-582.4c0-25.6 22.4-44.8 48-44.8l742.4 0c25.6 0 48 19.2 48 44.8L934.4 755.2z"  ></path><path d="M220.8 483.2a1.6 1.6 0 1 0 102.4 0 1.6 1.6 0 1 0-102.4 0Z"  ></path><path d="M460.8 483.2a1.6 1.6 0 1 0 102.4 0 1.6 1.6 0 1 0-102.4 0Z"  ></path><path d="M697.6 483.2a1.6 1.6 0 1 0 102.4 0 1.6 1.6 0 1 0-102.4 0Z"  ></path></symbol><symbol id="icon-xiafan" viewBox="0 0 1024 1024"><path d="M921.6 563.2c-9.6-9.6-25.6-9.6-35.2 0L544 896l0-822.4c0-12.8-9.6-22.4-25.6-22.4s-25.6 9.6-25.6 22.4L492.8 896l-342.4-339.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 22.4 0 32l384 377.6c6.4 6.4 12.8 6.4 19.2 6.4 0 0 0 0 0 0 3.2 0 3.2 0 6.4 0 0 0 0 0 3.2 0 3.2 0 6.4-3.2 9.6-6.4l380.8-371.2C931.2 588.8 931.2 572.8 921.6 563.2z"  ></path></symbol><symbol id="icon-xiala" viewBox="0 0 1024 1024"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z"  ></path></symbol><symbol id="icon-xiangshangjiantou" viewBox="0 0 1024 1024"><path d="M966.4 668.8l-435.2-432c-9.6-9.6-25.6-9.6-35.2 0l-441.6 432c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l425.6-416 416 416c9.6 9.6 25.6 9.6 35.2 0S976 678.4 966.4 668.8z"  ></path></symbol><symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024"><path d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"  ></path></symbol><symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"  ></path></symbol><symbol id="icon-xiangzuojiantou" viewBox="0 0 1024 1024"><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"  ></path></symbol><symbol id="icon-xiaoxizhongxin" viewBox="0 0 1024 1024"><path d="M585.6 905.6 585.6 905.6c25.6-32 38.4-44.8 41.6-44.8 208-38.4 345.6-198.4 345.6-396.8 3.2-227.2-204.8-406.4-460.8-406.4s-464 179.2-464 406.4c0 198.4 140.8 358.4 345.6 396.8 3.2 0 16 12.8 41.6 44.8l0 0c32 41.6 51.2 64 73.6 64S550.4 947.2 585.6 905.6M620.8 803.2c-19.2 3.2-32 19.2-67.2 64l0 0c-22.4 25.6-41.6 44.8-41.6 44.8l-9.6-9.6c-6.4-6.4-16-19.2-25.6-32-38.4-48-51.2-64-70.4-67.2-185.6-32-307.2-172.8-307.2-345.6 0-192 185.6-352 416-352s416 160 416 352C928 633.6 806.4 771.2 620.8 803.2z"  ></path><path d="M281.6 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path><path d="M467.2 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path><path d="M652.8 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path></symbol><symbol id="icon-kefu3" viewBox="0 0 1024 1024"><path d="M511.609097 961.619254"  ></path><path d="M361.448122 558.582945c0 0 0 137.076982 150.928455 137.076982 150.948921 0 150.948921-137.076982 150.948921-137.076982S518.378268 691.085748 361.448122 558.582945L361.448122 558.582945zM361.448122 558.582945"  ></path><path d="M789.335423 502.729869c0-152.953577-124.006292-276.954753-276.959869-276.954753-152.97916 0-276.980335 124.001175-276.980335 276.954753 0 74.937736 29.79049 142.776797 78.042447 192.679347 21.945825 19.736507 45.876863 37.160341 72.217788 50.867528 14.319124 7.411807 30.125111 14.905478 46.695508 21.683858 25.333992 7.581676 52.197826 11.765975 80.025615 11.765975C665.329131 779.726577 789.335423 655.718239 789.335423 502.729869L789.335423 502.729869zM512.376577 738.175229c-129.999796 0-235.431034-105.430214-235.431034-235.44536 0-130.004913 105.436354-235.379868 235.431034-235.379868 130.010029 0 235.410568 105.374956 235.410568 235.379868C747.786121 632.745015 642.386606 738.175229 512.376577 738.175229L512.376577 738.175229zM512.376577 738.175229"  ></path><path d="M864.868723 415.811264c-38.969547-158.483524-182.027753-276.013311-352.49317-276.013311-170.413228 0-313.358871 117.396757-352.411305 275.788184 0 0-97.768721 15.449877-93.446275 113.787556 4.332678 98.308003 107.436918 104.285135 107.436918 104.285135 1.243317 3.14462 22.917966-3.062755 30.699186-4.378727-16.066931-38.990013-25.004487-81.712023-25.004487-126.551254 0-183.739744 148.98008-332.690148 332.725964-332.690148 183.739744 0 332.690148 148.950404 332.690148 332.690148 0 146.636708-94.818529 271.044136-226.488361 315.327712-8.470929 2.894933-17.393135-0.939395-17.393135-0.939395s-22.322401-4.179183-50.301639 3.720741c-13.764492 3.946892-19.685341 18.621103-18.857487 31.500435 1.032516 15.331173 6.840802 26.347065 22.865777 28.782533 20.62576 3.232624 49.953715 6.891967 61.023842-15.161305 3.007497-5.983271 6.265704-17.110703 13.308097-19.490913 101.741195-34.590819 183.169763-113.068172 221.799572-212.836433 0 0 102.538351-12.020778 105.544825-106.551758C959.595154 432.578136 864.868723 415.811264 864.868723 415.811264L864.868723 415.811264zM864.868723 415.811264"  ></path></symbol><symbol id="icon-xiangqu" viewBox="0 0 1024 1024"><path d="M512 922.110425c-0.002047 0-0.004093 0-0.00614 0-5.574972-0.002047-10.916631-2.229784-14.84101-6.186909L370.833887 788.530081c-1.613754-1.622964-164.173107-165.007101-187.469696-188.304713C114.596991 531.459191 74.209142 454.2886 66.567092 377.057635c-7.609305-76.902484 18.981307-150.036132 74.874291-205.929116 54.793954-54.79293 121.562637-77.752852 193.072297-66.412572 59.33027 9.41237 120.361275 42.176588 177.48632 95.104031 57.122999-52.92642 118.155027-85.690638 177.485297-95.104031 71.513754-11.351536 138.279367 11.616572 193.072297 66.412572 55.891961 55.892985 82.482573 129.026632 74.874291 205.929116-7.643074 77.230965-48.0299 154.400532-116.7971 223.167732-50.870598 50.868551-311.172065 313.063135-313.795822 315.705312C522.914584 919.886781 517.572926 922.110425 512 922.110425zM298.928207 143.679353c-47.080272 0-89.998757 19.104103-127.914298 57.020668-47.547923 47.547923-69.27476 107.107413-62.829977 172.238806 6.67912 67.496254 42.902112 135.863341 104.751762 197.714014 23.334451 23.334451 185.92962 186.758498 187.568956 188.406021l111.505583 112.451118c56.269561-56.671721 255.224846-257.029958 299.05305-300.858162 61.850673-61.850673 98.073666-130.216737 104.750739-197.714014 6.446829-65.131393-15.280008-124.690884-62.828954-172.238806-45.573965-45.574988-98.377588-63.974034-156.947542-54.680367-55.707766 8.838296-114.234741 42.590004-169.251775 97.609085-3.922333 3.921309-9.240455 6.125511-14.785751 6.125511s-10.863419-2.203178-14.785751-6.124488c-55.020104-55.020104-113.546056-88.772836-169.252799-97.610108C318.119291 144.458089 308.437791 143.679353 298.928207 143.679353z"  ></path></symbol><symbol id="icon-shijian" viewBox="0 0 1024 1024"><path d="M827.871087 196.128913C743.498468 111.756293 631.321596 65.290005 512 65.290005c-119.319549 0-231.499491 46.465265-315.871087 130.837884S65.290005 392.680451 65.290005 512s46.465265 231.499491 130.837884 315.871087 196.551538 130.837884 315.871087 130.837884c119.321596 0 231.499491-46.465265 315.871087-130.837884S958.708971 631.319549 958.708971 512 912.243707 280.500509 827.871087 196.128913zM531.556405 917.246651l0-74.145697c0-11.31572-9.174963-20.491707-20.491707-20.491707-11.316743 0-20.491707 9.174963-20.491707 20.491707l0 74.059739C283.276738 906.322857 116.693746 739.164766 106.755396 531.634176l72.351841 0c11.31572 0 20.491707-9.174963 20.491707-20.491707 0-11.31572-9.174963-20.491707-20.491707-20.491707l-72.273047 0c10.769274-206.737528 177.01253-373.005342 383.740848-383.813502l0 72.346725c0 11.316743 9.174963 20.491707 20.491707 20.491707 11.31572 0 20.491707-9.17394 20.491707-20.491707L531.558451 106.752326c207.593012 9.901511 374.807385 176.539762 385.609405 383.89946l-74.142627 0c-11.316743 0-20.491707 9.174963-20.491707 20.491707 0 11.316743 9.174963 20.491707 20.491707 20.491707l74.220399 0C907.275555 739.78796 739.720422 907.317511 531.556405 917.246651z"  ></path><path d="M532.098757 503.118726 532.098757 258.240529c0-11.316743-9.174963-20.491707-20.491707-20.491707-11.31572 0-20.491707 9.17394-20.491707 20.491707l0 254.66612c0 7.858992 4.429893 14.677281 10.924817 18.114566L693.447539 722.42757c4.002151 4.000104 9.245572 6.001691 14.490016 6.001691s10.487865-2.001587 14.490016-6.001691c8.002254-8.002254 8.002254-20.977777 0-28.980032L532.098757 503.118726z"  ></path></symbol><symbol id="icon-shoucang" viewBox="0 0 1024 1024"><path d="M248.482281 938.000324c-4.306072 0-8.592702-1.336438-12.211113-3.967358-6.395664-4.646833-9.600659-12.521175-8.264221-20.314675l48.430012-282.363949L71.288626 431.382914c-5.66093-5.519714-7.698333-13.772678-5.255701-21.291932 2.444679-7.519254 8.943696-13.000082 16.768919-14.137998l283.508006-41.195238L493.099535 97.853655c3.498684-7.089465 10.720156-11.577686 18.627243-11.577686 7.907087 0 15.127536 4.489244 18.627243 11.577686l126.788661 256.904091 283.510052 41.195238c7.823176 1.137916 14.322194 6.618744 16.766872 14.137998 2.442632 7.519254 0.405229 15.773242-5.255701 21.291932L747.012502 631.354342l48.430012 282.363949c1.336438 7.7935-1.868557 15.667841-8.264221 20.314675-6.399757 4.646833-14.878872 5.257747-21.874193 1.582031L511.726777 802.298666 258.146385 935.614997C255.107165 937.211355 251.789607 938.000324 248.482281 938.000324zM130.422422 431.011454 313.25654 609.228415c4.894474 4.7727 7.128351 11.647271 5.974062 18.385742l-43.163055 251.64532 225.994104-118.811989c6.048763-3.180436 13.282514-3.180436 19.331277 0l225.992057 118.811989-43.163055-251.64532c-1.154289-6.738471 1.079588-13.613042 5.974062-18.385742l182.833095-178.216961-252.665557-36.71418c-6.767124-0.983397-12.614296-5.233188-15.641235-11.362792L511.726777 153.97893 398.729214 382.934482c-3.025916 6.129604-8.874111 10.379395-15.639189 11.362792L130.422422 431.011454z"  ></path></symbol><symbol id="icon-zan" viewBox="0 0 1024 1024"><path d="M841.900615 408.186609 664.015206 408.186609c-4.087085 0-7.605212-1.823532-9.635451-4.979408-2.044566-3.188622-2.387373-6.788613-0.932232-10.313903 10.105149-19.105127 57.494459-115.41052 44.899606-217.797421-3.51915-28.749788-18.948561-67.455321-72.482825-88.576361-13.886265-5.465478-39.682791-8.026814-59.192124-8.601912-46.860261-1.38044-56.329936 7.693216-60.373019 11.568477-0.164752 0.155543-0.324388 0.316202-0.484024 0.476861C490.730581 105.371886 491.958548 127.455857 493.514997 155.415652c0.795109 14.287401 1.694595 30.466895 0.857531 48.953945-4.579295 49.570999-11.171434 76.334549-24.283056 98.636484-40.689724 69.270666-109.423155 104.141872-122.656551 105.213273l-96.509031 0L86.587054 408.219355c-11.761881 0-21.296025 9.534144-21.296025 21.296025L65.291029 844.261383c0 11.760858 9.534144 21.296025 21.296025 21.296025l164.337859 0c0.858554 0 1.700735-0.065492 2.533706-0.164752l104.601336 0c1.191128 0.969071 2.534729 2.081405 3.739161 3.082198 22.952758 19.025309 83.921341 69.563332 184.571692 69.563332l209.634508 0c53.634548 0 96.863095-29.224602 112.819508-76.270081 0.13917-0.409322 0.26606-0.823761 0.38067-1.24127 2.246157-8.247848 8.025791-25.420973 15.344476-47.162136 27.735691-82.408895 74.159-220.339314 74.159-294.15653C958.708971 446.576965 918.317029 408.186609 841.900615 408.186609zM107.883079 450.812429l121.744785 0 0 372.152928L107.883079 822.965357 107.883079 450.812429zM844.182588 799.778262c-7.649214 22.723537-13.225209 39.289841-15.882736 48.862871-10.205433 29.319769-37.183877 46.803979-72.293513 46.803979l-209.634508 0c-85.292572 0-135.816269-41.879829-157.38961-59.763129-9.691733-8.03193-15.541975-12.881378-24.845874-12.881378l-91.914386 0L272.221962 450.812429l75.364455 0c20.070104 0 51.52142-17.555841 74.262354-33.985022 24.394596-17.623379 58.936297-47.932686 84.96409-92.242867 19.039635-32.386618 25.602098-68.703755 30.019711-116.802216 0.029676-0.317225 0.051165-0.63445 0.066515-0.952698 0.975211-20.862143-0.039909-39.114856-0.855484-53.780881-0.63445-11.403724-1.402953-25.209148-0.179079-31.395034 15.941064-3.081175 61.369719-0.632403 74.387197 4.490268 27.712155 10.934027 42.701544 28.639271 45.822628 54.138014 11.341303 92.193749-35.07689 182.903703-40.407292 192.944384-0.493234 0.932232-0.74906 1.486864-0.74906 1.486864-7.703449 16.70138-6.353708 35.947723 3.624551 51.509141 9.889231 15.376199 26.888394 24.556279 45.473681 24.556279l177.88541 0c52.712549 0 74.215282 19.825534 74.215282 68.429509C916.115897 586.05053 869.322152 725.084073 844.182588 799.778262z"  ></path></symbol><symbol id="icon-listview" viewBox="0 0 1024 1024"><path d="M599.061868 216.612433 936.943248 216.612433c11.447726 0 20.729114-9.281387 20.729114-20.729114 0-11.447726-9.281387-20.729114-20.729114-20.729114L599.061868 175.154205c-11.447726 0-20.729114 9.281387-20.729114 20.729114C578.332754 207.330022 587.614142 216.612433 599.061868 216.612433z"  ></path><path d="M936.943248 332.694241 599.061868 332.694241c-11.447726 0-20.729114 9.281387-20.729114 20.729114 0 11.447726 9.281387 20.729114 20.729114 20.729114L936.943248 374.152469c11.447726 0 20.729114-9.281387 20.729114-20.729114C957.672362 341.975629 948.390975 332.694241 936.943248 332.694241z"  ></path><path d="M366.897228 65.290005 180.336228 65.290005c-62.966077 0-114.009613 51.043536-114.009613 114.009613l0 186.561c0 62.966077 51.043536 114.009613 114.009613 114.009613l186.561 0c62.966077 0 114.009613-51.043536 114.009613-114.009613L480.906841 179.299619C480.906841 116.334565 429.862281 65.290005 366.897228 65.290005zM439.448614 365.860619c0 40.068578-32.482809 72.551386-72.551386 72.551386L180.336228 438.412005c-40.068578 0-72.551386-32.482809-72.551386-72.551386L107.784842 179.299619c0-40.068578 32.482809-72.551386 72.551386-72.551386l186.561 0c40.068578 0 72.551386 32.482809 72.551386 72.551386L439.448614 365.860619z"  ></path><path d="M936.943248 653.992945 599.061868 653.992945c-11.447726 0-20.729114 9.281387-20.729114 20.729114s9.281387 20.729114 20.729114 20.729114L936.943248 695.451172c11.447726 0 20.729114-9.281387 20.729114-20.729114S948.390975 653.992945 936.943248 653.992945z"  ></path><path d="M936.943248 811.534004 599.061868 811.534004c-11.447726 0-20.729114 9.281387-20.729114 20.729114s9.281387 20.729114 20.729114 20.729114L936.943248 852.992231c11.447726 0 20.729114-9.281387 20.729114-20.729114S948.390975 811.534004 936.943248 811.534004z"  ></path><path d="M366.897228 544.129768 180.336228 544.129768c-62.966077 0-114.009613 51.043536-114.009613 114.009613l0 186.561c0 62.966077 51.043536 114.009613 114.009613 114.009613l186.561 0c62.966077 0 114.009613-51.043536 114.009613-114.009613L480.906841 658.139381C480.906841 595.173304 429.862281 544.129768 366.897228 544.129768zM439.448614 844.699358c0 40.068578-32.482809 72.551386-72.551386 72.551386L180.336228 917.250744c-40.068578 0-72.551386-32.482809-72.551386-72.551386L107.784842 658.139381c0-40.068578 32.482809-72.551386 72.551386-72.551386l186.561 0c40.068578 0 72.551386 32.482809 72.551386 72.551386L439.448614 844.699358z"  ></path></symbol><symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M841.71335 65.290005 182.285626 65.290005c-64.511269 0-116.995621 52.484352-116.995621 116.995621L65.290005 841.71335c0 64.511269 52.484352 116.995621 116.995621 116.995621l659.427724 0c64.511269 0 116.995621-52.484352 116.995621-116.995621L958.708971 182.285626C958.708971 117.774357 906.225643 65.290005 841.71335 65.290005zM182.285626 107.833961l659.427724 0c41.051975 0 74.451666 33.398668 74.451666 74.451666l0 136.557142c-150.09446 5.26184-290.370297 66.084091-396.978337 172.692131-49.960879 49.961902-89.841168 107.331517-118.694309 169.625282-83.496669-70.835302-204.372667-75.376735-292.65841-13.617136L107.833961 182.285626C107.833961 141.232628 141.232628 107.833961 182.285626 107.833961zM107.833961 841.71335 107.833961 702.627618c76.54228-74.311473 198.833511-74.234725 275.272437 0.24457-24.303522 65.298192-37.026288 135.112234-37.026288 206.91149 0 2.223644 0.343831 4.366448 0.977257 6.381337L182.285626 916.165016C141.232628 916.165016 107.833961 882.766348 107.833961 841.71335zM841.71335 916.165016 387.646807 916.165016c0.633427-2.01489 0.977257-4.157693 0.977257-6.381337 0-146.71755 57.053414-284.572244 160.647817-388.166647 98.570993-98.570993 228.166583-154.963351 366.894158-160.204725L916.166039 841.71335C916.165016 882.766348 882.766348 916.165016 841.71335 916.165016z"  ></path><path d="M312.397986 413.458683c60.8376 0 110.332874-49.494251 110.332874-110.332874s-49.494251-110.332874-110.332874-110.332874-110.332874 49.494251-110.332874 110.332874S251.559363 413.458683 312.397986 413.458683zM312.397986 235.337913c37.378306 0 67.788919 30.40959 67.788919 67.788919s-30.40959 67.788919-67.788919 67.788919-67.788919-30.40959-67.788919-67.788919S275.018657 235.337913 312.397986 235.337913z"  ></path></symbol><symbol id="icon-shengqian" viewBox="0 0 1024 1024"><path d="M590.516238 958.230064c-0.014326 0-0.024559 0-0.039909 0-30.280654-0.004093-58.734706-11.802814-80.115666-33.223682L97.149621 511.812735c-23.415292-23.409153-35.394115-55.776328-32.865525-88.800465l18.324344-238.008742c4.176113-54.28844 49.981345-100.088556 104.278995-104.266715l237.975996-18.299785c33.012881-2.543939 65.396429 9.42465 88.815815 32.846082l413.222299 413.226393c44.171012 44.180222 44.173059 116.062366 0.004093 160.237471L670.602228 925.050384C649.202848 946.44567 620.759029 958.228017 590.516238 958.230064zM433.597349 104.801904c-1.814322 0-3.63069 0.068562-5.455245 0.209778l-237.980089 18.300808c-33.270754 2.559289-62.420655 31.704073-64.97892 64.968687l0 0.001023L106.857726 426.28071c-1.574868 20.575618 5.89015 40.748053 20.482497 55.336306l413.226393 413.21002c13.328563 13.352099 31.05325 20.699438 49.92097 20.703531 0.008186 0 0.016373 0 0.024559 0 18.670222 0 36.235272-7.205099 49.525973-20.305465l0.384763-0.385786L896.711965 638.556371c27.522844-27.526937 27.520797-72.322166-0.004093-99.853196L483.485573 125.475759C470.186685 112.176872 452.250174 104.801904 433.597349 104.801904z"  ></path><path d="M349.566514 458.025715c-64.682161 0-117.303636-52.621475-117.303636-117.303636s52.621475-117.303636 117.303636-117.303636 117.303636 52.621475 117.303636 117.303636S414.247652 458.025715 349.566514 458.025715zM349.566514 266.11794c-41.136909 0-74.604138 33.467229-74.604138 74.604138s33.467229 74.604138 74.604138 74.604138 74.604138-33.467229 74.604138-74.604138S390.7024 266.11794 349.566514 266.11794z"  ></path></symbol><symbol id="icon-xitongfanhui" viewBox="0 0 1024 1024"><path d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z"  ></path></symbol><symbol id="icon-zonghe" viewBox="0 0 1024 1024"><path d="M483.882616 483.757772 184.580902 483.757772c-60.681034 0-110.049418-49.367361-110.049418-110.049418L74.531484 184.456059c0-60.681034 49.367361-110.049418 110.049418-110.049418l189.252295 0c60.681034 0 110.049418 49.367361 110.049418 110.049418L483.882616 483.757772zM184.580902 114.424052c-38.614459 0-70.030983 31.416524-70.030983 70.030983l0 189.253318c0 38.614459 31.416524 70.030983 70.030983 70.030983l259.283278 0L443.86418 184.456059c0-38.614459-31.416524-70.030983-70.030983-70.030983L184.580902 114.425076z"  ></path><path d="M840.875263 483.757772 539.619034 483.757772 539.619034 184.456059c0-60.681034 49.367361-110.049418 110.049418-110.049418L840.875263 74.40664c60.681034 0 110.049418 49.367361 110.049418 110.049418l0 189.253318C950.924681 434.390411 901.556297 483.757772 840.875263 483.757772zM579.636446 443.74036 840.875263 443.74036c38.614459 0 70.030983-31.416524 70.030983-70.030983L910.906246 184.456059c0-38.614459-31.416524-70.030983-70.030983-70.030983L649.667429 114.425076c-38.615483 0-70.030983 31.416524-70.030983 70.030983L579.636446 443.74036z"  ></path><path d="M373.83422 950.798814 184.580902 950.798814c-60.681034 0-110.049418-49.367361-110.049418-110.049418L74.531484 649.541563c0-60.681034 49.367361-110.049418 110.049418-110.049418l299.301713 0 0 301.257252C483.882616 901.43043 434.515255 950.798814 373.83422 950.798814zM184.580902 579.509557c-38.614459 0-70.030983 31.416524-70.030983 70.030983l0 191.208856c0 38.614459 31.416524 70.030983 70.030983 70.030983l189.252295 0c38.614459 0 70.030983-31.416524 70.030983-70.030983l0-261.239839L184.580902 579.509557z"  ></path><path d="M840.875263 950.798814 649.667429 950.798814c-60.681034 0-110.049418-49.367361-110.049418-110.049418L539.618011 539.492144 840.875263 539.492144c60.681034 0 110.049418 49.367361 110.049418 110.049418l0 191.208856C950.924681 901.43043 901.556297 950.798814 840.875263 950.798814zM579.636446 579.509557l0 261.239839c0 38.614459 31.4155 70.030983 70.030983 70.030983L840.875263 910.780379c38.614459 0 70.030983-31.416524 70.030983-70.030983L910.906246 649.541563c0-38.614459-31.416524-70.030983-70.030983-70.030983L579.636446 579.51058z"  ></path></symbol><symbol id="icon-radiobutton2" viewBox="0 0 1024 1024"><path d="M412.780231 735.831858 235.097436 558.081525l66.63156-66.657142 111.052259 111.095237 310.945915-311.064618 66.63156 66.657142L412.780231 735.831858z"  ></path></symbol><symbol id="icon-xitongcaidan1" viewBox="0 0 1024 1024"><path d="M939.880137 299.43679 83.552951 299.43679c-16.57449 0-30.011524-13.101389-30.011524-29.67588s13.437034-29.67588 30.011524-29.67588L939.880137 240.08503c16.57449 0 30.011524 13.101389 30.011524 29.67588S956.454628 299.43679 939.880137 299.43679z"  ></path><path d="M785.821389 546.053584 83.552951 546.053584c-16.57449 0-30.011524-13.613042-30.011524-30.187533s13.437034-30.187533 30.011524-30.187533L785.821389 485.678518c16.57449 0 30.011524 13.613042 30.011524 30.187533S802.39588 546.053584 785.821389 546.053584z"  ></path><path d="M939.880137 791.647071 83.552951 791.647071c-16.57449 0-30.011524-13.101389-30.011524-29.67588s13.437034-29.67588 30.011524-29.67588L939.880137 732.295312c16.57449 0 30.011524 13.101389 30.011524 29.67588S956.454628 791.647071 939.880137 791.647071z"  ></path></symbol><symbol id="icon-roundclose" viewBox="0 0 1024 1024"><path d="M829.653687 196.040908C745.000682 111.387903 632.446209 64.766073 512.728594 64.766073c-119.719662 0-232.272088 46.62183-316.926116 131.274836C111.149473 280.694937 64.527642 393.247362 64.527642 512.967024c0 119.717615 46.62183 232.272088 131.274836 316.925093 84.654029 84.655052 197.207477 131.274836 316.926116 131.274836 119.717615 0 232.272088-46.620807 316.925093-131.274836 84.655052-84.653005 131.275859-197.207477 131.275859-316.925093C960.928522 393.247362 914.308739 280.694937 829.653687 196.040908zM512.728594 921.148517c-225.073128 0-408.18354-183.109388-408.18354-408.182516 0-225.072105 183.110411-408.182516 408.18354-408.182516s408.182516 183.110411 408.182516 408.182516C920.91111 738.039129 737.801722 921.148517 512.728594 921.148517z"  ></path><path d="M541.025057 515.993964l225.347374-225.347374c7.813966-7.813966 7.813966-20.48352 0-28.297486-7.816013-7.813966-20.481474-7.813966-28.297486 0L512.727571 487.696478 287.380196 262.349103c-7.813966-7.813966-20.48352-7.813966-28.297486 0-7.812943 7.813966-7.812943 20.48352 0 28.297486l225.347374 225.347374L257.860882 742.563166c-7.812943 7.813966-7.812943 20.48352 0 28.297486 3.906983 3.90596 9.028631 5.860475 14.149255 5.860475 5.120624 0 10.242272-1.954515 14.149255-5.860475l226.569202-226.569202 226.569202 226.569202c3.908006 3.90596 9.027607 5.860475 14.149255 5.860475 5.121648 0 10.241248-1.954515 14.149255-5.860475 7.813966-7.813966 7.813966-20.48352 0-28.297486L541.025057 515.993964z"  ></path></symbol><symbol id="icon-yidong" viewBox="0 0 1024 1024"><path d="M930.433998 400.141376 93.566002 400.141376c-15.954367 0-29.006637-13.053294-29.006637-29.006637l0-3.00238c0-15.954367 13.053294-29.006637 29.006637-29.006637l836.867995 0c15.954367 0 29.006637 13.053294 29.006637 29.006637l0 3.00238C959.440635 387.088082 946.387341 400.141376 930.433998 400.141376z"  ></path><path d="M930.433998 542.507828 93.566002 542.507828c-15.954367 0-29.006637-13.053294-29.006637-29.006637l0-3.00238c0-15.954367 13.053294-29.006637 29.006637-29.006637l836.867995 0c15.954367 0 29.006637 13.053294 29.006637 29.006637l0 3.00238C959.440635 529.454534 946.387341 542.507828 930.433998 542.507828z"  ></path><path d="M930.433998 684.876326 93.566002 684.876326c-15.954367 0-29.006637-13.053294-29.006637-29.006637l0-3.00238c0-15.954367 13.053294-29.006637 29.006637-29.006637l836.867995 0c15.954367 0 29.006637 13.053294 29.006637 29.006637l0 3.00238C959.440635 671.823032 946.387341 684.876326 930.433998 684.876326z"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M700.371228 394.525472 174.028569 394.525472l255.952416-227.506551c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.506619-42.367947-2.492774L76.425623 400.975371c-6.960529 5.496178-11.434423 14.003945-11.434423 23.561625 0 0.013303 0.001023 0.026606 0.001023 0.039909 0 0.01228-0.001023 0.025583-0.001023 0.037862 0 0.473791 0.01535 0.946558 0.037862 1.418302 0.001023 0.016373 0.001023 0.032746 0.001023 0.049119 0.39295 8.030907 3.992941 15.595186 10.034541 20.962427l315.040163 280.028764c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947l-256.128425-227.665163 526.518668 0c109.219517 0 198.075241 88.855724 198.075241 198.075241s-88.855724 198.075241-198.075241 198.075241L354.324888 850.696955c-16.57449 0-30.011524 13.437034-30.011524 30.011524s13.437034 30.011524 30.011524 30.011524l346.046341 0c142.31631 0 258.098289-115.783003 258.098289-258.098289S842.686515 394.525472 700.371228 394.525472z"  ></path></symbol><symbol id="icon-shanchuguanbicha2" viewBox="0 0 1024 1024"><path d="M544 64C279.04 64 64 279.04 64 544S279.04 1024 544 1024c264.96 0 480-215.04 480-480S808.96 64 544 64zM759.04 758.4c-12.8 12.8-33.28 12.8-45.44 0L542.08 585.6l-174.08 172.16c-12.8 12.8-33.28 12.8-46.08 0-12.8-12.8-12.8-33.28 0-45.44l174.72-172.8L331.52 374.4c-12.8-12.8-12.8-33.28 0-45.44 12.8-12.8 33.28-12.8 45.44 0l165.12 165.76 167.68-165.76c12.8-12.8 33.28-12.8 46.08 0 12.8 12.8 12.8 33.28 0 45.44l-168.32 166.4 170.88 172.16C771.2 725.12 771.2 745.6 759.04 758.4z"  ></path></symbol><symbol id="icon-h5" viewBox="0 0 1024 1024"><path d="M512 0 33.870769 0l92.553846 922.308923L512 1024l385.575385-101.691077L990.129231 0 512 0 512 0zM803.682462 306.963692 349.105231 306.963692l7.561846 107.047385 431.852308 0-30.326154 349.617231-250.052923 64.236308-242.412308-64.236308-15.163077-178.372923 121.225846 0 7.561846 85.622154 128.787692 35.682462 136.388923-35.682462 7.561846-142.690462L243.042462 528.187077l-30.326154-335.36 598.528 0L803.682462 306.963692z"  ></path></symbol><symbol id="icon-yanjing" viewBox="0 0 1024 1024"><path d="M510.714216 398.827451c-61.759599 0-111.937418 50.170656-111.937418 111.929232 0 61.759599 50.177819 111.87909 111.937418 111.87909 61.759599 0 111.930255-50.120514 111.930255-111.87909C622.644471 448.999131 572.473815 398.827451 510.714216 398.827451L510.714216 398.827451zM510.714216 398.827451"  ></path><path d="M946.86369 476.649887c-98.087992-127.565351-218.727607-245.61907-435.876252-245.721401l-0.062422 0c0-0.059352-0.159636-0.059352-0.220011 0l-0.273223 0c-217.138412 0.110517-337.790306 118.164237-435.869089 245.721401-15.440667 20.113083-15.440667 48.095391 0 68.207451 98.078783 127.566374 218.730677 245.61907 435.877275 245.730611l1.153266 0c0.24764-0.060375 0.487094-0.060375 0.734734 0 216.277812-0.588401 336.645227-118.437459 434.543907-245.730611C962.295148 524.745279 962.295148 496.761947 946.86369 476.649887L946.86369 476.649887zM510.875898 678.656671l-0.330528 0c-92.479251-0.110517-167.739329-75.422783-167.739329-167.899988 0-92.475158 75.260078-167.787424 167.739329-167.898965l0.330528 0c92.476181 0.110517 167.729096 75.423807 167.729096 167.898965C678.604994 603.233887 603.352079 678.546154 510.875898 678.656671L510.875898 678.656671zM510.875898 678.656671"  ></path></symbol><symbol id="icon-zanting" viewBox="0 0 1024 1024"><path d="M510.656399 951.754582c-59.677171 0-117.584022-11.694343-172.108846-34.756595-52.653197-22.270213-99.93506-54.147224-140.532687-94.744851-40.597627-40.596604-72.474638-87.87949-94.744851-140.531664C80.207763 627.195625 68.514443 569.288774 68.514443 509.611603s11.69332-117.584022 34.755572-172.10987c22.270213-52.653197 54.147224-99.93506 94.744851-140.532687 40.596604-40.597627 87.878466-72.473615 140.532687-94.743828 54.525847-23.063275 112.431675-34.756595 172.108846-34.756595 59.619866 0 117.474528 11.67183 171.95535 34.691103 13.014408 5.499248 19.107173 20.50808 13.607926 33.522488-5.499248 13.015432-20.50501 19.108197-33.522488 13.608949-48.145533-20.342304-99.298564-30.65723-152.040788-30.65723-215.585033 0-390.976646 175.391612-390.976646 390.977669s175.391612 390.977669 390.976646 390.977669c215.586057 0 390.977669-175.391612 390.977669-390.977669 0-82.789565-25.544793-161.894204-73.871451-228.761124-8.276501-11.450796-5.702885-27.443026 5.747911-35.719526 11.450796-8.274454 27.443026-5.702885 35.719526 5.748934 54.67218 75.643817 83.569324 165.112502 83.569324 258.731716 0 59.677171-11.694343 117.584022-34.756595 172.10987-22.270213 52.652174-54.147224 99.93506-94.743828 140.531664-40.597627 40.597627-87.880513 72.474638-140.532687 94.744851C628.241444 940.061262 570.334593 951.754582 510.656399 951.754582z"  ></path><path d="M425.018973 719.560266c-16.954137 0-30.699186-13.745049-30.699186-30.699186l0-366.343619c0-16.954137 13.745049-30.699186 30.699186-30.699186s30.699186 13.745049 30.699186 30.699186l0 366.343619C455.718159 705.815217 441.97311 719.560266 425.018973 719.560266z"  ></path><path d="M598.981027 719.560266c-16.954137 0-30.699186-13.745049-30.699186-30.699186l0-366.343619c0-16.954137 13.745049-30.699186 30.699186-30.699186s30.699186 13.745049 30.699186 30.699186l0 366.343619C629.680213 705.815217 615.935164 719.560266 598.981027 719.560266z"  ></path></symbol><symbol id="icon-yuan3" viewBox="0 0 1024 1024"><path d="M512 56.32c-233.472 0-422.7072 189.2352-422.7072 422.7072 0 233.472 189.2352 422.7072 422.7072 422.7072s422.7072-189.2352 422.7072-422.7072C934.7072 245.5552 745.472 56.32 512 56.32zM512 863.8464c-212.5824 0-384.8192-172.2368-384.8192-384.8192S299.4176 94.208 512 94.208s384.8192 172.2368 384.8192 384.8192S724.5824 863.8464 512 863.8464z"  ></path><path d="M512 479.0272m-239.8208 0a117.1 117.1 0 1 0 479.6416 0 117.1 117.1 0 1 0-479.6416 0Z"  ></path></symbol><symbol id="icon-circleyuanquan" viewBox="0 0 1024 1024"><path d="M150.1184 150.1184C250.2656 50.0736 370.8928 0 512 0c141.1072 0 261.7344 50.0736 361.8816 150.1184C973.9264 250.2656 1024 370.8928 1024 512c0 141.2096-50.0736 261.8368-150.1184 361.8816C773.7344 973.9264 653.1072 1024 512 1024c-141.1072 0-261.7344-50.0736-361.8816-150.1184C50.0736 773.8368 0 653.2096 0 512 0 370.8928 50.0736 250.2656 150.1184 150.1184zM512 41.8816c-85.2992 0-164.1472 20.8896-236.3392 62.7712C203.4688 146.432 146.432 203.4688 104.6528 275.6608 62.7712 347.9552 41.8816 426.7008 41.8816 512c0 129.6384 45.9776 240.4352 137.8304 332.288C271.5648 936.2432 382.3616 982.1184 512 982.1184c129.6384 0 240.4352-45.8752 332.288-137.8304C936.2432 752.4352 982.1184 641.6384 982.1184 512c0-129.6384-45.9776-240.3328-137.8304-332.288C752.4352 87.7568 641.6384 41.8816 512 41.8816zM512 256c-36.1472 0-70.144 7.0656-102.1952 20.8896C377.856 290.9184 349.4912 309.3504 324.9152 332.288c-22.9376 24.576-41.472 52.9408-55.3984 84.8896S248.6272 483.328 248.6272 519.3728c0 36.1472 6.9632 70.144 20.8896 102.1952s32.4608 60.3136 55.3984 84.8896C349.4912 729.4976 377.856 747.9296 409.8048 761.856 441.856 775.7824 475.8528 782.7456 512 782.7456c36.1472 0 70.144-6.9632 102.1952-20.8896C646.144 747.9296 674.5088 729.4976 699.0848 706.4576c22.9376-24.576 41.472-52.9408 55.3984-84.8896s20.8896-66.048 20.8896-102.1952c0-36.0448-6.9632-70.144-20.8896-102.1952S722.0224 356.9664 699.0848 332.288C674.5088 309.3504 646.144 290.9184 614.1952 276.8896 582.144 263.0656 548.1472 256 512 256z"  ></path></symbol><symbol id="icon-suo" viewBox="0 0 1024 1024"><path d="M803.19473 439.519198l-64.265028 0 0-149.461865c0-125.171734-101.735224-226.960121-226.90236-226.960121-125.171734 0-227.019081 101.788587-227.019081 226.960121l0 149.461865-64.210665 0c-30.961208 0-56.053796 25.089989-56.053796 56.053796l0 409.214353c0 31.019169 25.093587 56.112756 56.053796 56.112756l582.455095 0c30.965805 0 56.000632-25.093587 56.000632-56.112756L859.253322 495.572994c-0.004597-30.965805-25.08899-56.053796-56.059392-56.053796L803.19473 439.519198zM543.5048 710.844839l0 89.358615c0 3.991494-3.30316 7.358211-7.357412 7.358211l-48.184931 0c-4.103618 0-7.411575-3.366717-7.411575-7.358211l0-89.358615c-22.637852-11.576951-38.317621-34.785216-38.317621-61.988772 0-38.488705 31.248214-69.795878 69.741515-69.795878 38.546665 0 69.799676 31.306174 69.799676 69.795878 0.053364 27.203556-15.626405 50.411621-38.268854 61.988772L543.5048 710.844839zM651.85214 439.519198 372.199145 439.519198l0-145.758376c0-77.098927 62.782633-139.88256 139.88156-139.88256s139.770236 62.783633 139.770236 139.88256l0 145.758576L651.85214 439.519198z"  ></path></symbol><symbol id="icon-iconshanchu62" viewBox="0 0 1024 1024"><path d="M572.004352 717.83936 572.004352 408.064c0-36.100096 56.395776-36.100096 56.395776 0l0 309.77536C628.400128 753.942528 572.004352 753.942528 572.004352 717.83936L572.004352 717.83936 572.004352 717.83936 572.004352 717.83936zM402.760704 717.83936 402.760704 408.064c0-36.100096 56.423424-36.100096 56.423424 0l0 309.77536C459.185152 753.942528 402.760704 753.942528 402.760704 717.83936L402.760704 717.83936 402.760704 717.83936 402.760704 717.83936zM851.545088 267.251712 741.246976 267.251712l0-56.3456c0-46.646272-37.926912-84.467712-83.74784-84.467712L374.560768 126.4384c-46.718976 0-84.61824 37.82144-84.61824 84.467712l0 56.3456L179.643392 267.251712c-36.153344 0-36.153344 56.2944 0 56.2944l671.901696 0C887.671808 323.546112 887.671808 267.251712 851.545088 267.251712L851.545088 267.251712 851.545088 267.251712 851.545088 267.251712zM346.365952 210.911232c0-14.963712 13.213696-28.177408 28.19584-28.177408l282.938368 0c14.98112 0 27.323392 11.44832 27.323392 28.177408l0 56.34048L346.365952 267.251712 346.365952 210.911232 346.365952 210.911232 346.365952 210.911232zM713.022464 914.9696 318.138368 914.9696c-46.697472 0-84.590592-37.815296-84.590592-84.462592L233.547776 408.064c0-16.730112 13.213696-28.173312 28.19584-28.173312 14.98624 0 28.199936 11.4432 28.199936 28.173312l0 422.441984c0 14.930944 13.236224 28.14464 28.19584 28.14464l394.884096 0c14.98112 0 28.223488-13.213696 28.223488-28.14464l0-421.57056c0-36.97152 56.395776-36.97152 56.395776 0l0 421.57056C797.642752 877.154304 759.743488 914.9696 713.022464 914.9696L713.022464 914.9696 713.022464 914.9696zM713.022464 914.9696"  ></path></symbol><symbol id="icon-zan1" viewBox="0 0 1024 1024"><path d="M671.462828 167.247118c-32.806173 0-66.028832 7.509021-96.076172 21.715581-23.285333 11.009751-44.808532 26.093285-63.154365 44.165896-18.34481-18.072611-39.868009-33.157167-63.154365-44.166919-30.046317-14.205537-63.267952-21.714558-96.075149-21.714558-57.969273 0-111.751177 21.913079-151.439084 61.70434-39.673581 39.775912-61.522192 93.670379-61.522192 151.754263 0 141.074016 119.81176 250.671133 301.168224 416.567487l7.324826 6.699586 63.696718 57.263192 12.478196-11.217483 51.102888-45.937239 7.426133-6.792707c181.367721-165.902494 301.18562-275.504728 301.18562-416.582837 0-58.083883-21.848611-111.977327-61.522192-151.754263C783.214005 189.161221 729.432101 167.247118 671.462828 167.247118L671.462828 167.247118z"  ></path></symbol><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M341.134 141.719l-0.777 317.945c0 17.087-13.787 31.101-30.669 31.101h-61.377c-33.941 0-61.377 27.847-61.377 62.186 0 13.876 4.439 26.573 11.955 37.001h0.002l255.795 313.191c30.075 30.489 78.867 30.489 108.948 0l255.795-313.191c7.53-10.432 11.993-23.15 11.993-37.001 0-34.346-27.481-62.186-61.396-62.186h-61.372c-16.866 0-30.669-13.967-30.669-31.101l-0.777-317.945c0-34.037-27.341-61.633-61.093-61.633h-213.806c-33.789 0-61.093 27.583-61.093 61.633v0zM341.134 141.719z"  ></path></symbol><symbol id="icon-pad" viewBox="0 0 1024 1024"><path d="M796.224 64 227.776 64C186.752 64 153.216 97.536 153.216 138.56l0 745.472c0 40.96 33.536 76.032 74.56 76.032l568.512 0c41.024 0 74.56-35.072 74.56-76.032L870.848 138.56C870.784 97.536 837.248 64 796.224 64M504.448 928.704c-24.768 0-44.736-19.968-44.736-44.672 0-24.768 19.968-44.736 44.736-44.736 24.704 0 44.736 19.968 44.736 44.736C549.184 908.672 529.152 928.704 504.448 928.704M817.152 798.912 206.912 798.912 206.912 117.44l610.176 0L817.088 798.912z"  ></path></symbol><symbol id="icon-suo1" viewBox="0 0 1024 1024"><path d="M83.2 435.2l601.6 0c32 0 57.6 25.6 57.6 57.6l0 422.4c0 32-25.6 57.6-57.6 57.6L83.2 972.8c-32 0-57.6-25.6-57.6-57.6L25.6 492.8C25.6 460.8 51.2 435.2 83.2 435.2L83.2 435.2zM352 716.8l0 89.6c0 6.4 6.4 6.4 6.4 6.4l51.2 0c6.4 0 6.4-6.4 6.4-6.4l0-89.6c25.6-12.8 38.4-38.4 38.4-64 0-38.4-32-70.4-70.4-70.4-38.4 0-70.4 32-70.4 70.4C313.6 684.8 326.4 704 352 716.8L352 716.8zM352 716.8"  ></path><path d="M908.8 288c0-76.8-64-147.2-147.2-147.2-76.8 0-147.2 64-147.2 147.2l0 153.6L531.2 441.6 531.2 281.6c0-128 102.4-236.8 236.8-236.8 128 0 236.8 102.4 236.8 236.8l0 153.6-89.6 0L908.8 288 908.8 288zM908.8 288"  ></path></symbol><symbol id="icon-combinedshape" viewBox="0 0 1024 1024"><path d="M499.673012 463.770863C627.748864 463.770863 731.572376 359.947378 731.572376 231.871526 731.572376 103.795674 627.748864 0 499.673012 0 371.59716 0 267.773687 103.795674 267.773687 231.871526 267.773687 359.947378 371.59716 463.770863 499.673012 463.770863ZM499.684162 1012.822725C737.118132 1012.266477 897.484117 1012.294288 904.186918 869.950703 910.889681 727.607118 816.744903 605.816859 744.293717 546.46531 671.842569 487.113766 618.832251 489.811562 618.832251 489.811562L499.684162 489.394377 499.656325 489.394377 380.508236 489.811562C380.508236 489.811562 327.497918 487.113766 255.04677 546.46531 182.595584 605.816859 88.450807 727.607118 95.153569 869.950703 101.884169 1012.294288 262.222355 1012.266477 499.656325 1012.822725L499.684162 1012.822725Z"  ></path></symbol><symbol id="icon-shanchu1" viewBox="0 0 1024 1024"><path d="M457.772 718.3v-324.188c0-18.848-15.337-34.168-34.168-34.168-18.863 0-34.199 15.321-34.199 34.168v324.188c0 18.848 15.337 34.168 34.199 34.168 18.833 0 34.168-15.32 34.168-34.168z"  ></path><path d="M777.342 360.711c-18.863 0-34.199 15.321-34.199 34.168v441.293c0 13.649-11.073 24.752-24.722 24.752h-412.66c-13.649 0-24.722-11.104-24.722-24.752v-442.49c0-18.848-15.337-34.183-34.199-34.183-18.863 0-34.199 15.337-34.199 34.183v442.49c0 51.345 41.775 93.12 93.12 93.12h412.66c51.345 0 93.12-41.775 93.12-93.12v-441.293c-0.001-18.847-15.337-34.168-34.201-34.168z"  ></path><path d="M634.595 718.3v-324.188c0-18.848-15.337-34.168-34.199-34.168-18.833 0-34.168 15.321-34.168 34.168v324.188c0 18.848 15.337 34.168 34.168 34.168 18.863 0 34.199-15.32 34.199-34.168z"  ></path><path d="M895.123 242.070h-142.625v-54.244c0-51.345-41.499-93.12-92.476-93.12h-295.372c-51.345 0-93.12 41.775-93.12 93.12v54.244h-142.625c-18.863 0-34.199 15.321-34.199 34.168s15.337 34.183 34.199 34.183h766.216c18.833 0 34.168-15.337 34.168-34.183s-15.336-34.168-34.168-34.168zM684.101 242.070h-344.201v-54.244c0-13.649 11.104-24.768 24.752-24.768h295.372c13.496 0 24.078 10.873 24.078 24.768v54.244z"  ></path></symbol><symbol id="icon-icon_help" viewBox="0 0 1024 1024"><path d="M603.136 541.184C571.328 561.984 560 602.56 560 624L560 640C560 666.496 538.496 688 512 688 485.504 688 464 666.496 464 640L464 623.712C464.128 575.168 492.832 523.2 528.832 495.104 584.032 452.064 608 436.992 608 384 608 331.008 564.992 288 512 288 459.136 288 416.16 330.848 416 384L416 400C416 426.496 394.496 448 368 448 341.504 448 320 426.496 320 400L320 384C320 278.016 406.048 192 512 192 617.984 192 704 278.016 704 384 704 446.56 684.544 487.904 603.136 541.184M512 832C485.504 832 464 810.496 464 784 464 757.504 485.504 736 512 736 538.496 736 560 757.504 560 784 560 810.496 538.496 832 512 832M512 64C264.736 64 64 264.736 64 512 64 759.264 264.736 960 512 960 759.264 960 960 759.264 960 512 960 264.736 759.264 64 512 64"  ></path></symbol><symbol id="icon-shaixuan" viewBox="0 0 1024 1024"><path d="M947.736082 178.169244 948.146893 178.537635C948.146893 178.537635 762.63227 371.875527 681.631072 455.4722 675.899814 461.386537 664.657213 472.245119 661.559388 479.973499 658.317554 488.04906 658.7172 505.351121 658.7172 514.094248 658.7172 673.978958 660.774605 968.134093 660.774605 968.134093 660.774605 968.134093 661.331655 1001.851845 628.258025 1001.87194 602.635928 1001.886452 601.377819 975.919405 601.377819 968.134093 601.377819 749.162938 601.286279 625.306794 601.246091 505.075386 601.231579 473.124788 598.860487 466.874436 602.222885 455.263445 606.145681 441.735709 629.82536 424.031767 639.935996 414.582 720.70723 339.104424 907.524614 136.618175 907.524614 136.618175L907.392887 136.296671C913.617566 130.809889 917.78484 122.871638 917.78484 113.715466 917.78484 97.083205 904.724849 83.569981 888.601635 83.569981L141.390147 83.569981C125.263586 83.569981 112.179035 97.083205 112.179035 113.715466 112.179035 122.845962 116.375334 130.809889 122.594431 136.296671L122.490613 136.618175C122.490613 136.618175 302.167925 328.875454 384.581286 408.379648 392.720476 416.239757 422.106853 439.821197 427.145986 455.111625 430.152274 464.25105 428.792578 510.19266 428.792578 510.19266L428.792578 735.94666C428.792578 735.94666 424.959089 748.647193 399.632818 748.554537 376.250085 748.468578 371.292447 735.854004 371.292447 735.854004 371.292447 735.854004 368.050612 618.306263 371.301376 509.338665 371.527991 501.84918 369.999731 486.18813 367.751434 479.848468 364.836686 471.637832 354.165649 460.647522 348.125166 455.05469 262.898643 376.24039 81.861637 178.545447 81.861637 178.545447L82.255703 178.171474C65.615628 161.936628 55.153345 139.165646 55.153345 113.722161 55.153345 64.553228 93.748361 24.72243 141.391265 24.72243L888.609452 24.72243C936.252355 24.72243 974.838442 64.553228 974.838442 113.722161 974.83844 139.163417 964.373924 161.928816 947.736082 178.169244L947.736082 178.169244 947.736082 178.169244 947.736082 178.169244 947.736082 178.169244Z"  ></path></symbol><symbol id="icon-yidong1" viewBox="0 0 1025 1024"><path d="M1002.184339 476.072561 836.090938 363.194325C806.971392 343.450633 783.147763 356.042437 783.147763 391.257887L783.115763 448.009 564.815175 448.009 564.815175 240.924236 621.566288 240.924236C656.781741 240.924236 669.373542 217.116608 649.62985 187.981063L536.783613 21.855659C517.007922-7.263886 484.624428-7.263886 464.880736 21.855659L352.0345 187.981063C332.258809 217.100608 344.882612 240.924236 380.066062 240.924236L436.817175 240.924236 436.817175 448.009 240.948236 448.009 240.948236 391.257887C240.948236 356.074437 217.140608 343.450634 188.005063 363.226325L21.879659 476.072561C-7.239886 495.816253-7.239886 528.199747 21.879659 547.975438L188.005063 660.821677C217.124608 680.56537 240.948236 667.973562 240.948236 632.758113L240.948236 576.007 436.849175 576.007 436.849175 783.123763 380.098062 783.123763C344.882612 783.091763 332.290809 806.931392 352.0345 836.066938L464.880737 1002.160339C484.656428 1031.279885 517.039922 1031.279885 536.783614 1002.160339L649.62985 836.066938C669.373542 806.947392 656.781741 783.123763 621.598288 783.123763L564.815175 783.091763 564.815175 576.007 783.147763 576.007 783.147763 632.758113C783.115763 667.973562 806.955392 680.565363 836.090938 660.821677L1002.184339 547.975438C1031.303885 528.199747 1031.303885 495.816253 1002.184339 476.072561L1002.184339 476.072561Z"  ></path></symbol><symbol id="icon-xinxi3" viewBox="0 0 1025 1024"><path d="M512.300999 22.875955c-282.939447 0-511.699001 200.465608-511.699001 447.285126 0 12.641975 0.601999 25.283951 1.805996 37.925926 12.039976 125.817754 83.677837 236.585538 190.231628 311.233392L192.639624 987.278072c0 25.885949 28.293945 41.537919 49.965902 28.293945l173.97766-105.349794c31.303939 4.815991 63.209877 7.825985 95.717813 7.825985 267.889477 0 487.619048-179.997648 509.893004-409.3592 1.203998-12.641975 2.407995-25.283951 2.407995-37.925926C1024 223.341564 794.638448 22.875955 512.300999 22.875955zM255.8495 450.897119c0-17.457966 14.447972-31.905938 31.905938-31.905938l46.955908 0c17.457966 0 31.905938 14.447972 31.905938 31.905938 0 17.457966-14.447972 31.905938-31.905938 31.905938l-46.955908 0C270.297472 483.405056 255.8495 468.957084 255.8495 450.897119zM671.830688 630.292769 352.169312 630.292769c-17.457966 0-31.905938-14.447972-31.905938-31.905938 0-17.457966 14.447972-31.905938 31.905938-31.905938l320.263374 0c17.457966 0 31.905938 14.447972 31.905938 31.905938C703.736626 615.844797 689.890653 630.292769 671.830688 630.292769zM736.244562 483.405056 455.71311 483.405056c-17.457966 0-31.905938-14.447972-31.905938-31.905938 0-17.457966 14.447972-31.905938 31.905938-31.905938l279.929453 0c17.457966 0 31.905938 14.447972 31.905938 31.905938C768.1505 468.957084 753.702528 483.405056 736.244562 483.405056z"  ></path></symbol><symbol id="icon-leftarrow" viewBox="0 0 1024 1024"><path d="M512 0C229.221434 0 0 229.221434 0 512S229.221434 1024 512 1024 1024 794.778566 1024 512 794.778566 0 512 0zM512 985.358491C250.570868 985.358491 38.641509 773.429132 38.641509 512 38.641509 250.570868 250.570868 38.641509 512 38.641509 773.429132 38.641509 985.358491 250.570868 985.358491 512 985.358491 773.429132 773.429132 985.358491 512 985.358491zM408.788528 516.946113 605.976151 319.758491c3.767547-3.767547 3.767547-9.892226 0-13.659774l-13.659774-13.659774c-3.767547-3.767547-9.892226-3.767547-13.659774 0L360.061585 511.033962c-3.767547 3.767547-3.767547 9.892226 0 13.659774l13.659774 13.659774c1.333132 1.333132 2.994717 2.028679 4.714264 2.415094l209.011925 208.992604c3.728906 3.748226 9.795623 3.748226 13.543849 0l13.543849-13.543849c3.728906-3.728906 3.728906-9.795623 0-13.543849L408.788528 516.946113z"  ></path></symbol><symbol id="icon-rightarrow" viewBox="0 0 1024 1024"><path d="M445.343396 292.438943c-3.767547-3.767547-9.892226-3.767547-13.659774 0l-13.659774 13.659774c-3.767547 3.767547-3.767547 9.892226 0 13.659774l197.187623 197.187623L409.484075 722.69283c-3.728906 3.748226-3.728906 9.795623 0 13.543849l13.543849 13.543849c3.728906 3.748226 9.795623 3.748226 13.543849 0l209.011925-208.992604c1.719547-0.386415 3.381132-1.081962 4.714264-2.415094l13.659774-13.659774c3.767547-3.767547 3.767547-9.892226 0-13.659774L445.343396 292.438943zM512 0C229.240755 0 0 229.221434 0 512 0 794.759245 229.240755 1024 512 1024 794.778566 1024 1024 794.759245 1024 512 1024 229.221434 794.778566 0 512 0zM512 985.358491C250.570868 985.358491 38.641509 773.429132 38.641509 512 38.641509 250.570868 250.570868 38.641509 512 38.641509 773.429132 38.641509 985.358491 250.570868 985.358491 512 985.358491 773.429132 773.429132 985.358491 512 985.358491z"  ></path></symbol><symbol id="icon-guanbiyinliang" viewBox="0 0 1024 1024"><path d="M452.676893 78.69327c-15.654538-6.361895-34.744315-2.402723-46.544059 9.712199L205.211778 293.863864l-98.367355 0c-22.948665 0-41.554418 18.20871-41.554418 41.160445l0 353.999476c0 22.951735 18.605753 41.160445 41.554418 41.160445l98.367355 0L405.009244 935.642626c7.978718 8.198729 18.783809 12.670577 29.786397 12.670577 5.259794 0 12.812817-0.948605 17.881253-3.00852 15.663748-6.367011 28.157293-21.542642 28.157293-38.452777L480.834186 117.196189C480.834186 100.286054 468.340641 85.060281 452.676893 78.69327zM397.72535 804.584732 254.775614 659.84114c-7.822153-8.037047-20.807908-12.765745-32.024367-12.765745l-74.353428 0L148.397818 376.972701l74.353428 0c11.215436 0 24.201192-4.728698 32.024367-12.765745l142.949736-144.743592L397.72535 804.584732zM946.930717 636.423801c16.008602 16.447601 15.653515 42.762943-0.785899 58.774615-8.080026 7.864108-18.540262 11.780301-28.984125 11.780301-10.824533 0-21.635763-4.200672-29.78128-12.567223L767.838829 571.611679 648.299269 694.411493c-8.146541 8.365528-18.960841 12.567223-29.78128 12.567223-10.44898 0-20.904099-3.916193-28.984125-11.780301-16.439414-16.011672-16.795525-42.327014-0.785899-58.774615l121.091916-124.397195L588.746942 387.630435c-16.008602-16.447601-15.653515-42.762943 0.785899-58.774615 16.45988-16.011672 42.761919-15.646352 58.765405 0.785899l119.53956 122.800837 119.540583-122.800837c16.013719-16.45374 42.314735-16.793478 58.765405-0.785899 16.440437 16.011672 16.795525 42.327014 0.785899 58.774615L825.837778 512.026606 946.930717 636.423801z"  ></path></symbol><symbol id="icon-zuixiaoyinliang" viewBox="0 0 1024 1024"><path d="M594.089623 68.470441c-15.912411-6.580882-33.207309-2.719948-45.369304 9.460466L339.53095 288.667515 235.458663 288.667515c-23.49511 0-42.538839 18.643616-42.538839 42.142819L192.919824 693.241854c0 23.49818 19.043728 42.142819 42.538839 42.142819l104.072287 0 210.193233 210.736609c8.143471 8.154727 19.033495 12.588713 30.116925 12.588713 5.473665 0 8.993838-1.00284 14.249539-3.179412 15.908318-6.585999 24.273846-22.056342 24.273846-39.269375L618.364493 107.790982C618.36347 90.577948 609.997941 75.05644 594.089623 68.470441zM533.275559 813.425074 385.275807 662.97962c-7.982812-7.994068-16.805758-12.684904-28.102035-12.684904l-79.165014 0 0-276.538267 79.165014 0c11.295254 0 20.119223-4.690836 28.102035-12.684904l147.999752-150.445454L533.275559 813.425074zM759.790526 692.192965c-8.403391 9.379625-20.026102 14.153348-31.702026 14.153348-10.111289 0-20.2543-3.583618-28.377304-10.860349-17.501606-15.687284-18.972097-42.587957-3.292999-60.086493 109.297288-121.970936 4.517897-241.702877 0-246.741637-15.679098-17.499559-14.208607-44.400233 3.292999-60.081377 17.48728-15.691377 44.404326-14.21577 60.074214 3.287883C815.626205 394.174478 887.488907 549.679158 759.790526 692.192965z"  ></path></symbol><symbol id="icon-zhifubao1" viewBox="0 0 1024 1024"><path d="M972.8 699.392c-37.888-11.264-269.312-81.92-323.584-101.376 35.84-60.416 63.488-130.048 82.944-205.824L528.384 392.192l0-68.608L778.24 323.584l0-41.984L528.384 281.6 528.384 168.96l-96.256 0c-17.408 0-19.456 15.36-19.456 15.36l0 98.304L179.2 282.624l0 41.984 234.496 0 0 68.608L221.184 393.216l0 37.888 388.096 0c-14.336 48.128-32.768 93.184-55.296 134.144-87.04-28.672-136.192-48.128-243.712-58.368-203.776-19.456-250.88 92.16-258.048 159.744C40.96 770.048 133.12 854.016 271.36 854.016c138.24 0 229.376-63.488 317.44-167.936 111.616 53.248 381.952 168.96 381.952 168.96L972.8 699.392 972.8 699.392 972.8 699.392 972.8 699.392zM256 788.48C110.592 788.48 87.04 697.344 95.232 659.456c7.168-37.888 50.176-87.04 131.072-87.04 93.184 0 177.152 23.552 276.48 71.68C432.128 735.232 346.112 788.48 256 788.48L256 788.48 256 788.48 256 788.48z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1025 1024"><path d="M472.483146 751.161182c0.122866 0.124914 0.24778 0.248804 0.372694 0.370646 11.174684 10.873662 25.852081 16.831651 41.412066 16.831651 0.277473 0 0.554946-0.001024 0.832419-0.005119 15.837458-0.217064 30.643864-6.574368 41.702849-17.905707L891.545075 410.683475c9.525205-9.667525 9.408482-25.226487-0.259043-34.750668-9.666501-9.524181-25.227511-9.408482-34.750668 0.259043l-315.80719 320.551874L540.728174 87.434687c0-13.5716-11.001648-24.573248-24.573248-24.573248s-24.573248 11.001648-24.573248 24.573248l0 613.073864L170.858816 374.767626c-9.52111-9.670597-25.080071-9.791415-34.750668-0.269282-9.670597 9.52111-9.791415 25.080071-0.270306 34.750668L472.483146 751.161182z"  ></path><path d="M879.012719 846.929272 149.753468 846.929272c-13.5716 0-24.573248 11.001648-24.573248 24.573248s11.001648 24.573248 24.573248 24.573248l729.260275 0c13.5716 0 24.573248-11.001648 24.573248-24.573248S892.584319 846.929272 879.012719 846.929272z"  ></path></symbol><symbol id="icon-skip" viewBox="0 0 1025 1024"><path d="M567.472059 821.409954c-3.417729 0.001024-6.857984-0.7116-10.095509-2.171661-8.809509-3.972675-14.472619-12.738157-14.472619-22.401587L542.903931 627.708257c-29.785848 2.078487-83.527541 7.616683-145.685571 22.261315-55.144416 12.991057-106.046875 30.509735-151.293391 52.068664-55.848849 26.609756-103.141088 59.468284-140.563073 97.662278-7.439551 7.593134-18.916281 9.542611-28.443534 4.830691-9.528277-4.710896-14.946678-15.013231-13.430304-25.533652 0.354264-2.457325 9.061385-61.055306 42.62537-136.624186 19.691363-44.336282 43.951301-85.481114 72.103028-122.293887 35.208345-46.039004 76.619387-85.377702 123.089446-116.930776 9.492441-7.120099 109.303854-80.010495 241.598029-99.934279L542.903931 153.476315c0-9.655239 5.653895-18.416625 14.453165-22.393396 8.800294-3.975747 19.11082-2.430704 26.35788 3.949126L948.469003 456.170605c5.293487 4.659702 8.329307 11.370247 8.33545 18.422769s-3.018414 13.767162-8.30371 18.437103L583.745692 815.253332C579.165853 819.299726 573.353256 821.409954 567.472059 821.409954zM567.477179 577.332075c6.464812 0 12.674676 2.547427 17.277041 7.099621 4.668917 4.615675 7.296207 10.908474 7.296207 17.473627l0 140.436111 303.029101-267.695842-303.029101-266.793799 0 117.023949c0 12.612219-9.547731 23.176668-22.096469 24.448334-132.768234 13.450782-238.416817 92.576639-239.468348 93.374246-0.350169 0.265186-0.729006 0.538564-1.09351 0.78532-42.290559 28.637049-80.018686 64.452557-112.135921 106.450286-25.814197 33.756475-48.097013 71.569584-66.226951 112.38882-8.059001 18.144272-14.55453 35.211416-19.758939 50.541027 28.351385-20.625146 59.821524-39.184091 94.153423-55.496632 48.560833-23.075304 102.961908-41.750972 161.692994-55.508919 99.704929-23.356872 176.846497-24.488265 180.081975-24.524101C567.290831 577.332075 567.385029 577.332075 567.477179 577.332075z"  ></path></symbol><symbol id="icon-browse" viewBox="0 0 1025 1024"><path d="M511.774231 236.425787c192.62651 0 368.54608 198.135285 429.142605 275.07752-60.596525 76.942235-231.00732 275.07752-429.142605 275.07752S143.228151 588.445542 82.631625 511.503307c60.506217-76.942235 236.606403-275.07752 429.142606-275.07752m0-54.997442c-275.07752 0-495.157598 330.16527-495.157598 330.16527s219.98977 330.16527 495.157598 330.16527 495.157598-330.16527 495.157597-330.16527-220.080078-330.16527-495.157597-330.16527z" fill="" ></path><path d="M511.774231 401.508422c60.596525 0 109.994885 49.578975 109.994884 109.994885 0 60.596525-49.578975 109.994885-109.994884 109.994885-60.596525 0-109.994885-49.578975-109.994885-109.994885-0.090308-60.506217 49.488667-109.994885 109.994885-109.994885m0-54.997442c-93.46856 0-165.082635 71.614075-165.082636 165.082635s71.43346 165.082635 165.082636 165.082635c93.46856 0 165.082635-71.614075 165.082635-165.082635s-71.523768-165.082635-165.082635-165.082635z" fill="" ></path></symbol><symbol id="icon-tupian1" viewBox="0 0 1024 1024"><path d="M306.405081 472.615385c47.695131 0 86.718419-39.023289 86.718419-86.71842s-39.023289-86.718419-86.718419-86.718419-86.718419 39.023289-86.718419 86.718419 39.023289 86.718419 86.718419 86.71842z m0-122.851094c20.234298 0 36.132675 16.62103 36.132675 36.132674s-16.62103 36.132675-36.132675 36.132675-36.132675-16.62103-36.132675-36.132675 16.62103-36.132675 36.132675-36.132674z" fill="" ></path><path d="M881.637262 174.159492H150.311927c-44.081863 0-79.491884 35.410021-79.491885 79.491884v521.033169c0 44.081863 35.410021 79.491884 79.491885 79.491884H881.637262c44.081863 0 79.491884-35.410021 79.491884-79.491884V253.651376c0-43.35921-35.410021-79.491884-79.491884-79.491884z m28.90614 601.247706c0 15.898377-13.007763 28.90614-28.90614 28.90614H150.311927c-15.898377 0-28.90614-13.007763-28.90614-28.90614V253.651376c0-15.898377 13.007763-28.90614 28.90614-28.90614H881.637262c15.898377 0 28.90614 13.007763 28.90614 28.90614v521.755822z" fill="" ></path><path d="M757.340861 432.146789c-10.117149-10.117149-26.015526-10.117149-36.132675 0L629.431193 523.923783 509.470713 403.963303c-10.117149-10.117149-26.015526-10.117149-35.410021 0L166.932957 710.368384c-10.117149 10.117149-10.117149 26.015526 0 36.132675 5.058574 5.058574 11.562456 7.226535 18.066337 7.226535s13.007763-2.16796 18.066338-7.226535l288.338743-289.061398 166.210304 166.210304c10.117149 10.117149 26.015526 10.117149 35.410021 0 10.117149-10.117149 10.117149-26.015526 0-36.132675l-28.90614-28.90614 73.710657-73.710656 88.886379 88.88638c5.058574 5.058574 11.562456 7.226535 18.066338 7.226535s13.007763-2.16796 18.066337-7.226535c10.117149-10.117149 10.117149-26.015526 0-36.132675l-105.50741-105.50741z" fill="" ></path><path d="M346.873677 699.528582m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z" fill="" ></path><path d="M414.803105 631.599153m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z" fill="" ></path><path d="M482.732534 562.947071m-27.460833 0a27.460833 27.460833 0 1 0 54.921665 0 27.460833 27.460833 0 1 0-54.921665 0Z" fill="" ></path></symbol><symbol id="icon-buju" viewBox="0 0 1024 1024"><path d="M 917.213 903.239 H 106.787 c -23.151 0 -41.918 -18.766 -41.918 -41.917 V 162.678 c 0 -23.148 18.768 -41.917 41.918 -41.917 h 810.426 c 23.15 0 41.918 18.769 41.918 41.917 v 698.643 c 0 23.151 -18.769 41.918 -41.918 41.918 Z M 316.38 861.321 h 600.833 V 498.027 H 316.38 v 363.294 Z m -209.593 0 h 167.674 V 498.027 H 106.787 v 363.294 Z m 41.918 -698.643 c -23.151 0 -41.918 18.768 -41.918 41.92 s 18.768 41.92 41.918 41.92 s 41.92 -18.77 41.92 -41.92 s -18.769 -41.92 -41.92 -41.92 Z m 125.756 0 c -23.151 0 -41.918 18.768 -41.918 41.92 s 18.768 41.92 41.918 41.92 c 23.151 0 41.92 -18.77 41.92 -41.92 s -18.77 -41.92 -41.92 -41.92 Z m 125.755 0 c -23.15 0 -41.918 18.768 -41.918 41.92 s 18.769 41.92 41.918 41.92 c 23.152 0 41.92 -18.77 41.92 -41.92 s -18.768 -41.92 -41.92 -41.92 Z m 475.077 125.756 H 106.787 v 167.675 h 810.427 V 288.434 h -41.921 Z" fill="#333333" ></path></symbol><symbol id="icon-erweima1688" viewBox="0 0 1024 1024"><path d="M487.693986 918.089302v28.885853c0 6.757643 5.528981 12.286624 12.286624 12.286624h24.574272c6.757643 0 12.286624-5.528981 12.286624-12.286624v-28.885853h-49.14752zM112.600765 424.486474h251.132449c27.1432 0 49.146496-22.003296 49.146495-49.146496V113.91441c0-27.1432-22.003296-49.146496-49.146495-49.146496H113.786424c-27.05617 0-49.023629 21.868143-49.146496 48.923289L63.453245 375.116771a49.146496 49.146496 0 0 0 49.14752 49.369703z m1.185659-310.572064h249.94679v261.425568H112.600765l1.185659-261.425568zM911.511863 64.767914H661.565073c-27.05617 0-49.023629 21.868143-49.146496 48.923289l-1.185659 261.425568a49.146496 49.146496 0 0 0 49.146496 49.369703h251.132449c27.1432 0 49.146496-22.003296 49.146495-49.146496V113.91441c0-27.1432-22.003296-49.146496-49.146495-49.146496z m0 310.572064H660.379414l1.185659-261.425568h249.94679v261.425568zM363.121954 600.359256H113.175164c-27.05617 0-49.023629 21.868143-49.146495 48.923288L62.84301 910.708113a49.146496 49.146496 0 0 0 49.146495 49.369702h251.132449c27.1432 0 49.146496-22.003296 49.146496-49.146495V649.505751c0-27.1432-22.00432-49.146496-49.146496-49.146495z m0 310.572064H111.988481l1.185659-261.425569h249.94679v261.425569zM216.332635 491.092262c-0.046075 0-0.09215-0.007167-0.138225-0.007168h-139.760347c-6.757643 0-12.286624 5.528981-12.286624 12.286624v25.772218c0 6.757643 5.528981 12.286624 12.286624 12.286624h139.760347c0.239589 0 0.473035-0.022525 0.708529-0.035836 93.729534 0.032764 204.606076 0.059385 205.115971 0.005119v-50.364919c-0.485322-0.051194-111.847185 0.003072-205.686275 0.057338zM805.778297 541.3937c0.235494 0.013311 0.469963 0.035836 0.708528 0.035836h139.760347c6.757643 0 12.286624-5.528981 12.286624-12.286624v-12.440207V503.370694c0-6.757643-5.528981-12.286624-12.286624-12.286623h-139.760347c-0.047099 0-0.09215 0.006143-0.138224 0.007167-93.83909-0.05529-205.200953-0.109556-205.686275-0.057338v50.364919c0.509895 0.054266 111.387461 0.027645 205.115971-0.005119zM640.594877 590.957941h-24.573247c-6.757643 0-12.286624 5.528981-12.286624 12.286624v344.546626c0 6.757643 5.528981 12.286624 12.286624 12.286624h24.573247c6.757643 0 12.286624-5.528981 12.286624-12.286624V603.244565c0-6.757643-5.528981-12.286624-12.286624-12.286624zM946.73659 590.957941h-24.573248c-6.757643 0-12.286624 5.528981-12.286624 12.286624v344.546626c0 6.757643 5.528981 12.286624 12.286624 12.286624h24.573248c6.757643 0 12.286624-5.528981 12.286623-12.286624V603.244565c0-6.757643-5.528981-12.286624-12.286623-12.286624zM695.366599 787.543923h167.92948c6.757643 0 12.286624-5.528981 12.286624-12.286624v-26.033308c0-6.757643-5.528981-12.286624-12.286624-12.286624H695.366599c-6.757643 0-12.286624 5.528981-12.286624 12.286624v26.033308c0 6.757643 5.528981 12.286624 12.286624 12.286624zM864.319964 907.926216H696.390484c-6.757643 0-12.286624 5.528981-12.286624 12.286624v26.033308c0 6.757643 5.528981 12.286624 12.286624 12.286624h167.92948c6.757643 0 12.286624-5.528981 12.286624-12.286624v-26.033308c0-6.757643-5.528981-12.286624-12.286624-12.286624zM522.847041 65.995552h-24.801574c-6.757643 0-12.286624 5.528981-12.286624 12.286624v89.470172c0 0.19761 0.020478 0.3901 0.029693 0.585662l-0.645048 252.841314c-0.002048 0.908186 0.048123 1.80511 0.141296 2.687699h48.864927c0.089078-0.839586 0.137201-1.691459 0.139249-2.55357l0.641976-251.407874c0.124914-0.700338 0.202729-1.418081 0.202729-2.153231V78.282176c0-6.757643-5.528981-12.286624-12.286624-12.286624zM485.758843 618.261891c0 0.19761 0.020478 0.3901 0.029693 0.585662l-0.645048 252.841314c-0.002048 0.908186 0.048123 1.80511 0.141296 2.687699h48.864927c0.089078-0.839586 0.137201-1.691459 0.139249-2.55357l0.641976-251.407874c0.124914-0.700338 0.202729-1.418081 0.202729-2.153231v-26.280065h-49.374822v26.280065z" fill="" ></path></symbol><symbol id="icon-renminbi1688" viewBox="0 0 1024 1024"><path d="M787.669861 62.749836h-65.742653l-210.480106 375.237589L298.62537 62.749836h-65.917737L454.915321 454.536484H224.561601v49.146496h253.973731v149.487257H224.561601v49.146496h253.973731v257.529684h66.552546V702.316733h257.045387v-49.146496H545.087878v-149.487257h257.045387v-49.146496H567.906187z" fill="" ></path></symbol><symbol id="icon-tianjia" viewBox="0 0 1024 1024"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM192.028 543.17h638.608c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.028c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" ></path></symbol><symbol id="icon-gengduo1" viewBox="0 0 1024 1024"><path d="M168.457 407.559c-57.676 0-104.453 46.738-104.453 104.453 0 57.695 46.758 104.433 104.453 104.433S272.91 569.707 272.91 512.012c-0.02-57.715-46.777-104.453-104.453-104.453z m333.125 0c-57.676 0-104.453 46.738-104.453 104.453 0 57.695 46.758 104.433 104.453 104.433s104.453-46.738 104.453-104.433c0-57.715-46.758-104.453-104.453-104.453z m353.965 0c-57.695 0-104.453 46.738-104.453 104.453 0 57.695 46.758 104.433 104.453 104.433S960 569.707 960 512.012c0-57.715-46.777-104.453-104.453-104.453z"  ></path></symbol><symbol id="icon-baocun" viewBox="0 0 1024 1024"><path d="M682.653538 341.346462H113.821538V113.782154h568.871385v227.564308zM512 910.178462a170.456615 170.456615 0 0 1-170.653538-170.653539A170.456615 170.456615 0 0 1 512 568.871385a170.456615 170.456615 0 0 1 170.653538 170.692923A170.456615 170.456615 0 0 1 512 910.178462zM796.435692 0H113.821538A113.742769 113.742769 0 0 0 0 113.782154V910.178462A113.742769 113.742769 0 0 0 113.782154 1024H910.178462C972.8 1024 1024 972.8 1024 910.217846V227.564308L796.435692 0z"  ></path></symbol><symbol id="icon-fenxiang2" viewBox="0 0 1024 1024"><path d="M214.643 912c-46.968 0-85.179-38.317-85.179-85.415L129.464 267.832c0-47.084 38.211-85.39 85.179-85.39l236.223 0c14.08 0 25.535 11.507 25.535 25.652 0 14.117-11.461 25.625-25.547 25.653L218.892 233.747c-21.087 0-38.241 17.219-38.241 38.384l0 550.205c0 21.151 17.154 38.359 38.241 38.359l571.595 0c21.1 0 38.265-17.208 38.265-38.359l0-221.05c0.086-14.037 11.562-25.473 25.582-25.473 14.049 0 25.525 11.455 25.582 25.535l0 225.237c0 47.098-38.212 85.415-85.181 85.415L214.643 912zM364.496 772.89c-7.063 0-13.699-2.751-18.687-7.746-5.132-5.139-7.976-12.1-8.017-19.611 5.242-69.421 14.303-126.289 27.699-173.858 13.945-49.521 32.637-89.271 57.145-121.527 48.608-63.977 122.485-100.173 232.492-113.902l159.612 0L663.675 183.721c-2.455-4.963-4.42-11.449-4.42-14.657 0-14.779 11.992-26.803 26.732-26.803 3.357 0 8.164 0.413 12.202 2.352l7.26 5.979 206.178 206.812 5.281 6.036-5.146 5.165L700.088 579.673c-4.072 1.668-10.329 3.436-13.325 3.436-14.728 0-26.709-12.023-26.709-26.803 0-4.656 0.799-8.924 2.253-12.062l5.309-6.726 147.2-147.624-159.252-0.059-0.332 0.037c-94.554 10.523-154.553 40.592-194.54 97.496-38.219 54.39-59.248 133.536-70.298 264.613C386.623 762.321 375.999 772.89 364.496 772.89z"  ></path></symbol><symbol id="icon-dingwei" viewBox="0 0 1024 1024"><path d="M512 0C300.144 0 128.454 140.846 128.454 376.474c0 235.62 222.595 308.371 383.546 647.526 162.67-340.942 383.546-421.234 383.546-647.526S723.817 0 512 0z m0 576.048c-118.255 0-191.773-76.402-191.773-191.78S387.977 192.494 512 192.494c124.031 0 191.773 73.51 191.773 191.774S630.263 576.04 512 576.04z"  ></path></symbol><symbol id="icon-banyuanxuankuang-copy-copy" viewBox="0 0 1024 1024"><path d="M510.013 39.030c-262.47 0-477.882 216.074-477.882 477.882 0 265.783 216.074 481.858 477.882 481.858 265.783 0 481.858-216.074 481.858-481.858 0-261.808-216.074-477.882-481.858-477.882zM510.013 899.349v-759.573c212.098 0 381.776 169.678 381.776 377.798 0 212.098-169.678 381.776-381.776 381.776z"  ></path></symbol><symbol id="icon-huiyuan" viewBox="0 0 1024 1024"><path d="M517.524319 337.125157z m-233.882772 0c0 129.169895 104.712877 233.882771 233.883795 233.882772 129.169895 0 233.883795-104.712877 233.883795-233.882772 0-129.170918-104.7139-233.883795-233.883795-233.883795-129.171941 0-233.883795 104.712877-233.883795 233.883795M934.155251 844.292082C897.270179 735.314065 803.381835 652.322909 689.374268 629.688399c-50.296523 29.340235-108.978017 46.106084-171.849949 46.106084-62.871933 0-121.552403-16.765849-171.84995-46.106084-114.007567 22.63451-207.896934 105.625666-244.782006 214.603683-10.898211 31.854499 13.412474 64.548108 46.944172 64.548108H887.210056c33.532721 0 57.843406-32.69361 46.945195-64.548108z"  ></path></symbol><symbol id="icon-suoxiao" viewBox="0 0 1024 1024"><path d="M 993.241 993.28 a 38.1637 38.1637 0 0 1 -53.4843 0 l -239.222 -239.262 a 420.746 420.746 0 1 1 53.4843 -53.4843 l 239.222 239.222 a 37.8486 37.8486 0 0 1 0 53.5237 Z M 775.877 435.673 a 340.362 340.362 0 1 0 -340.362 340.401 a 340.362 340.362 0 0 0 340.362 -340.401 Z m -189.046 -37.8092 a 37.8486 37.8486 0 1 1 0 75.6578 H 284.318 a 37.8486 37.8486 0 1 1 0 -75.6578 H 586.831 Z" fill="#333333" ></path></symbol><symbol id="icon-sousuo1" viewBox="0 0 1024 1024"><path d="M448 768c176.725333 0 320-143.274667 320-320 0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 176.725333 143.274667 320 320 320z m0 42.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S247.701333 85.333333 448 85.333333s362.666667 162.368 362.666667 362.666667-162.368 362.666667-362.666667 362.666667z m304.917333-27.584a21.333333 21.333333 0 0 1 30.165334-30.165334l150.848 150.848a21.333333 21.333333 0 0 1-30.165334 30.165334l-150.848-150.826667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-fenxiang" viewBox="0 0 1024 1024"><path d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" fill="#3D3D3D" ></path></symbol><symbol id="icon-yueduxiao" viewBox="0 0 1024 1024"><path d="M512 923.136c-372.352 0-512-418.901333-512-418.901333S139.648 85.333333 512 85.333333s512 418.901333 512 418.901334-139.648 418.986667-512 418.901333z m0-85.333333c296.533333 0.042667 407.722667-333.568 407.722667-333.568S808.490667 170.666667 512 170.666667c-296.533333 0-407.722667 333.568-407.722667 333.568S215.509333 837.802667 512 837.802667z m75.392-570.538667a128 128 0 1 0 169.344 169.386667 256 256 0 1 1-169.344-169.344z" fill="#3D3D3D" ></path></symbol><symbol id="icon-neirong2" viewBox="0 0 1024 1024"><path d="M128 832.042667c0 17.002667 4.906667 20.309333 20.629333 14.016l15.36-6.144c75.733333-30.293333 193.578667-30.293333 269.354667 0l94.506667 37.802666h-31.701334l94.506667-37.802666c75.733333-30.293333 193.578667-30.293333 269.354667 0l15.36 6.144c15.658667 6.272 20.629333 2.901333 20.629333-14.016V255.957333c0-29.738667-24.746667-66.304-52.309333-77.333333l-15.36-6.144c-55.424-22.165333-150.549333-22.186667-205.973334 0l-94.506666 37.802667-15.850667 6.336-15.850667-6.336-94.506666-37.802667c-55.402667-22.165333-150.528-22.186667-205.952 0l-15.36 6.144C152.810667 189.610667 128 226.304 128 255.957333v576.085334zM164.48 139.008l15.36-6.144c65.621333-26.24 172.117333-26.218667 237.653333 0L512 170.666667l94.506667-37.802667c65.621333-26.24 172.117333-26.218667 237.653333 0l15.36 6.144c43.733333 17.493333 79.146667 69.717333 79.146667 116.949333v576.085334c0 47.104-35.477333 71.104-79.146667 53.632l-15.36-6.144c-65.621333-26.24-172.117333-26.218667-237.653333 0L512 917.333333l-94.506667-37.802666c-65.621333-26.24-172.117333-26.218667-237.653333 0l-15.36 6.144c-43.733333 17.493333-79.146667-6.4-79.146667-53.632V255.957333C85.333333 208.853333 120.810667 156.48 164.48 139.008zM490.666667 213.397333a21.333333 21.333333 0 1 1 42.666666 0v511.872a21.333333 21.333333 0 1 1-42.666666 0V213.397333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-ganxie" viewBox="0 0 1024 1024"><path d="M490.666667 746.112c-190.826667-10.581333-342.336-169.109333-342.336-363.093333 0-70.229333 19.84-135.808 54.229333-191.381334 43.392 3.626667 99.178667 12.245333 148.714667 32.277334 10.154667 4.48 29.824 13.674667 39.146666 19.264 2.602667-10.794667 9.386667-31.936 12.693334-41.92 22.848-61.397333 60.202667-106.517333 108.885333-137.173334 51.413333 30.464 84.8 76.437333 108.010667 136.746667 3.136 9.024 11.306667 32.725333 14.08 42.346667 7.893333-6.165333 28.352-16.938667 38.058666-21.76 44.949333-19.242667 102.272-27.136 146.986667-30.293334a362.688 362.688 0 0 1 54.528 191.872c0 193.344-150.442667 351.424-340.330667 362.986667V960a21.333333 21.333333 0 0 1-42.666666 0V746.666667v-0.554667z m-104.746667 180.074667c-47.082667-103.189333-134.762667-157.653333-236.693333-158.186667a21.333333 21.333333 0 1 1 0.213333-42.666667c118.272 0.597333 221.184 64.554667 275.306667 183.146667a21.333333 21.333333 0 1 1-38.826667 17.706667z m213.333333-17.706667c54.122667-118.613333 157.034667-182.549333 275.306667-183.146667a21.333333 21.333333 0 1 1 0.213333 42.666667c-101.930667 0.512-189.610667 54.997333-236.693333 158.186667a21.333333 21.333333 0 1 1-38.826667-17.706667z m61.056-631.658667A42.666667 42.666667 0 0 1 593.066667 254.933333c-22.058667-77.077333-42.24-106.389333-81.002667-138.389333-38.912 32-65.856 77.077333-80.149333 136.597333a42.666667 42.666667 0 0 1-63.402667 26.645334c-42.325333-25.344-75.370667-37.397333-142.464-43.008a320.277333 320.277333 0 0 0-35.050667 146.218666c0 177.322667 143.296 321.002667 320 321.002667 176.704 0 320-143.68 320-321.002667 0-51.84-12.224-101.781333-35.242666-146.645333-71.786667 5.056-105.173333 16.874667-135.445334 40.469333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024"><path d="M820.394667 614.165333a21.333333 21.333333 0 0 0 30.165333-30.186666L528.853333 262.250667a21.333333 21.333333 0 0 0-30.186666 0L176.917333 583.978667a21.333333 21.333333 0 1 0 30.165334 30.186666L490.666667 330.581333v501.482667c0 11.882667 9.557333 21.269333 21.333333 21.269333 11.861333 0 21.333333-9.514667 21.333333-21.269333v-504.96l287.061334 287.061333zM170.666667 192c0-11.776 9.706667-21.333333 21.333333-21.333333h640c11.776 0 21.333333 9.472 21.333333 21.333333 0 11.776-9.706667 21.333333-21.333333 21.333333H192c-11.776 0-21.333333-9.472-21.333333-21.333333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-dianhua" viewBox="0 0 1024 1024"><path d="M647.786667 845.397333c-76.053333-24.234667-157.248-76.266667-240.917334-163.648-81.152-84.757333-131.626667-164.864-157.504-238.442666-16.832-47.829333-21.056-85.546667-18.581333-111.402667a50.986667 50.986667 0 0 1 0.384-3.221333l0.341333-3.349334c0.469333-18.112 10.922667-46.144 22.122667-59.264a414.677333 414.677333 0 0 1 34.56-39.466666c9.834667-9.877333 19.306667-18.133333 27.946667-24.192 12.885333-9.045333 21.162667-11.328 23.317333-10.069334-0.213333 0.021333 1.045333 1.322667 2.837333 3.776 3.157333 4.288 7.082667 10.517333 11.669334 18.410667a1030.4 1030.4 0 0 1 31.04 59.264 3473.109333 3473.109333 0 0 1 58.368 126.229333c1.706667 3.84 0.938667 12.309333-1.344 15.722667l-47.04 69.824a27.52 27.52 0 0 0-3.370667 7.424c-7.509333 25.92 12.309333 66.517333 73.834667 129.216 37.504 38.186667 70.293333 63.061333 98.496 77.077333 18.944 9.429333 33.28 12.8 42.730666 12.586667 4.48-0.192 8.256-1.450667 11.52-3.626667l69.546667-46.933333c3.584-2.410667 12.416-3.349333 16.533333-1.685333l8.704 3.477333a3178.794667 3178.794667 0 0 1 91.477334 38.464c7.04 3.114667 13.802667 6.144 20.266666 9.088 21.76 9.962667 39.637333 18.773333 52.629334 25.984 6.784 3.797333 12.074667 7.061333 15.573333 9.642667 1.429333 1.066667 2.432 1.877333 2.901333 2.346666a10.602667 10.602667 0 0 1-2.197333-3.968l1.472 3.2c4.522667 8.064-16.853333 38.122667-51.562667 68.714667a626.624 626.624 0 0 1-20.544 17.344 21.333333 21.333333 0 1 0 26.453334 33.450667 669.056 669.056 0 0 0 22.293333-18.794667c52.48-46.293333 80.661333-85.866667 60.544-121.642667l1.472 3.2c-6.037333-16.64-32.277333-31.274667-91.306667-58.261333-6.613333-3.050667-13.546667-6.144-20.736-9.322667a2876.629333 2876.629333 0 0 0-101.610666-42.538666c-17.109333-6.912-40.874667-4.416-56.234667 5.930666l-69.546667 46.933334 10.922667-3.626667c0.576-0.021333-0.554667-0.149333-2.986667-0.725333a92.693333 92.693333 0 0 1-19.306666-7.424c-23.68-11.776-52.693333-33.792-87.04-68.778667-51.797333-52.757333-65.322667-80.490667-63.317334-87.445333a16.021333 16.021333 0 0 1-1.92 4.074666l46.741334-69.376c10.474667-15.573333 12.586667-39.530667 5.013333-56.725333l-4.138667-9.365333a3937.258667 3937.258667 0 0 0-46.122666-100.202667c-3.029333-6.293333-5.973333-12.416-8.874667-18.304-30.997333-63.082667-48.512-93.290667-64.213333-100.48-18.922667-11.157333-42.261333-4.672-67.456 12.992-10.922667 7.658667-22.186667 17.472-33.642667 28.970667a456.597333 456.597333 0 0 0-37.610667 42.88c-16.853333 19.712-30.805333 57.173333-31.509333 84.906666l0.341333-3.349333c-0.277333 1.493333-0.597333 3.797333-0.896 6.954667-3.050667 31.893333 1.877333 75.818667 20.821334 129.621333 27.946667 79.466667 81.664 164.736 166.912 253.781333 88.490667 92.416 175.765333 148.330667 258.773333 174.805334 27.797333 8.853333 53.888 13.952 77.973333 15.957333a21.333333 21.333333 0 0 0 3.52-42.517333 310.570667 310.570667 0 0 1-68.522666-14.08z" fill="#3D3D3D" ></path></symbol><symbol id="icon-kefu" viewBox="0 0 1024 1024"><path d="M448 917.376C448 917.333333 576 917.333333 576 917.333333c0.085333 0 0-42.709333 0-42.709333C576 874.666667 448 874.666667 448 874.666667c-0.085333 0 0 42.709333 0 42.709333z m371.349333-173.034667C809.6 745.877333 799.573333 746.666667 789.333333 746.666667a21.333333 21.333333 0 0 1-21.333333-21.333334V384a21.333333 21.333333 0 0 1 21.333333-21.333333 191.146667 191.146667 0 0 1 92.373334 23.637333C828.202667 234.517333 681.045333 128 511.296 128 341.290667 128 193.749333 234.816 140.458667 387.328A191.125333 191.125333 0 0 1 234.666667 362.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v341.333333a21.333333 21.333333 0 0 1-21.333333 21.333334 192 192 0 0 1-148.906667-313.216 21.269333 21.269333 0 0 1 0.042667-8.682667C127.36 228.288 304.469333 85.333333 511.274667 85.333333c209.706667 0 388.544 146.944 427.008 347.093334l0.213333 1.344A191.210667 191.210667 0 0 1 981.333333 554.666667c0 70.4-37.909333 131.968-94.421333 165.397333-57.642667 100.693333-154.752 174.762667-268.778667 204.074667A42.517333 42.517333 0 0 1 576 960h-128c-23.573333 0-42.666667-19.157333-42.666667-42.624v-42.752c0-23.552 18.922667-42.624 42.666667-42.624h128c23.573333 0 42.666667 19.157333 42.666667 42.624v5.141333a392.810667 392.810667 0 0 0 200.682666-135.424zM85.333333 554.666667c0.298667 133.589333 128 148.949333 128 148.949333V406.144s-128.298667 14.933333-128 148.522667z m853.333334 0c0.298667-133.589333-128-148.522667-128-148.522667v297.472s127.701333-15.36 128-148.949333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-dingdan" viewBox="0 0 1024 1024"><path d="M298.666667 341.333333h384v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0-469.376C298.666667 104.405333 317.824 85.333333 341.12 85.333333h341.76C706.304 85.333333 725.333333 104.490667 725.333333 127.957333v42.752A42.645333 42.645333 0 0 1 682.88 213.333333H341.12C317.696 213.333333 298.666667 194.176 298.666667 170.709333V127.957333zM170.666667 938.666667h682.666666c23.68 0 42.666667-19.157333 42.666667-42.773334V170.773333C896 147.093333 876.842667 128 853.205333 128h-63.296v42.666667h63.296c0.128 0.106667 0.170667 725.333333 0.128 725.333333H170.666667V170.773333C170.752 170.709333 236.16 170.666667 236.16 170.666667V128H170.752A42.752 42.752 0 0 0 128 170.773333v725.12A42.666667 42.666667 0 0 0 170.666667 938.666667z m170.666666-768h341.333334V128H341.333333v42.666667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-faxian" viewBox="0 0 1024 1024"><path d="M512 128C170.666667 128 42.666667 512 42.666667 512s128 383.978667 469.333333 384c341.333333 0.021333 469.333333-384 469.333333-384S853.333333 128 512 128z m0.042667 725.333333H512c-126.976 0-237.141333-58.432-327.488-173.610666C130.474667 610.794667 99.584 540.693333 88.213333 512 113.941333 447.104 239.637333 170.666667 512 170.666667c126.976 0 237.141333 58.410667 327.488 173.610666 54.037333 68.906667 84.928 139.029333 96.298667 167.722667-11.392 28.736-42.282667 98.837333-96.298667 167.744C749.162667 794.944 638.997333 853.333333 512.042667 853.333333zM512 256c-141.376 0-256 114.624-256 256s114.624 256 256 256 256-114.624 256-256-114.624-256-256-256z m0 469.333333c-117.632 0-213.333333-95.701333-213.333333-213.333333s95.701333-213.333333 213.333333-213.333333 213.333333 95.701333 213.333333 213.333333-95.701333 213.333333-213.333333 213.333333z m0-362.666666a21.333333 21.333333 0 0 0 0 42.666666c58.816 0 106.666667 47.850667 106.666667 106.666667a21.333333 21.333333 0 0 0 42.666666 0c0-82.346667-66.986667-149.333333-149.333333-149.333333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-mudedi" viewBox="0 0 1024 1024"><path d="M128 896h768v42.666667H128v-42.666667z m384-18.133333s-167.936-103.957333-179.413333-112c-33.557333-23.466667-59.690667-44.074667-77.013334-61.44A361.536 361.536 0 0 1 149.333333 448c0-200.298667 162.368-362.666667 362.666667-362.666667s362.666667 162.368 362.666667 362.666667c0 97.493333-38.656 188.885333-106.24 256.426667-17.322667 17.365333-43.456 37.973333-77.013334 61.44-11.477333 8.042667-179.413333 112-179.413333 112z m154.965333-146.965334c31.68-22.144 56.106667-41.429333 71.317334-56.618666A318.869333 318.869333 0 0 0 832 448c0-176.725333-143.274667-320-320-320-176.725333 0-320 143.274667-320 320 0 86.037333 34.090667 166.634667 93.717333 226.282667 15.210667 15.189333 39.637333 34.474667 71.317334 56.618666 11.157333 7.808 145.557333 92.330667 154.453333 97.493334 9.92-5.162667 144.32-89.685333 155.477333-97.493334zM512 618.666667a170.666667 170.666667 0 1 1 0-341.333334 170.666667 170.666667 0 0 1 0 341.333334z m0-42.666667a128 128 0 1 0 0-256 128 128 0 0 0 0 256z" fill="#3D3D3D" ></path></symbol><symbol id="icon-wode" viewBox="0 0 1024 1024"><path d="M704 329.152C704 209.365333 622.848 128 512 128s-192 81.365333-192 201.152C320 454.762667 407.146667 554.666667 512 554.666667s192-99.904 192-225.514667z m42.666667 0C746.666667 476.714667 642.176 597.333333 512 597.333333s-234.666667-120.618667-234.666667-268.181333C277.333333 181.546667 381.824 85.333333 512 85.333333s234.666667 96.213333 234.666667 243.818667zM512.106667 640c408.96 0 404.864 256.512 404.864 256.512 3.093333 23.274667-13.482667 42.154667-37.098667 42.154667H144.32c-23.573333 0-41.088-19.136-37.077333-42.154667 0 0-4.096-256.512 404.864-256.512zM149.909333 896l0.064 3.861333-0.704 3.968c0.682667-3.882667-2.837333-7.829333-4.949333-7.829333H879.872c-2.154667 0-5.504 3.818667-5.205333 6.144l-0.426667-3.157333 0.064-3.157334c0-0.853333-0.128-3.349333-0.533333-7.125333a161.813333 161.813333 0 0 0-4.266667-23.082667 192.96 192.96 0 0 0-35.242667-71.104C780.330667 725.461333 678.634667 682.666667 512.106667 682.666667c-166.549333 0-268.224 42.794667-322.176 111.850666a192.96 192.96 0 0 0-35.242667 71.104c-2.176 8.426667-3.541333 16.192-4.266667 23.082667a81.045333 81.045333 0 0 0-0.512 7.296z" fill="#3D3D3D" ></path></symbol><symbol id="icon-bofang" viewBox="0 0 1024 1024"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-ditudingwei" viewBox="0 0 1024 1024"><path d="M874.048 533.333333C863.424 716.629333 716.629333 863.424 533.333333 874.048V917.333333a21.333333 21.333333 0 0 1-42.666666 0v-43.285333C307.370667 863.424 160.576 716.629333 149.952 533.333333H106.666667a21.333333 21.333333 0 0 1 0-42.666666h43.285333C160.576 307.370667 307.370667 160.576 490.666667 149.952V106.666667a21.333333 21.333333 0 0 1 42.666666 0v43.285333c183.296 10.624 330.090667 157.418667 340.714667 340.714667h42.816a21.333333 21.333333 0 1 1 0 42.666666H874.026667z m-42.752 0h-127.786667a21.333333 21.333333 0 0 1 0-42.666666h127.786667C820.778667 330.922667 693.056 203.221333 533.333333 192.704V320a21.333333 21.333333 0 0 1-42.666666 0V192.704C330.922667 203.221333 203.221333 330.944 192.704 490.666667H320a21.333333 21.333333 0 0 1 0 42.666666H192.704c10.517333 159.744 138.24 287.445333 297.962667 297.962667V704a21.333333 21.333333 0 0 1 42.666666 0v127.296c159.744-10.517333 287.445333-138.24 297.962667-297.962667zM512 554.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z" fill="#3D3D3D" ></path></symbol><symbol id="icon-gantanhao" viewBox="0 0 1024 1024"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM490.666667 448.149333c0-11.861333 9.472-21.482667 21.333333-21.482666 11.776 0 21.333333 9.6 21.333333 21.482666v255.701334C533.333333 715.733333 523.861333 725.333333 512 725.333333c-11.776 0-21.333333-9.6-21.333333-21.482666V448.149333z m0-127.957333a21.333333 21.333333 0 1 1 42.666666 0v42.282667a21.333333 21.333333 0 1 1-42.666666 0v-42.282667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM298.666667 554.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m213.333333 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m213.333333 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z" fill="#3D3D3D" ></path></symbol><symbol id="icon-guanbi2" viewBox="0 0 1024 1024"><path d="M512.001 15.678C237.414 15.678 14.82 238.273 14.82 512.86S237.414 1010.04 512 1010.04s497.18-222.593 497.18-497.18S786.589 15.678 512.002 15.678z m213.211 645.937c17.798 17.803 17.798 46.657 0 64.456-17.798 17.797-46.658 17.797-64.456 0L512.001 577.315 363.241 726.07c-17.799 17.797-46.652 17.797-64.45 0-17.804-17.799-17.804-46.653 0-64.456L447.545 512.86 298.79 364.104c-17.803-17.798-17.803-46.657 0-64.455 17.799-17.798 46.652-17.798 64.45 0l148.761 148.755 148.755-148.755c17.798-17.798 46.658-17.798 64.456 0 17.798 17.798 17.798 46.657 0 64.455L576.456 512.86l148.756 148.755z m0 0"  ></path></symbol><symbol id="icon-duigouzhong" viewBox="0 0 1024 1024"><path d="M501.504 170.666667c182.741333 0 330.816 148.117333 330.816 330.837333 0 182.741333-148.117333 330.816-330.816 330.816C318.72 832.32 170.666667 684.202667 170.666667 501.504 170.666667 318.72 318.784 170.666667 501.504 170.666667z m0 42.666666C342.336 213.333333 213.333333 342.314667 213.333333 501.504c0 159.146667 128.981333 288.149333 288.170667 288.149333 159.146667 0 288.149333-128.981333 288.149333-288.149333C789.653333 342.336 660.693333 213.333333 501.504 213.333333z m144.064 150.549334a25.152 25.152 0 0 1 36.053333 35.050666l-218.666666 224.896a25.152 25.152 0 0 1-35.242667 0.789334l-106.197333-99.968a25.152 25.152 0 1 1 34.453333-36.608l88.405333 83.2 201.194667-207.36z" fill="#3D3D3D" ></path></symbol><symbol id="icon-boshiweb_bofang" viewBox="0 0 1024 1024"><path d="M512 112c-220.55 0-400 179.45-400 400s179.45 400 400 400 400-179.45 400-400-179.46-400-400-400z m0 736c-185.27 0-336-150.72-336-336s150.73-336 336-336 336 150.73 336 336-150.75 336-336 336z"  ></path><path d="M660.36 486.48c-51.81-29.45-102-59-154.81-89.66l-66.09-37.62c-24.46-12.62-35.5-6.31-40 1.31-5.67 9.7-5 26-5 71v35.77l0.26 151.82c-2.88 26.9 5.6 70.17 57.3 45.61l65.52-38.3c75.89-43.91 100.74-55.73 133.31-74.59l0.31-1.23c42.9-19.97 39.08-47.13 9.2-64.11z"  ></path></symbol><symbol id="icon-biaodankongjiandanxuan" viewBox="0 0 1024 1024"><path d="M164.416 443.264a21.333333 21.333333 0 1 0-30.165333 30.165333L405.76 744.96a21.333333 21.333333 0 0 0 30.165333 0l452.544-452.544a21.333333 21.333333 0 0 0-30.165333-30.165333L420.864 699.712l-256.426667-256.426667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-tishi1" viewBox="0 0 1024 1024"><path d="M976.426208 310.462853c-25.324731-59.861792-61.542767-113.612616-107.714523-159.755011-46.142394-46.142394-99.893219-82.389792-159.751341-107.714523C646.966136 16.762036 581.147527 3.501419 513.291928 3.501419c-67.833577 0-133.674208 13.293649-195.672086 39.4919-59.858122 25.324731-113.608946 61.542767-159.75134 107.714523C111.726108 196.850237 75.47871 250.604731 50.153978 310.466523c-26.231283 61.990538-39.528602 127.805477-39.528602 195.639054 0 67.826237 13.297319 133.670538 39.528602 195.639054 25.324731 59.858122 61.542767 113.579584 107.714524 159.75134 46.142394 46.142394 99.893219 82.389792 159.75134 107.714524 61.994208 26.231283 127.809147 39.49557 195.672086 39.49557 67.826237 0 133.670538-13.297319 195.668416-39.4919 59.858122-25.328401 113.608946-61.546437 159.751341-107.718194 46.142394-46.142394 82.389792-99.893219 107.714523-159.75134 26.231283-61.994208 39.4919-127.809147 39.4919-195.639054 0-67.833577-13.260616-133.644846-39.4919-195.639054z m-463.104918 644.129032c-247.316186 0-448.519341-201.177462-448.51934-448.489978 0-247.316186 201.203154-448.489978 448.51934-448.489979 247.286824 0.029362 448.486308 201.203154 448.486309 448.489979 0 247.283154-201.173792 448.486308-448.486309 448.486308z"  ></path><path d="M513.288258 361.776631c25.552287 0 46.263513-20.711226 46.263513-46.259842 0-25.552287-20.711226-46.263513-46.263513-46.263513-25.548616 0-46.259842 20.711226-46.259842 46.263513 0 25.548616 20.711226 46.259842 46.259842 46.259842zM544.874437 711.364358a31.578839 31.578839 0 0 1-31.582509 31.582509 31.578839 31.578839 0 0 1-31.582509-31.582509v-246.861075a31.578839 31.578839 0 0 1 31.582509-31.586179 31.578839 31.578839 0 0 1 31.582509 31.582509v246.861075z"  ></path></symbol><symbol id="icon-biaodankongjianfuxuan" viewBox="0 0 1024 1024"><path d="M461.973333 586.325333l-105.642666-105.642666a21.248 21.248 0 0 0-30.122667 0.042666c-8.32 8.32-8.213333 21.973333-0.064 30.101334l120.810667 120.832a21.248 21.248 0 0 0 30.122666-0.085334l211.157334-211.157333a21.290667 21.290667 0 0 0 0-30.186667 21.397333 21.397333 0 0 0-30.250667 0.106667l-196.010667 195.989333z" fill="#3D3D3D" ></path><path d="M149.333333 874.602667L874.602667 874.666667 874.666667 149.397333 149.397333 149.333333 149.333333 874.602667zM106.666667 149.397333C106.666667 125.802667 125.909333 106.666667 149.397333 106.666667h725.205334C898.197333 106.666667 917.333333 125.909333 917.333333 149.397333v725.205334A42.794667 42.794667 0 0 1 874.602667 917.333333H149.397333A42.794667 42.794667 0 0 1 106.666667 874.602667V149.397333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-biaodankongjianfuxuankong" viewBox="0 0 1024 1024"><path d="M149.333333 874.602667L874.602667 874.666667 874.666667 149.397333 149.397333 149.333333 149.333333 874.602667zM106.666667 149.397333C106.666667 125.802667 125.909333 106.666667 149.397333 106.666667h725.205334C898.197333 106.666667 917.333333 125.909333 917.333333 149.397333v725.205334A42.794667 42.794667 0 0 1 874.602667 917.333333H149.397333A42.794667 42.794667 0 0 1 106.666667 874.602667V149.397333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-youduiqi" viewBox="0 0 1024 1024"><path d="M174.08 225.28c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z m266.24 143.36c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z m-266.24 143.36c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z m266.24 163.84c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z m-266.24 163.84c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z"  ></path></symbol><symbol id="icon-juzhong" viewBox="0 0 1024 1024"><path d="M174.08 225.28c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z m133.12 143.36c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z m-133.12 143.36c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z m133.12 163.84c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z m-133.12 163.84c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z"  ></path></symbol><symbol id="icon-zuoduiqi" viewBox="0 0 1024 1024"><path d="M174.08 225.28c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z m0 143.36c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z m0 143.36c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z m0 163.84c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z m0 163.84c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h675.84c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-675.84z"  ></path></symbol><symbol id="icon-jiacu" viewBox="0 0 1024 1024"><path d="M311.296 460.8h266.24c59.392 0 108.544-49.152 108.544-108.544s-49.152-108.544-108.544-108.544h-266.24V460.8z m-30.72-296.96h296.96c104.448 0 190.464 83.968 190.464 190.464 0 55.296-22.528 104.448-61.44 139.264 55.296 34.816 92.16 98.304 92.16 167.936 0 110.592-90.112 198.656-198.656 198.656h-368.64v-696.32h49.152z m30.72 614.4h286.72c65.536 0 116.736-53.248 116.736-116.736s-53.248-116.736-116.736-116.736h-286.72v233.472z"  ></path></symbol><symbol id="icon-xieti" viewBox="0 0 1024 1024"><path d="M460.8 798.72l153.6-573.44h81.92v-40.96h-204.8v40.96h79.872l-153.6 573.44h-90.112v40.96h204.8v-40.96h-71.68z"  ></path></symbol><symbol id="icon-xiahuaxian" viewBox="0 0 1024 1024"><path d="M698.368 204.8c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v276.48c0 131.072-104.448 235.52-235.52 235.52s-235.52-106.496-235.52-235.52V204.8c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v276.48c0 108.544 88.064 194.56 194.56 194.56s194.56-88.064 194.56-194.56V204.8z m-401.408 634.88c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h409.6c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-409.6z"  ></path></symbol><symbol id="icon-chufadaodaxiao" viewBox="0 0 1024 1024"><path d="M128 554.666667a42.666667 42.666667 0 0 0 0 85.333333h752.213333c38.656 0 57.386667-47.317333 29.184-73.813333l-227.285333-213.333334a42.666667 42.666667 0 1 0-58.410667 62.293334L772.394667 554.666667H128z" fill="#3D3D3D" ></path></symbol><symbol id="icon-tejiajipiaobiaoqian" viewBox="0 0 1024 1024"><path d="M826.965333 915.029333l-294.570666-144.064-314.026667 145.216C183.338667 934.784 149.333333 914.453333 149.333333 874.645333V149.333333A64.085333 64.085333 0 0 1 213.376 85.333333h618.581333A63.936 63.936 0 0 1 896 149.354667V874.666667c0 39.936-34.090667 59.989333-69.034667 40.384zM192 149.376v725.269333c0 7.573333-0.32 7.381333 6.4 3.84L522.666667 727.829333a21.333333 21.333333 0 0 1 20.437333 0.234667l304.725333 149.76c6.464 3.626667 5.482667 4.181333 5.482667-3.2V149.376A21.269333 21.269333 0 0 0 831.957333 128H213.376C201.621333 128 192 137.6 192 149.354667zM579.712 362.666667h81.493333c11.84 0 21.461333 9.472 21.461334 21.333333 0 11.776-9.6 21.333333-21.482667 21.333333H554.666667v85.333334h106.517333c11.861333 0 21.482667 9.472 21.482667 21.333333 0 11.776-9.6 21.333333-21.482667 21.333333H554.666667v127.850667c0 11.861333-9.472 21.482667-21.333334 21.482667-11.776 0-21.333333-9.578667-21.333333-21.482667V533.333333h-106.517333A21.354667 21.354667 0 0 1 384 512c0-11.776 9.6-21.333333 21.482667-21.333333H512v-85.333334h-106.517333A21.354667 21.354667 0 0 1 384 384c0-11.776 9.6-21.333333 21.482667-21.333333h81.472l-97.813334-114.133334a21.333333 21.333333 0 0 1 32.384-27.733333L533.333333 351.189333l111.786667-130.432a21.333333 21.333333 0 1 1 32.426667 27.776L579.690667 362.666667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-you" viewBox="0 0 1024 1024"><path d="M621.248 877.248l320-320c24.992-24.992 24.992-65.504 0-90.496l-320-320c-24.992-24.992-65.504-24.992-90.496 0s-24.992 65.504 0 90.496l210.752 210.752h-613.504c-35.36 0-64 28.64-64 64s28.64 64 64 64h613.504l-210.752 210.752c-12.48 12.512-18.752 28.864-18.752 45.248s6.24 32.768 18.752 45.248c24.992 24.992 65.504 24.992 90.496 0z"  ></path></symbol><symbol id="icon-top1" viewBox="0 0 1024 1024"><path d="M567.6 154.7c-29.7-29.7-77.4-29.5-106.9 0L300.2 315.2c-29.7 29.7-19.7 53.5 22 53.5H706c41.6 0 51.6-23.9 22-53.5L567.6 154.7zM64.9 584.7h118.5v298.5h47.3V584.7h118.4v-35.4H64.9zM532.5 541c-47.4 0-85.2 15.9-113.6 47.7-28.4 31.8-42.5 74.2-42.5 127.3 0 52.8 14.1 95.2 42.3 127.3 28.2 32.1 65.4 48.2 111.8 48.2 48.6 0 87.1-15.8 115.5-47.5s42.6-74.5 42.6-128.5c0-52.9-14.2-95.3-42.6-127-28.4-31.6-66.3-47.5-113.5-47.5z m77.8 278.2c-18.7 24.6-45.1 36.9-79.2 36.9-32.7 0-58.2-12.5-76.7-37.4-18.5-25-27.7-59.2-27.7-102.9 0-43.8 9.3-77.9 28-102.5 18.6-24.6 44.6-36.9 77.8-36.9 33.1 0 59 12.3 77.7 36.8 18.7 24.5 28.1 58.5 28.1 102 0 44.7-9.3 79.4-28 104zM932.7 569.7c-17.6-13.6-46.6-20.4-86.8-20.4H755v333.8h46.9V750.5h21c42.7 0 76.1-10.1 100.2-30.2 24.1-20.2 36.1-48 36.1-83.5-0.1-31.1-8.9-53.4-26.5-67.1z m-46.5 125.6c-15.3 12.9-37.1 19.4-65.2 19.4h-19.2v-130h29.1c28.1 0 48.2 4.3 60.2 12.9 12 8.6 18 22.9 18 42.9 0.1 23.6-7.6 41.8-22.9 54.8z" fill="#494949" ></path></symbol><symbol id="icon-hide" viewBox="0 0 1024 1024"><path d="M231.5 706.8l41.9-41.9c-10.9-8.6-21.6-17.5-32-26.7-49.3-43.8-86.2-88-104.3-111.4 18.2-23.4 55-67.6 104.3-111.4 63.9-56.7 162.8-124.3 270.6-124.3 38.9 0 76.5 8.8 111.8 22.7l44.9-45c-53-24.3-105.7-36.5-156.8-36.5-56.5 0-114.9 15-173.5 44.6-45.9 23.1-92 55.2-137.2 95.4-76 67.7-123 134.8-125 137.6-7 10.1-7 23.6 0 33.7 2 2.8 48.9 69.9 125.2 137.7 9.8 8.7 19.9 17.2 30.1 25.5z m591.1-334.6c-17.9-16-36.6-31.1-56-45.3l95.7-95.8c12.2-12.3 12.2-32.1 0-44.4l2.7 2.7c-5.9-5.9-13.8-9.2-22.2-9.2-8.3 0-16.3 3.3-22.1 9.2L218.2 793c-12.2 12.3-12.2 32.1 0 44.4l-2.7-2.7c5.9 5.9 13.9 9.2 22.2 9.2 8.3 0 16.3-3.4 22.2-9.3l65-65.1c4.6 2.5 9.2 4.9 13.8 7.2 58.6 29.6 117 44.6 173.5 44.6s114.9-15 173.5-44.6c45.9-23.1 92-55.2 137.1-95.4C899 613.5 946 546.4 948 543.6c7-10.1 7-23.6 0-33.7-2.2-2.8-49.2-69.9-125.4-137.7zM644.3 526.7c0 73.1-59.4 132.6-132.3 132.6-22.3 0-43.4-5.6-61.8-15.4L629 464.8c10.1 19.1 15.3 40.3 15.3 61.9z m138.3 111.4C718.7 694.8 619.8 762.4 512 762.4c-50.7 0-99.4-15-143.5-36.7l38.8-38.8c31.1 20.5 67.5 31.4 104.7 31.4 105.4 0 191.1-85.9 191.1-191.5 0-38.7-11.5-74.7-31.3-104.9l52.6-52.7c20.2 14.3 39.6 29.7 58.2 46.2 49.3 43.7 86.2 88 104.3 111.4-18.1 23.3-55 67.6-104.3 111.3zM512 394.2c9.8 0 19.3 1.1 28.5 3.1l46.6-46.6c-23.7-10.2-49.2-15.4-75-15.4-105.4 0-191.1 85.9-191.1 191.5 0 26.7 5.5 52.1 15.4 75.1l46.6-46.6c-2.1-9.4-3.1-18.9-3.1-28.5-0.2-73.2 59.1-132.6 132.1-132.6z"  ></path></symbol><symbol id="icon-bofang1" viewBox="0 0 1024 1024"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z" fill="#3D3D3D" ></path></symbol><symbol id="icon-yuyan" viewBox="0 0 1024 1024"><path d="M512 15.36c-273.92 0-496.64 222.72-496.64 496.64 0 111.104 35.84 216.064 103.424 303.104l2.048 3.072c0.512 1.536 1.536 2.56 3.072 3.584 94.72 118.784 236.544 186.88 388.096 186.88 154.112 0 296.448-69.632 391.168-190.976l0.512-0.512c1.024-0.512 1.536-2.048 2.048-3.072 67.072-87.552 102.4-192 102.4-302.08 0.512-273.92-222.208-496.64-496.128-496.64z m177.664 256c-16.896-63.488-40.448-127.488-70.144-191.488 95.744 24.064 181.76 79.36 243.2 157.696-55.296 14.848-113.152 26.112-173.056 33.792z m31.744 215.04c-1.536-54.784-8.192-110.08-19.456-165.376 66.048-8.704 130.56-22.016 191.488-39.936 37.376 61.952 59.392 132.608 63.488 205.312h-235.52z m-24.064 236.032c14.336-61.44 22.528-123.904 24.064-185.344h235.52c-4.608 79.872-30.208 156.16-74.752 222.72-58.88-16.384-121.344-29.184-184.832-37.376z m151.552 80.896C788.992 872.448 708.096 922.112 619.52 944.128c27.136-57.344 48.64-115.2 65.024-172.032 56.32 7.168 111.616 17.408 164.352 31.232z m-508.928-28.16c15.872 55.808 37.888 112.64 64 169.472-86.528-21.504-165.888-69.632-225.28-136.192 51.712-14.848 105.984-26.112 161.28-33.28z m46.08-500.224c17.92-66.56 43.52-134.144 77.312-205.824 32.256-3.584 65.536-3.584 97.792 0 34.304 72.192 59.392 140.288 77.824 207.36-83.968 7.168-169.984 6.656-252.928-1.536z m-32.256 211.456c1.536-53.248 8.192-107.52 19.968-161.28 90.624 9.728 185.344 10.24 276.992 2.048 11.264 53.248 17.92 107.008 19.456 159.232h-316.416z m316.416 51.2c-2.048 59.904-9.728 118.272-24.064 179.712-88.576-7.68-180.224-7.168-267.776 2.048-14.848-61.952-23.04-121.344-24.576-181.248h316.416z m-265.728-458.24c-29.696 62.976-52.736 126.464-69.632 188.928-58.88-8.192-115.712-20.48-169.472-36.352 60.928-75.264 145.408-129.024 239.104-152.576z m-101.888 458.24c1.536 61.952 10.24 125.44 24.576 187.904-62.976 9.216-123.904 22.528-181.76 39.936-46.592-67.072-73.216-145.92-78.336-227.328h235.52z m-235.52-51.2c4.096-74.752 27.136-146.944 67.072-210.432 59.904 18.944 123.392 32.768 188.928 42.496-11.776 55.808-18.432 112.128-20.48 167.936h-235.52z m565.76 281.088c-17.92 60.928-41.472 122.368-72.192 187.392-32.256 3.584-65.536 3.584-97.792 0-30.208-64.512-53.76-125.44-71.68-185.856 79.36-7.68 161.792-8.192 241.664-1.536z"  ></path></symbol><symbol id="icon-jianqie1" viewBox="0 0 1024 1024"><path d="M756.736 594.432c-26.112 0-51.2 6.144-73.216 16.896l-127.488-138.24L855.04 149.504c11.776-12.8 11.264-33.28-1.536-45.056-12.8-11.776-33.28-11.264-45.056 1.536L512 425.984 216.064 105.984c-11.776-12.8-32.256-13.824-45.056-1.536-12.8 11.776-13.824 32.256-1.536 45.056l299.008 323.584-127.488 138.24c-22.016-10.752-47.104-16.896-73.216-16.896-92.16 0-166.912 74.752-166.912 166.912s74.752 166.912 166.912 166.912 166.912-74.752 166.912-166.912c0-42.496-15.872-81.408-42.496-111.104l120.32-130.048 120.32 130.048c-26.112 29.696-42.496 68.096-42.496 111.104 0 92.16 74.752 166.912 166.912 166.912s166.912-74.752 166.912-166.912-75.264-166.912-167.424-166.912z m-489.472 269.824c-56.832 0-102.912-46.08-102.912-102.912s46.08-102.912 102.912-102.912 102.912 46.08 102.912 102.912-46.08 102.912-102.912 102.912z m489.472 0c-56.832 0-102.912-46.08-102.912-102.912s46.08-102.912 102.912-102.912 102.912 46.08 102.912 102.912-46.08 102.912-102.912 102.912z"  ></path></symbol><symbol id="icon-Service-default" viewBox="0 0 1024 1024"><path d="M371.2 698.88c-118.784 4.608-175.616 178.688-216.576 264.192h266.24l-25.088-263.168c-8.704-1.024-16.384-1.536-24.576-1.024z" fill="#D4237A" ></path><path d="M583.168 258.048c62.976 84.48 135.168 118.784 135.168 118.784-8.704-145.92-75.264-196.608-212.992-197.12-164.864-0.512-246.784 125.952-210.432 257.536 0 0 286.208-118.784 288.256-179.2z" fill="#2C2C2C" ></path><path d="M494.08 654.336c-13.312 1.024-24.064 10.24-23.552 19.456l2.048 29.696c0.512 8.704 12.8 15.872 26.112 14.336l41.984-4.096c13.312-1.024 24.576-10.24 24.064-19.456l-2.048-28.672c-0.512-9.216-12.8-15.872-26.112-14.848l-42.496 3.584z" fill="#1296DB" ></path><path d="M765.44 540.16c51.2-13.312 89.6-12.288 89.6-117.76 0-50.688-30.208-94.208-73.216-112.128-31.744-119.808-130.048-241.664-278.016-244.736h-13.824c-143.36 3.584-241.664 114.688-252.416 243.2-45.568 16.896-79.872 61.44-78.336 114.176 3.584 118.272 51.712 119.808 115.712 121.344V315.904c1.536-97.792 96.768-205.824 228.864-205.824 131.072 0 203.776 101.888 235.52 192.512V537.6c-6.656 15.36-23.552 32.256-55.296 62.464-40.96 39.936-100.352 60.416-100.352 60.416-6.656 1.536-11.776 10.752-9.728 18.432 2.048 7.68 10.24 12.8 16.896 9.728 0 0 62.464-20.48 109.568-65.536 46.08-45.568 65.024-82.432 65.024-82.944z" fill="#D81E06" ></path><path d="M660.48 692.736c-10.752 0.512-21.504 3.072-32.768 7.68l-24.576 262.656h266.24c-39.424-82.432-106.496-274.432-208.896-270.336z" fill="#D4237A" ></path><path d="M556.544 750.592H467.456c-6.144 0-11.776 3.072-11.264 6.656l14.336 205.824H552.96l14.336-205.824c0.512-3.584-4.608-6.656-10.752-6.656z" fill="#D81E06" ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M1008.96 634.944a513.152 513.152 0 0 0 7.104-33.472c0.448-2.624 0.96-5.184 1.344-7.808 42.176-258.432-120.32-510.72-379.712-576.384A1995.648 1995.648 0 0 0 630.4 15.424a26.944 26.944 0 0 0-13.184 52.288l7.296 1.6a457.728 457.728 0 0 1 126.4 52.992l-0.192 0.064c11.584 7.04 22.784 14.784 33.728 22.848 0.704 0.704 1.344 1.408 2.112 1.984 1.984 1.536 4.032 2.88 6.016 4.48 18.176 14.144 34.944 29.376 50.432 45.504l2.944 3.136c15.04 16 28.864 32.896 41.216 50.496h-0.192c3.328 4.8 6.528 9.728 9.664 14.656 2.56 3.968 5.056 7.936 7.488 11.968 3.136 5.248 6.336 10.496 9.28 15.872 5.248 9.728 10.24 19.648 14.848 29.888 1.984 4.416 4.032 8.768 5.888 13.248l3.456 8.512 3.776 9.984c1.6 4.352 3.136 8.704 4.608 13.12l2.24 6.848c1.728 5.504 3.328 10.944 4.864 16.512l1.152 4.288c1.728 6.464 3.264 12.928 4.672 19.456l0.384 1.728a457.6 457.6 0 0 1-339.712 538.24l-7.36 1.728a363.904 363.904 0 0 1-28.288 5.504l-6.976 1.024c-4.864 0.704-9.728 1.28-14.592 1.856l-11.008 1.024-10.752 0.832a449.92 449.92 0 0 1-16.192 0.704l-5.44 0.128c-6.656 0.064-13.376 0-20.096-0.192l-3.136-0.064a461.44 461.44 0 0 1-215.552-63.296A457.856 457.856 0 0 1 100.48 313.344c4.928-10.176 10.176-20.16 15.872-29.952 0.448-1.152 1.088-2.112 1.6-3.072 13.056-22.08 28.032-43.2 44.8-62.976l1.28-1.472a453.952 453.952 0 0 1 90.368-80.96l0.32-0.192a478.08 478.08 0 0 1 35.328-21.696l0.448-0.256c12.032-6.592 24.448-12.736 37.248-18.368l2.624-1.088 5.056-2.048 0.96-0.512A455.872 455.872 0 0 1 511.552 55.616l7.488 0.192a26.944 26.944 0 0 0 0-53.888h-7.488c-8.768 0-17.536 0.192-26.176 0.64l0.064-0.32a509.248 509.248 0 0 0-310.208 125.568c-2.752 2.432-5.568 4.736-8.32 7.232l-2.56 2.432A507.712 507.712 0 0 0 0 511.808c0 1.792 0.192 3.52 0.256 5.312 0.064 12.224 0.64 24.448 1.6 36.672l0.192 3.712c1.216 13.632 3.008 27.2 5.312 40.832l0.576 3.328c6.912 38.912 18.304 77.632 34.816 115.456 75.776 173.12 236.416 282.368 412.096 301.568 3.968 0.448 7.872 1.024 11.84 1.344 5.376 0.448 10.752 0.704 16.128 1.024 10.048 0.64 20.096 0.96 30.144 0.96h4.032a507.712 507.712 0 0 0 491.328-384.448l0.128-0.512 0.512-2.112z"  ></path></symbol><symbol id="icon-diannao1" viewBox="0 0 1026 1024"><path d="M819.79603 190.298286H210.431072v308.700478l117.853482 117.85516h491.511476V190.298286z" fill="" ></path><path d="M921.559057 0H108.72342C50.524936 0 3.339244 47.291407 3.339244 105.635878v187.702402l72.822356 72.824035V74.941686H955.694851v658.628029H443.567322l290.433642 290.430285h110.017166c20.052241 0 36.305464-16.2549 36.305464-36.307142 0-20.050563-16.253222-36.305464-36.305464-36.305463h-182.299204v-145.799091h259.840131c58.20184 0 105.384176-47.291407 105.384176-105.630844V105.635878C1026.943233 47.298119 979.760896 0 921.559057 0z" fill="" ></path></symbol><symbol id="icon-erweima2" viewBox="0 0 1024 1024"><path d="M312.401987 313.238588V157.455059H156.618458l155.783529 155.783529z m632.863791 233.674458h77.894274v243.40915h-77.894274v-77.892601h-77.889255v-87.625621H789.483922v-77.892601h77.892601v77.892601h77.889255v-77.890928zM546.074771 1.673203v467.347241h477.085281V1.673203H546.074771z m399.191007 389.457987H623.967373V79.564131h321.298405v311.567059zM468.183843 1.673203H0.836601m866.541595 155.781856h-155.783529v155.783529h155.783529V157.455059z" fill="" ></path><path d="M0.836601 1.673203h467.347242v467.347241L389.856209 391.529412V78.640523l-312.801882 0.923608zM546.074771 3.346405h477.085281v467.347242L945.359477 393.202614V80.313725l-321.392104 0.923608zM546.074771 546.914719h165.523242v77.892601h-87.628967zM865.704993 714.457516L865.045752 624.80732h-75.407896l-0.152261-77.894274h77.892601v76.217725L943.686275 623.267974l1.579503-76.354928h77.894274v243.40915h-77.894274v-77.892601h-76.214379L868.392157 868.392157l78.551843 1.495843L945.359477 945.359477l77.803922 0.747922V1024L711.598013 712.432941" fill="" ></path></symbol><symbol id="icon-jiantou1" viewBox="0 0 1024 1024"><path d="M371.009939 847.365172l-47.965091-47.488 285.390869-287.348364L320.646465 227.602101 368.204283 179.717172l335.747879 332.419879-332.942223 335.228121z" fill="" ></path></symbol><symbol id="icon-sousuo2" viewBox="0 0 1082 1024"><path d="M1048.876071 1008.675512c-20.432651 20.432651-47.676185 20.432651-68.108836 0l-217.948274-204.326507c-88.541487 74.919719-197.515624 108.974137-313.300645 108.974137-252.002692-13.621767-449.518316-224.759158-435.896549-476.761851C27.243534 184.558599 238.380925-12.957025 490.383618 0.664742c245.191809 13.621767 435.896549 211.137391 435.896549 456.3292 0 102.163254-34.054418 204.326507-102.163254 279.246227l217.948275 204.326507c27.243534 20.432651 27.243534 47.676185 6.810883 68.108836zM456.3292 89.206229c-204.326507 6.810884-360.97683 183.893857-347.355063 381.40948s183.893857 360.97683 381.409481 354.165946c197.515624-6.810884 354.165946-170.272089 354.165946-367.787713-6.810884-204.326507-177.082973-374.598597-388.220364-367.787713z"  ></path></symbol><symbol id="icon-loading1" viewBox="0 0 1024 1024"><path d="M618.478254 134.804199a134.804199 134.804199 0 1 1-269.437761-0.085319 134.804199 134.804199 0 0 1 269.437761 0z m151.01483 239.490752a121.153141 121.153141 0 1 0 0.170639-242.476921 121.153141 121.153141 0 0 0-0.170639 242.476921z m118.42293 56.73721a107.843359 107.843359 0 1 0 0.085319 215.686719 107.843359 107.843359 0 0 0-0.085319-215.686719zM769.663723 730.331611a94.27762 94.27762 0 1 0 66.719546 27.558074 94.448259 94.448259 0 0 0-66.719546-27.558074z m-285.81903 131.818031a80.88252 80.88252 0 1 0 0.170638 161.850358 80.88252 80.88252 0 0 0-0.170638-161.850358zM198.025662 757.463089a67.4021 67.4021 0 1 0 0 134.889519 67.4021 67.4021 0 0 0 0-134.804199zM79.602733 485.03916A53.751041 53.751041 0 1 0 79.432095 592.711881a53.751041 53.751041 0 0 0 0.170638-107.672721zM197.940343 293.49775c2.559573 0 5.033828-1.023829 7.593401-1.450425a39.41743 39.41743 0 0 0 20.988502-10.408931 40.44126 40.44126 0 1 0-28.581903 11.859356z"  ></path></symbol><symbol id="icon-shoucang1" viewBox="0 0 1024 1024"><path d="M752 939.2c-9.6 0-20.8-3.2-30.4-8l-208-104L304 931.2c-20.8 11.2-48 9.6-67.2-4.8-19.2-14.4-30.4-40-25.6-64l43.2-224-164.8-153.6c-17.6-17.6-24-44.8-17.6-67.2 8-24 27.2-41.6 52.8-44.8l228.8-41.6 102.4-208c11.2-22.4 33.6-36.8 57.6-36.8s48 14.4 57.6 36.8l102.4 208 228.8 40c24 3.2 44.8 20.8 51.2 44.8 8 24 1.6 49.6-16 67.2l-164.8 155.2 41.6 224c4.8 25.6-6.4 49.6-25.6 64-9.6 8-22.4 12.8-36.8 12.8z" fill="#707070" ></path></symbol><symbol id="icon-xiaoxi" viewBox="0 0 2224 1024"><path d="M793.147369 895.500063c-3.526437-3.011448-5.418672-5.849801-6.536811-8.773088-1.978245-5.333737-0.946117-10.579312-0.258032-16.257091 0.774096-6.622821 1.462181-12.29845 1.806224-15.051867 0 0 15.567931-117.489496 14.535803-126.521692S794.695561 714.963672 794.695561 714.963672c-34.404267-31.308958-62.013691-67.347428-81.106984-107.427323C693.288984 564.873983 682.709672 519.117383 682.709672 472.499601c0-47.305867 10.923355-93.235563 31.651926-136.326908 19.868464-41.371131 49.112091-78.527739 85.236571-110.351686 35.951384-31.651926 77.667633-56.422998 124.199404-73.711142 47.907942-17.890219 98.826257-26.921339 151.292763-26.921339 68.893469 0 136.928982 14.19176 197.309546 45.327622 23.22288 12.041493 45.670589 25.71719 66.400236 41.887195 2.408299 1.892235 19.3524 21.416656 2.839427 37.672672-15.913049 15.653941-42.749452 1.462181-44.296569 0.344043-61.84167-47.477888-135.208769-70.184705-219.327202-70.184705-188.965436 0-342.752509 127.467809-342.752509 292.264248 0 77.924589 38.962832 154.818126 101.750619 210.983092 10.407291 9.376238 17.374155 22.449859 15.739952 36.039545l-10.751333 104.329864 98.310193-47.563899c9.633195-5.675629 25.975222-7.739885 35.436395 8.601067 11.439419 19.610432-6.708832 32.770064-6.708832 32.770064s-135.724833 71.130822-154.733191 80.59092c-2.752341 1.205224-6.192768 1.806224-9.547184 1.549267-4.387619-0.170946-8.602142-1.720213-11.612515-4.299458M788.072739 855.504028s15.051867-116.801411 14.535803-126.521692L788.072739 855.504028z m444.244022-514.514737c35.265449 0 69.411684 6.278779 101.492588 18.750325 30.706883 11.869472 58.315232 28.899584 81.882155 50.488262 23.22288 21.330645 41.458217 46.015707 54.10071 73.367099 12.9016 28.039478 19.524421 57.712083 19.524421 88.332955 0 28.211499-5.677779 55.820923-16.77208 81.968166-10.837344 25.545168-26.664382 49.02608-46.877964 69.755727-17.288144 17.630037-24.339944 42.402184-18.836336 66.228214v0.172021l6.364789 27.178296-46.444685-22.447709c-9.806291-4.816597-20.815657-7.311982-31.823947-7.311982-7.139961 0-14.278846 1.031053-21.246785 3.097459-26.834253 8.085003-54.18457 12.21244-81.366091 12.21244-35.263298 0-69.409533-6.278779-101.490437-18.749251-30.703658-11.870547-58.313082-28.900659-81.880005-50.489337-23.22288-21.330645-41.457142-46.016782-54.10071-73.367099-12.9016-28.039478-19.524421-57.713158-19.524422-88.332955 0-60.809542 26.147243-118.264668 73.625132-161.69898 23.566923-21.588678 51.090336-38.61879 81.88323-50.488261 32.081979-12.386611 66.227139-18.66539 101.490437-18.66539z m0-52.122465c-170.7301 0-309.121263 126.693713-309.121263 283.147117 0 156.366318 138.391164 283.146042 309.121263 283.146042 33.717257 0 66.057268-5.245576 96.420109-14.448717 1.978245-0.60315 4.128512-0.945042 6.192768-0.945042 3.095309 0 6.106757 0.68701 8.942959 2.064256l105.535089 51.00325c3.097459 1.461106 6.278779 2.150267 9.376237 2.150267 12.557557 0 23.480912-11.354483 20.299593-24.772147l-21.502667-91.945404c-1.549267-6.536811 0.514989-13.245643 5.331586-18.061165 48.766973-50.059284 78.528814-115.94238 78.528815-188.278426-0.086011-156.280307-138.47825-283.060031-309.124489-283.060031" fill="" ></path></symbol><symbol id="icon-yonghu" viewBox="0 0 1025 1024"><path d="M582.353 568.886c-3.173-1.033-23.208-10.067-10.688-48.126h-0.173c32.628-33.603 57.568-87.704 57.568-140.946 0-81.881-54.454-124.788-117.728-124.788-63.31 0-117.455 42.908-117.455 124.788 0 53.458 24.803 107.775 57.627 141.296 12.792 33.563-10.086 46.02-14.873 47.776-66.27 23.963-144.01 67.648-144.01 110.771v16.157c0 58.755 113.911 72.111 219.333 72.111 105.579 0 218.048-13.356 218.048-72.111v-16.157c0-44.427-78.127-87.76-147.65-110.771z m0 0" fill="" ></path><path d="M511.308 958.896c-246.714 0-447.417-200.703-447.417-447.424 0-246.714 200.703-447.417 447.417-447.417 246.722 0 447.424 200.703 447.424 447.417 0 246.722-200.703 447.424-447.424 447.424z m0-830.637c-211.307 0-383.213 171.906-383.213 383.213 0 211.28 171.906 383.22 383.213 383.22 211.28 0 383.22-171.94 383.22-383.22 0-211.306-171.94-383.213-383.22-383.213z m0 0" fill="" ></path></symbol><symbol id="icon-dianhua2" viewBox="0 0 1024 1024"><path d="M778.17 1024h-0.015l-5.288-0.122c-122.932-6.287-288.947-121.997-444.142-309.521l-57.323-69.24C116.215 457.585 34.905 274.423 53.921 155.155 67.34 71.01 192.43 0 263.913 0c35.204 0 47.965 17.521 52.425 27.983 40.468 71.912 90.529 196.971 90.765 241.826l0.016 3.192-1.146 2.981c-8.927 23.58-28.893 34.872-46.511 44.838-23.207 13.119-36.399 21.73-38.007 46.52-0.48 7.522 6.011 41.752 108.4 167.964l43.774 52.856c102.665 121.16 134.97 134.206 142.532 135.278 24.758 3.444 36.414-7.408 54.22-26.927 13.557-14.865 28.933-31.728 54.309-35.448l3.217-0.455 3.16 0.674c44.708 9.43 159.159 83.186 224.125 137.942 9.382 6.23 25.75 24.71 12.786 65.544C947.646 928.889 858.993 1024 778.17 1024z" fill="" ></path></symbol><symbol id="icon-icon_caiseqq" viewBox="0 0 1024 1024"><path d="M504.613 878.63c0 43.41-63.48 78.603-141.785 78.603-78.304 0-141.784-35.193-141.784-78.604 0-43.414 63.48-78.605 141.784-78.605 78.305 0 141.785 35.192 141.785 78.605z m153.056-78.606c-78.305 0-141.784 35.192-141.784 78.605 0 43.412 63.478 78.604 141.784 78.604 78.305 0 141.784-35.193 141.784-78.604 0-43.413-63.48-78.605-141.784-78.605z" fill="#FFC716" ></path><path d="M823.775 501.626s-10.73-10.999-22.245-21.179V354.801c0-160.71-130.278-290.987-290.985-290.987-160.706 0-290.983 130.278-290.983 290.987v125.646c-11.516 10.18-22.247 21.179-22.247 21.179-18.984 28.474-64.07 102.038-64.07 171.444 0 69.41 18.984 81.276 26.103 81.87 6.602 0.55 31.063-6.052 60.133-50.546C258.823 835.21 374.118 929.943 510.25 929.943c136.346 0 251.794-95.03 290.958-226.17 29.246 45.055 53.904 51.717 60.537 51.166 7.118-0.595 26.103-12.46 26.103-81.87-0.001-69.405-45.088-142.968-64.073-171.443z" fill="#37464F" ></path><path d="M296.46 551.457a374.82 374.82 0 0 0-3.465 51.017c0 158.907 98.987 287.722 221.091 287.722 122.106 0 221.092-128.815 221.092-287.722a374.647 374.647 0 0 0-3.466-51.017H296.46z m137.557-354.165c-32.435 0-58.731 35.66-58.731 79.643 0 43.988 26.295 79.644 58.731 79.644 32.437 0 58.732-35.656 58.732-79.644-0.001-43.983-26.296-79.643-58.732-79.643z m9.788 112.42c-11.794 0-21.356-14.607-21.356-32.63 0-18.017 9.562-32.625 21.356-32.625 11.796 0 21.357 14.607 21.357 32.626 0 18.022-9.561 32.629-21.357 32.629z m145.049-112.42c-32.437 0-58.733 35.66-58.733 79.643 0 43.988 26.295 79.644 58.733 79.644 32.436 0 58.73-35.656 58.73-79.644 0-43.983-26.295-79.643-58.73-79.643z m9.91 82.612l-0.03 0.005c0 0.022 0.022 0.034 0.022 0.055 0 0.896-0.724 1.62-1.618 1.62-0.738 0-1.258-0.545-1.453-1.219l-0.062 0.01v0.151c-3.74-9.311-10.36-15.601-18.042-15.601-7.677 0-14.293 6.28-18.035 15.587l-0.059-0.04-0.056-0.01c-0.265 0.556-0.722 1-1.379 1a1.648 1.648 0 0 1-1.646-1.645c0-0.017 0.02-0.026 0.02-0.042l-0.037-0.01c-0.058-0.892-0.166-1.763-0.166-2.68 0-18.022 9.562-32.63 21.357-32.63 11.794 0 21.355 14.607 21.355 32.63 0.003 0.966-0.108 1.883-0.171 2.819z" fill="#FFFFFF" ></path><path d="M280.23 535.44c-5.34 26.697-16.61 146.531-11.272 173.227 5.337 26.696 27.795 22.237 59.918 22.544 31.144 0.292 67.628 8.896 68.222-30.256 0.594-39.155 0.594-116.274 9.492-144.754 8.897-28.473-126.36-20.76-126.36-20.76z" fill="#FF3A2F" ></path><path d="M273.127 592.643l125.27 40.494c1.087-30.756 3.287-61.237 8.193-76.936 8.9-28.473-126.36-20.76-126.36-20.76-1.945 9.715-4.674 31.783-7.103 57.202z" fill="#DD2C00" ></path><path d="M511.139 467.217c97.636 0 176.784-35.595 176.784-57.545 0-16.608-79.148-33.813-176.784-33.813-97.637 0-176.786 15.426-176.786 33.813 0 20.766 79.148 57.545 176.786 57.545z" fill="#FFC716" ></path><path d="M512.92 488.575s112.119 1.184 201.7-36.78c89.577-37.966 88.69-42.268 98.478-42.268 9.787 0 21.354 14.093 26.249 39.525 4.894 25.434 10.68 45.457-10.233 57.912-20.912 12.458-157.952 92.993-312.342 92.993h-7.71c-154.394 0-291.432-80.534-312.343-92.993-20.912-12.455-15.128-32.477-10.233-57.912 4.893-25.43 16.462-39.525 26.25-39.525 9.789 0 8.9 4.302 98.478 42.268 89.58 37.964 201.705 36.78 201.705 36.78z" fill="#FF3A2F" ></path></symbol><symbol id="icon-xiaoxi1" viewBox="0 0 2224 1024"><path d="M1394.932829 238.293629c26.350443 0 47.755273 21.44891 47.755273 47.789677v336.516736c0 26.285935-21.403755 47.628407-47.755273 47.628407h-117.560455c-30.439175 0-55.06833 24.620554-55.06833 54.991995v13.115552a107337.342371 107337.342371 0 0 1-68.62146-55.743514c-9.788014-8.010819-22.048835-12.365109-34.741859-12.365108H829.559985c-26.297762 0-47.701516-21.342472-47.701516-47.628407v-336.516736c0-26.340767 21.403755-47.789677 47.701516-47.789677h565.372844v0.001075z m0-55.047902H829.559985c-56.735862 0-102.769846 46.069464-102.769846 102.836504v336.516736c0 56.658452 46.033984 102.674159 102.769846 102.674159h289.381815s119.710722 97.408156 135.952761 110.093654c7.637747 5.913233 13.122002 8.439797 16.778531 8.439797 4.087657 0 5.916459-3.226475 5.807871-8.439797-0.16127-9.783713-0.107513-110.093654-0.107514-110.093654h117.55938c56.84445 0 102.825753-46.015707 102.825753-102.674159v-336.516736c-0.001075-56.76704-45.982378-102.836504-102.825753-102.836504" fill="" ></path><path d="M1318.78221 458.479862c0 22.846584-18.553576 41.28512-41.302323 41.285121-22.801428 0-41.302322-18.438537-41.302322-41.285121s18.500895-41.284045 41.302322-41.284045c22.748746 0 41.302322 18.438537 41.302323 41.284045zM1153.57507 458.479862c0 22.846584-18.553576 41.28512-41.301247 41.285121-22.829381 0-41.302322-18.438537-41.302322-41.285121s18.472941-41.284045 41.302322-41.284045c22.746596 0 41.301247 18.438537 41.301247 41.284045zM988.367931 458.479862c0 22.846584-18.553576 41.28512-41.302323 41.285121-22.828306 0-41.301247-18.438537-41.301247-41.285121s18.472941-41.284045 41.301247-41.284045c22.748746 0 41.302322 18.438537 41.302323 41.284045z" fill="" ></path></symbol><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M919.273 1003.055L20.945 104.727c-23.272-23.272-23.272-60.509 0-83.782s60.51-23.272 83.782 0l898.328 898.328c23.272 23.272 23.272 60.509 0 83.782s-60.51 23.272-83.782 0z" fill="" ></path><path d="M20.945 919.273L919.273 20.945c23.272-23.272 60.509-23.272 83.782 0s23.272 60.51 0 83.782l-898.328 898.328c-23.272 23.272-60.509 23.272-83.782 0s-23.272-60.51 0-83.782z" fill="" ></path></symbol><symbol id="icon-kefu2" viewBox="0 0 1024 1024"><path d="M673.441 658.255c5.99-6.995 3.996-17.984-2.999-23.974-6.992-5.994-17.981-3.996-23.97 2.994-35.966 39.956-74.92 58.939-129.861 58.939-54.943 0-89.905-14.985-129.863-58.94-5.994-6.99-16.983-8.989-23.974-2.993-6.993 5.99-8.991 16.98-3 23.974 46.952 52.944 90.905 72.922 156.837 72.922 65.929 0 114.874-23.973 156.83-72.922zM386.748 481.441v-59.934c0-15.981-12.987-29.97-29.97-29.97-15.98 0-29.968 12.987-29.968 29.97v59.934c0 15.987 12.986 29.97 29.968 29.97 15.982 0 29.97-12.987 29.97-29.97z m527.436-62.93c-44.951-181.808-205.78-316.663-397.573-316.663-191.796 0-352.624 134.855-397.579 316.662-47.95 17.982-81.912 70.924-81.912 132.859 0 70.923 44.95 129.861 103.889 138.852 0 0 0 0.997 1.002 0.997h66.926c-26.97-50.945-41.955-108.882-41.955-169.819 0-198.787 156.831-359.615 349.629-359.615 192.79 0 349.623 160.828 349.623 359.615 0 133.859-70.924 249.737-176.81 311.67-3.998-1.001-8.991-1.998-13.985-1.998-32.965 0-59.94 26.97-59.94 59.934 0 32.967 26.975 59.936 59.94 59.936 32.965 0 59.935-26.97 59.935-59.936 0-4.993-1-9.986-1.998-13.982 68.925-44.955 124.868-109.883 157.834-186.8 58.933-9.993 104.885-67.93 104.885-138.853 0-61.936-34.963-114.878-81.911-132.859z m-207.778 62.93v-59.934c0-15.981-12.985-29.97-29.968-29.97-15.982 0-29.966 12.987-29.966 29.97v59.934c0 15.987 12.981 29.97 29.966 29.97 15.98 0 29.968-12.987 29.968-29.97z m0 0" fill="" ></path></symbol><symbol id="icon-erweima3" viewBox="0 0 1024 1024"><path d="M275.25 16.445H95.39C43.044 16.445 0.61 58.881 0.61 111.226v179.86c0 52.344 42.435 94.78 94.78 94.78h179.86c52.345 0 94.78-42.436 94.78-94.78v-179.86c0-52.346-42.435-94.78-94.78-94.78z m-5.971 244.976c0 13.087-10.609 23.696-23.695 23.696H125.056c-13.088 0-23.696-10.61-23.696-23.696V140.893c0-13.09 10.61-23.696 23.696-23.696h120.528c13.087 0 23.695 10.606 23.695 23.696V261.42z m644.06-244.976H733.48c-52.346 0-94.78 42.436-94.78 94.781v179.86c0 52.344 42.434 94.78 94.78 94.78h179.86c52.346 0 94.78-42.436 94.78-94.78v-179.86c0-52.346-42.433-94.78-94.78-94.78z m-5.967 244.976c0 13.087-10.61 23.696-23.696 23.696H763.148c-13.088 0-23.696-10.61-23.696-23.696V140.893c0-13.09 10.608-23.696 23.696-23.696h120.527c13.087 0 23.696 10.606 23.696 23.696V261.42zM275.25 654.537H95.39c-52.346 0-94.78 42.435-94.78 94.781v179.86c0 52.344 42.435 94.78 94.78 94.78h179.86c52.345 0 94.78-42.435 94.78-94.78v-179.86c0-52.347-42.435-94.78-94.78-94.78z m-5.971 244.974c0 13.087-10.609 23.695-23.695 23.695H125.056c-13.088 0-23.696-10.608-23.696-23.695V778.984c0-13.089 10.61-23.696 23.696-23.696h120.528c13.087 0 23.695 10.607 23.695 23.696V899.51z m644.06-244.974H733.48c-52.346 0-94.78 42.435-94.78 94.781v179.86c0 52.344 42.434 94.78 94.78 94.78h179.86c52.346 0 94.78-42.435 94.78-94.78v-179.86c0-52.347-42.433-94.78-94.78-94.78z m-5.967 244.974c0 13.087-10.61 23.695-23.696 23.695H763.148c-13.088 0-23.696-10.608-23.696-23.695V778.984c0-13.089 10.608-23.696 23.696-23.696h120.527c13.087 0 23.696 10.607 23.696 23.696V899.51z" fill="" ></path><path d="M739.452 453.035H571.534V83.612c0-37.097-30.073-67.167-67.17-67.167-37.095 0-67.166 30.071-67.166 67.167v369.422H67.778C30.684 453.034 0.612 483.105 0.612 520.2s30.072 67.17 67.168 67.17h671.673c37.095 0 67.166-30.075 67.166-67.17s-30.07-67.165-67.166-67.165zM571.534 956.79c0 37.095-30.073 67.168-67.17 67.168-37.095 0-67.166-30.073-67.166-67.168V721.707c0-37.097 30.072-67.17 67.166-67.17 37.097 0 67.17 30.073 67.17 67.17V956.79z m436.586-436.589c0 37.095-30.07 67.17-67.166 67.17-37.098 0-67.167-30.075-67.167-67.17 0-37.096 30.069-67.166 67.167-67.166 37.096 0 67.166 30.07 67.166 67.166z" fill="" ></path></symbol><symbol id="icon-guanbi1" viewBox="0 0 2224 1024"><path d="M1149.833606 514.600748L1499.380958 165.054471c11.009365-11.009365 11.009365-27.523414 0-38.532779-11.009365-11.009365-27.523414-11.009365-38.532779 0L1111.300827 476.069044 761.753475 123.76935c-11.009365-11.009365-27.523414-11.009365-38.532779 0-11.009365 11.009365-11.009365 27.523414 0 38.532779L1072.768048 511.849481 723.220696 864.149175c-11.009365 11.009365-11.009365 27.523414 0 38.532779 11.009365 11.009365 27.523414 11.009365 38.532779 0l349.547352-349.546277L1460.848179 902.681954c11.009365 11.009365 27.523414 11.009365 38.532779 0s11.009365-27.523414 0-38.532779l-349.547352-349.548427z" fill="" ></path></symbol><symbol id="icon-niantie" viewBox="0 0 1024 1024"><path d="M828.6 456.1H532.4c-72.7 0-132 59.2-132 132v240.2c0 72.7 59.2 132 132 132h296.3c72.7 0 132-59.2 132-132V588c0-72.7-59.2-131.9-132.1-131.9z m76 372.2c0 41.8-34.1 76-76 76H532.4c-41.8 0-76-34.1-76-76V588c0-41.8 34.1-76 76-76h296.3c41.8 0 76 34.1 76 76l-0.1 240.3z" fill="" ></path><path d="M313.7 792.3H177.3c-31.4 0-57.1-25.6-57.1-57.1V177c0-31.4 25.6-57.1 57.1-57.1h502.2c31.4 0 57.1 25.6 57.1 57.1v195.9c0 15.5 12.5 28 28 28s28-12.5 28-28V177c0-62.3-50.8-113.1-113.1-113.1H177.3C115 63.9 64.2 114.6 64.2 177v558.2c0 62.3 50.8 113.1 113.1 113.1h136.4c15.5 0 28-12.5 28-28s-12.5-28-28-28z" fill="" ></path><path d="M652.5 232H204.2c-15.5 0-28 12.5-28 28s12.5 28 28 28h448.2c15.5 0 28-12.5 28-28s-12.4-28-27.9-28zM372.3 400.1H204.2c-15.5 0-28 12.5-28 28s12.5 28 28 28h168.1c15.5 0 28-12.5 28-28s-12.5-28-28-28z m-56 168H204.2c-15.5 0-28 12.5-28 28s12.5 28 28 28h112.1c15.5 0 28-12.5 28-28 0-15.4-12.5-28-28-28z" fill="" ></path></symbol><symbol id="icon-zhankai" viewBox="0 0 1024 1024"><path d="M545.753243 221.413785c0-5.756097 5.611811-17.173125 11.222599-34.347272 11.195993-17.075911 39.201837-22.833031 56.007595-5.65786l330.544275 297.023834c11.195993 11.418051 16.808828 22.833031 16.808828 34.250058 0 17.075911-5.611811 28.493961-16.808828 34.249035L612.983437 843.957461c-16.806781 11.414981-39.201837 11.414981-56.007595-5.758144-11.222599-17.073864-11.222599-39.903825 5.586229-57.077973L859.488691 518.342452 562.562071 255.662821c-11.195993-11.414981-16.808828-22.830985-16.808828-34.249036z m-481.786884 0c0-5.756097 5.608741-17.173125 11.195993-34.347272 11.220552-17.075911 39.22435-22.833031 56.034201-5.65786l330.517669 297.023834c11.222599 11.418051 16.807804 22.833031 16.807804 34.250058 0 17.075911-5.585205 28.493961-16.807804 34.249035l-330.517669 297.025881c-16.809851 11.414981-39.226397 11.414981-56.034201-5.758144-11.195993-17.073864-11.195993-39.903825 5.609765-57.077973l296.928666-262.777869L80.77314 255.662821c-11.222599-11.414981-16.806781-22.830985-16.806781-34.249036z"  ></path></symbol><symbol id="icon-mobantubiao" viewBox="0 0 1024 1024"><path d="M 221.867 0 h 580.267 a 136.533 136.533 0 0 1 136.533 136.533 v 750.933 a 136.533 136.533 0 0 1 -136.533 136.533 H 221.867 a 136.533 136.533 0 0 1 -136.533 -136.533 V 136.533 a 136.533 136.533 0 0 1 136.533 -136.533 Z m 68.2667 170.667 a 34.1333 34.1333 0 1 0 0 68.2667 h 443.733 a 34.1333 34.1333 0 1 0 0 -68.2667 H 290.133 Z m 0 238.933 a 34.1333 34.1333 0 1 0 0 68.2667 h 443.733 a 34.1333 34.1333 0 1 0 0 -68.2667 H 290.133 Z m 0 238.933 a 34.1333 34.1333 0 1 0 0 68.2667 h 273.067 a 34.1333 34.1333 0 1 0 0 -68.2667 H 290.133 Z" fill="#333333" ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M649.132375 943.806685c-16.616633 0-32.872035-6.9537-43.347738-18.422789-14.178323-15.623247-59.422524-56.352059-96.358409-56.352059-36.755269 0-82.541318 40.81912-95.726254 55.178058-10.475703 11.378781-26.460182 18.151865-42.986507 18.151865-7.76647 0-15.262016-1.535232-22.0351-4.515389l-1.174002-0.541847-112.342887-62.85422-1.174001-0.81277c-20.499868-14.358938-28.266337-42.354352-18.061558-65.111914 0.090308-0.090308 10.385396-23.931564 10.385396-45.605433 0-65.653761-53.46221-119.206279-119.206279-119.206279H102.318723c-18.78402 0-34.136344-16.797248-39.012964-42.625276-0.361231-2.077079-9.572625-51.204515-9.572626-89.76594 0-38.651733 9.211394-87.688861 9.572626-89.856249 4.966928-26.279566 20.590176-42.986507 39.825734-42.625275h3.973543c65.653761 0 119.206279-53.46221 119.206279-119.20628 0-21.673869-10.20478-45.424817-10.385396-45.605432-10.114472-22.757562-2.348002-50.843284 18.332481-65.021607l1.174001-0.81277 118.664433-65.111915 1.264309-0.541846c6.682776-2.799541 13.907399-4.334774 21.764177-4.334774 16.526325 0 32.601111 6.682776 43.167122 17.790634 14.088015 14.720169 58.338831 52.830056 94.371638 52.830055 35.581268 0 79.741776-37.477732 93.649175-51.926977 10.475703-10.836934 26.460182-17.429403 42.715584-17.429403 7.947085 0 15.352324 1.535232 22.125407 4.515389l1.174002 0.541847 114.600582 63.576682 1.174001 0.81277c20.499868 14.358938 28.266337 42.354352 18.151865 65.111915-0.090308 0.090308-10.385396 23.931564-10.385395 45.605432 0 65.653761 53.46221 119.206279 119.206279 119.20628h3.973542c19.054943-0.361231 34.858806 16.345709 39.825735 42.625275 0.361231 2.077079 9.572625 51.114208 9.572625 89.765941 0 38.651733-9.211394 87.688861-9.572625 89.856248-4.966928 26.279566-20.590176 42.986507-39.825735 42.625276h-3.973542c-65.653761 0-119.206279 53.46221-119.206279 119.206279 0 21.673869 10.20478 45.334509 10.385395 45.605433 10.114472 22.757562 2.348002 50.843284-18.151865 65.111914l-1.174001 0.81277-116.497046 64.389453-1.174001 0.541846c-7.224623 3.070465-14.449246 4.425082-22.125408 4.425082z m-3.612312-54.907135c0.541847 0.361231 2.077079 0.903078 3.612312 0.903078h0.090308l108.820883-60.144986c-2.709234-6.14093-14.629862-35.671576-14.629861-66.556839 0-92.384866 72.788077-168.062792 163.998942-172.758798 1.264309-7.314931 8.488932-47.953435 8.488932-78.567774s-7.134315-71.43346-8.488932-78.567775c-91.301173-4.696005-163.998942-80.464238-163.998942-172.758797 0-30.975571 12.010936-60.506217 14.629861-66.647147l-107.014727-59.512832h-0.541847c-1.806156 0-3.612311 0.632155-4.063851 0.993385-1.806156 1.806156-17.248787 17.519711-39.55481 33.323574-33.05265 23.209101-64.208837 34.949114-92.836406 34.949114-28.808184 0-60.325602-12.010936-93.46856-35.671576-22.396331-15.984478-38.019578-31.968957-39.825734-33.955728-0.541847-0.361231-2.348002-0.993386-4.06385-0.993386h-0.361231L265.504895 193.619896c2.709234 6.14093 14.629862 35.671576 14.629861 66.556839 0 92.384866-72.697769 168.062792-163.998942 172.758797-1.264309 7.314931-8.488932 47.953435-8.488932 78.567775s7.134315 71.43346 8.488932 78.567775c91.301173 4.696005 163.998942 80.464238 163.998942 172.758797 0 30.975571-12.010936 60.686833-14.720169 66.647147l104.937649 58.79037h0.270923c1.535232 0 2.980157-0.541847 3.431696-0.903078 1.896464-2.077079 17.700326-18.693712 40.186965-35.220037 33.684805-24.744334 65.653761-37.116501 95.0941-37.116501 29.711262 0 61.951142 12.823706 95.726255 37.929271 22.757562 16.887556 38.561425 33.86542 40.457888 35.942499z m-135.822912-219.267307c-87.417938 0-158.580474-71.162536-158.580474-158.580475s71.162536-158.580474 158.580474-158.580474 158.580474 71.162536 158.580475 158.580474c0.180616 87.417938-70.981921 158.580474-158.580475 158.580475z m0-263.2472c-57.706676 0-104.666725 46.960049-104.666725 104.666725s46.960049 104.666725 104.666725 104.666726 104.666725-46.960049 104.666726-104.666726-46.960049-104.666725-104.666726-104.666725z"  ></path></symbol><symbol id="icon-copy" viewBox="0 0 1024 1024"><path d="M650.125761 393.471029h-437.812153c-13.365553 0-24.202487 10.746627-24.202487 24.112179 0 13.365553 10.927242 24.112179 24.202487 24.11218h437.812153c13.365553 0 24.202487-10.746627 24.202487-24.11218 0-6.411853-2.43831-12.462475-7.044008-17.068171-4.425082-4.605697-10.566011-7.044007-17.158479-7.044008z m0 183.866655h-437.812153c-13.365553 0-24.202487 10.746627-24.202487 24.112179 0 13.365553 10.927242 24.112179 24.202487 24.11218h437.812153c13.365553 0 24.202487-10.746627 24.202487-24.11218 0-6.411853-2.43831-12.462475-7.044008-17.068171-4.425082-4.515389-10.566011-7.044007-17.158479-7.044008z m-170.320487 183.776347h-267.311051c-13.365553 0-24.202487 10.746627-24.202487 24.112179 0 13.365553 10.927242 24.112179 24.202487 24.11218h267.311051c13.365553 0 24.202487-10.746627 24.202487-24.11218 0-6.411853-2.43831-12.462475-7.044008-17.068171-4.605697-4.425082-10.746627-7.044007-17.158479-7.044008z"  ></path><path d="M881.042773 30.61434h-576.163683c-14.539554 0-104.757033 0-104.757033 104.395802v74.774848h-56.984214c-14.539554 0-104.757033 0-104.757033 104.395802v574.267219c0 104.395802 104.757033 104.395802 104.757033 104.395802h576.163683c30.253109 0 51.475439-8.759855 66.827762-21.132022 0.903078-0.81277 2.077079-1.444925 2.980157-2.167387 3.431696-2.980157 6.682776-6.321545 9.662934-9.753241 0.81277-0.993386 1.444925-1.896464 2.348002-3.070465 23.209101-30.162801 23.389717-68.272687 23.389717-68.272687v-74.774848h56.71329c30.253109 0 51.475439-8.759855 66.827763-21.132022 0.903078-0.81277 2.077079-1.444925 2.980157-2.167387 3.431696-2.980157 6.682776-6.321545 9.662933-9.753241 0.81277-0.993386 1.444925-1.896464 2.348003-3.070464 23.209101-30.162801 23.389717-68.272687 23.389716-68.272688V135.010142c-0.541847-104.395802-90.849634-104.395802-105.389187-104.395802z m-102.318723 824.781021s-0.090308 33.775112-20.680484 60.41591c-0.632155 0.993386-1.264309 1.896464-1.896463 2.799541-2.528618 3.070465-5.418467 6.050622-8.488932 8.57924l-2.528618 1.896464c-13.636476 11.01755-32.420496 18.693712-59.151601 18.693712h-509.787459s-92.746098 0-92.746098-92.384867V347.414058c0-92.384866 79.922392-92.384866 92.746098-92.384867H685.977952c12.914014 0 92.746098 0 92.746098 92.384867v507.981303z m161.741247-179.260958s-0.090308 33.775112-20.680484 60.41591c-0.632155 0.993386-1.264309 1.896464-1.896463 2.799541-2.528618 3.070465-5.418467 6.050622-8.488932 8.57924l-2.528618 1.896464c-13.636476 11.01755-32.420496 18.693712-59.151601 18.693712h-23.480024v-454.24817C824.148867 209.875298 733.841079 209.875298 719.301526 209.875298h-473.935268v-41.812506c0-92.384866 79.922392-92.384866 92.746098-92.384866h509.787459c12.914014 0 92.746098 0 92.746097 92.384866l-0.180615 508.071611z"  ></path></symbol><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M337.751124 571.37737c-0.632155 0.722462-1.174001 1.62554-1.444924 2.528618l-45.966664 170.681718c-2.709234 9.933857-1.715848 20.770791 5.599083 28.356645 5.599083 5.328159 12.733398 6.592468 20.590175 6.592469 2.528618 0 5.147544-0.361231 7.676162-0.993386l170.410795-46.50851c0.270923 0 0.361231 0.270923 0.632154 0.270923 1.986771 0 3.883235-0.722462 5.32816-2.167387l455.602787-454.609401c13.546168-13.546168 20.048329-31.065879 20.048329-51.204515 0-22.757562-8.669548-44.612047-25.647412-61.409296l-43.076815-43.076814c-16.887556-16.887556-39.645119-26.550489-62.402681-26.55049-20.048329 0-37.658347 7.405239-51.294823 20.951407l-455.422171 455.783402c-0.451539 0.270923-0.361231 0.903078-0.632155 1.354617m573.725373-339.55728l-45.153894 45.244201-73.329923-74.594232L837.604727 157.858012c7.044007-7.044007 20.680483-6.050622 28.808184 2.077079l43.076815 43.076815c4.515389 4.515389 7.044007 10.475703 7.044007 16.345709-0.090308 4.876621-1.896464 9.301702-5.057236 12.462475m-493.622365 345.878825l328.720345-328.720345 73.329924 74.594232-328.088191 328.088191-73.962078-73.962078z m-59.964371 133.203986l23.750948-87.237322 63.396067 63.396067-87.147015 23.841255z m583.568921-298.557544c-17.248787 0-31.42711 13.997707-31.517417 31.517417V868.580298c0 22.306023-19.054943 41.270659-41.270659 41.270659h-718.398448c-22.306023 0-41.270659-19.054943-41.270659-41.270659V175.377723c0-22.306023 19.054943-41.270659 41.270659-41.270659h462.646794c17.248787 0 31.42711-14.088015 31.42711-31.42711 0-17.248787-14.088015-30.524032-31.42711-30.524032h-467.433107c-54.27498 0-98.525796 44.160508-98.525796 98.435488v702.684893c0 54.365288 44.160508 98.435488 98.525796 98.435488h727.971074c54.365288 0 98.525796-44.160508 98.525796-98.435488V443.591851c-0.180616-17.248787-14.26863-31.246494-31.42711-31.246494"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M52.288209 166.708175H979.026722v45.966664H52.288209zM364.572537 324.566187h46.96005v441.243849h-46.96005zM491.725902 324.566187h46.869741v441.243849h-46.869741zM619.692036 324.566187h46.869742v441.243849h-46.869742z"  ></path><path d="M835.527648 212.765147l-23.028486 674.328247c0 24.383103-18.874328 44.160508-43.25743 44.160508h-485.494664c-24.383103 0-43.25743-19.687098-43.25743-44.160508l-45.063586-674.328247h-44.070201l44.070201 676.134403c0 48.766205 39.554811 88.230708 88.230708 88.230708H769.151424c48.766205 0 88.230708-39.554811 88.230708-88.230708l22.125408-676.134403H835.527648zM318.876797 166.708175v-28.898492c0-24.383103 17.97125-42.354352 42.354352-42.354352h308.94294c24.383103 0 42.354352 17.97125 42.354353 42.354352v28.898492h45.966663v-28.898492c0-48.766205-39.554811-88.230708-88.230708-88.230708h-308.94294c-48.766205 0-88.230708 39.554811-88.230708 88.230708v28.898492h45.786048z"  ></path></symbol><symbol id="icon-shangchuan" viewBox="0 0 1024 1024"><path d="M 328.04 355.76 c 7.02 0 13.14 -2.52 18.36 -7.92 l 138.6 -138.6 V 643.4 c 0 14.76 11.34 26.28 26.28 26.28 c 14.76 0 26.28 -11.34 26.28 -26.28 V 209.42 l 138.6 138.6 c 5.22 5.22 12.24 7.92 18.36 7.92 c 6.12 0 13.14 -2.52 18.36 -7.92 c 10.44 -10.44 10.44 -27 0 -36.54 l -183.6 -183.06 c -0.9 -0.9 -2.52 -2.52 -4.5 -3.42 c -0.9 0 -1.62 -0.9 -1.62 -0.9 c -0.9 -0.9 -1.62 -0.9 -2.52 -1.62 c -0.9 0 -1.62 -0.9 -2.52 -0.9 c -0.9 0 -1.62 -0.9 -2.52 -0.9 c -3.42 -0.9 -7.02 -0.9 -10.44 0 c -0.9 0 -1.62 0.9 -2.52 0.9 c -0.9 0 -1.62 0.9 -2.52 0.9 c -0.9 0 -1.62 0.9 -2.52 1.62 c -0.9 0 -1.62 0.9 -1.62 0.9 c -1.62 0.9 -2.52 1.62 -4.5 3.42 l -183.6 182.88 c -10.44 10.44 -10.44 27 0 36.54 c 7.02 5.4 13.14 7.92 20.16 7.92 Z m 0 0"  ></path><path d="M 920.42 556.28 c -14.76 0 -26.28 11.34 -26.28 26.28 v 202.14 c 0 37.44 -30.42 67.86 -67.86 67.86 H 195.56 c -37.44 0 -67.86 -30.42 -67.86 -67.86 V 582.2 c 0 -14.76 -11.34 -26.28 -26.28 -26.28 c -14.76 0 -26.28 11.34 -26.28 26.28 v 202.14 c 0 66.24 54 120.24 120.24 120.24 H 827 c 66.24 0 120.24 -54 120.24 -120.24 V 582.2 c -0.72 -14.76 -12.06 -25.92 -26.82 -25.92 Z m 0 0"  ></path></symbol><symbol id="icon-mobanshichang" viewBox="0 0 1024 1024"><path d="M 34.1744 290.786 l 448.875 180.984 c 19.5191 6.20771 39.0382 6.20771 58.5573 0 l 448.875 -180.984 c 45.5659 -18.5591 45.5659 -74.2365 0 -99.0034 L 541.607 4.65578 a 94.3956 94.3956 0 0 0 -58.5573 0 L 34.1744 191.783 c -45.5019 24.7668 -45.5019 80.4442 0 99.0034 Z" fill="#333333" ></path><path d="M 971.922 459.738 c -4.47979 0 -8.5756 1.34394 -12.6074 2.36789 c -0.703967 0.063997 -1.53593 -0.447979 -2.1119 -0.191991 l -2.68787 1.08795 a 73.4686 73.4686 0 0 0 -6.52769 2.68787 L 541.607 630.418 a 100.731 100.731 0 0 1 -58.5573 0 L 76.7324 465.626 a 54.6534 54.6534 0 0 0 -6.59169 -2.68787 l -2.62388 -1.08795 c -0.511976 -0.191991 -1.40793 0.319985 -2.0479 0.255988 c -4.1598 -0.959955 -8.19162 -2.36789 -12.7354 -2.36789 c -29.0546 0 -52.6695 21.631 -52.6695 48.3817 c 0 17.1512 10.2395 31.4865 24.8948 40.0621 c 0.959955 0.63997 1.21594 1.59993 2.36789 2.2399 l 3.58383 1.53593 l 2.30389 1.02395 l 449.835 184.375 a 96.8275 96.8275 0 0 0 58.5573 0 l 449.835 -184.375 a 25.0868 25.0868 0 0 1 2.30389 -1.02395 l 3.64783 -1.53593 c 1.08795 -0.63997 1.34394 -1.53593 2.30389 -2.1759 c 14.6553 -8.5756 24.9588 -22.9109 24.9588 -40.0621 c 0 -26.8147 -23.5509 -48.4457 -52.7335 -48.4457 Z" fill="#333333" ></path><path d="M 971.922 741.965 c -4.47979 0 -8.5756 1.34394 -12.6074 2.2399 c -0.703967 0.063997 -1.53593 -0.383982 -2.1119 -0.191991 l -2.68787 1.08795 c -2.2399 0.895958 -4.41579 1.66392 -6.52769 2.75187 l -406.381 164.664 a 100.731 100.731 0 0 1 -58.5573 0 l -406.317 -164.664 c -2.1759 -1.08795 -4.2238 -1.85591 -6.59169 -2.75187 l -2.68787 -1.08795 c -0.511976 -0.191991 -1.40793 0.255988 -1.98391 0.191991 c -4.1598 -0.895958 -8.25561 -2.2399 -12.7354 -2.2399 c -29.0546 0 -52.6695 21.695 -52.6695 48.3177 c 0 17.2152 10.2395 31.5505 24.8948 40.1261 c 0.959955 0.63997 1.27994 1.53593 2.43189 2.1759 l 3.58383 1.47193 l 2.30389 1.08795 l 449.835 184.311 a 96.4435 96.4435 0 0 0 58.4933 0 l 449.835 -184.311 c 0.767964 -0.383982 1.47193 -0.767964 2.30389 -1.08795 l 3.64783 -1.47193 c 1.08795 -0.63997 1.34394 -1.53593 2.30389 -2.1759 c 14.6553 -8.5756 24.9588 -22.9109 24.9588 -40.1261 c 0 -26.6228 -23.5509 -48.3177 -52.7335 -48.3177 Z" fill="#333333" ></path></symbol><symbol id="icon-tubiao-" viewBox="0 0 1024 1024"><path d="M 581.12 440.32 H 244.48 l 163.52 -160 a 33.6 33.6 0 0 0 0 -49.28 a 32 32 0 0 0 -48 0 l -221.12 214.08 a 32 32 0 0 0 0 48 l 221.12 216.32 a 32 32 0 0 0 48 0 a 32 32 0 0 0 0 -47.68 l -163.52 -158.4 h 336.64 c 134.72 0 250.88 104.64 250.88 234.88 v 33.6 a 32 32 0 1 0 64 0 v -33.6 c 0 -168.32 -141.76 -297.6 -314.88 -297.6 Z" fill="#333333" ></path></symbol><symbol id="icon-yidong2" viewBox="0 0 1024 1024"><path d="M 527.379 951.265 Z M 638.306 234.745 L 536.258 105.818 c -7.17615 -8.51408 -13.8658 -12.6495 -20.0689 -12.4062 c -6.20311 0.243259 -13.0144 4.98682 -20.3122 14.2307 l -108.007 135.252 c -7.41941 9.24385 -9.73037 16.5416 -6.93289 21.8933 s 9.60874 7.90593 20.3122 7.7843 c 6.32474 -0.12163 14.2307 0.12163 23.4745 0.486519 c 9.36548 0.364889 16.9065 0.486519 22.6231 0.486519 c 8.27082 -0.729778 13.3793 2.18933 15.5686 8.87896 c 2.18933 6.68963 3.04074 15.8119 2.55422 27.4883 v 3.40563 h -0.24326 v 355.767 c -0.12163 8.87896 -0.12163 17.393 -0.121629 25.4206 c 0.12163 8.02756 0 15.9335 0 23.4745 c -0.12163 7.66267 -0.12163 15.3253 0 23.1096 s 0 15.8119 0 23.961 c 0.243259 7.90593 -0.729778 13.3793 -2.79748 16.42 c -2.0677 3.04074 -6.93289 4.62193 -14.5956 4.74356 c -6.93289 0.12163 -15.8119 0.364889 -26.3936 0.973037 s -19.0959 0.973037 -25.4206 0.973037 c -10.825 0.12163 -17.1498 3.52726 -19.0959 10.2169 c -1.94607 6.68963 1.2163 15.2037 9.73037 25.5422 L 488.336 953.212 c 6.93289 8.14919 13.5009 12.0413 19.8256 11.6764 c 6.32474 -0.364889 13.2576 -4.86519 20.5554 -13.5009 l 107.642 -135.739 c 7.41941 -9.24385 9.73037 -16.6633 7.17615 -22.1366 c -2.67585 -5.47333 -9.36548 -8.14919 -20.0689 -8.02756 c -6.32474 0.12163 -13.6225 0 -21.8933 -0.24326 c -8.27082 -0.243259 -15.3253 -0.12163 -21.4068 0.24326 c -8.27082 0.12163 -13.3793 -2.43259 -15.5686 -7.41941 c -2.18933 -4.98682 -3.16237 -13.2576 -3.04074 -24.6908 c 0 -3.52726 0.12163 -6.93289 0.12163 -10.3385 h 0.364888 v -72.248 v -0.486518 v -274.032 c 0.243259 -1.94607 0.364889 -3.77052 0.364889 -5.59496 c 0.243259 -17.7579 0.12163 -33.3265 -0.121629 -46.8274 c -0.12163 -3.284 -0.12163 -6.68963 -0.24326 -10.3385 v -20.0689 h -0.121629 c 0 -4.98682 0 -10.0953 0.121629 -15.447 c 0.12163 -8.27082 1.2163 -14.4739 3.284 -18.8526 c 2.0677 -4.25704 6.81126 -6.68963 14.109 -7.05452 c 6.93289 -0.12163 15.3253 -0.364889 24.9341 -0.973037 s 17.6363 -0.973037 23.961 -0.973038 c 11.0683 0.243259 17.5147 -3.16237 19.3391 -9.97363 c 1.94607 -6.93289 -1.2163 -15.3253 -9.36548 -25.4206 Z" fill="#333333" ></path><path d="M 217.832 402.959 l -129.049 102.047 c -8.51408 7.17615 -12.6495 13.8658 -12.4062 20.0689 c 0.243259 6.20311 4.98682 13.0144 14.2307 20.3122 l 135.252 108.007 c 9.24385 7.41941 16.5416 9.73037 21.8933 6.93289 s 7.90593 -9.60874 7.7843 -20.3122 c -0.12163 -6.32474 0.12163 -14.2307 0.486519 -23.4745 c 0.364889 -9.36548 0.486519 -16.9065 0.486519 -22.6231 c -0.729778 -8.27082 2.18933 -13.3793 8.87896 -15.5686 c 6.68963 -2.18933 15.8119 -3.04074 27.4883 -2.55422 h 3.40563 v 0.243259 h 355.767 c 8.87896 0.12163 17.393 0.12163 25.4206 0.12163 c 8.02756 -0.12163 15.9335 0 23.4745 0 c 7.66267 0.12163 15.3253 0.12163 23.1096 0 s 15.8119 0 23.961 0 c 7.90593 -0.243259 13.3793 0.729778 16.42 2.79748 c 3.04074 2.0677 4.62193 6.93289 4.74356 14.5956 c 0.12163 6.93289 0.364889 15.8119 0.973037 26.3936 s 0.973037 19.0959 0.973037 25.4206 c 0.12163 10.825 3.52726 17.1498 10.2169 19.0959 c 6.68963 1.94607 15.2037 -1.2163 25.5422 -9.73037 L 935.933 552.685 c 8.14919 -6.93289 12.0413 -13.5009 11.6764 -19.8256 c -0.364889 -6.32474 -4.86519 -13.2576 -13.5009 -20.5554 L 798.492 404.905 c -9.24385 -7.41941 -16.6633 -9.73037 -22.1366 -7.17615 c -5.47333 2.67585 -8.14919 9.36548 -8.02756 20.0689 c 0.12163 6.32474 0 13.6225 -0.243259 21.8933 c -0.243259 8.27082 -0.12163 15.3253 0.243259 21.4068 c 0.12163 8.27082 -2.43259 13.5009 -7.41941 15.5686 c -4.98682 2.18933 -13.2576 3.16237 -24.6908 3.04074 c -3.52726 0 -6.93289 -0.12163 -10.3385 -0.12163 v -0.364889 H 379.356 c -1.94607 -0.243259 -3.77052 -0.364889 -5.59496 -0.364889 c -17.7579 -0.243259 -33.3265 -0.12163 -46.8274 0.12163 c -3.284 0.12163 -6.68963 0.12163 -10.3385 0.243259 h -20.0689 v 0.12163 c -4.98682 0 -10.0953 0 -15.447 -0.12163 c -8.27082 -0.12163 -14.4739 -1.2163 -18.8526 -3.284 c -4.25704 -2.0677 -6.68963 -6.81126 -7.05452 -14.109 c -0.12163 -6.93289 -0.364889 -15.3253 -0.973038 -24.9341 s -0.973037 -17.6363 -0.973037 -23.961 c 0.243259 -11.0683 -3.16237 -17.5147 -9.97363 -19.3391 c -6.93289 -1.94607 -15.3253 1.2163 -25.4206 9.36548 Z" fill="#333333" ></path></symbol><symbol id="icon-yidong3" viewBox="0 0 1024 1024"><path d="M 429.52 248.67 a 31.9 31.9 0 0 0 22.63 -9.33 l 32.05 -32.05 v 187.3 a 32 32 0 1 0 64 0 V 207.48 l 31.85 31.85 a 32.09 32.09 0 0 0 45.25 0 a 32.09 32.09 0 0 0 0 -45.25 l -86.52 -86.52 a 31.72 31.72 0 0 0 -14.49 -8.29 l -0.19 -0.05 L 523 99 l -0.52 -0.11 l -0.83 -0.15 l -0.77 -0.13 l -0.65 -0.08 l -0.93 -0.11 h -0.6 l -1 -0.07 H 516 a 31.9 31.9 0 0 0 -22.63 9.33 l -86.52 86.52 a 32 32 0 0 0 22.63 54.59 Z M 421.36 511.8 a 32.09 32.09 0 0 0 -32 -32 H 202.25 l 31.85 -31.85 a 32 32 0 0 0 -45.25 -45.25 l -86.52 86.52 A 31.72 31.72 0 0 0 94 503.7 v 0.18 c -0.09 0.37 -0.18 0.74 -0.26 1.12 c 0 0.17 -0.08 0.34 -0.11 0.51 l -0.15 0.84 c -0.05 0.28 -0.09 0.51 -0.13 0.76 s -0.06 0.44 -0.08 0.65 s -0.08 0.61 -0.11 0.92 s 0 0.4 0 0.61 s -0.05 0.63 -0.07 1 s 0 0.71 0 1.07 V 511.91 a 31.9 31.9 0 0 0 9.33 22.69 l 86.52 86.52 a 32 32 0 1 0 45.25 -45.25 L 202 543.8 h 187.36 a 32.09 32.09 0 0 0 32 -32 Z M 927.36 508.82 v -0.5 v -1 c 0 -0.31 0 -0.65 -0.07 -1 s 0 -0.4 0 -0.59 s -0.07 -0.62 -0.11 -0.93 s -0.05 -0.43 -0.08 -0.65 s -0.08 -0.51 -0.13 -0.77 s -0.09 -0.56 -0.15 -0.83 s -0.08 -0.35 -0.11 -0.52 c -0.08 -0.37 -0.16 -0.74 -0.26 -1.11 l -0.05 -0.19 a 31.72 31.72 0 0 0 -8.4 -14.52 l -86.52 -86.52 a 32 32 0 0 0 -45.25 45.25 l 31.87 31.86 H 631 a 32 32 0 0 0 0 64 h 187.3 l -32.05 32.05 a 32 32 0 0 0 45.25 45.25 l 86.5 -86.51 a 31.9 31.9 0 0 0 9.33 -22.69 s 0.03 -0.06 0.03 -0.08 Z M 623.31 786.49 a 32.09 32.09 0 0 0 -45.25 0 l -31.86 31.85 V 631.23 a 32 32 0 0 0 -64 0 v 187.31 l -32.05 -32.05 a 32 32 0 0 0 -45.25 45.25 l 86.52 86.52 a 31.9 31.9 0 0 0 22.58 9.33 h 1.7 l 1 -0.07 h 0.58 l 0.94 -0.11 l 0.64 -0.08 l 0.78 -0.13 l 0.83 -0.15 l 0.52 -0.11 l 1.11 -0.26 l 0.19 -0.05 a 31.72 31.72 0 0 0 14.48 -8.28 l 86.52 -86.52 a 32.09 32.09 0 0 0 0 -45.25 Z" fill="" ></path></symbol><symbol id="icon-xianshimima" viewBox="0 0 1024 1024"><path d="M 576.996 554.264 c -24.0223 0 -43.4513 -19.4335 -43.4513 -43.4513 c 0 -23.8966 19.1909 -43.0857 42.9662 -43.3301 c -18.1055 -13.5211 -40.3128 -21.8469 -64.6919 -21.8469 c -59.988 0 -108.628 48.6448 -108.628 108.629 c 0 59.9888 48.6404 108.629 108.628 108.629 c 59.9854 0 108.63 -48.6404 108.63 -108.629 c 0 -9.05273 -1.4502 -17.7407 -3.62109 -26.3109 c -6.52237 15.568 -21.9709 26.3101 -39.832 26.3101 Z m 0 0" fill="#333333" ></path><path d="M 875.122 430.309 c 8.44893 -8.44893 8.44893 -22.2126 0 -30.6615 s -21.9683 -8.44893 -30.2968 0 l -59.1416 59.9898 c -22.3295 -31.1396 -49.4868 -58.2961 -80.5087 -80.5087 l 57.2107 -93.7809 c 5.91768 -11.344 2.41435 -25.8284 -7.84511 -32.2278 c -10.2594 -6.51709 -23.4158 -2.65254 -29.3282 8.69239 L 667.76 355.957 c -41.8799 -22.4508 -88.8354 -36.4526 -138.803 -39.5921 c 0 -0.238184 0.121289 -0.360352 0.121289 -0.603809 V 206.529 c 0 -11.8266 -9.65569 -21.4823 -21.4823 -21.4823 c -11.8318 0 -21.4875 9.65569 -21.4875 21.4823 v 109.117 c 0 0.238184 0.123047 0.359473 0.123047 0.60293 c -48.0375 3.01816 -93.1817 16.1727 -133.854 36.9308 l -59.7454 -92.5734 c -5.67598 -10.2604 -18.3481 -13.7584 -28.2437 -7.84599 c -9.89822 5.91416 -13.2768 19.0696 -7.48477 29.3291 l 59.6242 92.2122 c -31.1388 21.1227 -58.6609 47.3159 -81.3507 77.3692 l -57.4532 -59.7463 c -7.96729 -8.44893 -21.1227 -8.44893 -29.207 0 c -7.96553 8.44893 -7.96553 21.9692 0 30.418 l 58.2961 60.7104 c 1.56797 1.68838 3.37852 2.65606 5.18818 3.62021 c -12.4304 21.244 -22.9325 43.817 -30.6563 67.7136 h 4.10273 c 0 6.03457 2.41435 11.344 6.27803 15.3299 c 49.6081 130.716 174.049 223.654 320.455 223.654 c 151.959 0 280.747 -100.179 325.765 -238.984 h -4.10273 c 0 -0.122168 -0.122168 -0.243457 -0.122168 -0.243457 c -0.121289 -5.18818 -2.17089 -9.77259 -5.0669 -13.5158 c -5.79638 -15.4521 -12.3135 -30.4172 -20.1586 -44.6589 c 2.17089 -1.08458 4.34531 -2.29219 6.03457 -4.10273 l 60.5935 -61.556 Z M 511.818 749.796 c -127.219 0 -235.483 -80.2643 -279.3 -193.357 c 0.121289 -0.725098 0.486036 -1.45107 0.486036 -2.17529 c 0 -3.25635 -0.845508 -6.39492 -2.17442 -9.17403 c 45.6266 -109.349 151.84 -186.358 276.522 -186.358 c 127.216 0 235.723 80.2652 279.54 193.361 c -0.122168 0.724219 -0.482519 1.4458 -0.482519 2.17089 c 0 3.13769 0.720703 6.03457 1.81143 8.57021 c -45.1468 109.593 -151.6 186.962 -276.403 186.962 Z m 0 0" fill="#333333" ></path></symbol><symbol id="icon-kinds" viewBox="0 0 1025 1024"><path d="M 387.42 574.181 L 150.781 574.181 c -17.0359 0 -31.2984 5.90312 -43.0254 17.7094 C 96.0281 603.657 90.125 617.919 90.125 634.955 l 0 238.145 c 0 16.9962 5.90312 31.3777 17.6301 43.1047 c 11.727 11.727 25.9896 17.6301 43.0254 17.6301 l 236.64 0 c 16.9962 0 31.4965 -5.82388 43.6197 -17.6301 c 11.9647 -11.727 17.9471 -26.0688 17.9471 -43.1047 l 0 -238.145 c 0 -17.0359 -5.94274 -31.2984 -17.9471 -43.1047 C 418.917 580.163 404.417 574.181 387.42 574.181 Z M 387.42 139.489 L 150.781 139.489 c -17.0359 0 -31.2984 5.94274 -43.0254 17.6697 C 96.0281 168.886 90.125 183.268 90.125 200.303 l 0 237.155 c 0 16.9962 5.90312 31.655 17.6301 43.6197 c 11.727 12.1232 25.9896 18.1055 43.0254 18.1055 l 236.64 0 c 16.9962 0 31.4965 -5.98236 43.6197 -18.1055 c 11.9647 -12.0439 17.9471 -26.6235 17.9471 -43.6197 L 448.987 200.303 c 0 -17.0755 -5.94274 -31.3777 -17.9471 -43.1839 C 418.917 145.432 404.417 139.489 387.42 139.489 Z M 822.072 574.181 l -236.679 0 c -16.917 0 -31.4965 5.90312 -43.5405 17.7094 c -12.0439 11.8062 -18.1452 26.0688 -18.1452 43.1047 l 0 238.145 c 0 16.9962 6.10121 31.3777 18.1452 43.1047 c 12.1232 11.727 26.5442 17.6301 43.5405 17.6301 l 236.679 0 c 16.917 0 31.2984 -5.82388 43.0254 -17.6301 c 11.6478 -11.727 17.5113 -26.0688 17.5113 -43.1047 l 0 -238.145 c 0 -17.0359 -5.78427 -31.3777 -17.5113 -43.1047 C 853.41 580.163 838.989 574.181 822.072 574.181 Z M 915.769 275.38 l -167.308 -167.308 C 736.418 95.9885 722.115 90.125 705.515 90.125 c -16.6 0 -30.9419 5.98236 -42.9858 18.0659 l -167.664 167.664 c -12.0043 12.0043 -18.1848 26.5442 -18.3829 43.3028 c -0.277328 16.8378 5.58617 31.1796 17.6301 43.2235 l 167.308 167.308 c 12.0043 12.0043 26.5046 18.0263 43.6593 18.0263 c 16.9962 -0.0396184 31.4965 -6.14083 43.5008 -18.1452 l 167.664 -167.664 c 12.0836 -12.0836 17.9867 -26.4254 17.8282 -43.2235 C 933.835 301.845 927.774 287.384 915.769 275.38 Z" fill="#333333" ></path></symbol><symbol id="icon-wenhao" viewBox="0 0 1024 1024"><path d="M704.512 310.272c8.704 23.552 12.288 48.64 10.752 74.752 0.512 21.504-5.12 45.056-17.408 71.68-12.288 26.112-39.936 60.928-82.432 104.448-22.016 21.504-39.424 40.448-52.224 57.344-12.8 16.896-19.456 32.768-20.992 47.616-1.536 9.216-5.12 16.896-11.776 23.04-6.656 6.144-14.848 9.216-24.064 9.216h-4.096c-10.24-1.536-17.92-5.632-24.064-12.8-6.144-7.168-8.704-15.872-8.192-26.112 3.584-28.16 13.824-54.272 31.744-78.336 17.408-24.576 38.4-47.616 62.464-70.656 36.864-37.376 59.392-65.024 68.096-82.944 8.704-17.92 12.288-33.28 10.752-46.08 1.536-32.256-9.216-60.416-32.256-84.992-12.8-13.312-27.648-23.552-45.056-31.232-17.408-7.168-35.328-10.752-53.76-10.752-37.376 0.512-68.096 13.312-93.184 38.4-24.064 24.576-36.864 55.296-38.4 92.16 0 10.752-3.584 19.456-10.24 26.112-6.656 6.656-15.36 10.24-25.6 10.24s-18.944-3.072-25.6-10.24c-6.656-6.656-10.24-15.36-10.752-26.112 0-27.136 5.12-53.248 15.36-77.312 10.24-24.576 25.088-46.08 44.544-65.536 19.456-19.456 40.96-34.304 65.536-44.544 24.576-10.24 50.176-15.36 77.312-15.36 29.184 0 56.832 5.632 82.944 16.384s49.152 26.624 69.12 47.616c18.944 18.944 32.768 40.448 41.472 64z m-236.544 510.464c3.584 6.144 9.216 11.264 15.872 15.36s14.336 6.144 21.504 6.144c7.168 0 14.336-2.048 21.504-6.144s12.288-9.216 15.872-15.36c3.584-6.144 5.632-13.312 5.632-21.504 0-12.8-4.096-23.04-12.288-31.232-8.192-8.192-18.432-11.776-30.72-11.776s-22.016 4.096-30.72 11.776c-8.192 8.192-12.288 18.432-12.288 31.232 0 7.68 2.048 14.848 5.632 21.504z"  ></path></symbol><symbol id="icon-warning" viewBox="0 0 1024 1024"><path d="M 939.1 761.5 l -349.9 -606 c -42.8 -74.1 -112.7 -74.1 -155.5 0 l -349.9 606 C 41 835.7 76 896.1 161.5 896.1 h 699.9 c 85.4 0.1 120.5 -60.4 77.7 -134.6 Z m -475.7 -434 c 12.6 -13.6 28.6 -20.4 48.1 -20.4 s 35.5 6.7 48.1 20.1 c 12.5 13.4 18.8 30.2 18.8 50.4 c 0 17.4 -26.1 145.1 -34.8 238 h -62.9 c -7.6 -92.9 -35.9 -220.6 -35.9 -238 c -0.2 -19.9 6 -36.6 18.6 -50.1 Z m 95.2 441.8 c -13.3 12.9 -29 19.3 -47.2 19.3 c -18.2 0 -33.9 -6.4 -47.2 -19.3 c -13.2 -12.8 -19.8 -28.4 -19.8 -46.7 c 0 -18.2 6.6 -33.9 19.8 -47.1 c 13.2 -13.2 29 -19.8 47.2 -19.8 c 18.2 0 34 6.6 47.2 19.8 c 13.2 13.2 19.8 28.9 19.8 47.1 c -0.1 18.3 -6.6 33.8 -19.8 46.7 Z m 0 0" fill="#333333" ></path></symbol><symbol id="icon-chexiao" viewBox="0 0 1024 1024"><path d="M525.824 869.376c1.024-22.016 19.456-39.424 41.472-38.4 85.504 3.072 166.912-27.648 229.376-85.504 62.464-58.368 98.304-137.216 101.376-222.72s-27.648-166.912-85.504-229.376c-58.368-62.464-137.216-98.304-222.72-101.376s-166.912 27.136-229.376 85.504C297.472 335.872 261.632 415.232 258.56 500.224v1.024l93.696-66.56c17.92-12.8 43.008-8.704 55.296 9.216 5.12 7.68 7.68 15.872 7.168 24.576-0.512 11.776-6.144 23.552-16.896 31.232L230.4 619.008c-17.92 12.8-43.008 8.704-55.296-9.216L53.76 439.296C40.96 421.376 45.056 396.288 62.976 384c17.92-12.8 43.008-8.704 55.296 9.216l61.44 86.528c3.584-47.616 15.872-93.184 35.84-136.192 22.016-47.104 52.224-88.576 90.112-123.904s81.92-62.464 130.048-80.896c50.176-18.944 102.4-27.648 156.672-26.112 53.76 2.048 105.984 14.336 154.112 36.864 47.104 22.016 88.576 52.224 123.904 90.112s62.464 81.92 80.896 130.048c18.944 50.176 27.648 102.4 26.112 156.672-2.048 53.76-14.336 105.984-36.864 154.112-21.504 46.592-51.712 88.576-89.6 123.904-37.888 35.328-81.92 62.464-130.048 80.896-50.176 18.944-102.4 27.648-156.672 26.112-22.016-1.536-38.912-19.968-38.4-41.984z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M381.1 104.2L779.8 468.8a57.377 57.377 0 0 1 19.5 43.1c0 16.5-7.1 32.2-19.5 43.1L381.1 919.6c-18.8 17.8-46.2 23.3-70.4 14.1s-41.1-31.4-43.4-57.2l0-728.9c2.2-25.9 19-48.2 43.29999999-57.4 24.3-9.3 51.6-3.8 70.50000001 14z"  ></path></symbol><symbol id="icon-fuzhi" viewBox="0 0 1024 1024"><path d="M867.09 64.12H363.93A92.92 92.92 0 0 0 271 157v113.12H144a80 80 0 0 0-80 80v530a80 80 0 0 0 80 80h530a80 80 0 0 0 80-80v-126h113.09A92.92 92.92 0 0 0 960 661.2V157a92.92 92.92 0 0 0-92.91-92.88zM674 900.12H144a20 20 0 0 1-20-20v-530a20 20 0 0 1 20-20h530a20 20 0 0 1 20 20v530a20 20 0 0 1-20 20zM901 661.2a32.92 32.92 0 0 1-32.92 32.92H755v-344a80 80 0 0 0-80-80H331V157a32.92 32.92 0 0 1 32.92-32.92h504.17A32.92 32.92 0 0 1 901 157z" fill="#878A94" ></path><path d="M542.38 495.12H277c-15.81 0-29.37 12-30.51 27.76a30 30 0 0 0 29.92 32.24h265.38c15.81 0 29.37-12 30.51-27.76a30 30 0 0 0-29.92-32.24zM542.38 675.12H277c-15.81 0-29.37 12-30.51 27.76a30 30 0 0 0 29.92 32.24h265.38c15.81 0 29.37-12 30.51-27.76a30 30 0 0 0-29.92-32.24z" fill="#878A94" ></path></symbol><symbol id="icon-shezhi" viewBox="0 0 1024 1024"><path d="M64 474.7c1.2-10 5.1-19.9 11.9-28.4 6.8-8.5 15.5-14.5 25.1-17.8l86.3-30.7c4.2-11.7 8.9-23.3 14.4-34.6l-39.3-82.8c-4.3-9.1-6.3-19.5-5.1-30.2s5.3-20.5 11.5-28.4l52.9-52.9c8-6.2 17.7-10.4 28.4-11.5s21.1 0.8 30.2 5.1l82.8 39.3c11.4-5.4 22.9-10.2 34.7-14.4l30.7-86.3c3.4-9.5 9.4-18.3 17.8-25.1 8.5-6.8 18.3-10.7 28.4-11.9h74.4c10 1.2 19.9 5.1 28.4 11.9 8.5 6.8 14.5 15.5 17.8 25.1l30.7 86.3c11.7 4.2 23.3 8.9 34.7 14.4l82.8-39.3c9.1-4.3 19.5-6.3 30.2-5.1 10.8 1.2 20.5 5.3 28.4 11.5l52.9 52.9c6.2 8 10.4 17.7 11.5 28.4s-0.8 21.1-5.1 30.2l-39.3 82.8c5.4 11.3 10.2 22.9 14.4 34.6l86.3 30.7c9.5 3.4 18.3 9.4 25.1 17.8s10.7 18.3 11.9 28.4v74.5c-1.2 10-5.1 19.9-11.9 28.4-6.8 8.5-15.5 14.5-25.1 17.8l-86.3 30.7c-4.2 11.7-8.9 23.3-14.4 34.7l39.3 82.8c4.3 9.1 6.3 19.5 5.1 30.2-1.2 10.8-5.3 20.5-11.5 28.4l-52.9 52.9c-8 6.2-17.7 10.4-28.4 11.5-10.8 1.2-21.1-0.8-30.2-5.1l-82.8-39.3c-11.4 5.4-22.9 10.2-34.7 14.4L595.4 923c-3.4 9.5-9.4 18.3-17.8 25.1-8.5 6.8-18.3 10.7-28.4 11.9h-74.4c-10-1.2-19.9-5.1-28.4-11.9-8.5-6.8-14.5-15.5-17.8-25.1l-30.7-86.3c-11.7-4.2-23.3-8.9-34.7-14.4l-82.8 39.3c-9.1 4.3-19.5 6.3-30.2 5.1s-20.5-5.3-28.4-11.5l-52.9-52.9c-6.2-8-10.4-17.7-11.5-28.4-1.2-10.8 0.8-21.1 5.1-30.2l39.3-82.8c-5.4-11.4-10.2-22.9-14.4-34.7L101 595.4c-9.5-3.4-18.3-9.4-25.1-17.8-6.8-8.5-10.7-18.3-11.9-28.4v-74.5z m56.1 6.6c-1.8 20.3-1.8 41.1 0 61.3l112.3 39.9 4.2 13.5c5.3 17.6 12.5 34.7 21.2 51.2l6.6 12.5-51.1 107.6c13.3 15.5 27.8 30.1 43.4 43.4l107.6-51.1 12.5 6.6c16.5 8.7 33.6 15.9 51.2 21.2l13.5 4.2 39.9 112.3c10.1 0.9 20.3 1.4 30.6 1.4s20.5-0.5 30.6-1.4l39.9-112.3 13.5-4.2c17.6-5.3 34.7-12.5 51.2-21.2l12.5-6.6 107.6 51.1c15.5-13.3 30.1-27.8 43.4-43.4l-51.1-107.6 6.6-12.5c8.7-16.5 15.9-33.6 21.2-51.2l4.2-13.5 112.3-39.9c1.8-20.2 1.8-41 0-61.3l-112.3-39.9-4.2-13.5c-5.3-17.5-12.5-34.7-21.2-51.1l-6.6-12.5 51.1-107.6c-13.3-15.5-27.8-30.1-43.4-43.4l-107.6 51.1-12.5-6.6c-16.5-8.7-33.6-15.9-51.2-21.2l-13.5-4.2-39.9-112.3c-10.1-0.9-20.3-1.4-30.6-1.4s-20.5 0.5-30.6 1.4l-39.9 112.3-13.5 4.2c-17.6 5.3-34.7 12.5-51.2 21.2l-12.5 6.6-107.6-51.1c-15.5 13.3-30.1 27.8-43.4 43.4l51.1 107.6-6.6 12.5c-8.7 16.4-15.9 33.6-21.2 51.1l-4.2 13.5-112.3 39.9z" fill="" ></path><path d="M512 386c69.5 0 126 56.5 126 126s-56.5 126-126 126-126-56.5-126-126 56.5-126 126-126m0-56c-100.5 0-182 81.5-182 182s81.5 182 182 182 182-81.5 182-182-81.5-182-182-182z" fill="" ></path></symbol><symbol id="icon-tianjiazujian" viewBox="0 0 1024 1024"><path d="M 408.915 131.231 v 276.923 h -276.923 V 131.231 h 276.923 m 1e-008 -69.2308 h -276.923 a 69.2308 69.2308 0 0 0 -69.2308 69.2308 v 276.923 a 69.2308 69.2308 0 0 0 69.2308 69.2308 h 276.923 a 69.2308 69.2308 0 0 0 69.2308 -69.2308 V 131.231 a 69.2308 69.2308 0 0 0 -69.2308 -69.2308 Z M 408.915 615.846 v 276.923 h -276.923 V 615.846 h 276.923 m 1e-008 -69.2308 h -276.923 a 69.2308 69.2308 0 0 0 -69.2308 69.2308 v 276.923 a 69.2308 69.2308 0 0 0 69.2308 69.2308 h 276.923 a 69.2308 69.2308 0 0 0 69.2308 -69.2308 V 615.846 a 69.2308 69.2308 0 0 0 -69.2308 -69.2308 Z M 892.077 131.231 v 276.923 h -276.923 V 131.231 h 276.923 m 0 -69.2308 h -276.923 a 69.2308 69.2308 0 0 0 -69.2308 69.2308 v 276.923 a 69.2308 69.2308 0 0 0 69.2308 69.2308 h 276.923 a 69.2308 69.2308 0 0 0 69.2308 -69.2308 V 131.231 a 69.2308 69.2308 0 0 0 -69.2308 -69.2308 Z M 926.692 719.692 h -346.154 a 34.6154 34.6154 0 0 0 1e-008 69.2308 h 346.154 a 34.6154 34.6154 0 0 0 0 -69.2308 Z" fill="#333333" ></path><path d="M 753.615 546.615 a 34.6154 34.6154 0 0 0 -34.6154 34.6154 v 346.154 a 34.6154 34.6154 0 0 0 69.2308 1e-008 v -346.154 a 34.6154 34.6154 0 0 0 -34.6154 -34.6154 Z" fill="#333333" ></path></symbol><symbol id="icon-icon-left" viewBox="0 0 1024 1024"><path d="M649.4 768.3L393.2 512l256.3-256.3c12.4-12.4 12.4-32.8 0-45.3-12.4-12.4-32.8-12.4-45.3 0l-278.9 279c-12.4 12.4-12.4 32.8 0 45.3l278.9 278.9c12.4 12.4 32.8 12.4 45.3 0 12.4-12.5 12.4-32.9-0.1-45.3z"  ></path></symbol><symbol id="icon-tianjia1" viewBox="0 0 1024 1024"><path d="M119.7 850.5c12.9 0 21.4-8.6 21.4-21.4v-85.7c0-12.9-8.6-21.4-21.4-21.4s-21.4 8.6-21.4 21.4v85.7c0 12.8 8.5 21.4 21.4 21.4z m0-428.7c12.9 0 21.4-8.6 21.4-21.4v-85.7c0-12.9-8.6-21.4-21.4-21.4s-21.4 8.6-21.4 21.4v85.7c0 12.8 8.5 21.4 21.4 21.4z m64.3 493H98.3v42.9H184c12.9 0 21.4-8.6 21.4-21.4 0-12.9-8.5-21.5-21.4-21.5z m257.2-771.7H527c12.9 0 21.4-8.6 21.4-21.4s-8.6-21.4-21.4-21.4h-85.7c-12.9 0-21.4 8.6-21.4 21.4-0.1 12.8 8.5 21.4 21.3 21.4z m214.4 0h85.7c12.9 0 21.4-8.6 21.4-21.4s-8.6-21.4-21.4-21.4h-85.7c-12.9 0-21.4 8.6-21.4 21.4s8.5 21.4 21.4 21.4z m-535.9 64.3c12.9 0 21.4-8.6 21.4-21.4v-85.7H98.3V186c0 12.9 8.5 21.4 21.4 21.4zM334 121.7c0-12.9-8.6-21.4-21.4-21.4h-85.7c-12.9 0-21.4 8.6-21.4 21.4s8.6 21.4 21.4 21.4h85.7c12.9 0 21.4-8.6 21.4-21.4zM119.7 636.1c12.9 0 21.4-8.6 21.4-21.4V529c0-12.9-8.6-21.4-21.4-21.4s-21.4 8.6-21.4 21.4v85.7c0 12.9 8.5 21.4 21.4 21.4z m278.6 278.7h-85.7c-12.9 0-21.4 8.6-21.4 21.4 0 12.9 8.6 21.4 21.4 21.4h85.7c12.9 0 21.4-8.6 21.4-21.4 0.1-12.8-8.5-21.4-21.4-21.4z m535.9-278.7c-12.9 0-21.4 8.6-21.4 21.4v85.7c0 12.9 8.6 21.4 21.4 21.4 12.9 0 21.4-8.6 21.4-21.4v-85.7c0.1-12.8-8.5-21.4-21.4-21.4z m0-214.3c-12.9 0-21.4 8.6-21.4 21.4V529c0 12.9 8.6 21.4 21.4 21.4 12.9 0 21.4-8.6 21.4-21.4v-85.7c0.1-12.9-8.5-21.5-21.4-21.5z m-64.3-321.6c-12.9 0-21.4 8.6-21.4 21.4s8.6 21.4 21.4 21.4h85.7v-42.9h-85.7z m64.3 107.2c-12.9 0-21.4 8.6-21.4 21.4v85.7c0 12.9 8.6 21.4 21.4 21.4 12.9 0 21.4-8.6 21.4-21.4v-85.7c0.1-12.8-8.5-21.4-21.4-21.4z m0 643.1c-12.9 0-21.4 8.6-21.4 21.4v85.7h42.9v-85.7c0-12.8-8.6-21.4-21.5-21.4z m-107.1 64.3h-85.7c-12.9 0-21.4 8.6-21.4 21.4 0 12.9 8.6 21.4 21.4 21.4h85.7c12.9 0 21.4-8.6 21.4-21.4 0-12.8-8.6-21.4-21.4-21.4z m-214.4 0H527c-12.9 0-21.4 8.6-21.4 21.4 0 12.9 8.6 21.4 21.4 21.4h85.7c12.9 0 21.4-8.6 21.4-21.4 0-12.8-8.5-21.4-21.4-21.4zM527 764.7c12.9 0 21.4-8.6 21.4-21.4V550.4h192.9c12.9 0 21.4-8.6 21.4-21.4 0-12.9-8.6-21.4-21.4-21.4H548.4v-193c0-12.9-8.6-21.4-21.4-21.4s-21.4 8.6-21.4 21.4v192.9h-193c-12.9 0-21.4 8.6-21.4 21.4 0 12.9 8.6 21.4 21.4 21.4h192.9v192.9c0 13 8.6 21.5 21.5 21.5z" fill="#333333" ></path></symbol><symbol id="icon-bianji" viewBox="0 0 1024 1024"><path d="M718.506667 342.869333a85.333333 85.333333 0 0 0 0-120.661333l-12.344889-12.344889a85.333333 85.333333 0 0 0-120.661334 0l-433.493333 433.493333-32.256 132.266667a28.444444 28.444444 0 0 0 34.702222 34.304l130.332445-33.450667 433.664-433.607111z m27.875555-173.226666l12.288 12.288a142.222222 142.222222 0 0 1 0 201.159111L314.026667 827.733333l-145.464889 37.319111a85.333333 85.333333 0 0 1-104.106667-102.912l36.010667-147.683555 444.814222-444.814222a142.222222 142.222222 0 0 1 201.102222 0zM108.657778 949.020444a28.444444 28.444444 0 1 1 0-56.888888h682.666666a28.444444 28.444444 0 0 1 0 56.888888h-682.666666z" fill="#666666" ></path><path d="M524.117333 261.916444l39.822223-40.618666 155.591111 152.462222-39.822223 40.561778zM115.086222 649.841778l41.301334-39.139556 150.016 158.208-41.244445 39.139556z" fill="#666666" ></path></symbol><symbol id="icon-ArtboardCopy" viewBox="0 0 1024 1024"><path d="M699.733333 776.533333c-55.466667 34.133333-119.466667 55.466667-183.466666 55.466667-187.733333 0-337.066667-145.066667-337.066667-328.533333 0-46.933333 8.533333-89.6 29.866667-132.266667l4.266666 29.866667c4.266667 17.066667 25.6 25.6 42.666667 21.333333 17.066667-4.266667 25.6-25.6 21.333333-42.666667l-38.4-115.2c-4.266667-17.066667-25.6-25.6-42.666666-21.333333l-119.466667 42.666667c-17.066667 4.266667-25.6 25.6-21.333333 42.666666 4.266667 17.066667 25.6 25.6 42.666666 21.333334l46.933334-12.8c-25.6 55.466667-42.666667 110.933333-42.666667 174.933333 0 221.866667 183.466667 401.066667 409.6 401.066667 81.066667 0 157.866667-21.333333 226.133333-64 17.066667-12.8 21.333333-34.133333 12.8-51.2-12.8-25.6-34.133333-34.133333-51.2-21.333334zM955.733333 695.466667c-8.533333-17.066667-25.6-25.6-42.666666-17.066667l-38.4 17.066667c34.133333-59.733333 51.2-123.733333 51.2-192 0-221.866667-183.466667-401.066667-409.6-401.066667-85.333333 0-162.133333 25.6-230.4 68.266667-17.066667 12.8-21.333333 34.133333-12.8 51.2 12.8 17.066667 34.133333 21.333333 51.2 8.533333 55.466667-34.133333 119.466667-55.466667 187.733333-55.466667 187.733333 0 337.066667 145.066667 337.066667 328.533334 0 55.466667-12.8 106.666667-38.4 153.6 0 0 0 4.266667-4.266667 4.266666l-12.8-34.133333c-8.533333-17.066667-25.6-25.6-42.666667-17.066667-17.066667 8.533333-25.6 25.6-17.066666 42.666667l46.933333 115.2c8.533333 17.066667 25.6 25.6 42.666667 17.066667l115.2-46.933334c17.066667-8.533333 25.6-25.6 17.066666-42.666666z"  ></path></symbol><symbol id="icon-shuaxin" viewBox="0 0 1024 1024"><path d="M83.5 567.1c-21.4 0-39.2-17-39.9-38.6C38.9 398.9 88.8 272 180.4 180.4 268.9 91.9 386.5 43.2 511.7 43.2h0.2c125.2 0 242.9 48.8 331.5 137.4 15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0c-73.5-73.5-171.1-113.9-275-114h-0.2c-103.8 0-201.3 40.4-274.7 113.7-76 76-117.3 181.2-113.5 288.7 0.8 22.1-16.4 40.6-38.5 41.4-0.5 0.1-0.9 0.1-1.4 0.1z" fill="#0099FF" ></path><path d="M928.5 322.3L824.2 32.2 638.4 218zM512.3 980.6c-120.1 0-240.2-45.7-331.7-137.2-15.6-15.6-15.6-41 0-56.6s40.9-15.6 56.6 0c151.6 151.7 398.3 151.7 549.8 0.3 75.9-76 117.3-181.2 113.5-288.7-0.8-22.1 16.4-40.6 38.5-41.4 21.4-1.1 40.7 16.4 41.4 38.6C985 625.2 935.2 752 843.6 843.7c-91.3 91.2-211.3 136.9-331.3 136.9z" fill="#0099FF" ></path><path d="M95.5 701.7l104.3 290.1L385.6 806z" fill="#0099FF" ></path></symbol><symbol id="icon-chenggong" viewBox="0 0 1024 1024"><path d="M 512 1024 C 229.222 1024 0 794.778 0 512 S 229.222 0 512 0 s 512 229.222 512 512 s -229.222 512 -512 512 Z m 214.323 -685.21 l -292.506 274.176 l -126.157 -120.218 a 51.2 51.2 0 1 0 -70.656 74.0864 l 161.178 153.651 a 51.2 51.2 0 0 0 70.3488 0.3072 l 327.782 -307.302 a 51.2 51.2 0 1 0 -69.9904 -74.7008 Z" fill="#333333" ></path></symbol><symbol id="icon-call-default" viewBox="0 0 1102 1024"><path d="M247.000615 59.195077c38.813538 17.053538 144.659692 185.225846 152.989539 225.260308-0.433231 13.725538-6.537846 24.654769-17.053539 42.318769-12.307692 20.676923-27.628308 46.434462-27.628307 82.077538 0 35.308308 39.581538 93.321846 117.641846 172.425846 77.804308 78.867692 134.301538 118.843077 167.876923 118.843077 31.409231 0 57.619692-13.981538 80.738461-26.308923 19.377231-10.338462 36.155077-19.278769 52.854154-19.515077 37.612308 5.474462 202.948923 122.624 229.671385 161.792-4.411077 77.508923-86.567385 148.775385-150.626462 148.775385-127.940923 0-313.186462-107.756308-483.446153-281.225846-165.001846-168.073846-271.596308-352.315077-271.596308-469.366154 0-29.499077 22.921846-68.036923 61.282461-103.089231 38.045538-34.737231 73.846154-50.313846 87.296-51.987692m2.205539-39.542154c-55.906462 0-190.168615 101.651692-190.168616 194.619077 0 271.911385 489.491692 789.976615 794.427077 789.976615 83.948308 0 190.208-90.249846 190.208-194.678153 0-35.780923-218.190769-194.678154-268.524307-194.678154-51.692308 0-89.560615 45.824-134.301539 45.824-44.740923 0-246.134154-201.708308-246.134154-251.904 0-50.018462 44.721231-74.338462 44.721231-125.971693-0.039385-37.021538-134.321231-263.187692-190.227692-263.187692z" fill="#666666" ></path><path d="M243.751385 139.736615a86.646154 86.646154 0 0 0-25.265231 11.401847 81.112615 81.112615 0 0 0-14.651077 11.894153l-7.089231 7.640616c-2.087385 2.875077-4.017231 5.947077-6.065231 9.058461-3.899077 6.262154-7.089231 13.371077-9.491692 20.676923-1.772308 7.483077-4.194462 15.084308-4.391385 22.843077l-0.649846 11.59877 0.925539 11.323076c0.236308 7.581538 1.851077 14.749538 3.800615 21.543385 1.772308 6.813538 3.249231 13.508923 6.025846 19.298462 2.402462 5.947077 4.883692 11.441231 7.207385 16.482461 2.008615 5.159385 5.179077 9.314462 7.443692 13.193846l6.340923 9.787077c3.584 5.356308 5.789538 8.290462 5.789539 8.290462l-2.166154-9.885539-2.855385-11.047384c-1.004308-4.273231-2.796308-8.861538-3.682461-14.139077a349.892923 349.892923 0 0 0-3.643077-16.699077c-1.732923-5.809231-1.890462-12.150154-3.072-18.491077l-1.476923-9.688615a152.300308 152.300308 0 0 0-0.354462-9.905231l-0.531692-10.003693 0.905846-9.90523c-0.118154-6.734769 1.831385-12.996923 3.032615-19.357539 1.949538-6.065231 3.564308-12.307692 6.419693-17.742769 1.417846-2.737231 2.894769-5.376 4.135384-8.113231l4.903385-7.325538c3.328-4.667077 6.971077-8.920615 10.535385-12.642462C240.423385 144.955077 253.971692 137.846154 253.971692 137.846154s-3.780923 0.177231-10.220307 1.890461z" fill="#666666" ></path></symbol><symbol id="icon-xunpan" viewBox="0 0 1024 1024"><path d="M512.512 858.112c-57.344 1.024-110.592-6.144-162.304-20.992-11.776-3.584-19.968-1.536-28.672 7.68-52.736 52.224-116.736 80.384-190.976 84.48-29.696 1.536-58.88-4.096-87.04-14.336-3.584-1.536-9.216-1.536-9.728-6.656-0.512-6.144 5.632-7.168 9.728-9.216 50.688-27.136 84.992-67.072 93.184-125.44 3.584-24.064 1.024-47.616-17.92-67.072-130.048-136.192-119.808-328.704 23.552-450.56 84.992-72.192 183.808-111.104 293.888-123.904 116.224-13.824 228.864 0.512 334.848 51.712 98.816 47.616 178.688 116.736 211.456 225.28 36.352 119.296-0.512 221.184-86.528 306.688-79.36 78.336-177.664 117.76-286.208 135.68-33.28 5.12-67.072 8.192-97.28 6.656zM179.2 835.072c-5.12 12.8 7.168 25.6 19.968 20.992 39.424-14.848 71.68-38.912 99.328-70.656 11.776-13.824 23.04-16.896 40.96-11.264 108.032 33.792 216.576 36.352 326.144 6.144 88.064-24.576 165.376-67.072 222.208-140.288 65.536-84.48 68.608-190.976 9.216-280.064-47.104-71.168-115.2-114.176-193.024-142.848-82.944-30.208-168.96-38.912-256.512-28.672-101.376 11.264-193.536 44.544-270.336 114.176-56.32 51.2-92.16 113.152-90.624 191.488 1.024 66.56 27.648 123.392 73.728 169.984 24.576 24.576 32.768 53.76 34.816 86.528 1.536 29.696-4.608 57.344-15.872 84.48z"  ></path><path d="M121.344 934.4c-25.088 0-51.712-5.12-79.36-14.848-0.512 0-1.536-0.512-2.048-0.512-3.584-1.024-10.24-2.56-11.264-10.24-1.024-8.704 6.656-11.776 9.728-12.8 1.024-0.512 1.536-0.512 2.56-1.024 53.248-28.672 82.944-68.608 90.624-121.856 4.096-27.136-1.536-47.104-16.384-62.976C51.2 643.072 18.432 560.128 22.528 476.16c4.096-84.48 45.568-164.352 116.224-224.256 81.92-69.632 181.76-111.616 296.448-125.44 122.368-14.336 236.032 3.072 337.408 52.224 114.176 55.296 184.32 130.048 214.528 228.352 34.816 114.176 5.12 219.136-88.064 311.808-73.216 72.192-167.424 117.248-288.768 137.216-38.4 6.144-70.144 8.704-98.304 7.168-57.856 0.512-111.104-6.144-163.84-21.504-9.728-3.072-16.384-1.024-23.552 6.144-53.76 53.248-119.296 81.92-194.048 86.016-3.072 0.512-6.144 0.512-9.216 0.512z m395.264-802.816c-26.112 0-52.736 1.536-79.872 4.608-114.176 13.312-209.408 53.76-290.816 122.88C77.312 317.952 37.376 394.752 32.768 476.672c-4.096 81.408 27.648 161.792 89.6 226.304 17.408 18.432 23.552 40.96 18.944 71.68-8.192 55.808-40.448 99.328-95.744 129.536-1.024 0.512-2.048 1.024-3.584 1.536-1.024 0.512-3.072 1.536-3.584 2.048v0.512c0.512 0.512 2.56 1.024 3.584 1.536 1.024 0.512 2.048 0.512 3.072 1.024 30.208 10.752 58.368 15.36 84.992 13.824 72.192-3.584 135.68-31.744 187.392-82.944 10.24-10.24 20.48-12.8 33.792-8.704 51.712 14.848 104.448 21.504 160.768 20.992h0.512c27.136 1.024 58.88-1.024 96.256-7.168 119.296-19.456 211.968-63.488 283.648-134.144 90.112-89.6 118.784-190.976 85.504-301.568-29.184-95.744-97.28-168.448-208.896-222.208-77.824-38.4-162.304-57.344-252.416-57.344zM193.536 861.696c-5.632 0-10.752-2.048-14.848-6.656-5.632-6.144-7.68-14.848-4.096-22.528 11.776-28.672 16.896-55.296 15.36-82.432-2.048-36.864-12.288-62.464-33.28-82.944-48.64-49.152-74.24-107.52-75.264-173.568-1.024-74.24 29.184-138.24 92.672-195.584 71.68-65.024 161.28-102.912 272.896-115.712 91.136-10.24 178.176-0.512 258.56 29.184 88.064 32.256 152.064 79.872 195.584 144.896 60.416 90.624 56.832 200.192-9.728 285.696-53.248 68.608-126.976 115.2-225.28 142.336-109.056 30.208-220.16 28.16-328.704-6.144-15.872-5.12-24.576-2.56-35.328 9.728-29.696 34.304-62.976 57.856-101.376 72.192-2.56 1.024-4.608 1.536-7.168 1.536z m322.56-672.256c-22.528 0-45.056 1.536-68.096 4.096-109.568 12.288-197.12 49.152-267.264 112.64-61.44 55.296-90.624 116.736-89.088 187.904 1.024 63.488 25.6 119.296 72.192 166.4 22.528 22.528 33.792 50.176 36.352 89.6 1.536 28.672-3.584 56.832-15.872 87.04-1.536 4.096-1.024 8.192 2.048 11.264 3.072 3.072 7.168 4.096 11.264 2.56 36.864-13.312 68.608-36.352 97.28-69.12 13.312-15.36 26.624-18.944 46.08-12.8 107.008 33.792 215.552 35.84 323.072 6.144 96.256-26.624 167.936-71.68 219.648-138.752 63.488-81.92 67.072-186.88 9.216-273.92-41.984-62.976-104.448-109.056-190.464-140.8-59.392-21.504-121.344-32.256-186.368-32.256z"  ></path><path d="M496.128 296.448c55.808 0 91.648 10.752 120.32 39.936 34.304 35.328 36.352 82.944 5.12 120.832-15.872 19.456-34.816 35.328-53.248 51.2-13.824 11.776-23.552 25.6-23.552 44.544 0 14.848-6.656 22.016-22.528 20.48-7.68-1.024-15.872 0-23.552 0-22.016 0-23.552-3.584-22.016-26.112 2.048-34.816 17.92-61.952 44.032-83.456 11.264-9.216 22.016-18.432 32.768-28.672 14.336-13.312 23.552-29.184 15.872-49.664-8.192-21.504-25.6-29.696-46.08-32.256-32.768-3.584-58.88 12.8-70.144 45.056-4.096 12.288-10.752 17.408-23.552 16.384-10.752-1.024-21.504-0.512-32.768 0-13.312 0.512-15.872-5.632-14.336-17.92 9.728-60.928 60.416-100.864 113.664-100.352z"  ></path><path d="M526.336 579.072c-1.536 0-3.072 0-5.12-0.512-4.608-0.512-9.728-0.512-14.848 0h-8.192c-11.776 0-18.944-1.024-23.04-5.632-5.12-5.12-4.608-13.312-4.096-25.6 2.048-34.816 16.896-62.976 46.08-87.04 13.312-11.264 23.552-19.968 32.768-28.16 15.872-14.848 20.48-28.672 14.848-44.032-6.144-16.896-19.968-26.624-41.984-29.184-30.208-3.584-54.784 12.288-64.512 41.472-5.12 14.848-13.824 20.992-28.672 19.968-10.752-1.024-21.504-0.512-31.744 0-5.12 0-11.776 0-16.384-5.12-4.608-5.12-4.096-12.8-3.072-18.944C388.096 335.36 437.248 291.84 495.616 291.84h1.024c58.88 0 94.72 12.288 123.392 41.472 35.84 36.352 37.888 88.064 5.632 127.488-13.824 17.408-30.72 31.744-46.592 45.568l-7.168 6.144c-14.848 13.312-22.016 26.112-22.016 40.96 0 9.216-2.56 15.872-7.68 20.48-4.096 3.584-9.216 5.12-15.872 5.12z m-12.8-10.752c3.072 0 6.144 0 9.216 0.512 6.144 0.512 10.24 0 12.8-2.56s4.096-6.656 4.096-12.8c0-23.552 13.824-38.4 25.6-48.64l7.168-6.144c15.872-13.824 32.256-28.16 45.568-44.544 29.184-35.84 27.648-80.896-5.12-114.176-26.624-27.136-60.416-38.4-116.224-38.4h-0.512c-53.76-0.512-99.328 39.936-108.032 96.256-1.024 6.656 0 9.216 0.512 10.24 1.024 1.024 4.096 2.048 8.192 1.536 10.752-0.512 22.016-0.512 33.28 0 10.24 0.512 14.336-2.048 17.92-13.312 11.776-34.304 39.936-52.224 75.264-48.128 25.6 3.072 43.008 14.848 50.688 35.328 9.728 26.112-5.12 44.032-17.408 55.296-9.216 8.704-19.456 17.408-32.768 28.672-26.624 22.016-40.448 48.128-42.496 79.872-0.512 8.192-0.512 15.872 1.536 17.92 2.048 2.048 8.704 2.56 15.872 2.56h7.68c2.56 0.512 4.608 0.512 7.168 0.512z"  ></path><path d="M509.952 697.856c-33.792-0.512-34.816 6.144-34.304-33.792v-15.872c0-9.728 7.68-17.408 17.408-17.408h37.376c9.728 0 14.336 4.608 14.336 14.336v17.92c0.512 39.424 2.048 34.304-34.816 34.816z"  ></path><path d="M492.544 702.976c-7.68 0-12.8-0.512-16.384-4.096-5.12-5.12-5.632-14.336-5.12-34.816v-15.872c0-12.288 10.24-22.016 22.528-22.016h37.376c6.144 0 11.264 1.536 14.336 5.12 3.584 3.584 5.12 8.192 5.12 14.336v21.504c0 18.432 0 26.624-5.12 31.744-4.608 4.608-11.776 4.608-24.064 4.608h-23.552c-2.048-0.512-3.584-0.512-5.12-0.512z m38.4-67.072h-37.376c-6.656 0-12.288 5.632-12.288 12.288v15.872c0 12.8 0 25.088 2.56 27.648 1.536 1.536 7.168 1.536 14.336 1.536h24.064c8.704 0 14.848 0 16.896-1.536 2.048-2.048 2.048-11.264 2.048-24.576v-3.584-7.68-10.24c0-3.072-0.512-5.632-2.048-7.168-2.048-1.536-4.608-2.56-8.192-2.56z"  ></path></symbol><symbol id="icon-xunpan1" viewBox="0 0 1024 1024"><path d="M434.176 519.168c67.9936-28.0576 115.712-95.0272 115.712-173.056 0-103.2192-83.968-187.1872-187.1872-187.1872s-187.392 83.968-187.392 187.1872c0 78.0288 47.9232 144.9984 115.712 173.056C138.8544 552.1408 24.3712 687.9232 24.3712 849.92c0 40.1408 28.0576 53.4528 50.5856 63.8976l1.4336 0.6144c90.112 31.744 220.16 40.3456 283.0336 40.3456 68.4032 0 202.3424-11.0592 291.2256-41.7792 33.5872-12.9024 50.7904-33.9968 50.7904-62.8736-0.2048-162.2016-114.8928-297.984-267.264-330.9568zM204.5952 346.112c0-87.2448 70.8608-158.1056 158.1056-158.1056s158.1056 70.8608 158.1056 158.1056-70.8608 158.1056-158.1056 158.1056c-87.2448 0.2048-158.1056-70.8608-158.1056-158.1056z m435.8144 539.4432C556.032 914.8416 423.1168 925.696 359.2192 925.696c-60.6208 0-186.1632-7.9872-272.5888-38.2976-25.1904-11.8784-33.1776-18.8416-33.1776-37.2736 0-170.5984 138.6496-309.248 309.248-309.248s309.248 138.8544 309.248 309.248c0.2048 10.8544-3.4816 24.7808-31.5392 35.4304z m0 0M950.0672 168.5504H688.3328c-30.3104 0-50.7904 30.72-50.7904 59.392v55.5008c0 19.456-6.3488 41.7792-10.6496 48.128-3.2768 4.7104-24.576 23.1424-42.1888 37.2736-4.5056 3.6864-6.5536 9.6256-4.9152 15.1552 1.4336 5.5296 6.144 9.8304 11.8784 10.6496 14.5408 2.2528 28.8768 4.9152 43.2128 7.7824v4.7104c0 38.0928 40.3456 38.0928 53.6576 38.0928h261.9392c30.72 0 51.4048-31.1296 51.4048-60.0064v-157.0816c-0.4096-28.8768-21.0944-59.5968-51.8144-59.5968z m22.3232 216.6784c0 14.336-9.6256 30.9248-22.3232 30.9248H688.3328c-24.576 0-24.576-4.5056-24.576-8.8064 0-4.7104 0.2048-8.192 0.2048-11.0592l0.2048-3.4816c0.2048-11.264-4.9152-15.7696-36.6592-21.504 10.0352-8.6016 19.8656-17.8176 23.3472-22.9376 8.8064-12.6976 15.7696-41.5744 15.7696-64.512v-55.5008c0-14.336 9.216-30.3104 21.504-30.3104h261.9392c12.4928 0 22.3232 16.384 22.3232 30.3104v156.8768z m0 0"  ></path><path d="M914.2272 241.4592H724.992c-4.096 0-7.3728 3.2768-7.3728 7.3728s3.2768 7.3728 7.3728 7.3728h189.2352c4.096 0 7.3728-3.2768 7.3728-7.3728-0.2048-4.096-3.4816-7.3728-7.3728-7.3728z m0 58.1632H724.992c-4.096 0-7.3728 3.2768-7.3728 7.3728s3.2768 7.3728 7.3728 7.3728h189.2352c4.096 0 7.3728-3.2768 7.3728-7.3728-0.2048-4.096-3.4816-7.3728-7.3728-7.3728z m-101.9904 58.1632h-87.4496c-4.096 0-7.3728 3.2768-7.3728 7.3728s3.2768 7.3728 7.3728 7.3728h87.4496c4.096 0 7.3728-3.2768 7.3728-7.3728-0.2048-4.096-3.2768-7.3728-7.3728-7.3728z m0 0"  ></path></symbol><symbol id="icon-yemian" viewBox="0 0 1024 1024"><path d="M 562.805 80.6975 a 72.135 72.135 0 0 0 -96.9302 0 L 73.925 452.87 a 36.1575 36.1575 0 0 0 48.42 53.7075 l 6.2325 -5.9175 V 889.1 a 72.315 72.315 0 0 0 72.315 72.405 h 210.443 v -217.71 a 50.9175 50.9175 0 0 1 50.94 -50.985 h 99.0229 a 50.9175 50.9175 0 0 1 50.94 50.985 v 217.71 h 215.438 a 72.315 72.315 0 0 0 72.3375 -72.405 V 505.407 c 16.065 14.535 38.8575 13.4325 52.2225 -1.4625 a 36.1575 36.1575 0 0 0 -2.61 -51.075 L 562.805 80.72 Z" fill="#333333" ></path></symbol><symbol id="icon-guanbi3" viewBox="0 0 1024 1024"><path d="M571.904 501.76L885.76 187.904c15.872-15.872 15.872-41.984 0-57.856l-1.536-1.536c-15.872-15.872-41.984-15.872-57.856 0L512 442.368 198.144 128c-15.872-15.872-41.984-15.872-57.856 0l-1.536 1.536a40.192 40.192 0 0 0 0 57.856L452.608 501.76l-313.856 313.856c-15.872 15.872-15.872 41.984 0 57.856l1.536 1.536c15.872 15.872 41.984 15.872 57.856 0l313.856-313.856 313.856 313.856c15.872 15.872 41.984 15.872 57.856 0l1.536-1.536c15.872-15.872 15.872-41.984 0-57.856L571.904 501.76z"  ></path></symbol><symbol id="icon-xiala1" viewBox="0 0 1024 1024"><path d="M543.864 739.377c-12.012 12.012-28.315 23.166-43.76 19.734-15.444 2.574-30.03-9.438-42.042-19.734L86.537 366.136c-18.876-18.877-18.876-49.766 0-68.642s49.765-18.877 68.642 0l345.784 355.222 346.642-355.222c18.876-18.877 49.765-18.877 68.642 0s18.876 49.765 0 68.642l-372.383 373.24z" fill="" ></path></symbol><symbol id="icon-shanchu2" viewBox="0 0 1024 1024"><path d="M 591.361 723.928 a 26.4176 26.4176 0 0 1 -26.4794 -26.4947 V 406.036 a 26.4176 26.4176 0 0 1 26.4794 -26.4794 c 14.6609 0 26.4794 11.8184 26.4794 26.4794 v 291.272 a 26.5721 26.5721 0 0 1 -26.4794 26.6183 Z m -158.877 0 a 26.433 26.433 0 0 1 -26.4794 -26.4947 V 406.036 c 0 -14.6609 11.8184 -26.4794 26.4794 -26.4794 s 26.4794 11.8184 26.4794 26.4794 v 291.272 a 26.5721 26.5721 0 0 1 -26.4794 26.6183 Z M 856.279 273.624 h -132.382 V 220.68 C 723.898 176.821 688.581 141.243 645.015 141.243 H 379.511 a 79.4693 79.4693 0 0 0 -79.4376 79.4376 V 273.639 h -132.397 C 153.03 273.624 141.211 285.443 141.211 300.119 s 11.8184 26.4794 26.4639 26.4794 h 688.603 c 14.6609 0 26.4794 -11.8184 26.4794 -26.4794 s -11.8184 -26.4947 -26.4794 -26.4947 Z M 353.03 220.68 c 0 -14.522 11.9573 -26.4794 26.4794 -26.4794 h 265.504 c 14.5065 0 25.9077 11.664 25.9077 26.4794 V 273.639 H 353.03 V 220.68 Z M 697.402 882.789 H 326.706 a 79.4693 79.4693 0 0 1 -79.4376 -79.4229 V 405.742 c 0 -14.6609 11.8184 -26.4794 26.4794 -26.4794 s 26.4639 11.8184 26.4639 26.4794 v 397.608 c 0 14.6609 11.9728 26.4794 26.4794 26.4794 H 697.526 c 14.6765 0 26.4947 -11.8184 26.4947 -26.4794 V 406.748 c 0 -14.6609 11.8339 -26.4794 26.4794 -26.4794 c 14.6609 0 26.4947 11.8184 26.4947 26.4794 v 396.62 C 776.855 847.071 741.278 882.789 697.402 882.789 Z" fill="#333333" ></path></symbol><symbol id="icon-zhongzuo" viewBox="0 0 1024 1024"><path d="M 443.91 441.288 c -170.787 0 -310.714 127.742 -310.714 293.834 v 33.1587 c 0 18.9764 12.0848 33.1587 31.0613 33.1587 s 31.0613 -14.1823 31.0613 -33.1587 v -33.1587 c 0 -128.041 115.756 -231.712 248.59 -231.712 h 332.186 L 614.697 659.518 c -14.1823 14.1823 -14.1823 32.8592 0 47.1413 c 14.2823 14.2823 33.2586 14.2823 47.4409 0.0998756 l 218.228 -213.434 c 14.1823 -14.1823 14.1823 -33.0589 0 -47.341 L 662.237 232.847 c -14.2823 -14.2823 -33.2586 -13.5831 -47.4409 0.599253 c -14.1823 14.1823 -14.1823 34.557 0 48.7394 l 161.3 159.102 H 443.91 Z m 0 0" fill="#333333" ></path></symbol><symbol id="icon-texiao1" viewBox="0 0 1024 1024"><path d="M140.024242 847.127273C126.707071 860.444444 126.707071 882.424242 137.826263 893.543434c6.593939 6.593939 15.385859 8.791919 24.30707 8.79192 8.791919 0 17.713131-2.19798 24.307071-8.79192l275.781818-275.781818c13.187879-13.187879 13.187879-33.09899 0-46.286869-13.187879-13.187879-33.09899-13.187879-46.286868 0L140.024242 847.127273z m386.068687-357.49495L598.884848 637.414141c4.39596 8.791919 10.989899 13.187879 19.911112 13.187879 8.791919 0 15.385859-6.593939 19.911111-13.187879l72.791919-147.781818L874.79596 465.454545c8.791919-2.19798 15.385859-6.593939 17.713131-15.385858 2.19798-6.593939 0-15.385859-6.593939-22.109091L766.707071 313.147475l28.70303-163.29697c2.19798-8.791919-2.19798-17.713131-8.791919-22.109091-8.791919-4.39596-17.713131-6.593939-24.307071-2.19798L616.727273 202.731313 471.014141 125.543434c-8.791919-4.39596-17.713131-2.19798-24.30707 2.19798-6.593939 4.39596-10.989899 13.187879-8.791919 22.109091l28.70303 163.29697-117.010101 114.682828c-6.593939 4.39596-8.791919 13.187879-6.59394 22.109091 2.19798 8.791919 8.791919 13.187879 17.713132 15.385859l165.365656 24.30707z m33.09899-30.90101c-4.39596-6.593939-10.989899-10.989899-19.911111-10.989899l-130.19798-19.911111 94.90101-92.70303c4.39596-4.39596 8.791919-13.187879 6.59394-19.911111l-22.109091-130.19798 117.010101 61.80202c6.593939 4.39596 13.187879 4.39596 19.911111 0l117.010101-61.80202-22.109091 130.19798c0 6.593939 2.19798 15.515152 6.593939 19.911111l94.901011 92.70303-130.19798 19.911111c-8.791919 0-15.515152 4.39596-17.713132 10.989899L616.59798 577.939394l-57.406061-119.208081z m158.90101 280.307071l-83.911111 28.70303 83.911111 28.70303 28.703031 86.109091 28.70303-86.109091 86.109091-28.70303-86.109091-28.70303-28.70303-83.911111-28.703031 83.911111z m-211.781818-61.80202l-41.890909 15.385858 41.890909 13.187879 15.385859 41.890909 13.187878-41.890909 41.89091-13.187879-41.89091-15.385858-13.187878-41.890909-15.385859 41.890909z m15.385859-41.890909"  ></path></symbol><symbol id="icon-lianjie2" viewBox="0 0 1024 1024"><path d="M914.432 345.2928L698.9824 129.6384c-11.0592-11.0592-29.2864-11.0592-40.1408 0l-219.136 215.4496c-11.0592 10.8544-11.0592 29.2864 0 40.1408l87.6544 87.6544-54.8864 54.8864-87.6544-87.6544c-10.8544-11.0592-29.2864-11.0592-40.1408 0L129.024 655.7696c-11.0592 11.0592-11.0592 29.2864 0 40.1408L344.4736 911.36c3.6864 7.3728 10.8544 11.0592 18.2272 11.0592 7.3728 0 14.5408-3.6864 18.2272-7.3728l215.4496-215.4496c3.6864-3.6864 7.3728-11.0592 7.3728-18.2272 0-7.3728-3.6864-14.5408-7.3728-18.2272L508.7232 575.488l54.8864-54.8864L651.264 608.256c3.6864 3.6864 10.8544 7.3728 18.2272 7.3728 7.3728 0 14.5408-3.6864 18.2272-7.3728L903.168 392.8064c3.6864-3.6864 17.6128-18.2272 17.6128-18.2272 9.216-10.8544 1.2288-22.1184-6.3488-29.2864zM541.9008 677.6832l-178.9952 178.9952-178.9952-178.9952 178.9952-178.9952 69.4272 69.4272-87.6544 87.6544 40.1408 40.1408 87.6544-87.6544 69.4272 69.4272z m135.168-135.168L607.6416 473.088l87.6544-87.6544-40.1408-40.1408-87.6544 87.6544-69.4272-69.4272 178.9952-178.9952 178.9952 178.9952-178.9952 178.9952z m0 0"  ></path></symbol><symbol id="icon-pingban" viewBox="0 0 1649 1024"><path d="M 1223.43 556.194 c 21.5771 0 39.1248 -17.5477 39.1248 -39.1248 s -17.5477 -39.1248 -39.1248 -39.1248 s -39.1248 17.5477 -39.1248 39.1248 s 17.5477 39.1248 39.1248 39.1248 Z m 0 0"  ></path><path d="M 312.14 155.588 v 714.125 c 0 56.5425 36.9151 92.2878 93.5877 92.2878 h 859.576 c 56.5425 0 93.5877 -35.6152 93.5877 -92.2878 V 155.588 c 0 -56.5425 -36.9151 -93.5877 -93.5877 -93.5877 H 405.598 c -56.5425 0 -93.4576 37.045 -93.4576 93.5877 Z m 56.6724 718.025 V 152.988 c 0 -18.8475 17.9376 -34.1854 36.7852 -34.1854 h 683.839 v 787.695 H 405.598 c -18.8475 0 -36.7852 -15.338 -36.7852 -34.1854 v 1.29982 Z M 1301.93 152.988 v 719.324 c 0 18.8475 -17.9376 34.1854 -36.7852 34.1854 h -116.334 v -787.695 h 116.334 c 18.8475 0 36.7852 17.9376 36.7852 36.7852 v -2.59966 Z m 0 2.59966"  ></path></symbol><symbol id="icon-pingban1" viewBox="0 0 1418 1024"><path d="M 639.841 867.783 c 0 19.7889 16.0934 35.8823 35.8823 35.8823 s 35.8823 -16.0934 35.8823 -35.8823 s -16.0934 -35.8823 -35.8823 -35.8823 c -19.9081 0 -35.8823 16.0934 -35.8823 35.8823 Z m 0 0"  ></path><path d="M 1007.24 32 H 352.306 c -51.8564 0 -84.6395 33.8558 -84.6395 85.8318 v 788.335 c 0 51.8564 32.6636 85.8318 84.6395 85.8318 h 654.941 c 51.8564 0 85.8318 -33.8558 85.8318 -85.8318 V 117.831 c -0.119211 -51.9757 -33.9749 -85.8318 -85.8318 -85.8318 Z M 348.73 83.976 h 660.902 c 17.2854 0 31.3522 16.451 31.3522 33.7365 V 744.877 h -722.414 V 117.831 c 0 -17.2854 14.0668 -33.7365 31.3522 -33.7365 h -1.19211 Z m 660.902 855.928 H 349.922 c -17.2854 0 -31.3522 -16.451 -31.3522 -33.7365 v -106.693 h 722.414 v 106.693 c 0 17.2854 -16.451 33.7365 -33.7365 33.7365 h 2.3842 Z m -2.3842 0"  ></path></symbol><symbol id="icon-shouji2" viewBox="0 0 1024 1024"><path d="M 694.627 62 H 321.641 C 266.338 62 221.596 106.742 221.596 162.044 v 699.912 c 0 55.1693 44.7427 100.044 100.044 100.044 h 373.119 c 55.1693 0 100.044 -44.7427 100.044 -100.044 V 162.044 c -0.131984 -55.3014 -44.8746 -100.044 -100.176 -100.044 Z m 50.022 783.199 c 0 55.1693 -11.4827 66.652 -66.652 66.652 H 338.27 c -55.1693 0 -66.652 -11.4827 -66.652 -66.652 v -666.52 c 0 -55.1693 11.4827 -66.652 66.652 -66.652 h 339.728 c 55.1693 0 66.652 11.4827 66.652 66.652 v 666.52 Z m 0 0"  ></path><path d="M 271.618 645.238 h 473.031 v 50.022 H 271.618 v -50.022 Z m 236.515 100.044 c 22.9652 0 41.707 18.6098 41.707 41.707 c 0 22.9652 -18.6098 41.707 -41.707 41.707 c -22.9652 0 -41.707 -18.6098 -41.707 -41.707 s 18.7418 -41.707 41.707 -41.707 Z m -11.2186 16.6299"  ></path></symbol><symbol id="icon-diannao2" viewBox="0 0 1024 1024"><path d="M 936.55 123.699 H 90.112 c -43.8272 0 -79.2577 35.6352 -79.2577 79.2577 v 528.998 c 0 43.8272 35.6352 79.2577 79.2577 79.2577 h 399.361 V 919.553 h -187.801 c -14.5407 0 -26.4191 9.216 -26.4191 23.9615 c 0 14.5407 11.8784 23.9615 26.4191 23.9615 h 423.118 c 14.5407 0 26.4191 -9.216 26.4191 -23.9615 c 0 -14.5407 -11.8784 -23.9615 -26.4191 -23.9615 h -187.801 v -108.339 h 399.361 c 43.8272 0 79.2577 -35.6352 79.2577 -79.2577 V 202.957 c 0.2048 -43.6223 -35.4305 -79.2577 -79.0528 -79.2577 Z m 28.8769 608.257 c 0 14.5407 -11.8784 29.0816 -26.4191 29.0816 H 87.654 c -14.5407 0 -26.4191 -14.336 -26.4191 -29.0816 V 202.957 c 0 -14.5407 11.8784 -30.3104 26.4191 -30.3104 h 851.557 c 14.5407 0 26.4191 15.7695 26.4191 30.3104 v 528.998 Z m -2.4576 0"  ></path></symbol><symbol id="icon-hide1" viewBox="0 0 1024 1024"><path d="M973.824 540.4672l-57.9584-72.2944c28.8768-38.5024 57.9584-77.2096 77.2096-125.5424 4.9152-14.5408 0-33.792-19.2512-43.4176-14.5408-4.9152-33.792 0-43.4176 19.2512-67.584 164.0448-231.6288 270.1312-419.84 270.1312-192.9216 0-352.256-101.376-419.84-270.1312-4.9152-19.2512-24.1664-24.1664-43.4176-19.2512-14.5408 9.6256-24.1664 28.8768-14.5408 43.4176 19.2512 48.3328 48.3328 91.7504 82.1248 130.2528l-57.9584 67.584c-9.6256 14.5408-9.6256 33.792 4.9152 48.3328 4.9152 4.9152 14.5408 9.6256 19.2512 9.6256 9.6256 0 19.2512-4.9152 24.1664-9.6256l53.0432-62.6688c33.792 33.792 77.2096 57.9584 120.6272 77.2096l-33.792 82.1248c-4.9152 19.2512 4.9152 33.792 19.2512 43.4176h9.6256c14.5408 0 24.1664-9.6256 28.8768-19.2512l28.8768-82.1248c43.4176 14.5408 91.7504 24.1664 139.8784 28.8768V757.76c0 19.2512 14.5408 33.792 33.792 33.792s33.792-14.5408 33.792-33.792v-101.376c53.0432-4.9152 101.376-14.5408 149.504-28.8768l28.8768 86.8352c4.9152 14.5408 19.2512 19.2512 28.8768 19.2512h9.6256c19.2512-4.9152 24.1664-24.1664 19.2512-43.4176l-24.1664-91.7504c43.4176-19.2512 82.1248-48.3328 115.712-82.1248l53.0432 62.6688c4.9152 9.6256 14.5408 9.6256 24.1664 9.6256 9.6256 0 14.5408-4.9152 19.2512-9.6256 20.0704-4.7104 20.0704-23.9616 10.4448-38.5024z m0 0"  ></path></symbol><symbol id="icon-page" viewBox="0 0 1024 1024"><path d="M 385.874 189.613 h 436.921 c 31.0191 0 61.7732 17.498 61.7732 48.5172 v 584.594 c 0 31.0191 -25.4516 48.5172 -56.4708 48.5172 H 383.222 c -31.0191 0 -56.4708 -20.1492 -56.4708 -51.1685 V 243.433 c -0.265121 -31.0191 27.8378 -53.8196 59.1221 -53.8196 Z m 9.01415 47.987 c -15.642 0 -23.0655 10.0746 -23.0655 25.7168 v 539.523 c 0 15.642 7.42339 23.0655 23.0655 23.0655 h 421.012 c 15.642 0 23.0655 -4.77218 23.0655 -20.4144 V 263.316 c 0 -15.642 -10.0746 -25.7168 -25.7168 -25.7168 H 394.888 Z m 33.4052 112.942 h 367.988 c 8.48388 0 16.7027 10.87 16.7027 19.3538 s -8.21876 16.7027 -16.7027 16.7027 H 428.293 c -8.48388 0 -16.7027 -8.21876 -16.7027 -16.7027 s 8.21876 -19.3538 16.7027 -19.3538 Z m 0 154.831 h 282.884 c 8.48388 0 16.7027 10.87 16.7027 19.3538 s -8.21876 19.3538 -16.7027 19.3538 H 428.293 c -8.48388 0 -16.7027 -10.87 -16.7027 -19.3538 c -0.265121 -8.48388 8.21876 -19.3538 16.7027 -19.3538 Z m 0 149.263 h 212.362 c 8.48388 0 16.7027 10.87 16.7027 19.3538 s -8.21876 19.3538 -16.7027 19.3538 h -212.362 c -8.48388 0 -16.7027 -10.87 -16.7027 -19.3538 c -0.265121 -8.21876 8.21876 -19.3538 16.7027 -19.3538 Z m -142.371 84.8388 c 8.48388 0 17.498 10.87 16.7027 19.3538 c -1.06049 14.5817 -13.5212 19.3538 -22.0051 19.3538 h -41.6241 c -39.503 0 -70.7874 -17.7632 -70.7874 -57.5314 v -567.36 c 0 -39.503 25.7168 -70.7874 65.485 -70.7874 h 324.509 c 39.503 0 70.7874 31.0191 70.7874 70.7874 c 0 8.48388 -13.5212 16.7027 -22.0051 16.7027 c -8.48388 0 -19.3538 -8.21876 -19.3538 -16.7027 c 0 -24.1261 -18.2934 -29.1634 -42.4194 -29.1634 H 249.602 c -24.1261 0 -37.117 10.3397 -37.117 34.4658 v 549.067 c 0 24.1261 7.68852 31.8145 31.8145 31.8145 h 41.6241 Z m -15.9073 -18.5584"  ></path></symbol></svg>',l=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss");if(l&&!s.__iconfont__svg__cssinject__){s.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}!function(c){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(c,0);else{var l=function(){document.removeEventListener("DOMContentLoaded",l,!1),c()};document.addEventListener("DOMContentLoaded",l,!1)}else document.attachEvent&&(a=c,h=s.document,o=!1,i=function(){o||(o=!0,a())},(t=function(){try{h.documentElement.doScroll("left")}catch(c){return void setTimeout(t,50)}i()})(),h.onreadystatechange=function(){"complete"==h.readyState&&(h.onreadystatechange=null,i())});var a,h,o,i,t}(function(){var c,l,a,h,o,i;(c=document.createElement("div")).innerHTML=t,t=null,(l=c.getElementsByTagName("svg")[0])&&(l.setAttribute("aria-hidden","true"),l.style.position="absolute",l.style.width=0,l.style.height=0,l.style.overflow="hidden",a=l,(h=document.body).firstChild?(o=a,(i=h.firstChild).parentNode.insertBefore(o,i)):h.appendChild(a))})}(window);;// END OF /scripts/iconfont/iconfont.js
// STARTS OF /scripts/imgdelayload.js
//是否为ie，并读出ie版本
window.isIE = !! navigator.userAgent.match(/MSIE\b\s*([0-9]\.[0-9]);/img);
window.isIE && (window.isIE = RegExp.$1);
window.delayImages = [];
// 使用zoom缩小页面的时候 延迟加载判断的可视区域有问题 需要调大这个值
var delayloadScrollShowHeight = 100;
if ($('html').css('zoom') < 1) {
  delayloadScrollShowHeight = 250;
}
window.delayScroll = function(){
	try{
		//是否为chrome
		var isGoo = !! navigator.userAgent.match(/AppleWebKit\b/img);
		//获得可以触发scroll事件的对象
		var box = window.isIE ? document.documentElement : document;
		//读取滚动条的位置和浏览器窗口的显示大小
		var doctop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
			left = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
			width = document.documentElement.clientWidth,
			height = document.documentElement.clientHeight;
		
		//对所有图片进行批量判断是否在浏览器显示区域内
		for (var i = 0; i < window.delayImages.length; i++) {
			var _top = $(window.delayImages[i]).offset().top,
				_left = $(window.delayImages[i]).offset().left;
			//判断图片是否在显示区域内,有50个像素的偏移是为了提前预加载
			//(_top + 100 >= doctop && _left >= left && _top - 100 <= doctop + height && _left <= left + width)
			//当图片是居中对齐时，因为loading图很小，而图片的父框可能比较大，这里拿到的 _left > left + width，导致图片永远不能被加载,暂时不限制横向宽度，
			//这样会导致有横向滚动条时，当拖动到否一位置时，右侧的所有图片都会被加载，但很少网站有横向滚动条，先不管了
			var needshow = _top == 0; //一般图片在滚动组件内的情况(如新闻，产品等的滚动显示
			needshow |= (_top + delayloadScrollShowHeight >= doctop && _left >= left && _top - delayloadScrollShowHeight <= doctop + height); //图片在可视区域的情况
			needshow |= doctop + height + 400 > $(document).height(); //拖动到页底的情况，理想情况下其实不需要这行，因为理论上 doctop + height == $(document).height()，但在手机上实际获取到的scroll好像有点问题，所以+500
			if (needshow){
				var _src = window.delayImages[i].getAttribute('_src');
				var _images = $("img[_src='"+_src+"']"); //有些图片对象是事后通过脚本复制来的，重新获取下这个图片，保证浏览器能找到这个对象
				for(var k = 0;k < _images.length;k++){
					//如果图片已经显示，则取消赋值
					if (_src && $(_images[k]).attr('src') !== _src && (_top == 0 || $(_images[k]).is(":visible"))) {
						$(_images[k]).attr('src',_src);
						$(_images[k]).css('background','none');
					}
				}
			}
		}
	}catch(e){
		console.log('imgdelayload.js',e);
	}
}
function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}
window.supportWebp = false;
check_webp_feature('alpha',function(feature,result){ window.supportWebp = result;});
function delayload(option){
	if(window.nodelayimg) return; //H5站混合静态和自由模块时，不能使用图片延时加载，因为图片延时加载会改变页面的高度
	delayload2(option);
}
function delayload2(option){
	if(window.isIE) return; //IE支持不好，IE先不启用延时加载
	//图片未加载时显示的图片
	var src = option.src ? option.src : '';
	var bgsrc = option.bgsrc ? option.bgsrc : '';
	//指定那些id下的img元素使用延迟显示
	var id = option.id ? option.id : [];
	//获得所有的图片元素
	window.delayImages = [];
	var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	for (var i = 0; i < id.length; i++) {
		var idbox = document.getElementById(id[i]),_imgs;
		if (idbox && (_imgs = idbox.getElementsByTagName('img'))) {
			for (var t = 0; t < _imgs.length; t++) {
				if($(_imgs[t])[0].outerHTML.indexOf(src) > -1) continue; //避免与 mod_pagespeed 冲突
				//window.delayImages.push(_imgs[t]);
				var _top = $(_imgs[t]).offset().top;
				var _showed = _top + 50 >= top && _top - 50 <= top + height;
				// alert('_top: ' + _top + " top: " + top + " height: " + height + " _showed: " + _showed);
				if(_showed) continue;
				var flag = true;
				var m = $(_imgs[t]).closest(".ModuleItem");
				if(m && (m.html() + "").toLowerCase().indexOf("slide") > -1) flag = false; //忽略幻灯片模块
				if(m && m.find(".ProductList").length > 0 && m.find(".ProductList[showstyle=1]").length > 0 ) flag = false; //轮播的产品列表模块判断图片位置有问题，先忽略
				if(m && m.find(".ModuleSiteGallery").length > 0 && m.find(".grid-item").length > 0 ) flag = false; //相册模块判断图片位置有问题，先忽略
				if(m && m.find(".ModuleCustomCodeGiant").length > 0 ) flag = false; // HTML代码模块先忽略
				if($(_imgs[t]).attr('nodelay') == '1') flag = false; //图片添加了不延时的属性
				if($(_imgs[t]).attr('src') && $(_imgs[t]).attr('src').indexOf('c=validatecode')  > -1) flag = false; //验证码图片不作处理
				if(flag){
					window.delayImages.push(_imgs[t]);
				}
			}
		}
	}
	//将所有的图片设置为指定的loading图片
	for (var i = 0; i < window.delayImages.length; i++) {
		//图片本来的图片路径放入_src中
		var osrc = window.delayImages[i].src;
		if($(window.delayImages[i]).attr('data-pagespeed-lazy-src')) osrc = $(window.delayImages[i]).attr('data-pagespeed-lazy-src'); //避免与 mod_pagespeed 冲突
		if(window.supportWebp && isPlatformVersion == '1' && osrc.indexOf('?') == -1 && osrc.indexOf("comdata/") > -1 && /\.(jpg|jpeg|png)$/i.test(osrc)){
			//osrc += ".webp"; //共享目录的时候，对这个支持不好（会出现 IIS 的 Rewrite Module 错误，实际上是IIS的问题）
		}
		window.delayImages[i].setAttribute('_src', osrc);
		window.delayImages[i].style.background = 'url('+src+') center center no-repeat'; //loading图用背景来处理
		window.delayImages[i].src = bgsrc; //放个透明的图来占位
		//这里要加一个onload事件处理产品模块的响应式问题和泽彬做的产品图片效果
		if($.fn.masonry) $(window.delayImages[i]).on('load',function(){$('.masonry-container,.gallery-masonry').masonry()});
	}
	
	var load = new Image();
	load.src = src;
	load.onload = function() {
		delayScroll();
	};
	$(window).on("scroll",function (){delayScroll();});
	$(window).load(function (){delayScroll();});
	$('body')[0].addEventListener("DOMSubtreeModified", function (ev) {
		//兼容文章列表 滚动公告的效果  如果不延迟执行  chrome 会把文章列表强制滚动到可视区域的行为
		if(window.delaytimer) clearTimeout(window.delaytimer);
		window.delaytimer = setTimeout(function(){delayScroll();},500);
	}, false);
	
}
/*delayload({
	id: ['pagebody'],
	src: 'http://h560.72dns.net/images/loading2.gif'
});*/;// END OF /scripts/imgdelayload.js

 addScript('/scripts/bootstrap/bootbox.min.js',null,true);