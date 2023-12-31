String.prototype.endsWith ||
  (String.prototype.endsWith = function (t, e) {
    return (
      (void 0 === e || e > this.length) && (e = this.length),
      this.substring(e - t.length, e) === t
    );
  }),
  window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = Array.prototype.forEach),
  String.prototype.trim ||
    (String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }),
  (function (t, e) {
    "use strict";
    jQuery.fn[e] = function (t) {
      return t
        ? this.on(
            "resize",
            ((i = t),
            function () {
              var t = this,
                e = arguments;
              function a() {
                n || i.apply(t, e), (s = null);
              }
              s && s.val ? theme.deleteTimeout(s) : n && i.apply(t, e),
                (s = theme.requestTimeout(a, o || 100));
            })
          )
        : this.trigger(e);
      var i, o, n, s;
    };
  })(jQuery, "smartresize"),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, i, o, n) {
      return jQuery.easing[jQuery.easing.def](t, e, i, o, n);
    },
    easeOutQuad: function (t, e, i, o, n) {
      return -o * (e /= n) * (e - 2) + i;
    },
    easeInOutQuart: function (t, e, i, o, n) {
      return (e /= n / 2) < 1
        ? (o / 2) * e * e * e * e + i
        : (-o / 2) * ((e -= 2) * e * e * e - 2) + i;
    },
    easeOutQuint: function (t, e, i, o, n) {
      return o * ((e = e / n - 1) * e * e * e * e + 1) + i;
    },
  }),
  (function (t) {
    t.fn.visible = function (e, i, o, n) {
      if (!(this.length < 1)) {
        var s = this.length > 1 ? this.eq(0) : this,
          a = null != n,
          r = t(a ? n : window),
          l = a ? r.position() : 0,
          d = s.get(0),
          h = r.outerWidth(),
          c = r.outerHeight(),
          u = ((o = o || "both"), !0 !== i || d.offsetWidth * d.offsetHeight);
        if ("function" == typeof d.getBoundingClientRect) {
          var p = d.getBoundingClientRect(),
            f = a
              ? p.top - l.top >= 0 && p.top < c + l.top
              : p.top >= 0 && p.top < c,
            m = a
              ? p.bottom - l.top > 0 && p.bottom <= c + l.top
              : p.bottom > 0 && p.bottom <= c,
            g = a
              ? p.left - l.left >= 0 && p.left < h + l.left
              : p.left >= 0 && p.left < h,
            v = a
              ? p.right - l.left > 0 && p.right < h + l.left
              : p.right > 0 && p.right <= h,
            w = e ? f || m : f && m,
            y = e ? g || v : g && v;
          if ("both" === o) return u && w && y;
          if ("vertical" === o) return u && w;
          if ("horizontal" === o) return u && y;
        } else {
          var b = a ? 0 : l,
            _ = b + c,
            C = r.scrollLeft(),
            k = C + h,
            x = s.position(),
            $ = x.top,
            T = $ + s.height(),
            j = x.left,
            z = j + s.width(),
            S = !0 === e ? T : $,
            I = !0 === e ? $ : T,
            O = !0 === e ? z : j,
            H = !0 === e ? j : z;
          if ("both" === o) return !!u && I <= _ && S >= b && H <= k && O >= C;
          if ("vertical" === o) return !!u && I <= _ && S >= b;
          if ("horizontal" === o) return !!u && H <= k && O >= C;
        }
      }
    };
  })(jQuery),
  (window.theme = {}),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        rtl: "1" == js_porto_vars.rtl,
        rtl_browser: e("html").hasClass("browser-rtl"),
        ajax_url: js_porto_vars.ajax_url,
        request_error: js_porto_vars.request_error,
        change_logo: "1" == js_porto_vars.change_logo,
        show_sticky_header: "1" == js_porto_vars.show_sticky_header,
        show_sticky_header_tablet:
          "1" == js_porto_vars.show_sticky_header_tablet,
        show_sticky_header_mobile:
          "1" == js_porto_vars.show_sticky_header_mobile,
        category_ajax: "1" == js_porto_vars.category_ajax,
        prdctfltr_ajax: "1" == js_porto_vars.prdctfltr_ajax,
        container_width: parseInt(js_porto_vars.container_width),
        grid_gutter_width: parseInt(js_porto_vars.grid_gutter_width),
        screen_lg: parseInt(js_porto_vars.screen_lg),
        slider_loop: "1" == js_porto_vars.slider_loop,
        slider_autoplay: "1" == js_porto_vars.slider_autoplay,
        slider_autoheight: "1" == js_porto_vars.slider_autoheight,
        slider_speed: js_porto_vars.slider_speed
          ? js_porto_vars.slider_speed
          : 5e3,
        slider_nav: "1" == js_porto_vars.slider_nav,
        slider_nav_hover: "1" == js_porto_vars.slider_nav_hover,
        slider_margin: "1" == js_porto_vars.slider_margin ? 40 : 0,
        slider_dots: "1" == js_porto_vars.slider_dots,
        slider_animatein: js_porto_vars.slider_animatein
          ? js_porto_vars.slider_animatein
          : "",
        slider_animateout: js_porto_vars.slider_animateout
          ? js_porto_vars.slider_animateout
          : "",
        product_thumbs_count: js_porto_vars.product_thumbs_count
          ? js_porto_vars.product_thumbs_count
          : 4,
        product_zoom: "1" == js_porto_vars.product_zoom,
        product_zoom_mobile: "1" == js_porto_vars.product_zoom_mobile,
        product_image_popup:
          "1" == js_porto_vars.product_image_popup && "fadeOut",
        animation_support:
          !e("html").hasClass("no-csstransitions") && window.innerWidth > 767,
        owlConfig: {
          rtl: "1" == js_porto_vars.rtl,
          loop: "1" == js_porto_vars.slider_loop,
          autoplay: "1" == js_porto_vars.slider_autoplay,
          autoHeight: "1" == js_porto_vars.slider_autoheight,
          autoplayTimeout: js_porto_vars.slider_speed
            ? js_porto_vars.slider_speed
            : 7e3,
          autoplayHoverPause: !0,
          lazyLoad: !0,
          nav: "1" == js_porto_vars.slider_nav,
          navText: ["", ""],
          dots: "1" == js_porto_vars.slider_dots,
          stagePadding:
            "1" != js_porto_vars.slider_nav_hover &&
            "1" == js_porto_vars.slider_margin
              ? 40
              : 0,
          animateOut: js_porto_vars.slider_animateout
            ? js_porto_vars.slider_animateout
            : "",
          animateIn: js_porto_vars.slider_animatein
            ? js_porto_vars.slider_animatein
            : "",
        },
        sticky_nav_height: 0,
        is_device_mobile:
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent || navigator.vendor || window.opera
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            (navigator.userAgent || navigator.vendor || window.opera).substr(
              0,
              4
            )
          ),
        getScrollbarWidth: function () {
          return (
            void 0 === this.scrollbarSize &&
              (this.scrollbarSize =
                window.innerWidth - document.documentElement.clientWidth),
            this.scrollbarSize
          );
        },
        isTablet: function () {
          return window.innerWidth < 992;
        },
        isMobile: function () {
          return window.innerWidth <= 480;
        },
        isIOS: function () {
          return (
            [
              "iPad Simulator",
              "iPhone Simulator",
              "iPod Simulator",
              "iPad",
              "iPhone",
              "iPod",
            ].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
          );
        },
        refreshVCContent: function (i) {
          (i || e(document.body).hasClass("elementor-page")) &&
            e(window).trigger("resize"),
            t.refreshStickySidebar(!0),
            "function" == typeof window.vc_js && window.vc_js(),
            e(document.body).trigger("porto_refresh_vc_content", [i]);
        },
        adminBarHeight: function () {
          if (t.adminBarHeightNum || 0 === t.adminBarHeightNum)
            return t.adminBarHeightNum;
          var i = document.getElementById("wpadminbar"),
            o = e(".porto-scroll-progress.fixed-top");
          return (
            o.length
              ? (t.adminBarHeightNum = o.height())
              : (t.adminBarHeightNum = 0),
            i &&
              i.offsetHeight &&
              window.innerWidth > 600 &&
              (t.adminBarHeightNum += i.offsetHeight),
            t.adminBarHeightNum
          );
        },
        refreshStickySidebar: function (i) {
          var o = e(".sidebar [data-plugin-sticky]");
          o.get(0) &&
            (i
              ? t.requestTimeout(function () {
                  o.trigger("recalc.pin");
                }, 400)
              : o.trigger("recalc.pin"));
        },
        scrolltoContainer: function (i, o) {
          i.get(0) &&
            (window.innerWidth < 992 && e(".sidebar-overlay").trigger("click"),
            o || (o = 600),
            e("html, body")
              .stop()
              .animate(
                {
                  scrollTop:
                    i.offset().top -
                    t.StickyHeader.sticky_height -
                    t.adminBarHeight() -
                    t.sticky_nav_height -
                    18,
                },
                o,
                "easeOutQuad"
              ));
        },
        requestFrame: function (t) {
          var e =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame;
          if (!e) return setTimeout(t, 1e3 / 60);
          var i = new Object();
          return (i.val = e(t)), i;
        },
        requestTimeout: function (t, e) {
          var i =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame;
          if (!i) return setTimeout(t, e);
          var o,
            n = new Object();
          return (
            (n.val = i(function s(a) {
              o || (o = a), a - o >= e ? t.call() : (n.val = i(s));
            })),
            n
          );
        },
        deleteTimeout: function (t) {
          if (t) {
            var e =
              window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame;
            return e ? (t.val ? e(t.val) : void 0) : clearTimeout(t);
          }
        },
        execPluginFunction: function (t, e) {
          for (
            var i = Array.prototype.slice.call(arguments, 2),
              o = t.split("."),
              n = o.pop(),
              s = 0;
            s < o.length;
            s++
          )
            e = e[o[s]];
          return e[n].apply(e, i);
        },
        getOptions: function (t) {
          if ("object" == typeof t) return t;
          if ("string" != typeof t) return {};
          try {
            return JSON.parse(t.replace(/'/g, '"').replace(";", ""));
          } catch (t) {
            return {};
          }
        },
        mergeOptions: function (t, e) {
          var i = {};
          for (var o in t) i[o] = t[o];
          for (var o in e) i[o] = e[o];
          return i;
        },
        intObs: function (i, o, n) {
          var s;
          s = "string" == typeof i ? document.querySelectorAll(i) : i;
          var a = { rootMargin: "200px" };
          void 0 !== n && (a.rootMargin = "0px 0px " + Number(n) + "px 0px");
          var r = new IntersectionObserver(function (i) {
            for (var n = 0; n < i.length; n++) {
              var s = i[n];
              if (s.intersectionRatio > 0) {
                var a,
                  l = e(s.target);
                if ("string" == typeof o) {
                  var d = t.getOptions(l.data("plugin-options"));
                  d && (a = d), t.execPluginFunction(o, l, a);
                } else {
                  o.call(l);
                }
                r.unobserve(s.target);
              }
            }
          }, a);
          Array.prototype.forEach.call(s, function (t) {
            r.observe(t);
          });
        },
        dynIntObsInit: function (i, o, n) {
          var s;
          (s = "string" == typeof i ? document.querySelectorAll(i) : i),
            Array.prototype.forEach.call(s, function (i) {
              var s,
                a = e(i);
              if (!a.data("observer-init")) {
                var r = t.getOptions(a.data("plugin-options"));
                r && (s = r);
                var l = t.mergeOptions(n, s),
                  d = { rootMargin: "0px 0px 200px 0px", thresholds: 0 };
                l.accY &&
                  (d.rootMargin = "0px 0px " + Number(l.accY) + "px 0px");
                var h = new IntersectionObserver(function (e) {
                  for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.intersectionRatio > 0 &&
                      (t.execPluginFunction(o, a, l), h.unobserve(n.target));
                  }
                }, d);
                h.observe(i), a.data("observer-init", !0);
              }
            });
        },
      }),
      t.isIOS() && document.body.classList.add("ios");
  }.apply(this, [window.theme, jQuery]),
  (function () {
    "use strict";
    if ("object" == typeof window)
      if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
      )
        "isIntersecting" in window.IntersectionObserverEntry.prototype ||
          Object.defineProperty(
            window.IntersectionObserverEntry.prototype,
            "isIntersecting",
            {
              get: function () {
                return this.intersectionRatio > 0;
              },
            }
          );
      else {
        var t = (function (t) {
            for (var e = window.document, i = n(e); i; )
              i = n((e = i.ownerDocument));
            return e;
          })(),
          e = [],
          i = null,
          o = null;
        (a.prototype.THROTTLE_TIMEOUT = 100),
          (a.prototype.POLL_INTERVAL = null),
          (a.prototype.USE_MUTATION_OBSERVER = !0),
          (a._setupCrossOriginUpdater = function () {
            return (
              i ||
                (i = function (t, i) {
                  (o =
                    t && i
                      ? c(t, i)
                      : {
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                          width: 0,
                          height: 0,
                        }),
                    e.forEach(function (t) {
                      t._checkForIntersections();
                    });
                }),
              i
            );
          }),
          (a._resetCrossOriginUpdater = function () {
            (i = null), (o = null);
          }),
          (a.prototype.observe = function (t) {
            if (
              !this._observationTargets.some(function (e) {
                return e.element == t;
              })
            ) {
              if (!t || 1 != t.nodeType)
                throw new Error("target must be an Element");
              this._registerInstance(),
                this._observationTargets.push({ element: t, entry: null }),
                this._monitorIntersections(t.ownerDocument),
                this._checkForIntersections();
            }
          }),
          (a.prototype.unobserve = function (t) {
            (this._observationTargets = this._observationTargets.filter(
              function (e) {
                return e.element != t;
              }
            )),
              this._unmonitorIntersections(t.ownerDocument),
              0 == this._observationTargets.length &&
                this._unregisterInstance();
          }),
          (a.prototype.disconnect = function () {
            (this._observationTargets = []),
              this._unmonitorAllIntersections(),
              this._unregisterInstance();
          }),
          (a.prototype.takeRecords = function () {
            var t = this._queuedEntries.slice();
            return (this._queuedEntries = []), t;
          }),
          (a.prototype._initThresholds = function (t) {
            var e = t || [0];
            return (
              Array.isArray(e) || (e = [e]),
              e.sort().filter(function (t, e, i) {
                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                  throw new Error(
                    "threshold must be a number between 0 and 1 inclusively"
                  );
                return t !== i[e - 1];
              })
            );
          }),
          (a.prototype._parseRootMargin = function (t) {
            var e = (t || "0px").split(/\s+/).map(function (t) {
              var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
              if (!e)
                throw new Error(
                  "rootMargin must be specified in pixels or percent"
                );
              return { value: parseFloat(e[1]), unit: e[2] };
            });
            return (
              (e[1] = e[1] || e[0]),
              (e[2] = e[2] || e[0]),
              (e[3] = e[3] || e[1]),
              e
            );
          }),
          (a.prototype._monitorIntersections = function (e) {
            var i = e.defaultView;
            if (i && -1 == this._monitoringDocuments.indexOf(e)) {
              var o = this._checkForIntersections,
                s = null,
                a = null;
              this.POLL_INTERVAL
                ? (s = i.setInterval(o, this.POLL_INTERVAL))
                : (r(i, "resize", o, !0),
                  r(e, "scroll", o, !0),
                  this.USE_MUTATION_OBSERVER &&
                    "MutationObserver" in i &&
                    (a = new i.MutationObserver(o)).observe(e, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    })),
                this._monitoringDocuments.push(e),
                this._monitoringUnsubscribes.push(function () {
                  var t = e.defaultView;
                  t && (s && t.clearInterval(s), l(t, "resize", o, !0)),
                    l(e, "scroll", o, !0),
                    a && a.disconnect();
                });
              var d =
                (this.root && (this.root.ownerDocument || this.root)) || t;
              if (e != d) {
                var h = n(e);
                h && this._monitorIntersections(h.ownerDocument);
              }
            }
          }),
          (a.prototype._unmonitorIntersections = function (e) {
            var i = this._monitoringDocuments.indexOf(e);
            if (-1 != i) {
              var o =
                (this.root && (this.root.ownerDocument || this.root)) || t;
              if (
                !this._observationTargets.some(function (t) {
                  var i = t.element.ownerDocument;
                  if (i == e) return !0;
                  for (; i && i != o; ) {
                    var s = n(i);
                    if ((i = s && s.ownerDocument) == e) return !0;
                  }
                  return !1;
                })
              ) {
                var s = this._monitoringUnsubscribes[i];
                if (
                  (this._monitoringDocuments.splice(i, 1),
                  this._monitoringUnsubscribes.splice(i, 1),
                  s(),
                  e != o)
                ) {
                  var a = n(e);
                  a && this._unmonitorIntersections(a.ownerDocument);
                }
              }
            }
          }),
          (a.prototype._unmonitorAllIntersections = function () {
            var t = this._monitoringUnsubscribes.slice(0);
            (this._monitoringDocuments.length = 0),
              (this._monitoringUnsubscribes.length = 0);
            for (var e = 0; e < t.length; e++) t[e]();
          }),
          (a.prototype._checkForIntersections = function () {
            if (this.root || !i || o) {
              var t = this._rootIsInDom(),
                e = t
                  ? this._getRootRect()
                  : {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      width: 0,
                      height: 0,
                    };
              this._observationTargets.forEach(function (o) {
                var n = o.element,
                  a = d(n),
                  r = this._rootContainsTarget(n),
                  l = o.entry,
                  h = t && r && this._computeTargetAndRootIntersection(n, a, e),
                  c = null;
                this._rootContainsTarget(n)
                  ? (i && !this.root) || (c = e)
                  : (c = {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      width: 0,
                      height: 0,
                    });
                var u = (o.entry = new s({
                  time:
                    window.performance && performance.now && performance.now(),
                  target: n,
                  boundingClientRect: a,
                  rootBounds: c,
                  intersectionRect: h,
                }));
                l
                  ? t && r
                    ? this._hasCrossedThreshold(l, u) &&
                      this._queuedEntries.push(u)
                    : l && l.isIntersecting && this._queuedEntries.push(u)
                  : this._queuedEntries.push(u);
              }, this),
                this._queuedEntries.length &&
                  this._callback(this.takeRecords(), this);
            }
          }),
          (a.prototype._computeTargetAndRootIntersection = function (e, n, s) {
            if ("none" != window.getComputedStyle(e).display) {
              for (
                var a, r, l, h, u, f, m, g, v = n, w = p(e), y = !1;
                !y && w;

              ) {
                var b = null,
                  _ = 1 == w.nodeType ? window.getComputedStyle(w) : {};
                if ("none" == _.display) return null;
                if (w == this.root || 9 == w.nodeType)
                  if (((y = !0), w == this.root || w == t))
                    i && !this.root
                      ? !o || (0 == o.width && 0 == o.height)
                        ? ((w = null), (b = null), (v = null))
                        : (b = o)
                      : (b = s);
                  else {
                    var C = p(w),
                      k = C && d(C),
                      x = C && this._computeTargetAndRootIntersection(C, k, s);
                    k && x
                      ? ((w = C), (b = c(k, x)))
                      : ((w = null), (v = null));
                  }
                else {
                  var $ = w.ownerDocument;
                  w != $.body &&
                    w != $.documentElement &&
                    "visible" != _.overflow &&
                    (b = d(w));
                }
                if (
                  (b &&
                    ((a = b),
                    (r = v),
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    (l = Math.max(a.top, r.top)),
                    (h = Math.min(a.bottom, r.bottom)),
                    (u = Math.max(a.left, r.left)),
                    (g = h - l),
                    (v =
                      ((m = (f = Math.min(a.right, r.right)) - u) >= 0 &&
                        g >= 0 && {
                          top: l,
                          bottom: h,
                          left: u,
                          right: f,
                          width: m,
                          height: g,
                        }) ||
                      null)),
                  !v)
                )
                  break;
                w = w && p(w);
              }
              return v;
            }
          }),
          (a.prototype._getRootRect = function () {
            var e;
            if (this.root && !f(this.root)) e = d(this.root);
            else {
              var i = f(this.root) ? this.root : t,
                o = i.documentElement,
                n = i.body;
              e = {
                top: 0,
                left: 0,
                right: o.clientWidth || n.clientWidth,
                width: o.clientWidth || n.clientWidth,
                bottom: o.clientHeight || n.clientHeight,
                height: o.clientHeight || n.clientHeight,
              };
            }
            return this._expandRectByRootMargin(e);
          }),
          (a.prototype._expandRectByRootMargin = function (t) {
            var e = this._rootMarginValues.map(function (e, i) {
                return "px" == e.unit
                  ? e.value
                  : (e.value * (i % 2 ? t.width : t.height)) / 100;
              }),
              i = {
                top: t.top - e[0],
                right: t.right + e[1],
                bottom: t.bottom + e[2],
                left: t.left - e[3],
              };
            return (
              (i.width = i.right - i.left), (i.height = i.bottom - i.top), i
            );
          }),
          (a.prototype._hasCrossedThreshold = function (t, e) {
            var i = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
              o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (i !== o)
              for (var n = 0; n < this.thresholds.length; n++) {
                var s = this.thresholds[n];
                if (s == i || s == o || s < i != s < o) return !0;
              }
          }),
          (a.prototype._rootIsInDom = function () {
            return !this.root || u(t, this.root);
          }),
          (a.prototype._rootContainsTarget = function (e) {
            var i = (this.root && (this.root.ownerDocument || this.root)) || t;
            return u(i, e) && (!this.root || i == e.ownerDocument);
          }),
          (a.prototype._registerInstance = function () {
            e.indexOf(this) < 0 && e.push(this);
          }),
          (a.prototype._unregisterInstance = function () {
            var t = e.indexOf(this);
            -1 != t && e.splice(t, 1);
          }),
          (window.IntersectionObserver = a),
          (window.IntersectionObserverEntry = s);
      }
    function n(t) {
      try {
        return (t.defaultView && t.defaultView.frameElement) || null;
      } catch (t) {
        return null;
      }
    }
    function s(t) {
      (this.time = t.time),
        (this.target = t.target),
        (this.rootBounds = h(t.rootBounds)),
        (this.boundingClientRect = h(t.boundingClientRect)),
        (this.intersectionRect = h(
          t.intersectionRect || {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0,
          }
        )),
        (this.isIntersecting = !!t.intersectionRect);
      var e = this.boundingClientRect,
        i = e.width * e.height,
        o = this.intersectionRect,
        n = o.width * o.height;
      this.intersectionRatio = i
        ? Number((n / i).toFixed(4))
        : this.isIntersecting
        ? 1
        : 0;
    }
    function a(t, e) {
      var i,
        o,
        n,
        s = e || {};
      if ("function" != typeof t)
        throw new Error("callback must be a function");
      if (s.root && 1 != s.root.nodeType && 9 != s.root.nodeType)
        throw new Error("root must be a Document or Element");
      (this._checkForIntersections =
        ((i = this._checkForIntersections.bind(this)),
        (o = this.THROTTLE_TIMEOUT),
        (n = null),
        function () {
          n ||
            (n = setTimeout(function () {
              i(), (n = null);
            }, o));
        })),
        (this._callback = t),
        (this._observationTargets = []),
        (this._queuedEntries = []),
        (this._rootMarginValues = this._parseRootMargin(s.rootMargin)),
        (this.thresholds = this._initThresholds(s.threshold)),
        (this.root = s.root || null),
        (this.rootMargin = this._rootMarginValues
          .map(function (t) {
            return t.value + t.unit;
          })
          .join(" ")),
        (this._monitoringDocuments = []),
        (this._monitoringUnsubscribes = []);
    }
    function r(t, e, i, o) {
      "function" == typeof t.addEventListener
        ? t.addEventListener(e, i, o || !1)
        : "function" == typeof t.attachEvent && t.attachEvent("on" + e, i);
    }
    function l(t, e, i, o) {
      "function" == typeof t.removeEventListener
        ? t.removeEventListener(e, i, o || !1)
        : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, i);
    }
    function d(t) {
      var e;
      try {
        e = t.getBoundingClientRect();
      } catch (t) {}
      return e
        ? ((e.width && e.height) ||
            (e = {
              top: e.top,
              right: e.right,
              bottom: e.bottom,
              left: e.left,
              width: e.right - e.left,
              height: e.bottom - e.top,
            }),
          e)
        : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
    }
    function h(t) {
      return !t || "x" in t
        ? t
        : {
            top: t.top,
            y: t.top,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            right: t.right,
            width: t.width,
            height: t.height,
          };
    }
    function c(t, e) {
      var i = e.top - t.top,
        o = e.left - t.left;
      return {
        top: i,
        left: o,
        height: e.height,
        width: e.width,
        bottom: i + e.height,
        right: o + e.width,
      };
    }
    function u(t, e) {
      for (var i = e; i; ) {
        if (i == t) return !0;
        i = p(i);
      }
      return !1;
    }
    function p(e) {
      var i = e.parentNode;
      return 9 == e.nodeType && e != t
        ? n(e)
        : (i && i.assignedSlot && (i = i.assignedSlot.parentNode),
          i && 11 == i.nodeType && i.host ? i.host : i);
    }
    function f(t) {
      return t && 9 === t.nodeType;
    }
  })(),
  (function (t) {
    "use strict";
    t.extend({
      browserSelector: function () {
        var e = "ontouchstart" in window || navigator.msMaxTouchPoints,
          i = navigator.userAgent.toLowerCase(),
          o = function (t) {
            return i.indexOf(t) > -1;
          },
          n = "gecko",
          s = "webkit",
          a = "safari",
          r = "opera",
          l = document.documentElement,
          d = [
            !/opera|webtv/i.test(i) && /msie\s(\d)/.test(i)
              ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1])
              : o("firefox/2")
              ? n + " ff2"
              : o("firefox/3.5")
              ? n + " ff3 ff3_5"
              : o("firefox/3")
              ? n + " ff3"
              : o("gecko/")
              ? n
              : o("opera")
              ? r +
                (/version\/(\d+)/.test(i)
                  ? " " + r + RegExp.jQuery1
                  : /opera(\s|\/)(\d+)/.test(i)
                  ? " " + r + RegExp.jQuery2
                  : "")
              : o("konqueror")
              ? "konqueror"
              : o("chrome")
              ? s + " chrome"
              : o("iron")
              ? s + " iron"
              : o("applewebkit/")
              ? s +
                " " +
                a +
                (/version\/(\d+)/.test(i) ? " " + a + RegExp.jQuery1 : "")
              : o("mozilla/")
              ? n
              : "",
            o("j2me")
              ? "mobile"
              : o("iphone")
              ? "iphone"
              : o("ipod")
              ? "ipod"
              : o("mac") || o("darwin")
              ? "mac"
              : o("webtv")
              ? "webtv"
              : o("win")
              ? "win"
              : o("freebsd")
              ? "freebsd"
              : o("x11") || o("linux")
              ? "linux"
              : "",
            "js",
          ].join(" ");
        theme.is_device_mobile && (d += " mobile"),
          e && (d += " touch"),
          (l.className += " " + d),
          !window.ActiveXObject &&
            "ActiveXObject" in window &&
            t("html").removeClass("gecko").addClass("ie ie11");
      },
    }),
      t.browserSelector();
  })(jQuery),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__accordion",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {}),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          if (!e.fn.collapse) return this;
          var t = this.options.wrapper,
            i = t.find(".collapse"),
            o = t.data("collapsible"),
            n = t.data("active-tab");
          return (
            i.length > 0 &&
              (t.data("use-accordion") &&
                "yes" == t.data("use-accordion") &&
                t.find(".collapse").attr("data-parent", "#" + t.attr("id")),
              "yes" == o
                ? i.collapse({ toggle: !1, parent: "#" + t.attr("id") })
                : !isNaN(n) &&
                  n == parseInt(n) &&
                  t.find(".collapse").length > n
                ? (t
                    .find(".collapse")
                    .collapse({ toggle: !1, parent: "#" + t.attr("id") }),
                  t
                    .find(".collapse")
                    .eq(n - 1)
                    .collapse("toggle"))
                : t.find(".collapse").collapse({ parent: "#" + t.attr("id") })),
            this
          );
        },
      }),
      e.extend(t, { Accordion: o }),
      (e.fn.themeAccordion = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.Accordion(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__accordionMenu",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {}),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var t = this,
            i = this.options.wrapper;
          return (
            i.find("li.menu-item.active").each(function () {
              var t = e(this);
              t.find("> .arrow").get(0) && t.find("> .arrow").trigger("click");
            }),
            i.on("click", ".arrow", function (i) {
              i.preventDefault(), i.stopPropagation();
              var o = e(this),
                n = o.closest("li");
              return (
                void 0 !== t.options.open_one
                  ? (n.siblings(".open").children(".arrow").next().hide(),
                    n.siblings(".open").removeClass("open"),
                    o.next().stop().toggle())
                  : o.next().stop().slideToggle(),
                n.hasClass("open") ? n.removeClass("open") : n.addClass("open"),
                !1
              );
            }),
            this
          );
        },
      }),
      e.extend(t, { AccordionMenu: o }),
      (e.fn.themeAccordionMenu = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.AccordionMenu(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        lazyload_menu: function (i, o) {
          if ((js_porto_vars.lazyload_menu || "mobile_menu" == o) && o) {
            var n = !1,
              s = function (a) {
                if (a) {
                  var r = e(a);
                  if (
                    ("mobile_menu" != o &&
                      i.each(function (i) {
                        var o = e(this),
                          n = r.children(".mega-menu, .sidebar-menu").eq(i);
                        n.length ||
                          (n = r.find(".mega-menu, .sidebar-menu").eq(i)),
                          o
                            .children("li.menu-item-has-children")
                            .each(function (t) {
                              var i = n
                                .children("li.menu-item-has-children")
                                .eq(t)
                                .children(".popup, .sub-menu");
                              i.hasClass("popup") && (i = i.children(".inner")),
                                i.length &&
                                  (e(this).children(".popup").length
                                    ? e(this)
                                        .children(".popup")
                                        .children(".inner")
                                        .replaceWith(i)
                                    : o.hasClass("overlay")
                                    ? (e(this).children(".sub-menu").remove(),
                                      e(this).append(i))
                                    : e(this)
                                        .children(".sub-menu")
                                        .replaceWith(i));
                            }),
                          o.hasClass("mega-menu")
                            ? t.MegaMenu.build(o)
                            : o.hasClass("side-menu-accordion")
                            ? o.themeAccordionMenu({ open_one: !0 })
                            : t.SidebarMenu.build(o),
                          o.addClass("sub-ready").trigger("sub-loaded");
                      }),
                    r.find("#nav-panel, #side-nav-panel").length ||
                      "mobile_menu" == o)
                  ) {
                    var l = !1;
                    if (e("#nav-panel").length)
                      (d = r.find(".mobile-nav-wrap > *")).length
                        ? (e("#nav-panel .mobile-nav-wrap > *").replaceWith(d),
                          e("#nav-panel .mobile-nav-wrap").removeClass(
                            "skeleton-body porto-ajax-loading"
                          ),
                          e("#nav-panel .accordion-menu").themeAccordionMenu())
                        : (l = !0);
                    else if (e("#side-nav-panel").length) {
                      var d;
                      (d = r.find(".side-nav-panel-close")).length
                        ? (e("#side-nav-panel").replaceWith(d.parent()),
                          e(
                            "#side-nav-panel .accordion-menu"
                          ).themeAccordionMenu())
                        : (l = !0);
                    }
                    l &&
                      !n &&
                      ((n = !0),
                      (l = !1),
                      e.post(
                        window.location.href,
                        {
                          action: "porto_lazyload_menu",
                          porto_lazyload_menu_2: 1,
                          menu_type: o,
                          nonce: js_porto_vars.porto_nonce,
                        },
                        s
                      ));
                  }
                }
              };
            e.post(
              window.location.href,
              {
                action: "porto_lazyload_menu",
                menu_type: o,
                nonce: js_porto_vars.porto_nonce,
              },
              s
            );
          }
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__chartCircular",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {
      accX: 0,
      accY: -150,
      delay: 1,
      barColor: "#0088CC",
      trackColor: "#f2f2f2",
      scaleColor: !1,
      scaleLength: 5,
      lineCap: "round",
      lineWidth: 13,
      size: 175,
      rotate: 0,
      animate: { duration: 2500, enabled: !0 },
    }),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          if (!e.fn.easyPieChart) return this;
          var i = this,
            o = this.options.wrapper,
            n = this.options.percentValue
              ? parseInt(this.options.percentValue)
              : parseInt(o.attr("data-percent"), 10),
            s = o.find(".percent");
          n || (n = 1);
          var a = this.options.labelValue
            ? parseInt(this.options.labelValue, 10)
            : n;
          return (
            e.extend(!0, i.options, {
              onStep: function (t, e, i) {
                s.html(parseInt((a * i) / n));
              },
            }),
            o.attr("data-percent", 0).easyPieChart(i.options),
            (Number(i.options.delay) <= 1e3 / 60
              ? t.requestFrame
              : t.requestTimeout)(function () {
              o.data("easyPieChart") &&
                (o.data("easyPieChart").update(n), o.attr("data-percent", n));
            }, i.options.delay),
            this
          );
        },
      }),
      e.extend(t, { ChartCircular: o }),
      (e.fn.themeChartCircular = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.ChartCircular(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__fitVideo",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {}),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          if (!e.fn.fitVids) return this;
          var t = this.options.wrapper;
          return (
            t.fitVids(),
            e(window).on("resize", function () {
              t.fitVids();
            }),
            this
          );
        },
      }),
      e.extend(t, { FitVideo: o }),
      (e.fn.themeFitVideo = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.FitVideo(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__videobackground",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {
      overlay: !0,
      volume: 1,
      playbackRate: 1,
      muted: !0,
      loop: !0,
      autoplay: !0,
      position: "50% 50%",
      posterType: "detect",
    }),
      (o.prototype = {
        initialize: function (t, e) {
          return (this.$el = t), this.setData().setOptions(e).build(), this;
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              path: this.$el.data("video-path"),
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          return e.fn.vide && this.options.path
            ? (this.options.overlay &&
                this.options.wrapper.prepend(
                  e("<div />").addClass("video-overlay")
                ),
              this.options.wrapper.vide(this.options.path, this.options),
              this)
            : this;
        },
      }),
      e.extend(t, { PluginVideoBackground: o }),
      (e.fn.themePluginVideoBackground = function (t) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new o(n, t);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__flickrZoom",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {}),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var i = this.options.wrapper,
            o = [],
            n = 0,
            s = i.find(".flickr_badge_image > a");
          return (
            s.each(function () {
              var t = {},
                i = e(this).find("> img");
              (t.src = i.attr("src").replace("_s.", "_b.")),
                (t.title = i.attr("title")),
                (o[n] = t),
                n++;
            }),
            s.on("click", function (i) {
              i.preventDefault(),
                e.fn.magnificPopup &&
                  (e.magnificPopup.close(),
                  e.magnificPopup.open(
                    e.extend(!0, {}, t.mfpConfig, {
                      items: o,
                      gallery: { enabled: !0 },
                      type: "image",
                    }),
                    s.index(e(this))
                  ));
            }),
            this
          );
        },
      }),
      e.extend(t, { FlickrZoom: o }),
      (e.fn.themeFlickrZoom = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.FlickrZoom(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__lazyload",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {
      effect: "show",
      appearEffect: "",
      appear: function (t, e) {},
      load: function (t, i) {
        e(this).addClass("lazy-load-loaded");
      },
    }),
      (o.prototype = {
        initialize: function (t, i) {
          if (!t.length) return this;
          if (!e.fn.lazyload) return this;
          var n = e.extend(!0, {}, o.defaults, i, {});
          return lazyload(t, n);
        },
      }),
      e.extend(t, { PluginLazyLoad: o }),
      (e.fn.themePluginLazyLoad = function (t) {
        var n = e(this);
        if (n.data(i)) return this;
        var s = new o(e.makeArray(this), t);
        return n.data(i, s), this;
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = [
        '<div class="loading-overlay">',
        '<div class="loader"></div>',
        "</div>",
      ].join(""),
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.prototype = {
      options: { css: {} },
      initialize: function (t, e) {
        (this.$wrapper = t),
          this.setVars().setOptions(e).build().events(),
          this.$wrapper.data("loadingOverlay", this);
      },
      setVars: function () {
        return (this.$overlay = this.$wrapper.find(".loading-overlay")), this;
      },
      setOptions: function (t) {
        return (
          this.$overlay.get(0) || this.matchProperties(),
          (this.options = e.extend(!0, {}, this.options, t)),
          (this.loaderClass = this.getLoaderClass(
            this.options.css.backgroundColor
          )),
          this
        );
      },
      build: function () {
        return (
          this.$overlay.closest(document.documentElement).get(0) ||
            (this.$cachedOverlay
              ? (this.$overlay = this.$cachedOverlay.clone())
              : ((this.$overlay = e(i).clone()),
                this.options.css &&
                  (this.$overlay.css(this.options.css),
                  this.$overlay.find(".loader").addClass(this.loaderClass))),
            this.$wrapper.append(this.$overlay)),
          this.$cachedOverlay || (this.$cachedOverlay = this.$overlay.clone()),
          this
        );
      },
      events: function () {
        var t = this;
        return (
          this.options.startShowing && t.show(),
          (this.$wrapper.is("body") || this.options.hideOnWindowLoad) &&
            e(window).on("load error", function () {
              t.hide();
            }),
          this.options.listenOn &&
            e(this.options.listenOn)
              .on("loading-overlay:show beforeSend.ic", function (e) {
                e.stopPropagation(), t.show();
              })
              .on("loading-overlay:hide complete.ic", function (e) {
                e.stopPropagation(), t.hide();
              }),
          this.$wrapper
            .on("loading-overlay:show beforeSend.ic", function (e) {
              e.stopPropagation(), t.show();
            })
            .on("loading-overlay:hide complete.ic", function (e) {
              e.stopPropagation(), t.hide();
            }),
          this
        );
      },
      show: function () {
        this.build(),
          (this.position = this.$wrapper.css("position").toLowerCase()),
          ("relative" == this.position &&
            "absolute" == this.position &&
            "fixed" == this.position) ||
            this.$wrapper.css({ position: "relative" }),
          this.$wrapper.addClass("loading-overlay-showing");
      },
      hide: function () {
        var t = this;
        this.$wrapper.removeClass("loading-overlay-showing"),
          setTimeout(function () {
            ("relative" == this.position &&
              "absolute" == this.position &&
              "fixed" == this.position) ||
              t.$wrapper.css({ position: "" });
          }, 500);
      },
      matchProperties: function () {
        var t, i, o;
        for (
          i = (o = ["backgroundColor", "borderRadius"]).length, t = 0;
          t < i;
          t++
        ) {
          var n = {};
          (n[o[t]] = this.$wrapper.css(o[t])), e.extend(this.options.css, n);
        }
      },
      getLoaderClass: function (t) {
        if (!t || "transparent" === t || "inherit" === t) return "black";
        var e, i, o, n;
        return (
          (i = t).indexOf("#") > -1
            ? (o = i.replace("#", ""))
            : ((n = i.match(/\d+/g)),
              (o =
                ("0" + parseInt(n[0], 10).toString(16)).slice(-2) +
                ("0" + parseInt(n[1], 10).toString(16)).slice(-2) +
                ("0" + parseInt(n[2], 10).toString(16)).slice(-2))),
          3 === o.length && (o += o),
          (e = o),
          (299 * parseInt(e.substr(0, 2), 16) +
            587 * parseInt(e.substr(2, 2), 16) +
            114 * parseInt(e.substr(4, 2), 16)) /
            1e3 >=
          128
            ? "black"
            : "white"
        );
      },
    }),
      e.extend(t, { LoadingOverlay: o }),
      (e.fn.loadingOverlay = function (t) {
        return this.each(function () {
          var i = e(this),
            n = i.data("loadingOverlay");
          if (n) return n;
          var s = t || i.data("loading-overlay-options") || {};
          return new o(i, s);
        });
      }),
      e(
        "body.loading-overlay-showing, [data-loading-overlay]"
      ).loadingOverlay();
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    var i = "__masonry",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = { itemSelector: "li", isOriginLeft: !(t = t || {}).rtl }),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          if (!e.fn.isotope) return this;
          var t = this,
            i = this.options.wrapper;
          return (
            i.isotope(this.options),
            i.isotope("on", "layoutComplete", function () {
              "function" == typeof this.options.callback &&
                this.options.callback.call(),
                i.find(".porto-lazyload:not(.lazy-load-loaded):visible")
                  .length && e(window).trigger("scroll");
            }),
            i.isotope("layout"),
            t.resize(),
            e(window).smartresize(function () {
              t.resize();
            }),
            this
          );
        },
        resize: function () {
          var e = this,
            i = this.options.wrapper;
          e.resizeTimer && t.deleteTimeout(e.resizeTimer),
            (e.resizeTimer = t.requestTimeout(function () {
              i.data("isotope") && i.isotope("layout"), delete e.resizeTimer;
            }, 600));
        },
      }),
      e.extend(t, { Masonry: o }),
      (e.fn.themeMasonry = function (o) {
        return this.map(function () {
          var n = e(this);
          imagesLoaded(this, function () {
            return n.data(i) ? n.data(i) : new t.Masonry(n, o);
          });
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__previewImage",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {}),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var t = this.options.wrapper,
            e = t.data("image");
          return e && t.css("background-image", "url(" + e + ")"), this;
        },
      }),
      e.extend(t, { PreviewImage: o }),
      (e.fn.themePreviewImage = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.PreviewImage(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__toggle",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {}),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var i = this.options.wrapper;
          return (
            i.hasClass("active") &&
              i
                .find("> div.toggle-content")
                .stop()
                .slideDown(350, function () {
                  e(this).attr("style", "").show();
                }),
            i.on("click", "> label", function (i) {
              var o = e(this).parent(),
                n = e(this).closest("div.toogle"),
                s = e(this).closest(".porto-toggles"),
                a = n.hasClass("toogle-accordion"),
                r = o.find("> div.toggle-content");
              a &&
                void 0 !== i.originalEvent &&
                n.find("section.toggle.active > label").trigger("click"),
                o.hasClass("active")
                  ? (s.length && "one-toggle" == s.data("view")) ||
                    (r.stop().slideUp(350, function () {
                      e(this).attr("style", "").hide();
                    }),
                    o.removeClass("active"))
                  : (s.length &&
                      "one-toggle" == s.data("view") &&
                      s.find(".toggle").each(function () {
                        e(this).removeClass("active"),
                          e(this)
                            .find("> div.toggle-content")
                            .stop()
                            .slideUp(350, function () {
                              e(this).attr("style", "").hide();
                            });
                      }),
                    r.stop().slideDown(350, function () {
                      e(this).attr("style", "").show(), t.refreshVCContent(r);
                    }),
                    o.addClass("active"));
            }),
            this
          );
        },
      }),
      e.extend(t, { Toggle: o }),
      (e.fn.themeToggle = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.Toggle(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__parallax",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = { speed: 1.5, horizontalPosition: "50%", offset: 0 }),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var i,
            o = this;
          e(window);
          i = e('<div class="parallax-background"></div>');
          var n = o.options.wrapper.data("image-src")
            ? "url(" + o.options.wrapper.data("image-src") + ")"
            : o.options.wrapper.css("background-image");
          i.css({
            "background-image": n,
            "background-size": "cover",
            "background-position": "50% 0%",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 100 * o.options.speed + "%",
          }),
            o.options.wrapper.prepend(i),
            o.options.wrapper.css({ position: "relative", overflow: "hidden" }),
            o.options.wrapper.attr("data-parallax-type") &&
              ((o.options.parallaxType = "horizontal"),
              i.css({
                "background-position": "0% 50%",
                width: 100 * o.options.speed + "%",
                height: "100%",
              }));
          var s = function () {
            var t = -(100 * o.options.speed - 100);
            o.options.parallaxType
              ? ((t /= 9.8),
                i
                  .attr("data-bottom-top", "left: " + t + "%;")
                  .attr("data-top-bottom", "left: 0%;"))
              : i
                  .attr("data-bottom-top", "top: " + t + "%;")
                  .attr("data-top-bottom", "top: 0%;");
          };
          return (
            t.is_device_mobile
              ? 1 == o.options.enableOnMobile
                ? s()
                : o.options.wrapper.addClass("parallax-disabled")
              : s(),
            this
          );
        },
      }),
      e.extend(t, { Parallax: o }),
      (e.fn.themeParallax = function (o) {
        if ("undefined" == typeof skrollr) return this;
        var n = this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new t.Parallax(n, o);
        });
        return (
          t.portoSkrollr
            ? t.portoSkrollr.refresh()
            : t.is_device_mobile ||
              (t.portoSkrollr = skrollr.init({
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function () {
                  return t.is_device_mobile;
                },
              })),
          n
        );
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (e.fn.themePin = function (i) {
      var o = 0,
        n = 0,
        s = [],
        a = !1,
        r = e(window),
        l = [],
        d = [],
        h = [];
      i = i || {};
      var c = function () {
          for (var o = 0, n = s.length; o < n; o++) {
            var l = s[o];
            if (i.minWidth && window.innerWidth < i.minWidth)
              l.parent().hasClass("pin-wrapper") && l.unwrap(),
                l.css({ width: "", left: "", top: "", position: "" }),
                i.activeClass && l.removeClass(i.activeClass),
                l.removeClass("sticky-transition"),
                l.removeClass("sticky-absolute"),
                (a = !0);
            else {
              a = !1;
              var d = i.containerSelector
                  ? l.closest(i.containerSelector).length
                    ? l.closest(i.containerSelector)
                    : e(i.containerSelector)
                  : e(document.body),
                h = l.offset(),
                c = d.offset();
              if (void 0 !== c) {
                var u = l.parent().offset();
                if (
                  !l.parent().hasClass("pin-wrapper") &&
                  (l.wrap("<div class='pin-wrapper'>"),
                  l.hasClass("elementor-element-populated"))
                ) {
                  var p = l.closest(".elementor-container");
                  if (p.length) {
                    var f = p
                      .attr("class")
                      .match(/elementor-column-gap-([a-z]*)/g);
                    if (f && f.length) {
                      var m = f[0].replace("elementor-column-gap-", "");
                      l.addClass("porto-gap-" + m);
                    }
                  }
                }
                var g = e.extend({ top: 0, bottom: 0 }, i.padding || {}),
                  v = l.parent(),
                  w = parseInt(v.parent().css("padding-top")),
                  y = parseInt(v.parent().css("padding-bottom"));
                i.autoInit &&
                  (e("#header").hasClass("header-side")
                    ? (g.top = t.adminBarHeight())
                    : ((g.top = t.adminBarHeight()),
                      (!e("#header > .main-menu-wrap").length &&
                        e("#header").hasClass("sticky-menu-header")) ||
                        (g.top += t.StickyHeader.sticky_height)),
                  void 0 !== i.paddingOffsetTop
                    ? (g.top += parseInt(i.paddingOffsetTop, 10))
                    : (g.top += 18),
                  void 0 !== i.paddingOffsetBottom
                    ? (g.bottom = parseInt(i.paddingOffsetBottom, 10))
                    : (g.bottom = 0));
                var b = l.css("border-bottom"),
                  _ = l.outerHeight();
                l.css("border-bottom", "1px solid transparent");
                var C = l.outerHeight() - _ - 1;
                l.css("border-bottom", b),
                  l.css({
                    width:
                      l.outerWidth() <= v.width() ? l.outerWidth() : v.width(),
                  }),
                  v.css("height", l.outerHeight() + C),
                  (!i.autoFit && !i.fitToBottom) ||
                  l.outerHeight() <= r.height()
                    ? l.data("themePin", {
                        pad: g,
                        from: (i.containerSelector ? c.top : h.top) - g.top + w,
                        pb: y,
                        parentTop: u.top - w,
                        offset: C,
                      })
                    : l.data("themePin", {
                        pad: g,
                        fromFitTop:
                          (i.containerSelector ? c.top : h.top) - g.top + w,
                        from:
                          (i.containerSelector ? c.top : h.top) +
                          l.outerHeight() -
                          window.innerHeight +
                          w,
                        pb: y,
                        parentTop: u.top - w,
                        offset: C,
                      });
              }
            }
          }
        },
        u = function () {
          if (!a) {
            o = r.scrollTop();
            for (
              var t = window.innerHeight || r.height(), c = 0, u = s.length;
              c < u;
              c++
            ) {
              var p,
                f = e(s[c]),
                m = f.data("themePin");
              if (m && void 0 !== m.pad) {
                var g = i.containerSelector
                    ? f.closest(i.containerSelector).length
                      ? f.closest(i.containerSelector)
                      : e(i.containerSelector)
                    : e(document.body),
                  v =
                    (!i.autoFit && !i.fitToBottom) ||
                    f.outerHeight() + m.pad.top <= t;
                if (
                  ((m.end = g.offset().top + g.height()),
                  v
                    ? (m.to =
                        g.offset().top +
                        g.height() -
                        f.outerHeight() -
                        m.pad.bottom -
                        m.pb)
                    : ((m.to = g.offset().top + g.height() - t - m.pb),
                      (m.to2 =
                        g.height() - f.outerHeight() - m.pad.bottom - m.pb)),
                  0 === h[c] && (h[c] = m.to),
                  v)
                ) {
                  var w = m.from - m.pad.bottom,
                    y = m.to - m.pad.top - m.offset;
                  if (
                    (void 0 !== m.fromFitTop &&
                      m.fromFitTop &&
                      (w = m.fromFitTop - m.pad.bottom),
                    w + f.outerHeight() > m.end || w >= y)
                  ) {
                    f.css({ position: "", top: "", left: "" }),
                      i.activeClass && f.removeClass(i.activeClass),
                      f.removeClass("sticky-transition"),
                      f.removeClass("sticky-absolute");
                    continue;
                  }
                  o > w && o < y
                    ? ("fixed" != f.css("position") &&
                        f
                          .css({ left: f.offset().left, top: m.pad.top })
                          .css("position", "fixed"),
                      i.activeClass && f.addClass(i.activeClass),
                      f.removeClass("sticky-transition"),
                      f.removeClass("sticky-absolute"))
                    : o >= y
                    ? (f
                        .css({ left: "", top: y - m.parentTop + m.pad.top })
                        .css("position", "absolute"),
                      i.activeClass && f.addClass(i.activeClass),
                      f.hasClass("sticky-absolute") &&
                        f.addClass("sticky-transition"),
                      f.addClass("sticky-absolute"))
                    : (f.css({ position: "", top: "", left: "" }),
                      i.activeClass && f.removeClass(i.activeClass),
                      f.removeClass("sticky-transition"),
                      f.removeClass("sticky-absolute"));
                } else if (i.fitToBottom) {
                  (w = m.from), (y = m.to);
                  if (m.from + t > m.end || m.from >= y) {
                    f.css({ position: "", top: "", bottom: "", left: "" }),
                      i.activeClass && f.removeClass(i.activeClass),
                      f.removeClass("sticky-transition"),
                      f.removeClass("sticky-absolute");
                    continue;
                  }
                  o > w && o < y
                    ? ("fixed" != f.css("position") &&
                        f
                          .css({
                            left: f.offset().left,
                            bottom: m.pad.bottom,
                            top: "",
                          })
                          .css("position", "fixed"),
                      i.activeClass && f.addClass(i.activeClass),
                      f.removeClass("sticky-transition"),
                      f.removeClass("sticky-absolute"))
                    : o >= y
                    ? (f
                        .css({ left: "", top: m.to2, bottom: "" })
                        .css("position", "absolute"),
                      i.activeClass && f.addClass(i.activeClass),
                      f.hasClass("sticky-absolute") &&
                        f.addClass("sticky-transition"),
                      f.addClass("sticky-absolute"))
                    : (f.css({ position: "", top: "", bottom: "", left: "" }),
                      i.activeClass && f.removeClass(i.activeClass),
                      f.removeClass("sticky-transition"),
                      f.removeClass("sticky-absolute"));
                } else {
                  var b = f.outerHeight();
                  if (
                    (h[c] != m.to &&
                      d[c] &&
                      b + f.offset().top + m.pad.bottom < o + t &&
                      (d[c] = !1),
                    b + m.pad.top + m.pad.bottom > t || l[c] || d[c])
                  ) {
                    var _ = parseInt(f.parent().parent().css("padding-top"));
                    o + m.pad.top - _ <= m.parentTop
                      ? (f.css({ position: "", top: "", bottom: "", left: "" }),
                        (l[c] = d[c] = !1),
                        i.activeClass && f.removeClass(i.activeClass))
                      : o >= m.to
                      ? (f
                          .css({ left: "", top: m.to2, bottom: "" })
                          .css("position", "absolute"),
                        i.activeClass && f.addClass(i.activeClass))
                      : o >= n
                      ? l[c]
                        ? ((l[c] = !1),
                          (p = f.offset().top - m.parentTop),
                          f
                            .css({ left: "", top: p, bottom: "" })
                            .css("position", "absolute"),
                          i.activeClass && f.addClass(i.activeClass))
                        : !d[c] &&
                          b + f.offset().top + m.pad.bottom < o + t &&
                          ((d[c] = !0),
                          "fixed" != f.css("position") &&
                            f
                              .css({
                                left: f.offset().left,
                                bottom: m.pad.bottom,
                                top: "",
                              })
                              .css("position", "fixed"),
                          i.activeClass && f.addClass(i.activeClass))
                      : o < n &&
                        (d[c]
                          ? ((d[c] = !1),
                            (p = f.offset().top - m.parentTop),
                            f
                              .css({ left: "", top: p, bottom: "" })
                              .css("position", "absolute"),
                            i.activeClass && f.addClass(i.activeClass))
                          : !l[c] && f.offset().top >= o + m.pad.top
                          ? ((l[c] = !0),
                            "fixed" != f.css("position") &&
                              f
                                .css({
                                  left: f.offset().left,
                                  top: m.pad.top,
                                  bottom: "",
                                })
                                .css("position", "fixed"),
                            i.activeClass && f.addClass(i.activeClass))
                          : !d[c] &&
                            l[c] &&
                            "absolute" == f.css("position") &&
                            f.offset().top >= o + m.pad.top &&
                            (l[c] = !1));
                  } else
                    o >= m.parentTop - m.pad.top
                      ? f.css({ position: "fixed", top: m.pad.top })
                      : (f.css({ position: "", top: "", bottom: "", left: "" }),
                        i.activeClass && f.removeClass(i.activeClass)),
                      (l[c] = d[c] = !1);
                }
                h[c] = m.to;
              }
            }
            n = o;
          }
        },
        p = function () {
          c(), u();
        },
        f = null;
      return (
        this.each(function () {
          var i = e(this),
            o = i.data("themePin") || {};
          (o && o.update) ||
            (s.push(i),
            e("img", this).one("load", function () {
              f && t.deleteTimeout(f), (f = t.requestFrame(c));
            }),
            (o.update = p),
            i.data("themePin", o),
            l.push(!1),
            d.push(!1),
            h.push(0));
        }),
        window.addEventListener("touchmove", u, { passive: !0 }),
        window.addEventListener("scroll", u, { passive: !0 }),
        c(),
        t.isLoaded || r.on("load", p),
        e(this).on("recalc.pin", function () {
          c(), u();
        }),
        this
      );
    }),
      (t = t || {});
    var i = "__sticky",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {
      autoInit: !1,
      minWidth: 767,
      activeClass: "sticky-active",
      padding: { top: 0, bottom: 0 },
      offsetTop: 0,
      offsetBottom: 0,
      autoFit: !1,
      fitToBottom: !1,
    }),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          if (!e.fn.themePin) return this;
          var i,
            o = this,
            n = this.options.wrapper;
          return (
            n.hasClass("porto-sticky-nav") &&
              ((this.options.padding.top =
                t.StickyHeader.sticky_height + t.adminBarHeight()),
              (this.options.activeClass = "sticky-active"),
              (this.options.containerSelector = ".main-content-wrap"),
              (t.sticky_nav_height = n.outerHeight()),
              this.options.minWidth > window.innerWidth &&
                (t.sticky_nav_height = 0)),
            n.themePin(this.options),
            e(window).smartresize(function () {
              i && clearTimeout(i),
                (i = setTimeout(function () {
                  n.trigger("recalc.pin");
                }, 800));
              var e = n.parent();
              n.outerWidth(e.width()),
                "fixed" == n.css("position") && n.css("left", e.offset().left),
                n.hasClass("porto-sticky-nav") &&
                  ((t.sticky_nav_height = n.outerHeight()),
                  o.options.minWidth > window.innerWidth &&
                    (t.sticky_nav_height = 0));
            }),
            this
          );
        },
      }),
      e.extend(t, { Sticky: o }),
      (e.fn.themeSticky = function (o) {
        return this.map(function () {
          var n = e(this);
          return n.data(i)
            ? (n.trigger("recalc.pin"),
              setTimeout(function () {
                n.trigger("recalc.pin");
              }, 800),
              n.data(i))
            : new t.Sticky(n, o);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    e(function () {
      e(document.body).on("click", ".mobile-toggle", function (i) {
        var o = e("#nav-panel");
        if (o.length > 0) {
          if (
            (e(this).closest(".header-main").length &&
              o.closest(".header-builder-p").length &&
              !o.parent(".header-main").length &&
              o.appendTo(e(this).closest(".header-main")),
            o.is(":visible") && e("#header").hasClass("sticky-header"))
          ) {
            var n = e("#header").height(),
              s = o.outerHeight();
            n > s + 30 && e("#header").css("height", n - s);
          }
          o.stop().slideToggle();
        } else e("#side-nav-panel").length > 0 && (e("html").toggleClass("panel-opened"), e(".panel-overlay").toggleClass("active"));
        e("#nav-panel .skeleton-body, #side-nav-panel .skeleton-body").length &&
          t.lazyload_menu(1, "mobile_menu"),
          i.preventDefault();
      }),
        e(document.body).on("click", ".panel-overlay", function () {
          e("html").css("transition", "margin .3s").removeClass("panel-opened"),
            t.requestTimeout(function () {
              e("html").css("transition", "");
            }, 260),
            e(this).removeClass("active");
        }),
        e(document.body).on(
          "click",
          "#side-nav-panel .side-nav-panel-close",
          function (t) {
            t.preventDefault(), e(".panel-overlay").trigger("click");
          }
        ),
        e(window).on("resize", function () {
          window.innerWidth > 991 &&
            (e("#nav-panel").hide(),
            e("html").hasClass("panel-opened") &&
              e(".panel-overlay").trigger("click"));
        });
    });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    e(function () {
      e(document).on("click", ".blog-like, .portfolio-like", function (i) {
        i.preventDefault();
        var o = e(this),
          n = this.parentNode,
          s = o.attr("data-id"),
          a = o.hasClass("blog-like"),
          r = { nonce: js_porto_vars.porto_nonce };
        if (a) {
          if (o.hasClass("updating")) return !1;
          o.addClass("updating").text("..."),
            (r.blog_id = s),
            (r.action = "porto_blog-like");
        } else (r.portfolio_id = s), (r.action = "porto_portfolio-like");
        return (
          e.post(t.ajax_url, r, function (t) {
            t &&
              (o.remove(),
              (n.innerHTML = t),
              "undefined" != typeof bootstrap &&
                [].slice
                  .call(n.querySelectorAll("[data-bs-tooltip]"))
                  .map(function (t) {
                    return new bootstrap.Tooltip(t);
                  }));
          }),
          !1
        );
      });
    });
  }.apply(this, [window.theme, jQuery]);
var scrolltotop = {
  setting: {
    startline: 100,
    scrollto: 0,
    scrollduration: 1e3,
    fadeduration: [500, 100],
  },
  controlHTML:
    '<img src="assets/img/up.png" style="width:40px; height:40px" />',
  controlattrs: { offsetx: 10, offsety: 10 },
  anchorkeyword: "#top",
  state: { isvisible: !1, shouldvisible: !1 },
  scrollup: function () {
    this.cssfixedsupport || this.$control.css({ opacity: 0 });
    var t = isNaN(this.setting.scrollto)
      ? this.setting.scrollto
      : parseInt(this.setting.scrollto);
    (t =
      "string" == typeof t && 1 == jQuery("#" + t).length
        ? jQuery("#" + t).offset().top
        : 0),
      this.$body.stop().animate({ scrollTop: t }, this.setting.scrollduration);
  },
  keepfixed: function () {
    var t = jQuery(window),
      e =
        t.scrollLeft() +
        t.width() -
        this.$control.width() -
        this.controlattrs.offsetx,
      i =
        t.scrollTop() +
        t.height() -
        this.$control.height() -
        this.controlattrs.offsety;
    this.$control.css({ left: e + "px", top: i + "px" });
  },
  togglecontrol: function () {
    var t = jQuery(window).scrollTop();
    this.cssfixedsupport || this.keepfixed(),
      (this.state.shouldvisible = t >= this.setting.startline),
      this.state.shouldvisible && !this.state.isvisible
        ? (this.$control
            .stop()
            .animate({ opacity: 1 }, this.setting.fadeduration[0]),
          (this.state.isvisible = !0))
        : 0 == this.state.shouldvisible &&
          this.state.isvisible &&
          (this.$control
            .stop()
            .animate({ opacity: 0 }, this.setting.fadeduration[1]),
          (this.state.isvisible = !1));
  },
  init: function () {
    jQuery(document).ready(function (t) {
      var e = scrolltotop,
        i = document.all;
      (e.cssfixedsupport =
        !i ||
        (i && "CSS1Compat" == document.compatMode && window.XMLHttpRequest)),
        (e.$body = window.opera
          ? "CSS1Compat" == document.compatMode
            ? t("html")
            : t("body")
          : t("html,body")),
        (e.$control = t('<div id="topcontrol">' + e.controlHTML + "</div>")
          .css({
            position: e.cssfixedsupport ? "fixed" : "absolute",
            bottom: e.controlattrs.offsety,
            opacity: 0,
            cursor: "pointer",
          })
          .attr({ title: "" })
          .on("click", function () {
            return e.scrollup(), !1;
          })
          .appendTo("body")),
        document.all &&
          !window.XMLHttpRequest &&
          "" != e.$control.text() &&
          e.$control.css({ width: e.$control.width() }),
        e.togglecontrol(),
        t('a[href="' + e.anchorkeyword + '"]').on("click", function () {
          return e.scrollup(), !1;
        }),
        t(window).on("scroll resize", function (t) {
          e.togglecontrol();
        });
    });
  },
};
function porto_init(t) {
  "use strict";
  jQuery(window).on("touchstart", function () {}),
    t || (t = jQuery(document.body));
  var e = t.get(0);
  t.trigger("porto_init_start", [e]),
    (function (i) {
      if (
        (i.fn.themeAccordion &&
          i(function () {
            t.find(".accordion:not(.manual)").each(function () {
              var t,
                e = i(this),
                o = e.data("plugin-options");
              o && (t = o), e.themeAccordion(t);
            });
          }),
        i.fn.themeAccordionMenu &&
          i(function () {
            t.find(".accordion-menu:not(.manual)").each(function () {
              var t,
                e = i(this),
                o = e.data("plugin-options");
              o && (t = o), e.themeAccordionMenu(t);
            });
          }),
        i.fn.themeChartCircular)
      ) {
        var o = e.querySelectorAll(
          "[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)"
        );
        o.length &&
          theme.dynIntObsInit(
            o,
            "themeChartCircular",
            theme.ChartCircular.defaults
          );
      }
      (i.fn.themeFitVideo &&
        i(function () {
          t.find(".fit-video:not(.manual)").each(function () {
            var t,
              e = i(this),
              o = e.data("plugin-options");
            o && (t = o), e.themeFitVideo(t);
          });
        }),
      i.fn.themePluginVideoBackground &&
        i(function () {
          t.find("[data-plugin-video-background]:not(.manual)").each(
            function () {
              var t,
                e = i(this),
                o = theme.getOptions(e.data("plugin-options"));
              o && (t = o), e.themePluginVideoBackground(t);
            }
          );
        }),
      i.fn.themeFlickrZoom &&
        i(function () {
          t.find(".wpb_flickr_widget:not(.manual)").each(function () {
            var t,
              e = i(this),
              o = e.data("plugin-options");
            o && (t = o), e.themeFlickrZoom(t);
          });
        }),
      i.fn.themePluginLazyLoad &&
        i(function () {
          t.find("[data-plugin-lazyload]:not(.manual)").each(function () {
            var t,
              e = i(this),
              o = e.data("plugin-options");
            o && (t = o), e.themePluginLazyLoad(t);
          }),
            t
              .find(".porto-lazyload")
              .filter(function () {
                return !(
                  i(this).data("__lazyload") ||
                  (i(this).closest(".owl-carousel").length &&
                    i(this).closest(".owl-carousel").find(".owl-item.cloned")
                      .length)
                );
              })
              .themePluginLazyLoad({ effect: "fadeIn", effect_speed: 400 }),
            t.find(".porto-lazyload").closest(".nivoSlider").length &&
              theme.requestTimeout(function () {
                t.find(".nivoSlider").each(function () {
                  i(this).find(".porto-lazyload").length &&
                    i(this)
                      .closest(".nivoSlider")
                      .find(".nivo-main-image")
                      .attr(
                        "src",
                        i(this)
                          .closest(".nivoSlider")
                          .find(".porto-lazyload")
                          .eq(0)
                          .attr("src")
                      );
                });
              }, 100),
            t.find(".porto-lazyload").closest(".porto-carousel-wrapper")
              .length &&
              theme.requestTimeout(function () {
                t.find(".porto-carousel-wrapper").each(function () {
                  i(this).find(".porto-lazyload:not(.lazy-load-loaded)")
                    .length &&
                    i(this).find(".slick-list").css("height", "auto");
                });
              }, 100);
        }),
      i.fn.themeMasonry &&
        i(function () {
          t.find("[data-plugin-masonry]:not(.manual)").each(function () {
            var t,
              e = i(this);
            e.hasClass("elementor-row") &&
              e.children(".elementor-column").addClass("porto-grid-item");
            var o = e.data("plugin-options");
            o && (t = o), e.themeMasonry(t);
          }),
            t
              .find(".posts-masonry .posts-container:not(.manual)")
              .each(function () {
                var t = i(this).data("plugin-options");
                t || (t = {}),
                  (t.itemSelector = ".post"),
                  i(this).themeMasonry(t);
              }),
            t
              .find(".page-portfolios .portfolio-row:not(.manual)")
              .each(function () {
                if (
                  !(
                    i(this).closest(".porto-grid-container").length > 0 ||
                    void 0 !== i(this).attr("data-plugin-masonry")
                  )
                ) {
                  var t,
                    e = i(this).parent(),
                    o = "masonry",
                    n = ".portfolio:not(.w2)",
                    s = null;
                  e.hasClass("portfolios-grid") ||
                    (e.hasClass("portfolios-masonry") &&
                      (e.children(".bounce-loader").length ||
                        e.append(
                          '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
                        ))),
                    (t = {
                      itemSelector: ".portfolio",
                      layoutMode: o,
                      callback: function () {
                        s && clearTimeout(s),
                          (s = setTimeout(function () {
                            void 0 !== theme.FilterZoom &&
                              theme.FilterZoom.initialize(
                                i(".page-portfolios")
                              ),
                              e.addClass("portfolio-iso-active");
                          }, 400));
                      },
                    }),
                    e.find(".portfolio:not(.w2)").length || (n = ".portfolio"),
                    (t = i.extend(!0, {}, t, { masonry: { columnWidth: n } })),
                    i(this).themeMasonry(t);
                }
              }),
            t.find(".page-members .member-row:not(.manual)").each(function () {
              i(this).themeMasonry({
                itemSelector: ".member",
                callback: function () {
                  setTimeout(function () {
                    void 0 !== theme.FilterZoom &&
                      theme.FilterZoom.initialize(i(".page-members"));
                  }, 400);
                },
              });
            });
        }),
      i.fn.themePreviewImage &&
        i(function () {
          t.find(".thumb-info-preview .thumb-info-image:not(.manual)").each(
            function () {
              var t,
                e = i(this),
                o = e.data("plugin-options");
              o && (t = o), e.themePreviewImage(t);
            }
          );
        }),
      i.fn.themeToggle &&
        i(function () {
          t.find("section.toggle:not(.manual)").each(function () {
            var t,
              e = i(this),
              o = e.data("plugin-options");
            o && (t = o), e.themeToggle(t);
          });
        }),
      i.fn.themeParallax &&
        i(function () {
          t.find("[data-plugin-parallax]:not(.manual)").each(function () {
            var t,
              e = i(this),
              o = e.data("plugin-options");
            o && (t = o), e.themeParallax(t);
          });
        }),
      i.fn.themeSticky &&
        i(function () {
          t.find(
            "[data-plugin-sticky]:not(.manual), .porto-sticky:not(.manual), .porto-sticky-nav:not(.manual)"
          ).each(function () {
            var t,
              e = i(this),
              o = e.data("plugin-options");
            o && (t = o), e.is(":visible") && e.themeSticky(t);
          });
        }),
      i.fn.themePluginFloatElement &&
        i(function () {
          t.find("[data-plugin-float-element]:not(.manual)").each(function () {
            var t,
              e = i(this),
              o = theme.getOptions(e.data("plugin-options"));
            o && (t = o), e.themePluginFloatElement(t);
          });
        }),
      "undefined" != typeof bootstrap) &&
        ([].slice
          .call(
            e.querySelectorAll(
              "[data-bs-tooltip]:not(.manual), [data-toggle='tooltip']:not(.manual), .star-rating:not(.manual)"
            )
          )
          .map(function (t) {
            return new bootstrap.Tooltip(t);
          }),
        [].slice
          .call(e.querySelectorAll("[data-toggle='popover']"))
          .map(function (t) {
            return new bootstrap.Popover(t);
          }));
      t
        .find('a[data-bs-toggle="tab"]')
        .off("shown.bs.tab")
        .on("shown.bs.tab", function (t) {
          i(this).parents(".nav-tabs").find(".active").removeClass("active"),
            i(this).addClass("active").parent().addClass("active");
        }),
        i.fn.vcwaypoint &&
          t.find(".vc_progress_bar").each(function () {
            var t = i(this);
            t.find(".progress-bar-tooltip").length &&
              t.vcwaypoint(
                function () {
                  var e = t.find(".progress-bar-tooltip"),
                    i = 0,
                    o = e.length;
                  !(function t() {
                    theme.requestTimeout(function () {
                      e.animate({ opacity: 1 });
                    }, 200),
                      ++i < o && t();
                  })();
                },
                { offset: "85%" }
              );
          }),
        "function" == typeof theme.initAsync
          ? theme.initAsync(t, e)
          : i(document.body).on("porto_async_init", function () {
              theme.initAsync(t, e);
            });
    })(jQuery),
    jQuery(document.body).trigger("porto_init", [t]);
}
(function (t, e) {
  "use strict";
  (t = t || {}),
    e.extend(t, {
      ScrollToTop: {
        defaults: {
          html: '<i class="fas fa-chevron-up"></i>',
          offsetx: 10,
          offsety: 0,
        },
        initialize: function (t, i, o) {
          return (
            e("#topcontrol").length ||
              ((this.html = t || this.defaults.html),
              (this.offsetx = i || this.defaults.offsetx),
              (this.offsety = o || this.defaults.offsety),
              this.build()),
            this
          );
        },
        build: function () {
          var t = this;
          return (
            void 0 !== scrolltotop &&
              ((scrolltotop.controlHTML = t.html),
              (scrolltotop.controlattrs = {
                offsetx: t.offsetx,
                offsety: t.offsety,
              }),
              scrolltotop.init()),
            t
          );
        },
      },
    });
}).apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        MegaMenu: {
          defaults: { menu: e(".mega-menu") },
          initialize: function (t) {
            return (
              (this.$menu = t || this.defaults.menu),
              this.build().events(),
              this
            );
          },
          popupWidth: function () {
            var i = window.innerWidth,
              o = t.bodyWidth - 2 * t.grid_gutter_width;
            return (
              e("body").hasClass("wide") ||
                (i >= t.container_width + t.grid_gutter_width - 1
                  ? (o = t.container_width - t.grid_gutter_width)
                  : i >= 992
                  ? (o = 960 - t.grid_gutter_width)
                  : i >= 768 && (o = 720 - t.grid_gutter_width)),
              o
            );
          },
          calcMenuPosition: function (i) {
            var o = i,
              n = e("#header .header-main").hasClass("elementor-section")
                ? e("#header .header-main > .elementor-container")
                : e("#header .header-main .container-fluid").length
                ? e("#header .header-main .container-fluid")
                : e("#header .header-main .container").length
                ? e("#header .header-main .container")
                : null;
            if (null !== n && n.length) {
              var s =
                n.outerWidth() -
                parseInt(n.css("padding-left")) -
                parseInt(n.css("padding-right"));
              if (!(s < 900)) {
                o.parent().hasClass("pos-fullwidth") &&
                  (o.get(0).style.width = s + "px");
                var a = t.bodyWidth,
                  r = o.offset().left - (a - s) / 2;
                window.theme.rtl &&
                  (r =
                    t.bodyWidth -
                    (o.offset().left + o.outerWidth()) -
                    (a - s) / 2);
                var l = o.width(),
                  d = s - (r + l),
                  h = !1;
                return (
                  r > d && r < l && (h = (r + d) / 3), d < 0 && (h = -d), h
                );
              }
            }
          },
          build: function (i) {
            var o = this;
            return (
              i || (i = o.$menu),
              i.each(function () {
                var i = e(this),
                  n = (i.closest(".container"), o.popupWidth());
                if (i.closest(".porto-popup-menu").length) return !1;
                i.children("li.has-sub").each(function () {
                  var i = e(this),
                    s = i.children(".popup");
                  if (s.length) {
                    var a = s.get(0);
                    if (((a.style.display = "block"), i.hasClass("wide"))) {
                      a.style.left = 0;
                      var r =
                          parseInt(s.css("padding-left")) +
                          parseInt(s.css("padding-right")) +
                          parseInt(s.find("> .inner").css("padding-left")) +
                          parseInt(s.find("> .inner").css("padding-right")),
                        l = 4;
                      i.hasClass("col-2") && (l = 2),
                        i.hasClass("col-3") && (l = 3),
                        i.hasClass("col-4") && (l = 4),
                        i.hasClass("col-5") && (l = 5),
                        i.hasClass("col-6") && (l = 6),
                        window.innerWidth < 992 && (l = 1);
                      var d = 0;
                      s.find("> .inner > ul > li").each(function () {
                        var t = parseFloat(e(this).attr("data-cols"));
                        (t <= 0 || !t) && (t = 1), t > l && (t = l), (d += t);
                      }),
                        d > l && (d = l);
                      var h = s.data("popup-mw")
                          ? s.data("popup-mw")
                          : s.find(".inner").css("max-width"),
                        c = n / l;
                      if (
                        ("none" !== h && h < n && (c = parseInt(h) / l),
                        s.find("> .inner > ul > li").each(function () {
                          var t = parseFloat(e(this).data("cols"));
                          t <= 0 && (t = 1),
                            t > l && (t = l),
                            i.hasClass("pos-center") ||
                            i.hasClass("pos-left") ||
                            i.hasClass("pos-right")
                              ? (this.style.width = (100 / d) * t + "%")
                              : (this.style.width = (100 / l) * t + "%");
                        }),
                        i.hasClass("pos-center"))
                      ) {
                        s.find("> .inner > ul").get(0).style.width =
                          c * d - r + "px";
                        var u = s.offset().left - (t.bodyWidth - c * d) / 2;
                        a.style.left = "-" + u + "px";
                      } else if (i.hasClass("pos-left"))
                        (s.find("> .inner > ul").get(0).style.width =
                          c * d - r + "px"),
                          (a.style.left = "-15px");
                      else if (i.hasClass("pos-right"))
                        (s.find("> .inner > ul").get(0).style.width =
                          c * d - r + "px"),
                          (a.style.right = "-15px"),
                          (a.style.left = "auto");
                      else {
                        i.hasClass("pos-fullwidth") ||
                          (s.find("> .inner > ul").get(0).style.width =
                            n - r + "px"),
                          t.rtl &&
                            ((a.style.right = 0), (a.style.left = "auto"));
                        u = o.calcMenuPosition(s);
                        t.rtl
                          ? ((a.style.right = "-15px"),
                            (a.style.left = "auto"),
                            u && (a.style.right = "-" + u + "px"))
                          : ((a.style.left = "-15px"),
                            (a.style.right = "auto"),
                            u && (a.style.left = "-" + u + "px"));
                      }
                    } else if (i.hasClass("pos-center"));
                    else if (i.hasClass("pos-left"));
                    else if (i.hasClass("pos-right"));
                    else if (s.offset().left + s.width() > window.innerWidth)
                      i.addClass("pos-right");
                    else if (s.find("> .inner > ul").length) {
                      var p = s.find("> .inner > ul").eq(0);
                      p.offset().left + p.width() + 200 > window.innerWidth &&
                        p.addClass("pos-left");
                    }
                    i.addClass("sub-ready");
                  }
                });
              }),
              o
            );
          },
          events: function () {
            var i = this;
            return (
              e(window).smartresize(function () {
                i.build();
              }),
              t.isLoaded
                ? t.requestFrame(function () {
                    i.build();
                  })
                : e(window).on("load", function () {
                    t.requestFrame(function () {
                      i.build();
                    });
                  }),
              i
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        SidebarMenu: {
          defaults: {
            menu: e(".sidebar-menu:not(.side-menu-accordion)"),
            toggle: e(".widget_sidebar_menu .widget-title .toggle"),
            menu_toggle: e("#main-toggle-menu .menu-title"),
          },
          rtl: t.rtl,
          initialize: function (t, i, o) {
            return this.$menu && this.$menu.length && t && t.length
              ? ((this.$menu = e.uniqueSort(e.merge(this.$menu, t))),
                this.build(),
                this)
              : ((this.$menu = t || this.defaults.menu),
                this.$menu.length
                  ? ((this.$toggle = i || this.defaults.toggle),
                    (this.$menu_toggle = o || this.defaults.menu_toggle),
                    this.build().events(),
                    this)
                  : this);
          },
          isRightSidebar: function (t) {
            var i = !1;
            (i = this.rtl
              ? !(
                  e("#main").hasClass("column2-right-sidebar") ||
                  e("#main").hasClass("column2-wide-right-sidebar")
                )
              : e("#main").hasClass("column2-right-sidebar") ||
                e("#main").hasClass("column2-wide-right-sidebar")),
              t.closest("#main-toggle-menu").length && (i = !!this.rtl);
            var o = t.closest(".header-wrapper");
            return (
              o.length &&
                o.hasClass("header-side-nav") &&
                ((i = !!this.rtl),
                e(".page-wrapper").hasClass("side-nav-right") &&
                  (i = !this.rtl)),
              i
            );
          },
          popupWidth: function () {
            var i = window.innerWidth,
              o = t.bodyWidth - 2 * t.grid_gutter_width;
            return (
              e("body").hasClass("wide") ||
                (i >= t.container_width + t.grid_gutter_width - 1
                  ? (o = t.container_width - t.grid_gutter_width)
                  : i >= 992
                  ? (o = 960 - t.grid_gutter_width)
                  : i >= 768 && (o = 720 - t.grid_gutter_width)),
              o
            );
          },
          build: function (t) {
            var i = this;
            if ((t || (t = i.$menu), t.length)) {
              var o = t.parent(".toggle-menu-wrap"),
                n = null;
              if (
                (o.length &&
                  o.is(":hidden") &&
                  (((n = o.get(0)).style.display = "block"),
                  (n.style.visibility = "hidden")),
                t.each(function () {
                  var t,
                    o = this,
                    n = e(this);
                  if (!o.classList.contains("side-menu-slide")) {
                    if (window.innerWidth < 992) t = i.popupWidth();
                    else {
                      var s = this.offsetWidth ? this.offsetWidth : n.width();
                      t = i.popupWidth() - s - 45;
                    }
                    var a = i.isRightSidebar(n),
                      r = n.children("li");
                    r.each(function () {
                      var i = e(this),
                        s = i.children(".popup");
                      if (s.length) {
                        var l = s.get(0),
                          d = !1;
                        if (
                          (s.is(":visible")
                            ? (d = !0)
                            : (l.style.display = "block"),
                          i.hasClass("wide"))
                        ) {
                          n.hasClass("side-menu-columns") || (l.style.left = 0);
                          var h = 4;
                          i.hasClass("col-2") && (h = 2),
                            i.hasClass("col-3") && (h = 3),
                            i.hasClass("col-4") && (h = 4),
                            i.hasClass("col-5") && (h = 5),
                            i.hasClass("col-6") && (h = 6),
                            window.innerWidth < 992 && (h = 1);
                          var c = 0;
                          s.find("> .inner > ul > li").each(function () {
                            var t = parseFloat(e(this).data("cols"));
                            (!t || t <= 0) && (t = 1),
                              t > h && (t = h),
                              (c += t);
                          }),
                            c > h && (c = h);
                          var u = s.data("popup-mw")
                              ? s.data("popup-mw")
                              : s.find(".inner").css("max-width"),
                            p = t / h;
                          "none" !== u && u < t && (p = parseInt(u) / h),
                            s.find("> .inner > ul > li").each(function () {
                              var t = parseFloat(e(this).data("cols"));
                              t <= 0 && (t = 1),
                                t > h && (t = h),
                                i.hasClass("pos-center") ||
                                i.hasClass("pos-left") ||
                                i.hasClass("pos-right")
                                  ? (this.style.width = (100 / c) * t + "%")
                                  : (this.style.width = (100 / h) * t + "%");
                            }),
                            (l.children[0].children[0].style.width =
                              p * c + 1 + "px"),
                            n.hasClass("side-menu-columns") ||
                              (a
                                ? ((l.style.left = "auto"),
                                  (l.style.right =
                                    (this.offsetWidth
                                      ? this.offsetWidth
                                      : e(this).width()) + "px"))
                                : ((l.style.left =
                                    (this.offsetWidth
                                      ? this.offsetWidth
                                      : e(this).width()) + "px"),
                                  (l.style.right = "auto")));
                        }
                        d || (l.style.display = "none"),
                          o.classList.contains("side-menu-accordion") ||
                            o.classList.contains("side-menu-slide") ||
                            i.hasClass("sub-ready") ||
                            (!("ontouchstart" in document) &&
                            window.innerWidth > 991
                              ? i
                                  .on("mouseenter", function () {
                                    r.find(".popup").hide(),
                                      s.show(),
                                      s.parent().addClass("open");
                                  })
                                  .on("mouseleave", function () {
                                    s.hide(), s.parent().removeClass("open");
                                  })
                              : i.on("click", ".arrow", function () {
                                  s.slideToggle(),
                                    s.parent().toggleClass("open");
                                }),
                            i.addClass("sub-ready"));
                      }
                    });
                  }
                }),
                t.hasClass("side-menu-slide"))
              ) {
                var s = {
                  $mainNav: t,
                  $mainNavItem: t.find("li"),
                  build: function () {
                    this.menuNav();
                  },
                  initSub: function (t) {
                    var e = t.closest("ul"),
                      i = t.parent().find("ul").first();
                    i.children(".menu-item").children(".go-back").length < 1 &&
                      i.prepend(
                        '<li class="menu-item"><a class="go-back" href="#">' +
                          js_porto_vars.submenu_back +
                          "</a></li>"
                      );
                    var o =
                      i.find("> li").length * i.find("> li").outerHeight() -
                      i.outerHeight();
                    e.addClass("next-menu"),
                      i.addClass("visible"),
                      e.css({ overflow: "visible", "overflow-y": "visible" }),
                      o > 0 &&
                        i.css({ overflow: "hidden", "overflow-y": "scroll" }),
                      i.outerHeight() <
                        i.closest(".header-main").outerHeight() - 100 &&
                        i.css({
                          height:
                            i.outerHeight() + i.find("> li").outerHeight(),
                        }),
                      i.css({ "padding-top": o + "px" });
                  },
                  menuNav: function () {
                    var t = this;
                    t.$mainNav
                      .find(".menu-item-has-children > a.nolink")
                      .removeClass("nolink")
                      .attr("href", ""),
                      t.$mainNav
                        .find(".menu-item-has-children > a:not(.go-back)")
                        .off("click")
                        .on("click", function (i) {
                          i.stopImmediatePropagation(), i.preventDefault();
                          var o = e(this);
                          js_porto_vars.lazyload_menu &&
                          !t.$mainNav.hasClass("sub-ready")
                            ? (t.initSub(o),
                              t.$mainNav.on("sub-loaded", function () {
                                t.initSub(o);
                              }))
                            : t.initSub(o);
                        });
                  },
                };
                s.build();
              }
              return (
                n && ((n.style.display = ""), (n.style.visibility = "")), i
              );
            }
          },
          events: function () {
            var t,
              i = this;
            (i.$toggle.on("click", function () {
              var t = e(this).parent().parent(),
                o = e(this);
              o.hasClass("closed")
                ? (o.removeClass("closed"),
                  t.removeClass("closed"),
                  t
                    .find(".sidebar-menu-wrap")
                    .stop()
                    .slideDown(400, function () {
                      e(this).attr("style", "").show(), i.build();
                    }))
                : (o.addClass("closed"),
                  t.addClass("closed"),
                  t
                    .find(".sidebar-menu-wrap")
                    .stop()
                    .slideUp(400, function () {
                      e(this).attr("style", "").hide();
                    }));
            }),
            this.$menu_toggle.on("click", function () {
              var t = e(this).parent();
              if (!t.hasClass("show-always") && !t.hasClass("show-hover")) {
                var o = e(this);
                o.hasClass("closed")
                  ? (o.removeClass("closed"),
                    t.removeClass("closed"),
                    t
                      .find(".toggle-menu-wrap")
                      .stop()
                      .slideDown(400, function () {
                        e(this).attr("style", "").show();
                      }),
                    i.build())
                  : (o.addClass("closed"),
                    t.addClass("closed"),
                    t
                      .find(".toggle-menu-wrap")
                      .stop()
                      .slideUp(400, function () {
                        e(this).attr("style", "").hide();
                      }));
              }
            }),
            i.$menu.hasClass("side-menu-slide") &&
              i.$menu.on("click", ".go-back", function (t) {
                t.preventDefault();
                var i = e(this).closest(".next-menu"),
                  o = 0;
                i.length &&
                  i.find("> li").length &&
                  (o =
                    i.find("> li").length * i.find("> li").outerHeight() -
                    i.outerHeight()),
                  i.removeClass("next-menu"),
                  e(this).closest("ul").removeClass("visible"),
                  o > 0 &&
                    i.css({ overflow: "hidden", "overflow-y": "scroll" });
              }),
            e(".sidebar-menu:not(.side-menu-accordion)").closest(
              "[data-plugin-sticky]"
            ).length)
              ? e(window).smartresize(function () {
                  t && clearTimeout(t),
                    (t = setTimeout(function () {
                      i.build();
                    }, 800));
                })
              : e(window).smartresize(function () {
                  i.build();
                });
            return (
              setTimeout(function () {
                i.build();
              }, 400),
              i
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        StickyHeader: {
          defaults: { header: e("#header") },
          initialize: function (i) {
            if (
              ((this.$header = i || this.defaults.header),
              (this.sticky_height = 0),
              (this.sticky_pos = 0),
              (this.change_logo = t.change_logo),
              !t.show_sticky_header ||
                !this.$header.length ||
                e(".side-header-narrow-bar").length)
            )
              return this;
            var o = this,
              n = o.$header.find("> .main-menu-wrap");
            return (
              n.length
                ? ((o.$menu_wrap = n), (o.menu_height = n.height()))
                : (o.$menu_wrap = !1),
              (o.$header_main = o.$header.find(".header-main")),
              !o.$header_main.length &&
                o.$header.children(".elementor-location-header").length &&
                (o.$header_main = o.$header
                  .children(".elementor-location-header")
                  .last()
                  .addClass("header-main")),
              o.$header_main.length
                ? ((o.reveal = o.$header
                    .parents(".header-wrapper")
                    .hasClass("header-reveal")),
                  (o.is_sticky = !1),
                  o.reset().build().events(),
                  o)
                : this
            );
          },
          build: function () {
            var i = this;
            if (
              !i.is_sticky &&
              window.innerHeight +
                i.header_height +
                t.adminBarHeight() +
                parseInt(i.$header.css("border-top-width")) >=
                e(document).height()
            )
              return i;
            window.innerHeight > e(document.body).height() &&
              window.scrollTo(0, 0);
            var o = e(window).scrollTop();
            if (i.$menu_wrap && !t.isTablet())
              if (
                (i.$header_main.stop().css("top", 0),
                i.$header.parent().hasClass("fixed-header") &&
                  i.$header.parent().attr("style", ""),
                o > i.sticky_pos)
              ) {
                if (!i.$header.hasClass("sticky-header")) {
                  var n,
                    s = i.$header.outerHeight();
                  i.$header.addClass("sticky-header").css("height", s),
                    i.$menu_wrap.stop().css("top", t.adminBarHeight()),
                    (n = i.$header
                      .find(".header-main .searchform select")
                      .data("selectric")) &&
                      void 0 !== n.close &&
                      n.close(),
                    i.$header.parent().hasClass("fixed-header") &&
                      (i.$header_main.hide(), i.$header.css("height", "")),
                    i.init_toggle_menu ||
                      ((i.init_toggle_menu = !0),
                      t.MegaMenu.build(),
                      e("#main-toggle-menu").length &&
                        (e("#main-toggle-menu").hasClass("show-always") &&
                          (e("#main-toggle-menu").data("show-always", !0),
                          e("#main-toggle-menu").removeClass("show-always")),
                        e("#main-toggle-menu").addClass("closed"),
                        e("#main-toggle-menu .menu-title").addClass("closed"),
                        e("#main-toggle-menu .toggle-menu-wrap").attr(
                          "style",
                          ""
                        ))),
                    (i.is_sticky = !0);
                }
              } else
                i.$header.hasClass("sticky-header") &&
                  (i.$header.removeClass("sticky-header"),
                  i.$header.css("height", ""),
                  i.$menu_wrap.stop().css("top", 0),
                  i.$header_main.show(),
                  (n = i.$header
                    .find(".main-menu-wrap .searchform select")
                    .data("selectric")) &&
                    void 0 !== n.close &&
                    n.close(),
                  i.init_toggle_menu &&
                    ((i.init_toggle_menu = !1),
                    t.MegaMenu.build(),
                    e("#main-toggle-menu").length &&
                      e("#main-toggle-menu").data("show-always") &&
                      (e("#main-toggle-menu").addClass("show-always"),
                      e("#main-toggle-menu").removeClass("closed"),
                      e("#main-toggle-menu .menu-title").removeClass("closed"),
                      e("#main-toggle-menu .toggle-menu-wrap").attr(
                        "style",
                        ""
                      ))),
                  (i.is_sticky = !1));
            else if (
              (i.$header_main.show(),
              i.$header.parent().hasClass("fixed-header") &&
              e("#wpadminbar").length &&
              "absolute" == e("#wpadminbar").css("position")
                ? i.$header
                    .parent()
                    .css(
                      "top",
                      e("#wpadminbar").height() - o < 0
                        ? -e("#wpadminbar").height()
                        : -o
                    )
                : (i.$header.parent().hasClass("fixed-header") ||
                    i.$header.parent().hasClass("fixed-header")) &&
                  i.$header.parent().attr("style", ""),
              i.$header.hasClass("sticky-menu-header") && !t.isTablet())
            )
              i.$header_main.stop().css("top", 0),
                i.change_logo && i.$header_main.removeClass("change-logo"),
                i.$header_main.removeClass("sticky"),
                i.$header.removeClass("sticky-header"),
                (i.is_sticky = !1),
                (i.sticky_height = 0);
            else if (
              (i.$menu_wrap && i.$menu_wrap.stop().css("top", 0),
              o > i.sticky_pos &&
                (!t.isTablet() ||
                  (t.isTablet() &&
                    !t.isMobile() &&
                    t.show_sticky_header_tablet) ||
                  (t.isMobile() &&
                    t.show_sticky_header_tablet &&
                    t.show_sticky_header_mobile)))
            ) {
              if (!i.$header.hasClass("sticky-header")) {
                s = i.$header.outerHeight();
                i.$header.addClass("sticky-header").css("height", s),
                  i.$header_main.addClass("sticky"),
                  i.change_logo && i.$header_main.addClass("change-logo"),
                  i.$header_main.stop().css("top", t.adminBarHeight()),
                  i.init_toggle_menu ||
                    ((i.init_toggle_menu = !0),
                    t.MegaMenu.build(),
                    e("#main-toggle-menu").length &&
                      (e("#main-toggle-menu").hasClass("show-always") &&
                        (e("#main-toggle-menu").data("show-always", !0),
                        e("#main-toggle-menu").removeClass("show-always")),
                      e("#main-toggle-menu").addClass("closed"),
                      e("#main-toggle-menu .menu-title").addClass("closed"),
                      e("#main-toggle-menu .toggle-menu-wrap").attr(
                        "style",
                        ""
                      ))),
                  (i.is_sticky = !0);
              }
            } else
              i.$header.hasClass("sticky-header") &&
                (i.change_logo && i.$header_main.removeClass("change-logo"),
                i.$header_main.removeClass("sticky"),
                i.$header.removeClass("sticky-header"),
                i.$header.css("height", ""),
                i.$header_main.stop().css("top", 0),
                i.init_toggle_menu &&
                  ((i.init_toggle_menu = !1),
                  t.MegaMenu.build(),
                  e("#main-toggle-menu").length &&
                    e("#main-toggle-menu").data("show-always") &&
                    (e("#main-toggle-menu").addClass("show-always"),
                    e("#main-toggle-menu").removeClass("closed"),
                    e("#main-toggle-menu .menu-title").removeClass("closed"),
                    e("#main-toggle-menu .toggle-menu-wrap").attr(
                      "style",
                      ""
                    ))),
                (i.is_sticky = !1));
            return (
              i.$header.hasClass("header-loaded") ||
                i.$header.addClass("header-loaded"),
              i.$header.find(".logo").hasClass("logo-transition") ||
                i.$header.find(".logo").addClass("logo-transition"),
              i.$header.find(".overlay-logo").get(0) &&
                !i.$header
                  .find(".overlay-logo")
                  .hasClass("overlay-logo-transition") &&
                i.$header
                  .find(".overlay-logo")
                  .addClass("overlay-logo-transition"),
              i
            );
          },
          reset: function () {
            var i = this;
            return (
              i.$header.find(".logo").hasClass("logo-transition") &&
                i.$header.find(".logo").removeClass("logo-transition"),
              i.$header.find(".overlay-logo").get(0) &&
                i.$header
                  .find(".overlay-logo")
                  .hasClass("overlay-logo-transition") &&
                i.$header
                  .find(".overlay-logo")
                  .removeClass("overlay-logo-transition"),
              i.$menu_wrap && !t.isTablet()
                ? (i.$header.addClass("sticky-header sticky-header-calc"),
                  i.$header_main.addClass("sticky"),
                  i.change_logo && i.$header_main.addClass("change-logo"),
                  (i.sticky_height =
                    i.$menu_wrap.height() +
                    parseInt(i.$menu_wrap.css("padding-top")) +
                    parseInt(i.$menu_wrap.css("padding-bottom"))),
                  i.change_logo && i.$header_main.removeClass("change-logo"),
                  i.$header_main.removeClass("sticky"),
                  i.$header.removeClass("sticky-header sticky-header-calc"),
                  (i.header_height =
                    i.$header.height() + parseInt(i.$header.css("margin-top"))),
                  (i.menu_height =
                    i.$menu_wrap.height() +
                    parseInt(i.$menu_wrap.css("padding-top")) +
                    parseInt(i.$menu_wrap.css("padding-bottom"))),
                  (i.sticky_pos =
                    i.header_height -
                    i.sticky_height +
                    parseInt(e("body").css("padding-top")) +
                    parseInt(i.$header.css("border-top-width"))),
                  e(".banner-before-header").length &&
                    (i.sticky_pos += e(".banner-before-header").height()),
                  e(".porto-block-html-top").length &&
                    (i.sticky_pos += e(".porto-block-html-top").height()))
                : (i.$header.addClass("sticky-header sticky-header-calc"),
                  i.$header_main.addClass("sticky"),
                  i.change_logo && i.$header_main.addClass("change-logo"),
                  (i.sticky_height = i.$header_main.outerHeight()),
                  i.change_logo && i.$header_main.removeClass("change-logo"),
                  i.$header_main.removeClass("sticky"),
                  i.$header.removeClass("sticky-header sticky-header-calc"),
                  (i.header_height =
                    i.$header.height() + parseInt(i.$header.css("margin-top"))),
                  (i.main_height = i.$header_main.height()),
                  !t.isTablet() ||
                    (t.isTablet() &&
                      !t.isMobile() &&
                      t.show_sticky_header_tablet) ||
                    (t.isMobile() &&
                      t.show_sticky_header_tablet &&
                      t.show_sticky_header_mobile) ||
                    (i.sticky_height = 0),
                  (i.sticky_pos =
                    i.$header.offset().top +
                    i.header_height -
                    i.sticky_height -
                    t.adminBarHeight() +
                    parseInt(i.$header.css("border-top-width")))),
              i.reveal &&
                (i.menu_height
                  ? (i.sticky_pos += i.menu_height + 30)
                  : (i.sticky_pos += 30)),
              i.sticky_pos < 0 && (i.sticky_pos = 0),
              (i.init_toggle_menu = !1),
              i.$header_main.removeAttr("style"),
              !t.isTablet() &&
              i.$header.hasClass("header-side") &&
              void 0 !== i.$header.attr("data-plugin-sticky")
                ? i.$header.css("height", "")
                : i.$header.removeAttr("style"),
              i
            );
          },
          events: function () {
            var i = this,
              o = 0;
            return (
              e(window).smartresize(function () {
                o != window.innerWidth &&
                  (i.reset().build(), (o = window.innerWidth));
              }),
              window.addEventListener(
                "scroll",
                function () {
                  t.requestFrame(function () {
                    i.build();
                  });
                },
                { passive: !0 }
              ),
              i
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        SideNav: {
          defaults: { side_nav: e(".header-side-nav #header") },
          bc_pos_top: 0,
          initialize: function (t) {
            if (
              ((this.$side_nav = t || this.defaults.side_nav),
              !this.$side_nav.length)
            )
              return this;
            var e = this;
            return (
              e.$side_nav.addClass("initialize"), e.reset().build().events(), e
            );
          },
          build: function () {
            var i = this,
              o = e(".page-top"),
              n = e("#main");
            if (t.isTablet())
              o.removeClass("fixed-pos"),
                o.attr("style", ""),
                n.attr("style", "");
            else {
              var s = e(window).scrollTop();
              o.length &&
                o.outerHeight() < 100 &&
                !e(".side-header-narrow-bar-top").length &&
                (i.page_top_offset == t.adminBarHeight() ||
                i.page_top_offset <= s
                  ? o.hasClass("fixed-pos") ||
                    (o.addClass("fixed-pos"),
                    o.css("top", t.adminBarHeight()),
                    n.css("padding-top", o.outerHeight()))
                  : o.hasClass("fixed-pos") &&
                    (o.removeClass("fixed-pos"),
                    o.attr("style", ""),
                    n.attr("style", ""))),
                n.css(
                  "min-height",
                  window.innerHeight -
                    t.adminBarHeight() -
                    e(".page-top:not(.fixed-pos)").height() -
                    e(".footer-wrapper").height()
                );
            }
            return i;
          },
          reset: function () {
            var i = this;
            if (t.isTablet()) i.$side_nav.attr("style", "");
            else {
              var o = window.innerHeight,
                n = i.$side_nav.find(".side-bottom");
              i.$side_nav.css({
                "min-height": o - t.adminBarHeight(),
                "padding-bottom": n.length
                  ? n.height() +
                    parseInt(n.css("margin-top")) +
                    parseInt(n.css("margin-bottom"))
                  : "",
              });
              var s = navigator.appVersion,
                a = s.indexOf("AppleWebKit/") + 12,
                r = a + 3;
              s.slice(a, r) < 537 &&
                (i.$side_nav.css("-webkit-backface-visibility", "hidden"),
                i.$side_nav.css("-webkit-perspective", "1000"));
            }
            var l = e(".page-top"),
              d = e("#main");
            return (
              l.length &&
                (l.removeClass("fixed-pos"),
                l.attr("style", ""),
                d.attr("style", ""),
                (i.page_top_offset = l.offset().top)),
              i
            );
          },
          events: function () {
            var i = this;
            return (
              e(window).on("resize", function () {
                i.reset().build();
              }),
              window.addEventListener(
                "scroll",
                function () {
                  i.build();
                },
                { passive: !0 }
              ),
              e(".side-header-narrow-bar-top").length &&
                (e(window).scrollTop() >
                  t.adminBarHeight() +
                    e(".side-header-narrow-bar-top").height() &&
                  e(".side-header-narrow-bar-top").addClass(
                    "side-header-narrow-bar-sticky"
                  ),
                window.addEventListener(
                  "scroll",
                  function () {
                    e(this).scrollTop() >
                    t.adminBarHeight() +
                      e(".side-header-narrow-bar-top").height()
                      ? e(".side-header-narrow-bar-top").addClass(
                          "side-header-narrow-bar-sticky"
                        )
                      : e(".side-header-narrow-bar-top").removeClass(
                          "side-header-narrow-bar-sticky"
                        );
                  },
                  { passive: !0 }
                )),
              e(".side-header-narrow-bar .hamburguer-btn").on(
                "click",
                function () {
                  e(this).toggleClass("active"),
                    e("#header").toggleClass("side-header-visible"),
                    e(this).closest(".side-header-narrow-bar-top").length &&
                      !e("#header > .hamburguer-btn").length &&
                      e(this).closest(".side-header-narrow-bar-top").toggle();
                }
              ),
              e(".hamburguer-close").on("click", function () {
                e(".side-header-narrow-bar .hamburguer-btn").trigger("click");
              }),
              i
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        Search: {
          defaults: { popup: e(".searchform-popup"), form: e(".searchform") },
          initialize: function (t, e) {
            return (
              (this.$popup = t || this.defaults.popup),
              (this.$form = e || this.defaults.form),
              this.build().events(),
              this
            );
          },
          build: function () {
            var t = this.$form.find(".text input"),
              i = this.$form.find(".cat");
            return (
              e(".searchform .cat").get(0) &&
                e.fn.selectric &&
                e(".searchform .cat").selectric({
                  arrowButtonMarkup: "",
                  expandToItemText: !0,
                  maxHeight: 240,
                }),
              t.on("change", function () {
                var i = e(this),
                  o = i.val();
                t.each(function () {
                  i != e(this) && e(this).val(o);
                });
              }),
              i.on("change", function () {
                var t = e(this),
                  o = t.val();
                i.each(function () {
                  t != e(this) && e(this).val(o);
                });
              }),
              this
            );
          },
          events: function () {
            var t = this;
            return (
              t.$popup.on("click", function (t) {
                t.stopPropagation();
              }),
              t.$popup.find(".search-toggle").on("click", function (i) {
                i.preventDefault(),
                  e(this).toggleClass("opened"),
                  e(this).next().toggle(),
                  e(this).hasClass("opened") &&
                    (e("#mini-cart.open").removeClass("open"),
                    e(this).next().find('input[type="text"]').focus(),
                    t.$popup.find(".btn-close-search-form").length &&
                      t.$popup.parent().addClass("position-static")),
                  i.preventDefault(),
                  i.stopPropagation();
              }),
              e("html,body").on("click", function () {
                t.removeFormStyle();
              }),
              "ontouchstart" in document ||
                e(window).on("resize", function () {
                  t.removeFormStyle();
                }),
              e(".btn-close-search-form").on("click", function (e) {
                e.preventDefault(), t.removeFormStyle();
              }),
              t
            );
          },
          removeFormStyle: function () {
            this.$form.removeAttr("style"),
              this.$popup.find(".search-toggle").removeClass("opened"),
              this.$popup.find(".btn-close-search-form").length &&
                this.$popup.parent().removeClass("position-static");
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        HashScroll: {
          initialize: function () {
            return this.build().events(), this;
          },
          build: function () {
            try {
              var i = window.location.hash,
                o = e(i);
              return (
                o.length &&
                  "#review_form" != i &&
                  "#reviews" != i &&
                  -1 == i.indexOf("#comment-") &&
                  e("html, body")
                    .delay(600)
                    .stop()
                    .animate(
                      {
                        scrollTop:
                          o.offset().top -
                          t.StickyHeader.sticky_height -
                          t.adminBarHeight() -
                          t.sticky_nav_height +
                          1,
                      },
                      600,
                      "easeOutQuad"
                    ),
                this
              );
            } catch (t) {
              return this;
            }
          },
          getTarget: function (t) {
            if ("#" == t || t.endsWith("#")) return !1;
            var i;
            if (0 == t.indexOf("#")) i = e(t);
            else {
              var o = window.location.href;
              -1 != (o = o.substring(o.indexOf("://") + 3)).indexOf("#") &&
                (o = o.substring(0, o.indexOf("#"))),
                0 ==
                  (t = (t = t.substring(t.indexOf("://") + 3)).substring(
                    t.indexOf(o) + o.length
                  )).indexOf("#") && (i = e(t));
            }
            return i;
          },
          activeMenuItem: function () {
            var i = this,
              o = e(window).scrollTop(),
              n = e(
                '.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"]'
              );
            return (
              n.length &&
                n.each(function () {
                  var n = e(this),
                    s = n.attr("href"),
                    a = i.getTarget(s);
                  if (a && a.get(0))
                    if (
                      n.parent().is(":last-child") &&
                      o + window.innerHeight >= a.offset().top + a.outerHeight()
                    )
                      n.parent().siblings().removeClass("active"),
                        n.parent().addClass("active");
                    else {
                      var r =
                          a.offset().top -
                          t.StickyHeader.sticky_height -
                          t.adminBarHeight() -
                          t.sticky_nav_height +
                          1,
                        l = n.parent();
                      r <= o + 5
                        ? (l.siblings().removeClass("active"),
                          l.addClass("active"),
                          l.closest(".secondary-menu").length &&
                            l
                              .closest("#header")
                              .find(".main-menu")
                              .eq(0)
                              .children(".menu-item.active")
                              .removeClass("active"))
                        : l.removeClass("active");
                    }
                }),
              i
            );
          },
          events: function () {
            var i = this;
            e(
              '.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"], a[href*="#"].hash-scroll, .hash-scroll-wrap a[href*="#"]'
            ).on("click", function (o) {
              o.preventDefault();
              var n = e(this),
                s = n.attr("href"),
                a = i.getTarget(s);
              if (a && a.get(0)) {
                var r = n.parent(),
                  l =
                    a.offset().top -
                    t.StickyHeader.sticky_height -
                    t.adminBarHeight() -
                    t.sticky_nav_height +
                    1;
                e("html, body")
                  .stop()
                  .animate({ scrollTop: l }, 600, "easeOutQuad", function () {
                    r.siblings().removeClass("active"), r.addClass("active");
                  }),
                  n.closest(".porto-popup-menu.opened").length &&
                    n
                      .closest(".porto-popup-menu.opened")
                      .children(".hamburguer-btn")
                      .trigger("click");
              } else ("#" == s && n.closest(".porto-popup-menu.opened").length) || n.hasClass("nolink") || (window.location.href = n.attr("href"));
            });
            var o = e(
              '.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"]'
            );
            return (
              o.each(function () {
                var t = "-20% 0px -79.9% 0px",
                  n = e(this).parent().is(":last-child");
                if (n) {
                  var s = document.getElementById(this.hash.replace("#", ""));
                  if (
                    s &&
                    document.body.offsetHeight - s.offsetTop <
                      window.innerHeight
                  ) {
                    var a =
                      ((window.innerHeight -
                        document.body.offsetHeight +
                        s.offsetTop) /
                        window.innerHeight) *
                      0.8;
                    t =
                      "-" +
                      (20 + (a = Math.round(100 * a))) +
                      "% 0px -" +
                      (79.9 - a) +
                      "% 0px";
                  }
                }
                i.scrollSpyIntObs(
                  this.hash,
                  function () {
                    this &&
                      void 0 !== this[0] &&
                      this[0].id &&
                      e(
                        '.menu-item > a[href*="#' +
                          this[0].id +
                          '"], .porto-sticky-nav .nav > li > a[href*="#' +
                          this[0].id +
                          '"]'
                      )
                        .parent()
                        .addClass("active")
                        .siblings()
                        .removeClass("active");
                  },
                  { rootMargin: t, thresholds: 0 },
                  !0,
                  n,
                  !0,
                  o,
                  e(this).parent().index()
                );
              }),
              i
            );
          },
          scrollSpyIntObs: function (t, i, o, n, s, a, r, l) {
            if ("undefined" == typeof IntersectionObserver) return this;
            var d = document.getElementById(t.replace("#", ""));
            if (!d) return this;
            var h = { rootMargin: "0px 0px 200px 0px" };
            return (
              Object.keys(o).length && (h = e.extend(h, o)),
              new IntersectionObserver(function (t) {
                for (var o = 0; o < t.length; o++) {
                  var n = t[o];
                  if (n.intersectionRatio > 0)
                    if ("string" == typeof i) Function("return " + i)();
                    else i.call(e(n.target));
                  else
                    0 == a &&
                      s &&
                      r
                        .filter('[href*="' + n.target.id + '"]')
                        .parent()
                        .prev()
                        .addClass("active")
                        .siblings()
                        .removeClass("active"),
                      (a = !1);
                }
              }, h).observe(d),
              this
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    (t = t || {}),
      e.extend(t, {
        SortFilter: {
          defaults: {
            filters: ".porto-sort-filters ul",
            elements: ".porto-sort-container .row",
          },
          initialize: function (t, i) {
            return (
              (this.$elements = t || e(this.defaults.elements)),
              (this.$filters = i || e(this.defaults.filters)),
              this.build(),
              this
            );
          },
          build: function () {
            var i = this;
            return (
              i.$elements.each(function () {
                var i = e(this);
                i.isotope({
                  itemSelector: ".porto-sort-item",
                  layoutMode: "masonry",
                  getSortData: { popular: "[data-popular] parseInt" },
                  sortBy: "popular",
                  isOriginLeft: !t.rtl,
                }),
                  imagesLoaded(this, function () {
                    i.data("isotope") && i.isotope("layout");
                  });
              }),
              i.$filters.each(function () {
                var i = e(this),
                  o = i.attr("data-sort-id"),
                  n = e("#" + o);
                n.length &&
                  (i.on("click", "li", function (o) {
                    o.preventDefault();
                    var s = e(this);
                    i.find("li").removeClass("active"), s.addClass("active");
                    var a = s.attr("data-sort-by");
                    n.isotope({ sortBy: a });
                    var r = s.attr("data-filter-by");
                    r
                      ? n.isotope({ filter: r })
                      : n.isotope({ filter: ".porto-sort-item" }),
                      t.refreshVCContent();
                  }),
                  i.find("li[data-active]").trigger("click"));
              }),
              i
            );
          },
        },
      });
  }.apply(this, [window.theme, jQuery]),
  (function (t) {
    var e = {
      $wrapper: t(".footer-reveal"),
      init: function () {
        this.build(), this.events();
      },
      build: function () {
        var e = this.$wrapper.outerHeight(!0),
          i = window.innerHeight - theme.adminBarHeight();
        t("#header .header-main").length &&
          (i -= t("#header .header-main").height()),
          e > i
            ? (t(".footer-wrapper").removeClass("footer-reveal"),
              t(".page-wrapper").css("margin-bottom", 0))
            : (t(".footer-wrapper").addClass("footer-reveal"),
              t(".page-wrapper").css("margin-bottom", e),
              document.body.offsetHeight < window.innerHeight &&
                (document.body.style.paddingBottom = "0.1px"));
      },
      events: function () {
        var e = this;
        t(window).smartresize(function () {
          e.build();
        });
      },
    };
    t(".footer-reveal").get(0) && e.init();
  })(jQuery),
  function (t, e) {
    "use strict";
    t = t || {};
    var i = "__floatElement",
      o = function (t, e) {
        return this.initialize(t, e);
      };
    (o.defaults = {
      startPos: "top",
      speed: 3,
      horizontal: !1,
      transition: !1,
      transitionDelay: 0,
      transitionDuration: 500,
    }),
      (o.prototype = {
        initialize: function (t, e) {
          return (
            t.data(i) || ((this.$el = t), this.setData().setOptions(e).build()),
            this
          );
        },
        setData: function () {
          return this.$el.data(i, this), this;
        },
        setOptions: function (t) {
          return (
            (this.options = e.extend(!0, {}, o.defaults, t, {
              wrapper: this.$el,
            })),
            this
          );
        },
        build: function () {
          var t,
            i = this,
            o = this.options.wrapper,
            n = e(window);
          return (
            i.options.style && o.attr("style", i.options.style),
            n.width() > 767 &&
              ("none" == i.options.startPos
                ? (t = "")
                : "top" == i.options.startPos
                ? (o.css({ top: 0 }), (t = ""))
                : (o.css({ bottom: 0 }), (t = "-")),
              i.options.transition &&
                o.css({
                  transition:
                    "ease-out transform " +
                    i.options.transitionDuration +
                    "ms " +
                    i.options.transitionDelay +
                    "ms",
                }),
              i.movement(t),
              window.addEventListener(
                "scroll",
                function () {
                  i.movement(t);
                },
                { passive: !0 }
              )),
            this
          );
        },
        movement: function (t) {
          var i = this,
            o = this.options.wrapper,
            n = e(window),
            s = n.scrollTop(),
            a = o.offset().top,
            r = (100 * (a - s)) / n.height();
          a + o.height() >= s &&
            a <= s + window.innerHeight &&
            (i.options.horizontal
              ? o.css({
                  transform:
                    "translate3d(" +
                    t +
                    r / i.options.speed +
                    "%, " +
                    t +
                    r / i.options.speed +
                    "%, 0)",
                })
              : o.css({
                  transform:
                    "translate3d(0, " + t + r / i.options.speed + "%, 0)",
                }));
        },
      }),
      e.extend(t, { PluginFloatElement: o }),
      (e.fn.themePluginFloatElement = function (t) {
        return this.map(function () {
          var n = e(this);
          return n.data(i) ? n.data(i) : new o(n, t);
        });
      });
  }.apply(this, [window.theme, jQuery]),
  function (t, e) {
    "use strict";
    e(document).ready(function () {
      var i,
        o = 0;
      if (
        (e(window).smartresize(function () {
          o != window.innerWidth &&
            ((t.adminBarHeightNum = null), (o = window.innerWidth));
        }),
        void 0 !== t.ScrollToTop && t.ScrollToTop.initialize(),
        setTimeout(function () {
          porto_init();
        }, 0),
        (t.bodyWidth = t.bodyWidth || document.body.offsetWidth),
        void 0 !== t.MegaMenu && t.MegaMenu.initialize(),
        void 0 !== t.SidebarMenu &&
          (t.SidebarMenu.initialize(),
          e(".sidebar-menu.side-menu-accordion").themeAccordionMenu({
            open_one: !0,
          })),
        (function () {
          if (
            (e(".porto-popup-menu").length &&
              (e(".porto-popup-menu .hamburguer-btn").on("click", function (i) {
                i.preventDefault();
                var o = e(this);
                e(".porto-popup-menu-spacer").length
                  ? e(".porto-popup-menu-spacer").remove()
                  : (e(
                      '<div class="porto-popup-menu-spacer"></div>'
                    ).insertBefore(o.parent()),
                    e(".porto-popup-menu-spacer").width(o.parent().width())),
                  o.parent().toggleClass("opened"),
                  t.requestFrame(function () {
                    o.toggleClass("active");
                  });
              }),
              e(".porto-popup-menu .main-menu").scrollbar(),
              e(".porto-popup-menu").on(
                "click",
                "li.menu-item-has-children > a",
                function (t) {
                  t.preventDefault(),
                    e(this)
                      .parent()
                      .siblings("li.menu-item-has-children.opened")
                      .removeClass("opened"),
                    e(this).parent().toggleClass("opened");
                }
              )),
            js_porto_vars.lazyload_menu)
          ) {
            var i,
              o,
              n = !1;
            e(".secondary-menu.mega-menu").length
              ? ((i = "secondary_menu"), (o = e(".mega-menu.main-menu")))
              : e(".mega-menu.main-menu:not(.scroll-wrapper)").length
              ? ((i = "main_menu"),
                (o = e(".mega-menu.main-menu:not(.scroll-wrapper)")))
              : e(".toggle-menu-wrap .sidebar-menu").length
              ? ((i = "toggle_menu"),
                (o = e(".toggle-menu-wrap .sidebar-menu")))
              : e(".main-sidebar-menu .sidebar-menu").length
              ? ((i = "sidebar_menu"),
                (o = e(".main-sidebar-menu .sidebar-menu")))
              : e(".header-side-nav .sidebar-menu").length &&
                ((i = "header_side_menu"),
                (o = e(".header-side-nav .sidebar-menu"))),
              o &&
                o.length &&
                ("pageload" == js_porto_vars.lazyload_menu
                  ? t.lazyload_menu(o, i)
                  : "firsthover" == js_porto_vars.lazyload_menu &&
                    o.one(
                      "mouseenter touchstart",
                      "li.menu-item-has-children",
                      function () {
                        if (n) return !0;
                        t.lazyload_menu(o, i), (n = !0);
                      }
                    ));
          }
          void 0 !== t.SideNav && t.SideNav.initialize(),
            void 0 !== t.StickyHeader && t.StickyHeader.initialize();
        })(),
        void 0 !== t.HashScroll && t.HashScroll.initialize(),
        js_porto_vars.use_skeleton_screen.length > 0 &&
          e(".skeleton-loading").length)
      ) {
        var n =
            ((i = e.Deferred()),
            e(function () {
              i.resolve(), !0;
            }),
            i.promise()),
          s = !1,
          a =
            window.MutationObserver ||
            window.WebkitMutationObserver ||
            window.MozMutationObserver;
        void 0 !== a &&
          (s = new a(function (t, i) {
            for (var o in t) {
              var n = t[o];
              "childList" == n.type &&
                e(n.target).trigger("skeleton:initialised");
            }
          }));
        var r = setTimeout(function () {
          s && (s.disconnect(), (s = void 0));
        }, 4e3);
        e(".skeleton-loading").each(function (i) {
          var o = e(this),
            a = (function () {
              var t = e.Deferred();
              return (
                o.on("skeleton:initialised", function (e) {
                  e.target.classList.contains("skeleton-loading") &&
                    t.resolve(e);
                }),
                t.promise()
              );
            })(),
            l = e.Deferred().resolve().promise();
          if (
            (e.when(a, l, n).done(function (i) {
              var o = e(i.target),
                n = o.siblings(".skeleton-body");
              n.length ||
                (n = o
                  .parent()
                  .parent()
                  .parent()
                  .find(
                    '[class="' +
                      o
                        .attr("class")
                        .replace("skeleton-loading", "skeleton-body") +
                      '"]'
                  )),
                porto_init(o),
                o.find(".sidebar-menu:not(.side-menu-accordion)").length &&
                  t.SidebarMenu.initialize(
                    o.find(".sidebar-menu:not(.side-menu-accordion)")
                  ),
                o.trigger("skeleton-loaded"),
                t.requestTimeout(function () {
                  n.length &&
                    (n.parent().hasClass("yit-wcan-container")
                      ? n.parent().remove()
                      : n.remove()),
                    o.removeClass("skeleton-loading"),
                    o.closest(".skeleton-loading-wrap") &&
                      o
                        .closest(".skeleton-loading-wrap")
                        .removeClass("skeleton-loading-wrap"),
                    (e(document.body).hasClass("elementor-default") ||
                      e(document.body).hasClass("elementor-page")) &&
                      e(window).trigger("resize"),
                    t.refreshStickySidebar(!1);
                }, 100),
                e(".skeleton-loading").length ||
                  (clearTimeout(r), s.disconnect(), (s = void 0));
            }),
            o.children('script[type="text/template"]').length)
          ) {
            var d = e(
              JSON.parse(
                o.children('script[type="text/template"]').eq(0).html()
              )
            );
            o.children('script[type="text/template"]').eq(0).remove(),
              s && s.observe(this, { childList: !0, subtree: !1 }),
              o.append(d),
              s || o.trigger("skeleton:initialised");
          }
        });
      }
      e(document).trigger("porto_theme_init");
    }),
      e(window).on("load", function () {
        setTimeout(function () {
          void 0 !== t.Search && t.Search.initialize();
        }, 0),
          void 0 !== t.SortFilter && t.SortFilter.initialize(),
          e(document).on("click", ".sidebar-toggle", function (t) {
            t.preventDefault();
            var i = e("html");
            e(this).siblings(".porto-product-filters").length
              ? i.hasClass("filter-sidebar-opened")
                ? (i.removeClass("filter-sidebar-opened"),
                  e(".sidebar-overlay").removeClass("active"))
                : (i.removeClass("sidebar-opened"),
                  i.addClass("filter-sidebar-opened"),
                  e(".sidebar-overlay").addClass("active"))
              : i.hasClass("sidebar-opened")
              ? (i.removeClass("sidebar-opened"),
                e(".sidebar-overlay").removeClass("active"))
              : (i.addClass("sidebar-opened"),
                e(".sidebar-overlay").addClass("active"));
          }),
          e(".minicart-offcanvas .cart-head").on("click", function () {
            e(this)
              .closest(".minicart-offcanvas")
              .toggleClass("minicart-opened");
          }),
          e(".minicart-offcanvas .minicart-overlay").on("click", function () {
            e(this)
              .closest(".minicart-offcanvas")
              .removeClass("minicart-opened");
          }),
          e(document.body).on("click", ".sidebar-overlay", function () {
            e("html").removeClass("sidebar-opened"),
              e("html").removeClass("filter-sidebar-opened"),
              e(this).removeClass("active");
          }),
          e(window).on("resize", function (t) {
            t.originalEvent &&
              window.innerWidth > 991 &&
              e("html").hasClass("sidebar-opened") &&
              e(".sidebar-overlay").trigger("click");
          });
        var i = e(
          ".tabs-simple .featured-box .box-content, .porto-content-box .featured-box .box-content, .vc_general.vc_cta3, .match-height"
        );
        if (i.length)
          if (e.fn.matchHeight) i.matchHeight();
          else {
            var o = document.createElement("script");
            o.addEventListener("load", function (t) {
              i.matchHeight();
            }),
              (o.src = js_porto_vars.ajax_loader_url.replace(
                "/images/ajax-loader@2x.gif",
                "/js/libs/jquery.matchHeight.min.js"
              )),
              (o.async = !0),
              document.body.appendChild(o);
          }
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) && e(".share-whatsapp").css("display", "inline-block"),
          e(document).ajaxComplete(function (t, i, o) {
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) && e(".share-whatsapp").css("display", "inline-block");
          }),
          window.navigator.userAgent.indexOf("Edge/") > 0 &&
            e("html").addClass("ie12"),
          e(document).on(
            "click",
            ".portfolios-lightbox a.portfolio-link",
            function (t) {
              return e(this).find(".thumb-info-zoom").trigger("click"), !1;
            }
          ),
          e(".porto-faqs").each(function () {
            e(this).find(".faq .toggle.active").length < 1 &&
              (e(this).find(".faq").eq(0).find(".toggle").addClass("active"),
              e(this).find(".faq").eq(0).find(".toggle-content").show());
          }),
          e(document).on("shown.bs.collapse", ".collapse", function () {
            var i = e(this);
            t.refreshVCContent(i);
          }),
          e(document).on(
            "shown.bs.tab",
            'a[data-bs-toggle="tab"]',
            function (i) {
              var o = e(e(i.target).attr("href"));
              t.refreshVCContent(o);
            }
          ),
          e(".porto-tooltip .tooltip-icon").on("click", function () {
            "none" == e(this).parent().children(".tooltip-popup").css("display")
              ? e(this).parent().children(".tooltip-popup").fadeIn(200)
              : e(this).parent().children(".tooltip-popup").fadeOut(200);
          }),
          e(".porto-tooltip .tooltip-close").on("click", function () {
            e(this).parent().fadeOut(200);
          });
      });
  }.apply(this, [window.theme, jQuery]),
  (function (t, e, i) {
    "use strict";
    e(document).ready(function () {
      e(window).on("vc_reload", function () {
        porto_init(),
          e(".type-post").addClass("post"),
          e(".type-portfolio").addClass("portfolio"),
          e(".type-member").addClass("member"),
          e(".type-block").addClass("block");
      });
    });
    var o = {
      $timeline: e("#exp-timeline"),
      $timelineBar: e("#exp-timeline .timeline-bar"),
      $firstTimelineItem: e("#exp-timeline .timeline-box").first(),
      $lastTimelineItem: e("#exp-timeline .timeline-box").last(),
      build: function () {
        this.adjustHeight();
      },
      adjustHeight: function () {
        var t = this,
          e = t.$firstTimelineItem.outerHeight(!0) / 2 + 5,
          i = t.$lastTimelineItem.outerHeight(!0) / 2 + 5;
        t.$timelineBar.css({ top: e, bottom: i });
      },
    };
    if (e("#exp-timeline").get(0)) {
      var n = null;
      e(window).smartresize(function () {
        n && clearTimeout(n),
          (n = setTimeout(function () {
            o.build();
          }, 800));
      }),
        o.build();
    }
    e(".custom-view-our-location").on("click", function (t) {
      t.preventDefault();
      var i = e(this);
      e(".custom-googlemap").slideDown("1000", function () {
        i.delay(700).hide();
      });
    });
  })(window.theme, jQuery),
  (function (t, e, i) {
    "use strict";
    if (
      ((window.onload = function () {
        t.isLoaded = !0;
      }),
      e(document).ready(function () {
        if (
          (e(".porto-u-heading").each(function () {
            var t = e(this).attr("data-halign");
            "line_only" == e(this).attr("data-hspacer") &&
              ("right" == t || "left" == t
                ? "auto" !=
                    e(this)
                      .find(".porto-u-heading-spacer")
                      .find(".porto-u-headings-line")[0].style.width &&
                  e(this)
                    .find(".porto-u-heading-spacer")
                    .find(".porto-u-headings-line")
                    .css({ float: t })
                : e(this)
                    .find(".porto-u-heading-spacer")
                    .find(".porto-u-headings-line")
                    .css({ margin: "0 auto" }));
          }),
          "undefined" != typeof elementorFrontend &&
            e(window).on("elementor/frontend/init", function () {
              elementorFrontend.hooks.addFilter(
                "frontend/handlers/menu_anchor/scroll_top_distance",
                function (e) {
                  return (
                    t &&
                      t.StickyHeader &&
                      void 0 !== t.sticky_nav_height &&
                      (elementorFrontend.elements.$wpAdminBar.length &&
                        (e += elementorFrontend.elements.$wpAdminBar.height()),
                      (e =
                        e -
                        t.adminBarHeight() -
                        t.StickyHeader.sticky_height -
                        t.sticky_nav_height +
                        1)),
                    e
                  );
                }
              );
            }),
          js_porto_vars.user_edit_pages)
        ) {
          var i = function (t) {
            [].slice
              .call(t.querySelectorAll(".pb-edit-link"))
              .map(function (t) {
                var e = t.getAttribute("data-title");
                if (
                  t.nextSibling &&
                  t.nextSibling.classList.contains("porto-block")
                ) {
                  var i = t.nextSibling;
                  i.classList.add("has-pb-edit");
                  var o = new bootstrap.Tooltip(i, {
                    html: !0,
                    template:
                      '<div class="tooltip porto-tooltip-wrap" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "manual",
                    title:
                      '<a href="' +
                      t.getAttribute("data-link") +
                      '"><i class="porto-icon-edit me-1"></i>' +
                      e +
                      "</a>",
                    delay: 300,
                  });
                  o &&
                    o._element &&
                    (o._element.addEventListener("mouseenter", function (t) {
                      o._enter(t, o);
                    }),
                    o._element.addEventListener("mouseleave", function (t) {
                      o._leave(t, o);
                    }));
                }
                t.parentNode.removeChild(t);
              });
          };
          i(document.body),
            e(".skeleton-loading").on("skeleton-loaded", function () {
              i(this);
            }),
            e(document.body)
              .on(
                "mouseenter mouseleave",
                '.porto-tooltip-wrap[role="tooltip"]',
                function (t) {
                  var i = e(
                    '.porto-block[aria-describedby="' +
                      e(this).attr("id") +
                      '"]'
                  );
                  if (i.length) {
                    var o = bootstrap.Tooltip.getInstance(i.get(0));
                    if (o)
                      o["mouseenter" == t.type ? "_enter" : "_leave"](t, o);
                  }
                }
              )
              .on("porto_init_start", function (t, e) {
                e.classList.contains("porto-posts-grid") && i(e);
              });
        }
      }),
      e(".porto-btn[data-hover]")
        .on("mouseenter", function () {
          var t = e(this).data("hover"),
            i = e(this).data("border-hover");
          t &&
            (e(this).data("originalColor", e(this).css("color")),
            e(this).css("color", t)),
            i &&
              (e(this).data("originalBorderColor", e(this).css("border-color")),
              e(this).css("border-color", i));
        })
        .on("mouseleave", function () {
          var t = e(this).data("originalColor"),
            i = e(this).data("originalBorderColor");
          t && e(this).css("color", t), i && e(this).css("border-color", i);
        }),
      e("#footer .widget_wysija .wysija-submit:not(.btn)").addClass(
        "btn btn-default"
      ),
      e("[data-vc-parallax] .owl-carousel").length &&
        t.requestTimeout(function () {
          "object" == typeof window.vcParallaxSkroll &&
            window.vcParallaxSkroll.refresh();
        }, 200),
      e(".page-content > .alignfull, .post-content > .alignfull").length)
    ) {
      var o = function () {
        e(".page-content > .alignfull, .post-content > .alignfull").each(
          function () {
            e(this)
              .css("left", -1 * e(this).parent().offset().left)
              .css("right", -1 * e(this).parent().offset().left)
              .css(
                "width",
                e("body").width() -
                  (parseInt(e(this).css("margin-left"), 10) +
                    parseInt(e(this).css("margin-right"), 10))
              );
          }
        );
      };
      o(),
        e(window).smartresize(function () {
          o();
        });
    }
  })(window.theme, jQuery),
  (function (t, e) {
    "use strict";
    var i = e("#header .header-main"),
      o = e("#header .main-menu-wrap");
    e(".porto-sticky-navbar").length > 0 &&
      window.addEventListener(
        "scroll",
        function () {
          if (window.innerWidth < 576) {
            var t = -1,
              n = e(window).scrollTop();
            i.length && (t = Math.max(i.scrollTop() + i.height(), t)),
              o.length && (t = Math.max(o.scrollTop() + o.height(), t)),
              t <= 0 &&
                (t =
                  e("#header").length > 0 && e("#header").height() > 10
                    ? e("#header").scrollTop() + e("#header").height()
                    : 100),
              t <= n
                ? e(".porto-sticky-navbar").addClass("fixed")
                : e(".porto-sticky-navbar").removeClass("fixed");
          }
        },
        { passive: !0 }
      );
  })(window.theme, jQuery);
