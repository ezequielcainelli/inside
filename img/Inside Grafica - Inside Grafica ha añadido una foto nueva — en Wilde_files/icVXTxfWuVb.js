if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("MNTLimitActionHandler",["MNTActions"],(function(a,b,c,d,e,f){function a(a,c){var d=b("MNTActions"),e=d.getObjectOnActionStore(a.actionid);e="remaining"in e?parseInt(e.remaining,10):a.limit;if(e===0)return;d.setObjectOnActionStore(a.actionid,{remaining:e-1});d.performAction(a.action,c)}f.performAction=a}),66);