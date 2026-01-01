(() => {
  var e = {
      7199: function (e) {
        "use strict";
        var t = window.jQuery,
          n = {},
          a = [],
          i = ".w-ix",
          o = {
            reset: function (e, t) {
              t.__wf_intro = null;
            },
            intro: function (e, a) {
              a.__wf_intro ||
                ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
            },
            outro: function (e, a) {
              a.__wf_intro &&
                ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
            },
          };
        (n.triggers = {}),
          (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
          (n.init = function () {
            for (var e = a.length, i = 0; i < e; i++) {
              var r = a[i];
              r[0](0, r[1]);
            }
            (a = []), t.extend(n.triggers, o);
          }),
          (n.async = function () {
            for (var e in o) {
              var t = o[e];
              o.hasOwnProperty(e) &&
                (n.triggers[e] = function (e, n) {
                  a.push([t, n]);
                });
            }
          }),
          n.async(),
          (e.exports = n);
      },
      5134: function (e, t, n) {
        "use strict";
        var a = n(7199);
        function i(e, t) {
          var n = document.createEvent("CustomEvent");
          n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
        }
        var o = window.jQuery,
          r = {},
          d = ".w-ix";
        (r.triggers = {}),
          (r.types = { INTRO: "w-ix-intro" + d, OUTRO: "w-ix-outro" + d }),
          o.extend(r.triggers, {
            reset: function (e, t) {
              a.triggers.reset(e, t);
            },
            intro: function (e, t) {
              a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
            },
            outro: function (e, t) {
              a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
            },
          }),
          (e.exports = r);
      },
      941: function (e, t, n) {
        "use strict";
        var a = n(3949),
          i = n(6011);
        i.setEnv(a.env),
          a.define(
            "ix2",
            (e.exports = function () {
              return i;
            })
          );
      },
      4345: function (e, t, n) {
        "use strict";
        var a = n(3949),
          i = n(5134);
        let o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35,
          },
          r =
            'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        a.define(
          "slider",
          (e.exports = function (e, t) {
            var n,
              d,
              l,
              c = {},
              u = e.tram,
              s = e(document),
              f = a.env(),
              g = ".w-slider",
              p = "w-slider-force-show",
              y = i.triggers,
              E = !1;
            function I() {
              (n = s.find(g)).length &&
                (n.each(m), l || (T(), a.resize.on(O), a.redraw.on(c.redraw)));
            }
            function T() {
              a.resize.off(O), a.redraw.off(c.redraw);
            }
            function O() {
              n.filter(":visible").each(h);
            }
            function m(t, n) {
              var a = e(n),
                i = e.data(n, g);
              i ||
                (i = e.data(n, g, {
                  index: 0,
                  depth: 1,
                  hasFocus: { keyboard: !1, mouse: !1 },
                  el: a,
                  config: {},
                })),
                (i.mask = a.children(".w-slider-mask")),
                (i.left = a.children(".w-slider-arrow-left")),
                (i.right = a.children(".w-slider-arrow-right")),
                (i.nav = a.children(".w-slider-nav")),
                (i.slides = i.mask.children(".w-slide")),
                i.slides.each(y.reset),
                E && (i.maskWidth = 0),
                void 0 === a.attr("role") && a.attr("role", "region"),
                void 0 === a.attr("aria-label") &&
                  a.attr("aria-label", "carousel");
              var o = i.mask.attr("id");
              if (
                (o || ((o = "w-slider-mask-" + t), i.mask.attr("id", o)),
                d ||
                  i.ariaLiveLabel ||
                  (i.ariaLiveLabel = e(
                    '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                  ).appendTo(i.mask)),
                i.left.attr("role", "button"),
                i.left.attr("tabindex", "0"),
                i.left.attr("aria-controls", o),
                void 0 === i.left.attr("aria-label") &&
                  i.left.attr("aria-label", "previous slide"),
                i.right.attr("role", "button"),
                i.right.attr("tabindex", "0"),
                i.right.attr("aria-controls", o),
                void 0 === i.right.attr("aria-label") &&
                  i.right.attr("aria-label", "next slide"),
                !u.support.transform)
              ) {
                i.left.hide(), i.right.hide(), i.nav.hide(), (l = !0);
                return;
              }
              i.el.off(g),
                i.left.off(g),
                i.right.off(g),
                i.nav.off(g),
                b(i),
                d
                  ? (i.el.on("setting" + g, C(i)), v(i), (i.hasTimer = !1))
                  : (i.el.on("swipe" + g, C(i)),
                    i.left.on("click" + g, A(i)),
                    i.right.on("click" + g, N(i)),
                    i.left.on("keydown" + g, R(i, A)),
                    i.right.on("keydown" + g, R(i, N)),
                    i.nav.on("keydown" + g, "> div", C(i)),
                    i.config.autoplay &&
                      !i.hasTimer &&
                      ((i.hasTimer = !0), (i.timerCount = 1), L(i)),
                    i.el.on("mouseenter" + g, _(i, !0, "mouse")),
                    i.el.on("focusin" + g, _(i, !0, "keyboard")),
                    i.el.on("mouseleave" + g, _(i, !1, "mouse")),
                    i.el.on("focusout" + g, _(i, !1, "keyboard"))),
                i.nav.on("click" + g, "> div", C(i)),
                f ||
                  i.mask
                    .contents()
                    .filter(function () {
                      return 3 === this.nodeType;
                    })
                    .remove();
              var r = a.filter(":hidden");
              r.addClass(p);
              var c = a.parents(":hidden");
              c.addClass(p), E || h(t, n), r.removeClass(p), c.removeClass(p);
            }
            function b(e) {
              var t = {};
              (t.crossOver = 0),
                (t.animation = e.el.attr("data-animation") || "slide"),
                "outin" === t.animation &&
                  ((t.animation = "cross"), (t.crossOver = 0.5)),
                (t.easing = e.el.attr("data-easing") || "ease");
              var n = e.el.attr("data-duration");
              if (
                ((t.duration = null != n ? parseInt(n, 10) : 500),
                S(e.el.attr("data-infinite")) && (t.infinite = !0),
                S(e.el.attr("data-disable-swipe")) && (t.disableSwipe = !0),
                S(e.el.attr("data-hide-arrows"))
                  ? (t.hideArrows = !0)
                  : e.config.hideArrows && (e.left.show(), e.right.show()),
                S(e.el.attr("data-autoplay")))
              ) {
                (t.autoplay = !0),
                  (t.delay = parseInt(e.el.attr("data-delay"), 10) || 2e3),
                  (t.timerMax = parseInt(e.el.attr("data-autoplay-limit"), 10));
                var a = "mousedown" + g + " touchstart" + g;
                d ||
                  e.el.off(a).one(a, function () {
                    v(e);
                  });
              }
              var i = e.right.width();
              (t.edge = i ? i + 40 : 100), (e.config = t);
            }
            function S(e) {
              return "1" === e || "true" === e;
            }
            function _(t, n, a) {
              return function (i) {
                if (n) t.hasFocus[a] = n;
                else if (
                  e.contains(t.el.get(0), i.relatedTarget) ||
                  ((t.hasFocus[a] = n),
                  (t.hasFocus.mouse && "keyboard" === a) ||
                    (t.hasFocus.keyboard && "mouse" === a))
                )
                  return;
                n
                  ? (t.ariaLiveLabel.attr("aria-live", "polite"),
                    t.hasTimer && v(t))
                  : (t.ariaLiveLabel.attr("aria-live", "off"),
                    t.hasTimer && L(t));
              };
            }
            function R(e, t) {
              return function (n) {
                switch (n.keyCode) {
                  case o.SPACE:
                  case o.ENTER:
                    return t(e)(), n.preventDefault(), n.stopPropagation();
                }
              };
            }
            function A(e) {
              return function () {
                M(e, { index: e.index - 1, vector: -1 });
              };
            }
            function N(e) {
              return function () {
                M(e, { index: e.index + 1, vector: 1 });
              };
            }
            function L(e) {
              v(e);
              var t = e.config,
                n = t.timerMax;
              (n && e.timerCount++ > n) ||
                (e.timerId = window.setTimeout(function () {
                  null == e.timerId || d || (N(e)(), L(e));
                }, t.delay));
            }
            function v(e) {
              window.clearTimeout(e.timerId), (e.timerId = null);
            }
            function C(n) {
              return function (i, r) {
                r = r || {};
                var l,
                  c,
                  u = n.config;
                if (d && "setting" === i.type) {
                  if ("prev" === r.select) return A(n)();
                  if ("next" === r.select) return N(n)();
                  if ((b(n), P(n), null == r.select)) return;
                  return (
                    (l = r.select),
                    (c = null),
                    l === n.slides.length && (I(), P(n)),
                    t.each(n.anchors, function (t, n) {
                      e(t.els).each(function (t, a) {
                        e(a).index() === l && (c = n);
                      });
                    }),
                    void (null != c && M(n, { index: c, immediate: !0 }))
                  );
                }
                if ("swipe" === i.type)
                  return u.disableSwipe || a.env("editor")
                    ? void 0
                    : "left" === r.direction
                    ? N(n)()
                    : "right" === r.direction
                    ? A(n)()
                    : void 0;
                if (n.nav.has(i.target).length) {
                  var s = e(i.target).index();
                  if (
                    ("click" === i.type && M(n, { index: s }),
                    "keydown" === i.type)
                  )
                    switch (i.keyCode) {
                      case o.ENTER:
                      case o.SPACE:
                        M(n, { index: s }), i.preventDefault();
                        break;
                      case o.ARROW_LEFT:
                      case o.ARROW_UP:
                        U(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                        break;
                      case o.ARROW_RIGHT:
                      case o.ARROW_DOWN:
                        U(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                        break;
                      case o.HOME:
                        U(n.nav, 0), i.preventDefault();
                        break;
                      case o.END:
                        U(n.nav, n.pages), i.preventDefault();
                        break;
                      default:
                        return;
                    }
                }
              };
            }
            function U(e, t) {
              var n = e.children().eq(t).focus();
              e.children().not(n);
            }
            function M(t, n) {
              n = n || {};
              var a = t.config,
                i = t.anchors;
              t.previous = t.index;
              var o = n.index,
                l = {};
              o < 0
                ? ((o = i.length - 1),
                  a.infinite &&
                    ((l.x = -t.endX), (l.from = 0), (l.to = i[0].width)))
                : o >= i.length &&
                  ((o = 0),
                  a.infinite &&
                    ((l.x = i[i.length - 1].width),
                    (l.from = -i[i.length - 1].x),
                    (l.to = l.from - l.x))),
                (t.index = o);
              var c = t.nav
                .children()
                .eq(o)
                .addClass("w-active")
                .attr("aria-pressed", "true")
                .attr("tabindex", "0");
              t.nav
                .children()
                .not(c)
                .removeClass("w-active")
                .attr("aria-pressed", "false")
                .attr("tabindex", "-1"),
                a.hideArrows &&
                  (t.index === i.length - 1 ? t.right.hide() : t.right.show(),
                  0 === t.index ? t.left.hide() : t.left.show());
              var s = t.offsetX || 0,
                f = (t.offsetX = -i[t.index].x),
                g = { x: f, opacity: 1, visibility: "" },
                p = e(i[t.index].els),
                I = e(i[t.previous] && i[t.previous].els),
                T = t.slides.not(p),
                O = a.animation,
                m = a.easing,
                b = Math.round(a.duration),
                S = n.vector || (t.index > t.previous ? 1 : -1),
                _ = "opacity " + b + "ms " + m,
                R = "transform " + b + "ms " + m;
              if (
                (p.find(r).removeAttr("tabindex"),
                p.removeAttr("aria-hidden"),
                p.find("*").removeAttr("aria-hidden"),
                T.find(r).attr("tabindex", "-1"),
                T.attr("aria-hidden", "true"),
                T.find("*").attr("aria-hidden", "true"),
                d || (p.each(y.intro), T.each(y.outro)),
                n.immediate && !E)
              ) {
                u(p).set(g), L();
                return;
              }
              if (t.index !== t.previous) {
                if (
                  (d || t.ariaLiveLabel.text(`Slide ${o + 1} of ${i.length}.`),
                  "cross" === O)
                ) {
                  var A = Math.round(b - b * a.crossOver),
                    N = Math.round(b - A);
                  (_ = "opacity " + A + "ms " + m),
                    u(I).set({ visibility: "" }).add(_).start({ opacity: 0 }),
                    u(p)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: t.depth++,
                      })
                      .add(_)
                      .wait(N)
                      .then({ opacity: 1 })
                      .then(L);
                  return;
                }
                if ("fade" === O) {
                  u(I).set({ visibility: "" }).stop(),
                    u(p)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: t.depth++,
                      })
                      .add(_)
                      .start({ opacity: 1 })
                      .then(L);
                  return;
                }
                if ("over" === O) {
                  (g = { x: t.endX }),
                    u(I).set({ visibility: "" }).stop(),
                    u(p)
                      .set({
                        visibility: "",
                        zIndex: t.depth++,
                        x: f + i[t.index].width * S,
                      })
                      .add(R)
                      .start({ x: f })
                      .then(L);
                  return;
                }
                a.infinite && l.x
                  ? (u(t.slides.not(I))
                      .set({ visibility: "", x: l.x })
                      .add(R)
                      .start({ x: f }),
                    u(I)
                      .set({ visibility: "", x: l.from })
                      .add(R)
                      .start({ x: l.to }),
                    (t.shifted = I))
                  : (a.infinite &&
                      t.shifted &&
                      (u(t.shifted).set({ visibility: "", x: s }),
                      (t.shifted = null)),
                    u(t.slides).set({ visibility: "" }).add(R).start({ x: f }));
              }
              function L() {
                (p = e(i[t.index].els)),
                  (T = t.slides.not(p)),
                  "slide" !== O && (g.visibility = "hidden"),
                  u(T).set(g);
              }
            }
            function h(t, n) {
              var a,
                i,
                o,
                r,
                l = e.data(n, g);
              if (l) {
                if (
                  ((i = (a = l).mask.width()),
                  a.maskWidth !== i && ((a.maskWidth = i), 1))
                )
                  return P(l);
                d &&
                  ((r = 0),
                  (o = l).slides.each(function (t, n) {
                    r += e(n).outerWidth(!0);
                  }),
                  o.slidesWidth !== r && ((o.slidesWidth = r), 1)) &&
                  P(l);
              }
            }
            function P(t) {
              var n = 1,
                a = 0,
                i = 0,
                o = 0,
                r = t.maskWidth,
                l = r - t.config.edge;
              l < 0 && (l = 0),
                (t.anchors = [{ els: [], x: 0, width: 0 }]),
                t.slides.each(function (d, c) {
                  i - a > l &&
                    (n++,
                    (a += r),
                    (t.anchors[n - 1] = { els: [], x: i, width: 0 })),
                    (o = e(c).outerWidth(!0)),
                    (i += o),
                    (t.anchors[n - 1].width += o),
                    t.anchors[n - 1].els.push(c);
                  var u = d + 1 + " of " + t.slides.length;
                  e(c).attr("aria-label", u), e(c).attr("role", "group");
                }),
                (t.endX = i),
                d && (t.pages = null),
                t.nav.length &&
                  t.pages !== n &&
                  ((t.pages = n),
                  (function (t) {
                    var n,
                      a = [],
                      i = t.el.attr("data-nav-spacing");
                    i && (i = parseFloat(i) + "px");
                    for (var o = 0, r = t.pages; o < r; o++)
                      (n = e('<div class="w-slider-dot" data-wf-ignore />'))
                        .attr(
                          "aria-label",
                          "Show slide " + (o + 1) + " of " + r
                        )
                        .attr("aria-pressed", "false")
                        .attr("role", "button")
                        .attr("tabindex", "-1"),
                        t.nav.hasClass("w-num") && n.text(o + 1),
                        null != i &&
                          n.css({ "margin-left": i, "margin-right": i }),
                        a.push(n);
                    t.nav.empty().append(a);
                  })(t));
              var c = t.index;
              c >= n && (c = n - 1), M(t, { immediate: !0, index: c });
            }
            return (
              (c.ready = function () {
                (d = a.env("design")), I();
              }),
              (c.design = function () {
                (d = !0), setTimeout(I, 1e3);
              }),
              (c.preview = function () {
                (d = !1), I();
              }),
              (c.redraw = function () {
                (E = !0), I(), (E = !1);
              }),
              (c.destroy = T),
              c
            );
          })
        );
      },
      3946: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          actionListPlaybackChanged: function () {
            return j;
          },
          animationFrameChanged: function () {
            return X;
          },
          clearRequested: function () {
            return x;
          },
          elementStateChanged: function () {
            return W;
          },
          eventListenerAdded: function () {
            return F;
          },
          eventStateChanged: function () {
            return D;
          },
          instanceAdded: function () {
            return k;
          },
          instanceRemoved: function () {
            return z;
          },
          instanceStarted: function () {
            return B;
          },
          mediaQueriesDefined: function () {
            return Y;
          },
          parameterChanged: function () {
            return w;
          },
          playbackRequested: function () {
            return P;
          },
          previewRequested: function () {
            return h;
          },
          rawDataImported: function () {
            return v;
          },
          sessionInitialized: function () {
            return C;
          },
          sessionStarted: function () {
            return U;
          },
          sessionStopped: function () {
            return M;
          },
          stopRequested: function () {
            return V;
          },
          testFrameRendered: function () {
            return G;
          },
          viewportWidthChanged: function () {
            return Q;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = n(7087),
          r = n(9468),
          {
            IX2_RAW_DATA_IMPORTED: d,
            IX2_SESSION_INITIALIZED: l,
            IX2_SESSION_STARTED: c,
            IX2_SESSION_STOPPED: u,
            IX2_PREVIEW_REQUESTED: s,
            IX2_PLAYBACK_REQUESTED: f,
            IX2_STOP_REQUESTED: g,
            IX2_CLEAR_REQUESTED: p,
            IX2_EVENT_LISTENER_ADDED: y,
            IX2_TEST_FRAME_RENDERED: E,
            IX2_EVENT_STATE_CHANGED: I,
            IX2_ANIMATION_FRAME_CHANGED: T,
            IX2_PARAMETER_CHANGED: O,
            IX2_INSTANCE_ADDED: m,
            IX2_INSTANCE_STARTED: b,
            IX2_INSTANCE_REMOVED: S,
            IX2_ELEMENT_STATE_CHANGED: _,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
            IX2_VIEWPORT_WIDTH_CHANGED: A,
            IX2_MEDIA_QUERIES_DEFINED: N,
          } = o.IX2EngineActionTypes,
          { reifyState: L } = r.IX2VanillaUtils,
          v = (e) => ({ type: d, payload: { ...L(e) } }),
          C = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
            type: l,
            payload: { hasBoundaryNodes: e, reducedMotion: t },
          }),
          U = () => ({ type: c }),
          M = () => ({ type: u }),
          h = ({ rawData: e, defer: t }) => ({
            type: s,
            payload: { defer: t, rawData: e },
          }),
          P = ({
            actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: a,
            allowEvents: i,
            immediate: r,
            testManual: d,
            verbose: l,
            rawData: c,
          }) => ({
            type: f,
            payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: n,
              testManual: d,
              eventId: a,
              allowEvents: i,
              immediate: r,
              verbose: l,
              rawData: c,
            },
          }),
          V = (e) => ({ type: g, payload: { actionListId: e } }),
          x = () => ({ type: p }),
          F = (e, t) => ({
            type: y,
            payload: { target: e, listenerParams: t },
          }),
          G = (e = 1) => ({ type: E, payload: { step: e } }),
          D = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
          X = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
          w = (e, t) => ({ type: O, payload: { key: e, value: t } }),
          k = (e) => ({ type: m, payload: { ...e } }),
          B = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
          z = (e) => ({ type: S, payload: { instanceId: e } }),
          W = (e, t, n, a) => ({
            type: _,
            payload: {
              elementId: e,
              actionTypeId: t,
              current: n,
              actionItem: a,
            },
          }),
          j = ({ actionListId: e, isPlaying: t }) => ({
            type: R,
            payload: { actionListId: e, isPlaying: t },
          }),
          Q = ({ width: e, mediaQueries: t }) => ({
            type: A,
            payload: { width: e, mediaQueries: t },
          }),
          Y = () => ({ type: N });
      },
      6011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a,
          i = {
            actions: function () {
              return c;
            },
            destroy: function () {
              return p;
            },
            init: function () {
              return g;
            },
            setEnv: function () {
              return f;
            },
            store: function () {
              return s;
            },
          };
        for (var o in i)
          Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
        let r = n(9516),
          d = (a = n(7243)) && a.__esModule ? a : { default: a },
          l = n(1970),
          c = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = u(t);
            if (n && n.has(e)) return n.get(e);
            var a = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (
                "default" !== o &&
                Object.prototype.hasOwnProperty.call(e, o)
              ) {
                var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                r && (r.get || r.set)
                  ? Object.defineProperty(a, o, r)
                  : (a[o] = e[o]);
              }
            return (a.default = e), n && n.set(e, a), a;
          })(n(3946));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        let s = (0, r.createStore)(d.default);
        function f(e) {
          e() && (0, l.observeRequests)(s);
        }
        function g(e) {
          p(), (0, l.startEngine)({ store: s, rawData: e, allowEvents: !0 });
        }
        function p() {
          (0, l.stopEngine)(s);
        }
      },
      5012: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          elementContains: function () {
            return O;
          },
          getChildElements: function () {
            return b;
          },
          getClosestElement: function () {
            return _;
          },
          getProperty: function () {
            return p;
          },
          getQuerySelector: function () {
            return E;
          },
          getRefType: function () {
            return R;
          },
          getSiblingElements: function () {
            return S;
          },
          getStyle: function () {
            return g;
          },
          getValidDocument: function () {
            return I;
          },
          isSiblingNode: function () {
            return m;
          },
          matchSelector: function () {
            return y;
          },
          queryDocument: function () {
            return T;
          },
          setStyle: function () {
            return f;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = n(9468),
          r = n(7087),
          { ELEMENT_MATCHES: d } = o.IX2BrowserSupport,
          {
            IX2_ID_DELIMITER: l,
            HTML_ELEMENT: c,
            PLAIN_OBJECT: u,
            WF_PAGE: s,
          } = r.IX2EngineConstants;
        function f(e, t, n) {
          e.style[t] = n;
        }
        function g(e, t) {
          return t.startsWith("--")
            ? window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(t)
            : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
        }
        function p(e, t) {
          return e[t];
        }
        function y(e) {
          return (t) => t[d](e);
        }
        function E({ id: e, selector: t }) {
          if (e) {
            let t = e;
            if (-1 !== e.indexOf(l)) {
              let n = e.split(l),
                a = n[0];
              if (((t = n[1]), a !== document.documentElement.getAttribute(s)))
                return null;
            }
            return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
          }
          return t;
        }
        function I(e) {
          return null == e || e === document.documentElement.getAttribute(s)
            ? document
            : null;
        }
        function T(e, t) {
          return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
          );
        }
        function O(e, t) {
          return e.contains(t);
        }
        function m(e, t) {
          return e !== t && e.parentNode === t.parentNode;
        }
        function b(e) {
          let t = [];
          for (let n = 0, { length: a } = e || []; n < a; n++) {
            let { children: a } = e[n],
              { length: i } = a;
            if (i) for (let e = 0; e < i; e++) t.push(a[e]);
          }
          return t;
        }
        function S(e = []) {
          let t = [],
            n = [];
          for (let a = 0, { length: i } = e; a < i; a++) {
            let { parentNode: i } = e[a];
            if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
              continue;
            n.push(i);
            let o = i.firstElementChild;
            for (; null != o; )
              -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
          }
          return t;
        }
        let _ = Element.prototype.closest
          ? (e, t) =>
              document.documentElement.contains(e) ? e.closest(t) : null
          : (e, t) => {
              if (!document.documentElement.contains(e)) return null;
              let n = e;
              do {
                if (n[d] && n[d](t)) return n;
                n = n.parentNode;
              } while (null != n);
              return null;
            };
        function R(e) {
          return null != e && "object" == typeof e
            ? e instanceof Element
              ? c
              : u
            : null;
        }
      },
      1970: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          observeRequests: function () {
            return q;
          },
          startActionGroup: function () {
            return ep;
          },
          startEngine: function () {
            return ea;
          },
          stopActionGroup: function () {
            return eg;
          },
          stopAllActionGroups: function () {
            return ef;
          },
          stopEngine: function () {
            return ei;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = T(n(9777)),
          r = T(n(4738)),
          d = T(n(4659)),
          l = T(n(3452)),
          c = T(n(6633)),
          u = T(n(3729)),
          s = T(n(2397)),
          f = T(n(5082)),
          g = n(7087),
          p = n(9468),
          y = n(3946),
          E = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = O(t);
            if (n && n.has(e)) return n.get(e);
            var a = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (
                "default" !== o &&
                Object.prototype.hasOwnProperty.call(e, o)
              ) {
                var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                r && (r.get || r.set)
                  ? Object.defineProperty(a, o, r)
                  : (a[o] = e[o]);
              }
            return (a.default = e), n && n.set(e, a), a;
          })(n(5012)),
          I = T(n(8955));
        function T(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function O(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (O = function (e) {
            return e ? n : t;
          })(e);
        }
        let m = Object.keys(g.QuickEffectIds),
          b = (e) => m.includes(e),
          {
            COLON_DELIMITER: S,
            BOUNDARY_SELECTOR: _,
            HTML_ELEMENT: R,
            RENDER_GENERAL: A,
            W_MOD_IX: N,
          } = g.IX2EngineConstants,
          {
            getAffectedElements: L,
            getElementId: v,
            getDestinationValues: C,
            observeStore: U,
            getInstanceId: M,
            renderHTMLElement: h,
            clearAllStyles: P,
            getMaxDurationItemIndex: V,
            getComputedStyle: x,
            getInstanceOrigin: F,
            reduceListToGroup: G,
            shouldNamespaceEventParameter: D,
            getNamespacedParameterId: X,
            shouldAllowMediaQuery: w,
            cleanupHTMLElement: k,
            clearObjectCache: B,
            stringifyTarget: z,
            mediaQueriesEqual: W,
            shallowEqual: j,
          } = p.IX2VanillaUtils,
          {
            isPluginType: Q,
            createPluginInstance: Y,
            getPluginDuration: H,
          } = p.IX2VanillaPlugins,
          K = navigator.userAgent,
          $ = K.match(/iPad/i) || K.match(/iPhone/);
        function q(e) {
          U({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
            U({
              store: e,
              select: ({ ixRequest: e }) => e.playback,
              onChange: ee,
            }),
            U({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
            U({
              store: e,
              select: ({ ixRequest: e }) => e.clear,
              onChange: en,
            });
        }
        function Z({ rawData: e, defer: t }, n) {
          let a = () => {
            ea({ store: n, rawData: e, allowEvents: !0 }), J();
          };
          t ? setTimeout(a, 0) : a();
        }
        function J() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function ee(e, t) {
          let {
              actionTypeId: n,
              actionListId: a,
              actionItemId: i,
              eventId: o,
              allowEvents: r,
              immediate: d,
              testManual: l,
              verbose: c = !0,
            } = e,
            { rawData: u } = e;
          if (a && i && u && d) {
            let e = u.actionLists[a];
            e && (u = G({ actionList: e, actionItemId: i, rawData: u }));
          }
          if (
            (ea({ store: t, rawData: u, allowEvents: r, testManual: l }),
            (a && n === g.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
          ) {
            eg({ store: t, actionListId: a }),
              es({ store: t, actionListId: a, eventId: o });
            let e = ep({
              store: t,
              eventId: o,
              actionListId: a,
              immediate: d,
              verbose: c,
            });
            c &&
              e &&
              t.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !d,
                })
              );
          }
        }
        function et({ actionListId: e }, t) {
          e ? eg({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
        }
        function en(e, t) {
          ei(t), P({ store: t, elementApi: E });
        }
        function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
          let { ixSession: i } = e.getState();
          if ((t && e.dispatch((0, y.rawDataImported)(t)), !i.active)) {
            (e.dispatch(
              (0, y.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(_),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            n) &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: n } = t;
                ed(e),
                  (0, s.default)(n, (t, n) => {
                    let a = I.default[n];
                    if (!a)
                      return void console.warn(
                        `IX2 event type not configured: ${n}`
                      );
                    !(function ({ logic: e, store: t, events: n }) {
                      !(function (e) {
                        if (!$) return;
                        let t = {},
                          n = "";
                        for (let a in e) {
                          let { eventTypeId: i, target: o } = e[a],
                            r = E.getQuerySelector(o);
                          t[r] ||
                            ((i === g.EventTypeConsts.MOUSE_CLICK ||
                              i === g.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[r] = !0),
                              (n +=
                                r +
                                "{cursor: pointer;touch-action: manipulation;}")));
                        }
                        if (n) {
                          let e = document.createElement("style");
                          (e.textContent = n), document.body.appendChild(e);
                        }
                      })(n);
                      let { types: a, handler: i } = e,
                        { ixData: l } = t.getState(),
                        { actionLists: c } = l,
                        u = el(n, eu);
                      if (!(0, d.default)(u)) return;
                      (0, s.default)(u, (e, a) => {
                        let i = n[a],
                          {
                            action: d,
                            id: u,
                            mediaQueries: s = l.mediaQueryKeys,
                          } = i,
                          { actionListId: f } = d.config;
                        W(s, l.mediaQueryKeys) ||
                          t.dispatch((0, y.mediaQueriesDefined)()),
                          d.actionTypeId ===
                            g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(i.config)
                              ? i.config
                              : [i.config]
                            ).forEach((n) => {
                              let { continuousParameterGroupId: a } = n,
                                i = (0, r.default)(
                                  c,
                                  `${f}.continuousParameterGroups`,
                                  []
                                ),
                                d = (0, o.default)(i, ({ id: e }) => e === a),
                                l = (n.smoothing || 0) / 100,
                                s = (n.restingState || 0) / 100;
                              d &&
                                e.forEach((e, a) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: n,
                                    eventId: a,
                                    eventConfig: i,
                                    actionListId: o,
                                    parameterGroup: d,
                                    smoothing: l,
                                    restingValue: c,
                                  }) {
                                    let { ixData: u, ixSession: s } =
                                        e.getState(),
                                      { events: f } = u,
                                      p = f[a],
                                      { eventTypeId: y } = p,
                                      I = {},
                                      T = {},
                                      O = [],
                                      { continuousActionGroups: m } = d,
                                      { id: b } = d;
                                    D(y, i) && (b = X(t, b));
                                    let R =
                                      s.hasBoundaryNodes && n
                                        ? E.getClosestElement(n, _)
                                        : null;
                                    m.forEach((e) => {
                                      let { keyframe: t, actionItems: a } = e;
                                      a.forEach((e) => {
                                        let { actionTypeId: a } = e,
                                          { target: i } = e.config;
                                        if (!i) return;
                                        let o = i.boundaryMode ? R : null,
                                          r = z(i) + S + a;
                                        if (
                                          ((T[r] = (function (e = [], t, n) {
                                            let a,
                                              i = [...e];
                                            return (
                                              i.some(
                                                (e, n) =>
                                                  e.keyframe === t &&
                                                  ((a = n), !0)
                                              ),
                                              null == a &&
                                                ((a = i.length),
                                                i.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              i[a].actionItems.push(n),
                                              i
                                            );
                                          })(T[r], t, e)),
                                          !I[r])
                                        ) {
                                          I[r] = !0;
                                          let { config: t } = e;
                                          L({
                                            config: t,
                                            event: p,
                                            eventTarget: n,
                                            elementRoot: o,
                                            elementApi: E,
                                          }).forEach((e) => {
                                            O.push({ element: e, key: r });
                                          });
                                        }
                                      });
                                    }),
                                      O.forEach(({ element: t, key: n }) => {
                                        let i = T[n],
                                          d = (0, r.default)(
                                            i,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: u } = d,
                                          s = (
                                            u === g.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  d.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : Q(u)
                                          )
                                            ? Y(u)?.(t, d)
                                            : null,
                                          f = C(
                                            {
                                              element: t,
                                              actionItem: d,
                                              elementApi: E,
                                            },
                                            s
                                          );
                                        ey({
                                          store: e,
                                          element: t,
                                          eventId: a,
                                          actionListId: o,
                                          actionItem: d,
                                          destination: f,
                                          continuous: !0,
                                          parameterId: b,
                                          actionGroups: i,
                                          smoothing: l,
                                          restingValue: c,
                                          pluginInstance: s,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: u + S + a,
                                    eventTarget: e,
                                    eventId: u,
                                    eventConfig: n,
                                    actionListId: f,
                                    parameterGroup: d,
                                    smoothing: l,
                                    restingValue: s,
                                  });
                                });
                            }),
                          (d.actionTypeId ===
                            g.ActionTypeConsts.GENERAL_START_ACTION ||
                            b(d.actionTypeId)) &&
                            es({ store: t, actionListId: f, eventId: u });
                      });
                      let p = (e) => {
                          let { ixSession: a } = t.getState();
                          ec(u, (o, r, d) => {
                            let c = n[r],
                              u = a.eventState[d],
                              {
                                action: s,
                                mediaQueries: f = l.mediaQueryKeys,
                              } = c;
                            if (!w(f, a.mediaQueryKey)) return;
                            let p = (n = {}) => {
                              let a = i(
                                {
                                  store: t,
                                  element: o,
                                  event: c,
                                  eventConfig: n,
                                  nativeEvent: e,
                                  eventStateKey: d,
                                },
                                u
                              );
                              j(a, u) ||
                                t.dispatch((0, y.eventStateChanged)(d, a));
                            };
                            s.actionTypeId ===
                            g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(c.config)
                                  ? c.config
                                  : [c.config]
                                ).forEach(p)
                              : p();
                          });
                        },
                        I = (0, f.default)(p, 12),
                        T = ({
                          target: e = document,
                          types: n,
                          throttle: a,
                        }) => {
                          n.split(" ")
                            .filter(Boolean)
                            .forEach((n) => {
                              let i = a ? I : p;
                              e.addEventListener(n, i),
                                t.dispatch(
                                  (0, y.eventListenerAdded)(e, [n, i])
                                );
                            });
                        };
                      Array.isArray(a)
                        ? a.forEach(T)
                        : "string" == typeof a && T(e);
                    })({ logic: a, store: e, events: t });
                  });
                let { ixSession: a } = e.getState();
                a.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      ed(e);
                    };
                    er.forEach((n) => {
                      window.addEventListener(n, t),
                        e.dispatch((0, y.eventListenerAdded)(window, [n, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries &&
                U({
                  store: e,
                  select: ({ ixSession: e }) => e.mediaQueryKey,
                  onChange: () => {
                    ei(e),
                      P({ store: e, elementApi: E }),
                      ea({ store: e, allowEvents: !0 }),
                      J();
                  },
                }));
            e.dispatch((0, y.sessionStarted)()),
              (function (e, t) {
                let n = (a) => {
                  let { ixSession: i, ixParameters: o } = e.getState();
                  if (i.active)
                    if ((e.dispatch((0, y.animationFrameChanged)(a, o)), t)) {
                      let t = U({
                        store: e,
                        select: ({ ixSession: e }) => e.tick,
                        onChange: (e) => {
                          n(e), t();
                        },
                      });
                    } else requestAnimationFrame(n);
                };
                n(window.performance.now());
              })(e, a);
          }
        }
        function ei(e) {
          let { ixSession: t } = e.getState();
          if (t.active) {
            let { eventListeners: n } = t;
            n.forEach(eo), B(), e.dispatch((0, y.sessionStopped)());
          }
        }
        function eo({ target: e, listenerParams: t }) {
          e.removeEventListener.apply(e, t);
        }
        let er = ["resize", "orientationchange"];
        function ed(e) {
          let { ixSession: t, ixData: n } = e.getState(),
            a = window.innerWidth;
          if (a !== t.viewportWidth) {
            let { mediaQueries: t } = n;
            e.dispatch(
              (0, y.viewportWidthChanged)({ width: a, mediaQueries: t })
            );
          }
        }
        let el = (e, t) => (0, l.default)((0, u.default)(e, t), c.default),
          ec = (e, t) => {
            (0, s.default)(e, (e, n) => {
              e.forEach((e, a) => {
                t(e, n, n + S + a);
              });
            });
          },
          eu = (e) =>
            L({
              config: { target: e.target, targets: e.targets },
              elementApi: E,
            });
        function es({ store: e, actionListId: t, eventId: n }) {
          let { ixData: a, ixSession: i } = e.getState(),
            { actionLists: o, events: d } = a,
            l = d[n],
            c = o[t];
          if (c && c.useFirstGroupAsInitialState) {
            let o = (0, r.default)(c, "actionItemGroups[0].actionItems", []);
            if (
              !w(
                (0, r.default)(l, "mediaQueries", a.mediaQueryKeys),
                i.mediaQueryKey
              )
            )
              return;
            o.forEach((a) => {
              let { config: i, actionTypeId: o } = a,
                r = L({
                  config:
                    i?.target?.useEventTarget === !0 &&
                    i?.target?.objectId == null
                      ? { target: l.target, targets: l.targets }
                      : i,
                  event: l,
                  elementApi: E,
                }),
                d = Q(o);
              r.forEach((i) => {
                let r = d ? Y(o)?.(i, a) : null;
                ey({
                  destination: C(
                    { element: i, actionItem: a, elementApi: E },
                    r
                  ),
                  immediate: !0,
                  store: e,
                  element: i,
                  eventId: n,
                  actionItem: a,
                  actionListId: t,
                  pluginInstance: r,
                });
              });
            });
          }
        }
        function ef({ store: e }) {
          let { ixInstances: t } = e.getState();
          (0, s.default)(t, (t) => {
            if (!t.continuous) {
              let { actionListId: n, verbose: a } = t;
              eE(t, e),
                a &&
                  e.dispatch(
                    (0, y.actionListPlaybackChanged)({
                      actionListId: n,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function eg({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: a,
          actionListId: i,
        }) {
          let { ixInstances: o, ixSession: d } = e.getState(),
            l = d.hasBoundaryNodes && n ? E.getClosestElement(n, _) : null;
          (0, s.default)(o, (n) => {
            let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
              d = !a || n.eventStateKey === a;
            if (n.actionListId === i && n.eventId === t && d) {
              if (l && o && !E.elementContains(l, n.element)) return;
              eE(n, e),
                n.verbose &&
                  e.dispatch(
                    (0, y.actionListPlaybackChanged)({
                      actionListId: i,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function ep({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: a,
          actionListId: i,
          groupIndex: o = 0,
          immediate: d,
          verbose: l,
        }) {
          let { ixData: c, ixSession: u } = e.getState(),
            { events: s } = c,
            f = s[t] || {},
            { mediaQueries: g = c.mediaQueryKeys } = f,
            { actionItemGroups: p, useFirstGroupAsInitialState: y } = (0,
            r.default)(c, `actionLists.${i}`, {});
          if (!p || !p.length) return !1;
          o >= p.length && (0, r.default)(f, "config.loop") && (o = 0),
            0 === o && y && o++;
          let I =
              (0 === o || (1 === o && y)) && b(f.action?.actionTypeId)
                ? f.config.delay
                : void 0,
            T = (0, r.default)(p, [o, "actionItems"], []);
          if (!T.length || !w(g, u.mediaQueryKey)) return !1;
          let O = u.hasBoundaryNodes && n ? E.getClosestElement(n, _) : null,
            m = V(T),
            S = !1;
          return (
            T.forEach((r, c) => {
              let { config: u, actionTypeId: s } = r,
                g = Q(s),
                { target: p } = u;
              p &&
                L({
                  config: u,
                  event: f,
                  eventTarget: n,
                  elementRoot: p.boundaryMode ? O : null,
                  elementApi: E,
                }).forEach((u, f) => {
                  let p = g ? Y(s)?.(u, r) : null,
                    y = g ? H(s)(u, r) : null;
                  S = !0;
                  let T = x({ element: u, actionItem: r }),
                    O = C({ element: u, actionItem: r, elementApi: E }, p);
                  ey({
                    store: e,
                    element: u,
                    actionItem: r,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: m === c && 0 === f,
                    computedStyle: T,
                    destination: O,
                    immediate: d,
                    verbose: l,
                    pluginInstance: p,
                    pluginDuration: y,
                    instanceDelay: I,
                  });
                });
            }),
            S
          );
        }
        function ey(e) {
          let t,
            { store: n, computedStyle: a, ...i } = e,
            {
              element: o,
              actionItem: r,
              immediate: d,
              pluginInstance: l,
              continuous: c,
              restingValue: u,
              eventId: s,
            } = i,
            f = M(),
            { ixElements: p, ixSession: I, ixData: T } = n.getState(),
            O = v(p, o),
            { refState: m } = p[O] || {},
            b = E.getRefType(o),
            S = I.reducedMotion && g.ReducedMotionTypes[r.actionTypeId];
          if (S && c)
            switch (T.events[s]?.eventTypeId) {
              case g.EventTypeConsts.MOUSE_MOVE:
              case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                t = u;
                break;
              default:
                t = 0.5;
            }
          let _ = F(o, m, a, r, E, l);
          if (
            (n.dispatch(
              (0, y.instanceAdded)({
                instanceId: f,
                elementId: O,
                origin: _,
                refType: b,
                skipMotion: S,
                skipToValue: t,
                ...i,
              })
            ),
            eI(document.body, "ix2-animation-started", f),
            d)
          )
            return void (function (e, t) {
              let { ixParameters: n } = e.getState();
              e.dispatch((0, y.instanceStarted)(t, 0)),
                e.dispatch((0, y.animationFrameChanged)(performance.now(), n));
              let { ixInstances: a } = e.getState();
              eT(a[t], e);
            })(n, f);
          U({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eT }),
            c || n.dispatch((0, y.instanceStarted)(f, I.tick));
        }
        function eE(e, t) {
          eI(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
          });
          let { elementId: n, actionItem: a } = e,
            { ixElements: i } = t.getState(),
            { ref: o, refType: r } = i[n] || {};
          r === R && k(o, a, E), t.dispatch((0, y.instanceRemoved)(e.id));
        }
        function eI(e, t, n) {
          let a = document.createEvent("CustomEvent");
          a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
        }
        function eT(e, t) {
          let {
              active: n,
              continuous: a,
              complete: i,
              elementId: o,
              actionItem: r,
              actionTypeId: d,
              renderType: l,
              current: c,
              groupIndex: u,
              eventId: s,
              eventTarget: f,
              eventStateKey: g,
              actionListId: p,
              isCarrier: I,
              styleProp: T,
              verbose: O,
              pluginInstance: m,
            } = e,
            { ixData: b, ixSession: S } = t.getState(),
            { events: _ } = b,
            { mediaQueries: N = b.mediaQueryKeys } = _ && _[s] ? _[s] : {};
          if (w(N, S.mediaQueryKey) && (a || n || i)) {
            if (c || (l === A && i)) {
              t.dispatch((0, y.elementStateChanged)(o, d, c, r));
              let { ixElements: e } = t.getState(),
                { ref: n, refType: a, refState: i } = e[o] || {},
                u = i && i[d];
              (a === R || Q(d)) && h(n, i, u, s, r, T, E, l, m);
            }
            if (i) {
              if (I) {
                let e = ep({
                  store: t,
                  eventId: s,
                  eventTarget: f,
                  eventStateKey: g,
                  actionListId: p,
                  groupIndex: u + 1,
                  verbose: O,
                });
                O &&
                  !e &&
                  t.dispatch(
                    (0, y.actionListPlaybackChanged)({
                      actionListId: p,
                      isPlaying: !1,
                    })
                  );
              }
              eE(e, t);
            }
          }
        }
      },
      8955: function (e, t, n) {
        "use strict";
        let a;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return eg;
            },
          });
        let i = s(n(5801)),
          o = s(n(4738)),
          r = s(n(3789)),
          d = n(7087),
          l = n(1970),
          c = n(3946),
          u = n(9468);
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            MOUSE_CLICK: f,
            MOUSE_SECOND_CLICK: g,
            MOUSE_DOWN: p,
            MOUSE_UP: y,
            MOUSE_OVER: E,
            MOUSE_OUT: I,
            DROPDOWN_CLOSE: T,
            DROPDOWN_OPEN: O,
            SLIDER_ACTIVE: m,
            SLIDER_INACTIVE: b,
            TAB_ACTIVE: S,
            TAB_INACTIVE: _,
            NAVBAR_CLOSE: R,
            NAVBAR_OPEN: A,
            MOUSE_MOVE: N,
            PAGE_SCROLL_DOWN: L,
            SCROLL_INTO_VIEW: v,
            SCROLL_OUT_OF_VIEW: C,
            PAGE_SCROLL_UP: U,
            SCROLLING_IN_VIEW: M,
            PAGE_FINISH: h,
            ECOMMERCE_CART_CLOSE: P,
            ECOMMERCE_CART_OPEN: V,
            PAGE_START: x,
            PAGE_SCROLL: F,
          } = d.EventTypeConsts,
          G = "COMPONENT_ACTIVE",
          D = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: X } = d.IX2EngineConstants,
          { getNamespacedParameterId: w } = u.IX2VanillaUtils,
          k = (e) => (t) => !!("object" == typeof t && e(t)) || t,
          B = k(({ element: e, nativeEvent: t }) => e === t.target),
          z = k(({ element: e, nativeEvent: t }) => e.contains(t.target)),
          W = (0, i.default)([B, z]),
          j = (e, t) => {
            if (t) {
              let { ixData: n } = e.getState(),
                { events: a } = n,
                i = a[t];
              if (i && !ee[i.eventTypeId]) return i;
            }
            return null;
          },
          Q = ({ store: e, event: t }) => {
            let { action: n } = t,
              { autoStopEventId: a } = n.config;
            return !!j(e, a);
          },
          Y = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
            let { action: r, id: d } = t,
              { actionListId: c, autoStopEventId: u } = r.config,
              s = j(e, u);
            return (
              s &&
                (0, l.stopActionGroup)({
                  store: e,
                  eventId: u,
                  eventTarget: n,
                  eventStateKey: u + X + a.split(X)[1],
                  actionListId: (0, o.default)(s, "action.config.actionListId"),
                }),
              (0, l.stopActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: a,
                actionListId: c,
              }),
              (0, l.startActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: a,
                actionListId: c,
              }),
              i
            );
          },
          H = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
          K = { handler: H(W, Y) },
          $ = { ...K, types: [G, D].join(" ") },
          q = [
            { target: window, types: "resize orientationchange", throttle: !0 },
            {
              target: document,
              types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
              throttle: !0,
            },
          ],
          Z = "mouseover mouseout",
          J = { types: q },
          ee = { PAGE_START: x, PAGE_FINISH: h },
          et = (() => {
            let e = void 0 !== window.pageXOffset,
              t =
                "CSS1Compat" === document.compatMode
                  ? document.documentElement
                  : document.body;
            return () => ({
              scrollLeft: e ? window.pageXOffset : t.scrollLeft,
              scrollTop: e ? window.pageYOffset : t.scrollTop,
              stiffScrollTop: (0, r.default)(
                e ? window.pageYOffset : t.scrollTop,
                0,
                t.scrollHeight - window.innerHeight
              ),
              scrollWidth: t.scrollWidth,
              scrollHeight: t.scrollHeight,
              clientWidth: t.clientWidth,
              clientHeight: t.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            });
          })(),
          en = (e, t) =>
            !(
              e.left > t.right ||
              e.right < t.left ||
              e.top > t.bottom ||
              e.bottom < t.top
            ),
          ea = ({ element: e, nativeEvent: t }) => {
            let { type: n, target: a, relatedTarget: i } = t,
              o = e.contains(a);
            if ("mouseover" === n && o) return !0;
            let r = e.contains(i);
            return "mouseout" === n && !!o && !!r;
          },
          ei = (e) => {
            let {
                element: t,
                event: { config: n },
              } = e,
              { clientWidth: a, clientHeight: i } = et(),
              o = n.scrollOffsetValue,
              r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
            return en(t.getBoundingClientRect(), {
              left: 0,
              top: r,
              right: a,
              bottom: i - r,
            });
          },
          eo = (e) => (t, n) => {
            let { type: a } = t.nativeEvent,
              i = -1 !== [G, D].indexOf(a) ? a === G : n.isActive,
              o = { ...n, isActive: i };
            return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
          },
          er = (e) => (t, n) => {
            let a = { elementHovered: ea(t) };
            return (
              ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
                e(t, a)) ||
              a
            );
          },
          ed =
            (e) =>
            (t, n = {}) => {
              let a,
                i,
                { stiffScrollTop: o, scrollHeight: r, innerHeight: d } = et(),
                {
                  event: { config: l, eventTypeId: c },
                } = t,
                { scrollOffsetValue: u, scrollOffsetUnit: s } = l,
                f = r - d,
                g = Number((o / f).toFixed(2));
              if (n && n.percentTop === g) return n;
              let p = ("PX" === s ? u : (d * (u || 0)) / 100) / f,
                y = 0;
              n &&
                ((a = g > n.percentTop),
                (y = (i = n.scrollingDown !== a) ? g : n.anchorTop));
              let E = c === L ? g >= y + p : g <= y - p,
                I = {
                  ...n,
                  percentTop: g,
                  inBounds: E,
                  anchorTop: y,
                  scrollingDown: a,
                };
              return (
                (n && E && (i || I.inBounds !== n.inBounds) && e(t, I)) || I
              );
            },
          el = (e, t) =>
            e.left > t.left &&
            e.left < t.right &&
            e.top > t.top &&
            e.top < t.bottom,
          ec =
            (e) =>
            (t, n = { clickCount: 0 }) => {
              let a = { clickCount: (n.clickCount % 2) + 1 };
              return (a.clickCount !== n.clickCount && e(t, a)) || a;
            },
          eu = (e = !0) => ({
            ...$,
            handler: H(
              e ? W : B,
              eo((e, t) => (t.isActive ? K.handler(e, t) : t))
            ),
          }),
          es = (e = !0) => ({
            ...$,
            handler: H(
              e ? W : B,
              eo((e, t) => (t.isActive ? t : K.handler(e, t)))
            ),
          }),
          ef = {
            ...J,
            handler:
              ((a = (e, t) => {
                let { elementVisible: n } = t,
                  { event: a, store: i } = e,
                  { ixData: o } = i.getState(),
                  { events: r } = o;
                return !r[a.action.config.autoStopEventId] && t.triggered
                  ? t
                  : (a.eventTypeId === v) === n
                  ? (Y(e), { ...t, triggered: !0 })
                  : t;
              }),
              (e, t) => {
                let n = { ...t, elementVisible: ei(e) };
                return (
                  ((t
                    ? n.elementVisible !== t.elementVisible
                    : n.elementVisible) &&
                    a(e, n)) ||
                  n
                );
              }),
          },
          eg = {
            [m]: eu(),
            [b]: es(),
            [O]: eu(),
            [T]: es(),
            [A]: eu(!1),
            [R]: es(!1),
            [S]: eu(),
            [_]: es(),
            [V]: { types: "ecommerce-cart-open", handler: H(W, Y) },
            [P]: { types: "ecommerce-cart-close", handler: H(W, Y) },
            [f]: {
              types: "click",
              handler: H(
                W,
                ec((e, { clickCount: t }) => {
                  Q(e) ? 1 === t && Y(e) : Y(e);
                })
              ),
            },
            [g]: {
              types: "click",
              handler: H(
                W,
                ec((e, { clickCount: t }) => {
                  2 === t && Y(e);
                })
              ),
            },
            [p]: { ...K, types: "mousedown" },
            [y]: { ...K, types: "mouseup" },
            [E]: {
              types: Z,
              handler: H(
                W,
                er((e, t) => {
                  t.elementHovered && Y(e);
                })
              ),
            },
            [I]: {
              types: Z,
              handler: H(
                W,
                er((e, t) => {
                  t.elementHovered || Y(e);
                })
              ),
            },
            [N]: {
              types: "mousemove mouseout scroll",
              handler: (
                {
                  store: e,
                  element: t,
                  eventConfig: n,
                  nativeEvent: a,
                  eventStateKey: i,
                },
                o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
              ) => {
                let {
                    basedOn: r,
                    selectedAxis: l,
                    continuousParameterGroupId: u,
                    reverse: s,
                    restingState: f = 0,
                  } = n,
                  {
                    clientX: g = o.clientX,
                    clientY: p = o.clientY,
                    pageX: y = o.pageX,
                    pageY: E = o.pageY,
                  } = a,
                  I = "X_AXIS" === l,
                  T = "mouseout" === a.type,
                  O = f / 100,
                  m = u,
                  b = !1;
                switch (r) {
                  case d.EventBasedOn.VIEWPORT:
                    O = I
                      ? Math.min(g, window.innerWidth) / window.innerWidth
                      : Math.min(p, window.innerHeight) / window.innerHeight;
                    break;
                  case d.EventBasedOn.PAGE: {
                    let {
                      scrollLeft: e,
                      scrollTop: t,
                      scrollWidth: n,
                      scrollHeight: a,
                    } = et();
                    O = I ? Math.min(e + y, n) / n : Math.min(t + E, a) / a;
                    break;
                  }
                  case d.EventBasedOn.ELEMENT:
                  default: {
                    m = w(i, u);
                    let e = 0 === a.type.indexOf("mouse");
                    if (e && !0 !== W({ element: t, nativeEvent: a })) break;
                    let n = t.getBoundingClientRect(),
                      { left: o, top: r, width: d, height: l } = n;
                    if (!e && !el({ left: g, top: p }, n)) break;
                    (b = !0), (O = I ? (g - o) / d : (p - r) / l);
                  }
                }
                return (
                  T && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
                  (r !== d.EventBasedOn.ELEMENT ||
                    b ||
                    b !== o.elementHovered) &&
                    ((O = s ? 1 - O : O),
                    e.dispatch((0, c.parameterChanged)(m, O))),
                  {
                    elementHovered: b,
                    clientX: g,
                    clientY: p,
                    pageX: y,
                    pageY: E,
                  }
                );
              },
            },
            [F]: {
              types: q,
              handler: ({ store: e, eventConfig: t }) => {
                let { continuousParameterGroupId: n, reverse: a } = t,
                  { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                  d = i / (o - r);
                (d = a ? 1 - d : d), e.dispatch((0, c.parameterChanged)(n, d));
              },
            },
            [M]: {
              types: q,
              handler: (
                { element: e, store: t, eventConfig: n, eventStateKey: a },
                i = { scrollPercent: 0 }
              ) => {
                let {
                    scrollLeft: o,
                    scrollTop: r,
                    scrollWidth: l,
                    scrollHeight: u,
                    clientHeight: s,
                  } = et(),
                  {
                    basedOn: f,
                    selectedAxis: g,
                    continuousParameterGroupId: p,
                    startsEntering: y,
                    startsExiting: E,
                    addEndOffset: I,
                    addStartOffset: T,
                    addOffsetValue: O = 0,
                    endOffsetValue: m = 0,
                  } = n;
                if (f === d.EventBasedOn.VIEWPORT) {
                  let e = "X_AXIS" === g ? o / l : r / u;
                  return (
                    e !== i.scrollPercent &&
                      t.dispatch((0, c.parameterChanged)(p, e)),
                    { scrollPercent: e }
                  );
                }
                {
                  let n = w(a, p),
                    o = e.getBoundingClientRect(),
                    r = (T ? O : 0) / 100,
                    d = (I ? m : 0) / 100;
                  (r = y ? r : 1 - r), (d = E ? d : 1 - d);
                  let l = o.top + Math.min(o.height * r, s),
                    f = Math.min(s + (o.top + o.height * d - l), u),
                    g = Math.min(Math.max(0, s - l), f) / f;
                  return (
                    g !== i.scrollPercent &&
                      t.dispatch((0, c.parameterChanged)(n, g)),
                    { scrollPercent: g }
                  );
                }
              },
            },
            [v]: ef,
            [C]: ef,
            [L]: {
              ...J,
              handler: ed((e, t) => {
                t.scrollingDown && Y(e);
              }),
            },
            [U]: {
              ...J,
              handler: ed((e, t) => {
                t.scrollingDown || Y(e);
              }),
            },
            [h]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: H(B, (e, t) => {
                let n = { finished: "complete" === document.readyState };
                return n.finished && !(t && t.finshed) && Y(e), n;
              }),
            },
            [x]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: H(B, (e, t) => (t || Y(e), { started: !0 })),
            },
          };
      },
      4609: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
          i = (e = Object.freeze({}), t) =>
            t.type === a ? t.payload.ixData || Object.freeze({}) : e;
      },
      7718: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function () {
              return b;
            },
          });
        let a = n(7087),
          i = n(9468),
          o = n(1185),
          {
            IX2_RAW_DATA_IMPORTED: r,
            IX2_SESSION_STOPPED: d,
            IX2_INSTANCE_ADDED: l,
            IX2_INSTANCE_STARTED: c,
            IX2_INSTANCE_REMOVED: u,
            IX2_ANIMATION_FRAME_CHANGED: s,
          } = a.IX2EngineActionTypes,
          {
            optimizeFloat: f,
            applyEasing: g,
            createBezierEasing: p,
          } = i.IX2EasingUtils,
          { RENDER_GENERAL: y } = a.IX2EngineConstants,
          {
            getItemConfigByKey: E,
            getRenderType: I,
            getStyleProp: T,
          } = i.IX2VanillaUtils,
          O = (e, t) => {
            let n,
              a,
              i,
              r,
              {
                position: d,
                parameterId: l,
                actionGroups: c,
                destinationKeys: u,
                smoothing: s,
                restingValue: p,
                actionTypeId: y,
                customEasingFn: I,
                skipMotion: T,
                skipToValue: O,
              } = e,
              { parameters: m } = t.payload,
              b = Math.max(1 - s, 0.01),
              S = m[l];
            null == S && ((b = 1), (S = p));
            let _ = f((Math.max(S, 0) || 0) - d),
              R = T ? O : f(d + _ * b),
              A = 100 * R;
            if (R === d && e.current) return e;
            for (let e = 0, { length: t } = c; e < t; e++) {
              let { keyframe: t, actionItems: o } = c[e];
              if ((0 === e && (n = o[0]), A >= t)) {
                n = o[0];
                let d = c[e + 1],
                  l = d && A !== t;
                (a = l ? d.actionItems[0] : null),
                  l && ((i = t / 100), (r = (d.keyframe - t) / 100));
              }
            }
            let N = {};
            if (n && !a)
              for (let e = 0, { length: t } = u; e < t; e++) {
                let t = u[e];
                N[t] = E(y, t, n.config);
              }
            else if (n && a && void 0 !== i && void 0 !== r) {
              let e = (R - i) / r,
                t = g(n.config.easing, e, I);
              for (let e = 0, { length: i } = u; e < i; e++) {
                let i = u[e],
                  o = E(y, i, n.config),
                  r = (E(y, i, a.config) - o) * t + o;
                N[i] = r;
              }
            }
            return (0, o.merge)(e, { position: R, current: N });
          },
          m = (e, t) => {
            let {
                active: n,
                origin: a,
                start: i,
                immediate: r,
                renderType: d,
                verbose: l,
                actionItem: c,
                destination: u,
                destinationKeys: s,
                pluginDuration: p,
                instanceDelay: E,
                customEasingFn: I,
                skipMotion: T,
              } = e,
              O = c.config.easing,
              { duration: m, delay: b } = c.config;
            null != p && (m = p),
              (b = null != E ? E : b),
              d === y ? (m = 0) : (r || T) && (m = b = 0);
            let { now: S } = t.payload;
            if (n && a) {
              let t = S - (i + b);
              if (l) {
                let t = m + b,
                  n = f(Math.min(Math.max(0, (S - i) / t), 1));
                e = (0, o.set)(e, "verboseTimeElapsed", t * n);
              }
              if (t < 0) return e;
              let n = f(Math.min(Math.max(0, t / m), 1)),
                r = g(O, n, I),
                d = {},
                c = null;
              return (
                s.length &&
                  (c = s.reduce((e, t) => {
                    let n = u[t],
                      i = parseFloat(a[t]) || 0,
                      o = parseFloat(n) - i;
                    return (e[t] = o * r + i), e;
                  }, {})),
                (d.current = c),
                (d.position = n),
                1 === n && ((d.active = !1), (d.complete = !0)),
                (0, o.merge)(e, d)
              );
            }
            return e;
          },
          b = (e = Object.freeze({}), t) => {
            switch (t.type) {
              case r:
                return t.payload.ixInstances || Object.freeze({});
              case d:
                return Object.freeze({});
              case l: {
                let {
                    instanceId: n,
                    elementId: a,
                    actionItem: i,
                    eventId: r,
                    eventTarget: d,
                    eventStateKey: l,
                    actionListId: c,
                    groupIndex: u,
                    isCarrier: s,
                    origin: f,
                    destination: g,
                    immediate: y,
                    verbose: E,
                    continuous: O,
                    parameterId: m,
                    actionGroups: b,
                    smoothing: S,
                    restingValue: _,
                    pluginInstance: R,
                    pluginDuration: A,
                    instanceDelay: N,
                    skipMotion: L,
                    skipToValue: v,
                  } = t.payload,
                  { actionTypeId: C } = i,
                  U = I(C),
                  M = T(U, C),
                  h = Object.keys(g).filter(
                    (e) => null != g[e] && "string" != typeof g[e]
                  ),
                  { easing: P } = i.config;
                return (0, o.set)(e, n, {
                  id: n,
                  elementId: a,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: f,
                  destination: g,
                  destinationKeys: h,
                  immediate: y,
                  verbose: E,
                  current: null,
                  actionItem: i,
                  actionTypeId: C,
                  eventId: r,
                  eventTarget: d,
                  eventStateKey: l,
                  actionListId: c,
                  groupIndex: u,
                  renderType: U,
                  isCarrier: s,
                  styleProp: M,
                  continuous: O,
                  parameterId: m,
                  actionGroups: b,
                  smoothing: S,
                  restingValue: _,
                  pluginInstance: R,
                  pluginDuration: A,
                  instanceDelay: N,
                  skipMotion: L,
                  skipToValue: v,
                  customEasingFn:
                    Array.isArray(P) && 4 === P.length ? p(P) : void 0,
                });
              }
              case c: {
                let { instanceId: n, time: a } = t.payload;
                return (0, o.mergeIn)(e, [n], {
                  active: !0,
                  complete: !1,
                  start: a,
                });
              }
              case u: {
                let { instanceId: n } = t.payload;
                if (!e[n]) return e;
                let a = {},
                  i = Object.keys(e),
                  { length: o } = i;
                for (let t = 0; t < o; t++) {
                  let o = i[t];
                  o !== n && (a[o] = e[o]);
                }
                return a;
              }
              case s: {
                let n = e,
                  a = Object.keys(e),
                  { length: i } = a;
                for (let r = 0; r < i; r++) {
                  let i = a[r],
                    d = e[i],
                    l = d.continuous ? O : m;
                  n = (0, o.set)(n, i, l(d, t));
                }
                return n;
              }
              default:
                return e;
            }
          };
      },
      1540: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let {
            IX2_RAW_DATA_IMPORTED: a,
            IX2_SESSION_STOPPED: i,
            IX2_PARAMETER_CHANGED: o,
          } = n(7087).IX2EngineActionTypes,
          r = (e = {}, t) => {
            switch (t.type) {
              case a:
                return t.payload.ixParameters || {};
              case i:
                return {};
              case o: {
                let { key: n, value: a } = t.payload;
                return (e[n] = a), e;
              }
              default:
                return e;
            }
          };
      },
      7243: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let a = n(9516),
          i = n(4609),
          o = n(628),
          r = n(5862),
          d = n(9468),
          l = n(7718),
          c = n(1540),
          { ixElements: u } = d.IX2ElementsReducer,
          s = (0, a.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: r.ixSession,
            ixElements: u,
            ixInstances: l.ixInstances,
            ixParameters: c.ixParameters,
          });
      },
      628: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let a = n(7087),
          i = n(1185),
          {
            IX2_PREVIEW_REQUESTED: o,
            IX2_PLAYBACK_REQUESTED: r,
            IX2_STOP_REQUESTED: d,
            IX2_CLEAR_REQUESTED: l,
          } = a.IX2EngineActionTypes,
          c = { preview: {}, playback: {}, stop: {}, clear: {} },
          u = Object.create(null, {
            [o]: { value: "preview" },
            [r]: { value: "playback" },
            [d]: { value: "stop" },
            [l]: { value: "clear" },
          }),
          s = (e = c, t) => {
            if (t.type in u) {
              let n = [u[t.type]];
              return (0, i.setIn)(e, [n], { ...t.payload });
            }
            return e;
          };
      },
      5862: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function () {
              return E;
            },
          });
        let a = n(7087),
          i = n(1185),
          {
            IX2_SESSION_INITIALIZED: o,
            IX2_SESSION_STARTED: r,
            IX2_TEST_FRAME_RENDERED: d,
            IX2_SESSION_STOPPED: l,
            IX2_EVENT_LISTENER_ADDED: c,
            IX2_EVENT_STATE_CHANGED: u,
            IX2_ANIMATION_FRAME_CHANGED: s,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
            IX2_VIEWPORT_WIDTH_CHANGED: g,
            IX2_MEDIA_QUERIES_DEFINED: p,
          } = a.IX2EngineActionTypes,
          y = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1,
          },
          E = (e = y, t) => {
            switch (t.type) {
              case o: {
                let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
                return (0, i.merge)(e, {
                  hasBoundaryNodes: n,
                  reducedMotion: a,
                });
              }
              case r:
                return (0, i.set)(e, "active", !0);
              case d: {
                let {
                  payload: { step: n = 20 },
                } = t;
                return (0, i.set)(e, "tick", e.tick + n);
              }
              case l:
                return y;
              case s: {
                let {
                  payload: { now: n },
                } = t;
                return (0, i.set)(e, "tick", n);
              }
              case c: {
                let n = (0, i.addLast)(e.eventListeners, t.payload);
                return (0, i.set)(e, "eventListeners", n);
              }
              case u: {
                let { stateKey: n, newState: a } = t.payload;
                return (0, i.setIn)(e, ["eventState", n], a);
              }
              case f: {
                let { actionListId: n, isPlaying: a } = t.payload;
                return (0, i.setIn)(e, ["playbackState", n], a);
              }
              case g: {
                let { width: n, mediaQueries: a } = t.payload,
                  o = a.length,
                  r = null;
                for (let e = 0; e < o; e++) {
                  let { key: t, min: i, max: o } = a[e];
                  if (n >= i && n <= o) {
                    r = t;
                    break;
                  }
                }
                return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
              }
              case p:
                return (0, i.set)(e, "hasDefinedMediaQueries", !0);
              default:
                return e;
            }
          };
      },
      7377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return u;
          },
          createPluginInstance: function () {
            return l;
          },
          getPluginConfig: function () {
            return i;
          },
          getPluginDestination: function () {
            return d;
          },
          getPluginDuration: function () {
            return o;
          },
          getPluginOrigin: function () {
            return r;
          },
          renderPlugin: function () {
            return c;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = (e) => e.value,
          o = (e, t) => {
            if ("auto" !== t.config.duration) return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0
              ? 1e3 * n
              : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
          },
          r = (e) => e || { value: 0 },
          d = (e) => ({ value: e.value }),
          l = (e) => {
            let t = window.Webflow.require("lottie");
            if (!t) return null;
            let n = t.createInstance(e);
            return n.stop(), n.setSubframe(!0), n;
          },
          c = (e, t, n) => {
            if (!e) return;
            let a = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * a);
          },
          u = (e) => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop();
          };
      },
      2570: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return p;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return l;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return c;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return g;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = "--wf-rive-fit",
          o = "--wf-rive-alignment",
          r = (e) => document.querySelector(`[data-w-id="${e}"]`),
          d = () => window.Webflow.require("rive"),
          l = (e, t) => e.value.inputs[t],
          c = () => null,
          u = (e, t) => {
            if (e) return e;
            let n = {},
              { inputs: a = {} } = t.config.value;
            for (let e in a) null == a[e] && (n[e] = 0);
            return n;
          },
          s = (e) => e.value.inputs ?? {},
          f = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0) return e;
            let n = t?.config?.target?.pluginElement;
            return n ? r(n) : null;
          },
          g = (e, { PLUGIN_RIVE: t }, n) => {
            let a = d();
            if (!a) return;
            let r = a.getInstance(e),
              l = a.rive.StateMachineInputType,
              { name: c, inputs: u = {} } = n.config.value || {};
            function s(e) {
              if (e.loaded) n();
              else {
                let t = () => {
                  n(), e?.off("load", t);
                };
                e?.on("load", t);
              }
              function n() {
                let n = e.stateMachineInputs(c);
                if (null != n) {
                  if ((e.isPlaying || e.play(c, !1), i in u || o in u)) {
                    let t = e.layout,
                      n = u[i] ?? t.fit,
                      a = u[o] ?? t.alignment;
                    (n !== t.fit || a !== t.alignment) &&
                      (e.layout = t.copyWith({ fit: n, alignment: a }));
                  }
                  for (let e in u) {
                    if (e === i || e === o) continue;
                    let a = n.find((t) => t.name === e);
                    if (null != a)
                      switch (a.type) {
                        case l.Boolean:
                          null != u[e] && (a.value = !!u[e]);
                          break;
                        case l.Number: {
                          let n = t[e];
                          null != n && (a.value = n);
                          break;
                        }
                        case l.Trigger:
                          u[e] && a.fire();
                      }
                  }
                }
              }
            }
            r?.rive ? s(r.rive) : a.setLoadHandler(e, s);
          },
          p = (e, t) => null;
      },
      2866: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          clearPlugin: function () {
            return p;
          },
          createPluginInstance: function () {
            return f;
          },
          getPluginConfig: function () {
            return d;
          },
          getPluginDestination: function () {
            return s;
          },
          getPluginDuration: function () {
            return l;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return g;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
          o = () => window.Webflow.require("spline"),
          r = (e, t) => e.filter((e) => !t.includes(e)),
          d = (e, t) => e.value[t],
          l = () => null,
          c = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          }),
          u = (e, t) => {
            let n = Object.keys(t.config.value);
            if (e) {
              let t = r(n, Object.keys(e));
              return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
            }
            return n.reduce((e, t) => ((e[t] = c[t]), e), {});
          },
          s = (e) => e.value,
          f = (e, t) => {
            let n = t?.config?.target?.pluginElement;
            return n ? i(n) : null;
          },
          g = (e, t, n) => {
            let a = o();
            if (!a) return;
            let i = a.getInstance(e),
              r = n.config.target.objectId,
              d = (e) => {
                if (!e)
                  throw Error("Invalid spline app passed to renderSpline");
                let n = r && e.findObjectById(r);
                if (!n) return;
                let { PLUGIN_SPLINE: a } = t;
                null != a.positionX && (n.position.x = a.positionX),
                  null != a.positionY && (n.position.y = a.positionY),
                  null != a.positionZ && (n.position.z = a.positionZ),
                  null != a.rotationX && (n.rotation.x = a.rotationX),
                  null != a.rotationY && (n.rotation.y = a.rotationY),
                  null != a.rotationZ && (n.rotation.z = a.rotationZ),
                  null != a.scaleX && (n.scale.x = a.scaleX),
                  null != a.scaleY && (n.scale.y = a.scaleY),
                  null != a.scaleZ && (n.scale.z = a.scaleZ);
              };
            i ? d(i.spline) : a.setLoadHandler(e, d);
          },
          p = () => null;
      },
      1407: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          clearPlugin: function () {
            return g;
          },
          createPluginInstance: function () {
            return u;
          },
          getPluginConfig: function () {
            return r;
          },
          getPluginDestination: function () {
            return c;
          },
          getPluginDuration: function () {
            return d;
          },
          getPluginOrigin: function () {
            return l;
          },
          renderPlugin: function () {
            return f;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = n(380),
          r = (e, t) => e.value[t],
          d = () => null,
          l = (e, t) => {
            if (e) return e;
            let n = t.config.value,
              a = t.config.target.objectId,
              i = getComputedStyle(document.documentElement).getPropertyValue(
                a
              );
            return null != n.size
              ? { size: parseInt(i, 10) }
              : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(i) }
              : null != n.red && null != n.green && null != n.blue
              ? (0, o.normalizeColor)(i)
              : void 0;
          },
          c = (e) => e.value,
          u = () => null,
          s = {
            color: {
              match: ({ red: e, green: t, blue: n, alpha: a }) =>
                [e, t, n, a].every((e) => null != e),
              getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
                `rgba(${e}, ${t}, ${n}, ${a})`,
            },
            size: {
              match: ({ size: e }) => null != e,
              getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
            },
          },
          f = (e, t, n) => {
            let {
                target: { objectId: a },
                value: { unit: i },
              } = n.config,
              o = t.PLUGIN_VARIABLE,
              r = Object.values(s).find((e) => e.match(o, i));
            r &&
              document.documentElement.style.setProperty(a, r.getValue(o, i));
          },
          g = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n);
          };
      },
      3690: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let a = n(7087),
          i = c(n(7377)),
          o = c(n(2866)),
          r = c(n(2570)),
          d = c(n(1407));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        function c(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
        let u = new Map([
          [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
          [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
          [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
          [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...d }],
        ]);
      },
      8023: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
            return m;
          },
          IX2_ANIMATION_FRAME_CHANGED: function () {
            return p;
          },
          IX2_CLEAR_REQUESTED: function () {
            return s;
          },
          IX2_ELEMENT_STATE_CHANGED: function () {
            return O;
          },
          IX2_EVENT_LISTENER_ADDED: function () {
            return f;
          },
          IX2_EVENT_STATE_CHANGED: function () {
            return g;
          },
          IX2_INSTANCE_ADDED: function () {
            return E;
          },
          IX2_INSTANCE_REMOVED: function () {
            return T;
          },
          IX2_INSTANCE_STARTED: function () {
            return I;
          },
          IX2_MEDIA_QUERIES_DEFINED: function () {
            return S;
          },
          IX2_PARAMETER_CHANGED: function () {
            return y;
          },
          IX2_PLAYBACK_REQUESTED: function () {
            return c;
          },
          IX2_PREVIEW_REQUESTED: function () {
            return l;
          },
          IX2_RAW_DATA_IMPORTED: function () {
            return i;
          },
          IX2_SESSION_INITIALIZED: function () {
            return o;
          },
          IX2_SESSION_STARTED: function () {
            return r;
          },
          IX2_SESSION_STOPPED: function () {
            return d;
          },
          IX2_STOP_REQUESTED: function () {
            return u;
          },
          IX2_TEST_FRAME_RENDERED: function () {
            return _;
          },
          IX2_VIEWPORT_WIDTH_CHANGED: function () {
            return b;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = "IX2_RAW_DATA_IMPORTED",
          o = "IX2_SESSION_INITIALIZED",
          r = "IX2_SESSION_STARTED",
          d = "IX2_SESSION_STOPPED",
          l = "IX2_PREVIEW_REQUESTED",
          c = "IX2_PLAYBACK_REQUESTED",
          u = "IX2_STOP_REQUESTED",
          s = "IX2_CLEAR_REQUESTED",
          f = "IX2_EVENT_LISTENER_ADDED",
          g = "IX2_EVENT_STATE_CHANGED",
          p = "IX2_ANIMATION_FRAME_CHANGED",
          y = "IX2_PARAMETER_CHANGED",
          E = "IX2_INSTANCE_ADDED",
          I = "IX2_INSTANCE_STARTED",
          T = "IX2_INSTANCE_REMOVED",
          O = "IX2_ELEMENT_STATE_CHANGED",
          m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
          b = "IX2_VIEWPORT_WIDTH_CHANGED",
          S = "IX2_MEDIA_QUERIES_DEFINED",
          _ = "IX2_TEST_FRAME_RENDERED";
      },
      2686: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          ABSTRACT_NODE: function () {
            return et;
          },
          AUTO: function () {
            return W;
          },
          BACKGROUND: function () {
            return D;
          },
          BACKGROUND_COLOR: function () {
            return G;
          },
          BAR_DELIMITER: function () {
            return Y;
          },
          BORDER_COLOR: function () {
            return X;
          },
          BOUNDARY_SELECTOR: function () {
            return l;
          },
          CHILDREN: function () {
            return H;
          },
          COLON_DELIMITER: function () {
            return Q;
          },
          COLOR: function () {
            return w;
          },
          COMMA_DELIMITER: function () {
            return j;
          },
          CONFIG_UNIT: function () {
            return E;
          },
          CONFIG_VALUE: function () {
            return f;
          },
          CONFIG_X_UNIT: function () {
            return g;
          },
          CONFIG_X_VALUE: function () {
            return c;
          },
          CONFIG_Y_UNIT: function () {
            return p;
          },
          CONFIG_Y_VALUE: function () {
            return u;
          },
          CONFIG_Z_UNIT: function () {
            return y;
          },
          CONFIG_Z_VALUE: function () {
            return s;
          },
          DISPLAY: function () {
            return k;
          },
          FILTER: function () {
            return P;
          },
          FLEX: function () {
            return B;
          },
          FONT_VARIATION_SETTINGS: function () {
            return V;
          },
          HEIGHT: function () {
            return F;
          },
          HTML_ELEMENT: function () {
            return J;
          },
          IMMEDIATE_CHILDREN: function () {
            return K;
          },
          IX2_ID_DELIMITER: function () {
            return i;
          },
          OPACITY: function () {
            return h;
          },
          PARENT: function () {
            return q;
          },
          PLAIN_OBJECT: function () {
            return ee;
          },
          PRESERVE_3D: function () {
            return Z;
          },
          RENDER_GENERAL: function () {
            return ea;
          },
          RENDER_PLUGIN: function () {
            return eo;
          },
          RENDER_STYLE: function () {
            return ei;
          },
          RENDER_TRANSFORM: function () {
            return en;
          },
          ROTATE_X: function () {
            return N;
          },
          ROTATE_Y: function () {
            return L;
          },
          ROTATE_Z: function () {
            return v;
          },
          SCALE_3D: function () {
            return A;
          },
          SCALE_X: function () {
            return S;
          },
          SCALE_Y: function () {
            return _;
          },
          SCALE_Z: function () {
            return R;
          },
          SIBLINGS: function () {
            return $;
          },
          SKEW: function () {
            return C;
          },
          SKEW_X: function () {
            return U;
          },
          SKEW_Y: function () {
            return M;
          },
          TRANSFORM: function () {
            return I;
          },
          TRANSLATE_3D: function () {
            return b;
          },
          TRANSLATE_X: function () {
            return T;
          },
          TRANSLATE_Y: function () {
            return O;
          },
          TRANSLATE_Z: function () {
            return m;
          },
          WF_PAGE: function () {
            return o;
          },
          WIDTH: function () {
            return x;
          },
          WILL_CHANGE: function () {
            return z;
          },
          W_MOD_IX: function () {
            return d;
          },
          W_MOD_JS: function () {
            return r;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = "|",
          o = "data-wf-page",
          r = "w-mod-js",
          d = "w-mod-ix",
          l = ".w-dyn-item",
          c = "xValue",
          u = "yValue",
          s = "zValue",
          f = "value",
          g = "xUnit",
          p = "yUnit",
          y = "zUnit",
          E = "unit",
          I = "transform",
          T = "translateX",
          O = "translateY",
          m = "translateZ",
          b = "translate3d",
          S = "scaleX",
          _ = "scaleY",
          R = "scaleZ",
          A = "scale3d",
          N = "rotateX",
          L = "rotateY",
          v = "rotateZ",
          C = "skew",
          U = "skewX",
          M = "skewY",
          h = "opacity",
          P = "filter",
          V = "font-variation-settings",
          x = "width",
          F = "height",
          G = "backgroundColor",
          D = "background",
          X = "borderColor",
          w = "color",
          k = "display",
          B = "flex",
          z = "willChange",
          W = "AUTO",
          j = ",",
          Q = ":",
          Y = "|",
          H = "CHILDREN",
          K = "IMMEDIATE_CHILDREN",
          $ = "SIBLINGS",
          q = "PARENT",
          Z = "preserve-3d",
          J = "HTML_ELEMENT",
          ee = "PLAIN_OBJECT",
          et = "ABSTRACT_NODE",
          en = "RENDER_TRANSFORM",
          ea = "RENDER_GENERAL",
          ei = "RENDER_STYLE",
          eo = "RENDER_PLUGIN";
      },
      262: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          ActionAppliesTo: function () {
            return o;
          },
          ActionTypeConsts: function () {
            return i;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
          },
          o = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
          };
      },
      7087: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          ActionTypeConsts: function () {
            return r.ActionTypeConsts;
          },
          IX2EngineActionTypes: function () {
            return d;
          },
          IX2EngineConstants: function () {
            return l;
          },
          QuickEffectIds: function () {
            return o.QuickEffectIds;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = c(n(1833), t),
          r = c(n(262), t);
        c(n(8704), t), c(n(3213), t);
        let d = s(n(8023)),
          l = s(n(2686));
        function c(e, t) {
          return (
            Object.keys(e).forEach(function (n) {
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }),
            e
          );
        }
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function s(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
      },
      3213: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let {
            TRANSFORM_MOVE: a,
            TRANSFORM_SCALE: i,
            TRANSFORM_ROTATE: o,
            TRANSFORM_SKEW: r,
            STYLE_SIZE: d,
            STYLE_FILTER: l,
            STYLE_FONT_VARIATION: c,
          } = n(262).ActionTypeConsts,
          u = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [d]: !0, [l]: !0, [c]: !0 };
      },
      1833: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {
          EventAppliesTo: function () {
            return o;
          },
          EventBasedOn: function () {
            return r;
          },
          EventContinuousMouseAxes: function () {
            return d;
          },
          EventLimitAffectedElements: function () {
            return l;
          },
          EventTypeConsts: function () {
            return i;
          },
          QuickEffectDirectionConsts: function () {
            return u;
          },
          QuickEffectIds: function () {
            return c;
          },
        };
        for (var a in n)
          Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
        let i = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
          },
          o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
          r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
          d = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
          l = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
          },
          c = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
          },
          u = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
          };
      },
      8704: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
            "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
      },
      380: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let n = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32",
        };
        function a(e) {
          let t,
            a,
            i,
            o = 1,
            r = e.replace(/\s/g, "").toLowerCase(),
            d = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
          if (d.startsWith("#")) {
            let e = d.substring(1);
            3 === e.length || 4 === e.length
              ? ((t = parseInt(e[0] + e[0], 16)),
                (a = parseInt(e[1] + e[1], 16)),
                (i = parseInt(e[2] + e[2], 16)),
                4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
              : (6 === e.length || 8 === e.length) &&
                ((t = parseInt(e.substring(0, 2), 16)),
                (a = parseInt(e.substring(2, 4), 16)),
                (i = parseInt(e.substring(4, 6), 16)),
                8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
          } else if (d.startsWith("rgba")) {
            let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (a = parseInt(e[1], 10)),
              (i = parseInt(e[2], 10)),
              (o = parseFloat(e[3]));
          } else if (d.startsWith("rgb")) {
            let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (a = parseInt(e[1], 10)),
              (i = parseInt(e[2], 10));
          } else if (d.startsWith("hsla")) {
            let e,
              n,
              r,
              l = d.match(/hsla\(([^)]+)\)/)[1].split(","),
              c = parseFloat(l[0]),
              u = parseFloat(l[1].replace("%", "")) / 100,
              s = parseFloat(l[2].replace("%", "")) / 100;
            o = parseFloat(l[3]);
            let f = (1 - Math.abs(2 * s - 1)) * u,
              g = f * (1 - Math.abs(((c / 60) % 2) - 1)),
              p = s - f / 2;
            c >= 0 && c < 60
              ? ((e = f), (n = g), (r = 0))
              : c >= 60 && c < 120
              ? ((e = g), (n = f), (r = 0))
              : c >= 120 && c < 180
              ? ((e = 0), (n = f), (r = g))
              : c >= 180 && c < 240
              ? ((e = 0), (n = g), (r = f))
              : c >= 240 && c < 300
              ? ((e = g), (n = 0), (r = f))
              : ((e = f), (n = 0), (r = g)),
              (t = Math.round((e + p) * 255)),
              (a = Math.round((n + p) * 255)),
              (i = Math.round((r + p) * 255));
          } else if (d.startsWith("hsl")) {
            let e,
              n,
              o,
              r = d.match(/hsl\(([^)]+)\)/)[1].split(","),
              l = parseFloat(r[0]),
              c = parseFloat(r[1].replace("%", "")) / 100,
              u = parseFloat(r[2].replace("%", "")) / 100,
              s = (1 - Math.abs(2 * u - 1)) * c,
              f = s * (1 - Math.abs(((l / 60) % 2) - 1)),
              g = u - s / 2;
            l >= 0 && l < 60
              ? ((e = s), (n = f), (o = 0))
              : l >= 60 && l < 120
              ? ((e = f), (n = s), (o = 0))
              : l >= 120 && l < 180
              ? ((e = 0), (n = s), (o = f))
              : l >= 180 && l < 240
              ? ((e = 0), (n = f), (o = s))
              : l >= 240 && l < 300
              ? ((e = f), (n = 0), (o = s))
              : ((e = s), (n = 0), (o = f)),
              (t = Math.round((e + g) * 255)),
              (a = Math.round((n + g) * 255)),
              (i = Math.round((o + g) * 255));
          }
          if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
            throw Error(
              `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
            );
          return { red: t, green: a, blue: i, alpha: o };
        }
      },
      9468: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          IX2BrowserSupport: function () {
            return o;
          },
          IX2EasingUtils: function () {
            return d;
          },
          IX2Easings: function () {
            return r;
          },
          IX2ElementsReducer: function () {
            return l;
          },
          IX2VanillaPlugins: function () {
            return c;
          },
          IX2VanillaUtils: function () {
            return u;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = f(n(2662)),
          r = f(n(8686)),
          d = f(n(3767)),
          l = f(n(5861)),
          c = f(n(1799)),
          u = f(n(4124));
        function s(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (s = function (e) {
            return e ? n : t;
          })(e);
        }
        function f(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
      },
      2662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a,
          i = {
            ELEMENT_MATCHES: function () {
              return c;
            },
            FLEX_PREFIXED: function () {
              return u;
            },
            IS_BROWSER_ENV: function () {
              return d;
            },
            TRANSFORM_PREFIXED: function () {
              return s;
            },
            TRANSFORM_STYLE_PREFIXED: function () {
              return g;
            },
            withBrowser: function () {
              return l;
            },
          };
        for (var o in i)
          Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
        let r = (a = n(9777)) && a.__esModule ? a : { default: a },
          d = "undefined" != typeof window,
          l = (e, t) => (d ? e() : t),
          c = l(() =>
            (0, r.default)(
              [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
                "webkitMatchesSelector",
              ],
              (e) => e in Element.prototype
            )
          ),
          u = l(() => {
            let e = document.createElement("i"),
              t = [
                "flex",
                "-webkit-flex",
                "-ms-flexbox",
                "-moz-box",
                "-webkit-box",
              ];
            try {
              let { length: n } = t;
              for (let a = 0; a < n; a++) {
                let n = t[a];
                if (((e.style.display = n), e.style.display === n)) return n;
              }
              return "";
            } catch (e) {
              return "";
            }
          }, "flex"),
          s = l(() => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
              let t = ["Webkit", "Moz", "ms"],
                { length: n } = t;
              for (let a = 0; a < n; a++) {
                let n = t[a] + "Transform";
                if (void 0 !== e.style[n]) return n;
              }
            }
            return "transform";
          }, "transform"),
          f = s.split("transform")[0],
          g = f ? f + "TransformStyle" : "transformStyle";
      },
      3767: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a,
          i = {
            applyEasing: function () {
              return s;
            },
            createBezierEasing: function () {
              return u;
            },
            optimizeFloat: function () {
              return c;
            },
          };
        for (var o in i)
          Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
        let r = (function (e, t) {
            if (e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = l(t);
            if (n && n.has(e)) return n.get(e);
            var a = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
              if (
                "default" !== o &&
                Object.prototype.hasOwnProperty.call(e, o)
              ) {
                var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                r && (r.get || r.set)
                  ? Object.defineProperty(a, o, r)
                  : (a[o] = e[o]);
              }
            return (a.default = e), n && n.set(e, a), a;
          })(n(8686)),
          d = (a = n(1361)) && a.__esModule ? a : { default: a };
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        function c(e, t = 5, n = 10) {
          let a = Math.pow(n, t),
            i = Number(Math.round(e * a) / a);
          return Math.abs(i) > 1e-4 ? i : 0;
        }
        function u(e) {
          return (0, d.default)(...e);
        }
        function s(e, t, n) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : n
            ? c(t > 0 ? n(t) : t)
            : c(t > 0 && e && r[e] ? r[e](t) : t);
        }
      },
      8686: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a,
          i = {
            bounce: function () {
              return B;
            },
            bouncePast: function () {
              return z;
            },
            ease: function () {
              return d;
            },
            easeIn: function () {
              return l;
            },
            easeInOut: function () {
              return u;
            },
            easeOut: function () {
              return c;
            },
            inBack: function () {
              return P;
            },
            inCirc: function () {
              return C;
            },
            inCubic: function () {
              return p;
            },
            inElastic: function () {
              return F;
            },
            inExpo: function () {
              return N;
            },
            inOutBack: function () {
              return x;
            },
            inOutCirc: function () {
              return M;
            },
            inOutCubic: function () {
              return E;
            },
            inOutElastic: function () {
              return D;
            },
            inOutExpo: function () {
              return v;
            },
            inOutQuad: function () {
              return g;
            },
            inOutQuart: function () {
              return O;
            },
            inOutQuint: function () {
              return S;
            },
            inOutSine: function () {
              return A;
            },
            inQuad: function () {
              return s;
            },
            inQuart: function () {
              return I;
            },
            inQuint: function () {
              return m;
            },
            inSine: function () {
              return _;
            },
            outBack: function () {
              return V;
            },
            outBounce: function () {
              return h;
            },
            outCirc: function () {
              return U;
            },
            outCubic: function () {
              return y;
            },
            outElastic: function () {
              return G;
            },
            outExpo: function () {
              return L;
            },
            outQuad: function () {
              return f;
            },
            outQuart: function () {
              return T;
            },
            outQuint: function () {
              return b;
            },
            outSine: function () {
              return R;
            },
            swingFrom: function () {
              return w;
            },
            swingFromTo: function () {
              return X;
            },
            swingTo: function () {
              return k;
            },
          };
        for (var o in i)
          Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
        let r = (a = n(1361)) && a.__esModule ? a : { default: a },
          d = (0, r.default)(0.25, 0.1, 0.25, 1),
          l = (0, r.default)(0.42, 0, 1, 1),
          c = (0, r.default)(0, 0, 0.58, 1),
          u = (0, r.default)(0.42, 0, 0.58, 1);
        function s(e) {
          return Math.pow(e, 2);
        }
        function f(e) {
          return -(Math.pow(e - 1, 2) - 1);
        }
        function g(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
        }
        function p(e) {
          return Math.pow(e, 3);
        }
        function y(e) {
          return Math.pow(e - 1, 3) + 1;
        }
        function E(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function I(e) {
          return Math.pow(e, 4);
        }
        function T(e) {
          return -(Math.pow(e - 1, 4) - 1);
        }
        function O(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function m(e) {
          return Math.pow(e, 5);
        }
        function b(e) {
          return Math.pow(e - 1, 5) + 1;
        }
        function S(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function _(e) {
          return -Math.cos((Math.PI / 2) * e) + 1;
        }
        function R(e) {
          return Math.sin((Math.PI / 2) * e);
        }
        function A(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function N(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function L(e) {
          return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function v(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function C(e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }
        function U(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function M(e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function h(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function P(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function V(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function x(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function F(e) {
          let t = 1.70158,
            n = 0,
            a = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
        }
        function G(e) {
          let t = 1.70158,
            n = 0,
            a = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
        }
        function D(e) {
          let t = 1.70158,
            n = 0,
            a = 1;
          return 0 === e
            ? 0
            : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              e < 1)
            ? -0.5 *
              (a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n))
            : a *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n) *
                0.5 +
              1;
        }
        function X(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function w(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function k(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function B(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function z(e) {
          return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
            ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
            : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
      },
      1799: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          clearPlugin: function () {
            return y;
          },
          createPluginInstance: function () {
            return g;
          },
          getPluginConfig: function () {
            return c;
          },
          getPluginDestination: function () {
            return f;
          },
          getPluginDuration: function () {
            return s;
          },
          getPluginOrigin: function () {
            return u;
          },
          isPluginType: function () {
            return d;
          },
          renderPlugin: function () {
            return p;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = n(2662),
          r = n(3690);
        function d(e) {
          return r.pluginMethodMap.has(e);
        }
        let l = (e) => (t) => {
            if (!o.IS_BROWSER_ENV) return () => null;
            let n = r.pluginMethodMap.get(t);
            if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
            let a = n[e];
            if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
            return a;
          },
          c = l("getPluginConfig"),
          u = l("getPluginOrigin"),
          s = l("getPluginDuration"),
          f = l("getPluginDestination"),
          g = l("createPluginInstance"),
          p = l("renderPlugin"),
          y = l("clearPlugin");
      },
      4124: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          cleanupHTMLElement: function () {
            return ej;
          },
          clearAllStyles: function () {
            return eB;
          },
          clearObjectCache: function () {
            return es;
          },
          getActionListProgress: function () {
            return eK;
          },
          getAffectedElements: function () {
            return em;
          },
          getComputedStyle: function () {
            return eb;
          },
          getDestinationValues: function () {
            return eC;
          },
          getElementId: function () {
            return ey;
          },
          getInstanceId: function () {
            return eg;
          },
          getInstanceOrigin: function () {
            return eA;
          },
          getItemConfigByKey: function () {
            return ev;
          },
          getMaxDurationItemIndex: function () {
            return eH;
          },
          getNamespacedParameterId: function () {
            return eZ;
          },
          getRenderType: function () {
            return eU;
          },
          getStyleProp: function () {
            return eM;
          },
          mediaQueriesEqual: function () {
            return e0;
          },
          observeStore: function () {
            return eT;
          },
          reduceListToGroup: function () {
            return e$;
          },
          reifyState: function () {
            return eE;
          },
          renderHTMLElement: function () {
            return eh;
          },
          shallowEqual: function () {
            return u.default;
          },
          shouldAllowMediaQuery: function () {
            return eJ;
          },
          shouldNamespaceEventParameter: function () {
            return eq;
          },
          stringifyTarget: function () {
            return e1;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = y(n(4075)),
          r = y(n(1455)),
          d = y(n(5720)),
          l = n(1185),
          c = n(7087),
          u = y(n(7164)),
          s = n(3767),
          f = n(380),
          g = n(1799),
          p = n(2662);
        function y(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            BACKGROUND: E,
            TRANSFORM: I,
            TRANSLATE_3D: T,
            SCALE_3D: O,
            ROTATE_X: m,
            ROTATE_Y: b,
            ROTATE_Z: S,
            SKEW: _,
            PRESERVE_3D: R,
            FLEX: A,
            OPACITY: N,
            FILTER: L,
            FONT_VARIATION_SETTINGS: v,
            WIDTH: C,
            HEIGHT: U,
            BACKGROUND_COLOR: M,
            BORDER_COLOR: h,
            COLOR: P,
            CHILDREN: V,
            IMMEDIATE_CHILDREN: x,
            SIBLINGS: F,
            PARENT: G,
            DISPLAY: D,
            WILL_CHANGE: X,
            AUTO: w,
            COMMA_DELIMITER: k,
            COLON_DELIMITER: B,
            BAR_DELIMITER: z,
            RENDER_TRANSFORM: W,
            RENDER_GENERAL: j,
            RENDER_STYLE: Q,
            RENDER_PLUGIN: Y,
          } = c.IX2EngineConstants,
          {
            TRANSFORM_MOVE: H,
            TRANSFORM_SCALE: K,
            TRANSFORM_ROTATE: $,
            TRANSFORM_SKEW: q,
            STYLE_OPACITY: Z,
            STYLE_FILTER: J,
            STYLE_FONT_VARIATION: ee,
            STYLE_SIZE: et,
            STYLE_BACKGROUND_COLOR: en,
            STYLE_BORDER: ea,
            STYLE_TEXT_COLOR: ei,
            GENERAL_DISPLAY: eo,
            OBJECT_VALUE: er,
          } = c.ActionTypeConsts,
          ed = (e) => e.trim(),
          el = Object.freeze({ [en]: M, [ea]: h, [ei]: P }),
          ec = Object.freeze({
            [p.TRANSFORM_PREFIXED]: I,
            [M]: E,
            [N]: N,
            [L]: L,
            [C]: C,
            [U]: U,
            [v]: v,
          }),
          eu = new Map();
        function es() {
          eu.clear();
        }
        let ef = 1;
        function eg() {
          return "i" + ef++;
        }
        let ep = 1;
        function ey(e, t) {
          for (let n in e) {
            let a = e[n];
            if (a && a.ref === t) return a.id;
          }
          return "e" + ep++;
        }
        function eE({ events: e, actionLists: t, site: n } = {}) {
          let a = (0, r.default)(
              e,
              (e, t) => {
                let { eventTypeId: n } = t;
                return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
              },
              {}
            ),
            i = n && n.mediaQueries,
            o = [];
          return (
            i
              ? (o = i.map((e) => e.key))
              : ((i = []),
                console.warn("IX2 missing mediaQueries in site data")),
            {
              ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: a,
                mediaQueries: i,
                mediaQueryKeys: o,
              },
            }
          );
        }
        let eI = (e, t) => e === t;
        function eT({ store: e, select: t, onChange: n, comparator: a = eI }) {
          let { getState: i, subscribe: o } = e,
            r = o(function () {
              let o = t(i());
              if (null == o) return void r();
              a(o, d) || n((d = o), e);
            }),
            d = t(i());
          return r;
        }
        function eO(e) {
          let t = typeof e;
          if ("string" === t) return { id: e };
          if (null != e && "object" === t) {
            let {
              id: t,
              objectId: n,
              selector: a,
              selectorGuids: i,
              appliesTo: o,
              useEventTarget: r,
            } = e;
            return {
              id: t,
              objectId: n,
              selector: a,
              selectorGuids: i,
              appliesTo: o,
              useEventTarget: r,
            };
          }
          return {};
        }
        function em({
          config: e,
          event: t,
          eventTarget: n,
          elementRoot: a,
          elementApi: i,
        }) {
          let o, r, d;
          if (!i) throw Error("IX2 missing elementApi");
          let { targets: l } = e;
          if (Array.isArray(l) && l.length > 0)
            return l.reduce(
              (e, o) =>
                e.concat(
                  em({
                    config: { target: o },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i,
                  })
                ),
              []
            );
          let {
              getValidDocument: u,
              getQuerySelector: s,
              queryDocument: f,
              getChildElements: g,
              getSiblingElements: y,
              matchSelector: E,
              elementContains: I,
              isSiblingNode: T,
            } = i,
            { target: O } = e;
          if (!O) return [];
          let {
            id: m,
            objectId: b,
            selector: S,
            selectorGuids: _,
            appliesTo: R,
            useEventTarget: A,
          } = eO(O);
          if (b) return [eu.has(b) ? eu.get(b) : eu.set(b, {}).get(b)];
          if (R === c.EventAppliesTo.PAGE) {
            let e = u(m);
            return e ? [e] : [];
          }
          let N = (t?.action?.config?.affectedElements ?? {})[m || S] || {},
            L = !!(N.id || N.selector),
            v = t && s(eO(t.target));
          if (
            (L
              ? ((o = N.limitAffectedElements), (r = v), (d = s(N)))
              : (r = d = s({ id: m, selector: S, selectorGuids: _ })),
            t && A)
          ) {
            let e = n && (d || !0 === A) ? [n] : f(v);
            if (d) {
              if (A === G) return f(d).filter((t) => e.some((e) => I(t, e)));
              if (A === V) return f(d).filter((t) => e.some((e) => I(e, t)));
              if (A === F) return f(d).filter((t) => e.some((e) => T(e, t)));
            }
            return e;
          }
          return null == r || null == d
            ? []
            : p.IS_BROWSER_ENV && a
            ? f(d).filter((e) => a.contains(e))
            : o === V
            ? f(r, d)
            : o === x
            ? g(f(r)).filter(E(d))
            : o === F
            ? y(f(r)).filter(E(d))
            : f(d);
        }
        function eb({ element: e, actionItem: t }) {
          if (!p.IS_BROWSER_ENV) return {};
          let { actionTypeId: n } = t;
          switch (n) {
            case et:
            case en:
            case ea:
            case ei:
            case eo:
              return window.getComputedStyle(e);
            default:
              return {};
          }
        }
        let eS = /px/,
          e_ = (e, t) =>
            t.reduce(
              (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e),
              e || {}
            ),
          eR = (e, t) =>
            t.reduce(
              (e, t) => (
                null == e[t.type] &&
                  (e[t.type] = ex[t.type] || t.defaultValue || 0),
                e
              ),
              e || {}
            );
        function eA(e, t = {}, n = {}, a, i) {
          let { getStyle: r } = i,
            { actionTypeId: d } = a;
          if ((0, g.isPluginType)(d)) return (0, g.getPluginOrigin)(d)(t[d], a);
          switch (a.actionTypeId) {
            case H:
            case K:
            case $:
            case q:
              return t[a.actionTypeId] || eP[a.actionTypeId];
            case J:
              return e_(t[a.actionTypeId], a.config.filters);
            case ee:
              return eR(t[a.actionTypeId], a.config.fontVariations);
            case Z:
              return { value: (0, o.default)(parseFloat(r(e, N)), 1) };
            case et: {
              let t,
                i = r(e, C),
                d = r(e, U);
              return {
                widthValue:
                  a.config.widthUnit === w
                    ? eS.test(i)
                      ? parseFloat(i)
                      : parseFloat(n.width)
                    : (0, o.default)(parseFloat(i), parseFloat(n.width)),
                heightValue:
                  a.config.heightUnit === w
                    ? eS.test(d)
                      ? parseFloat(d)
                      : parseFloat(n.height)
                    : (0, o.default)(parseFloat(d), parseFloat(n.height)),
              };
            }
            case en:
            case ea:
            case ei:
              return (function ({
                element: e,
                actionTypeId: t,
                computedStyle: n,
                getStyle: a,
              }) {
                let i = el[t],
                  r = a(e, i),
                  d = (function (e, t) {
                    let n = e.exec(t);
                    return n ? n[1] : "";
                  })(eX, eD.test(r) ? r : n[i]).split(k);
                return {
                  rValue: (0, o.default)(parseInt(d[0], 10), 255),
                  gValue: (0, o.default)(parseInt(d[1], 10), 255),
                  bValue: (0, o.default)(parseInt(d[2], 10), 255),
                  aValue: (0, o.default)(parseFloat(d[3]), 1),
                };
              })({
                element: e,
                actionTypeId: a.actionTypeId,
                computedStyle: n,
                getStyle: r,
              });
            case eo:
              return { value: (0, o.default)(r(e, D), n.display) };
            case er:
              return t[a.actionTypeId] || { value: 0 };
            default:
              return;
          }
        }
        let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
          ev = (e, t, n) => {
            if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(n, t);
            switch (e) {
              case J: {
                let e = (0, d.default)(n.filters, ({ type: e }) => e === t);
                return e ? e.value : 0;
              }
              case ee: {
                let e = (0, d.default)(
                  n.fontVariations,
                  ({ type: e }) => e === t
                );
                return e ? e.value : 0;
              }
              default:
                return n[t];
            }
          };
        function eC({ element: e, actionItem: t, elementApi: n }) {
          if ((0, g.isPluginType)(t.actionTypeId))
            return (0, g.getPluginDestination)(t.actionTypeId)(t.config);
          switch (t.actionTypeId) {
            case H:
            case K:
            case $:
            case q: {
              let { xValue: e, yValue: n, zValue: a } = t.config;
              return { xValue: e, yValue: n, zValue: a };
            }
            case et: {
              let { getStyle: a, setStyle: i, getProperty: o } = n,
                { widthUnit: r, heightUnit: d } = t.config,
                { widthValue: l, heightValue: c } = t.config;
              if (!p.IS_BROWSER_ENV) return { widthValue: l, heightValue: c };
              if (r === w) {
                let t = a(e, C);
                i(e, C, ""), (l = o(e, "offsetWidth")), i(e, C, t);
              }
              if (d === w) {
                let t = a(e, U);
                i(e, U, ""), (c = o(e, "offsetHeight")), i(e, U, t);
              }
              return { widthValue: l, heightValue: c };
            }
            case en:
            case ea:
            case ei: {
              let {
                rValue: a,
                gValue: i,
                bValue: o,
                aValue: r,
                globalSwatchId: d,
              } = t.config;
              if (d && d.startsWith("--")) {
                let { getStyle: t } = n,
                  a = t(e, d),
                  i = (0, f.normalizeColor)(a);
                return {
                  rValue: i.red,
                  gValue: i.green,
                  bValue: i.blue,
                  aValue: i.alpha,
                };
              }
              return { rValue: a, gValue: i, bValue: o, aValue: r };
            }
            case J:
              return t.config.filters.reduce(eN, {});
            case ee:
              return t.config.fontVariations.reduce(eL, {});
            default: {
              let { value: e } = t.config;
              return { value: e };
            }
          }
        }
        function eU(e) {
          return /^TRANSFORM_/.test(e)
            ? W
            : /^STYLE_/.test(e)
            ? Q
            : /^GENERAL_/.test(e)
            ? j
            : /^PLUGIN_/.test(e)
            ? Y
            : void 0;
        }
        function eM(e, t) {
          return e === Q ? t.replace("STYLE_", "").toLowerCase() : null;
        }
        function eh(e, t, n, a, i, o, d, l, c) {
          switch (l) {
            case W:
              var u = e,
                s = t,
                f = n,
                y = i,
                E = d;
              let I = eG
                  .map((e) => {
                    let t = eP[e],
                      {
                        xValue: n = t.xValue,
                        yValue: a = t.yValue,
                        zValue: i = t.zValue,
                        xUnit: o = "",
                        yUnit: r = "",
                        zUnit: d = "",
                      } = s[e] || {};
                    switch (e) {
                      case H:
                        return `${T}(${n}${o}, ${a}${r}, ${i}${d})`;
                      case K:
                        return `${O}(${n}${o}, ${a}${r}, ${i}${d})`;
                      case $:
                        return `${m}(${n}${o}) ${b}(${a}${r}) ${S}(${i}${d})`;
                      case q:
                        return `${_}(${n}${o}, ${a}${r})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: N } = E;
              ew(u, p.TRANSFORM_PREFIXED, E),
                N(u, p.TRANSFORM_PREFIXED, I),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: n, zValue: a }
                ) {
                  return (
                    (e === H && void 0 !== a) ||
                    (e === K && void 0 !== a) ||
                    (e === $ && (void 0 !== t || void 0 !== n))
                  );
                })(y, f) && N(u, p.TRANSFORM_STYLE_PREFIXED, R);
              return;
            case Q:
              return (function (e, t, n, a, i, o) {
                let { setStyle: d } = o;
                switch (a.actionTypeId) {
                  case et: {
                    let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                      { widthValue: r, heightValue: l } = n;
                    void 0 !== r &&
                      (t === w && (t = "px"), ew(e, C, o), d(e, C, r + t)),
                      void 0 !== l &&
                        (i === w && (i = "px"), ew(e, U, o), d(e, U, l + i));
                    break;
                  }
                  case J:
                    var l = a.config;
                    let c = (0, r.default)(
                        n,
                        (e, t, n) => `${e} ${n}(${t}${eF(n, l)})`,
                        ""
                      ),
                      { setStyle: u } = o;
                    ew(e, L, o), u(e, L, c);
                    break;
                  case ee:
                    a.config;
                    let s = (0, r.default)(
                        n,
                        (e, t, n) => (e.push(`"${n}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: f } = o;
                    ew(e, v, o), f(e, v, s);
                    break;
                  case en:
                  case ea:
                  case ei: {
                    let t = el[a.actionTypeId],
                      i = Math.round(n.rValue),
                      r = Math.round(n.gValue),
                      l = Math.round(n.bValue),
                      c = n.aValue;
                    ew(e, t, o),
                      d(
                        e,
                        t,
                        c >= 1
                          ? `rgb(${i},${r},${l})`
                          : `rgba(${i},${r},${l},${c})`
                      );
                    break;
                  }
                  default: {
                    let { unit: t = "" } = a.config;
                    ew(e, i, o), d(e, i, n.value + t);
                  }
                }
              })(e, 0, n, i, o, d);
            case j:
              var M = e,
                h = i,
                P = d;
              let { setStyle: V } = P;
              if (h.actionTypeId === eo) {
                let { value: e } = h.config;
                V(M, D, e === A && p.IS_BROWSER_ENV ? p.FLEX_PREFIXED : e);
              }
              return;
            case Y: {
              let { actionTypeId: e } = i;
              if ((0, g.isPluginType)(e))
                return (0, g.renderPlugin)(e)(c, t, i);
            }
          }
        }
        let eP = {
            [H]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [K]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
            [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [q]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          eV = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100,
          }),
          ex = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          eF = (e, t) => {
            let n = (0, d.default)(t.filters, ({ type: t }) => t === e);
            if (n && n.unit) return n.unit;
            switch (e) {
              case "blur":
                return "px";
              case "hue-rotate":
                return "deg";
              default:
                return "%";
            }
          },
          eG = Object.keys(eP),
          eD = /^rgb/,
          eX = RegExp("rgba?\\(([^)]+)\\)");
        function ew(e, t, n) {
          if (!p.IS_BROWSER_ENV) return;
          let a = ec[t];
          if (!a) return;
          let { getStyle: i, setStyle: o } = n,
            r = i(e, X);
          if (!r) return void o(e, X, a);
          let d = r.split(k).map(ed);
          -1 === d.indexOf(a) && o(e, X, d.concat(a).join(k));
        }
        function ek(e, t, n) {
          if (!p.IS_BROWSER_ENV) return;
          let a = ec[t];
          if (!a) return;
          let { getStyle: i, setStyle: o } = n,
            r = i(e, X);
          r &&
            -1 !== r.indexOf(a) &&
            o(
              e,
              X,
              r
                .split(k)
                .map(ed)
                .filter((e) => e !== a)
                .join(k)
            );
        }
        function eB({ store: e, elementApi: t }) {
          let { ixData: n } = e.getState(),
            { events: a = {}, actionLists: i = {} } = n;
          Object.keys(a).forEach((e) => {
            let n = a[e],
              { config: o } = n.action,
              { actionListId: r } = o,
              d = i[r];
            d && ez({ actionList: d, event: n, elementApi: t });
          }),
            Object.keys(i).forEach((e) => {
              ez({ actionList: i[e], elementApi: t });
            });
        }
        function ez({ actionList: e = {}, event: t, elementApi: n }) {
          let { actionItemGroups: a, continuousParameterGroups: i } = e;
          a &&
            a.forEach((e) => {
              eW({ actionGroup: e, event: t, elementApi: n });
            }),
            i &&
              i.forEach((e) => {
                let { continuousActionGroups: a } = e;
                a.forEach((e) => {
                  eW({ actionGroup: e, event: t, elementApi: n });
                });
              });
        }
        function eW({ actionGroup: e, event: t, elementApi: n }) {
          let { actionItems: a } = e;
          a.forEach((e) => {
            let a,
              { actionTypeId: i, config: o } = e;
            (a = (0, g.isPluginType)(i)
              ? (t) => (0, g.clearPlugin)(i)(t, e)
              : eQ({ effect: eY, actionTypeId: i, elementApi: n })),
              em({ config: o, event: t, elementApi: n }).forEach(a);
          });
        }
        function ej(e, t, n) {
          let { setStyle: a, getStyle: i } = n,
            { actionTypeId: o } = t;
          if (o === et) {
            let { config: n } = t;
            n.widthUnit === w && a(e, C, ""), n.heightUnit === w && a(e, U, "");
          }
          i(e, X) && eQ({ effect: ek, actionTypeId: o, elementApi: n })(e);
        }
        let eQ =
          ({ effect: e, actionTypeId: t, elementApi: n }) =>
          (a) => {
            switch (t) {
              case H:
              case K:
              case $:
              case q:
                e(a, p.TRANSFORM_PREFIXED, n);
                break;
              case J:
                e(a, L, n);
                break;
              case ee:
                e(a, v, n);
                break;
              case Z:
                e(a, N, n);
                break;
              case et:
                e(a, C, n), e(a, U, n);
                break;
              case en:
              case ea:
              case ei:
                e(a, el[t], n);
                break;
              case eo:
                e(a, D, n);
            }
          };
        function eY(e, t, n) {
          let { setStyle: a } = n;
          ek(e, t, n),
            a(e, t, ""),
            t === p.TRANSFORM_PREFIXED && a(e, p.TRANSFORM_STYLE_PREFIXED, "");
        }
        function eH(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e, a) => {
              let { config: i } = e,
                o = i.delay + i.duration;
              o >= t && ((t = o), (n = a));
            }),
            n
          );
        }
        function eK(e, t) {
          let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
            { actionItem: i, verboseTimeElapsed: o = 0 } = t,
            r = 0,
            d = 0;
          return (
            n.forEach((e, t) => {
              if (a && 0 === t) return;
              let { actionItems: n } = e,
                l = n[eH(n)],
                { config: c, actionTypeId: u } = l;
              i.id === l.id && (d = r + o);
              let s = eU(u) === j ? 0 : c.duration;
              r += c.delay + s;
            }),
            r > 0 ? (0, s.optimizeFloat)(d / r) : 0
          );
        }
        function e$({ actionList: e, actionItemId: t, rawData: n }) {
          let { actionItemGroups: a, continuousParameterGroups: i } = e,
            o = [],
            r = (e) => (
              o.push((0, l.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === t
            );
          return (
            a && a.some(({ actionItems: e }) => e.some(r)),
            i &&
              i.some((e) => {
                let { continuousActionGroups: t } = e;
                return t.some(({ actionItems: e }) => e.some(r));
              }),
            (0, l.setIn)(n, ["actionLists"], {
              [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
            })
          );
        }
        function eq(e, { basedOn: t }) {
          return (
            (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
              (t === c.EventBasedOn.ELEMENT || null == t)) ||
            (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
          );
        }
        function eZ(e, t) {
          return e + B + t;
        }
        function eJ(e, t) {
          return null == t || -1 !== e.indexOf(t);
        }
        function e0(e, t) {
          return (0, u.default)(e && e.sort(), t && t.sort());
        }
        function e1(e) {
          if ("string" == typeof e) return e;
          if (e.pluginElement && e.objectId)
            return e.pluginElement + z + e.objectId;
          if (e.objectId) return e.objectId;
          let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
          return t + z + n + z + a;
        }
      },
      7164: function (e, t) {
        "use strict";
        function n(e, t) {
          return e === t
            ? 0 !== e || 0 !== t || 1 / e == 1 / t
            : e != e && t != t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let a = function (e, t) {
          if (n(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let a = Object.keys(e),
            i = Object.keys(t);
          if (a.length !== i.length) return !1;
          for (let i = 0; i < a.length; i++)
            if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
          return !0;
        };
      },
      5861: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = {
          createElementState: function () {
            return _;
          },
          ixElements: function () {
            return S;
          },
          mergeActionState: function () {
            return R;
          },
        };
        for (var i in a)
          Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
        let o = n(1185),
          r = n(7087),
          {
            HTML_ELEMENT: d,
            PLAIN_OBJECT: l,
            ABSTRACT_NODE: c,
            CONFIG_X_VALUE: u,
            CONFIG_Y_VALUE: s,
            CONFIG_Z_VALUE: f,
            CONFIG_VALUE: g,
            CONFIG_X_UNIT: p,
            CONFIG_Y_UNIT: y,
            CONFIG_Z_UNIT: E,
            CONFIG_UNIT: I,
          } = r.IX2EngineConstants,
          {
            IX2_SESSION_STOPPED: T,
            IX2_INSTANCE_ADDED: O,
            IX2_ELEMENT_STATE_CHANGED: m,
          } = r.IX2EngineActionTypes,
          b = {},
          S = (e = b, t = {}) => {
            switch (t.type) {
              case T:
                return b;
              case O: {
                let {
                    elementId: n,
                    element: a,
                    origin: i,
                    actionItem: r,
                    refType: d,
                  } = t.payload,
                  { actionTypeId: l } = r,
                  c = e;
                return (
                  (0, o.getIn)(c, [n, a]) !== a && (c = _(c, a, d, n, r)),
                  R(c, n, l, i, r)
                );
              }
              case m: {
                let {
                  elementId: n,
                  actionTypeId: a,
                  current: i,
                  actionItem: o,
                } = t.payload;
                return R(e, n, a, i, o);
              }
              default:
                return e;
            }
          };
        function _(e, t, n, a, i) {
          let r =
            n === l ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
          return (0, o.mergeIn)(e, [a], {
            id: a,
            ref: t,
            refId: r,
            refType: n,
          });
        }
        function R(e, t, n, a, i) {
          let r = (function (e) {
            let { config: t } = e;
            return A.reduce((e, n) => {
              let a = n[0],
                i = n[1],
                o = t[a],
                r = t[i];
              return null != o && null != r && (e[i] = r), e;
            }, {});
          })(i);
          return (0, o.mergeIn)(e, [t, "refState", n], a, r);
        }
        let A = [
          [u, p],
          [s, y],
          [f, E],
          [g, I],
        ];
      },
      4732: function () {
        Webflow.require("ix2").init({
          events: {
            "e-3": {
              id: "e-3",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-4",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".icon-button-2.rotate-icon",
                originalId: "baf75bfd-3a9b-5ebe-c46c-52c8b5450621",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".icon-button-2.rotate-icon",
                  originalId: "baf75bfd-3a9b-5ebe-c46c-52c8b5450621",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x177ee69fc5b,
            },
            "e-4": {
              id: "e-4",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-182",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".icon-button-2.rotate-icon",
                originalId: "baf75bfd-3a9b-5ebe-c46c-52c8b5450621",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".icon-button-2.rotate-icon",
                  originalId: "baf75bfd-3a9b-5ebe-c46c-52c8b5450621",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x177ee69fc6c,
            },
            "e-5": {
              id: "e-5",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-5",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-40",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".long-button",
                originalId:
                  "60bf711514b2601897e349dc|b2b9211d-6f42-3027-658a-f4c5fb8e6497",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".long-button",
                  originalId:
                    "60bf711514b2601897e349dc|b2b9211d-6f42-3027-658a-f4c5fb8e6497",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17889709884,
            },
            "e-6": {
              id: "e-6",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-39",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".long-button",
                originalId:
                  "60bf711514b2601897e349dc|b2b9211d-6f42-3027-658a-f4c5fb8e6497",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".long-button",
                  originalId:
                    "60bf711514b2601897e349dc|b2b9211d-6f42-3027-658a-f4c5fb8e6497",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17889709896,
            },
            "e-7": {
              id: "e-7",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-40",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "777f1ca5-ff37-a1a8-38c8-1e20386668d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "777f1ca5-ff37-a1a8-38c8-1e20386668d2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18167bdbe2f,
            },
            "e-8": {
              id: "e-8",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-39",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "777f1ca5-ff37-a1a8-38c8-1e20386668d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "777f1ca5-ff37-a1a8-38c8-1e20386668d2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18167bdbe2f,
            },
            "e-9": {
              id: "e-9",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-9",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "777f1ca5-ff37-a1a8-38c8-1e20386668d6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "777f1ca5-ff37-a1a8-38c8-1e20386668d6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-9-p",
                  smoothing: 90,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17f2f365aa9,
            },
            "e-18": {
              id: "e-18",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-13",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".section-header",
                originalId:
                  "634eded21ef9a98da27ff866|dfabb371-4117-9699-50af-f4843f65c84a",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".section-header",
                  originalId:
                    "634eded21ef9a98da27ff866|dfabb371-4117-9699-50af-f4843f65c84a",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-13-p",
                  smoothing: 80,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x183d90e4466,
            },
            "e-19": {
              id: "e-19",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-14",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-20",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".solid-button",
                originalId:
                  "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".solid-button",
                  originalId:
                    "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17977255f51,
            },
            "e-20": {
              id: "e-20",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-15",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-19",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".solid-button",
                originalId:
                  "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".solid-button",
                  originalId:
                    "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17977255f5b,
            },
            "e-21": {
              id: "e-21",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-22",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".sticky-list-item",
                originalId:
                  "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".sticky-list-item",
                  originalId:
                    "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17967b5ee7b,
            },
            "e-22": {
              id: "e-22",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-21",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".sticky-list-item",
                originalId:
                  "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".sticky-list-item",
                  originalId:
                    "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17967b5ee7e,
            },
            "e-31": {
              id: "e-31",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-32",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".solid-button-2",
                originalId:
                  "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".solid-button-2",
                  originalId:
                    "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17977255f51,
            },
            "e-32": {
              id: "e-32",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-21",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-31",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".solid-button-2",
                originalId:
                  "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".solid-button-2",
                  originalId:
                    "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17977255f5b,
            },
            "e-33": {
              id: "e-33",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-22",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-34",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".solid-button-2",
                originalId:
                  "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".solid-button-2",
                  originalId:
                    "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17977255f51,
            },
            "e-34": {
              id: "e-34",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-23",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-33",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".solid-button-2",
                originalId:
                  "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".solid-button-2",
                  originalId:
                    "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17977255f5b,
            },
            "e-39": {
              id: "e-39",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-194",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".underline-arrow-move-button.is-icon",
                originalId:
                  "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".underline-arrow-move-button.is-icon",
                  originalId:
                    "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x185b73a9b48,
            },
            "e-40": {
              id: "e-40",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-196",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".underline-arrow-move-button.is-icon",
                originalId:
                  "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".underline-arrow-move-button.is-icon",
                  originalId:
                    "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x185b73a9b48,
            },
            "e-41": {
              id: "e-41",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-195",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".underline-arrow-move-button.is-icon",
                originalId:
                  "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".underline-arrow-move-button.is-icon",
                  originalId:
                    "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x185b73a9b48,
            },
            "e-42": {
              id: "e-42",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-191",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".underline-arrow-move-button.is-icon",
                originalId:
                  "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".underline-arrow-move-button.is-icon",
                  originalId:
                    "63dc75307f03054a582b1fe7|5d244f16-1465-c25c-72b5-571d9d73e80a",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x185b73a9b48,
            },
            "e-45": {
              id: "e-45",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-75",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".sticky-list-item-2",
                originalId:
                  "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".sticky-list-item-2",
                  originalId:
                    "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17967b5ee7b,
            },
            "e-46": {
              id: "e-46",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-45",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".sticky-list-item-2",
                originalId:
                  "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".sticky-list-item-2",
                  originalId:
                    "60ad92ba62143657d9593d5e|6e28f772-91d1-d562-7cfb-37ca0633b550",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17967b5ee7e,
            },
            "e-47": {
              id: "e-47",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-32",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-48",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".anchor-link",
                originalId:
                  "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".anchor-link",
                  originalId:
                    "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17c67eaaf9f,
            },
            "e-48": {
              id: "e-48",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-33",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-47",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".anchor-link",
                originalId:
                  "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".anchor-link",
                  originalId:
                    "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17c67eaafab,
            },
            "e-49": {
              id: "e-49",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-34",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-66",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".anchor-link",
                originalId:
                  "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".anchor-link",
                  originalId:
                    "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17c67eb5764,
            },
            "e-50": {
              id: "e-50",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-35",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-49",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".anchor-link",
                originalId:
                  "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".anchor-link",
                  originalId:
                    "68ded219924add9fe466243a|04f3834b-fbf0-f751-a256-b5c2574ca969",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17c67eb576c,
            },
            "e-66": {
              id: "e-66",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-184",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".huge-button",
                originalId:
                  "656bd9020d6b0acfdbda5a4f|28773861-bf54-351b-c760-5896ae99ad19",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".huge-button",
                  originalId:
                    "656bd9020d6b0acfdbda5a4f|28773861-bf54-351b-c760-5896ae99ad19",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 170,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18a8b2ccb7d,
            },
            "e-70": {
              id: "e-70",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-39",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-177",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".card-item",
                originalId:
                  "656bd9020d6b0acfdbda5a4c|890f36ef-b0a7-4584-ce02-5beff8a0be98",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  id: "656bd9020d6b0acfdbda5a4c|890f36ef-b0a7-4584-ce02-5beff8a0be98",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18c3605125a,
            },
            "e-72": {
              id: "e-72",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-38",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-175",
                },
              },
              mediaQueries: ["main"],
              target: {
                selector: ".card-item",
                originalId:
                  "656bd9020d6b0acfdbda5a4c|890f36ef-b0a7-4584-ce02-5beff8a0be98",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  id: "656bd9020d6b0acfdbda5a4c|890f36ef-b0a7-4584-ce02-5beff8a0be98",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18c3605125b,
            },
            "e-73": {
              id: "e-73",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-43",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".scroll-section-wrapper",
                originalId:
                  "656bd9020d6b0acfdbda5a4c|4b4c55ac-f376-739c-9977-d29e991ec910",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".scroll-section-wrapper",
                  originalId:
                    "656bd9020d6b0acfdbda5a4c|4b4c55ac-f376-739c-9977-d29e991ec910",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-43-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x177defffff5,
            },
            "e-75": {
              id: "e-75",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-36",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".bg-hero-image",
                originalId:
                  "5e18a3d088b6fc9248b79241|75567dea-ffcd-ca94-a9da-69a138737329",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".bg-hero-image",
                  originalId:
                    "5e18a3d088b6fc9248b79241|75567dea-ffcd-ca94-a9da-69a138737329",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-36-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x17079066518,
            },
            "e-77": {
              id: "e-77",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-742",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".section-header-2",
                originalId:
                  "659d6fa2ac7c43e09b7f3295|6d0530ef-b076-3b6c-2450-07e4e7bae5f5",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".section-header-2",
                  originalId:
                    "659d6fa2ac7c43e09b7f3295|6d0530ef-b076-3b6c-2450-07e4e7bae5f5",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18d0e07b055,
            },
            "e-79": {
              id: "e-79",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-745",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".intro-paragraph",
                originalId:
                  "65aaa575e1a1f755b8e32055|23648dcb-be4a-dca0-58e6-a4e92ea660f4",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".intro-paragraph",
                  originalId:
                    "65aaa575e1a1f755b8e32055|23648dcb-be4a-dca0-58e6-a4e92ea660f4",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18dd7059b35,
            },
            "e-96": {
              id: "e-96",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-46",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-163",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".image-animation-trigger-5",
                originalId:
                  "622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".image-animation-trigger-5",
                  originalId:
                    "622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17f9ccc67ca,
            },
            "e-104": {
              id: "e-104",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-48",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".parallax-animation-3",
                originalId:
                  "65033b809dfb8b196b8d2a67|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".parallax-animation-3",
                  originalId:
                    "65033b809dfb8b196b8d2a67|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-48-p",
                  smoothing: 95,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18342c77dcc,
            },
            "e-110": {
              id: "e-110",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-47",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".parallax-animation-3",
                originalId:
                  "651a3a13a1268f3fcfef515e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".parallax-animation-3",
                  originalId:
                    "651a3a13a1268f3fcfef515e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-47-p",
                  smoothing: 95,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18342c77dcc,
            },
            "e-129": {
              id: "e-129",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-55",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".parallax-animation-3",
                originalId:
                  "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".parallax-animation-3",
                  originalId:
                    "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-55-p",
                  smoothing: 95,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18342c77dcc,
            },
            "e-131": {
              id: "e-131",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-53",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".parallax-animation-3",
                originalId:
                  "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".parallax-animation-3",
                  originalId:
                    "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-53-p",
                  smoothing: 95,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18342c77dcc,
            },
            "e-143": {
              id: "e-143",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-51",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-132",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".image-animation-trigger",
                originalId:
                  "622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".image-animation-trigger",
                  originalId:
                    "622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17f9ccc67ca,
            },
            "e-144": {
              id: "e-144",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-54",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".parallax-animation-3",
                originalId:
                  "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".parallax-animation-3",
                  originalId:
                    "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-54-p",
                  smoothing: 95,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18342c77dcc,
            },
            "e-147": {
              id: "e-147",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-52",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".parallax-animation-3",
                originalId:
                  "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".parallax-animation-3",
                  originalId:
                    "64a6c658abbf22c4f6e0890e|6d2c268a-9f3d-2606-b8d0-27f4aa7041bf",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-52-p",
                  smoothing: 95,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18342c77dcc,
            },
            "e-152": {
              id: "e-152",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-56",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".bg-hero-image-2",
                originalId:
                  "68ded219924add9fe466243a|4f47ad05-77af-7c86-451e-6ad31198b1f2",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".bg-hero-image-2",
                  originalId:
                    "68ded219924add9fe466243a|4f47ad05-77af-7c86-451e-6ad31198b1f2",
                  appliesTo: "CLASS",
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-56-p",
                  smoothing: 80,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x190713f1a6d,
            },
            "e-162": {
              id: "e-162",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-64",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-167",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-2",
                originalId:
                  "68ded219924add9fe466243a|236e98f7-cc03-ec4d-3a83-25380142a6bd",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-2",
                  originalId:
                    "68ded219924add9fe466243a|236e98f7-cc03-ec4d-3a83-25380142a6bd",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x176e12643db,
            },
            "e-163": {
              id: "e-163",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-169",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".grid-3-block-3",
                originalId:
                  "65a5378f60bb15643229581f|854045df-b1a4-c903-07b6-e1e5de6e5627",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".grid-3-block-3",
                  originalId:
                    "65a5378f60bb15643229581f|854045df-b1a4-c903-07b6-e1e5de6e5627",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x18af5d23269,
            },
            "e-167": {
              id: "e-167",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-62",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-162",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".accordion-2",
                originalId:
                  "68ded219924add9fe466243a|236e98f7-cc03-ec4d-3a83-25380142a6bd",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".accordion-2",
                  originalId:
                    "68ded219924add9fe466243a|236e98f7-cc03-ec4d-3a83-25380142a6bd",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x176e12643db,
            },
            "e-168": {
              id: "e-168",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-58",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-165",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".image-animation-trigger-6",
                originalId:
                  "622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".image-animation-trigger-6",
                  originalId:
                    "622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17f9ccc67ca,
            },
            "e-174": {
              id: "e-174",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-175",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".paragraph",
                originalId:
                  "67e58608fbefb3d036386892|97e8ef05-9c65-9095-69ae-cd6d80d39a28",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".paragraph",
                  originalId:
                    "67e58608fbefb3d036386892|97e8ef05-9c65-9095-69ae-cd6d80d39a28",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 500,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x1930c9fbb19,
            },
            "e-176": {
              id: "e-176",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-67",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "68ded219924add9fe466243a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-67-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 98,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-67-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 98,
                  restingState: 50,
                },
              ],
              createdOn: 0x196b5bba9ff,
            },
            "e-178": {
              id: "e-178",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-188",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".primary-button",
                originalId:
                  "681b79a941d1bcaad8c8c75a|a014c174-42c2-1c16-d3ab-6b4a54979084",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".primary-button",
                  originalId:
                    "681b79a941d1bcaad8c8c75a|a014c174-42c2-1c16-d3ab-6b4a54979084",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 500,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x1930c9e9b90,
            },
            "e-202": {
              id: "e-202",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: !1,
                config: {
                  actionListId: "slideInBottom",
                  autoStopEventId: "e-224",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".primary-button-2",
                originalId:
                  "68026ab386a53395b7eab0aa|a014c174-42c2-1c16-d3ab-6b4a54979084",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".primary-button-2",
                  originalId:
                    "68026ab386a53395b7eab0aa|a014c174-42c2-1c16-d3ab-6b4a54979084",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 500,
                direction: "BOTTOM",
                effectIn: !0,
              },
              createdOn: 0x1930c9e9b90,
            },
            "e-208": {
              id: "e-208",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-218",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e9",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1d05e47,
            },
            "e-209": {
              id: "e-209",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-215",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1cf0e06,
            },
            "e-211": {
              id: "e-211",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-223",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1986286c50f,
            },
            "e-212": {
              id: "e-212",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-227",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1d02eda,
            },
            "e-214": {
              id: "e-214",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-219",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e0",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec17fa9bf,
            },
            "e-215": {
              id: "e-215",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-209",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1cf0e05,
            },
            "e-217": {
              id: "e-217",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-220",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ef",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ef",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ed764c3c8,
            },
            "e-218": {
              id: "e-218",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-208",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e9",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1d05e48,
            },
            "e-219": {
              id: "e-219",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-214",
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e0",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec17fa9c0,
            },
            "e-220": {
              id: "e-220",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-217",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ef",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ef",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ed764c3c7,
            },
            "e-221": {
              id: "e-221",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-225",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ec",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1d090cc,
            },
            "e-222": {
              id: "e-222",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-224",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ed765135e,
            },
            "e-223": {
              id: "e-223",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-82",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-211",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1986286c50f,
            },
            "e-224": {
              id: "e-224",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-222",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126f3",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ed765135e,
            },
            "e-225": {
              id: "e-225",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-221",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126ec",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1d090cd,
            },
            "e-227": {
              id: "e-227",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-83",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-212",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126e6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18ec1d02eda,
            },
            "e-228": {
              id: "e-228",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-81",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|428443ad-bed3-d6b0-f2fe-3f4961f126cf",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-81-p",
                  smoothing: 70,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x198627fc20f,
            },
            "e-236": {
              id: "e-236",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-86",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|cc93d080-82b4-7b8e-e48d-4ea62e120d99",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|cc93d080-82b4-7b8e-e48d-4ea62e120d99",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-86-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1985418b6fd,
            },
            "e-258": {
              id: "e-258",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-85",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a",
                  appliesTo: "PAGE",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-85-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 70,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-85-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "VIEWPORT",
                  reverse: !1,
                  smoothing: 70,
                  restingState: 50,
                },
              ],
              createdOn: 0x1996cc5cd71,
            },
            "e-259": {
              id: "e-259",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_MOVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-91",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "68ded219924add9fe466243a|615316e1-48da-c0f5-2acb-29aa6033ec53",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|615316e1-48da-c0f5-2acb-29aa6033ec53",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-91-p",
                  selectedAxis: "X_AXIS",
                  basedOn: "ELEMENT",
                  reverse: !1,
                  smoothing: 90,
                  restingState: 50,
                },
                {
                  continuousParameterGroupId: "a-91-p-2",
                  selectedAxis: "Y_AXIS",
                  basedOn: "ELEMENT",
                  reverse: !1,
                  smoothing: 90,
                  restingState: 50,
                },
              ],
              createdOn: 0x1996cd3b3ea,
            },
            "e-265": {
              id: "e-265",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-86",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ded219924add9fe466243a|226748d8-8e0a-da59-a98f-75d73a07b417",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ded219924add9fe466243a|226748d8-8e0a-da59-a98f-75d73a07b417",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-86-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1996d0f68c4,
            },
          },
          actionLists: {
            "a-3": {
              id: "a-3",
              title: "Button Icon Tilt - IN",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-3-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-3-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {},
                        zValue: -35,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x177ee6a7c5b,
            },
            "a-4": {
              id: "a-4",
              title: "Button Icon Tilt - OFF",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-4-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 0,
                        target: {},
                        zValue: -35,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-4-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {},
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x177ee6a7c5b,
            },
            "a-5": {
              id: "a-5",
              title: "Long Button - IN",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-5-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "easeIn",
                        duration: 500,
                        target: {},
                        yValue: -45,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-5-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-5-n-3",
                      actionTypeId: "STYLE_FILTER",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        target: {},
                        filters: [
                          {
                            type: "invert",
                            filterId: "88d7",
                            value: 100,
                            unit: "%",
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1788970c389,
            },
            "a-6": {
              id: "a-6",
              title: "Long Button - OUT",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-6-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        yValue: -45,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-6-n-2",
                      actionTypeId: "STYLE_FILTER",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 300,
                        target: {},
                        filters: [
                          {
                            type: "invert",
                            filterId: "88d7",
                            value: 0,
                            unit: "%",
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x1788970c389,
            },
            "a-7": {
              id: "a-7",
              title: "Button on hover 5",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-7-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-7-n-2",
                      actionTypeId: "STYLE_FILTER",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-text-5",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913a",
                          ],
                        },
                        filters: [
                          {
                            type: "invert",
                            filterId: "7666",
                            value: 0,
                            unit: "%",
                          },
                        ],
                      },
                    },
                    {
                      id: "a-7-n-3",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-7-n-4",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-7-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        yValue: -50,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-7-n-6",
                      actionTypeId: "STYLE_FILTER",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-text-5",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913a",
                          ],
                        },
                        filters: [
                          {
                            type: "invert",
                            filterId: "080d",
                            value: 100,
                            unit: "%",
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17c004f5a1e,
            },
            "a-8": {
              id: "a-8",
              title: "Button hover out 11",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-8-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        yValue: -125,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-8-n-2",
                      actionTypeId: "STYLE_FILTER",
                      config: {
                        delay: 100,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-text-5",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913a",
                          ],
                        },
                        filters: [
                          {
                            type: "invert",
                            filterId: "08dd",
                            value: 0,
                            unit: "%",
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-8-n-3",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-8-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".button-hover-circle-2",
                          selectorGuids: [
                            "a29c9855-e942-9a28-ba97-60865b64913c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17c004f5a1e,
            },
            "a-9": {
              id: "a-9",
              title: "Grow 1.5 - 50%",
              continuousParameterGroups: [
                {
                  id: "a-9-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-9-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "607f90ad3127fde21b537173|1f8083f4-8a06-29b8-d96e-71cb2c096475",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-9-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "607f90ad3127fde21b537173|1f8083f4-8a06-29b8-d96e-71cb2c096475",
                            },
                            xValue: 1.5,
                            yValue: 1.5,
                            locked: !0,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1794488b33e,
            },
            "a-13": {
              id: "a-13",
              title: "Fade In & Skew",
              continuousParameterGroups: [
                {
                  id: "a-13-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 10,
                      actionItems: [
                        {
                          id: "a-13-n",
                          actionTypeId: "TRANSFORM_SKEW",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "634eded21ef9a98da27ff866|d6fbd00b-4571-6fbd-9b53-aeda01b9531a",
                            },
                            xValue: 2,
                            yValue: 2,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-13-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "634eded21ef9a98da27ff866|d6fbd00b-4571-6fbd-9b53-aeda01b9531a",
                            },
                            xValue: 44,
                            yValue: 3,
                            zValue: -10,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "deg",
                          },
                        },
                        {
                          id: "a-13-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "634eded21ef9a98da27ff866|d6fbd00b-4571-6fbd-9b53-aeda01b9531a",
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 35,
                      actionItems: [
                        {
                          id: "a-13-n-4",
                          actionTypeId: "TRANSFORM_SKEW",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "634eded21ef9a98da27ff866|d6fbd00b-4571-6fbd-9b53-aeda01b9531a",
                            },
                            xValue: 0,
                            yValue: 0,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-13-n-5",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "634eded21ef9a98da27ff866|d6fbd00b-4571-6fbd-9b53-aeda01b9531a",
                            },
                            xValue: 0,
                            yValue: 0,
                            zValue: 0,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "deg",
                          },
                        },
                        {
                          id: "a-13-n-6",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "634eded21ef9a98da27ff866|d6fbd00b-4571-6fbd-9b53-aeda01b9531a",
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17c7c393906,
            },
            "a-14": {
              id: "a-14",
              title: "Button on hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-14-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-14-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-3",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-14-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: -48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-14-n-5",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 7,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-14-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-14-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        yValue: 48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-14-n-9",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-10",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-14-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17977256c01,
            },
            "a-15": {
              id: "a-15",
              title: "Button hover out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-15-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: -48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-15-n-2",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 7,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-15-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-15-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        yValue: 48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-15-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-7",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-15-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17977256c01,
            },
            "a-16": {
              id: "a-16",
              title: "Underline grow on hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-16-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-16-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "flex",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-16-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 1e3,
                        target: {},
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17967b60033,
            },
            "a-17": {
              id: "a-17",
              title: "Underline shrink hover out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-17-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 800,
                        target: {},
                        xValue: 100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-17-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-17-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17967b60033,
            },
            "a-20": {
              id: "a-20",
              title: "Button on hover 6",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-20-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-20-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-20-n-3",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-20-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: -48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-20-n-5",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 7,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-20-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-20-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-20-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        yValue: 48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-20-n-9",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-20-n-10",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-20-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17977256c01,
            },
            "a-21": {
              id: "a-21",
              title: "Button hover out 12",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-21-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: -48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-21-n-2",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 7,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-21-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-21-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-21-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        yValue: 48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-21-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-21-n-7",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-21-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17977256c01,
            },
            "a-22": {
              id: "a-22",
              title: "Button on hover 7",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-22-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-22-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-22-n-3",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-22-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: -48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-22-n-5",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 7,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-22-n-6",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 0.95,
                        yValue: 0.95,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-22-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-22-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        yValue: 48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-22-n-9",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-22-n-10",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-22-n-11",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17977256c01,
            },
            "a-23": {
              id: "a-23",
              title: "Button hover out 13",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-23-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: -48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-23-n-2",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 7,
                        xUnit: "deg",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-23-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {
                          useEventTarget: !0,
                          id: "60ad92ba62143657d9593d5e|2de0c92b-51c5-2305-1687-f7ca5a4bbcbb",
                        },
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-23-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-23-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        yValue: 48,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-23-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-23-n-7",
                      actionTypeId: "TRANSFORM_SKEW",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                    {
                      id: "a-23-n-8",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17977256c01,
            },
            "a-26": {
              id: "a-26",
              title: "Button on hover 8",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-26-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-26-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 0,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-26-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-26-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuint",
                        duration: 900,
                        target: {},
                        xValue: 100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-26-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-26-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 100,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        xValue: 100,
                        yValue: -100,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x185b73aa57a,
            },
            "a-27": {
              id: "a-27",
              title: "Button out hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-27-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 0,
                        target: {},
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-27-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-27-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 100,
                        easing: "outExpo",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 0,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x185b73aa57a,
            },
            "a-28": {
              id: "a-28",
              title: "Button on hover 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-28-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-28-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 0,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-28-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-28-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuint",
                        duration: 900,
                        target: {},
                        xValue: 100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-28-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-28-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 100,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        xValue: 100,
                        yValue: -100,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x185b73aa57a,
            },
            "a-29": {
              id: "a-29",
              title: "Button out hover 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-29-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 0,
                        target: {},
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-29-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-29-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 100,
                        easing: "outExpo",
                        duration: 500,
                        target: {},
                        xValue: 0,
                        yValue: 0,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x185b73aa57a,
            },
            "a-32": {
              id: "a-32",
              title: "Arrow hover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-32-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-32-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: -24,
                        xUnit: "px",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-32-n-3",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-32-n-4",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-32-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "inOutQuad",
                        duration: 600,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-32-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuad",
                        duration: 600,
                        target: {},
                        xValue: 0,
                        xUnit: "px",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x179c7de9431,
            },
            "a-33": {
              id: "a-33",
              title: "Arrow hover out",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-33-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 500,
                        target: {},
                        xValue: 100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-33-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-33-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-33-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        xValue: -24,
                        xUnit: "px",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x179c7de9431,
            },
            "a-34": {
              id: "a-34",
              title: "Show hover cover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-34-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-34-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17c61a73b98,
            },
            "a-35": {
              id: "a-35",
              title: "Hide hover cover",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-35-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuad",
                        duration: 500,
                        target: {},
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17c61a73b98,
            },
            "a-39": {
              id: "a-39",
              title: "BG Image Grow",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-39-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutSine",
                        duration: 1200,
                        target: {},
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-39-n-2",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutSine",
                        duration: 1200,
                        target: {},
                        xValue: 1.1,
                        yValue: 1.1,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x18c35cc230e,
            },
            "a-38": {
              id: "a-38",
              title: "BG Image Shrink",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-38-n",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "inOutSine",
                        duration: 1200,
                        target: {},
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x18c35cc230e,
            },
            "a-43": {
              id: "a-43",
              title: "Item Fade Out & Up - 80",
              continuousParameterGroups: [
                {
                  id: "a-43-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 80,
                      actionItems: [
                        {
                          id: "a-43-n",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "easeInOut",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "5e18a3d088b6fc9ebeb79372|819de553-9b32-e950-22c4-07dba546f526",
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                        {
                          id: "a-43-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "easeInOut",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "5e18a3d088b6fc9ebeb79372|819de553-9b32-e950-22c4-07dba546f526",
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-43-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "easeInOut",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "5e18a3d088b6fc9ebeb79372|819de553-9b32-e950-22c4-07dba546f526",
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                        {
                          id: "a-43-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "easeInOut",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "5e18a3d088b6fc9ebeb79372|819de553-9b32-e950-22c4-07dba546f526",
                            },
                            yValue: -20,
                            xUnit: "PX",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x1655e59c93c,
            },
            "a-36": {
              id: "a-36",
              title: "Grow Item - 50+",
              continuousParameterGroups: [
                {
                  id: "a-36-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-36-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "inSine",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "5e18a3d088b6fc9ebeb79372|819de553-9b32-e950-22c4-07dba546f526",
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-36-n-2",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "outSine",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "5e18a3d088b6fc9ebeb79372|819de553-9b32-e950-22c4-07dba546f526",
                            },
                            xValue: 1.3,
                            yValue: 1.3,
                            locked: !0,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x164ceb6bba7,
            },
            "a-46": {
              id: "a-46",
              title: "Image Reveal 6",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-46-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1500,
                        target: {},
                        xValue: -101,
                        yValue: null,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-46-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-46-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: -3,
                        yValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-46-n-4",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: 1.3,
                        yValue: 1.3,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-46-n-5",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-46-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 800,
                        target: {},
                        xValue: 0,
                        yValue: null,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-46-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1e3,
                        target: {},
                        xValue: 101,
                        yValue: null,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-46-n-8",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 2e3,
                        target: {},
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-46-n-9",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-46-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 2e3,
                        target: {},
                        xValue: 0,
                        yValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17f9ccc8d6f,
            },
            "a-48": {
              id: "a-48",
              title: "Parallax Animation 5",
              continuousParameterGroups: [
                {
                  id: "a-48-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-48-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: -7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-48-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: 7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18342c78977,
            },
            "a-47": {
              id: "a-47",
              title: "Parallax Animation",
              continuousParameterGroups: [
                {
                  id: "a-47-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-47-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: -7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-47-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: 7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18342c78977,
            },
            "a-55": {
              id: "a-55",
              title: "Parallax Animation 4",
              continuousParameterGroups: [
                {
                  id: "a-55-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-55-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: -7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-55-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: 7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18342c78977,
            },
            "a-53": {
              id: "a-53",
              title: "Parallax Animation 2",
              continuousParameterGroups: [
                {
                  id: "a-53-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-53-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: -7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-53-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: 7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18342c78977,
            },
            "a-51": {
              id: "a-51",
              title: "Image Reveal",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-51-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-51-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                    {
                      id: "a-51-n-3",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: 1.3,
                        yValue: 1.3,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-51-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1500,
                        target: {},
                        xValue: null,
                        yValue: -101,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-51-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1e3,
                        target: {},
                        xValue: null,
                        yValue: 0,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-51-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1e3,
                        target: {},
                        xValue: null,
                        yValue: 101,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-51-n-7",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 4e3,
                        target: {},
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-51-n-8",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17f9ccc8d6f,
            },
            "a-54": {
              id: "a-54",
              title: "Parallax Animation 3",
              continuousParameterGroups: [
                {
                  id: "a-54-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-54-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: -7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-54-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: 7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18342c78977,
            },
            "a-52": {
              id: "a-52",
              title: "Parallax Animation 6",
              continuousParameterGroups: [
                {
                  id: "a-52-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-52-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: -7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-52-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: 7,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18342c78977,
            },
            "a-56": {
              id: "a-56",
              title: "Hero IMG Animation",
              continuousParameterGroups: [
                {
                  id: "a-56-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 55,
                      actionItems: [
                        {
                          id: "a-56-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "68ded219924add9fe466243a|4f47ad05-77af-7c86-451e-6ad31198b1f2",
                            },
                            xValue: 1.05,
                            yValue: 1.05,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-56-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "68ded219924add9fe466243a|4f47ad05-77af-7c86-451e-6ad31198b1f2",
                            },
                            xValue: -2,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-56-n-3",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "inOutExpo",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "68ded219924add9fe466243a|4f47ad05-77af-7c86-451e-6ad31198b1f2",
                            },
                            xValue: 1.05,
                            yValue: 1.05,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-56-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "inOutExpo",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "68ded219924add9fe466243a|4f47ad05-77af-7c86-451e-6ad31198b1f2",
                            },
                            xValue: 2,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x190713f273e,
            },
            "a-64": {
              id: "a-64",
              title: "Accordion Open",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-64-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-64-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        yValue: 50,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-64-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-64-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-64-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-64-n-6",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 1200,
                        target: {},
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-64-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 1200,
                        target: {},
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-64-n-8",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 1200,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-64-n-9",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        zValue: 180,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-64-n-10",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 300,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x176e12679b1,
            },
            "a-62": {
              id: "a-62",
              title: "Accordion Close",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-62-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 600,
                        target: {},
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-62-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 1200,
                        target: {},
                        yValue: 50,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-62-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outExpo",
                        duration: 1200,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-62-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-62-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 350,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x176e12679b1,
            },
            "a-58": {
              id: "a-58",
              title: "Image Reveal 7",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-58-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1500,
                        target: {},
                        xValue: -101,
                        yValue: null,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-58-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-58-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: -3,
                        yValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-58-n-4",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {},
                        xValue: 1.3,
                        yValue: 1.3,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-58-n-5",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-58-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 800,
                        target: {},
                        xValue: 0,
                        yValue: null,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-58-n-7",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutCirc",
                        duration: 1e3,
                        target: {},
                        xValue: 101,
                        yValue: null,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-58-n-8",
                      actionTypeId: "TRANSFORM_SCALE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 2e3,
                        target: {},
                        xValue: 1,
                        yValue: 1,
                        locked: !0,
                      },
                    },
                    {
                      id: "a-58-n-9",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "block",
                      },
                    },
                    {
                      id: "a-58-n-10",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outCirc",
                        duration: 2e3,
                        target: {},
                        xValue: 0,
                        yValue: null,
                        xUnit: "em",
                        yUnit: "em",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17f9ccc8d6f,
            },
            "a-67": {
              id: "a-67",
              title: "Roate Leaves BG subtle",
              continuousParameterGroups: [
                {
                  id: "a-67-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-67-n",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            zValue: -1,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "deg",
                          },
                        },
                        {
                          id: "a-67-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            zValue: -1,
                            xUnit: "DEG",
                            yUnit: "DEG",
                            zUnit: "deg",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-67-n-3",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: null,
                            zValue: 1,
                            xUnit: "DEG",
                            yUnit: "deg",
                            zUnit: "deg",
                          },
                        },
                        {
                          id: "a-67-n-4",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {},
                            yValue: null,
                            zValue: 1,
                            xUnit: "DEG",
                            yUnit: "deg",
                            zUnit: "deg",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-67-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-67-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68ded219924add9fe466243a|9ff2c50f-e968-9f4d-0b9c-3b0e589deb77",
                            },
                            yValue: -3,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-67-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68ded219924add9fe466243a|9ff2c50f-e968-9f4d-0b9c-3b0e589deb78",
                            },
                            yValue: -3,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-67-n-7",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68ded219924add9fe466243a|9ff2c50f-e968-9f4d-0b9c-3b0e589deb77",
                            },
                            yValue: 3,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-67-n-8",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              id: "68ded219924add9fe466243a|9ff2c50f-e968-9f4d-0b9c-3b0e589deb78",
                            },
                            yValue: 3,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x19691be9fe9,
            },
            "a-82": {
              id: "a-82",
              title: "txt-hover-on",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-82-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "swingTo",
                        duration: 1e3,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".txt",
                          selectorGuids: [
                            "3a60fc49-f9c9-595b-5c57-819c4ea088a9",
                          ],
                        },
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-82-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "swingTo",
                        duration: 1e3,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".txt",
                          selectorGuids: [
                            "3a60fc49-f9c9-595b-5c57-819c4ea088a9",
                          ],
                        },
                        yValue: 180,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x18ea4200eb1,
            },
            "a-83": {
              id: "a-83",
              title: "txt-hover-off",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-83-n",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "swingTo",
                        duration: 1e3,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".txt",
                          selectorGuids: [
                            "3a60fc49-f9c9-595b-5c57-819c4ea088a9",
                          ],
                        },
                        yValue: 0,
                        xUnit: "DEG",
                        yUnit: "deg",
                        zUnit: "DEG",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x18ea4200eb1,
            },
            "a-81": {
              id: "a-81",
              title: "Hero Rocket Movement",
              continuousParameterGroups: [
                {
                  id: "a-81-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 50,
                      actionItems: [
                        {
                          id: "a-81-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".hero-decor",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088aa",
                              ],
                            },
                            xValue: 0,
                            yValue: 0,
                            xUnit: "rem",
                            yUnit: "rem",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-81-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              selector: ".hero-decor",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088aa",
                              ],
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 90,
                      actionItems: [
                        {
                          id: "a-81-n-3",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              selector: ".hero-decor",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088aa",
                              ],
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-81-n-4",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "inOutCubic",
                            duration: 500,
                            target: {
                              selector: ".hero-decor",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088aa",
                              ],
                            },
                            xValue: 100,
                            yValue: -100,
                            xUnit: "rem",
                            yUnit: "rem",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x198627a6f50,
            },
            "a-86": {
              id: "a-86",
              title: "Fade Up Nice  Short",
              continuousParameterGroups: [
                {
                  id: "a-86-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-86-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "61d39b26eed184c1777e41f7|5018a62d-76c9-9b79-e637-eba824af586d",
                            },
                            yValue: 40,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-86-n-2",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "61d39b26eed184c1777e41f7|5018a62d-76c9-9b79-e637-eba824af586d",
                            },
                            value: 0,
                            unit: "",
                          },
                        },
                        {
                          id: "a-86-n-3",
                          actionTypeId: "TRANSFORM_SKEW",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "61d39b26eed184c1777e41f7|5018a62d-76c9-9b79-e637-eba824af586d",
                            },
                            xValue: null,
                            yValue: -6,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 19,
                      actionItems: [
                        {
                          id: "a-86-n-4",
                          actionTypeId: "STYLE_OPACITY",
                          config: {
                            delay: 0,
                            easing: "outQuad",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "61d39b26eed184c1777e41f7|5018a62d-76c9-9b79-e637-eba824af586d",
                            },
                            value: 1,
                            unit: "",
                          },
                        },
                        {
                          id: "a-86-n-5",
                          actionTypeId: "TRANSFORM_SKEW",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "61d39b26eed184c1777e41f7|5018a62d-76c9-9b79-e637-eba824af586d",
                            },
                            xValue: null,
                            yValue: 0,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 25,
                      actionItems: [
                        {
                          id: "a-86-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "outQuad",
                            duration: 500,
                            target: {
                              useEventTarget: !0,
                              id: "61d39b26eed184c1777e41f7|5018a62d-76c9-9b79-e637-eba824af586d",
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "px",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17da53fd769,
            },
            "a-85": {
              id: "a-85",
              title: "3D Trigger For Text",
              continuousParameterGroups: [
                {
                  id: "a-85-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-85-n",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            xValue: -3,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-85-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            xValue: null,
                            yValue: -12,
                            xUnit: "deg",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-85-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            xValue: 3,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-85-n-4",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            yValue: 12,
                            xUnit: "DEG",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-85-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-85-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            yValue: -3,
                            xUnit: "PX",
                            yUnit: "rem",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-85-n-6",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            xValue: 12,
                            xUnit: "deg",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-85-n-7",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            yValue: 3,
                            xUnit: "PX",
                            yUnit: "rem",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-85-n-8",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: "._3d-text",
                              selectorGuids: [
                                "62dc2696-3219-83b2-b4d5-0a3888573faa",
                              ],
                            },
                            xValue: -12,
                            xUnit: "deg",
                            yUnit: "DEG",
                            zUnit: "DEG",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x17fa71b5531,
            },
            "a-91": {
              id: "a-91",
              title: "Stars BG",
              continuousParameterGroups: [
                {
                  id: "a-91-p",
                  type: "MOUSE_X",
                  parameterLabel: "Mouse X",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-91-n",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            yValue: -10,
                            xUnit: "DEG",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-91-n-5",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            xValue: 1.5,
                            yValue: 1.5,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-91-n-7",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            yValue: 11,
                            xUnit: "PX",
                            yUnit: "rem",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-91-n-2",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            yValue: 2,
                            xUnit: "DEG",
                            yUnit: "deg",
                            zUnit: "DEG",
                          },
                        },
                        {
                          id: "a-91-n-6",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            xValue: 1.5,
                            yValue: 1.5,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-91-n-8",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            yValue: 11,
                            xUnit: "PX",
                            yUnit: "rem",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "a-91-p-2",
                  type: "MOUSE_Y",
                  parameterLabel: "Mouse Y",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-91-n-3",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            xValue: null,
                            zValue: -5,
                            xUnit: "deg",
                            yUnit: "DEG",
                            zUnit: "deg",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-91-n-4",
                          actionTypeId: "TRANSFORM_ROTATE",
                          config: {
                            delay: 0,
                            easing: "ease",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".bg-grid-img",
                              selectorGuids: [
                                "3a60fc49-f9c9-595b-5c57-819c4ea088ac",
                              ],
                            },
                            xValue: null,
                            zValue: 5,
                            xUnit: "deg",
                            yUnit: "DEG",
                            zUnit: "deg",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x168da1985b5,
            },
            slideInBottom: {
              id: "slideInBottom",
              useFirstGroupAsInitialState: !0,
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 0,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        duration: 0,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        xValue: 0,
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                    {
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "outQuart",
                        duration: 1e3,
                        target: {
                          id: "N/A",
                          appliesTo: "TRIGGER_ELEMENT",
                          useEventTarget: !0,
                        },
                        value: 1,
                      },
                    },
                  ],
                },
              ],
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        });
      },
      3054: function (e, t, n) {
        n(9461),
          n(7624),
          n(286),
          n(8334),
          n(2338),
          n(3695),
          n(322),
          n(941),
          n(5134),
          n(4345),
          n(4732);
      },
    },
    t = {};
  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var o = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a](o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (n.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      n.O = (t, a, i, o) => {
        if (a) {
          o = o || 0;
          for (var r = e.length; r > 0 && e[r - 1][2] > o; r--) e[r] = e[r - 1];
          e[r] = [a, i, o];
          return;
        }
        for (var d = 1 / 0, r = 0; r < e.length; r++) {
          for (var [a, i, o] = e[r], l = !0, c = 0; c < a.length; c++)
            (!1 & o || d >= o) && Object.keys(n.O).every((e) => n.O[e](a[c]))
              ? a.splice(c--, 1)
              : ((l = !1), o < d && (d = o));
          if (l) {
            e.splice(r--, 1);
            var u = i();
            void 0 !== u && (t = u);
          }
        }
        return t;
      };
    })(),
    (n.rv = () => "1.3.9"),
    (() => {
      var e = { 862: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, a) => {
          var i,
            o,
            [r, d, l] = a,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (i in d) n.o(d, i) && (n.m[i] = d[i]);
            if (l) var u = l(n);
          }
          for (t && t(a); c < r.length; c++)
            (o = r[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(u);
        },
        a = (self.webpackChunk = self.webpackChunk || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (n.ruid = "bundler=rspack@1.3.9");
  var a = n.O(void 0, ["87", "985"], function () {
    return n(3054);
  });
  a = n.O(a);
})();
