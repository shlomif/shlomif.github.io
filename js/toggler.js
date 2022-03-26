"use strict";class TogglerWrapper{constructor(toggle_cb,apply_state_cb,calc_in_elem){this.toggle_cb=toggle_cb,this.apply_state_cb=apply_state_cb,this.calc_in_elem=calc_in_elem}}function build_toggler(args){function _is_null(x){return null==x}const has_ls=!_is_null(localStorage);var is_class="class"==("toggled_type"in args?args.toggled_type:"class");const _key_name=args.ls_key,toggler_selector=args.toggler_selector,toggled_selector=args.toggled_selector,toggled_class=args.toggled_class,hide_text=args.hide_text,show_text=args.show_text,default_state=!("default_state"in args)||args.default_state,_calc_elem=()=>$(toggler_selector);function toggle_sect_menu(){const elem=_calc_elem();var was_off=elem.hasClass("off"),is_on_now=!!was_off;elem.html(was_off?hide_text:show_text),$(toggled_selector).toggleClass(toggled_class),elem.toggleClass("off"),elem.toggleClass("on"),has_ls&&(is_on_now===default_state?localStorage.removeItem(_key_name):localStorage.setItem(_key_name,is_on_now?"1":"0"))}const toggled_attr="open";function _calc__is_on_now(elem){return!!elem.attr(toggled_attr)}const elem=_calc_elem(),toggler_wrapper=is_class?new TogglerWrapper(toggle_sect_menu,toggle_sect_menu,function(){return elem.hasClass("on")}):new TogglerWrapper(function(){var is_on_now;has_ls&&((is_on_now=_calc__is_on_now(_calc_elem()))===default_state?localStorage.removeItem(_key_name):localStorage.setItem(_key_name,is_on_now?"1":"0"))},function(){const elem=_calc_elem();_calc__is_on_now(elem)?elem.removeAttr(toggled_attr):elem.attr(toggled_attr,"open")},function(){return _calc__is_on_now(elem)});elem.on(is_class?"click":"toggle",function(event){toggler_wrapper.toggle_cb()}),$(document).ready(function(){var in_storage_s,in_elem;has_ls&&(in_storage_s=_is_null(in_storage_s=localStorage.getItem(_key_name))?default_state:"1"==in_storage_s,in_elem=toggler_wrapper.calc_in_elem(),(in_storage_s&&!in_elem||!in_storage_s&&in_elem)&&toggler_wrapper.apply_state_cb())})}