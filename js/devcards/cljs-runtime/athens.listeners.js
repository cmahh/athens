goog.provide('athens.listeners');
goog.require('cljs.core');
goog.require('athens.keybindings');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.events');
goog.require('re_frame.core');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
athens.listeners.multi_block_selection = (function athens$listeners$multi_block_selection(e){
var selected_items = cljs.core.deref((function (){var G__56161 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56161) : re_frame.core.subscribe.call(null,G__56161));
})());
if(cljs.core.truth_(cljs.core.not_empty(selected_items))){
var shift = e.shiftKey;
var key_code = e.keyCode;
var direction = athens.keybindings.arrow_key_direction(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)){
var G__56162_56187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),cljs.core.first(selected_items)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56162_56187) : re_frame.core.dispatch.call(null,G__56162_56187));

var G__56163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56163) : re_frame.core.dispatch.call(null,G__56163));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE)){
var G__56164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","delete","selected/delete",-812991161),selected_items], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56164) : re_frame.core.dispatch.call(null,G__56164));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113));
} else {
return and__4174__auto__;
}
})())){
var G__56165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","up","selected/up",921350754),selected_items], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56165) : re_frame.core.dispatch.call(null,G__56165));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570));
} else {
return and__4174__auto__;
}
})())){
var G__56166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","down","selected/down",-1806586329),selected_items], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56166) : re_frame.core.dispatch.call(null,G__56166));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113))){
e.preventDefault();

var G__56167_56188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56167_56188) : re_frame.core.dispatch.call(null,G__56167_56188));

var G__56168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.first(selected_items)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56168) : re_frame.core.dispatch.call(null,G__56168));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570))){
e.preventDefault();

var G__56170_56189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56170_56189) : re_frame.core.dispatch.call(null,G__56170_56189));

var G__56171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.last(selected_items)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56171) : re_frame.core.dispatch.call(null,G__56171));
} else {
return null;
}
}
}
}
}
}
} else {
return null;
}
});
athens.listeners.get_dataset_uid = (function athens$listeners$get_dataset_uid(el){
var block = (cljs.core.truth_(el)?el.closest(".block-container"):null);
var uid = (cljs.core.truth_(block)?block.dataset.uid:null);
return uid;
});
/**
 * If going over something, add it.
 *   If leaving it, remove
 */
athens.listeners.multi_block_select_over = (function athens$listeners$multi_block_select_over(e){
var target = e.target;
var related_target = e.relatedTarget;
var target_uid = athens.listeners.get_dataset_uid(target);
var _related_target_uid = athens.listeners.get_dataset_uid(related_target);
var selected_items = cljs.core.deref((function (){var G__56173 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56173) : re_frame.core.subscribe.call(null,G__56173));
})());
var _set_items = cljs.core.set(selected_items);
e.stopPropagation();

target.blur();

var G__56174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),target_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56174) : re_frame.core.dispatch.call(null,G__56174));
});
athens.listeners.multi_block_select_up = (function athens$listeners$multi_block_select_up(_){
goog.events.unlisten(window,goog.events.EventType.MOUSEOVER,athens.listeners.multi_block_select_over);

return goog.events.unlisten(window,goog.events.EventType.MOUSEUP,athens.listeners.multi_block_select_up);
});
athens.listeners.unfocus = (function athens$listeners$unfocus(e){
var selected_items = cljs.core.deref((function (){var G__56175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56175) : re_frame.core.subscribe.call(null,G__56175));
})());
var editing_uid = cljs.core.deref((function (){var G__56176 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56176) : re_frame.core.subscribe.call(null,G__56176));
})());
var closest_block = e.target.closest(".block-content");
var closest_block_header = e.target.closest(".block-header");
var closest_page_header = e.target.closest(".page-header");
var closest = (function (){var or__4185__auto__ = closest_block;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = closest_block_header;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return closest_page_header;
}
}
})();
if(cljs.core.truth_(cljs.core.not_empty(selected_items))){
var G__56177_56190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","clear-items","selected/clear-items",-700315697)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56177_56190) : re_frame.core.dispatch.call(null,G__56177_56190));
} else {
}

if(cljs.core.truth_((((closest == null))?editing_uid:false))){
var G__56178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56178) : re_frame.core.dispatch.call(null,G__56178));
} else {
return null;
}
});
athens.listeners.mouse_down_outside_athena = (function athens$listeners$mouse_down_outside_athena(e){
var athena_QMARK_ = cljs.core.deref((function (){var G__56179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","open","athena/open",1253777725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56179) : re_frame.core.subscribe.call(null,G__56179));
})());
var closest = e.target.closest(".athena");
if(cljs.core.truth_((function (){var and__4174__auto__ = athena_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (closest == null);
} else {
return and__4174__auto__;
}
})())){
var G__56180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56180) : re_frame.core.dispatch.call(null,G__56180));
} else {
return null;
}
});
athens.listeners.key_down = (function athens$listeners$key_down(e){
var key = e.keyCode;
var ctrl = e.ctrlKey;
var meta = e.metaKey;
var shift = e.shiftKey;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.Z))?(function (){var and__4174__auto__ = meta;
if(cljs.core.truth_(and__4174__auto__)){
return shift;
} else {
return and__4174__auto__;
}
})():false))){
var G__56181 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56181) : re_frame.core.dispatch.call(null,G__56181));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.Z))?meta:false))){
var G__56182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56182) : re_frame.core.dispatch.call(null,G__56182));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.K))?meta:false))){
var G__56183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56183) : re_frame.core.dispatch.call(null,G__56183));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.G))?ctrl:false))){
var G__56184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtool","toggle","devtool/toggle",-1442703685)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56184) : re_frame.core.dispatch.call(null,G__56184));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.R))?ctrl:false))){
var G__56185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56185) : re_frame.core.dispatch.call(null,G__56185));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.L))?ctrl:false))){
var G__56186 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("left-sidebar","toggle","left-sidebar/toggle",212949860)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56186) : re_frame.core.dispatch.call(null,G__56186));
} else {
return null;
}
}
}
}
}
}
});
athens.listeners.init = (function athens$listeners$init(){
goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.unfocus);

goog.events.listen(window,goog.events.EventType.MOUSEDOWN,athens.listeners.mouse_down_outside_athena);

goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.multi_block_selection);

return goog.events.listen(window,goog.events.EventType.KEYDOWN,athens.listeners.key_down);
});

//# sourceMappingURL=athens.listeners.js.map