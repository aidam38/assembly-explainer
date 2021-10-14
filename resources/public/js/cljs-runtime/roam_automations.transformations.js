goog.provide('roam_automations.transformations');
roam_automations.transformations.create_config = (function roam_automations$transformations$create_config(type,text,condition,default_value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"default-value","default-value",232220170),default_value], null);
});
roam_automations.transformations.create_transformation = (function roam_automations$transformations$create_transformation(names,help,config,more,in$,out,fnc){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"names","names",-1943074658),names,new cljs.core.Keyword(null,"help","help",-439233446),help,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45687_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(roam_automations.transformations.create_config,p1__45687_SHARP_);
}),config),new cljs.core.Keyword(null,"more","more",-2058821800),more,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"out","out",-910545517),out,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnc], null);
});
roam_automations.transformations.default_transformations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45688_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(roam_automations.transformations.create_transformation,p1__45688_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Convert Roam blocks to markdown","Transform Roam blocks to markdown"], null),"halp",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),"Bullet point mark",(function (){
return cljs.core.List.EMPTY;
}),"-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),"Block delimiter",(function (){
return cljs.core.List.EMPTY;
}),"\n\n"], null)], null),(-1),new cljs.core.Keyword(null,"roam-blocks","roam-blocks",-920659482),new cljs.core.Keyword(null,"markdown","markdown",1227225089),(function (in$,_){
return in$;
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Change inline $$$$ to $$"], null),"halp2?",cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"markdown","markdown",1227225089),(function (in$,_){
return clojure.string.replace(in$,"$$","$");
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Append string"], null),"halp3?",cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"markdown","markdown",1227225089),(function (in$,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$),"ahoj"].join('');
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remove indentation"], null),"halp4?",cljs.core.PersistentVector.EMPTY,(0),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"markdown","markdown",1227225089),(function (in$,_){
return clojure.string.replace(in$,/^\s+/m,"");
})], null)], null));

//# sourceMappingURL=roam_automations.transformations.js.map
