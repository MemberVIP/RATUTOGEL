!(function (a) {
  a.fn.extend({
    easyResponsiveTabs: function (t) {
      var e = (t = a.extend(
          {
            type: "default",
            width: "auto",
            fit: !0,
            closed: !1,
            activate: function () {},
          },
          t
        )),
        s = e.type,
        i = e.fit,
        n = e.width,
        r = "vertical",
        c = "accordion",
        o = window.location.hash;
      !window.history || history.replaceState;
      a(this).on("tabactivate", function (a, e) {
        "function" == typeof t.activate && t.activate.call(e, a);
      }),
        this.each(function () {
          var e = a(this),
            d = e.find("ul.resp-tabs-list"),
            l = e.attr("id");
          e.find("ul.resp-tabs-list li").addClass("resp-tab-item"),
            e.css({ display: "block", width: n }),
            e.find(".resp-tabs-container > div").addClass("resp-tab-content"),
            s == r && e.addClass("resp-vtabs"),
            1 == i && e.css({ width: "100%" }),
            s == c &&
              (e.addClass("resp-easy-accordion"),
              e.find(".resp-tabs-list").css("display", "none"));
          var p;
          e.find(".resp-tab-content").before(
            "<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>"
          );
          var b = 0;
          e.find(".resp-accordion").each(function () {
            p = a(this);
            var t = e.find(".resp-tab-item:eq(" + b + ")"),
              s = e.find(".resp-accordion:eq(" + b + ")");
            s.append(t.html()),
              s.data(t.data()),
              p.attr("aria-controls", "tab_item-" + b),
              b++;
          });
          var v,
            f = 0;
          e.find(".resp-tab-item").each(function () {
            ($tabItem = a(this)),
              $tabItem.attr("aria-controls", "tab_item-" + f),
              $tabItem.attr("role", "tab");
            var t = 0;
            e.find(".resp-tab-content").each(function () {
              (v = a(this)).attr("aria-labelledby", "tab_item-" + t), t++;
            }),
              f++;
          });
          var h = 0;
          if ("" != o) {
            var C = o.match(new RegExp(l + "([0-9]+)"));
            null !== C &&
              2 === C.length &&
              (h = parseInt(C[1], 10) - 1) > f &&
              (h = 0);
          }
          a(e.find(".resp-tab-item")[h]).addClass("resp-tab-active"),
            !0 === t.closed ||
            ("accordion" === t.closed && !d.is(":visible")) ||
            ("tabs" === t.closed && d.is(":visible"))
              ? a(e.find(".resp-tab-content")[h]).addClass(
                  "resp-tab-content-active resp-accordion-closed"
                )
              : (a(e.find(".resp-accordion")[h]).addClass("resp-tab-active"),
                a(e.find(".resp-tab-content")[h])
                  .addClass("resp-tab-content-active")
                  .attr("style", "display:block")),
            e.find("[role=tab]").each(function () {
              a(this).on("click", function () {
                var t = a(this),
                  s = t.attr("aria-controls");
                if (
                  t.hasClass("resp-accordion") &&
                  t.hasClass("resp-tab-active")
                )
                  return (
                    e.find(".resp-tab-content-active").slideUp("", function () {
                      a(this).addClass("resp-accordion-closed");
                    }),
                    t.removeClass("resp-tab-active"),
                    !1
                  );
                !t.hasClass("resp-tab-active") && t.hasClass("resp-accordion")
                  ? (e.find(".resp-tab-active").removeClass("resp-tab-active"),
                    e
                      .find(".resp-tab-content-active")
                      .slideUp()
                      .removeClass(
                        "resp-tab-content-active resp-accordion-closed"
                      ),
                    e
                      .find("[aria-controls=" + s + "]")
                      .addClass("resp-tab-active"),
                    e
                      .find(".resp-tab-content[aria-labelledby = " + s + "]")
                      .slideDown()
                      .addClass("resp-tab-content-active"))
                  : (e.find(".resp-tab-active").removeClass("resp-tab-active"),
                    e
                      .find(".resp-tab-content-active")
                      .removeAttr("style")
                      .removeClass("resp-tab-content-active")
                      .removeClass("resp-accordion-closed"),
                    e
                      .find("[aria-controls=" + s + "]")
                      .addClass("resp-tab-active"),
                    e
                      .find(".resp-tab-content[aria-labelledby = " + s + "]")
                      .addClass("resp-tab-content-active")
                      .attr("style", "display:block")),
                  t.trigger("tabactivate", t);
              });
            }),
            a(window).on("resize", function () {
              e.find(".resp-accordion-closed").removeAttr("style");
            });
        });
    },
  });
})(jQuery);
