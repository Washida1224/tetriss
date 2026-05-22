// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12345__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12346__i = 0, G__12346__a = new Array(arguments.length -  0);
while (G__12346__i < G__12346__a.length) {G__12346__a[G__12346__i] = arguments[G__12346__i + 0]; ++G__12346__i;}
  args = new cljs.core.IndexedSeq(G__12346__a,0,null);
} 
return G__12345__delegate.call(this,args);};
G__12345.cljs$lang$maxFixedArity = 0;
G__12345.cljs$lang$applyTo = (function (arglist__12347){
var args = cljs.core.seq(arglist__12347);
return G__12345__delegate(args);
});
G__12345.cljs$core$IFn$_invoke$arity$variadic = G__12345__delegate;
return G__12345;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12348__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12349__i = 0, G__12349__a = new Array(arguments.length -  0);
while (G__12349__i < G__12349__a.length) {G__12349__a[G__12349__i] = arguments[G__12349__i + 0]; ++G__12349__i;}
  args = new cljs.core.IndexedSeq(G__12349__a,0,null);
} 
return G__12348__delegate.call(this,args);};
G__12348.cljs$lang$maxFixedArity = 0;
G__12348.cljs$lang$applyTo = (function (arglist__12350){
var args = cljs.core.seq(arglist__12350);
return G__12348__delegate(args);
});
G__12348.cljs$core$IFn$_invoke$arity$variadic = G__12348__delegate;
return G__12348;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
