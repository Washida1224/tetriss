// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tetris.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tetris.github');
goog.require('tetris.gamepad');
goog.require('clojure.string');
goog.require('reagent.core');
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.lag_ms !== 'undefined')){
} else {
tetris.core.lag_ms = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
}
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.show_secret_menu_QMARK_ !== 'undefined')){
} else {
tetris.core.show_secret_menu_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
tetris.core.tetrominos = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$I,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#1197dd",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null)], null),cljs.core.cst$kw$O,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#fabc26",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null),cljs.core.cst$kw$T,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#c32ba6",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null)], null),cljs.core.cst$kw$J,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#2063cf",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null),cljs.core.cst$kw$L,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#f47b14",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null),cljs.core.cst$kw$S,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#73c214",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)], null),cljs.core.cst$kw$Z,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$color,"#d5203b",cljs.core.cst$kw$dim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),cljs.core.cst$kw$zero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)], null)], null);
tetris.core.rotate = (function tetris$core$rotate(r){
return cljs.core.mod((r + (1)),(4));
});
tetris.core.get_positions = (function tetris$core$get_positions(player){
var map__9780 = player;
var map__9780__$1 = (((((!((map__9780 == null))))?(((((map__9780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9780):map__9780);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9780__$1,cljs.core.cst$kw$type);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9780__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9780__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9780__$1,cljs.core.cst$kw$r);
var tetromino = (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(tetris.core.tetrominos) : type.call(null,tetris.core.tetrominos));
var map__9781 = tetromino;
var map__9781__$1 = (((((!((map__9781 == null))))?(((((map__9781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9781):map__9781);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9781__$1,cljs.core.cst$kw$color);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__9780,map__9780__$1,type,x,y,r,tetromino,map__9781,map__9781__$1,color){
return (function (p__9784){
var vec__9785 = p__9784;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9785,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9785,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + x),(j + y)], null),color], null);
});})(map__9780,map__9780__$1,type,x,y,r,tetromino,map__9781,map__9781__$1,color))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tetromino,r)));
});
tetris.core.full_rows = (function tetris$core$full_rows(positions){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9788){
var vec__9789 = p__9788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9789,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9789,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,(10));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__9792){
var vec__9793 = p__9792;
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9793,(0),null);
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(pair),(1)])], 0));
}),cljs.core.PersistentArrayMap.EMPTY,positions))));
});
tetris.core.shift_row = (function tetris$core$shift_row(positions,row){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9796){
var vec__9797 = p__9796;
var vec__9800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9797,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9800,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9800,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9797,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(((j < row))?(j + (1)):j)], null),v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__9803){
var vec__9804 = p__9803;
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9804,(0),null);
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(pair),row)));
}),positions)));
});
tetris.core.next_level = (function tetris$core$next_level(level){
return ((5) * ((level * (level + (1))) / (2)));
});
tetris.core.update_score = (function tetris$core$update_score(world){
var map__9807 = world;
var map__9807__$1 = (((((!((map__9807 == null))))?(((((map__9807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9807):map__9807);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9807__$1,cljs.core.cst$kw$positions);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9807__$1,cljs.core.cst$kw$lines);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9807__$1,cljs.core.cst$kw$score);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9807__$1,cljs.core.cst$kw$level);
var rows = tetris.core.full_rows(positions);
var new_positions = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tetris.core.shift_row,positions,rows);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([world,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$positions,new_positions,cljs.core.cst$kw$lines,(lines + cljs.core.count(rows)),cljs.core.cst$kw$level,(((lines >= tetris.core.next_level((level + (1)))))?(level + (1)):level),cljs.core.cst$kw$score,(score + ((level + (1)) * (function (){var G__9809 = cljs.core.count(rows);
switch (G__9809) {
case (0):
return (0);

break;
case (1):
return (100);

break;
case (2):
return (300);

break;
case (3):
return (500);

break;
case (4):
return (800);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9809)].join('')));

}
})()))], null)], 0));
});
tetris.core.collision_QMARK_ = (function tetris$core$collision_QMARK_(world,positions){
return cljs.core.some((function (p1__9811_SHARP_){
return cljs.core.contains_QMARK_(positions,cljs.core.first(p1__9811_SHARP_));
}),cljs.core.cst$kw$positions.cljs$core$IFn$_invoke$arity$1(world));
});
tetris.core.bottom_out_QMARK_ = (function tetris$core$bottom_out_QMARK_(world,positions){
var or__4131__auto__ = tetris.core.collision_QMARK_(world,positions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (!((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,positions))) < cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(world))));
}
});
tetris.core.projection = (function tetris$core$projection(world){
while(true){
var new_player = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(world),cljs.core.cst$kw$y,cljs.core.inc);
var positions = tetris.core.get_positions(new_player);
if(cljs.core.truth_(tetris.core.bottom_out_QMARK_(world,positions))){
return tetris.core.get_positions(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(world));
} else {
var G__9812 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$player,new_player);
world = G__9812;
continue;
}
break;
}
});
tetris.core.out_of_bounds = (function tetris$core$out_of_bounds(world,dim,positions){
var width = ((function (){var fexpr__9814 = (function (){var G__9815 = dim;
var G__9815__$1 = (((G__9815 instanceof cljs.core.Keyword))?G__9815.fqn:null);
switch (G__9815__$1) {
case "x":
return cljs.core.cst$kw$width;

break;
case "y":
return cljs.core.cst$kw$height;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9815__$1)].join('')));

}
})();
return (fexpr__9814.cljs$core$IFn$_invoke$arity$1 ? fexpr__9814.cljs$core$IFn$_invoke$arity$1(world) : fexpr__9814.call(null,world));
})() - (1));
var values = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var G__9816 = dim;
var G__9816__$1 = (((G__9816 instanceof cljs.core.Keyword))?G__9816.fqn:null);
switch (G__9816__$1) {
case "x":
return cljs.core.first;

break;
case "y":
return cljs.core.second;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9816__$1)].join('')));

}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,positions));
var min_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,values);
var max_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,values);
if((min_value < (0))){
return (- min_value);
} else {
if((max_value > width)){
return (width - max_value);
} else {
return (0);

}
}
});
tetris.core.check_pause = (function tetris$core$check_pause(f){
return (function (world,action){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action),cljs.core.cst$kw$player_DASH_toggle_DASH_pause)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$pause_QMARK_,cljs.core.not);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$pause_QMARK_.cljs$core$IFn$_invoke$arity$1(world))){
return world;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(world,action) : f.call(null,world,action));

}
}
});
});
tetris.core.player_shift = (function tetris$core$player_shift(world,action){
var map__9819 = world;
var map__9819__$1 = (((((!((map__9819 == null))))?(((((map__9819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9819):map__9819);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9819__$1,cljs.core.cst$kw$player);
var shift = (function (){var G__9821 = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(action);
var G__9821__$1 = (((G__9821 instanceof cljs.core.Keyword))?G__9821.fqn:null);
switch (G__9821__$1) {
case "right":
return cljs.core.inc;

break;
case "left":
return cljs.core.dec;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9821__$1)].join('')));

}
})();
var new_player = cljs.core.update.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$x,shift);
var positions = tetris.core.get_positions(new_player);
if(((cljs.core.not(tetris.core.collision_QMARK_(world,positions))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tetris.core.out_of_bounds(world,cljs.core.cst$kw$x,positions))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$player,new_player);
} else {
return world;
}
});
tetris.core.game_over_QMARK_ = (function tetris$core$game_over_QMARK_(world){
return tetris.core.collision_QMARK_(world,tetris.core.get_positions(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(world)));
});
tetris.core.next_piece = (function tetris$core$next_piece(var_args){
var G__9824 = arguments.length;
switch (G__9824) {
case 1:
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tetris.core.next_piece.cljs$core$IFn$_invoke$arity$1 = (function (world){
var vec__9825 = cljs.core.cst$kw$next_DASH_type.cljs$core$IFn$_invoke$arity$1(world);
var seq__9826 = cljs.core.seq(vec__9825);
var first__9827 = cljs.core.first(seq__9826);
var seq__9826__$1 = cljs.core.next(seq__9826);
var type = first__9827;
var next_type = seq__9826__$1;
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$3(world,type,next_type);
});

tetris.core.next_piece.cljs$core$IFn$_invoke$arity$2 = (function (world,type){
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$3(world,type,cljs.core.cst$kw$next_DASH_type.cljs$core$IFn$_invoke$arity$1(world));
});

tetris.core.next_piece.cljs$core$IFn$_invoke$arity$3 = (function (world,type,next_type){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([world,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$next_DASH_type,next_type,cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(5),cljs.core.cst$kw$y,(1),cljs.core.cst$kw$type,type,cljs.core.cst$kw$r,cljs.core.first(cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4))))], null)], null)], 0));
});

