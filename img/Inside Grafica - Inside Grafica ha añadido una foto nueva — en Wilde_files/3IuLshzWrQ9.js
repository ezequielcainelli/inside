if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MVideoHomeSearchForm",["cx","DOM","Stratcom","SubscriptionsHandler","URI","ge","getActiveElement","goURI"],(function(a,b,c,d,e,f,g,h){"use strict";var i="watch-search-form-root-sigil";a=function(){function a(a){var b=this;this.$9=function(){b.$8()};this.$11=function(){b.$8()};this.$10=function(){b.$8()};this.$12=function(){b.$3.value="",b.$8()};this.$13=function(a){a.prevent();a=b.$3.value;if(a==="")return;b.$3.blur();a=c("URI").getRequestURI();a.setPath("/watch/search/");a.addQueryData("q",b.$3.value);c("goURI")(a)};this.$1=new(c("SubscriptionsHandler"))();this.$2=c("ge")(i);this.$3=d("DOM").find(this.$2,"input","search-small-box");this.$4=d("DOM").find(this.$2,"form","search-typeahead-form");this.$5=this.$2.getElementsByClassName("_5-ly")[0];this.$6=d("DOM").find(this.$2,"button","search-submit-button");this.setQuery((a=a.initialQuery)!=null?a:"");this.$7();this.$8()}var b=a.prototype;b.destroy=function(){this.$1.release()};b.setQuery=function(a){this.$3.value=a};b.$7=function(){this.$1.addSubscriptions(d("DOM").listen(this.$3,"focus",null,this.$9),d("DOM").listen(this.$3,"blur",null,this.$10),d("DOM").listen(this.$3,"input",null,this.$11),d("DOM").listen(this.$5,"mousedown",null,this.$12),d("DOM").listen(this.$5,"touchstart",null,this.$12),d("DOM").listen(this.$4,"submit",null,this.$13))};b.$8=function(){this.$3.value?d("DOM").show(this.$6):d("DOM").hide(this.$6);var a=c("getActiveElement")()===this.$3;a&&this.$3.value?d("DOM").show(this.$5):d("DOM").hide(this.$5)};a.initialize=function(b){var d=new a(b);c("Stratcom").listen("m:page:unload",null,function(){d.destroy(),c("Stratcom").removeCurrentListener()})};return a}();g["default"]=a}),98);
__d("MLoggedOutVideoHomeSearchOverlay",["DOM","MOverlay","MVideoHomeSearchForm","Stratcom","ge"],(function(a,b,c,d,e,f,g){"use strict";var h=["/watch?","/watch/","/videos/","/videos/?"],i=["/watch","/videos"],j="search_jewel_container_sigil",k="watch-search-icon-container",l="watch-search-overlay-content",m="watch-search-icon",n="watch-search-overlay-back",o="watch-search-form-page-header",p="search-small-box";a=function(){function a(a){var b=this;this.searchOverlay=a.searchOverlay;this.searchOverlayConfig=this.searchOverlay.config;this.initialQuery=a.initialQuery;a=this.searchOverlay.getContentRoot();this.searchOverlayContent=c("DOM").find(a,"div",l);this.existingSearchFormInPageHeader=c("ge")(o);this.watchSearchEntrypoint=c("ge")(k,null,"div");this.nonWatchSearchEntrypoint=c("ge")(j,null,"div");this.existingSearchFormInPageHeader!=null?this.searchInput=c("DOM").find(this.existingSearchFormInPageHeader,"input",p):this.searchInput=c("DOM").find(this.searchOverlayContent,"input",p);this.searchFormInitalized=!1;this.$1();this.$2();c("Stratcom").listen("m:page:beforeloading",null,function(){b.$2()})}var b=a.prototype;b.$1=function(){var a=this;c("Stratcom").listen("click",m,function(b){b.prevent(),a.existingSearchFormInPageHeader==null?(a.searchOverlay.isDestroyed()===!0&&(a.searchOverlay=new(c("MOverlay"))(a.searchOverlayConfig,a.searchOverlayContent),a.searchFormInitalized=!1,a.existingSearchFormInPageHeader=c("ge")(o),a.existingSearchFormInPageHeader!=null?a.searchInput=c("DOM").find(a.existingSearchFormInPageHeader,"input",p):a.searchInput=c("DOM").find(a.searchOverlayContent,"input",p)),a.searchOverlay.show()):a.searchInput.focus()});c("Stratcom").listen("Layer:show",null,function(){a.searchFormInitalized!==!0&&(c("MVideoHomeSearchForm").initialize({initialQuery:a.initialQuery}),a.searchFormInitalized=!0);var b=a.searchInput;window.setTimeout(function(){b.focus()},1)});c("Stratcom").listen("click",[l,n],function(b){b.prevent(),a.searchOverlay.hide()})};b.$2=function(){var a=window.location.href,b=h.some(function(b){return a.includes(b)})||i.some(function(b){return a.endsWith(b)});b?(this.watchSearchEntrypoint.style.display="block",this.nonWatchSearchEntrypoint.style.display="none"):(this.watchSearchEntrypoint.style.display="none",this.nonWatchSearchEntrypoint.style.display="block")};return a}();g["default"]=a}),98);
__d("PagesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setConnectionClass=function(a){this.$1.connection_class=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventLocation=function(a){this.$1.event_location=a;return this};c.setEventTarget=function(a){this.$1.event_target=a;return this};c.setLogSource=function(a){this.$1.log_source=a;return this};c.setNavAttributionIDV2Key=function(a){this.$1.nav_attribution_id_v2_key=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setRawClientTime=function(a){this.$1.raw_client_time=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setTags=function(a){this.$1.tags=b("GeneratedLoggerUtils").serializeVector(a);return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={connection_class:!0,event:!0,event_location:!0,event_target:!0,log_source:!0,nav_attribution_id_v2_key:!0,page_id:!0,raw_client_time:!0,sessionid:!0,tags:!0};f["default"]=a}),66);
__d("PagesLoggerEventEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SAVE:"save",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UNSAVE:"unsave",UPDATE:"update"})}),null);
__d("PagesLogger",["PagesLoggerEventEnum","PagesTypedLogger"],(function(a,b,c,d,e,f){var g="extra_data_",h={log:function(a,c,d,e,f,h){e===void 0&&(e=null);f===void 0&&(f=[]);var i={},j=h||{};Object.keys(j||{}).forEach(function(a){var b=j[a];(b instanceof Array||b instanceof Object)&&(b=JSON.stringify(b));i[g+a]=b});new(b("PagesTypedLogger"))().setPageID(a).setEvent(c).setEventTarget(d).setEventLocation(e).setLogSource("pages_logger").setTags(f).updateExtraData(i).log()},registerLogOnClick:function(a,c,d,e,f,g){e===void 0&&(e=null),f===void 0&&(f=[]),g===void 0&&(g={}),a.addEventListener("click",function(){h.log(c,b("PagesLoggerEventEnum").CLICK,d,e,f,g)})}};e.exports=h}),null);
__d("ViewStyles",["LayoutStyles"],(function(a,b,c,d,e,f,g){"use strict";a=babelHelpers["extends"]({},c("LayoutStyles"),{backgroundColor:!0,borderBottomColor:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderBottomWidth:!0,borderColor:!0,borderLeftColor:!0,borderLeftWidth:!0,borderRadius:!0,borderRightColor:!0,borderRightWidth:!0,borderStyle:!0,borderTopColor:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderTopWidth:!0,borderWidth:!0,flex:!0,opacity:!0,overflow:!0});b=a;g["default"]=b}),98);
__d("TextStyles",["ViewStyles"],(function(a,b,c,d,e,f,g){"use strict";a=babelHelpers["extends"]({},c("ViewStyles"),{color:!0,fontFamily:!0,fontSize:!0,fontStyle:!0,fontWeight:!0,letterSpacing:!0,lineHeight:!0,textAlign:!0,textDecorationLine:!0,whiteSpace:!0});b=a;g["default"]=b}),98);
__d("Text",["cx","TextStyles","getValidatedStyle","joinClasses","pluckClassNames","prop-types","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||b("react");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getChildContext=function(){return{inline:!0}};d.render=function(){var a=this.props,d=a.children;a=a.style;a=b("pluckClassNames")(a);var e=a.classNames;a=a.styles;a=b("getValidatedStyle")(a,b("TextStyles"));var f=typeof d==="string",g=this.context.inline;g=b("joinClasses").apply(void 0,["_b5a"+(!f&&!g?" _b5b":"")+(g?" _b5c":"")].concat(e));f?e=d:e=i.Children.map(d,function(a){return typeof a==="string"?i.jsx(c,{children:a}):a});return i.jsx("div",{className:g,style:a,children:e})};return c}(i.Component);a.childContextTypes={inline:b("prop-types").bool};a.contextTypes={inline:b("prop-types").bool};e.exports=a}),null);
__d("TouchableOpacity",["cx","ViewStyles","getValidatedStyle","joinClasses","pluckClassNames","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.children,d=a.style,e=babelHelpers.objectWithoutPropertiesLoose(a,["children","style"]);d=c("pluckClassNames")(d);var f=d.classNames;d=d.styles;d=c("getValidatedStyle")(d,c("ViewStyles"));return i.jsx("button",babelHelpers["extends"]({className:c("joinClasses").apply(void 0,["_b5a"].concat(f)),style:d,onClick:function(){return a.onPress&&a.onPress()}},e,{children:b}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ScheduledApplyEach",["JSScheduler"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c){return a.map(function(a){d("JSScheduler").deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function(){b.apply(c,a)})})}g["default"]=a}),98);
__d("CheckpointStepIconSwitcher",["CSS"],(function(a,b,c,d,e,f){var g=null,h=null;function i(a){g!=null&&(h!=null&&b("CSS").hide(g[h]),b("CSS").show(g[a])),h=a}e.exports={init:function(a){g=a.icons;var b=h;h=a.selected;b!=null&&i(b)},show:function(a){i(a)}}}),null);
__d("LiveChatPluginCloseButtonSVG.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return h.jsx("svg",{width:"10px",height:"10px",viewBox:"0 0 14 14",children:h.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:h.jsx("g",{transform:"translate(-419.000000, -413.000000)",children:h.jsx("g",{transform:"translate(164.000000, 396.000000)",children:h.jsx("g",{children:h.jsx("g",{transform:"translate(250.000000, 12.000000)",children:h.jsx("g",{children:h.jsxs("g",{children:[h.jsx("rect",{opacity:"0.200000003",x:"0",y:"0",width:"24",height:"24"}),h.jsxs("g",{transform:"translate(4.000000, 4.000000)",fill:"#000000",children:[h.jsx("rect",{transform:"translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) ",x:"7",y:"-1",width:"2",height:"18",rx:"1"}),h.jsx("rect",{transform:"translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) ",x:"7",y:"-1",width:"2",height:"18",rx:"1"})]})]})})})})})})})})};return b}(h.PureComponent);g["default"]=a}),98);
__d("PluginLiveChatCloseInterstitial",["MessengerWebPluginAnonymousTypedLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e,f,g){try{a.onclick=function(){new(c("MessengerWebPluginAnonymousTypedLogger"))().setRequestID(g).setClientFbid(f===!0?"0":d).setPluginName("messaging_plugin").setPluginInterface("mobile").setIsUserLoggedIn(e).setTabName(f===!0?"welcome_page_in_new_tab_with_guest_option":"welcome_page_in_new_tab").setPageID(b).setNewEventName("tab_close").setEventTimestamp(Date.now()).logVital(),window.close()}}catch(a){}}g.onCloseButtonClick=a}),98);
__d("abstractMethod",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){h(0,1537,a,b)}g["default"]=a}),98);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f){b===void 0&&(b=100);var g=function(a,b,d){return c("setTimeout")(a,b,d,!e)};return c("debounceCore")(a,b,d,g,c("clearTimeout"),f)}g["default"]=a}),98);
__d("getByPath",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){a=a;for(var d=0;d<b.length;d++){var e=b[d];if(a&&typeof a!=="string"&&typeof a!=="number"&&e in a)a=a[e];else return c}return a}f["default"]=a}),66);
__d("VideoHomeClickLogger",["VideoHomeEvents","VideoHomeTypedLogger"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.target,d=a.id,e=a.clickPoint,f=a.playerOrigin;f=f===void 0?"video_home":f;a=a.eventTargetInfo;a=a===void 0?null:a;new(c("VideoHomeTypedLogger"))().setEvent(c("VideoHomeEvents").CLICK).setEventTarget(b).setEventTargetID(d).setClickPoint(e).setPlayerOrigin(f).setEventTargetInfo(a).log()}function a(a,b){a.addEventListener("click",function(){h(b)})}g.logClick=h;g.init=a}),98);