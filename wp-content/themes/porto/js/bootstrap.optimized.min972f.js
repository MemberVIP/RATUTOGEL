!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const n = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && n.push(i), (i = i.parentNode);
        return n;
      },
      prev(t, e) {
        let n = t.previousElementSibling;
        for (; n; ) {
          if (n.matches(e)) return [n];
          n = n.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let n = t.nextElementSibling;
        for (; n; ) {
          if (n.matches(e)) return [n];
          n = n.nextElementSibling;
        }
        return [];
      },
    },
    e = "transitionend",
    n = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    i = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let n = t.getAttribute("href");
        if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
          (e = n && "#" !== n ? n.trim() : null);
      }
      return e;
    },
    o = (t) => {
      const e = i(t);
      return e && document.querySelector(e) ? e : null;
    },
    s = (t) => {
      const e = i(t);
      return e ? document.querySelector(e) : null;
    },
    r = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    a = (e) =>
      r(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? t.findOne(e)
        : null,
    l = (t, n) => {
      let i = !1;
      const o = n + 5;
      t.addEventListener(e, function n() {
        (i = !0), t.removeEventListener(e, n);
      }),
        setTimeout(() => {
          i ||
            ((t) => {
              t.dispatchEvent(new Event(e));
            })(t);
        }, o);
    },
    c = (t, e, n) => {
      Object.keys(n).forEach((i) => {
        const o = n[i],
          s = e[i],
          a =
            s && r(s)
              ? "element"
              : null == (l = s)
              ? `${l}`
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(o).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${o}".`
          );
      });
    },
    f = (t) => {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        const e = getComputedStyle(t),
          n = getComputedStyle(t.parentNode);
        return (
          "none" !== e.display &&
          "none" !== n.display &&
          "hidden" !== e.visibility
        );
      }
      return !1;
    },
    p = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    d = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? d(t.parentNode)
        : null;
    },
    u = () => {},
    h = (t) => t.offsetHeight,
    g = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    m = () => "rtl" === document.documentElement.dir,
    _ = (t) => {
      var e;
      (e = () => {
        const e = g();
        if (e) {
          const n = t.NAME,
            i = e.fn[n];
          (e.fn[n] = t.jQueryInterface),
            (e.fn[n].Constructor = t),
            (e.fn[n].noConflict = () => ((e.fn[n] = i), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", e)
          : e();
    },
    b = (t) => {
      "function" == typeof t && t();
    },
    v = new Map();
  var y = {
    set(t, e, n) {
      v.has(t) || v.set(t, new Map());
      const i = v.get(t);
      i.has(e) || 0 === i.size
        ? i.set(e, n)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(i.keys())[0]
            }.`
          );
    },
    get: (t, e) => (v.has(t) && v.get(t).get(e)) || null,
    remove(t, e) {
      if (!v.has(t)) return;
      const n = v.get(t);
      n.delete(e), 0 === n.size && v.delete(t);
    },
  };
  const w = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    O = /::\d+$/,
    T = {};
  let A = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
    L = /^(mouseenter|mouseleave)/i,
    x = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function D(t, e) {
    return (e && `${e}::${A++}`) || t.uidEvent || A++;
  }
  function N(t) {
    const e = D(t);
    return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
  }
  function S(t, e, n = null) {
    const i = Object.keys(t);
    for (let o = 0, s = i.length; o < s; o++) {
      const s = t[i[o]];
      if (s.originalHandler === e && s.delegationSelector === n) return s;
    }
    return null;
  }
  function k(t, e, n) {
    const i = "string" == typeof e,
      o = i ? n : e;
    let s = P(t);
    return x.has(s) || (s = t), [i, o, s];
  }
  function j(t, e, n, i, o) {
    if ("string" != typeof e || !t) return;
    if ((n || ((n = i), (i = null)), L.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      i ? (i = t(i)) : (n = t(n));
    }
    const [s, r, a] = k(e, n, i),
      l = N(t),
      c = l[a] || (l[a] = {}),
      f = S(c, r, s ? n : null);
    if (f) return void (f.oneOff = f.oneOff && o);
    const p = D(r, e.replace(w, "")),
      d = s
        ? (function (t, e, n) {
            return function i(o) {
              const s = t.querySelectorAll(e);
              for (let { target: r } = o; r && r !== this; r = r.parentNode)
                for (let a = s.length; a--; )
                  if (s[a] === r)
                    return (
                      (o.delegateTarget = r),
                      i.oneOff && H.off(t, o.type, e, n),
                      n.apply(r, [o])
                    );
              return null;
            };
          })(t, n, i)
        : (function (t, e) {
            return function n(i) {
              return (
                (i.delegateTarget = t),
                n.oneOff && H.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, n);
    (d.delegationSelector = s ? n : null),
      (d.originalHandler = r),
      (d.oneOff = o),
      (d.uidEvent = p),
      (c[p] = d),
      t.addEventListener(a, d, s);
  }
  function M(t, e, n, i, o) {
    const s = S(e[n], i, o);
    s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent]);
  }
  function P(t) {
    return (t = t.replace(E, "")), C[t] || t;
  }
  const H = {
    on(t, e, n, i) {
      j(t, e, n, i, !1);
    },
    one(t, e, n, i) {
      j(t, e, n, i, !0);
    },
    off(t, e, n, i) {
      if ("string" != typeof e || !t) return;
      const [o, s, r] = k(e, n, i),
        a = r !== e,
        l = N(t),
        c = e.startsWith(".");
      if (void 0 !== s) {
        if (!l || !l[r]) return;
        return void M(t, l, r, s, o ? n : null);
      }
      c &&
        Object.keys(l).forEach((n) => {
          !(function (t, e, n, i) {
            const o = e[n] || {};
            Object.keys(o).forEach((s) => {
              if (s.includes(i)) {
                const i = o[s];
                M(t, e, n, i.originalHandler, i.delegationSelector);
              }
            });
          })(t, l, n, e.slice(1));
        });
      const f = l[r] || {};
      Object.keys(f).forEach((n) => {
        const i = n.replace(O, "");
        if (!a || e.includes(i)) {
          const e = f[n];
          M(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },
    trigger(t, e, n) {
      if ("string" != typeof e || !t) return null;
      const i = g(),
        o = P(e),
        s = e !== o,
        r = x.has(o);
      let a,
        l = !0,
        c = !0,
        f = !1,
        p = null;
      return (
        s &&
          i &&
          ((a = i.Event(e, n)),
          i(t).trigger(a),
          (l = !a.isPropagationStopped()),
          (c = !a.isImmediatePropagationStopped()),
          (f = a.isDefaultPrevented())),
        r
          ? ((p = document.createEvent("HTMLEvents")), p.initEvent(o, l, !0))
          : (p = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
        void 0 !== n &&
          Object.keys(n).forEach((t) => {
            Object.defineProperty(p, t, { get: () => n[t] });
          }),
        f && p.preventDefault(),
        c && t.dispatchEvent(p),
        p.defaultPrevented && void 0 !== a && a.preventDefault(),
        p
      );
    },
  };
  class I {
    constructor(t) {
      (t = a(t)) &&
        ((this._element = t),
        y.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      y.remove(this._element, this.constructor.DATA_KEY),
        H.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, n = !0) {
      if (!n) return void b(t);
      const i = ((t) => {
        if (!t) return 0;
        let { transitionDuration: e, transitionDelay: n } =
          window.getComputedStyle(t);
        const i = Number.parseFloat(e),
          o = Number.parseFloat(n);
        return i || o
          ? ((e = e.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (Number.parseFloat(e) + Number.parseFloat(n)))
          : 0;
      })(e);
      H.one(e, "transitionend", () => b(t)), l(e, i);
    }
    static getInstance(t) {
      return y.get(t, this.DATA_KEY);
    }
    static get VERSION() {
      return "5.0.1";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const $ = "bs.alert";
  class R extends I {
    static get NAME() {
      return "alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        n = this._triggerCloseEvent(e);
      null === n || n.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return s(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return H.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      t.classList.remove("show");
      const e = t.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(t), t, e);
    }
    _destroyElement(t) {
      t.parentNode && t.parentNode.removeChild(t),
        H.trigger(t, "closed.bs.alert");
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = y.get(this, $);
        e || (e = new R(this)), "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  H.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    R.handleDismiss(new R())
  ),
    _(R);
  const W = "bs.button",
    B = '[data-bs-toggle="button"]';
  class q extends I {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = y.get(this, W);
        e || (e = new q(this)), "toggle" === t && e[t]();
      });
    }
  }
  function U(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function z(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  H.on(document, "click.bs.button.data-api", B, (t) => {
    t.preventDefault();
    const e = t.target.closest(B);
    let n = y.get(e, W);
    n || (n = new q(e)), n.toggle();
  }),
    _(q);
  const F = {
      setDataAttribute(t, e, n) {
        t.setAttribute(`data-bs-${z(e)}`, n);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${z(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((n) => {
              let i = n.replace(/^bs/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = U(t.dataset[n]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => U(t.getAttribute(`data-bs-${z(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    K = "collapse",
    V = "bs.collapse",
    Y = { toggle: !0, parent: "" },
    Q = { toggle: "boolean", parent: "(string|element)" },
    G = "show",
    X = "collapse",
    Z = "collapsing",
    J = "collapsed",
    tt = "width",
    et = '[data-bs-toggle="collapse"]';
  class nt extends I {
    constructor(e, n) {
      super(e),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(n)),
        (this._triggerArray = t.find(
          `${et}[href="#${this._element.id}"],${et}[data-bs-target="#${this._element.id}"]`
        ));
      const i = t.find(et);
      for (let e = 0, n = i.length; e < n; e++) {
        const n = i[e],
          s = o(n),
          r = t.find(s).filter((t) => t === this._element);
        null !== s &&
          r.length &&
          ((this._selector = s), this._triggerArray.push(n));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return Y;
    }
    static get NAME() {
      return K;
    }
    toggle() {
      this._element.classList.contains(G) ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains(G)) return;
      let e, n;
      this._parent &&
        ((e = t
          .find(".show, .collapsing", this._parent)
          .filter((t) =>
            "string" == typeof this._config.parent
              ? t.getAttribute("data-bs-parent") === this._config.parent
              : t.classList.contains(X)
          )),
        0 === e.length && (e = null));
      const i = t.findOne(this._selector);
      if (e) {
        const t = e.find((t) => i !== t);
        if (((n = t ? y.get(t, V) : null), n && n._isTransitioning)) return;
      }
      if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e &&
        e.forEach((t) => {
          i !== t && nt.collapseInterface(t, "hide"), n || y.set(t, V, null);
        });
      const o = this._getDimension();
      this._element.classList.remove(X),
        this._element.classList.add(Z),
        (this._element.style[o] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove(J), t.setAttribute("aria-expanded", !0);
          }),
        this.setTransitioning(!0);
      const s = `scroll${o[0].toUpperCase() + o.slice(1)}`;
      this._queueCallback(
        () => {
          this._element.classList.remove(Z),
            this._element.classList.add(X, G),
            (this._element.style[o] = ""),
            this.setTransitioning(!1),
            H.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[o] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains(G)) return;
      if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        h(this._element),
        this._element.classList.add(Z),
        this._element.classList.remove(X, G);
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            n = s(e);
          n &&
            !n.classList.contains(G) &&
            (e.classList.add(J), e.setAttribute("aria-expanded", !1));
        }
      this.setTransitioning(!0);
      (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            this.setTransitioning(!1),
              this._element.classList.remove(Z),
              this._element.classList.add(X),
              H.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    _getConfig(t) {
      return ((t = { ...Y, ...t }).toggle = Boolean(t.toggle)), c(K, t, Q), t;
    }
    _getDimension() {
      return this._element.classList.contains(tt) ? tt : "height";
    }
    _getParent() {
      let { parent: e } = this._config;
      e = a(e);
      const n = `${et}[data-bs-parent="${e}"]`;
      return (
        t.find(n, e).forEach((t) => {
          const e = s(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        e
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const n = t.classList.contains(G);
      e.forEach((t) => {
        n ? t.classList.remove(J) : t.classList.add(J),
          t.setAttribute("aria-expanded", n);
      });
    }
    static collapseInterface(t, e) {
      let n = y.get(t, V);
      const i = {
        ...Y,
        ...F.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {}),
      };
      if (
        (!n &&
          i.toggle &&
          "string" == typeof e &&
          /show|hide/.test(e) &&
          (i.toggle = !1),
        n || (n = new nt(t, i)),
        "string" == typeof e)
      ) {
        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        nt.collapseInterface(this, t);
      });
    }
  }
  H.on(document, "click.bs.collapse.data-api", et, function (e) {
    ("A" === e.target.tagName ||
      (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
      e.preventDefault();
    const n = F.getDataAttributes(this),
      i = o(this);
    t.find(i).forEach((t) => {
      const e = y.get(t, V);
      let i;
      e
        ? (null === e._parent &&
            "string" == typeof n.parent &&
            ((e._config.parent = n.parent), (e._parent = e._getParent())),
          (i = "toggle"))
        : (i = n),
        nt.collapseInterface(t, i);
    });
  }),
    _(nt);
  var it = "top",
    ot = "bottom",
    st = "right",
    rt = "left",
    at = "auto",
    lt = [it, ot, st, rt],
    ct = "start",
    ft = "end",
    pt = "clippingParents",
    dt = "viewport",
    ut = "popper",
    ht = "reference",
    gt = lt.reduce(function (t, e) {
      return t.concat([e + "-" + ct, e + "-" + ft]);
    }, []),
    mt = [].concat(lt, [at]).reduce(function (t, e) {
      return t.concat([e, e + "-" + ct, e + "-" + ft]);
    }, []),
    _t = "beforeRead",
    bt = "read",
    vt = "afterRead",
    yt = "beforeMain",
    wt = "main",
    Et = "afterMain",
    Ot = "beforeWrite",
    Tt = "write",
    At = "afterWrite",
    Ct = [_t, bt, vt, yt, wt, Et, Ot, Tt, At];
  function Lt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function xt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Dt(t) {
    return t instanceof xt(t).Element || t instanceof Element;
  }
  function Nt(t) {
    return t instanceof xt(t).HTMLElement || t instanceof HTMLElement;
  }
  function St(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof xt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  var kt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var n = e.styles[t] || {},
          i = e.attributes[t] || {},
          o = e.elements[t];
        Nt(o) &&
          Lt(o) &&
          (Object.assign(o.style, n),
          Object.keys(i).forEach(function (t) {
            var e = i[t];
            !1 === e
              ? o.removeAttribute(t)
              : o.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, n.popper),
        (e.styles = n),
        e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var i = e.elements[t],
              o = e.attributes[t] || {},
              s = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            Nt(i) &&
              Lt(i) &&
              (Object.assign(i.style, s),
              Object.keys(o).forEach(function (t) {
                i.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function jt(t) {
    return t.split("-")[0];
  }
  function Mt(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function Pt(t) {
    var e = Mt(t),
      n = t.offsetWidth,
      i = t.offsetHeight;
    return (
      Math.abs(e.width - n) <= 1 && (n = e.width),
      Math.abs(e.height - i) <= 1 && (i = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
    );
  }
  function Ht(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && St(n)) {
      var i = e;
      do {
        if (i && t.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function It(t) {
    return xt(t).getComputedStyle(t);
  }
  function $t(t) {
    return ["table", "td", "th"].indexOf(Lt(t)) >= 0;
  }
  function Rt(t) {
    return (
      (Dt(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function Wt(t) {
    return "html" === Lt(t)
      ? t
      : t.assignedSlot || t.parentNode || (St(t) ? t.host : null) || Rt(t);
  }
  function Bt(t) {
    return Nt(t) && "fixed" !== It(t).position ? t.offsetParent : null;
  }
  function qt(t) {
    for (var e = xt(t), n = Bt(t); n && $t(n) && "static" === It(n).position; )
      n = Bt(n);
    return n &&
      ("html" === Lt(n) || ("body" === Lt(n) && "static" === It(n).position))
      ? e
      : n ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              Nt(t) &&
              "fixed" === It(t).position
            )
              return null;
            for (
              var n = Wt(t);
              Nt(n) && ["html", "body"].indexOf(Lt(n)) < 0;

            ) {
              var i = It(n);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (e && "filter" === i.willChange) ||
                (e && i.filter && "none" !== i.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Ut(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var zt = Math.max,
    Ft = Math.min,
    Kt = Math.round;
  function Vt(t, e, n) {
    return zt(t, Ft(e, n));
  }
  function Yt(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function Qt(t, e) {
    return e.reduce(function (e, n) {
      return (e[n] = t), e;
    }, {});
  }
  var Gt = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e,
          n = t.state,
          i = t.name,
          o = t.options,
          s = n.elements.arrow,
          r = n.modifiersData.popperOffsets,
          a = jt(n.placement),
          l = Ut(a),
          c = [rt, st].indexOf(a) >= 0 ? "height" : "width";
        if (s && r) {
          var f = (function (t, e) {
              return Yt(
                "number" !=
                  typeof (t =
                    "function" == typeof t
                      ? t(
                          Object.assign({}, e.rects, { placement: e.placement })
                        )
                      : t)
                  ? t
                  : Qt(t, lt)
              );
            })(o.padding, n),
            p = Pt(s),
            d = "y" === l ? it : rt,
            u = "y" === l ? ot : st,
            h =
              n.rects.reference[c] +
              n.rects.reference[l] -
              r[l] -
              n.rects.popper[c],
            g = r[l] - n.rects.reference[l],
            m = qt(s),
            _ = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
            b = h / 2 - g / 2,
            v = f[d],
            y = _ - p[c] - f[u],
            w = _ / 2 - p[c] / 2 + b,
            E = Vt(v, w, y),
            O = l;
          n.modifiersData[i] = (((e = {})[O] = E), (e.centerOffset = E - w), e);
        }
      },
      effect: function (t) {
        var e = t.state,
          n = t.options.element,
          i = void 0 === n ? "[data-popper-arrow]" : n;
        null != i &&
          ("string" != typeof i || (i = e.elements.popper.querySelector(i))) &&
          Ht(e.elements.popper, i) &&
          (e.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    Xt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Zt(t) {
    var e,
      n = t.popper,
      i = t.popperRect,
      o = t.placement,
      s = t.offsets,
      r = t.position,
      a = t.gpuAcceleration,
      l = t.adaptive,
      c = t.roundOffsets,
      f =
        !0 === c
          ? (function (t) {
              var e = t.x,
                n = t.y,
                i = window.devicePixelRatio || 1;
              return { x: Kt(Kt(e * i) / i) || 0, y: Kt(Kt(n * i) / i) || 0 };
            })(s)
          : "function" == typeof c
          ? c(s)
          : s,
      p = f.x,
      d = void 0 === p ? 0 : p,
      u = f.y,
      h = void 0 === u ? 0 : u,
      g = s.hasOwnProperty("x"),
      m = s.hasOwnProperty("y"),
      _ = rt,
      b = it,
      v = window;
    if (l) {
      var y = qt(n),
        w = "clientHeight",
        E = "clientWidth";
      y === xt(n) &&
        "static" !== It((y = Rt(n))).position &&
        ((w = "scrollHeight"), (E = "scrollWidth")),
        (y = y),
        o === it && ((b = ot), (h -= y[w] - i.height), (h *= a ? 1 : -1)),
        o === rt && ((_ = st), (d -= y[E] - i.width), (d *= a ? 1 : -1));
    }
    var O,
      T = Object.assign({ position: r }, l && Xt);
    return a
      ? Object.assign(
          {},
          T,
          (((O = {})[b] = m ? "0" : ""),
          (O[_] = g ? "0" : ""),
          (O.transform =
            (v.devicePixelRatio || 1) < 2
              ? "translate(" + d + "px, " + h + "px)"
              : "translate3d(" + d + "px, " + h + "px, 0)"),
          O)
        )
      : Object.assign(
          {},
          T,
          (((e = {})[b] = m ? h + "px" : ""),
          (e[_] = g ? d + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  var Jt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (t) {
        var e = t.state,
          n = t.options,
          i = n.gpuAcceleration,
          o = void 0 === i || i,
          s = n.adaptive,
          r = void 0 === s || s,
          a = n.roundOffsets,
          l = void 0 === a || a,
          c = {
            placement: jt(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: o,
          };
        null != e.modifiersData.popperOffsets &&
          (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            Zt(
              Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l,
              })
            )
          )),
          null != e.modifiersData.arrow &&
            (e.styles.arrow = Object.assign(
              {},
              e.styles.arrow,
              Zt(
                Object.assign({}, c, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: l,
                })
              )
            )),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
          }));
      },
      data: {},
    },
    te = { passive: !0 };
  var ee = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (t) {
        var e = t.state,
          n = t.instance,
          i = t.options,
          o = i.scroll,
          s = void 0 === o || o,
          r = i.resize,
          a = void 0 === r || r,
          l = xt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          s &&
            c.forEach(function (t) {
              t.addEventListener("scroll", n.update, te);
            }),
          a && l.addEventListener("resize", n.update, te),
          function () {
            s &&
              c.forEach(function (t) {
                t.removeEventListener("scroll", n.update, te);
              }),
              a && l.removeEventListener("resize", n.update, te);
          }
        );
      },
      data: {},
    },
    ne = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ie(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return ne[t];
    });
  }
  var oe = { start: "end", end: "start" };
  function se(t) {
    return t.replace(/start|end/g, function (t) {
      return oe[t];
    });
  }
  function re(t) {
    var e = xt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ae(t) {
    return Mt(Rt(t)).left + re(t).scrollLeft;
  }
  function le(t) {
    var e = It(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + i);
  }
  function ce(t) {
    return ["html", "body", "#document"].indexOf(Lt(t)) >= 0
      ? t.ownerDocument.body
      : Nt(t) && le(t)
      ? t
      : ce(Wt(t));
  }
  function fe(t, e) {
    var n;
    void 0 === e && (e = []);
    var i = ce(t),
      o = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
      s = xt(i),
      r = o ? [s].concat(s.visualViewport || [], le(i) ? i : []) : i,
      a = e.concat(r);
    return o ? a : a.concat(fe(Wt(r)));
  }
  function pe(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function de(t, e) {
    return e === dt
      ? pe(
          (function (t) {
            var e = xt(t),
              n = Rt(t),
              i = e.visualViewport,
              o = n.clientWidth,
              s = n.clientHeight,
              r = 0,
              a = 0;
            return (
              i &&
                ((o = i.width),
                (s = i.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = i.offsetLeft), (a = i.offsetTop))),
              { width: o, height: s, x: r + ae(t), y: a }
            );
          })(t)
        )
      : Nt(e)
      ? (function (t) {
          var e = Mt(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : pe(
          (function (t) {
            var e,
              n = Rt(t),
              i = re(t),
              o = null == (e = t.ownerDocument) ? void 0 : e.body,
              s = zt(
                n.scrollWidth,
                n.clientWidth,
                o ? o.scrollWidth : 0,
                o ? o.clientWidth : 0
              ),
              r = zt(
                n.scrollHeight,
                n.clientHeight,
                o ? o.scrollHeight : 0,
                o ? o.clientHeight : 0
              ),
              a = -i.scrollLeft + ae(t),
              l = -i.scrollTop;
            return (
              "rtl" === It(o || n).direction &&
                (a += zt(n.clientWidth, o ? o.clientWidth : 0) - s),
              { width: s, height: r, x: a, y: l }
            );
          })(Rt(t))
        );
  }
  function ue(t, e, n) {
    var i =
        "clippingParents" === e
          ? (function (t) {
              var e = fe(Wt(t)),
                n =
                  ["absolute", "fixed"].indexOf(It(t).position) >= 0 && Nt(t)
                    ? qt(t)
                    : t;
              return Dt(n)
                ? e.filter(function (t) {
                    return Dt(t) && Ht(t, n) && "body" !== Lt(t);
                  })
                : [];
            })(t)
          : [].concat(e),
      o = [].concat(i, [n]),
      s = o[0],
      r = o.reduce(function (e, n) {
        var i = de(t, n);
        return (
          (e.top = zt(i.top, e.top)),
          (e.right = Ft(i.right, e.right)),
          (e.bottom = Ft(i.bottom, e.bottom)),
          (e.left = zt(i.left, e.left)),
          e
        );
      }, de(t, s));
    return (
      (r.width = r.right - r.left),
      (r.height = r.bottom - r.top),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function he(t) {
    return t.split("-")[1];
  }
  function ge(t) {
    var e,
      n = t.reference,
      i = t.element,
      o = t.placement,
      s = o ? jt(o) : null,
      r = o ? he(o) : null,
      a = n.x + n.width / 2 - i.width / 2,
      l = n.y + n.height / 2 - i.height / 2;
    switch (s) {
      case it:
        e = { x: a, y: n.y - i.height };
        break;
      case ot:
        e = { x: a, y: n.y + n.height };
        break;
      case st:
        e = { x: n.x + n.width, y: l };
        break;
      case rt:
        e = { x: n.x - i.width, y: l };
        break;
      default:
        e = { x: n.x, y: n.y };
    }
    var c = s ? Ut(s) : null;
    if (null != c) {
      var f = "y" === c ? "height" : "width";
      switch (r) {
        case ct:
          e[c] = e[c] - (n[f] / 2 - i[f] / 2);
          break;
        case ft:
          e[c] = e[c] + (n[f] / 2 - i[f] / 2);
      }
    }
    return e;
  }
  function me(t, e) {
    void 0 === e && (e = {});
    var n = e,
      i = n.placement,
      o = void 0 === i ? t.placement : i,
      s = n.boundary,
      r = void 0 === s ? pt : s,
      a = n.rootBoundary,
      l = void 0 === a ? dt : a,
      c = n.elementContext,
      f = void 0 === c ? ut : c,
      p = n.altBoundary,
      d = void 0 !== p && p,
      u = n.padding,
      h = void 0 === u ? 0 : u,
      g = Yt("number" != typeof h ? h : Qt(h, lt)),
      m = f === ut ? ht : ut,
      _ = t.elements.reference,
      b = t.rects.popper,
      v = t.elements[d ? m : f],
      y = ue(Dt(v) ? v : v.contextElement || Rt(t.elements.popper), r, l),
      w = Mt(_),
      E = ge({ reference: w, element: b, strategy: "absolute", placement: o }),
      O = pe(Object.assign({}, b, E)),
      T = f === ut ? O : w,
      A = {
        top: y.top - T.top + g.top,
        bottom: T.bottom - y.bottom + g.bottom,
        left: y.left - T.left + g.left,
        right: T.right - y.right + g.right,
      },
      C = t.modifiersData.offset;
    if (f === ut && C) {
      var L = C[o];
      Object.keys(A).forEach(function (t) {
        var e = [st, ot].indexOf(t) >= 0 ? 1 : -1,
          n = [it, ot].indexOf(t) >= 0 ? "y" : "x";
        A[t] += L[n] * e;
      });
    }
    return A;
  }
  function _e(t, e) {
    void 0 === e && (e = {});
    var n = e,
      i = n.placement,
      o = n.boundary,
      s = n.rootBoundary,
      r = n.padding,
      a = n.flipVariations,
      l = n.allowedAutoPlacements,
      c = void 0 === l ? mt : l,
      f = he(i),
      p = f
        ? a
          ? gt
          : gt.filter(function (t) {
              return he(t) === f;
            })
        : lt,
      d = p.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === d.length && (d = p);
    var u = d.reduce(function (e, n) {
      return (
        (e[n] = me(t, {
          placement: n,
          boundary: o,
          rootBoundary: s,
          padding: r,
        })[jt(n)]),
        e
      );
    }, {});
    return Object.keys(u).sort(function (t, e) {
      return u[t] - u[e];
    });
  }
  var be = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = t.name;
      if (!e.modifiersData[i]._skip) {
        for (
          var o = n.mainAxis,
            s = void 0 === o || o,
            r = n.altAxis,
            a = void 0 === r || r,
            l = n.fallbackPlacements,
            c = n.padding,
            f = n.boundary,
            p = n.rootBoundary,
            d = n.altBoundary,
            u = n.flipVariations,
            h = void 0 === u || u,
            g = n.allowedAutoPlacements,
            m = e.options.placement,
            _ = jt(m),
            b =
              l ||
              (_ === m || !h
                ? [ie(m)]
                : (function (t) {
                    if (jt(t) === at) return [];
                    var e = ie(t);
                    return [se(t), e, se(e)];
                  })(m)),
            v = [m].concat(b).reduce(function (t, n) {
              return t.concat(
                jt(n) === at
                  ? _e(e, {
                      placement: n,
                      boundary: f,
                      rootBoundary: p,
                      padding: c,
                      flipVariations: h,
                      allowedAutoPlacements: g,
                    })
                  : n
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            O = !0,
            T = v[0],
            A = 0;
          A < v.length;
          A++
        ) {
          var C = v[A],
            L = jt(C),
            x = he(C) === ct,
            D = [it, ot].indexOf(L) >= 0,
            N = D ? "width" : "height",
            S = me(e, {
              placement: C,
              boundary: f,
              rootBoundary: p,
              altBoundary: d,
              padding: c,
            }),
            k = D ? (x ? st : rt) : x ? ot : it;
          y[N] > w[N] && (k = ie(k));
          var j = ie(k),
            M = [];
          if (
            (s && M.push(S[L] <= 0),
            a && M.push(S[k] <= 0, S[j] <= 0),
            M.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (O = !1);
            break;
          }
          E.set(C, M);
        }
        if (O)
          for (
            var P = function (t) {
                var e = v.find(function (e) {
                  var n = E.get(e);
                  if (n)
                    return n.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              H = h ? 3 : 1;
            H > 0;
            H--
          ) {
            if ("break" === P(H)) break;
          }
        e.placement !== T &&
          ((e.modifiersData[i]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function ve(t, e, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: t.top - e.height - n.y,
        right: t.right - e.width + n.x,
        bottom: t.bottom - e.height + n.y,
        left: t.left - e.width - n.x,
      }
    );
  }
  function ye(t) {
    return [it, st, ot, rt].some(function (e) {
      return t[e] >= 0;
    });
  }
  var we = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (t) {
      var e = t.state,
        n = t.name,
        i = e.rects.reference,
        o = e.rects.popper,
        s = e.modifiersData.preventOverflow,
        r = me(e, { elementContext: "reference" }),
        a = me(e, { altBoundary: !0 }),
        l = ve(r, i),
        c = ve(a, o, s),
        f = ye(l),
        p = ye(c);
      (e.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: f,
        hasPopperEscaped: p,
      }),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": f,
          "data-popper-escaped": p,
        }));
    },
  };
  var Ee = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = t.name,
        o = n.offset,
        s = void 0 === o ? [0, 0] : o,
        r = mt.reduce(function (t, n) {
          return (
            (t[n] = (function (t, e, n) {
              var i = jt(t),
                o = [rt, it].indexOf(i) >= 0 ? -1 : 1,
                s =
                  "function" == typeof n
                    ? n(Object.assign({}, e, { placement: t }))
                    : n,
                r = s[0],
                a = s[1];
              return (
                (r = r || 0),
                (a = (a || 0) * o),
                [rt, st].indexOf(i) >= 0 ? { x: a, y: r } : { x: r, y: a }
              );
            })(n, e.rects, s)),
            t
          );
        }, {}),
        a = r[e.placement],
        l = a.x,
        c = a.y;
      null != e.modifiersData.popperOffsets &&
        ((e.modifiersData.popperOffsets.x += l),
        (e.modifiersData.popperOffsets.y += c)),
        (e.modifiersData[i] = r);
    },
  };
  var Oe = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (t) {
      var e = t.state,
        n = t.name;
      e.modifiersData[n] = ge({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement,
      });
    },
    data: {},
  };
  var Te = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        n = t.options,
        i = t.name,
        o = n.mainAxis,
        s = void 0 === o || o,
        r = n.altAxis,
        a = void 0 !== r && r,
        l = n.boundary,
        c = n.rootBoundary,
        f = n.altBoundary,
        p = n.padding,
        d = n.tether,
        u = void 0 === d || d,
        h = n.tetherOffset,
        g = void 0 === h ? 0 : h,
        m = me(e, { boundary: l, rootBoundary: c, padding: p, altBoundary: f }),
        _ = jt(e.placement),
        b = he(e.placement),
        v = !b,
        y = Ut(_),
        w = "x" === y ? "y" : "x",
        E = e.modifiersData.popperOffsets,
        O = e.rects.reference,
        T = e.rects.popper,
        A =
          "function" == typeof g
            ? g(Object.assign({}, e.rects, { placement: e.placement }))
            : g,
        C = { x: 0, y: 0 };
      if (E) {
        if (s || a) {
          var L = "y" === y ? it : rt,
            x = "y" === y ? ot : st,
            D = "y" === y ? "height" : "width",
            N = E[y],
            S = E[y] + m[L],
            k = E[y] - m[x],
            j = u ? -T[D] / 2 : 0,
            M = b === ct ? O[D] : T[D],
            P = b === ct ? -T[D] : -O[D],
            H = e.elements.arrow,
            I = u && H ? Pt(H) : { width: 0, height: 0 },
            $ = e.modifiersData["arrow#persistent"]
              ? e.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            R = $[L],
            W = $[x],
            B = Vt(0, O[D], I[D]),
            q = v ? O[D] / 2 - j - B - R - A : M - B - R - A,
            U = v ? -O[D] / 2 + j + B + W + A : P + B + W + A,
            z = e.elements.arrow && qt(e.elements.arrow),
            F = z ? ("y" === y ? z.clientTop || 0 : z.clientLeft || 0) : 0,
            K = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement][y]
              : 0,
            V = E[y] + q - K - F,
            Y = E[y] + U - K;
          if (s) {
            var Q = Vt(u ? Ft(S, V) : S, N, u ? zt(k, Y) : k);
            (E[y] = Q), (C[y] = Q - N);
          }
          if (a) {
            var G = "x" === y ? it : rt,
              X = "x" === y ? ot : st,
              Z = E[w],
              J = Z + m[G],
              tt = Z - m[X],
              et = Vt(u ? Ft(J, V) : J, Z, u ? zt(tt, Y) : tt);
            (E[w] = et), (C[w] = et - Z);
          }
        }
        e.modifiersData[i] = C;
      }
    },
    requiresIfExists: ["offset"],
  };
  function Ae(t, e, n) {
    void 0 === n && (n = !1);
    var i,
      o,
      s = Rt(e),
      r = Mt(t),
      a = Nt(e),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (a || (!a && !n)) &&
        (("body" !== Lt(e) || le(s)) &&
          (l =
            (i = e) !== xt(i) && Nt(i)
              ? { scrollLeft: (o = i).scrollLeft, scrollTop: o.scrollTop }
              : re(i)),
        Nt(e)
          ? (((c = Mt(e)).x += e.clientLeft), (c.y += e.clientTop))
          : s && (c.x = ae(s))),
      {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height,
      }
    );
  }
  function Ce(t) {
    var e = new Map(),
      n = new Set(),
      i = [];
    function o(t) {
      n.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!n.has(t)) {
              var i = e.get(t);
              i && o(i);
            }
          }),
        i.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        n.has(t.name) || o(t);
      }),
      i
    );
  }
  var Le = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function xe() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function De(t) {
    void 0 === t && (t = {});
    var e = t,
      n = e.defaultModifiers,
      i = void 0 === n ? [] : n,
      o = e.defaultOptions,
      s = void 0 === o ? Le : o;
    return function (t, e, n) {
      void 0 === n && (n = s);
      var o,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Le, s),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        f = {
          state: a,
          setOptions: function (n) {
            p(),
              (a.options = Object.assign({}, s, a.options, n)),
              (a.scrollParents = {
                reference: Dt(t)
                  ? fe(t)
                  : t.contextElement
                  ? fe(t.contextElement)
                  : [],
                popper: fe(e),
              });
            var o,
              r,
              c = (function (t) {
                var e = Ce(t);
                return Ct.reduce(function (t, n) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === n;
                    })
                  );
                }, []);
              })(
                ((o = [].concat(i, a.options.modifiers)),
                (r = o.reduce(function (t, e) {
                  var n = t[e.name];
                  return (
                    (t[e.name] = n
                      ? Object.assign({}, n, e, {
                          options: Object.assign({}, n.options, e.options),
                          data: Object.assign({}, n.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(r).map(function (t) {
                  return r[t];
                }))
              );
            return (
              (a.orderedModifiers = c.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  n = t.options,
                  i = void 0 === n ? {} : n,
                  o = t.effect;
                if ("function" == typeof o) {
                  var s = o({ state: a, name: e, instance: f, options: i }),
                    r = function () {};
                  l.push(s || r);
                }
              }),
              f.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                n = t.popper;
              if (xe(e, n)) {
                (a.rects = {
                  reference: Ae(e, qt(n), "fixed" === a.options.strategy),
                  popper: Pt(n),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var i = 0; i < a.orderedModifiers.length; i++)
                  if (!0 !== a.reset) {
                    var o = a.orderedModifiers[i],
                      s = o.fn,
                      r = o.options,
                      l = void 0 === r ? {} : r,
                      p = o.name;
                    "function" == typeof s &&
                      (a =
                        s({ state: a, options: l, name: p, instance: f }) || a);
                  } else (a.reset = !1), (i = -1);
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (t) {
                f.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(o());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            p(), (c = !0);
          },
        };
      if (!xe(t, e)) return f;
      function p() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        f.setOptions(n).then(function (t) {
          !c && n.onFirstUpdate && n.onFirstUpdate(t);
        }),
        f
      );
    };
  }
  var Ne = De(),
    Se = De({ defaultModifiers: [ee, Oe, Jt, kt] }),
    ke = De({ defaultModifiers: [ee, Oe, Jt, kt, Ee, be, Te, Gt, we] }),
    je = Object.freeze({
      __proto__: null,
      popperGenerator: De,
      detectOverflow: me,
      createPopperBase: Ne,
      createPopper: ke,
      createPopperLite: Se,
      top: it,
      bottom: ot,
      right: st,
      left: rt,
      auto: at,
      basePlacements: lt,
      start: ct,
      end: ft,
      clippingParents: pt,
      viewport: dt,
      popper: ut,
      reference: ht,
      variationPlacements: gt,
      placements: mt,
      beforeRead: _t,
      read: bt,
      afterRead: vt,
      beforeMain: yt,
      main: wt,
      afterMain: Et,
      beforeWrite: Ot,
      write: Tt,
      afterWrite: At,
      modifierPhases: Ct,
      applyStyles: kt,
      arrow: Gt,
      computeStyles: Jt,
      eventListeners: ee,
      flip: be,
      hide: we,
      offset: Ee,
      popperOffsets: Oe,
      preventOverflow: Te,
    });
  const Me = "dropdown",
    Pe = "bs.dropdown",
    He = "Escape",
    Ie = "Space",
    $e = "ArrowUp",
    Re = "ArrowDown",
    We = new RegExp("ArrowUp|ArrowDown|Escape"),
    Be = "click.bs.dropdown.data-api",
    qe = "keydown.bs.dropdown.data-api",
    Ue = "show",
    ze = '[data-bs-toggle="dropdown"]',
    Fe = ".dropdown-menu",
    Ke = m() ? "top-end" : "top-start",
    Ve = m() ? "top-start" : "top-end",
    Ye = m() ? "bottom-end" : "bottom-start",
    Qe = m() ? "bottom-start" : "bottom-end",
    Ge = m() ? "left-start" : "right-start",
    Xe = m() ? "right-start" : "left-start",
    Ze = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    Je = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class tn extends I {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return Ze;
    }
    static get DefaultType() {
      return Je;
    }
    static get NAME() {
      return Me;
    }
    toggle() {
      if (p(this._element)) return;
      this._element.classList.contains(Ue) ? this.hide() : this.show();
    }
    show() {
      if (p(this._element) || this._menu.classList.contains(Ue)) return;
      const t = tn.getParentFromElement(this._element),
        e = { relatedTarget: this._element };
      if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) F.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === je)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = t)
            : r(this._config.reference)
            ? (e = a(this._config.reference))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const n = this._getPopperConfig(),
            i = n.modifiers.find(
              (t) => "applyStyles" === t.name && !1 === t.enabled
            );
          (this._popper = ke(e, this._menu, n)),
            i && F.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => H.on(t, "mouseover", u)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.toggle(Ue),
          this._element.classList.toggle(Ue),
          H.trigger(this._element, "shown.bs.dropdown", e);
      }
    }
    hide() {
      if (p(this._element) || !this._menu.classList.contains(Ue)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      H.on(this._element, "click.bs.dropdown", (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _completeHide(t) {
      H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => H.off(t, "mouseover", u)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(Ue),
        this._element.classList.remove(Ue),
        this._element.setAttribute("aria-expanded", "false"),
        F.removeDataAttribute(this._menu, "popper"),
        H.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...F.getDataAttributes(this._element),
          ...t,
        }),
        c(Me, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !r(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${Me.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _getMenuElement() {
      return t.next(this._element, Fe)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return Ge;
      if (t.classList.contains("dropstart")) return Xe;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? Ve : Ke) : e ? Qe : Ye;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem(e) {
      const n = t
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(f);
      if (!n.length) return;
      let i = n.indexOf(e.target);
      e.key === $e && i > 0 && i--,
        e.key === Re && i < n.length - 1 && i++,
        (i = -1 === i ? 0 : i),
        n[i].focus();
    }
    static dropdownInterface(t, e) {
      let n = y.get(t, Pe);
      if (
        (n || (n = new tn(t, "object" == typeof e ? e : null)),
        "string" == typeof e)
      ) {
        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        tn.dropdownInterface(this, t);
      });
    }
    static clearMenus(e) {
      if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
        return;
      const n = t.find(ze);
      for (let t = 0, i = n.length; t < i; t++) {
        const i = y.get(n[t], Pe);
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._element.classList.contains(Ue)) continue;
        const o = { relatedTarget: i._element };
        if (e) {
          const t = e.composedPath(),
            n = t.includes(i._menu);
          if (
            t.includes(i._element) ||
            ("inside" === i._config.autoClose && !n) ||
            ("outside" === i._config.autoClose && n)
          )
            continue;
          if (
            i._menu.contains(e.target) &&
            (("keyup" === e.type && "Tab" === e.key) ||
              /input|select|option|textarea|form/i.test(e.target.tagName))
          )
            continue;
          "click" === e.type && (o.clickEvent = e);
        }
        i._completeHide(o);
      }
    }
    static getParentFromElement(t) {
      return s(t) || t.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (
        /input|textarea/i.test(e.target.tagName)
          ? e.key === Ie ||
            (e.key !== He &&
              ((e.key !== Re && e.key !== $e) || e.target.closest(Fe)))
          : !We.test(e.key)
      )
        return;
      const n = this.classList.contains(Ue);
      if (!n && e.key === He) return;
      if ((e.preventDefault(), e.stopPropagation(), p(this))) return;
      const i = () => (this.matches(ze) ? this : t.prev(this, ze)[0]);
      if (e.key === He) return i().focus(), void tn.clearMenus();
      n || (e.key !== $e && e.key !== Re)
        ? n && e.key !== Ie
          ? tn.getInstance(i())._selectMenuItem(e)
          : tn.clearMenus()
        : i().click();
    }
  }
  H.on(document, qe, ze, tn.dataApiKeydownHandler),
    H.on(document, qe, Fe, tn.dataApiKeydownHandler),
    H.on(document, Be, tn.clearMenus),
    H.on(document, "keyup.bs.dropdown.data-api", tn.clearMenus),
    H.on(document, Be, ze, function (t) {
      t.preventDefault(), tn.dropdownInterface(this);
    }),
    _(tn);
  const en = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    nn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    on =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    sn = (t, e) => {
      const n = t.nodeName.toLowerCase();
      if (e.includes(n))
        return (
          !en.has(n) || Boolean(nn.test(t.nodeValue) || on.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(n)) return !0;
      return !1;
    },
    rn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    };
  function an(t, e, n) {
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"),
      o = Object.keys(e),
      s = [].concat(...i.body.querySelectorAll("*"));
    for (let t = 0, n = s.length; t < n; t++) {
      const n = s[t],
        i = n.nodeName.toLowerCase();
      if (!o.includes(i)) {
        n.parentNode.removeChild(n);
        continue;
      }
      const r = [].concat(...n.attributes),
        a = [].concat(e["*"] || [], e[i] || []);
      r.forEach((t) => {
        sn(t, a) || n.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const ln = "tooltip",
    cn = "bs.tooltip",
    fn = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    pn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    dn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    un = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: m() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: m() ? "right" : "left",
    },
    hn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: rn,
      popperConfig: null,
    },
    gn = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    mn = "fade",
    _n = "show",
    bn = "show",
    vn = "out",
    yn = "hover",
    wn = "focus";
  class En extends I {
    constructor(t, e) {
      if (void 0 === je)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return hn;
    }
    static get NAME() {
      return ln;
    }
    static get Event() {
      return gn;
    }
    static get DefaultType() {
      return dn;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(_n))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        H.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip &&
          this.tip.parentNode &&
          this.tip.parentNode.removeChild(this.tip),
        this._popper && this._popper.destroy(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = H.trigger(this._element, this.constructor.Event.SHOW),
        e = d(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      const o = this.getTipElement(),
        s = n(this.constructor.NAME);
      o.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this.setContent(),
        this._config.animation && o.classList.add(mn);
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, o, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      y.set(o, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.appendChild(o),
          H.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = ke(this._element, o, this._getPopperConfig(a))),
        o.classList.add(_n);
      const c =
        "function" == typeof this._config.customClass
          ? this._config.customClass()
          : this._config.customClass;
      c && o.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            H.on(t, "mouseover", u);
          });
      const f = this.tip.classList.contains(mn);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            H.trigger(this._element, this.constructor.Event.SHOWN),
            t === vn && this._leave(null, this);
        },
        this.tip,
        f
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(_n),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => H.off(t, "mouseover", u)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains(mn);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== bn &&
              t.parentNode &&
              t.parentNode.removeChild(t),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            H.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (
        (t.innerHTML = this._config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const e = this.getTipElement();
      this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()),
        e.classList.remove(mn, _n);
    }
    setElementContent(t, e) {
      if (null !== t)
        return r(e)
          ? ((e = a(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = an(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (
        t ||
          (t =
            "function" == typeof this._config.title
              ? this._config.title.call(this._element)
              : this._config.title),
        t
      );
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const n = this.constructor.DATA_KEY;
      return (
        (e = e || y.get(t.delegateTarget, n)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          y.set(t.delegateTarget, n, e)),
        e
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `bs-tooltip-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return un[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          H.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === yn
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            n =
              t === yn
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          H.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            H.on(this._element, n, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        H.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? wn : yn] = !0),
        e.getTipElement().classList.contains(_n) || e._hoverState === bn
          ? (e._hoverState = bn)
          : (clearTimeout(e._timeout),
            (e._hoverState = bn),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === bn && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? wn : yn] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = vn),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === vn && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = F.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          pn.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : a(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        c(ln, t, this.constructor.DefaultType),
        t.sanitize && (t.template = an(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this._config)
        for (const e in this._config)
          this.constructor.Default[e] !== this._config[e] &&
            (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(fn);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = y.get(this, cn);
        const n = "object" == typeof t && t;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || (e = new En(this, n)), "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  _(En);
  const On = "bs.popover",
    Tn = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    An = {
      ...En.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    Cn = { ...En.DefaultType, content: "(string|element|function)" },
    Ln = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class xn extends En {
    static get Default() {
      return An;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return Ln;
    }
    static get DefaultType() {
      return Cn;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent() {
      const e = this.getTipElement();
      this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
      let n = this._getContent();
      "function" == typeof n && (n = n.call(this._element)),
        this.setElementContent(t.findOne(".popover-body", e), n),
        e.classList.remove("fade", "show");
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `bs-popover-${this.updateAttachment(t)}`
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this._config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Tn);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = y.get(this, On);
        const n = "object" == typeof t ? t : null;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || ((e = new xn(this, n)), y.set(this, On, e)),
          "string" == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  _(xn);
  const Dn = "scrollspy",
    Nn = ".bs.scrollspy",
    Sn = { offset: 10, method: "auto", target: "" },
    kn = { offset: "number", method: "string", target: "(string|element)" },
    jn = "dropdown-item",
    Mn = "active",
    Pn = ".nav-link",
    Hn = "position";
  class In extends I {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        H.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Sn;
    }
    static get NAME() {
      return Dn;
    }
    refresh() {
      const e =
          this._scrollElement === this._scrollElement.window ? "offset" : Hn,
        n = "auto" === this._config.method ? e : this._config.method,
        i = n === Hn ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      t.find(this._selector)
        .map((e) => {
          const s = o(e),
            r = s ? t.findOne(s) : null;
          if (r) {
            const t = r.getBoundingClientRect();
            if (t.width || t.height)
              return this._scrollElement === this._scrollElement.window &&
                "offset" == n
                ? [t.top + this._scrollElement.window.pageYOffset + i, s]
                : [F[n](r).top + i, s];
          }
          return null;
        })
        .filter((t) => t)
        .sort((t, e) => t[0] - e[0])
        .forEach((t) => {
          this._offsets.push(t[0]), this._targets.push(t[1]);
        });
    }
    dispose() {
      H.off(this._scrollElement, Nn), super.dispose();
    }
    _getConfig(t) {
      if (
        "string" !=
          typeof (t = {
            ...Sn,
            ...F.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }).target &&
        r(t.target)
      ) {
        let { id: e } = t.target;
        e || ((e = n(Dn)), (t.target.id = e)), (t.target = `#${e}`);
      }
      return c(Dn, t, kn), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        n = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; ) {
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
        }
      }
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      const n = this._selector
          .split(",")
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        i = t.findOne(n.join(","));
      i.classList.contains(jn)
        ? (t
            .findOne(".dropdown-toggle", i.closest(".dropdown"))
            .classList.add(Mn),
          i.classList.add(Mn))
        : (i.classList.add(Mn),
          t.parents(i, ".nav, .list-group").forEach((e) => {
            t
              .prev(e, ".nav-link, .list-group-item")
              .forEach((t) => t.classList.add(Mn)),
              t.prev(e, ".nav-item").forEach((e) => {
                t.children(e, Pn).forEach((t) => t.classList.add(Mn));
              });
          })),
        H.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e,
        });
    }
    _clear() {
      t.find(this._selector)
        .filter((t) => t.classList.contains(Mn))
        .forEach((t) => t.classList.remove(Mn));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e =
          In.getInstance(this) || new In(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  H.on(window, "load.bs.scrollspy.data-api", () => {
    t.find('[data-bs-spy="scroll"]').forEach((t) => new In(t));
  }),
    _(In);
  const $n = "bs.tab",
    Rn = "active",
    Wn = "fade",
    Bn = "show",
    qn = ".active",
    Un = ":scope > li > .active";
  class zn extends I {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Rn)
      )
        return;
      let e;
      const n = s(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        const n = "UL" === i.nodeName || "OL" === i.nodeName ? Un : qn;
        (e = t.find(n, i)), (e = e[e.length - 1]);
      }
      const o = e
        ? H.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        H.trigger(this._element, "show.bs.tab", { relatedTarget: e })
          .defaultPrevented ||
        (null !== o && o.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const r = () => {
        H.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
          H.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
      };
      n ? this._activate(n, n.parentNode, r) : r();
    }
    _activate(e, n, i) {
      const o = (
          !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
            ? t.children(n, qn)
            : t.find(Un, n)
        )[0],
        s = i && o && o.classList.contains(Wn),
        r = () => this._transitionComplete(e, o, i);
      o && s ? (o.classList.remove(Bn), this._queueCallback(r, e, !0)) : r();
    }
    _transitionComplete(e, n, i) {
      if (n) {
        n.classList.remove(Rn);
        const e = t.findOne(":scope > .dropdown-menu .active", n.parentNode);
        e && e.classList.remove(Rn),
          "tab" === n.getAttribute("role") &&
            n.setAttribute("aria-selected", !1);
      }
      e.classList.add(Rn),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        h(e),
        e.classList.contains(Wn) && e.classList.add(Bn);
      let o = e.parentNode;
      if (
        (o && "LI" === o.nodeName && (o = o.parentNode),
        o && o.classList.contains("dropdown-menu"))
      ) {
        const n = e.closest(".dropdown");
        n && t.find(".dropdown-toggle", n).forEach((t) => t.classList.add(Rn)),
          e.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = y.get(this, $n) || new zn(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  return (
    H.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (t) {
        if (
          (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this))
        )
          return;
        (y.get(this, $n) || new zn(this)).show();
      }
    ),
    _(zn),
    {
      Alert: R,
      Button: q,
      Collapse: nt,
      Dropdown: tn,
      Popover: xn,
      ScrollSpy: In,
      Tab: zn,
      Tooltip: En,
    }
  );
});