tetris.core.next_piece.cljs$lang$maxFixedArity = 3;

tetris.core.start = (function tetris$core$start(){
var types = cljs.core.keys(tetris.core.tetrominos);
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$can_DASH_hold_QMARK_,cljs.core.cst$kw$width,cljs.core.cst$kw$lines,cljs.core.cst$kw$hold,cljs.core.cst$kw$level,cljs.core.cst$kw$next_DASH_type,cljs.core.cst$kw$pause_QMARK_,cljs.core.cst$kw$positions,cljs.core.cst$kw$height],[true,(10),(0),null,(0),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(((function (types){
return (function (){
return cljs.core.shuffle(cljs.core.keys(tetris.core.tetrominos));
});})(types))
)),false,cljs.core.PersistentArrayMap.EMPTY,(24)]));
});
tetris.core.check_game_over = (function tetris$core$check_game_over(f){
return (function (world,action){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action),cljs.core.cst$kw$player_DASH_restart)){
return tetris.core.start();
} else {
if(cljs.core.truth_(tetris.core.game_over_QMARK_(world))){
return world;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(world,action) : f.call(null,world,action));

}
}
});
});
tetris.core.soft_drop_score = (function tetris$core$soft_drop_score(world,action){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(action),cljs.core.cst$kw$user)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$score,cljs.core.inc);
} else {
return world;
}
});
tetris.core.player_shift_down = (function tetris$core$player_shift_down(world,action){
var map__9829 = world;
var map__9829__$1 = (((((!((map__9829 == null))))?(((((map__9829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9829):map__9829);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9829__$1,cljs.core.cst$kw$player);
var next_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9829__$1,cljs.core.cst$kw$next_DASH_type);
var new_player = cljs.core.update.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$y,cljs.core.inc);
var positions = tetris.core.get_positions(new_player);
return tetris.core.update_score(tetris.core.soft_drop_score(((cljs.core.not(tetris.core.bottom_out_QMARK_(world,positions)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$player,new_player):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(tetris.core.next_piece.cljs$core$IFn$_invoke$arity$1(world),cljs.core.cst$kw$positions,cljs.core.merge,tetris.core.get_positions(player)),cljs.core.cst$kw$can_DASH_hold_QMARK_,true)),action));
});
tetris.core.force_in_bounds = (function tetris$core$force_in_bounds(world,player){
var positions = tetris.core.get_positions(player);
var bounds = tetris.core.out_of_bounds(world,cljs.core.cst$kw$x,positions);
if(((cljs.core.not(tetris.core.collision_QMARK_(world,positions))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),bounds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tetris.core.out_of_bounds(world,cljs.core.cst$kw$y,positions))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$player,player);
} else {
var new_player = cljs.core.update.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$x,((function (positions,bounds){
return (function (p1__9831_SHARP_){
return (p1__9831_SHARP_ + bounds);
});})(positions,bounds))
);
var positions__$1 = tetris.core.get_positions(new_player);
if(((cljs.core.not(tetris.core.collision_QMARK_(world,positions__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tetris.core.out_of_bounds(world,cljs.core.cst$kw$y,positions__$1))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(world,cljs.core.cst$kw$player,new_player);
} else {
return world;
}
}
});
tetris.core.player_rotate = (function tetris$core$player_rotate(world,action){
var map__9833 = world;
var map__9833__$1 = (((((!((map__9833 == null))))?(((((map__9833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9833):map__9833);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9833__$1,cljs.core.cst$kw$player);
var rotate = (function (){var G__9835 = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(action);
var G__9835__$1 = (((G__9835 instanceof cljs.core.Keyword))?G__9835.fqn:null);
switch (G__9835__$1) {
case "right":
return cljs.core.inc;

break;
case "left":
return cljs.core.dec;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9835__$1)].join('')));

}
})();
return tetris.core.force_in_bounds(world,cljs.core.update.cljs$core$IFn$_invoke$arity$3(player,cljs.core.cst$kw$r,((function (map__9833,map__9833__$1,player,rotate){
return (function (p1__9832_SHARP_){
return cljs.core.mod((rotate.cljs$core$IFn$_invoke$arity$1 ? rotate.cljs$core$IFn$_invoke$arity$1(p1__9832_SHARP_) : rotate.call(null,p1__9832_SHARP_)),(4));
});})(map__9833,map__9833__$1,player,rotate))
));
});
tetris.core.player_drop = (function tetris$core$player_drop(var_args){
var G__9838 = arguments.length;
switch (G__9838) {
case 2:
return tetris.core.player_drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tetris.core.player_drop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tetris.core.player_drop.cljs$core$IFn$_invoke$arity$2 = (function (world,action){
return tetris.core.player_drop.cljs$core$IFn$_invoke$arity$3(world,action,(0));
});

tetris.core.player_drop.cljs$core$IFn$_invoke$arity$3 = (function (world,action,lines){
while(true){
if(cljs.core.truth_(tetris.core.game_over_QMARK_(world))){
return world;
} else {
var w = tetris.core.player_shift_down(world,action);
if((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(w)) < cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(world)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(w,cljs.core.cst$kw$score,cljs.core._PLUS_,((2) * lines));
} else {
var G__9840 = w;
var G__9841 = action;
var G__9842 = (lines + (1));
world = G__9840;
action = G__9841;
lines = G__9842;
continue;
}
}
break;
}
});

tetris.core.player_drop.cljs$lang$maxFixedArity = 3;

tetris.core.player_hold = (function tetris$core$player_hold(world,_){
if(cljs.core.truth_(cljs.core.cst$kw$can_DASH_hold_QMARK_.cljs$core$IFn$_invoke$arity$1(world))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5823__auto__ = cljs.core.cst$kw$hold.cljs$core$IFn$_invoke$arity$1(world);
if(cljs.core.truth_(temp__5823__auto__)){
var hold = temp__5823__auto__;
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$2(world,hold);
} else {
return tetris.core.next_piece.cljs$core$IFn$_invoke$arity$1(world);
}
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$can_DASH_hold_QMARK_,false,cljs.core.cst$kw$hold,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$type], null))], null)], 0));
} else {
return world;
}
});
tetris.core.player_reset = (function tetris$core$player_reset(world,action){
return tetris.core.force_in_bounds(world,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(world),cljs.core.select_keys(action,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x], null))], 0)));
});
tetris.core.action__GT_fn = (function tetris$core$action__GT_fn(action){
var G__9843 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action);
var G__9843__$1 = (((G__9843 instanceof cljs.core.Keyword))?G__9843.fqn:null);
switch (G__9843__$1) {
case "player-shift":
return tetris.core.player_shift;

break;
case "player-shift-down":
return tetris.core.player_shift_down;

break;
case "player-rotate":
return tetris.core.player_rotate;

break;
case "player-drop":
return tetris.core.player_drop;

break;
case "player-hold":
return tetris.core.player_hold;

break;
case "player-reset":
return tetris.core.player_reset;

break;
default:
return null;

}
});
tetris.core.update_player = tetris.core.check_game_over(tetris.core.check_pause((function (world,action){
var temp__5823__auto__ = tetris.core.action__GT_fn(action);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(world,action) : f.call(null,world,action));
} else {
return world;
}
})));
tetris.core.key_map = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"Move Right",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["KeyL",null,"ArrowRight",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L","\u2192"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift,cljs.core.cst$kw$direction,cljs.core.cst$kw$right], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"Move Left",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowLeft",null,"KeyH",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["H","\u2190"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift,cljs.core.cst$kw$direction,cljs.core.cst$kw$left], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"Soft Drop",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowDown",null,"KeyJ",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["J","\u2193"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift_DASH_down,cljs.core.cst$kw$source,cljs.core.cst$kw$user], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"Rotate Right",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"KeyK",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K","\u2191"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_rotate,cljs.core.cst$kw$direction,cljs.core.cst$kw$right], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"Rotate Left",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["KeyZ",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_rotate,cljs.core.cst$kw$direction,cljs.core.cst$kw$left], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"HOLD",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["KeyC",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_hold], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"HARD DROP",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Space",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SPACE"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_drop], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$doc,"Pause",cljs.core.cst$kw$codes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Escape",null], null), null),cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Esc"], null),cljs.core.cst$kw$dispatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_toggle_DASH_pause], null)], null)], null);
tetris.core.key_map__GT_dispatch_table = (function tetris$core$key_map__GT_dispatch_table(key_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (table,p__9846){
var map__9847 = p__9846;
var map__9847__$1 = (((((!((map__9847 == null))))?(((((map__9847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9847):map__9847);
var codes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9847__$1,cljs.core.cst$kw$codes);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9847__$1,cljs.core.cst$kw$dispatch);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(table,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__9847,map__9847__$1,codes,dispatch){
return (function (p1__9845_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9845_SHARP_,dispatch], null);
});})(map__9847,map__9847__$1,codes,dispatch))
,codes));
}),cljs.core.PersistentArrayMap.EMPTY,key_map);
});
tetris.core.keydown__GT_action = tetris.core.key_map__GT_dispatch_table(tetris.core.key_map);
tetris.core.css = (function tetris$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9851 = arguments.length;
var i__4731__auto___9852 = (0);
while(true){
if((i__4731__auto___9852 < len__4730__auto___9851)){
args__4736__auto__.push((arguments[i__4731__auto___9852]));

var G__9853 = (i__4731__auto___9852 + (1));
i__4731__auto___9852 = G__9853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tetris.core.css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tetris.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (style,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null)], null),children);
});

