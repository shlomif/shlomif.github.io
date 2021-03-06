"use strict";

function build_toggler(args) {
    const has_ls = (typeof localStorage !== "undefined" && localStorage !== null);
    const toggle_sect_key = args['ls_key'];
    const toggler_selector = args['toggler_selector'];
    const toggled_selector = args['toggled_selector'];
    const toggled_class = args['toggled_class'];
    const hide_text = args['hide_text'];
    const show_text = args['show_text'];
    const default_state = (('default_state' in args) ? args['default_state'] : true);

    function toggle_sect_menu() {
        const elem = $(toggler_selector);

        const was_off = elem.hasClass("off");
        const was_on = !was_off;
        const is_on_now = !was_on;

        elem.html(was_off ? hide_text : show_text);
        $(toggled_selector).toggleClass(toggled_class);
        elem.toggleClass("off");
        elem.toggleClass("on");
        if (has_ls) {
            if (is_on_now === default_state) {
                localStorage.removeItem(toggle_sect_key);
            } else {
                localStorage.setItem(toggle_sect_key, (is_on_now ? "1" : "0"));
            }
        }
    }

    const elem = $(toggler_selector);

    elem.on("click", function (event) { toggle_sect_menu(); });

    $(document).ready(function() {

        if (! has_ls) {
            return;
        }
        let in_storage = localStorage.getItem(toggle_sect_key);

        if (in_storage === undefined) {
            in_storage = default_state;
        } else {
            in_storage = (in_storage === "1" ? true : false);
        }

        const in_elem = elem.hasClass("on");

        if ((in_storage && (!in_elem)) || ((!in_storage) && in_elem)) {
            toggle_sect_menu();
        }
    });
}
