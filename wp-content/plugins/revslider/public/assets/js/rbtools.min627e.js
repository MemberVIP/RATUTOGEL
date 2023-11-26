!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e, n) {
    n(2), n(6), (t.exports = n(4));
  },
  function (t, e, n) {
    var r, i, o, s;
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */ (s = function (t) {
      "use strict";
      var e = "left",
        n = "right",
        r = "up",
        i = "down",
        o = "none",
        s = "doubletap",
        a = "longtap",
        u = "horizontal",
        l = "vertical",
        h = "all",
        c = "move",
        f = "end",
        p = "cancel",
        d = "ontouchstart" in window,
        g = window.navigator.msPointerEnabled && !window.PointerEvent && !d,
        D = (window.PointerEvent || window.navigator.msPointerEnabled) && !d,
        m = "TouchSwipe";
      function v(v, _) {
        _ = t.extend({}, _);
        var y = d || D || !_.fallbackToMouseEvents,
          x = y
            ? D
              ? g
                ? "MSPointerDown"
                : "pointerdown"
              : "touchstart"
            : "mousedown",
          w = y
            ? D
              ? g
                ? "MSPointerMove"
                : "pointermove"
              : "touchmove"
            : "mousemove",
          C = y
            ? D
              ? g
                ? "MSPointerUp"
                : "pointerup"
              : "touchend"
            : "mouseup",
          F = y ? (D ? "mouseleave" : null) : "mouseleave",
          E = D ? (g ? "MSPointerCancel" : "pointercancel") : "touchcancel",
          b = 0,
          T = null,
          M = null,
          A = 0,
          P = 0,
          S = 0,
          O = 1,
          k = 0,
          B = 0,
          L = null,
          N = t(v),
          R = "start",
          X = 0,
          Y = {},
          I = 0,
          z = 0,
          H = 0,
          W = 0,
          V = 0,
          j = null,
          U = null;
        try {
          N.on(x, q), N.on(E, Q);
        } catch (v) {
          t.error("events not supported " + x + "," + E + " on jQuery.swipe");
        }
        function q(o) {
          if (
            !0 !== N.data(m + "_intouch") &&
            !(0 < t(o.target).closest(_.excludedElements, N).length)
          ) {
            var s = o.originalEvent ? o.originalEvent : o;
            if (
              !s.pointerType ||
              "mouse" != s.pointerType ||
              0 != _.fallbackToMouseEvents
            ) {
              var a,
                u,
                l = s.touches,
                c = l ? l[0] : s;
              return (
                (R = "start"),
                l
                  ? (X = l.length)
                  : !1 !== _.preventDefaultEvents && o.preventDefault(),
                (B = M = T = null),
                (O = 1),
                (k = S = P = A = b = 0),
                ((u = {})[e] = yt(e)),
                (u[n] = yt(n)),
                (u.up = yt(r)),
                (u[i] = yt(i)),
                (L = u),
                dt(),
                mt(0, c),
                !l || X === _.fingers || _.fingers === h || st()
                  ? ((I = Ft()),
                    2 == X &&
                      (mt(1, l[1]), (P = S = wt(Y[0].start, Y[1].start))),
                    (_.swipeStatus || _.pinchStatus) && (a = tt(s, R)))
                  : (a = !1),
                !1 === a
                  ? (tt(s, (R = p)), a)
                  : (_.hold &&
                      (U = setTimeout(
                        t.proxy(function () {
                          N.trigger("hold", [s.target]),
                            _.hold && (a = _.hold.call(N, s, s.target));
                        }, this),
                        _.longTapThreshold
                      )),
                    Dt(!0),
                    null)
              );
            }
          }
        }
        function G(s) {
          var a = s.originalEvent ? s.originalEvent : s;
          if (R !== f && R !== p && !gt()) {
            var d,
              g,
              D,
              m,
              v,
              y,
              x,
              w = a.touches,
              C = vt(w ? w[0] : a);
            if (
              ((z = Ft()),
              w && (X = w.length),
              _.hold && clearTimeout(U),
              (R = c),
              2 == X &&
                (0 == P
                  ? (mt(1, w[1]), (P = S = wt(Y[0].start, Y[1].start)))
                  : (vt(w[1]),
                    (S = wt(Y[0].end, Y[1].end)),
                    Y[0].end,
                    Y[1].end,
                    (B = O < 1 ? "out" : "in")),
                (O = ((S / P) * 1).toFixed(2)),
                (k = Math.abs(P - S))),
              X === _.fingers || _.fingers === h || !w || st())
            ) {
              if (
                ((T = Ct(C.start, C.end)),
                (function (t, s) {
                  if (!1 !== _.preventDefaultEvents)
                    if (_.allowPageScroll === o) t.preventDefault();
                    else {
                      var a = "auto" === _.allowPageScroll;
                      switch (s) {
                        case e:
                          ((_.swipeLeft && a) ||
                            (!a && _.allowPageScroll != u)) &&
                            t.preventDefault();
                          break;
                        case n:
                          ((_.swipeRight && a) ||
                            (!a && _.allowPageScroll != u)) &&
                            t.preventDefault();
                          break;
                        case r:
                          ((_.swipeUp && a) ||
                            (!a && _.allowPageScroll != l)) &&
                            t.preventDefault();
                          break;
                        case i:
                          ((_.swipeDown && a) ||
                            (!a && _.allowPageScroll != l)) &&
                            t.preventDefault();
                      }
                    }
                })(s, (M = Ct(C.last, C.end))),
                (y = C.start),
                (x = C.end),
                (b = Math.round(
                  Math.sqrt(Math.pow(x.x - y.x, 2) + Math.pow(x.y - y.y, 2))
                )),
                (A = xt()),
                (function (t, e) {
                  t != o && ((e = Math.max(e, _t(t))), (L[t].distance = e));
                })(T, b),
                (d = tt(a, R)),
                !_.triggerOnTouchEnd || _.triggerOnTouchLeave)
              ) {
                var F = !0;
                _.triggerOnTouchLeave &&
                  ((D = {
                    left: (v = (m = t((m = this))).offset()).left,
                    right: v.left + m.outerWidth(),
                    top: v.top,
                    bottom: v.top + m.outerHeight(),
                  }),
                  (F =
                    (g = C.end).x > D.left &&
                    g.x < D.right &&
                    g.y > D.top &&
                    g.y < D.bottom)),
                  !_.triggerOnTouchEnd && F
                    ? (R = J(c))
                    : _.triggerOnTouchLeave && !F && (R = J(f)),
                  (R != p && R != f) || tt(a, R);
              }
            } else tt(a, (R = p));
            !1 === d && tt(a, (R = p));
          }
        }
        function K(t) {
          var e,
            n = t.originalEvent ? t.originalEvent : t,
            r = n.touches;
          if (r) {
            if (r.length && !gt())
              return (e = n), (H = Ft()), (W = e.touches.length + 1), !0;
            if (r.length && gt()) return !0;
          }
          return (
            gt() && (X = W),
            (z = Ft()),
            (A = xt()),
            rt() || !nt()
              ? tt(n, (R = p))
              : _.triggerOnTouchEnd || (!1 === _.triggerOnTouchEnd && R === c)
              ? (!1 !== _.preventDefaultEvents &&
                  !1 !== t.cancelable &&
                  t.preventDefault(),
                tt(n, (R = f)))
              : !_.triggerOnTouchEnd && ct()
              ? et(n, (R = f), "tap")
              : R === c && tt(n, (R = p)),
            Dt(!1),
            null
          );
        }
        function Q() {
          (S = P = I = z = X = 0), (O = 1), dt(), Dt(!1);
        }
        function Z(t) {
          var e = t.originalEvent ? t.originalEvent : t;
          _.triggerOnTouchLeave && tt(e, (R = J(f)));
        }
        function $() {
          N.off(x, q),
            N.off(E, Q),
            N.off(w, G),
            N.off(C, K),
            F && N.off(F, Z),
            Dt(!1);
        }
        function J(t) {
          var e = t,
            n = it(),
            r = nt(),
            i = rt();
          return (
            !n || i
              ? (e = p)
              : !r || t != c || (_.triggerOnTouchEnd && !_.triggerOnTouchLeave)
              ? !r && t == f && _.triggerOnTouchLeave && (e = p)
              : (e = f),
            e
          );
        }
        function tt(t, e) {
          var n,
            r = t.touches;
          return (
            ((at() && ut()) || ut()) && (n = et(t, e, "swipe")),
            ((ot() && st()) || st()) && !1 !== n && (n = et(t, e, "pinch")),
            pt() && ft() && !1 !== n
              ? (n = et(t, e, s))
              : A > _.longTapThreshold && b < 10 && _.longTap && !1 !== n
              ? (n = et(t, e, a))
              : (1 !== X && d) ||
                !(isNaN(b) || b < _.threshold) ||
                !ct() ||
                !1 === n ||
                (n = et(t, e, "tap")),
            e === p && Q(),
            e === f && ((r && r.length) || Q()),
            n
          );
        }
        function et(o, u, l) {
          var h;
          if ("swipe" == l) {
            if (
              (N.trigger("swipeStatus", [
                u,
                T || null,
                b || 0,
                A || 0,
                X,
                Y,
                M,
              ]),
              _.swipeStatus &&
                !1 ===
                  (h = _.swipeStatus.call(
                    N,
                    o,
                    u,
                    T || null,
                    b || 0,
                    A || 0,
                    X,
                    Y,
                    M
                  )))
            )
              return !1;
            if (u == f && at()) {
              if (
                (clearTimeout(j),
                clearTimeout(U),
                N.trigger("swipe", [T, b, A, X, Y, M]),
                _.swipe && !1 === (h = _.swipe.call(N, o, T, b, A, X, Y, M)))
              )
                return !1;
              switch (T) {
                case e:
                  N.trigger("swipeLeft", [T, b, A, X, Y, M]),
                    _.swipeLeft &&
                      (h = _.swipeLeft.call(N, o, T, b, A, X, Y, M));
                  break;
                case n:
                  N.trigger("swipeRight", [T, b, A, X, Y, M]),
                    _.swipeRight &&
                      (h = _.swipeRight.call(N, o, T, b, A, X, Y, M));
                  break;
                case r:
                  N.trigger("swipeUp", [T, b, A, X, Y, M]),
                    _.swipeUp && (h = _.swipeUp.call(N, o, T, b, A, X, Y, M));
                  break;
                case i:
                  N.trigger("swipeDown", [T, b, A, X, Y, M]),
                    _.swipeDown &&
                      (h = _.swipeDown.call(N, o, T, b, A, X, Y, M));
              }
            }
          }
          if ("pinch" == l) {
            if (
              (N.trigger("pinchStatus", [
                u,
                B || null,
                k || 0,
                A || 0,
                X,
                O,
                Y,
              ]),
              _.pinchStatus &&
                !1 ===
                  (h = _.pinchStatus.call(
                    N,
                    o,
                    u,
                    B || null,
                    k || 0,
                    A || 0,
                    X,
                    O,
                    Y
                  )))
            )
              return !1;
            if (u == f && ot())
              switch (B) {
                case "in":
                  N.trigger("pinchIn", [B || null, k || 0, A || 0, X, O, Y]),
                    _.pinchIn &&
                      (h = _.pinchIn.call(
                        N,
                        o,
                        B || null,
                        k || 0,
                        A || 0,
                        X,
                        O,
                        Y
                      ));
                  break;
                case "out":
                  N.trigger("pinchOut", [B || null, k || 0, A || 0, X, O, Y]),
                    _.pinchOut &&
                      (h = _.pinchOut.call(
                        N,
                        o,
                        B || null,
                        k || 0,
                        A || 0,
                        X,
                        O,
                        Y
                      ));
              }
          }
          return (
            "tap" == l
              ? (u !== p && u !== f) ||
                (clearTimeout(j),
                clearTimeout(U),
                ft() && !pt()
                  ? ((V = Ft()),
                    (j = setTimeout(
                      t.proxy(function () {
                        (V = null),
                          N.trigger("tap", [o.target]),
                          _.tap && (h = _.tap.call(N, o, o.target));
                      }, this),
                      _.doubleTapThreshold
                    )))
                  : ((V = null),
                    N.trigger("tap", [o.target]),
                    _.tap && (h = _.tap.call(N, o, o.target))))
              : l == s
              ? (u !== p && u !== f) ||
                (clearTimeout(j),
                clearTimeout(U),
                (V = null),
                N.trigger("doubletap", [o.target]),
                _.doubleTap && (h = _.doubleTap.call(N, o, o.target)))
              : l == a &&
                ((u !== p && u !== f) ||
                  (clearTimeout(j),
                  (V = null),
                  N.trigger("longtap", [o.target]),
                  _.longTap && (h = _.longTap.call(N, o, o.target)))),
            h
          );
        }
        function nt() {
          var t = !0;
          return null !== _.threshold && (t = b >= _.threshold), t;
        }
        function rt() {
          var t = !1;
          return (
            null !== _.cancelThreshold &&
              null !== T &&
              (t = _t(T) - b >= _.cancelThreshold),
            t
          );
        }
        function it() {
          return !(_.maxTimeThreshold && A >= _.maxTimeThreshold);
        }
        function ot() {
          var t = lt(),
            e = ht(),
            n = null === _.pinchThreshold || k >= _.pinchThreshold;
          return t && e && n;
        }
        function st() {
          return _.pinchStatus || _.pinchIn || _.pinchOut;
        }
        function at() {
          var t = it(),
            e = nt(),
            n = lt(),
            r = ht();
          return !rt() && r && n && e && t;
        }
        function ut() {
          return (
            _.swipe ||
            _.swipeStatus ||
            _.swipeLeft ||
            _.swipeRight ||
            _.swipeUp ||
            _.swipeDown
          );
        }
        function lt() {
          return X === _.fingers || _.fingers === h || !d;
        }
        function ht() {
          return 0 !== Y[0].end.x;
        }
        function ct() {
          return _.tap;
        }
        function ft() {
          return !!_.doubleTap;
        }
        function pt() {
          if (null == V) return !1;
          var t = Ft();
          return ft() && t - V <= _.doubleTapThreshold;
        }
        function dt() {
          W = H = 0;
        }
        function gt() {
          var t = !1;
          return H && Ft() - H <= _.fingerReleaseThreshold && (t = !0), t;
        }
        function Dt(t) {
          N &&
            (!0 === t
              ? (N.on(w, G), N.on(C, K), F && N.on(F, Z))
              : (N.off(w, G, !1), N.off(C, K, !1), F && N.off(F, Z, !1)),
            N.data(m + "_intouch", !0 === t));
        }
        function mt(t, e) {
          var n = {
            start: { x: 0, y: 0 },
            last: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
          };
          return (
            (n.start.x = n.last.x = n.end.x = e.pageX || e.clientX),
            (n.start.y = n.last.y = n.end.y = e.pageY || e.clientY),
            (Y[t] = n)
          );
        }
        function vt(t) {
          var e = void 0 !== t.identifier ? t.identifier : 0,
            n = Y[e] || null;
          return (
            null === n && (n = mt(e, t)),
            (n.last.x = n.end.x),
            (n.last.y = n.end.y),
            (n.end.x = t.pageX || t.clientX),
            (n.end.y = t.pageY || t.clientY),
            n
          );
        }
        function _t(t) {
          if (L[t]) return L[t].distance;
        }
        function yt(t) {
          return { direction: t, distance: 0 };
        }
        function xt() {
          return z - I;
        }
        function wt(t, e) {
          var n = Math.abs(t.x - e.x),
            r = Math.abs(t.y - e.y);
          return Math.round(Math.sqrt(n * n + r * r));
        }
        function Ct(t, s) {
          if (((u = s), (a = t).x == u.x && a.y == u.y)) return o;
          var a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            g =
              ((h = s),
              (c = (l = t).x - h.x),
              (f = h.y - l.y),
              (p = Math.atan2(f, c)),
              (d = Math.round((180 * p) / Math.PI)) < 0 &&
                (d = 360 - Math.abs(d)),
              d);
          return (g <= 45 && 0 <= g) || (g <= 360 && 315 <= g)
            ? e
            : 135 <= g && g <= 225
            ? n
            : 45 < g && g < 135
            ? i
            : r;
        }
        function Ft() {
          return new Date().getTime();
        }
        (this.enable = function () {
          return this.disable(), N.on(x, q), N.on(E, Q), N;
        }),
          (this.disable = function () {
            return $(), N;
          }),
          (this.destroy = function () {
            $(), N.data(m, null), (N = null);
          }),
          (this.option = function (e, n) {
            if ("object" == typeof e) _ = t.extend(_, e);
            else if (void 0 !== _[e]) {
              if (void 0 === n) return _[e];
              _[e] = n;
            } else {
              if (!e) return _;
              t.error(
                "Option " + e + " does not exist on jQuery.swipe.options"
              );
            }
            return null;
          });
      }
      (t.fn.rsswipe = function (e) {
        var n = t(this),
          r = n.data(m);
        if (r && "string" == typeof e) {
          if (r[e])
            return r[e].apply(r, Array.prototype.slice.call(arguments, 1));
          t.error("Method " + e + " does not exist on jQuery.rsswipe");
        } else if (r && "object" == typeof e) r.option.apply(r, arguments);
        else if (!(r || ("object" != typeof e && e)))
          return function (e) {
            return (
              !e ||
                void 0 !== e.allowPageScroll ||
                (void 0 === e.swipe && void 0 === e.swipeStatus) ||
                (e.allowPageScroll = o),
              void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
              (e = e || {}),
              (e = t.extend({}, t.fn.rsswipe.defaults, e)),
              this.each(function () {
                var n = t(this),
                  r = n.data(m);
                r || ((r = new v(this, e)), n.data(m, r));
              })
            );
          }.apply(this, arguments);
        return n;
      }),
        (t.fn.rsswipe.version = "1.6.18"),
        (t.fn.rsswipe.defaults = {
          fingers: 1,
          threshold: 75,
          cancelThreshold: null,
          pinchThreshold: 20,
          maxTimeThreshold: null,
          fingerReleaseThreshold: 250,
          longTapThreshold: 500,
          doubleTapThreshold: 200,
          swipe: null,
          swipeLeft: null,
          swipeRight: null,
          swipeUp: null,
          swipeDown: null,
          swipeStatus: null,
          pinchIn: null,
          pinchOut: null,
          pinchStatus: null,
          click: null,
          tap: null,
          doubleTap: null,
          longTap: null,
          hold: null,
          triggerOnTouchEnd: !0,
          triggerOnTouchLeave: !1,
          allowPageScroll: "auto",
          fallbackToMouseEvents: !0,
          excludedElements: ".noSwipe",
          preventDefaultEvents: !0,
        }),
        (t.fn.rsswipe.phases = {
          PHASE_START: "start",
          PHASE_MOVE: c,
          PHASE_END: f,
          PHASE_CANCEL: p,
        }),
        (t.fn.rsswipe.directions = {
          LEFT: e,
          RIGHT: n,
          UP: r,
          DOWN: i,
          IN: "in",
          OUT: "out",
        }),
        (t.fn.rsswipe.pageScroll = {
          NONE: o,
          HORIZONTAL: u,
          VERTICAL: l,
          AUTO: "auto",
        }),
        (t.fn.rsswipe.fingers = {
          ONE: 1,
          TWO: 2,
          THREE: 3,
          FOUR: 4,
          FIVE: 5,
          ALL: h,
        });
    }),
      n(3).jQuery
        ? ((i = [n(0)]),
          void 0 === (o = "function" == typeof (r = s) ? r.apply(e, i) : r) ||
            (t.exports = o))
        : t.exports
        ? s(n(0))
        : s(jQuery);
  },
  function (t, e) {
    (function (e) {
      t.exports = e;
    }).call(this, {});
  },
  function (t, e) {
    var n;
    ((n = jQuery).waitForImages = {
      hasImageProperties: [
        "backgroundImage",
        "listStyleImage",
        "borderImage",
        "borderCornerImage",
      ],
    }),
      (n.expr.pseudos.uncached = function (t) {
        var e = document.createElement("img");
        return (e.src = t.src), n(t).is('img[src!=""]') && !e.complete;
      }),
      (n.fn.waitForImages = function (t, e, r) {
        if (
          (n.isPlainObject(t) &&
            ((e = t.each), (r = t.waitForAll), (t = t.finished)),
          (t = t || n.noop),
          (e = e || n.noop),
          (r = !!r),
          !n.isFunction(t) || !n.isFunction(e))
        )
          throw new TypeError("An invalid callback was supplied.");
        return this.each(function () {
          var i = n(this),
            o = [];
          if (r) {
            var s = n.waitForImages.hasImageProperties || [],
              a = /url\((['"]?)(.*?)\1\)/g;
            i.find("*").each(function () {
              var t = n(this);
              t.is("img:uncached") &&
                o.push({ src: t.attr("src"), element: t[0] }),
                n.each(s, function (e, n) {
                  var r,
                    i = t.css(n);
                  if (!i) return !0;
                  for (; (r = a.exec(i)); )
                    o.push({ src: r[2], element: t[0] });
                });
            });
          } else
            i.find("img:uncached").each(function () {
              o.push({ src: this.src, element: this });
            });
          var u = o.length,
            l = 0;
          0 == u && t.call(i[0]),
            n.each(o, function (r, o) {
              var s = new Image();
              n(s).bind("load error", function (n) {
                if ((l++, e.call(o.element, l, u, "load" == n.type), l == u))
                  return t.call(i[0]), !1;
              }),
                (s.src = o.src);
            });
        });
      });
  },
  ,
  function (t, e, n) {
    "use strict";
    function r(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function i(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    /*!
     * GSAP 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ n.r(e);
    var o,
      s,
      a,
      u,
      l,
      h,
      c,
      f,
      p,
      d,
      g,
      D,
      m,
      v = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      _ = { duration: 0.5, overwrite: !1, delay: 0 },
      y = 1e8,
      x = 2 * Math.PI,
      w = x / 4,
      C = 0,
      F = Math.sqrt,
      E = Math.cos,
      b = Math.sin,
      T = function (t) {
        return "string" == typeof t;
      },
      M = function (t) {
        return "function" == typeof t;
      },
      A = function (t) {
        return "number" == typeof t;
      },
      P = function (t) {
        return void 0 === t;
      },
      S = function (t) {
        return "object" == typeof t;
      },
      O = function (t) {
        return !1 !== t;
      },
      k = function () {
        return "undefined" != typeof window;
      },
      B = function (t) {
        return M(t) || T(t);
      },
      L =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      N = Array.isArray,
      R = /(?:-?\.?\d|\.)+/gi,
      X = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      Y = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      I = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      z = /[+-]=-?[.\d]+/,
      H = /[^,'"\[\]\s]+/gi,
      W = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      V = {},
      j = {},
      U = function (t) {
        return (j = mt(t, V)) && nn;
      },
      q = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      G = function (t, e) {
        return !e && console.warn(t);
      },
      K = function (t, e) {
        return (t && (V[t] = e) && j && (j[t] = e)) || V;
      },
      Q = function () {
        return 0;
      },
      Z = {},
      $ = [],
      J = {},
      tt = {},
      et = {},
      nt = 30,
      rt = [],
      it = "",
      ot = function (t) {
        var e,
          n,
          r = t[0];
        if ((S(r) || M(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
          for (n = rt.length; n-- && !rt[n].targetTest(r); );
          e = rt[n];
        }
        for (n = t.length; n--; )
          (t[n] && (t[n]._gsap || (t[n]._gsap = new be(t[n], e)))) ||
            t.splice(n, 1);
        return t;
      },
      st = function (t) {
        return t._gsap || ot(Ut(t))[0]._gsap;
      },
      at = function (t, e, n) {
        return (n = t[e]) && M(n)
          ? t[e]()
          : (P(n) && t.getAttribute && t.getAttribute(e)) || n;
      },
      ut = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      lt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      ht = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      ct = function (t, e) {
        for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
        return r < n;
      },
      ft = function () {
        var t,
          e,
          n = $.length,
          r = $.slice(0);
        for (J = {}, $.length = 0, t = 0; t < n; t++)
          (e = r[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      pt = function (t, e, n, r) {
        $.length && ft(), t.render(e, n, r), $.length && ft();
      },
      dt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(H).length < 2
          ? e
          : T(t)
          ? t.trim()
          : t;
      },
      gt = function (t) {
        return t;
      },
      Dt = function (t, e) {
        for (var n in e) n in t || (t[n] = e[n]);
        return t;
      },
      mt = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      vt = function t(e, n) {
        for (var r in n)
          "__proto__" !== r &&
            "constructor" !== r &&
            "prototype" !== r &&
            (e[r] = S(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
        return e;
      },
      _t = function (t, e) {
        var n,
          r = {};
        for (n in t) n in e || (r[n] = t[n]);
        return r;
      },
      yt = function (t) {
        var e,
          n = t.parent || s,
          r = t.keyframes
            ? ((e = N(t.keyframes)),
              function (t, n) {
                for (var r in n)
                  r in t ||
                    ("duration" === r && e) ||
                    "ease" === r ||
                    (t[r] = n[r]);
              })
            : Dt;
        if (O(t.inherit))
          for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp);
        return t;
      },
      xt = function (t, e, n, r) {
        void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
        var i = e._prev,
          o = e._next;
        i ? (i._next = o) : t[n] === e && (t[n] = o),
          o ? (o._prev = i) : t[r] === e && (t[r] = i),
          (e._next = e._prev = e.parent = null);
      },
      wt = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
          (t._act = 0);
      },
      Ct = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
        return t;
      },
      Ft = function (t) {
        for (var e = t.parent; e && e.parent; )
          (e._dirty = 1), e.totalDuration(), (e = e.parent);
        return t;
      },
      Et = function (t) {
        return t._repeat ? bt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      bt = function (t, e) {
        var n = Math.floor((t /= e));
        return t && n === t ? n - 1 : n;
      },
      Tt = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      Mt = function (t) {
        return (t._end = ht(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
        ));
      },
      At = function (t, e) {
        var n = t._dp;
        return (
          n &&
            n.smoothChildTiming &&
            t._ts &&
            ((t._start = ht(
              n._time -
                (t._ts > 0
                  ? e / t._ts
                  : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
            )),
            Mt(t),
            n._dirty || Ct(n, t)),
          t
        );
      },
      Pt = function (t, e) {
        var n;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((n = Tt(t.rawTime(), e)),
            (!e._dur || zt(0, e.totalDuration(), n) - e._tTime > 1e-8) &&
              e.render(n, !0)),
          Ct(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (n = t; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          t._zTime = -1e-8;
        }
      },
      St = function (t, e, n, r) {
        return (
          e.parent && wt(e),
          (e._start = ht(
            (A(n) ? n : n || t !== s ? Xt(t, n, e) : t._time) + e._delay
          )),
          (e._end = ht(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var o,
              s = t[r];
            if (i) for (o = e[i]; s && s[i] > o; ) s = s._prev;
            s
              ? ((e._next = s._next), (s._next = e))
              : ((e._next = t[n]), (t[n] = e)),
              e._next ? (e._next._prev = e) : (t[r] = e),
              (e._prev = s),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          Bt(e) || (t._recent = e),
          r || Pt(t, e),
          t
        );
      },
      Ot = function (t, e) {
        return (
          (V.ScrollTrigger || q("scrollTrigger", e)) &&
          V.ScrollTrigger.create(e, t)
        );
      },
      kt = function (t, e, n, r) {
        return (
          ke(t, e),
          t._initted
            ? !n &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              c !== pe.frame
              ? ($.push(t), (t._lazy = [e, r]), 1)
              : void 0
            : 1
        );
      },
      Bt = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      Lt = function (t, e, n, r) {
        var i = t._repeat,
          o = ht(e) || 0,
          s = t._tTime / t._tDur;
        return (
          s && !r && (t._time *= o / t._dur),
          (t._dur = o),
          (t._tDur = i ? (i < 0 ? 1e10 : ht(o * (i + 1) + t._rDelay * i)) : o),
          s > 0 && !r ? At(t, (t._tTime = t._tDur * s)) : t.parent && Mt(t),
          n || Ct(t.parent, t),
          t
        );
      },
      Nt = function (t) {
        return t instanceof Me ? Ct(t) : Lt(t, t._dur);
      },
      Rt = { _start: 0, endTime: Q, totalDuration: Q },
      Xt = function t(e, n, r) {
        var i,
          o,
          s,
          a = e.labels,
          u = e._recent || Rt,
          l = e.duration() >= y ? u.endTime(!1) : e._dur;
        return T(n) && (isNaN(n) || n in a)
          ? ((o = n.charAt(0)),
            (s = "%" === n.substr(-1)),
            (i = n.indexOf("=")),
            "<" === o || ">" === o
              ? (i >= 0 && (n = n.replace(/=/, "")),
                ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(n.substr(1)) || 0) *
                    (s ? (i < 0 ? u : r).totalDuration() / 100 : 1))
              : i < 0
              ? (n in a || (a[n] = l), a[n])
              : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                s && r && (o = (o / 100) * (N(r) ? r[0] : r).totalDuration()),
                i > 1 ? t(e, n.substr(0, i - 1), r) + o : l + o))
          : null == n
          ? l
          : +n;
      },
      Yt = function (t, e, n) {
        var r,
          i,
          o = A(e[1]),
          s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[s];
        if ((o && (a.duration = e[1]), (a.parent = n), t)) {
          for (r = a, i = n; i && !("immediateRender" in r); )
            (r = i.vars.defaults || {}), (i = O(i.vars.inherit) && i.parent);
          (a.immediateRender = O(r.immediateRender)),
            t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
        }
        return new Xe(e[0], a, e[s + 1]);
      },
      It = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      zt = function (t, e, n) {
        return n < t ? t : n > e ? e : n;
      },
      Ht = function (t, e) {
        return T(t) && (e = W.exec(t)) ? t.substr(e.index + e[0].length) : "";
      },
      Wt = [].slice,
      Vt = function (t, e) {
        return (
          t &&
          S(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && S(t[0]))) &&
          !t.nodeType &&
          t !== a
        );
      },
      jt = function (t, e, n) {
        return (
          void 0 === n && (n = []),
          t.forEach(function (t) {
            var r;
            return (T(t) && !e) || Vt(t, 1)
              ? (r = n).push.apply(r, Ut(t))
              : n.push(t);
          }) || n
        );
      },
      Ut = function (t, e, n) {
        return !T(t) || n || (!u && de())
          ? N(t)
            ? jt(t, n)
            : Vt(t)
            ? Wt.call(t, 0)
            : t
            ? [t]
            : []
          : Wt.call((e || l).querySelectorAll(t), 0);
      },
      qt = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      Gt = function (t) {
        if (M(t)) return t;
        var e = S(t) ? t : { each: t },
          n = xe(e.ease),
          r = e.from || 0,
          i = parseFloat(e.base) || 0,
          o = {},
          s = r > 0 && r < 1,
          a = isNaN(r) || s,
          u = e.axis,
          l = r,
          h = r;
        return (
          T(r)
            ? (l = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
            : !s && a && ((l = r[0]), (h = r[1])),
          function (t, s, c) {
            var f,
              p,
              d,
              g,
              D,
              m,
              v,
              _,
              x,
              w = (c || e).length,
              C = o[w];
            if (!C) {
              if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, y])[1])) {
                for (
                  v = -y;
                  v < (v = c[x++].getBoundingClientRect().left) && x < w;

                );
                x--;
              }
              for (
                C = o[w] = [],
                  f = a ? Math.min(x, w) * l - 0.5 : r % x,
                  p = x === y ? 0 : a ? (w * h) / x - 0.5 : (r / x) | 0,
                  v = 0,
                  _ = y,
                  m = 0;
                m < w;
                m++
              )
                (d = (m % x) - f),
                  (g = p - ((m / x) | 0)),
                  (C[m] = D =
                    u ? Math.abs("y" === u ? g : d) : F(d * d + g * g)),
                  D > v && (v = D),
                  D < _ && (_ = D);
              "random" === r && qt(C),
                (C.max = v - _),
                (C.min = _),
                (C.v = w =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (x > w
                        ? w - 1
                        : u
                        ? "y" === u
                          ? w / x
                          : x
                        : Math.max(x, w / x)) ||
                    0) * ("edges" === r ? -1 : 1)),
                (C.b = w < 0 ? i - w : i),
                (C.u = Ht(e.amount || e.each) || 0),
                (n = n && w < 0 ? _e(n) : n);
            }
            return (
              (w = (C[t] - C.min) / C.max || 0),
              ht(C.b + (n ? n(w) : w) * C.v) + C.u
            );
          }
        );
      },
      Kt = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (n) {
          var r = Math.round(parseFloat(n) / t) * t * e;
          return (r - (r % 1)) / e + (A(n) ? 0 : Ht(n));
        };
      },
      Qt = function (t, e) {
        var n,
          r,
          i = N(t);
        return (
          !i &&
            S(t) &&
            ((n = i = t.radius || y),
            t.values
              ? ((t = Ut(t.values)), (r = !A(t[0])) && (n *= n))
              : (t = Kt(t.increment))),
          It(
            e,
            i
              ? M(t)
                ? function (e) {
                    return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                  }
                : function (e) {
                    for (
                      var i,
                        o,
                        s = parseFloat(r ? e.x : e),
                        a = parseFloat(r ? e.y : 0),
                        u = y,
                        l = 0,
                        h = t.length;
                      h--;

                    )
                      (i = r
                        ? (i = t[h].x - s) * i + (o = t[h].y - a) * o
                        : Math.abs(t[h] - s)) < u && ((u = i), (l = h));
                    return (
                      (l = !n || u <= n ? t[l] : e),
                      r || l === e || A(e) ? l : l + Ht(e)
                    );
                  }
              : Kt(t)
          )
        );
      },
      Zt = function (t, e, n, r) {
        return It(N(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
          return N(t)
            ? t[~~(Math.random() * t.length)]
            : (n = n || 1e-5) &&
                (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n
                  ) *
                    n *
                    r
                ) / r;
        });
      },
      $t = function (t, e, n) {
        return It(n, function (n) {
          return t[~~e(n)];
        });
      },
      Jt = function (t) {
        for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
          (r = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (n = t.substr(e + 7, r - e - 7).match(i ? H : R)),
            (s +=
              t.substr(o, e - o) +
              Zt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
            (o = r + 1);
        return s + t.substr(o, t.length - o);
      },
      te = function (t, e, n, r, i) {
        var o = e - t,
          s = r - n;
        return It(i, function (e) {
          return n + (((e - t) / o) * s || 0);
        });
      },
      ee = function (t, e, n) {
        var r,
          i,
          o,
          s = t.labels,
          a = y;
        for (r in s)
          (i = s[r] - e) < 0 == !!n &&
            i &&
            a > (i = Math.abs(i)) &&
            ((o = r), (a = i));
        return o;
      },
      ne = function (t, e, n) {
        var r,
          i,
          o = t.vars,
          s = o[e];
        if (s)
          return (
            (r = o[e + "Params"]),
            (i = o.callbackScope || t),
            n && $.length && ft(),
            r ? s.apply(i, r) : s.call(i)
          );
      },
      re = function (t) {
        return (
          wt(t),
          t.scrollTrigger && t.scrollTrigger.kill(!1),
          t.progress() < 1 && ne(t, "onInterrupt"),
          t
        );
      },
      ie = function (t) {
        var e = (t = (!t.name && t.default) || t).name,
          n = M(t),
          r =
            e && !n && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          i = {
            init: Q,
            render: qe,
            add: Se,
            kill: Ke,
            modifier: Ge,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: We,
            aliases: {},
            register: 0,
          };
        if ((de(), t !== r)) {
          if (tt[e]) return;
          Dt(r, Dt(_t(t, i), o)),
            mt(r.prototype, mt(i, _t(t, o))),
            (tt[(r.prop = e)] = r),
            t.targetTest && (rt.push(r), (Z[e] = 1)),
            (e =
              ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        K(e, r), t.register && t.register(nn, r, $e);
      },
      oe = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      se = function (t, e, n) {
        return (
          (255 *
            (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
              ? n
              : 3 * t < 2
              ? e + (n - e) * (2 / 3 - t) * 6
              : e) +
            0.5) |
          0
        );
      },
      ae = function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          h,
          c,
          f,
          p = t ? (A(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : oe.black;
        if (!p) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), oe[t]))
            p = oe[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((r = t.charAt(1)),
                (i = t.charAt(2)),
                (o = t.charAt(3)),
                (t =
                  "#" +
                  r +
                  r +
                  i +
                  i +
                  o +
                  o +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (p = parseInt(t.substr(1, 6), 16)) >> 16,
                (p >> 8) & 255,
                255 & p,
                parseInt(t.substr(7), 16) / 255,
              ];
            p = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & 255,
              255 & t,
            ];
          } else if ("hsl" === t.substr(0, 3))
            if (((p = f = t.match(R)), e)) {
              if (~t.indexOf("="))
                return (p = t.match(X)), n && p.length < 4 && (p[3] = 1), p;
            } else
              (s = (+p[0] % 360) / 360),
                (a = +p[1] / 100),
                (r =
                  2 * (u = +p[2] / 100) -
                  (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = se(s + 1 / 3, r, i)),
                (p[1] = se(s, r, i)),
                (p[2] = se(s - 1 / 3, r, i));
          else p = t.match(R) || oe.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !f &&
            ((r = p[0] / 255),
            (i = p[1] / 255),
            (o = p[2] / 255),
            (u = ((l = Math.max(r, i, o)) + (h = Math.min(r, i, o))) / 2),
            l === h
              ? (s = a = 0)
              : ((c = l - h),
                (a = u > 0.5 ? c / (2 - l - h) : c / (l + h)),
                (s =
                  l === r
                    ? (i - o) / c + (i < o ? 6 : 0)
                    : l === i
                    ? (o - r) / c + 2
                    : (r - i) / c + 4),
                (s *= 60)),
            (p[0] = ~~(s + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * u + 0.5))),
          n && p.length < 4 && (p[3] = 1),
          p
        );
      },
      ue = function (t) {
        var e = [],
          n = [],
          r = -1;
        return (
          t.split(he).forEach(function (t) {
            var i = t.match(Y) || [];
            e.push.apply(e, i), n.push((r += i.length + 1));
          }),
          (e.c = n),
          e
        );
      },
      le = function (t, e, n) {
        var r,
          i,
          o,
          s,
          a = "",
          u = (t + a).match(he),
          l = e ? "hsla(" : "rgba(",
          h = 0;
        if (!u) return t;
        if (
          ((u = u.map(function (t) {
            return (
              (t = ae(t, e, 1)) &&
              l +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          n && ((o = ue(t)), (r = n.c).join(a) !== o.c.join(a)))
        )
          for (s = (i = t.replace(he, "1").split(Y)).length - 1; h < s; h++)
            a +=
              i[h] +
              (~r.indexOf(h)
                ? u.shift() || l + "0,0,0,0)"
                : (o.length ? o : u.length ? u : n).shift());
        if (!i)
          for (s = (i = t.split(he)).length - 1; h < s; h++) a += i[h] + u[h];
        return a + i[s];
      },
      he = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in oe) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      ce = /hsl[a]?\(/,
      fe = function (t) {
        var e,
          n = t.join(" ");
        if (((he.lastIndex = 0), he.test(n)))
          return (
            (e = ce.test(n)),
            (t[1] = le(t[1], e)),
            (t[0] = le(t[0], e, ue(t[1]))),
            !0
          );
      },
      pe = (function () {
        var t,
          e,
          n,
          r,
          i,
          o,
          s = Date.now,
          c = 500,
          f = 33,
          d = s(),
          g = d,
          D = 1e3 / 240,
          m = D,
          v = [],
          _ = function n(a) {
            var u,
              l,
              h,
              p,
              _ = s() - g,
              y = !0 === a;
            if (
              (_ > c && (d += _ - f),
              ((u = (h = (g += _) - d) - m) > 0 || y) &&
                ((p = ++r.frame),
                (i = h - 1e3 * r.time),
                (r.time = h /= 1e3),
                (m += u + (u >= D ? 4 : D - u)),
                (l = 1)),
              y || (t = e(n)),
              l)
            )
              for (o = 0; o < v.length; o++) v[o](h, i, p, a);
          };
        return (r = {
          time: 0,
          frame: 0,
          tick: function () {
            _(!0);
          },
          deltaRatio: function (t) {
            return i / (1e3 / (t || 60));
          },
          wake: function () {
            h &&
              (!u &&
                k() &&
                ((a = u = window),
                (l = a.document || {}),
                (V.gsap = nn),
                (a.gsapVersions || (a.gsapVersions = [])).push(nn.version),
                U(j || a.GreenSockGlobals || (!a.gsap && a) || {}),
                (n = a.requestAnimationFrame)),
              t && r.sleep(),
              (e =
                n ||
                function (t) {
                  return setTimeout(t, (m - 1e3 * r.time + 1) | 0);
                }),
              (p = 1),
              _(2));
          },
          sleep: function () {
            (n ? a.cancelAnimationFrame : clearTimeout)(t), (p = 0), (e = Q);
          },
          lagSmoothing: function (t, e) {
            (c = t || 1 / 1e-8), (f = Math.min(e, c, 0));
          },
          fps: function (t) {
            (D = 1e3 / (t || 240)), (m = 1e3 * r.time + D);
          },
          add: function (t) {
            v.indexOf(t) < 0 && v.push(t), de();
          },
          remove: function (t, e) {
            ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--;
          },
          _listeners: v,
        });
      })(),
      de = function () {
        return !p && pe.wake();
      },
      ge = {},
      De = /^[\d.\-M][\d.\-,\s]/,
      me = /["']/g,
      ve = function (t) {
        for (
          var e,
            n,
            r,
            i = {},
            o = t.substr(1, t.length - 3).split(":"),
            s = o[0],
            a = 1,
            u = o.length;
          a < u;
          a++
        )
          (n = o[a]),
            (e = a !== u - 1 ? n.lastIndexOf(",") : n.length),
            (r = n.substr(0, e)),
            (i[s] = isNaN(r) ? r.replace(me, "").trim() : +r),
            (s = n.substr(e + 1).trim());
        return i;
      },
      _e = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      ye = function t(e, n) {
        for (var r, i = e._first; i; )
          i instanceof Me
            ? t(i, n)
            : !i.vars.yoyoEase ||
              (i._yoyo && i._repeat) ||
              i._yoyo === n ||
              (i.timeline
                ? t(i.timeline, n)
                : ((r = i._ease),
                  (i._ease = i._yEase),
                  (i._yEase = r),
                  (i._yoyo = n))),
            (i = i._next);
      },
      xe = function (t, e) {
        return (
          (t &&
            (M(t)
              ? t
              : ge[t] ||
                (function (t) {
                  var e,
                    n,
                    r,
                    i,
                    o = (t + "").split("("),
                    s = ge[o[0]];
                  return s && o.length > 1 && s.config
                    ? s.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [ve(o[1])]
                          : ((e = t),
                            (n = e.indexOf("(") + 1),
                            (r = e.indexOf(")")),
                            (i = e.indexOf("(", n)),
                            e.substring(
                              n,
                              ~i && i < r ? e.indexOf(")", r + 1) : r
                            ))
                              .split(",")
                              .map(dt)
                      )
                    : ge._CE && De.test(t)
                    ? ge._CE("", t)
                    : s;
                })(t))) ||
          e
        );
      },
      we = function (t, e, n, r) {
        void 0 === n &&
          (n = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === r &&
            (r = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          o = { easeIn: e, easeOut: n, easeInOut: r };
        return (
          ut(t, function (t) {
            for (var e in ((ge[t] = V[t] = o),
            (ge[(i = t.toLowerCase())] = n),
            o))
              ge[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = ge[t + "." + e] = o[e];
          }),
          o
        );
      },
      Ce = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      },
      Fe = function t(e, n, r) {
        var i = n >= 1 ? n : 1,
          o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          s = (o / x) * (Math.asin(1 / i) || 0),
          a = function (t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * b((t - s) * o) + 1;
          },
          u =
            "out" === e
              ? a
              : "in" === e
              ? function (t) {
                  return 1 - a(1 - t);
                }
              : Ce(a);
        return (
          (o = x / o),
          (u.config = function (n, r) {
            return t(e, n, r);
          }),
          u
        );
      },
      Ee = function t(e, n) {
        void 0 === n && (n = 1.70158);
        var r = function (t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
          },
          i =
            "out" === e
              ? r
              : "in" === e
              ? function (t) {
                  return 1 - r(1 - t);
                }
              : Ce(r);
        return (
          (i.config = function (n) {
            return t(e, n);
          }),
          i
        );
      };
    ut("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var n = e < 5 ? e + 1 : e;
      we(
        t + ",Power" + (n - 1),
        e
          ? function (t) {
              return Math.pow(t, n);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, n);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, n) / 2
            : 1 - Math.pow(2 * (1 - t), n) / 2;
        }
      );
    }),
      (ge.Linear.easeNone = ge.none = ge.Linear.easeIn),
      we("Elastic", Fe("in"), Fe("out"), Fe()),
      (d = 7.5625),
      (D = 1 / (g = 2.75)),
      we(
        "Bounce",
        function (t) {
          return 1 - m(1 - t);
        },
        (m = function (t) {
          return t < D
            ? d * t * t
            : t < 0.7272727272727273
            ? d * Math.pow(t - 1.5 / g, 2) + 0.75
            : t < 0.9090909090909092
            ? d * (t -= 2.25 / g) * t + 0.9375
            : d * Math.pow(t - 2.625 / g, 2) + 0.984375;
        })
      ),
      we("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      we("Circ", function (t) {
        return -(F(1 - t * t) - 1);
      }),
      we("Sine", function (t) {
        return 1 === t ? 1 : 1 - E(t * w);
      }),
      we("Back", Ee("in"), Ee("out"), Ee()),
      (ge.SteppedEase =
        ge.steps =
        V.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
              return function (t) {
                return (((r * zt(0, 1 - 1e-8, t)) | 0) + i) * n;
              };
            },
          }),
      (_.ease = ge["quad.out"]),
      ut(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (it += t + "," + t + "Params,");
        }
      );
    var be = function (t, e) {
        (this.id = C++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : at),
          (this.set = e ? e.getSetter : We);
      },
      Te = (function () {
        function t(t) {
          (this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            Lt(this, +t.duration, 1, 1),
            (this.data = t.data),
            p || pe.wake();
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                Lt(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((de(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (
                At(this, t), !n._dp || n.parent || Pt(n, this);
                n && n.parent;

              )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                St(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), pt(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + Et(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    Et(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * n, e)
              : this._repeat
              ? bt(this._tTime, n) + 1
              : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e =
              this.parent && this._ts
                ? Tt(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              Ft(this.totalTime(zt(-this._delay, this._tDur, e), !0)),
              Mt(this),
              this
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (de(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8)
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return (
                e && (e._sort || !this.parent) && St(e, this, t - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (O(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? Tt(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
              (n = e._start + n / (e._ts || 1)), (e = e._dp);
            return n;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), Nt(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), Nt(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(Xt(this, t), O(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, O(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              n = this._start;
            return !(
              e &&
              !(
                this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= n &&
                t < this.endTime(!0) - 1e-8
              )
            );
          }),
          (e.eventCallback = function (t, e, n) {
            var r = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((r[t] = e),
                    n && (r[t + "Params"] = n),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete r[t],
                this)
              : r[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (n) {
              var r = M(t) ? t : gt,
                i = function () {
                  var t = e.then;
                  (e.then = null),
                    M(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                    n(r),
                    (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? i()
                : (e._prom = i);
            });
          }),
          (e.kill = function () {
            re(this);
          }),
          t
        );
      })();
    Dt(Te.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Me = (function (t) {
      function e(e, n) {
        var i;
        return (
          void 0 === e && (e = {}),
          ((i = t.call(this, e) || this).labels = {}),
          (i.smoothChildTiming = !!e.smoothChildTiming),
          (i.autoRemoveChildren = !!e.autoRemoveChildren),
          (i._sort = O(e.sortChildren)),
          s && St(e.parent || s, r(i), n),
          e.reversed && i.reverse(),
          e.paused && i.paused(!0),
          e.scrollTrigger && Ot(r(i), e.scrollTrigger),
          i
        );
      }
      i(e, t);
      var n = e.prototype;
      return (
        (n.to = function (t, e, n) {
          return Yt(0, arguments, this), this;
        }),
        (n.from = function (t, e, n) {
          return Yt(1, arguments, this), this;
        }),
        (n.fromTo = function (t, e, n, r) {
          return Yt(2, arguments, this), this;
        }),
        (n.set = function (t, e, n) {
          return (
            (e.duration = 0),
            (e.parent = this),
            yt(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Xe(t, e, Xt(this, n), 1),
            this
          );
        }),
        (n.call = function (t, e, n) {
          return St(this, Xe.delayedCall(0, t, e), n);
        }),
        (n.staggerTo = function (t, e, n, r, i, o, s) {
          return (
            (n.duration = e),
            (n.stagger = n.stagger || r),
            (n.onComplete = o),
            (n.onCompleteParams = s),
            (n.parent = this),
            new Xe(t, n, Xt(this, i)),
            this
          );
        }),
        (n.staggerFrom = function (t, e, n, r, i, o, s) {
          return (
            (n.runBackwards = 1),
            (yt(n).immediateRender = O(n.immediateRender)),
            this.staggerTo(t, e, n, r, i, o, s)
          );
        }),
        (n.staggerFromTo = function (t, e, n, r, i, o, s, a) {
          return (
            (r.startAt = n),
            (yt(r).immediateRender = O(r.immediateRender)),
            this.staggerTo(t, e, r, i, o, s, a)
          );
        }),
        (n.render = function (t, e, n) {
          var r,
            i,
            o,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            g,
            D = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            _ = t <= 0 ? 0 : ht(t),
            y = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (
            (this !== s && _ > m && t >= 0 && (_ = m),
            _ !== this._tTime || n || y)
          ) {
            if (
              (D !== this._time &&
                v &&
                ((_ += this._time - D), (t += this._time - D)),
              (r = _),
              (f = this._start),
              (l = !(c = this._ts)),
              y && (v || (D = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((d = this._yoyo),
                (u = v + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * u + t, e, n);
              if (
                ((r = ht(_ % u)),
                _ === m
                  ? ((a = this._repeat), (r = v))
                  : ((a = ~~(_ / u)) && a === _ / u && ((r = v), a--),
                    r > v && (r = v)),
                (p = bt(this._tTime, u)),
                !D && this._tTime && p !== a && (p = a),
                d && 1 & a && ((r = v - r), (g = 1)),
                a !== p && !this._lock)
              ) {
                var x = d && 1 & p,
                  w = x === (d && 1 & a);
                if (
                  (a < p && (x = !x),
                  (D = x ? 0 : v),
                  (this._lock = 1),
                  (this.render(D || (g ? 0 : ht(a * u)), e, !v)._lock = 0),
                  (this._tTime = _),
                  !e && this.parent && ne(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !g &&
                    (this.invalidate()._lock = 1),
                  (D && D !== this._time) ||
                    l !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((v = this._dur),
                  (m = this._tDur),
                  w &&
                    ((this._lock = 2),
                    (D = x ? v : -1e-4),
                    this.render(D, !0),
                    this.vars.repeatRefresh && !g && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                ye(this, g);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (h = (function (t, e, n) {
                  var r;
                  if (n > e)
                    for (r = t._first; r && r._start <= n; ) {
                      if ("isPause" === r.data && r._start > e) return r;
                      r = r._next;
                    }
                  else
                    for (r = t._last; r && r._start >= n; ) {
                      if ("isPause" === r.data && r._start < e) return r;
                      r = r._prev;
                    }
                })(this, ht(D), ht(r))) &&
                (_ -= r - (r = h._start)),
              (this._tTime = _),
              (this._time = r),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (D = 0)),
              !D && r && !e && (ne(this, "onStart"), this._tTime !== _))
            )
              return this;
            if (r >= D && t >= 0)
              for (i = this._first; i; ) {
                if (
                  ((o = i._next), (i._act || r >= i._start) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (r - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (r - i._start) * i._ts,
                      e,
                      n
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), o && (_ += this._zTime = -1e-8);
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var C = t < 0 ? t : r; i; ) {
                if (
                  ((o = i._prev), (i._act || C <= i._end) && i._ts && h !== i)
                ) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (
                    (i.render(
                      i._ts > 0
                        ? (C - i._start) * i._ts
                        : (i._dirty ? i.totalDuration() : i._tDur) +
                            (C - i._start) * i._ts,
                      e,
                      n
                    ),
                    r !== this._time || (!this._ts && !l))
                  ) {
                    (h = 0), o && (_ += this._zTime = C ? -1e-8 : 1e-8);
                    break;
                  }
                }
                i = o;
              }
            }
            if (
              h &&
              !e &&
              (this.pause(),
              (h.render(r >= D ? 0 : -1e-8)._zTime = r >= D ? 1 : -1),
              this._ts)
            )
              return (this._start = f), Mt(this), this.render(t, e, n);
            this._onUpdate && !e && ne(this, "onUpdate", !0),
              ((_ === m && m >= this.totalDuration()) || (!_ && D)) &&
                ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((t || !v) &&
                    ((_ === m && this._ts > 0) || (!_ && this._ts < 0)) &&
                    wt(this, 1),
                  e ||
                    (t < 0 && !D) ||
                    (!_ && !D && m) ||
                    (ne(
                      this,
                      _ === m && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(_ < m && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (t, e) {
          var n = this;
          if ((A(e) || (e = Xt(this, e, t)), !(t instanceof Te))) {
            if (N(t))
              return (
                t.forEach(function (t) {
                  return n.add(t, e);
                }),
                this
              );
            if (T(t)) return this.addLabel(t, e);
            if (!M(t)) return this;
            t = Xe.delayedCall(0, t);
          }
          return this !== t ? St(this, t, e) : this;
        }),
        (n.getChildren = function (t, e, n, r) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === r && (r = -y);
          for (var i = [], o = this._first; o; )
            o._start >= r &&
              (o instanceof Xe
                ? e && i.push(o)
                : (n && i.push(o),
                  t && i.push.apply(i, o.getChildren(!0, e, n)))),
              (o = o._next);
          return i;
        }),
        (n.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
            if (e[n].vars.id === t) return e[n];
        }),
        (n.remove = function (t) {
          return T(t)
            ? this.removeLabel(t)
            : M(t)
            ? this.killTweensOf(t)
            : (xt(this, t),
              t === this._recent && (this._recent = this._last),
              Ct(this));
        }),
        (n.totalTime = function (e, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = ht(
                  pe.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts)
                )),
              t.prototype.totalTime.call(this, e, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (t, e) {
          return (this.labels[t] = Xt(this, e)), this;
        }),
        (n.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (n.addPause = function (t, e, n) {
          var r = Xe.delayedCall(0, e || Q, n);
          return (
            (r.data = "isPause"), (this._hasPause = 1), St(this, r, Xt(this, t))
          );
        }),
        (n.removePause = function (t) {
          var e = this._first;
          for (t = Xt(this, t); e; )
            e._start === t && "isPause" === e.data && wt(e), (e = e._next);
        }),
        (n.killTweensOf = function (t, e, n) {
          for (var r = this.getTweensOf(t, n), i = r.length; i--; )
            Ae !== r[i] && r[i].kill(t, e);
          return this;
        }),
        (n.getTweensOf = function (t, e) {
          for (var n, r = [], i = Ut(t), o = this._first, s = A(e); o; )
            o instanceof Xe
              ? ct(o._targets, i) &&
                (s
                  ? (!Ae || (o._initted && o._ts)) &&
                    o.globalTime(0) <= e &&
                    o.globalTime(o.totalDuration()) > e
                  : !e || o.isActive()) &&
                r.push(o)
              : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
              (o = o._next);
          return r;
        }),
        (n.tweenTo = function (t, e) {
          e = e || {};
          var n,
            r = this,
            i = Xt(r, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            u = o.onStartParams,
            l = o.immediateRender,
            h = Xe.to(
              r,
              Dt(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (i - (s && "time" in s ? s.time : r._time)) /
                        r.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((r.pause(), !n)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (i - (s && "time" in s ? s.time : r._time)) /
                            r.timeScale()
                        );
                      h._dur !== t && Lt(h, t, 0, 1).render(h._time, !0, !0),
                        (n = 1);
                    }
                    a && a.apply(h, u || []);
                  },
                },
                e
              )
            );
          return l ? h.render(0) : h;
        }),
        (n.tweenFromTo = function (t, e, n) {
          return this.tweenTo(e, Dt({ startAt: { time: Xt(this, t) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (t) {
          return void 0 === t && (t = this._time), ee(this, Xt(this, t));
        }),
        (n.previousLabel = function (t) {
          return void 0 === t && (t = this._time), ee(this, Xt(this, t), 1);
        }),
        (n.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (n.shiftChildren = function (t, e, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, o = this.labels; i; )
            i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (r in o) o[r] >= n && (o[r] += t);
          return Ct(this);
        }),
        (n.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (n.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, n = this._first; n; )
            (e = n._next), this.remove(n), (n = e);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Ct(this)
          );
        }),
        (n.totalDuration = function (t) {
          var e,
            n,
            r,
            i = 0,
            o = this,
            a = o._last,
            u = y;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -t : t)
            );
          if (o._dirty) {
            for (r = o.parent; a; )
              (e = a._prev),
                a._dirty && a.totalDuration(),
                (n = a._start) > u && o._sort && a._ts && !o._lock
                  ? ((o._lock = 1), (St(o, a, n - a._delay, 1)._lock = 0))
                  : (u = n),
                n < 0 &&
                  a._ts &&
                  ((i -= n),
                  ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                    ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)),
                  o.shiftChildren(-n, !1, -Infinity),
                  (u = 0)),
                a._end > i && a._ts && (i = a._end),
                (a = e);
            Lt(o, o === s && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((s._ts && (pt(s, Tt(t, s)), (c = pe.frame)), pe.frame >= nt)) {
            nt += v.autoSleep || 120;
            var e = s._first;
            if ((!e || !e._ts) && v.autoSleep && pe._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || pe.sleep();
            }
          }
        }),
        e
      );
    })(Te);
    Dt(Me.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Ae,
      Pe = function (t, e, n, r, i, o, s) {
        var a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          g = new $e(this._pt, t, e, 0, 1, Ue, null, i),
          D = 0,
          m = 0;
        for (
          g.b = n,
            g.e = r,
            n += "",
            (p = ~(r += "").indexOf("random(")) && (r = Jt(r)),
            o && (o((d = [n, r]), t, e), (n = d[0]), (r = d[1])),
            u = n.match(I) || [];
          (a = I.exec(r));

        )
          (h = a[0]),
            (c = r.substring(D, a.index)),
            l ? (l = (l + 1) % 5) : "rgba(" === c.substr(-5) && (l = 1),
            h !== u[m++] &&
              ((f = parseFloat(u[m - 1]) || 0),
              (g._pt = {
                _next: g._pt,
                p: c || 1 === m ? c : ",",
                s: f,
                c:
                  "=" === h.charAt(1)
                    ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1)
                    : parseFloat(h) - f,
                m: l && l < 4 ? Math.round : 0,
              }),
              (D = I.lastIndex));
        return (
          (g.c = D < r.length ? r.substring(D, r.length) : ""),
          (g.fp = s),
          (z.test(r) || p) && (g.e = 0),
          (this._pt = g),
          g
        );
      },
      Se = function (t, e, n, r, i, o, s, a, u) {
        M(r) && (r = r(i || 0, t, o));
        var l,
          h = t[e],
          c =
            "get" !== n
              ? n
              : M(h)
              ? u
                ? t[
                    e.indexOf("set") || !M(t["get" + e.substr(3)])
                      ? e
                      : "get" + e.substr(3)
                  ](u)
                : t[e]()
              : h,
          f = M(h) ? (u ? ze : Ie) : Ye;
        if (
          (T(r) &&
            (~r.indexOf("random(") && (r = Jt(r)),
            "=" === r.charAt(1) &&
              ((l =
                parseFloat(c) +
                parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) +
                (Ht(c) || 0)) ||
                0 === l) &&
              (r = l)),
          c !== r)
        )
          return isNaN(c * r) || "" === r
            ? (!h && !(e in t) && q(e, r),
              Pe.call(this, t, e, c, r, f, a || v.stringFilter, u))
            : ((l = new $e(
                this._pt,
                t,
                e,
                +c || 0,
                r - (c || 0),
                "boolean" == typeof h ? je : Ve,
                0,
                f
              )),
              u && (l.fp = u),
              s && l.modifier(s, this, t),
              (this._pt = l));
      },
      Oe = function (t, e, n, r, i, o) {
        var s, a, u, l;
        if (
          tt[t] &&
          !1 !==
            (s = new tt[t]()).init(
              i,
              s.rawVars
                ? e[t]
                : (function (t, e, n, r, i) {
                    if (
                      (M(t) && (t = Le(t, i, e, n, r)),
                      !S(t) || (t.style && t.nodeType) || N(t) || L(t))
                    )
                      return T(t) ? Le(t, i, e, n, r) : t;
                    var o,
                      s = {};
                    for (o in t) s[o] = Le(t[o], i, e, n, r);
                    return s;
                  })(e[t], r, i, o, n),
              n,
              r,
              o
            ) &&
          ((n._pt = a = new $e(n._pt, i, t, 0, 1, s.render, s, 0, s.priority)),
          n !== f)
        )
          for (
            u = n._ptLookup[n._targets.indexOf(i)], l = s._props.length;
            l--;

          )
            u[s._props[l]] = a;
        return s;
      },
      ke = function t(e, n) {
        var r,
          i,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          g,
          D,
          m,
          v = e.vars,
          x = v.ease,
          w = v.startAt,
          C = v.immediateRender,
          F = v.lazy,
          E = v.onUpdate,
          b = v.onUpdateParams,
          T = v.callbackScope,
          M = v.runBackwards,
          A = v.yoyoEase,
          P = v.keyframes,
          S = v.autoRevert,
          k = e._dur,
          B = e._startAt,
          L = e._targets,
          N = e.parent,
          R = N && "nested" === N.data ? N.parent._targets : L,
          X = "auto" === e._overwrite && !o,
          Y = e.timeline;
        if (
          (Y && (!P || !x) && (x = "none"),
          (e._ease = xe(x, _.ease)),
          (e._yEase = A ? _e(xe(!0 === A ? x : A, _.ease)) : 0),
          A &&
            e._yoyo &&
            !e._repeat &&
            ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
          (e._from = !Y && !!v.runBackwards),
          !Y || (P && !v.stagger))
        ) {
          if (
            ((D = (f = L[0] ? st(L[0]).harness : 0) && v[f.prop]),
            (r = _t(v, Z)),
            B && wt(B.render(-1, !0)),
            w)
          )
            if (
              (wt(
                (e._startAt = Xe.set(
                  L,
                  Dt(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: N,
                      immediateRender: !0,
                      lazy: O(F),
                      startAt: null,
                      delay: 0,
                      onUpdate: E,
                      onUpdateParams: b,
                      callbackScope: T,
                      stagger: 0,
                    },
                    w
                  )
                ))
              ),
              n < 0 && !C && !S && e._startAt.render(-1, !0),
              C)
            ) {
              if ((n > 0 && !S && (e._startAt = 0), k && n <= 0))
                return void (n && (e._zTime = n));
            } else !1 === S && (e._startAt = 0);
          else if (M && k)
            if (B) !S && (e._startAt = 0);
            else if (
              (n && (C = !1),
              (a = Dt(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: C && O(F),
                  immediateRender: C,
                  stagger: 0,
                  parent: N,
                },
                r
              )),
              D && (a[f.prop] = D),
              wt((e._startAt = Xe.set(L, a))),
              n < 0 && e._startAt.render(-1, !0),
              (e._zTime = n),
              C)
            ) {
              if (!n) return;
            } else t(e._startAt, 1e-8);
          for (
            e._pt = 0, F = (k && O(F)) || (F && !k), i = 0;
            i < L.length;
            i++
          ) {
            if (
              ((c = (l = L[i])._gsap || ot(L)[i]._gsap),
              (e._ptLookup[i] = d = {}),
              J[c.id] && $.length && ft(),
              (g = R === L ? i : R.indexOf(l)),
              f &&
                !1 !== (p = new f()).init(l, D || r, e, g, R) &&
                ((e._pt = u =
                  new $e(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority)),
                p._props.forEach(function (t) {
                  d[t] = u;
                }),
                p.priority && (h = 1)),
              !f || D)
            )
              for (a in r)
                tt[a] && (p = Oe(a, r, e, g, l, R))
                  ? p.priority && (h = 1)
                  : (d[a] = u =
                      Se.call(e, l, a, "get", r[a], g, R, 0, v.stringFilter));
            e._op && e._op[i] && e.kill(l, e._op[i]),
              X &&
                e._pt &&
                ((Ae = e),
                s.killTweensOf(l, d, e.globalTime(n)),
                (m = !e.parent),
                (Ae = 0)),
              e._pt && F && (J[c.id] = 1);
          }
          h && Ze(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = E),
          (e._initted = (!e._op || e._pt) && !m),
          P && n <= 0 && Y.render(y, !0, !0);
      },
      Be = function (t, e, n, r) {
        var i,
          o,
          s = e.ease || r || "power1.inOut";
        if (N(e))
          (o = n[t] || (n[t] = [])),
            e.forEach(function (t, n) {
              return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: s });
            });
        else
          for (i in e)
            (o = n[i] || (n[i] = [])),
              "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: s });
      },
      Le = function (t, e, n, r, i) {
        return M(t)
          ? t.call(e, n, r, i)
          : T(t) && ~t.indexOf("random(")
          ? Jt(t)
          : t;
      },
      Ne = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Re = {};
    ut(Ne + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (Re[t] = 1);
    });
    var Xe = (function (t) {
      function e(e, n, i, a) {
        var u;
        "number" == typeof n && ((i.duration = n), (n = i), (i = null));
        var l,
          h,
          c,
          f,
          p,
          d,
          g,
          D,
          m = (u = t.call(this, a ? n : yt(n)) || this).vars,
          _ = m.duration,
          y = m.delay,
          x = m.immediateRender,
          w = m.stagger,
          C = m.overwrite,
          F = m.keyframes,
          E = m.defaults,
          b = m.scrollTrigger,
          T = m.yoyoEase,
          M = n.parent || s,
          P = (N(e) || L(e) ? A(e[0]) : "length" in n) ? [e] : Ut(e);
        if (
          ((u._targets = P.length
            ? ot(P)
            : G(
                "GSAP target " + e + " not found. https://greensock.com",
                !v.nullTargetWarn
              ) || []),
          (u._ptLookup = []),
          (u._overwrite = C),
          F || w || B(_) || B(y))
        ) {
          if (
            ((n = u.vars),
            (l = u.timeline =
              new Me({ data: "nested", defaults: E || {} })).kill(),
            (l.parent = l._dp = r(u)),
            (l._start = 0),
            w || B(_) || B(y))
          ) {
            if (((f = P.length), (g = w && Gt(w)), S(w)))
              for (p in w) ~Ne.indexOf(p) && (D || (D = {}), (D[p] = w[p]));
            for (h = 0; h < f; h++)
              ((c = _t(n, Re)).stagger = 0),
                T && (c.yoyoEase = T),
                D && mt(c, D),
                (d = P[h]),
                (c.duration = +Le(_, r(u), h, d, P)),
                (c.delay = (+Le(y, r(u), h, d, P) || 0) - u._delay),
                !w &&
                  1 === f &&
                  c.delay &&
                  ((u._delay = y = c.delay), (u._start += y), (c.delay = 0)),
                l.to(d, c, g ? g(h, d, P) : 0),
                (l._ease = ge.none);
            l.duration() ? (_ = y = 0) : (u.timeline = 0);
          } else if (F) {
            yt(Dt(l.vars.defaults, { ease: "none" })),
              (l._ease = xe(F.ease || n.ease || "none"));
            var k,
              R,
              X,
              Y = 0;
            if (N(F))
              F.forEach(function (t) {
                return l.to(P, t, ">");
              });
            else {
              for (p in ((c = {}), F))
                "ease" === p || "easeEach" === p || Be(p, F[p], c, F.easeEach);
              for (p in c)
                for (
                  k = c[p].sort(function (t, e) {
                    return t.t - e.t;
                  }),
                    Y = 0,
                    h = 0;
                  h < k.length;
                  h++
                )
                  ((X = {
                    ease: (R = k[h]).e,
                    duration: ((R.t - (h ? k[h - 1].t : 0)) / 100) * _,
                  })[p] = R.v),
                    l.to(P, X, Y),
                    (Y += X.duration);
              l.duration() < _ && l.to({}, { duration: _ - l.duration() });
            }
          }
          _ || u.duration((_ = l.duration()));
        } else u.timeline = 0;
        return (
          !0 !== C || o || ((Ae = r(u)), s.killTweensOf(P), (Ae = 0)),
          St(M, r(u), i),
          n.reversed && u.reverse(),
          n.paused && u.paused(!0),
          (x ||
            (!_ &&
              !F &&
              u._start === ht(M._time) &&
              O(x) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(r(u)) &&
              "nested" !== M.data)) &&
            ((u._tTime = -1e-8), u.render(Math.max(0, -y))),
          b && Ot(r(u), b),
          u
        );
      }
      i(e, t);
      var n = e.prototype;
      return (
        (n.render = function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            h,
            c,
            f = this._time,
            p = this._tDur,
            d = this._dur,
            g = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
          if (d) {
            if (
              g !== this._tTime ||
              !t ||
              n ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((r = g), (h = this.timeline), this._repeat)) {
                if (((s = d + this._rDelay), this._repeat < -1 && t < 0))
                  return this.totalTime(100 * s + t, e, n);
                if (
                  ((r = ht(g % s)),
                  g === p
                    ? ((o = this._repeat), (r = d))
                    : ((o = ~~(g / s)) && o === g / s && ((r = d), o--),
                      r > d && (r = d)),
                  (u = this._yoyo && 1 & o) && ((c = this._yEase), (r = d - r)),
                  (a = bt(this._tTime, s)),
                  r === f && !n && this._initted)
                )
                  return this;
                o !== a &&
                  (h && this._yEase && ye(h, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = n = 1),
                    (this.render(ht(s * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (kt(this, t < 0 ? t : r, n, e))
                  return (this._tTime = 0), this;
                if (d !== this._dur) return this.render(t, e, n);
              }
              if (
                ((this._tTime = g),
                (this._time = r),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = l = (c || this._ease)(r / d)),
                this._from && (this.ratio = l = 1 - l),
                r && !f && !e && (ne(this, "onStart"), this._tTime !== g))
              )
                return this;
              for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
              (h &&
                h.render(
                  t < 0 ? t : !r && u ? -1e-8 : h._dur * h._ease(r / this._dur),
                  e,
                  n
                )) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                  ne(this, "onUpdate")),
                this._repeat &&
                  o !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  ne(this, "onRepeat"),
                (g !== this._tDur && g) ||
                  this._tTime !== g ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (t || !d) &&
                    ((g === this._tDur && this._ts > 0) ||
                      (!g && this._ts < 0)) &&
                    wt(this, 1),
                  e ||
                    (t < 0 && !f) ||
                    (!g && !f) ||
                    (ne(this, g === p ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(g < p && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (t, e, n, r) {
              var i,
                o,
                s,
                a = t.ratio,
                u =
                  e < 0 ||
                  (!e &&
                    ((!t._start &&
                      (function t(e) {
                        var n = e.parent;
                        return (
                          n &&
                          n._ts &&
                          n._initted &&
                          !n._lock &&
                          (n.rawTime() < 0 || t(n))
                        );
                      })(t) &&
                      (t._initted || !Bt(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !Bt(t))))
                    ? 0
                    : 1,
                l = t._rDelay,
                h = 0;
              if (
                (l &&
                  t._repeat &&
                  ((h = zt(0, t._tDur, e)),
                  (o = bt(h, l)),
                  t._yoyo && 1 & o && (u = 1 - u),
                  o !== bt(t._tTime, l) &&
                    ((a = 1 - u),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                u !== a || r || 1e-8 === t._zTime || (!e && t._zTime))
              ) {
                if (!t._initted && kt(t, e, r, n)) return;
                for (
                  s = t._zTime,
                    t._zTime = e || (n ? 1e-8 : 0),
                    n || (n = e && !s),
                    t.ratio = u,
                    t._from && (u = 1 - u),
                    t._time = 0,
                    t._tTime = h,
                    i = t._pt;
                  i;

                )
                  i.r(u, i.d), (i = i._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !n && ne(t, "onUpdate"),
                  h && t._repeat && !n && t.parent && ne(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === u &&
                    (u && wt(t, 1),
                    n ||
                      (ne(t, u ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, n);
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (n.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? re(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Ae && !0 !== Ae.vars.overwrite)
                ._first || re(this),
              this.parent &&
                n !== this.timeline.totalDuration() &&
                Lt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
              this
            );
          }
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            h = this._targets,
            c = t ? Ut(t) : h,
            f = this._ptLookup,
            p = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (
                var n = t.length, r = n === e.length;
                r && n-- && t[n] === e[n];

              );
              return n < 0;
            })(h, c)
          )
            return "all" === e && (this._pt = 0), re(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (T(e) &&
                  ((a = {}),
                  ut(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = (function (t, e) {
                  var n,
                    r,
                    i,
                    o,
                    s = t[0] ? st(t[0]).harness : 0,
                    a = s && s.aliases;
                  if (!a) return e;
                  for (r in ((n = mt({}, e)), a))
                    if ((r in n))
                      for (i = (o = a[r].split(",")).length; i--; )
                        n[o[i]] = n[r];
                  return n;
                })(h, e))),
              l = h.length;
            l--;

          )
            if (~c.indexOf(h[l]))
              for (a in ((i = f[l]),
              "all" === e
                ? ((r[l] = e), (s = i), (o = {}))
                : ((o = r[l] = r[l] || {}), (s = e)),
              s))
                (u = i && i[a]) &&
                  (("kill" in u.d && !0 !== u.d.kill(a)) || xt(this, u, "_pt"),
                  delete i[a]),
                  "all" !== o && (o[a] = 1);
          return this._initted && !this._pt && p && re(this), this;
        }),
        (e.to = function (t, n) {
          return new e(t, n, arguments[2]);
        }),
        (e.from = function (t, e) {
          return Yt(1, arguments);
        }),
        (e.delayedCall = function (t, n, r, i) {
          return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (e.fromTo = function (t, e, n) {
          return Yt(2, arguments);
        }),
        (e.set = function (t, n) {
          return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
        }),
        (e.killTweensOf = function (t, e, n) {
          return s.killTweensOf(t, e, n);
        }),
        e
      );
    })(Te);
    Dt(Xe.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      ut("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Xe[t] = function () {
          var e = new Me(),
            n = Wt.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
          );
        };
      });
    var Ye = function (t, e, n) {
        return (t[e] = n);
      },
      Ie = function (t, e, n) {
        return t[e](n);
      },
      ze = function (t, e, n, r) {
        return t[e](r.fp, n);
      },
      He = function (t, e, n) {
        return t.setAttribute(e, n);
      },
      We = function (t, e) {
        return M(t[e]) ? Ie : P(t[e]) && t.setAttribute ? He : Ye;
      },
      Ve = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
      },
      je = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      Ue = function (t, e) {
        var n = e._pt,
          r = "";
        if (!t && e.b) r = e.b;
        else if (1 === t && e.e) r = e.e;
        else {
          for (; n; )
            (r =
              n.p +
              (n.m
                ? n.m(n.s + n.c * t)
                : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
              r),
              (n = n._next);
          r += e.c;
        }
        e.set(e.t, e.p, r, e);
      },
      qe = function (t, e) {
        for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
      },
      Ge = function (t, e, n, r) {
        for (var i, o = this._pt; o; )
          (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
      },
      Ke = function (t) {
        for (var e, n, r = this._pt; r; )
          (n = r._next),
            (r.p === t && !r.op) || r.op === t
              ? xt(this, r, "_pt")
              : r.dep || (e = 1),
            (r = n);
        return !e;
      },
      Qe = function (t, e, n, r) {
        r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
      },
      Ze = function (t) {
        for (var e, n, r, i, o = t._pt; o; ) {
          for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
          (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
            (o._next = n) ? (n._prev = o) : (i = o),
            (o = e);
        }
        t._pt = r;
      },
      $e = (function () {
        function t(t, e, n, r, i, o, s, a, u) {
          (this.t = e),
            (this.s = r),
            (this.c = i),
            (this.p = n),
            (this.r = o || Ve),
            (this.d = s || this),
            (this.set = a || Ye),
            (this.pr = u || 0),
            (this._next = t),
            t && (t._prev = this);
        }
        return (
          (t.prototype.modifier = function (t, e, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = Qe),
              (this.m = t),
              (this.mt = n),
              (this.tween = e);
          }),
          t
        );
      })();
    ut(
      it +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (Z[t] = 1);
      }
    ),
      (V.TweenMax = V.TweenLite = Xe),
      (V.TimelineLite = V.TimelineMax = Me),
      (s = new Me({
        sortChildren: !1,
        defaults: _,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (v.stringFilter = fe);
    var Je = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        e.forEach(function (t) {
          return ie(t);
        });
      },
      timeline: function (t) {
        return new Me(t);
      },
      getTweensOf: function (t, e) {
        return s.getTweensOf(t, e);
      },
      getProperty: function (t, e, n, r) {
        T(t) && (t = Ut(t)[0]);
        var i = st(t || {}).get,
          o = n ? gt : dt;
        return (
          "native" === n && (n = ""),
          t
            ? e
              ? o(((tt[e] && tt[e].get) || i)(t, e, n, r))
              : function (e, n, r) {
                  return o(((tt[e] && tt[e].get) || i)(t, e, n, r));
                }
            : t
        );
      },
      quickSetter: function (t, e, n) {
        if ((t = Ut(t)).length > 1) {
          var r = t.map(function (t) {
              return nn.quickSetter(t, e, n);
            }),
            i = r.length;
          return function (t) {
            for (var e = i; e--; ) r[e](t);
          };
        }
        t = t[0] || {};
        var o = tt[e],
          s = st(t),
          a = (s.harness && (s.harness.aliases || {})[e]) || e,
          u = o
            ? function (e) {
                var r = new o();
                (f._pt = 0),
                  r.init(t, n ? e + n : e, f, 0, [t]),
                  r.render(1, r),
                  f._pt && qe(1, f);
              }
            : s.set(t, a);
        return o
          ? u
          : function (e) {
              return u(t, a, n ? e + n : e, s, 1);
            };
      },
      isTweening: function (t) {
        return s.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = xe(t.ease, _.ease)), vt(_, t || {});
      },
      config: function (t) {
        return vt(v, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          n = t.effect,
          r = t.plugins,
          i = t.defaults,
          o = t.extendTimeline;
        (r || "").split(",").forEach(function (t) {
          return (
            t && !tt[t] && !V[t] && G(e + " effect requires " + t + " plugin.")
          );
        }),
          (et[e] = function (t, e, r) {
            return n(Ut(t), Dt(e || {}, i), r);
          }),
          o &&
            (Me.prototype[e] = function (t, n, r) {
              return this.add(et[e](t, S(n) ? n : (r = n) && {}, this), r);
            });
      },
      registerEase: function (t, e) {
        ge[t] = xe(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? xe(t, e) : ge;
      },
      getById: function (t) {
        return s.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var n,
          r,
          i = new Me(t);
        for (
          i.smoothChildTiming = O(t.smoothChildTiming),
            s.remove(i),
            i._dp = 0,
            i._time = i._tTime = s._time,
            n = s._first;
          n;

        )
          (r = n._next),
            (!e &&
              !n._dur &&
              n instanceof Xe &&
              n.vars.onComplete === n._targets[0]) ||
              St(i, n, n._start - n._delay),
            (n = r);
        return St(s, i, 0), i;
      },
      utils: {
        wrap: function t(e, n, r) {
          var i = n - e;
          return N(e)
            ? $t(e, t(0, e.length), n)
            : It(r, function (t) {
                return ((i + ((t - e) % i)) % i) + e;
              });
        },
        wrapYoyo: function t(e, n, r) {
          var i = n - e,
            o = 2 * i;
          return N(e)
            ? $t(e, t(0, e.length - 1), n)
            : It(r, function (t) {
                return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
              });
        },
        distribute: Gt,
        random: Zt,
        snap: Qt,
        normalize: function (t, e, n) {
          return te(t, e, 0, 1, n);
        },
        getUnit: Ht,
        clamp: function (t, e, n) {
          return It(n, function (n) {
            return zt(t, e, n);
          });
        },
        splitColor: ae,
        toArray: Ut,
        selector: function (t) {
          return (
            (t = Ut(t)[0] || G("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return Ut(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                  ? G("Invalid scope") || l.createElement("div")
                  : t
              );
            }
          );
        },
        mapRange: te,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (n) {
            return t(parseFloat(n)) + (e || Ht(n));
          };
        },
        interpolate: function t(e, n, r, i) {
          var o = isNaN(e + n)
            ? 0
            : function (t) {
                return (1 - t) * e + t * n;
              };
          if (!o) {
            var s,
              a,
              u,
              l,
              h,
              c = T(e),
              f = {};
            if ((!0 === r && (i = 1) && (r = null), c))
              (e = { p: e }), (n = { p: n });
            else if (N(e) && !N(n)) {
              for (u = [], l = e.length, h = l - 2, a = 1; a < l; a++)
                u.push(t(e[a - 1], e[a]));
              l--,
                (o = function (t) {
                  t *= l;
                  var e = Math.min(h, ~~t);
                  return u[e](t - e);
                }),
                (r = n);
            } else i || (e = mt(N(e) ? [] : {}, e));
            if (!u) {
              for (s in n) Se.call(f, e, s, "get", n[s]);
              o = function (t) {
                return qe(t, f) || (c ? e.p : e);
              };
            }
          }
          return It(r, o);
        },
        shuffle: qt,
      },
      install: U,
      effects: et,
      ticker: pe,
      updateRoot: Me.updateRoot,
      plugins: tt,
      globalTimeline: s,
      core: {
        PropTween: $e,
        globals: K,
        Tween: Xe,
        Timeline: Me,
        Animation: Te,
        getCache: st,
        _removeLinkedListItem: xt,
        suppressOverwrites: function (t) {
          return (o = t);
        },
      },
    };
    ut("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (Je[t] = Xe[t]);
    }),
      pe.add(Me.updateRoot),
      (f = Je.to({}, { duration: 0 }));
    var tn = function (t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
          n = n._next;
        return n;
      },
      en = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, n, r) {
            r._onInit = function (t) {
              var r, i;
              if (
                (T(n) &&
                  ((r = {}),
                  ut(n, function (t) {
                    return (r[t] = 1);
                  }),
                  (n = r)),
                e)
              ) {
                for (i in ((r = {}), n)) r[i] = e(n[i]);
                n = r;
              }
              !(function (t, e) {
                var n,
                  r,
                  i,
                  o = t._targets;
                for (n in e)
                  for (r = o.length; r--; )
                    (i = t._ptLookup[r][n]) &&
                      (i = i.d) &&
                      (i._pt && (i = tn(i, n)),
                      i && i.modifier && i.modifier(e[n], t, o[r], n));
              })(t, n);
            };
          },
        };
      },
      nn =
        Je.registerPlugin(
          {
            name: "attr",
            init: function (t, e, n, r, i) {
              var o, s;
              for (o in e)
                (s = this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(o) || 0) + "",
                  e[o],
                  r,
                  i,
                  0,
                  0,
                  o
                )) && (s.op = o),
                  this._props.push(o);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
            },
          },
          en("roundProps", Kt),
          en("modifiers"),
          en("snap", Qt)
        ) || Je;
    (Xe.version = Me.version = nn.version = "3.9.1"), (h = 1), k() && de();
    ge.Power0,
      ge.Power1,
      ge.Power2,
      ge.Power3,
      ge.Power4,
      ge.Linear,
      ge.Quad,
      ge.Cubic,
      ge.Quart,
      ge.Quint,
      ge.Strong,
      ge.Elastic,
      ge.Back,
      ge.SteppedEase,
      ge.Bounce,
      ge.Sine,
      ge.Expo,
      ge.Circ;
    /*!
     * CSSPlugin 3.9.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var rn,
      on,
      sn,
      an,
      un,
      ln,
      hn,
      cn = {},
      fn = 180 / Math.PI,
      pn = Math.PI / 180,
      dn = Math.atan2,
      gn = /([A-Z])/g,
      Dn = /(?:left|right|width|margin|padding|x)/i,
      mn = /[\s,\(]\S/,
      vn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      _n = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      yn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      },
      xn = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      },
      wn = function (t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      Cn = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      Fn = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      En = function (t, e, n) {
        return (t.style[e] = n);
      },
      bn = function (t, e, n) {
        return t.style.setProperty(e, n);
      },
      Tn = function (t, e, n) {
        return (t._gsap[e] = n);
      },
      Mn = function (t, e, n) {
        return (t._gsap.scaleX = t._gsap.scaleY = n);
      },
      An = function (t, e, n, r, i) {
        var o = t._gsap;
        (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
      },
      Pn = function (t, e, n, r, i) {
        var o = t._gsap;
        (o[e] = n), o.renderTransform(i, o);
      },
      Sn = "transform",
      On = Sn + "Origin",
      kn = function (t, e) {
        var n = on.createElementNS
          ? on.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : on.createElement(t);
        return n.style ? n : on.createElement(t);
      },
      Bn = function t(e, n, r) {
        var i = getComputedStyle(e);
        return (
          i[n] ||
          i.getPropertyValue(n.replace(gn, "-$1").toLowerCase()) ||
          i.getPropertyValue(n) ||
          (!r && t(e, Nn(n) || n, 1)) ||
          ""
        );
      },
      Ln = "O,Moz,ms,Ms,Webkit".split(","),
      Nn = function (t, e, n) {
        var r = (e || un).style,
          i = 5;
        if (t in r && !n) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          i-- && !(Ln[i] + t in r);

        );
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Ln[i] : "") + t;
      },
      Rn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((rn = window),
          (on = rn.document),
          (sn = on.documentElement),
          (un = kn("div") || { style: {} }),
          kn("div"),
          (Sn = Nn(Sn)),
          (On = Sn + "Origin"),
          (un.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (hn = !!Nn("perspective")),
          (an = 1));
      },
      Xn = function t(e) {
        var n,
          r = kn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          i = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (sn.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          e)
        )
          try {
            (n = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = t);
          } catch (t) {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
          sn.removeChild(r),
          (this.style.cssText = s),
          n
        );
      },
      Yn = function (t, e) {
        for (var n = e.length; n--; )
          if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
      },
      In = function (t) {
        var e;
        try {
          e = t.getBBox();
        } catch (n) {
          e = Xn.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === Xn ||
            (e = Xn.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +Yn(t, ["x", "cx", "x1"]) || 0,
                y: +Yn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      zn = function (t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !In(t));
      },
      Hn = function (t, e) {
        if (e) {
          var n = t.style;
          e in cn && e !== On && (e = Sn),
            n.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                n.removeProperty(e.replace(gn, "-$1").toLowerCase()))
              : n.removeAttribute(e);
        }
      },
      Wn = function (t, e, n, r, i, o) {
        var s = new $e(t._pt, e, n, 0, 1, o ? Fn : Cn);
        return (t._pt = s), (s.b = r), (s.e = i), t._props.push(n), s;
      },
      Vn = { deg: 1, rad: 1, turn: 1 },
      jn = function t(e, n, r, i) {
        var o,
          s,
          a,
          u,
          l = parseFloat(r) || 0,
          h = (r + "").trim().substr((l + "").length) || "px",
          c = un.style,
          f = Dn.test(n),
          p = "svg" === e.tagName.toLowerCase(),
          d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
          g = "px" === i,
          D = "%" === i;
        return i === h || !l || Vn[i] || Vn[h]
          ? l
          : ("px" !== h && !g && (l = t(e, n, r, "px")),
            (u = e.getCTM && zn(e)),
            (!D && "%" !== h) || (!cn[n] && !~n.indexOf("adius"))
              ? ((c[f ? "width" : "height"] = 100 + (g ? h : i)),
                (s =
                  ~n.indexOf("adius") || ("em" === i && e.appendChild && !p)
                    ? e
                    : e.parentNode),
                u && (s = (e.ownerSVGElement || {}).parentNode),
                (s && s !== on && s.appendChild) || (s = on.body),
                (a = s._gsap) && D && a.width && f && a.time === pe.time
                  ? lt((l / a.width) * 100)
                  : ((D || "%" === h) && (c.position = Bn(e, "position")),
                    s === e && (c.position = "static"),
                    s.appendChild(un),
                    (o = un[d]),
                    s.removeChild(un),
                    (c.position = "absolute"),
                    f && D && (((a = st(s)).time = pe.time), (a.width = s[d])),
                    lt(g ? (o * l) / 100 : o && l ? (100 / o) * l : 0)))
              : ((o = u ? e.getBBox()[f ? "width" : "height"] : e[d]),
                lt(D ? (l / o) * 100 : (l / 100) * o)));
      },
      Un = function (t, e, n, r) {
        var i;
        return (
          an || Rn(),
          e in vn &&
            "transform" !== e &&
            ~(e = vn[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          cn[e] && "transform" !== e
            ? ((i = rr(t, r)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : i.svg
                  ? i.origin
                  : ir(Bn(t, On)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) ||
                "auto" === i ||
                r ||
                ~(i + "").indexOf("calc(")) &&
              (i =
                (Qn[e] && Qn[e](t, e, n)) ||
                Bn(t, e) ||
                at(t, e) ||
                ("opacity" === e ? 1 : 0)),
          n && !~(i + "").trim().indexOf(" ") ? jn(t, e, i, n) + n : i
        );
      },
      qn = function (t, e, n, r) {
        if (!n || "none" === n) {
          var i = Nn(e, t, 1),
            o = i && Bn(t, i, 1);
          o && o !== n
            ? ((e = i), (n = o))
            : "borderColor" === e && (n = Bn(t, "borderTopColor"));
        }
        var s,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          g,
          D,
          m,
          _ = new $e(this._pt, t.style, e, 0, 1, Ue),
          y = 0,
          x = 0;
        if (
          ((_.b = n),
          (_.e = r),
          (n += ""),
          "auto" === (r += "") &&
            ((t.style[e] = r), (r = Bn(t, e) || r), (t.style[e] = n)),
          fe((s = [n, r])),
          (r = s[1]),
          (u = (n = s[0]).match(Y) || []),
          (r.match(Y) || []).length)
        ) {
          for (; (a = Y.exec(r)); )
            (f = a[0]),
              (d = r.substring(y, a.index)),
              h
                ? (h = (h + 1) % 5)
                : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                  (h = 1),
              f !== (c = u[x++] || "") &&
                ((l = parseFloat(c) || 0),
                (D = c.substr((l + "").length)),
                (m = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                  (f = f.substr(2)),
                (p = parseFloat(f)),
                (g = f.substr((p + "").length)),
                (y = Y.lastIndex - g.length),
                g ||
                  ((g = g || v.units[e] || D),
                  y === r.length && ((r += g), (_.e += g))),
                D !== g && (l = jn(t, e, c, g) || 0),
                (_._pt = {
                  _next: _._pt,
                  p: d || 1 === x ? d : ",",
                  s: l,
                  c: m ? m * p : p - l,
                  m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
                }));
          _.c = y < r.length ? r.substring(y, r.length) : "";
        } else _.r = "display" === e && "none" === r ? Fn : Cn;
        return z.test(r) && (_.e = 0), (this._pt = _), _;
      },
      Gn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Kn = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var n,
            r,
            i,
            o = e.t,
            s = o.style,
            a = e.u,
            u = o._gsap;
          if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
          else
            for (i = (a = a.split(",")).length; --i > -1; )
              (n = a[i]),
                cn[n] && ((r = 1), (n = "transformOrigin" === n ? On : Sn)),
                Hn(o, n);
          r &&
            (Hn(o, Sn),
            u &&
              (u.svg && o.removeAttribute("transform"),
              rr(o, 1),
              (u.uncache = 1)));
        }
      },
      Qn = {
        clearProps: function (t, e, n, r, i) {
          if ("isFromStart" !== i.data) {
            var o = (t._pt = new $e(t._pt, e, n, 0, 0, Kn));
            return (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1;
          }
        },
      },
      Zn = [1, 0, 0, 1, 0, 0],
      $n = {},
      Jn = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      tr = function (t) {
        var e = Bn(t, Sn);
        return Jn(e) ? Zn : e.substr(7).match(X).map(lt);
      },
      er = function (t, e) {
        var n,
          r,
          i,
          o,
          s = t._gsap || st(t),
          a = t.style,
          u = tr(t);
        return s.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (u = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? Zn
            : u
          : (u !== Zn ||
              t.offsetParent ||
              t === sn ||
              s.svg ||
              ((i = a.display),
              (a.display = "block"),
              ((n = t.parentNode) && t.offsetParent) ||
                ((o = 1), (r = t.nextSibling), sn.appendChild(t)),
              (u = tr(t)),
              i ? (a.display = i) : Hn(t, "display"),
              o &&
                (r
                  ? n.insertBefore(t, r)
                  : n
                  ? n.appendChild(t)
                  : sn.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      },
      nr = function (t, e, n, r, i, o) {
        var s,
          a,
          u,
          l = t._gsap,
          h = i || er(t, !0),
          c = l.xOrigin || 0,
          f = l.yOrigin || 0,
          p = l.xOffset || 0,
          d = l.yOffset || 0,
          g = h[0],
          D = h[1],
          m = h[2],
          v = h[3],
          _ = h[4],
          y = h[5],
          x = e.split(" "),
          w = parseFloat(x[0]) || 0,
          C = parseFloat(x[1]) || 0;
        n
          ? h !== Zn &&
            (a = g * v - D * m) &&
            ((u = w * (-D / a) + C * (g / a) - (g * y - D * _) / a),
            (w = w * (v / a) + C * (-m / a) + (m * y - v * _) / a),
            (C = u))
          : ((w =
              (s = In(t)).x + (~x[0].indexOf("%") ? (w / 100) * s.width : w)),
            (C =
              s.y + (~(x[1] || x[0]).indexOf("%") ? (C / 100) * s.height : C))),
          r || (!1 !== r && l.smooth)
            ? ((_ = w - c),
              (y = C - f),
              (l.xOffset = p + (_ * g + y * m) - _),
              (l.yOffset = d + (_ * D + y * v) - y))
            : (l.xOffset = l.yOffset = 0),
          (l.xOrigin = w),
          (l.yOrigin = C),
          (l.smooth = !!r),
          (l.origin = e),
          (l.originIsAbsolute = !!n),
          (t.style[On] = "0px 0px"),
          o &&
            (Wn(o, l, "xOrigin", c, w),
            Wn(o, l, "yOrigin", f, C),
            Wn(o, l, "xOffset", p, l.xOffset),
            Wn(o, l, "yOffset", d, l.yOffset)),
          t.setAttribute("data-svg-origin", w + " " + C);
      },
      rr = function (t, e) {
        var n = t._gsap || new be(t);
        if ("x" in n && !e && !n.uncache) return n;
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          g,
          D,
          m,
          _,
          y,
          x,
          w,
          C,
          F,
          E,
          b,
          T,
          M,
          A,
          P,
          S,
          O,
          k,
          B,
          L,
          N = t.style,
          R = n.scaleX < 0,
          X = Bn(t, On) || "0";
        return (
          (r = i = o = u = l = h = c = f = p = 0),
          (s = a = 1),
          (n.svg = !(!t.getCTM || !zn(t))),
          (D = er(t, n.svg)),
          n.svg &&
            ((T =
              (!n.uncache || "0px 0px" === X) &&
              !e &&
              t.getAttribute("data-svg-origin")),
            nr(t, T || X, !!T || n.originIsAbsolute, !1 !== n.smooth, D)),
          (d = n.xOrigin || 0),
          (g = n.yOrigin || 0),
          D !== Zn &&
            ((x = D[0]),
            (w = D[1]),
            (C = D[2]),
            (F = D[3]),
            (r = E = D[4]),
            (i = b = D[5]),
            6 === D.length
              ? ((s = Math.sqrt(x * x + w * w)),
                (a = Math.sqrt(F * F + C * C)),
                (u = x || w ? dn(w, x) * fn : 0),
                (c = C || F ? dn(C, F) * fn + u : 0) &&
                  (a *= Math.abs(Math.cos(c * pn))),
                n.svg &&
                  ((r -= d - (d * x + g * C)), (i -= g - (d * w + g * F))))
              : ((L = D[6]),
                (k = D[7]),
                (P = D[8]),
                (S = D[9]),
                (O = D[10]),
                (B = D[11]),
                (r = D[12]),
                (i = D[13]),
                (o = D[14]),
                (l = (m = dn(L, O)) * fn),
                m &&
                  ((T = E * (_ = Math.cos(-m)) + P * (y = Math.sin(-m))),
                  (M = b * _ + S * y),
                  (A = L * _ + O * y),
                  (P = E * -y + P * _),
                  (S = b * -y + S * _),
                  (O = L * -y + O * _),
                  (B = k * -y + B * _),
                  (E = T),
                  (b = M),
                  (L = A)),
                (h = (m = dn(-C, O)) * fn),
                m &&
                  ((_ = Math.cos(-m)),
                  (B = F * (y = Math.sin(-m)) + B * _),
                  (x = T = x * _ - P * y),
                  (w = M = w * _ - S * y),
                  (C = A = C * _ - O * y)),
                (u = (m = dn(w, x)) * fn),
                m &&
                  ((T = x * (_ = Math.cos(m)) + w * (y = Math.sin(m))),
                  (M = E * _ + b * y),
                  (w = w * _ - x * y),
                  (b = b * _ - E * y),
                  (x = T),
                  (E = M)),
                l &&
                  Math.abs(l) + Math.abs(u) > 359.9 &&
                  ((l = u = 0), (h = 180 - h)),
                (s = lt(Math.sqrt(x * x + w * w + C * C))),
                (a = lt(Math.sqrt(b * b + L * L))),
                (m = dn(E, b)),
                (c = Math.abs(m) > 2e-4 ? m * fn : 0),
                (p = B ? 1 / (B < 0 ? -B : B) : 0)),
            n.svg &&
              ((T = t.getAttribute("transform")),
              (n.forceCSS = t.setAttribute("transform", "") || !Jn(Bn(t, Sn))),
              T && t.setAttribute("transform", T))),
          Math.abs(c) > 90 &&
            Math.abs(c) < 270 &&
            (R
              ? ((s *= -1),
                (c += u <= 0 ? 180 : -180),
                (u += u <= 0 ? 180 : -180))
              : ((a *= -1), (c += c <= 0 ? 180 : -180))),
          (n.x =
            r -
            ((n.xPercent =
              r &&
              (n.xPercent ||
                (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
              ? (t.offsetWidth * n.xPercent) / 100
              : 0) +
            "px"),
          (n.y =
            i -
            ((n.yPercent =
              i &&
              (n.yPercent ||
                (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetHeight * n.yPercent) / 100
              : 0) +
            "px"),
          (n.z = o + "px"),
          (n.scaleX = lt(s)),
          (n.scaleY = lt(a)),
          (n.rotation = lt(u) + "deg"),
          (n.rotationX = lt(l) + "deg"),
          (n.rotationY = lt(h) + "deg"),
          (n.skewX = c + "deg"),
          (n.skewY = f + "deg"),
          (n.transformPerspective = p + "px"),
          (n.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (N[On] = ir(X)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = v.force3D),
          (n.renderTransform = n.svg ? ur : hn ? ar : sr),
          (n.uncache = 0),
          n
        );
      },
      ir = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      or = function (t, e, n) {
        var r = Ht(e);
        return lt(parseFloat(e) + parseFloat(jn(t, "x", n + "px", r))) + r;
      },
      sr = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          ar(t, e);
      },
      ar = function (t, e) {
        var n = e || this,
          r = n.xPercent,
          i = n.yPercent,
          o = n.x,
          s = n.y,
          a = n.z,
          u = n.rotation,
          l = n.rotationY,
          h = n.rotationX,
          c = n.skewX,
          f = n.skewY,
          p = n.scaleX,
          d = n.scaleY,
          g = n.transformPerspective,
          D = n.force3D,
          m = n.target,
          v = n.zOrigin,
          _ = "",
          y = ("auto" === D && t && 1 !== t) || !0 === D;
        if (v && ("0deg" !== h || "0deg" !== l)) {
          var x,
            w = parseFloat(l) * pn,
            C = Math.sin(w),
            F = Math.cos(w);
          (w = parseFloat(h) * pn),
            (x = Math.cos(w)),
            (o = or(m, o, C * x * -v)),
            (s = or(m, s, -Math.sin(w) * -v)),
            (a = or(m, a, F * x * -v + v));
        }
        "0px" !== g && (_ += "perspective(" + g + ") "),
          (r || i) && (_ += "translate(" + r + "%, " + i + "%) "),
          (y || "0px" !== o || "0px" !== s || "0px" !== a) &&
            (_ +=
              "0px" !== a || y
                ? "translate3d(" + o + ", " + s + ", " + a + ") "
                : "translate(" + o + ", " + s + ") "),
          "0deg" !== u && (_ += "rotate(" + u + ") "),
          "0deg" !== l && (_ += "rotateY(" + l + ") "),
          "0deg" !== h && (_ += "rotateX(" + h + ") "),
          ("0deg" === c && "0deg" === f) ||
            (_ += "skew(" + c + ", " + f + ") "),
          (1 === p && 1 === d) || (_ += "scale(" + p + ", " + d + ") "),
          (m.style[Sn] = _ || "translate(0, 0)");
      },
      ur = function (t, e) {
        var n,
          r,
          i,
          o,
          s,
          a = e || this,
          u = a.xPercent,
          l = a.yPercent,
          h = a.x,
          c = a.y,
          f = a.rotation,
          p = a.skewX,
          d = a.skewY,
          g = a.scaleX,
          D = a.scaleY,
          m = a.target,
          v = a.xOrigin,
          _ = a.yOrigin,
          y = a.xOffset,
          x = a.yOffset,
          w = a.forceCSS,
          C = parseFloat(h),
          F = parseFloat(c);
        (f = parseFloat(f)),
          (p = parseFloat(p)),
          (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
          f || p
            ? ((f *= pn),
              (p *= pn),
              (n = Math.cos(f) * g),
              (r = Math.sin(f) * g),
              (i = Math.sin(f - p) * -D),
              (o = Math.cos(f - p) * D),
              p &&
                ((d *= pn),
                (s = Math.tan(p - d)),
                (i *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                d &&
                  ((s = Math.tan(d)),
                  (n *= s = Math.sqrt(1 + s * s)),
                  (r *= s))),
              (n = lt(n)),
              (r = lt(r)),
              (i = lt(i)),
              (o = lt(o)))
            : ((n = g), (o = D), (r = i = 0)),
          ((C && !~(h + "").indexOf("px")) ||
            (F && !~(c + "").indexOf("px"))) &&
            ((C = jn(m, "x", h, "px")), (F = jn(m, "y", c, "px"))),
          (v || _ || y || x) &&
            ((C = lt(C + v - (v * n + _ * i) + y)),
            (F = lt(F + _ - (v * r + _ * o) + x))),
          (u || l) &&
            ((s = m.getBBox()),
            (C = lt(C + (u / 100) * s.width)),
            (F = lt(F + (l / 100) * s.height))),
          (s =
            "matrix(" +
            n +
            "," +
            r +
            "," +
            i +
            "," +
            o +
            "," +
            C +
            "," +
            F +
            ")"),
          m.setAttribute("transform", s),
          w && (m.style[Sn] = s);
      },
      lr = function (t, e, n, r, i, o) {
        var s,
          a,
          u = T(i),
          l = parseFloat(i) * (u && ~i.indexOf("rad") ? fn : 1),
          h = o ? l * o : l - r,
          c = r + h + "deg";
        return (
          u &&
            ("short" === (s = i.split("_")[1]) &&
              (h %= 360) !== h % 180 &&
              (h += h < 0 ? 360 : -360),
            "cw" === s && h < 0
              ? (h = ((h + 36e9) % 360) - 360 * ~~(h / 360))
              : "ccw" === s &&
                h > 0 &&
                (h = ((h - 36e9) % 360) - 360 * ~~(h / 360))),
          (t._pt = a = new $e(t._pt, e, n, r, h, yn)),
          (a.e = c),
          (a.u = "deg"),
          t._props.push(n),
          a
        );
      },
      hr = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      },
      cr = function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          h = hr({}, n._gsap),
          c = n.style;
        for (i in (h.svg
          ? ((o = n.getAttribute("transform")),
            n.setAttribute("transform", ""),
            (c[Sn] = e),
            (r = rr(n, 1)),
            Hn(n, Sn),
            n.setAttribute("transform", o))
          : ((o = getComputedStyle(n)[Sn]),
            (c[Sn] = e),
            (r = rr(n, 1)),
            (c[Sn] = o)),
        cn))
          (o = h[i]) !== (s = r[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((a = Ht(o) !== (l = Ht(s)) ? jn(n, i, o, l) : parseFloat(o)),
            (u = parseFloat(s)),
            (t._pt = new $e(t._pt, r, i, a, u - a, _n)),
            (t._pt.u = l || 0),
            t._props.push(i));
        hr(r, h);
      };
    ut("padding,margin,Width,Radius", function (t, e) {
      var n = "Top",
        r = "Right",
        i = "Bottom",
        o = "Left",
        s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (
          n
        ) {
          return e < 2 ? t + n : "border" + n + t;
        });
      Qn[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (e) {
              return Un(t, e, n);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (r + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, i);
      };
    });
    var fr,
      pr,
      dr = {
        name: "css",
        register: Rn,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, n, r, i) {
          var o,
            s,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            g,
            D,
            m,
            _,
            y,
            x,
            w,
            C,
            F,
            E = this._props,
            b = t.style,
            M = n.vars.startAt;
          for (c in (an || Rn(), e))
            if (
              "autoRound" !== c &&
              ((s = e[c]), !tt[c] || !Oe(c, e, n, r, t, i))
            )
              if (
                ((l = typeof s),
                (h = Qn[c]),
                "function" === l && (l = typeof (s = s.call(n, r, t, i))),
                "string" === l && ~s.indexOf("random(") && (s = Jt(s)),
                h)
              )
                h(this, t, c, s, n) && (y = 1);
              else if ("--" === c.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                  (s += ""),
                  (he.lastIndex = 0),
                  he.test(o) || ((f = Ht(o)), (p = Ht(s))),
                  p ? f !== p && (o = jn(t, c, o, p) + p) : f && (s += f),
                  this.add(b, "setProperty", o, s, r, i, 0, 0, c),
                  E.push(c);
              else if ("undefined" !== l) {
                if (
                  (M && c in M
                    ? ((o =
                        "function" == typeof M[c]
                          ? M[c].call(n, r, t, i)
                          : M[c]),
                      T(o) && ~o.indexOf("random(") && (o = Jt(o)),
                      Ht(o + "") || (o += v.units[c] || Ht(Un(t, c)) || ""),
                      "=" === (o + "").charAt(1) && (o = Un(t, c)))
                    : (o = Un(t, c)),
                  (u = parseFloat(o)),
                  (d =
                    "string" === l && "=" === s.charAt(1)
                      ? +(s.charAt(0) + "1")
                      : 0) && (s = s.substr(2)),
                  (a = parseFloat(s)),
                  c in vn &&
                    ("autoAlpha" === c &&
                      (1 === u &&
                        "hidden" === Un(t, "visibility") &&
                        a &&
                        (u = 0),
                      Wn(
                        this,
                        b,
                        "visibility",
                        u ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== c &&
                      "transform" !== c &&
                      ~(c = vn[c]).indexOf(",") &&
                      (c = c.split(",")[0])),
                  (g = c in cn))
                )
                  if (
                    (D ||
                      (((m = t._gsap).renderTransform && !e.parseTransform) ||
                        rr(t, e.parseTransform),
                      (_ = !1 !== e.smoothOrigin && m.smooth),
                      ((D = this._pt =
                        new $e(
                          this._pt,
                          b,
                          Sn,
                          0,
                          1,
                          m.renderTransform,
                          m,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === c)
                  )
                    (this._pt = new $e(
                      this._pt,
                      m,
                      "scaleY",
                      m.scaleY,
                      (d ? d * a : a - m.scaleY) || 0
                    )),
                      E.push("scaleY", c),
                      (c += "X");
                  else {
                    if ("transformOrigin" === c) {
                      (w = void 0),
                        (C = void 0),
                        (F = void 0),
                        (w = (x = s).split(" ")),
                        (C = w[0]),
                        (F = w[1] || "50%"),
                        ("top" !== C &&
                          "bottom" !== C &&
                          "left" !== F &&
                          "right" !== F) ||
                          ((x = C), (C = F), (F = x)),
                        (w[0] = Gn[C] || C),
                        (w[1] = Gn[F] || F),
                        (s = w.join(" ")),
                        m.svg
                          ? nr(t, s, 0, _, 0, this)
                          : ((p = parseFloat(s.split(" ")[2]) || 0) !==
                              m.zOrigin && Wn(this, m, "zOrigin", m.zOrigin, p),
                            Wn(this, b, c, ir(o), ir(s)));
                      continue;
                    }
                    if ("svgOrigin" === c) {
                      nr(t, s, 1, _, 0, this);
                      continue;
                    }
                    if (c in $n) {
                      lr(this, m, c, u, s, d);
                      continue;
                    }
                    if ("smoothOrigin" === c) {
                      Wn(this, m, "smooth", m.smooth, s);
                      continue;
                    }
                    if ("force3D" === c) {
                      m[c] = s;
                      continue;
                    }
                    if ("transform" === c) {
                      cr(this, s, t);
                      continue;
                    }
                  }
                else c in b || (c = Nn(c) || c);
                if (
                  g ||
                  ((a || 0 === a) && (u || 0 === u) && !mn.test(s) && c in b)
                )
                  a || (a = 0),
                    (f = (o + "").substr((u + "").length)) !==
                      (p = Ht(s) || (c in v.units ? v.units[c] : f)) &&
                      (u = jn(t, c, o, p)),
                    (this._pt = new $e(
                      this._pt,
                      g ? m : b,
                      c,
                      u,
                      d ? d * a : a - u,
                      g || ("px" !== p && "zIndex" !== c) || !1 === e.autoRound
                        ? _n
                        : wn
                    )),
                    (this._pt.u = p || 0),
                    f !== p &&
                      "%" !== p &&
                      ((this._pt.b = o), (this._pt.r = xn));
                else if (c in b) qn.call(this, t, c, o, s);
                else {
                  if (!(c in t)) {
                    q(c, s);
                    continue;
                  }
                  this.add(t, c, o || t[c], s, r, i);
                }
                E.push(c);
              }
          y && Ze(this);
        },
        get: Un,
        aliases: vn,
        getSetter: function (t, e, n) {
          var r = vn[e];
          return (
            r && r.indexOf(",") < 0 && (e = r),
            e in cn && e !== On && (t._gsap.x || Un(t, "x"))
              ? n && ln === n
                ? "scale" === e
                  ? Mn
                  : Tn
                : (ln = n || {}) && ("scale" === e ? An : Pn)
              : t.style && !P(t.style[e])
              ? En
              : ~e.indexOf("-")
              ? bn
              : We(t, e)
          );
        },
        core: { _removeProperty: Hn, _getMatrix: er },
      };
    (nn.utils.checkPrefix = Nn),
      (pr = ut(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (fr = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          cn[t] = 1;
        }
      )),
      ut(fr, function (t) {
        (v.units[t] = "deg"), ($n[t] = 1);
      }),
      (vn[pr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + fr),
      ut(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          vn[e[1]] = pr[e[0]];
        }
      ),
      ut(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          v.units[t] = "px";
        }
      ),
      nn.registerPlugin(dr);
    var gr,
      Dr,
      mr,
      vr = nn.registerPlugin(dr) || nn,
      _r = vr.core.Tween,
      yr = function () {
        return (
          gr ||
          ("undefined" != typeof window &&
            (gr = window.gsap) &&
            gr.registerPlugin &&
            gr)
        );
      },
      xr = function (t) {
        (gr = yr()),
          (mr = gr && gr.parseEase("_CE"))
            ? ((Dr = 1),
              (gr.parseEase("bounce").config = function (t) {
                return "object" == typeof t
                  ? Cr("", t)
                  : Cr("bounce(" + t + ")", { strength: +t });
              }))
            : t &&
              console.warn(
                "Please gsap.registerPlugin(CustomEase, CustomBounce)"
              );
      },
      wr = function (t) {
        var e,
          n = t.length,
          r = 1 / t[n - 2];
        for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * r * 1e3) / 1e3;
        t[n - 2] = 1;
      },
      Cr = function (t, e) {
        Dr || xr(1), (e = e || {});
        var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l = Math.min(0.999, e.strength || 0.7),
          h = l,
          c = (e.squash || 0) / 100,
          f = c,
          p = 1 / 0.03,
          d = 0.2,
          g = 1,
          D = 0.1,
          m = [0, 0, 0.07, 0, 0.1, 1, 0.1, 1],
          v = [0, 0, 0, 0, 0.1, 0, 0.1, 0];
        for (
          s = 0;
          s < 200 &&
          ((a = D + (d *= h * ((h + 1) / 2))),
          (o = 1 - (g *= l * l)),
          (r = (i = D + 0.49 * d) + 0.8 * (i - (n = D + g / p))),
          c &&
            ((D += c),
            (n += c),
            (i += c),
            (r += c),
            (a += c),
            (u = c / f),
            v.push(
              D - c,
              0,
              D - c,
              u,
              D - c / 2,
              u,
              D,
              u,
              D,
              0,
              D,
              0,
              D,
              -0.6 * u,
              D + (a - D) / 6,
              0,
              a,
              0
            ),
            m.push(D - c, 1, D, 1, D, 1),
            (c *= l * l)),
          m.push(D, 1, n, o, i, o, r, o, a, 1, a, 1),
          (l *= 0.95),
          (p = g / (a - r)),
          (D = a),
          !(o > 0.999));
          s++
        );
        if (e.endAtStart && "false" !== e.endAtStart) {
          if (((i = -0.1), m.unshift(i, 1, i, 1, -0.07, 0), f))
            for (
              i -= c = 2.5 * f,
                m.unshift(i, 1, i, 1, i, 1),
                v.splice(0, 6),
                v.unshift(
                  i,
                  0,
                  i,
                  0,
                  i,
                  1,
                  i + c / 2,
                  1,
                  i + c,
                  1,
                  i + c,
                  0,
                  i + c,
                  0,
                  i + c,
                  -0.6,
                  i + c + 0.033,
                  0
                ),
                s = 0;
              s < v.length;
              s += 2
            )
              v[s] -= i;
          for (s = 0; s < m.length; s += 2)
            (m[s] -= i), (m[s + 1] = 1 - m[s + 1]);
        }
        return (
          c &&
            (wr(v),
            (v[2] = "C" + v[2]),
            mr(e.squashID || t + "-squash", "M" + v.join(","))),
          wr(m),
          (m[2] = "C" + m[2]),
          mr(t, "M" + m.join(","))
        );
      },
      Fr = (function () {
        function t(t, e) {
          this.ease = Cr(t, e);
        }
        return (
          (t.create = function (t, e) {
            return Cr(t, e);
          }),
          (t.register = function (t) {
            (gr = t), xr();
          }),
          t
        );
      })();
    /*!
     * CustomBounce 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ yr() && gr.registerPlugin(Fr), (Fr.version = "3.9.1");
    /*!
     * paths 3.9.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Er = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      br = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      Tr = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      Mr = /(^[#\.][a-z]|[a-y][a-z])/i,
      Ar = Math.PI / 180,
      Pr = 180 / Math.PI,
      Sr = Math.sin,
      Or = Math.cos,
      kr = Math.abs,
      Br = Math.sqrt,
      Lr = Math.atan2,
      Nr = function (t) {
        return "string" == typeof t;
      },
      Rr = function (t) {
        return "number" == typeof t;
      },
      Xr = {},
      Yr = {},
      Ir = function (t) {
        return Math.round(((t + 1e8) % 1) * 1e5) / 1e5 || (t < 0 ? 0 : 1);
      },
      zr = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      Hr = function (t) {
        return Math.round(1e10 * t) / 1e10 || 0;
      },
      Wr = function (t, e, n, r) {
        var i = t[e],
          o = 1 === r ? 6 : ei(i, n, r);
        if (o && o + n + 2 < i.length)
          return t.splice(e, 0, i.slice(0, n + o + 2)), i.splice(0, n + o), 1;
      },
      Vr = function (t, e, n) {
        var r = t.length,
          i = ~~(n * r);
        if (t[i] > e) for (; --i && t[i] > e; );
        else for (; t[++i] < e && i < r; );
        return i < r ? i : r - 1;
      },
      jr = function (t, e) {
        return (
          (e.totalLength = t.totalLength),
          t.samples
            ? ((e.samples = t.samples.slice(0)),
              (e.lookup = t.lookup.slice(0)),
              (e.minLength = t.minLength),
              (e.resolution = t.resolution))
            : t.totalPoints && (e.totalPoints = t.totalPoints),
          e
        );
      },
      Ur = function (t, e) {
        var n = t.length,
          r = t[n - 1] || [],
          i = r.length;
        n &&
          e[0] === r[i - 2] &&
          e[1] === r[i - 1] &&
          ((e = r.concat(e.slice(2))), n--),
          (t[n] = e);
      };
    function qr(t) {
      var e,
        n = (t = (Nr(t) && Mr.test(t) && document.querySelector(t)) || t)
          .getAttribute
          ? t
          : 0;
      return n && (t = t.getAttribute("d"))
        ? (n._gsPath || (n._gsPath = {}),
          (e = n._gsPath[t]) && !e._dirty ? e : (n._gsPath[t] = si(t)))
        : t
        ? Nr(t)
          ? si(t)
          : Rr(t[0])
          ? [t]
          : t
        : console.warn("Expecting a <path> element or an SVG path data string");
    }
    function Gr(t) {
      var e,
        n = 0;
      for (t.reverse(); n < t.length; n += 2)
        (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
      t.reversed = !t.reversed;
    }
    var Kr = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2",
    };
    function Qr(t, e) {
      var n,
        r,
        i,
        o,
        s,
        a,
        u,
        l,
        h,
        c,
        f,
        p,
        d,
        g,
        D,
        m,
        v,
        _,
        y,
        x,
        w,
        C,
        F = t.tagName.toLowerCase(),
        E = 0.552284749831;
      return "path" !== F && t.getBBox
        ? ((a = (function (t, e) {
            var n,
              r = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              ),
              i = [].slice.call(t.attributes),
              o = i.length;
            for (e = "," + e + ","; --o > -1; )
              (n = i[o].nodeName.toLowerCase()),
                e.indexOf("," + n + ",") < 0 &&
                  r.setAttributeNS(null, n, i[o].nodeValue);
            return r;
          })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
          (C = (function (t, e) {
            for (
              var n = e ? e.split(",") : [], r = {}, i = n.length;
              --i > -1;

            )
              r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r;
          })(t, Kr[F])),
          "rect" === F
            ? ((o = C.rx),
              (s = C.ry || o),
              (r = C.x),
              (i = C.y),
              (c = C.width - 2 * o),
              (f = C.height - 2 * s),
              (n =
                o || s
                  ? "M" +
                    (m = (g = (d = r + o) + c) + o) +
                    "," +
                    (_ = i + s) +
                    " V" +
                    (y = _ + f) +
                    " C" +
                    [
                      m,
                      (x = y + s * E),
                      (D = g + o * E),
                      (w = y + s),
                      g,
                      w,
                      g - (g - d) / 3,
                      w,
                      d + (g - d) / 3,
                      w,
                      d,
                      w,
                      (p = r + o * (1 - E)),
                      w,
                      r,
                      x,
                      r,
                      y,
                      r,
                      y - (y - _) / 3,
                      r,
                      _ + (y - _) / 3,
                      r,
                      _,
                      r,
                      (v = i + s * (1 - E)),
                      p,
                      i,
                      d,
                      i,
                      d + (g - d) / 3,
                      i,
                      g - (g - d) / 3,
                      i,
                      g,
                      i,
                      D,
                      i,
                      m,
                      v,
                      m,
                      _,
                    ].join(",") +
                    "z"
                  : "M" +
                    (r + c) +
                    "," +
                    i +
                    " v" +
                    f +
                    " h" +
                    -c +
                    " v" +
                    -f +
                    " h" +
                    c +
                    "z"))
            : "circle" === F || "ellipse" === F
            ? ("circle" === F
                ? (l = (o = s = C.r) * E)
                : ((o = C.rx), (l = (s = C.ry) * E)),
              (n =
                "M" +
                ((r = C.cx) + o) +
                "," +
                (i = C.cy) +
                " C" +
                [
                  r + o,
                  i + l,
                  r + (u = o * E),
                  i + s,
                  r,
                  i + s,
                  r - u,
                  i + s,
                  r - o,
                  i + l,
                  r - o,
                  i,
                  r - o,
                  i - l,
                  r - u,
                  i - s,
                  r,
                  i - s,
                  r + u,
                  i - s,
                  r + o,
                  i - l,
                  r + o,
                  i,
                ].join(",") +
                "z"))
            : "line" === F
            ? (n = "M" + C.x1 + "," + C.y1 + " L" + C.x2 + "," + C.y2)
            : ("polyline" !== F && "polygon" !== F) ||
              ((n =
                "M" +
                (r = (h =
                  (t.getAttribute("points") + "").match(br) || []).shift()) +
                "," +
                (i = h.shift()) +
                " L" +
                h.join(",")),
              "polygon" === F && (n += "," + r + "," + i + "z")),
          a.setAttribute("d", li((a._gsRawPath = si(n)))),
          e &&
            t.parentNode &&
            (t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t)),
          a)
        : t;
    }
    function Zr(t, e, n) {
      var r,
        i = t[e],
        o = t[e + 2],
        s = t[e + 4];
      return (
        (i += (o - i) * n),
        (i += ((o += (s - o) * n) - i) * n),
        (r = o + (s + (t[e + 6] - s) * n - o) * n - i),
        (i = t[e + 1]),
        (i += ((o = t[e + 3]) - i) * n),
        (i += ((o += ((s = t[e + 5]) - o) * n) - i) * n),
        zr(Lr(o + (s + (t[e + 7] - s) * n - o) * n - i, r) * Pr)
      );
    }
    function $r(t, e, n) {
      (n = void 0 === n ? 1 : Hr(n) || 0), (e = Hr(e) || 0);
      var r = Math.max(0, ~~(kr(n - e) - 1e-8)),
        i = (function (t) {
          for (var e = [], n = 0; n < t.length; n++)
            e[n] = jr(t[n], t[n].slice(0));
          return jr(t, e);
        })(t);
      if (
        (e > n &&
          ((e = 1 - e),
          (n = 1 - n),
          (function (t, e) {
            var n = t.length;
            for (e || t.reverse(); n--; ) t[n].reversed || Gr(t[n]);
          })(i),
          (i.totalLength = 0)),
        e < 0 || n < 0)
      ) {
        var o = Math.abs(~~Math.min(e, n)) + 1;
        (e += o), (n += o);
      }
      i.totalLength || ti(i);
      var s,
        a,
        u,
        l,
        h,
        c,
        f,
        p,
        d = n > 1,
        g = ni(i, e, Xr, !0),
        D = ni(i, n, Yr),
        m = D.segment,
        v = g.segment,
        _ = D.segIndex,
        y = g.segIndex,
        x = D.i,
        w = g.i,
        C = y === _,
        F = x === w && C;
      if (d || r) {
        for (
          s = _ < y || (C && x < w) || (F && D.t < g.t),
            Wr(i, y, w, g.t) &&
              (y++,
              s ||
                (_++,
                F
                  ? ((D.t = (D.t - g.t) / (1 - g.t)), (x = 0))
                  : C && (x -= w))),
            Math.abs(1 - (n - e)) < 1e-5
              ? (_ = y - 1)
              : !D.t && _
              ? _--
              : Wr(i, _, x, D.t) && s && y++,
            1 === g.t && (y = (y + 1) % i.length),
            h = [],
            f = 1 + (c = i.length) * r,
            p = y,
            f += (c - y + _) % c,
            l = 0;
          l < f;
          l++
        )
          Ur(h, i[p++ % c]);
        i = h;
      } else if (((u = 1 === D.t ? 6 : ei(m, x, D.t)), e !== n))
        for (
          a = ei(v, w, F ? g.t / D.t : g.t),
            C && (u += a),
            m.splice(x + u + 2),
            (a || w) && v.splice(0, w + a),
            l = i.length;
          l--;

        )
          (l < y || l > _) && i.splice(l, 1);
      else
        (m.angle = Zr(m, x + u, 0)),
          (g = m[(x += u)]),
          (D = m[x + 1]),
          (m.length = m.totalLength = 0),
          (m.totalPoints = i.totalPoints = 8),
          m.push(g, D, g, D, g, D, g, D);
      return (i.totalLength = 0), i;
    }
    function Jr(t, e, n) {
      (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        h,
        c,
        f,
        p,
        d,
        g,
        D,
        m,
        v,
        _,
        y = ~~t.resolution || 12,
        x = 1 / y,
        w = n ? e + 6 * n + 1 : t.length,
        C = t[e],
        F = t[e + 1],
        E = e ? (e / 6) * y : 0,
        b = t.samples,
        T = t.lookup,
        M = (e ? t.minLength : 1e8) || 1e8,
        A = b[E + n * y - 1],
        P = e ? b[E - 1] : 0;
      for (b.length = T.length = 0, i = e + 2; i < w; i += 6) {
        if (
          ((o = t[i + 4] - C),
          (s = t[i + 2] - C),
          (a = t[i] - C),
          (h = t[i + 5] - F),
          (c = t[i + 3] - F),
          (f = t[i + 1] - F),
          (u = l = p = d = 0),
          kr(o) < 0.01 && kr(h) < 0.01 && kr(a) + kr(f) < 0.01)
        )
          t.length > 8 && (t.splice(i, 6), (i -= 6), (w -= 6));
        else
          for (r = 1; r <= y; r++)
            (u =
              l -
              (l =
                ((D = x * r) * D * o + 3 * (g = 1 - D) * (D * s + g * a)) * D)),
              (p = d - (d = (D * D * h + 3 * g * (D * c + g * f)) * D)),
              (v = Br(p * p + u * u)) < M && (M = v),
              (P += v),
              (b[E++] = P);
        (C += o), (F += h);
      }
      if (A) for (A -= P; E < b.length; E++) b[E] += A;
      if (b.length && M) {
        if (
          ((t.totalLength = _ = b[b.length - 1] || 0),
          (t.minLength = M),
          _ / M < 9999)
        )
          for (v = m = 0, r = 0; r < _; r += M) T[v++] = b[m] < r ? ++m : m;
      } else t.totalLength = b[0] = 0;
      return e ? P - b[e / 2 - 1] : P;
    }
    function ti(t, e) {
      var n, r, i;
      for (i = n = r = 0; i < t.length; i++)
        (t[i].resolution = ~~e || 12), (r += t[i].length), (n += Jr(t[i]));
      return (t.totalPoints = r), (t.totalLength = n), t;
    }
    function ei(t, e, n) {
      if (n <= 0 || n >= 1) return 0;
      var r = t[e],
        i = t[e + 1],
        o = t[e + 2],
        s = t[e + 3],
        a = t[e + 4],
        u = t[e + 5],
        l = r + (o - r) * n,
        h = o + (a - o) * n,
        c = i + (s - i) * n,
        f = s + (u - s) * n,
        p = l + (h - l) * n,
        d = c + (f - c) * n,
        g = a + (t[e + 6] - a) * n,
        D = u + (t[e + 7] - u) * n;
      return (
        (h += (g - h) * n),
        (f += (D - f) * n),
        t.splice(
          e + 2,
          4,
          zr(l),
          zr(c),
          zr(p),
          zr(d),
          zr(p + (h - p) * n),
          zr(d + (f - d) * n),
          zr(h),
          zr(f),
          zr(g),
          zr(D)
        ),
        t.samples &&
          t.samples.splice(((e / 6) * t.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
        6
      );
    }
    function ni(t, e, n, r) {
      (n = n || {}), t.totalLength || ti(t), (e < 0 || e > 1) && (e = Ir(e));
      var i,
        o,
        s,
        a,
        u,
        l,
        h,
        c = 0,
        f = t[0];
      if (e)
        if (1 === e) (h = 1), (l = (f = t[(c = t.length - 1)]).length - 8);
        else {
          if (t.length > 1) {
            for (
              s = t.totalLength * e, u = l = 0;
              (u += t[l++].totalLength) < s;

            )
              c = l;
            e = (s - (a = u - (f = t[c]).totalLength)) / (u - a) || 0;
          }
          (i = f.samples),
            (o = f.resolution),
            (s = f.totalLength * e),
            (a = (l = f.lookup.length
              ? f.lookup[~~(s / f.minLength)] || 0
              : Vr(i, s, e))
              ? i[l - 1]
              : 0),
            (u = i[l]) < s && ((a = u), (u = i[++l])),
            (h = (1 / o) * ((s - a) / (u - a) + (l % o))),
            (l = 6 * ~~(l / o)),
            r &&
              1 === h &&
              (l + 6 < f.length
                ? ((l += 6), (h = 0))
                : c + 1 < t.length && ((l = h = 0), (f = t[++c])));
        }
      else (h = l = c = 0), (f = t[0]);
      return (
        (n.t = h), (n.i = l), (n.path = t), (n.segment = f), (n.segIndex = c), n
      );
    }
    function ri(t, e, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        h,
        c,
        f,
        p = t[0],
        d = r || {};
      if (((e < 0 || e > 1) && (e = Ir(e)), t.length > 1)) {
        for (s = t.totalLength * e, u = l = 0; (u += t[l++].totalLength) < s; )
          p = t[l];
        e = (s - (a = u - p.totalLength)) / (u - a) || 0;
      }
      return (
        (i = p.samples),
        (o = p.resolution),
        (s = p.totalLength * e),
        (a = (l = p.lookup.length
          ? p.lookup[e < 1 ? ~~(s / p.minLength) : p.lookup.length - 1] || 0
          : Vr(i, s, e))
          ? i[l - 1]
          : 0),
        (u = i[l]) < s && ((a = u), (u = i[++l])),
        (f = 1 - (h = (1 / o) * ((s - a) / (u - a) + (l % o)) || 0)),
        (c = p[(l = 6 * ~~(l / o))]),
        (d.x = zr(
          (h * h * (p[l + 6] - c) +
            3 * f * (h * (p[l + 4] - c) + f * (p[l + 2] - c))) *
            h +
            c
        )),
        (d.y = zr(
          (h * h * (p[l + 7] - (c = p[l + 1])) +
            3 * f * (h * (p[l + 5] - c) + f * (p[l + 3] - c))) *
            h +
            c
        )),
        n &&
          (d.angle = p.totalLength
            ? Zr(p, l, h >= 1 ? 1 - 1e-9 : h || 1e-9)
            : p.angle || 0),
        d
      );
    }
    function ii(t, e, n, r, i, o, s) {
      for (var a, u, l, h, c, f = t.length; --f > -1; )
        for (u = (a = t[f]).length, l = 0; l < u; l += 2)
          (h = a[l]),
            (c = a[l + 1]),
            (a[l] = h * e + c * r + o),
            (a[l + 1] = h * n + c * i + s);
      return (t._dirty = 1), t;
    }
    function oi(t, e, n, r, i, o, s, a, u) {
      if (t !== a || e !== u) {
        (n = kr(n)), (r = kr(r));
        var l = (i % 360) * Ar,
          h = Or(l),
          c = Sr(l),
          f = Math.PI,
          p = 2 * f,
          d = (t - a) / 2,
          g = (e - u) / 2,
          D = h * d + c * g,
          m = -c * d + h * g,
          v = D * D,
          _ = m * m,
          y = v / (n * n) + _ / (r * r);
        y > 1 && ((n = Br(y) * n), (r = Br(y) * r));
        var x = n * n,
          w = r * r,
          C = (x * w - x * _ - w * v) / (x * _ + w * v);
        C < 0 && (C = 0);
        var F = (o === s ? -1 : 1) * Br(C),
          E = F * ((n * m) / r),
          b = F * ((-r * D) / n),
          T = (t + a) / 2 + (h * E - c * b),
          M = (e + u) / 2 + (c * E + h * b),
          A = (D - E) / n,
          P = (m - b) / r,
          S = (-D - E) / n,
          O = (-m - b) / r,
          k = A * A + P * P,
          B = (P < 0 ? -1 : 1) * Math.acos(A / Br(k)),
          L =
            (A * O - P * S < 0 ? -1 : 1) *
            Math.acos((A * S + P * O) / Br(k * (S * S + O * O)));
        isNaN(L) && (L = f),
          !s && L > 0 ? (L -= p) : s && L < 0 && (L += p),
          (B %= p),
          (L %= p);
        var N,
          R = Math.ceil(kr(L) / (p / 4)),
          X = [],
          Y = L / R,
          I = ((4 / 3) * Sr(Y / 2)) / (1 + Or(Y / 2)),
          z = h * n,
          H = c * n,
          W = c * -r,
          V = h * r;
        for (N = 0; N < R; N++)
          (D = Or((i = B + N * Y))),
            (m = Sr(i)),
            (A = Or((i += Y))),
            (P = Sr(i)),
            X.push(D - I * m, m + I * D, A + I * P, P - I * A, A, P);
        for (N = 0; N < X.length; N += 2)
          (D = X[N]),
            (m = X[N + 1]),
            (X[N] = D * z + m * W + T),
            (X[N + 1] = D * H + m * V + M);
        return (X[N - 2] = a), (X[N - 1] = u), X;
      }
    }
    function si(t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a,
        u,
        l,
        h,
        c,
        f,
        p,
        d,
        g,
        D =
          (t + "")
            .replace(Tr, function (t) {
              var e = +t;
              return e < 1e-4 && e > -1e-4 ? 0 : e;
            })
            .match(Er) || [],
        m = [],
        v = 0,
        _ = 0,
        y = D.length,
        x = 0,
        w = "ERROR: malformed path: " + t,
        C = function (t, e, n, r) {
          (h = (n - t) / 3),
            (c = (r - e) / 3),
            a.push(t + h, e + c, n - h, r - c, n, r);
        };
      if (!t || !isNaN(D[0]) || isNaN(D[1])) return console.log(w), m;
      for (e = 0; e < y; e++)
        if (
          ((p = o),
          isNaN(D[e]) ? (s = (o = D[e].toUpperCase()) !== D[e]) : e--,
          (r = +D[e + 1]),
          (i = +D[e + 2]),
          s && ((r += v), (i += _)),
          e || ((u = r), (l = i)),
          "M" === o)
        )
          a && (a.length < 8 ? (m.length -= 1) : (x += a.length)),
            (v = u = r),
            (_ = l = i),
            (a = [r, i]),
            m.push(a),
            (e += 2),
            (o = "L");
        else if ("C" === o)
          a || (a = [0, 0]),
            s || (v = _ = 0),
            a.push(
              r,
              i,
              v + 1 * D[e + 3],
              _ + 1 * D[e + 4],
              (v += 1 * D[e + 5]),
              (_ += 1 * D[e + 6])
            ),
            (e += 6);
        else if ("S" === o)
          (h = v),
            (c = _),
            ("C" !== p && "S" !== p) ||
              ((h += v - a[a.length - 4]), (c += _ - a[a.length - 3])),
            s || (v = _ = 0),
            a.push(h, c, r, i, (v += 1 * D[e + 3]), (_ += 1 * D[e + 4])),
            (e += 4);
        else if ("Q" === o)
          (h = v + (2 / 3) * (r - v)),
            (c = _ + (2 / 3) * (i - _)),
            s || (v = _ = 0),
            (v += 1 * D[e + 3]),
            (_ += 1 * D[e + 4]),
            a.push(h, c, v + (2 / 3) * (r - v), _ + (2 / 3) * (i - _), v, _),
            (e += 4);
        else if ("T" === o)
          (h = v - a[a.length - 4]),
            (c = _ - a[a.length - 3]),
            a.push(
              v + h,
              _ + c,
              r + (2 / 3) * (v + 1.5 * h - r),
              i + (2 / 3) * (_ + 1.5 * c - i),
              (v = r),
              (_ = i)
            ),
            (e += 2);
        else if ("H" === o) C(v, _, (v = r), _), (e += 1);
        else if ("V" === o) C(v, _, v, (_ = r + (s ? _ - v : 0))), (e += 1);
        else if ("L" === o || "Z" === o)
          "Z" === o && ((r = u), (i = l), (a.closed = !0)),
            ("L" === o || kr(v - r) > 0.5 || kr(_ - i) > 0.5) &&
              (C(v, _, r, i), "L" === o && (e += 2)),
            (v = r),
            (_ = i);
        else if ("A" === o) {
          if (
            ((d = D[e + 4]),
            (g = D[e + 5]),
            (h = D[e + 6]),
            (c = D[e + 7]),
            (n = 7),
            d.length > 1 &&
              (d.length < 3
                ? ((c = h), (h = g), n--)
                : ((c = g), (h = d.substr(2)), (n -= 2)),
              (g = d.charAt(1)),
              (d = d.charAt(0))),
            (f = oi(
              v,
              _,
              +D[e + 1],
              +D[e + 2],
              +D[e + 3],
              +d,
              +g,
              (s ? v : 0) + 1 * h,
              (s ? _ : 0) + 1 * c
            )),
            (e += n),
            f)
          )
            for (n = 0; n < f.length; n++) a.push(f[n]);
          (v = a[a.length - 2]), (_ = a[a.length - 1]);
        } else console.log(w);
      return (
        (e = a.length) < 6
          ? (m.pop(), (e = 0))
          : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0),
        (m.totalPoints = x + e),
        m
      );
    }
    function ai(t, e) {
      void 0 === e && (e = 1);
      for (var n = t[0], r = 0, i = [n, r], o = 2; o < t.length; o += 2)
        i.push(n, r, t[o], (r = ((t[o] - n) * e) / 2), (n = t[o]), -r);
      return i;
    }
    function ui(t, e, n) {
      kr(t[0] - t[2]) < 1e-4 && kr(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
      var r,
        i,
        o,
        s,
        a,
        u,
        l,
        h,
        c,
        f,
        p,
        d,
        g,
        D,
        m = t.length - 2,
        v = +t[0],
        _ = +t[1],
        y = +t[2],
        x = +t[3],
        w = [v, _, v, _],
        C = y - v,
        F = x - _,
        E = Math.abs(t[m] - v) < 0.001 && Math.abs(t[m + 1] - _) < 0.001;
      for (
        isNaN(n) && (n = Math.PI / 10),
          E &&
            (t.push(y, x),
            (y = v),
            (x = _),
            (v = t[m - 2]),
            (_ = t[m - 1]),
            t.unshift(v, _),
            (m += 4)),
          e = e || 0 === e ? +e : 1,
          a = 2;
        a < m;
        a += 2
      )
        (r = v),
          (i = _),
          (v = y),
          (_ = x),
          (y = +t[a + 2]),
          (x = +t[a + 3]),
          (v === y && _ === x) ||
            ((d = (u = C) * u + (h = F) * h),
            (g = (C = y - v) * C + (F = x - _) * F),
            (D = (l = y - r) * l + (c = x - i) * c),
            (p = ((o = Math.acos((d + g - D) / Br(4 * d * g))) / Math.PI) * e),
            (f = Br(d) * p),
            (p *= Br(g)),
            (v === r && _ === i) ||
              (o > n
                ? ((s = Lr(c, l)),
                  w.push(
                    zr(v - Or(s) * f),
                    zr(_ - Sr(s) * f),
                    zr(v),
                    zr(_),
                    zr(v + Or(s) * p),
                    zr(_ + Sr(s) * p)
                  ))
                : ((s = Lr(h, u)),
                  w.push(zr(v - Or(s) * f), zr(_ - Sr(s) * f)),
                  (s = Lr(F, C)),
                  w.push(zr(v), zr(_), zr(v + Or(s) * p), zr(_ + Sr(s) * p)))));
      return (
        v !== y || _ !== x || w.length < 4
          ? w.push(zr(y), zr(x), zr(y), zr(x))
          : (w.length -= 2),
        E && (w.splice(0, 6), (w.length = w.length - 6)),
        w
      );
    }
    function li(t) {
      Rr(t[0]) && (t = [t]);
      var e,
        n,
        r,
        i,
        o = "",
        s = t.length;
      for (n = 0; n < s; n++) {
        for (
          i = t[n],
            o += "M" + zr(i[0]) + "," + zr(i[1]) + " C",
            e = i.length,
            r = 2;
          r < e;
          r++
        )
          o +=
            zr(i[r++]) +
            "," +
            zr(i[r++]) +
            " " +
            zr(i[r++]) +
            "," +
            zr(i[r++]) +
            " " +
            zr(i[r++]) +
            "," +
            zr(i[r]) +
            " ";
        i.closed && (o += "z");
      }
      return o;
    }
    /*!
     * CustomEase 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var hi,
      ci,
      fi = function () {
        return (
          hi ||
          ("undefined" != typeof window &&
            (hi = window.gsap) &&
            hi.registerPlugin &&
            hi)
        );
      },
      pi = function () {
        (hi = fi())
          ? (hi.registerEase("_CE", vi.create), (ci = 1))
          : console.warn("Please gsap.registerPlugin(CustomEase)");
      },
      di = function (t) {
        return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
      },
      gi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      Di = /[cLlsSaAhHvVtTqQ]/g,
      mi = function t(e, n, r, i, o, s, a, u, l, h, c) {
        var f,
          p = (e + r) / 2,
          d = (n + i) / 2,
          g = (r + o) / 2,
          D = (i + s) / 2,
          m = (o + a) / 2,
          v = (s + u) / 2,
          _ = (p + g) / 2,
          y = (d + D) / 2,
          x = (g + m) / 2,
          w = (D + v) / 2,
          C = (_ + x) / 2,
          F = (y + w) / 2,
          E = a - e,
          b = u - n,
          T = Math.abs((r - a) * b - (i - u) * E),
          M = Math.abs((o - a) * b - (s - u) * E);
        return (
          h ||
            ((h = [
              { x: e, y: n },
              { x: a, y: u },
            ]),
            (c = 1)),
          h.splice(c || h.length - 1, 0, { x: C, y: F }),
          (T + M) * (T + M) > l * (E * E + b * b) &&
            ((f = h.length),
            t(e, n, p, d, _, y, C, F, l, h, c),
            t(C, F, x, w, m, v, a, u, l, h, c + 1 + (h.length - f))),
          h
        );
      },
      vi = (function () {
        function t(t, e, n) {
          ci || pi(), (this.id = t), this.setData(e, n);
        }
        var e = t.prototype;
        return (
          (e.setData = function (t, e) {
            e = e || {};
            var n,
              r,
              i,
              o,
              s,
              a,
              u,
              l,
              h,
              c = (t = t || "0,0,1,1").match(gi),
              f = 1,
              p = [],
              d = [],
              g = e.precision || 1,
              D = g <= 1;
            if (
              ((this.data = t),
              (Di.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
                (c = si(t)[0]),
              4 === (n = c.length))
            )
              c.unshift(0, 0), c.push(1, 1), (n = 8);
            else if ((n - 2) % 6) throw "Invalid CustomEase";
            for (
              (0 == +c[0] && 1 == +c[n - 2]) ||
                (function (t, e, n) {
                  n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                  var r,
                    i = -1 * +t[0],
                    o = -n,
                    s = t.length,
                    a = 1 / (+t[s - 2] + i),
                    u =
                      -e ||
                      (Math.abs(+t[s - 1] - +t[1]) < 0.01 * (+t[s - 2] - +t[0])
                        ? (function (t) {
                            var e,
                              n = t.length,
                              r = 1e20;
                            for (e = 1; e < n; e += 6) +t[e] < r && (r = +t[e]);
                            return r;
                          })(t) + o
                        : +t[s - 1] + o);
                  for (u = u ? 1 / u : -a, r = 0; r < s; r += 2)
                    (t[r] = (+t[r] + i) * a), (t[r + 1] = (+t[r + 1] + o) * u);
                })(c, e.height, e.originY),
                this.segment = c,
                o = 2;
              o < n;
              o += 6
            )
              (r = { x: +c[o - 2], y: +c[o - 1] }),
                (i = { x: +c[o + 4], y: +c[o + 5] }),
                p.push(r, i),
                mi(
                  r.x,
                  r.y,
                  +c[o],
                  +c[o + 1],
                  +c[o + 2],
                  +c[o + 3],
                  i.x,
                  i.y,
                  1 / (2e5 * g),
                  p,
                  p.length - 1
                );
            for (n = p.length, o = 0; o < n; o++)
              (u = p[o]),
                (l = p[o - 1] || u),
                (u.x > l.x || (l.y !== u.y && l.x === u.x) || u === l) &&
                u.x <= 1
                  ? ((l.cx = u.x - l.x),
                    (l.cy = u.y - l.y),
                    (l.n = u),
                    (l.nx = u.x),
                    D &&
                      o > 1 &&
                      Math.abs(l.cy / l.cx - p[o - 2].cy / p[o - 2].cx) > 2 &&
                      (D = 0),
                    l.cx < f &&
                      (l.cx
                        ? (f = l.cx)
                        : ((l.cx = 0.001),
                          o === n - 1 &&
                            ((l.x -= 0.001),
                            (f = Math.min(f, 0.001)),
                            (D = 0)))))
                  : (p.splice(o--, 1), n--);
            if (((s = 1 / (n = (1 / f + 1) | 0)), (a = 0), (u = p[0]), D)) {
              for (o = 0; o < n; o++)
                (h = o * s),
                  u.nx < h && (u = p[++a]),
                  (r = u.y + ((h - u.x) / u.cx) * u.cy),
                  (d[o] = { x: h, cx: s, y: r, cy: 0, nx: 9 }),
                  o && (d[o - 1].cy = r - d[o - 1].y);
              d[n - 1].cy = p[p.length - 1].y - r;
            } else {
              for (o = 0; o < n; o++) u.nx < o * s && (u = p[++a]), (d[o] = u);
              a < p.length - 1 && (d[o - 1] = p[p.length - 2]);
            }
            return (
              (this.ease = function (t) {
                var e = d[(t * n) | 0] || d[n - 1];
                return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
              }),
              (this.ease.custom = this),
              this.id && hi && hi.registerEase(this.id, this.ease),
              this
            );
          }),
          (e.getSVGData = function (e) {
            return t.getSVGData(this, e);
          }),
          (t.create = function (e, n, r) {
            return new t(e, n, r).ease;
          }),
          (t.register = function (t) {
            (hi = t), pi();
          }),
          (t.get = function (t) {
            return hi.parseEase(t);
          }),
          (t.getSVGData = function (e, n) {
            var r,
              i,
              o,
              s,
              a,
              u,
              l,
              h,
              c,
              f,
              p = (n = n || {}).width || 100,
              d = n.height || 100,
              g = n.x || 0,
              D = (n.y || 0) + d,
              m = hi.utils.toArray(n.path)[0];
            if (
              (n.invert && ((d = -d), (D = 0)),
              "string" == typeof e && (e = hi.parseEase(e)),
              e.custom && (e = e.custom),
              e instanceof t)
            )
              r = li(ii([e.segment], p, 0, 0, -d, g, D));
            else {
              for (
                r = [g, D],
                  s = 1 / (l = Math.max(5, 200 * (n.precision || 1))),
                  h = 5 / (l += 2),
                  c = di(g + s * p),
                  i = ((f = di(D + e(s) * -d)) - D) / (c - g),
                  o = 2;
                o < l;
                o++
              )
                (a = di(g + o * s * p)),
                  (u = di(D + e(o * s) * -d)),
                  (Math.abs((u - f) / (a - c) - i) > h || o === l - 1) &&
                    (r.push(c, f), (i = (u - f) / (a - c))),
                  (c = a),
                  (f = u);
              r = "M" + r.join(",");
            }
            return m && m.setAttribute("d", r), r;
          }),
          t
        );
      })();
    fi() && hi.registerPlugin(vi), (vi.version = "3.9.1");
    /*!
     * CustomWiggle 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var _i,
      yi,
      xi,
      wi = function () {
        return (
          _i ||
          ("undefined" != typeof window &&
            (_i = window.gsap) &&
            _i.registerPlugin &&
            _i)
        );
      },
      Ci = {
        easeOut: "M0,1,C0.7,1,0.6,0,1,0",
        easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
        anticipate:
          "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
        uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0",
      },
      Fi = function (t) {
        return t;
      },
      Ei = function (t) {
        if (!yi)
          if (((_i = wi()), (xi = _i && _i.parseEase("_CE")))) {
            for (var e in Ci) Ci[e] = xi("", Ci[e]);
            (yi = 1),
              (Ti("wiggle").config = function (t) {
                return "object" == typeof t
                  ? Ti("", t)
                  : Ti("wiggle(" + t + ")", { wiggles: +t });
              });
          } else
            t &&
              console.warn(
                "Please gsap.registerPlugin(CustomEase, CustomWiggle)"
              );
      },
      bi = function (t, e) {
        return (
          "function" != typeof t && (t = _i.parseEase(t) || xi("", t)),
          t.custom || !e
            ? t
            : function (e) {
                return 1 - t(e);
              }
        );
      },
      Ti = function (t, e) {
        yi || Ei(1);
        var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l,
          h,
          c = 0 | ((e = e || {}).wiggles || 10),
          f = 1 / c,
          p = f / 2,
          d = "anticipate" === e.type,
          g = Ci[e.type] || Ci.easeOut,
          D = Fi;
        if (
          (d && ((D = g), (g = Ci.easeOut)),
          e.timingEase && (D = bi(e.timingEase)),
          e.amplitudeEase && (g = bi(e.amplitudeEase, !0)),
          (l = [0, 0, (a = D(p)) / 4, 0, a / 2, (u = d ? -g(p) : g(p)), a, u]),
          "random" === e.type)
        ) {
          for (
            l.length = 4, n = D(f), r = 2 * Math.random() - 1, h = 2;
            h < c;
            h++
          )
            (p = n),
              (u = r),
              (n = D(f * h)),
              (r = 2 * Math.random() - 1),
              (i = Math.atan2(r - l[l.length - 3], n - l[l.length - 4])),
              (o = Math.cos(i) * f),
              (s = Math.sin(i) * f),
              l.push(p - o, u - s, p, u, p + o, u + s);
          l.push(n, 0, 1, 0);
        } else {
          for (h = 1; h < c; h++)
            l.push(D(p + f / 2), u),
              (p += f),
              (u = (u > 0 ? -1 : 1) * g(h * f)),
              (a = D(p)),
              l.push(D(p - f / 2), u, a, u);
          l.push(D(p + f / 4), u, D(p + f / 4), 0, 1, 0);
        }
        for (h = l.length; --h > -1; ) l[h] = ~~(1e3 * l[h]) / 1e3;
        return (l[2] = "C" + l[2]), xi(t, "M" + l.join(","));
      },
      Mi = (function () {
        function t(t, e) {
          this.ease = Ti(t, e);
        }
        return (
          (t.create = function (t, e) {
            return Ti(t, e);
          }),
          (t.register = function (t) {
            (_i = t), Ei();
          }),
          t
        );
      })();
    wi() && _i.registerPlugin(Mi), (Mi.version = "3.9.1");
    /*!
     * DrawSVGPlugin 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ai,
      Pi,
      Si,
      Oi,
      ki,
      Bi = function () {
        return "undefined" != typeof window;
      },
      Li = function () {
        return Ai || (Bi() && (Ai = window.gsap) && Ai.registerPlugin && Ai);
      },
      Ni = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      Ri = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      Xi = function (t) {
        return Math.round(1e4 * t) / 1e4;
      },
      Yi = function (t) {
        return parseFloat(t) || 0;
      },
      Ii = function (t, e) {
        var n = Yi(t);
        return ~t.indexOf("%") ? (n / 100) * e : n;
      },
      zi = function (t, e) {
        return Yi(t.getAttribute(e));
      },
      Hi = Math.sqrt,
      Wi = function (t, e, n, r, i, o) {
        return Hi(
          Math.pow((Yi(n) - Yi(t)) * i, 2) + Math.pow((Yi(r) - Yi(e)) * o, 2)
        );
      },
      Vi = function (t) {
        return console.warn(t);
      },
      ji = function (t) {
        return "non-scaling-stroke" === t.getAttribute("vector-effect");
      },
      Ui = function (t) {
        if (!(t = Pi(t)[0])) return 0;
        var e,
          n,
          r,
          i,
          o,
          s,
          a,
          u = t.tagName.toLowerCase(),
          l = t.style,
          h = 1,
          c = 1;
        ji(t) &&
          ((c = t.getScreenCTM()),
          (h = Hi(c.a * c.a + c.b * c.b)),
          (c = Hi(c.d * c.d + c.c * c.c)));
        try {
          n = t.getBBox();
        } catch (t) {
          Vi(
            "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
          );
        }
        var f = n || { x: 0, y: 0, width: 0, height: 0 },
          p = f.x,
          d = f.y,
          g = f.width,
          D = f.height;
        if (
          ((n && (g || D)) ||
            !Ri[u] ||
            ((g = zi(t, Ri[u][0])),
            (D = zi(t, Ri[u][1])),
            "rect" !== u && "line" !== u && ((g *= 2), (D *= 2)),
            "line" === u &&
              ((p = zi(t, "x1")),
              (d = zi(t, "y1")),
              (g = Math.abs(g - p)),
              (D = Math.abs(D - d)))),
          "path" === u)
        )
          (i = l.strokeDasharray),
            (l.strokeDasharray = "none"),
            (e = t.getTotalLength() || 0),
            h !== c &&
              Vi(
                "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
              ),
            (e *= (h + c) / 2),
            (l.strokeDasharray = i);
        else if ("rect" === u) e = 2 * g * h + 2 * D * c;
        else if ("line" === u) e = Wi(p, d, p + g, d + D, h, c);
        else if ("polyline" === u || "polygon" === u)
          for (
            r = t.getAttribute("points").match(Ni) || [],
              "polygon" === u && r.push(r[0], r[1]),
              e = 0,
              o = 2;
            o < r.length;
            o += 2
          )
            e += Wi(r[o - 2], r[o - 1], r[o], r[o + 1], h, c) || 0;
        else
          ("circle" !== u && "ellipse" !== u) ||
            ((s = (g / 2) * h),
            (a = (D / 2) * c),
            (e = Math.PI * (3 * (s + a) - Hi((3 * s + a) * (s + 3 * a)))));
        return e || 0;
      },
      qi = function (t, e) {
        if (!(t = Pi(t)[0])) return [0, 0];
        e || (e = Ui(t) + 1);
        var n = Si.getComputedStyle(t),
          r = n.strokeDasharray || "",
          i = Yi(n.strokeDashoffset),
          o = r.indexOf(",");
        return (
          o < 0 && (o = r.indexOf(" ")),
          (r = o < 0 ? e : Yi(r.substr(0, o))) > e && (r = e),
          [-i || 0, r - i || 0]
        );
      },
      Gi = function () {
        Bi() &&
          (document,
          (Si = window),
          (ki = Ai = Li()),
          (Pi = Ai.utils.toArray),
          (Oi = -1 !== ((Si.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      Ki = {
        version: "3.9.1",
        name: "drawSVG",
        register: function (t) {
          (Ai = t), Gi();
        },
        init: function (t, e, n, r, i) {
          if (!t.getBBox) return !1;
          ki || Gi();
          var o,
            s,
            a,
            u = Ui(t);
          return (
            (this._style = t.style),
            (this._target = t),
            e + "" == "true"
              ? (e = "0 100%")
              : e
              ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
              : (e = "0 0"),
            (s = (function (t, e, n) {
              var r,
                i,
                o = t.indexOf(" ");
              return (
                o < 0
                  ? ((r = void 0 !== n ? n + "" : t), (i = t))
                  : ((r = t.substr(0, o)), (i = t.substr(o + 1))),
                (r = Ii(r, e)) > (i = Ii(i, e)) ? [i, r] : [r, i]
              );
            })(e, u, (o = qi(t, u))[0])),
            (this._length = Xi(u)),
            (this._dash = Xi(o[1] - o[0])),
            (this._offset = Xi(-o[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              Xi(s[1] - s[0])
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              Xi(-s[0])
            )),
            Oi &&
              (a = Si.getComputedStyle(t)).strokeLinecap !== a.strokeLinejoin &&
              ((s = Yi(a.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", s, s + 0.01)),
            (this._live = ji(t) || ~(e + "").indexOf("live")),
            (this._nowrap = ~(e + "").indexOf("nowrap")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (t, e) {
          var n,
            r,
            i,
            o,
            s = e._pt,
            a = e._style;
          if (s) {
            for (
              e._live &&
              (n = Ui(e._target)) !== e._length &&
              ((r = n / e._length),
              (e._length = n),
              e._offsetPT && ((e._offsetPT.s *= r), (e._offsetPT.c *= r)),
              e._dashPT
                ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
                : (e._dash *= r));
              s;

            )
              s.r(t, s.d), (s = s._next);
            (i = e._dash || (t && 1 !== t && 1e-4) || 0),
              (n = e._length - i + 0.1),
              (o = e._offset),
              i &&
                o &&
                i + Math.abs(o % e._length) > e._length - 0.2 &&
                (o += o < 0 ? 0.1 : -0.1) &&
                (n += 0.1),
              (a.strokeDashoffset = i ? o : o + 0.001),
              (a.strokeDasharray =
                n < 0.2
                  ? "none"
                  : i
                  ? i + "px," + (e._nowrap ? 999999 : n) + "px"
                  : "0px, 999999px");
          }
        },
        getLength: Ui,
        getPosition: qi,
      };
    Li() && Ai.registerPlugin(Ki);
    /*!
     * matrix 3.9.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Qi,
      Zi,
      $i,
      Ji,
      to,
      eo,
      no,
      ro,
      io,
      oo = "transform",
      so = oo + "Origin",
      ao = function (t) {
        var e = t.ownerDocument || t;
        !(oo in t.style) &&
          "msTransform" in t.style &&
          (so = (oo = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode); );
        if (((Zi = window), (no = new go()), e)) {
          (Qi = e),
            ($i = e.documentElement),
            (Ji = e.body),
            ((ro = Qi.createElementNS(
              "http://www.w3.org/2000/svg",
              "g"
            )).style.transform = "none");
          var n = e.createElement("div"),
            r = e.createElement("div");
          Ji.appendChild(n),
            n.appendChild(r),
            (n.style.position = "static"),
            (n.style[oo] = "translate3d(0,0,1px)"),
            (io = r.offsetParent !== n),
            Ji.removeChild(n);
        }
        return e;
      },
      uo = [],
      lo = [],
      ho = function (t) {
        return (
          t.ownerSVGElement ||
          ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        );
      },
      co = function t(e, n) {
        if (e.parentNode && (Qi || ao(e))) {
          var r = ho(e),
            i = r
              ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
              : "http://www.w3.org/1999/xhtml",
            o = r ? (n ? "rect" : "g") : "div",
            s = 2 !== n ? 0 : 100,
            a = 3 === n ? 100 : 0,
            u =
              "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
            l = Qi.createElementNS
              ? Qi.createElementNS(i.replace(/^https/, "http"), o)
              : Qi.createElement(o);
          return (
            n &&
              (r
                ? (eo || (eo = t(e)),
                  l.setAttribute("width", 0.01),
                  l.setAttribute("height", 0.01),
                  l.setAttribute("transform", "translate(" + s + "," + a + ")"),
                  eo.appendChild(l))
                : (to || ((to = t(e)).style.cssText = u),
                  (l.style.cssText =
                    u +
                    "width:0.1px;height:0.1px;top:" +
                    a +
                    "px;left:" +
                    s +
                    "px"),
                  to.appendChild(l))),
            l
          );
        }
        throw "Need document and parent.";
      },
      fo = function (t, e) {
        var n,
          r,
          i,
          o,
          s,
          a,
          u = ho(t),
          l = t === u,
          h = u ? uo : lo,
          c = t.parentNode;
        if (t === Zi) return t;
        if (
          (h.length || h.push(co(t, 1), co(t, 2), co(t, 3)),
          (n = u ? eo : to),
          u)
        )
          l
            ? ((o =
                -(i = (function (t) {
                  var e,
                    n = t.getCTM();
                  return (
                    n ||
                      ((e = t.style[oo]),
                      (t.style[oo] = "none"),
                      t.appendChild(ro),
                      (n = ro.getCTM()),
                      t.removeChild(ro),
                      e
                        ? (t.style[oo] = e)
                        : t.style.removeProperty(
                            oo.replace(/([A-Z])/g, "-$1").toLowerCase()
                          )),
                    n || no.clone()
                  );
                })(t)).e / i.a),
              (s = -i.f / i.d),
              (r = no))
            : ((i = t.getBBox()),
              (o =
                (r = (r = t.transform ? t.transform.baseVal : {}).numberOfItems
                  ? r.numberOfItems > 1
                    ? (function (t) {
                        for (var e = new go(), n = 0; n < t.numberOfItems; n++)
                          e.multiply(t.getItem(n).matrix);
                        return e;
                      })(r)
                    : r.getItem(0).matrix
                  : no).a *
                  i.x +
                r.c * i.y),
              (s = r.b * i.x + r.d * i.y)),
            e && "g" === t.tagName.toLowerCase() && (o = s = 0),
            (l ? u : c).appendChild(n),
            n.setAttribute(
              "transform",
              "matrix(" +
                r.a +
                "," +
                r.b +
                "," +
                r.c +
                "," +
                r.d +
                "," +
                (r.e + o) +
                "," +
                (r.f + s) +
                ")"
            );
        else {
          if (((o = s = 0), io))
            for (
              r = t.offsetParent, i = t;
              i && (i = i.parentNode) && i !== r && i.parentNode;

            )
              (Zi.getComputedStyle(i)[oo] + "").length > 4 &&
                ((o = i.offsetLeft), (s = i.offsetTop), (i = 0));
          if (
            "absolute" !== (a = Zi.getComputedStyle(t)).position &&
            "fixed" !== a.position
          )
            for (r = t.offsetParent; c && c !== r; )
              (o += c.scrollLeft || 0),
                (s += c.scrollTop || 0),
                (c = c.parentNode);
          ((i = n.style).top = t.offsetTop - s + "px"),
            (i.left = t.offsetLeft - o + "px"),
            (i[oo] = a[oo]),
            (i[so] = a[so]),
            (i.position = "fixed" === a.position ? "fixed" : "absolute"),
            t.parentNode.appendChild(n);
        }
        return n;
      },
      po = function (t, e, n, r, i, o, s) {
        return (
          (t.a = e), (t.b = n), (t.c = r), (t.d = i), (t.e = o), (t.f = s), t
        );
      },
      go = (function () {
        function t(t, e, n, r, i, o) {
          void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = 1),
            void 0 === i && (i = 0),
            void 0 === o && (o = 0),
            po(this, t, e, n, r, i, o);
        }
        var e = t.prototype;
        return (
          (e.inverse = function () {
            var t = this.a,
              e = this.b,
              n = this.c,
              r = this.d,
              i = this.e,
              o = this.f,
              s = t * r - e * n || 1e-10;
            return po(
              this,
              r / s,
              -e / s,
              -n / s,
              t / s,
              (n * o - r * i) / s,
              -(t * o - e * i) / s
            );
          }),
          (e.multiply = function (t) {
            var e = this.a,
              n = this.b,
              r = this.c,
              i = this.d,
              o = this.e,
              s = this.f,
              a = t.a,
              u = t.c,
              l = t.b,
              h = t.d,
              c = t.e,
              f = t.f;
            return po(
              this,
              a * e + l * r,
              a * n + l * i,
              u * e + h * r,
              u * n + h * i,
              o + c * e + f * r,
              s + c * n + f * i
            );
          }),
          (e.clone = function () {
            return new t(this.a, this.b, this.c, this.d, this.e, this.f);
          }),
          (e.equals = function (t) {
            var e = this.a,
              n = this.b,
              r = this.c,
              i = this.d,
              o = this.e,
              s = this.f;
            return (
              e === t.a &&
              n === t.b &&
              r === t.c &&
              i === t.d &&
              o === t.e &&
              s === t.f
            );
          }),
          (e.apply = function (t, e) {
            void 0 === e && (e = {});
            var n = t.x,
              r = t.y,
              i = this.a,
              o = this.b,
              s = this.c,
              a = this.d,
              u = this.e,
              l = this.f;
            return (
              (e.x = n * i + r * s + u || 0), (e.y = n * o + r * a + l || 0), e
            );
          }),
          t
        );
      })();
    function Do(t, e, n, r) {
      if (!t || !t.parentNode || (Qi || ao(t)).documentElement === t)
        return new go();
      var i = (function (t) {
          for (var e, n; t && t !== Ji; )
            (n = t._gsap) && n.uncache && n.get(t, "x"),
              n &&
                !n.scaleX &&
                !n.scaleY &&
                n.renderTransform &&
                ((n.scaleX = n.scaleY = 1e-4),
                n.renderTransform(1, n),
                e ? e.push(n) : (e = [n])),
              (t = t.parentNode);
          return e;
        })(t),
        o = ho(t) ? uo : lo,
        s = fo(t, n),
        a = o[0].getBoundingClientRect(),
        u = o[1].getBoundingClientRect(),
        l = o[2].getBoundingClientRect(),
        h = s.parentNode,
        c =
          !r &&
          (function t(e) {
            return (
              "fixed" === Zi.getComputedStyle(e).position ||
              ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            );
          })(t),
        f = new go(
          (u.left - a.left) / 100,
          (u.top - a.top) / 100,
          (l.left - a.left) / 100,
          (l.top - a.top) / 100,
          a.left +
            (c
              ? 0
              : Zi.pageXOffset ||
                Qi.scrollLeft ||
                $i.scrollLeft ||
                Ji.scrollLeft ||
                0),
          a.top +
            (c
              ? 0
              : Zi.pageYOffset ||
                Qi.scrollTop ||
                $i.scrollTop ||
                Ji.scrollTop ||
                0)
        );
      if ((h.removeChild(s), i))
        for (a = i.length; a--; )
          ((u = i[a]).scaleX = u.scaleY = 0), u.renderTransform(1, u);
      return e ? f.inverse() : f;
    }
    /*!
     * MotionPathPlugin 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var mo,
      vo,
      _o,
      yo,
      xo = "x,translateX,left,marginLeft,xPercent".split(","),
      wo = "y,translateY,top,marginTop,yPercent".split(","),
      Co = Math.PI / 180,
      Fo = function (t, e, n, r) {
        for (var i = e.length, o = 2 === r ? 0 : r, s = 0; s < i; s++)
          (t[o] = parseFloat(e[s][n])), 2 === r && (t[o + 1] = 0), (o += 2);
        return t;
      },
      Eo = function (t, e, n) {
        return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
      },
      bo = function (t) {
        var e,
          n = t[0],
          r = t[1];
        for (e = 2; e < t.length; e += 2) (n = t[e] += n), (r = t[e + 1] += r);
      },
      To = function (t, e, n, r, i, o, s, a, u) {
        "cubic" === s.type
          ? (e = [e])
          : (!1 !== s.fromCurrent &&
              e.unshift(Eo(n, r, a), i ? Eo(n, i, u) : 0),
            s.relative && bo(e),
            (e = [(i ? ui : ai)(e, s.curviness)]));
        return (
          (e = o(Oo(e, n, s))),
          ko(t, n, r, e, "x", a),
          i && ko(t, n, i, e, "y", u),
          ti(e, s.resolution || (0 === s.curviness ? 20 : 12))
        );
      },
      Mo = function (t) {
        return t;
      },
      Ao = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
      Po = function (t, e, n) {
        var r,
          i = Do(t),
          o = 0,
          s = 0;
        return (
          "svg" === (t.tagName + "").toLowerCase()
            ? (r = t.viewBox.baseVal).width ||
              (r = {
                width: +t.getAttribute("width"),
                height: +t.getAttribute("height"),
              })
            : (r = e && t.getBBox && t.getBBox()),
          e &&
            "auto" !== e &&
            ((o = e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x),
            (s = e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y)),
          n.apply(o || s ? i.apply({ x: o, y: s }) : { x: i.e, y: i.f })
        );
      },
      So = function (t, e, n, r) {
        var i,
          o = Do(t.parentNode, !0, !0),
          s = o.clone().multiply(Do(e)),
          a = Po(t, n, o),
          u = Po(e, r, o),
          l = u.x,
          h = u.y;
        return (
          (s.e = s.f = 0),
          "auto" === r &&
            e.getTotalLength &&
            "path" === e.tagName.toLowerCase() &&
            ((i = e.getAttribute("d").match(Ao) || []),
            (l += (i = s.apply({ x: +i[0], y: +i[1] })).x),
            (h += i.y)),
          (i ||
            (e.getBBox &&
              t.getBBox &&
              e.ownerSVGElement === t.ownerSVGElement)) &&
            ((l -= (i = s.apply(e.getBBox())).x), (h -= i.y)),
          (s.e = l - a.x),
          (s.f = h - a.y),
          s
        );
      },
      Oo = function (t, e, n) {
        var r,
          i,
          o,
          s = n.align,
          a = n.matrix,
          u = n.offsetX,
          l = n.offsetY,
          h = n.alignOrigin,
          c = t[0][0],
          f = t[0][1],
          p = Eo(e, "x"),
          d = Eo(e, "y");
        return t && t.length
          ? (s &&
              ("self" === s || (r = yo(s)[0] || e) === e
                ? ii(t, 1, 0, 0, 1, p - c, d - f)
                : (h && !1 !== h[2]
                    ? mo.set(e, {
                        transformOrigin: 100 * h[0] + "% " + 100 * h[1] + "%",
                      })
                    : (h = [
                        Eo(e, "xPercent") / -100,
                        Eo(e, "yPercent") / -100,
                      ]),
                  (o = (i = So(e, r, h, "auto")).apply({ x: c, y: f })),
                  ii(
                    t,
                    i.a,
                    i.b,
                    i.c,
                    i.d,
                    p + i.e - (o.x - i.e),
                    d + i.f - (o.y - i.f)
                  ))),
            a
              ? ii(t, a.a, a.b, a.c, a.d, a.e, a.f)
              : (u || l) && ii(t, 1, 0, 0, 1, u || 0, l || 0),
            t)
          : qr("M0,0L0,0");
      },
      ko = function (t, e, n, r, i, o) {
        var s = e._gsap,
          a = s.harness,
          u = a && a.aliases && a.aliases[n],
          l = u && u.indexOf(",") < 0 ? u : n,
          h = (t._pt = new vo(t._pt, e, l, 0, 0, Mo, 0, s.set(e, l, t)));
        (h.u = _o(s.get(e, l, o)) || 0),
          (h.path = r),
          (h.pp = i),
          t._props.push(l);
      },
      Bo = {
        version: "3.9.1",
        name: "motionPath",
        register: function (t, e, n) {
          (_o = (mo = t).utils.getUnit), (yo = mo.utils.toArray), (vo = n);
        },
        init: function (t, e) {
          if (!mo)
            return (
              console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1
            );
          ("object" == typeof e && !e.style && e.path) || (e = { path: e });
          var n,
            r,
            i,
            o,
            s = [],
            a = e,
            u = a.path,
            l = a.autoRotate,
            h = a.unitX,
            c = a.unitY,
            f = a.x,
            p = a.y,
            d = u[0],
            g =
              ((i = e.start),
              (o = "end" in e ? e.end : 1),
              function (t) {
                return i || 1 !== o ? $r(t, i, o) : t;
              });
          if (
            ((this.rawPaths = s),
            (this.target = t),
            (this.rotate = l || 0 === l) &&
              ((this.rOffset = parseFloat(l) || 0),
              (this.radians = !!e.useRadians),
              (this.rProp = e.rotation || "rotation"),
              (this.rSet = t._gsap.set(t, this.rProp, this)),
              (this.ru = _o(t._gsap.get(t, this.rProp)) || 0)),
            Array.isArray(u) && !("closed" in u) && "number" != typeof d)
          ) {
            for (r in d)
              !f && ~xo.indexOf(r) ? (f = r) : !p && ~wo.indexOf(r) && (p = r);
            for (r in (f && p
              ? s.push(
                  To(
                    this,
                    Fo(Fo([], u, f, 0), u, p, 1),
                    t,
                    f,
                    p,
                    g,
                    e,
                    h || _o(u[0][f]),
                    c || _o(u[0][p])
                  )
                )
              : (f = p = 0),
            d))
              r !== f &&
                r !== p &&
                s.push(To(this, Fo([], u, r, 2), t, r, 0, g, e, _o(u[0][r])));
          } else
            ti((n = g(Oo(qr(e.path), t, e))), e.resolution),
              s.push(n),
              ko(this, t, e.x || "x", n, "x", e.unitX || "px"),
              ko(this, t, e.y || "y", n, "y", e.unitY || "px");
        },
        render: function (t, e) {
          var n = e.rawPaths,
            r = n.length,
            i = e._pt;
          for (t > 1 ? (t = 1) : t < 0 && (t = 0); r--; )
            ri(n[r], t, !r && e.rotate, n[r]);
          for (; i; )
            i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), (i = i._next);
          e.rotate &&
            e.rSet(
              e.target,
              e.rProp,
              n[0].angle * (e.radians ? Co : 1) + e.rOffset + e.ru,
              e,
              t
            );
        },
        getLength: function (t) {
          return ti(qr(t)).totalLength;
        },
        sliceRawPath: $r,
        getRawPath: qr,
        pointsToSegment: ui,
        stringToRawPath: si,
        rawPathToString: li,
        transformRawPath: ii,
        getGlobalMatrix: Do,
        getPositionOnPath: ri,
        cacheRawPathMeasurements: ti,
        convertToPath: function (t, e) {
          return yo(t).map(function (t) {
            return Qr(t, !1 !== e);
          });
        },
        convertCoordinates: function (t, e, n) {
          var r = Do(e, !0, !0).multiply(Do(t));
          return n ? r.apply(n) : r;
        },
        getAlignMatrix: So,
        getRelativePosition: function (t, e, n, r) {
          var i = So(t, e, n, r);
          return { x: i.e, y: i.f };
        },
        arrayToRawPath: function (t, e) {
          var n = Fo(Fo([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
          return (
            e.relative && bo(n), ["cubic" === e.type ? n : ui(n, e.curviness)]
          );
        },
      };
    (mo ||
      ("undefined" != typeof window &&
        (mo = window.gsap) &&
        mo.registerPlugin &&
        mo)) &&
      mo.registerPlugin(Bo);
    /*!
     * ScrollToPlugin 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Lo,
      No,
      Ro,
      Xo,
      Yo,
      Io,
      zo,
      Ho = function () {
        return "undefined" != typeof window;
      },
      Wo = function () {
        return Lo || (Ho() && (Lo = window.gsap) && Lo.registerPlugin && Lo);
      },
      Vo = function (t) {
        return "string" == typeof t;
      },
      jo = function (t) {
        return "function" == typeof t;
      },
      Uo = function (t, e) {
        var n = "x" === e ? "Width" : "Height",
          r = "scroll" + n,
          i = "client" + n;
        return t === Ro || t === Xo || t === Yo
          ? Math.max(Xo[r], Yo[r]) - (Ro["inner" + n] || Xo[i] || Yo[i])
          : t[r] - t["offset" + n];
      },
      qo = function (t, e) {
        var n = "scroll" + ("x" === e ? "Left" : "Top");
        return (
          t === Ro &&
            (null != t.pageXOffset
              ? (n = "page" + e.toUpperCase() + "Offset")
              : (t = null != Xo[n] ? Xo : Yo)),
          function () {
            return t[n];
          }
        );
      },
      Go = function (t, e) {
        if (!(t = Io(t)[0]) || !t.getBoundingClientRect)
          return (
            console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0,
            }
          );
        var n = t.getBoundingClientRect(),
          r = !e || e === Ro || e === Yo,
          i = r
            ? {
                top:
                  Xo.clientTop -
                  (Ro.pageYOffset || Xo.scrollTop || Yo.scrollTop || 0),
                left:
                  Xo.clientLeft -
                  (Ro.pageXOffset || Xo.scrollLeft || Yo.scrollLeft || 0),
              }
            : e.getBoundingClientRect(),
          o = { x: n.left - i.left, y: n.top - i.top };
        return !r && e && ((o.x += qo(e, "x")()), (o.y += qo(e, "y")())), o;
      },
      Ko = function (t, e, n, r, i) {
        return isNaN(t) || "object" == typeof t
          ? Vo(t) && "=" === t.charAt(1)
            ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i
            : "max" === t
            ? Uo(e, n) - i
            : Math.min(Uo(e, n), Go(t, e)[n] - i)
          : parseFloat(t) - i;
      },
      Qo = function () {
        (Lo = Wo()),
          Ho() &&
            Lo &&
            document.body &&
            ((Ro = window),
            (Yo = document.body),
            (Xo = document.documentElement),
            (Io = Lo.utils.toArray),
            Lo.config({ autoKillThreshold: 7 }),
            (zo = Lo.config()),
            (No = 1));
      },
      Zo = {
        version: "3.9.1",
        name: "scrollTo",
        rawVars: 1,
        register: function (t) {
          (Lo = t), Qo();
        },
        init: function (t, e, n, r, i) {
          No || Qo();
          var o = Lo.getProperty(t, "scrollSnapType");
          (this.isWin = t === Ro),
            (this.target = t),
            (this.tween = n),
            (e = (function (t, e, n, r) {
              if ((jo(t) && (t = t(e, n, r)), "object" != typeof t))
                return Vo(t) && "max" !== t && "=" !== t.charAt(1)
                  ? { x: t, y: t }
                  : { y: t };
              if (t.nodeType) return { y: t, x: t };
              var i,
                o = {};
              for (i in t)
                o[i] = "onAutoKill" !== i && jo(t[i]) ? t[i](e, n, r) : t[i];
              return o;
            })(e, r, t, i)),
            (this.vars = e),
            (this.autoKill = !!e.autoKill),
            (this.getX = qo(t, "x")),
            (this.getY = qo(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            o &&
              "none" !== o &&
              ((this.snap = 1),
              (this.snapInline = t.style.scrollSnapType),
              (t.style.scrollSnapType = "none")),
            null != e.x
              ? (this.add(
                  this,
                  "x",
                  this.x,
                  Ko(e.x, t, "x", this.x, e.offsetX || 0),
                  r,
                  i
                ),
                this._props.push("scrollTo_x"))
              : (this.skipX = 1),
            null != e.y
              ? (this.add(
                  this,
                  "y",
                  this.y,
                  Ko(e.y, t, "y", this.y, e.offsetY || 0),
                  r,
                  i
                ),
                this._props.push("scrollTo_y"))
              : (this.skipY = 1);
        },
        render: function (t, e) {
          for (
            var n,
              r,
              i,
              o,
              s,
              a = e._pt,
              u = e.target,
              l = e.tween,
              h = e.autoKill,
              c = e.xPrev,
              f = e.yPrev,
              p = e.isWin,
              d = e.snap,
              g = e.snapInline;
            a;

          )
            a.r(t, a.d), (a = a._next);
          (n = p || !e.skipX ? e.getX() : c),
            (i = (r = p || !e.skipY ? e.getY() : f) - f),
            (o = n - c),
            (s = zo.autoKillThreshold),
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            h &&
              (!e.skipX && (o > s || o < -s) && n < Uo(u, "x") && (e.skipX = 1),
              !e.skipY && (i > s || i < -s) && r < Uo(u, "y") && (e.skipY = 1),
              e.skipX &&
                e.skipY &&
                (l.kill(),
                e.vars.onAutoKill &&
                  e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))),
            p
              ? Ro.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y)
              : (e.skipY || (u.scrollTop = e.y),
                e.skipX || (u.scrollLeft = e.x)),
            !d ||
              (1 !== t && 0 !== t) ||
              ((r = u.scrollTop),
              (n = u.scrollLeft),
              g
                ? (u.style.scrollSnapType = g)
                : u.style.removeProperty("scroll-snap-type"),
              (u.scrollTop = r + 1),
              (u.scrollLeft = n + 1),
              (u.scrollTop = r),
              (u.scrollLeft = n)),
            (e.xPrev = e.x),
            (e.yPrev = e.y);
        },
        kill: function (t) {
          var e = "scrollTo" === t;
          (e || "scrollTo_x" === t) && (this.skipX = 1),
            (e || "scrollTo_y" === t) && (this.skipY = 1);
        },
      };
    (Zo.max = Uo),
      (Zo.getOffset = Go),
      (Zo.buildGetter = qo),
      Wo() && Lo.registerPlugin(Zo);
    /*!
     * Draggable 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var $o,
      Jo,
      ts,
      es,
      ns,
      rs,
      is,
      os,
      ss,
      as,
      us,
      ls,
      hs,
      cs,
      fs,
      ps,
      ds,
      gs,
      Ds,
      ms,
      vs,
      _s = function () {
        return "undefined" != typeof window;
      },
      ys = function () {
        return $o || (_s() && ($o = window.gsap) && $o.registerPlugin && $o);
      },
      xs = function (t) {
        return "function" == typeof t;
      },
      ws = function (t) {
        return "object" == typeof t;
      },
      Cs = function (t) {
        return void 0 === t;
      },
      Fs = function () {
        return !1;
      },
      Es = "transform",
      bs = "transformOrigin",
      Ts = function (t) {
        return Math.round(1e4 * t) / 1e4;
      },
      Ms = Array.isArray,
      As = function (t, e) {
        var n = ts.createElementNS
          ? ts.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : ts.createElement(t);
        return n.style ? n : ts.createElement(t);
      },
      Ps = 180 / Math.PI,
      Ss = new go(),
      Os =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      ks = [],
      Bs = {},
      Ls = 0,
      Ns = /^(?:a|input|textarea|button|select)$/i,
      Rs = 0,
      Xs = {},
      Ys = {},
      Is = function (t, e) {
        var n,
          r = {};
        for (n in t) r[n] = e ? t[n] * e : t[n];
        return r;
      },
      zs = function t(e, n) {
        for (var r, i = e.length; i--; )
          n
            ? (e[i].style.touchAction = n)
            : e[i].style.removeProperty("touch-action"),
            (r = e[i].children) && r.length && t(r, n);
      },
      Hs = function () {
        return ks.forEach(function (t) {
          return t();
        });
      },
      Ws = function () {
        return !ks.length && $o.ticker.remove(Hs);
      },
      Vs = function (t) {
        for (var e = ks.length; e--; ) ks[e] === t && ks.splice(e, 1);
        $o.to(Ws, {
          overwrite: !0,
          delay: 15,
          duration: 0,
          onComplete: Ws,
          data: "_draggable",
        });
      },
      js = function (t, e, n, r) {
        if (t.addEventListener) {
          var i = hs[e];
          (r = r || (us ? { passive: !1 } : null)),
            t.addEventListener(i || e, n, r),
            i && e !== i && t.addEventListener(e, n, r);
        }
      },
      Us = function (t, e, n) {
        if (t.removeEventListener) {
          var r = hs[e];
          t.removeEventListener(r || e, n),
            r && e !== r && t.removeEventListener(e, n);
        }
      },
      qs = function (t) {
        t.preventDefault && t.preventDefault(),
          t.preventManipulation && t.preventManipulation();
      },
      Gs = function t(e) {
        (fs = e.touches && cs < e.touches.length), Us(e.target, "touchend", t);
      },
      Ks = function (t) {
        (fs = t.touches && cs < t.touches.length), js(t.target, "touchend", Gs);
      },
      Qs = function (t) {
        return (
          Jo.pageYOffset ||
          t.scrollTop ||
          t.documentElement.scrollTop ||
          t.body.scrollTop ||
          0
        );
      },
      Zs = function (t) {
        return (
          Jo.pageXOffset ||
          t.scrollLeft ||
          t.documentElement.scrollLeft ||
          t.body.scrollLeft ||
          0
        );
      },
      $s = function t(e, n) {
        js(e, "scroll", n), ta(e.parentNode) || t(e.parentNode, n);
      },
      Js = function t(e, n) {
        Us(e, "scroll", n), ta(e.parentNode) || t(e.parentNode, n);
      },
      ta = function (t) {
        return !(
          t &&
          t !== es &&
          9 !== t.nodeType &&
          t !== ts.body &&
          t !== Jo &&
          t.nodeType &&
          t.parentNode
        );
      },
      ea = function (t, e) {
        var n = "x" === e ? "Width" : "Height",
          r = "scroll" + n,
          i = "client" + n;
        return Math.max(
          0,
          ta(t)
            ? Math.max(es[r], ns[r]) - (Jo["inner" + n] || es[i] || ns[i])
            : t[r] - t[i]
        );
      },
      na = function t(e, n) {
        var r = ea(e, "x"),
          i = ea(e, "y");
        ta(e) ? (e = Ys) : t(e.parentNode, n),
          (e._gsMaxScrollX = r),
          (e._gsMaxScrollY = i),
          n ||
            ((e._gsScrollX = e.scrollLeft || 0),
            (e._gsScrollY = e.scrollTop || 0));
      },
      ra = function (t, e, n) {
        var r = t.style;
        r &&
          (Cs(r[e]) && (e = ss(e, t) || e),
          null == n
            ? r.removeProperty &&
              r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())
            : (r[e] = n));
      },
      ia = function (t) {
        return Jo.getComputedStyle(
          t instanceof Element ? t : t.host || (t.parentNode || {}).host || t
        );
      },
      oa = {},
      sa = function (t) {
        if (t === Jo)
          return (
            (oa.left = oa.top = 0),
            (oa.width = oa.right =
              es.clientWidth || t.innerWidth || ns.clientWidth || 0),
            (oa.height = oa.bottom =
              (t.innerHeight || 0) - 20 < es.clientHeight
                ? es.clientHeight
                : t.innerHeight || ns.clientHeight || 0),
            oa
          );
        var e = t.ownerDocument || ts,
          n = Cs(t.pageX)
            ? t.nodeType || Cs(t.left) || Cs(t.top)
              ? as(t)[0].getBoundingClientRect()
              : t
            : {
                left: t.pageX - Zs(e),
                top: t.pageY - Qs(e),
                right: t.pageX - Zs(e) + 1,
                bottom: t.pageY - Qs(e) + 1,
              };
        return (
          Cs(n.right) && !Cs(n.width)
            ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
            : Cs(n.width) &&
              (n = {
                width: n.right - n.left,
                height: n.bottom - n.top,
                right: n.right,
                left: n.left,
                bottom: n.bottom,
                top: n.top,
              }),
          n
        );
      },
      aa = function (t, e, n) {
        var r,
          i = t.vars,
          o = i[n],
          s = t._listeners[e];
        return (
          xs(o) &&
            (r = o.apply(
              i.callbackScope || t,
              i[n + "Params"] || [t.pointerEvent]
            )),
          s && !1 === t.dispatchEvent(e) && (r = !1),
          r
        );
      },
      ua = function (t, e) {
        var n,
          r,
          i,
          o = as(t)[0];
        return o.nodeType || o === Jo
          ? ha(o, e)
          : Cs(t.left)
          ? {
              left: (r = t.min || t.minX || t.minRotation || 0),
              top: (n = t.min || t.minY || 0),
              width: (t.max || t.maxX || t.maxRotation || 0) - r,
              height: (t.max || t.maxY || 0) - n,
            }
          : ((i = { x: 0, y: 0 }),
            {
              left: t.left - i.x,
              top: t.top - i.y,
              width: t.width,
              height: t.height,
            });
      },
      la = {},
      ha = function (t, e) {
        e = as(e)[0];
        var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          g,
          D = t.getBBox && t.ownerSVGElement,
          m = t.ownerDocument || ts;
        if (t === Jo)
          (i = Qs(m)),
            (r =
              (n = Zs(m)) +
              (m.documentElement.clientWidth ||
                t.innerWidth ||
                m.body.clientWidth ||
                0)),
            (o =
              i +
              ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight
                ? m.documentElement.clientHeight
                : t.innerHeight || m.body.clientHeight || 0));
        else {
          if (e === Jo || Cs(e)) return t.getBoundingClientRect();
          (n = i = 0),
            D
              ? ((f = (c = t.getBBox()).width), (p = c.height))
              : (t.viewBox &&
                  (c = t.viewBox.baseVal) &&
                  ((n = c.x || 0),
                  (i = c.y || 0),
                  (f = c.width),
                  (p = c.height)),
                f ||
                  ((c = "border-box" === (d = ia(t)).boxSizing),
                  (f =
                    (parseFloat(d.width) || t.clientWidth || 0) +
                    (c
                      ? 0
                      : parseFloat(d.borderLeftWidth) +
                        parseFloat(d.borderRightWidth))),
                  (p =
                    (parseFloat(d.height) || t.clientHeight || 0) +
                    (c
                      ? 0
                      : parseFloat(d.borderTopWidth) +
                        parseFloat(d.borderBottomWidth))))),
            (r = f),
            (o = p);
        }
        return t === e
          ? { left: n, top: i, width: r - n, height: o - i }
          : ((a = (s = Do(e, !0).multiply(Do(t))).apply({ x: n, y: i })),
            (u = s.apply({ x: r, y: i })),
            (l = s.apply({ x: r, y: o })),
            (h = s.apply({ x: n, y: o })),
            (n = Math.min(a.x, u.x, l.x, h.x)),
            (i = Math.min(a.y, u.y, l.y, h.y)),
            {
              left: n + ((g = e.parentNode || {}).scrollLeft || 0),
              top: i + (g.scrollTop || 0),
              width: Math.max(a.x, u.x, l.x, h.x) - n,
              height: Math.max(a.y, u.y, l.y, h.y) - i,
            });
      },
      ca = function (t, e, n, r, i, o) {
        var s,
          a,
          u,
          l = {};
        if (e)
          if (1 !== i && e instanceof Array) {
            if (((l.end = s = []), (u = e.length), ws(e[0])))
              for (a = 0; a < u; a++) s[a] = Is(e[a], i);
            else for (a = 0; a < u; a++) s[a] = e[a] * i;
            (n += 1.1), (r -= 1.1);
          } else
            xs(e)
              ? (l.end = function (n) {
                  var r,
                    o,
                    s = e.call(t, n);
                  if (1 !== i)
                    if (ws(s)) {
                      for (o in ((r = {}), s)) r[o] = s[o] * i;
                      s = r;
                    } else s *= i;
                  return s;
                })
              : (l.end = e);
        return (
          (n || 0 === n) && (l.max = n),
          (r || 0 === r) && (l.min = r),
          o && (l.velocity = 0),
          l
        );
      },
      fa = function t(e) {
        var n;
        return (
          !(!e || !e.getAttribute || e === ns) &&
          (!(
            "true" !== (n = e.getAttribute("data-clickable")) &&
            ("false" === n ||
              (!e.onclick &&
                !Ns.test(e.nodeName + "") &&
                "true" !== e.getAttribute("contentEditable")))
          ) ||
            t(e.parentNode))
        );
      },
      pa = function (t, e) {
        for (var n, r = t.length; r--; )
          ((n = t[r]).ondragstart = n.onselectstart = e ? null : Fs),
            $o.set(n, { lazy: !0, userSelect: e ? "text" : "none" });
      },
      da = function (t, e) {
        (t = $o.utils.toArray(t)[0]), (e = e || {});
        var n,
          r,
          i,
          o,
          s,
          a,
          u = document.createElement("div"),
          l = u.style,
          h = t.firstChild,
          c = 0,
          f = 0,
          p = t.scrollTop,
          d = t.scrollLeft,
          g = t.scrollWidth,
          D = t.scrollHeight,
          m = 0,
          v = 0,
          _ = 0;
        ms && !1 !== e.force3D
          ? ((s = "translate3d("), (a = "px,0px)"))
          : Es && ((s = "translate("), (a = "px)")),
          (this.scrollTop = function (t, e) {
            if (!arguments.length) return -this.top();
            this.top(-t, e);
          }),
          (this.scrollLeft = function (t, e) {
            if (!arguments.length) return -this.left();
            this.left(-t, e);
          }),
          (this.left = function (n, r) {
            if (!arguments.length) return -(t.scrollLeft + f);
            var i = t.scrollLeft - d,
              o = f;
            if ((i > 2 || i < -2) && !r)
              return (
                (d = t.scrollLeft),
                $o.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                this.left(-d),
                void (e.onKill && e.onKill())
              );
            (n = -n) < 0
              ? ((f = (n - 0.5) | 0), (n = 0))
              : n > v
              ? ((f = (n - v) | 0), (n = v))
              : (f = 0),
              (f || o) &&
                (this._skip || (l[Es] = s + -f + "px," + -c + a),
                f + m >= 0 && (l.paddingRight = f + m + "px")),
              (t.scrollLeft = 0 | n),
              (d = t.scrollLeft);
          }),
          (this.top = function (n, r) {
            if (!arguments.length) return -(t.scrollTop + c);
            var i = t.scrollTop - p,
              o = c;
            if ((i > 2 || i < -2) && !r)
              return (
                (p = t.scrollTop),
                $o.killTweensOf(this, { top: 1, scrollTop: 1 }),
                this.top(-p),
                void (e.onKill && e.onKill())
              );
            (n = -n) < 0
              ? ((c = (n - 0.5) | 0), (n = 0))
              : n > _
              ? ((c = (n - _) | 0), (n = _))
              : (c = 0),
              (c || o) && (this._skip || (l[Es] = s + -f + "px," + -c + a)),
              (t.scrollTop = 0 | n),
              (p = t.scrollTop);
          }),
          (this.maxScrollTop = function () {
            return _;
          }),
          (this.maxScrollLeft = function () {
            return v;
          }),
          (this.disable = function () {
            for (h = u.firstChild; h; )
              (o = h.nextSibling), t.appendChild(h), (h = o);
            t === u.parentNode && t.removeChild(u);
          }),
          (this.enable = function () {
            if ((h = t.firstChild) !== u) {
              for (; h; ) (o = h.nextSibling), u.appendChild(h), (h = o);
              t.appendChild(u), this.calibrate();
            }
          }),
          (this.calibrate = function (e) {
            var o,
              s,
              a,
              h = t.clientWidth === n;
            (p = t.scrollTop),
              (d = t.scrollLeft),
              (h &&
                t.clientHeight === r &&
                u.offsetHeight === i &&
                g === t.scrollWidth &&
                D === t.scrollHeight &&
                !e) ||
                ((c || f) &&
                  ((s = this.left()),
                  (a = this.top()),
                  this.left(-t.scrollLeft),
                  this.top(-t.scrollTop)),
                (o = ia(t)),
                (h && !e) ||
                  ((l.display = "block"),
                  (l.width = "auto"),
                  (l.paddingRight = "0px"),
                  (m = Math.max(0, t.scrollWidth - t.clientWidth)) &&
                    (m +=
                      parseFloat(o.paddingLeft) +
                      (vs ? parseFloat(o.paddingRight) : 0))),
                (l.display = "inline-block"),
                (l.position = "relative"),
                (l.overflow = "visible"),
                (l.verticalAlign = "top"),
                (l.boxSizing = "content-box"),
                (l.width = "100%"),
                (l.paddingRight = m + "px"),
                vs && (l.paddingBottom = o.paddingBottom),
                (n = t.clientWidth),
                (r = t.clientHeight),
                (g = t.scrollWidth),
                (D = t.scrollHeight),
                (v = t.scrollWidth - n),
                (_ = t.scrollHeight - r),
                (i = u.offsetHeight),
                (l.display = "block"),
                (s || a) && (this.left(s), this.top(a)));
          }),
          (this.content = u),
          (this.element = t),
          (this._skip = !1),
          this.enable();
      },
      ga = function (t) {
        if (_s() && document.body) {
          var e = window && window.navigator;
          (Jo = window),
            (ts = document),
            (es = ts.documentElement),
            (ns = ts.body),
            (rs = As("div")),
            (Ds = !!window.PointerEvent),
            ((is = As("div")).style.cssText =
              "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
            (gs = "grab" === is.style.cursor ? "grab" : "move"),
            (ps = e && -1 !== e.userAgent.toLowerCase().indexOf("android")),
            (ls =
              ("ontouchstart" in es && "orientation" in Jo) ||
              (e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0))),
            (r = As("div")),
            (i = As("div")),
            (o = i.style),
            (s = ns),
            (o.display = "inline-block"),
            (o.position = "relative"),
            (r.style.cssText = i.innerHTML =
              "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
            r.appendChild(i),
            s.appendChild(r),
            (n = i.offsetHeight + 18 > r.scrollHeight),
            s.removeChild(r),
            (vs = n),
            (hs = (function (t) {
              for (
                var e = t.split(","),
                  n = (
                    ("onpointerdown" in rs)
                      ? "pointerdown,pointermove,pointerup,pointercancel"
                      : ("onmspointerdown" in rs)
                      ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                      : t
                  ).split(","),
                  r = {},
                  i = 4;
                --i > -1;

              )
                (r[e[i]] = n[i]), (r[n[i]] = e[i]);
              try {
                es.addEventListener(
                  "test",
                  null,
                  Object.defineProperty({}, "passive", {
                    get: function () {
                      us = 1;
                    },
                  })
                );
              } catch (t) {}
              return r;
            })("touchstart,touchmove,touchend,touchcancel")),
            js(ts, "touchcancel", Fs),
            js(Jo, "touchmove", Fs),
            ns && ns.addEventListener("touchstart", Fs),
            js(ts, "contextmenu", function () {
              for (var t in Bs) Bs[t].isPressed && Bs[t].endDrag();
            }),
            ($o = os = ys());
        }
        var n, r, i, o, s;
        $o
          ? ((ds = $o.plugins.inertia),
            (ss = $o.utils.checkPrefix),
            (Es = ss(Es)),
            (bs = ss(bs)),
            (as = $o.utils.toArray),
            (ms = !!ss("perspective")))
          : t && console.warn("Please gsap.registerPlugin(Draggable)");
      },
      Da = (function (t) {
        var e, n;
        function r(e, n) {
          var i;
          (i = t.call(this) || this),
            os || ga(1),
            (e = as(e)[0]),
            ds || (ds = $o.plugins.inertia),
            (i.vars = n = Is(n || {})),
            (i.target = e),
            (i.x = i.y = i.rotation = 0),
            (i.dragResistance = parseFloat(n.dragResistance) || 0),
            (i.edgeResistance = isNaN(n.edgeResistance)
              ? 1
              : parseFloat(n.edgeResistance) || 0),
            (i.lockAxis = n.lockAxis),
            (i.autoScroll = n.autoScroll || 0),
            (i.lockedAxis = null),
            (i.allowEventDefault = !!n.allowEventDefault),
            $o.getProperty(e, "x");
          var o,
            s,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            g,
            D,
            m,
            v,
            _,
            y,
            x,
            w,
            C,
            F,
            E,
            b,
            T,
            M,
            A,
            P,
            S,
            O,
            k,
            B,
            L,
            N,
            R = (n.type || "x,y").toLowerCase(),
            X = ~R.indexOf("x") || ~R.indexOf("y"),
            Y = -1 !== R.indexOf("rotation"),
            I = Y ? "rotation" : X ? "x" : "left",
            z = X ? "y" : "top",
            H = !(!~R.indexOf("x") && !~R.indexOf("left") && "scroll" !== R),
            W = !(!~R.indexOf("y") && !~R.indexOf("top") && "scroll" !== R),
            V = n.minimumMovement || 2,
            j = (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(i),
            U = as(n.trigger || n.handle || e),
            q = {},
            G = 0,
            K = !1,
            Q = n.autoScrollMarginTop || 40,
            Z = n.autoScrollMarginRight || 40,
            $ = n.autoScrollMarginBottom || 40,
            J = n.autoScrollMarginLeft || 40,
            tt = n.clickableTest || fa,
            et = 0,
            nt = e._gsap || $o.core.getCache(e),
            rt = (function t(e) {
              return (
                "fixed" === ia(e).position ||
                ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
              );
            })(e),
            it = function (t, n) {
              return parseFloat(nt.get(e, t, n));
            },
            ot = e.ownerDocument || ts,
            st = function (t) {
              return (
                qs(t),
                t.stopImmediatePropagation && t.stopImmediatePropagation(),
                !1
              );
            },
            at = function t(n) {
              if (j.autoScroll && j.isDragging && (K || x)) {
                var r,
                  i,
                  o,
                  a,
                  u,
                  l,
                  h,
                  c,
                  p = e,
                  d = 15 * j.autoScroll;
                for (
                  K = !1,
                    Ys.scrollTop =
                      null != Jo.pageYOffset
                        ? Jo.pageYOffset
                        : null != ot.documentElement.scrollTop
                        ? ot.documentElement.scrollTop
                        : ot.body.scrollTop,
                    Ys.scrollLeft =
                      null != Jo.pageXOffset
                        ? Jo.pageXOffset
                        : null != ot.documentElement.scrollLeft
                        ? ot.documentElement.scrollLeft
                        : ot.body.scrollLeft,
                    a = j.pointerX - Ys.scrollLeft,
                    u = j.pointerY - Ys.scrollTop;
                  p && !i;

                )
                  (r = (i = ta(p.parentNode)) ? Ys : p.parentNode),
                    (o = i
                      ? {
                          bottom: Math.max(
                            es.clientHeight,
                            Jo.innerHeight || 0
                          ),
                          right: Math.max(es.clientWidth, Jo.innerWidth || 0),
                          left: 0,
                          top: 0,
                        }
                      : r.getBoundingClientRect()),
                    (l = h = 0),
                    W &&
                      ((c = r._gsMaxScrollY - r.scrollTop) < 0
                        ? (h = c)
                        : u > o.bottom - $ && c
                        ? ((K = !0),
                          (h = Math.min(
                            c,
                            (d * (1 - Math.max(0, o.bottom - u) / $)) | 0
                          )))
                        : u < o.top + Q &&
                          r.scrollTop &&
                          ((K = !0),
                          (h = -Math.min(
                            r.scrollTop,
                            (d * (1 - Math.max(0, u - o.top) / Q)) | 0
                          ))),
                      h && (r.scrollTop += h)),
                    H &&
                      ((c = r._gsMaxScrollX - r.scrollLeft) < 0
                        ? (l = c)
                        : a > o.right - Z && c
                        ? ((K = !0),
                          (l = Math.min(
                            c,
                            (d * (1 - Math.max(0, o.right - a) / Z)) | 0
                          )))
                        : a < o.left + J &&
                          r.scrollLeft &&
                          ((K = !0),
                          (l = -Math.min(
                            r.scrollLeft,
                            (d * (1 - Math.max(0, a - o.left) / J)) | 0
                          ))),
                      l && (r.scrollLeft += l)),
                    i &&
                      (l || h) &&
                      (Jo.scrollTo(r.scrollLeft, r.scrollTop),
                      yt(j.pointerX + l, j.pointerY + h)),
                    (p = r);
              }
              if (x) {
                var g = j.x,
                  D = j.y;
                Y
                  ? ((j.deltaX = g - parseFloat(nt.rotation)),
                    (j.rotation = g),
                    (nt.rotation = g + "deg"),
                    nt.renderTransform(1, nt))
                  : s
                  ? (W && ((j.deltaY = D - s.top()), s.top(D)),
                    H && ((j.deltaX = g - s.left()), s.left(g)))
                  : X
                  ? (W &&
                      ((j.deltaY = D - parseFloat(nt.y)), (nt.y = D + "px")),
                    H && ((j.deltaX = g - parseFloat(nt.x)), (nt.x = g + "px")),
                    nt.renderTransform(1, nt))
                  : (W &&
                      ((j.deltaY = D - parseFloat(e.style.top || 0)),
                      (e.style.top = D + "px")),
                    H &&
                      ((j.deltaX = g - parseFloat(e.style.left || 0)),
                      (e.style.left = g + "px"))),
                  !f ||
                    n ||
                    O ||
                    ((O = !0),
                    !1 === aa(j, "drag", "onDrag") &&
                      (H && (j.x -= j.deltaX), W && (j.y -= j.deltaY), t(!0)),
                    (O = !1));
              }
              x = !1;
            },
            ut = function (t, n) {
              var r,
                i,
                o = j.x,
                a = j.y;
              e._gsap || (nt = $o.core.getCache(e)),
                nt.uncache && $o.getProperty(e, "x"),
                X
                  ? ((j.x = parseFloat(nt.x)), (j.y = parseFloat(nt.y)))
                  : Y
                  ? (j.x = j.rotation = parseFloat(nt.rotation))
                  : s
                  ? ((j.y = s.top()), (j.x = s.left()))
                  : ((j.y =
                      parseFloat(e.style.top || ((i = ia(e)) && i.top)) || 0),
                    (j.x = parseFloat(e.style.left || (i || {}).left) || 0)),
                (C || F || E) &&
                  !n &&
                  (j.isDragging || j.isThrowing) &&
                  (E &&
                    ((Xs.x = j.x),
                    (Xs.y = j.y),
                    (r = E(Xs)).x !== j.x && ((j.x = r.x), (x = !0)),
                    r.y !== j.y && ((j.y = r.y), (x = !0))),
                  C &&
                    (r = C(j.x)) !== j.x &&
                    ((j.x = r), Y && (j.rotation = r), (x = !0)),
                  F && ((r = F(j.y)) !== j.y && (j.y = r), (x = !0))),
                x && at(!0),
                t ||
                  ((j.deltaX = j.x - o),
                  (j.deltaY = j.y - a),
                  aa(j, "throwupdate", "onThrowUpdate"));
            },
            lt = function (t, e, n, r) {
              return (
                null == e && (e = -1e20),
                null == n && (n = 1e20),
                xs(t)
                  ? function (i) {
                      var o = j.isPressed ? 1 - j.edgeResistance : 1;
                      return (
                        t.call(
                          j,
                          i > n ? n + (i - n) * o : i < e ? e + (i - e) * o : i
                        ) * r
                      );
                    }
                  : Ms(t)
                  ? function (r) {
                      for (var i, o, s = t.length, a = 0, u = 1e20; --s > -1; )
                        (o = (i = t[s]) - r) < 0 && (o = -o),
                          o < u && i >= e && i <= n && ((a = s), (u = o));
                      return t[a];
                    }
                  : isNaN(t)
                  ? function (t) {
                      return t;
                    }
                  : function () {
                      return t * r;
                    }
              );
            },
            ht = function () {
              var t, r, i, o;
              (c = !1),
                s
                  ? (s.calibrate(),
                    (j.minX = g = -s.maxScrollLeft()),
                    (j.minY = m = -s.maxScrollTop()),
                    (j.maxX = d = j.maxY = D = 0),
                    (c = !0))
                  : n.bounds &&
                    ((t = ua(n.bounds, e.parentNode)),
                    Y
                      ? ((j.minX = g = t.left),
                        (j.maxX = d = t.left + t.width),
                        (j.minY = m = j.maxY = D = 0))
                      : Cs(n.bounds.maxX) && Cs(n.bounds.maxY)
                      ? ((r = ua(e, e.parentNode)),
                        (j.minX = g =
                          Math.round(it(I, "px") + t.left - r.left)),
                        (j.minY = m = Math.round(it(z, "px") + t.top - r.top)),
                        (j.maxX = d = Math.round(g + (t.width - r.width))),
                        (j.maxY = D = Math.round(m + (t.height - r.height))))
                      : ((t = n.bounds),
                        (j.minX = g = t.minX),
                        (j.minY = m = t.minY),
                        (j.maxX = d = t.maxX),
                        (j.maxY = D = t.maxY)),
                    g > d && ((j.minX = d), (j.maxX = d = g), (g = j.minX)),
                    m > D && ((j.minY = D), (j.maxY = D = m), (m = j.minY)),
                    Y && ((j.minRotation = g), (j.maxRotation = d)),
                    (c = !0)),
                n.liveSnap &&
                  ((i = !0 === n.liveSnap ? n.snap || {} : n.liveSnap),
                  (o = Ms(i) || xs(i)),
                  Y
                    ? ((C = lt(o ? i : i.rotation, g, d, 1)), (F = null))
                    : i.points
                    ? (E = (function (t, e, n, r, i, o, s) {
                        return (
                          (o = o && o < 1e20 ? o * o : 1e20),
                          xs(t)
                            ? function (a) {
                                var u,
                                  l,
                                  h,
                                  c = j.isPressed ? 1 - j.edgeResistance : 1,
                                  f = a.x,
                                  p = a.y;
                                return (
                                  (a.x = f =
                                    f > n
                                      ? n + (f - n) * c
                                      : f < e
                                      ? e + (f - e) * c
                                      : f),
                                  (a.y = p =
                                    p > i
                                      ? i + (p - i) * c
                                      : p < r
                                      ? r + (p - r) * c
                                      : p),
                                  (u = t.call(j, a)) !== a &&
                                    ((a.x = u.x), (a.y = u.y)),
                                  1 !== s && ((a.x *= s), (a.y *= s)),
                                  o < 1e20 &&
                                    (l = a.x - f) * l + (h = a.y - p) * h > o &&
                                    ((a.x = f), (a.y = p)),
                                  a
                                );
                              }
                            : Ms(t)
                            ? function (e) {
                                for (
                                  var n, r, i, s, a = t.length, u = 0, l = 1e20;
                                  --a > -1;

                                )
                                  (s =
                                    (n = (i = t[a]).x - e.x) * n +
                                    (r = i.y - e.y) * r) < l &&
                                    ((u = a), (l = s));
                                return l <= o ? t[u] : e;
                              }
                            : function (t) {
                                return t;
                              }
                        );
                      })(o ? i : i.points, g, d, m, D, i.radius, s ? -1 : 1))
                    : (H &&
                        (C = lt(
                          o ? i : i.x || i.left || i.scrollLeft,
                          g,
                          d,
                          s ? -1 : 1
                        )),
                      W &&
                        (F = lt(
                          o ? i : i.y || i.top || i.scrollTop,
                          m,
                          D,
                          s ? -1 : 1
                        ))));
            },
            ct = function () {
              (j.isThrowing = !1), aa(j, "throwcomplete", "onThrowComplete");
            },
            ft = function () {
              j.isThrowing = !1;
            },
            pt = function (t, r) {
              var i, o, a, u;
              t && ds
                ? (!0 === t &&
                    ((i = n.snap || n.liveSnap || {}),
                    (o = Ms(i) || xs(i)),
                    (t = {
                      resistance:
                        (n.throwResistance || n.resistance || 1e3) /
                        (Y ? 10 : 1),
                    }),
                    Y
                      ? (t.rotation = ca(j, o ? i : i.rotation, d, g, 1, r))
                      : (H &&
                          (t[I] = ca(
                            j,
                            o ? i : i.points || i.x || i.left,
                            d,
                            g,
                            s ? -1 : 1,
                            r || "x" === j.lockedAxis
                          )),
                        W &&
                          (t[z] = ca(
                            j,
                            o ? i : i.points || i.y || i.top,
                            D,
                            m,
                            s ? -1 : 1,
                            r || "y" === j.lockedAxis
                          )),
                        (i.points || (Ms(i) && ws(i[0]))) &&
                          ((t.linkedProps = I + "," + z),
                          (t.radius = i.radius)))),
                  (j.isThrowing = !0),
                  (u = isNaN(n.overshootTolerance)
                    ? 1 === n.edgeResistance
                      ? 0
                      : 1 - j.edgeResistance + 0.2
                    : n.overshootTolerance),
                  t.duration ||
                    (t.duration = {
                      max: Math.max(
                        n.minDuration || 0,
                        "maxDuration" in n ? n.maxDuration : 2
                      ),
                      min: isNaN(n.minDuration)
                        ? 0 === u || (ws(t) && t.resistance > 1e3)
                          ? 0
                          : 0.5
                        : n.minDuration,
                      overshoot: u,
                    }),
                  (j.tween = a =
                    $o.to(s || e, {
                      inertia: t,
                      data: "_draggable",
                      onComplete: ct,
                      onInterrupt: ft,
                      onUpdate: n.fastMode ? aa : ut,
                      onUpdateParams: n.fastMode
                        ? [j, "onthrowupdate", "onThrowUpdate"]
                        : i && i.radius
                        ? [!1, !0]
                        : [],
                    })),
                  n.fastMode ||
                    (s && (s._skip = !0),
                    a.render(1e9, !0, !0),
                    ut(!0, !0),
                    (j.endX = j.x),
                    (j.endY = j.y),
                    Y && (j.endRotation = j.x),
                    a.play(0),
                    ut(!0, !0),
                    s && (s._skip = !1)))
                : c && j.applyBounds();
            },
            dt = function (t) {
              var n,
                r = M;
              (M = Do(e.parentNode, !0)),
                t &&
                  j.isPressed &&
                  !M.equals(r || new go()) &&
                  ((n = r.inverse().apply({ x: a, y: u })),
                  M.apply(n, n),
                  (a = n.x),
                  (u = n.y)),
                M.equals(Ss) && (M = null);
            },
            gt = function () {
              var t,
                n,
                r,
                i = 1 - j.edgeResistance,
                o = rt ? Zs(ot) : 0,
                f = rt ? Qs(ot) : 0;
              dt(!1),
                (la.x = j.pointerX - o),
                (la.y = j.pointerY - f),
                M && M.apply(la, la),
                (a = la.x),
                (u = la.y),
                x && (yt(j.pointerX, j.pointerY), at(!0)),
                (N = Do(e)),
                s
                  ? (ht(), (h = s.top()), (l = s.left()))
                  : (Dt() ? (ut(!0, !0), ht()) : j.applyBounds(),
                    Y
                      ? ((t = e.ownerSVGElement
                          ? [
                              nt.xOrigin - e.getBBox().x,
                              nt.yOrigin - e.getBBox().y,
                            ]
                          : (ia(e)[bs] || "0 0").split(" ")),
                        (y = j.rotationOrigin =
                          Do(e).apply({
                            x: parseFloat(t[0]) || 0,
                            y: parseFloat(t[1]) || 0,
                          })),
                        ut(!0, !0),
                        (n = j.pointerX - y.x - o),
                        (r = y.y - j.pointerY + f),
                        (l = j.x),
                        (h = j.y = Math.atan2(r, n) * Ps))
                      : ((h = it(z, "px")), (l = it(I, "px")))),
                c &&
                  i &&
                  (l > d
                    ? (l = d + (l - d) / i)
                    : l < g && (l = g - (g - l) / i),
                  Y ||
                    (h > D
                      ? (h = D + (h - D) / i)
                      : h < m && (h = m - (m - h) / i))),
                (j.startX = l = Ts(l)),
                (j.startY = h = Ts(h));
            },
            Dt = function () {
              return j.tween && j.tween.isActive();
            },
            mt = function () {
              !is.parentNode ||
                Dt() ||
                j.isDragging ||
                is.parentNode.removeChild(is);
            },
            vt = function (t, i) {
              var l;
              if (
                !o ||
                j.isPressed ||
                !t ||
                (!(("mousedown" !== t.type && "pointerdown" !== t.type) || i) &&
                  Os() - et < 30 &&
                  hs[j.pointerEvent.type])
              )
                L && t && o && qs(t);
              else {
                if (
                  ((A = Dt()),
                  (j.pointerEvent = t),
                  hs[t.type]
                    ? ((T = ~t.type.indexOf("touch")
                        ? t.currentTarget || t.target
                        : ot),
                      js(T, "touchend", xt),
                      js(T, "touchmove", _t),
                      js(T, "touchcancel", xt),
                      js(ot, "touchstart", Ks))
                    : ((T = null), js(ot, "mousemove", _t)),
                  (S = null),
                  (Ds && T) ||
                    (js(ot, "mouseup", xt),
                    t && t.target && js(t.target, "mouseup", xt)),
                  (b = tt.call(j, t.target) && !1 === n.dragClickables && !i))
                )
                  return (
                    js(t.target, "change", xt),
                    aa(j, "pressInit", "onPressInit"),
                    aa(j, "press", "onPress"),
                    pa(U, !0),
                    void (L = !1)
                  );
                var h;
                if (
                  ((P =
                    !(
                      !T ||
                      H === W ||
                      !1 === j.vars.allowNativeTouchScrolling ||
                      (j.vars.allowContextMenu &&
                        t &&
                        (t.ctrlKey || t.which > 2))
                    ) && (H ? "y" : "x")),
                  (L = !P && !j.allowEventDefault) &&
                    (qs(t), js(Jo, "touchforcechange", qs)),
                  t.changedTouches
                    ? ((t = v = t.changedTouches[0]), (_ = t.identifier))
                    : t.pointerId
                    ? (_ = t.pointerId)
                    : (v = _ = null),
                  cs++,
                  (h = at),
                  ks.push(h),
                  1 === ks.length && $o.ticker.add(Hs),
                  (u = j.pointerY = t.pageY),
                  (a = j.pointerX = t.pageX),
                  aa(j, "pressInit", "onPressInit"),
                  (P || j.autoScroll) && na(e.parentNode),
                  !e.parentNode ||
                    !j.autoScroll ||
                    s ||
                    Y ||
                    !e.parentNode._gsMaxScrollX ||
                    is.parentNode ||
                    e.getBBox ||
                    ((is.style.width = e.parentNode.scrollWidth + "px"),
                    e.parentNode.appendChild(is)),
                  gt(),
                  j.tween && j.tween.kill(),
                  (j.isThrowing = !1),
                  $o.killTweensOf(s || e, q, !0),
                  s && $o.killTweensOf(e, { scrollTo: 1 }, !0),
                  (j.tween = j.lockedAxis = null),
                  (n.zIndexBoost || (!Y && !s && !1 !== n.zIndexBoost)) &&
                    (e.style.zIndex = r.zIndex++),
                  (j.isPressed = !0),
                  (f = !(!n.onDrag && !j._listeners.drag)),
                  (p = !(!n.onMove && !j._listeners.move)),
                  !1 !== n.cursor || n.activeCursor)
                )
                  for (l = U.length; --l > -1; )
                    $o.set(U[l], {
                      cursor:
                        n.activeCursor ||
                        n.cursor ||
                        ("grab" === gs ? "grabbing" : gs),
                    });
                aa(j, "press", "onPress");
              }
            },
            _t = function (t) {
              var n,
                r,
                i,
                s,
                l,
                h,
                c = t;
              if (o && !fs && j.isPressed && t) {
                if (((j.pointerEvent = t), (n = t.changedTouches))) {
                  if ((t = n[0]) !== v && t.identifier !== _) {
                    for (
                      s = n.length;
                      --s > -1 && (t = n[s]).identifier !== _ && t.target !== e;

                    );
                    if (s < 0) return;
                  }
                } else if (t.pointerId && _ && t.pointerId !== _) return;
                T &&
                P &&
                !S &&
                ((la.x = t.pageX - (rt ? Zs(ot) : 0)),
                (la.y = t.pageY - (rt ? Qs(ot) : 0)),
                M && M.apply(la, la),
                (r = la.x),
                (i = la.y),
                (((l = Math.abs(r - a)) !== (h = Math.abs(i - u)) &&
                  (l > V || h > V)) ||
                  (ps && P === S)) &&
                  ((S = l > h && H ? "x" : "y"),
                  P && S !== P && js(Jo, "touchforcechange", qs),
                  !1 !== j.vars.lockAxisOnTouchScroll &&
                    H &&
                    W &&
                    ((j.lockedAxis = "x" === S ? "y" : "x"),
                    xs(j.vars.onLockAxis) && j.vars.onLockAxis.call(j, c)),
                  ps && P === S))
                  ? xt(c)
                  : (j.allowEventDefault ||
                    (P && (!S || P === S)) ||
                    !1 === c.cancelable
                      ? L && (L = !1)
                      : (qs(c), (L = !0)),
                    j.autoScroll && (K = !0),
                    yt(t.pageX, t.pageY, p));
              } else L && t && o && qs(t);
            },
            yt = function (t, e, n) {
              var r,
                i,
                o,
                s,
                f,
                p,
                v = 1 - j.dragResistance,
                _ = 1 - j.edgeResistance,
                w = j.pointerX,
                b = j.pointerY,
                T = h,
                A = j.x,
                P = j.y,
                S = j.endX,
                O = j.endY,
                k = j.endRotation,
                B = x;
              (j.pointerX = t),
                (j.pointerY = e),
                rt && ((t -= Zs(ot)), (e -= Qs(ot))),
                Y
                  ? ((s = Math.atan2(y.y - e, t - y.x) * Ps),
                    (f = j.y - s) > 180
                      ? ((h -= 360), (j.y = s))
                      : f < -180 && ((h += 360), (j.y = s)),
                    j.x !== l || Math.abs(h - s) > V
                      ? ((j.y = s), (o = l + (h - s) * v))
                      : (o = l))
                  : (M &&
                      ((p = t * M.a + e * M.c + M.e),
                      (e = t * M.b + e * M.d + M.f),
                      (t = p)),
                    (i = e - u) < V && i > -V && (i = 0),
                    (r = t - a) < V && r > -V && (r = 0),
                    (j.lockAxis || j.lockedAxis) &&
                      (r || i) &&
                      ((p = j.lockedAxis) ||
                        ((j.lockedAxis = p =
                          H && Math.abs(r) > Math.abs(i)
                            ? "y"
                            : W
                            ? "x"
                            : null),
                        p &&
                          xs(j.vars.onLockAxis) &&
                          j.vars.onLockAxis.call(j, j.pointerEvent)),
                      "y" === p ? (i = 0) : "x" === p && (r = 0)),
                    (o = Ts(l + r * v)),
                    (s = Ts(h + i * v))),
                (C || F || E) &&
                  (j.x !== o || (j.y !== s && !Y)) &&
                  (E &&
                    ((Xs.x = o),
                    (Xs.y = s),
                    (p = E(Xs)),
                    (o = Ts(p.x)),
                    (s = Ts(p.y))),
                  C && (o = Ts(C(o))),
                  F && (s = Ts(F(s)))),
                c &&
                  (o > d
                    ? (o = d + Math.round((o - d) * _))
                    : o < g && (o = g + Math.round((o - g) * _)),
                  Y ||
                    (s > D
                      ? (s = Math.round(D + (s - D) * _))
                      : s < m && (s = Math.round(m + (s - m) * _)))),
                (j.x !== o || (j.y !== s && !Y)) &&
                  (Y
                    ? ((j.endRotation = j.x = j.endX = o), (x = !0))
                    : (W && ((j.y = j.endY = s), (x = !0)),
                      H && ((j.x = j.endX = o), (x = !0))),
                  n && !1 === aa(j, "move", "onMove")
                    ? ((j.pointerX = w),
                      (j.pointerY = b),
                      (h = T),
                      (j.x = A),
                      (j.y = P),
                      (j.endX = S),
                      (j.endY = O),
                      (j.endRotation = k),
                      (x = B))
                    : !j.isDragging &&
                      j.isPressed &&
                      ((j.isDragging = !0), aa(j, "dragstart", "onDragStart")));
            },
            xt = function t(r, i) {
              if (
                o &&
                j.isPressed &&
                (!r ||
                  null == _ ||
                  i ||
                  !(
                    (r.pointerId && r.pointerId !== _ && r.target !== e) ||
                    (r.changedTouches &&
                      !(function (t, e) {
                        for (var n = t.length; n--; )
                          if (t[n].identifier === e) return !0;
                      })(r.changedTouches, _))
                  ))
              ) {
                j.isPressed = !1;
                var s,
                  a,
                  u,
                  l,
                  h,
                  c = r,
                  f = j.isDragging,
                  p =
                    j.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
                  d = $o.delayedCall(0.001, mt);
                if (
                  (T
                    ? (Us(T, "touchend", t),
                      Us(T, "touchmove", _t),
                      Us(T, "touchcancel", t),
                      Us(ot, "touchstart", Ks))
                    : Us(ot, "mousemove", _t),
                  Us(Jo, "touchforcechange", qs),
                  (Ds && T) ||
                    (Us(ot, "mouseup", t),
                    r && r.target && Us(r.target, "mouseup", t)),
                  (x = !1),
                  f && ((G = Rs = Os()), (j.isDragging = !1)),
                  b && !p)
                )
                  return (
                    r && (Us(r.target, "change", t), (j.pointerEvent = c)),
                    pa(U, !1),
                    aa(j, "release", "onRelease"),
                    aa(j, "click", "onClick"),
                    void (b = !1)
                  );
                for (Vs(at), a = U.length; --a > -1; )
                  ra(U[a], "cursor", n.cursor || (!1 !== n.cursor ? gs : null));
                if ((cs--, r)) {
                  if (
                    (s = r.changedTouches) &&
                    (r = s[0]) !== v &&
                    r.identifier !== _
                  ) {
                    for (
                      a = s.length;
                      --a > -1 && (r = s[a]).identifier !== _ && r.target !== e;

                    );
                    if (a < 0) return;
                  }
                  (j.pointerEvent = c),
                    (j.pointerX = r.pageX),
                    (j.pointerY = r.pageY);
                }
                return (
                  p && c
                    ? (qs(c), (L = !0), aa(j, "release", "onRelease"))
                    : c && !f
                    ? ((L = !1),
                      A &&
                        (n.snap || n.bounds) &&
                        pt(n.inertia || n.throwProps),
                      aa(j, "release", "onRelease"),
                      (ps && "touchmove" === c.type) ||
                        -1 !== c.type.indexOf("cancel") ||
                        (aa(j, "click", "onClick"),
                        Os() - et < 300 &&
                          aa(j, "doubleclick", "onDoubleClick"),
                        (l = c.target || e),
                        (et = Os()),
                        (h = function () {
                          et === k ||
                            !j.enabled() ||
                            j.isPressed ||
                            c.defaultPrevented ||
                            (l.click
                              ? l.click()
                              : ot.createEvent &&
                                ((u =
                                  ot.createEvent("MouseEvents")).initMouseEvent(
                                  "click",
                                  !0,
                                  !0,
                                  Jo,
                                  1,
                                  j.pointerEvent.screenX,
                                  j.pointerEvent.screenY,
                                  j.pointerX,
                                  j.pointerY,
                                  !1,
                                  !1,
                                  !1,
                                  !1,
                                  0,
                                  null
                                ),
                                l.dispatchEvent(u)));
                        }),
                        ps || c.defaultPrevented || $o.delayedCall(0.05, h)))
                    : (pt(n.inertia || n.throwProps),
                      j.allowEventDefault ||
                      !c ||
                      (!1 === n.dragClickables && tt.call(j, c.target)) ||
                      !f ||
                      (P && (!S || P !== S)) ||
                      !1 === c.cancelable
                        ? (L = !1)
                        : ((L = !0), qs(c)),
                      aa(j, "release", "onRelease")),
                  Dt() && d.duration(j.tween.duration()),
                  f && aa(j, "dragend", "onDragEnd"),
                  !0
                );
              }
              L && r && o && qs(r);
            },
            wt = function (t) {
              if (t && j.isDragging && !s) {
                var n = t.target || e.parentNode,
                  r = n.scrollLeft - n._gsScrollX,
                  i = n.scrollTop - n._gsScrollY;
                (r || i) &&
                  (M
                    ? ((a -= r * M.a + i * M.c), (u -= i * M.d + r * M.b))
                    : ((a -= r), (u -= i)),
                  (n._gsScrollX += r),
                  (n._gsScrollY += i),
                  yt(j.pointerX, j.pointerY));
              }
            },
            Ct = function (t) {
              var e = Os(),
                n = e - et < 100,
                r = e - G < 50,
                i = n && k === et,
                o = j.pointerEvent && j.pointerEvent.defaultPrevented,
                s = n && B === et,
                a = t.isTrusted || (null == t.isTrusted && n && i);
              if (
                ((i || (r && !1 !== j.vars.suppressClickOnDrag)) &&
                  t.stopImmediatePropagation &&
                  t.stopImmediatePropagation(),
                n &&
                  (!j.pointerEvent || !j.pointerEvent.defaultPrevented) &&
                  (!i || (a && !s)))
              )
                return a && i && (B = et), void (k = et);
              (j.isPressed || r || n) && ((a && t.detail && n && !o) || qs(t)),
                n ||
                  r ||
                  (t && t.target && (j.pointerEvent = t),
                  aa(j, "click", "onClick"));
            },
            Ft = function (t) {
              return M
                ? {
                    x: t.x * M.a + t.y * M.c + M.e,
                    y: t.x * M.b + t.y * M.d + M.f,
                  }
                : { x: t.x, y: t.y };
            };
          return (
            (w = r.get(e)) && w.kill(),
            (i.startDrag = function (t, n) {
              var r, i, o, s;
              vt(t || j.pointerEvent, !0),
                n &&
                  !j.hitTest(t || j.pointerEvent) &&
                  ((r = sa(t || j.pointerEvent)),
                  (i = sa(e)),
                  (o = Ft({
                    x: r.left + r.width / 2,
                    y: r.top + r.height / 2,
                  })),
                  (s = Ft({
                    x: i.left + i.width / 2,
                    y: i.top + i.height / 2,
                  })),
                  (a -= o.x - s.x),
                  (u -= o.y - s.y)),
                j.isDragging ||
                  ((j.isDragging = !0), aa(j, "dragstart", "onDragStart"));
            }),
            (i.drag = _t),
            (i.endDrag = function (t) {
              return xt(t || j.pointerEvent, !0);
            }),
            (i.timeSinceDrag = function () {
              return j.isDragging ? 0 : (Os() - G) / 1e3;
            }),
            (i.timeSinceClick = function () {
              return (Os() - et) / 1e3;
            }),
            (i.hitTest = function (t, e) {
              return r.hitTest(j.target, t, e);
            }),
            (i.getDirection = function (t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                c =
                  "velocity" === t && ds
                    ? t
                    : ws(t) && !Y
                    ? "element"
                    : "start";
              return (
                "element" === c && ((a = sa(j.target)), (u = sa(t))),
                (r =
                  "start" === c
                    ? j.x - l
                    : "velocity" === c
                    ? ds.getVelocity(e, I)
                    : a.left + a.width / 2 - (u.left + u.width / 2)),
                Y
                  ? r < 0
                    ? "counter-clockwise"
                    : "clockwise"
                  : ((n = n || 2),
                    (i =
                      "start" === c
                        ? j.y - h
                        : "velocity" === c
                        ? ds.getVelocity(e, z)
                        : a.top + a.height / 2 - (u.top + u.height / 2)),
                    (s =
                      (o = Math.abs(r / i)) < 1 / n
                        ? ""
                        : r < 0
                        ? "left"
                        : "right"),
                    o < n &&
                      ("" !== s && (s += "-"), (s += i < 0 ? "up" : "down")),
                    s)
              );
            }),
            (i.applyBounds = function (t, r) {
              var i, o, s, a, u, l;
              if (t && n.bounds !== t) return (n.bounds = t), j.update(!0, r);
              if ((ut(!0), ht(), c && !Dt())) {
                if (
                  ((i = j.x),
                  (o = j.y),
                  i > d ? (i = d) : i < g && (i = g),
                  o > D ? (o = D) : o < m && (o = m),
                  (j.x !== i || j.y !== o) &&
                    ((s = !0),
                    (j.x = j.endX = i),
                    Y ? (j.endRotation = i) : (j.y = j.endY = o),
                    (x = !0),
                    at(!0),
                    j.autoScroll && !j.isDragging))
                )
                  for (
                    na(e.parentNode),
                      a = e,
                      Ys.scrollTop =
                        null != Jo.pageYOffset
                          ? Jo.pageYOffset
                          : null != ot.documentElement.scrollTop
                          ? ot.documentElement.scrollTop
                          : ot.body.scrollTop,
                      Ys.scrollLeft =
                        null != Jo.pageXOffset
                          ? Jo.pageXOffset
                          : null != ot.documentElement.scrollLeft
                          ? ot.documentElement.scrollLeft
                          : ot.body.scrollLeft;
                    a && !l;

                  )
                    (u = (l = ta(a.parentNode)) ? Ys : a.parentNode),
                      W &&
                        u.scrollTop > u._gsMaxScrollY &&
                        (u.scrollTop = u._gsMaxScrollY),
                      H &&
                        u.scrollLeft > u._gsMaxScrollX &&
                        (u.scrollLeft = u._gsMaxScrollX),
                      (a = u);
                j.isThrowing &&
                  (s || j.endX > d || j.endX < g || j.endY > D || j.endY < m) &&
                  pt(n.inertia || n.throwProps, s);
              }
              return j;
            }),
            (i.update = function (t, n, r) {
              if (n && j.isPressed) {
                var i = Do(e),
                  o = N.apply({ x: j.x - l, y: j.y - h }),
                  s = Do(e.parentNode, !0);
                s.apply({ x: i.e - o.x, y: i.f - o.y }, o),
                  (j.x -= o.x - s.e),
                  (j.y -= o.y - s.f),
                  at(!0),
                  gt();
              }
              var a = j.x,
                u = j.y;
              return (
                dt(!n),
                t ? j.applyBounds() : (x && r && at(!0), ut(!0)),
                n && (yt(j.pointerX, j.pointerY), x && at(!0)),
                j.isPressed &&
                  !n &&
                  ((H && Math.abs(a - j.x) > 0.01) ||
                    (W && Math.abs(u - j.y) > 0.01 && !Y)) &&
                  gt(),
                j.autoScroll &&
                  (na(e.parentNode, j.isDragging),
                  (K = j.isDragging),
                  at(!0),
                  Js(e, wt),
                  $s(e, wt)),
                j
              );
            }),
            (i.enable = function (t) {
              var r,
                i,
                a,
                u = { lazy: !0 };
              if (
                (!1 !== n.cursor && (u.cursor = n.cursor || gs),
                $o.utils.checkPrefix("touchCallout") &&
                  (u.touchCallout = "none"),
                "soft" !== t)
              ) {
                for (
                  zs(
                    U,
                    H === W
                      ? "none"
                      : (n.allowNativeTouchScrolling &&
                          (e.scrollHeight === e.clientHeight) ==
                            (e.scrollWidth === e.clientHeight)) ||
                        n.allowEventDefault
                      ? "manipulation"
                      : H
                      ? "pan-y"
                      : "pan-x"
                  ),
                    i = U.length;
                  --i > -1;

                )
                  (a = U[i]),
                    Ds || js(a, "mousedown", vt),
                    js(a, "touchstart", vt),
                    js(a, "click", Ct, !0),
                    $o.set(a, u),
                    a.getBBox &&
                      a.ownerSVGElement &&
                      $o.set(a.ownerSVGElement, {
                        touchAction:
                          H === W
                            ? "none"
                            : n.allowNativeTouchScrolling || n.allowEventDefault
                            ? "manipulation"
                            : H
                            ? "pan-y"
                            : "pan-x",
                      }),
                    n.allowContextMenu || js(a, "contextmenu", st);
                pa(U, !1);
              }
              return (
                $s(e, wt),
                (o = !0),
                ds &&
                  "soft" !== t &&
                  ds.track(s || e, X ? "x,y" : Y ? "rotation" : "top,left"),
                (e._gsDragID = r = "d" + Ls++),
                (Bs[r] = j),
                s && (s.enable(), (s.element._gsDragID = r)),
                (n.bounds || Y) && gt(),
                n.bounds && j.applyBounds(),
                j
              );
            }),
            (i.disable = function (t) {
              for (var n, r = j.isDragging, i = U.length; --i > -1; )
                ra(U[i], "cursor", null);
              if ("soft" !== t) {
                for (zs(U, null), i = U.length; --i > -1; )
                  (n = U[i]),
                    ra(n, "touchCallout", null),
                    Us(n, "mousedown", vt),
                    Us(n, "touchstart", vt),
                    Us(n, "click", Ct),
                    Us(n, "contextmenu", st);
                pa(U, !0),
                  T &&
                    (Us(T, "touchcancel", xt),
                    Us(T, "touchend", xt),
                    Us(T, "touchmove", _t)),
                  Us(ot, "mouseup", xt),
                  Us(ot, "mousemove", _t);
              }
              return (
                Js(e, wt),
                (o = !1),
                ds &&
                  "soft" !== t &&
                  ds.untrack(s || e, X ? "x,y" : Y ? "rotation" : "top,left"),
                s && s.disable(),
                Vs(at),
                (j.isDragging = j.isPressed = b = !1),
                r && aa(j, "dragend", "onDragEnd"),
                j
              );
            }),
            (i.enabled = function (t, e) {
              return arguments.length ? (t ? j.enable(e) : j.disable(e)) : o;
            }),
            (i.kill = function () {
              return (
                (j.isThrowing = !1),
                j.tween && j.tween.kill(),
                j.disable(),
                $o.set(U, { clearProps: "userSelect" }),
                delete Bs[e._gsDragID],
                j
              );
            }),
            ~R.indexOf("scroll") &&
              ((s = i.scrollProxy =
                new da(
                  e,
                  (function (t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t;
                  })(
                    {
                      onKill: function () {
                        j.isPressed && xt(null);
                      },
                    },
                    n
                  )
                )),
              (e.style.overflowY = W && !ls ? "auto" : "hidden"),
              (e.style.overflowX = H && !ls ? "auto" : "hidden"),
              (e = s.content)),
            Y ? (q.rotation = 1) : (H && (q[I] = 1), W && (q[z] = 1)),
            (nt.force3D = !("force3D" in n) || n.force3D),
            i.enable(),
            i
          );
        }
        return (
          (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (r.register = function (t) {
            ($o = t), ga();
          }),
          (r.create = function (t, e) {
            return (
              os || ga(!0),
              as(t).map(function (t) {
                return new r(t, e);
              })
            );
          }),
          (r.get = function (t) {
            return Bs[(as(t)[0] || {})._gsDragID];
          }),
          (r.timeSinceDrag = function () {
            return (Os() - Rs) / 1e3;
          }),
          (r.hitTest = function (t, e, n) {
            if (t === e) return !1;
            var r,
              i,
              o,
              s = sa(t),
              a = sa(e),
              u = s.top,
              l = s.left,
              h = s.right,
              c = s.bottom,
              f = s.width,
              p = s.height,
              d = a.left > h || a.right < l || a.top > c || a.bottom < u;
            return d || !n
              ? !d
              : ((o = -1 !== (n + "").indexOf("%")),
                (n = parseFloat(n) || 0),
                ((r = {
                  left: Math.max(l, a.left),
                  top: Math.max(u, a.top),
                }).width = Math.min(h, a.right) - r.left),
                (r.height = Math.min(c, a.bottom) - r.top),
                !(r.width < 0 || r.height < 0) &&
                  (o
                    ? ((n *= 0.01),
                      (i = r.width * r.height) >= f * p * n ||
                        i >= a.width * a.height * n)
                    : r.width > n && r.height > n));
          }),
          r
        );
      })(
        (function () {
          function t(t) {
            (this._listeners = {}), (this.target = t || this);
          }
          var e = t.prototype;
          return (
            (e.addEventListener = function (t, e) {
              var n = this._listeners[t] || (this._listeners[t] = []);
              ~n.indexOf(e) || n.push(e);
            }),
            (e.removeEventListener = function (t, e) {
              var n = this._listeners[t],
                r = (n && n.indexOf(e)) || -1;
              r > -1 && n.splice(r, 1);
            }),
            (e.dispatchEvent = function (t) {
              var e,
                n = this;
              return (
                (this._listeners[t] || []).forEach(function (r) {
                  return (
                    !1 === r.call(n, { type: t, target: n.target }) && (e = !1)
                  );
                }),
                e
              );
            }),
            t
          );
        })()
      );
    !(function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
    })(Da.prototype, {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: !1,
      isPressed: !1,
    }),
      (Da.zIndex = 1e3),
      (Da.version = "3.9.1"),
      ys() && $o.registerPlugin(Da);
    /*!
     * VelocityTracker: 3.9.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ma,
      va,
      _a,
      ya,
      xa,
      wa,
      Ca,
      Fa,
      Ea = function () {
        return ma || ("undefined" != typeof window && (ma = window.gsap));
      },
      ba = {},
      Ta = function (t) {
        return Fa(t).id;
      },
      Ma = function (t) {
        return ba[Ta("string" == typeof t ? _a(t)[0] : t)];
      },
      Aa = function (t) {
        var e,
          n = xa;
        if (t - Ca >= 0.05)
          for (Ca, Ca = t; n; )
            ((e = n.g(n.t, n.p)) !== n.v1 || t - n.t1 > 0.2) &&
              ((n.v2 = n.v1), (n.v1 = e), (n.t2 = n.t1), (n.t1 = t)),
              (n = n._next);
      },
      Pa = { deg: 360, rad: 2 * Math.PI },
      Sa = function () {
        (ma = Ea()) &&
          ((_a = ma.utils.toArray),
          (ya = ma.utils.getUnit),
          (Fa = ma.core.getCache),
          (wa = ma.ticker),
          (va = 1));
      },
      Oa = function (t, e, n, r) {
        (this.t = t),
          (this.p = e),
          (this.g = t._gsap.get),
          (this.rCap = Pa[n || ya(this.g(t, e))]),
          (this.v1 = this.v2 = 0),
          (this.t1 = this.t2 = wa.time),
          r && ((this._next = r), (r._prev = this));
      },
      ka = (function () {
        function t(t, e) {
          va || Sa(),
            (this.target = _a(t)[0]),
            (ba[Ta(this.target)] = this),
            (this._props = {}),
            e && this.add(e);
        }
        t.register = function (t) {
          (ma = t), Sa();
        };
        var e = t.prototype;
        return (
          (e.get = function (t, e) {
            var n,
              r,
              i,
              o =
                this._props[t] ||
                console.warn("Not tracking " + t + " velocity.");
            return (
              (n = parseFloat(e ? o.v1 : o.g(o.t, o.p)) - parseFloat(o.v2)),
              (r = o.rCap) &&
                (n %= r) !== n % (r / 2) &&
                (n = n < 0 ? n + r : n - r),
              (i = n / ((e ? o.t1 : wa.time) - o.t2)),
              Math.round(1e4 * i) / 1e4
            );
          }),
          (e.getAll = function () {
            var t,
              e = {},
              n = this._props;
            for (t in n) e[t] = this.get(t);
            return e;
          }),
          (e.isTracking = function (t) {
            return t in this._props;
          }),
          (e.add = function (t, e) {
            t in this._props ||
              (xa || (wa.add(Aa), (Ca = wa.time)),
              (xa = this._props[t] = new Oa(this.target, t, e, xa)));
          }),
          (e.remove = function (t) {
            var e,
              n,
              r = this._props[t];
            r &&
              ((e = r._prev),
              (n = r._next),
              e && (e._next = n),
              n ? (n._prev = e) : xa === r && (wa.remove(Aa), (xa = 0)),
              delete this._props[t]);
          }),
          (e.kill = function (t) {
            for (var e in this._props) this.remove(e);
            t || delete ba[Ta(this.target)];
          }),
          (t.track = function (e, n, r) {
            va || Sa();
            for (
              var i,
                o,
                s = [],
                a = _a(e),
                u = n.split(","),
                l = (r || "").split(","),
                h = a.length;
              h--;

            ) {
              for (i = Ma(a[h]) || new t(a[h]), o = u.length; o--; )
                i.add(u[o], l[o] || l[0]);
              s.push(i);
            }
            return s;
          }),
          (t.untrack = function (t, e) {
            var n = (e || "").split(",");
            _a(t).forEach(function (t) {
              var e = Ma(t);
              e &&
                (n.length
                  ? n.forEach(function (t) {
                      return e.remove(t);
                    })
                  : e.kill(1));
            });
          }),
          (t.isTracking = function (t, e) {
            var n = Ma(t);
            return n && n.isTracking(e);
          }),
          (t.getVelocity = function (t, e) {
            var n = Ma(t);
            return n && n.isTracking(e)
              ? n.get(e)
              : console.warn("Not tracking velocity of " + e);
          }),
          t
        );
      })();
    (ka.getByTarget = Ma), Ea() && ma.registerPlugin(ka);
    /*!
     * InertiaPlugin 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ba,
      La,
      Na,
      Ra,
      Xa,
      Ya,
      Ia,
      za,
      Ha,
      Wa,
      Va,
      ja,
      Ua = ka.getByTarget,
      qa = function () {
        return (
          Ba ||
          ("undefined" != typeof window &&
            (Ba = window.gsap) &&
            Ba.registerPlugin &&
            Ba)
        );
      },
      Ga = function (t) {
        return "number" == typeof t;
      },
      Ka = function (t) {
        return "object" == typeof t;
      },
      Qa = function (t) {
        return "function" == typeof t;
      },
      Za = Array.isArray,
      $a = function (t) {
        return t;
      },
      Ja = function (t, e, n) {
        for (var r in e) r in t || r === n || (t[r] = e[r]);
        return t;
      },
      tu = function t(e) {
        var n,
          r,
          i = {};
        for (n in e) i[n] = Ka((r = e[n])) && !Za(r) ? t(r) : r;
        return i;
      },
      eu = function (t, e, n, r, i) {
        var o,
          s,
          a,
          u,
          l = e.length,
          h = 0,
          c = 1e10;
        if (Ka(t)) {
          for (; l--; ) {
            for (a in ((o = e[l]), (s = 0), t)) s += (u = o[a] - t[a]) * u;
            s < c && ((h = l), (c = s));
          }
          if ((i || 1e10) < 1e10 && i < Math.sqrt(c)) return t;
        } else
          for (; l--; )
            (s = (o = e[l]) - t) < 0 && (s = -s),
              s < c && o >= r && o <= n && ((h = l), (c = s));
        return e[h];
      },
      nu = function (t, e, n, r, i, o, s) {
        if ("auto" === t.end) return t;
        var a,
          u,
          l = t.end;
        if (((n = isNaN(n) ? 1e10 : n), (r = isNaN(r) ? -1e10 : r), Ka(e))) {
          if (
            ((a = e.calculated
              ? e
              : (Qa(l) ? l(e, s) : eu(e, l, n, r, o)) || e),
            !e.calculated)
          ) {
            for (u in a) e[u] = a[u];
            e.calculated = !0;
          }
          a = a[i];
        } else a = Qa(l) ? l(e, s) : Za(l) ? eu(e, l, n, r, o) : parseFloat(l);
        return (
          a > n ? (a = n) : a < r && (a = r),
          { max: a, min: a, unitFactor: t.unitFactor }
        );
      },
      ru = function (t, e, n) {
        return isNaN(t[e]) ? n : +t[e];
      },
      iu = function (t, e) {
        return (0.05 * e * t) / Wa;
      },
      ou = function (t, e, n) {
        return Math.abs(((e - t) * Wa) / n / 0.05);
      },
      su = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1,
      },
      au = function (t, e, n, r) {
        if (e.linkedProps) {
          var i,
            o,
            s,
            a,
            u,
            l,
            h = e.linkedProps.split(","),
            c = {};
          for (i = 0; i < h.length; i++)
            (s = e[(o = h[i])]) &&
              ((a = Ga(s.velocity)
                ? s.velocity
                : (u = u || Ua(t)) && u.isTracking(o)
                ? u.get(o)
                : 0),
              (l = Math.abs(a / ru(s, "resistance", r))),
              (c[o] = parseFloat(n(t, o)) + iu(a, l)));
          return c;
        }
      },
      uu = function () {
        (Ba = qa()) &&
          ((Na = Ba.parseEase),
          (Ra = Ba.utils.toArray),
          (Ia = Ba.utils.getUnit),
          (Ha = Ba.core.getCache),
          (Va = Ba.utils.clamp),
          (Xa = Na("power3")),
          (Wa = Xa(0.05)),
          (za = Ba.core.PropTween),
          Ba.config({
            resistance: 100,
            unitFactors: {
              time: 1e3,
              totalTime: 1e3,
              progress: 1e3,
              totalProgress: 1e3,
            },
          }),
          (Ya = Ba.config()),
          Ba.registerPlugin(ka),
          (La = 1));
      },
      lu = {
        version: "3.9.1",
        name: "inertia",
        register: function (t) {
          (Ba = t), uu();
        },
        init: function (t, e, n, r, i) {
          La || uu();
          var o = Ua(t);
          if ("auto" === e) {
            if (!o)
              return void console.warn(
                "No inertia tracking on " +
                  t +
                  ". InertiaPlugin.track(target) first."
              );
            e = o.getAll();
          }
          (this.target = t), (this.tween = n), (ja = e);
          var s,
            a,
            u,
            l,
            h,
            c,
            f,
            p,
            d,
            g = t._gsap,
            D = g.get,
            m = e.duration,
            v = Ka(m),
            _ = e.preventOvershoot || (v && 0 === m.overshoot),
            y = ru(e, "resistance", Ya.resistance),
            x = Ga(m)
              ? m
              : (function (t, e, n, r, i, o) {
                  if (
                    (void 0 === n && (n = 10),
                    void 0 === r && (r = 0.2),
                    void 0 === i && (i = 1),
                    void 0 === o && (o = 0),
                    "string" == typeof t && (t = Ra(t)[0]),
                    !t)
                  )
                    return 0;
                  var s,
                    a,
                    u,
                    l,
                    h,
                    c,
                    f,
                    p,
                    d,
                    g,
                    D = 0,
                    m = 1e10,
                    v = e.inertia || e,
                    _ = Ha(t).get,
                    y = ru(v, "resistance", Ya.resistance);
                  for (s in ((g = au(t, v, _, y)), v))
                    su[s] ||
                      ((a = v[s]),
                      Ka(a) ||
                        ((p = p || Ua(t)) && p.isTracking(s)
                          ? (a = Ga(a)
                              ? { velocity: a }
                              : { velocity: p.get(s) })
                          : ((l = +a || 0), (u = Math.abs(l / y)))),
                      Ka(a) &&
                        ((l = Ga(a.velocity)
                          ? a.velocity
                          : (p = p || Ua(t)) && p.isTracking(s)
                          ? p.get(s)
                          : 0),
                        (u = Va(r, n, Math.abs(l / ru(a, "resistance", y)))),
                        (c = (h = parseFloat(_(t, s)) || 0) + iu(l, u)),
                        "end" in a &&
                          ((a = nu(
                            a,
                            g && s in g ? g : c,
                            a.max,
                            a.min,
                            s,
                            v.radius,
                            l
                          )),
                          o &&
                            (ja === e && (ja = v = tu(e)),
                            (v[s] = Ja(a, v[s], "end")))),
                        "max" in a && c > +a.max + 1e-10
                          ? ((d = a.unitFactor || Ya.unitFactors[s] || 1),
                            (f =
                              (h > a.max && a.min !== a.max) ||
                              (l * d > -15 && l * d < 45)
                                ? r + 0.1 * (n - r)
                                : ou(h, a.max, l)) +
                              i <
                              m && (m = f + i))
                          : "min" in a &&
                            c < +a.min - 1e-10 &&
                            ((d = a.unitFactor || Ya.unitFactors[s] || 1),
                            (f =
                              (h < a.min && a.min !== a.max) ||
                              (l * d > -45 && l * d < 15)
                                ? r + 0.1 * (n - r)
                                : ou(h, a.min, l)) +
                              i <
                              m && (m = f + i)),
                        f > D && (D = f)),
                      u > D && (D = u));
                  return D > m && (D = m), D > n ? n : D < r ? r : D;
                })(
                  t,
                  e,
                  (v && m.max) || 10,
                  (v && m.min) || 0.2,
                  v && "overshoot" in m ? +m.overshoot : _ ? 0 : 1,
                  !0
                );
          for (s in ((e = ja), (ja = 0), (d = au(t, e, D, y)), e))
            su[s] ||
              ((a = e[s]),
              Qa(a) && (a = a(r, t, i)),
              Ga(a)
                ? (h = a)
                : Ka(a) && !isNaN(a.velocity)
                ? (h = +a.velocity)
                : o && o.isTracking(s)
                ? (h = o.get(s))
                : console.warn(
                    "ERROR: No velocity was defined for " +
                      t +
                      " property: " +
                      s
                  ),
              (c = iu(h, x)),
              (p = 0),
              (u = D(t, s)),
              (l = Ia(u)),
              (u = parseFloat(u)),
              Ka(a) &&
                ((f = u + c),
                "end" in a &&
                  (a = nu(
                    a,
                    d && s in d ? d : f,
                    a.max,
                    a.min,
                    s,
                    e.radius,
                    h
                  )),
                "max" in a && +a.max < f
                  ? _ || a.preventOvershoot
                    ? (c = a.max - u)
                    : (p = a.max - u - c)
                  : "min" in a &&
                    +a.min > f &&
                    (_ || a.preventOvershoot
                      ? (c = a.min - u)
                      : (p = a.min - u - c))),
              this._props.push(s),
              (this._pt = new za(
                this._pt,
                t,
                s,
                u,
                0,
                $a,
                0,
                g.set(t, s, this)
              )),
              (this._pt.u = l || 0),
              (this._pt.c1 = c),
              (this._pt.c2 = p));
          return n.duration(x), 1;
        },
        render: function (t, e) {
          var n,
            r = e._pt;
          for (t = Xa(e.tween._time / e.tween._dur); r; )
            r.set(
              r.t,
              r.p,
              ((n = r.s + r.c1 * t + r.c2 * t * t),
              Math.round(1e4 * n) / 1e4 + r.u),
              r.d,
              t
            ),
              (r = r._next);
        },
      };
    "track,untrack,isTracking,getVelocity,getByTarget"
      .split(",")
      .forEach(function (t) {
        return (lu[t] = ka[t]);
      }),
      qa() && Ba.registerPlugin(lu);
    /*!
     * strings: 3.9.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var hu =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.9.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var cu,
      fu,
      pu,
      du,
      gu = /(?:\r|\n|\t\t)/g,
      Du = /(?:\s\s+)/g,
      mu = function (t) {
        return fu.getComputedStyle(t);
      },
      vu = Array.isArray,
      _u = [].slice,
      yu = function (t, e) {
        var n;
        return vu(t)
          ? t
          : "string" == (n = typeof t) && !e && t
          ? _u.call(cu.querySelectorAll(t), 0)
          : t && "object" === n && "length" in t
          ? _u.call(t, 0)
          : t
          ? [t]
          : [];
      },
      xu = function (t) {
        return "absolute" === t.position || !0 === t.absolute;
      },
      wu = function (t, e) {
        for (var n, r = e.length; --r > -1; )
          if (((n = e[r]), t.substr(0, n.length) === n)) return n.length;
      },
      Cu = function (t, e) {
        void 0 === t && (t = "");
        var n = ~t.indexOf("++"),
          r = 1;
        return (
          n && (t = t.split("++").join("")),
          function () {
            return (
              "<" +
              e +
              " style='position:relative;display:inline-block;'" +
              (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
            );
          }
        );
      },
      Fu = function t(e, n, r) {
        var i = e.nodeType;
        if (1 === i || 9 === i || 11 === i)
          for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
        else
          (3 !== i && 4 !== i) || (e.nodeValue = e.nodeValue.split(n).join(r));
      },
      Eu = function (t, e) {
        for (var n = e.length; --n > -1; ) t.push(e[n]);
      },
      bu = function (t, e, n) {
        for (var r; t && t !== e; ) {
          if ((r = t._next || t.nextSibling))
            return r.textContent.charAt(0) === n;
          t = t.parentNode || t._parent;
        }
      },
      Tu = function t(e) {
        var n,
          r,
          i = yu(e.childNodes),
          o = i.length;
        for (n = 0; n < o; n++)
          (r = i[n])._isSplit
            ? t(r)
            : n && r.previousSibling && 3 === r.previousSibling.nodeType
            ? ((r.previousSibling.nodeValue +=
                3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue),
              e.removeChild(r))
            : 3 !== r.nodeType &&
              (e.insertBefore(r.firstChild, r), e.removeChild(r));
      },
      Mu = function (t, e) {
        return parseFloat(e[t]) || 0;
      },
      Au = function (t, e, n, r, i, o, s) {
        var a,
          u,
          l,
          h,
          c,
          f,
          p,
          d,
          g,
          D,
          m,
          v,
          _ = mu(t),
          y = Mu("paddingLeft", _),
          x = -999,
          w = Mu("borderBottomWidth", _) + Mu("borderTopWidth", _),
          C = Mu("borderLeftWidth", _) + Mu("borderRightWidth", _),
          F = Mu("paddingTop", _) + Mu("paddingBottom", _),
          E = Mu("paddingLeft", _) + Mu("paddingRight", _),
          b = Mu("fontSize", _) * (e.lineThreshold || 0.2),
          T = _.textAlign,
          M = [],
          A = [],
          P = [],
          S = e.wordDelimiter || " ",
          O = e.tag ? e.tag : e.span ? "span" : "div",
          k = e.type || e.split || "chars,words,lines",
          B = i && ~k.indexOf("lines") ? [] : null,
          L = ~k.indexOf("words"),
          N = ~k.indexOf("chars"),
          R = xu(e),
          X = e.linesClass,
          Y = ~(X || "").indexOf("++"),
          I = [],
          z = "flex" === _.display,
          H = t.style.display;
        for (
          Y && (X = X.split("++").join("")),
            z && (t.style.display = "block"),
            l = (u = t.getElementsByTagName("*")).length,
            c = [],
            a = 0;
          a < l;
          a++
        )
          c[a] = u[a];
        if (B || R)
          for (a = 0; a < l; a++)
            ((f = (h = c[a]).parentNode === t) || R || (N && !L)) &&
              ((v = h.offsetTop),
              B &&
                f &&
                Math.abs(v - x) > b &&
                ("BR" !== h.nodeName || 0 === a) &&
                ((p = []), B.push(p), (x = v)),
              R &&
                ((h._x = h.offsetLeft),
                (h._y = v),
                (h._w = h.offsetWidth),
                (h._h = h.offsetHeight)),
              B &&
                (((h._isSplit && f) ||
                  (!N && f) ||
                  (L && f) ||
                  (!L &&
                    h.parentNode.parentNode === t &&
                    !h.parentNode._isSplit)) &&
                  (p.push(h), (h._x -= y), bu(h, t, S) && (h._wordEnd = !0)),
                "BR" === h.nodeName &&
                  ((h.nextSibling && "BR" === h.nextSibling.nodeName) ||
                    0 === a) &&
                  B.push([])));
        for (a = 0; a < l; a++)
          if (((f = (h = c[a]).parentNode === t), "BR" !== h.nodeName))
            if (
              (R &&
                ((g = h.style),
                L ||
                  f ||
                  ((h._x += h.parentNode._x), (h._y += h.parentNode._y)),
                (g.left = h._x + "px"),
                (g.top = h._y + "px"),
                (g.position = "absolute"),
                (g.display = "block"),
                (g.width = h._w + 1 + "px"),
                (g.height = h._h + "px")),
              !L && N)
            )
              if (h._isSplit)
                for (
                  h._next = u = h.nextSibling, h.parentNode.appendChild(h);
                  u && 3 === u.nodeType && " " === u.textContent;

                )
                  (h._next = u.nextSibling),
                    h.parentNode.appendChild(u),
                    (u = u.nextSibling);
              else
                h.parentNode._isSplit
                  ? ((h._parent = h.parentNode),
                    !h.previousSibling &&
                      h.firstChild &&
                      (h.firstChild._isFirst = !0),
                    h.nextSibling &&
                      " " === h.nextSibling.textContent &&
                      !h.nextSibling.nextSibling &&
                      I.push(h.nextSibling),
                    (h._next =
                      h.nextSibling && h.nextSibling._isFirst
                        ? null
                        : h.nextSibling),
                    h.parentNode.removeChild(h),
                    c.splice(a--, 1),
                    l--)
                  : f ||
                    ((v = !h.nextSibling && bu(h.parentNode, t, S)),
                    h.parentNode._parent && h.parentNode._parent.appendChild(h),
                    v && h.parentNode.appendChild(cu.createTextNode(" ")),
                    "span" === O && (h.style.display = "inline"),
                    M.push(h));
            else
              h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML
                ? A.push(h)
                : N &&
                  !h._isSplit &&
                  ("span" === O && (h.style.display = "inline"), M.push(h));
          else
            B || R
              ? (h.parentNode && h.parentNode.removeChild(h),
                c.splice(a--, 1),
                l--)
              : L || t.appendChild(h);
        for (a = I.length; --a > -1; ) I[a].parentNode.removeChild(I[a]);
        if (B) {
          for (
            R &&
              ((D = cu.createElement(O)),
              t.appendChild(D),
              (m = D.offsetWidth + "px"),
              (v = D.offsetParent === t ? 0 : t.offsetLeft),
              t.removeChild(D)),
              g = t.style.cssText,
              t.style.cssText = "display:none;";
            t.firstChild;

          )
            t.removeChild(t.firstChild);
          for (d = " " === S && (!R || (!L && !N)), a = 0; a < B.length; a++) {
            for (
              p = B[a],
                (D = cu.createElement(O)).style.cssText =
                  "display:block;text-align:" +
                  T +
                  ";position:" +
                  (R ? "absolute;" : "relative;"),
                X && (D.className = X + (Y ? a + 1 : "")),
                P.push(D),
                l = p.length,
                u = 0;
              u < l;
              u++
            )
              "BR" !== p[u].nodeName &&
                ((h = p[u]),
                D.appendChild(h),
                d && h._wordEnd && D.appendChild(cu.createTextNode(" ")),
                R &&
                  (0 === u &&
                    ((D.style.top = h._y + "px"),
                    (D.style.left = y + v + "px")),
                  (h.style.top = "0px"),
                  v && (h.style.left = h._x - v + "px")));
            0 === l
              ? (D.innerHTML = "&nbsp;")
              : L || N || (Tu(D), Fu(D, String.fromCharCode(160), " ")),
              R && ((D.style.width = m), (D.style.height = h._h + "px")),
              t.appendChild(D);
          }
          t.style.cssText = g;
        }
        R &&
          (s > t.clientHeight &&
            ((t.style.height = s - F + "px"),
            t.clientHeight < s && (t.style.height = s + w + "px")),
          o > t.clientWidth &&
            ((t.style.width = o - E + "px"),
            t.clientWidth < o && (t.style.width = o + C + "px"))),
          z && (H ? (t.style.display = H) : t.style.removeProperty("display")),
          Eu(n, M),
          L && Eu(r, A),
          Eu(i, P);
      },
      Pu = function (t, e, n, r) {
        var i,
          o,
          s,
          a,
          u,
          l,
          h,
          c,
          f = e.tag ? e.tag : e.span ? "span" : "div",
          p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
          d = xu(e),
          g = e.wordDelimiter || " ",
          D = " " !== g ? "" : d ? "&#173; " : " ",
          m = "</" + f + ">",
          v = 1,
          _ = e.specialChars
            ? "function" == typeof e.specialChars
              ? e.specialChars
              : wu
            : null,
          y = cu.createElement("div"),
          x = t.parentNode;
        for (
          x.insertBefore(y, t),
            y.textContent = t.nodeValue,
            x.removeChild(t),
            h =
              -1 !==
              (i = (function t(e) {
                var n = e.nodeType,
                  r = "";
                if (1 === n || 9 === n || 11 === n) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) r += t(e);
                } else if (3 === n || 4 === n) return e.nodeValue;
                return r;
              })((t = y))).indexOf("<"),
            !1 !== e.reduceWhiteSpace &&
              (i = i.replace(Du, " ").replace(gu, "")),
            h && (i = i.split("<").join("{{LT}}")),
            u = i.length,
            o = (" " === i.charAt(0) ? D : "") + n(),
            s = 0;
          s < u;
          s++
        )
          if (((l = i.charAt(s)), _ && (c = _(i.substr(s), e.specialChars))))
            (l = i.substr(s, c || 1)),
              (o += p && " " !== l ? r() + l + "</" + f + ">" : l),
              (s += c - 1);
          else if (l === g && i.charAt(s - 1) !== g && s) {
            for (o += v ? m : "", v = 0; i.charAt(s + 1) === g; ) (o += D), s++;
            s === u - 1
              ? (o += D)
              : ")" !== i.charAt(s + 1) && ((o += D + n()), (v = 1));
          } else
            "{" === l && "{{LT}}" === i.substr(s, 6)
              ? ((o += p ? r() + "{{LT}}</" + f + ">" : "{{LT}}"), (s += 5))
              : (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319) ||
                (i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039)
              ? ((a = ((i.substr(s, 12).split(hu) || [])[1] || "").length || 2),
                (o +=
                  p && " " !== l
                    ? r() + i.substr(s, a) + "</" + f + ">"
                    : i.substr(s, a)),
                (s += a - 1))
              : (o += p && " " !== l ? r() + l + "</" + f + ">" : l);
        (t.outerHTML = o + (v ? m : "")), h && Fu(x, "{{LT}}", "<");
      },
      Su = function t(e, n, r, i) {
        var o,
          s,
          a = yu(e.childNodes),
          u = a.length,
          l = xu(n);
        if (3 !== e.nodeType || u > 1) {
          for (n.absolute = !1, o = 0; o < u; o++)
            ((s = a[o])._next = s._isFirst = s._parent = s._wordEnd = null),
              (3 !== s.nodeType || /\S+/.test(s.nodeValue)) &&
                (l &&
                  3 !== s.nodeType &&
                  "inline" === mu(s).display &&
                  ((s.style.display = "inline-block"),
                  (s.style.position = "relative")),
                (s._isSplit = !0),
                t(s, n, r, i));
          return (n.absolute = l), void (e._isSplit = !0);
        }
        Pu(e, n, r, i);
      },
      Ou = (function () {
        function t(t, e) {
          pu || ((cu = document), (fu = window), (pu = 1)),
            (this.elements = yu(t)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = e || {}),
            this.split(e);
        }
        var e = t.prototype;
        return (
          (e.split = function (t) {
            this.isSplit && this.revert(),
              (this.vars = t = t || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                  0);
            for (
              var e,
                n,
                r,
                i = this.elements.length,
                o = t.tag ? t.tag : t.span ? "span" : "div",
                s = Cu(t.wordsClass, o),
                a = Cu(t.charsClass, o);
              --i > -1;

            )
              (r = this.elements[i]),
                (this._originals[i] = r.innerHTML),
                (e = r.clientHeight),
                (n = r.clientWidth),
                Su(r, t, s, a),
                Au(r, t, this.chars, this.words, this.lines, n, e);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (e.revert = function () {
            var t = this._originals;
            if (!t) throw "revert() call wasn't scoped properly.";
            return (
              this.elements.forEach(function (e, n) {
                return (e.innerHTML = t[n]);
              }),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this.isSplit = !1),
              this
            );
          }),
          (t.create = function (e, n) {
            return new t(e, n);
          }),
          t
        );
      })();
    (Ou.version = "3.9.1"),
      vr.registerPlugin(Xe, _r, Me, Me, Fr, vi, Mi, Ki, Bo, Zo, dr, Da, lu);
    var ku = (du = window.punchgs = window.tpGS = {});
    for (var Bu in ((ku.gsap = vr),
    (ku.TweenLite = Xe),
    (ku.TweenMax = _r),
    (ku.TimelineLite = Me),
    (ku.TimelineMax = Me),
    (ku.CustomBounce = Fr),
    (ku.CustomEase = vi),
    (ku.CustomWiggle = Mi),
    (ku.DrawSVGPlugin = Ki),
    (ku.MotionPathPlugin = Bo),
    (ku.ScrollToPlugin = Zo),
    (ku.CSSPlugin = dr),
    (ku.draggable = Da),
    (ku.inertia = lu),
    /*! Map SplitText to tpGS TPGSSPLITTEXT */
    (ku.SplitText = Ou),
    (ku.RAD2DEG = 180 / Math.PI),
    (ku.DEG2RAD = Math.PI / 180),
    /*! REGISTER MOTION PATH (BEZIER) */
    ku.gsap.registerPlugin(ku.MotionPathPlugin),
    ku.gsap.config({ nullTargetWarn: !1 }),
    /*!FallBack for old and new Eases*/
    (ku.eases = ku.gsap.parseEase()),
    ku.eases))
      ku.eases.hasOwnProperty(Bu) &&
        void 0 === ku[Bu] &&
        (ku[Bu] = ku.eases[Bu]);
    /*! FallBack for Essential Grid */
    void 0 !== du &&
      void 0 !== du.TweenLite &&
      void 0 === du.TweenLite.lagSmoothing &&
      (du.TweenLite.lagSmoothing = function () {});
    var Lu = [];
    function Nu(t, e, n) {
      var r = document.createElement("canvas"),
        i = r.getContext("2d");
      if (((r.width = 100), (r.height = 200), 0 === t.length)) i.fillStyle = n;
      else {
        for (
          var o = i.createLinearGradient(0, 0, 100, 0), s = 0;
          s < t.length;
          s++
        )
          o.addColorStop(t[s].stop / 100, t[s].color);
        i.fillStyle = o;
      }
      i.fillRect(0, 0, 100, 200);
      var a = i.getImageData(0, 0, 100, 2).data,
        u = "";
      for (s = 0; s < e.length; s++) {
        var l = Math.ceil(e[s]),
          h = 4 * (0 !== l ? l - 1 : l);
        (u +=
          "rgba(" +
          a[h] +
          "," +
          a[h + 1] +
          "," +
          a[h + 2] +
          "," +
          a[h + 3] / 255 +
          ")"),
          (u += " " + l + (e.length - 1 === s ? "%" : "%,"));
      }
      return r.remove(), u;
    }
    function Ru(t, e, n, r) {
      for (
        var i = "",
          o = ku.gsap.utils.mapRange(0, r.length - 1, 0, t.length - 1),
          s = 0;
        s < r.length;
        s++
      ) {
        var a = Math.round(o(s));
        (i += t[a].color),
          (i += " " + t[a].stop + (r.length - 1 === s ? "%" : "%,"));
      }
      return i;
    }
    function Xu(t) {
      var e = /rgb([\s\S]*?)%/g,
        n = [],
        r = [],
        i = [];
      do {
        (s = e.exec(t)) && n.push(s[0]);
      } while (s);
      for (var o = 0; o < n.length; o++) {
        var s = n[o],
          a = ((t = /rgb([\s\S]*?)\)/.exec(s)), /\)([\s\S]*?)%/.exec(s));
        t[0] && (t = t[0]),
          a[1] && (a = a[1]),
          i.push(parseFloat(a)),
          r.push({ color: t, stop: parseFloat(a) });
      }
      return (
        0 === r.length &&
          (r.push({ color: t, stop: 0 }),
          i.push(0),
          r.push({ color: t, stop: 100 }),
          i.push(100)),
        { points: r, stops: i }
      );
    }
    ku.getSSGColors = function (t, e, n) {
      if (
        ((n = void 0 === n ? "fading" : n),
        -1 === t.indexOf("gradient") && -1 === e.indexOf("gradient"))
      )
        return { from: t, to: e };
      for (var r = { from: t, to: e }, i = 0; i < Lu.length; i++) {
        if (Lu[i].from === t && Lu[i].to === e && Lu[i].type === n)
          return { from: Lu[i].rFrom, to: Lu[i].rTo };
        if (Lu[i].from === e && Lu[i].to === t && Lu[i].type === n)
          return { from: Lu[i].rTo, to: Lu[i].rFrom };
      }
      var o = Xu(t),
        s = Xu(e);
      if (
        o.stops.length === s.stops.length &&
        -1 !== t.indexOf("gradient") &&
        -1 !== e.indexOf("gradient")
      )
        return { from: t, to: e };
      var a,
        u,
        l = o.stops;
      for (i = 0; i < s.stops.length; i++)
        -1 === l.indexOf(s.stops[i]) && l.push(s.stops[i]);
      if (
        (l.sort(function (t, e) {
          return t - e;
        }),
        -1 !== t.indexOf("gradient("))
      ) {
        var h =
          -1 !== t.indexOf("deg,")
            ? t.indexOf("deg,") + 4
            : -1 !== t.indexOf("at center,")
            ? t.indexOf("at center,") + 10
            : t.indexOf("gradient(") + 9;
        (a = t.substring(0, h)),
          -1 === e.indexOf("gradient(") && (u = t.substring(0, h));
      }
      if (-1 !== e.indexOf("gradient(")) {
        h =
          -1 !== e.indexOf("deg,")
            ? e.indexOf("deg,") + 4
            : -1 !== e.indexOf("at center,")
            ? e.indexOf("at center,") + 10
            : e.indexOf("gradient(") + 9;
        (u = e.substring(0, h)),
          -1 === t.indexOf("gradient(") && (a = e.substring(0, h));
      }
      return (
        "fading" === n
          ? (o.stops.length,
            s.stops.length,
            (a += Nu(o.points, l, t)),
            (u += Nu(s.points, l, e)))
          : "sliding" === n &&
            (o.stops.length > s.stops.length
              ? (u += Ru(s.points, l, e, o.points))
              : (a += Ru(o.points, l, t, s.points))),
        (a += ")"),
        (u += ")"),
        "sliding" === n &&
          (o.stops.length > s.stops.length ? (a = t) : (u = e)),
        (r.rFrom = a),
        (r.rTo = u),
        (r.tyep = n),
        Lu.push(r),
        { from: a, to: u }
      );
    };
  },
]);
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.tpGS = { loaded: true, version: "6.6.1" };
if (window.RS_MODULES.checkMinimal) window.RS_MODULES.checkMinimal();