tetris.core.css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tetris.core.css.cljs$lang$applyTo = (function (seq9849){
var G__9850 = cljs.core.first(seq9849);
var seq9849__$1 = cljs.core.next(seq9849);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9850,seq9849__$1);
});

tetris.core.block = (function tetris$core$block(style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$border_DASH_box,cljs.core.cst$kw$padding,"25%"], null),style], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$border_DASH_radius,(1),cljs.core.cst$kw$mix_DASH_blend_DASH_mode,cljs.core.cst$kw$darken,cljs.core.cst$kw$background,"rgba(0,0,0,0.15)"], null)], null)], null);
});
tetris.core.help = (function tetris$core$help(props){
var map__9855 = props;
var map__9855__$1 = (((((!((map__9855 == null))))?(((((map__9855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9855):map__9855);
var key_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9855__$1,cljs.core.cst$kw$key_DASH_map);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"1.1rem",cljs.core.cst$kw$margin,"0 auto",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$left], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__9855,map__9855__$1,key_map){
return (function (p1__9854_SHARP_){
var map__9857 = p1__9854_SHARP_;
var map__9857__$1 = (((((!((map__9857 == null))))?(((((map__9857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9857):map__9857);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9857__$1,cljs.core.cst$kw$doc);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9857__$1,cljs.core.cst$kw$keys);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",keys)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(20)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,doc], null)], null);
});})(map__9855,map__9855__$1,key_map))
,key_map))], null);
});
tetris.core.board = (function tetris$core$board(props){
var map__9859 = props;
var map__9859__$1 = (((((!((map__9859 == null))))?(((((map__9859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9859):map__9859);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$scale);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$height);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$positions);
var projection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$projection);
var border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$border_QMARK_);
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9859__$1,cljs.core.cst$kw$on_DASH_update);
var size = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),"vh"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cell_DASH_spacing,"0",cljs.core.cst$kw$cell_DASH_padding,"0",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$inline_DASH_block,cljs.core.cst$kw$border_DASH_collapse,cljs.core.cst$kw$collapse], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4523__auto__ = ((function (map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function tetris$core$board_$_iter__9861(s__9862){
return (new cljs.core.LazySeq(null,((function (map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
var s__9862__$1 = s__9862;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__9862__$1);
if(temp__5825__auto__){
var s__9862__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9862__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9862__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9864 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9863 = (0);
while(true){
if((i__9863 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9863);
cljs.core.chunk_append(b__9864,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),(function (){var iter__4523__auto__ = ((function (i__9863,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function tetris$core$board_$_iter__9861_$_iter__9865(s__9866){
return (new cljs.core.LazySeq(null,((function (i__9863,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
var s__9866__$1 = s__9866;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__9866__$1);
if(temp__5825__auto____$1){
var s__9866__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9866__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__9866__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__9868 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__9867 = (0);
while(true){
if((i__9867 < size__4522__auto____$1)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__9867);
cljs.core.chunk_append(b__9868,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,j,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,size,cljs.core.cst$kw$height,size,cljs.core.cst$kw$border,(cljs.core.truth_((function (){var or__4131__auto__ = border_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
}
})())?"1px solid #202020":null),cljs.core.cst$kw$background,(cljs.core.truth_(border_QMARK_)?((cljs.core.even_QMARK_((i + j)))?"#2e2e2e":"#2b2b2b"):null)], null),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (i__9867,i__9863,j,c__4521__auto____$1,size__4522__auto____$1,b__9868,s__9866__$2,temp__5825__auto____$1,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
if(cljs.core.fn_QMARK_(on_update)){
var G__9869 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_reset,cljs.core.cst$kw$x,j], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9869) : on_update.call(null,G__9869));
} else {
return null;
}
});})(i__9867,i__9863,j,c__4521__auto____$1,size__4522__auto____$1,b__9868,s__9866__$2,temp__5825__auto____$1,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
], null),(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5823__auto__)){
var color = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,color], null)], null);
} else {
var temp__5825__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(projection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5825__auto____$2)){
var color = temp__5825__auto____$2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,color,cljs.core.cst$kw$opacity,0.25], null)], null);
} else {
return null;
}
}
})()], null));

