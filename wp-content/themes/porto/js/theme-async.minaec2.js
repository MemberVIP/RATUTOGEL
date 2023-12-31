(function (t, e) {
  "use strict";
  (t = t || {}),
    e.extend(t, {
      mfpConfig: {
        tClose: js_porto_vars.popup_close,
        tLoading:
          '<div class="porto-ajax-loading"><i class="porto-loading-icon"></i></div>',
        gallery: {
          tPrev: js_porto_vars.popup_prev,
          tNext: js_porto_vars.popup_next,
          tCounter: js_porto_vars.mfp_counter,
        },
        image: { tError: js_porto_vars.mfp_img_error },
        ajax: { tError: js_porto_vars.mfp_ajax_error },
        callbacks: {
          open: function () {
            e("body").addClass("lightbox-opened"),
              this.st.fixedContentPos &&
                e(
                  "#header.sticky-header .header-main.sticky, #header.sticky-header .main-menu-wrap, .fixed-header #header.sticky-header .header-main, .fixed-header #header.sticky-header .main-menu-wrap"
                ).css(t.rtl_browser ? "left" : "right", t.getScrollbarWidth());
            var a = e(this._lastFocusedEl);
            if (
              a.closest(".portfolios-lightbox").hasClass("with-thumbs") &&
              e(document).width() >= 1024
            ) {
              var i = a
                  .closest(".portfolios-lightbox.with-thumbs")
                  .find(".porto-portfolios-lighbox-thumbnails")
                  .clone(),
                o = e.magnificPopup.instance;
              e("body").prepend(i);
              var n = e("body > .porto-portfolios-lighbox-thumbnails").children(
                ".owl-carousel"
              );
              n.themeCarousel(n.data("plugin-options")),
                n.trigger("refresh.owl.carousel");
              var s = n.find(".owl-stage");
              s.find(".owl-item").removeClass("current"),
                s.find(".owl-item").eq(o.currItem.index).addClass("current"),
                (e.magnificPopup.instance.next = function () {
                  var t = e.magnificPopup.instance;
                  e.magnificPopup.proto.next.call(this),
                    s.find(".owl-item").removeClass("current"),
                    s
                      .find(".owl-item")
                      .eq(t.currItem.index)
                      .addClass("current");
                }),
                (e.magnificPopup.instance.prev = function () {
                  var t = e.magnificPopup.instance;
                  e.magnificPopup.proto.prev.call(this),
                    s.find(".owl-item").removeClass("current"),
                    s
                      .find(".owl-item")
                      .eq(t.currItem.index)
                      .addClass("current");
                }),
                s.find(".owl-item").on("click", function () {
                  s.find(".owl-item").removeClass("current"),
                    e.magnificPopup.instance.goTo(e(this).index()),
                    e(this).addClass("current");
                });
            }
          },
          close: function () {
            e("body").removeClass("lightbox-opened"),
              this.st.fixedContentPos &&
                e(
                  "#header.sticky-header .header-main.sticky, #header.sticky-header .main-menu-wrap, .fixed-header #header.sticky-header .header-main, .fixed-header #header.sticky-header .main-menu-wrap"
                ).css(t.rtl_browser ? "left" : "right", ""),
              e(".owl-carousel .owl-stage").each(function () {
                var t = e(this),
                  a =
                    t.width() +
                    parseInt(t.css("padding-left")) +
                    parseInt(t.css("padding-right"));
                t.css({ width: a + 200 }),
                  setTimeout(function () {
                    t.css({ width: a });
                  }, 0);
              }),
              e(this._lastFocusedEl)
                .parents(".portfolios-lightbox")
                .hasClass("with-thumbs") &&
                e(document).width() >= 1024 &&
                e(" body > .porto-portfolios-lighbox-thumbnails").remove();
          },
        },
      },
    });
}).apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var a = "__animate",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.defaults = { accX: 0, accY: -120, delay: 1, duration: 1e3 }),
      (i.prototype = {
        initialize: function (t, e) {
          return (
            t.data(a) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(a, !0), this;
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
          var a,
            i,
            o = this.options.wrapper;
          if (o.data("appear-animation-svg"))
            return (
              o.find("[data-appear-animation]").each(function () {
                var a,
                  i = e(this),
                  o = t.getOptions(i.data("plugin-options"));
                o && (a = o), i.themeAnimate(a);
              }),
              this
            );
          o.addClass("appear-animation");
          var n = o.get(0);
          return (
            (a = Math.abs(
              o.data("appear-animation-delay")
                ? o.data("appear-animation-delay")
                : this.options.delay
            )) > 1 && (n.style.animationDelay = a + "ms"),
            1e3 !=
              (i = Math.abs(
                o.data("appear-animation-duration")
                  ? o.data("appear-animation-duration")
                  : this.options.duration
              )) && (n.style.animationDuration = i + "ms"),
            o.addClass(
              o.data("appear-animation") + " appear-animation-visible"
            ),
            this
          );
        },
      }),
      e.extend(t, { Animate: i }),
      (e.fn.themeAnimate = function (i) {
        return this.map(function () {
          var o = e(this);
          return o.data(a) ? o : new t.Animate(o, i);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    t = t || {};
    var a = "__animatedLetters",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.defaults = {
      animationName: "typeWriter",
      animationSpeed: 50,
      startDelay: 500,
      minWindowWidth: 768,
      letterClass: "",
    }),
      (i.prototype = {
        initialize: function (t, e) {
          if (t.data(a)) return this;
          return (
            (this.$el = t),
            (this.initialText = t.text()),
            (this.timeoutId = null),
            this.setData().setOptions(e).build().events(),
            this
          );
        },
        setData: function () {
          return this.$el.data(a, this), this;
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
          var t = this,
            a = t.$el.text().split("");
          if (e(window).width() < t.options.minWindowWidth)
            return t.$el.addClass("initialized"), this;
          if (t.options.firstLoadNoAnim)
            return (
              t.$el.css({ visibility: "visible" }),
              t.$el.closest(".owl-carousel").get(0) &&
                setTimeout(function () {
                  t.$el
                    .closest(".owl-carousel")
                    .on("change.owl.carousel", function () {
                      (t.options.firstLoadNoAnim = !1), t.build();
                    });
                }, 500),
              this
            );
          if (
            (t.$el.addClass("initialized"),
            t.setMinHeight(),
            t.$el.text(""),
            "typeWriter" == t.options.animationName)
          ) {
            t.$el.append(
              '<span class="letters-wrapper"></span><span class="typeWriter"></pre>'
            );
            var i = 0,
              o = function () {
                var e = setTimeout(function () {
                  var e = a[i];
                  t.$el
                    .find(".letters-wrapper")
                    .append(
                      '<span class="letter ' +
                        (t.options.letterClass
                          ? t.options.letterClass + " "
                          : "") +
                        '">' +
                        e +
                        "</span>"
                    ),
                    i++,
                    o();
                }, t.options.animationSpeed);
                i >= a.length && clearTimeout(e);
              };
            o();
          } else
            this.timeoutId = setTimeout(function () {
              for (var e = 0; e < a.length; e++) {
                var i = a[e];
                t.$el.append(
                  '<span class="letter ' +
                    (t.options.letterClass ? t.options.letterClass + " " : "") +
                    t.options.animationName +
                    ' animated" style="animation-delay: ' +
                    e * t.options.animationSpeed +
                    'ms;">' +
                    i +
                    "</span>"
                );
              }
            }, t.options.startDelay);
          return this;
        },
        setMinHeight: function () {
          var t = this;
          return (
            t.$el.closest(".owl-carousel").get(0)
              ? (t.$el.closest(".owl-carousel").addClass("d-block"),
                t.$el.css("min-height", t.$el.height()),
                t.$el.closest(".owl-carousel").removeClass("d-block"))
              : t.$el.css("min-height", t.$el.height()),
            this
          );
        },
        destroy: function () {
          return (
            this.$el.html(this.initialText).css("min-height", ""),
            this.timeoutId &&
              (clearTimeout(this.timeoutId), (this.timeoutId = null)),
            this
          );
        },
        events: function () {
          var t = this;
          return (
            t.$el.on("animated.letters.destroy", function () {
              t.destroy();
            }),
            t.$el.on("animated.letters.initialize", function () {
              t.build();
            }),
            this
          );
        },
      }),
      e.extend(t, { PluginAnimatedLetters: i }),
      (e.fn.themePluginAnimatedLetters = function (t) {
        return this.map(function () {
          var o = e(this);
          return o.data(a) ? o.data(a) : new i(o, t);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  "function" == typeof jQuery.fn.owlCarousel &&
    function (t, e) {
      "use strict";
      t = t || {};
      var a = "__carousel",
        i = function (t, e) {
          return this.initialize(t, e);
        };
      (i.defaults = e.extend(
        {},
        {
          loop: !0,
          navText: [],
          themeConfig: !1,
          lazyLoad: !0,
          lg: 0,
          md: 0,
          sm: 0,
          xs: 0,
          single: !1,
          rtl: t.rtl,
        }
      )),
        (i.prototype = {
          initialize: function (t, e) {
            return (
              t.data(a) ||
                ((this.$el = t), this.setData().setOptions(e).build()),
              this
            );
          },
          setData: function () {
            return this.$el.data(a, !0), this;
          },
          setOptions: function (a) {
            return (
              (a && a.themeConfig) || !a
                ? (this.options = e.extend(!0, {}, i.defaults, t.owlConfig, a, {
                    wrapper: this.$el,
                    themeConfig: !0,
                  }))
                : (this.options = e.extend(!0, {}, i.defaults, a, {
                    wrapper: this.$el,
                  })),
              this
            );
          },
          calcOwlHeight: function (t) {
            var a = 0;
            t.find(".owl-item.active").each(function () {
              a < e(this).height() && (a = e(this).height());
            }),
              t.children(".owl-stage-outer").height(a);
          },
          build: function () {
            if (!e.fn.owlCarousel) return this;
            var a,
              i = this.options.wrapper,
              o = this.options.loop,
              n = this.options.lg,
              s = this.options.md,
              r = this.options.sm,
              l = this.options.xs,
              d = this.options.single,
              p = i.find(".zoom").get(0),
              c = {},
              h =
                i.find(".owl-item").length > 0
                  ? i.find(".owl-item:not(.cloned)").length
                  : i.find("> *").length;
            void 0 !== this.options.fullscreen && this.options.fullscreen;
            if (d) a = 1;
            else if (void 0 !== this.options.responsive)
              for (var f in this.options.responsive) {
                var u = Number(this.options.responsive[f]);
                c[Number(f)] = { items: u, loop: !!(o && h >= u) };
              }
            else {
              (a = this.options.items ? this.options.items : n || 1),
                (this.options.xl || n || s || r || l) &&
                  (this.options.xl
                    ? (c[1400] = {
                        items: this.options.xl,
                        loop: !!(o && h > this.options.xl),
                        mergeFit: this.options.mergeFit,
                      })
                    : n &&
                      a > n + 1 &&
                      ((c[1400] = {
                        items: a,
                        loop: !!(o && h > a),
                        mergeFit: this.options.mergeFit,
                      }),
                      (c[t.screen_lg] = {
                        items: n + 1,
                        loop: !!(o && h > n + 1),
                        mergeFit: this.options.mergeFit,
                      })),
                  void 0 === c[t.screen_lg] &&
                    (c[t.screen_lg] = {
                      items: a,
                      loop: !!(o && h >= a),
                      mergeFit: this.options.mergeFit,
                    }),
                  n &&
                    (c[992] = {
                      items: n,
                      loop: !!(o && h >= n),
                      mergeFit: this.options.mergeFit_lg,
                    }),
                  s &&
                    (c[768] = {
                      items: s,
                      loop: !!(o && h > s),
                      mergeFit: this.options.mergeFit_md,
                    }),
                  (c[576] = r
                    ? {
                        items: r,
                        loop: !!(o && h > r),
                        mergeFit: this.options.mergeFit_sm,
                      }
                    : { items: 1, mergeFit: !1 }),
                  (c[0] = l
                    ? {
                        items: l,
                        loop: !!(o && h > l),
                        mergeFit: this.options.mergeFit_xs,
                      }
                    : { items: 1 }));
            }
            if (
              (!i.hasClass("show-nav-title") &&
                this.options.themeConfig &&
                t.slider_nav &&
                t.slider_nav_hover &&
                i.addClass("show-nav-hover"),
              (this.options = e.extend(!0, {}, this.options, {
                items: a,
                loop: !!(o && h > a),
                responsive: c,
                onInitialized: function () {
                  i.hasClass("stage-margin") &&
                    i
                      .find(".owl-stage-outer")
                      .css({
                        "margin-left": this.options.stagePadding,
                        "margin-right": this.options.stagePadding,
                      });
                  var t =
                    ".porto-u-heading, .vc_custom_heading, .slider-title, .elementor-widget-heading, .porto-heading";
                  if (
                    i.hasClass("show-dots-title") &&
                    (i.prev(t).length ||
                      i.closest(".slider-wrapper").prev(t).length ||
                      i.closest(".porto-recent-posts").prev(t).length ||
                      i
                        .closest(
                          ".elementor-widget-porto_recent_posts, .elementor-section"
                        )
                        .prev(t).length)
                  ) {
                    var e = i.prev(t);
                    e.length || (e = i.closest(".slider-wrapper").prev(t)),
                      e.length ||
                        (e = i.closest(".porto-recent-posts").prev(t)),
                      e.length ||
                        (e = i
                          .closest(
                            ".elementor-widget-porto_recent_posts, .elementor-section"
                          )
                          .prev(t));
                    try {
                      var a = e
                        .addClass("w-auto")
                        .css("display", "inline-block")
                        .width();
                      e.removeClass("w-auto").css("display", ""),
                        a + 15 + i.find(".owl-dots").width() <= e.width()
                          ? (i
                              .find(".owl-dots")
                              .css(
                                "left",
                                a + 15 + (i.width() - e.width()) / 2
                              ),
                            i
                              .find(".owl-dots")
                              .css(
                                "top",
                                (-1 * e.height()) / 2 -
                                  parseInt(e.css("margin-bottom")) -
                                  i.find(".owl-dots").height() / 2 +
                                  2
                              ))
                          : i.find(".owl-dots").css("position", "static");
                    } catch (t) {}
                  }
                },
              })),
              this.options.autoHeight)
            ) {
              var m = this;
              e(window).on("resize", function () {
                m.calcOwlHeight(i);
              }),
                t.isLoaded
                  ? setTimeout(function () {
                      m.calcOwlHeight(i);
                    }, 100)
                  : e(window).on("load", function () {
                      m.calcOwlHeight(i);
                    });
            }
            var g = !1;
            if (p) {
              g = [];
              var v = 0;
              i.find(".zoom").each(function () {
                var t = {},
                  a = e(this);
                (t.src = a.data("src") ? a.data("src") : a.data("mfp-src")),
                  (t.title = a.data("title")),
                  (g[v] = t),
                  a.data("index", v),
                  v++;
              });
            }
            return (
              i.hasClass("show-nav-title")
                ? (this.options.stagePadding = 0)
                : (this.options.themeConfig &&
                    t.slider_nav &&
                    t.slider_nav_hover &&
                    i.addClass("show-nav-hover"),
                  this.options.themeConfig &&
                    !t.slider_nav_hover &&
                    t.slider_margin &&
                    i.addClass("stage-margin")),
              i.hasClass("has-ccols-spacing") &&
                i.removeClass("has-ccols-spacing"),
              i.owlCarousel(this.options),
              p &&
                g &&
                i.on("click", ".zoom", function (a) {
                  if ((a.preventDefault(), e.fn.magnificPopup)) {
                    var o = e(this).data("index");
                    void 0 === o &&
                      (o =
                        (e(this).closest(".owl-item").index() -
                          i.find(".cloned").length / 2) %
                        i.data("owl.carousel").items().length),
                      e.magnificPopup.close(),
                      e.magnificPopup.open(
                        e.extend(!0, {}, t.mfpConfig, {
                          items: g,
                          gallery: { enabled: !0 },
                          type: "image",
                        }),
                        o
                      );
                  }
                  return !1;
                }),
              this
            );
          },
        }),
        e.extend(t, { Carousel: i }),
        (e.fn.themeCarousel = function (i, o) {
          return this.map(function () {
            var n = e(this);
            return n.data(a) ? n : new t.Carousel(n, i, o);
          });
        });
    }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var a = "__lightbox",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.defaults = {
      callbacks: {
        open: function () {
          e("body").addClass("lightbox-opened");
        },
        close: function () {
          e("body").removeClass("lightbox-opened");
        },
      },
    }),
      (i.prototype = {
        initialize: function (t, e) {
          return (
            t.data(a) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(a, this), this;
        },
        setOptions: function (a) {
          return (
            (this.options = e.extend(!0, {}, i.defaults, t.mfpConfig, a, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          return e.fn.magnificPopup
            ? (this.options.wrapper.magnificPopup(this.options), this)
            : this;
        },
      }),
      e.extend(t, { Lightbox: i }),
      (e.fn.themeLightbox = function (i) {
        return this.map(function () {
          var o = e(this);
          return o.data(a) ? o.data(a) : new t.Lightbox(o, i);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var a = "__toggle",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.defaults = {}),
      (i.prototype = {
        initialize: function (t, e) {
          return (
            t.data(a) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(a, this), this;
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
          return (
            this.options.container
              .parent()
              .magnificPopup(
                e.extend(!0, {}, t.mfpConfig, {
                  delegate: ".porto-vc-zoom",
                  gallery: { enabled: !0 },
                  mainClass: "mfp-with-zoom",
                  zoom: { enabled: !0, duration: 300 },
                  type: "image",
                })
              ),
            this
          );
        },
      }),
      e.extend(t, { VcImageZoom: i }),
      (e.fn.themeVcImageZoom = function (i) {
        return this.map(function () {
          var o = e(this);
          return o.data(a) ? o.data(a) : new t.VcImageZoom(o, i);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    var a;
    (t = t || {}),
      e.extend(t, {
        PostAjaxModal: {
          defaults: { elements: ".page-portfolios" },
          initialize: function (t, a) {
            return (
              (this.$elements = t || e(this.defaults.elements)),
              void 0 === a && (a = "portfolio"),
              this.build(a),
              this
            );
          },
          build: function (i) {
            var o = {
              $wrapper: null,
              modals: [],
              currentModal: 0,
              total: 0,
              p_type: "portfolio",
              build: function (t, a) {
                var i = this;
                (i.$wrapper = t),
                  i.$wrapper &&
                    ((i.modals = []),
                    (i.total = 0),
                    (i.p_type = a),
                    t.find("a[data-ajax-on-modal]").each(function () {
                      i.add(e(this));
                    }),
                    t
                      .off("mousedown", "a[data-ajax-on-modal]")
                      .on("mousedown", "a[data-ajax-on-modal]", function (t) {
                        if (2 == t.which) return t.preventDefault(), !1;
                      }));
              },
              add: function (t) {
                var e = this,
                  a = t.attr("href"),
                  i = e.total;
                e.modals.push({ src: a }),
                  e.total++,
                  t.off("click").on("click", function (t) {
                    return t.preventDefault(), e.show(i), !1;
                  });
              },
              next: function () {
                var t = this;
                t.currentModal + 1 < t.total
                  ? t.show(t.currentModal + 1)
                  : t.show(0);
              },
              prev: function () {
                var t = this;
                t.currentModal - 1 >= 0
                  ? t.show(t.currentModal - 1)
                  : t.show(t.total - 1);
              },
              show: function (i) {
                var o = this;
                if (((o.currentModal = i), i < 0 || i > o.total - 1)) return !1;
                e.magnificPopup.close(),
                  e.magnificPopup.open(
                    e.extend(!0, {}, t.mfpConfig, {
                      type: "ajax",
                      items: o.modals,
                      gallery: { enabled: !0 },
                      ajax: {
                        settings: {
                          type: "post",
                          data: { ajax_action: o.p_type + "_ajax_modal" },
                        },
                      },
                      mainClass: o.p_type + "-ajax-modal",
                      fixedContentPos: !1,
                      callbacks: {
                        parseAjax: function (t) {
                          var a = e(t.data),
                            i = a.find("#content article." + o.p_type),
                            n = a.filter('style[data-type]:not("")'),
                            s = "";
                          n.each(function () {
                            s += e(this).text();
                          }),
                            e("#" + o.p_type + "AjaxCSS").get(0)
                              ? e("#" + o.p_type + "AjaxCSS").text(s)
                              : e(
                                  '<style id="' +
                                    o.p_type +
                                    'AjaxCSS">' +
                                    s +
                                    "</style>"
                                ).appendTo("head"),
                            i
                              .find("." + o.p_type + "-nav-all")
                              .html(
                                '<a href="#" data-ajax-' +
                                  o.p_type +
                                  '-close data-bs-tooltip data-original-title="' +
                                  js_porto_vars.popup_close +
                                  '" data-bs-placement="bottom"><i class="fas fa-th"></i></a>'
                              ),
                            i
                              .find("." + o.p_type + "-nav")
                              .html(
                                '<a href="#" data-ajax-' +
                                  o.p_type +
                                  '-prev class="' +
                                  o.p_type +
                                  '-nav-prev" data-bs-tooltip data-original-title="' +
                                  js_porto_vars.popup_prev +
                                  '" data-bs-placement="bottom"><i class="fa"></i></a><a href="#" data-toggle="tooltip" data-ajax-' +
                                  o.p_type +
                                  '-next class="' +
                                  o.p_type +
                                  '-nav-next" data-bs-tooltip data-original-title="' +
                                  js_porto_vars.popup_next +
                                  '" data-bs-placement="bottom"><i class="fa"></i></a>'
                              ),
                            i
                              .find(".elementor-invisible")
                              .removeClass("elementor-invisible"),
                            (t.data =
                              '<div class="ajax-container">' +
                              i.html() +
                              "</div>");
                        },
                        ajaxContentAdded: function () {
                          var i = e("." + o.p_type + "-ajax-modal");
                          i
                            .find("a[data-ajax-" + o.p_type + "-close]")
                            .on("click", function (t) {
                              return (
                                t.preventDefault(), e.magnificPopup.close(), !1
                              );
                            }),
                            (a = i.find(".rev_slider, rs-module")),
                            o.modals.length <= 1
                              ? i
                                  .find(
                                    "a[data-ajax-" +
                                      o.p_type +
                                      "-prev], a[data-ajax-" +
                                      o.p_type +
                                      "-next]"
                                  )
                                  .remove()
                              : (i
                                  .find("a[data-ajax-" + o.p_type + "-prev]")
                                  .on("click", function (t) {
                                    if ((t.preventDefault(), a && a.get(0)))
                                      try {
                                        a.revkill();
                                      } catch (t) {}
                                    return (
                                      i
                                        .find(".mfp-arrow-left")
                                        .trigger("click"),
                                      !1
                                    );
                                  }),
                                i
                                  .find("a[data-ajax-" + o.p_type + "-next]")
                                  .on("click", function (t) {
                                    if ((t.preventDefault(), a && a.get(0)))
                                      try {
                                        a.revkill();
                                      } catch (t) {}
                                    return (
                                      i
                                        .find(".mfp-arrow-right")
                                        .trigger("click"),
                                      !1
                                    );
                                  })),
                            "portfolio" == o.p_type &&
                              e(window).trigger("resize"),
                            porto_init(),
                            t.refreshVCContent(i),
                            setTimeout(function () {
                              var t = i.find("video");
                              t.get(0) &&
                                t.each(function () {
                                  e(this)[0].play(),
                                    e(this)
                                      .parent()
                                      .parent()
                                      .parent()
                                      .find(".video-controls")
                                      .attr("data-action", "play"),
                                    e(this)
                                      .parent()
                                      .parent()
                                      .parent()
                                      .find(".video-controls")
                                      .html(
                                        '<i class="ult-vid-cntrlpause"></i>'
                                      );
                                });
                            }, 600),
                            i.off("scroll").on("scroll", function () {
                              e.fn.appear.run();
                            });
                        },
                        change: function () {
                          e(".mfp-wrap .ajax-container").trigger("click");
                        },
                        beforeClose: function () {
                          if (a && a.get(0))
                            try {
                              a.revkill();
                            } catch (t) {}
                          e("." + o.p_type + "-ajax-modal").off("scroll");
                        },
                      },
                    }),
                    i
                  );
              },
            };
            return (
              this.$elements.each(function () {
                var t = e(this);
                t.find("a[data-ajax-on-modal]").get(0) &&
                  (t.data(i + "AjaxOnModal") ||
                    (o.build(t, i), t.data(i + "AjaxOnModal", o)));
              }),
              this
            );
          },
        },
      }),
      e(document.documentElement).on("keydown", function (t) {
        try {
          (37 != t.keyCode && 39 != t.keyCode) ||
            (a && a.get(0) && a.revkill());
        } catch (t) {}
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    var a;
    (t = t || {}),
      e.extend(t, {
        PortfolioAjaxPage: {
          defaults: { elements: ".page-portfolios" },
          initialize: function (t) {
            return (
              (this.$elements = t || e(this.defaults.elements)),
              this.build(),
              this
            );
          },
          build: function () {
            return (
              this.$elements.each(function () {
                var i = e(this);
                if (
                  i.find("#portfolioAjaxBox").get(0) &&
                  !i.data("portfolioAjaxOnPage")
                ) {
                  var o = {
                    $wrapper: e(this),
                    pages: [],
                    currentPage: 0,
                    total: 0,
                    $ajaxBox: i.find("#portfolioAjaxBox"),
                    $ajaxBoxContent: i.find("#portfolioAjaxBoxContent"),
                    build: function () {
                      var t = this;
                      (t.pages = []),
                        (t.total = 0),
                        i.find("a[data-ajax-on-page]").each(function () {
                          t.add(e(this));
                        }),
                        i
                          .off("mousedown", "a[data-ajax-on-page]")
                          .on(
                            "mousedown",
                            "a[data-ajax-on-page]",
                            function (t) {
                              if (2 == t.which) return t.preventDefault(), !1;
                            }
                          );
                    },
                    add: function (t) {
                      var e = this,
                        a = t.attr("href");
                      e.pages.push(a),
                        e.total++,
                        t.off("click").on("click", function (t) {
                          t.preventDefault();
                          var i = t.target.className;
                          return (
                            "owl-next" == i ||
                              "owl-prev" == i ||
                              e.show(e.pages.indexOf(a)),
                            !1
                          );
                        });
                    },
                    events: function () {
                      var t = this;
                      i
                        .off("click", "a[data-ajax-portfolio-close]")
                        .on(
                          "click",
                          "a[data-ajax-portfolio-close]",
                          function (e) {
                            return e.preventDefault(), t.close(), !1;
                          }
                        ),
                        t.total <= 1
                          ? e(
                              "a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]"
                            ).remove()
                          : (i
                              .off("click", "a[data-ajax-portfolio-prev]")
                              .on(
                                "click",
                                "a[data-ajax-portfolio-prev]",
                                function (e) {
                                  return e.preventDefault(), t.prev(), !1;
                                }
                              ),
                            i
                              .off("click", "a[data-ajax-portfolio-next]")
                              .on(
                                "click",
                                "a[data-ajax-portfolio-next]",
                                function (e) {
                                  return e.preventDefault(), t.next(), !1;
                                }
                              ));
                    },
                    close: function () {
                      var t = this;
                      if (
                        t.$ajaxBoxContent.find(".rev_slider, rs-module").get(0)
                      )
                        try {
                          t.$ajaxBoxContent
                            .find(".rev_slider, rs-module")
                            .revkill();
                        } catch (t) {}
                      t.$ajaxBoxContent.empty(),
                        t.$ajaxBox
                          .removeClass("ajax-box-init")
                          .removeClass("ajax-box-loading");
                    },
                    next: function () {
                      var t = this;
                      t.currentPage + 1 < t.total
                        ? t.show(t.currentPage + 1)
                        : t.show(0);
                    },
                    prev: function () {
                      var t = this;
                      t.currentPage - 1 >= 0
                        ? t.show(t.currentPage - 1)
                        : t.show(t.total - 1);
                    },
                    show: function (i) {
                      var o = this;
                      if (
                        ((a = null),
                        o.$ajaxBoxContent.find(".rev_slider, rs-module").get(0))
                      )
                        try {
                          o.$ajaxBoxContent
                            .find(".rev_slider, rs-module")
                            .revkill();
                        } catch (t) {}
                      if (
                        (o.$ajaxBoxContent.empty(),
                        o.$ajaxBox
                          .removeClass("ajax-box-init")
                          .addClass("ajax-box-loading"),
                        t.scrolltoContainer(o.$ajaxBox),
                        (o.currentPage = i),
                        i < 0 || i > o.total - 1)
                      )
                        return o.close(), !1;
                      e.ajax({
                        url: o.pages[i],
                        complete: function (i) {
                          var n = e(i.responseText),
                            s = n.find("#content article.portfolio");
                          n.filter('style[data-type]:not("")');
                          e("#portfolioAjaxCSS").get(0)
                            ? e("#portfolioAjaxCSS").text("")
                            : e(
                                '<style id="portfolioAjaxCSS"></style>'
                              ).appendTo("head"),
                            s
                              .find(".portfolio-nav-all")
                              .html(
                                '<a href="#" data-ajax-portfolio-close data-bs-tooltip data-original-title="' +
                                  js_porto_vars.popup_close +
                                  '"><i class="fas fa-th"></i></a>'
                              ),
                            s
                              .find(".portfolio-nav")
                              .html(
                                '<a href="#" data-ajax-portfolio-prev class="portfolio-nav-prev" data-bs-tooltip data-original-title="' +
                                  js_porto_vars.popup_prev +
                                  '"><i class="fa"></i></a><a href="#" data-toggle="tooltip" data-ajax-portfolio-next class="portfolio-nav-next" data-bs-tooltip data-original-title="' +
                                  js_porto_vars.popup_next +
                                  '"><i class="fa"></i></a>'
                              ),
                            o.$ajaxBoxContent
                              .html(s.html())
                              .append(
                                '<div class="row"><div class="col-lg-12"><hr class="tall"></div></div>'
                              ),
                            o.$ajaxBox.removeClass("ajax-box-loading"),
                            e(window).trigger("resize"),
                            porto_init(),
                            t.refreshVCContent(o.$ajaxBoxContent),
                            o.events(),
                            (a = o),
                            o.$ajaxBoxContent
                              .find(".lightbox:not(.manual)")
                              .each(function () {
                                var t,
                                  a = e(this),
                                  i = a.data("plugin-options");
                                i && (t = i), a.themeLightbox(t);
                              });
                        },
                      });
                    },
                  };
                  o.build(), i.data("portfolioAjaxOnPage", o);
                }
              }),
              this
            );
          },
        },
      }),
      e(document.documentElement).on("keyup", function (t) {
        try {
          if (!a) return;
          39 == t.keyCode && a.next(), 37 == t.keyCode && a.prev();
        } catch (t) {}
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        PostFilter: {
          cache: {},
          defaults: { elements: ".portfolio-filter" },
          initialize: function (t, a) {
            return (
              (this.$elements = t || e(this.defaults.elements)),
              this.build(a),
              this
            );
          },
          filterFn: function (a) {
            if (
              void 0 !== a &&
              void 0 !== a.data &&
              void 0 !== a.data.elements &&
              a.data.elements &&
              a.data.elements.length
            ) {
              var i = a.data.selfobj;
              if (i.isLoading) return !1;
              var o = a.data.thisobj,
                n = (a.data.elements, a.data.position),
                s = a.data.post_type,
                r = a.data.parent,
                l = a.data.posts_wrap,
                d = a.data.use_ajax,
                p = a.data.page_path,
                c = a.data.infinite_load,
                h = a.data.load_more;
              if ((a.preventDefault(), !e(this).hasClass("active"))) {
                i.isLoading = !0;
                var f = e(this).attr("data-filter");
                if (
                  ("sidebar" == n && e(".sidebar-overlay").trigger("click"),
                  o.find(".active").removeClass("active"),
                  d)
                ) {
                  var u = "*" == f ? "" : f;
                  p || (p = l.data("page_path")),
                    p &&
                      l.data(
                        "page_path",
                        p.replace(/&category=[^&]*&/, "&category=" + u + "&")
                      ),
                    e(this).addClass("active"),
                    i.load_posts(
                      u,
                      !(!c && !h),
                      r,
                      s,
                      l,
                      void 0,
                      e(this).children("a").attr("href")
                    );
                } else if ("faq" == s)
                  r.find(".faq").each(function () {
                    var t = e(this),
                      a = "easeInOutQuart";
                    "*" == f || t.hasClass(f)
                      ? ("none" == t.css("display") &&
                          t.stop(!0).slideDown(300, a, function () {
                            e(this).attr("style", "").show();
                          }),
                        m++)
                      : "none" != t.css("display") &&
                        t.stop(!0).slideUp(300, a, function () {
                          e(this).attr("style", "").hide();
                        });
                  }),
                    !m &&
                      r.find(".faqs-infinite").length &&
                      void 0 !== e.fn.infinitescroll &&
                      r.find(".faqs-infinite").infinitescroll("retrieve");
                else if (r.hasClass("portfolios-timeline")) {
                  var m = 0;
                  r.find(".portfolio").each(function () {
                    var t = e(this),
                      a = "easeInOutQuart";
                    "*" == f || t.hasClass(f)
                      ? ("none" == t.css("display") &&
                          t.stop(!0).slideDown(300, a, function () {
                            e(this).attr("style", "").show();
                          }),
                        m++)
                      : "none" != t.css("display") &&
                        t.stop(!0).slideUp(300, a, function () {
                          e(this).attr("style", "").hide();
                        });
                  }),
                    !m &&
                      r.find(".portfolios-infinite").length &&
                      void 0 !== e.fn.infinitescroll &&
                      r.find(".portfolios-infinite").infinitescroll("retrieve"),
                    setTimeout(function () {
                      t.FilterZoom.initialize(r);
                    }, 400);
                } else
                  r.find("." + s + "-row").isotope({
                    filter: "*" == f ? f : "." + f,
                  });
                return (
                  d || (e(this).addClass("active"), (i.isLoading = !1)),
                  "sidebar" == n &&
                    i.$elements.each(function () {
                      var t = e(this);
                      (t == o && "sidebar" != t.data("position")) ||
                        (t.find("li").removeClass("active"),
                        t
                          .find('li[data-filter="' + f + '"]')
                          .addClass("active"));
                    }),
                  d || (window.location.hash = "#" + f),
                  t.refreshVCContent(),
                  !1
                );
              }
            }
          },
          build: function (a) {
            var i = this;
            return (
              i.$elements.each(function () {
                var o,
                  n,
                  s = e(this),
                  r = s.data("position");
                if (
                  ((n =
                    void 0 === a
                      ? s.hasClass("member-filter")
                        ? "member"
                        : s.hasClass("faq-filter")
                        ? "faq"
                        : s.hasClass("product-filter")
                        ? "product"
                        : s.hasClass("post-filter")
                        ? "post"
                        : s.hasClass("portfolio-filter")
                        ? "portfolio"
                        : s.attr("data-filter-type")
                      : a),
                  (o =
                    "sidebar" == r || "global" == r
                      ? e(".main-content .page-" + n + "s")
                      : s.closest(".page-" + n + "s")).length ||
                    (o = s.closest(".porto-posts-grid")),
                  o && o.length)
                ) {
                  var l,
                    d = s.hasClass("porto-ajax-filter"),
                    p = o.hasClass("load-infinite"),
                    c = o.hasClass("load-more"),
                    h = o.find("." + n + "s-container");
                  if (d && ((!p && !c) || !o.data("ajax_load_options"))) {
                    var f = window.location.href;
                    -1 !== f.indexOf("#") && (f = f.split("#")[0]),
                      (l =
                        t.ajax_url +
                        "?action=porto_ajax_posts&nonce=" +
                        js_porto_vars.porto_nonce +
                        "&post_type=" +
                        n +
                        "&current_link=" +
                        f +
                        "&category=&page=%cur_page%"),
                      o.data("post_layout") &&
                        (l += "&post_layout=" + o.data("post_layout")),
                      h.data("page_path", l);
                  }
                  s.find("li").on(
                    "click",
                    {
                      thisobj: s,
                      selfobj: i,
                      elements: i.$elements,
                      position: r,
                      parent: o,
                      post_type: n,
                      posts_wrap: h,
                      use_ajax: d,
                      page_path: l,
                      infinite_load: p,
                      load_more: c,
                    },
                    i.filterFn
                  );
                }
              }),
              e(window).on(
                "hashchange",
                { elements: i.$elements },
                i.hashchange
              ),
              i.hashchange({ data: { elements: i.$elements } }),
              i
            );
          },
          hashchange: function (t) {
            if (
              void 0 !== t &&
              void 0 !== t.data &&
              void 0 !== t.data.elements &&
              t.data.elements &&
              t.data.elements.length
            ) {
              var a = t.data.elements,
                i = e(a.get(0)),
                o = window.location.hash;
              if (o) {
                var n = i.find('li[data-filter="' + o.replace("#", "") + '"]');
                n.hasClass("active") || n.trigger("click");
              }
            }
          },
          set_elements: function (t) {
            var a = this;
            void 0 !== t && t && t.length
              ? ((a.$elements = t),
                e(window)
                  .off("hashchange", a.hashchange)
                  .on("hashchange", { elements: t }, a.hashchange))
              : a.destroy(a.$elements);
          },
          destroy: function (t) {
            if (void 0 !== t && t && t.length) {
              t.find("li").off("click", this.filterFn),
                e(window).off("hashchange", this.hashchange);
            }
          },
          load_posts: function (a, i, o, n, s, r, l) {
            var d = o.attr("id"),
              p = this,
              c = o.hasClass("archive-posts"),
              h = function (h, f) {
                if (h) {
                  (void 0 !== f && !0 === f) ||
                    void 0 !== r ||
                    !d ||
                    (p.cache[d] || (p.cache[d] = {}), (p.cache[d][a] = h));
                  var u = e(h),
                    m = o.hasClass("archive-products"),
                    g = u
                      .find(c ? ".archive-posts .posts-wrap" : ".posts-wrap")
                      .children();
                  if (
                    g.length &&
                    ((void 0 === s || c) &&
                      (s = o.find("." + n + "s-container")),
                    s.length)
                  ) {
                    s.data("isotope")
                      ? s.isotope("remove", s.children())
                      : s.children().remove(),
                      s.hasClass("owl-loaded") && s.removeClass("owl-loaded"),
                      s.append(g),
                      t.refreshVCContent(g);
                    var v = o.find("." + n + "-filter");
                    if (
                      v.length &&
                      !v.hasClass("porto-ajax-filter") &&
                      !o.hasClass("load-infinite") &&
                      !o.hasClass("load-more")
                    ) {
                      var w = u.find(
                        (c ? ".archive-posts " : "") + "." + n + "-filter"
                      );
                      w.length &&
                        (v.find("li:first-child").trigger("click"),
                        t.PostFilter.destroy(v),
                        v.replaceWith(w),
                        t.PostFilter.initialize(w, n),
                        t.PostFilter.set_elements(e("ul[data-filter-type]")));
                    }
                    porto_init(o);
                    var x = "";
                    (x =
                      "product" != n &&
                      "member" != n &&
                      "faq" != n &&
                      "portfolio" != n &&
                      "post" != n
                        ? "ptu"
                        : n),
                      t.PostsInfinite[x + "Behavior"](g, s);
                    var y = o.find(".pagination-wrap"),
                      _ = u
                        .find((c ? ".archive-posts " : "") + ".pagination-wrap")
                        .eq(0),
                      b = !1;
                    if (
                      (y.length
                        ? _.length
                          ? (y.replaceWith(_), (b = !0))
                          : y.children().remove()
                        : _.length && (o.append(_), (b = !0)),
                      i)
                    ) {
                      var C = s.data("infinitescroll");
                      if (b) {
                        var j = u.find(
                          c ? ".archive-posts .posts-wrap" : ".posts-wrap"
                        );
                        j.data("cur_page") &&
                          (s.data("cur_page", j.data("cur_page")),
                          s.data("max_page", j.data("max_page")));
                        var k = !0;
                        if (
                          (C &&
                            (C.options.state.isDestroyed
                              ? s.removeData("infinitescroll")
                              : ((k = !1),
                                j.data("cur_page") &&
                                  C.update({
                                    maxPage: j.data("max_page"),
                                    state: { currPage: j.data("cur_page") },
                                  }),
                                C.options.state.isPaused && C.resume())),
                          k)
                        ) {
                          var P = s.data("__postsinfinite");
                          P && P.destroy(),
                            new t.PostsInfinite(
                              s,
                              "." + n + ", .timeline-date",
                              s.data("infiniteoptions"),
                              n
                            );
                        }
                        if (c) {
                          var $ = s
                            .siblings(".pagination-wrap")
                            .find(".next")
                            .attr("href");
                          $ &&
                            (($ = ($ +=
                              (-1 !== $.indexOf("?") ? "&" : "?") +
                              "portoajax=1&load_posts_only=2").replace(
                              /(paged=)(\d+)|(page\/)(\d+)/,
                              "$1$3%cur_page%"
                            )),
                            s.data("page_path", $));
                        }
                        new t.PostsInfinite(
                          s,
                          "." + n + ", .timeline-date",
                          s.data("infiniteoptions"),
                          n
                        );
                      }
                    }
                    if (c) {
                      if (
                        (e(".sidebar-content").each(function (t) {
                          var a = e(this),
                            i = e(u.find(".sidebar-content").get(t));
                          if (
                            (a.html(i.html()),
                            m &&
                              "undefined" != typeof updateSelect2 &&
                              updateSelect2)
                          ) {
                            if (jQuery().selectWoo) {
                              a.find(
                                "select.woocommerce-widget-layered-nav-dropdown"
                              ).each(function () {
                                e(this).selectWoo({
                                  placeholder: e(this)
                                    .find("option")
                                    .eq(0)
                                    .text(),
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
                            e("body")
                              .children("span.select2-container")
                              .remove();
                          }
                        }),
                        m)
                      ) {
                        var z = u
                          .filter(
                            'script:contains("var woocommerce_price_slider_params")'
                          )
                          .first();
                        if (
                          z &&
                          z.length &&
                          -1 !== z.text().indexOf("{") &&
                          -1 !== z.text().indexOf("}")
                        ) {
                          var A = z
                            .text()
                            .substring(
                              z.text().indexOf("{"),
                              z.text().indexOf("}") + 1
                            );
                          window.woocommerce_price_slider_params =
                            JSON.parse(A);
                        }
                        var D = e(".entry-title");
                        if (D.length) {
                          var O = u.find(".entry-title").eq(0);
                          O.length && D.html(O.html());
                        }
                        var T = e(".entry-description");
                        if (T.length) {
                          var I = u.find(".entry-description").eq(0);
                          I.length && T.html(I.html());
                        }
                        var L = ".shop-loop-before",
                          F = e(L);
                        F.length &&
                          (u.find(L).length
                            ? F.each(function (t) {
                                var a = u.find(L).eq(t);
                                a.length && e(this).html(a.html()).show();
                              })
                            : F.empty());
                        var B = e(".woocommerce-result-count");
                        if (B.length) {
                          var M = u.find(".woocommerce-result-count").eq(0);
                          M.length &&
                            (B[0].outerHTML = M.length ? M[0].outerHTML : "");
                        }
                        e(document).trigger("yith-wcan-ajax-filtered");
                      }
                      l &&
                        !navigator.userAgent.match(/msie/i) &&
                        window.history.pushState(
                          { pageTitle: (h && h.pageTitle) || "" },
                          "",
                          l
                        );
                    }
                    e(document.body).trigger("porto_load_posts_end", [
                      o.parent(),
                    ]);
                  }
                }
              };
            if (
              void 0 === r &&
              void 0 !== p.cache[d] &&
              void 0 !== p.cache[d][a] &&
              p.cache[d][a]
            )
              return (
                h(p.cache[d][a], !0),
                (p.isLoading = !1),
                void o
                  .removeClass("porto-ajax-loading")
                  .removeClass("loading")
                  .find(".porto-loading-icon")
                  .remove()
              );
            var f = o.data("ajax_load_options");
            if (
              (o.hasClass("archive-products") &&
                -1 != js_porto_vars.use_skeleton_screen.indexOf("shop")) ||
              (c && -1 != js_porto_vars.use_skeleton_screen.indexOf("blog"))
            )
              if (((s = o.find("." + n + "s-container")), f)) {
                var u = "div";
                "product" == n &&
                  "ul" == s.get(0).tagName.toLowerCase() &&
                  (u = "li"),
                  s.addClass("skeleton-body").empty();
                for (
                  var m = 0;
                  m < Number(f.count || (f.columns && 3 * f.columns) || 12);
                  m++
                )
                  s.append(
                    "<" +
                      u +
                      ' class="porto-tb-item post ' +
                      n +
                      ("product" == n ? " product-col" : "") +
                      '"></' +
                      u +
                      ">"
                  );
              } else s.addClass("skeleton-body").children().empty();
            else
              o.children(".porto-loading-icon").length ||
                o.append('<i class="porto-loading-icon"></i>'),
                o.addClass("porto-ajax-loading");
            var g = window.location.href;
            -1 !== g.indexOf("#") && (g = g.split("#")[0]);
            var v,
              w = t.ajax_url;
            o.hasClass("archive-posts")
              ? ((v = { portoajax: !0, load_posts_only: !0 }),
                o.closest(".porto-block").length &&
                  (v.builder_id = o.closest(".porto-block").data("id")),
                (w = void 0 !== l ? l : g))
              : ((v = {
                  action: "porto_ajax_posts",
                  nonce: js_porto_vars.porto_nonce,
                  post_type: n,
                  current_link: g,
                }),
                o.data("post_layout") &&
                  (v.post_layout = o.data("post_layout")),
                f && (v.extra = f),
                void 0 !== r && (v = e.extend(v, r))),
              a && (v.category = a),
              e.ajax({
                url: w,
                type: "post",
                data: v,
                success: h,
                complete: function () {
                  (p.isLoading = !1),
                    s.removeClass("skeleton-body"),
                    o
                      .removeClass("porto-ajax-loading")
                      .removeClass("loading")
                      .find(".porto-loading-icon")
                      .remove();
                },
              });
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    var a;
    (t = t || {}),
      e.extend(t, {
        MemberAjaxPage: {
          defaults: { elements: ".page-members" },
          initialize: function (t) {
            return (
              (this.$elements = t || e(this.defaults.elements)),
              this.build(),
              this
            );
          },
          build: function () {
            return (
              this.$elements.each(function () {
                var i = e(this);
                if (i.find("#memberAjaxBox").get(0)) {
                  var o = {
                    $wrapper: e(this),
                    pages: [],
                    currentPage: 0,
                    total: 0,
                    $ajaxBox: i.find("#memberAjaxBox"),
                    $ajaxBoxContent: i.find("#memberAjaxBoxContent"),
                    build: function () {
                      var t = this;
                      (t.pages = []),
                        (t.total = 0),
                        i.find("a[data-ajax-on-page]").each(function () {
                          t.add(e(this));
                        }),
                        i
                          .off("mousedown", "a[data-ajax-on-page]")
                          .on(
                            "mousedown",
                            "a[data-ajax-on-page]",
                            function (t) {
                              if (2 == t.which) return t.preventDefault(), !1;
                            }
                          );
                    },
                    add: function (t) {
                      var e = this,
                        a = t.attr("href");
                      e.pages.push(a),
                        e.total++,
                        t.off("click").on("click", function (t) {
                          return (
                            t.preventDefault(), e.show(e.pages.indexOf(a)), !1
                          );
                        });
                    },
                    next: function () {
                      var t = this;
                      t.currentPage + 1 < t.total
                        ? t.show(t.currentPage + 1)
                        : t.show(0);
                    },
                    prev: function () {
                      var t = this;
                      t.currentPage - 1 >= 0
                        ? t.show(t.currentPage - 1)
                        : t.show(t.total - 1);
                    },
                    show: function (i) {
                      var o = this;
                      if (
                        ((a = null),
                        o.$ajaxBoxContent.find(".rev_slider, rs-module").get(0))
                      )
                        try {
                          o.$ajaxBoxContent
                            .find(".rev_slider, rs-module")
                            .revkill();
                        } catch (t) {}
                      if (
                        (o.$ajaxBoxContent.empty(),
                        o.$ajaxBox
                          .removeClass("ajax-box-init")
                          .addClass("ajax-box-loading"),
                        t.scrolltoContainer(o.$ajaxBox),
                        (o.currentPage = i),
                        i < 0 || i > o.total - 1)
                      )
                        return o.close(), !1;
                      e.ajax({
                        url: o.pages[i],
                        complete: function (i) {
                          var n = e(i.responseText),
                            s = n.find("#content article.member"),
                            r = n.filter('style[data-type]:not("")'),
                            l = "";
                          r.each(function () {
                            l += e(this).text();
                          }),
                            e("#memberAjaxCSS").get(0)
                              ? e("#memberAjaxCSS").text(l)
                              : e(
                                  '<style id="memberAjaxCSS">' + l + "</style>"
                                ).appendTo("head");
                          var d = o.$ajaxBox.find(".ajax-content-append"),
                            p = "";
                          d.length && (p = d.html()),
                            o.$ajaxBoxContent
                              .html(s.html())
                              .prepend(
                                '<div class="row"><div class="col-lg-12"><hr class="tall m-t-none"></div></div>'
                              )
                              .append(
                                '<div class="row"><div class="col-md-12"><hr class="m-t-md"></div></div>' +
                                  p
                              ),
                            o.$ajaxBox.removeClass("ajax-box-loading"),
                            e(window).trigger("resize"),
                            porto_init(),
                            t.refreshVCContent(o.$ajaxBoxContent),
                            (a = o);
                        },
                      });
                    },
                  };
                  o.build(), i.data("memberAjaxOnPage", o);
                }
              }),
              this
            );
          },
        },
      }),
      e(document.documentElement).on("keyup", function (t) {
        try {
          if (!a) return;
          39 == t.keyCode && a.next(), 37 == t.keyCode && a.prev();
        } catch (t) {}
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        FilterZoom: {
          defaults: { elements: null },
          initialize: function (t) {
            return (
              (this.$elements = t || this.defaults.elements), this.build(), this
            );
          },
          build: function () {
            return (
              this.$elements.each(function () {
                var a = e(this);
                if (a.find(".zoom, .thumb-info-zoom").get(0)) {
                  a.find(".zoom, .thumb-info-zoom").off("click");
                  var i = [],
                    o = 0;
                  a.find("article").each(function () {
                    var t = e(this);
                    if ("none" != t.css("display")) {
                      var a,
                        n = t.find(".zoom, .thumb-info-zoom"),
                        s = n.data("src"),
                        r = n.data("title");
                      n.data("index", o),
                        Array.isArray(s)
                          ? e.each(s, function (t, e) {
                              ((a = {}).src = e),
                                (a.title = r[t]),
                                (i[o] = a),
                                o++;
                            })
                          : (((a = {}).src = s),
                            (a.title = r),
                            (i[o] = a),
                            o++);
                    }
                  }),
                    a.find("article").each(function () {
                      var a = e(this);
                      "none" != a.css("display") &&
                        a
                          .off("click", ".zoom, .thumb-info-zoom")
                          .on("click", ".zoom, .thumb-info-zoom", function (a) {
                            var o = e(this),
                              n = o.parents(".thumb-info"),
                              s = 0;
                            if (n.get(0)) {
                              var r = n.find(".porto-carousel");
                              r.get(0) &&
                                (s =
                                  r.data("owl.carousel").current() -
                                  r.find(".cloned").length / 2);
                            }
                            return (
                              a.preventDefault(),
                              e.fn.magnificPopup &&
                                (e.magnificPopup.close(),
                                e.magnificPopup.open(
                                  e.extend(!0, {}, t.mfpConfig, {
                                    items: i,
                                    gallery: { enabled: !0 },
                                    type: "image",
                                  }),
                                  o.data("index") + s
                                )),
                              !1
                            );
                          });
                    });
                }
              }),
              this
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var a = "__parallax",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.prototype = {
      initialize: function (t, e) {
        return (this.$el = t), this.setData().setOptions(e).build(), this;
      },
      setData: function () {
        return this.$el.data(a, this), this;
      },
      setOptions: function (t) {
        return (
          (this.options = e.extend(!0, {}, { wrapper: this.$el, opts: t })),
          this
        );
      },
      build: function () {
        if (!e.fn.parallax) return this;
        var t = this.options.wrapper,
          a = this.options.opts;
        t.parallax(a);
      },
    }),
      e.extend(t, { Mouseparallax: i }),
      (e.fn.themeMouseparallax = function (i) {
        return this.map(function () {
          var o = e(this);
          return o.data(a) ? o.data(a) : new t.Mouseparallax(o, i);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    t = t || {};
    var a = "__readmore",
      i = function (t, e) {
        return this.initialize(t, e);
      };
    (i.defaults = {
      buttonOpenLabel:
        'Read More <i class="fas fa-chevron-down text-2 ms-1"></i>',
      buttonCloseLabel:
        'Read Less <i class="fas fa-chevron-up text-2 ms-1"></i>',
      enableToggle: !0,
      maxHeight: 300,
      overlayColor: "#43a6a3",
      overlayHeight: 100,
      startOpened: !1,
      align: "left",
    }),
      (i.prototype = {
        initialize: function (t, e) {
          return (
            (this.$el = t),
            this.setData().setOptions(e).build().events().resize(),
            this.options.startOpened &&
              this.options.wrapper
                .find(".readmore-button-wrapper > button")
                .trigger("click"),
            this
          );
        },
        setData: function () {
          return this.$el.data(a, this), this;
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
          var t = this;
          t.options.wrapper.addClass("position-relative"),
            t.options.wrapper.append('<div class="readmore-overlay"></div>');
          var a =
            "linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, " +
            t.options.overlayColor +
            " 100%)";
          switch (
            (e("html").hasClass("safari") &&
              (a =
                "-webkit-linear-gradient(top, rgba(2, 0, 36, 0) 0%, " +
                t.options.overlayColor +
                " 100%)"),
            t.options.wrapper
              .find(".readmore-overlay")
              .css({
                background: a,
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: t.options.overlayHeight,
                "z-index": 1,
              }),
            t.options.wrapper
              .find(".readmore-button-wrapper")
              .removeClass("d-none")
              .css({
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                "z-index": 2,
              }),
            t.options.wrapper
              .find(".readmore-button-wrapper > button")
              .html(t.options.buttonOpenLabel),
            t.options.wrapper.css({
              height: t.options.maxHeight,
              "overflow-y": "hidden",
            }),
            t.options.align)
          ) {
            case "center":
              t.options.wrapper
                .find(".readmore-button-wrapper")
                .addClass("text-center");
              break;
            case "right":
              t.options.wrapper
                .find(".readmore-button-wrapper")
                .addClass("text-end");
              break;
            default:
              t.options.wrapper
                .find(".readmore-button-wrapper")
                .addClass("text-start");
          }
          return this;
        },
        events: function () {
          var t = this;
          return (
            (t.readMore = function () {
              t.options.wrapper
                .find(".readmore-button-wrapper > button:not(.readless)")
                .on("click", function (a) {
                  a.preventDefault(), t.options.wrapper.addClass("opened");
                  var i = e(this);
                  setTimeout(function () {
                    t.options.wrapper.animate(
                      { height: t.options.wrapper[0].scrollHeight },
                      function () {
                        t.options.enableToggle || i.fadeOut(),
                          i
                            .html(t.options.buttonCloseLabel)
                            .addClass("readless")
                            .off("click"),
                          t.readLess(),
                          t.options.wrapper.find(".readmore-overlay").fadeOut(),
                          t.options.wrapper.css({
                            "max-height": "none",
                            overflow: "visible",
                          }),
                          t.options.wrapper
                            .find(".readmore-button-wrapper")
                            .animate({ bottom: -20 });
                      }
                    );
                  }, 200);
                });
            }),
            (t.readLess = function () {
              t.options.wrapper
                .find(".readmore-button-wrapper > button.readless")
                .on("click", function (a) {
                  a.preventDefault(), t.options.wrapper.removeClass("opened");
                  var i = e(this);
                  t.options.wrapper
                    .find(".readmore-button-wrapper")
                    .animate({ bottom: 0 }),
                    t.options.wrapper.find(".readmore-overlay").fadeIn(),
                    setTimeout(function () {
                      t.options.wrapper
                        .height(t.options.wrapper[0].scrollHeight)
                        .animate({ height: t.options.maxHeight }, function () {
                          i
                            .html(t.options.buttonOpenLabel)
                            .removeClass("readless")
                            .off("click"),
                            t.readMore(),
                            t.options.wrapper.css({ overflow: "hidden" });
                        });
                    }, 200);
                });
            }),
            t.readMore(),
            this
          );
        },
        resize: function () {
          var t = this;
          window.addEventListener("resize", function () {
            t.options.wrapper.hasClass("opened")
              ? t.options.wrapper.css({ height: "auto" })
              : t.options.wrapper.css({ height: t.options.maxHeight });
          });
        },
      }),
      e.extend(t, { PluginReadMore: i }),
      (e.fn.themePluginReadMore = function (t) {
        return this.map(function () {
          var t = e(this);
          return t.data(a) ? t.data(a) : new i(t, t.data("plugin-options"));
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    (t.initAsync = function (a, i) {
      e.fn.themeAnimate &&
        e(function () {
          var a = i.querySelectorAll("svg [data-appear-animation]");
          a.length &&
            e(a).closest("svg").attr("data-appear-animation-svg", "1");
          var o = i.querySelectorAll(
            "[data-plugin-animate], [data-appear-animation], [data-appear-animation-svg]"
          );
          if (o.length) {
            var n = function () {
              window.innerWidth < 768 &&
                (window.removeEventListener("resize", n),
                o.forEach(function (t) {
                  t.classList.add("appear-animation-visible");
                }));
            };
            t.animation_support
              ? (window.addEventListener("resize", n),
                t.dynIntObsInit(o, "themeAnimate", t.Animate.defaults))
              : o.forEach(function (t) {
                  t.classList.add("appear-animation-visible");
                });
          }
        }),
        e.fn.themePluginAnimatedLetters &&
          (e("[data-plugin-animated-letters]").length ||
            e(".animated-letters").length) &&
          t.intObs(
            "[data-plugin-animated-letters]:not(.manual), .animated-letters",
            "themePluginAnimatedLetters"
          ),
        e.fn.themeCarousel &&
          e(function () {
            var i = a.find(".owl-carousel:not(.manual)");
            i
              .on(
                "initialized.owl.carousel refreshed.owl.carousel",
                function (a) {
                  var i = e(a.currentTarget);
                  if (
                    (i
                      .find("[data-appear-animation]:not(.appear-animation)")
                      .addClass("appear-animation"),
                    i.find(".owl-item.cloned").length)
                  ) {
                    i.find(
                      ".porto-lazyload:not(.lazy-load-loaded)"
                    ).themePluginLazyLoad({
                      effect: "fadeIn",
                      effect_speed: 400,
                    });
                    var o =
                      a.currentTarget.querySelectorAll(".appear-animation");
                    o.length &&
                      t.dynIntObsInit(o, "themeAnimate", t.Animate.defaults),
                      e.fn.themePluginAnimatedLetters &&
                        e(this).find(
                          ".owl-item.cloned [data-plugin-animated-letters]:not(.manual)"
                        ).length &&
                        t.dynIntObsInit(
                          e(this).find(
                            ".owl-item.cloned [data-plugin-animated-letters]:not(.manual)"
                          ),
                          "themePluginAnimatedLetters"
                        );
                  }
                  setTimeout(function () {
                    var t = i.find(".owl-item:not(.active)");
                    !e("html").hasClass("no-csstransitions") &&
                      window.innerWidth > 767 &&
                      (t
                        .find(".appear-animation")
                        .removeClass("appear-animation-visible"),
                      t.find(".appear-animation").each(function () {
                        var t = e(this),
                          a = Math.abs(
                            t.data("appear-animation-delay")
                              ? t.data("appear-animation-delay")
                              : 0
                          );
                        a > 1 && (this.style.animationDelay = a + "ms");
                        var i = Math.abs(
                          t.data("appear-animation-duration")
                            ? t.data("appear-animation-duration")
                            : 1e3
                        );
                        1e3 != i && (this.style.animationDuration = i + "ms");
                      })),
                      window.innerWidth >= 1200 &&
                        t
                          .find("[data-vce-animate]")
                          .removeAttr("data-vcv-o-animated");
                  }, 300);
                }
              )
              .on("translated.owl.carousel", function (a) {
                var i = e(a.currentTarget),
                  o = i.find(".owl-item.active");
                o.hasClass("translating")
                  ? o.removeClass("translating")
                  : (i.find(".owl-item.translating").removeClass("translating"),
                    i
                      .find("[data-plugin-animated-letters]")
                      .removeClass("invisible"),
                    i
                      .find(".owl-item.active [data-plugin-animated-letters]")
                      .trigger("animated.letters.initialize"),
                    window.innerWidth > 767 &&
                      (i
                        .find(".appear-animation")
                        .removeClass("appear-animation-visible"),
                      o.find(".appear-animation").each(function () {
                        var t = e(this),
                          a = t.data("appear-animation");
                        t.addClass(a + " appear-animation-visible");
                      })),
                    o.find(".slide-animate").each(function () {
                      var a = e(this),
                        i = a.data("settings");
                      if (i && (i._animation || i.animation)) {
                        var o = i._animation || i.animation,
                          n = i._animation_delay || i.animation_delay || 0;
                        t.requestTimeout(function () {
                          a.removeClass("elementor-invisible").addClass(
                            "animated " + o
                          );
                        }, n);
                      }
                    }),
                    window.innerWidth >= 1200 &&
                      (i
                        .find("[data-vce-animate]")
                        .removeAttr("data-vcv-o-animated")
                        .removeAttr("data-vcv-o-animated-fully"),
                      o.find("[data-vce-animate]").each(function () {
                        var t = e(this);
                        if (t.data("porto-origin-anim")) {
                          var a = t.data("porto-origin-anim");
                          t.attr("data-vce-animate", a).attr(
                            "data-vcv-o-animated",
                            !0
                          );
                          var i =
                              1e3 *
                              parseFloat(
                                window.getComputedStyle(this).animationDuration
                              ),
                            o =
                              1e3 *
                              parseFloat(
                                window.getComputedStyle(this).animationDelay
                              );
                          window.setTimeout(function () {
                            t.attr("data-vcv-o-animated-fully", !0);
                          }, o + i + 5);
                        }
                      })));
              }),
              i.on("translate.owl.carousel", function () {
                e(this)
                  .find("[data-plugin-animated-letters]")
                  .addClass("invisible"),
                  e(this)
                    .find("[data-plugin-animated-letters]")
                    .trigger("animated.letters.destroy");
              }),
              i
                .filter(function () {
                  return !!e(this).find("[data-vce-animate]").length;
                })
                .on("translate.owl.carousel", function (t) {
                  var a = e(t.currentTarget);
                  a.find(".owl-item.active").addClass("translating"),
                    window.innerWidth >= 1200 &&
                      a.find("[data-vce-animate]").each(function () {
                        var t = e(this);
                        t.data("porto-origin-anim", t.data("vce-animate")).attr(
                          "data-vce-animate",
                          ""
                        );
                      });
                }),
              i
                .filter(function () {
                  var t = e(this).find(".elementor-invisible");
                  return !!t.length && (t.addClass("slide-animate"), !0);
                })
                .on("translate.owl.carousel", function (t) {
                  var a = e(t.currentTarget);
                  a.find(".owl-item.active").addClass("translating"),
                    a
                      .find(".owl-item:not(.active) .slide-animate")
                      .addClass("elementor-invisible"),
                    a.find(".slide-animate").each(function () {
                      var t = e(this),
                        a = t.data("settings");
                      (a._animation || a.animation) &&
                        t.removeClass(a._animation || a.animation);
                    });
                }),
              i
                .filter(function () {
                  return !!e(this).find(".appear-animation").length;
                })
                .on("translate.owl.carousel", function (t) {
                  if (window.innerWidth > 767) {
                    var a = e(t.currentTarget);
                    a.find(".owl-item.active").addClass("translating"),
                      a.find(".appear-animation").each(function () {
                        var t = e(this);
                        t.removeClass(t.data("appear-animation"));
                      });
                  }
                }),
              a
                .find(
                  "[data-plugin-carousel]:not(.manual), .porto-carousel:not(.manual)"
                )
                .each(function () {
                  var t,
                    a = e(this),
                    i = a.data("plugin-options");
                  i && (t = i),
                    setTimeout(function () {
                      a.themeCarousel(t);
                    }, 0);
                });
          }),
        a.find(".thumb-gallery-thumbs").each(function () {
          var t = e(this),
            a = t.parent().find(".thumb-gallery-detail"),
            i = !1;
          t.data("initThumbs") ||
            (a.on("changed.owl.carousel", function (e) {
              if (!i) {
                i = !0;
                var o = a.find(".owl-item").length,
                  n = a.find(".cloned").length;
                o &&
                  t.trigger("to.owl.carousel", [
                    (e.item.index - n / 2 - 1) % o,
                    300,
                    !0,
                  ]),
                  (i = !1);
              }
            }),
            t
              .on("changed.owl.carousel", function (e) {
                if (!i) {
                  i = !0;
                  var o = t.find(".owl-item").length,
                    n = t.find(".cloned").length;
                  o &&
                    a.trigger("to.owl.carousel", [
                      (e.item.index - n / 2) % o,
                      300,
                      !0,
                    ]),
                    (i = !1);
                }
              })
              .on("click", ".owl-item", function () {
                if (!i) {
                  i = !0;
                  var o = t.find(".owl-item").length,
                    n = t.find(".cloned").length;
                  o &&
                    a.trigger("to.owl.carousel", [
                      (e(this).index() - n / 2) % o,
                      300,
                      !0,
                    ]),
                    (i = !1);
                }
              })
              .data("initThumbs", !0));
        }),
        a.find(".video-fixed").each(function () {
          var a = e(this),
            i = a.find("video, iframe");
          i.length &&
            window.addEventListener(
              "scroll",
              function () {
                var o =
                  e(window).scrollTop() - a.position().top + t.adminBarHeight();
                i.css("cssText", "top: " + o + "px !important;");
              },
              { passive: !0 }
            );
        });
    }),
      e(document.body).trigger("porto_async_init");
  }.apply(this, [window.theme, jQuery]),
  jQuery(document).ready(function (t) {
    "use strict";
    function e(e) {
      var a = e.data("trigger-id"),
        i = e.data("overlay-class"),
        o = e.data("extra-class") ? e.data("extra-class") : "",
        n = e.data("type");
      if (void 0 !== a) {
        void 0 === n && (n = "inline"), "inline" == n && (a = "#" + escape(a));
        var s = { items: { src: a }, type: n, mainClass: o };
        e.hasClass("porto-onload") &&
          (s.callbacks = {
            beforeClose: function () {
              t(".mfp-wrap .porto-disable-modal-onload").length &&
                (t(".mfp-wrap .porto-disable-modal-onload").is(":checked") ||
                  t(
                    '.mfp-wrap .porto-disable-modal-onload input[type="checkbox"]'
                  ).is(":checked")) &&
                t.cookie("porto_modal_disable_onload", "true", { expires: 7 });
            },
          }),
          void 0 !== i && i && (s.mainClass += escape(i)),
          t.magnificPopup.open(t.extend(!0, {}, theme.mfpConfig, s), 0);
      }
    }
    function a(a) {
      if (
        ((void 0 !== a && a.length) || (a = t(document.body)),
        a.find(".lightbox:not(.manual)").each(function () {
          var e,
            a = t(this),
            i = a.data("lightbox-options");
          i
            ? (e = i)
            : ("object" != typeof (i = a.data("plugin-options")) &&
                (i = JSON.parse(i)),
              i && (e = i)),
            a.themeLightbox(e);
        }),
        a
          .find(".porto-popup-iframe")
          .magnificPopup(
            t.extend(!0, {}, theme.mfpConfig, {
              disableOn: 700,
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: !1,
              fixedContentPos: !1,
            })
          ),
        a
          .find(".porto-popup-ajax")
          .magnificPopup(t.extend(!0, {}, theme.mfpConfig, { type: "ajax" })),
        a.find(".porto-popup-content").each(function () {
          var e = t(this).attr("data-animation");
          t(this).magnificPopup(
            t.extend(!0, {}, theme.mfpConfig, {
              type: "inline",
              fixedContentPos: !1,
              fixedBgPos: !0,
              overflowY: "auto",
              closeBtnInside: !0,
              preloader: !1,
              midClick: !0,
              removalDelay: 300,
              mainClass: e,
            })
          );
        }),
        a.find(".popup-youtube, .popup-vimeo, .popup-gmaps").each(function (e) {
          var a = t(this).find(".porto-modal-trigger").data("overlay-class"),
            i = {
              type: "iframe",
              removalDelay: 160,
              preloader: !1,
              fixedContentPos: !1,
            };
          void 0 !== a && a && (i.mainClass = escape(a)),
            t(this).magnificPopup(i);
        }),
        a.find(".porto-modal-trigger.porto-onload").length)
      ) {
        var i = a.find(".porto-modal-trigger.porto-onload").eq(0),
          o = 0;
        i.data("timeout") && (o = parseInt(i.data("timeout"), 10)),
          setTimeout(function () {
            e(i);
          }, o);
      }
      a.on("click", ".porto-modal-trigger", function (a) {
        a.preventDefault(), e(t(this));
      }),
        a.hasClass("login-popup") &&
          a
            .find(".porto-link-login, .porto-link-register, .my-account")
            .magnificPopup({
              items: {
                src:
                  theme.ajax_url +
                  "?action=porto_account_login_popup&nonce=" +
                  js_porto_vars.porto_nonce,
                type: "ajax",
              },
              tLoading: '<i class="porto-loading-icon"></i>',
              callbacks: {
                ajaxContentAdded: function () {
                  t(window).trigger("porto_login_popup_opened");
                },
              },
            }),
        a
          .find(".product-images")
          .magnificPopup(
            t.extend(!0, {}, theme.mfpConfig, {
              delegate: ".img-thumbnail a.zoom",
              type: "image",
              gallery: { enabled: !0 },
            })
          ),
        a.find(".porto-posts-grid").each(function () {
          t(this).magnificPopup(
            t.extend(!0, {}, theme.mfpConfig, {
              delegate: ".porto-tb-featured-image span.zoom",
              type: "image",
              gallery: { enabled: !0 },
            })
          );
        }),
        a
          .find(".porto-posts-grid .tb-image-type-slider div.zoom")
          .each(function () {
            var e = t(this),
              a = [];
            e.find("a").each(function () {
              var e = {};
              (e.src = t(this).attr("href")),
                (e.title = t(this).attr("title")),
                a.push(e);
            }),
              a.length &&
                e.on("click", function () {
                  var i = e.siblings(".porto-carousel");
                  if (i.length) {
                    var o =
                      i.data("owl.carousel").current() -
                      i.find(".cloned").length / 2;
                    t.magnificPopup.open(
                      t.extend(!0, {}, theme.mfpConfig, {
                        items: a,
                        gallery: { enabled: !0 },
                        type: "image",
                      }),
                      o
                    );
                  }
                });
          });
    }
    if (
      (t.fn.themeVcImageZoom &&
        t(function () {
          var e = null;
          t(".porto-vc-zoom:not(.manual)").each(function () {
            var a,
              i = t(this),
              o = i.attr("data-gallery"),
              n = i.data("plugin-options");
            if (
              (n && (a = n),
              void 0 === a && (a = {}),
              (a.container = i.parent()),
              "true" == o)
            ) {
              var s = "vc_row";
              i.attr("data-container") && (s = i.attr("data-container"));
              var r = t(i.closest("." + s).get(0));
              if (r.length > 0 && null != e && e.is(r)) return;
              r.length > 0 && (e = r),
                null != e && e.length > 0 && (a.container = e);
            }
            i.themeVcImageZoom(a);
          });
        }),
      t.fn.magnificPopup
        ? a()
        : setTimeout(function () {
            t.fn.magnificPopup && a();
          }, 500),
      t(document.body).on("porto_load_posts_end", function (e, i) {
        t.fn.magnificPopup && a(i);
      }),
      void 0 !== theme.PostAjaxModal &&
        (t(".page-portfolios").length &&
          theme.PostAjaxModal.initialize(t(".page-portfolios")),
        t(".page-members").length &&
          theme.PostAjaxModal.initialize(t(".page-members"), "member")),
      void 0 !== theme.PortfolioAjaxPage &&
        theme.PortfolioAjaxPage.initialize(),
      void 0 !== theme.PostFilter)
    ) {
      var i = t(
        "ul[data-filter-type], .portfolio-filter, .member-filter, .faq-filter, .porto-ajax-filter.product-filter, .porto-ajax-filter.post-filter"
      );
      i.length && theme.PostFilter.initialize(i);
    }
    t("body").on(
      "click",
      ".porto-ajax-load .pagination:not(.load-more) .page-numbers",
      function (e) {
        var a = t(this);
        if (!a.hasClass("current") && !a.hasClass("dots")) {
          e.preventDefault();
          var i = a.closest(".porto-ajax-load"),
            o = i.data("post_type"),
            n = i.find("." + o + "s-container");
          if (n.length && !i.hasClass("loading")) {
            i.addClass("loading");
            var s = i.find(".porto-ajax-filter"),
              r =
                s.length &&
                s.children(".active").length &&
                s.children(".active").data("filter");
            "*" == r && (r = "");
            var l = {},
              d = a.attr("href").match(/paged=(\d+)|page\/(\d+)/);
            d && Array.isArray(d) && (d[1] || d[2])
              ? (l.page = parseInt(d[1] || d[2]))
              : a.hasClass("prev")
              ? (l.page = parseInt(a.next().text()))
              : a.hasClass("next")
              ? (l.page = parseInt(a.prev().text()))
              : (l.page = parseInt(a.text())),
              theme.PostFilter.load_posts(
                r,
                i.hasClass("load-infinite"),
                i,
                o,
                n,
                l,
                a.attr("href")
              );
          }
        }
      }
    ),
      void 0 !== theme.MemberAjaxPage && theme.MemberAjaxPage.initialize(),
      void 0 !== theme.FilterZoom &&
        (theme.FilterZoom.initialize(t(".page-portfolios")),
        theme.FilterZoom.initialize(t(".page-members")),
        theme.FilterZoom.initialize(t(".blog-posts-related")));
    var o = t(".minicart-offcanvas"),
      n = t(".wishlist-offcanvas"),
      s = t(".mobile-sidebar"),
      r = t("#side-nav-panel"),
      l = t("#header .btn-close-search-form"),
      d = t("html");
    (o.length ||
      n.length ||
      s.length ||
      r.length ||
      t(".skeleton-loading").length ||
      l.length) &&
      (t(document.documentElement).on("keyup", function (e) {
        try {
          27 == e.keyCode &&
            (o.removeClass("minicart-opened"),
            n.removeClass("minicart-opened"),
            s.length &&
              (d.removeClass("filter-sidebar-opened"),
              d.removeClass("sidebar-opened"),
              t(".sidebar-overlay").removeClass("active")),
            r.length &&
              d.hasClass("panel-opened") &&
              (d.removeClass("panel-opened"),
              t(".panel-overlay").removeClass("active")),
            l.length && l.trigger("click"));
        } catch (t) {}
      }),
      t(".skeleton-loading").on("skeleton-loaded", function () {
        s = t(".mobile-sidebar");
      })),
      t.fn.themeMouseparallax &&
        t(function () {
          t('[data-plugin="mouse-parallax"]').each(function () {
            var e,
              a = t(this);
            a.data("parallax") &&
              (a.parallax("disable"),
              a.removeData("parallax"),
              a.removeData("options")),
              a.hasClass("elementor-element")
                ? a
                    .children(
                      ".elementor-widget-container, .elementor-container, .elementor-widget-wrap, .elementor-column-wrap"
                    )
                    .addClass("layer")
                    .attr("data-depth", a.attr("data-floating-depth"))
                : a
                    .children(".layer")
                    .attr("data-depth", a.attr("data-floating-depth"));
            var i = a.data("options");
            i && (e = i), a.themeMouseparallax(e);
          });
        }),
      t.fn.themePluginReadMore &&
        t("[data-plugin-readmore]").length &&
        t("[data-plugin-readmore]:not(.manual)").themePluginReadMore();
  }),
  function (t, e) {
    if (e(".wishlist-popup").length) {
      var a = null;
      e(".wishlist-offcanvas .my-wishlist").on("click", function (t) {
        t.preventDefault(), e(this).parent().toggleClass("minicart-opened");
      }),
        e(".wishlist-offcanvas .minicart-overlay").on("click", function () {
          e(this).closest(".wishlist-offcanvas").removeClass("minicart-opened");
        });
      var i = function () {
        ((a = new Worker(
          js_porto_vars.ajax_loader_url.replace(
            "/images/ajax-loader@2x.gif",
            "/js/woocommerce-worker.js"
          )
        )).onmessage = function (t) {
          e(".wishlist-popup").html(t.data);
        }),
          a.postMessage({
            initWishlist: !0,
            ajaxurl: t.ajax_url,
            nonce: js_porto_vars.porto_nonce,
          });
      };
      t && t.isLoaded
        ? setTimeout(function () {
            i();
          }, 100)
        : e(window).on("load", function () {
            i();
          }),
        e(".wishlist-popup").on("click", ".remove_from_wishlist", function (t) {
          t.preventDefault();
          var a = e(this),
            i = a.attr("data-product_id"),
            o = e(
              ".wishlist_table #yith-wcwl-row-" + i + " .remove_from_wishlist"
            );
          a.closest(".wishlist-item").find(".ajax-loading").show(),
            o.length
              ? o.trigger("click")
              : e.ajax({
                  url: yith_wcwl_l10n.ajax_url,
                  data: {
                    action: yith_wcwl_l10n.actions.remove_from_wishlist_action,
                    remove_from_wishlist: i,
                    nonce: yith_wcwl_l10n.nonce.remove_from_wishlist_nonce,
                    from: "theme",
                  },
                  method: "post",
                  success: function (t) {
                    var a = e(
                      ".yith-wcwl-add-to-wishlist.add-to-wishlist-" + i
                    );
                    if (a.length) {
                      var o = a.data("fragment-options"),
                        n = a.find("a");
                      if (n.length) {
                        o.in_default_wishlist &&
                          (delete o.in_default_wishlist,
                          a.attr(JSON.stringify(o))),
                          a.removeClass("exists"),
                          a
                            .find(".yith-wcwl-wishlistexistsbrowse")
                            .addClass("yith-wcwl-add-button")
                            .removeClass("yith-wcwl-wishlistexistsbrowse"),
                          a
                            .find(".yith-wcwl-wishlistaddedbrowse")
                            .addClass("yith-wcwl-add-button")
                            .removeClass("yith-wcwl-wishlistaddedbrowse"),
                          n
                            .attr(
                              "href",
                              location.href +
                                "?post_type=product&amp;add_to_wishlist=" +
                                i
                            )
                            .attr("data-product-id", i)
                            .attr("data-product-type", o.product_type);
                        var s = e(".single_add_to_wishlist").data("title");
                        s || (s = "Add to wishlist"),
                          n
                            .attr("title", s)
                            .attr("data-title", s)
                            .addClass("add_to_wishlist single_add_to_wishlist")
                            .html("<span>" + s + "</span>");
                      }
                    }
                    e(document.body).trigger("removed_from_wishlist");
                  },
                });
        }),
        e(document.body).on(
          "added_to_wishlist removed_from_wishlist",
          function (e) {
            a &&
              a.postMessage({
                loadWishlist: !0,
                ajaxurl: t.ajax_url,
                nonce: js_porto_vars.porto_nonce,
              });
          }
        );
    }
    var o = e(".porto-video-social.video-youtube");
    o.length &&
      ((window.onYouTubeIframeAPIReady = function () {
        o.each(function () {
          var t = e(this),
            a = t.parent(".video-wrapper"),
            i = t.attr("id"),
            o = t.data("video"),
            n = t.data("loop"),
            s = t.data("audio"),
            r = 1,
            l = 0;
          "0" === t.data("autoplay") && (r = 0),
            t.data("controls") && (l = parseInt(t.data("controls"))),
            new YT.Player(i, {
              width: "100%",
              videoId: o,
              playerVars: {
                autoplay: r,
                controls: l,
                modestbranding: 1,
                rel: 0,
                playsinline: 1,
                showinfo: 0,
                loop: n,
              },
              events: {
                onReady: function (t) {
                  a.length && a.themeFitVideo(),
                    0 === parseInt(s) &&
                      t &&
                      t.target &&
                      t.target.mute &&
                      t.target.mute();
                },
              },
            });
        });
      }),
      e('script[src*="www.youtube.com/iframe_api"]').length
        ? setTimeout(onYouTubeIframeAPIReady, 350)
        : (((s = document.createElement("script")).src =
            "//www.youtube.com/iframe_api"),
          (r =
            document.getElementsByTagName("script")[0]).parentNode.insertBefore(
            s,
            r
          )));
    var n = e(".porto-video-social.video-vimeo");
    if (n.length) {
      var s,
        r,
        l = function () {
          n.each(function () {
            var t = e(this),
              a = t.parent(".fit-video"),
              i = t.attr("id"),
              o = t.data("video"),
              n = t.data("loop"),
              s = t.data("audio"),
              r = !0;
            "0" === t.data("autoplay") && (r = !1);
            var l = new Vimeo.Player(i, {
              id: o,
              loop: 1 === parseInt(n),
              autoplay: r,
              transparent: !1,
              background: !0,
              muted: 0 === parseInt(s),
              events: {
                onReady: function (t) {
                  a.length && a.themeFitVideo(),
                    0 === parseInt(s) &&
                      t &&
                      t.target &&
                      t.target.mute &&
                      t.target.mute();
                },
              },
            });
            0 === parseInt(s) && l.setVolume(0),
              a.length &&
                l.ready().then(function () {
                  a.themeFitVideo();
                });
          });
        };
      if (e('script[src="https://player.vimeo.com/api/player.js"]').length)
        setTimeout(l, 350);
      else
        (s = document.createElement("script")).addEventListener(
          "load",
          function (t) {
            setTimeout(l, 50);
          }
        ),
          (s.src = "https://player.vimeo.com/api/player.js"),
          (r =
            document.getElementsByTagName("script")[0]).parentNode.insertBefore(
            s,
            r
          );
    }
  }.apply(this, [window.theme, jQuery]);
