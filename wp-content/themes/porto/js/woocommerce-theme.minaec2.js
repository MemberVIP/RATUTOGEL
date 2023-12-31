function porto_woocommerce_init(t) {
  "use strict";
  var e;
  t || (t = jQuery(document.body)),
    (e = jQuery).fn.themeWooWidgetToggle &&
      e(function () {
        t.find(
          ".widget_product_categories, .widget_price_filter, .widget_layered_nav, .widget_layered_nav_filters, .widget_rating_filter, .widget-woof, .porto_widget_price_filter, #wcfmmp-store .widget.sidebar-box, #wcfmmp-store-lists-sidebar .sidebar-box"
        )
          .find(".widget-title")
          .each(function () {
            var t,
              o = e(this),
              i = o.data("plugin-options");
            i && (t = i), o.themeWooWidgetToggle(t);
          });
      }),
    e.fn.themeWooWidgetAccordion &&
      e(function () {
        t.find(
          ".widget_product_categories, .widget_price_filter, .widget_layered_nav, .widget_layered_nav_filters, .widget_rating_filter, .widget-woof, #wcfmmp-store .widget.sidebar-box, #wcfmmp-store-lists-sidebar .sidebar-box"
        ).each(function () {
          var t,
            o = e(this),
            i = o.data("plugin-options");
          i && (t = i), o.themeWooWidgetAccordion(t);
        });
      }),
    e.fn.themeWooProductsSlider &&
      e(function () {
        var o = t.find(".products-slider:not(.manual)").filter(function () {
            return !e(this).closest(".porto-carousel:not(.owl-loaded)").length;
          }),
          i = t.find(".porto-carousel:not(.owl-loaded)").filter(function () {
            return !!e(this).find(".products-slider:not(.manual)").length;
          });
        i.length &&
          i.one("initialized.owl.carousel", function () {
            e(this)
              .find(".products-slider:not(.manual)")
              .each(function () {
                var t = e(this);
                t.themeWooProductsSlider(t.data("plugin-options"));
              });
          }),
          o.each(function () {
            var t,
              o = e(this),
              i = o.data("plugin-options");
            i && (t = i),
              setTimeout(function () {
                o.themeWooProductsSlider(t);
              }, 0);
          });
      });
}
function porto_woocommerce_variations_init(t) {
  "use strict";
  theme.requestTimeout(function () {
    var e = t.find("form.variations_form:not(.vf_init)");
    e.length &&
      jQuery.fn.wc_variation_form &&
      e.each(function () {
        var t = jQuery._data(this, "events");
        (t && t.show_variation) || jQuery(this).wc_variation_form();
      });
  }, 100);
}
function porto_ajax_load_products(t, e, o, i, a, r) {
  "use strict";
  var n;
  (n = jQuery),
    t.hasClass("loading") ||
      (t.addClass("loading"),
      "load_more" != o &&
        (t.addClass("yith-wcan-loading"),
        t.children(".porto-loading-icon").length ||
          t.append('<i class="porto-loading-icon"></i>')),
      null == i[a] && (i[a] = {}),
      n.ajax({
        url: theme.ajax_url,
        data: e,
        type: "post",
        success: function (e) {
          n(e).length ? (i[a][r] = n(e).html()) : (i[a][r] = ""),
            porto_ajax_load_products_success(t, e, o);
        },
        complete: function () {
          t.removeClass("loading");
        },
      }));
}
function porto_ajax_load_products_success(t, e, o) {
  "use strict";
  !(function (i) {
    if (
      (t.data("cur_page") &&
        i(e).find("ul.products").data("cur_page") &&
        t.data("cur_page", i(e).find("ul.products").data("cur_page")),
      "load_more" == o)
    )
      t.append(i(e).find("ul.products").html());
    else if (
      (t.hasClass("owl-carousel") &&
        t.parent().css("min-height", t.parent().height()),
      t.hasClass("grid-creative") && void 0 !== t.attr("data-plugin-masonry"))
    ) {
      t.isotope("remove", t.children());
      var a = i(e).find("ul.products").children();
      t.append(a),
        t.isotope("appended", a),
        t.imagesLoaded(function () {
          t.isotope("layout");
        });
    } else i(e).length ? t.html(i(e).find("ul.products").html()) : t.html("");
    if (
      (t.hasClass("owl-carousel") &&
        i.fn.themeWooProductsSlider &&
        (t.trigger("destroy.owl.carousel"),
        theme.requestTimeout(function () {
          var e,
            o = t.data("plugin-options");
          o && (e = o),
            t.data("__wooProductsSlider", "").themeWooProductsSlider(e),
            t.parent().css("min-height", "");
        }, 100)),
      t.closest(".porto-products").find(".shop-loop-after").length &&
        (i(e).find(".shop-loop-after").length
          ? t
              .closest(".porto-products")
              .find(".shop-loop-after")
              .replaceWith(i(e).find(".shop-loop-after"))
          : t.closest(".porto-products").find(".shop-loop-after").remove()),
      void 0 !== t.data("infinitescroll"))
    ) {
      var r = t.data("infinitescroll");
      (r.options.state.currPage = 1), t.data("infinitescroll", r);
    }
    t.removeClass("yith-wcan-loading"),
      "load_more" == o &&
        void 0 !== t &&
        void 0 !== t.data("text") &&
        t.text(t.data("text")),
      i(document).trigger("yith-wcan-ajax-filtered");
  })(jQuery);
}
!(function () {
  "use strict";
  function t(t, e) {
    var o = t.find(".show-nav-title .owl-nav");
    if (
      o.length &&
      (window.theme.rtl ? o.css("left", e) : o.css("right", e),
      o.closest(".porto-products").length &&
        o.closest(".porto-products").parent().children(".products-slider-title")
          .length)
    ) {
      var i = o
          .closest(".porto-products")
          .parent()
          .children(".products-slider-title"),
        a =
          i.offset().top -
          t.offset().top -
          parseInt(i.css("padding-top"), 10) -
          parseInt(i.css("line-height"), 10) / 2 +
          o.children().outerHeight() -
          parseInt(o.children().css("margin-top"), 10);
      o.css("margin-top", a);
    }
  }
  (function (t, e) {
    t = t || {};
    var o = "__wooWidgetToggle",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.defaults = {}),
      (i.prototype = {
        initialize: function (t, e) {
          return (
            t.data(o) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(o, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, i.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var e = this.options.wrapper;
          return (
            e.parent().removeClass("closed"),
            e.find(".toggle").length ||
              e.append('<span class="toggle"></span>'),
            e.find(".toggle").on("click", function () {
              e.next().is(":visible")
                ? e.parent().addClass("closed")
                : e.parent().removeClass("closed"),
                e.next().stop().slideToggle(200),
                t.refreshVCContent();
            }),
            this
          );
        },
      }),
      e.extend(t, { WooWidgetToggle: i }),
      (e.fn.themeWooWidgetToggle = function (i) {
        return this.map(function () {
          var a = e(this);
          return a.data(o) ? a.data(o) : new t.WooWidgetToggle(a, i);
        });
      });
  }).apply(this, [window.theme, jQuery]),
    function (t, e) {
      t = t || {};
      var o = "__wooWidgetAccordion",
        i = function (t, e) {
          return this.initialize(t, e);
        };
      (i.defaults = {}),
        (i.prototype = {
          initialize: function (t, e) {
            return (
              t.data(o) ||
                ((this.$el = t), this.setData().setOptions(e).build()),
              this
            );
          },
          setData: function () {
            return this.$el.data(o, this), this;
          },
          setOptions: function (t) {
            return (
              (this.options = e.extend(!0, {}, i.defaults, t, {
                wrapper: this.$el,
              })),
              this
            );
          },
          build: function () {
            var o = this.options.wrapper;
            return (
              o.find("ul.children").each(function () {
                var o = e(this);
                o.prev().hasClass("toggle") ||
                  o.before(
                    e('<span class="toggle"></span>').on("click", function () {
                      var o = e(this);
                      o.next().is(":visible")
                        ? o.parent().removeClass("open").addClass("closed")
                        : o.parent().addClass("open").removeClass("closed"),
                        o.next().stop().slideToggle(200),
                        t.refreshVCContent();
                    })
                  );
              }),
              o.find('li[class*="current-"]').addClass("current"),
              this
            );
          },
        }),
        e.extend(t, { WooWidgetAccordion: i }),
        (e.fn.themeWooWidgetAccordion = function (i) {
          return this.map(function () {
            var a = e(this);
            return a.data(o) ? a.data(o) : new t.WooWidgetAccordion(a, i);
          });
        });
    }.apply(this, [window.theme, jQuery]),
    "function" == typeof jQuery.fn.owlCarousel &&
      function (e, o) {
        var i = "__wooProductsSlider",
          a = function (t, e) {
            return this.initialize(t, e);
          };
        (a.defaults = {
          rtl: (e = e || {}).rtl,
          autoplay: "1" == e.slider_autoplay,
          autoplayTimeout: e.slider_speed ? e.slider_speed : 5e3,
          loop: e.slider_loop,
          nav: !1,
          navText: ["", ""],
          dots: !1,
          autoplayHoverPause: !0,
          items: 1,
          responsive: {},
          autoHeight: !0,
          lazyLoad: !0,
        }),
          (a.prototype = {
            initialize: function (t, e) {
              return (
                t.data(i) ||
                  ((this.$el = t), this.setData().setOptions(e).build()),
                this
              );
            },
            setData: function () {
              return this.$el.data(i, !0), this;
            },
            setOptions: function (t) {
              return (
                (this.options = o.extend(!0, {}, a.defaults, t, {
                  wrapper: this.$el,
                })),
                this
              );
            },
            calcOwlHeight: function (t) {
              var e = 0;
              t.find(".owl-item.active").each(function () {
                e < o(this).height() && (e = o(this).height());
              }),
                t.find(".owl-stage-outer").height(e);
            },
            build: function () {
              var i,
                a = this.options.wrapper,
                r = this.options.lg,
                n = this.options.md,
                s = this.options.xs,
                c = this.options.ls,
                l = a.closest(".slider-wrapper"),
                d = this.options.single,
                p = (this.options.dots, this.options.nav, {}),
                u = a.find("> *").length,
                h = parseInt(js_porto_vars.screen_lg) - 0;
              if (
                (a.find(".product-col").get(0) &&
                  t(l, a.find(".product-col").css("padding-left")),
                d
                  ? (i = 1)
                  : ((i = r || 1),
                    this.options.xl &&
                      (p[1400] = {
                        items: this.options.xl,
                        loop: !!(this.options.loop && u > this.options.xl),
                      }),
                    (p[h] = { items: i, loop: !!(this.options.loop && u > i) }),
                    n &&
                      (p[768] = {
                        items: n,
                        loop: !!(this.options.loop && u > n),
                      }),
                    s &&
                      (p[576] = {
                        items: s,
                        loop: !!(this.options.loop && u > s),
                      }),
                    c &&
                      (p[0] = {
                        items: c,
                        loop: !!(this.options.loop && u > c),
                      })),
                (this.options = o.extend(!0, {}, this.options, {
                  loop: !!(this.options.loop && u > i),
                  items: i,
                  responsive: p,
                  onRefresh: function () {
                    a.find(".product-col").get(0) &&
                      t(l, a.find(".product-col").css("padding-left"));
                  },
                  onInitialized: function () {
                    a.find(".product-col").get(0) &&
                      t(l, a.find(".product-col").css("padding-left")),
                      a.find(".owl-item.cloned").length &&
                        setTimeout(function () {
                          var t = a
                            .find(
                              ".owl-item.cloned .porto-lazyload:not(.lazy-load-loaded)"
                            )
                            .themePluginLazyLoad({
                              effect: "fadeIn",
                              effect_speed: 400,
                            });
                          t && t.loadAndDestroy && t.loadAndDestroy();
                        }, 100);
                  },
                  touchDrag: 1 != u,
                  mouseDrag: 1 != u,
                })),
                this.options.autoHeight)
              ) {
                var m = this;
                o(window).on("resize", function () {
                  m.calcOwlHeight(a);
                }),
                  e.isLoaded
                    ? setTimeout(function () {
                        m.calcOwlHeight(a);
                      }, 100)
                    : o(window).on("load", function () {
                        m.calcOwlHeight(a);
                      });
              }
              return a.owlCarousel(this.options), this;
            },
          }),
          o.extend(e, { WooProductsSlider: a }),
          (o.fn.themeWooProductsSlider = function (t) {
            return this.map(function () {
              var a = o(this);
              return a.data(i) ? a : new e.WooProductsSlider(a, t);
            });
          });
      }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      var o;
      try {
        (o = "sessionStorage" in window && null !== window.sessionStorage),
          window.sessionStorage.setItem("wc", "test"),
          window.sessionStorage.removeItem("wc");
      } catch (t) {
        o = !1;
      }
      var i = function () {
          e(document)
            .off(
              "click",
              ".widget_shopping_cart .remove-product, .shop_table.cart .remove-product"
            )
            .on(
              "click",
              ".widget_shopping_cart .remove-product, .shop_table.cart .remove-product",
              function (o) {
                o.preventDefault();
                var i = e(this),
                  a = i.data("cart_id"),
                  n = i.data("product_id");
                return (
                  i.closest("li").find(".ajax-loading").show(),
                  e.ajax({
                    type: "POST",
                    dataType: "json",
                    url: t.ajax_url,
                    data: {
                      action: "porto_cart_item_remove",
                      nonce: js_porto_vars.porto_nonce,
                      cart_id: a,
                    },
                    success: function (t) {
                      var o = window.location.toString(),
                        i = e(
                          t.fragments["div.widget_shopping_cart_content"]
                        ).find(".mini_cart_item").length;
                      (o = o.replace("add-to-cart", "added-to-cart")),
                        r(t),
                        e(document.body).trigger("wc_fragments_refreshed"),
                        e(".viewcart-" + n).removeClass("added"),
                        e(".porto_cart_item_" + a).remove(),
                        0 == i &&
                        (e("body").hasClass("woocommerce-cart") ||
                          e("body").hasClass("woocommerce-checkout"))
                          ? e(".page-content")
                              .fadeTo(400, 0.8)
                              .block({
                                message: null,
                                overlayCSS: { opacity: 0.2 },
                              })
                          : e(
                              ".shop_table.cart, .shop_table.review-order, .updating, .cart_totals"
                            )
                              .fadeTo(400, 0.8)
                              .block({
                                message: null,
                                overlayCSS: { opacity: 0.2 },
                              }),
                        e(".widget_shopping_cart, .updating")
                          .stop(!0)
                          .css("opacity", "1")
                          .unblock(),
                        0 == i &&
                        (e("body").hasClass("woocommerce-cart") ||
                          e("body").hasClass("woocommerce-checkout"))
                          ? e(".page-content").load(
                              o + " .page-content:eq(0) > *",
                              function () {
                                e(".page-content")
                                  .stop(!0)
                                  .css("opacity", "1")
                                  .unblock();
                              }
                            )
                          : (e(".shop_table.cart").load(
                              o + " .shop_table.cart:eq(0) > *",
                              function () {
                                e(".shop_table.cart")
                                  .stop(!0)
                                  .css("opacity", "1")
                                  .unblock();
                              }
                            ),
                            e(".cart_totals").load(
                              o + " .cart_totals:eq(0) > *",
                              function () {
                                e(".cart_totals")
                                  .stop(!0)
                                  .css("opacity", "1")
                                  .unblock();
                              }
                            ),
                            e(".shop_table.review-order").load(
                              o + " .shop_table.review-order:eq(0) > *",
                              function () {
                                e(".shop_table.review-order")
                                  .stop(!0)
                                  .css("opacity", "1")
                                  .unblock();
                              }
                            ));
                    },
                  }),
                  !1
                );
              }
            );
        },
        a = function () {
          i(),
            e.cookie("woocommerce_items_in_cart") > 0
              ? e(".hide_cart_widget_if_empty")
                  .closest(".widget_shopping_cart")
                  .show()
              : e(".hide_cart_widget_if_empty")
                  .closest(".widget_shopping_cart")
                  .hide();
        },
        r = function (t) {
          if (t && t.fragments) {
            var i = t.fragments,
              a = t.cart_hash;
            if (
              (e.each(i, function (t, o) {
                e(t).replaceWith(o);
              }),
              "undefined" == typeof wc_cart_fragments_params)
            )
              return;
            if (o) {
              var r = sessionStorage.getItem("wc_cart_hash");
              (null != r && "" !== r) ||
                (o &&
                  sessionStorage.setItem(
                    "wc_cart_created",
                    new Date().getTime()
                  )),
                sessionStorage.setItem(
                  wc_cart_fragments_params.fragment_name,
                  JSON.stringify(i)
                ),
                (function (t) {
                  o &&
                    wc_cart_fragments_params &&
                    (localStorage.setItem(
                      wc_cart_fragments_params.cart_hash_key,
                      t
                    ),
                    sessionStorage.setItem(
                      wc_cart_fragments_params.cart_hash_key,
                      t
                    ));
                })(a);
            }
          }
        };
      e(function () {
        a(),
          e(document).on("click", ".add_to_cart_button", function (t) {
            var o = e(this);
            o.is(".product_type_simple") &&
              (o.attr("data-product_id") && o.addClass("product-adding"),
              (o.hasClass("viewcart-style-2") ||
                o.hasClass("viewcart-style-3")) &&
                (e("body").append(
                  '<div id="loading-mask"><div class="background-overlay"></div></div>'
                ),
                e(this).closest(".product").find(".loader-container").length ||
                  e(this)
                    .closest(".product")
                    .find(".product-image")
                    .append(
                      '<div class="loader-container"><div class="loader"><i class="porto-ajax-loader"></i></div></div>'
                    ),
                e(this).closest(".product").find(".loader-container").show()));
          }),
          e(document).on("click", "span.add_to_cart_button", function (t) {
            var o = e(this);
            (o.is(".product_type_simple") && o.attr("data-product_id")) ||
              (window.location.href = o.attr("href"));
          }),
          e("body").on("added_to_cart", function () {
            e(
              "ul.products li.product .added_to_cart, .porto-tb-item .added_to_cart"
            ).remove(),
              i();
          }),
          e(document.body).on(
            "wc_fragments_refreshed wc_fragments_loaded",
            function () {
              a();
            }
          ),
          e(document).on(
            "click",
            ".product-image .viewcart, .after-loading-success-message .viewcart",
            function (t) {
              wc_add_to_cart_params.cart_url &&
                (window.location.href = wc_add_to_cart_params.cart_url),
                t.preventDefault();
            }
          );
        var o = null;
        e(document).on("added_to_cart", "body", function (i) {
          var a = e("#mini-cart .cart-items");
          a.length &&
            (a.addClass("count-updating"),
            setTimeout(function () {
              a.removeClass("count-updating");
            }, 1e3)),
            e("body #loading-mask").remove(),
            e(".add_to_cart_button.product-adding").each(function () {
              var i = e(this);
              if (
                (i.removeClass("product-adding"),
                i.hasClass("viewcart-style-1"))
              )
                i.closest(".product").find(".viewcart").addClass("added");
              else {
                if (
                  (i.closest(".product").find(".loader-container").hide(),
                  i.closest("li.outofstock").length)
                )
                  return;
                var a;
                if (
                  (i.hasClass("viewcart-style-2")
                    ? (a = e(
                        ".after-loading-success-message .success-message-container"
                      ).eq(0))
                        .find(".product-name")
                        .text(
                          i
                            .closest(".product")
                            .find(".woocommerce-loop-product__title")
                            .text()
                        )
                    : (a = e(
                        ".after-loading-success-message .success-message-container"
                      )
                        .last()
                        .clone()
                        .removeClass("d-none"))
                        .find(".product-name")
                        .empty()
                        .append(
                          i
                            .closest(".product")
                            .find(".product-loop-title, .post-title a")
                            .clone()
                        ),
                  a.find(".msg-box img").remove(),
                  i.closest(".product").find(".product-image img").length)
                ) {
                  var r = i
                    .closest(".product")
                    .find(".product-image img")
                    .eq(0);
                  e("<img />")
                    .attr("src", r.data("oi") ? r.data("oi") : r.attr("src"))
                    .appendTo(a.find(".msg-box"));
                }
                e(".after-loading-success-message").eq(0).stop().show(),
                  i.hasClass("viewcart-style-2")
                    ? (o && clearTimeout(o),
                      (o = setTimeout(function () {
                        e(".after-loading-success-message").eq(0).hide();
                      }, 4e3)))
                    : (a.prependTo(".after-loading-success-message"),
                      t.requestFrame(function () {
                        a.addClass("active");
                      }),
                      setTimeout(function () {
                        a.find(".mfp-close").trigger("click");
                      }, 5e3));
              }
            });
        }),
          e(".after-loading-success-message .continue_shopping").on(
            "click",
            function () {
              e(".after-loading-success-message").eq(0).fadeOut(200);
            }
          ),
          e(".after-loading-success-message").on(
            "click",
            ".mfp-close",
            function () {
              var o = e(this).closest(".success-message-container");
              o.removeClass("active"),
                t.requestTimeout(function () {
                  o.slideUp(300, function () {
                    o.remove();
                  });
                }, 350);
            }
          ),
          e(document.body).on(
            "click",
            ".variations_form .variations .filter-item-list .filter-color, .variations_form .variations .filter-item-list .filter-item",
            function (t) {
              t.preventDefault();
              var o = e(this),
                i = o.closest("ul").siblings("select");
              if (i.length && !o.hasClass("disabled")) {
                var a = o.closest("li");
                a.hasClass("active")
                  ? (a.removeClass("active"), i.val(""))
                  : (a.addClass("active").siblings().removeClass("active"),
                    i.val(o.data("value"))),
                  i.trigger("change.wc-variation-form");
              }
            }
          ),
          e(document).on("wc_variation_form", ".variations_form", function () {
            e(this).addClass("vf_init"),
              e(this).find(".filter-item-list").length < 1 ||
                e(this).find(".variations select").trigger("focusin");
          }),
          e(document).on("updated_wc_div", function () {
            e(".woocommerce-cart-form .porto-lazyload").themePluginLazyLoad();
          }),
          e(document).on(
            "found_variation reset_data",
            ".variations_form",
            function (t, o) {
              var i = e(this);
              i.find(".product-attr-description").length &&
                (void 0 === o
                  ? i.find(".product-attr-description").removeClass("active")
                  : (i.find(".product-attr-description").addClass("active"),
                    i
                      .find(".product-attr-description .attr-desc")
                      .removeClass("active"),
                    i.find(".variations select").each(function () {
                      var t = e(this);
                      i.find(
                        '.product-attr-description .attr-desc[data-attrid="' +
                          t.val() +
                          '"]'
                      ).addClass("active");
                    }))),
                i.find(".filter-item-list").length < 1 ||
                  i.find(".filter-item-list").each(function () {
                    if (!(e(this).next("select").length < 1)) {
                      var t = e(this).next("select"),
                        o = e(this);
                      o.find("li.active").removeClass("active"),
                        o
                          .find(".filter-color, .filter-item")
                          .removeClass("enabled")
                          .removeClass("disabled"),
                        t.children("option").each(function () {
                          e(this).val() &&
                            (o
                              .find('[data-value="' + e(this).val() + '"]')
                              .addClass("enabled"),
                            e(this).val() == t.val() &&
                              o
                                .find('[data-value="' + e(this).val() + '"]')
                                .parent()
                                .addClass("active"));
                        }),
                        o
                          .find(
                            ".filter-color:not(.enabled), .filter-item:not(.enabled)"
                          )
                          .addClass("disabled");
                    }
                  });
            }
          ),
          e(document).on(
            "found_variation reset_data",
            ".variations_form",
            function (t, o) {
              var i = e(this)
                .closest(".product")
                .find(".sale-product-daily-deal.for-some-variations");
              if (i.length)
                if (
                  o &&
                  o.is_purchasable &&
                  void 0 !== o.porto_date_on_sale_to &&
                  o.porto_date_on_sale_to
                ) {
                  var a = i.find(".porto_countdown-dateAndTime");
                  if (a.data("terminal-date") != o.porto_date_on_sale_to) {
                    var r = new Date(o.porto_date_on_sale_to);
                    a.porto_countdown("option", { until: r }),
                      a.data("terminal-date", o.porto_date_on_sale_to);
                  }
                  i.slideDown();
                } else i.is(":hidden") ? i.hide() : i.slideUp();
            }
          ),
          e("body").on("click", ".product-attr-description > a", function (t) {
            t.preventDefault(), e(this).next().stop().slideToggle(400);
          }),
          e(document.body).hasClass("single-product") &&
            (e(document).on(
              "woocommerce_variation_has_changed",
              ".variations_form",
              function (t, o) {
                e(document.body).removeClass("single-add-to-cart");
              }
            ),
            e(document).on(
              "found_variation",
              ".variations_form",
              function (o, i) {
                try {
                  var a = JSON.parse(
                    sessionStorage.getItem(
                      wc_cart_fragments_params.fragment_name
                    )
                  );
                  if (a["div.widget_shopping_cart_content"])
                    e(a["div.widget_shopping_cart_content"]).find(
                      ".porto-variation-" + i.variation_id
                    ).length &&
                      t.requestFrame(function () {
                        e(document.body).addClass("single-add-to-cart");
                      });
                } catch (o) {}
              }
            ));
      });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      var o = /(?!(\[))(\.)[^.#[]*/g,
        i = /(#)[^.#[]*/,
        a = /^[\w]+/,
        r = /^[\w]+$/,
        n = function (t, n) {
          var s = r.test(t)
              ? [{ tag: t }]
              : (function (t) {
                  for (
                    var e = { sel: [], val: [] },
                      r = [],
                      n = !1,
                      s = "",
                      c = [],
                      l = 0,
                      d = t.length;
                    l < d;
                    l++
                  ) {
                    var p = t.charAt(l);
                    n
                      ? "\\" === p && l + 1 < t.length
                        ? c.push(t.charAt(++l))
                        : s === p
                        ? ((s = ""), c.push(p))
                        : ("'" !== p && '"' !== p) || "" !== s
                        ? "]" === p && "" === s
                          ? (e.val.push(c.join("")), (c = []), (n = !1))
                          : ("]" === p && "" === s) ||
                            ("" === s && "," === p
                              ? (e.val.push(c.join("")), (c = []))
                              : c.push(p))
                        : ((s = p), c.push(p))
                      : "\\" === p && l + 1 < t.length
                      ? n && c.push(t.charAt(++l))
                      : "[" === p && "" === s
                      ? (n = !0)
                      : " " === p || "+" === p
                      ? ((e.sel = e.sel.join("")),
                        r.push(e),
                        "+" === p && r.push({ sel: "+", val: "" }),
                        (e = { sel: [], val: [] }))
                      : " " !== p && "]" !== p && e.sel.push(p);
                  }
                  for (
                    (0 == e.sel.length && 0 == e.val.length) ||
                      ((e.sel = e.sel.join("")), r.push(e)),
                      l = 0;
                    l < r.length;
                    l++
                  ) {
                    if ("+" === (e = r[l].sel)) u.tag = e;
                    else {
                      var u = [];
                      for (
                        u.tag = a.exec(e),
                          u.id = i.exec(e),
                          u.id &&
                            Array.isArray(u.id) &&
                            (u.id = u.id[0].substr(1)),
                          u.tag || (u.tag = "div"),
                          u.vars = [],
                          t = 0;
                        t < r[l].val.length;
                        t++
                      )
                        (s = r[l].val[t].indexOf("=")),
                          (n = r[l].val[t].substr(0, s)),
                          (s = (s = r[l].val[t].substr(s + 1)).replace(
                            /^[\s]*[\"\']*|[\"\']*[\s]*$/g,
                            ""
                          )),
                          "text" === n ? (u.text = s) : u.vars.push([n, s]);
                      if (((n = []), (e = e.match(o)))) {
                        for (t = 0; t < e.length; t++) n.push(e[t].substr(1));
                        u.className = n.join(" ");
                      }
                    }
                    r[l] = u;
                  }
                  return r;
                })(t),
            c = [];
          void 0 === n && (n = 1);
          for (
            var l = [],
              d = [],
              p = [],
              u = document.createElement("div"),
              h = 0,
              m = 0;
            m < s.length;
            m++
          ) {
            if ("+" == s[m].tag) (d = p.slice()), --h;
            else {
              for (var f = 0; f < n; f++) {
                var g;
                if ("input" == s[m].tag) {
                  if (
                    ((g = []).push("<" + s[m].tag),
                    s[m].id && g.push("id='" + s[m].id + "'"),
                    s[m].className &&
                      (g.push("class='" + s[m].className),
                      m + 1 === s.length && g.push(lastClass),
                      g.push("'")),
                    s[m].vars)
                  )
                    for (var _ = 0; _ < s[m].vars.length; _++)
                      g.push(s[m].vars[_][0] + "='" + s[m].vars[_][1] + "'");
                  s[m].text && g.push("value='" + s[m].text + "'"),
                    g.push("/>"),
                    (p[f] = d[f]),
                    d[f]
                      ? ((d[f].innerHTML += g.join(" ")),
                        (d[f] = d[f].lastChild))
                      : ((u.innerHTML = g.join(" ")),
                        (d[f] = u.removeChild(u.firstChild)));
                } else {
                  if (((g = document.createElement(s[m].tag)), s[m].vars))
                    for (_ = 0; _ < s[m].vars.length; _++)
                      g.setAttribute(s[m].vars[_][0], s[m].vars[_][1]);
                  s[m].id && (g.id = s[m].id),
                    s[m].className && (g.className = s[m].className),
                    s[m].text &&
                      g.appendChild(document.createTextNode(s[m].text)),
                    (p[f] = d[f]),
                    (d[f] = d[f] ? d[f].appendChild(g) : g);
                }
              }
              h++ || Array.prototype.push.apply(l, d);
            }
            c = e.merge(c, d);
          }
          return e(l);
        },
        s = function (t, o, i) {
          for (
            var a = t.match(/%[^%]*%/g) || [], r = [], s = 0;
            s < o.length;
            s++
          ) {
            for (var c = t, l = 0; l < a.length; l++) {
              var d = a[l].substr(1, a[l].length - 2);
              c = c.replace(a[l], o[s][d]);
            }
            r = e.merge(r, n(c, i));
          }
          return e(r);
        };
      e.porto_jseldom = function (t) {
        return 2 == arguments.length && e.isPlainObject(arguments[1])
          ? s.apply(this, [arguments[0], [arguments[1]]])
          : 1 == arguments.length ||
            (2 == arguments.length && !Array.isArray(arguments[1]))
          ? n.apply(this, arguments)
          : 2 == arguments.length
          ? s.apply(this, arguments)
          : void 0;
      };
      var c = function () {
          if (e(".price_slider").length) {
            if ("undefined" == typeof woocommerce_price_slider_params)
              return !1;
            e("input#min_price, input#max_price").hide(),
              e(".price_slider, .price_label").show();
            var t = e(".price_slider_amount #min_price").data("min"),
              o = e(".price_slider_amount #max_price").data("max"),
              i = parseInt(
                e(".price_slider_amount #min_price").val()
                  ? e(".price_slider_amount #min_price").val()
                  : t,
                10
              ),
              a = parseInt(
                e(".price_slider_amount #max_price").val()
                  ? e(".price_slider_amount #max_price").val()
                  : o,
                10
              );
            e(".price_slider").slider({
              range: !0,
              animate: !0,
              min: t,
              max: o,
              values: [i, a],
              create: function () {
                e(".price_slider_amount #min_price").val(i),
                  e(".price_slider_amount #max_price").val(a),
                  e(document.body).trigger("price_slider_create", [i, a]);
              },
              slide: function (t, o) {
                e("input#min_price").val(o.values[0]),
                  e("input#max_price").val(o.values[1]),
                  e(document.body).trigger("price_slider_slide", [
                    o.values[0],
                    o.values[1],
                  ]);
              },
              change: function (t, o) {
                e(document.body).trigger("price_slider_change", [
                  o.values[0],
                  o.values[1],
                ]);
              },
            });
          }
          e(
            ".yith-woo-ajax-navigation, .yith-wcan-list-price-filter"
          ).removeClass("loading");
        },
        l = function (o, i, a) {
          var r,
            n,
            s = ".shop-loop-before",
            c = e(s),
            l = ".shop-loop-after:not(.is-shortcode)",
            d = ".archive-products .products:not(.is-shortcode)",
            p = ".archive-products .woocommerce-info",
            u = c.parent(),
            h = e(d),
            m = e(".sidebar [data-plugin-sticky]"),
            f = c.data("show"),
            g = ".porto-product-filters:not(.style2)";
          if (
            (f &&
              e(s + "," + l)
                .stop(!0)
                .fadeTo(400, 1)
                .block({ message: null, overlayCSS: { opacity: 0.2 } }),
            -1 == js_porto_vars.use_skeleton_screen.indexOf("shop"))
          )
            h.length
              ? (h.addClass("yith-wcan-loading"),
                h.children(".porto-loading-icon").length ||
                  h.append('<i class="porto-loading-icon"></i>'))
              : (e(p).html("").addClass("yith-wcan-loading products"),
                e(p).children(".porto-loading-icon").length ||
                  e(p).append('<i class="porto-loading-icon"></i>'));
          else if (h.length) {
            h.addClass("skeleton-body");
            var _,
              v = h.data((h.hasClass("list") ? "list" : "grid") + "_col_cls");
            if (h.hasClass("list") && !v) _ = 4;
            else {
              for (var w = 1; w <= 8; w++)
                if (h.hasClass("pcols-lg-" + w)) {
                  _ = w;
                  break;
                }
              if (!_ && h.hasClass("has-ccols")) {
                var y;
                if (v) {
                  y = h.attr("class").split(" ");
                  var b = [];
                  for (w = 0; w < y.length; w++)
                    0 !== y[w].indexOf("ccols-") &&
                      "has-ccols" != y[w] &&
                      b.push(y[w]);
                  h.attr("class", b.join(" ") + " " + v), (y = v.split(" "));
                } else y = h.attr("class").split(" ");
                for (w = 0; w < y.length; w++)
                  if (0 === y[w].indexOf("ccols-")) {
                    _ = y[w].replace(
                      /ccols-[sm|md|lg|xl|xxl]*[-]*([\d])/,
                      "$1"
                    );
                    break;
                  }
              }
            }
            if (_) {
              var C = "product product-col";
              h.empty(),
                h.data("product_layout") &&
                  (C += " " + escape(h.data("product_layout")));
              for (w = 0; w < 3 * _; w++)
                h.append('<li class="' + C + '"></li>');
            } else h.find(".product-col").empty();
            h.hasClass("owl-loaded") && h.removeClass("owl-loaded");
          }
          e(g).length &&
            e(g).block({ message: null, overlayCSS: { opacity: 0.2 } }),
            m.get(0) && t.refreshStickySidebar(!1),
            t.scrolltoContainer(
              f
                ? c.hasClass("sticky") && c.prev(".filter-placeholder").length
                  ? c.prev(".filter-placeholder")
                  : c
                : h
            ),
            e(
              ".yith-woo-ajax-navigation, .yith-wcan-list-price-filter"
            ).addClass("loading"),
            (n = e(".sidebar-content .widget_shopping_cart").get(0)) &&
              (r = e(n).html()),
            e.ajax({
              url: o,
              data: { portoajax: !0, load_posts_only: !0 },
              type: "POST",
              success: function (c) {
                var p = h.parent(),
                  f = e(c);
                m.get(0) && u.css("min-height", 0);
                var _ = f.find(d);
                if (_.length) {
                  if (h.length && h.data("infinitescroll"))
                    try {
                      h.data("infinitescroll").destroy();
                      var v = h.data("__postsinfinite");
                      v && v.destroy();
                    } catch (t) {}
                  if (void 0 !== a && a && p.hasClass("porto-posts-grid")) {
                    var w = h.siblings("style"),
                      y = _.siblings("style");
                    w.length && y.length && w.replaceWith(y);
                  }
                  h.replaceWith(_[0].outerHTML), (h = e(d));
                } else
                  p.hasClass("porto-posts-grid")
                    ? h.empty()
                    : (p.html(f.find(".woocommerce-info")),
                      p.find(".woocommerce-info").addClass("products"));
                e(s + "," + l).get(0) &&
                  e(s + "," + l)
                    .stop(!0)
                    .css("opacity", "1")
                    .unblock(),
                  f.find(s).length
                    ? (0 == e(s).length &&
                        e.porto_jseldom(s).insertBefore(e(d)),
                      e(s).each(function (t) {
                        var o = f.find(s).eq(t);
                        o.length && e(this).html(o.html()).show();
                      }))
                    : e(s).empty(),
                  porto_woocommerce_variations_init(p),
                  f.find(g).length && e(g).html(f.find(g).html()),
                  e(g).unblock(),
                  f.find(l).length
                    ? (0 == e(l).length && e.porto_jseldom(l).insertAfter(e(d)),
                      e(l).html(f.find(l).html()).show())
                    : e(l).empty();
                var b = p.children(".pagination-wrap"),
                  C = _.siblings(".pagination-wrap");
                b.length
                  ? (b[0].outerHTML = C.length ? C[0].outerHTML : "")
                  : C.length && p.append(C);
                var x = e(".woocommerce-result-count");
                if (x.length) {
                  var k = f.find(".woocommerce-result-count").eq(0);
                  x[0].outerHTML = k.length ? k[0].outerHTML : "";
                }
                p.hasClass("porto-posts-grid")
                  ? p.is(
                      ".porto-ajax-load.load-infinite, .porto-ajax-load.load-more"
                    ) && p.portoInfiniteScroll()
                  : void 0 !== t.PostsInfinite &&
                    "undefined" != typeof porto_infinite_scroll &&
                    new t.PostsInfinite(e(d)),
                  e(".sidebar-content").each(function (t) {
                    var o = e(this),
                      a = e(f.find(".sidebar-content").get(t));
                    if ((o.html(a.html()), void 0 !== i && i)) {
                      if (jQuery().selectWoo) {
                        o.find(
                          "select.woocommerce-widget-layered-nav-dropdown"
                        ).each(function () {
                          e(this).selectWoo({
                            placeholder: e(this).find("option").eq(0).text(),
                            minimumResultsForSearch: 5,
                            width: "100%",
                            allowClear:
                              void 0 !== e(this).attr("multiple") &&
                              "multiple" == e(this).attr("multiple")
                                ? "false"
                                : "true",
                          });
                        });
                      }
                      e("body").children("span.select2-container").remove();
                    }
                  });
                var j = f
                  .filter(
                    'script:contains("var woocommerce_price_slider_params")'
                  )
                  .first();
                if (
                  j &&
                  j.length &&
                  -1 !== j.text().indexOf("{") &&
                  -1 !== j.text().indexOf("}")
                ) {
                  var T = j
                    .text()
                    .substring(
                      j.text().indexOf("{"),
                      j.text().indexOf("}") + 1
                    );
                  window.woocommerce_price_slider_params = JSON.parse(T);
                }
                navigator.userAgent.match(/msie/i) ||
                  window.history.pushState({ pageTitle: c.pageTitle }, "", o),
                  p.removeClass("porto-ajax-loading"),
                  e(document).trigger("yith-wcan-ajax-filtered"),
                  (n = e(".sidebar-content .widget_shopping_cart").get(0)) &&
                    (e(".sidebar-content .widget_shopping_cart").html(r),
                    e.cookie("woocommerce_items_in_cart") > 0
                      ? e(".hide_cart_widget_if_empty")
                          .closest(".widget_shopping_cart")
                          .show()
                      : e(".hide_cart_widget_if_empty")
                          .closest(".widget_shopping_cart")
                          .hide());
              },
            });
        };
      function d(t, e, o) {
        var i = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
          a = -1 !== t.indexOf("?") ? "&" : "?";
        return t.match(i)
          ? t.replace(i, "$1" + e + "=" + o + "$2")
          : t + a + e + "=" + o;
      }
      var p,
        u = function (o) {
          var i = ".shop-loop-before",
            a = ".shop-loop-after",
            r = e(i),
            n = r.parent(),
            s = e(i + "," + a);
          e(".sidebar [data-plugin-sticky]").get(0) && n.css("min-height", 0),
            s.length && s.stop(!0).fadeTo(400, 1).unblock(),
            e(".archive-products .products").find(".product").length ||
            e(a).closest(".porto-products").length ||
            r.hasClass("shop-builder")
              ? s.show().data("show", !0)
              : (s.hide().data("show", !1),
                r.find(".porto-product-filters.style2").length &&
                  r.show().data("show", !0)),
            (void 0 !== o && o) || (porto_init(), porto_woocommerce_init()),
            e(".woocommerce-ordering")
              .off("change", "select.orderby")
              .on("change", "select.orderby", function () {
                e(this).closest("form").trigger("submit");
              }),
            c(),
            e(".widget_price_filter").addClass("yith-wcan-list-price-filter"),
            t.category_ajax
              ? (e(".woocommerce-ordering")
                  .off("change", "select.orderby")
                  .on("change", "select.orderby", function (t) {
                    t.preventDefault();
                    var o = "?" + e(this).closest("form").serialize();
                    l(o);
                  }),
                e(".woocommerce-viewing")
                  .off("change", "select.count")
                  .on("change", "select.count", function (t) {
                    t.preventDefault();
                    var o = "?" + e(this).closest("form").serialize();
                    l(o);
                  }),
                e(".woocommerce-pagination:not(.load-more)").each(function () {
                  e(this).closest(".porto-products").length ||
                    e(this).closest("#comments").length ||
                    e(this)
                      .off("click", "a.page-numbers")
                      .on("click", "a.page-numbers", function (t) {
                        t.preventDefault();
                        var e = this.href;
                        l(e);
                      });
                }),
                e(document)
                  .off("click", ".yith-wcan a")
                  .on("click", ".yith-wcan a", function (t) {
                    e(this).yith_wcan_ajax_filters(t, this);
                  }),
                e(".widget_price_filter .price_slider_wrapper")
                  .off("click", ".button")
                  .on("click", ".button", function (t) {
                    t.preventDefault();
                    var o = e(this).closest("form"),
                      i = o.attr("action"),
                      a =
                        i + (-1 === i.indexOf("?") ? "?" : "&") + o.serialize(),
                      r = e(".woocommerce-viewing select.count");
                    if (r.length) {
                      var n = e(".woocommerce-viewing select.count").val();
                      n != r.find("option:not([disabled]):first").val() &&
                        (a += "&count=" + n);
                    }
                    e(".widget_price_filter").removeClass(
                      "yith-wcan-list-price-filter"
                    ),
                      l(a);
                  }),
                e(".porto_widget_price_filter")
                  .off("click", ".button")
                  .on("click", ".button", function (t) {
                    t.preventDefault();
                    var o = e(this).closest("form"),
                      i = o.attr("action"),
                      a = e(".woocommerce-viewing select.count"),
                      r = o.serializeArray(),
                      n = i;
                    if (
                      (e.each(r, function (t, o) {
                        e.trim(o.value) &&
                          (-1 == i.indexOf("?") && n == i
                            ? (n += "?")
                            : (n += "&"),
                          (n += o.name + "=" + e.trim(o.value)));
                      }),
                      a.length)
                    ) {
                      var s = e(".woocommerce-viewing select.count").val();
                      s != a.find("option:not([disabled]):first").val() &&
                        (-1 == n.indexOf("?")
                          ? (n += "?count=" + s)
                          : (n += "&count=" + s));
                    }
                    l(n);
                  }),
                e(
                  ".widget_layered_nav, .widget_rating_filter, .widget_layered_nav_filters"
                )
                  .off("click", "a")
                  .on("click", "a", function (t) {
                    if (!e(this).hasClass("yit-wcan-select-open")) {
                      t.preventDefault();
                      var o = e(this),
                        i = o.attr("href"),
                        a = e(".woocommerce-viewing select.count");
                      if (
                        o.hasClass("yith-wcan-reset-navigation") &&
                        !e(".archive-products .products:not(.is-shortcode)")
                          .length
                      )
                        return (window.location.href = i), !1;
                      if (a.length) {
                        var r = e(".woocommerce-viewing select.count").val();
                        r != a.find("option:not([disabled]):first").val() &&
                          (i = d(i, "count", r));
                      }
                      var n = o.closest(".yith-wcan-select");
                      return (
                        n.get(0) &&
                          n.parent().css({ opacity: 0, "z-index": -1 }),
                        l(i),
                        !1
                      );
                    }
                  }),
                e(".widget_layered_nav select")
                  .off("change")
                  .on("change", function (t) {
                    t.preventDefault();
                    var o,
                      i = e(this),
                      a = i.closest("form").find("input[type=hidden]").length
                        ? i
                            .closest("form")
                            .find("input[type=hidden]")
                            .attr("name")
                            .replace("filter_", "")
                        : i.attr("class").replace("dropdown_layered_nav_", ""),
                      r = i.val(),
                      n = e(".woocommerce-viewing select.count");
                    if (
                      ((o = d(
                        (o = (o = window.location.href)
                          .replace(/\/page\/\d+/, "")
                          .replace("&amp;", "&")
                          .replace("%2C", ",")),
                        "filtering",
                        "1"
                      )),
                      (o = d(o, "filter_" + a, r)),
                      n.length)
                    ) {
                      var s = e(".woocommerce-viewing select.count").val();
                      s != n.find("option:not([disabled]):first").val() &&
                        (o = d(o, "count", s));
                    }
                    return l(o, a), !1;
                  }))
              : e(document).on(
                  "change",
                  ".woocommerce-viewing select.count",
                  function () {
                    e(this).closest("form").trigger("submit");
                  }
                );
        };
      e(".skeleton-loading").on("skeleton-loaded", function () {
        var o = e(this);
        p && t.deleteTimeout(p),
          porto_woocommerce_variations_init(o),
          (o.hasClass("products") || o.hasClass("product")) &&
            e(document).trigger("yith_infs_added_elem"),
          (p = t.requestTimeout(function () {
            if (
              (porto_woocommerce_init(),
              c(),
              e("body").hasClass("single-product"))
            ) {
              t.WooVariationForm.init();
              var i = e(".product-image-slider");
              i.length && i.data("owl.carousel")
                ? i.trigger("refresh.owl.carousel")
                : t.WooProductImageSlider.initialize(),
                e(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger(
                  "init"
                ),
                e(document.body).hasClass("yith-booking") &&
                  e(document).trigger("yith-wcbk-init-booking-form");
            }
            o.find(".widget_shopping_cart_content").length &&
              e(document.body).trigger("wc_fragment_refresh");
          }, 100));
      }),
        e(function () {
          "undefined" != typeof yith_wcan &&
            ((yith_wcan.container = ".archive-products .products"),
            (yith_wcan.pagination = ".shop-loop-before"),
            (yith_wcan.result_count = ".shop-loop-after")),
            e(document).on("click", ".yith-wcan a", function (o) {
              var i = ".shop-loop-before",
                a = e(i),
                r = ".archive-products .products",
                n = ".archive-products .woocommerce-info",
                s = e(".sidebar [data-plugin-sticky]"),
                c = a.data("show");
              c &&
                e(i + ",.shop-loop-after")
                  .stop(!0)
                  .show()
                  .fadeTo(400, 0.8)
                  .block({ message: null, overlayCSS: { opacity: 0.2 } }),
                e(r).length
                  ? (e(r).html("").addClass("yith-wcan-loading"),
                    e(r).children(".porto-loading-icon").length ||
                      e(r).append('<i class="porto-loading-icon"></i>'))
                  : (e(n).html("").addClass("yith-wcan-loading products"),
                    e(n).children(".porto-loading-icon").length ||
                      e(n).append('<i class="porto-loading-icon"></i>')),
                s.get(0) && t.refreshStickySidebar(!1),
                e(
                  ".yith-woo-ajax-navigation, .yith-wcan-list-price-filter"
                ).addClass("loading"),
                t.scrolltoContainer(
                  c
                    ? a.hasClass("sticky") &&
                      a.prev(".filter-placeholder").length
                      ? a.prev(".filter-placeholder")
                      : a
                    : e(r)
                );
            }),
            e(document).ready(function () {
              u(!0);
            }),
            e(document).on("yith-wcan-ajax-filtered", function () {
              u();
            }),
            t.prdctfltr_ajax &&
              (e(document).on(
                "change",
                ".woocommerce-viewing select.count",
                function () {
                  e(this).closest("form").trigger("submit");
                }
              ),
              e(document).on(
                "click",
                ".woocommerce-pagination:not(.load-more) a.page-numbers",
                function (o) {
                  var i = e(".shop-loop-before");
                  t.scrolltoContainer(
                    i.hasClass("sticky") && i.prev(".filter-placeholder").length
                      ? i.prev(".filter-placeholder")
                      : i
                  );
                }
              )),
            e(document).on(
              "click",
              ".gridlist-toggle #grid, .gridlist-toggle #list",
              function (o) {
                o.preventDefault();
                var i = e(this);
                return (
                  i.hasClass("active") ||
                    (e(
                      ".gridlist-toggle #grid, .gridlist-toggle #list"
                    ).removeClass("active"),
                    i.addClass("active"),
                    e.cookie &&
                      e.cookie("gridcookie", i.attr("id"), { path: "/" }),
                    t.category_ajax
                      ? (-1 != js_porto_vars.use_skeleton_screen.indexOf("shop")
                          ? e(
                              ".archive-products ul.products, .archive-products .products-container"
                            )
                              .removeClass("grid")
                              .removeClass("list")
                              .addClass(i.attr("id"))
                          : e(".archive-products").addClass(
                              "porto-ajax-loading"
                            ),
                        l(window.location.href, void 0, !0))
                      : location.reload()),
                  !1
                );
              }
            );
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      t = t || {};
      var o = 300,
        i = !1;
      e.extend(t, {
        WooProductImageSlider: {
          defaults: { elements: ".product-image-slider" },
          initialize: function (t) {
            return (
              !!e.fn.owlCarousel &&
              ((this.$elements = t || e(this.defaults.elements)),
              this.$elements.length || e(".product-images-block").length
                ? (this.build(), this)
                : this)
            );
          },
          build: function () {
            var o = this,
              i = t.product_thumbs_count;
            if (
              t.product_zoom &&
              (!("ontouchstart" in document) ||
                ("ontouchstart" in document && t.product_zoom_mobile))
            ) {
              var a = {
                responsive: !0,
                zoomWindowFadeIn: 200,
                zoomWindowFadeOut: 100,
                zoomType: js_porto_vars.zoom_type,
                cursor: "grab",
              };
              if (
                ("lens" == js_porto_vars.zoom_type &&
                  ((a.scrollZoom = js_porto_vars.zoom_scroll),
                  (a.lensSize = js_porto_vars.zoom_lens_size),
                  (a.lensShape = js_porto_vars.zoom_lens_shape),
                  (a.containLensZoom = js_porto_vars.zoom_contain_lens),
                  (a.lensBorderSize = js_porto_vars.zoom_lens_border),
                  (a.borderColour = js_porto_vars.zoom_border_color)),
                "inner" == js_porto_vars.zoom_type
                  ? (a.borderSize = 0)
                  : (a.borderSize = js_porto_vars.zoom_border),
                !o.$elements.length)
              ) {
                var r = e(".product-images-block");
                r.length &&
                  r.find("img").each(function () {
                    var t = e(this);
                    (a.zoomContainer = t.parent()),
                      e.fn.elevateZoom
                        ? t.elevateZoom(a)
                        : setTimeout(function () {
                            e.fn.elevateZoom && t.elevateZoom(a);
                          }, 1e3);
                  });
              }
            }
            return (
              o.$elements.each(function () {
                var r = e(this),
                  n = r.closest(".product");
                n.length ||
                  (n = r
                    .closest(".product_layout, .product-layout-image")
                    .eq(0));
                var s = n.find(".product-thumbs-slider"),
                  c = n.find(".product-thumbnails-inner"),
                  l = n.find(".product-thumbs-vertical-slider"),
                  d = 0,
                  p = r.find("> *").length;
                r.find("> *:first-child").imagesLoaded(function () {
                  s
                    .owlCarousel({
                      rtl: t.rtl,
                      loop: !1,
                      autoplay: !1,
                      items: i,
                      nav: !1,
                      navText: ["", ""],
                      dots: !1,
                      rewind: !0,
                      margin: 8,
                      stagePadding: 1,
                      lazyLoad: !0,
                      onInitialized: function () {
                        o.selectThumb(null, s, 0),
                          s.find(".owl-item").length >= i &&
                            s.append(
                              '<div class="thumb-nav"><div class="thumb-prev"></div><div class="thumb-next"></div></div>'
                            );
                      },
                    })
                    .on("click", ".owl-item", function () {
                      o.selectThumb(r, s, e(this).index());
                    }),
                    l.length > 0 &&
                      (l
                        .slick({
                          dots: !1,
                          vertical: !0,
                          slidesToShow: i > 2 ? i - 1 : i,
                          slidesToScroll: 1,
                        })
                        .on("click", ".img-thumbnail", function () {
                          o.selectVerticalSliderThumb(
                            r,
                            l,
                            e(this).data("slick-index")
                          );
                        }),
                      o.selectVerticalSliderThumb(null, l, 0),
                      l.find(".porto-lazyload").length &&
                        t.requestTimeout(function () {
                          l.find(
                            ".slick-cloned .porto-lazyload:not(.lazy-load-loaded)"
                          ).each(function () {
                            e(this)
                              .attr("src", e(this).data("oi"))
                              .removeAttr("data-oi")
                              .addClass("lazy-load-loaded");
                          });
                        }, 100)),
                    o.selectVerticalThumb(null, c, 0),
                    c
                      .off("click", ".img-thumbnail")
                      .on("click", ".img-thumbnail", function () {
                        o.selectVerticalThumb(r, c, e(this).index());
                      }),
                    s
                      .off("click", ".thumb-prev")
                      .on("click", ".thumb-prev", function (t) {
                        var e = s.data("currentThumb");
                        o.selectThumb(r, s, --e);
                      }),
                    s
                      .off("click", ".thumb-next")
                      .on("click", ".thumb-next", function (t) {
                        var e = s.data("currentThumb");
                        o.selectThumb(r, s, ++e);
                      });
                  var n = [];
                  if (t.product_image_popup) {
                    var u = 0;
                    r.find("img").each(function () {
                      var t = {};
                      (t.src = e(this).attr("href")),
                        (t.title = e(this).attr("alt")),
                        (n[u] = t),
                        u++;
                    });
                  }
                  var h = void 0 !== r.data("items") ? r.data("items") : 1,
                    m =
                      void 0 !== r.data("responsive")
                        ? r.data("responsive")
                        : {},
                    f = void 0 !== r.data("centeritem");
                  for (var g in m) m[g] = { items: m[g] };
                  (r.owlCarousel({
                    rtl: t.rtl,
                    loop: p > 1,
                    autoplay: !1,
                    items: h,
                    responsive: m,
                    autoHeight: !0,
                    nav: !0,
                    navText: ["", ""],
                    dots: !1,
                    rewind: !0,
                    lazyLoad: !0,
                    center: f,
                    onInitialized: function () {
                      r.find(".owl-item.cloned").length &&
                        setTimeout(function () {
                          var t = r
                            .find(
                              ".owl-item.cloned .porto-lazyload:not(.lazy-load-loaded)"
                            )
                            .themePluginLazyLoad({
                              effect: "fadeIn",
                              effect_speed: 400,
                            });
                          t && t.loadAndDestroy && t.loadAndDestroy();
                        }, 100),
                        t.product_zoom &&
                          (!("ontouchstart" in document) ||
                            ("ontouchstart" in document &&
                              t.product_zoom_mobile)) &&
                          r.find("img").each(function () {
                            var t = e(this);
                            (a.zoomContainer = t.parent()),
                              e.fn.elevateZoom
                                ? t.elevateZoom(a)
                                : setTimeout(function () {
                                    e.fn.elevateZoom && t.elevateZoom(a);
                                  }, 1e3);
                          });
                    },
                    onTranslate: function (t) {
                      (d =
                        ((d = t.item.index - r.find(".cloned").length / 2) +
                          t.item.count) %
                        t.item.count),
                        o.selectThumb(null, s, d),
                        o.selectVerticalThumb(null, c, d),
                        o.selectVerticalSliderThumb(null, l, d);
                    },
                    onRefreshed: function () {
                      t.product_zoom &&
                        (!("ontouchstart" in document) ||
                          ("ontouchstart" in document &&
                            t.product_zoom_mobile)) &&
                        r.find("img").each(function () {
                          var t = e(this),
                            o =
                              void 0 !== t.attr("href")
                                ? t.attr("href")
                                : t.data("oi")
                                ? t.data("oi")
                                : t.attr("src"),
                            i = t.data("elevateZoom"),
                            r = t.data("src")
                              ? t.data("src")
                              : t.data("oi")
                              ? t.data("oi")
                              : t.attr("src");
                          void 0 !== i
                            ? (i.startZoom(), i.swaptheimage(r, o))
                            : e.fn.elevateZoom &&
                              ((a.zoomContainer = t.parent()),
                              t.elevateZoom(a));
                        });
                    },
                  }),
                  r.data("links", n),
                  t.product_image_popup) &&
                    r
                      .next()
                      .off("click")
                      .on("click", function (o) {
                        o.preventDefault(),
                          e.fn.magnificPopup &&
                            (e.magnificPopup.close(),
                            e.magnificPopup.open(
                              e.extend(!0, {}, t.mfpConfig, {
                                items: r.data("links"),
                                gallery: { enabled: !0 },
                                type: "image",
                              }),
                              d
                            ));
                      });
                });
              }),
              o
            );
          },
          selectThumb: function (t, a, r) {
            if (!i && a.length) {
              i = !0;
              var n = a.find(".owl-item").length,
                s = [],
                c = 0;
              (r = (r + n) % n),
                t && t.trigger("to.owl.carousel", [r, o, !0]),
                a.find(".owl-item").removeClass("selected"),
                a.find(".owl-item:eq(" + r + ")").addClass("selected"),
                a.data("currentThumb", r),
                a.find(".owl-item.active").each(function () {
                  s[c++] = e(this).index();
                }),
                -1 == e.inArray(r, s) &&
                  (Math.abs(r - s[0]) > Math.abs(r - s[s.length - 1])
                    ? a.trigger("to.owl.carousel", [
                        (r - s.length + 1) % n,
                        o,
                        !0,
                      ])
                    : a.trigger("to.owl.carousel", [r % n, o, !0])),
                (i = !1);
            }
          },
          selectVerticalSliderThumb: function (t, a, r) {
            if (!i && a.length) {
              i = !0;
              var n = a[0].slick.slideCount,
                s = [],
                c = 0;
              (r = (r + n) % n),
                t && t.trigger("to.owl.carousel", [r, o, !0]),
                a.find(".img-thumbnail").removeClass("selected"),
                a.find(".img-thumbnail:eq(" + r + ")").addClass("selected"),
                a.data("currentThumb", r),
                a.find(".img-thumbnail.slick-active").each(function () {
                  s[c++] = e(this).index();
                }),
                -1 == e.inArray(r, s) &&
                  (Math.abs(r - s[0]) > Math.abs(r - s[s.length - 1])
                    ? a.get(0).slick.goTo((r - s.length + 1) % n, !1)
                    : a.get(0).slick.goTo(r % n, !1)),
                (i = !1);
            }
          },
          selectVerticalThumb: function (t, e, a) {
            if (!i && e.length) {
              i = !0;
              var r = e.find(".img-thumbnail").length;
              (a = (a + r) % r),
                t && t.trigger("to.owl.carousel", [a, o, !0]),
                e.find(".img-thumbnail").removeClass("selected"),
                e.find(".img-thumbnail:eq(" + a + ")").addClass("selected"),
                e.data("currentThumb", a),
                (i = !1);
            }
          },
        },
      });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      (t = t || {}),
        e.extend(t, {
          WooQuickView: {
            initialize: function () {
              return this.events(), this;
            },
            events: function () {
              return (
                e(document).on("click", ".quickview", function (o) {
                  if (
                    (o.preventDefault(),
                    !e.fn.elevateZoom &&
                      !e("#porto-script-jquery-elevatezoom").length)
                  ) {
                    var i = document.createElement("script");
                    (i.id = "porto-script-jquery-elevatezoom"),
                      e(i)
                        .appendTo("body")
                        .attr(
                          "src",
                          js_porto_vars.ajax_loader_url.replace(
                            "/images/ajax-loader@2x.gif",
                            "/js/libs/jquery.elevatezoom.min.js"
                          )
                        );
                  }
                  var a = e(this).attr("data-id");
                  function r() {
                    var o = {
                      href: t.ajax_url,
                      ajax: {
                        data: {
                          action: "porto_product_quickview",
                          variation_flag:
                            "undefined" !=
                            typeof wc_add_to_cart_variation_params,
                          pid: a,
                          nonce: js_porto_vars.porto_nonce,
                        },
                      },
                      type: "ajax",
                      helpers: { overlay: { locked: !0, fixed: !0 } },
                      tpl: {
                        error:
                          '<p class="fancybox-error">' +
                          t.request_error +
                          "</p>",
                        closeBtn:
                          '<a title="' +
                          js_porto_vars.popup_close +
                          '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next:
                          '<a title="' +
                          js_porto_vars.popup_next +
                          '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev:
                          '<a title="' +
                          js_porto_vars.popup_prev +
                          '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                      },
                      autoSize: !0,
                      autoWidth: !0,
                      afterShow: function (o) {
                        t.requestTimeout(function () {
                          (void 0 === o || o) && porto_woocommerce_init(),
                            t.WooProductImageSlider.initialize(
                              e(".quickview-wrap-" + a).find(
                                ".product-image-slider"
                              )
                            ),
                            e(document.body).hasClass("yith-booking") &&
                              e(document).trigger(
                                "yith-wcbk-init-booking-form"
                              );
                          var i = e(".quickview-wrap-" + a).find(
                            "form.variations_form"
                          );
                          i.length > 0 && i.wc_variation_form(),
                            e(document.body).trigger("porto_init_countdown", [
                              e(".quickview-wrap-" + a),
                            ]);
                        }, 200);
                      },
                      onUpdate: function () {
                        t.requestTimeout(function () {
                          (-1 !=
                            js_porto_vars.use_skeleton_screen.indexOf(
                              "quickview"
                            ) &&
                            js_porto_vars.quickview_skeleton) ||
                            porto_woocommerce_init();
                          var t = e(".quickview-wrap-" + a).find(
                            ".product-image-slider"
                          );
                          void 0 !== t.data("owl.carousel") &&
                            void 0 !== t.data("owl.carousel")._invalidated &&
                            (t.data("owl.carousel")._invalidated.width = !0),
                            t.trigger("refresh.owl.carousel"),
                            e(document.body).trigger("porto_init_countdown", [
                              e(".quickview-wrap-" + a),
                            ]);
                        }, 300);
                      },
                    };
                    -1 !=
                      js_porto_vars.use_skeleton_screen.indexOf("quickview") &&
                    js_porto_vars.quickview_skeleton
                      ? (delete o.href,
                        delete o.ajax,
                        (o.type = "inline"),
                        e.fancybox.open(js_porto_vars.quickview_skeleton, o),
                        e.ajax({
                          url: t.ajax_url,
                          type: "post",
                          dataType: "html",
                          data: {
                            action: "porto_product_quickview",
                            variation_flag:
                              "undefined" !=
                              typeof wc_add_to_cart_variation_params,
                            pid: a,
                            nonce: js_porto_vars.porto_nonce,
                          },
                          success: function (i) {
                            var a = e(i);
                            a.imagesLoaded(function () {
                              e(".skeleton-body.product").replaceWith(a),
                                t.WooQtyField.initialize(),
                                e(window).trigger("resize"),
                                o.afterShow.call(!1);
                            });
                          },
                        }))
                      : e.fancybox(o);
                  }
                  if (e.fn.fancybox) r();
                  else if (!e("#porto-script-jquery-fancybox").length) {
                    var n = document.createElement("script");
                    (n.id = "porto-script-jquery-fancybox"),
                      e(n)
                        .appendTo("body")
                        .on("load", function () {
                          r();
                        })
                        .attr(
                          "src",
                          js_porto_vars.ajax_loader_url.replace(
                            "/images/ajax-loader@2x.gif",
                            "/js/libs/jquery.fancybox.min.js"
                          )
                        );
                  }
                  return !1;
                }),
                "undefined" != typeof wc_add_to_cart_params &&
                  e(document.body).on(
                    "click",
                    ".single-product .single_add_to_cart_button:not(.disabled)",
                    function (o) {
                      if (
                        e(this)
                          .closest(".single-product")
                          .hasClass("product-type-external") ||
                        e(this)
                          .closest(".single-product")
                          .hasClass("product-type-grouped")
                      )
                        return !0;
                      o.preventDefault();
                      var i = e(this),
                        a = i.val(),
                        r = i
                          .closest("form")
                          .find('input[name="variation_id"]')
                          .val(),
                        n = i
                          .closest("form")
                          .find('input[name="quantity"]')
                          .val();
                      if (i.hasClass("loading")) return !1;
                      i.removeClass("added"),
                        i.addClass("loading"),
                        i.parent().addClass("porto-ajax-loading"),
                        i.siblings(".porto-loading-icon").length ||
                          e(
                            '<span class="porto-loading-icon"></span>'
                          ).insertAfter(i);
                      var s = {
                        action: "porto_add_to_cart",
                        product_id: r || a,
                        quantity: n,
                      };
                      if (r) {
                        var c = i.closest("form").find(".variations select");
                        c.length &&
                          c.each(function () {
                            var t = e(this).data("attribute_name"),
                              o = e(this).val();
                            t && o && (s[t] = o);
                          });
                      }
                      e(document.body).trigger("adding_to_cart", [i, s]),
                        e.ajax({
                          type: "POST",
                          url: t.ajax_url,
                          data: s,
                          dataType: "json",
                          success: function (t) {
                            i.parent().removeClass("porto-ajax-loading"),
                              t &&
                                (t.error && t.product_url
                                  ? (window.location = t.product_url)
                                  : "yes" !==
                                    wc_add_to_cart_params.cart_redirect_after_add
                                  ? e(document.body).trigger("added_to_cart", [
                                      t.fragments,
                                      t.cart_hash,
                                      i,
                                    ])
                                  : (window.location =
                                      wc_add_to_cart_params.cart_url));
                          },
                        });
                    }
                  ),
                this
              );
            },
          },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      (t = t || {}),
        e.extend(t, {
          WooQtyField: {
            initialize: function () {
              return this.build().events(), this;
            },
            qty_handler: function () {
              var t = e(this);
              if (
                t
                  .closest(".quantity")
                  .next(".add_to_cart_button[data-quantity]").length
              ) {
                var o = t.val();
                o &&
                  t
                    .closest(".quantity")
                    .next(".add_to_cart_button[data-quantity]")
                    .attr("data-quantity", o);
              }
            },
            build: function () {
              var t = this;
              return (
                e(
                  "div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)"
                )
                  .addClass("buttons_added")
                  .append(
                    '<button type="button" value="+" class="plus">+</button>'
                  )
                  .prepend(
                    '<button type="button" value="-" class="minus">-</button>'
                  ),
                e("input.qty:not(.product-quantity input.qty)").each(
                  function () {
                    var t = parseFloat(e(this).attr("min"));
                    t &&
                      t > 0 &&
                      parseFloat(e(this).val()) < t &&
                      e(this).val(t);
                  }
                ),
                e("input.qty:not(.product-quantity input.qty)")
                  .off("change", t.qty_handler)
                  .on("change", t.qty_handler),
                e(document)
                  .off("click", ".quantity .plus, .quantity .minus")
                  .on(
                    "click",
                    ".quantity .plus, .quantity .minus",
                    function () {
                      var t = e(this).closest(".quantity").find(".qty"),
                        o = parseFloat(t.val()),
                        i = parseFloat(t.attr("max")),
                        a = parseFloat(t.attr("min")),
                        r = t.attr("step");
                      (o && "" !== o && "NaN" !== o) || (o = 0),
                        ("" !== i && "NaN" !== i) || (i = ""),
                        ("" !== a && "NaN" !== a) || (a = 0),
                        ("any" !== r &&
                          "" !== r &&
                          void 0 !== r &&
                          "NaN" !== parseFloat(r)) ||
                          (r = 1),
                        e(this).is(".plus")
                          ? i && (i == o || o > i)
                            ? t.val(i)
                            : t.val(o + parseFloat(r))
                          : a && (a == o || o < a)
                          ? t.val(a)
                          : o > 0 && t.val(o - parseFloat(r)),
                        t.trigger("change");
                    }
                  ),
                t
              );
            },
            events: function () {
              var t = this;
              return (
                e(document).ajaxComplete(function (e, o, i) {
                  t.build();
                }),
                t
              );
            },
          },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      t = t || {};
      var o = 300;
      e.extend(t, {
        WooVariationForm: {
          initialize: function () {
            return this.init().events(), this;
          },
          init: function () {
            return (
              e(".variations_form").each(function () {
                var t = e(this).find(".reset_variations");
                "hidden" == t.css("visibility") && t.hide();
              }),
              this
            );
          },
          events: function () {
            e(document).on(
              "check_variations",
              ".variations_form",
              function (t, o, i) {
                var a = e(this).find(".reset_variations");
                "hidden" == a.css("visibility") && a.hide();
              }
            ),
              e(document).on("reset_image", ".variations_form", function (i) {
                var a = e(this).closest(".product, .product-col"),
                  r = a.find("div.product-images .woocommerce-main-image");
                a.hasClass("product-col")
                  ? (r = a.find("div.product-image .inner img:first-child"))
                  : a.hasClass("porto-tb-item") &&
                    (r = a.find(".porto-tb-featured-image img").eq(0));
                var n,
                  s = r.attr("data-o_src"),
                  c = r.attr("data-o_title"),
                  l = r.attr("data-o_href"),
                  d = a.find(".woocommerce-main-thumb"),
                  p = d.attr("data-o_src"),
                  u = a.find(".product-image-slider"),
                  h = a.find(".product-thumbs-slider");
                u.length &&
                  (u.trigger("to.owl.carousel", [0, o, !0]),
                  (n = u.data("links"))),
                  h.length &&
                    (h.trigger("to.owl.carousel", [0, o, !0]),
                    h.find(".owl-item:eq(0)").trigger("click")),
                  s &&
                    (r
                      .attr("src", s)
                      .attr("srcset", "")
                      .attr("alt", c)
                      .attr("href", l),
                    r.each(function () {
                      var t = e(this).data("elevateZoom");
                      void 0 !== t &&
                        t.swaptheimage(
                          e(this).attr("src"),
                          e(this).attr("src")
                        );
                    }),
                    t.product_image_popup &&
                      void 0 !== n &&
                      ((n[0].src = l), (n[0].title = c))),
                  p && d.attr("src", p);
              }),
              e(document).on(
                "found_variation",
                ".variations_form",
                function (i, a) {
                  if (void 0 !== a) {
                    var r,
                      n = e(this).closest(".product, .product-col"),
                      s = n.find(".product-image-slider"),
                      c = n.find(".product-thumbs-slider");
                    s.length &&
                      (s.trigger("to.owl.carousel", [0, o, !0]),
                      (r = s.data("links"))),
                      c.length &&
                        (c.trigger("to.owl.carousel", [0, o, !0]),
                        c.find(".owl-item:eq(0)").trigger("click"));
                    var l = n.find("div.product-images .woocommerce-main-image")
                        .length
                        ? n.find("div.product-images .woocommerce-main-image")
                        : e(
                            ".single-product div.product-images .woocommerce-main-image"
                          ),
                      d = l.attr("data-o_src"),
                      p = l.attr("data-o_title"),
                      u = l.attr("data-o_href"),
                      h = n.find(".woocommerce-main-thumb"),
                      m = h.attr("data-o_src"),
                      f = a.image_src,
                      g = a.image_link,
                      _ = a.image_title,
                      v = a.image_thumb;
                    n.hasClass("product-col")
                      ? ((l = n.find(
                          "div.product-image .inner img:first-child"
                        )),
                        (f = a.image.thumb_src))
                      : n.hasClass("porto-tb-item") &&
                        ((l = n.find(".porto-tb-featured-image img").eq(0)),
                        (f = a.image.thumb_src)),
                      d ||
                        ((d = l.attr("data-oi")
                          ? l.attr("data-oi")
                          : l.attr("src")
                          ? l.attr("src")
                          : ""),
                        l.attr("data-o_src", d)),
                      u ||
                        ((u = l.attr("href") ? l.attr("href") : ""),
                        l.attr("data-o_href", u)),
                      p ||
                        ((p = l.attr("alt") ? l.attr("alt") : ""),
                        l.attr("data-o_title", p)),
                      m ||
                        ((m = h.attr("data-oi")
                          ? h.attr("data-oi")
                          : h.attr("src")
                          ? h.attr("src")
                          : ""),
                        h.attr("data-o_src", m)),
                      f
                        ? (l.attr("src", f),
                          l.attr("srcset", ""),
                          l.attr("alt", _),
                          l.attr("href", g),
                          h.attr("src", v),
                          t.product_image_popup &&
                            void 0 !== r &&
                            ((r[0].src = g), (r[0].title = _)))
                        : (l.attr("src", d),
                          l.attr("srcset", ""),
                          l.attr("alt", p),
                          l.attr("href", u),
                          h.attr("src", m),
                          t.product_image_popup &&
                            void 0 !== r &&
                            ((r[0].src = u), (r[0].title = p))),
                      l.each(function () {
                        var t = e(this).data("elevateZoom");
                        void 0 !== t &&
                          t.swaptheimage(
                            e(this).attr("src"),
                            e(this).attr("src")
                          );
                      });
                  }
                }
              );
            var i = null;
            return (
              e(document).on(
                "found_variation reset_image",
                ".variations_form",
                function (o, a) {
                  e(this).closest(".fancybox-inner").length &&
                    e.fancybox &&
                    (e(window).off("resize.fb", e.fancybox.update),
                    i && t.deleteTimeout(i),
                    (i = t.requestTimeout(function () {
                      e(window).on("resize.fb", e.fancybox.update), (i = !1);
                    }, 160)));
                }
              ),
              this
            );
          },
        },
      });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      (t = t || {}),
        e.extend(t, {
          WooEvents: {
            initialize: function () {
              return this.events(), this;
            },
            events: function () {
              var t = this;
              return (
                e(".wcml-switcher li").on("click", function () {
                  if ("disabled" != e(this).parent().attr("disabled")) {
                    var o = e(this).attr("rel");
                    t.loadCurrency(o);
                  }
                }),
                e(".woocs-switcher li").on("click", function () {
                  if ("disabled" != e(this).parent().attr("disabled")) {
                    var o = e(this).attr("rel");
                    t.loadWoocsCurrency(o);
                  }
                }),
                t
              );
            },
            loadCurrency: function (o) {
              e(".wcml-switcher").attr("disabled", "disabled"),
                e(".wcml-switcher").append('<li class="loading"></li>');
              e.ajax({
                type: "post",
                url: t.ajax_url,
                data: { action: "wcml_switch_currency", currency: o },
                success: function (t) {
                  e(".wcml-switcher").removeAttr("disabled"),
                    e(".wcml-switcher").find(".loading").remove(),
                    (window.location = window.location.href);
                },
              });
            },
            loadWoocsCurrency: function (t) {
              e(".woocs-switcher").attr("disabled", "disabled"),
                e(".woocs-switcher").append('<li class="loading"></li>');
              var o = window.location.href;
              o = (o = o.split("?"))[0];
              var i = "?";
              (woocs_array_of_get.currency = t),
                Object.keys(woocs_array_of_get).length > 0 &&
                  jQuery.each(woocs_array_of_get, function (t, e) {
                    i = i + "&" + t + "=" + e;
                  }),
                (window.location = o + i);
            },
            removeParameterFromUrl: function (t, e) {
              return t
                .replace(new RegExp("[?&]" + e + "=[^&#]*(#.*)?$"), "$1")
                .replace(new RegExp("([?&])" + e + "=[^&]*&"), "$1");
            },
          },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      e(document).ready(function () {
        void 0 !== t.WooQtyField && t.WooQtyField.initialize(),
          void 0 !== t.WooQuickView && t.WooQuickView.initialize(),
          void 0 !== t.WooEvents && t.WooEvents.initialize(),
          "ontouchstart" in document
            ? (e("#mini-cart .cart-head").on("click", function (t) {
                e(this).parent().toggleClass("open");
              }),
              e("html,body").on("click", function (t) {
                e("#mini-cart").hasClass("open") &&
                  !e(t.target).closest("#mini-cart").length &&
                  e("#mini-cart").removeClass("open");
              }))
            : e(".mini-cart").on("hide.bs.dropdown", function () {
                return !1;
              }),
          e(document).on("tabactivate", ".woocommerce-tabs", function (o, i) {
            var a = e(i).attr("aria-controls"),
              r = e('[aria-labelledby="' + a + '"');
            t.refreshVCContent(r);
          });
      });
    }.apply(this, [window.theme, jQuery]),
    (function (t, e, o) {
      e(document).ready(function () {
        t.WooVariationForm.initialize(),
          "function" == typeof t.initAsync
            ? (t.WooProductImageSlider.initialize(), porto_woocommerce_init())
            : e.when(t.asyncDeferred).done(function () {
                t.WooProductImageSlider.initialize(), porto_woocommerce_init();
              }),
          void 0 !== t.salesPopup &&
            !document.getElementById("yith-woocompare") &&
            window.Worker &&
            t.salesPopup.initialize(),
          e(window).on("vc_reload", function () {
            porto_woocommerce_init(), e(".type-product").addClass("product");
          }),
          e(document).on(
            "click",
            ".porto-product-filters-toggle a",
            function (o) {
              o.preventDefault(),
                e(this)
                  .closest(".porto-product-filters-toggle")
                  .toggleClass("opened");
              var i,
                a = e(this)
                  .closest("#main")
                  .find(".main-content")
                  .find("ul.products"),
                r = e(this).closest("#main").find(".main-content-wrap");
              if (
                (r.toggleClass("opened"),
                (i = r.hasClass("opened") ? -1 : 1),
                a.hasClass("grid"))
              )
                for (var n = 0, s = 0, c = 0, l = 0, d = 1; d <= 8; d++)
                  !n &&
                    a.hasClass("pcols-lg-" + d) &&
                    ((n = d),
                    d + i >= 1 &&
                      (a.removeClass("pcols-lg-" + d),
                      a.addClass("pcols-lg-" + (d + i)))),
                    !s &&
                      a.hasClass("pcols-md-" + d) &&
                      ((s = d),
                      d + i >= 1 &&
                        (a.removeClass("pcols-md-" + d),
                        -1 === i && a.addClass("pcols-sm-" + d),
                        a.addClass("pcols-md-" + (d + i)))),
                    !c &&
                      a.hasClass("pwidth-lg-" + d) &&
                      ((c = d),
                      d + i >= 1 &&
                        (a.removeClass("pwidth-lg-" + d),
                        a.addClass("pwidth-lg-" + (d + i)))),
                    !l &&
                      a.hasClass("pwidth-md-" + d) &&
                      ((l = d),
                      d + i >= 1 &&
                        (a.removeClass("pwidth-md-" + d),
                        a.addClass("pwidth-md-" + (d + i))));
              return (
                t.requestTimeout(function () {
                  e(window).trigger("scroll");
                }, 300),
                r.hasClass("opened")
                  ? e.cookie("porto_horizontal_filter", "opened")
                  : e.cookie("porto_horizontal_filter", "closed"),
                !1
              );
            }
          ),
          e.cookie &&
            "opened" == e.cookie("porto_horizontal_filter") &&
            e("#main .porto-products-filter-body").length &&
            !t.isTablet() &&
            (e(".porto-product-filters-toggle a").trigger("click"),
            e(
              "#main .porto-products-filter-body [data-plugin-sticky]:not(.manual)"
            ).addClass("manual"),
            setTimeout(function () {
              var o = e(
                  "#main .porto-products-filter-body [data-plugin-sticky].manual"
                ),
                i = o.data("plugin-options");
              o.removeClass("manual").themeSticky(i),
                t.requestTimeout(function () {
                  e(window).trigger("scroll");
                }, 100);
            }, 500)),
          e(document).on(
            "click",
            ".porto-product-filters.style2 .widget-title",
            function (t) {
              return (
                t.preventDefault(),
                e(this).next().is(":hidden")
                  ? (e(".porto-product-filters.style2 .widget-title")
                      .next()
                      .hide(),
                    e(".porto-product-filters.style2 .widget").removeClass(
                      "opened"
                    ),
                    e(this).next().show(),
                    e(this)
                      .next()
                      .find('input[type="text"]:first-child')
                      .focus())
                  : e(this).next().hide(),
                e(this).parent().toggleClass("opened"),
                !1
              );
            }
          ),
          e("body").on("click", function (t) {
            e(t.target).is(".porto-product-filters") ||
              e(t.target).is(".porto-product-filters *") ||
              (e(".porto-product-filters.style2 .widget-title").next().hide(),
              e(".porto-product-filters.style2 .widget").removeClass("opened"));
          }),
          e("body").on(
            "click",
            "#login-form-popup form .woocommerce-Button",
            function (o) {
              var i = e(this),
                a = i.closest("form"),
                r = i.hasClass("login-btn");
              r || i.hasClass("register-btn") || (r = a.hasClass("login")),
                a.find("#email").val(a.find("#username").val()),
                a
                  .find("p.status")
                  .show()
                  .text("Please wait...")
                  .addClass("loading"),
                a.find("button[type=submit]").attr("disabled", "disabled"),
                e.ajax({
                  type: "POST",
                  dataType: "json",
                  url: t.ajax_url,
                  data:
                    a.serialize() +
                    "&action=porto_account_login_popup_" +
                    (r ? "login" : "register"),
                  success: function (t) {
                    a
                      .find("p.status")
                      .html(t.message.replace("/<script.*?/script>/s", ""))
                      .removeClass("loading"),
                      a.find("button[type=submit]").removeAttr("disabled"),
                      !0 === t.loggedin && window.location.reload();
                  },
                }),
                o.preventDefault();
            }
          );
        var o = {};
        e(document).on(
          "click",
          ".porto-products.show-category .product-categories a",
          function (t) {
            t.preventDefault();
            var o = e(this),
              i = o.closest(".porto-products").find(".pagination-form"),
              a = o.closest(".porto-products").attr("id"),
              r = [];
            e(this).parent().siblings().removeClass("current"),
              e(this).parent().addClass("current"),
              void 0 !== o.data("sort_id") &&
                (i.find('input[name="orderby"]').val(o.data("sort_id")),
                (r = o.data("sort_id")),
                i.find('input[name="category"]').val("")),
              void 0 !== o.data("cat_id") &&
                (void 0 === o.data("sort_id") &&
                  (i
                    .find('input[name="orderby"]')
                    .val(i.find('input[name="original_orderby"]').val()),
                  (r = i.find('input[name="original_orderby"]').val())),
                void 0 === i.data("original_cat_id") &&
                  (i.data(
                    "original_cat_id",
                    i.find('input[name="category"]').val()
                  ),
                  (r = i.find('input[name="category"]').val())),
                o.data("cat_id")
                  ? (i.find('input[name="category"]').val(o.data("cat_id")),
                    (r = o.data("cat_id")))
                  : i.data("original_cat_id")
                  ? (i
                      .find('input[name="category"]')
                      .val(i.data("original_cat_id")),
                    (r = i.data("original_cat_id")))
                  : (i.find('input[name="category"]').val(""), (r = "")));
            var n =
              i.serialize() +
              "&product-page=1&action=porto_woocommerce_shortcodes_products&nonce=" +
              js_porto_vars.porto_nonce;
            o.closest(".porto-products")
              .find("ul.products")
              .trigger("porto_update_products", [n, "", o, a, r]);
          }
        ),
          e(document).on(
            "click",
            ".porto-products .page-numbers a",
            function (o) {
              var i,
                a = e(this),
                r = a.closest(".porto-products").find("ul.products"),
                n = r.data("cur_page"),
                s = r.data("max_page"),
                c = a.closest(".porto-products").find(".pagination-form");
              if (
                (o.preventDefault(),
                a.closest(".pagination").hasClass("load-more"))
              ) {
                if (!n || !s || ++n > s) return;
                (i = "load_more"),
                  a.data("text", a.text()),
                  a.text(js_porto_vars.loader_text);
              } else {
                var l = new RegExp("product-page(=|/)([^(&|/)]*)", "i").exec(
                  this.href
                );
                (n = (l && unescape(l[2])) || ""), (i = "default");
              }
              var d = n ? "&product-page=" + escape(n) : "",
                p =
                  c.serialize() +
                  d +
                  "&action=porto_woocommerce_shortcodes_products&nonce=" +
                  js_porto_vars.porto_nonce;
              r.trigger("porto_update_products", [p, i, a]),
                "default" == i && t.scrolltoContainer(r);
            }
          ),
          e(document).on(
            "porto_update_products",
            "ul.products",
            function (t, i, a, r, n, s) {
              var c = e(this);
              if (null == o[n] || -1 == Object.keys(o[n]).indexOf(s))
                porto_ajax_load_products(c, i, a, o, n, s);
              else {
                var l = o[n][s];
                c.css("opacity", 0),
                  c.animate({ opacity: 1 }, 400, function () {
                    c.css("opacity", "");
                  }),
                  porto_ajax_load_products_success(c, l, a);
              }
            }
          );
      }),
        e(
          ".porto-onepage-category.show-products .category-section .sub-category"
        )
          .children(".cat-item")
          .addClass("product-col"),
        e(document).on(
          "click",
          ".porto-onepage-category .sub-category a",
          function (t) {
            var o,
              i,
              a = e(this);
            (o =
              ((o = new RegExp('cat-item-([^( |")]*)', "i").exec(
                a.parent().attr("class")
              )) &&
                unescape(o[1])) ||
              "") &&
              ((i =
                a.closest(".category-details").find(".ajax-form").serialize() +
                "&action=porto_woocommerce_shortcodes_products&category_description=true&category=" +
                o +
                "&nonce=" +
                js_porto_vars.porto_nonce),
              t.preventDefault(),
              a
                .closest(".category-section")
                .find(".woocommerce > ul.products")
                .trigger("porto_update_products", [i, ""]));
          }
        );
      var i = null;
      if (
        (e(document).on("porto_theme_init", function () {
          if (
            e(".porto-onepage-category.show-products").length &&
            "undefined" != typeof bootstrap
          ) {
            (document.body.style.position = "relative"),
              (i = new bootstrap.ScrollSpy("body", {
                target: ".porto-onepage-category.show-products .category-list",
                offset:
                  t.StickyHeader.sticky_height +
                  t.adminBarHeight() +
                  t.sticky_nav_height +
                  20,
              }));
            var o,
              a = 0;
            window.addEventListener(
              "scroll",
              function () {
                if (
                  e(
                    ".porto-onepage-category.show-products.ajax-load .category-section:not(.ajax-loaded)"
                  ).length
                ) {
                  var t = e(window).scrollTop();
                  (o =
                    a > t
                      ? e(
                          ".porto-onepage-category.show-products.ajax-load .category-section:not(.ajax-loaded)"
                        ).last()
                      : e(
                          ".porto-onepage-category.show-products.ajax-load .category-section:not(.ajax-loaded)"
                        ).eq(0)),
                    (a = e(window).scrollTop()),
                    !o.closest(".porto-onepage-category").hasClass("loading") &&
                      o.offset().top <=
                        e(window).scrollTop() + 0.7 * e(window).innerHeight() &&
                      o.trigger("porto_load_category_products");
                }
              },
              { passive: !0 }
            );
          }
          var r = e(".single-product .sticky-product"),
            n = e(document.body).hasClass("elementor-editor-active");
          if (r.length || n) {
            n &&
              elementorFrontend &&
              elementorFrontend.hooks &&
              elementorFrontend.hooks.addAction(
                "frontend/element_ready/porto_cp_addcart_sticky.default",
                function (t) {
                  (r = e(".single-product .sticky-product")),
                    window.dispatchEvent(new Event("scroll"));
                }
              ),
              window.addEventListener(
                "scroll",
                function () {
                  var o = e(window).scrollTop(),
                    i = t.adminBarHeight() + t.StickyHeader.sticky_height;
                  e("form.cart").length &&
                  e("form.cart").offset().top + e("form.cart").height() / 2 <=
                    o + i
                    ? (r.removeClass("hide"),
                      r.hasClass("pos-bottom") || r.css("top", i))
                    : r.addClass("hide");
                },
                { passive: !0 }
              ),
              r.find(".add-to-cart .button").on("click", function (t) {
                t.preventDefault(),
                  e(".single-product form .quantity .qty").val(
                    r.find(".add-to-cart .qty").val()
                  ),
                  e(".single-product form .single_add_to_cart_button").trigger(
                    "click"
                  );
              }),
              e(".single-product .entry-summary .quantity")
                .clone()
                .prependTo(".single-product .sticky-product .add-to-cart");
            var s = r.find(".sticky-image img").data("oi")
                ? r.find(".sticky-image img").data("oi")
                : r.find(".sticky-image img").attr("src"),
              c = r.find(".price").html(),
              l = r.find(".availability").html(),
              d = !1;
            e(document).on(
              "found_variation reset_data",
              ".variations_form",
              function (t, e) {
                e
                  ? ((d = !0),
                    r
                      .find(".sticky-image img")
                      .attr("src", e.image_thumb ? e.image_thumb : s),
                    r.find(".price").replaceWith(e.price_html),
                    r
                      .find(".availability")
                      .html(e.availability_html ? e.availability_html : l))
                  : d &&
                    ((d = !1),
                    r.find(".sticky-image img").attr("src", s),
                    r.find(".price").html(c),
                    r.find(".availability").html(l));
              }
            );
          }
          if (
            1 === e(".shop-loop-before").length &&
            e(".mobile-sidebar").length
          ) {
            var p = e(".porto-scroll-progress.fixed-under-header"),
              u = 0;
            if (p.length) {
              var h = !1;
              p.is(":hidden") && (p.show(), (h = !0)),
                (u = p.height()),
                h && p.hide();
            } else u = 0;
            var m = function () {
              var o = e(".shop-loop-before");
              o.prev(".filter-placeholder").length ||
                e('<div class="filter-placeholder m-0"></div>').insertBefore(o);
              var i = o.prev(".filter-placeholder"),
                a = e(window).scrollTop(),
                r = t.adminBarHeight() + t.StickyHeader.sticky_height + u - 1;
              e("html.filter-sidebar-opened").length
                ? i.css("height", "")
                : i.offset().top <= a + r
                ? (i.css(
                    "height",
                    o.outerHeight() + parseInt(o.css("margin-bottom"))
                  ),
                  o.addClass("sticky").css("top", r))
                : (i.css("height", ""), o.removeClass("sticky"));
            };
            window.innerWidth < 992 &&
              (window.removeEventListener("scroll", m),
              window.addEventListener("scroll", m, { passive: !0 }),
              m());
            var f = null,
              g = window.innerWidth;
            e(window).on("resize", function () {
              g != window.innerWidth &&
                (f && (t.deleteTimeout(f), (f = !1)),
                window.innerWidth < 992
                  ? (f = t.requestTimeout(function () {
                      window.removeEventListener("scroll", m),
                        window.addEventListener("scroll", m, { passive: !0 }),
                        e(window).trigger("scroll");
                    }, 100))
                  : (window.removeEventListener("scroll", m),
                    e(".shop-loop-before")
                      .removeClass("sticky")
                      .css("top", "")
                      .prev(".filter-placeholder")
                      .css("height", "")),
                (g = window.innerWidth));
            });
          }
        }),
        e(document).on(
          "click",
          ".porto-onepage-category.show-products .category-list .nav-link",
          function (o) {
            var i = e(e(this).attr("href"));
            i.length &&
              (o.preventDefault(),
              e(this)
                .closest(".porto-onepage-category")
                .hasClass("ajax-load") &&
                !i.hasClass("ajax-loaded") &&
                i.trigger("porto_load_category_products"),
              i.closest(".porto-onepage-category").addClass("moving"),
              e("html, body")
                .stop()
                .animate(
                  {
                    scrollTop:
                      i.offset().top -
                      t.StickyHeader.sticky_height -
                      t.adminBarHeight() -
                      t.sticky_nav_height -
                      10,
                  },
                  600,
                  "easeOutQuad",
                  function () {
                    i.closest(".porto-onepage-category").removeClass("moving");
                  }
                ));
          }
        ),
        e(document).on(
          "porto_load_category_products",
          ".category-section",
          function () {
            var o = e(this),
              a = o.attr("id").replace("category-", "");
            if (
              o.closest(".porto-onepage-category").hasClass("loading") ||
              o.closest(".porto-onepage-category").hasClass("moving") ||
              o.hasClass("ajax-loaded")
            )
              return !1;
            o.css("min-height", 200),
              o.addClass("yith-wcan-loading"),
              o.children(".porto-loading-icon").length ||
                o.append('<i class="porto-loading-icon"></i>'),
              o.closest(".porto-onepage-category").addClass("loading");
            var r =
              o
                .closest(".porto-onepage-category")
                .find(".ajax-form")
                .serialize() +
              "&action=porto_woocommerce_shortcodes_products&category_description=true&category=" +
              a +
              "&nonce=" +
              js_porto_vars.porto_nonce;
            e.ajax({
              url: t.ajax_url,
              data: r,
              type: "post",
              success: function (t) {
                o.addClass("ajax-loaded"),
                  o.append(e(t).html()),
                  o.removeClass("yith-wcan-loading"),
                  e(document).trigger("yith-wcan-ajax-filtered"),
                  e(window).trigger("resize"),
                  i &&
                    setTimeout(function () {
                      i.refresh();
                    }, 300),
                  o.closest(".porto-onepage-category").removeClass("loading");
              },
            });
          }
        ),
        e(".cart-v2 .cart_totals .accordion-toggle.out").removeClass("out"),
        e(document).ajaxComplete(function (t, o, i) {
          e(".cart-v2 .cart_totals .accordion-toggle.out").each(function () {
            e(e(this).attr("href")).length &&
              e(e(this).attr("href")).is(":hidden") &&
              (e(this).removeClass("collapsed"),
              e(e(this).attr("href")).addClass("show"));
          });
        }),
        e(".porto_products_filter_form .btn-submit").on("click", function (t) {
          t.preventDefault();
          var o = e(this).closest("form").serializeArray(),
            i = "";
          for (var a in o) {
            var r = o[a];
            if (
              r.value &&
              (i && (i += "&"),
              (i += r.name + "=" + r.value),
              "min_price" == r.name)
            ) {
              var n = e(this)
                .closest("form")
                .find(".porto_dropdown_price_range option:selected")
                .data("maxprice");
              n && (i += "&max_price=" + n);
            }
          }
          location.href = e(this).closest("form").attr("action") + "?" + i;
        }),
        e(".wishlist_table.responsive").length &&
          e(window).on("resize", function () {
            window.matchMedia("(max-width: 768px)").matches
              ? e(".wishlist_table.responsive").addClass("mobile")
              : e(".wishlist_table.responsive").removeClass("mobile");
          }),
        js_porto_vars.pre_order)
      ) {
        var a = {
          init: function () {
            (this.$add_to_cart_btn = e(
              ".product-summary-wrap .single_add_to_cart_button"
            )),
              (this.add_to_cart_label = this.$add_to_cart_btn.html()),
              e(".product-summary-wrap form.variations_form")
                .on("show_variation", function (t, o, i) {
                  o.porto_pre_order
                    ? (a.$add_to_cart_btn.html(o.porto_pre_order_label),
                      o.porto_pre_order_date &&
                        e(this)
                          .find(".woocommerce-variation-description")
                          .append(o.porto_pre_order_date))
                    : a.$add_to_cart_btn.html(a.add_to_cart_label);
                })
                .on("hide_variation", function () {
                  a.$add_to_cart_btn.html(a.add_to_cart_label);
                });
          },
        };
        e("div.product.skeleton-loading").length
          ? e("div.product.skeleton-loading").on(
              "skeleton-loaded",
              function () {
                a.init();
              }
            )
          : a.init();
      }
      if (
        (e("#header .my-wishlist .wishlist-count").length &&
          e(document.body).on(
            "added_to_wishlist removed_from_wishlist added_to_cart",
            function (o) {
              var i = e("#header .my-wishlist .wishlist-count");
              i.text() &&
                e.ajax({
                  type: "POST",
                  dataType: "json",
                  url: t.ajax_url,
                  data: {
                    action: "porto_refresh_wishlist_count",
                    nonce: js_porto_vars.porto_nonce,
                  },
                  success: function (t) {
                    (t || 0 === t) &&
                      (i.addClass("count-updating").text(Number(t)),
                      setTimeout(function () {
                        i.removeClass("count-updating");
                      }, 1e3));
                  },
                });
            }
          ),
        e(document.body).hasClass("woocommerce-cart") &&
          e(".wpcf7 .screen-reader-response").length &&
          e(".wpcf7 .screen-reader-response").attr("role", ""),
        e("#dokan-store-listing-filter-form-wrap .store-search-input").on(
          "keydown",
          function (t) {
            t.which &&
              13 == event.which &&
              (e(this)
                .closest("form")
                .find("#apply-filter-btn")
                .trigger("click"),
              t.preventDefault());
          }
        ),
        e.fn.block)
      ) {
        var r = e.fn.block;
        e.fn.block = function (t) {
          this.is(".woocommerce-checkout") &&
            this.append(
              '<div class="loader-container d-block"><div class="loader"><i class="porto-ajax-loader"></i></div></div>'
            ),
            r.call(this, t);
        };
        var n = e.fn.unblock;
        e.fn.unblock = function (t) {
          return (
            n.call(this, t),
            this.is(".processing") ||
              (this.is(".woocommerce-checkout") &&
                this.children(".loader-container").remove()),
            this
          );
        };
      }
    })(window.theme, jQuery),
    function (t, e) {
      (t = t || {}),
        js_porto_vars.sales_popup &&
          e.extend(t, {
            salesPopup: {
              isCart: !0,
              popupContainer: null,
              current: 0,
              products: [],
              worker: null,
              initialize: function () {
                return (
                  0 == e(".after-loading-success-message.style-3").length
                    ? (e("body").append(
                        '<div class="after-loading-success-message style-3 d-block"></div>'
                      ),
                      (this.isCart = !1),
                      (this.popupContainer = e(
                        ".after-loading-success-message.style-3"
                      )))
                    : ((this.popupContainer = e(
                        ".after-loading-success-message.style-3"
                      )),
                      this.popupContainer.eq(0).stop().show()),
                  this.popupContainer.on("click", ".sales-close", function () {
                    var t = e(this).closest(".success-message-container");
                    t.removeClass("active"),
                      setTimeout(function () {
                        t.slideUp(300, function () {
                          t.remove();
                        });
                      }, 350);
                  }),
                  this.build(),
                  this
                );
              },
              appendContent: function (t) {
                var o = js_porto_vars.sales_popup.title,
                  i = t.link,
                  a = t.date,
                  r = t.image,
                  n = t.price,
                  s = t.title,
                  c = e(
                    '<div class="sales-msg success-message-container"><p class="sales-popup-title">' +
                      o +
                      '</p><div class="msg-box mb-0"><div class="msg"><div class="product-name"><a href="' +
                      i +
                      '"><h3 class="product-title font-weight-bold line-height-sm mb-1">' +
                      s +
                      '</h3></a></div><span class="price text-primary">' +
                      n +
                      '</span><p class="mt-1 mb-0' +
                      ("not sale" == a ? " d-none" : "") +
                      '">' +
                      a +
                      '</p></div><img src="' +
                      r +
                      '" alt="' +
                      s +
                      '"/></div><button class="sales-close mfp-close"></button></div>'
                  );
                this.popupContainer.prepend(c),
                  setTimeout(function () {
                    c.addClass("active");
                  }, 150),
                  setTimeout(function () {
                    c.find(".sales-close").trigger("click");
                  }, 4e3);
              },
              build: function () {
                var e = this;
                return (
                  (e.worker = new Worker(
                    js_porto_vars.sales_popup.themeuri +
                      "/inc/lib/woocommerce-sales-popup/worker.js"
                  )),
                  (e.worker.onmessage = function (t) {
                    t.data && t.data.title && e.appendContent(t.data);
                  }),
                  e.worker.postMessage({
                    init: !0,
                    vars: js_porto_vars.sales_popup,
                    ajaxurl: t.ajax_url,
                    nonce: js_porto_vars.porto_nonce,
                  }),
                  e
                );
              },
            },
          });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
      (t = t || {}),
        js_porto_vars.compare_popup &&
          e.extend(t, {
            comparePopup: {
              isCart: !0,
              popupContainer: null,
              $el: null,
              initialize: function (t) {
                return (
                  (this.$el = t),
                  0 == e(".after-loading-success-message.style-3").length
                    ? (e("body").append(
                        '<div class="after-loading-success-message style-3 d-block"></div>'
                      ),
                      (this.isCart = !1),
                      (this.popupContainer = e(
                        ".after-loading-success-message.style-3"
                      )))
                    : ((this.popupContainer = e(
                        ".after-loading-success-message.style-3"
                      )),
                      this.popupContainer.eq(0).stop().show()),
                  this.popupContainer.on(
                    "click",
                    ".compare-close",
                    function () {
                      var t = e(this).closest(".success-message-container");
                      t.removeClass("active"),
                        setTimeout(function () {
                          t.slideUp(300, function () {
                            t.remove();
                          });
                        }, 350);
                    }
                  ),
                  this.build(),
                  this
                );
              },
              build: function () {
                var t = this;
                if (js_porto_vars.compare_popup) {
                  t = this;
                  var o = e(".wishlist_table").length > 0,
                    i = o ? t.$el.closest("tr") : t.$el.closest(".product"),
                    a =
                      "string" == typeof js_porto_vars.compare_popup_title
                        ? js_porto_vars.compare_popup_title
                        : "",
                    r = o
                      ? i.find(".product-thumbnail a:first-child").attr("href")
                      : i.find(".product-image>a:first-child").length > 0
                      ? i.find(".product-image>a:first-child").attr("href")
                      : "#",
                    n = o
                      ? i.find(".product-thumbnail img").attr("src")
                      : i.find(".product-inner .product-image img").length > 0
                      ? i.find(".product-inner .product-image img").attr("src")
                      : i
                          .find(
                            ".product-images .owl-item.active .img-thumbnail img"
                          )
                          .attr("src"),
                    s = o
                      ? i.find(".product-price").html()
                      : i.find(".price").html(),
                    c = o
                      ? i.find(".product-name a").text()
                      : i.find(".woocommerce-loop-product__title").length > 0
                      ? i.find(".woocommerce-loop-product__title").text()
                      : i.find(".product_title").text();
                  !n &&
                    i.find(".product-image img").length &&
                    (n = i.find(".product-image img").attr("src")),
                    !c &&
                      i.find(".product-image").length &&
                      (c = i.find(".product-image").data("title"));
                  var l = e(
                    '<div class="compare-msg success-message-container"><p class="compare-popup-title">' +
                      a +
                      '</p><div class="msg-box mb-0"><div class="msg"><div class="product-name"><a href="' +
                      r +
                      '"><h3 class="product-title font-weight-bold line-height-sm mb-1">' +
                      c +
                      '</h3></a></div><span class="price text-primary">' +
                      s +
                      '</span></div><img src="' +
                      n +
                      '" alt="' +
                      c +
                      '"/></div><button class="compare-close mfp-close"></button></div>'
                  );
                  t.popupContainer.prepend(l),
                    setTimeout(function () {
                      l.addClass("active");
                    }, 150),
                    setTimeout(function () {
                      l.find(".compare-close").trigger("click");
                    }, 4e3);
                }
                return t;
              },
            },
          });
    }.apply(this, [window.theme, jQuery]),
    (function (t, e) {
      (t = t || {}),
        e.extend(t, {
          porto_comapre_add_query_arg: function (t, e) {
            (t = escape(t)), (e = escape(e));
            var o = document.location.search,
              i = t + "=" + e,
              a = new RegExp("(&|\\?)" + t + "=[^&]*");
            return (
              (o = o.replace(a, "$1" + i)),
              RegExp.$1 || (o += (o.length > 0 ? "&" : "?") + i),
              o
            );
          },
        }),
        e(document).ready(function () {
          e("body").on(
            "click",
            ".wishlist_table a.compare.added",
            function (o) {
              o.preventDefault(),
                e("body").trigger("yith_woocompare_open_popup", {
                  response:
                    t.porto_comapre_add_query_arg(
                      "action",
                      yith_woocompare.actionview
                    ) + "&iframe=true",
                });
            }
          ),
            e(document)
              .off("click", ".product a.compare:not(.added)")
              .on(
                "click",
                ".product a.compare:not(.added), .wishlist_table a.compare:not(.added)",
                function (o) {
                  o.preventDefault(),
                    void 0 !== t.comparePopup &&
                      t.comparePopup.initialize(e(this));
                  var i = e(this),
                    a = {
                      action: yith_woocompare.actionadd,
                      id: i.data("product_id"),
                      context: "frontend",
                    },
                    r = e(".yith-woocompare-widget ul.products-list");
                  i.addClass("added"),
                    e
                      .ajax({
                        type: "post",
                        url: yith_woocompare.ajaxurl
                          .toString()
                          .replace("%%endpoint%%", yith_woocompare.actionadd),
                        data: a,
                        dataType: "json",
                        success: function (t) {
                          e(".yith-woocompare-open .compare-count").each(
                            function () {
                              this.innerHTML = parseInt(this.innerHTML) + 1;
                            }
                          );
                          var o = "";
                          i.data("added_icon") &&
                            (o +=
                              '<i class="' + i.data("added_icon") + '"></i>'),
                            i
                              .attr("href", t.table_url)
                              .html(
                                i.data("icon_pos")
                                  ? yith_woocompare.added_label + o
                                  : o + yith_woocompare.added_label
                              ),
                            r.html(t.widget_table);
                        },
                      })
                      .fail(function () {
                        i.removeClass("added");
                      });
                }
              );
        }),
        e("body").on(
          "click",
          "a.yith-woocompare-open, .product a.compare.added, .wishlist_table a.compare.added",
          function () {
            var t = window.innerWidth - document.body.clientWidth;
            e("html").css({ overflow: "hidden", "margin-right": t });
          }
        ),
        e("body").on(
          "click",
          ".yith_woocompare_colorbox #cboxClose, #cboxOverlay",
          function () {
            e("html").css({ overflow: "", "margin-right": "" });
          }
        ),
        e("body").on("yith_woocompare_open_popup", function () {
          setTimeout(function () {
            if (e("body").find("iframe").length) {
              var t = e("body").find("#cboxLoadedContent iframe")[0]
                .contentWindow;
              t.jQuery &&
                t.jQuery(t).on("yith_woocompare_product_removed", function () {
                  e(".yith-woocompare-open .compare-count").each(function () {
                    this.innerHTML = Math.max(0, parseInt(this.innerHTML) - 1);
                  });
                });
            }
          }, 2e3);
        });
    })(window.theme, window.jQuery);
})();