var G__9877 = (i__9867 + (1));
i__9867 = G__9877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9868),tetris$core$board_$_iter__9861_$_iter__9865(cljs.core.chunk_rest(s__9866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9868),null);
}
} else {
var j = cljs.core.first(s__9866__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,j,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,size,cljs.core.cst$kw$height,size,cljs.core.cst$kw$border,(cljs.core.truth_((function (){var or__4131__auto__ = border_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
}
})())?"1px solid #202020":null),cljs.core.cst$kw$background,(cljs.core.truth_(border_QMARK_)?((cljs.core.even_QMARK_((i + j)))?"#2e2e2e":"#2b2b2b"):null)], null),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (i__9863,j,s__9866__$2,temp__5825__auto____$1,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
if(cljs.core.fn_QMARK_(on_update)){
var G__9870 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_reset,cljs.core.cst$kw$x,j], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9870) : on_update.call(null,G__9870));
} else {
return null;
}
});})(i__9863,j,s__9866__$2,temp__5825__auto____$1,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
], null),(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5823__auto__)){
var color = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,color], null)], null);
} else {
var temp__5825__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(projection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5825__auto____$2)){
var color = temp__5825__auto____$2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,color,cljs.core.cst$kw$opacity,0.25], null)], null);
} else {
return null;
}
}
})()], null),tetris$core$board_$_iter__9861_$_iter__9865(cljs.core.rest(s__9866__$2)));
}
} else {
return null;
}
break;
}
});})(i__9863,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
,null,null));
});})(i__9863,i,c__4521__auto__,size__4522__auto__,b__9864,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})()], null));

