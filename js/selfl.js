function add_self_links(){$("body").hasClass("self_link")||($("h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]").each(function(i){$(this).append('<span class="selfl"> <a href="#'+this.id+'" title="Get an anchor to this part of the page">¶</a></span>')}),$("body").addClass("self_link"))}$(add_self_links);