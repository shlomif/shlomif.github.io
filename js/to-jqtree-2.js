"use strict";function shlomif_load_nav(page_path){$.getJSON(get_relative_path({rel_path:page_path,to:"_data/n.json"}),function(got_json_input){const keys_map={b:"bool",c:"capt",e:"expand",h:"host",i:"id",k:"skip",r:"re",s:"subs",t:"title",u:"url",x:"text"};got_json_input=function _expand(val){if(Array.isArray(val))return val.map(_expand);if($.isPlainObject(val)){const ret={};for(var[k,v]of Object.entries(val))ret[keys_map[k]]=_expand(v);return ret}return val}(got_json_input);const nav_menu=$("#nav_menu");let was_storage_already_populated=!1;if("undefined"!=typeof localStorage&&null!==localStorage&&(was_storage_already_populated=!!localStorage.getItem("shlomifish.org_main_nav_menu_data")),nav_menu.tree({autoEscape:!1,autoOpen:!1,saveState:"shlomifish.org_main_nav_menu_data",data:calc_jqtree_data_from_html_w_nav_menu_json({input:got_json_input,rel_path:page_path})}),!was_storage_already_populated)for(const node_id of["2","120","235","13","193","311","127"])nav_menu.tree("openNode",nav_menu.tree("getNodeById",node_id),!1)})}