var G__9878 = (i__9863 + (1));
i__9863 = G__9878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9864),tetris$core$board_$_iter__9861(cljs.core.chunk_rest(s__9862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9864),null);
}
} else {
var i = cljs.core.first(s__9862__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null),(function (){var iter__4523__auto__ = ((function (i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function tetris$core$board_$_iter__9861_$_iter__9871(s__9872){
return (new cljs.core.LazySeq(null,((function (i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
var s__9872__$1 = s__9872;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__9872__$1);
if(temp__5825__auto____$1){
var s__9872__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9872__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9872__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9874 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9873 = (0);
while(true){
if((i__9873 < size__4522__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9873);
cljs.core.chunk_append(b__9874,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,j,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,size,cljs.core.cst$kw$height,size,cljs.core.cst$kw$border,(cljs.core.truth_((function (){var or__4131__auto__ = border_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
}
})())?"1px solid #202020":null),cljs.core.cst$kw$background,(cljs.core.truth_(border_QMARK_)?((cljs.core.even_QMARK_((i + j)))?"#2e2e2e":"#2b2b2b"):null)], null),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (i__9873,j,c__4521__auto__,size__4522__auto__,b__9874,s__9872__$2,temp__5825__auto____$1,i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
if(cljs.core.fn_QMARK_(on_update)){
var G__9875 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_reset,cljs.core.cst$kw$x,j], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9875) : on_update.call(null,G__9875));
} else {
return null;
}
});})(i__9873,j,c__4521__auto__,size__4522__auto__,b__9874,s__9872__$2,temp__5825__auto____$1,i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
], null),(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5823__auto__)){
var color = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,color], null)], null);
} else {
var temp__5825__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(projection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5825__auto____$2)){
var color = temp__5825__auto____$2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,color,cljs.core.cst$kw$opacity,0.25], null)], null);
} else {
return null;
}
}
})()], null));

