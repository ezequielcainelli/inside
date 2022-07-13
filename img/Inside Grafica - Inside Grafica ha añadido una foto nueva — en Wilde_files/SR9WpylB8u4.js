if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("TypeaheadNormalizer",[],(function(a,b,c,d,e,f){a={normalize:function(a){return(""+a).toLocaleLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ +/g," ").replace(/^\s*|\s*$/g,"")}};e.exports=a}),null);
__d("TypeaheadInternationalNormalizer",["TypeaheadNormalizer"],(function(a,b,c,d,e,f){var g={normalize:function(a){var c=g._charmap;return b("TypeaheadNormalizer").normalize(a).replace(/[\u00e0-\u0450]/g,function(a){return a in c?c[a]:a})},_charmap:{"\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0153":"oe","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u044b":"y","\u044d":"e","\u044e":"u","\u044f":"ya"}};e.exports=g}),null);
__d("TypeaheadSource",["DOM","TypeaheadNormalizer","createDeprecatedProperties","err","eventsMixinDeprecated"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){a=a||{},this.disableLongerQueryCacheHit=a.disableLongerQueryCacheHit,this._raw={},this._lookup={},this._firstSeenOnValue={},this.setNormalizer(b("TypeaheadNormalizer").normalize),this._excludeIDs={}}var c=a.prototype;c.bindToTypeahead=function(a){this._changeListener=a.listen("change",this.didChange.bind(this)),this._startListener=a.listen("start",this.didStart.bind(this)),this._clearListener=a.listen("clear",this.didClear.bind(this))};c.unbindFromTypeahead=function(){this._changeListener.remove(),this._startListener.remove(),this._clearListener.remove(),this._clearListener=null};c.didChange=function(a){return};c.didStart=function(){return};c.didClear=function(){return};c.clearCache=function(){this._raw={},this._lookup={}};c.addExcludeID=function(a){a&&(this._excludeIDs[a]=!0)};c.removeExcludeID=function(a){a&&delete this._excludeIDs[a]};c.addResult=function(a,c){a=(this.getTransformer()||this._defaultTransformer)(a);if(a.id in this._raw)return;this._raw[a.id]=a;this._firstSeenOnValue[a.id]=this._firstSeenOnValue[a.id]||c;c=this.tokenize(a.tokenizable||a.name);for(var d=0;d<c.length;++d){this._lookup[c[d]]=this._lookup[c[d]]||[];if(Object.prototype.toString.call(this._lookup[c[d]])!=="[object Array]")throw b("err")("Lookup entry was not an array. key: %s. value: %s",c[d],this._lookup[c[d]]);this._lookup[c[d]].push(a.id)}};c.waitForResults=function(){this.invoke("waiting");return this};c.getResult=function(a){return this._raw[a]};c.emptyResults=function(){return[]};c.getMatchedResults=function(a){var b=[];if(a==="")b=this.emptyResults();else{var c=a,d={},e={},f={},g={},h=this.getQueryExtractor();h&&(a=h(a));h=this.tokenize(a);var i=h[h.length-1];h.sort(function(a,b){return b.length-a.length});for(var j=0;j<h.length;++j){if(h[j]in g){h.splice(j--,1);continue}g[h[j]]=!0;var k=h[j];for(var l in this._lookup){var m=this.checkFragmentMatches(l,k,c,i);if(m){if(!(l in f))f[l]=!0;else continue;m=this._lookup[l];for(var n=0;n<m.length;++n){var o=m[n];e[o]||(e[o]={});k in e[o]||(e[o][k]=!0,d[o]=(d[o]||0)+1)}}}}for(var o in d)d[o]==h.length&&!this._excludeIDs[o]&&(!this.disableLongerQueryCacheHit||!this._firstSeenOnValue[o]||this._firstSeenOnValue[o].length<=a.length)&&b.push(o)}this.sortHits(a,b);return this.renderNodes(a,b)};c.checkFragmentMatches=function(a,b,c,d){return a.substr(0,b.length)===b};c.matchResults=function(a){a=this.getMatchedResults(a);this.invoke("resultsready",a);this.invoke("complete")};c.sortHits=function(a,b){var c=[],d;for(d=0;d<b.length;d++)c.push(this._raw[b[d]]);var e=function(a,b){a=a.sort||a.name;b=b.sort||b.name;return a.localeCompare(b)},f=this.getSortHandler()||function(a,b,c){b.sort(c)};f.call(this,a,c,e);b.splice(0,b.length);for(d=0;d<c.length;d++)b.push(c[d].id)};c.renderNodes=function(a,b){a=Math.min(this.getMaximumResultCount(),b.length);var c=[];for(var d=0;d<a;d++)if(b[d]in this._raw){var e=this._raw[b[d]];this.clientRendered||(e=this.createNode(e));c.push(e)}return c};c.createNode=function(a){return b("DOM").create("a",{sigil:"typeahead-result",href:a.uri,name:a.name,rel:a.id,className:"jx-result"},a.display)};c.normalize=function(a){return this.getNormalizer()(a)};c.tokenize=function(a){a=this.normalize(a);return!a.length?[]:a.split(/\s/g)};c._defaultTransformer=function(a){return{name:a[0],display:a[0],uri:a[1],id:a[2]}};return a}();b("eventsMixinDeprecated")(a,["waiting","resultsready","complete","after_complete","initial_render","initial_results_ready","req_dispatch","req_sent","req_recv","unlock_render"]);b("createDeprecatedProperties")(a,{normalizer:null,queryExtractor:null,transformer:null,maximumResultCount:5,sortHandler:null});Object.assign(a.prototype,{_raw:null,_lookup:null,_firstOnValue:null,_excludeIDs:null,_changeListener:null,_startListener:null,_clearListener:null,clientRendered:!1});e.exports=a}),null);
__d("TypeaheadOnDemandSource",["TypeaheadSource","createDeprecatedProperties","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c){c=a.call(this,c)||this;c.uri=b;c.haveData={"":!0};return c}var d=c.prototype;d.didChange=function(a){this.lastChange=Date.now(),a=this.normalize(a),this.haveData[a]?this.matchResults(a):(this.waitForResults(),b("setTimeoutAcrossTransitions")(this.sendRequest.bind(this,this.lastChange,a),this.getQueryDelay()))};d.sendRequest=function(){throw new Error("Use MTypeaheadOnDemandSource!")};d.ondata=function(a,b,c){if(c)for(var d=0;d<c.length;d++)this.addResult(c[d],b);this.haveData[b]=!0;if(a!=this.lastChange)return;this.matchResults(b)};d.clearCache=function(){a.prototype.clearCache.call(this),this.haveData={"":!0}};return c}(b("TypeaheadSource"));b("createDeprecatedProperties")(a,{queryDelay:125,auxiliaryData:{}});Object.assign(a.prototype,{uri:null,lastChange:null,haveData:null});e.exports=a}),null);
__d("TypeaheadCompositeSource",["TypeaheadOnDemandSource","TypeaheadSource","isElementNode"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this)||this;d=d||{};e.sources=c;e.cacheSourceCount=c.length;e.isWorkUser=d.isWorkUser;e.delayRender=!1;e.allowEmptyMergeKey=!0;e.shouldMergeResults=!0;for(var c=0;c<e.sources.length;++c){d=e.sources[c];d.listen("waiting",e.childWaiting.bind(babelHelpers.assertThisInitialized(e)));d.listen("resultsready",e.childResultsReady.bind(babelHelpers.assertThisInitialized(e)));d.listen("complete",e.childComplete.bind(babelHelpers.assertThisInitialized(e)));d instanceof b("TypeaheadOnDemandSource")&&(d.listen("req_dispatch",e.childRequestDispatch.bind(babelHelpers.assertThisInitialized(e))),d.listen("req_sent",e.childRequestSent.bind(babelHelpers.assertThisInitialized(e))),d.listen("req_recv",e.childRequestReceived.bind(babelHelpers.assertThisInitialized(e))),d.listen("unlock_render",e.startRender.bind(babelHelpers.assertThisInitialized(e))),d.enableImmediateReturnOfCachedResults===!1&&--e.cacheSourceCount,d.enableEagerSendRequest&&(e.delayRender=!0),e.listen("initial_results_ready",d.setCacheResultsLength.bind(d)))}return e}var d=c.prototype;d.didChange=function(a){this.results=[];this.completeCount=0;this.readyCount=0;this.lockRender=!0;for(var b=0;b<this.sources.length;++b)this.sources[b].didChange(a)};d.didStart=function(){for(var a=0;a<this.sources.length;++a)this.sources[a].didStart()};d.didClear=function(){this.results=[]};d.addExcludeID=function(a){for(var b=0;b<this.sources.length;++b)this.sources[b].addExcludeID(a)};d.removeExcludeID=function(a){for(var b=0;b<this.sources.length;++b)this.sources[b].removeExcludeID(a)};d.childWaiting=function(){(!this.results||!this.results.length)&&this.invoke("waiting")};d.childResultsReady=function(a){this.shouldMergeResults?this.results=this.mergeResults(this.results||[],a):this.results=a,++this.readyCount,this.readyCount==this.cacheSourceCount&&(this.results!==null&&this.results.forEach(function(a){a.isFromCache=!0}),this.invoke("initial_results_ready",this.countValidResults(this.results))),(!this.delayRender||!this.lockRender)&&(this.invoke("resultsready",this.results),this.readyCount==this.cacheSourceCount&&this.invoke("initial_render"))};d.childComplete=function(){this.completeCount++,this.completeCount==this.sources.length&&(this.invoke("complete"),this.invoke("after_complete"))};d.childRequestDispatch=function(a){this.invoke("req_dispatch",a)};d.childRequestSent=function(){this.invoke("req_sent")};d.childRequestReceived=function(a){this.invoke("req_recv",a)};d.startRender=function(){this.lockRender=!1,this.invoke("resultsready",this.results),this.invoke("initial_render")};d.showQueryResultsOnFocus=function(){(!this.delayRender||!this.lockRender)&&this.invoke("resultsready",this.results)};d.countValidResults=function(a){var c=0;a.forEach(function(a){a=b("isElementNode")(a)?a.getAttribute(this.mergeKey):a[this.mergeKey];a!=null&&++c},this);return c};d.getResult=function(a){var b;for(var c=0;c<this.sources.length;++c){b=this.sources[c].getResult(a);if(b!==void 0)break}return b};d.disableEmptyMergeKey=function(){this.allowEmptyMergeKey=!1};d.mergeResults=function(a,c){var d=[].concat(a);if(c.length===0)return d;var e={},f;for(f=0;f<a.length;++f){var g=a[f];g=b("isElementNode")(g)?g.getAttribute(this.mergeKey):g[this.mergeKey];e[g]=!0}for(f=0;f<c.length;++f){g=c[f];a=b("isElementNode")(g)?g.getAttribute(this.mergeKey):g[this.mergeKey];(this.allowEmptyMergeKey||a!=null)&&!(a in e)&&d.push(g)}return d};d.setShouldMergeResults=function(a){this.shouldMergeResults=a};return c}(b("TypeaheadSource"));Object.assign(a.prototype,{sources:null,results:null,completeCount:0,mergeKey:"rel",isWorkUser:!1});e.exports=a}),null);
__d("TypeaheadPreloadedSource",["TypeaheadSource"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this)||this;c.uri=b;return c}var c=b.prototype;c.didChange=function(a){this.ready?this.matchResults(a):(this.lastValue=a,this.waitForResults())};c.didStart=function(){throw new Error("Use MTypeaheadPreloadedSource!")};c.ondata=function(a){for(var b=0;b<a.length;++b)this.addResult(a[b]);this.lastValue!==null&&this.matchResults(this.lastValue);this.ready=!0};return b}(b("TypeaheadSource"));Object.assign(a.prototype,{ready:!1,uri:null,lastValue:null});e.exports=a}),null);
__d("MDynaTemplate",["HTML","err"],(function(a,b,c,d,e,f){var g={_otag:"[[",_regexOtag:"\\[\\[",_regexCtag:"\\]\\]",_regexTag:0,_regexNewTag:0,_templates:{},_alias:{},_contains:function(a,b){return b.indexOf(g._otag+a)!=-1},_escapeChar:function(a){switch(a){case"&":return"&amp;";case'"':return"&quot;";case"'":return"&#39;";case"<":return"&lt;";case">":return"&gt;";default:return a}},_escape:function(a){a=a===null?"":""+a;return a.replace(/&(?!\w+;)|[\"\'<>]/g,g._escapeChar)},registerTemplates:function(a){for(var b in a){var c=a[b];g._alias[c[0]]=c[1];g._templates[b]=c[1]}},renderToHtml:function(a,c){if(a.charAt(0)=="@")return g.renderToHtml(g._alias[a.substring(1)],c);(g._contains("#",a)||g._contains("^",a))&&(a=a.replace(g._regexTag,function(a,b,d,e){a=c[d];a=a&&a.__html!==void 0?a.__html:a;if(b=="^")if(!a||Array.isArray(a)&&a.length===0)return g.renderToHtml(e,c);else return"";else if(b=="#"){if(Array.isArray(a)){d=[];for(var b=0;b<a.length;b++)d.push(g.renderToHtml(e,a[b]));return d.join("")}else if(a&&typeof a==="object")return g.renderToHtml(e,a);else if(!(typeof a==="function"))if(a)return g.renderToHtml(e,c);return""}}));return!g._contains("",a)?a:a.replace(g._regexNewTag,function(a,d,e){e=e.replace(/^\s*|\s*$/g,"");a=c[e];if(!a||Array.isArray(a)&&a.length===0)return"";switch(d){case">":if(a[0].charAt(0)=="@")return g.renderToHtml(a[0],a[1]);else if(!(a[0]in g._templates))return"";return g.renderToHtml(g._templates[a[0]],a[1]);case"%":break;default:return window.HTML&&a instanceof b("HTML")?a.toString():a.__html!==void 0?a.__html:g._escape(a)}})}};(function(){g._regexTag=new RegExp(g._regexOtag+"(\\^|\\#)\\s*(.+)\\s*"+g._regexCtag+"\n*([\\s\\S]+?)"+g._regexOtag+"\\/\\s*\\2\\s*"+g._regexCtag+"\\s*","mg"),g._regexNewTag=new RegExp(g._regexOtag+"(>|\\[|%)?([^\\/#\\^]+?)\\1?"+g._regexCtag+"+","g")})();e.exports=g}),null);
__d("MTypeaheadCache",["MBootstrapCacheMaxCacheTime","MCache","URI"],(function(a,b,c,d,e,f){var g,h="1",i=12096e5;function j(a){var c=b("MCache").getItem(a);(!c||c.cacheVersion!==h)&&(c={cacheVersion:h,cachedKeys:{}},b("MCache").setItem(a,c));var d=c.cachedKeys,e=!1,f=b("MBootstrapCacheMaxCacheTime").maxCacheTimeByKey[a];f=f!=null?f:i;f=Date.now()-f;for(var g in d)d[g].time<f&&(e=!0,delete d[g]);e&&b("MCache").setItem(a,c);return c}function k(a){return"typeahead_"+a}function l(a){a=new(g||(g=b("URI")))(a);var c=a.getQueryData();c=c.cacheBust;c||a.addQueryData("noBust","");a.removeQueryData("cacheBust");a=a.toString();return{cacheKey:a,busterToken:c}}a={get:function(a,b){b=l(b);var c=b.cacheKey;b=b.busterToken;a=j(k(a)).cachedKeys[c];return a&&a.cacheBusterToken===b?a.data:null},set:function(a,c,d){a=k(a);var e=j(a);c=l(c);var f=c.cacheKey;c=c.busterToken;e.cachedKeys[f]={cacheBusterToken:c,time:Date.now(),data:d};b("MCache").setItem(a,e)}};e.exports=a}),null);
__d("MTypeaheadCachableSource",["MRequest","MTypeaheadCache","TypeaheadPreloadedSource","createDeprecatedProperties","eventsMixinDeprecated"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b)||this;b.sourceKey=c||null;return b}var d=c.prototype;d.didStart=function(){var a=this,d=this.ondata,e=c._bootstrapping;if(this.sourceKey){if(e[this.sourceKey]===!0){c.listen("bootstrapped",function(b){b.source_key===a.sourceKey&&a.didStart()});return}e=b("MTypeaheadCache").get(this.sourceKey,this.uri);if(e){this.invoke("rawresultsready",e);d.call(this,e);return}}this.uri&&this.sendRequest()};d.sendRequest=function(){var a=this,d=c._bootstrapping;d[this.sourceKey]=!0;var e=new(b("MRequest"))(this.uri).setMethod("GET").setIgnoreErrors(!0);e.listen("done",function(c){c=c!=null&&c.payload!=null?c.payload:c;c!=null&&Array.isArray(c.nullstate)&&(c=c.nullstate);Array.isArray(c)||(c=[]);for(var e=0;e<c.length;++e)c[e].bootstrap=1;a.sourceKey&&b("MTypeaheadCache").set(a.sourceKey,a.uri,c);a.invoke("rawresultsready",c);a.ondata.call(a,c);delete d[a.sourceKey];a.invoke("bootstrapped",{source_key:a.sourceKey})});e.listen("finally",function(){delete d[a.sourceKey]});e.listen("open",function(){var b=e.getTransport();b.withCredentials=!0;window.FW_ENABLED&&!a.getNofwheaders()&&(b.setRequestHeader("FB_FW","1"),window.FB_FW_VERSION&&b.setRequestHeader("FB_FW_VERSION",window.FB_FW_VERSION),window.FB_FW_DEVICE&&b.setRequestHeader("FB_FW_DEVICE",window.FB_FW_DEVICE))});this.getAuxiliaryData()&&e.setData(this.getAuxiliaryData());e.send()};return c}(b("TypeaheadPreloadedSource"));b("eventsMixinDeprecated")(a,["bootstrapped","rawresultsready"]);b("createDeprecatedProperties")(a,{nofwheaders:!1,showSecondaryAction:!1,auxiliaryData:{}});Object.assign(a,{_bootstrapping:{}});Object.assign(a.prototype,{sourceKey:null});e.exports=a}),null);
__d("MTypeaheadHelpers",["cx","fbt","CSS","DOM","FWLoader","HTML","MDynaTemplate","MLegacyDataStore","uniqueID"],(function(a,b,c,d,e,f,g,h){var i=b("FWLoader").FW,j=43,k=65536;a={getSecondaryAction:function(a){if(a.action=="phone")return this.getPhoneAction(a);else if(a.action=="add_friend")return this.getAddAction(a);else if(a.action=="add_contact")return this.getAddContactAction(a);else if(a.action=="message")return this.getMessageAction(a);return null},getPhoneAction:function(a){if(!a.paths||!(a.paths.mobile||a.paths.sms))return null;a=b("MDynaTemplate").renderToHtml("@CallButtonTemplate",{call_uri:a.paths.mobile,call_style:a.paths.mobile?"":"display:none;",sms_uri:a.paths.sms,sms_style:a.paths.sms?"":"display:none;"});return new(b("HTML"))(a)},getAddAction:function(a){return!a.paths||!a.paths[a.action]?null:new(b("HTML"))(a.paths[a.action])},getAddContactAction:function(a){return!a.paths||!a.paths[a.action]?null:a.paths[a.action]},getMessageAction:function(a){a=b("MDynaTemplate").renderToHtml("@MessageButtonTemplate",{message_uri:a.paths.message});return new(b("HTML"))(a)},determineIconSize:function(a,b){var c=b.photoSize||j;b=b.photo;var d=new Image(),e=function(b){var a=this;if(b.type==="load"){b=document.getElementById(a.targetID);if(b){if(a.naturalWidth>c||a.naturalHeight>c){var d=window.devicePixelRatio,e=Math.round(a.naturalHeight/d);d=Math.round(a.naturalWidth/d);e=Math.min(e,c);d=Math.min(d,c);b.style.backgroundSize=d<e?d+"px auto":"auto "+e+"px"}b.style.backgroundImage="url("+a.src+")"}}a.onload=null;a.onerror=null;a.targetID=null};d.targetID=a;d.onload=e;d.onerror=e;d.src=b},getI18NTypeMap:function(a){var b={App:h._(/*FBT_CALL*/"Aplicaci\u00f3n"/*FBT_CALL*/),Event:h._(/*FBT_CALL*/"Evento"/*FBT_CALL*/),Group:h._(/*FBT_CALL*/"Grupo"/*FBT_CALL*/),Page:h._(/*FBT_CALL*/"P\u00e1gina"/*FBT_CALL*/),page:h._(/*FBT_CALL*/"p\u00e1gina"/*FBT_CALL*/),Place:h._(/*FBT_CALL*/"Lugar"/*FBT_CALL*/),User:h._(/*FBT_CALL*/"Usuario"/*FBT_CALL*/)};return b[a]?b[a]:a},createNode:function(a,c,d){d===void 0&&(d={});if(a instanceof HTMLElement)return a;var e=[];if(a.photo){var f=b("DOM").create("div",{className:"profile-icon"});e.push(f);this.determineIconSize(b("DOM").uniqID(f),a)}f=[a.display];if(a.verified)f.push(a.verified);else if(a.is_verified){var g=b("DOM").create("span",{className:"_56_f _5dzy _5dz_ _3twv badge"});f.push(g)}g=b("DOM").create("i",{className:"img presence",sigil:"presence"},"");b("DOM").hide(g);f.push(g);g=b("DOM").create("span",{className:"mfsl"},f);e.push(g);a.photo||b("CSS").conditionClass(g,"noimage",!0);f=a.subtext;b("CSS").conditionClass(g,"name",!0);if(f){g="subtext mfss fcg";a.photo||(g+=" subtext-noimage");e.push(b("DOM").create("span",{className:g},f))}g={href:a.uri,name:a.name||a.display,className:"primary touchable",sigil:"touchable typeahead-result",rel:a.id,role:"option"};d.skipDefaultResultHref&&delete g.href;a.meta&&(g.meta=a.meta);f=b("DOM").create("a",g,e);d=JSON.stringify(a);d.length>k||f.setAttribute("data-extra",d);f.setAttribute("data-testid",a.id);a.weak_reference&&f.setAttribute("weak_reference",!0);a.renderType&&f.setAttribute("renderType",a.renderType);window.FW_ENABLED&&i.isIOS()&&b("MLegacyDataStore").set(f,{nativeClick:!0});a.bootstrap&&b("MLegacyDataStore").set(f,{bootstrap:1});a.gender&&b("MLegacyDataStore").set(f,{gender:a.gender});a.untranslatedType&&b("MLegacyDataStore").set(f,{type:a.untranslatedType});a.openinnewtab&&f.setAttribute("target","_blank");a.isNullStateSuggestion&&b("MLegacyDataStore").set(f,{isNullStateSuggestion:a.isNullStateSuggestion});g=[f];if(c){e=this.getSecondaryAction(a);e&&g.push(e)}a.nativethirdpartyappicon&&g.push(new(b("HTML"))(b("MDynaTemplate").renderToHtml("@NativeThirdPartyAppIconTemplate")));d="jx-result";(a.nativethirdpartyappicon||c&&this.getSecondaryAction(a))&&(d+=" hasSecondaryAction");a.action=="add_friend"&&a.addfriendtemplate&&b("MDynaTemplate").renderToHtml("@AddFriendLoadResourcesTemplate");f=b("DOM").create("div",{className:d,id:b("uniqueID")(),rel:a.id,sigil:"jx-result"+(a.action=="add_friend"?" undoable-action":"")},g);a.renderType!=null&&f.setAttribute("renderType",a.renderType);a.untranslatedType!=null&&f.setAttribute("type",a.untranslatedType);a.category!=null&&f.setAttribute("category",a.category);return f}};e.exports=a}),null);
__d("MTypeaheadOnDemandSource",["MRequest","MTypeaheadHelpers","Stratcom","TypeaheadInternationalNormalizer","TypeaheadNormalizer","TypeaheadOnDemandSource","createDeprecatedProperties","setTimeoutAcrossTransitions","throttle"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e;e=a.call(this,c,d)||this;e.previousResults=null;e.setNormalizer(b("TypeaheadInternationalNormalizer").normalize);e.setSanitizer(b("TypeaheadNormalizer").normalize);e._allowFreeformEntry=!1;e._cacheResultsLength=0;e._maxResults=1e6;b("Stratcom").listen("m-typeahead-logger:new-session-id",null,function(a){e._sessionID=a.getData().sessionID});return e}var d=c.prototype;d.setAllowFreeformEntry=function(a){this._allowFreeformEntry=a};d.createNode=function(a){return b("MTypeaheadHelpers").createNode(a,this.getShowSecondaryAction())};d.didChange=function(a){this.lastChange=Date.now();var c=this.getSanitizer()(a);if(this.haveData[c]){c=this.normalize(c);c=this.getMatchedResults(c);this.invoke("resultsready",c);this.enableEagerSendRequest&&this.invoke("unlock_render");this.invoke("complete")}else{this.enableImmediateReturnOfCachedResults===!0?(this.previousResults=this.getMatchedResults(a),this.invoke("resultsready",this.previousResults)):this.previousResults=null;if(this._cacheResultsLength>=this._maxResults){this.enableEagerSendRequest&&this.invoke("unlock_render");this.invoke("complete");return}this.enableEagerSendRequest||this.waitForResults();this.invoke("req_dispatch",this._sessionID);this.throttleSendRequest?this.throttleSendRequest(this.lastChange,a):b("setTimeoutAcrossTransitions")(this.sendRequest.bind(this,this.lastChange,a),this.getQueryDelay());this.enableEagerSendRequest&&(this.invoke("unlock_render"),this.waitForResults())}};d.setEnableImmediateReturnOfCachedResults=function(a){this.enableImmediateReturnOfCachedResults=a};d.setEnableEagerSendRequest=function(a){this.enableEagerSendRequest=a};d.setThrottleSendRequest=function(a){this.throttleSendRequest=b("throttle").acrossTransitionsWithBlocking(this.sendRequest.bind(this),a)};d.setCacheResultsLength=function(a){this._cacheResultsLength=a};d.setMaxResults=function(a){this._maxResults=a};d.sendRequest=function(a,c){var d=this;if(a!=this.lastChange)return;if(!this.uri)return;a=new(b("MRequest"))(this.uri);a.setData(Object.assign(this.getAuxiliaryData()||{},{q:c,session_id:this._sessionID}));a.setMethod("GET");var e=this.lastChange;a.listen("done",function(a){d.ondata(e,c,a)});a.send();this.invoke("req_sent")};d.ondata=function(a,b,c){c=c.payload||c;this.invoke("req_recv",c?c.length:0);var d=0,e=0,f={};if(this.previousResults!=null){e=this.previousResults.length;for(d=0;d<this.previousResults.length;d++){var g=this.previousResults[d];g.idx=d;this._raw[g.id]=g;this.addToLookup(g.id,b);f[g.id]=g.id}}if(c){if(c.length!==0){for(g=0;g<c.length;++g)c[g].idx=g+e;for(g=0;g<c.length;g++)c[g].uid in f||this.addResult(c[g],b)}else this._allowFreeformEntry&&this.addResult({text:b,uid:0,path:"#"},b);this.haveData[b]=!0;if(a!=this.lastChange)return;this.matchResults(b)}};d.addResult=function(a,b){var c=this.addToLookup.bind(this);a.uid in this._raw&&(this._raw[a.uid].idx=a.idx);a=(this.getTransformer()||this._defaultTransformer)(a);this._firstSeenOnValue[a.id]=this._firstSeenOnValue[a.id]||b;!(a.id in this._raw)?(this._raw[a.id]=a,c(a.id,a.name),c(a.id,b)):(this._raw[a.id]=a,c(a.id,b))};d.addToLookup=function(a,b){b=this.tokenize(b);for(var c=0;c<b.length;++c)this._lookup[b[c]]=this._lookup[b[c]]||[],this._lookup[b[c]].push(a)};d.sortHits=function(a,b){var c=this;a=function(a,b){a=c._raw[a];a=isNaN(a.idx)?Number.MAX_VALUE:a.idx;b=c._raw[b];b=isNaN(b.idx)?Number.MAX_VALUE:b.idx;return a-b};b.sort(a)};d.renderNodes=function(a,c){return b("TypeaheadOnDemandSource").prototype.renderNodes.apply(this,arguments)};d.clearCache=function(){a.prototype.clearCache.call(this),this.previousResults=null};return c}(b("TypeaheadOnDemandSource"));b("createDeprecatedProperties")(a,{sanitizer:null,transformer:function(a){return{name:a.text,uri:a.path,id:a.uid,photo:a.photo,display:a.display||a.text,action:a.action,paths:a.paths,permissions:a.permissions,photoSize:a.photo_size,type:a.type,openinnewtab:a.openinnewtab,subtext:a.text_only_subtext||a.subtext,nativethirdpartyappicon:a.nativethirdpartyappicon,idx:a.idx,renderType:a.render_type,untranslatedType:a.untranslated_type,verified:a.verified,weak_reference:a.weak_reference,geo_location_type:a.geo_location_type,city_id:a.city_id,city_text:a.city_text,isScoped:a.is_scoped,categoryID:a.cid,tagID:a.tid,category:a.category,location:a.location,street_address:a.street_address,postal_code:a.postal_code}},showSecondaryAction:!0});e.exports=a}),null);
__d("MTypeaheadTouchSource",["MTypeaheadCachableSource","MTypeaheadHelpers","TypeaheadInternationalNormalizer","createDeprecatedProperties"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d,e){c=a.call(this,c,d)||this;c.setNormalizer(b("TypeaheadInternationalNormalizer").normalize);c.options=e;return c}var d=c.prototype;d.createNode=function(a){return b("MTypeaheadHelpers").createNode(a,this.getShowSecondaryAction(),this.options)};d.matchResults=function(a){a=this.normalize(a);b("MTypeaheadCachableSource").prototype.matchResults.call(this,a)};d.ondata=function(a){for(var c=0;c<a.length;++c)a[c].idx=c;b("MTypeaheadCachableSource").prototype.ondata.apply(this,[a])};return c}(b("MTypeaheadCachableSource"));b("createDeprecatedProperties")(a,{transformer:function(a){var b=a.openinnewtab!=null?a.openinnewtab:a.type==="App";return{name:a.text,uri:a.path,id:a.uid,photo:a.photo,photoSize:a.photo_size,gender:a.gender,display:a.display||a.text,action:a.action,paths:a.paths,permissions:a.permissions,type:a.type,openinnewtab:b,subtext:a.subtext,nativethirdpartyappicon:a.nativethirdpartyappicon,bootstrap:a.bootstrap,idx:a.idx,tokenType:a.tokenType,renderType:a.render_type,untranslatedType:a.untranslated_type,weak_reference:a.weak_reference,is_verified:a.is_verified}},sortHandler:function(a,b,c){a=function(a,b){a=isNaN(a.idx)?Number.MAX_VALUE:a.idx;b=isNaN(b.idx)?Number.MAX_VALUE:b.idx;return a-b};b.sort(a)}});e.exports=a}),null);
__d("XThisControllerNoLongerExistsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dcb/tcnle/",{t:{type:"String"}})}),null);
__d("findTag",["$","fb-error-lite"],(function(a,b,c,d,e,f,g){a=function(a,b){var d=c("$")(a);if(!b){if(d instanceof HTMLElement)return d;var e=c("fb-error-lite").err('Element with ID "%s" is not an HTMLElement',a);e.taalOpcodes=[c("fb-error-lite").TAALOpcode.PREVIOUS_FILE];throw e}e=d.tagName.toLowerCase();if(e!==b){a=c("fb-error-lite").err('Expected $("%s") to be of type "%s" but got "%s" instead.',a,b,e);a.taalOpcodes=a.taalOpcodes||[];a.taalOpcodes=[c("fb-error-lite").TAALOpcode.PREVIOUS_FILE];throw a}return d};b=a;g["default"]=b}),98);
__d("ThisControllerNoLongerExists",["XControllerURIBuilder","XThisControllerNoLongerExistsController"],(function(a,b,c,d,e,f,g){"use strict";var h=function(b){babelHelpers.inheritsLoose(a,b);function a(a){var c;c=b.call(this,"/dcb/tcnle/",{})||this;c.$XControllerURIBuilderNoOpDead1=a;return c}var d=a.prototype;d.__validateRequiredParamsExistence=function(){};d.__assertParamExists=function(a){};d.__setParam=function(a,b,c){return this};d.__setParamInt=function(a,b){};d.getRequest_LEGACY_UNTYPED=function(a){return a.setURI(this.getURI())};d.getURI=function(){return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t",this.$XControllerURIBuilderNoOpDead1).getURI()};d.getLookasideURI=function(){return this.getURI()};return a}(c("XControllerURIBuilder"));function a(a){return c("XThisControllerNoLongerExistsController").getURIBuilder().setString("t",a).getURI()}function b(a){return new h(a)}g.__DEADURI__=a;g.__DEADBUILDER__=b}),98);