
shadow.cljs.devtools.client.env.module_loaded('main');

try { roam_automations.core.init(); } catch (e) { console.error("An error occurred when calling (roam-automations.core/init)"); throw(e); }