var G__9879 = (i__9873 + (1));
i__9873 = G__9879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9874),tetris$core$board_$_iter__9861_$_iter__9871(cljs.core.chunk_rest(s__9872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9874),null);
}
} else {
var j = cljs.core.first(s__9872__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,j,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,size,cljs.core.cst$kw$height,size,cljs.core.cst$kw$border,(cljs.core.truth_((function (){var or__4131__auto__ = border_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
}
})())?"1px solid #202020":null),cljs.core.cst$kw$background,(cljs.core.truth_(border_QMARK_)?((cljs.core.even_QMARK_((i + j)))?"#2e2e2e":"#2b2b2b"):null)], null),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,((function (j,s__9872__$2,temp__5825__auto____$1,i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size){
return (function (){
if(cljs.core.fn_QMARK_(on_update)){
var G__9876 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_reset,cljs.core.cst$kw$x,j], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9876) : on_update.call(null,G__9876));
} else {
return null;
}
});})(j,s__9872__$2,temp__5825__auto____$1,i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
], null),(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5823__auto__)){
var color = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,color], null)], null);
} else {
var temp__5825__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(projection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(temp__5825__auto____$2)){
var color = temp__5825__auto____$2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.block,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,color,cljs.core.cst$kw$opacity,0.25], null)], null);
} else {
return null;
}
}
})()], null),tetris$core$board_$_iter__9861_$_iter__9871(cljs.core.rest(s__9872__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
,null,null));
});})(i,s__9862__$2,temp__5825__auto__,map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})()], null),tetris$core$board_$_iter__9861(cljs.core.rest(s__9862__$2)));
}
} else {
return null;
}
break;
}
});})(map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
,null,null));
});})(map__9859,map__9859__$1,scale,width,height,positions,projection,border_QMARK_,on_update,size))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height));
})()], null)], null);
});
tetris.core.panel = (function tetris$core$panel(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9881 = arguments.length;
var i__4731__auto___9882 = (0);
while(true){
if((i__4731__auto___9882 < len__4730__auto___9881)){
args__4736__auto__.push((arguments[i__4731__auto___9882]));

var G__9883 = (i__4731__auto___9882 + (1));
i__4731__auto___9882 = G__9883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tetris.core.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tetris.core.panel.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border,"2px solid rgba(255,255,255, 0.1)",cljs.core.cst$kw$padding,(10),cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$border_DASH_box], null)], null),children);
});

tetris.core.panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tetris.core.panel.cljs$lang$applyTo = (function (seq9880){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9880));
});

tetris.core.info = (function tetris$core$info(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9886 = arguments.length;
var i__4731__auto___9887 = (0);
while(true){
if((i__4731__auto___9887 < len__4730__auto___9886)){
args__4736__auto__.push((arguments[i__4731__auto___9887]));

var G__9888 = (i__4731__auto___9887 + (1));
i__4731__auto___9887 = G__9888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tetris.core.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tetris.core.info.cljs$core$IFn$_invoke$arity$variadic = (function (label,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$border,"3px solid #2e2e2e",cljs.core.cst$kw$background,"#2b2b2b",cljs.core.cst$kw$color,cljs.core.cst$kw$white,cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$border_DASH_box,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$width,(120),cljs.core.cst$kw$padding,(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold,cljs.core.cst$kw$margin_DASH_bottom,(5),cljs.core.cst$kw$text_DASH_transform,cljs.core.cst$kw$uppercase], null),label], null)], null),children);
});

tetris.core.info.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tetris.core.info.cljs$lang$applyTo = (function (seq9884){
var G__9885 = cljs.core.first(seq9884);
var seq9884__$1 = cljs.core.next(seq9884);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9885,seq9884__$1);
});

tetris.core.button = (function tetris$core$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9891 = arguments.length;
var i__4731__auto___9892 = (0);
while(true){
if((i__4731__auto___9892 < len__4730__auto___9891)){
args__4736__auto__.push((arguments[i__4731__auto___9892]));

var G__9893 = (i__4731__auto___9892 + (1));
i__4731__auto___9892 = G__9893;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tetris.core.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tetris.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_DASH_height,"1.1rem"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$outline,cljs.core.cst$kw$none,cljs.core.cst$kw$min_DASH_width,(200),cljs.core.cst$kw$border,cljs.core.cst$kw$none,cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$padding,(10),cljs.core.cst$kw$font_DASH_size,"1.1rem",cljs.core.cst$kw$background,cljs.core.cst$kw$white], null)], null),props], 0))], null),children)], null);
});

tetris.core.button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tetris.core.button.cljs$lang$applyTo = (function (seq9889){
var G__9890 = cljs.core.first(seq9889);
var seq9889__$1 = cljs.core.next(seq9889);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9890,seq9889__$1);
});

tetris.core.overlay = (function tetris$core$overlay(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9895 = arguments.length;
var i__4731__auto___9896 = (0);
while(true){
if((i__4731__auto___9896 < len__4730__auto___9895)){
args__4736__auto__.push((arguments[i__4731__auto___9896]));

var G__9897 = (i__4731__auto___9896 + (1));
i__4731__auto___9896 = G__9897;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tetris.core.overlay.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tetris.core.overlay.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$color,cljs.core.cst$kw$bottom,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$background,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$right,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$left],[cljs.core.cst$kw$center,cljs.core.cst$kw$white,(0),"3em",(0),cljs.core.cst$kw$bold,"rgba(0,0,0,0.5)","1",cljs.core.cst$kw$center,(0),cljs.core.cst$kw$flex,cljs.core.cst$kw$absolute,cljs.core.cst$kw$column,(0)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$position,cljs.core.cst$kw$relative,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$padding,(60),cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$border_DASH_box,cljs.core.cst$kw$background,"rgba(0,0,0,0.75)",cljs.core.cst$kw$border_DASH_top,"3px solid #2e2e2e",cljs.core.cst$kw$border_DASH_bottom,"3px solid #2e2e2e"], null)], null),children)], null);
});

