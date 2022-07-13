if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MTouchChannelManager",["Bootloader","MChannelManager","Run","gkx","onAfterDisplay"],(function(a,b,c,d,e,f,g){var h=!1;function a(a){a===void 0&&(a=!1);if(h)return;h=!0;c("MChannelManager").addListener(c("MChannelManager").CHANNEL_MESSAGE,function(a){return c("Bootloader").loadModules(["MTouchChannelPayloadRouter"],function(b){return b.route(a)},"MTouchChannelManager")});!a&&c("gkx")("676783")?c("gkx")("842146")?d("Run").onAfterLoad(c("MChannelManager").startChannel):c("onAfterDisplay")(c("MChannelManager").startChannel):c("MChannelManager").startChannel()}g.initialize=a}),98);
__d("MPresenceIcon",["DOM","MLegacyDataStore","MRequest","MURI","Stratcom","Visibility","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=1,h=2,i=6e4,j=null;function k(){var a=b("DOM").scry(document.body,"i","presence-icon"),c=[];for(var d=0,e=a.length;d<e;++d){var f=b("MLegacyDataStore").get(a[d]);f.userid&&!c[f.userid]&&(c[f.userid]=1)}if(c.length==0||b("Visibility").isHidden()){window.clearTimeout(j);j=b("setTimeoutAcrossTransitions")(k,i);return}f=new(b("MURI"))("/chat/presence_icon.php").toString();d=new(b("MRequest"))(f).setData({ids:Object.keys(c)}).setIgnoreErrors(!0);d.listen("done",function(e){for(var c=0,d=a.length;c<d;++c){var f=b("MLegacyDataStore").get(a[c]);f&&f.userid&&b("Stratcom").hasSigil(a[c],"online-icon")&&e[f.userid]==g||b("Stratcom").hasSigil(a[c],"mobile-icon")&&e[f.userid]==h?b("DOM").show(a[c]):b("DOM").hide(a[c])}});d.listen("finally",function(a){window.clearTimeout(j),j=b("setTimeoutAcrossTransitions")(k,i)});d.send()}k()}),null);
__d("MMessagesThreadRowID",[],(function(a,b,c,d,e,f){"use strict";var g="other_user_fbid_",h="thread_fbid_";function a(a,b,c){return a+(b?g+b:h+String(c))}f.getThreadRowID=a}),66);
__d("XFBConfirmationCliffTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:XFBConfirmationCliffLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:XFBConfirmationCliffLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:XFBConfirmationCliffLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCliffCaller=function(a){this.$1.cliff_caller=a;return this};c.setError=function(a){this.$1.error=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={cliff_caller:!0,error:!0,surface:!0};f["default"]=a}),66);
__d("XMessagesJewelContentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mobile/messages/jewel/content/",{spinner_id:{type:"String",required:!0}})}),null);
__d("MMessagesJewel",["fbt","invariant","Arbiter","ChannelEventType","DOM","EventListener","MJewel","MJewelFlyout","MJewelLinkFetcher","MJewels","MLogState","MMessagesThreadRowID","MPageCache","MPageFetcher","MRequest","MURI","Popover","Stratcom","XFBConfirmationCliffTypedLogger","XMessagesJewelContentController","ge","onAfterDisplay","onAfterTTI","throttle"],(function(a,b,c,d,e,f,g,h){"use strict";var i="mJewelMsgThreadContents",j="msg_",k,l,m=!1,n=!1,o,p=!1,q=!0,r=!1,s=0;function t(){k||h(0,2795);b("Arbiter").subscribe("m:jewels:init-counts",w,"all");k.listen("cleared",y);if(!p){var a;p=!0;(a=b("Stratcom")).listen(b("ChannelEventType").MESSAGE,null,C);a.listen(b("ChannelEventType").MESSAGE,null,z);a.listen("m:jewel:flyout:open",null,x);a.listen("m:history:change",null,u);l&&b("EventListener").listen(l,"click",v)}}function u(a){var c=new(b("MURI"))(a.getData().path).normalize().toString();a=a.getData().soft;var d=new(b("MURI"))(b("MJewelLinkFetcher").get("messages")).normalize().toString();m&&c!==d?q=!0:!m&&a!=="messages"&&(q=!0)}function v(){q&&(s=0,q=!1,m&&k&&k.getCount()>0&&(k&&k.setCount(0))),r=!0}function w(a,b){a=b.viewer_id;var c=b.unseen_thread_ids;b=b.unread_thread_ids;a&&(H.viewerID=a);c&&(H.unseenThreadIDs=c.reduce(function(a,b){a[b]=1;return a},{}));b&&(H.unreadThreadIDs=b.reduce(function(a,b){a[b]=1;return a},{}));c&&k&&(k.reregisterListeners(),s=c.length,k.updateCount(c.length,y))}function x(a){a=a.getData();if(!k||a.jewel!=="messages")return;H.messengerCliff&&new(b("XFBConfirmationCliffTypedLogger"))().setSurface("messenger_seen").log();a=k.getCount();k.setCount(a);B()}function y(){var a=new(b("MRequest"))(new(b("MURI"))("/a/jewel_messages_read.php").toString());a.send()}function z(a){a=a.getData();if(!a||!k)return;if(a.event==="read"&&a.message.folder==="inbox"){var b=a.message.thread_fbid||a.message.other_user_fbid;delete H.unseenThreadIDs[b];delete H.unreadThreadIDs[b]}else if(a.event==="unread"&&a.message.folder==="inbox"){b=a.message.thread_fbid||a.message.other_user_fbid;H.unreadThreadIDs[b]=1}else if(a.event==="mark_all_read"&&a.message.folder==="inbox")H.unreadThreadIDs={},H.unseenThreadIDs={};else if(a.event==="mark_all_seen"&&a.message.folder==="inbox")H.unseenThreadIDs={};else if(a.parsedPayload&&a.folder==="inbox"){b=a.parsedPayload;if(!A(H.viewerID,b)||b.isUnread()===!1||a.message.is_muted)return;a=b.getThreadFBID()||b.getOtherUserFBID();H.unseenThreadIDs[a]=1;H.unreadThreadIDs[a]=1}else return;b=Object.keys(H.unseenThreadIDs).length;a=Object.keys(H.unreadThreadIDs).length;var c=s;!k.isOpen()&&b!==k.getCount()&&(s=b,k.setCount(b));b=a>0?g._(/*FBT_CALL*/"Mensajes ({unread_message_count})"/*FBT_CALL*/,[g._param("unread_message_count",a)]):g._(/*FBT_CALL*/"Mensajes"/*FBT_CALL*/);a=k.getFlyout();a&&a.setHeaderText("messages_jewel_header_text",b.toString());G(c<s)}function A(a,b){if(!b.getParticipantIDs())return!1;if(b.getParticipantIDs().indexOf(a)>-1)return!0;if(a)return b.getParticipantIDs().indexOf(a.toString())>-1;else return!1}function B(){k||h(0,2795);var a="messages-flyout-loading";a=b("DOM").scry(l,"*",a);if(a.length>0){a=b("XMessagesJewelContentController").getURIBuilder().setString("spinner_id",a[0].getAttribute("id")).getURI();o||(o=new(b("MRequest"))(a),o.listen("finally",function(){o=null}),o.send())}}function C(a){a=a.getData();if(!a||!k)return;if(a.parsedPayload){var c=a.parsedPayload;if(!c.getFolder||c.getFolder()!=="inbox"||!A(H.viewerID,c))return;k.isInitialized()&&(b("MJewelFlyout").removeMenuContent(D(c.getOtherUserFBID(),c.getThreadFBID())),k.isOpen()&&y());m||B()}else a.event==="read"&&a.is_sync&&b("MJewelFlyout").updateMenuColor(D(a.message.other_user_fbid,a.message.thread_fbid),!0,!1)}function D(a,c){return b("MMessagesThreadRowID").getThreadRowID(j,a,c)}function E(a){var c=function(){r||F(!1)};switch(a){case"asap":c();break;case"after-tti":b("onAfterTTI")(c);break;case"after-dd":b("onAfterDisplay")(c);break}}var F=b("throttle")(function(a){var c=b("MJewelLinkFetcher").get("messages");if(!c)return;a&&b("MPageCache").removeCachedPage(c);b("MPageFetcher").prefetch(c)},100);function G(a){n&&F(!0)}var H={unseenThreadIDs:{},unreadThreadIDs:{},viewerID:null,messengerCliff:!1,initJewel:function(a){m=!!a.noFlyout,k=b("MJewel").create("messages",{contentsSigil:i,pos:b("MLogState").CLICK_POSITION_MESSAGES_FLYOUT,softState:b("MJewels").MESSAGES,noPopover:m,additionalPaths:["/messages/"]}),l=b("DOM").find(b("ge")("MChromeHeader"),"div","messages"),n=!!a.shouldPrefetch,a.shouldPrefetch&&E(a.initialPrefetchPhase),t()},setMessengerCliff:function(a,b,c){H.messengerCliff=a},refreshMessagesConstraints:function(){b("Popover").getInstance("messages_flyout").refreshConstraints()}};e.exports=H}),null);
__d("XNotificationJewelContentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mobile/notifications/jewel/content/",{spinner_id:{type:"String",required:!0}})}),null);
__d("MNotificationsJewel",["invariant","Arbiter","DOM","EventListener","MJewel","MJewelFlyout","MJewelLinkFetcher","MJewels","MLogState","MPageCache","MPageFetcher","MRequest","MURI","Popover","Stratcom","XNotificationJewelContentController","ge","onAfterDisplay","onAfterTTI","throttle"],(function(a,b,c,d,e,f,g,h){"use strict";var i="notif_",j="/notifications.php",k,l,m,n,o=!1,p={},q=!1,r=!0,s=!1,t=0,u=!1;function v(){k||h(0,2795),c("Arbiter").subscribe("m:jewels:init-counts",w,"all"),m=k.listen("jewel_click",A),k.listen("cleared",C),o||(o=!0,c("Stratcom").listen("m_notification",null,E),c("Stratcom").listen("m:jewel-set:notifications-jewel:refresh-flyout",null,J),c("Stratcom").listen("notifications_read",null,F),c("Stratcom").listen("notifications_seen",null,F),c("Stratcom").listen("m:jewel:flyout:open",null,x),c("Stratcom").listen("m:history:change",null,y),l&&c("EventListener").listen(l,"click",z))}function w(a,b){a=b.unread_notification_ids;b=b.notification_count;a&&(p=a);b&&k&&(t=b,k.reregisterListeners(),k.updateCount(b,C))}function x(a){a=a.getData();if(a.jewel!=="notifications")return;D()}function y(a){var b=new(c("MURI"))(a.getData().path).normalize().toString();a=a.getData().soft;var e=new(c("MURI"))(d("MJewelLinkFetcher").get("notifications")).normalize().toString();q&&b!==e?r=!0:!q&&a!=="notifications"&&(r=!0)}function z(){r&&(t=0,r=!1,q&&k&&k.getCount()>0&&(k&&k.setCount(0))),s=!0}function A(){k||h(0,2795),m&&(m.remove(),m=null),new(c("MRequest"))("/a/jewel_notifications_log.php").addData({click_type:"jewel_click",count:k.getCount()}).send()}function B(a){return i+a}function C(){m&&(m.remove(),m=null);var a=p;p={};var b=[];for(var a in a)b.push(a);a=new(c("MRequest"))(new(c("MURI"))("/a/jewel_notifications_read.php").toString());a.addData({ids:b,count:b.length,seen:!0});a.send()}function D(){k||h(0,2795);var a=k._getContentsElement(),b="notifications-flyout-loading";if(c("Stratcom").hasSigil(a,b)){b=c("XNotificationJewelContentController").getURIBuilder().setString("spinner_id",a.getAttribute("id")).getURI();n||(n=new(c("MRequest"))(b),n.listen("finally",function(){n=null}),n.send())}}function E(a){k||h(0,2795);a=a.getData();if(a&&a.data){if(a.data.type==="friend_confirmed")return;var b=!1;!k.isOpen()&&!p[a.data.alert_id]&&(t<a.data.unread+k.getCount()&&(b=!0),t=a.data.unread+k.getCount(),k.setCount(t));c("MJewelFlyout").removeMenuContent(B(a.data.alert_id));p[a.data.alert_id]=!0;k.isOpen()&&C();q||D();I(b)}}function F(a){k||h(0,2795);var b=a.getData();if(!b)return;var d=t;a=a.getType()=="notifications_read";if(b.alert_ids){var e=0;for(var f=0;f<b.alert_ids.length;f++)p[b.alert_ids[f]]&&(delete p[b.alert_ids[f]],a&&c("MJewelFlyout").updateMenuColor(B(b.alert_ids[f]),!0,!1),e++);f=k.getCount();t=f-e;k.setCount(t)}else{t=0;k.setCount(t);if(a)for(var b in p)c("MJewelFlyout").updateMenuColor(B(b),!0,!1);p={}}I(d<t)}function G(a){var b=function(){s||H(!1)};switch(a){case"asap":b();break;case"after-tti":c("onAfterTTI")(b);break;case"after-dd":c("onAfterDisplay")(b);break}}var H=c("throttle")(function(a){var b=d("MJewelLinkFetcher").get("notifications");if(!b)return;a&&c("MPageCache").removeCachedPage(b);d("MPageFetcher").prefetch(b)},100);function I(a){u&&H(!0)}function a(a){k=c("MJewel").create("notifications",{pos:d("MLogState").CLICK_POSITION_NOTIFICATIONS_FLYOUT,softState:d("MJewels").NOTIFICATIONS,noPopover:!!a.noFlyout,additionalPaths:[j],count:a.count||0}),l=d("DOM").find(c("ge")(c("MJewel").JEWEL_NAV_NODE_ID),"div","notifications"),q=!!a.noFlyout,t=a.count||0,u=!!a.shouldPrefetch,a.shouldPrefetch&&G(a.initialPrefetchPhase),v()}function J(){c("Popover").getInstance("notifications_flyout").refreshConstraints()}function b(){var a=document.getElementById("notifications_flyout");if(!a)return;J();var b=c("throttle")(J,500);d("DOM").scry(a,"img","notif_thumb").forEach(function(a){var d=c("EventListener").listen(a,"load",function(){d.remove(),b()})})}g.initJewel=a;g.refreshNotificationsConstraints=J;g.refreshNotificationsConstraintsOnImageLoad=b}),98);
__d("MJewelThreads",["Bootloader","ChannelEventType","Stratcom"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){var b=this;this.onJewelOpen=function(a){a=a.getData();a=a&&a.jewel&&a.jewel==="messages";a&&b.$4&&b.updateUI()};this.onThreadClick=function(a){a=a.getNode("live-thread");if(!a)return;b.setThreadReadStatus(a.getAttribute("data-fbid"),a.getAttribute("data-canonical")==="true",!0);b.updateUI()};this.onMessageEvent=function(a){var c=a.getData();if(c.parsedPayload){a=c.parsedPayload;if(a.getFolder()!=="inbox")return;b.$3||(b.$3=!0,b.registerListeners());b.addThread(a)}else if(Object.prototype.hasOwnProperty.call(c,"mark_as_read"))c.other_user_fbids.forEach(function(a){b.setThreadReadStatus(a.toString(),!0,c.mark_as_read)}),c.thread_fbids.forEach(function(a){b.setThreadReadStatus(a.toString(),!1,c.mark_as_read)}),b.updateUI();else if(c.event==="read"&&c.is_sync){a=!!c.message.other_user_fbid;var d=a?c.message.other_user_fbid:c.message.thread_fbid;b.setThreadReadStatus(d,a,!0);b.updateUI()}};this.$1=a;this.$2=[];this.$3=!1;this.$4=!1;c("Stratcom").listen(d("ChannelEventType").MESSAGE,null,this.onMessageEvent.bind(this))}var b=a.prototype;b.getThreads=function(){return this.$2};b.registerListeners=function(){c("Stratcom").listen("click","live-threads",this.onThreadClick.bind(this)),c("Stratcom").listen("m:jewel:flyout:open",null,this.onJewelOpen.bind(this))};b.addThread=function(a){var b=this;this.$2=this.$2.filter(function(c){c=c.isCanonicalThread()?c.getOtherUserFBID():c.getThreadFBID();return!b.isSameThread(c,a.isCanonicalThread(),a)});a.unread=a.isUnread();this.$2.push(a);this.$4=!0;this.updateThreadImage(a)};b.updateThreadImage=function(a){var b=this;c("Bootloader").loadModules(["MMessagesThreadMetadataCache","MShortProfiles"],function(c,d){if(a.hasThreadImage())c.get(a.getThreadFBID(),function(c){a.image_src=c.image_src,b.updateUI()});else{c=a.isCanonicalThread()?a.getOtherUserFBID():a.getAuthorFBID();d.get(c,function(c){a.image_src=c.mThumbSrcSmall,b.updateUI()})}},"MJewelThreads")};b.setThreadReadStatus=function(a,b,c){var d=this;this.$2.forEach(function(e){d.isSameThread(a,b,e)&&(e.unread==c&&(d.$4=!0),e.unread=!c)})};b.isSameThread=function(a,b,c){b=b?c.getOtherUserFBID():c.getThreadFBID();return a==b};b.updateUI=function(){var a=this;if(!this.$3||!this.$4)return;c("Bootloader").loadModules(["React","ReactDOM","MJewelThreadList.react","Popover"],function(b,c,d,e){if(!e.getInstance("messages_flyout").isOpen())return;var f={threads:a.$2};c.render(b.createElement(d,f),a.$1);e.getInstance("messages_flyout").refreshConstraints();a.$4=!1},"MJewelThreads")};return a}();g["default"]=a}),98);