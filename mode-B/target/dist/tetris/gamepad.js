// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tetris.gamepad');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
tetris.gamepad.xbox_buttons = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_DASH_a,cljs.core.cst$kw$button_DASH_b,cljs.core.cst$kw$button_DASH_x,cljs.core.cst$kw$button_DASH_y,cljs.core.cst$kw$bumper_DASH_left,cljs.core.cst$kw$bumper_DASH_right,cljs.core.cst$kw$trigger_DASH_left,cljs.core.cst$kw$trigger_DASH_right,cljs.core.cst$kw$select,cljs.core.cst$kw$start,cljs.core.cst$kw$stick_DASH_left,cljs.core.cst$kw$stick_DASH_right,cljs.core.cst$kw$dpad_DASH_up,cljs.core.cst$kw$dpad_DASH_down,cljs.core.cst$kw$dpad_DASH_left,cljs.core.cst$kw$dpad_DASH_right], null);
tetris.gamepad.xbox_buttons__GT_action = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$dpad_DASH_up,cljs.core.cst$kw$bumper_DASH_right,cljs.core.cst$kw$stick_DASH_right,cljs.core.cst$kw$start,cljs.core.cst$kw$dpad_DASH_down,cljs.core.cst$kw$dpad_DASH_left,cljs.core.cst$kw$dpad_DASH_right,cljs.core.cst$kw$trigger_DASH_left,cljs.core.cst$kw$bumper_DASH_left,cljs.core.cst$kw$button_DASH_a,cljs.core.cst$kw$button_DASH_b],[new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_rotate,cljs.core.cst$kw$direction,cljs.core.cst$kw$right], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_rotate,cljs.core.cst$kw$direction,cljs.core.cst$kw$right], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_drop], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_toggle_DASH_pause], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift_DASH_down,cljs.core.cst$kw$source,cljs.core.cst$kw$user], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift,cljs.core.cst$kw$direction,cljs.core.cst$kw$left], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift,cljs.core.cst$kw$direction,cljs.core.cst$kw$right], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_hold], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_rotate,cljs.core.cst$kw$direction,cljs.core.cst$kw$left], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_drop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$player_DASH_shift_DASH_down,cljs.core.cst$kw$source,cljs.core.cst$kw$user], null)]);
tetris.gamepad.apply_deadzone = (function tetris$gamepad$apply_deadzone(value){
if((Math.abs(value) < 0.75)){
return (0);
} else {
return value;
}
});
tetris.gamepad.xbox_sticks__GT_action = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left_DASH_stick_DASH_horizonal,(function (p1__12893_SHARP_){
if((p1__12893_SHARP_ < (0))){
return cljs.core.cst$kw$dpad_DASH_left;
} else {
if((p1__12893_SHARP_ > (0))){
return cljs.core.cst$kw$dpad_DASH_right;
} else {
return null;
}
}
}),cljs.core.cst$kw$left_DASH_stick_DASH_vertical,(function (p1__12894_SHARP_){
if((p1__12894_SHARP_ < (0))){
return cljs.core.cst$kw$dpad_DASH_up;
} else {
if((p1__12894_SHARP_ > (0))){
return cljs.core.cst$kw$dpad_DASH_down;
} else {
return null;
}
}
}),cljs.core.cst$kw$right_DASH_stick_DASH_horizonal,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$right_DASH_stick_DASH_vertical,(function (){
return cljs.core.List.EMPTY;
})], null);
tetris.gamepad.axes__GT_buttons = (function tetris$gamepad$axes__GT_buttons(controller){
var axes = controller.axes;
return cljs.core.reduce_kv(((function (axes){
return (function (actions,index,k){
var value = tetris.gamepad.apply_deadzone((axes[index]));
var f = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(tetris.gamepad.xbox_sticks__GT_action) : k.call(null,tetris.gamepad.xbox_sticks__GT_action));
var action = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));
if(cljs.core.not(action)){
return actions;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(actions,action);
}
});})(axes))
,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left_DASH_stick_DASH_horizonal,cljs.core.cst$kw$left_DASH_stick_DASH_vertical,cljs.core.cst$kw$right_DASH_stick_DASH_horizonal,cljs.core.cst$kw$right_DASH_stick_DASH_vertical], null));
});
tetris.gamepad.conntroller__GT_buttons = (function tetris$gamepad$conntroller__GT_buttons(controller){
var buttons = controller.buttons;
return cljs.core.reduce_kv(((function (buttons){
return (function (actions,index,button){
if(cljs.core.not((buttons[index]).pressed)){
return actions;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(actions,button);
}
});})(buttons))
,cljs.core.PersistentHashSet.EMPTY,tetris.gamepad.xbox_buttons);
});
tetris.gamepad.controller__GT_action = (function tetris$gamepad$controller__GT_action(state,gamepad){
var buttons = clojure.set.union.cljs$core$IFn$_invoke$arity$2(tetris.gamepad.axes__GT_buttons(gamepad),tetris.gamepad.conntroller__GT_buttons(gamepad));
var done_pressing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(state)),buttons);
var state__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,state,done_pressing);
var holding = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (buttons,done_pressing,state__$1){
return (function (p__12895){
var vec__12896 = p__12895;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12896,(1),null);
if((c > (17))){
return k;
} else {
return null;
}
});})(buttons,done_pressing,state__$1))
,state__$1);
var state__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state__$1,cljs.core.zipmap(holding,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((13)))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state__$2,cljs.core.zipmap(buttons,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((1)))], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tetris.gamepad.xbox_buttons__GT_action,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(done_pressing,holding))], null);
});
tetris.gamepad.get_gamepad = (function tetris$gamepad$get_gamepad(){
return (navigator.getGamepads()[(0)]);
});