tetris.core.overlay.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tetris.core.overlay.cljs$lang$applyTo = (function (seq9894){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9894));
});

tetris.core.preview = (function tetris$core$preview(t){
var vec__9898 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrominos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.cst$kw$dim], null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9898,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9898,(1),null);
var vec__9901 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tetris.core.tetrominos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,cljs.core.cst$kw$zero], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9901,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9901,(1),null);
var positions = tetris.core.get_positions(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,t,cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,(0)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.board,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$scale,1.8,cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$positions,positions], null)], null);
});
tetris.core.hold_info = (function tetris$core$hold_info(world,on_hold){
var map__9904 = world;
var map__9904__$1 = (((((!((map__9904 == null))))?(((((map__9904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9904):map__9904);
var hold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9904__$1,cljs.core.cst$kw$hold);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,on_hold,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.info,"Hold",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(10)], null)], null),(((hold == null))?null:tetris.core.preview(hold))], null)], null)], null);
});
tetris.core.score_info = (function tetris$core$score_info(world){
var map__9906 = world;
var map__9906__$1 = (((((!((map__9906 == null))))?(((((map__9906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9906):map__9906);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,cljs.core.cst$kw$score);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,cljs.core.cst$kw$level);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,cljs.core.cst$kw$lines);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.info,"score",(function (){var or__4131__auto__ = score;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.info,"level",(level + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,(10)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.info,"lines",lines], null)], null);
});
tetris.core.next_info = (function tetris$core$next_info(world){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.panel,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.info,"Next",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(10)], null)], null)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(10)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9908_SHARP_){
return tetris.core.preview(p1__9908_SHARP_);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.cst$kw$next_DASH_type.cljs$core$IFn$_invoke$arity$1(world)))))], null);
});
tetris.core.gutter = cljs.core.constantly(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"1vw"], null)], null));
tetris.core.with_timer = (function tetris$core$with_timer(interval,f){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$component_DASH_will_DASH_mount,((function (state){
return (function (){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.setInterval(f,interval),interval], null));
});})(state))
,cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,((function (state){
return (function (_,args){
var vec__9909 = cljs.core.deref(state);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9909,(0),null);
var interval__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9909,(1),null);
var vec__9912 = args;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9912,(0),null);
var new_interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9912,(1),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9912,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interval__$1,new_interval)){
return null;
} else {
window.clearInterval(handle);

return cljs.core.reset_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.setInterval(f__$1,new_interval),new_interval], null));
}
});})(state))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (state){
return (function (){
var vec__9915 = cljs.core.deref(state);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9915,(0),null);
return window.clearInterval(handle);
});})(state))
,cljs.core.cst$kw$display_DASH_name,"timer",cljs.core.cst$kw$reagent_DASH_render,cljs.core.constantly(null)], null));
});
tetris.core.with_listener = (function tetris$core$with_listener(k,h){
var handler = (function (p1__9918_SHARP_){
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(p1__9918_SHARP_) : h.call(null,p1__9918_SHARP_));
});
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_will_DASH_mount,((function (handler){
return (function (){
return document.addEventListener(cljs.core.name(k),handler);
});})(handler))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (handler){
return (function (){
return document.removeEventListener(cljs.core.name(k),handler);
});})(handler))
,cljs.core.cst$kw$display_DASH_name,"with-listener",cljs.core.cst$kw$reagent_DASH_render,cljs.core.constantly(null)], null));
});
tetris.core.frames = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9919_SHARP_){
return ((1000) * (p1__9919_SHARP_ / 60.0988));
}),new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(43),(38),(33),(28),(23),(18),(13),(8),(6),(5),(5),(5),(4),(4),(4),(3),(3),(3),(2),(2),(2),(2),(2),(2),(2),(2),(2),(2),(1)], null));
tetris.core.controller_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
tetris.core.game = (function tetris$core$game(props){
var map__9922 = props;
var map__9922__$1 = (((((!((map__9922 == null))))?(((((map__9922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9922):map__9922);
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922__$1,cljs.core.cst$kw$world);
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922__$1,cljs.core.cst$kw$on_DASH_update);
var map__9923 = world;
var map__9923__$1 = (((((!((map__9923 == null))))?(((((map__9923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9923):map__9923);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$height);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$player);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9923__$1,cljs.core.cst$kw$positions);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.with_listener,cljs.core.cst$kw$keydown,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (p1__9920_SHARP_){
var temp__5825__auto__ = (function (){var G__9926 = p1__9920_SHARP_.code;
return (tetris.core.keydown__GT_action.cljs$core$IFn$_invoke$arity$1 ? tetris.core.keydown__GT_action.cljs$core$IFn$_invoke$arity$1(G__9926) : tetris.core.keydown__GT_action.call(null,G__9926));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var action = temp__5825__auto__;
if(clojure.string.starts_with_QMARK_(p1__9920_SHARP_.code,"Arrow")){
return setTimeout(((function (action,temp__5825__auto__,map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(action) : on_update.call(null,action));
});})(action,temp__5825__auto__,map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
,cljs.core.deref(tetris.core.lag_ms));
} else {
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(action) : on_update.call(null,action));
}
} else {
return null;
}
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.with_timer,(16),((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var temp__5825__auto__ = tetris.gamepad.get_gamepad();
if(cljs.core.truth_(temp__5825__auto__)){
var gamepad = temp__5825__auto__;
var vec__9927 = tetris.gamepad.controller__GT_action(cljs.core.deref(tetris.core.controller_state),gamepad);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9927,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9927,(1),null);
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(on_update,actions));

return cljs.core.reset_BANG_(tetris.core.controller_state,state);
} else {
return null;
}
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.with_timer,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tetris.core.frames,cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(world)),((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var G__9930 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift_DASH_down], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9930) : on_update.call(null,G__9930));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),(cljs.core.truth_(cljs.core.cst$kw$pause_QMARK_.cljs$core$IFn$_invoke$arity$1(world))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.overlay,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"PAUSED"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var G__9931 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_toggle_DASH_pause], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9931) : on_update.call(null,G__9931));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),"RESUME"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var G__9932 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_restart], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9932) : on_update.call(null,G__9932));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),"RESTART"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.help,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_map,tetris.core.key_map], null)], null)], null):null),(cljs.core.truth_(tetris.core.game_over_QMARK_(world))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.overlay,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"GAME OVER"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var G__9933 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_restart], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9933) : on_update.call(null,G__9933));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),"RESTART"], null)], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$filter,(cljs.core.truth_(cljs.core.cst$kw$pause_QMARK_.cljs$core$IFn$_invoke$arity$1(world))?"blur(50px)":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.hold_info,world,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var G__9934 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_hold], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9934) : on_update.call(null,G__9934));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.score_info,world], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.gutter], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (){
var G__9935 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_drop], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9935) : on_update.call(null,G__9935));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
,cljs.core.cst$kw$on_DASH_context_DASH_menu,((function (map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions){
return (function (p1__9921_SHARP_){
p1__9921_SHARP_.preventDefault();

var G__9936 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_hold], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9936) : on_update.call(null,G__9936));
});})(map__9922,map__9922__$1,world,on_update,map__9923,map__9923__$1,width,height,player,positions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.board,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$border_QMARK_,true,cljs.core.cst$kw$scale,((90) / height),cljs.core.cst$kw$projection,tetris.core.projection(world),cljs.core.cst$kw$positions,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([positions,tetris.core.get_positions(player)], 0)),cljs.core.cst$kw$on_DASH_update,on_update], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.gutter], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$space_DASH_between,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.next_info,world], null)], null)], null)], null);
});
tetris.core.start_screen = (function tetris$core$start_screen(on_update){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.overlay,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_double_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.show_secret_menu_QMARK_,cljs.core.not);
})], null),"WELCOME"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__9937 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_restart], null);
return (on_update.cljs$core$IFn$_invoke$arity$1 ? on_update.cljs$core$IFn$_invoke$arity$1(G__9937) : on_update.call(null,G__9937));
})], null),"START"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(20)], null)], null),(cljs.core.truth_(cljs.core.deref(tetris.core.show_secret_menu_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,cljs.core.cst$kw$white,cljs.core.cst$kw$font_DASH_size,"1.2rem",cljs.core.cst$kw$margin,"10px 0"], null)], null),"\u64CD\u4F5C\u30E9\u30B0\u8A2D\u5B9A",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$center,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$margin_DASH_top,(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tetris.core.lag_ms,(function (x){
var x__4219__auto__ = (0);
var y__4220__auto__ = (x - (50));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,"1.1rem",cljs.core.cst$kw$padding,"5px 15px",cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$background,cljs.core.cst$kw$white,cljs.core.cst$kw$border,cljs.core.cst$kw$none], null)], null),"\u30FC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin,"0 20px",cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$bold,cljs.core.cst$kw$min_DASH_width,(80)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tetris.core.lag_ms))," ms"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.core.lag_ms,cljs.core._PLUS_,(50));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_size,"1.1rem",cljs.core.cst$kw$padding,"5px 15px",cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$background,cljs.core.cst$kw$white,cljs.core.cst$kw$border,cljs.core.cst$kw$none], null)], null),"\uFF0B"], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.help,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key_DASH_map,tetris.core.key_map], null)], null)], null);
});
if((typeof tetris !== 'undefined') && (typeof tetris.core !== 'undefined') && (typeof tetris.core.world !== 'undefined')){
} else {
tetris.core.world = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
tetris.core.app = (function tetris$core$app(){
var on_update = (function (p1__9938_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tetris.core.world,tetris.core.update_player,p1__9938_SHARP_);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.css,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,cljs.core.cst$kw$relative,cljs.core.cst$kw$user_DASH_select,cljs.core.cst$kw$none,cljs.core.cst$kw$background,"#202020",cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$center,cljs.core.cst$kw$height,"100vh"], null),(function (){var temp__5823__auto__ = cljs.core.deref(tetris.core.world);
if(cljs.core.truth_(temp__5823__auto__)){
var world = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.game,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$world,world,cljs.core.cst$kw$on_DASH_update,on_update], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.start_screen,on_update], null);
}
})()], null);
});
tetris.core.render = (function tetris$core$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.github.view_source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#202020",cljs.core.cst$kw$background,cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(cljs.core.vals(tetris.core.tetrominos)))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tetris.core.app], null)], null),document.getElementById("app"));
});
tetris.core.main = (function tetris$core$main(){
return tetris.core.render();
});
goog.exportSymbol('tetris.core.main', tetris.core.main);
